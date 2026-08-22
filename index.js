const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text({ type: 'text/csv' }));

let db;
try {
  db = JSON.parse(JSON.stringify(require('../src/initial_data.json')));
} catch (e) {
  db = { users: [], budgets: [], incomes: [], financial_goals: [], transactions: [] };
}

let keywordRules;
try {
  keywordRules = require('../src/keyword_rules.json');
} catch (e) {
  keywordRules = [];
}

if (!db.users) db.users = [];

function saveDb() {
  // In serverless environment, in-memory state is preserved across hot lambda invocations
}

function getAuthUserId(req) {
  const authHeader = req.headers['authorization'];
  let targetUserId = 'usr_admin_zidanmuzaki13';

  if (req.query.user_id) {
    targetUserId = req.query.user_id;
  } else if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    if (token.startsWith('usr_')) {
      targetUserId = token;
    } else if (token.startsWith('jwt_')) {
      try {
        const json = Buffer.from(token.substring(4), 'base64').toString('utf8');
        const payload = JSON.parse(json);
        if (payload.user_id) targetUserId = payload.user_id;
      } catch (e) {}
    }
  }

  const u = db.users.find(user => user.user_id === targetUserId);
  return u ? u.user_id : 'usr_admin_zidanmuzaki13';
}

function getTotalDaysInMonth(year, monthName) {
  const monthMap = {
    'januari': 1, 'februari': 2, 'maret': 3, 'april': 4,
    'mei': 5, 'juni': 6, 'juli': 7, 'agustus': 8,
    'september': 9, 'oktober': 10, 'november': 11, 'desember': 12,
    'january': 1, 'february': 2, 'march': 3, 'may': 5,
    'june': 6, 'july': 7, 'august': 8, 'october': 10, 'december': 12
  };
  const m = monthMap[monthName.toLowerCase()] || 2;
  return new Date(year, m, 0).getDate();
}

function triggerUserOnboarding(userId) {
  const defaultCategories = [
    { name: "Makan & Minum", cat: "Dasar", freq: "Harian", timing: "Rata-rata Harian (Flat)", mult: 30 },
    { name: "Sewa Kos / Hunian", cat: "Dasar", freq: "Bulanan", timing: "Tanggal Spesifik (Tgl 5)", mult: 1 },
    { name: "Listrik, Air & Gas", cat: "Dasar", freq: "Bulanan", timing: "Tanggal Spesifik (Tgl 10)", mult: 1 },
    { name: "Paket Data & Pulsa", cat: "Dasar", freq: "Bulanan", timing: "Tanggal Spesifik (Tgl 1)", mult: 1 },
    { name: "Transportasi Harian", cat: "Dasar", freq: "Mingguan", timing: "Rata-rata Harian (Flat)", mult: 4 },
    { name: "Kebutuhan Pribadi & Skincare", cat: "Pribadi", freq: "Bulanan", timing: "Fleksibel / Sesuai Kebutuhan", mult: 1 },
    { name: "Laundry & Kebersihan", cat: "Pribadi", freq: "Mingguan", timing: "Hari Tertentu Tiap Minggu (Senin)", mult: 4 },
    { name: "Jajan & Nongkrong", cat: "Hiburan", freq: "Mingguan", timing: "Hari Tertentu Tiap Minggu (Weekend)", mult: 4 },
    { name: "Langganan Streaming / App", cat: "Hiburan", freq: "Bulanan", timing: "Tanggal Spesifik (Tgl 15)", mult: 1 },
    { name: "Dana Darurat / Tabungan", cat: "Alokasi Surplus", freq: "Bulanan", timing: "Tanggal Spesifik (Tgl 25)", mult: 1 }
  ];

  defaultCategories.forEach(item => {
    db.budgets.push({
      budget_id: uuidv4(),
      user_id: userId,
      period_month: "Agustus",
      period_year: 2026,
      category_type: item.cat,
      item_name: item.name,
      nominal_satuan: 0.0,
      frekuensi: item.freq,
      multiplier: item.mult,
      target_anggaran: 0.0,
      realisasi_used: 0.0,
      timing_pattern: item.timing,
      linked_goal_id: null,
      notes: "Template Onboarding Kategori Standar"
    });
  });

  saveDb();
}

// -----------------------------------------------------------------------------
// AUTH ENDPOINTS
// -----------------------------------------------------------------------------
app.post(['/auth/login', '/api/auth/login'], (req, res) => {
  const loginId = (req.body.email || req.body.username || '').trim().toLowerCase();
  const password = req.body.password;

  const user = db.users.find(u => 
    (u.email.toLowerCase() === loginId || u.username.toLowerCase() === loginId) && 
    u.password_hash === password
  );

  if (user) {
    const payload = {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 7 * 86400
    };
    const token = 'jwt_' + Buffer.from(JSON.stringify(payload)).toString('base64');
    res.json({
      status: 'SUCCESS',
      message: 'Login berhasil',
      token,
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } else {
    res.status(401).json({ status: 'ERROR', message: 'Email/Username atau Password salah!' });
  }
});

app.post(['/auth/register', '/api/auth/register'], (req, res) => {
  const username = (req.body.username || '').trim();
  const email = (req.body.email || '').trim().toLowerCase();
  const password = (req.body.password || '').trim();

  if (!username || !email || !password) {
    return res.status(400).json({ status: 'ERROR', message: 'Semua field wajib diisi' });
  }

  const existing = db.users.find(u => u.email.toLowerCase() === email || u.username.toLowerCase() === username.toLowerCase());
  if (existing) {
    return res.status(400).json({ status: 'ERROR', message: 'Email atau Username sudah terdaftar!' });
  }

  const newUserId = 'usr_' + uuidv4().substring(0, 8);
  const newUser = {
    user_id: newUserId,
    username,
    email,
    password_hash: password,
    role: 'user',
    created_at: new Date().toISOString()
  };

  db.users.push(newUser);
  saveDb();

  triggerUserOnboarding(newUserId);

  const payload = {
    user_id: newUser.user_id,
    username: newUser.username,
    email: newUser.email,
    role: newUser.role,
    exp: Math.floor(Date.now() / 1000) + 7 * 86400
  };
  const token = 'jwt_' + Buffer.from(JSON.stringify(payload)).toString('base64');

  res.json({
    status: 'SUCCESS',
    message: 'Registrasi berhasil! Akun Anda telah siap dengan kanvas data bersih.',
    token,
    user: {
      user_id: newUser.user_id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
    }
  });
});

app.get(['/auth/me', '/api/auth/me'], (req, res) => {
  const userId = getAuthUserId(req);
  const user = db.users.find(u => u.user_id === userId);
  if (user) {
    res.json({
      status: 'SUCCESS',
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } else {
    res.status(404).json({ status: 'ERROR', message: 'User not found' });
  }
});

// -----------------------------------------------------------------------------
// ADMIN PANEL ROUTES
// -----------------------------------------------------------------------------
app.use(['/admin', '/api/admin'], (req, res, next) => {
  const userId = getAuthUserId(req);
  const user = db.users.find(u => u.user_id === userId);
  if (!user || user.email.toLowerCase() !== 'zidanmuzaki2002@gmail.com') {
    return res.status(403).json({
      status: 'FORBIDDEN',
      message: 'Akses Ditolak: Rute ini khusus Administrator (zidanmuzaki2002@gmail.com).'
    });
  }
  next();
});

app.get(['/admin/stats', '/api/admin/stats'], (req, res) => {
  res.json({
    status: 'SUCCESS',
    stats: {
      total_users: db.users.length,
      total_budgets: db.budgets.length,
      total_incomes: db.incomes.length,
      total_transactions: db.transactions.length,
      system_mode: 'Production Multi-Tenant'
    }
  });
});

app.get(['/admin/users', '/api/admin/users'], (req, res) => {
  const userList = db.users.map(u => ({
    user_id: u.user_id,
    username: u.username,
    email: u.email,
    role: u.role,
    created_at: u.created_at
  }));
  res.json({ status: 'SUCCESS', count: userList.length, users: userList });
});

// -----------------------------------------------------------------------------
// ENDPOINT: /calculate-ideal-balance
// -----------------------------------------------------------------------------
app.all(['/calculate-ideal-balance', '/api/calculate-ideal-balance'], (req, res) => {
  try {
    const userId = getAuthUserId(req);
    const params = req.method === 'POST' ? req.body : req.query;
    const month = params.period_month || 'Agustus';
    const year = parseInt(params.period_year) || 2026;
    const totalDays = getTotalDaysInMonth(year, month);
    let currentDay = parseInt(params.current_day) || new Date().getDate();
    if (currentDay > totalDays) currentDay = totalDays;
    if (currentDay < 1) currentDay = 1;

    const incomes = db.incomes.filter(i => i.user_id === userId && i.period_month === month && i.period_year === year);
    const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount), 0);

    const budgets = db.budgets.filter(b => b.user_id === userId && b.period_month === month && b.period_year === year);

    let totalBulanan = 0;
    let totalHarianMingguan = 0;
    let totalRealisasiUsed = 0;
    let proportionalBurn = 0;

    const bulananItems = [];
    const variableItems = [];
    const timeRatio = currentDay / totalDays;

    budgets.forEach(b => {
      const target = Number(b.target_anggaran);
      const used = Number(b.realisasi_used);
      totalRealisasiUsed += used;

      if (b.frekuensi === 'Bulanan') {
        totalBulanan += target;
        bulananItems.push({
          item_name: b.item_name,
          category: b.category_type,
          frekuensi: b.frekuensi,
          target_anggaran: target,
          realisasi_used: used,
          balance: target - used
        });
      } else {
        totalHarianMingguan += target;
        const itemBurn = target * timeRatio;
        proportionalBurn += itemBurn;
        variableItems.push({
          item_name: b.item_name,
          category: b.category_type,
          frekuensi: b.frekuensi,
          multiplier: b.multiplier,
          target_anggaran: target,
          realisasi_used: used,
          balance: target - used
        });
      }
    });

    const proyeksiSaldoIdeal = totalIncome - totalBulanan - proportionalBurn;
    const actualCurrentBalance = totalIncome - totalRealisasiUsed;
    const variance = actualCurrentBalance - proyeksiSaldoIdeal;

    res.json({
      status: 'SUCCESS',
      user_id: userId,
      period: {
        month,
        year,
        month_status: 'CURRENT_PROJECTION',
        current_day: currentDay,
        total_days_in_month: totalDays,
        time_elapsed_ratio: Number(timeRatio.toFixed(4)),
        time_elapsed_percentage: `${(timeRatio * 100).toFixed(2)}%`
      },
      calculation_breakdown: {
        total_pendapatan: totalIncome,
        total_target_bulanan_100pct: totalBulanan,
        sisa_setelah_kebutuhan_bulanan: totalIncome - totalBulanan,
        total_target_harian_mingguan: totalHarianMingguan,
        proportional_burn_rate_variable: Number(proportionalBurn.toFixed(2)),
        proyeksi_saldo_ideal: Number(proyeksiSaldoIdeal.toFixed(2))
      },
      actual_vs_ideal_comparison: {
        total_realisasi_used_to_date: totalRealisasiUsed,
        actual_current_balance: actualCurrentBalance,
        proyeksi_saldo_ideal: Number(proyeksiSaldoIdeal.toFixed(2)),
        variance: Number(variance.toFixed(2)),
        burn_health_status: variance >= 0 ? 'HEMAT' : 'OVERBUDGET'
      },
      budget_details: {
        bulanan_count: bulananItems.length,
        variable_count: variableItems.length,
        bulanan_items: bulananItems,
        variable_items: variableItems
      }
    });
  } catch (err) {
    res.status(500).json({ status: 'ERROR', message: err.message });
  }
});

// -----------------------------------------------------------------------------
// CRUD ENDPOINTS
// -----------------------------------------------------------------------------
app.get(['/budgets', '/api/budgets'], (req, res) => {
  const userId = getAuthUserId(req);
  const month = req.query.period_month || 'Agustus';
  const year = parseInt(req.query.period_year) || 2026;
  const list = db.budgets
    .filter(b => b.user_id === userId && b.period_month === month && b.period_year === year)
    .map(b => ({
      ...b,
      balance: Number(b.target_anggaran) - Number(b.realisasi_used)
    }));
  res.json({ status: 'SUCCESS', count: list.length, budgets: list });
});

app.post(['/budgets', '/api/budgets'], (req, res) => {
  const userId = getAuthUserId(req);
  const satuan = Number(req.body.nominal_satuan) || 0;
  const mult = Number(req.body.multiplier) || 1;
  const target = Number(req.body.target_anggaran) || (satuan * mult);
  const item = {
    budget_id: uuidv4(),
    user_id: userId,
    period_month: req.body.period_month || 'Agustus',
    period_year: Number(req.body.period_year) || 2026,
    category_type: req.body.category_type || 'Dasar',
    item_name: req.body.item_name,
    nominal_satuan: satuan,
    frekuensi: req.body.frekuensi || 'Bulanan',
    multiplier: mult,
    target_anggaran: target,
    realisasi_used: 0.0,
    timing_pattern: req.body.timing_pattern || 'Rata-rata Harian (Flat)',
    linked_goal_id: req.body.linked_goal_id || null,
    notes: req.body.notes || ''
  };
  db.budgets.push(item);
  saveDb();
  res.json({ status: 'SUCCESS', message: 'Budget created', item });
});

app.delete(['/budgets', '/api/budgets'], (req, res) => {
  const userId = getAuthUserId(req);
  const budgetId = req.query.budget_id;
  db.budgets = db.budgets.filter(b => !(b.user_id === userId && b.budget_id === budgetId));
  saveDb();
  res.json({ status: 'SUCCESS', message: 'Budget deleted' });
});

app.get(['/incomes', '/api/incomes'], (req, res) => {
  const userId = getAuthUserId(req);
  const month = req.query.period_month || 'Agustus';
  const year = parseInt(req.query.period_year) || 2026;
  const list = db.incomes.filter(i => i.user_id === userId && i.period_month === month && i.period_year === year);
  res.json({ status: 'SUCCESS', count: list.length, incomes: list });
});

app.post(['/incomes', '/api/incomes'], (req, res) => {
  const userId = getAuthUserId(req);
  const inc = {
    income_id: uuidv4(),
    user_id: userId,
    period_month: req.body.period_month || 'Agustus',
    period_year: Number(req.body.period_year) || 2026,
    source_name: req.body.source_name,
    amount: Number(req.body.amount) || 0
  };
  db.incomes.push(inc);
  saveDb();
  res.json({ status: 'SUCCESS', message: 'Income added', income: inc });
});

app.delete(['/incomes', '/api/incomes'], (req, res) => {
  const userId = getAuthUserId(req);
  const incomeId = req.query.income_id;
  db.incomes = db.incomes.filter(i => !(i.user_id === userId && i.income_id === incomeId));
  saveDb();
  res.json({ status: 'SUCCESS', message: 'Income deleted' });
});

app.get(['/financial-goals', '/api/financial-goals'], (req, res) => {
  const userId = getAuthUserId(req);
  const list = db.financial_goals.filter(g => g.user_id === userId);
  res.json({ status: 'SUCCESS', count: list.length, goals: list });
});

app.post(['/financial-goals', '/api/financial-goals'], (req, res) => {
  const userId = getAuthUserId(req);
  const g = {
    goal_id: uuidv4(),
    user_id: userId,
    goal_code: req.body.goal_code || 'G1',
    goal_name: req.body.goal_name,
    target_year: req.body.target_year || '2027',
    time_frame: req.body.time_frame || `Tahun ${req.body.target_year || '2027'}`,
    target_amount: Number(req.body.target_amount) || 0,
    current_amount: Number(req.body.current_amount) || 0,
    target_instrument: req.body.target_instrument || 'Investasi',
    status: 'Active'
  };
  db.financial_goals.push(g);
  saveDb();
  res.json({ status: 'SUCCESS', message: 'Goal added', goal: g });
});

app.get(['/transactions', '/api/transactions'], (req, res) => {
  const userId = getAuthUserId(req);
  const list = db.transactions.filter(t => t.user_id === userId);
  res.json({ status: 'SUCCESS', count: list.length, transactions: list });
});

app.get(['/health', '/api/health'], (req, res) => {
  res.json({ status: 'OK', active_users: db.users.length, timestamp: new Date().toISOString() });
});

module.exports = app;

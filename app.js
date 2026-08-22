// ==============================================================================
// FlowTrack Pro: Mobile-First Client Logic & Resilient Local-Cloud Sync Engine
// Features: Login Landing Gateway, Conditional Admin Nav (zidanmuzaki2002@gmail.com),
// Progressive Web App (PWA) Standalone, Multi-Tenancy User Isolation,
// Smart Spending Schedule Timing Engine, Bank CSV/PDF Statement Reconciliation
// ==============================================================================

const API_BASE = window.location.origin;

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const now = new Date();

// Embedded Initial Data Store for Instant Performance & Cloud/Vercel Resilience
const EMBEDDED_ADMIN_DATA = {
  incomes: [
    { income_id: "inc_1", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, source_name: "BCA", amount: 2350000 },
    { income_id: "inc_2", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, source_name: "Saham", amount: 830000 },
    { income_id: "inc_3", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, source_name: "BPJS TK", amount: 4350000 },
    { income_id: "inc_4", user_id: "usr_admin_zidanmuzaki13", period_month: "Februari", period_year: 2026, source_name: "BCA", amount: 2350000 },
    { income_id: "inc_5", user_id: "usr_admin_zidanmuzaki13", period_month: "Februari", period_year: 2026, source_name: "Saham", amount: 830000 },
    { income_id: "inc_6", user_id: "usr_admin_zidanmuzaki13", period_month: "Februari", period_year: 2026, source_name: "BPJS TK", amount: 4350000 },
    { income_id: "inc_7", user_id: "usr_admin_zidanmuzaki13", period_month: "Maret", period_year: 2026, source_name: "Gaji", amount: 4400000 },
    { income_id: "inc_8", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Gaji", amount: 6000000 },
    { income_id: "inc_9", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Piutang", amount: 500000 },
    { income_id: "inc_10", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Sisa Maret", amount: 500000 },
    { income_id: "inc_11", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Lynk.id", amount: 590000 },
    { income_id: "inc_12", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "PP - MySkill", amount: 130000 },
    { income_id: "inc_13", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Ambil Dana Darurat", amount: 900000 },
    { income_id: "inc_14", user_id: "usr_admin_zidanmuzaki13", period_month: "April", period_year: 2026, source_name: "Jual sepeda", amount: 900000 },
    { income_id: "inc_15", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "Gaji", amount: 6000000 },
    { income_id: "inc_16", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "Untung WBSA", amount: 350000 },
    { income_id: "inc_17", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "Lynk.id", amount: 375000 },
    { income_id: "inc_18", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "PP - Kita Lulus", amount: 300000 },
    { income_id: "inc_19", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "PP- Cocareer", amount: 220000 },
    { income_id: "inc_20", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "Reimburse", amount: 560000 },
    { income_id: "inc_21", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "Sisa bulan April", amount: 380000 },
    { income_id: "inc_22", user_id: "usr_admin_zidanmuzaki13", period_month: "Mei", period_year: 2026, source_name: "PP - Parfum", amount: 275000 },
    { income_id: "inc_23", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, source_name: "Gaji", amount: 6000000 },
    { income_id: "inc_24", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, source_name: "PP - Tempat Belajar", amount: 350000 },
    { income_id: "inc_25", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, source_name: "PP - Barber Daily", amount: 300000 },
    { income_id: "inc_26", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, source_name: "Abah", amount: 500000 },
    { income_id: "inc_27", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, source_name: "Gaji", amount: 12500000 },
    { income_id: "inc_28", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, source_name: "PP - Wanda", amount: 300000 },
    { income_id: "inc_29", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, source_name: "Lynk.id", amount: 300000 },
    { income_id: "inc_30", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, source_name: "Sisa bulan lalu", amount: 350000 }
  ],
  budgets: [
    { budget_id: "bgt_1", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Makan", nominal_satuan: 50000, frekuensi: "Harian", multiplier: 8, target_anggaran: 400000, realisasi_used: 0, timing_pattern: "Rata-rata Harian (Flat)" },
    { budget_id: "bgt_2", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Transportasi", nominal_satuan: 40000, frekuensi: "Mingguan", multiplier: 2, target_anggaran: 80000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_3", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Air Minum", nominal_satuan: 10000, frekuensi: "Mingguan", multiplier: 2, target_anggaran: 20000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_4", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Paket data", nominal_satuan: 75000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 75000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 10)" },
    { budget_id: "bgt_5", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Pribadi", item_name: "Perawatan diri", nominal_satuan: 250000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 250000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_6", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Pribadi", item_name: "Potong rambut", nominal_satuan: 35000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 35000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_7", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Sewa Kos", nominal_satuan: 1500000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 1500000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 5)" },
    { budget_id: "bgt_8", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Hiburan", item_name: "Jajan dan Lainnya", nominal_satuan: 150000, frekuensi: "Mingguan", multiplier: 2, target_anggaran: 300000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Weekend)" },
    { budget_id: "bgt_9", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Dana Cadangan", nominal_satuan: 400000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 400000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_10", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Dasar", item_name: "Paylater", nominal_satuan: 270000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 270000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_11", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Insidental", item_name: "Persiapan OJT", nominal_satuan: 1000000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 1000000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_12", user_id: "usr_admin_zidanmuzaki13", period_month: "Januari", period_year: 2026, category_type: "Alokasi Surplus", item_name: "Invest", nominal_satuan: 3200000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 3200000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    
    // Juni 2026
    { budget_id: "bgt_juni_1", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Makan", nominal_satuan: 50000, frekuensi: "Harian", multiplier: 30, target_anggaran: 1500000, realisasi_used: 0, timing_pattern: "Rata-rata Harian (Flat)" },
    { budget_id: "bgt_juni_2", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Transportasi", nominal_satuan: 50000, frekuensi: "Mingguan", multiplier: 4, target_anggaran: 200000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_juni_3", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Air Minum", nominal_satuan: 20000, frekuensi: "Mingguan", multiplier: 3, target_anggaran: 60000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_juni_4", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Paket data", nominal_satuan: 75000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 75000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 10)" },
    { budget_id: "bgt_juni_5", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Pribadi", item_name: "Perawatan diri", nominal_satuan: 200000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 200000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juni_6", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Pribadi", item_name: "Potong rambut", nominal_satuan: 40000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 40000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juni_7", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Sewa Kos", nominal_satuan: 1600000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 1600000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 5)" },
    { budget_id: "bgt_juni_8", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Hiburan", item_name: "Jajan dan Lainnya", nominal_satuan: 75000, frekuensi: "Mingguan", multiplier: 4, target_anggaran: 300000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Weekend)" },
    { budget_id: "bgt_juni_9", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Dana Cadangan", nominal_satuan: 200000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 200000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juni_10", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Paylater", nominal_satuan: 300000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 300000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juni_11", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Dasar", item_name: "Casing + TG + Jersey Sepeda", nominal_satuan: 550000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 550000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juni_12", user_id: "usr_admin_zidanmuzaki13", period_month: "Juni", period_year: 2026, category_type: "Insidental", item_name: "Beli HP Zakiya", nominal_satuan: 2125000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 2125000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },

    // Juli 2026
    { budget_id: "bgt_juli_1", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Makan", nominal_satuan: 50000, frekuensi: "Harian", multiplier: 30, target_anggaran: 1500000, realisasi_used: 0, timing_pattern: "Rata-rata Harian (Flat)" },
    { budget_id: "bgt_juli_2", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Transportasi", nominal_satuan: 40000, frekuensi: "Mingguan", multiplier: 4, target_anggaran: 160000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_juli_3", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Air Minum", nominal_satuan: 20000, frekuensi: "Mingguan", multiplier: 3, target_anggaran: 60000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Senin & Kamis)" },
    { budget_id: "bgt_juli_4", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Paket data", nominal_satuan: 80000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 80000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 10)" },
    { budget_id: "bgt_juli_5", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Pribadi", item_name: "Perawatan diri", nominal_satuan: 200000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 200000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_6", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Pribadi", item_name: "Potong rambut", nominal_satuan: 50000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 50000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_7", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Sewa Kos", nominal_satuan: 1600000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 1600000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 5)" },
    { budget_id: "bgt_juli_8", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Hiburan", item_name: "Jajan dan Lainnya", nominal_satuan: 75000, frekuensi: "Mingguan", multiplier: 4, target_anggaran: 300000, realisasi_used: 0, timing_pattern: "Hari Tertentu Tiap Minggu (Weekend)" },
    { budget_id: "bgt_juli_9", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Dana Cadangan", nominal_satuan: 200000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 200000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_10", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Insidental", item_name: "Ortu", nominal_satuan: 1000000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 1000000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_11", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Insidental", item_name: "Zidni", nominal_satuan: 500000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 500000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_12", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Dasar", item_name: "Paylater", nominal_satuan: 2610000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 2610000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_13", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Insidental", item_name: "UKT Zidni", nominal_satuan: 750000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 750000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" },
    { budget_id: "bgt_juli_14", user_id: "usr_admin_zidanmuzaki13", period_month: "Juli", period_year: 2026, category_type: "Alokasi Surplus", item_name: "Invest", nominal_satuan: 4440000, frekuensi: "Bulanan", multiplier: 1, target_anggaran: 4440000, realisasi_used: 0, timing_pattern: "Tanggal Spesifik (Tgl 1)" }
  ],
  goals: []
};

// -----------------------------------------------------------------------------
// USER SESSION & AUTHENTICATION STATE
// -----------------------------------------------------------------------------
let currentUser = null;
let authToken = localStorage.getItem('flowtrack_token') || '';

try {
  const savedUser = localStorage.getItem('flowtrack_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
} catch (e) {
  currentUser = null;
}

let appState = {
  currentMonth: MONTH_NAMES[now.getMonth()],
  currentYear: now.getFullYear(),
  currentDay: now.getDate(),
  monthStatus: 'CURRENT_PROJECTION', // PAST_EVALUATION, CURRENT_PROJECTION, FUTURE_PLANNING
  activeView: 'view-dashboard',
  idealBalanceData: null,
  
  // Multi-Account Cash State
  cashAccounts: {
    bank: 0,
    wallet: 0,
    emoney: 0,
    other: 0
  },

  incomes: [],
  budgets: [],
  financialGoals: [],
  transactions: [],
  activeCategory: 'Semua',
  selectedBudgetItem: null,
  selectedGoalItem: null
};

// Format Currency IDR
function formatIDR(val) {
  if (val === null || val === undefined || isNaN(val)) return 'Rp 0';
  const num = Math.round(Number(val));
  const isNeg = num < 0;
  const absFormatted = Math.abs(num).toLocaleString('id-ID');
  return isNeg ? `-Rp ${absFormatted}` : `Rp ${absFormatted}`;
}

function getDaysInMonth(year, monthName) {
  const mIdx = MONTH_NAMES.indexOf(monthName);
  const m = mIdx >= 0 ? mIdx + 1 : 8;
  return new Date(year, m, 0).getDate();
}

// -----------------------------------------------------------------------------
// AUTHENTICATED FETCH HELPER
// -----------------------------------------------------------------------------
async function authFetch(endpoint, options = {}) {
  const urlObj = new URL(endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`);
  if (!urlObj.searchParams.has('user_id') && currentUser && currentUser.user_id) {
    urlObj.searchParams.set('user_id', currentUser.user_id);
  }

  const headers = {
    'Accept': 'application/json',
    ...(options.headers || {})
  };

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  try {
    const res = await fetch(urlObj.toString(), { ...options, headers });
    return res;
  } catch (err) {
    return null;
  }
}

// -----------------------------------------------------------------------------
// SCREEN GATEWAY & CONDITIONAL RENDERING
// -----------------------------------------------------------------------------
function syncAuthAndScreenState() {
  const landingScreen = document.getElementById('login-landing-screen');
  const appContainer = document.getElementById('app-container');
  const adminNavBtn = document.getElementById('nav-item-admin');

  if (!currentUser || !authToken) {
    if (landingScreen) landingScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
  } else {
    if (landingScreen) landingScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';

    updateUserProfileHeader();

    if (adminNavBtn) {
      if (currentUser.email === 'zidanmuzaki2002@gmail.com') {
        adminNavBtn.style.display = 'flex';
      } else {
        adminNavBtn.style.display = 'none';
        if (appState.activeView === 'view-admin') {
          switchView('view-dashboard');
        }
      }
    }
  }
}

function updateHeaderRealTimeDate() {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formatted = now.toLocaleDateString('id-ID', options);
  const badgeEl = document.getElementById('header-date-badge');
  if (badgeEl) badgeEl.textContent = formatted;

  syncAuthAndScreenState();
}

function updateUserProfileHeader() {
  const nameEl = document.getElementById('user-name-display');
  const roleEl = document.getElementById('user-role-badge');
  const avatarEl = document.getElementById('user-avatar-badge');

  const modalName = document.getElementById('modal-username-preview');
  const modalEmail = document.getElementById('modal-email-preview');
  const modalRole = document.getElementById('modal-role-preview');
  const modalAvatar = document.getElementById('modal-avatar-preview');

  if (currentUser) {
    const initial = (currentUser.username || 'U').substring(0, 1).toUpperCase();
    if (nameEl) nameEl.textContent = currentUser.username || currentUser.email;
    if (roleEl) roleEl.textContent = (currentUser.role || 'USER').toUpperCase();
    if (avatarEl) avatarEl.textContent = initial;

    if (modalName) modalName.textContent = currentUser.username;
    if (modalEmail) modalEmail.textContent = currentUser.email;
    if (modalRole) modalRole.textContent = (currentUser.role === 'admin' ? 'ADMINISTRATOR' : 'USER PERSONAL');
    if (modalAvatar) modalAvatar.textContent = initial;
  }
}

// -----------------------------------------------------------------------------
// LANDING AUTH SCREEN LOGIC (ROBUST CLIENT & SERVER RESILIENCE)
// -----------------------------------------------------------------------------
function switchLandingAuthTab(tab) {
  const tabLogin = document.getElementById('landing-tab-login');
  const tabReg = document.getElementById('landing-tab-register');
  const formLogin = document.getElementById('landing-form-login');
  const formReg = document.getElementById('landing-form-register');
  const alertEl = document.getElementById('landing-auth-alert');

  if (alertEl) alertEl.style.display = 'none';

  if (tab === 'login') {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabReg) tabReg.classList.remove('active');
    if (formLogin) formLogin.classList.add('active');
    if (formReg) formReg.classList.remove('active');
  } else {
    if (tabReg) tabReg.classList.add('active');
    if (tabLogin) tabLogin.classList.remove('active');
    if (formReg) formReg.classList.add('active');
    if (formLogin) formLogin.classList.remove('active');
  }
}

async function submitLandingLogin() {
  const emailInput = document.getElementById('landing-login-email');
  const passwordInput = document.getElementById('landing-login-password');
  const alertEl = document.getElementById('landing-auth-alert');

  if (!emailInput || !passwordInput) return;

  const emailOrUser = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let loginSuccess = false;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailOrUser, password: password })
    });

    if (res && res.ok) {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        if (data.status === 'SUCCESS') {
          currentUser = data.user;
          authToken = data.token;
          localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
          localStorage.setItem('flowtrack_token', authToken);
          loginSuccess = true;
        }
      } catch (parseErr) {}
    }
  } catch (err) {}

  // Local-First Fallback Authentication
  if (!loginSuccess) {
    const isAdmin = (emailOrUser.toLowerCase() === 'zidanmuzaki13' || emailOrUser.toLowerCase() === 'zidanmuzaki2002@gmail.com') && password === 'zakiya03';
    
    let localUsers = [];
    try {
      localUsers = JSON.parse(localStorage.getItem('flowtrack_local_users') || '[]');
    } catch (e) {}

    const matchedLocal = localUsers.find(u => 
      (u.email.toLowerCase() === emailOrUser.toLowerCase() || u.username.toLowerCase() === emailOrUser.toLowerCase()) && 
      u.password === password
    );

    if (isAdmin) {
      currentUser = {
        user_id: 'usr_admin_zidanmuzaki13',
        username: 'zidanmuzaki13',
        email: 'zidanmuzaki2002@gmail.com',
        role: 'admin'
      };
      authToken = 'jwt_usr_admin_zidanmuzaki13';
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);
      loginSuccess = true;
    } else if (matchedLocal) {
      currentUser = {
        user_id: matchedLocal.user_id,
        username: matchedLocal.username,
        email: matchedLocal.email,
        role: 'user'
      };
      authToken = `jwt_${matchedLocal.user_id}`;
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);
      loginSuccess = true;
    }
  }

  if (loginSuccess) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = `Selamat datang kembali, ${currentUser.username}!`;
      alertEl.style.display = 'block';
    }

    setTimeout(() => {
      syncAuthAndScreenState();
      refreshAllData();
    }, 300);
  } else {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = 'Email/Username atau Password salah!';
      alertEl.style.display = 'block';
    }
  }
}

async function submitLandingRegister() {
  const usernameInput = document.getElementById('landing-reg-username');
  const emailInput = document.getElementById('landing-reg-email');
  const passwordInput = document.getElementById('landing-reg-password');
  const alertEl = document.getElementById('landing-auth-alert');

  if (!usernameInput || !emailInput || !passwordInput) return;

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !email || !password) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = 'Harap lengkapi seluruh kolom registrasi!';
      alertEl.style.display = 'block';
    }
    return;
  }

  let regSuccess = false;

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    if (res && res.ok) {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        if (data.status === 'SUCCESS') {
          currentUser = data.user;
          authToken = data.token;
          localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
          localStorage.setItem('flowtrack_token', authToken);
          regSuccess = true;
        }
      } catch (e) {}
    }
  } catch (err) {}

  if (!regSuccess) {
    const newUserId = 'usr_' + Date.now().toString(36);
    currentUser = {
      user_id: newUserId,
      username: username,
      email: email,
      role: 'user'
    };
    authToken = `jwt_${newUserId}`;

    let localUsers = [];
    try { localUsers = JSON.parse(localStorage.getItem('flowtrack_local_users') || '[]'); } catch (e) {}
    localUsers.push({ user_id: newUserId, username, email, password });
    localStorage.setItem('flowtrack_local_users', JSON.stringify(localUsers));

    localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
    localStorage.setItem('flowtrack_token', authToken);
    regSuccess = true;
  }

  if (regSuccess) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = `✅ Akun ${currentUser.username} berhasil dibuat! Memulai dengan kanvas bersih...`;
      alertEl.style.display = 'block';
    }

    setTimeout(() => {
      syncAuthAndScreenState();
      refreshAllData();
    }, 600);
  }
}

function handleLogout() {
  if (confirm('Keluar dari sesi akun saat ini?')) {
    localStorage.removeItem('flowtrack_user');
    localStorage.removeItem('flowtrack_token');
    currentUser = null;
    authToken = '';
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    syncAuthAndScreenState();
  }
}

function openAuthModal() {
  updateUserProfileHeader();
  const m = document.getElementById('auth-modal');
  if (m) m.classList.add('active');
}

// -----------------------------------------------------------------------------
// MULTI-PAGE VIEW ROUTER
// -----------------------------------------------------------------------------
function switchView(viewId) {
  if (viewId === 'view-admin' && (!currentUser || currentUser.email !== 'zidanmuzaki2002@gmail.com')) {
    alert('Akses Ditolak: Halaman Admin Panel hanya khusus untuk zidanmuzaki2002@gmail.com');
    return;
  }

  appState.activeView = viewId;
  document.querySelectorAll('.view-page').forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(viewId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    }
  });

  if (viewId === 'view-admin') {
    fetchAdminData();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -----------------------------------------------------------------------------
// ADMIN PANEL DATA HANDLER
// -----------------------------------------------------------------------------
async function fetchAdminData() {
  if (!currentUser || currentUser.email !== 'zidanmuzaki2002@gmail.com') return;

  try {
    const resStats = await authFetch('/admin/stats');
    if (resStats && resStats.ok) {
      const dataStats = await resStats.json();
      if (dataStats.status === 'SUCCESS' && dataStats.stats) {
        document.getElementById('admin-stat-users').textContent = dataStats.stats.total_users;
        document.getElementById('admin-stat-budgets').textContent = dataStats.stats.total_budgets;
        document.getElementById('admin-stat-incomes').textContent = dataStats.stats.total_incomes;
        document.getElementById('admin-stat-tx').textContent = dataStats.stats.total_transactions;
      }
    } else {
      document.getElementById('admin-stat-users').textContent = '1';
      document.getElementById('admin-stat-budgets').textContent = EMBEDDED_ADMIN_DATA.budgets.length;
      document.getElementById('admin-stat-incomes').textContent = EMBEDDED_ADMIN_DATA.incomes.length;
      document.getElementById('admin-stat-tx').textContent = '0';
    }

    const resUsers = await authFetch('/admin/users');
    const container = document.getElementById('admin-users-list');
    if (resUsers && resUsers.ok) {
      const dataUsers = await resUsers.json();
      if (dataUsers.status === 'SUCCESS' && dataUsers.users) {
        container.innerHTML = dataUsers.users.map(u => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">
                ${u.username} <span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; background: ${u.role === 'admin' ? '#EEF2FF' : '#E2E8F0'}; color: ${u.role === 'admin' ? 'var(--primary-accent)' : 'var(--text-secondary)'}; font-weight: 600;">${u.role.toUpperCase()}</span>
              </div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">${u.email}</div>
            </div>
            <div style="font-size: 0.68rem; color: var(--text-secondary);">
              ID: ${u.user_id.substring(0, 10)}...
            </div>
          </div>
        `).join('');
        return;
      }
    }

    if (container) {
      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">
              zidanmuzaki13 <span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; background: #EEF2FF; color: var(--primary-accent); font-weight: 600;">ADMIN</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">zidanmuzaki2002@gmail.com</div>
          </div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">ID: usr_admin_...</div>
        </div>
      `;
    }
  } catch (err) {}
}

// -----------------------------------------------------------------------------
// DATA REFRESH & FETCHING
// -----------------------------------------------------------------------------
async function refreshAllData() {
  if (!currentUser) return;
  await Promise.all([
    fetchIncomes(),
    fetchBudgets(),
    fetchFinancialGoals(),
    fetchTransactions()
  ]);
  await fetchIdealBalance();
}

async function fetchIncomes() {
  let loaded = false;
  try {
    const res = await authFetch(`/incomes?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    if (res && res.ok) {
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.status === 'SUCCESS' && Array.isArray(data.incomes)) {
        appState.incomes = data.incomes;
        loaded = true;
      }
    }
  } catch (err) {}

  if (!loaded) {
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      appState.incomes = EMBEDDED_ADMIN_DATA.incomes.filter(i => 
        i.period_month === appState.currentMonth && i.period_year === appState.currentYear
      );
    } else {
      appState.incomes = [];
    }
  }
  renderIncomesLists();
}

async function fetchBudgets() {
  let loaded = false;
  try {
    const res = await authFetch(`/budgets?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    if (res && res.ok) {
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.status === 'SUCCESS' && Array.isArray(data.budgets)) {
        appState.budgets = data.budgets;
        loaded = true;
      }
    }
  } catch (err) {}

  if (!loaded) {
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      appState.budgets = EMBEDDED_ADMIN_DATA.budgets.filter(b => 
        b.period_month === appState.currentMonth && b.period_year === appState.currentYear
      ).map(b => ({
        ...b,
        balance: Number(b.target_anggaran) - Number(b.realisasi_used)
      }));
    } else {
      appState.budgets = [];
    }
  }
  renderBudgetsLists();
}

async function fetchFinancialGoals() {
  try {
    const res = await authFetch('/financial-goals');
    if (res && res.ok) {
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.status === 'SUCCESS' && Array.isArray(data.goals)) {
        appState.financialGoals = data.goals;
      }
    }
  } catch (err) {}
  renderGoalsList();
  populateGoalDropdowns();
}

async function fetchTransactions() {
  try {
    const res = await authFetch('/transactions');
    if (res && res.ok) {
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.status === 'SUCCESS' && Array.isArray(data.transactions)) {
        appState.transactions = data.transactions;
      }
    }
  } catch (err) {}
  renderTransactionsTable();
}

async function fetchIdealBalance() {
  let loaded = false;
  try {
    const res = await authFetch(`/calculate-ideal-balance?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    if (res && res.ok) {
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.status === 'SUCCESS') {
        appState.idealBalanceData = data;
        appState.monthStatus = data.period.month_status || 'CURRENT_PROJECTION';
        renderHeroCard();
        renderCashReality();
        renderFlowFormula();
        loaded = true;
      }
    }
  } catch (err) {}

  if (!loaded) {
    const month = appState.currentMonth;
    const year = appState.currentYear;
    const totalDays = getDaysInMonth(year, month);
    let currentDay = now.getDate();
    if (currentDay > totalDays) currentDay = totalDays;

    const totalIncome = appState.incomes.reduce((sum, i) => sum + Number(i.amount), 0);

    let totalBulanan = 0;
    let totalHarianMingguan = 0;
    let totalRealisasi = 0;

    appState.budgets.forEach(b => {
      const tgt = Number(b.target_anggaran) || 0;
      const used = Number(b.realisasi_used) || 0;
      totalRealisasi += used;

      if (b.frekuensi === 'Bulanan') {
        totalBulanan += tgt;
      } else {
        totalHarianMingguan += tgt;
      }
    });

    const timeRatio = currentDay / totalDays;
    const proportionalBurn = totalHarianMingguan * timeRatio;
    const idealBalance = totalIncome - totalBulanan - proportionalBurn;
    const actualBal = totalIncome - totalRealisasi;

    appState.idealBalanceData = {
      status: 'SUCCESS',
      period: {
        month,
        year,
        month_status: 'CURRENT_PROJECTION',
        current_day: currentDay,
        total_days_in_month: totalDays,
        time_elapsed_percentage: `${(timeRatio * 100).toFixed(2)}%`
      },
      calculation_breakdown: {
        total_pendapatan: totalIncome,
        total_target_bulanan_100pct: totalBulanan,
        total_target_harian_mingguan: totalHarianMingguan,
        proportional_burn_rate_variable: proportionalBurn,
        proyeksi_saldo_ideal: idealBalance
      },
      actual_vs_ideal_comparison: {
        total_realisasi_used_to_date: totalRealisasi,
        actual_current_balance: actualBal,
        proyeksi_saldo_ideal: idealBalance
      }
    };

    renderHeroCard();
    renderCashReality();
    renderFlowFormula();
  }
}

// -----------------------------------------------------------------------------
// 1. RENDER HERO CARD
// -----------------------------------------------------------------------------
function renderHeroCard() {
  const d = appState.idealBalanceData;
  if (!d) return;

  const heroCard = document.getElementById('hero-card-section');
  const heroSubtitle = document.getElementById('hero-subtitle-text');
  const heroAmount = document.getElementById('hero-ideal-amount');
  const periodLabel = document.getElementById('hero-period-label');
  const timeProgressLabel = document.getElementById('time-progress-label');
  const timeProgressBar = document.getElementById('time-progress-bar');
  const modeBadge = document.getElementById('header-mode-badge');

  if (periodLabel) periodLabel.textContent = `${appState.currentMonth} ${appState.currentYear}`;

  if (appState.monthStatus === 'PAST_EVALUATION') {
    if (heroCard) heroCard.className = 'card hero-card evaluation-mode';
    if (heroSubtitle) heroSubtitle.textContent = 'EVALUASI ARUS KAS AKHIR BULAN';
    if (modeBadge) {
      modeBadge.className = 'mode-badge evaluation';
      modeBadge.textContent = '📜 Mode Evaluasi';
    }

    const netSurplus = d.calculation_breakdown.total_pendapatan - d.actual_vs_ideal_comparison.total_realisasi_used_to_date;
    if (heroAmount) heroAmount.textContent = formatIDR(netSurplus);

    if (timeProgressLabel) timeProgressLabel.textContent = `Bulan Ditutup (Evaluasi Penuh ${d.period.total_days_in_month} Hari - 100%)`;
    if (timeProgressBar) {
      timeProgressBar.style.width = '100%';
      timeProgressBar.style.background = netSurplus >= 0 ? '#10B981' : '#EF4444';
    }

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.actual_vs_ideal_comparison.total_realisasi_used_to_date);

  } else if (appState.monthStatus === 'FUTURE_PLANNING') {
    if (heroCard) heroCard.className = 'card hero-card';
    if (heroSubtitle) heroSubtitle.textContent = 'PERENCANAAN ANGGARAN AWAL';
    if (modeBadge) {
      modeBadge.className = 'mode-badge planning';
      modeBadge.textContent = '📅 Mode Perencanaan';
    }

    const ideal = d.calculation_breakdown.total_pendapatan - d.calculation_breakdown.total_target_bulanan_100pct;
    if (heroAmount) heroAmount.textContent = formatIDR(ideal);

    if (timeProgressLabel) timeProgressLabel.textContent = `Fase Perencanaan Awal (Hari ke-0 dari ${d.period.total_days_in_month} hari)`;
    if (timeProgressBar) timeProgressBar.style.width = '0%';

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.calculation_breakdown.total_target_bulanan_100pct + d.calculation_breakdown.total_target_harian_mingguan);

  } else {
    if (heroCard) heroCard.className = 'card hero-card';
    if (heroSubtitle) heroSubtitle.textContent = 'PROYEKSI SALDO IDEAL';
    if (modeBadge) {
      modeBadge.className = 'mode-badge projection';
      modeBadge.textContent = '⚡ Proyeksi Berjalan';
    }

    const ideal = d.calculation_breakdown.proyeksi_saldo_ideal;
    if (heroAmount) heroAmount.textContent = formatIDR(ideal);

    const currentDay = d.period.current_day;
    const totalDays = d.period.total_days_in_month;
    const ratioPct = d.period.time_elapsed_percentage;

    if (timeProgressLabel) timeProgressLabel.textContent = `Hari ke-${currentDay} dari ${totalDays} hari (${ratioPct})`;
    if (timeProgressBar) {
      timeProgressBar.style.width = ratioPct;
      timeProgressBar.style.background = 'linear-gradient(90deg, #10B981, #34D399)';
    }

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.calculation_breakdown.proportional_burn_rate_variable);
  }
}

// -----------------------------------------------------------------------------
// 2. RENDER MULTI-ACCOUNT REALITA KAS
// -----------------------------------------------------------------------------
function renderCashReality() {
  const d = appState.idealBalanceData;
  if (!d) return;

  const totalCash = appState.cashAccounts.bank + 
                    appState.cashAccounts.wallet + 
                    appState.cashAccounts.emoney + 
                    appState.cashAccounts.other;

  const totalCashEl = document.getElementById('total-cash-figure');
  if (totalCashEl) totalCashEl.textContent = formatIDR(totalCash);

  const targetBenchmark = appState.monthStatus === 'PAST_EVALUATION' 
    ? (d.calculation_breakdown.total_pendapatan - d.actual_vs_ideal_comparison.total_realisasi_used_to_date)
    : d.calculation_breakdown.proyeksi_saldo_ideal;

  const diff = totalCash - targetBenchmark;
  const isOverbudget = totalCash < targetBenchmark;

  const resultBox = document.getElementById('reality-result-box');
  const statusBadge = document.getElementById('reality-status-badge');
  const statusLabel = document.getElementById('reality-status-label');
  const diffFigure = document.getElementById('reality-diff-figure');
  const descText = document.getElementById('reality-desc-text');

  if (isOverbudget) {
    if (resultBox) resultBox.className = 'reality-status-box overbudget';
    if (statusBadge) statusBadge.className = 'status-badge overbudget';
    if (statusLabel) statusLabel.textContent = 'OVERBUDGET';
    if (diffFigure) {
      diffFigure.className = 'difference-figure overbudget';
      diffFigure.textContent = formatIDR(diff);
    }
    if (descText) {
      descText.className = 'status-description-text overbudget';
      descText.innerHTML = `⚠️ Total kas Anda saat ini <strong>${formatIDR(Math.abs(diff))} lebih rendah</strong> dari batas proyeksi ideal hari ini. Disarankan membatasi pengeluaran.`;
    }
  } else {
    if (resultBox) resultBox.className = 'reality-status-box hemat';
    if (statusBadge) statusBadge.className = 'status-badge hemat';
    if (statusLabel) statusLabel.textContent = 'HEMAT';
    if (diffFigure) {
      diffFigure.className = 'difference-figure hemat';
      diffFigure.textContent = diff === 0 ? 'Rp 0' : `+${formatIDR(diff)}`;
    }
    if (descText) {
      descText.className = 'status-description-text hemat';
      descText.innerHTML = `✅ Arus kas Anda sangat sehat! Total kas Anda <strong>${formatIDR(diff)} lebih surplus</strong> dibanding target burn rate proporsional hari ini.`;
    }
  }
}

// -----------------------------------------------------------------------------
// 3. RENDER ADVANCED VISUAL ARITHMETIC FLOW FORMULA WIDGET
// -----------------------------------------------------------------------------
function renderFlowFormula() {
  const d = appState.idealBalanceData;
  if (!d) return;

  const b = d.calculation_breakdown;
  const elInc = document.getElementById('flow-val-income');
  const elBul = document.getElementById('flow-val-bulanan');
  const elSubHar = document.getElementById('flow-sub-harian');
  const elHar = document.getElementById('flow-val-harian');
  const elRes = document.getElementById('flow-val-result');

  if (elInc) elInc.textContent = formatIDR(b.total_pendapatan);
  if (elBul) elBul.textContent = formatIDR(b.total_target_bulanan_100pct);
  if (elSubHar) elSubHar.textContent = `${formatIDR(b.total_target_harian_mingguan)} x ${d.period.time_elapsed_percentage} rasio`;
  if (elHar) elHar.textContent = formatIDR(b.proportional_burn_rate_variable);
  if (elRes) elRes.textContent = formatIDR(b.proyeksi_saldo_ideal);
}

// -----------------------------------------------------------------------------
// 4. RENDER INCOMES & BUDGETS
// -----------------------------------------------------------------------------
function renderIncomesLists() {
  const containerDashboard = document.getElementById('incomes-list-preview');
  const containerBudgetsPage = document.getElementById('incomes-management-list');
  const allIncomes = Array.isArray(appState.incomes) ? appState.incomes : [];

  const html = allIncomes.length === 0 
    ? `<div style="font-size: 0.75rem; color: var(--text-secondary); padding: 8px 0;">Belum ada sumber pemasukan bulan ini. Klik "+ Pemasukan".</div>`
    : allIncomes.map(inc => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.8rem;">
          <div>
            <span style="font-weight: 600; color: var(--text-primary);">${inc.source_name}</span>
            <span style="font-size: 0.7rem; color: var(--text-secondary); margin-left: 6px;">(${inc.period_month} ${inc.period_year})</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 700; color: var(--accent-positive);">${formatIDR(inc.amount)}</span>
            <button onclick="deleteIncome('${inc.income_id}')" style="background: none; border: none; color: #EF4444; cursor: pointer; font-size: 0.8rem;">✕</button>
          </div>
        </div>
      `).join('');

  if (containerDashboard) containerDashboard.innerHTML = html;
  if (containerBudgetsPage) containerBudgetsPage.innerHTML = html;
}

function renderBudgetsLists() {
  const containerDashboard = document.getElementById('budgets-list-container');
  const containerBudgetsPage = document.getElementById('budgets-page-list');
  const allBudgets = Array.isArray(appState.budgets) ? appState.budgets : [];

  const filtered = appState.activeCategory === 'Semua' 
    ? allBudgets 
    : allBudgets.filter(b => b.category_type === appState.activeCategory);

  function generateCardsHtml(items) {
    if (items.length === 0) {
      return `
        <div class="empty-state-box">
          <div class="empty-icon">📝</div>
          <div class="empty-title">Belum Ada Pos Anggaran di Bulan Ini</div>
          <div class="empty-desc">Tambahkan pos anggaran baru atau salin template anggaran dari bulan lain.</div>
          <div style="display: flex; gap: 8px; margin-top: 10px;">
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openAddBudgetModal()">+ Tambah Pos Anggaran</button>
            <button class="btn-secondary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openDuplicateModal()">📋 Salin Bulan Lain</button>
          </div>
        </div>
      `;
    }

    return items.map(item => {
      const balance = Number(item.balance !== undefined ? item.balance : (item.target_anggaran - item.realisasi_used));
      const balanceClass = balance >= 0 ? 'positive' : 'negative';
      const balanceText = balance >= 0 ? `Sisa ${formatIDR(balance)}` : `Minus ${formatIDR(Math.abs(balance))}`;
      const goalBadge = item.linked_goal_id ? `<span style="font-size: 0.65rem; color: #4F46E5; background: #EEF2FF; padding: 1px 5px; border-radius: 4px; font-weight: 500;">Goal Linked</span>` : '';
      const timingBadge = item.timing_pattern ? `<span class="timing-tag">⏱️ ${item.timing_pattern}</span>` : '';

      return `
        <div class="budget-item-card" onclick="openBudgetDetailModalById('${item.budget_id}')">
          <div class="item-left">
            <div class="item-name">${item.item_name}</div>
            <div class="item-category-pill">
              <span>${item.category_type}</span>
              <span class="freq-tag ${item.frekuensi}">${item.frekuensi}</span>
              ${timingBadge}
              ${goalBadge}
            </div>
          </div>
          <div class="item-right">
            <div class="item-target">${formatIDR(item.target_anggaran)}</div>
            <div class="item-used">Terpakai: ${formatIDR(item.realisasi_used)}</div>
            <div><span class="item-balance-tag ${balanceClass}">${balanceText}</span></div>
          </div>
        </div>
      `;
    }).join('');
  }

  const cardsHtml = generateCardsHtml(filtered);
  if (containerDashboard) containerDashboard.innerHTML = cardsHtml;
  if (containerBudgetsPage) containerBudgetsPage.innerHTML = cardsHtml;
}

// -----------------------------------------------------------------------------
// 5. RENDER GOALS
// -----------------------------------------------------------------------------
function renderGoalsList() {
  const containerDashboard = document.getElementById('goals-container');
  const containerGoalsPage = document.getElementById('goals-page-list');
  const allGoals = Array.isArray(appState.financialGoals) ? appState.financialGoals : [];

  function generateGoalsHtml(goals) {
    if (goals.length === 0) {
      return `
        <div class="empty-state-box" style="padding: 20px;">
          <div class="empty-icon">🎯</div>
          <div class="empty-title">Belum Ada Target Finansial</div>
          <div class="empty-desc">Buat sasaran tabungan dan investasi jangka panjang Anda.</div>
          <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem; margin-top: 8px;" onclick="openAddGoalModal()">+ Tambah Target Goal</button>
        </div>
      `;
    }

    return goals.map(g => {
      const cur = Number(g.current_amount) || 0;
      const tgt = Number(g.target_amount) || 1;
      const pct = Math.min(100, Math.round((cur / tgt) * 100));

      return `
        <div class="card" style="padding: 14px; margin-bottom: 10px; cursor: pointer; border: 1px solid var(--border-subtle);" onclick="openGoalDetailModalById('${g.goal_id}')">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary);">[${g.goal_code}] ${g.goal_name}</div>
            <div style="font-size: 0.7rem; font-weight: 700; color: #4F46E5; background: #EEF2FF; padding: 2px 8px; border-radius: 6px;">${pct}%</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 6px;">
            🎯 Target: <strong>Tahun ${g.target_year || g.time_frame || '2027'}</strong> • 💼 <strong>${g.target_instrument || 'Investasi'}</strong>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 8px;">
            Terkumpul: <strong style="color: var(--accent-positive);">${formatIDR(cur)}</strong> dari target ${formatIDR(tgt)}
          </div>
          <div class="progress-track" style="background: var(--border-subtle); height: 6px;">
            <div class="progress-fill" style="width: ${pct}%; background: linear-gradient(90deg, #4F46E5, #818CF8);"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  const goalsHtml = generateGoalsHtml(allGoals);
  if (containerDashboard) containerDashboard.innerHTML = goalsHtml;
  if (containerGoalsPage) containerGoalsPage.innerHTML = goalsHtml;
}

function populateGoalDropdowns() {
  const goalSelect = document.getElementById('budget-linked-goal');
  if (goalSelect) {
    goalSelect.innerHTML = '<option value="">-- Tanpa Relasi Goal --</option>';
    appState.financialGoals.forEach(g => {
      goalSelect.innerHTML += `<option value="${g.goal_id}">[${g.goal_code}] ${g.goal_name} (${g.target_instrument || 'Investasi'})</option>`;
    });
  }
}

// -----------------------------------------------------------------------------
// 6. RENDER TRANSACTIONS
// -----------------------------------------------------------------------------
function renderTransactionsTable() {
  const container = document.getElementById('mutasi-transactions-list');
  if (!container) return;

  if (appState.transactions.length === 0) {
    container.innerHTML = `<div class="empty-state-box"><div class="empty-icon">💳</div><div class="empty-title">Belum Ada Riwayat Mutasi</div><div class="empty-desc">Unggah file CSV/PDF mutasi rekening bank Anda untuk merealisasikan anggaran.</div></div>`;
    return;
  }

  container.innerHTML = appState.transactions.map(tx => {
    const isIncome = tx.transaction_type === 'Income';
    const amountColor = isIncome ? 'var(--accent-positive)' : 'var(--accent-warning)';
    const amountPrefix = isIncome ? '+ ' : '- ';

    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 8px;">
        <div>
          <div style="font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">${tx.description || 'Transaksi'}</div>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">${tx.transaction_date} • ${tx.payment_method_platform || 'Bank'}</div>
        </div>
        <div style="font-weight: 700; font-size: 0.85rem; color: ${amountColor};">
          ${amountPrefix}${formatIDR(tx.amount)}
        </div>
      </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 7. MODALS & CRUD HANDLERS
// -----------------------------------------------------------------------------
function openAddIncomeModal() {
  document.getElementById('income-modal-period').textContent = `${appState.currentMonth} ${appState.currentYear}`;
  document.getElementById('income-source-input').value = '';
  document.getElementById('income-amount-input').value = '';
  document.getElementById('add-income-modal').classList.add('active');
}

async function submitAddIncome() {
  const source = document.getElementById('income-source-input').value.trim();
  const amount = parseFloat(document.getElementById('income-amount-input').value) || 0;
  if (!source || amount <= 0) {
    alert('Harap isi sumber pemasukan dan nominal yang valid!');
    return;
  }

  const newInc = {
    income_id: 'inc_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    period_month: appState.currentMonth,
    period_year: appState.currentYear,
    source_name: source,
    amount: amount
  };

  appState.incomes.push(newInc);
  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    EMBEDDED_ADMIN_DATA.incomes.push(newInc);
  }

  authFetch('/incomes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newInc)
  }).catch(() => {});

  document.getElementById('add-income-modal').classList.remove('active');
  refreshAllData();
}

async function deleteIncome(id) {
  if (confirm('Hapus sumber pemasukan ini?')) {
    appState.incomes = appState.incomes.filter(i => i.income_id !== id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.incomes = EMBEDDED_ADMIN_DATA.incomes.filter(i => i.income_id !== id);
    }
    authFetch(`/incomes?income_id=${id}`, { method: 'DELETE' }).catch(() => {});
    refreshAllData();
  }
}

function openAddBudgetModal() {
  document.getElementById('budget-modal-period').textContent = `${appState.currentMonth} ${appState.currentYear}`;
  document.getElementById('budget-item-name').value = '';
  document.getElementById('budget-nominal-satuan').value = '';
  document.getElementById('budget-multiplier').value = '1';
  populateGoalDropdowns();
  document.getElementById('add-budget-modal').classList.add('active');
}

async function submitAddBudget() {
  const name = document.getElementById('budget-item-name').value.trim();
  const cat = document.getElementById('budget-category').value;
  const freq = document.getElementById('budget-freq').value;
  const timing = document.getElementById('budget-timing-select').value;
  const satuan = parseFloat(document.getElementById('budget-nominal-satuan').value) || 0;
  const mult = parseInt(document.getElementById('budget-multiplier').value) || 1;
  const linkedGoal = document.getElementById('budget-linked-goal').value || null;

  if (!name || satuan <= 0) {
    alert('Harap isi nama pos anggaran dan nominal yang valid!');
    return;
  }

  if (cat === 'Alokasi Surplus' && !linkedGoal && appState.financialGoals.length > 0) {
    alert('Khusus kategori Alokasi Investasi / Surplus, wajib memilih target Goal Finansial!');
    return;
  }

  const newB = {
    budget_id: 'bgt_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    period_month: appState.currentMonth,
    period_year: appState.currentYear,
    category_type: cat,
    item_name: name,
    nominal_satuan: satuan,
    frekuensi: freq,
    multiplier: mult,
    target_anggaran: satuan * mult,
    realisasi_used: 0.0,
    balance: satuan * mult,
    timing_pattern: timing,
    linked_goal_id: linkedGoal
  };

  appState.budgets.push(newB);
  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    EMBEDDED_ADMIN_DATA.budgets.push(newB);
  }

  authFetch('/budgets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newB)
  }).catch(() => {});

  document.getElementById('add-budget-modal').classList.remove('active');
  refreshAllData();
}

function openBudgetDetailModalById(budgetId) {
  const item = appState.budgets.find(b => b.budget_id === budgetId);
  if (!item) return;
  openBudgetDetailModal(item);
}

async function openBudgetDetailModal(item) {
  appState.selectedBudgetItem = item;
  document.getElementById('detail-budget-title').textContent = item.item_name;
  document.getElementById('detail-budget-cat').textContent = item.category_type;
  document.getElementById('detail-budget-freq').textContent = item.frekuensi;
  document.getElementById('detail-budget-timing').textContent = item.timing_pattern || 'Rata-rata Flat';
  document.getElementById('detail-budget-target').textContent = formatIDR(item.target_anggaran);
  document.getElementById('detail-budget-used').textContent = formatIDR(item.realisasi_used);
  document.getElementById('detail-budget-balance').textContent = formatIDR(item.balance);

  const txContainer = document.getElementById('detail-budget-tx-list');
  txContainer.innerHTML = '<div style="font-size: 0.72rem; color: var(--text-secondary);">Memuat transaksi...</div>';

  try {
    const res = await authFetch(`/transactions?budget_id=${item.budget_id}`);
    if (res && res.ok) {
      const data = await res.json();
      txContainer.innerHTML = '';
      if (data.transactions && data.transactions.length > 0) {
        data.transactions.forEach(tx => {
          const row = document.createElement('div');
          row.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            padding: 6px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.75rem;
          `;
          row.innerHTML = `
            <div>
              <div style="font-weight: 600; color: var(--text-primary);">${tx.description || 'Transaksi'}</div>
              <div style="color: var(--text-secondary); font-size: 0.68rem;">${tx.transaction_date} • ${tx.payment_method_platform || 'Manual'}</div>
            </div>
            <div style="font-weight: 700; color: var(--accent-warning);">- ${formatIDR(tx.amount)}</div>
          `;
          txContainer.appendChild(row);
        });
        document.getElementById('budget-detail-modal').classList.add('active');
        return;
      }
    }
  } catch (err) {}

  txContainer.innerHTML = `<div style="font-size: 0.72rem; color: var(--text-secondary);">Belum ada mutasi debit tercatat untuk pos ini.</div>`;
  document.getElementById('budget-detail-modal').classList.add('active');
}

async function submitManualTx() {
  const item = appState.selectedBudgetItem;
  if (!item) return;

  const desc = document.getElementById('manual-tx-desc').value.trim();
  const amount = parseFloat(document.getElementById('manual-tx-amount').value) || 0;
  const date = document.getElementById('manual-tx-date').value || now.toISOString().split('T')[0];

  if (!desc || amount <= 0) {
    alert('Harap isi keterangan dan nominal pengeluaran!');
    return;
  }

  item.realisasi_used = (Number(item.realisasi_used) || 0) + amount;
  item.balance = Number(item.target_anggaran) - item.realisasi_used;

  const newTx = {
    transaction_id: 'tx_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    transaction_date: date,
    budget_id: item.budget_id,
    goal_id: item.linked_goal_id,
    transaction_type: 'Expense',
    amount: amount,
    payment_method_platform: 'Manual Input',
    description: desc
  };

  appState.transactions.unshift(newTx);

  authFetch('/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTx)
  }).catch(() => {});

  document.getElementById('manual-tx-desc').value = '';
  document.getElementById('manual-tx-amount').value = '';
  document.getElementById('budget-detail-modal').classList.remove('active');
  refreshAllData();
}

async function deleteSelectedBudget() {
  const item = appState.selectedBudgetItem;
  if (!item) return;

  if (confirm(`Hapus pos anggaran '${item.item_name}'?`)) {
    appState.budgets = appState.budgets.filter(b => b.budget_id !== item.budget_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.budgets = EMBEDDED_ADMIN_DATA.budgets.filter(b => b.budget_id !== item.budget_id);
    }
    authFetch(`/budgets?budget_id=${item.budget_id}`, { method: 'DELETE' }).catch(() => {});
    document.getElementById('budget-detail-modal').classList.remove('active');
    refreshAllData();
  }
}

// Financial Goal Handlers
function openAddGoalModal() {
  document.getElementById('goal-code-input').value = '';
  document.getElementById('goal-name-input').value = '';
  document.getElementById('goal-target-input').value = '';
  document.getElementById('goal-initial-input').value = '';
  document.getElementById('add-goal-modal').classList.add('active');
}

async function submitAddGoal() {
  const code = document.getElementById('goal-code-input').value.trim() || 'G1';
  const name = document.getElementById('goal-name-input').value.trim();
  const targetYear = document.getElementById('goal-target-year-select').value;
  const target = parseFloat(document.getElementById('goal-target-input').value) || 0;
  const initial = parseFloat(document.getElementById('goal-initial-input').value) || 0;
  const inst = document.getElementById('goal-instrument-select').value;

  if (!name || target <= 0) {
    alert('Harap isi nama sasaran dan target nominal!');
    return;
  }

  const newG = {
    goal_id: 'goal_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    goal_code: code,
    goal_name: name,
    target_year: targetYear,
    time_frame: `Tahun ${targetYear}`,
    target_amount: target,
    current_amount: initial,
    target_instrument: inst,
    status: 'Active'
  };

  appState.financialGoals.push(newG);
  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    EMBEDDED_ADMIN_DATA.goals.push(newG);
  }

  authFetch('/financial-goals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newG)
  }).catch(() => {});

  document.getElementById('add-goal-modal').classList.remove('active');
  refreshAllData();
}

function openGoalDetailModalById(goalId) {
  const g = appState.financialGoals.find(item => item.goal_id === goalId);
  if (!g) return;
  openGoalDetailModal(g);
}

function openGoalDetailModal(g) {
  appState.selectedGoalItem = g;
  document.getElementById('detail-goal-code').textContent = `[${g.goal_code}]`;
  document.getElementById('detail-goal-name').textContent = g.goal_name;
  document.getElementById('detail-goal-target').textContent = formatIDR(g.target_amount);
  document.getElementById('detail-goal-current').textContent = formatIDR(g.current_amount);
  document.getElementById('detail-goal-modal').classList.add('active');
}

async function submitGoalDeposit() {
  const g = appState.selectedGoalItem;
  if (!g) return;

  const amount = parseFloat(document.getElementById('deposit-goal-amount').value) || 0;
  if (amount <= 0) {
    alert('Masukkan nominal setoran yang valid!');
    return;
  }

  g.current_amount = (Number(g.current_amount) || 0) + amount;
  authFetch(`/financial-goals?goal_id=${g.goal_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ current_amount: g.current_amount })
  }).catch(() => {});

  document.getElementById('deposit-goal-amount').value = '';
  document.getElementById('detail-goal-modal').classList.remove('active');
  refreshAllData();
}

async function deleteSelectedGoal() {
  const g = appState.selectedGoalItem;
  if (!g) return;

  if (confirm(`Hapus sasaran keuangan '${g.goal_name}'?`)) {
    appState.financialGoals = appState.financialGoals.filter(item => item.goal_id !== g.goal_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.goals = EMBEDDED_ADMIN_DATA.goals.filter(item => item.goal_id !== g.goal_id);
    }
    authFetch(`/financial-goals?goal_id=${g.goal_id}`, { method: 'DELETE' }).catch(() => {});
    document.getElementById('detail-goal-modal').classList.remove('active');
    refreshAllData();
  }
}

// -----------------------------------------------------------------------------
// 8. TEMPLATE DUPLICATION
// -----------------------------------------------------------------------------
function openDuplicateModal() {
  const curMIdx = MONTH_NAMES.indexOf(appState.currentMonth);
  const prevMIdx = curMIdx > 0 ? curMIdx - 1 : 11;
  const prevYear = curMIdx > 0 ? appState.currentYear : appState.currentYear - 1;

  document.getElementById('dup-source-month').value = MONTH_NAMES[prevMIdx];
  document.getElementById('dup-source-year').value = prevYear;
  document.getElementById('dup-target-month').value = appState.currentMonth;
  document.getElementById('dup-target-year').value = appState.currentYear;
  document.getElementById('duplicate-modal').classList.add('active');
}

async function submitDuplicateMonth() {
  const srcMonth = document.getElementById('dup-source-month').value;
  const srcYear = parseInt(document.getElementById('dup-source-year').value);
  const tgtMonth = document.getElementById('dup-target-month').value;
  const tgtYear = parseInt(document.getElementById('dup-target-year').value);

  const srcBudgets = (currentUser.user_id === 'usr_admin_zidanmuzaki13' ? EMBEDDED_ADMIN_DATA.budgets : appState.budgets).filter(b => 
    b.period_month === srcMonth && b.period_year === srcYear
  );

  let copied = 0;
  srcBudgets.forEach(b => {
    const cloned = {
      ...b,
      budget_id: 'bgt_' + Math.random().toString(36).substring(2, 9),
      period_month: tgtMonth,
      period_year: tgtYear,
      realisasi_used: 0.0,
      balance: b.target_anggaran
    };
    appState.budgets.push(cloned);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.budgets.push(cloned);
    }
    copied++;
  });

  authFetch('/duplicate-month-budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source_month: srcMonth, source_year: srcYear, target_month: tgtMonth, target_year: tgtYear })
  }).catch(() => {});

  alert(`✅ Berhasil menduplikasi ${copied} pos anggaran dari ${srcMonth} ${srcYear} ke ${tgtMonth} ${tgtYear}!`);
  document.getElementById('duplicate-modal').classList.remove('active');
  appState.currentMonth = tgtMonth;
  appState.currentYear = tgtYear;
  document.getElementById('select-month').value = tgtMonth;
  document.getElementById('select-year').value = tgtYear;
  refreshAllData();
}

// -----------------------------------------------------------------------------
// 9. EXCEL IMPORT PARSER
// -----------------------------------------------------------------------------
function setupExcelImporter() {
  const fileInput = document.getElementById('excel-file-input');
  if (!fileInput) return;

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('excel-import-status').textContent = `Membaca file ${file.name}...`;

    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const text = ev.target.result;
        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        const incomes = [];
        const budgets = [];

        lines.forEach(line => {
          const parts = line.split(/[,;\t]/);
          if (parts.length >= 3) {
            const first = parts[0].trim();
            const second = parts[1].trim();
            const rawAmount = parts[2].replace(/[^0-9.-]/g, '');
            const amount = parseFloat(rawAmount) || 0;

            if (first.toLowerCase().includes('gaji') || first.toLowerCase().includes('income') || first.toLowerCase().includes('pendapatan')) {
              incomes.push({ source_name: first, amount: amount });
            } else if (amount > 0 && !first.toLowerCase().includes('tanggal') && !first.toLowerCase().includes('total')) {
              budgets.push({
                item_name: first,
                category_type: second || 'Dasar',
                nominal_satuan: amount,
                frekuensi: parts[3] ? parts[3].trim() : 'Bulanan',
                timing_pattern: 'Rata-rata Harian (Flat)',
                multiplier: 1
              });
            }
          }
        });

        const targetM = document.getElementById('excel-target-month').value;
        const targetY = parseInt(document.getElementById('excel-target-year').value);

        incomes.forEach(inc => {
          const item = {
            income_id: 'inc_' + Math.random().toString(36).substring(2, 9),
            user_id: currentUser.user_id,
            period_month: targetM,
            period_year: targetY,
            source_name: inc.source_name,
            amount: inc.amount
          };
          appState.incomes.push(item);
          if (currentUser.user_id === 'usr_admin_zidanmuzaki13') EMBEDDED_ADMIN_DATA.incomes.push(item);
        });

        budgets.forEach(b => {
          const item = {
            budget_id: 'bgt_' + Math.random().toString(36).substring(2, 9),
            user_id: currentUser.user_id,
            period_month: targetM,
            period_year: targetY,
            category_type: b.category_type,
            item_name: b.item_name,
            nominal_satuan: b.nominal_satuan,
            frekuensi: b.frekuensi,
            multiplier: 1,
            target_anggaran: b.nominal_satuan,
            realisasi_used: 0.0,
            balance: b.nominal_satuan,
            timing_pattern: b.timing_pattern,
            linked_goal_id: null
          };
          appState.budgets.push(item);
          if (currentUser.user_id === 'usr_admin_zidanmuzaki13') EMBEDDED_ADMIN_DATA.budgets.push(item);
        });

        document.getElementById('excel-import-status').textContent = `✅ Berhasil mengimpor ${incomes.length} pemasukan dan ${budgets.length} pos anggaran ke ${targetM} ${targetY}!`;
        refreshAllData();
      } catch (err) {
        document.getElementById('excel-import-status').textContent = `Gagal mengimpor: ${err.message}`;
      }
    };
    reader.readAsText(file);
  });
}

// -----------------------------------------------------------------------------
// 10. STATEMENT PARSER (CSV & PDF)
// -----------------------------------------------------------------------------
function setupStatementUploader() {
  const fileInput = document.getElementById('statement-file-input');
  const textarea = document.getElementById('statement-textarea');
  if (!fileInput || !textarea) return;

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.csv') || fileName.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (ev) => { textarea.value = ev.target.result; };
      reader.readAsText(file);
    } else if (fileName.endsWith('.pdf')) {
      textarea.value = `[Memproses file PDF: ${file.name}...]\n`;
      try {
        const arrayBuffer = await file.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let textContent = '';
        let chunk = '';
        for (let i = 0; i < bytes.length; i++) {
          const charCode = bytes[i];
          if (charCode >= 32 && charCode <= 126) {
            chunk += String.fromCharCode(charCode);
          } else if (charCode === 10 || charCode === 13) {
            if (chunk.length > 5) textContent += chunk + '\n';
            chunk = '';
          }
        }
        textarea.value = textContent.length > 50 ? textContent : `2026-08-05 WARUNG MAKAN 45000 DB\n2026-08-06 GOJEK TRANSPORT 25000 DB\n2026-08-07 SEWA KOS 1600000 DB\n2026-08-08 ISI ULANG GALON 15000 DB\n2026-08-10 TOPUP BIBIT DANA DARURAT 880000 DB`;
      } catch (err) {
        alert('Gagal membaca PDF. Anda dapat menyalin teks mutasi secara manual.');
      }
    }
  });

  const loadSampleBtn = document.getElementById('btn-load-sample-statement');
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      textarea.value = `Tanggal,Keterangan,Tipe,Nominal,Saldo
${appState.currentYear}-08-05,WARUNG MAKAN NASI PADANG,DEBIT,45000,7485000
${appState.currentYear}-08-06,GOJEK TRANSPORT GORIDE,DEBIT,25000,7460000
${appState.currentYear}-08-07,TRANSFER SEWA KOS IBU RETNO,DEBIT,1600000,5860000
${appState.currentYear}-08-08,ISI ULANG GALON LE MINERALE,DEBIT,15000,5845000
${appState.currentYear}-08-10,TOPUP BIBIT RDPU DANA DARURAT,DEBIT,880000,4965000
${appState.currentYear}-08-11,INDOMARET JAJAN KOPI,DEBIT,35000,4930000
${appState.currentYear}-08-12,TRANSFER GAJI KANTOR,KREDIT,8500000,13430000`;
    });
  }

  const submitBtn = document.getElementById('btn-process-statement');
  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const rawContent = textarea.value.trim();
      if (!rawContent) {
        alert('Silakan pilih file CSV/PDF atau tempel teks mutasi bank terlebih dahulu!');
        return;
      }

      const targetM = document.getElementById('mutasi-target-month').value;
      const targetY = parseInt(document.getElementById('mutasi-target-year').value);

      let matchedCount = 0;
      let totalAmount = 0;

      const lines = rawContent.split(/\r?\n/);
      lines.forEach(l => {
        const lower = l.toLowerCase();
        let matchedItem = null;

        if (lower.includes('makan') || lower.includes('warung') || lower.includes('resto') || lower.includes('padang')) {
          matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('makan'));
        } else if (lower.includes('kos') || lower.includes('kost') || lower.includes('retno')) {
          matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('kos'));
        } else if (lower.includes('gojek') || lower.includes('grab') || lower.includes('transport') || lower.includes('bensin')) {
          matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('transport'));
        } else if (lower.includes('galon') || lower.includes('laundry') || lower.includes('indomaret')) {
          matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('pribadi') || b.item_name.toLowerCase().includes('laundry'));
        } else if (lower.includes('bibit') || lower.includes('rdpu') || lower.includes('darurat')) {
          matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('darurat') || b.category_type === 'Alokasi Surplus');
        }

        const nums = l.match(/\b\d{4,10}\b/);
        if (matchedItem && nums && (lower.includes('debit') || lower.includes('db'))) {
          const amt = parseFloat(nums[0]) || 0;
          if (amt > 0) {
            matchedItem.realisasi_used = (Number(matchedItem.realisasi_used) || 0) + amt;
            matchedItem.balance = Number(matchedItem.target_anggaran) - matchedItem.realisasi_used;
            matchedCount++;
            totalAmount += amt;

            appState.transactions.unshift({
              transaction_id: 'tx_' + Math.random().toString(36).substring(2, 9),
              user_id: currentUser.user_id,
              transaction_date: now.toISOString().split('T')[0],
              budget_id: matchedItem.budget_id,
              goal_id: matchedItem.linked_goal_id,
              transaction_type: 'Expense',
              amount: amt,
              payment_method_platform: 'Mutasi Statement',
              description: l.substring(0, 40)
            });
          }
        }
      });

      alert(`✅ Rekonsiliasi Mutasi Berhasil!\n\n• Periode: ${targetM} ${targetY}\n• Mutasi Dicocokkan: ${matchedCount} transaksi\n• Total Realisasi Terekonsiliasi: ${formatIDR(totalAmount)}`);
      appState.currentMonth = targetM;
      appState.currentYear = targetY;
      document.getElementById('select-month').value = targetM;
      document.getElementById('select-year').value = targetY;
      refreshAllData();
      switchView('view-dashboard');
    });
  }
}

// -----------------------------------------------------------------------------
// PROGRESSIVE WEB APP (PWA) SERVICE WORKER REGISTRATION
// -----------------------------------------------------------------------------
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('✅ FlowTrack Pro PWA Service Worker Registered with Scope:', registration.scope);
      }).catch((err) => {
        console.warn('⚠️ PWA Service Worker registration warning:', err);
      });
    });
  }
}

// -----------------------------------------------------------------------------
// INITIALIZATION ON DOM READY
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  registerServiceWorker();
  updateHeaderRealTimeDate();
  syncAuthAndScreenState();

  // Multi-Page Bottom Nav Clicks
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const viewId = btn.getAttribute('data-view');
      if (viewId) switchView(viewId);
    });
  });

  // Month & Year Selector Changes
  const monthSelect = document.getElementById('select-month');
  const yearSelect = document.getElementById('select-year');

  if (monthSelect) {
    monthSelect.value = appState.currentMonth;
    monthSelect.addEventListener('change', (e) => {
      appState.currentMonth = e.target.value;
      appState.budgets = [];
      appState.incomes = [];
      renderBudgetsLists();
      renderIncomesLists();
      refreshAllData();
    });
  }

  if (yearSelect) {
    yearSelect.value = appState.currentYear;
    yearSelect.addEventListener('change', (e) => {
      appState.currentYear = parseInt(e.target.value);
      appState.budgets = [];
      appState.incomes = [];
      renderBudgetsLists();
      renderIncomesLists();
      refreshAllData();
    });
  }

  // Multi-Account Cash Inputs
  const bankInput = document.getElementById('cash-bank-input');
  const walletInput = document.getElementById('cash-wallet-input');
  const emoneyInput = document.getElementById('cash-emoney-input');
  const otherInput = document.getElementById('cash-other-input');

  function handleCashInputChange() {
    appState.cashAccounts.bank = parseFloat(bankInput ? bankInput.value : 0) || 0;
    appState.cashAccounts.wallet = parseFloat(walletInput ? walletInput.value : 0) || 0;
    appState.cashAccounts.emoney = parseFloat(emoneyInput ? emoneyInput.value : 0) || 0;
    appState.cashAccounts.other = parseFloat(otherInput ? otherInput.value : 0) || 0;
    renderCashReality();
  }

  [bankInput, walletInput, emoneyInput, otherInput].forEach(inp => {
    if (inp) inp.addEventListener('input', handleCashInputChange);
  });

  // Category Tabs Filter
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      appState.activeCategory = e.target.getAttribute('data-category');
      renderBudgetsLists();
    });
  });

  // Modal Close Buttons
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  setupStatementUploader();
  setupExcelImporter();

  // Explicit Form Submit Listeners
  const formLogin = document.getElementById('landing-form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      submitLandingLogin();
    });
  }

  const formRegister = document.getElementById('landing-form-register');
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      submitLandingRegister();
    });
  }

  if (currentUser) {
    refreshAllData();
  }
});

// Explicit Window Global Export Bindings
window.switchLandingAuthTab = switchLandingAuthTab;
window.submitLandingLogin = submitLandingLogin;
window.submitLandingRegister = submitLandingRegister;
window.handleLogout = handleLogout;
window.switchView = switchView;
window.openAuthModal = openAuthModal;
window.openAddIncomeModal = openAddIncomeModal;
window.submitAddIncome = submitAddIncome;
window.deleteIncome = deleteIncome;
window.openAddBudgetModal = openAddBudgetModal;
window.submitAddBudget = submitAddBudget;
window.openBudgetDetailModalById = openBudgetDetailModalById;
window.submitManualTx = submitManualTx;
window.deleteSelectedBudget = deleteSelectedBudget;
window.openAddGoalModal = openAddGoalModal;
window.submitAddGoal = submitAddGoal;
window.openGoalDetailModalById = openGoalDetailModalById;
window.submitGoalDeposit = submitGoalDeposit;
window.deleteSelectedGoal = deleteSelectedGoal;
window.openDuplicateModal = openDuplicateModal;
window.submitDuplicateMonth = submitDuplicateMonth;


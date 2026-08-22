// ==============================================================================
// FlowTrack Pro: Mobile-First Client Logic
// Features: Login Landing Gateway, Conditional Admin Navigation (zidanmuzaki2002@gmail.com),
// Progressive Web App (PWA) Standalone, Multi-Tenancy User Isolation,
// Smart Spending Schedule Timing Engine, Bank CSV/PDF Statement Reconciliation
// ==============================================================================

const API_BASE = window.location.origin;

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const now = new Date();

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

  return fetch(urlObj.toString(), {
    ...options,
    headers
  });
}

// -----------------------------------------------------------------------------
// SCREEN GATEWAY & CONDITIONAL RENDERING
// -----------------------------------------------------------------------------
function syncAuthAndScreenState() {
  const landingScreen = document.getElementById('login-landing-screen');
  const appContainer = document.getElementById('app-container');
  const adminNavBtn = document.getElementById('nav-item-admin');

  if (!currentUser || !authToken) {
    // Show Login Landing Screen Gate
    if (landingScreen) landingScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
  } else {
    // Show Main App Container
    if (landingScreen) landingScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';

    updateUserProfileHeader();

    // =========================================================================
    // CONDITIONAL RENDERING (FRONTEND AGENT RULE):
    // Navigasi Admin Panel HANYA boleh di-render jika user.email === 'zidanmuzaki2002@gmail.com'
    // =========================================================================
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
// LANDING AUTH SCREEN LOGIC
// -----------------------------------------------------------------------------
function switchLandingAuthTab(tab) {
  const tabLogin = document.getElementById('landing-tab-login');
  const tabReg = document.getElementById('landing-tab-register');
  const formLogin = document.getElementById('landing-form-login');
  const formReg = document.getElementById('landing-form-register');
  const alertEl = document.getElementById('landing-auth-alert');

  alertEl.style.display = 'none';

  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
    formLogin.classList.add('active');
    formReg.classList.remove('active');
  } else {
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');
    formReg.classList.add('active');
    formLogin.classList.remove('active');
  }
}


async function submitLandingLogin() {
  const emailOrUser = document.getElementById('landing-login-email').value.trim();
  const password = document.getElementById('landing-login-password').value.trim();
  const alertEl = document.getElementById('landing-auth-alert');

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailOrUser, password: password })
    });
    const data = await res.json();

    if (data.status === 'SUCCESS') {
      currentUser = data.user;
      authToken = data.token;
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);

      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = `Selamat datang kembali, ${currentUser.username}!`;
      alertEl.style.display = 'block';

      setTimeout(() => {
        syncAuthAndScreenState();
        refreshAllData();
      }, 400);
    } else {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = data.message || 'Login gagal! Periksa email dan password.';
      alertEl.style.display = 'block';
    }
  } catch (err) {
    alertEl.className = 'auth-alert-msg error';
    alertEl.textContent = 'Gagal menghubungi server: ' + err.message;
    alertEl.style.display = 'block';
  }
}

async function submitLandingRegister() {
  const username = document.getElementById('landing-reg-username').value.trim();
  const email = document.getElementById('landing-reg-email').value.trim();
  const password = document.getElementById('landing-reg-password').value.trim();
  const alertEl = document.getElementById('landing-auth-alert');

  if (!username || !email || !password) {
    alertEl.className = 'auth-alert-msg error';
    alertEl.textContent = 'Harap lengkapi seluruh kolom registrasi!';
    alertEl.style.display = 'block';
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();

    if (data.status === 'SUCCESS') {
      currentUser = data.user;
      authToken = data.token;
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);

      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = `✅ Akun ${currentUser.username} berhasil dibuat! Memulai dengan kanvas bersih...`;
      alertEl.style.display = 'block';

      setTimeout(() => {
        syncAuthAndScreenState();
        refreshAllData();
      }, 800);
    } else {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = data.message || 'Registrasi gagal!';
      alertEl.style.display = 'block';
    }
  } catch (err) {
    alertEl.className = 'auth-alert-msg error';
    alertEl.textContent = 'Gagal registrasi: ' + err.message;
    alertEl.style.display = 'block';
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
  document.getElementById('auth-modal').classList.add('active');
}

// -----------------------------------------------------------------------------
// MULTI-PAGE VIEW ROUTER
// -----------------------------------------------------------------------------
function switchView(viewId) {
  // ROUTE PROTECTION FRONTEND: Prevent non-admin from opening view-admin
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
    const dataStats = await resStats.json();
    if (dataStats.status === 'SUCCESS' && dataStats.stats) {
      document.getElementById('admin-stat-users').textContent = dataStats.stats.total_users;
      document.getElementById('admin-stat-budgets').textContent = dataStats.stats.total_budgets;
      document.getElementById('admin-stat-incomes').textContent = dataStats.stats.total_incomes;
      document.getElementById('admin-stat-tx').textContent = dataStats.stats.total_transactions;
    }

    const resUsers = await authFetch('/admin/users');
    const dataUsers = await resUsers.json();
    const container = document.getElementById('admin-users-list');

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
    }
  } catch (err) {
    console.error('Failed to load admin data:', err);
  }
}

// -----------------------------------------------------------------------------
// DATA REFRESH & FETCHING
// -----------------------------------------------------------------------------
async function refreshAllData() {
  if (!currentUser) return;
  await Promise.all([
    fetchIdealBalance(),
    fetchIncomes(),
    fetchBudgets(),
    fetchFinancialGoals(),
    fetchTransactions()
  ]);
}

async function fetchIdealBalance() {
  try {
    const res = await authFetch(`/calculate-ideal-balance?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    const data = await res.json();
    if (data.status === 'SUCCESS') {
      appState.idealBalanceData = data;
      appState.monthStatus = data.period.month_status || 'CURRENT_PROJECTION';
      renderHeroCard();
      renderCashReality();
      renderFlowFormula();
    }
  } catch (err) {
    console.error('Failed to fetch ideal balance:', err);
  }
}

async function fetchIncomes() {
  try {
    const res = await authFetch(`/incomes?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    const data = await res.json();
    if (data.status === 'SUCCESS' && Array.isArray(data.incomes)) {
      appState.incomes = data.incomes;
    } else {
      appState.incomes = [];
    }
    renderIncomesLists();
  } catch (err) {
    console.error('Failed to fetch incomes:', err);
    appState.incomes = [];
    renderIncomesLists();
  }
}

async function fetchBudgets() {
  try {
    const res = await authFetch(`/budgets?period_month=${encodeURIComponent(appState.currentMonth)}&period_year=${encodeURIComponent(appState.currentYear)}`);
    const data = await res.json();
    if (data.status === 'SUCCESS' && Array.isArray(data.budgets)) {
      appState.budgets = data.budgets;
    } else {
      appState.budgets = [];
    }
    renderBudgetsLists();
  } catch (err) {
    console.error('Failed to fetch budgets:', err);
    appState.budgets = [];
    renderBudgetsLists();
  }
}

async function fetchFinancialGoals() {
  try {
    const res = await authFetch('/financial-goals');
    const data = await res.json();
    if (data.status === 'SUCCESS') {
      appState.financialGoals = Array.isArray(data.goals) ? data.goals : [];
      renderGoalsList();
      populateGoalDropdowns();
    }
  } catch (err) {
    console.error('Failed to fetch goals:', err);
  }
}

async function fetchTransactions() {
  try {
    const res = await authFetch('/transactions');
    const data = await res.json();
    if (data.status === 'SUCCESS') {
      appState.transactions = Array.isArray(data.transactions) ? data.transactions : [];
      renderTransactionsTable();
    }
  } catch (err) {
    console.error('Failed to fetch transactions:', err);
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

  periodLabel.textContent = `${appState.currentMonth} ${appState.currentYear}`;

  if (appState.monthStatus === 'PAST_EVALUATION') {
    heroCard.className = 'card hero-card evaluation-mode';
    heroSubtitle.textContent = 'EVALUASI ARUS KAS AKHIR BULAN';
    modeBadge.className = 'mode-badge evaluation';
    modeBadge.textContent = '📜 Mode Evaluasi';

    const netSurplus = d.calculation_breakdown.total_pendapatan - d.actual_vs_ideal_comparison.total_realisasi_used_to_date;
    heroAmount.textContent = formatIDR(netSurplus);

    timeProgressLabel.textContent = `Bulan Ditutup (Evaluasi Penuh ${d.period.total_days_in_month} Hari - 100%)`;
    timeProgressBar.style.width = '100%';
    timeProgressBar.style.background = netSurplus >= 0 ? '#10B981' : '#EF4444';

    document.getElementById('hero-stat-income-label').textContent = 'Total Pemasukan';
    document.getElementById('hero-stat-income').textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    document.getElementById('hero-stat-burn-label').textContent = 'Total Realisasi Terpakai';
    document.getElementById('hero-stat-burn').textContent = formatIDR(d.actual_vs_ideal_comparison.total_realisasi_used_to_date);

  } else if (appState.monthStatus === 'FUTURE_PLANNING') {
    heroCard.className = 'card hero-card';
    heroSubtitle.textContent = 'PERENCANAAN ANGGARAN AWAL';
    modeBadge.className = 'mode-badge planning';
    modeBadge.textContent = '📅 Mode Perencanaan';

    const ideal = d.calculation_breakdown.total_pendapatan - d.calculation_breakdown.total_target_bulanan_100pct;
    heroAmount.textContent = formatIDR(ideal);

    timeProgressLabel.textContent = `Fase Perencanaan Awal (Hari ke-0 dari ${d.period.total_days_in_month} hari)`;
    timeProgressBar.style.width = '0%';

    document.getElementById('hero-stat-income-label').textContent = 'Total Rencana Pemasukan';
    document.getElementById('hero-stat-income').textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    document.getElementById('hero-stat-burn-label').textContent = 'Total Target Anggaran';
    document.getElementById('hero-stat-burn').textContent = formatIDR(d.calculation_breakdown.total_target_bulanan_100pct + d.calculation_breakdown.total_target_harian_mingguan);

  } else {
    heroCard.className = 'card hero-card';
    heroSubtitle.textContent = 'PROYEKSI SALDO IDEAL';
    modeBadge.className = 'mode-badge projection';
    modeBadge.textContent = '⚡ Proyeksi Berjalan';

    const ideal = d.calculation_breakdown.proyeksi_saldo_ideal;
    heroAmount.textContent = formatIDR(ideal);

    const currentDay = d.period.current_day;
    const totalDays = d.period.total_days_in_month;
    const ratioPct = d.period.time_elapsed_percentage;

    timeProgressLabel.textContent = `Hari ke-${currentDay} dari ${totalDays} hari (${ratioPct})`;
    timeProgressBar.style.width = ratioPct;
    timeProgressBar.style.background = 'linear-gradient(90deg, #10B981, #34D399)';

    document.getElementById('hero-stat-income-label').textContent = 'Total Pemasukan';
    document.getElementById('hero-stat-income').textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    document.getElementById('hero-stat-burn-label').textContent = 'Burn Rutin Berjalan';
    document.getElementById('hero-stat-burn').textContent = formatIDR(d.calculation_breakdown.proportional_burn_rate_variable);
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

  document.getElementById('total-cash-figure').textContent = formatIDR(totalCash);

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
    resultBox.className = 'reality-status-box overbudget';
    statusBadge.className = 'status-badge overbudget';
    statusLabel.textContent = 'OVERBUDGET';
    
    diffFigure.className = 'difference-figure overbudget';
    diffFigure.textContent = formatIDR(diff);
    
    descText.className = 'status-description-text overbudget';
    descText.innerHTML = `⚠️ Total kas Anda saat ini <strong>${formatIDR(Math.abs(diff))} lebih rendah</strong> dari batas proyeksi ideal hari ini. Disarankan membatasi pengeluaran.`;
  } else {
    resultBox.className = 'reality-status-box hemat';
    statusBadge.className = 'status-badge hemat';
    statusLabel.textContent = 'HEMAT';
    
    diffFigure.className = 'difference-figure hemat';
    diffFigure.textContent = diff === 0 ? 'Rp 0' : `+${formatIDR(diff)}`;
    
    descText.className = 'status-description-text hemat';
    descText.innerHTML = `✅ Arus kas Anda sangat sehat! Total kas Anda <strong>${formatIDR(diff)} lebih surplus</strong> dibanding target burn rate proporsional hari ini.`;
  }
}

// -----------------------------------------------------------------------------
// 3. RENDER ADVANCED VISUAL ARITHMETIC FLOW FORMULA WIDGET
// -----------------------------------------------------------------------------
function renderFlowFormula() {
  const d = appState.idealBalanceData;
  if (!d) return;

  const b = d.calculation_breakdown;
  document.getElementById('flow-val-income').textContent = formatIDR(b.total_pendapatan);
  document.getElementById('flow-val-bulanan').textContent = formatIDR(b.total_target_bulanan_100pct);
  document.getElementById('flow-sub-harian').textContent = `${formatIDR(b.total_target_harian_mingguan)} x ${d.period.time_elapsed_percentage} rasio`;
  document.getElementById('flow-val-harian').textContent = formatIDR(b.proportional_burn_rate_variable);
  document.getElementById('flow-val-result').textContent = formatIDR(b.proyeksi_saldo_ideal);
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
      const balance = Number(item.balance);
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
// 5. RENDER GOALS & INVESTMENT BREAKDOWN
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
// 6. RENDER TRANSACTIONS & MUTASI BANK PAGE
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

  await authFetch('/incomes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      period_month: appState.currentMonth,
      period_year: appState.currentYear,
      source_name: source,
      amount: amount
    })
  });

  document.getElementById('add-income-modal').classList.remove('active');
  refreshAllData();
}

async function deleteIncome(id) {
  if (confirm('Hapus sumber pemasukan ini?')) {
    await authFetch(`/incomes?income_id=${id}`, { method: 'DELETE' });
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

  await authFetch('/budgets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      period_month: appState.currentMonth,
      period_year: appState.currentYear,
      category_type: cat,
      item_name: name,
      nominal_satuan: satuan,
      frekuensi: freq,
      multiplier: mult,
      target_anggaran: satuan * mult,
      timing_pattern: timing,
      linked_goal_id: linkedGoal
    })
  });

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
    } else {
      txContainer.innerHTML = `<div style="font-size: 0.72rem; color: var(--text-secondary);">Belum ada mutasi debit tercatat untuk pos ini.</div>`;
    }
  } catch (err) {
    txContainer.innerHTML = `<div style="font-size: 0.72rem; color: var(--accent-warning);">Gagal memuat transaksi.</div>`;
  }

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

  await authFetch('/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      transaction_date: date,
      budget_id: item.budget_id,
      goal_id: item.linked_goal_id,
      transaction_type: 'Expense',
      amount: amount,
      payment_method_platform: 'Manual Input',
      description: desc
    })
  });

  document.getElementById('manual-tx-desc').value = '';
  document.getElementById('manual-tx-amount').value = '';
  document.getElementById('budget-detail-modal').classList.remove('active');
  refreshAllData();
}

async function deleteSelectedBudget() {
  const item = appState.selectedBudgetItem;
  if (!item) return;

  if (confirm(`Hapus pos anggaran '${item.item_name}'?`)) {
    await authFetch(`/budgets?budget_id=${item.budget_id}`, { method: 'DELETE' });
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

  await authFetch('/financial-goals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      goal_code: code,
      goal_name: name,
      target_year: targetYear,
      time_frame: `Tahun ${targetYear}`,
      target_amount: target,
      current_amount: initial,
      target_instrument: inst,
      status: 'Active'
    })
  });

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

  const newCurrent = (Number(g.current_amount) || 0) + amount;
  await authFetch(`/financial-goals?goal_id=${g.goal_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ current_amount: newCurrent })
  });

  document.getElementById('deposit-goal-amount').value = '';
  document.getElementById('detail-goal-modal').classList.remove('active');
  refreshAllData();
}

async function deleteSelectedGoal() {
  const g = appState.selectedGoalItem;
  if (!g) return;

  if (confirm(`Hapus sasaran keuangan '${g.goal_name}'?`)) {
    await authFetch(`/financial-goals?goal_id=${g.goal_id}`, { method: 'DELETE' });
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

  const res = await authFetch('/duplicate-month-budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source_month: srcMonth,
      source_year: srcYear,
      target_month: tgtMonth,
      target_year: tgtYear
    })
  });

  const data = await res.json();
  if (data.status === 'SUCCESS') {
    alert(`✅ Berhasil menduplikasi anggaran dari ${srcMonth} ${srcYear} ke ${tgtMonth} ${tgtYear}!`);
    document.getElementById('duplicate-modal').classList.remove('active');
    appState.currentMonth = tgtMonth;
    appState.currentYear = tgtYear;
    document.getElementById('select-month').value = tgtMonth;
    document.getElementById('select-year').value = tgtYear;
    refreshAllData();
  } else {
    alert(data.message || 'Gagal menduplikasi anggaran');
  }
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

        const res = await authFetch('/import-excel-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            target_month: targetM,
            target_year: targetY,
            incomes: incomes,
            budgets: budgets
          })
        });

        const data = await res.json();
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

      try {
        const res = await authFetch('/reconcile-csv', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            period_month: targetM,
            period_year: targetY,
            csv_content: rawContent
          })
        });
        const data = await res.json();
        if (data.status === 'SUCCESS') {
          alert(`✅ Rekonsiliasi Mutasi Berhasil!\n\n• Periode: ${targetM} ${targetY}\n• Mutasi Dicocokkan: ${data.reconciliation_summary.matched_count} transaksi\n• Total Realisasi Terekonsiliasi: ${formatIDR(data.reconciliation_summary.total_amount_reconciled)}`);
          appState.currentMonth = targetM;
          appState.currentYear = targetY;
          document.getElementById('select-month').value = targetM;
          document.getElementById('select-year').value = targetY;
          refreshAllData();
          switchView('view-dashboard');
        } else {
          alert('Gagal rekonsiliasi: ' + data.message);
        }
      } catch (err) {
        alert('Error rekonsiliasi: ' + err.message);
      }
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

  monthSelect.value = appState.currentMonth;
  yearSelect.value = appState.currentYear;

  monthSelect.addEventListener('change', (e) => {
    appState.currentMonth = e.target.value;
    appState.budgets = [];
    appState.incomes = [];
    renderBudgetsLists();
    renderIncomesLists();
    refreshAllData();
  });

  yearSelect.addEventListener('change', (e) => {
    appState.currentYear = parseInt(e.target.value);
    appState.budgets = [];
    appState.incomes = [];
    renderBudgetsLists();
    renderIncomesLists();
    refreshAllData();
  });

  // Multi-Account Cash Inputs
  const bankInput = document.getElementById('cash-bank-input');
  const walletInput = document.getElementById('cash-wallet-input');
  const emoneyInput = document.getElementById('cash-emoney-input');
  const otherInput = document.getElementById('cash-other-input');

  function handleCashInputChange() {
    appState.cashAccounts.bank = parseFloat(bankInput.value) || 0;
    appState.cashAccounts.wallet = parseFloat(walletInput.value) || 0;
    appState.cashAccounts.emoney = parseFloat(emoneyInput.value) || 0;
    appState.cashAccounts.other = parseFloat(otherInput.value) || 0;
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

  if (currentUser) {
    refreshAllData();
  }
});

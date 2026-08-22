// ==============================================================================
// FlowTrack Pro: Mobile-First Client Logic & Resilient Local-Cloud Sync Engine
// Complete Bilingual I18N Engine (ID / EN), Volumetric 3D Badges,
// Collapsible Flow Formula, Category Summaries, PDF.js BCA Parser, Unified Pengeluaran
// ==============================================================================

const API_BASE = window.location.origin;

const MONTH_NAMES_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const MONTH_NAMES_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const OPERATING_ANCHOR_YEAR = 2026;
const OPERATING_ANCHOR_MONTH_INDEX = 7; // 7 = Agustus (0-indexed)
const OPERATING_ANCHOR_DAY = 22;

// Embedded Initial Data Store for Instant Performance & Cloud/Vercel Resilience
const EMBEDDED_ADMIN_DATA = {
  incomes: [{"income_id":"8c096362-a77b-4689-8d1e-36d6c16a3d70","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"BCA","amount":2350000},{"income_id":"2624bba6-4e0f-4602-9f20-7b510f0a43e9","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"Saham","amount":830000},{"income_id":"1cfc584d-1903-418f-b484-e4d8758b5f17","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"BPJS TK","amount":4350000},{"income_id":"bfb58b1c-1faa-40a5-92a1-6ac69a23c99a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"BCA","amount":2350000},{"income_id":"2c0212f1-a04b-49fa-90bf-9a6397435bb2","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"Saham","amount":830000},{"income_id":"45a7f7b5-454a-4288-a0cf-f5fd8b5b4bc2","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"BPJS TK","amount":4350000},{"income_id":"2764fb5d-8391-4e86-a229-48a326e9b043","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"source_name":"Gaji","amount":4400000},{"income_id":"12543a5c-607e-47eb-8997-8def965648eb","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"90fef87d-0a2a-4b8d-9af9-f6871a7137f0","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Piutang","amount":500000},{"income_id":"4bef9148-900c-42be-8fbc-751dd3491a85","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Sisa Maret","amount":500000},{"income_id":"63f18c4d-6eca-482a-9c61-83910bc10158","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Lynk.id","amount":590000},{"income_id":"200a3b23-330b-4292-b6fb-241223c10578","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"PP - MySkill","amount":130000},{"income_id":"28dd1f37-1bd0-477f-83a7-a717186cdc18","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Ambil Dana Darurat","amount":900000},{"income_id":"d64d4fb8-742a-4b4b-a5a2-b5b767176f86","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Jual sepeda","amount":900000},{"income_id":"83334c39-9e55-4863-88cf-00274b893f54","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"16a9a2f7-e83e-44cc-85f2-0c5c44d23c2b","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Untung WBSA","amount":350000},{"income_id":"32646be2-f8ab-40eb-9b42-4aabaecae3e9","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Lynk.id","amount":375000},{"income_id":"c8f4b6d1-82ac-499c-b186-d50494834920","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP - Kita Lulus","amount":300000},{"income_id":"a3e5346c-d7d7-498f-8c6a-32f030479db1","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP- Cocareer","amount":220000},{"income_id":"8cfbf50b-a9b0-42ad-863f-6135fc388c55","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Reimburse","amount":560000},{"income_id":"3f874690-ef56-47c9-91e8-d2270ae9fd6d","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Sisa bulan April","amount":380000},{"income_id":"a1f1fd68-ede5-4b0e-bb2f-69ca0b2a3d24","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP - Parfum","amount":275000},{"income_id":"8b9f6f6a-e4fc-443a-b8fb-882c18ee0463","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"1e524670-d07f-491e-ae18-68d53bd40624","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"PP - Tempat Belajar","amount":350000},{"income_id":"71a4022e-57d5-45a2-8a1b-b3e5116f9c6a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"PP - Barber Daily","amount":300000},{"income_id":"fc7387a3-4c16-4c89-8fda-4688d8913eb8","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"Abah","amount":500000},{"income_id":"5e549e83-6006-4e2b-b99b-e977090c8ca4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Gaji","amount":12500000},{"income_id":"fffe0290-9b8c-4ef4-912d-c54c5f8db425","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"PP - Wanda","amount":300000},{"income_id":"016c63b4-3e24-4ae3-a8c4-7271a06e5ffb","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Lynk.id","amount":300000},{"income_id":"6b63b794-56de-4fc3-9650-9f4996d6c543","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Sisa bulan lalu","amount":350000},{"income_id":"c88e95b7-fed6-4bb6-afcb-1ba0b1e2cced","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Gaji","amount":12500000},{"income_id":"cd823470-be5c-432f-bb81-824a33cda139","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual Smartwatch","amount":322000},{"income_id":"1fd1c29a-150b-4d20-839e-a9a940d1c4d6","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Sisa Bulan Juli","amount":300000},{"income_id":"9deb37b3-84b8-48a9-a9b7-418205e6e53f","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual MyPertamina","amount":120000},{"income_id":"e50f94de-d6af-45d0-9f18-dd770c0c4293","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual Proyektor","amount":320000}],
  budgets: [{"budget_id":"67af5a6e-3fe1-4eb8-95c1-7fdfcd9addd4","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":8,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"4bb12f92-5fdb-49a9-9f99-3a0a54b03dbe","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d37b8700-52fc-4c12-a343-07f44a6f8078","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"b58f8804-75a0-4ae4-8248-058a9446a1e2","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7346f85a-38ef-4ea0-92e8-46ae37a82c96","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8b4ee81b-4dc2-44d1-9a5b-ef312863fb64","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":35000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":35000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"b3608a40-69c7-4916-b489-43b504a1dfd3","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"dfb2c6d9-11bb-47f7-ab6d-86f7eff49378","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":150000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"440b1a64-80af-4b2d-be40-61ab6d3b3230","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":400000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8b8425cb-d4a9-4254-833a-cae3a1e9b170","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":270000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":270000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"da9b2d3e-2127-4f53-99c5-d2c33c6d5ae6","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Insidental","item_name":"Persiapan OJT","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"3f6e1565-711e-4b87-9a7b-8240a53cfe57","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":3200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"4ab9e743-83f7-4ca4-a29d-b17fc9bfcb27","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":8,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"66150e41-41d3-430a-baaf-36e17e0e92b0","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"606d21c9-3b5a-4ef2-92a4-5ce9b7e5c727","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7fe218b2-6dc6-403f-9d1d-a0d7611a4cd7","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7d33eca7-c153-4939-b3d8-1721bc15713a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"029039bc-40a2-4d81-9dd8-b6fa76c0c34a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":35000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":35000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7186b4da-d717-466c-9a86-5cf1a73337d0","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"09a8c25f-b87a-46f0-8c80-b18175b3143c","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":150000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"4419543a-6a96-4126-aafa-b8156dc6a2be","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":400000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d1772225-f3fe-44eb-a0b6-d8f95ed1f033","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":270000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":270000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bcd43408-0eba-4262-8596-4351aabf0e5b","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Insidental","item_name":"Persiapan OJT","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"599148f5-1ad8-4306-8cff-8ca6e96a746e","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":3200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"952a9379-8e18-4be9-bc54-0c9a40def6bb","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":31,"target_anggaran":1550000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e187c8cb-22cb-4e1a-afd0-f66ade00d5f6","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":35000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":140000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ebf4d924-db4a-43a4-a184-68b26c1a7dfc","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"dbb75461-41a4-49eb-8a3c-b2412bc7bba9","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"449fea21-ed5d-410f-b8af-06c44b23dfa6","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2f4f4dfe-69fb-457f-a7a3-45a41ff5380d","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9b1b113b-eacb-40ec-b884-a1662edb6a7f","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1175000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1175000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c8bc392a-1439-422b-918b-2bed9d308603","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1f30e796-6be8-483f-8bc0-9360e26febe7","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"0a3bff5f-7783-4e1d-abf8-51f703ab26e5","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Paketin ke Jakarta","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"fcd68ae5-7b83-4dd4-ac17-a3c5a6ee4e4c","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"e4e2423e-8436-4dfc-a7a0-585bf3f0ba6d","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d6a18251-ee17-462b-bbcc-db59cd354031","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":35000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":140000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e2570e62-eb4e-465c-801c-360c33184b75","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"0f5c70b8-7b77-4244-89e3-6c77a0ba131f","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"5fee46a1-22af-44ab-87ab-6dfd05a9d269","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"be6fa705-57b8-42ee-b2db-621121e65d85","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"304c9ac6-fe18-41d4-ab48-822449418eba","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ea48dab7-ebcb-4bd9-8f9c-20331e3a7216","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"048783b4-cb28-4fde-a9fb-a28473416c7d","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a99da754-fe4a-4a00-96bb-ed89b8ec04e8","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Hadiah sidang","nominal_satuan":325000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":325000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a15b2333-c499-4e9b-86e6-18dd955e0af8","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Beli panci listrik","nominal_satuan":150000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":150000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1d3b3194-bf66-4f11-8f9c-cd6108aa4629","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Jalan jalan Jakarta","nominal_satuan":620000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":620000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"27fbfb73-b87d-463b-8a26-81dd0c99876f","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Beli sepeda","nominal_satuan":3850000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3850000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2af880fb-6a43-40f9-83bb-11921c0955c3","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Pindah bulan depan","nominal_satuan":380000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":380000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"143c81cc-c9ca-4f76-8d1a-dcd00b254f00","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":16,"target_anggaran":800000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e849bb87-6966-40f7-bdfd-36f89ccd8674","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":60000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":120000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2576cfc1-a540-4dd4-9110-f06a64d492cc","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":1,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8a93f9ee-208c-4f25-a781-3b34d2a7860f","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"904cd941-f9ef-4592-b923-b759d7038ddd","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"82fad313-bd89-4eca-a8e8-2b0f20adba8e","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"005454d0-be4d-4cb6-afa5-5a0e98ffe897","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9273c490-bc53-4c4b-9f03-1f1f8a24bd77","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":225000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2b74ac3d-61c1-4cfc-8de1-1117a67c12de","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":730000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":730000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a9184aa1-6562-4f14-a2dd-c9fe50d07747","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Maketin barang ke Tegal","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a1a78ee5-01ea-475c-b51c-7814299b6ba1","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Ngecilin Baju","nominal_satuan":150000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":150000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c5819a06-c084-4179-9c5f-82961f1db2cb","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Selama di Hotel","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d0b0f385-0927-4702-9348-ffdf849f5f56","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Selama di Tegal","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"99513db4-d99c-43a1-a5d1-37fa25305524","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"PP Jogja Tegal","nominal_satuan":700000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":700000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"08471783-9e18-440a-97e6-bc1197657553","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":2500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"3bb58573-c6d6-4a53-a975-98f3659a063d","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"98767598-4bcc-4ecd-9951-69c937daab48","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":50000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ef5f7d09-03d9-445d-88f6-9f4c265f099b","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":60000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"528882dd-a590-452d-b8aa-b512742c2b64","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d4fc6d78-2304-459c-80c1-bc8f54f55658","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"6353ec78-80e5-4432-a289-cf67a62591b5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"699f1396-f770-4b9f-9478-bc9358a67b3a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a7ed5e9f-2d7e-4a13-a255-4ee5c5395ae8","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"3ded7598-e9a6-4e6b-99ff-7bb7f39275d5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bc3dd387-08df-48d7-8c96-9e475f1f1a08","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ea45a3fe-c90b-4cf2-983a-931bad914a10","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Casing + TG + Jersey Sepeda","nominal_satuan":550000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":550000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c71b799c-125d-4668-b481-d06a425a5ddc","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Insidental","item_name":"Beli HP Zakiya","nominal_satuan":2125000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2125000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e75e9303-6750-4488-a986-061a60598487","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"47947098-ad53-40b7-9f1a-7c36baa6d395","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":160000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"5ca43fd5-5f33-44ab-a21a-5a35ab42aab4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":60000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"71098e76-7bc1-4839-9c05-5def4959a02a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ae301344-c51e-4d74-8021-7b6d8901ebfd","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"36136dd3-5bd6-44c7-bd56-fea9d84873fe","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":50000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":50000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2bce0c8e-6086-497f-bf0d-a010f3d9b595","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1201b345-af5c-412c-b654-3f7b96c535f4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1a5cc21d-4ed8-4af1-ad82-38578be4d310","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"916b1aae-0ae4-4ac6-b772-18fba144ec02","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"Ortu","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bd0fb21f-df3d-482c-8285-0ee0ea13672c","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"Zidni","nominal_satuan":500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c44dc3bc-5482-4672-9163-51ab60fbb7d5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":2610000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2610000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9c68caa5-fd3e-4616-857f-7f15e442569c","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"UKT Zidni","nominal_satuan":750000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":750000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"76694a4b-8977-4f86-ab6b-301b2804a2b5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":4440000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":4440000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"}],
  goals: []
};

// -----------------------------------------------------------------------------
// BILINGUAL I18N SYSTEM (BAHASA INDONESIA & ENGLISH)
// -----------------------------------------------------------------------------
let currentLang = localStorage.getItem('flowtrack_lang') || 'id';

const I18N = {
  id: {
    appSub: 'Smart Cashflow & Burn Tracker',
    landingSub: 'Kelola arus kas, proyeksi saldo ideal, dan burn rate proporsional dalam satu aplikasi pintar.',
    lblLoginEmail: 'Email atau Username',
    lblLoginPass: 'Password',
    btnLoginSubmit: 'ðŸ” Masuk Sekarang',
    lblRegUser: 'Username Baru',
    lblRegEmail: 'Alamat Email',
    lblRegPass: 'Password',
    regHelper: 'âœ¨ Pengguna baru akan otomatis dibuatkan kerangka pos anggaran dengan seluruh nominal 0 (kanvas bersih).',
    btnRegSubmit: 'ðŸš€ Buat Akun & Mulai',
    navDashboard: 'Dashboard',
    navBudgets: 'Anggaran',
    navExpenses: 'Pengeluaran',
    navGoals: 'Goals',
    navAdmin: 'Admin',
    navFeedback: 'Feedback',
    operatingModeEvaluation: 'Mode Evaluasi (Bulan Ditutup)',
    operatingModePlanning: 'Mode Perencanaan (Awal Bulan)',
    operatingModeProjection: 'Proyeksi Berjalan',
    heroSubtitleProjection: 'PROYEKSI SALDO IDEAL',
    heroSubtitleEvaluation: 'EVALUASI ARUS KAS AKHIR BULAN',
    heroSubtitlePlanning: 'PERENCANAAN ANGGARAN AWAL',
    timeElapsed: 'Waktu Berjalan',
    heroStatIncome: 'Total Pemasukan',
    heroStatBurnProjection: 'Target Burn Jatuh Tempo',
    heroStatBurnEvaluation: 'Total Realisasi Terpakai',
    heroStatBurnPlanning: 'Total Target Anggaran',
    heroToggleHintOpen: 'âœ¨ Klik untuk Buka Alur Perhitungan Saldo Ideal â–¾',
    heroToggleHintClose: 'âœ¨ Klik untuk Tutup Alur Perhitungan Saldo Ideal â–´',
    realityTitle: 'Input Realita Kas Anda',
    realitySub: 'Saldo Dompet & Rekening',
    accBank: 'Saldo di Bank',
    accWallet: 'Cash on Hand',
    accEmoney: 'Saldo E-Money',
    accOther: 'Lain-lain',
    totalCashLbl: 'Total Kas Riil Tersedia:',
    statusRowLbl: 'Status Arus Kas:',
    statusOverbudget: 'OVERBUDGET',
    statusHemat: 'HEMAT',
    notesHeader: 'Catatan & Justifikasi Kas',
    notesAutoSaved: 'Tersimpan Otomatis',
    notesPlaceholder: 'Tulis alasan jika overbudget atau catatan kas mendesak bulan ini...',
    flowTitle: 'Alur Perhitungan Saldo Ideal',
    flowBadge: 'Formula Ringkas',
    flowLblInc: 'Pemasukan Bulan Ini',
    flowLblBulanan: 'Kebutuhan Bulanan (100%)',
    flowSubBulanan: 'Sewa Kos, Listrik, Pulsa',
    flowLblVariable: 'Pengeluaran Rutin Berjalan',
    flowSubVariable: 'Kebutuhan Pos Terjadwal',
    flowLblResult: 'Proyeksi Saldo Ideal Hari Ini',
    flowSubResult: 'Batas aman saldo dompet hari ini',
    summaryBudgetTitle: 'Ringkasan Pos Anggaran (Per Komponen)',
    btnQuickBudget: 'Kelola Pos âž”',
    btnViewAll: 'ðŸ“‹ Lihat Seluruh Rincian Pos di Halaman Anggaran âž”',
    cbTitle: 'Control Balance (Zero-Based)',
    cbBtnSync: 'Alokasikan Surplus',
    cbLblIncome: 'Pemasukan',
    cbLblBudget: 'Total Anggaran',
    cbLblDiff: 'Sisa / Selisih',
    cbBalanced: 'Seimbang Rp 0',
    cbSurplusUnallocated: 'Surplus Belum Dialokasikan',
    cbDeficit: 'Defisit / Over-Allocated',
    incomesTitle: 'Pemasukan Bulan Ini',
    btnAddIncome: '+ Pemasukan',
    budgetsTitle: 'Daftar Pos Pengeluaran',
    btnDupBudget: 'Salin Bulan',
    btnAddBudget: 'âž• + Pos Anggaran',
    realizedTitle: 'Daftar Seluruh Pengeluaran Realized',
    btnAddExpense: 'âž• + Catat Pengeluaran',
    interimTitle: 'Upload & Rekonsiliasi Mutasi Bank',
    interimDesc: 'Unggah mutasi rekening (format .PDF Rekening Tahapan BCA, .CSV, atau .TXT) untuk otomatis membaca transaksi dan merealisasikan pos anggaran.',
    lblUploadFile: 'Pilih Berkas Mutasi (PDF / CSV / TXT):',
    btnProcessInterim: 'ðŸš€ Proses Mutasi Realisasi',
    btnSampleInterim: 'Contoh BCA',
    txHistoryTitle: 'Riwayat Transaksi Terekonsiliasi:',
    aiBadge: 'AI Financial Advisor',
    analyticsMonthTitle: 'Analisis Realisasi Pengeluaran',
    btnRefreshAi: 'âœ¨ Refresh AI',
    aiLblScore: 'Skor Disiplin',
    aiLblRealized: 'Total Realisasi',
    aiLblAvg: 'Batas Aman Harian',
    aiDiagHeader: 'ðŸ’¡ Diagnosa & Rekomendasi AI:',
    goalsTitle: 'Portofolio & Target Keuangan',
    btnAddGoal: 'ðŸŽ¯ + Goal Baru',
    goalsDesc: 'Kelola sasaran tabungan dan investasi jangka panjang Anda. Pos anggaran kategori Alokasi Surplus terhubung langsung ke sasaran target di sini.',
    adminTitle: 'ðŸ›¡ï¸ Admin Master Control',
    adminDesc: 'Panel kontrol administrator untuk melihat daftar pengguna terdaftar dan masukan rating dari pengguna.',
    adminStatUsersLbl: 'ðŸ‘¥ Total Pengguna Terdaftar',
    adminStatRatingLbl: 'â­ Rata-rata Rating Feedback',
    adminUsersTitle: 'Direktori Pengguna Terdaftar',
    btnRefreshAdmin: 'ðŸ”„ Refresh Data',
    adminFbTitle: 'ðŸ“¬ Kotak Masukan & Feedback Pengguna',
    feedbackTitle: 'ðŸ’¬ Kirim Feedback & Saran',
    badgeHelp: 'Bantuan',
    feedbackDesc: 'Punya ide fitur baru, menemukan kendala, atau ingin memberikan masukan tampilan? Tuliskan saran Anda langsung ke tim Admin.',
    lblFbCat: 'Kategori Masukan',
    lblFbRating: 'Rating Kepuasan Anda',
    lblFbSubj: 'Subjek / Topik',
    lblFbMsg: 'Isi Pesan / Masukan Detail',
    btnFbSubmit: 'ðŸš€ Kirim Feedback ke Admin',
    userFbHistoryTitle: 'Riwayat Feedback Terkirim',
    btnRefreshUserFb: 'ðŸ”„ Refresh',
    catSemua: 'Semua',
    catDasar: 'Dasar (Pokok)',
    catPribadi: 'Pribadi',
    catHiburan: 'Hiburan',
    catInsidental: 'Insidental',
    catSurplus: 'Alokasi Goal',
    usedWord: 'Terpakai: ',
    remWord: 'Sisa ',
    minusWord: 'Minus ',
    dateWord: 'Tgl: ',
    flatWord: 'Flat Harian',
    dayWord: 'Hari',
    ofWord: 'dari',
    daysWord: 'hari',
    perDayWord: '/hari'
  },
  en: {
    appSub: 'Smart Cashflow & Burn Tracker',
    landingSub: 'Manage cashflow, ideal balance projections, and proportional burn rates in one smart app.',
    lblLoginEmail: 'Email or Username',
    lblLoginPass: 'Password',
    btnLoginSubmit: 'ðŸ” Sign In Now',
    lblRegUser: 'New Username',
    lblRegEmail: 'Email Address',
    lblRegPass: 'Password',
    regHelper: 'âœ¨ New users will automatically receive a clean budget framework with 0 balance (fresh canvas).',
    btnRegSubmit: 'ðŸš€ Create Account & Start',
    navDashboard: 'Dashboard',
    navBudgets: 'Budgets',
    navExpenses: 'Expenses',
    navGoals: 'Goals',
    navAdmin: 'Admin',
    navFeedback: 'Feedback',
    operatingModeEvaluation: 'Evaluation Mode (Closed Month)',
    operatingModePlanning: 'Planning Mode (Start of Month)',
    operatingModeProjection: 'Operating Projection',
    heroSubtitleProjection: 'IDEAL BALANCE PROJECTION',
    heroSubtitleEvaluation: 'MONTH-END CASHFLOW EVALUATION',
    heroSubtitlePlanning: 'EARLY BUDGET PLANNING',
    timeElapsed: 'Time Elapsed',
    heroStatIncome: 'Total Income',
    heroStatBurnProjection: 'Target Burn To Date',
    heroStatBurnEvaluation: 'Total Realized Spent',
    heroStatBurnPlanning: 'Total Target Budget',
    heroToggleHintOpen: 'âœ¨ Click to View Cashflow Calculation Flow â–¾',
    heroToggleHintClose: 'âœ¨ Click to Close Cashflow Calculation Flow â–´',
    realityTitle: 'Input Real Cash Accounts',
    realitySub: 'Wallet, Bank & E-Money Balances',
    accBank: 'Bank Balance',
    accWallet: 'Cash on Hand',
    accEmoney: 'E-Money / Wallet',
    accOther: 'Other Accounts',
    totalCashLbl: 'Total Actual Cash Available:',
    statusRowLbl: 'Cashflow Status:',
    statusOverbudget: 'OVERBUDGET',
    statusHemat: 'ON-TRACK',
    notesHeader: 'Cash & Overbudget Notes',
    notesAutoSaved: 'Auto-Saved',
    notesPlaceholder: 'Write reasons for overbudget or urgent expenses this month...',
    flowTitle: 'Cashflow Projection Formula',
    flowBadge: 'Summary Formula',
    flowLblInc: 'Monthly Income',
    flowLblBulanan: 'Monthly Fixed Needs (100%)',
    flowSubBulanan: 'Rent, Utilities, Bills',
    flowLblVariable: 'Scheduled Variable Expenses',
    flowSubVariable: 'Scheduled Due Categories',
    flowLblResult: 'Today\'s Ideal Balance',
    flowSubResult: 'Safe wallet balance limit today',
    summaryBudgetTitle: 'Budget Summary (By Component)',
    btnQuickBudget: 'Manage âž”',
    btnViewAll: 'ðŸ“‹ View All Category Breakdown in Budgets âž”',
    cbTitle: 'Zero-Based Control Balance',
    cbBtnSync: 'Allocate Surplus',
    cbLblIncome: 'Total Income',
    cbLblBudget: 'Total Budget',
    cbLblDiff: 'Net Difference',
    cbBalanced: 'Balanced Rp 0',
    cbSurplusUnallocated: 'Unallocated Surplus',
    cbDeficit: 'Deficit / Over-Allocated',
    incomesTitle: 'Monthly Income Sources',
    btnAddIncome: '+ Add Income',
    budgetsTitle: 'Budget Categories',
    btnDupBudget: 'Copy Month',
    btnAddBudget: 'âž• + Add Budget',
    realizedTitle: 'Realized Expense Transactions',
    btnAddExpense: 'âž• + Log Expense',
    interimTitle: 'Upload & Reconcile Bank Statement',
    interimDesc: 'Upload bank statement (.PDF BCA Tahapan, .CSV, or .TXT) to auto-extract transactions and realize budget items.',
    lblUploadFile: 'Select Statement File (PDF / CSV / TXT):',
    btnProcessInterim: 'ðŸš€ Process Statement Reconcile',
    btnSampleInterim: 'Sample BCA',
    txHistoryTitle: 'Reconciled Transactions History:',
    aiBadge: 'AI Financial Advisor',
    analyticsMonthTitle: 'Realized Spending Analysis',
    btnRefreshAi: 'âœ¨ Refresh AI',
    aiLblScore: 'Discipline Score',
    aiLblRealized: 'Total Realized',
    aiLblAvg: 'Safe Daily Limit',
    aiDiagHeader: 'ðŸ’¡ AI Diagnostics & Actionable Advice:',
    goalsTitle: 'Financial Portfolio & Target Goals',
    btnAddGoal: 'ðŸŽ¯ + New Goal',
    goalsDesc: 'Manage your long-term savings and investment milestones. Surplus Allocation budgets link directly to these targets.',
    adminTitle: 'ðŸ›¡ï¸ Admin Master Control',
    adminDesc: 'Administrator dashboard to monitor registered users and feedback satisfaction ratings.',
    adminStatUsersLbl: 'ðŸ‘¥ Total Registered Users',
    adminStatRatingLbl: 'â­ Average User Rating',
    adminUsersTitle: 'Registered Users Directory',
    btnRefreshAdmin: 'ðŸ”„ Refresh Data',
    adminFbTitle: 'ðŸ“¬ User Feedback & Inbox',
    feedbackTitle: 'ðŸ’¬ Send Feedback & Suggestions',
    badgeHelp: 'Support',
    feedbackDesc: 'Have a feature idea, found a bug, or want to suggest improvements? Write directly to the Admin team.',
    lblFbCat: 'Feedback Category',
    lblFbRating: 'Your Satisfaction Rating',
    lblFbSubj: 'Subject / Topic',
    lblFbMsg: 'Detailed Message / Feedback',
    btnFbSubmit: 'ðŸš€ Send Feedback to Admin',
    userFbHistoryTitle: 'Sent Feedback History',
    btnRefreshUserFb: 'ðŸ”„ Refresh',
    catSemua: 'All',
    catDasar: 'Basic Needs',
    catPribadi: 'Personal',
    catHiburan: 'Entertainment',
    catInsidental: 'Incidental',
    catSurplus: 'Goal Surplus',
    usedWord: 'Used: ',
    remWord: 'Remaining ',
    minusWord: 'Minus ',
    dateWord: 'Date: ',
    flatWord: 'Flat Daily',
    dayWord: 'Day',
    ofWord: 'of',
    daysWord: 'days',
    perDayWord: '/day'
  }
};

function t(key) {
  const dict = I18N[currentLang] || I18N['id'];
  return dict[key] !== undefined ? dict[key] : key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('flowtrack_lang', lang);

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');
  if (lang === 'id') {
    if (btnId) btnId.classList.add('active');
    if (btnEn) btnEn.classList.remove('active');
  } else {
    if (btnEn) btnEn.classList.add('active');
    if (btnId) btnId.classList.remove('active');
  }

  updateMonthDropdownLabels();
  applyStaticTranslations();
  updateCategoryTabsLabels();
  updateHeaderRealTimeDate();
  renderHeroCard();
  renderCashReality();
  renderControlBalance();
  renderDashboardCategorySummary();
  renderIncomesLists();
  renderBudgetsLists();
  renderGoalsList();
  renderTransactionsTable();
  if (appState.activeView === 'view-analytics') {
    generateAiAnalytics();
  }
}

function updateMonthDropdownLabels() {
  const months = currentLang === 'en' ? MONTH_NAMES_EN : MONTH_NAMES_ID;
  ['select-month', 'dup-source-month', 'dup-target-month'].forEach(selectId => {
    const el = document.getElementById(selectId);
    if (el) {
      for (let i = 0; i < el.options.length; i++) {
        el.options[i].text = months[i];
      }
    }
  });
}

function updateCategoryTabsLabels() {
  const dict = I18N[currentLang] || I18N['id'];
  document.querySelectorAll('[data-category]').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === 'Semua') btn.textContent = dict.catSemua;
    else if (cat === 'Dasar') btn.textContent = dict.catDasar;
    else if (cat === 'Pribadi') btn.textContent = dict.catPribadi;
    else if (cat === 'Hiburan') btn.textContent = dict.catHiburan;
    else if (cat === 'Insidental') btn.textContent = dict.catInsidental;
    else if (cat === 'Alokasi Surplus') btn.textContent = dict.catSurplus;
  });

  document.querySelectorAll('[data-analytics-cat]').forEach(btn => {
    const cat = btn.getAttribute('data-analytics-cat');
    if (cat === 'Semua') btn.textContent = dict.catSemua;
    else if (cat === 'Dasar') btn.textContent = dict.catDasar;
    else if (cat === 'Pribadi') btn.textContent = dict.catPribadi;
    else if (cat === 'Hiburan') btn.textContent = dict.catHiburan;
    else if (cat === 'Insidental') btn.textContent = dict.catInsidental;
    else if (cat === 'Alokasi Surplus') btn.textContent = dict.catSurplus;
  });
}

function applyStaticTranslations() {
  const dict = I18N[currentLang] || I18N['id'];
  
  const textMap = {
    'txt-landing-sub': dict.landingSub,
    'txt-lbl-login-email': dict.lblLoginEmail,
    'txt-lbl-login-pass': dict.lblLoginPass,
    'txt-btn-login-submit': dict.btnLoginSubmit,
    'txt-lbl-reg-user': dict.lblRegUser,
    'txt-lbl-reg-email': dict.lblRegEmail,
    'txt-lbl-reg-pass': dict.lblRegPass,
    'txt-btn-reg-submit': dict.btnRegSubmit,
    'txt-app-sub': dict.appSub,
    'nav-lbl-dashboard': dict.navDashboard,
    'nav-lbl-budgets': dict.navBudgets,
    'nav-lbl-expenses': dict.navExpenses,
    'nav-lbl-goals': dict.navGoals,
    'nav-lbl-admin': dict.navAdmin,
    'nav-lbl-feedback': dict.navFeedback,
    'txt-time-elapsed-lbl': dict.timeElapsed,
    'txt-reality-title': dict.realityTitle,
    'txt-reality-sub': dict.realitySub,
    'txt-acc-bank': dict.accBank,
    'txt-acc-wallet': dict.accWallet,
    'txt-acc-emoney': dict.accEmoney,
    'txt-acc-other': dict.accOther,
    'txt-total-cash-lbl': dict.totalCashLbl,
    'txt-status-row-lbl': dict.statusRowLbl,
    'txt-notes-header': dict.notesHeader,
    'txt-notes-auto-saved': dict.notesAutoSaved,
    'txt-flow-title': dict.flowTitle,
    'txt-flow-badge': dict.flowBadge,
    'txt-flow-lbl-inc': dict.flowLblInc,
    'txt-flow-lbl-bulanan': dict.flowLblBulanan,
    'txt-flow-sub-bulanan': dict.flowSubBulanan,
    'txt-flow-lbl-variable': dict.flowLblVariable,
    'txt-flow-lbl-result': dict.flowLblResult,
    'txt-flow-sub-result': dict.flowSubResult,
    'txt-summary-budget-title': dict.summaryBudgetTitle,
    'txt-btn-quick-budget': dict.btnQuickBudget,
    'txt-btn-view-all': dict.btnViewAll,
    'txt-cb-title': dict.cbTitle,
    'txt-cb-btn-sync': dict.cbBtnSync,
    'txt-cb-lbl-income': dict.cbLblIncome,
    'txt-cb-lbl-budget': dict.cbLblBudget,
    'txt-cb-lbl-diff': dict.cbLblDiff,
    'txt-incomes-title': dict.incomesTitle,
    'txt-btn-add-income': dict.btnAddIncome,
    'txt-budgets-title': dict.budgetsTitle,
    'txt-btn-dup-budget': dict.btnDupBudget,
    'txt-btn-add-budget': dict.btnAddBudget,
    'txt-realized-title': dict.realizedTitle,
    'txt-btn-add-expense': dict.btnAddExpense,
    'txt-interim-title': dict.interimTitle,
    'txt-interim-desc': dict.interimDesc,
    'txt-lbl-upload-file': dict.lblUploadFile,
    'txt-btn-process-interim': dict.btnProcessInterim,
    'txt-btn-sample-interim': dict.btnSampleInterim,
    'txt-tx-history-title': dict.txHistoryTitle,
    'txt-ai-badge': dict.aiBadge,
    'txt-btn-refresh-ai': dict.btnRefreshAi,
    'txt-ai-lbl-score': dict.aiLblScore,
    'txt-ai-lbl-realized': dict.aiLblRealized,
    'txt-ai-lbl-avg': dict.aiLblAvg,
    'txt-ai-diag-header': dict.aiDiagHeader,
    'txt-goals-title': dict.goalsTitle,
    'txt-btn-add-goal': dict.btnAddGoal,
    'txt-goals-desc': dict.goalsDesc,
    'txt-admin-title': dict.adminTitle,
    'txt-admin-desc': dict.adminDesc,
    'txt-admin-stat-users-lbl': dict.adminStatUsersLbl,
    'txt-admin-stat-rating-lbl': dict.adminStatRatingLbl,
    'txt-admin-users-title': dict.adminUsersTitle,
    'txt-btn-refresh-admin': dict.btnRefreshAdmin,
    'txt-admin-fb-title': dict.adminFbTitle,
    'txt-feedback-title': dict.feedbackTitle,
    'txt-badge-help': dict.badgeHelp,
    'txt-feedback-desc': dict.feedbackDesc,
    'txt-lbl-fb-cat': dict.lblFbCat,
    'txt-lbl-fb-rating': dict.lblFbRating,
    'txt-lbl-fb-subj': dict.lblFbSubj,
    'txt-lbl-fb-msg': dict.lblFbMsg,
    'txt-btn-fb-submit': dict.btnFbSubmit,
    'txt-user-fb-history-title': dict.userFbHistoryTitle,
    'txt-btn-refresh-user-fb': dict.btnRefreshUserFb
  };

  for (const [id, text] of Object.entries(textMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  const notesEl = document.getElementById('cash-reality-notes');
  if (notesEl) notesEl.placeholder = dict.notesPlaceholder;

  updateHeroToggleHintText();
}

function updateHeroToggleHintText() {
  const hintText = document.getElementById('hero-toggle-hint-text');
  const formulaSec = document.getElementById('flow-formula-section');
  if (hintText && formulaSec) {
    const isVisible = formulaSec.style.display !== 'none';
    hintText.textContent = isVisible ? t('heroToggleHintClose') : t('heroToggleHintOpen');
  }
}

function toggleFlowFormula() {
  const formulaSec = document.getElementById('flow-formula-section');
  if (!formulaSec) return;
  const isHidden = formulaSec.style.display === 'none';
  formulaSec.style.display = isHidden ? 'block' : 'none';
  updateHeroToggleHintText();
}

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
  currentMonth: 'Agustus',
  currentYear: 2026,
  currentDay: 22,
  monthStatus: 'CURRENT_PROJECTION',
  activeView: 'view-dashboard',
  idealBalanceData: null,
  
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
  feedbacks: [],
  activeCategory: 'Semua',
  activeAnalyticsCategory: 'Semua',
  selectedBudgetItem: null,
  selectedGoalItem: null
};

// Calendar Date Picker Modal State
let addModalTiming = { mode: 'flat', selectedDates: [] };
let editModalTiming = { mode: 'flat', selectedDates: [] };

function formatIDR(val) {
  if (val === null || val === undefined || isNaN(val)) return 'Rp 0';
  const num = Math.round(Number(val));
  const isNeg = num < 0;
  const absFormatted = Math.abs(num).toLocaleString('id-ID');
  return isNeg ? `-Rp ` + absFormatted : `Rp ` + absFormatted;
}

function getDaysInMonth(year, monthName) {
  const mIdx = MONTH_NAMES_ID.findIndex(m => m.toLowerCase() === monthName.toLowerCase());
  const m = mIdx >= 0 ? mIdx + 1 : 8;
  return new Date(year, m, 0).getDate();
}

function getMonthDisplayName(monthName) {
  if (currentLang === 'en') {
    const idx = MONTH_NAMES_ID.findIndex(m => m.toLowerCase() === monthName.toLowerCase());
    return idx >= 0 ? MONTH_NAMES_EN[idx] : monthName;
  }
  return monthName;
}

function getUserStorageKey(key) {
  const uid = (currentUser && currentUser.user_id) ? currentUser.user_id : 'usr_guest';
  return 'flowtrack_' + uid + '_' + key;
}

function recordRegisteredUser(userObj) {
  try {
    let allUsers = JSON.parse(localStorage.getItem('flowtrack_all_registered_users') || '[]');
    const existingIdx = allUsers.findIndex(u => u.user_id === userObj.user_id || u.email === userObj.email);
    if (existingIdx >= 0) {
      allUsers[existingIdx] = { ...allUsers[existingIdx], ...userObj };
    } else {
      allUsers.push(userObj);
    }
    localStorage.setItem('flowtrack_all_registered_users', JSON.stringify(allUsers));
  } catch (e) {}
}

function saveUserDataToStorage() {
  if (!currentUser) return;
  try {
    recordRegisteredUser(currentUser);
    localStorage.setItem(getUserStorageKey('cash_accounts'), JSON.stringify(appState.cashAccounts));
    localStorage.setItem(getUserStorageKey('incomes_' + appState.currentMonth + '_' + appState.currentYear), JSON.stringify(appState.incomes));
    localStorage.setItem(getUserStorageKey('budgets_' + appState.currentMonth + '_' + appState.currentYear), JSON.stringify(appState.budgets));
    localStorage.setItem(getUserStorageKey('goals'), JSON.stringify(appState.financialGoals));
    localStorage.setItem(getUserStorageKey('transactions'), JSON.stringify(appState.transactions));
    
    const notesEl = document.getElementById('cash-reality-notes');
    if (notesEl) {
      localStorage.setItem(getUserStorageKey('notes_' + appState.currentMonth + '_' + appState.currentYear), notesEl.value);
    }
  } catch (e) {}
}

function loadCashAccountsFromStorage() {
  if (!currentUser) return;
  try {
    const saved = localStorage.getItem(getUserStorageKey('cash_accounts'));
    if (saved) {
      appState.cashAccounts = JSON.parse(saved);
      const bankInput = document.getElementById('cash-bank-input');
      const walletInput = document.getElementById('cash-wallet-input');
      const emoneyInput = document.getElementById('cash-emoney-input');
      const otherInput = document.getElementById('cash-other-input');
      if (bankInput) bankInput.value = appState.cashAccounts.bank || '';
      if (walletInput) walletInput.value = appState.cashAccounts.wallet || '';
      if (emoneyInput) emoneyInput.value = appState.cashAccounts.emoney || '';
      if (otherInput) otherInput.value = appState.cashAccounts.other || '';
    }

    const notesEl = document.getElementById('cash-reality-notes');
    const badgeNotes = document.getElementById('cash-notes-period-badge');
    if (badgeNotes) badgeNotes.textContent = getMonthDisplayName(appState.currentMonth) + ' ' + appState.currentYear;
    if (notesEl) {
      const savedNotes = localStorage.getItem(getUserStorageKey('notes_' + appState.currentMonth + '_' + appState.currentYear)) || '';
      notesEl.value = savedNotes;
    }
  } catch (e) {}
}

// -----------------------------------------------------------------------------
// CONTROL BALANCE & AUTO-SURPLUS ENGINE
// -----------------------------------------------------------------------------
function renderControlBalance() {
  const totalIncome = (appState.incomes || []).reduce((sum, i) => sum + Number(i.amount), 0);
  const totalBudget = (appState.budgets || []).reduce((sum, b) => sum + (Number(b.target_anggaran) || 0), 0);
  const diff = totalIncome - totalBudget;

  const elInc = document.getElementById('cb-total-income');
  const elBgt = document.getElementById('cb-total-budget');
  const elDiff = document.getElementById('cb-diff-figure');
  const badge = document.getElementById('control-balance-status-badge');

  if (elInc) elInc.textContent = formatIDR(totalIncome);
  if (elBgt) elBgt.textContent = formatIDR(totalBudget);
  if (elDiff) elDiff.textContent = (diff > 0 ? '+' : '') + formatIDR(diff);

  if (Math.abs(diff) < 1) {
    if (badge) {
      badge.style.background = 'rgba(16, 185, 129, 0.25)';
      badge.style.color = '#34D399';
      badge.style.borderColor = 'rgba(52, 211, 153, 0.4)';
      badge.textContent = t('cbBalanced');
    }
  } else if (diff > 0) {
    if (badge) {
      badge.style.background = 'rgba(245, 158, 11, 0.25)';
      badge.style.color = '#FBBF24';
      badge.style.borderColor = 'rgba(251, 191, 36, 0.4)';
      badge.textContent = '+' + formatIDR(diff);
    }
  } else {
    if (badge) {
      badge.style.background = 'rgba(239, 68, 68, 0.25)';
      badge.style.color = '#F87171';
      badge.style.borderColor = 'rgba(248, 113, 113, 0.4)';
      badge.textContent = '-' + formatIDR(Math.abs(diff));
    }
  }
}

function autoSyncSurplusBudget() {
  const totalIncome = (appState.incomes || []).reduce((sum, i) => sum + Number(i.amount), 0);
  const nonSurplusBudgets = (appState.budgets || []).filter(b => b.category_type !== 'Alokasi Surplus');
  const nonSurplusTarget = nonSurplusBudgets.reduce((sum, b) => sum + (Number(b.target_anggaran) || 0), 0);
  const calculatedSurplus = Math.max(0, totalIncome - nonSurplusTarget);

  let surplusBudget = appState.budgets.find(b => b.category_type === 'Alokasi Surplus');

  if (surplusBudget) {
    surplusBudget.nominal_satuan = calculatedSurplus;
    surplusBudget.multiplier = 1;
    surplusBudget.target_anggaran = calculatedSurplus;
    surplusBudget.balance = calculatedSurplus - (Number(surplusBudget.realisasi_used) || 0);
    if (!surplusBudget.linked_goal_id && appState.financialGoals.length > 0) {
      surplusBudget.linked_goal_id = appState.financialGoals[0].goal_id;
    }
  } else {
    surplusBudget = {
      budget_id: 'bgt_surplus_' + appState.currentMonth + '_' + appState.currentYear,
      user_id: currentUser.user_id,
      period_month: appState.currentMonth,
      period_year: appState.currentYear,
      category_type: 'Alokasi Surplus',
      item_name: currentLang === 'en' ? 'Surplus Allocation (Savings & Investment)' : 'Alokasi Surplus (Tabungan & Investasi)',
      nominal_satuan: calculatedSurplus,
      frekuensi: 'Bulanan',
      multiplier: 1,
      target_anggaran: calculatedSurplus,
      realisasi_used: 0.0,
      balance: calculatedSurplus,
      timing_pattern: 'Tanggal: 25',
      selected_dates: [25],
      linked_goal_id: appState.financialGoals.length > 0 ? appState.financialGoals[0].goal_id : null
    };
    appState.budgets.push(surplusBudget);
  }

  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    const embeddedMatch = EMBEDDED_ADMIN_DATA.budgets.find(b => b.category_type === 'Alokasi Surplus' && b.period_month.toLowerCase() === appState.currentMonth.toLowerCase() && Number(b.period_year) === Number(appState.currentYear));
    if (embeddedMatch) {
      embeddedMatch.nominal_satuan = calculatedSurplus;
      embeddedMatch.target_anggaran = calculatedSurplus;
    }
  }

  saveUserDataToStorage();
  refreshAllData();
  const alertMsg = currentLang === 'en'
    ? 'Surplus Allocation automatically balanced to ' + formatIDR(calculatedSurplus) + '!\nControl Balance is now Rp 0 (Zero-Based).'
    : 'Alokasi Surplus otomatis disesuaikan menjadi ' + formatIDR(calculatedSurplus) + '!\nControl Balance kini bernilai Rp 0 (Zero-Based).';
  alert(alertMsg);
}

function ensureMonthlySurplusBudgetExists() {
  const totalIncome = (appState.incomes || []).reduce((sum, i) => sum + Number(i.amount), 0);
  if (totalIncome <= 0) return;

  const hasSurplus = (appState.budgets || []).some(b => b.category_type === 'Alokasi Surplus');
  if (!hasSurplus) {
    const nonSurplusTarget = (appState.budgets || []).filter(b => b.category_type !== 'Alokasi Surplus').reduce((sum, b) => sum + (Number(b.target_anggaran) || 0), 0);
    const calculatedSurplus = Math.max(0, totalIncome - nonSurplusTarget);

    const autoSurplus = {
      budget_id: 'bgt_surplus_' + appState.currentMonth + '_' + appState.currentYear,
      user_id: currentUser.user_id,
      period_month: appState.currentMonth,
      period_year: appState.currentYear,
      category_type: 'Alokasi Surplus',
      item_name: currentLang === 'en' ? 'Surplus Allocation (Savings & Investment)' : 'Alokasi Surplus (Tabungan & Investasi)',
      nominal_satuan: calculatedSurplus,
      frekuensi: 'Bulanan',
      multiplier: 1,
      target_anggaran: calculatedSurplus,
      realisasi_used: 0.0,
      balance: calculatedSurplus,
      timing_pattern: 'Tanggal: 25',
      selected_dates: [25],
      linked_goal_id: appState.financialGoals.length > 0 ? appState.financialGoals[0].goal_id : null
    };

    appState.budgets.push(autoSurplus);
    saveUserDataToStorage();
  }
}

// -----------------------------------------------------------------------------
// DASHBOARD CATEGORY SUMMARY RENDERER
// -----------------------------------------------------------------------------
function renderDashboardCategorySummary() {
  const container = document.getElementById('dashboard-category-summary-list');
  if (!container) return;

  const categories = [
    { key: 'Dasar', labelId: 'Kebutuhan Pokok & Rutin (Dasar)', labelEn: 'Basic Living & Needs', icon: 'ðŸ¥©', grad: '#3B82F6' },
    { key: 'Pribadi', labelId: 'Kebutuhan Pribadi & Rumah', labelEn: 'Personal & Household', icon: 'ðŸ§´', grad: '#10B981' },
    { key: 'Hiburan', labelId: 'Hiburan, Jajan & Lifestyle', labelEn: 'Entertainment & Fun', icon: 'ðŸ¿', grad: '#F59E0B' },
    { key: 'Insidental', labelId: 'Pengeluaran Insidental / Darurat', labelEn: 'Incidental & Emergencies', icon: 'âš¡', grad: '#EF4444' },
    { key: 'Alokasi Surplus', labelId: 'Alokasi Surplus & Sasaran Goal', labelEn: 'Surplus & Goals Allocation', icon: 'ðŸŽ¯', grad: '#8B5CF6' }
  ];

  const html = categories.map(cat => {
    const items = (appState.budgets || []).filter(b => b.category_type === cat.key);
    const totalTarget = items.reduce((sum, b) => sum + (Number(b.target_anggaran) || 0), 0);
    const totalUsed = items.reduce((sum, b) => sum + (Number(b.realisasi_used) || 0), 0);
    const pct = totalTarget > 0 ? Math.min(100, Math.round((totalUsed / totalTarget) * 100)) : 0;
    const label = currentLang === 'en' ? cat.labelEn : cat.labelId;

    return (
      '<div class="cat-summary-card" onclick="switchView(\'view-budgets\')">' +
        '<div class="cat-summary-header">' +
          '<div class="cat-summary-title">' +
            '<span>' + cat.icon + '</span>' +
            '<span>' + label + '</span>' +
          '</div>' +
          '<span style="font-size: 0.72rem; font-weight: 700; color: ' + cat.grad + ';">' + pct + '%</span>' +
        '</div>' +
        '<div class="progress-track" style="height: 6px; background: rgba(0,0,0,0.06);">' +
          '<div class="progress-fill" style="width: ' + pct + '%; background: ' + cat.grad + ';"></div>' +
        '</div>' +
        '<div class="cat-summary-stats">' +
          '<span>' + t('usedWord') + '<strong style="color: var(--text-primary);">' + formatIDR(totalUsed) + '</strong></span>' +
          '<span>Target: <strong style="color: var(--text-primary);">' + formatIDR(totalTarget) + '</strong></span>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  container.innerHTML = html;
}

// -----------------------------------------------------------------------------
// ANALISIS PENGELUARAN & AI ADVISOR ENGINE
// -----------------------------------------------------------------------------
function generateAiAnalytics() {
  const monthTitle = document.getElementById('analytics-month-title');
  if (monthTitle) {
    monthTitle.textContent = currentLang === 'en' 
      ? 'Realized Spending Analysis (' + getMonthDisplayName(appState.currentMonth) + ' ' + appState.currentYear + ')'
      : 'Analisis Realisasi Pengeluaran (' + appState.currentMonth + ' ' + appState.currentYear + ')';
  }

  const totalIncome = (appState.incomes || []).reduce((sum, i) => sum + Number(i.amount), 0);
  const totalTarget = (appState.budgets || []).reduce((sum, b) => sum + (Number(b.target_anggaran) || 0), 0);
  const totalRealized = (appState.budgets || []).reduce((sum, b) => sum + (Number(b.realisasi_used) || 0), 0);

  const totalDays = getDaysInMonth(appState.currentYear, appState.currentMonth);
  const currentDay = appState.idealBalanceData ? (appState.idealBalanceData.period.current_day || OPERATING_ANCHOR_DAY) : OPERATING_ANCHOR_DAY;
  const remainingDays = Math.max(1, totalDays - currentDay);

  const safeDailyAllowance = Math.max(0, (totalIncome - totalRealized) / remainingDays);

  const expectedBurn = appState.idealBalanceData 
    ? (appState.idealBalanceData.calculation_breakdown.proportional_burn_rate_variable || (totalTarget * (currentDay / totalDays)))
    : (totalTarget * (currentDay / totalDays));

  let healthScore = 85;
  if (expectedBurn > 0) {
    const ratio = totalRealized / expectedBurn;
    if (ratio <= 1.0) {
      healthScore = Math.min(100, Math.round(90 + (1.0 - ratio) * 10));
    } else {
      healthScore = Math.max(35, Math.round(90 - (ratio - 1.0) * 50));
    }
  }

  const scoreEl = document.getElementById('ai-health-score');
  const realizedEl = document.getElementById('ai-total-realized');
  const dailyEl = document.getElementById('ai-daily-avg');
  const diagEl = document.getElementById('ai-diagnostic-text');

  if (scoreEl) {
    scoreEl.textContent = healthScore + ' / 100';
    scoreEl.style.color = healthScore >= 80 ? '#34D399' : (healthScore >= 60 ? '#FBBF24' : '#F87171');
  }
  if (realizedEl) realizedEl.textContent = formatIDR(totalRealized);
  if (dailyEl) dailyEl.textContent = formatIDR(safeDailyAllowance) + t('perDayWord');

  let catSpend = { Dasar: 0, Pribadi: 0, Hiburan: 0, Insidental: 0, 'Alokasi Surplus': 0 };
  (appState.budgets || []).forEach(b => {
    const cat = b.category_type || 'Dasar';
    if (catSpend[cat] !== undefined) catSpend[cat] += Number(b.realisasi_used) || 0;
  });

  const overBudgets = (appState.budgets || []).filter(b => Number(b.realisasi_used) > Number(b.target_anggaran));

  let overText = '';
  let adviceText = '';

  if (currentLang === 'en') {
    overText = overBudgets.length > 0 
      ? 'There are <strong>' + overBudgets.length + ' overbudget items</strong> (' + overBudgets.map(b => b.item_name).join(', ') + ').'
      : 'All items are <strong>within safe budget targets</strong>.';

    adviceText = healthScore >= 80
      ? 'Discipline is high. With ' + remainingDays + ' days remaining, safe spending limit is <strong>' + formatIDR(safeDailyAllowance) + '/day</strong>.'
      : 'Spending is near limit. Cap discretionary spend at <strong>' + formatIDR(safeDailyAllowance) + '/day</strong> through month-end.';

    if (diagEl) {
      diagEl.innerHTML = 
        '<div style="margin-bottom: 4px;">â€¢ Basic: ' + formatIDR(catSpend.Dasar) + ' | Fun/Personal: ' + formatIDR(catSpend.Pribadi + catSpend.Hiburan) + ' | Surplus: ' + formatIDR(catSpend['Alokasi Surplus']) + '</div>' +
        '<div style="margin-bottom: 4px;">â€¢ ' + overText + '</div>' +
        '<div>â€¢ ' + adviceText + '</div>';
    }
  } else {
    overText = overBudgets.length > 0 
      ? 'Terdapat <strong>' + overBudgets.length + ' pos overbudget</strong> (' + overBudgets.map(b => b.item_name).join(', ') + ').'
      : 'Semua pos berjalan <strong>tertib di bawah plafon target</strong>.';

    adviceText = healthScore >= 80
      ? 'Disiplin sangat baik. Sisa ' + remainingDays + ' hari lagi, batas aman belanja harian adalah <strong>' + formatIDR(safeDailyAllowance) + '/hari</strong>.'
      : 'Mendekati plafon burn rate. Batasi pos hiburan & jajan maksimal <strong>' + formatIDR(safeDailyAllowance) + '/hari</strong>.';

    if (diagEl) {
      diagEl.innerHTML = 
        '<div style="margin-bottom: 4px;">â€¢ Pokok: ' + formatIDR(catSpend.Dasar) + ' | Pribadi/Hiburan: ' + formatIDR(catSpend.Pribadi + catSpend.Hiburan) + ' | Surplus: ' + formatIDR(catSpend['Alokasi Surplus']) + '</div>' +
        '<div style="margin-bottom: 4px;">â€¢ ' + overText + '</div>' +
        '<div>â€¢ ' + adviceText + '</div>';
    }
  }

  renderAnalyticsExpensesStream();
}

function filterAnalyticsCategory(category) {
  appState.activeAnalyticsCategory = category;
  document.querySelectorAll('[data-analytics-cat]').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-analytics-cat') === category) btn.classList.add('active');
  });
  renderAnalyticsExpensesStream();
}

function renderAnalyticsExpensesStream() {
  const container = document.getElementById('analytics-expenses-stream-list');
  if (!container) return;

  const currentMonthTx = (appState.transactions || []).filter(tx => true);

  const filteredTx = appState.activeAnalyticsCategory === 'Semua'
    ? currentMonthTx
    : currentMonthTx.filter(tx => {
        const b = appState.budgets.find(item => item.budget_id === tx.budget_id);
        return b && b.category_type === appState.activeAnalyticsCategory;
      });

  if (filteredTx.length === 0) {
    const emptyTitle = currentLang === 'en' ? 'No Realized Expenses Recorded Yet' : 'Belum Ada Pengeluaran Realized Dicatat';
    const emptyDesc = currentLang === 'en' ? 'Log your daily expenses or upload an interim bank statement.' : 'Catat pengeluaran harian Anda atau unggah mutasi bank di bawah.';
    const btnText = currentLang === 'en' ? '+ Log Realized Expense' : '+ Catat Pengeluaran Realized';

    container.innerHTML = 
      '<div class="empty-state-box" style="padding: 20px 14px; text-align: center;">' +
        '<div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary); margin-bottom: 4px;">' + emptyTitle + '</div>' +
        '<div style="font-size: 0.72rem; color: var(--text-secondary); max-width: 260px; margin: 0 auto 10px; line-height: 1.4;">' + emptyDesc + '</div>' +
        '<button class="btn-primary" style="padding: 6px 12px; font-size: 0.72rem;" onclick="openAddExpenseModal()">' + btnText + '</button>' +
      '</div>';
    return;
  }

  container.innerHTML = filteredTx.map(tx => {
    const b = appState.budgets.find(item => item.budget_id === tx.budget_id);
    const catName = b ? b.category_type : (currentLang === 'en' ? 'Expense' : 'Pengeluaran');
    const posName = b ? b.item_name : (tx.description || 'Transaction');

    return (
      '<div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 6px;">' +
        '<div>' +
          '<div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary);">' + (tx.description || posName) + '</div>' +
          '<div style="font-size: 0.68rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-top: 1px;">' +
            '<span class="item-category-pill" style="font-size: 0.62rem; padding: 1px 4px;">' + catName + '</span>' +
            '<span>Pos: ' + posName + '</span> &bull; <span>' + (tx.transaction_date || '2026-08-22') + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="text-align: right;">' +
          '<div style="font-weight: 700; font-size: 0.85rem; color: var(--accent-warning);">- ' + formatIDR(tx.amount) + '</div>' +
          '<div style="font-size: 0.65rem; color: var(--text-secondary);">' + (tx.payment_method_platform || 'Manual') + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function openAddExpenseModal() {
  const select = document.getElementById('expense-budget-select');
  if (select) {
    select.innerHTML = (appState.budgets || []).map(b => 
      '<option value="' + b.budget_id + '">' + b.item_name + ' (' + b.category_type + ' - Target ' + formatIDR(b.target_anggaran) + ')</option>'
    ).join('');
  }

  document.getElementById('expense-desc-input').value = '';
  document.getElementById('expense-amount-input').value = '';
  document.getElementById('expense-date-input').value = '2026-08-22';
  document.getElementById('add-expense-modal').classList.add('active');
}

async function submitQuickExpense() {
  const desc = document.getElementById('expense-desc-input').value.trim();
  const budgetId = document.getElementById('expense-budget-select').value;
  const amount = parseFloat(document.getElementById('expense-amount-input').value) || 0;
  const date = document.getElementById('expense-date-input').value || '2026-08-22';
  const method = document.getElementById('expense-method-select').value;

  if (amount <= 0) {
    alert(currentLang === 'en' ? 'Please enter a valid expense amount!' : 'Harap isi nominal pengeluaran yang valid!');
    return;
  }

  const b = appState.budgets.find(item => item.budget_id === budgetId);
  if (b) {
    b.realisasi_used = (Number(b.realisasi_used) || 0) + amount;
    b.balance = Number(b.target_anggaran) - b.realisasi_used;

    if (b.linked_goal_id) {
      const g = appState.financialGoals.find(item => item.goal_id === b.linked_goal_id);
      if (g) g.current_amount = (Number(g.current_amount) || 0) + amount;
    }
  }

  const newTx = {
    transaction_id: 'tx_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    transaction_date: date,
    budget_id: budgetId,
    goal_id: b ? b.linked_goal_id : null,
    transaction_type: 'Expense',
    amount: amount,
    payment_method_platform: method,
    description: desc || (b ? b.item_name : (currentLang === 'en' ? 'Expense' : 'Pengeluaran'))
  };

  appState.transactions.unshift(newTx);
  saveUserDataToStorage();

  authFetch('/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTx)
  }).catch(() => {});

  document.getElementById('add-expense-modal').classList.remove('active');
  refreshAllData();
  generateAiAnalytics();
  const alertMsg = currentLang === 'en'
    ? 'Expense of ' + formatIDR(amount) + ' successfully realized to ' + (b ? b.item_name : '') + '!'
    : 'Pengeluaran ' + formatIDR(amount) + ' berhasil dicatat dan direalisasikan ke pos ' + (b ? b.item_name : '') + '!';
  alert(alertMsg);
}

// -----------------------------------------------------------------------------
// PDF.JS STATEMENT PARSER & BCA TAHAPAN RECONCILIATION ENGINE
// -----------------------------------------------------------------------------
async function handlePdfUpload(file) {
  if (!window.pdfjsLib) {
    alert(currentLang === 'en' ? 'PDF.js library is loading, please try again in a few seconds.' : 'Modul PDF.js sedang dimuat, silakan coba beberapa detik lagi.');
    return;
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdfDoc = await loadingTask.promise;
    let fullExtractedText = '';

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageStrings = textContent.items.map(item => item.str).join(' ');
      fullExtractedText += '\n--- HALAMAN ' + pageNum + ' ---\n' + pageStrings;
    }

    const textarea = document.getElementById('interim-statement-textarea');
    if (textarea) {
      textarea.value = fullExtractedText.trim();
    }

    processInterimStatement();
  } catch (err) {
    console.error('PDF parsing error:', err);
    alert(currentLang === 'en' ? 'Failed to read PDF. You can paste transaction text manually.' : 'Gagal membaca PDF secara otomatis. Anda dapat menempelkan teks mutasi secara manual.');
  }
}

function loadBcaSampleStatement() {
  const textarea = document.getElementById('interim-statement-textarea');
  if (textarea) {
    textarea.value = 
      '01/07 TRANSAKSI DEBIT QR 914 Amarilis, 9,500.00 DB\n' +
      '01/07 BIAYA ADM 14,000.00 DB\n' +
      '02/07 TRSF E-BANKING DB EKA NURBAITI 1,600,000.00 DB\n' +
      '02/07 TRANSAKSI DEBIT QR 912 GRAB TRANS 9,000.00 DB\n' +
      '02/07 TRSF E-BANKING DB TOKOPEDIA 4,553,871.00 DB\n' +
      '02/07 TRSF E-BANKING DB SHOPEEPAY 177,965.00 DB\n' +
      '03/07 TRANSAKSI DEBIT QR 914 RM Sederha 17,000.00 DB\n' +
      '03/07 TRANSAKSI DEBIT QR 914 jagocoffee 10,000.00 DB\n' +
      '03/07 TRANSAKSI DEBIT QR 002 AYAM PENYE 13,000.00 DB\n' +
      '03/07 TRSF E-BANKING DB ALFAGIFT 32,581.00 DB\n' +
      '04/07 TRANSAKSI DEBIT QR 503 WARTEG BAH 17,000.00 DB\n' +
      '04/07 TRANSAKSI DEBIT QR 008 BATAGOR RE 10,000.00 DB\n' +
      '05/07 TRSF E-BANKING DB GOPAY TOPUP 39,862.00 DB\n' +
      '07/07 TRSF E-BANKING DB KKI-PLUANG 3,000,000.00 DB\n' +
      '08/07 TRANSAKSI DEBIT QR 912 GRAB TRANS 13,900.00 DB\n' +
      '10/07 TRANSAKSI DEBIT Shopee Ind 38,100.00 DB\n' +
      '11/07 TRANSAKSI DEBIT XL Priorit 80,000.00 DB\n' +
      '12/07 TRSF E-BANKING DB ASTRO 82,736.00 DB\n' +
      '13/07 TRANSAKSI DEBIT Batagor 99 10,000.00 DB\n' +
      '16/07 TRANSAKSI DEBIT Access By 369,000.00 DB\n' +
      '17/07 TRANSAKSI DEBIT KANG RUJAK 44,000.00 DB\n' +
      '18/07 TRANSAKSI DEBIT TOUS LES J 89,000.00 DB\n' +
      '20/07 TRSF E-BANKING DB KLIKINDOMARE 15,400.00 DB\n' +
      '25/07 TRANSAKSI DEBIT mtix by XX 220,000.00 DB\n' +
      '29/07 KR OTOMATIS PERTAMINA PATRA NI Regular Payroll 12,436,000.00';
  }
}

async function processInterimStatement() {
  const textarea = document.getElementById('interim-statement-textarea');
  if (!textarea) return;

  const raw = textarea.value.trim();
  if (!raw) {
    alert(currentLang === 'en' ? 'Please upload a PDF/CSV or paste statement text first!' : 'Harap pilih file PDF/CSV atau tempel mutasi bank terlebih dahulu!');
    return;
  }

  let matched = 0;
  let totalAmt = 0;
  const lines = raw.split(/\r?\n/);

  lines.forEach(l => {
    const cleanL = l.trim();
    if (!cleanL || cleanL.startsWith('---')) return;

    const lower = cleanL.toLowerCase();
    let matchedItem = null;

    if (lower.includes('makan') || lower.includes('warung') || lower.includes('resto') || lower.includes('padang') || lower.includes('sederha') || lower.includes('jago') || lower.includes('coffee') || lower.includes('penye') || lower.includes('warteg') || lower.includes('batagor') || lower.includes('ayam') || lower.includes('cilor') || lower.includes('rujak') || lower.includes('martabak') || lower.includes('kriuk') || lower.includes('sate')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('makan') || b.category_type === 'Dasar');
    } else if (lower.includes('kos') || lower.includes('kost') || lower.includes('nurbaiti') || lower.includes('retno') || lower.includes('sewa')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('kos') || b.item_name.toLowerCase().includes('sewa') || b.category_type === 'Dasar');
    } else if (lower.includes('grab') || lower.includes('gojek') || lower.includes('goride') || lower.includes('bensin') || lower.includes('transport') || lower.includes('access by')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('transport') || b.item_name.toLowerCase().includes('grab') || b.category_type === 'Dasar');
    } else if (lower.includes('alfagift') || lower.includes('indomaret') || lower.includes('klikindomare') || lower.includes('astro') || lower.includes('laundry') || lower.includes('galon')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('pribadi') || b.category_type === 'Pribadi' || b.item_name.toLowerCase().includes('laundry'));
    } else if (lower.includes('xl') || lower.includes('priorit') || lower.includes('pulsa') || lower.includes('listrik') || lower.includes('pln')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('pulsa') || b.item_name.toLowerCase().includes('listrik') || b.category_type === 'Dasar');
    } else if (lower.includes('pluang') || lower.includes('bibit') || lower.includes('rdpu') || lower.includes('darurat') || lower.includes('investasi') || lower.includes('surplus')) {
      matchedItem = appState.budgets.find(b => b.category_type === 'Alokasi Surplus' || b.item_name.toLowerCase().includes('darurat') || b.item_name.toLowerCase().includes('investasi'));
    } else if (lower.includes('mtix') || lower.includes('tous les') || lower.includes('champs') || lower.includes('hiburan') || lower.includes('nonton')) {
      matchedItem = appState.budgets.find(b => b.category_type === 'Hiburan' || b.item_name.toLowerCase().includes('hiburan'));
    } else if (lower.includes('tokopedia') || lower.includes('shopee') || lower.includes('gopay')) {
      matchedItem = appState.budgets.find(b => b.category_type === 'Pribadi' || b.category_type === 'Hiburan') || appState.budgets[0];
    } else if (lower.includes('biaya adm') || lower.includes('adm')) {
      matchedItem = appState.budgets.find(b => b.item_name.toLowerCase().includes('admin') || b.category_type === 'Dasar');
    }

    const numMatches = cleanL.match(/[\d,]+\.\d{2}|\b\d{4,9}\b/g);
    if (numMatches && (lower.includes('db') || lower.includes('debit') || (!lower.includes('cr') && !lower.includes('payroll') && !lower.includes('kredit')))) {
      const amtStr = numMatches[numMatches.length - 1].replace(/,/g, '');
      const amt = parseFloat(amtStr) || 0;

      if (amt > 0 && matchedItem) {
        matchedItem.realisasi_used = (Number(matchedItem.realisasi_used) || 0) + amt;
        matchedItem.balance = Number(matchedItem.target_anggaran) - matchedItem.realisasi_used;
        matched++;
        totalAmt += amt;

        if (matchedItem.linked_goal_id) {
          const g = appState.financialGoals.find(item => item.goal_id === matchedItem.linked_goal_id);
          if (g) g.current_amount = (Number(g.current_amount) || 0) + amt;
        }

        appState.transactions.unshift({
          transaction_id: 'tx_' + Math.random().toString(36).substring(2, 9),
          user_id: currentUser.user_id,
          transaction_date: '2026-08-22',
          budget_id: matchedItem.budget_id,
          goal_id: matchedItem.linked_goal_id,
          transaction_type: 'Expense',
          amount: amt,
          payment_method_platform: 'BCA Statement',
          description: cleanL.substring(0, 45)
        });
      }
    }
  });

  saveUserDataToStorage();
  refreshAllData();
  generateAiAnalytics();
  textarea.value = '';
  const successMsg = currentLang === 'en'
    ? 'Bank Statement Reconciled Successfully!\n\nâ€¢ Matched: ' + matched + ' transactions\nâ€¢ Total Realized: ' + formatIDR(totalAmt)
    : 'Rekonsiliasi Mutasi Bank Berhasil!\n\nâ€¢ Mutasi Dicocokkan: ' + matched + ' transaksi\nâ€¢ Total Realisasi Terekonsiliasi: ' + formatIDR(totalAmt);
  alert(successMsg);
}

// -----------------------------------------------------------------------------
// MULTI-DATE CALENDAR PICKER INTERFACE
// -----------------------------------------------------------------------------
function setTimingMode(target, mode) {
  const state = target === 'add' ? addModalTiming : editModalTiming;
  state.mode = mode;

  const btnFlat = document.getElementById('btn-mode-flat-' + target);
  const btnDates = document.getElementById('btn-mode-dates-' + target);
  const container = document.getElementById('calendar-grid-container-' + target);

  if (mode === 'flat') {
    if (btnFlat) btnFlat.classList.add('active');
    if (btnDates) btnDates.classList.remove('active');
    if (container) container.style.display = 'none';
  } else {
    if (btnDates) btnDates.classList.add('active');
    if (btnFlat) btnFlat.classList.remove('active');
    if (container) container.style.display = 'block';
  }

  updateDateSummaryText(target);
}

function renderCalendarDaysGrid(target) {
  const container = document.getElementById('days-grid-' + target);
  if (!container) return;

  const state = target === 'add' ? addModalTiming : editModalTiming;
  let html = '';

  for (let d = 1; d <= 31; d++) {
    const isSelected = state.selectedDates.includes(d);
    const activeClass = isSelected ? 'active' : '';
    html += '<button type="button" class="day-btn ' + activeClass + '" onclick="toggleDayDate(\'' + target + '\', ' + d + ')">' + d + '</button>';
  }

  container.innerHTML = html;
  updateDateSummaryText(target);
}

function toggleDayDate(target, dayNum) {
  const state = target === 'add' ? addModalTiming : editModalTiming;
  const idx = state.selectedDates.indexOf(dayNum);

  if (idx >= 0) {
    state.selectedDates.splice(idx, 1);
  } else {
    state.selectedDates.push(dayNum);
  }

  state.selectedDates.sort((a, b) => a - b);
  renderCalendarDaysGrid(target);
}

function applyDatePreset(target, datesArray) {
  const state = target === 'add' ? addModalTiming : editModalTiming;
  setTimingMode(target, 'dates');
  state.selectedDates = [...datesArray].sort((a, b) => a - b);
  renderCalendarDaysGrid(target);
}

function updateDateSummaryText(target) {
  const state = target === 'add' ? addModalTiming : editModalTiming;
  const summaryEl = document.getElementById(target + '-date-summary');
  if (!summaryEl) return;

  if (state.mode === 'flat') {
    summaryEl.textContent = currentLang === 'en' ? 'Flat Daily' : 'Flat Harian';
  } else {
    if (state.selectedDates.length === 0) {
      summaryEl.textContent = currentLang === 'en' ? 'Select Dates...' : 'Pilih Tanggal...';
    } else if (state.selectedDates.length === 1) {
      summaryEl.textContent = (currentLang === 'en' ? 'Date ' : 'Tanggal ') + state.selectedDates[0];
    } else {
      summaryEl.textContent = (currentLang === 'en' ? 'Dates ' : 'Tgl ') + state.selectedDates.join(', ') + ' (' + state.selectedDates.length + 'x)';
    }
  }
}

// -----------------------------------------------------------------------------
// AUTHENTICATED FETCH HELPER
// -----------------------------------------------------------------------------
async function authFetch(endpoint, options = {}) {
  const urlObj = new URL(endpoint.startsWith('http') ? endpoint : API_BASE + endpoint);
  if (!urlObj.searchParams.has('user_id') && currentUser && currentUser.user_id) {
    urlObj.searchParams.set('user_id', currentUser.user_id);
  }

  const headers = {
    'Accept': 'application/json',
    ...(options.headers || {})
  };

  if (authToken) {
    headers['Authorization'] = 'Bearer ' + authToken;
  }

  try {
    const res = await fetch(urlObj.toString(), { ...options, headers });
    return res;
  } catch (err) {
    return null;
  }
}

// -----------------------------------------------------------------------------
// SCREEN GATEWAY & PROFILE
// -----------------------------------------------------------------------------
function syncAuthAndScreenState() {
  const landingScreen = document.getElementById('login-landing-screen');
  const appContainer = document.getElementById('app-container');
  const adminNavBtn = document.getElementById('nav-item-admin');
  const feedbackNavBtn = document.getElementById('nav-item-feedback');

  if (!currentUser || !authToken) {
    if (landingScreen) landingScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
  } else {
    if (landingScreen) landingScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';

    updateUserProfileHeader();

    if (currentUser.email === 'zidanmuzaki2002@gmail.com') {
      if (adminNavBtn) adminNavBtn.style.display = 'flex';
      if (feedbackNavBtn) feedbackNavBtn.style.display = 'none';
    } else {
      if (adminNavBtn) adminNavBtn.style.display = 'none';
      if (feedbackNavBtn) feedbackNavBtn.style.display = 'flex';
      if (appState.activeView === 'view-admin') {
        switchView('view-dashboard');
      }
    }
  }
}

function updateHeaderRealTimeDate() {
  const badgeEl = document.getElementById('header-date-badge');
  if (badgeEl) badgeEl.textContent = currentLang === 'en' ? '22 Aug 2026' : '22 Agu 2026';
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
    const res = await fetch(API_BASE + '/auth/login', {
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
          recordRegisteredUser(currentUser);
          loginSuccess = true;
        }
      } catch (parseErr) {}
    }
  } catch (err) {}

  if (!loginSuccess) {
    const isAdmin = (emailOrUser.toLowerCase() === 'zidanmuzaki13' || emailOrUser.toLowerCase() === 'zidanmuzaki2002@gmail.com') && password === 'zakiya03';
    
    let localUsers = [];
    try { localUsers = JSON.parse(localStorage.getItem('flowtrack_all_registered_users') || '[]'); } catch (e) {}

    const matchedLocal = localUsers.find(u => 
      (u.email && u.email.toLowerCase() === emailOrUser.toLowerCase()) || 
      (u.username && u.username.toLowerCase() === emailOrUser.toLowerCase())
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
      recordRegisteredUser(currentUser);
      loginSuccess = true;
    } else if (matchedLocal) {
      currentUser = {
        user_id: matchedLocal.user_id,
        username: matchedLocal.username,
        email: matchedLocal.email,
        role: 'user'
      };
      authToken = 'jwt_' + matchedLocal.user_id;
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);
      recordRegisteredUser(currentUser);
      loginSuccess = true;
    }
  }

  if (loginSuccess) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = (currentLang === 'en' ? 'Welcome back, ' : 'Selamat datang kembali, ') + currentUser.username + '!';
      alertEl.style.display = 'block';
    }

    setTimeout(() => {
      syncAuthAndScreenState();
      loadCashAccountsFromStorage();
      refreshAllData();
    }, 300);
  } else {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = currentLang === 'en' ? 'Invalid Email/Username or Password!' : 'Email/Username atau Password salah!';
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
      alertEl.textContent = currentLang === 'en' ? 'Please fill out all registration fields!' : 'Harap lengkapi seluruh kolom registrasi!';
      alertEl.style.display = 'block';
    }
    return;
  }

  let regSuccess = false;

  try {
    const res = await fetch(API_BASE + '/auth/register', {
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
          recordRegisteredUser(currentUser);
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
    authToken = 'jwt_' + newUserId;

    recordRegisteredUser(currentUser);
    localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
    localStorage.setItem('flowtrack_token', authToken);
    regSuccess = true;
  }

  if (regSuccess) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg success';
      alertEl.textContent = (currentLang === 'en' ? 'Account ' : 'Akun ') + currentUser.username + (currentLang === 'en' ? ' created successfully!' : ' berhasil dibuat!');
      alertEl.style.display = 'block';
    }

    setTimeout(() => {
      syncAuthAndScreenState();
      loadCashAccountsFromStorage();
      refreshAllData();
    }, 600);
  }
}

function handleLogout() {
  const confirmMsg = currentLang === 'en' ? 'Log out from current account session?' : 'Keluar dari sesi akun saat ini?';
  if (confirm(confirmMsg)) {
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
    alert(currentLang === 'en' ? 'Access Denied: Admin Panel is restricted to superadmin.' : 'Akses Ditolak: Halaman Admin Panel hanya khusus untuk zidanmuzaki2002@gmail.com');
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

  const timeBar = document.getElementById('app-time-selector-bar');
  if (timeBar) {
    timeBar.style.display = (viewId === 'view-goals' || viewId === 'view-admin' || viewId === 'view-feedback') ? 'none' : 'flex';
  }

  if (viewId === 'view-admin') {
    fetchAdminData();
  } else if (viewId === 'view-feedback') {
    fetchUserFeedbacks();
  } else if (viewId === 'view-budgets') {
    renderControlBalance();
  } else if (viewId === 'view-analytics') {
    generateAiAnalytics();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -----------------------------------------------------------------------------
// ADMIN PANEL & USER TAKE-OUT HANDLERS
// -----------------------------------------------------------------------------
async function fetchAdminData() {
  if (!currentUser || currentUser.email !== 'zidanmuzaki2002@gmail.com') return;

  let allUsers = [];
  try {
    allUsers = JSON.parse(localStorage.getItem('flowtrack_all_registered_users') || '[]');
  } catch (e) {}

  if (!allUsers.some(u => u.email === 'zidanmuzaki2002@gmail.com')) {
    allUsers.unshift({ user_id: 'usr_admin_zidanmuzaki13', username: 'zidanmuzaki13', email: 'zidanmuzaki2002@gmail.com', role: 'admin' });
  }

  const statUsers = document.getElementById('admin-stat-users');
  if (statUsers) statUsers.textContent = allUsers.length;

  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  const avgRating = localFeedbacks.length > 0
    ? (localFeedbacks.reduce((sum, f) => sum + (f.rating || 5), 0) / localFeedbacks.length).toFixed(1)
    : '5.0';
  const statRating = document.getElementById('admin-stat-rating');
  if (statRating) statRating.textContent = avgRating + ' / 5';

  const container = document.getElementById('admin-users-list');
  if (container) {
    container.innerHTML = allUsers.map(u => {
      const isSuperadmin = u.email === 'zidanmuzaki2002@gmail.com' || u.role === 'admin';
      const actionHtml = isSuperadmin 
        ? '<span style="font-size: 0.68rem; color: var(--primary-accent); font-weight: 700; background: #EEF2FF; padding: 4px 8px; border-radius: 4px;">Superadmin</span>'
        : '<button class="btn-danger" style="padding: 4px 8px; font-size: 0.7rem;" onclick="takeOutUser(\'' + u.user_id + '\', \'' + u.username + '\')">Take Out</button>';

      return (
        '<div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">' +
          '<div>' +
            '<div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">' +
              u.username + ' <span style="font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; background: ' + (isSuperadmin ? '#EEF2FF' : '#E2E8F0') + '; color: ' + (isSuperadmin ? 'var(--primary-accent)' : 'var(--text-secondary)') + '; font-weight: 600;">' + (u.role || 'USER').toUpperCase() + '</span>' +
            '</div>' +
            '<div style="font-size: 0.72rem; color: var(--text-secondary);">' + u.email + '</div>' +
          '</div>' +
          '<div>' + actionHtml + '</div>' +
        '</div>'
      );
    }).join('');
  }

  fetchAdminFeedbacks();
}

async function takeOutUser(userId, username) {
  const confirmMsg = currentLang === 'en'
    ? 'CONFIRM TAKE OUT USER:\n\nAre you sure you want to take out user \'' + username + '\'?\nAll budget categories and history belonging to this user will be permanently deleted.'
    : 'KONFIRMASI TAKE OUT PENGGUNA:\n\nApakah Anda yakin ingin menghapus pengguna \'' + username + '\'?\nSemua data pos anggaran dan histori milik pengguna ini akan dihapus permanen.';
  if (!confirm(confirmMsg)) return;

  try {
    let allUsers = JSON.parse(localStorage.getItem('flowtrack_all_registered_users') || '[]');
    allUsers = allUsers.filter(u => u.user_id !== userId);
    localStorage.setItem('flowtrack_all_registered_users', JSON.stringify(allUsers));
  } catch (e) {}

  alert(currentLang === 'en' ? 'User \'' + username + '\' has been removed.' : 'Pengguna \'' + username + '\' berhasil di-take out dari sistem.');
  fetchAdminData();
}

// -----------------------------------------------------------------------------
// FEEDBACK ENGINE
// -----------------------------------------------------------------------------
function setFeedbackRating(ratingNum) {
  document.getElementById('feedback-rating-val').value = ratingNum;
  document.querySelectorAll('.rating-star-btn').forEach(btn => {
    btn.classList.remove('active');
    if (parseInt(btn.getAttribute('data-rating')) === ratingNum) {
      btn.classList.add('active');
    }
  });
}

async function submitUserFeedback() {
  const category = document.getElementById('feedback-category-select').value;
  const rating = parseInt(document.getElementById('feedback-rating-val').value) || 5;
  const subject = document.getElementById('feedback-subject-input').value.trim();
  const message = document.getElementById('feedback-message-input').value.trim();
  const alertEl = document.getElementById('user-feedback-alert');

  if (!subject || !message) {
    if (alertEl) {
      alertEl.className = 'auth-alert-msg error';
      alertEl.textContent = currentLang === 'en' ? 'Please fill out subject and message!' : 'Harap isi subjek dan pesan feedback Anda!';
      alertEl.style.display = 'block';
    }
    return;
  }

  const newFeedback = {
    feedback_id: 'fb_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    username: currentUser.username || currentUser.email,
    email: currentUser.email,
    category: category,
    rating: rating,
    subject: subject,
    message: message,
    status: 'Baru',
    created_at: new Date().toISOString()
  };

  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  localFeedbacks.unshift(newFeedback);
  localStorage.setItem('flowtrack_local_feedbacks', JSON.stringify(localFeedbacks));

  if (alertEl) {
    alertEl.className = 'auth-alert-msg success';
    alertEl.textContent = currentLang === 'en' ? 'Thank you! Your feedback has been sent to admin.' : 'Terima kasih! Masukan Anda telah berhasil dikirim ke Admin untuk perbaikan sistem.';
    alertEl.style.display = 'block';
  }

  document.getElementById('feedback-subject-input').value = '';
  document.getElementById('feedback-message-input').value = '';
  fetchUserFeedbacks();
}

async function fetchUserFeedbacks() {
  const container = document.getElementById('user-sent-feedback-list');
  if (!container) return;

  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  const userLocal = localFeedbacks.filter(f => f.user_id === currentUser.user_id);
  renderFeedbacksList(container, userLocal, false);
}

async function fetchAdminFeedbacks() {
  const container = document.getElementById('admin-feedback-inbox-list');
  if (!container) return;

  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  renderFeedbacksList(container, localFeedbacks, true);
}

function renderFeedbacksList(container, feedbacks, isAdminView) {
  if (!feedbacks || feedbacks.length === 0) {
    container.innerHTML = '<div style="font-size: 0.75rem; color: var(--text-secondary); padding: 8px 0;">' + (currentLang === 'en' ? 'No feedback recorded yet.' : 'Belum ada feedback yang dikirim.') + '</div>';
    return;
  }

  container.innerHTML = feedbacks.map(f => {
    const ratingNum = f.rating || 5;
    const starsHtml = 'â­'.repeat(ratingNum);
    const dateStr = f.created_at ? f.created_at.substring(0, 10) : (currentLang === 'en' ? 'Today' : 'Hari ini');
    const statusBg = f.status === 'Selesai' ? 'rgba(16, 185, 129, 0.12)' : '#FEF3C7';
    const statusColor = f.status === 'Selesai' ? '#047857' : '#B45309';

    const adminActions = isAdminView ? (
      '<div style="display: flex; gap: 6px; margin-top: 8px;">' +
        '<button class="btn-primary" style="padding: 3px 8px; font-size: 0.68rem;" onclick="toggleFeedbackStatus(\'' + f.feedback_id + '\')">' + (currentLang === 'en' ? 'Mark Completed' : 'Tandai Selesai') + '</button>' +
        '<button class="btn-danger" style="padding: 3px 8px; font-size: 0.68rem;" onclick="deleteFeedback(\'' + f.feedback_id + '\')">' + (currentLang === 'en' ? 'Delete' : 'Hapus') + '</button>' +
      '</div>'
    ) : '';

    return (
      '<div class="feedback-item-card" style="padding: 10px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 8px;">' +
        '<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">' +
          '<div>' +
            '<div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">' + f.subject + '</div>' +
            '<div style="font-size: 0.7rem; color: var(--text-secondary);">' +
              (isAdminView ? ('From: <strong>' + (f.username || f.email) + '</strong> &bull; ') : '') +
              f.category + ' &bull; <span>' + starsHtml + '</span> &bull; ' + dateStr +
            '</div>' +
          '</div>' +
          '<span style="font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; background: ' + statusBg + '; color: ' + statusColor + '; font-weight: 600;">' + (f.status || 'Baru') + '</span>' +
        '</div>' +
        '<div style="font-size: 0.75rem; color: var(--text-primary); background: var(--bg-main); padding: 8px; border-radius: 6px; margin-top: 6px; line-height: 1.4;">' +
          f.message +
        '</div>' +
        adminActions +
      '</div>'
    );
  }).join('');
}

async function toggleFeedbackStatus(feedbackId) {
  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  const target = localFeedbacks.find(f => f.feedback_id === feedbackId);
  if (target) {
    target.status = target.status === 'Selesai' ? 'Baru' : 'Selesai';
    localStorage.setItem('flowtrack_local_feedbacks', JSON.stringify(localFeedbacks));
  }
  fetchAdminFeedbacks();
}

async function deleteFeedback(feedbackId) {
  if (!confirm(currentLang === 'en' ? 'Delete this feedback?' : 'Hapus feedback ini?')) return;
  let localFeedbacks = [];
  try { localFeedbacks = JSON.parse(localStorage.getItem('flowtrack_local_feedbacks') || '[]'); } catch (e) {}
  localFeedbacks = localFeedbacks.filter(f => f.feedback_id !== feedbackId);
  localStorage.setItem('flowtrack_local_feedbacks', JSON.stringify(localFeedbacks));
  fetchAdminFeedbacks();
}

// -----------------------------------------------------------------------------
// DATA REFRESH & FETCHING WITH LOCALSTORAGE PERSISTENCE
// -----------------------------------------------------------------------------
async function refreshAllData() {
  if (!currentUser) return;
  loadCashAccountsFromStorage();
  applyStaticTranslations();
  await Promise.all([
    fetchIncomes(),
    fetchBudgets(),
    fetchFinancialGoals(),
    fetchTransactions()
  ]);
  ensureMonthlySurplusBudgetExists();
  renderControlBalance();
  renderDashboardCategorySummary();
  await fetchIdealBalance();
  if (appState.activeView === 'view-analytics') {
    generateAiAnalytics();
  }
}

async function fetchIncomes() {
  let loaded = false;

  const localSaved = localStorage.getItem(getUserStorageKey('incomes_' + appState.currentMonth + '_' + appState.currentYear));
  if (localSaved) {
    try {
      const parsed = JSON.parse(localSaved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appState.incomes = parsed;
        loaded = true;
      }
    } catch (e) {}
  }

  if (!loaded) {
    try {
      const res = await authFetch('/incomes?period_month=' + encodeURIComponent(appState.currentMonth) + '&period_year=' + encodeURIComponent(appState.currentYear));
      if (res && res.ok) {
        const text = await res.text();
        const data = JSON.parse(text);
        if (data.status === 'SUCCESS' && Array.isArray(data.incomes) && data.incomes.length > 0) {
          appState.incomes = data.incomes;
          loaded = true;
        }
      }
    } catch (err) {}
  }

  if (!loaded) {
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      appState.incomes = EMBEDDED_ADMIN_DATA.incomes.filter(i => 
        i.period_month.toLowerCase() === appState.currentMonth.toLowerCase() && Number(i.period_year) === Number(appState.currentYear)
      );
    } else {
      appState.incomes = [];
    }
  }

  renderIncomesLists();
}

async function fetchBudgets() {
  let loaded = false;

  const localSaved = localStorage.getItem(getUserStorageKey('budgets_' + appState.currentMonth + '_' + appState.currentYear));
  if (localSaved) {
    try {
      const parsed = JSON.parse(localSaved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appState.budgets = parsed;
        loaded = true;
      }
    } catch (e) {}
  }

  if (!loaded) {
    try {
      const res = await authFetch('/budgets?period_month=' + encodeURIComponent(appState.currentMonth) + '&period_year=' + encodeURIComponent(appState.currentYear));
      if (res && res.ok) {
        const text = await res.text();
        const data = JSON.parse(text);
        if (data.status === 'SUCCESS' && Array.isArray(data.budgets) && data.budgets.length > 0) {
          appState.budgets = data.budgets;
          loaded = true;
        }
      }
    } catch (err) {}
  }

  if (!loaded) {
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      appState.budgets = EMBEDDED_ADMIN_DATA.budgets.filter(b => 
        b.period_month.toLowerCase() === appState.currentMonth.toLowerCase() && Number(b.period_year) === Number(appState.currentYear)
      ).map(b => ({
        ...b,
        balance: Number(b.target_anggaran) - Number(b.realisasi_used)
      }));
    } else {
      appState.budgets = [];
    }
  }

  renderBudgetsLists();
  renderControlBalance();
  renderDashboardCategorySummary();
}

async function fetchFinancialGoals() {
  const localSaved = localStorage.getItem(getUserStorageKey('goals'));
  if (localSaved) {
    try { appState.financialGoals = JSON.parse(localSaved); } catch (e) {}
  } else {
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
  }
  renderGoalsList();
  populateGoalDropdowns();
}

async function fetchTransactions() {
  const localSaved = localStorage.getItem(getUserStorageKey('transactions'));
  if (localSaved) {
    try { appState.transactions = JSON.parse(localSaved); } catch (e) {}
  } else {
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
  }
  renderTransactionsTable();
  if (appState.activeView === 'view-analytics') {
    renderAnalyticsExpensesStream();
  }
}

async function fetchIdealBalance() {
  let loaded = false;
  try {
    const res = await authFetch('/calculate-ideal-balance?period_month=' + encodeURIComponent(appState.currentMonth) + '&period_year=' + encodeURIComponent(appState.currentYear));
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
    const selectedMonthIndex = MONTH_NAMES_ID.findIndex(m => m.toLowerCase() === month.toLowerCase());

    let monthStatus = 'CURRENT_PROJECTION';
    let currentDay = OPERATING_ANCHOR_DAY;

    if (year < OPERATING_ANCHOR_YEAR || (year === OPERATING_ANCHOR_YEAR && selectedMonthIndex < OPERATING_ANCHOR_MONTH_INDEX)) {
      monthStatus = 'PAST_EVALUATION';
      currentDay = totalDays;
    } else if (year > OPERATING_ANCHOR_YEAR || (year === OPERATING_ANCHOR_YEAR && selectedMonthIndex > OPERATING_ANCHOR_MONTH_INDEX)) {
      monthStatus = 'FUTURE_PLANNING';
      currentDay = 0;
    } else {
      monthStatus = 'CURRENT_PROJECTION';
      currentDay = Math.min(OPERATING_ANCHOR_DAY, totalDays);
    }

    appState.monthStatus = monthStatus;

    const totalIncome = appState.incomes.reduce((sum, i) => sum + Number(i.amount), 0);

    let totalTarget = 0;
    let totalRealisasi = 0;
    let totalProjectedBurn = 0;

    appState.budgets.forEach(b => {
      const tgt = Number(b.target_anggaran) || 0;
      const used = Number(b.realisasi_used) || 0;
      totalTarget += tgt;
      totalRealisasi += used;

      let itemBurn = 0;
      if (monthStatus === 'PAST_EVALUATION') {
        itemBurn = tgt;
      } else if (monthStatus === 'FUTURE_PLANNING') {
        itemBurn = 0;
      } else {
        let dates = [];
        if (Array.isArray(b.selected_dates) && b.selected_dates.length > 0) {
          dates = b.selected_dates.map(Number);
        } else if (b.timing_pattern) {
          const numMatches = b.timing_pattern.match(/\b\d{1,2}\b/g);
          if (numMatches) dates = numMatches.map(Number).filter(d => d >= 1 && d <= 31);
        }

        if (dates.length > 0) {
          const passedDates = dates.filter(d => d <= currentDay);
          itemBurn = tgt * (passedDates.length / dates.length);
        } else {
          itemBurn = tgt * (currentDay / totalDays);
        }
      }
      totalProjectedBurn += itemBurn;
    });

    const timeRatio = monthStatus === 'PAST_EVALUATION' ? 1.0 : (monthStatus === 'FUTURE_PLANNING' ? 0.0 : (currentDay / totalDays));
    const idealBalance = totalIncome - totalProjectedBurn;
    const actualBal = totalIncome - totalRealisasi;

    appState.idealBalanceData = {
      status: 'SUCCESS',
      period: {
        month,
        year,
        month_status: monthStatus,
        current_day: currentDay,
        total_days_in_month: totalDays,
        time_elapsed_percentage: ((timeRatio * 100).toFixed(1)) + '%'
      },
      calculation_breakdown: {
        total_pendapatan: totalIncome,
        total_target_bulanan_100pct: totalTarget,
        total_target_harian_mingguan: totalTarget,
        proportional_burn_rate_variable: totalProjectedBurn,
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

  if (periodLabel) periodLabel.textContent = getMonthDisplayName(appState.currentMonth) + ' ' + appState.currentYear;

  if (appState.monthStatus === 'PAST_EVALUATION') {
    if (heroCard) heroCard.className = 'card hero-card evaluation-mode';
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitleEvaluation');
    if (modeBadge) {
      modeBadge.className = 'mode-badge evaluation';
      modeBadge.textContent = t('operatingModeEvaluation');
    }

    const netSurplus = d.calculation_breakdown.total_pendapatan - d.actual_vs_ideal_comparison.total_realisasi_used_to_date;
    if (heroAmount) heroAmount.textContent = formatIDR(netSurplus);

    if (timeProgressLabel) {
      timeProgressLabel.textContent = currentLang === 'en'
        ? 'Month Closed (100% Completed &bull; ' + d.period.total_days_in_month + ' Days)'
        : 'Bulan Ditutup (Evaluasi Penuh ' + d.period.total_days_in_month + ' Hari - 100%)';
    }
    if (timeProgressBar) {
      timeProgressBar.style.width = '100%';
      timeProgressBar.style.background = netSurplus >= 0 ? '#10B981' : '#EF4444';
    }

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.actual_vs_ideal_comparison.total_realisasi_used_to_date);

    const elIncLbl = document.getElementById('hero-stat-income-label');
    if (elIncLbl) elIncLbl.textContent = t('heroStatIncome');

    const elBurnLbl = document.getElementById('hero-stat-burn-label');
    if (elBurnLbl) elBurnLbl.textContent = t('heroStatBurnEvaluation');

  } else if (appState.monthStatus === 'FUTURE_PLANNING') {
    if (heroCard) heroCard.className = 'card hero-card';
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitlePlanning');
    if (modeBadge) {
      modeBadge.className = 'mode-badge planning';
      modeBadge.textContent = t('operatingModePlanning');
    }

    const ideal = d.calculation_breakdown.total_pendapatan - d.calculation_breakdown.total_target_bulanan_100pct;
    if (heroAmount) heroAmount.textContent = formatIDR(ideal);

    if (timeProgressLabel) {
      timeProgressLabel.textContent = currentLang === 'en'
        ? 'Planning Phase (Day 0 of ' + d.period.total_days_in_month + ' days)'
        : 'Fase Perencanaan Awal (Hari ke-0 dari ' + d.period.total_days_in_month + ' hari)';
    }
    if (timeProgressBar) {
      timeProgressBar.style.width = '0%';
      timeProgressBar.style.background = '#4F46E5';
    }

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.calculation_breakdown.total_target_bulanan_100pct);

    const elIncLbl = document.getElementById('hero-stat-income-label');
    if (elIncLbl) elIncLbl.textContent = t('heroStatIncome');

    const elBurnLbl = document.getElementById('hero-stat-burn-label');
    if (elBurnLbl) elBurnLbl.textContent = t('heroStatBurnPlanning');

  } else {
    if (heroCard) heroCard.className = 'card hero-card';
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitleProjection');
    if (modeBadge) {
      modeBadge.className = 'mode-badge projection';
      modeBadge.textContent = t('operatingModeProjection');
    }

    const ideal = d.calculation_breakdown.proyeksi_saldo_ideal;
    if (heroAmount) heroAmount.textContent = formatIDR(ideal);

    const currentDay = d.period.current_day;
    const totalDays = d.period.total_days_in_month;
    const ratioPct = d.period.time_elapsed_percentage;

    if (timeProgressLabel) {
      timeProgressLabel.textContent = currentLang === 'en'
        ? 'Day ' + currentDay + ' of ' + totalDays + ' days (' + ratioPct + ')'
        : 'Hari ke-' + currentDay + ' dari ' + totalDays + ' hari (' + ratioPct + ')';
    }
    if (timeProgressBar) {
      timeProgressBar.style.width = ratioPct;
      timeProgressBar.style.background = 'linear-gradient(90deg, #10B981, #34D399)';
    }

    const elInc = document.getElementById('hero-stat-income');
    if (elInc) elInc.textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    const elBurn = document.getElementById('hero-stat-burn');
    if (elBurn) elBurn.textContent = formatIDR(d.calculation_breakdown.proportional_burn_rate_variable);

    const elIncLbl = document.getElementById('hero-stat-income-label');
    if (elIncLbl) elIncLbl.textContent = t('heroStatIncome');

    const elBurnLbl = document.getElementById('hero-stat-burn-label');
    if (elBurnLbl) elBurnLbl.textContent = t('heroStatBurnProjection');
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
    if (statusLabel) statusLabel.textContent = t('statusOverbudget');
    if (diffFigure) {
      diffFigure.className = 'difference-figure overbudget';
      diffFigure.textContent = formatIDR(diff);
    }
    if (descText) {
      descText.className = 'status-description-text overbudget';
      descText.innerHTML = currentLang === 'en'
        ? 'Total available cash is <strong>' + formatIDR(Math.abs(diff)) + ' below</strong> today\'s ideal burn rate projection. Expense reduction recommended.'
        : 'Total kas Anda saat ini <strong>' + formatIDR(Math.abs(diff)) + ' lebih rendah</strong> dari batas proyeksi ideal hari ini. Disarankan membatasi pengeluaran.';
    }
  } else {
    if (resultBox) resultBox.className = 'reality-status-box hemat';
    if (statusBadge) statusBadge.className = 'status-badge hemat';
    if (statusLabel) statusLabel.textContent = t('statusHemat');
    if (diffFigure) {
      diffFigure.className = 'difference-figure hemat';
      diffFigure.textContent = diff === 0 ? 'Rp 0' : '+' + formatIDR(diff);
    }
    if (descText) {
      descText.className = 'status-description-text hemat';
      descText.innerHTML = currentLang === 'en'
        ? 'Excellent cash health! Total cash is <strong>' + formatIDR(diff) + ' higher</strong> than today\'s proportional burn rate target.'
        : 'Arus kas Anda sangat sehat! Total kas Anda <strong>' + formatIDR(diff) + ' lebih surplus</strong> dibanding target burn rate proporsional hari ini.';
    }
  }
}

// -----------------------------------------------------------------------------
// 3. RENDER COMPACT VISUAL ARITHMETIC FLOW FORMULA WIDGET
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
  if (elBul) elBul.textContent = '- ' + formatIDR(b.total_target_bulanan_100pct);
  if (elSubHar) elSubHar.textContent = t('flowSubVariable');
  if (elHar) elHar.textContent = '- ' + formatIDR(b.proportional_burn_rate_variable);
  if (elRes) elRes.textContent = formatIDR(b.proyeksi_saldo_ideal);
}

// -----------------------------------------------------------------------------
// 4. RENDER INCOMES & BUDGETS
// -----------------------------------------------------------------------------
function renderIncomesLists() {
  const containerBudgetsPage = document.getElementById('incomes-management-list');
  const allIncomes = Array.isArray(appState.incomes) ? appState.incomes : [];

  const html = allIncomes.length === 0 
    ? '<div style="font-size: 0.75rem; color: var(--text-secondary); padding: 8px 0;">' + (currentLang === 'en' ? 'No income sources logged this month. Click "+ Add Income".' : 'Belum ada sumber pemasukan bulan ini. Klik "+ Pemasukan".') + '</div>'
    : allIncomes.map(inc => 
        '<div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.8rem;">' +
          '<div>' +
            '<span style="font-weight: 600; color: var(--text-primary);">' + inc.source_name + '</span>' +
            '<span style="font-size: 0.7rem; color: var(--text-secondary); margin-left: 6px;">(' + getMonthDisplayName(inc.period_month) + ' ' + inc.period_year + ')</span>' +
          '</div>' +
          '<div style="display: flex; align-items: center; gap: 8px;">' +
            '<span style="font-weight: 700; color: var(--accent-positive);">' + formatIDR(inc.amount) + '</span>' +
            '<button onclick="deleteIncome(\'' + inc.income_id + '\')" title="Hapus" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); color: #EF4444; cursor: pointer; font-size: 1rem; line-height: 1; font-weight: 700; padding: 1px 7px; border-radius: 4px;">&times;</button>' +
          '</div>' +
        '</div>'
      ).join('');

  if (containerBudgetsPage) containerBudgetsPage.innerHTML = html;
}

function renderBudgetsLists() {
  const containerBudgetsPage = document.getElementById('budgets-page-list');
  const allBudgets = Array.isArray(appState.budgets) ? appState.budgets : [];

  const filtered = appState.activeCategory === 'Semua' 
    ? allBudgets 
    : allBudgets.filter(b => b.category_type === appState.activeCategory);

  function generateCardsHtml(items) {
    if (items.length === 0) {
      const emptyTitle = currentLang === 'en' ? 'No Budget Items For This Month' : 'Belum Ada Pos Anggaran di Bulan Ini';
      const emptyDesc = currentLang === 'en' ? 'Add a new budget category or copy from another month.' : 'Tambahkan pos anggaran baru atau salin dari bulan lain.';
      const btnAdd = currentLang === 'en' ? '+ Add Budget Category' : '+ Tambah Pos Anggaran';

      return (
        '<div class="empty-state-box" style="padding: 24px 16px; text-align: center;">' +
          '<div class="empty-title" style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 4px;">' + emptyTitle + '</div>' +
          '<div class="empty-desc" style="font-size: 0.75rem; color: var(--text-secondary); max-width: 280px; margin: 0 auto 12px; line-height: 1.4;">' + emptyDesc + '</div>' +
          '<button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openAddBudgetModal()">' + btnAdd + '</button>' +
        '</div>'
      );
    }

    return items.map(item => {
      const balance = Number(item.balance !== undefined ? item.balance : (item.target_anggaran - item.realisasi_used));
      const balanceClass = balance >= 0 ? 'positive' : 'negative';
      const balanceText = balance >= 0 ? (t('remWord') + formatIDR(balance)) : (t('minusWord') + formatIDR(Math.abs(balance)));
      
      let goalBadge = '';
      if (item.category_type === 'Alokasi Surplus' || item.linked_goal_id) {
        if (item.linked_goal_id) {
          const g = (appState.financialGoals || []).find(x => x.goal_id === item.linked_goal_id);
          goalBadge = '<span style="font-size: 0.65rem; color: #4338CA; background: #EEF2FF; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #C7D2FE;">' + (g ? g.goal_name : 'Goal Linked') + '</span>';
        } else if (item.category_type === 'Alokasi Surplus') {
          goalBadge = '<span style="font-size: 0.65rem; color: #D97706; background: #FEF3C7; padding: 2px 6px; border-radius: 4px; font-weight: 600;">' + (currentLang === 'en' ? 'Link Goal' : 'Hubungkan Goal') + '</span>';
        }
      }

      let timingDisplay = item.timing_pattern || t('flatWord');
      if (Array.isArray(item.selected_dates) && item.selected_dates.length > 0) {
        timingDisplay = t('dateWord') + item.selected_dates.join(', ');
      }
      const timingBadge = '<span class="timing-tag">' + timingDisplay + '</span>';

      let freqDisplay = item.frekuensi;
      if (currentLang === 'en') {
        if (item.frekuensi === 'Harian') freqDisplay = 'Daily';
        else if (item.frekuensi === 'Mingguan') freqDisplay = 'Weekly';
        else if (item.frekuensi === 'Bulanan') freqDisplay = 'Monthly';
      }

      return (
        '<div class="budget-item-card" onclick="openBudgetDetailModalById(\'' + item.budget_id + '\')">' +
          '<div class="item-left">' +
            '<div class="item-name">' + item.item_name + '</div>' +
            '<div class="item-category-pill">' +
              '<span>' + item.category_type + '</span>' +
              '<span class="freq-tag ' + item.frekuensi + '">' + freqDisplay + '</span>' +
              timingBadge +
              goalBadge +
            '</div>' +
          '</div>' +
          '<div class="item-right">' +
            '<div class="item-target">' + formatIDR(item.target_anggaran) + '</div>' +
            '<div class="item-used">' + t('usedWord') + formatIDR(item.realisasi_used) + '</div>' +
            '<div><span class="item-balance-tag ' + balanceClass + '">' + balanceText + '</span></div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  const cardsHtml = generateCardsHtml(filtered);
  if (containerBudgetsPage) containerBudgetsPage.innerHTML = cardsHtml;
}

// -----------------------------------------------------------------------------
// 6. RENDER GOALS
// -----------------------------------------------------------------------------
function renderGoalsList() {
  const containerGoalsPage = document.getElementById('goals-page-list');
  const allGoals = Array.isArray(appState.financialGoals) ? appState.financialGoals : [];

  if (allGoals.length === 0) {
    const emptyTitle = currentLang === 'en' ? 'No Financial Goals Yet' : 'Belum Ada Target Finansial';
    const emptyDesc = currentLang === 'en' ? 'Create your long-term savings and investment milestones.' : 'Buat sasaran tabungan dan investasi jangka panjang Anda.';
    const btnText = currentLang === 'en' ? '+ Add Financial Goal' : '+ Tambah Target Goal';

    if (containerGoalsPage) {
      containerGoalsPage.innerHTML = (
        '<div class="empty-state-box" style="padding: 24px 16px; text-align: center;">' +
          '<div class="empty-title" style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 4px;">' + emptyTitle + '</div>' +
          '<div class="empty-desc" style="font-size: 0.75rem; color: var(--text-secondary); max-width: 280px; margin: 0 auto 12px; line-height: 1.4;">' + emptyDesc + '</div>' +
          '<button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openAddGoalModal()">' + btnText + '</button>' +
        '</div>'
      );
    }
    return;
  }

  if (containerGoalsPage) {
    containerGoalsPage.innerHTML = allGoals.map(g => {
      const cur = Number(g.current_amount) || 0;
      const tgt = Number(g.target_amount) || 1;
      const pct = Math.min(100, Math.round((cur / tgt) * 100));

      return (
        '<div class="card" style="padding: 12px 14px; margin-bottom: 10px; cursor: pointer; border: 1px solid var(--border-subtle);" onclick="openGoalDetailModalById(\'' + g.goal_id + '\')">' +
          '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">' +
            '<div style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary);">' + g.goal_name + '</div>' +
            '<div style="font-size: 0.7rem; font-weight: 700; color: #4F46E5; background: #EEF2FF; padding: 2px 8px; border-radius: 6px;">' + pct + '%</div>' +
          '</div>' +
          '<div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 4px;">' +
            'Target: <strong>' + (currentLang === 'en' ? 'Year ' : 'Tahun ') + (g.target_year || '2027') + '</strong> &bull; <strong>' + (g.target_instrument || 'Investasi') + '</strong>' +
          '</div>' +
          '<div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 8px;">' +
            (currentLang === 'en' ? 'Collected: ' : 'Terkumpul: ') + '<strong style="color: var(--accent-positive);">' + formatIDR(cur) + '</strong> ' + (currentLang === 'en' ? 'of target ' : 'dari target ') + formatIDR(tgt) +
          '</div>' +
          '<div class="progress-track" style="background: var(--border-subtle); height: 6px;">' +
            '<div class="progress-fill" style="width: ' + pct + '%; background: linear-gradient(90deg, #4F46E5, #818CF8);"></div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }
}

function populateGoalDropdowns() {
  const goalSelectAdd = document.getElementById('budget-linked-goal');
  const goalSelectEdit = document.getElementById('edit-budget-linked-goal');

  const optionsHtml = '<option value="">-- ' + (currentLang === 'en' ? 'No Linked Goal' : 'Tanpa Relasi Goal') + ' --</option>' +
    (appState.financialGoals || []).map(g => 
      '<option value="' + g.goal_id + '">' + g.goal_name + ' (' + (g.target_instrument || 'Investasi') + ')</option>'
    ).join('');

  if (goalSelectAdd) goalSelectAdd.innerHTML = optionsHtml;
  if (goalSelectEdit) goalSelectEdit.innerHTML = optionsHtml;
}

// -----------------------------------------------------------------------------
// 7. RENDER TRANSACTIONS
// -----------------------------------------------------------------------------
function renderTransactionsTable() {
  const container = document.getElementById('mutasi-transactions-list');
  if (!container) return;

  if (appState.transactions.length === 0) {
    container.innerHTML = 
      '<div style="font-size: 0.72rem; color: var(--text-secondary); padding: 8px 0;">' +
        (currentLang === 'en' ? 'No reconciled statement transactions yet.' : 'Belum ada transaksi mutasi terekonsiliasi.') +
      '</div>';
    return;
  }

  container.innerHTML = appState.transactions.map(tx => {
    const isIncome = tx.transaction_type === 'Income';
    const amountColor = isIncome ? 'var(--accent-positive)' : 'var(--accent-warning)';
    const amountPrefix = isIncome ? '+ ' : '- ';

    return (
      '<div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.75rem;">' +
        '<div>' +
          '<div style="font-weight: 600; color: var(--text-primary);">' + (tx.description || (currentLang === 'en' ? 'Transaction' : 'Transaksi')) + '</div>' +
          '<div style="font-size: 0.68rem; color: var(--text-secondary);">' + tx.transaction_date + ' &bull; ' + (tx.payment_method_platform || 'Bank') + '</div>' +
        '</div>' +
        '<div style="font-weight: 700; color: ' + amountColor + ';">' +
          amountPrefix + formatIDR(tx.amount) +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// -----------------------------------------------------------------------------
// 8. MODALS & CRUD HANDLERS
// -----------------------------------------------------------------------------
function switchModalTab(tab) {
  const tabTx = document.getElementById('tab-modal-view-tx');
  const tabEdit = document.getElementById('tab-modal-view-edit');
  const contentTx = document.getElementById('modal-content-tx');
  const contentEdit = document.getElementById('modal-content-edit');

  if (tab === 'edit') {
    if (tabEdit) tabEdit.classList.add('active');
    if (tabTx) tabTx.classList.remove('active');
    if (contentEdit) contentEdit.style.display = 'flex';
    if (contentTx) contentTx.style.display = 'none';
  } else {
    if (tabTx) tabTx.classList.add('active');
    if (tabEdit) tabEdit.classList.remove('active');
    if (contentTx) contentTx.style.display = 'block';
    if (contentEdit) contentEdit.style.display = 'none';
  }
}

function openAddIncomeModal() {
  document.getElementById('income-modal-period').textContent = getMonthDisplayName(appState.currentMonth) + ' ' + appState.currentYear;
  document.getElementById('income-source-input').value = '';
  document.getElementById('income-amount-input').value = '';
  document.getElementById('add-income-modal').classList.add('active');
}

async function submitAddIncome() {
  const source = document.getElementById('income-source-input').value.trim();
  const amount = parseFloat(document.getElementById('income-amount-input').value) || 0;
  if (!source || amount <= 0) {
    alert(currentLang === 'en' ? 'Please fill out income source and valid amount!' : 'Harap isi sumber pemasukan dan nominal yang valid!');
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

  saveUserDataToStorage();

  authFetch('/incomes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newInc)
  }).catch(() => {});

  document.getElementById('add-income-modal').classList.remove('active');
  refreshAllData();
}

async function deleteIncome(id) {
  const confirmMsg = currentLang === 'en' ? 'Delete this income source?' : 'Hapus sumber pemasukan ini?';
  if (confirm(confirmMsg)) {
    appState.incomes = appState.incomes.filter(i => i.income_id !== id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.incomes = EMBEDDED_ADMIN_DATA.incomes.filter(i => i.income_id !== id);
    }
    saveUserDataToStorage();
    authFetch('/incomes?income_id=' + id, { method: 'DELETE' }).catch(() => {});
    refreshAllData();
  }
}

function openAddBudgetModal() {
  document.getElementById('budget-modal-period').textContent = getMonthDisplayName(appState.currentMonth) + ' ' + appState.currentYear;
  document.getElementById('budget-item-name').value = '';
  document.getElementById('budget-nominal-satuan').value = '';
  document.getElementById('budget-multiplier').value = '1';
  
  addModalTiming = { mode: 'flat', selectedDates: [] };
  setTimingMode('add', 'flat');
  renderCalendarDaysGrid('add');

  populateGoalDropdowns();
  document.getElementById('add-budget-modal').classList.add('active');
}

async function submitAddBudget() {
  const name = document.getElementById('budget-item-name').value.trim();
  const cat = document.getElementById('budget-category').value;
  const freq = document.getElementById('budget-freq').value;
  const satuan = parseFloat(document.getElementById('budget-nominal-satuan').value) || 0;
  const mult = parseInt(document.getElementById('budget-multiplier').value) || 1;
  const linkedGoal = document.getElementById('budget-linked-goal').value || null;

  if (!name || satuan <= 0) {
    alert(currentLang === 'en' ? 'Please fill out budget name and valid amount!' : 'Harap isi nama pos anggaran dan nominal yang valid!');
    return;
  }

  if (cat === 'Alokasi Surplus' && !linkedGoal && appState.financialGoals.length > 0) {
    alert(currentLang === 'en' ? 'Surplus / Investment category requires selecting a Financial Goal target!' : 'Khusus kategori Alokasi Investasi / Surplus, wajib memilih target Goal Finansial!');
    return;
  }

  let timing = currentLang === 'en' ? 'Flat Daily' : 'Rata-rata Harian (Flat)';
  let selectedDates = [];
  if (addModalTiming.mode === 'dates' && addModalTiming.selectedDates.length > 0) {
    selectedDates = [...addModalTiming.selectedDates].sort((a, b) => a - b);
    timing = (currentLang === 'en' ? 'Dates: ' : 'Tanggal: ') + selectedDates.join(', ');
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
    selected_dates: selectedDates,
    linked_goal_id: linkedGoal
  };

  appState.budgets.push(newB);
  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    EMBEDDED_ADMIN_DATA.budgets.push(newB);
  }

  saveUserDataToStorage();

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
  switchModalTab('tx');
  populateGoalDropdowns();

  let timingDisplay = item.timing_pattern || (currentLang === 'en' ? 'Flat Daily' : 'Flat Harian');
  if (Array.isArray(item.selected_dates) && item.selected_dates.length > 0) {
    timingDisplay = (currentLang === 'en' ? 'Dates: ' : 'Tgl: ') + item.selected_dates.join(', ');
  }

  document.getElementById('detail-budget-title').textContent = item.item_name;
  document.getElementById('detail-budget-cat').textContent = item.category_type;
  document.getElementById('detail-budget-freq').textContent = item.frekuensi;
  document.getElementById('detail-budget-timing').textContent = timingDisplay;
  document.getElementById('detail-budget-target').textContent = formatIDR(item.target_anggaran);
  document.getElementById('detail-budget-used').textContent = formatIDR(item.realisasi_used);
  document.getElementById('detail-budget-balance').textContent = formatIDR(item.balance);

  const editName = document.getElementById('edit-budget-name');
  const editCat = document.getElementById('edit-budget-cat');
  const editFreq = document.getElementById('edit-budget-freq');
  const editNominal = document.getElementById('edit-budget-nominal');
  const editMult = document.getElementById('edit-budget-mult');
  const editGoal = document.getElementById('edit-budget-linked-goal');

  if (editName) editName.value = item.item_name;
  if (editCat) editCat.value = item.category_type || 'Dasar';
  if (editFreq) editFreq.value = item.frekuensi || 'Bulanan';
  if (editNominal) editNominal.value = item.nominal_satuan || (item.target_anggaran / (item.multiplier || 1));
  if (editMult) editMult.value = item.multiplier || 1;
  if (editGoal) editGoal.value = item.linked_goal_id || '';

  let dates = [];
  if (Array.isArray(item.selected_dates) && item.selected_dates.length > 0) {
    dates = item.selected_dates.map(Number);
  } else if (item.timing_pattern) {
    const matches = item.timing_pattern.match(/\b\d{1,2}\b/g);
    if (matches) dates = matches.map(Number).filter(d => d >= 1 && d <= 31);
  }

  if (dates.length > 0) {
    editModalTiming = { mode: 'dates', selectedDates: dates };
    setTimingMode('edit', 'dates');
  } else {
    editModalTiming = { mode: 'flat', selectedDates: [] };
    setTimingMode('edit', 'flat');
  }
  renderCalendarDaysGrid('edit');

  const txContainer = document.getElementById('detail-budget-tx-list');
  txContainer.innerHTML = '<div style="font-size: 0.72rem; color: var(--text-secondary);">' + (currentLang === 'en' ? 'Loading transactions...' : 'Memuat transaksi...') + '</div>';

  try {
    const res = await authFetch('/transactions?budget_id=' + item.budget_id);
    if (res && res.ok) {
      const data = await res.json();
      txContainer.innerHTML = '';
      if (data.transactions && data.transactions.length > 0) {
        data.transactions.forEach(tx => {
          const row = document.createElement('div');
          row.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.75rem;';
          row.innerHTML = 
            '<div>' +
              '<div style="font-weight: 600; color: var(--text-primary);">' + (tx.description || 'Transaksi') + '</div>' +
              '<div style="color: var(--text-secondary); font-size: 0.68rem;">' + tx.transaction_date + ' &bull; ' + (tx.payment_method_platform || 'Manual') + '</div>' +
            '</div>' +
            '<div style="font-weight: 700; color: var(--accent-warning);">- ' + formatIDR(tx.amount) + '</div>';
          txContainer.appendChild(row);
        });
        document.getElementById('budget-detail-modal').classList.add('active');
        return;
      }
    }
  } catch (err) {}

  txContainer.innerHTML = '<div style="font-size: 0.72rem; color: var(--text-secondary);">' + (currentLang === 'en' ? 'No debit transactions logged for this category.' : 'Belum ada mutasi debit tercatat untuk pos ini.') + '</div>';
  document.getElementById('budget-detail-modal').classList.add('active');
}

async function submitEditBudget() {
  const item = appState.selectedBudgetItem;
  if (!item) return;

  const name = document.getElementById('edit-budget-name').value.trim();
  const cat = document.getElementById('edit-budget-cat').value;
  const freq = document.getElementById('edit-budget-freq').value;
  const satuan = parseFloat(document.getElementById('edit-budget-nominal').value) || 0;
  const mult = parseInt(document.getElementById('edit-budget-mult').value) || 1;
  const linkedGoal = document.getElementById('edit-budget-linked-goal') ? document.getElementById('edit-budget-linked-goal').value || null : item.linked_goal_id;

  if (!name || satuan <= 0) {
    alert(currentLang === 'en' ? 'Please fill out budget name and valid amount!' : 'Harap isi nama pos anggaran dan nominal yang valid!');
    return;
  }

  let timing = currentLang === 'en' ? 'Flat Daily' : 'Rata-rata Harian (Flat)';
  let selectedDates = [];
  if (editModalTiming.mode === 'dates' && editModalTiming.selectedDates.length > 0) {
    selectedDates = [...editModalTiming.selectedDates].sort((a, b) => a - b);
    timing = (currentLang === 'en' ? 'Dates: ' : 'Tanggal: ') + selectedDates.join(', ');
  }

  const newTarget = satuan * mult;

  item.item_name = name;
  item.category_type = cat;
  item.frekuensi = freq;
  item.timing_pattern = timing;
  item.selected_dates = selectedDates;
  item.nominal_satuan = satuan;
  item.multiplier = mult;
  item.target_anggaran = newTarget;
  item.linked_goal_id = linkedGoal;
  item.balance = newTarget - (Number(item.realisasi_used) || 0);

  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    const embeddedMatch = EMBEDDED_ADMIN_DATA.budgets.find(b => b.budget_id === item.budget_id);
    if (embeddedMatch) {
      embeddedMatch.item_name = name;
      embeddedMatch.category_type = cat;
      embeddedMatch.frekuensi = freq;
      embeddedMatch.timing_pattern = timing;
      embeddedMatch.selected_dates = selectedDates;
      embeddedMatch.nominal_satuan = satuan;
      embeddedMatch.multiplier = mult;
      embeddedMatch.target_anggaran = newTarget;
      embeddedMatch.linked_goal_id = linkedGoal;
    }
  }

  saveUserDataToStorage();

  authFetch('/budgets', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      budget_id: item.budget_id,
      item_name: name,
      category_type: cat,
      frekuensi: freq,
      timing_pattern: timing,
      selected_dates: selectedDates,
      nominal_satuan: satuan,
      multiplier: mult,
      target_anggaran: newTarget,
      linked_goal_id: linkedGoal
    })
  }).catch(() => {});

  alert(currentLang === 'en' ? 'Budget category \'' + name + '\' updated successfully!' : 'Pos anggaran \'' + name + '\' berhasil diperbarui!');
  
  document.getElementById('detail-budget-title').textContent = item.item_name;
  document.getElementById('detail-budget-cat').textContent = item.category_type;
  document.getElementById('detail-budget-freq').textContent = item.frekuensi;
  document.getElementById('detail-budget-timing').textContent = timing;
  document.getElementById('detail-budget-target').textContent = formatIDR(item.target_anggaran);
  document.getElementById('detail-budget-balance').textContent = formatIDR(item.balance);

  switchModalTab('tx');
  refreshAllData();
}

async function submitManualTx() {
  const item = appState.selectedBudgetItem;
  if (!item) return;

  const desc = document.getElementById('manual-tx-desc').value.trim();
  const amount = parseFloat(document.getElementById('manual-tx-amount').value) || 0;
  const date = document.getElementById('manual-tx-date').value || '2026-08-22';

  if (!desc || amount <= 0) {
    alert(currentLang === 'en' ? 'Please enter description and valid amount!' : 'Harap isi keterangan dan nominal pengeluaran!');
    return;
  }

  item.realisasi_used = (Number(item.realisasi_used) || 0) + amount;
  item.balance = Number(item.target_anggaran) - item.realisasi_used;

  if (item.linked_goal_id) {
    const linkedG = appState.financialGoals.find(g => g.goal_id === item.linked_goal_id);
    if (linkedG) {
      linkedG.current_amount = (Number(linkedG.current_amount) || 0) + amount;
    }
  }

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
  saveUserDataToStorage();

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

  const confirmMsg = currentLang === 'en' ? 'Delete budget category \'' + item.item_name + '\'?' : 'Hapus pos anggaran \'' + item.item_name + '\'?';
  if (confirm(confirmMsg)) {
    appState.budgets = appState.budgets.filter(b => b.budget_id !== item.budget_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.budgets = EMBEDDED_ADMIN_DATA.budgets.filter(b => b.budget_id !== item.budget_id);
    }
    saveUserDataToStorage();
    authFetch('/budgets?budget_id=' + item.budget_id, { method: 'DELETE' }).catch(() => {});
    document.getElementById('budget-detail-modal').classList.remove('active');
    refreshAllData();
  }
}

// Financial Goal Handlers (Simplified: No goal code required)
function openAddGoalModal() {
  document.getElementById('goal-name-input').value = '';
  document.getElementById('goal-target-input').value = '';
  document.getElementById('goal-initial-input').value = '';
  document.getElementById('add-goal-modal').classList.add('active');
}

async function submitAddGoal() {
  const name = document.getElementById('goal-name-input').value.trim();
  const targetYear = document.getElementById('goal-target-year-select').value;
  const target = parseFloat(document.getElementById('goal-target-input').value) || 0;
  const initial = parseFloat(document.getElementById('goal-initial-input').value) || 0;
  const inst = document.getElementById('goal-instrument-select').value;

  if (!name || target <= 0) {
    alert(currentLang === 'en' ? 'Please fill out goal name and target amount!' : 'Harap isi nama sasaran dan target nominal!');
    return;
  }

  const code = 'G' + (appState.financialGoals.length + 1);

  const newG = {
    goal_id: 'goal_' + Date.now().toString(36),
    user_id: currentUser.user_id,
    goal_code: code,
    goal_name: name,
    target_year: targetYear,
    time_frame: (currentLang === 'en' ? 'Year ' : 'Tahun ') + targetYear,
    target_amount: target,
    current_amount: initial,
    target_instrument: inst,
    status: 'Active'
  };

  appState.financialGoals.push(newG);
  if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
    EMBEDDED_ADMIN_DATA.goals.push(newG);
  }
  saveUserDataToStorage();

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
  document.getElementById('detail-goal-code').textContent = '';
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
    alert(currentLang === 'en' ? 'Please enter a valid deposit amount!' : 'Masukkan nominal setoran yang valid!');
    return;
  }

  g.current_amount = (Number(g.current_amount) || 0) + amount;
  saveUserDataToStorage();

  authFetch('/financial-goals?goal_id=' + g.goal_id, {
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

  const confirmMsg = currentLang === 'en' ? 'Delete financial goal \'' + g.goal_name + '\'?' : 'Hapus sasaran keuangan \'' + g.goal_name + '\'?';
  if (confirm(confirmMsg)) {
    appState.financialGoals = appState.financialGoals.filter(item => item.goal_id !== g.goal_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.goals = EMBEDDED_ADMIN_DATA.goals.filter(item => item.goal_id !== g.goal_id);
    }
    saveUserDataToStorage();
    authFetch('/financial-goals?goal_id=' + g.goal_id, { method: 'DELETE' }).catch(() => {});
    document.getElementById('detail-goal-modal').classList.remove('active');
    refreshAllData();
  }
}

// -----------------------------------------------------------------------------
// 9. TEMPLATE DUPLICATION
// -----------------------------------------------------------------------------
function openDuplicateModal() {
  const curMIdx = MONTH_NAMES_ID.indexOf(appState.currentMonth);
  const prevMIdx = curMIdx > 0 ? curMIdx - 1 : 11;
  const prevYear = curMIdx > 0 ? appState.currentYear : appState.currentYear - 1;

  document.getElementById('dup-source-month').value = MONTH_NAMES_ID[prevMIdx];
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
    b.period_month.toLowerCase() === srcMonth.toLowerCase() && Number(b.period_year) === srcYear
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

  saveUserDataToStorage();

  authFetch('/duplicate-month-budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source_month: srcMonth, source_year: srcYear, target_month: tgtMonth, target_year: tgtYear })
  }).catch(() => {});

  const successMsg = currentLang === 'en'
    ? 'Successfully duplicated ' + copied + ' budget items from ' + getMonthDisplayName(srcMonth) + ' ' + srcYear + ' to ' + getMonthDisplayName(tgtMonth) + ' ' + tgtYear + '!'
    : 'Berhasil menduplikasi ' + copied + ' pos anggaran dari ' + srcMonth + ' ' + srcYear + ' ke ' + tgtMonth + ' ' + tgtYear + '!';
  alert(successMsg);

  document.getElementById('duplicate-modal').classList.remove('active');
  appState.currentMonth = tgtMonth;
  appState.currentYear = tgtYear;
  document.getElementById('select-month').value = tgtMonth;
  document.getElementById('select-year').value = tgtYear;
  refreshAllData();
}

// -----------------------------------------------------------------------------
// 10. STATEMENT UPLOADER (PDF / CSV / TXT)
// -----------------------------------------------------------------------------
function setupStatementUploader() {
  const interimFileInput = document.getElementById('interim-statement-file-input');
  const interimTextarea = document.getElementById('interim-statement-textarea');
  
  if (interimFileInput && interimTextarea) {
    interimFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.name.toLowerCase().endsWith('.pdf')) {
        handlePdfUpload(file);
      } else {
        const reader = new FileReader();
        reader.onload = (ev) => {
          interimTextarea.value = ev.target.result;
          processInterimStatement();
        };
        reader.readAsText(file);
      }
    });
  }
}

// -----------------------------------------------------------------------------
// PROGRESSIVE WEB APP (PWA) REGISTRATION
// -----------------------------------------------------------------------------
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('FlowTrack Pro PWA Service Worker Registered with Scope:', registration.scope);
      }).catch((err) => {
        console.warn('PWA Service Worker registration warning:', err);
      });
    });
  }
}

// -----------------------------------------------------------------------------
// INITIALIZATION ON DOM READY
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  registerServiceWorker();
  setLanguage(currentLang);
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
    saveUserDataToStorage();
    renderCashReality();
  }

  [bankInput, walletInput, emoneyInput, otherInput].forEach(inp => {
    if (inp) inp.addEventListener('input', handleCashInputChange);
  });

  // Month Notes Input Event
  const notesInput = document.getElementById('cash-reality-notes');
  if (notesInput) {
    notesInput.addEventListener('input', () => {
      saveUserDataToStorage();
    });
  }

  // Category Tabs Filter
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.hasAttribute('data-category')) {
        document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.activeCategory = btn.getAttribute('data-category');
        renderBudgetsLists();
      }
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

  const formFeedback = document.getElementById('user-feedback-form');
  if (formFeedback) {
    formFeedback.addEventListener('submit', (e) => {
      e.preventDefault();
      submitUserFeedback();
    });
  }

  if (currentUser) {
    loadCashAccountsFromStorage();
    refreshAllData();
  }
});

// Explicit Window Global Export Bindings
window.setLanguage = setLanguage;
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
window.switchModalTab = switchModalTab;
window.submitEditBudget = submitEditBudget;
window.submitManualTx = submitManualTx;
window.deleteSelectedBudget = deleteSelectedBudget;
window.setTimingMode = setTimingMode;
window.renderCalendarDaysGrid = renderCalendarDaysGrid;
window.toggleDayDate = toggleDayDate;
window.applyDatePreset = applyDatePreset;
window.openAddGoalModal = openAddGoalModal;
window.submitAddGoal = submitAddGoal;
window.openGoalDetailModalById = openGoalDetailModalById;
window.submitGoalDeposit = submitGoalDeposit;
window.deleteSelectedGoal = deleteSelectedGoal;
window.openDuplicateModal = openDuplicateModal;
window.submitDuplicateMonth = submitDuplicateMonth;
window.takeOutUser = takeOutUser;
window.setFeedbackRating = setFeedbackRating;
window.submitUserFeedback = submitUserFeedback;
window.fetchUserFeedbacks = fetchUserFeedbacks;
window.fetchAdminFeedbacks = fetchAdminFeedbacks;
window.toggleFeedbackStatus = toggleFeedbackStatus;
window.deleteFeedback = deleteFeedback;
window.autoSyncSurplusBudget = autoSyncSurplusBudget;
window.renderControlBalance = renderControlBalance;
window.generateAiAnalytics = generateAiAnalytics;
window.filterAnalyticsCategory = filterAnalyticsCategory;
window.renderAnalyticsExpensesStream = renderAnalyticsExpensesStream;
window.openAddExpenseModal = openAddExpenseModal;
window.submitQuickExpense = submitQuickExpense;
window.loadBcaSampleStatement = loadBcaSampleStatement;
window.processInterimStatement = processInterimStatement;
window.toggleFlowFormula = toggleFlowFormula;
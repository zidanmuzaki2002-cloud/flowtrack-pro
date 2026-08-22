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
  incomes: [{"income_id":"8c096362-a77b-4689-8d1e-36d6c16a3d70","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"BCA","amount":2350000},{"income_id":"2624bba6-4e0f-4602-9f20-7b510f0a43e9","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"Saham","amount":830000},{"income_id":"1cfc584d-1903-418f-b484-e4d8758b5f17","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"source_name":"BPJS TK","amount":4350000},{"income_id":"bfb58b1c-1faa-40a5-92a1-6ac69a23c99a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"BCA","amount":2350000},{"income_id":"2c0212f1-a04b-49fa-90bf-9a6397435bb2","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"Saham","amount":830000},{"income_id":"45a7f7b5-454a-4288-a0cf-f5fd8b5b4bc2","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"source_name":"BPJS TK","amount":4350000},{"income_id":"2764fb5d-8391-4e86-a229-48a326e9b043","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"source_name":"Gaji","amount":4400000},{"income_id":"12543a5c-607e-47eb-8997-8def965648eb","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"90fef87d-0a2a-4b8d-9af9-f6871a7137f0","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Piutang","amount":500000},{"income_id":"4bef9148-900c-42be-8fbc-751dd3491a85","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Sisa Maret","amount":500000},{"income_id":"63f18c4d-6eca-482a-9c61-83910bc10158","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Lynk.id","amount":590000},{"income_id":"200a3b23-330b-4292-b6fb-241223c10578","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"PP - MySkill","amount":130000},{"income_id":"28dd1f37-1bd0-477f-83a7-a717186cdc18","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Ambil Dana Darurat","amount":900000},{"income_id":"d64d4fb8-742a-4b4b-a5a2-b5b767176f86","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"source_name":"Jual sepeda","amount":900000},{"income_id":"83334c39-9e55-4863-88cf-00274b893f54","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"16a9a2f7-e83e-44cc-85f2-0c5c44d23c2b","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Untung WBSA","amount":350000},{"income_id":"32646be2-f8ab-40eb-9b42-4aabaecae3e9","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Lynk.id","amount":375000},{"income_id":"c8f4b6d1-82ac-499c-b186-d50494834920","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP - Kita Lulus","amount":300000},{"income_id":"a3e5346c-d7d7-498f-8c6a-32f030479db1","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP- Cocareer","amount":220000},{"income_id":"8cfbf50b-a9b0-42ad-863f-6135fc388c55","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Reimburse","amount":560000},{"income_id":"3f874690-ef56-47c9-91e8-d2270ae9fd6d","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"Sisa bulan April","amount":380000},{"income_id":"a1f1fd68-ede5-4b0e-bb2f-69ca0b2a3d24","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"source_name":"PP - Parfum","amount":275000},{"income_id":"8b9f6f6a-e4fc-443a-b8fb-882c18ee0463","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"Gaji","amount":6000000},{"income_id":"1e524670-d07f-491e-ae18-68d53bd40624","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"PP - Tempat Belajar","amount":350000},{"income_id":"71a4022e-57d5-45a2-8a1b-b3e5116f9c6a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"PP - Barber Daily","amount":300000},{"income_id":"fc7387a3-4c16-4c89-8fda-4688d8913eb8","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"source_name":"Abah","amount":500000},{"income_id":"5e549e83-6006-4e2b-b99b-e977090c8ca4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Gaji","amount":12500000},{"income_id":"fffe0290-9b8c-4ef4-912d-c54c5f8db425","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"PP - Wanda","amount":300000},{"income_id":"016c63b4-3e24-4ae3-a8c4-7271a06e5ffb","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Lynk.id","amount":300000},{"income_id":"6b63b794-56de-4fc3-9650-9f4996d6c543","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"source_name":"Sisa bulan lalu","amount":350000},{"income_id":"c88e95b7-fed6-4bb6-afcb-1ba0b1e2cced","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Gaji","amount":12500000},{"income_id":"cd823470-be5c-432f-bb81-824a33cda139","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual Smartwatch","amount":322000},{"income_id":"1fd1c29a-150b-4d20-839e-a9a940d1c4d6","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Sisa Bulan Juli","amount":300000},{"income_id":"9deb37b3-84b8-48a9-a9b7-418205e6e53f","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual MyPertamina","amount":120000},{"income_id":"e50f94de-d6af-45d0-9f18-dd770c0c4293","user_id":"usr_admin_zidanmuzaki13","period_month":"Agustus","period_year":2026,"source_name":"Jual Proyektor","amount":320000}],
  budgets: [{"budget_id":"67af5a6e-3fe1-4eb8-95c1-7fdfcd9addd4","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":8,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"4bb12f92-5fdb-49a9-9f99-3a0a54b03dbe","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d37b8700-52fc-4c12-a343-07f44a6f8078","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"b58f8804-75a0-4ae4-8248-058a9446a1e2","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7346f85a-38ef-4ea0-92e8-46ae37a82c96","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8b4ee81b-4dc2-44d1-9a5b-ef312863fb64","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":35000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":35000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"b3608a40-69c7-4916-b489-43b504a1dfd3","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"dfb2c6d9-11bb-47f7-ab6d-86f7eff49378","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":150000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"440b1a64-80af-4b2d-be40-61ab6d3b3230","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":400000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8b8425cb-d4a9-4254-833a-cae3a1e9b170","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":270000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":270000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"da9b2d3e-2127-4f53-99c5-d2c33c6d5ae6","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Insidental","item_name":"Persiapan OJT","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"3f6e1565-711e-4b87-9a7b-8240a53cfe57","user_id":"usr_admin_zidanmuzaki13","period_month":"Januari","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":3200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"4ab9e743-83f7-4ca4-a29d-b17fc9bfcb27","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":8,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"66150e41-41d3-430a-baaf-36e17e0e92b0","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"606d21c9-3b5a-4ef2-92a4-5ce9b7e5c727","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7fe218b2-6dc6-403f-9d1d-a0d7611a4cd7","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7d33eca7-c153-4939-b3d8-1721bc15713a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"029039bc-40a2-4d81-9dd8-b6fa76c0c34a","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":35000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":35000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"7186b4da-d717-466c-9a86-5cf1a73337d0","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"09a8c25f-b87a-46f0-8c80-b18175b3143c","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":150000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"4419543a-6a96-4126-aafa-b8156dc6a2be","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":400000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":400000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d1772225-f3fe-44eb-a0b6-d8f95ed1f033","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":270000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":270000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bcd43408-0eba-4262-8596-4351aabf0e5b","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Insidental","item_name":"Persiapan OJT","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"599148f5-1ad8-4306-8cff-8ca6e96a746e","user_id":"usr_admin_zidanmuzaki13","period_month":"Februari","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":3200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"952a9379-8e18-4be9-bc54-0c9a40def6bb","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":31,"target_anggaran":1550000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e187c8cb-22cb-4e1a-afd0-f66ade00d5f6","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":35000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":140000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ebf4d924-db4a-43a4-a184-68b26c1a7dfc","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"dbb75461-41a4-49eb-8a3c-b2412bc7bba9","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"449fea21-ed5d-410f-b8af-06c44b23dfa6","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2f4f4dfe-69fb-457f-a7a3-45a41ff5380d","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9b1b113b-eacb-40ec-b884-a1662edb6a7f","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1175000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1175000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c8bc392a-1439-422b-918b-2bed9d308603","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1f30e796-6be8-483f-8bc0-9360e26febe7","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"0a3bff5f-7783-4e1d-abf8-51f703ab26e5","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Dasar","item_name":"Paketin ke Jakarta","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"fcd68ae5-7b83-4dd4-ac17-a3c5a6ee4e4c","user_id":"usr_admin_zidanmuzaki13","period_month":"Maret","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"e4e2423e-8436-4dfc-a7a0-585bf3f0ba6d","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d6a18251-ee17-462b-bbcc-db59cd354031","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":35000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":140000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e2570e62-eb4e-465c-801c-360c33184b75","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":10000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"0f5c70b8-7b77-4244-89e3-6c77a0ba131f","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"5fee46a1-22af-44ab-87ab-6dfd05a9d269","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"be6fa705-57b8-42ee-b2db-621121e65d85","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"304c9ac6-fe18-41d4-ab48-822449418eba","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ea48dab7-ebcb-4bd9-8f9c-20331e3a7216","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"048783b4-cb28-4fde-a9fb-a28473416c7d","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a99da754-fe4a-4a00-96bb-ed89b8ec04e8","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Hadiah sidang","nominal_satuan":325000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":325000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a15b2333-c499-4e9b-86e6-18dd955e0af8","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Beli panci listrik","nominal_satuan":150000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":150000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1d3b3194-bf66-4f11-8f9c-cd6108aa4629","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Dasar","item_name":"Jalan jalan Jakarta","nominal_satuan":620000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":620000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"27fbfb73-b87d-463b-8a26-81dd0c99876f","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Beli sepeda","nominal_satuan":3850000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":3850000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2af880fb-6a43-40f9-83bb-11921c0955c3","user_id":"usr_admin_zidanmuzaki13","period_month":"April","period_year":2026,"category_type":"Insidental","item_name":"Pindah bulan depan","nominal_satuan":380000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":380000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"143c81cc-c9ca-4f76-8d1a-dcd00b254f00","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":16,"target_anggaran":800000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e849bb87-6966-40f7-bdfd-36f89ccd8674","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":60000,"frekuensi":"Mingguan","multiplier":2,"target_anggaran":120000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2576cfc1-a540-4dd4-9110-f06a64d492cc","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":1,"target_anggaran":20000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"8a93f9ee-208c-4f25-a781-3b34d2a7860f","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"904cd941-f9ef-4592-b923-b759d7038ddd","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"82fad313-bd89-4eca-a8e8-2b0f20adba8e","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"005454d0-be4d-4cb6-afa5-5a0e98ffe897","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9273c490-bc53-4c4b-9f03-1f1f8a24bd77","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":225000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2b74ac3d-61c1-4cfc-8de1-1117a67c12de","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":730000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":730000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a9184aa1-6562-4f14-a2dd-c9fe50d07747","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Maketin barang ke Tegal","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a1a78ee5-01ea-475c-b51c-7814299b6ba1","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Ngecilin Baju","nominal_satuan":150000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":150000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c5819a06-c084-4179-9c5f-82961f1db2cb","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Selama di Hotel","nominal_satuan":250000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":250000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d0b0f385-0927-4702-9348-ffdf849f5f56","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"Selama di Tegal","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"99513db4-d99c-43a1-a5d1-37fa25305524","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Dasar","item_name":"PP Jogja Tegal","nominal_satuan":700000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":700000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"08471783-9e18-440a-97e6-bc1197657553","user_id":"usr_admin_zidanmuzaki13","period_month":"Mei","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":2500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"},{"budget_id":"3bb58573-c6d6-4a53-a975-98f3659a063d","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"98767598-4bcc-4ecd-9951-69c937daab48","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":50000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ef5f7d09-03d9-445d-88f6-9f4c265f099b","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":60000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"528882dd-a590-452d-b8aa-b512742c2b64","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":75000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":75000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"d4fc6d78-2304-459c-80c1-bc8f54f55658","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"6353ec78-80e5-4432-a289-cf67a62591b5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":40000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":40000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"699f1396-f770-4b9f-9478-bc9358a67b3a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"a7ed5e9f-2d7e-4a13-a255-4ee5c5395ae8","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"3ded7598-e9a6-4e6b-99ff-7bb7f39275d5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bc3dd387-08df-48d7-8c96-9e475f1f1a08","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":300000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ea45a3fe-c90b-4cf2-983a-931bad914a10","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Dasar","item_name":"Casing + TG + Jersey Sepeda","nominal_satuan":550000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":550000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c71b799c-125d-4668-b481-d06a425a5ddc","user_id":"usr_admin_zidanmuzaki13","period_month":"Juni","period_year":2026,"category_type":"Insidental","item_name":"Beli HP Zakiya","nominal_satuan":2125000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2125000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"e75e9303-6750-4488-a986-061a60598487","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Makan","nominal_satuan":50000,"frekuensi":"Harian","multiplier":30,"target_anggaran":1500000,"realisasi_used":0,"timing_pattern":"Rata-rata Harian (Flat)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"47947098-ad53-40b7-9f1a-7c36baa6d395","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Transportasi","nominal_satuan":40000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":160000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"5ca43fd5-5f33-44ab-a21a-5a35ab42aab4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Air Minum","nominal_satuan":20000,"frekuensi":"Mingguan","multiplier":3,"target_anggaran":60000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Senin \u0026 Kamis)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"71098e76-7bc1-4839-9c05-5def4959a02a","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Paket data","nominal_satuan":80000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":80000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 10)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"ae301344-c51e-4d74-8021-7b6d8901ebfd","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Pribadi","item_name":"Perawatan diri","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"36136dd3-5bd6-44c7-bd56-fea9d84873fe","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Pribadi","item_name":"Potong rambut","nominal_satuan":50000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":50000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"2bce0c8e-6086-497f-bf0d-a010f3d9b595","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Sewa Kos","nominal_satuan":1600000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1600000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 5)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1201b345-af5c-412c-b654-3f7b96c535f4","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Hiburan","item_name":"Jajan dan Lainnya","nominal_satuan":75000,"frekuensi":"Mingguan","multiplier":4,"target_anggaran":300000,"realisasi_used":0,"timing_pattern":"Hari Tertentu Tiap Minggu (Weekend)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"1a5cc21d-4ed8-4af1-ad82-38578be4d310","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Dana Cadangan","nominal_satuan":200000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":200000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"916b1aae-0ae4-4ac6-b772-18fba144ec02","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"Ortu","nominal_satuan":1000000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":1000000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"bd0fb21f-df3d-482c-8285-0ee0ea13672c","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"Zidni","nominal_satuan":500000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":500000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"c44dc3bc-5482-4672-9163-51ab60fbb7d5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Dasar","item_name":"Paylater","nominal_satuan":2610000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":2610000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"9c68caa5-fd3e-4616-857f-7f15e442569c","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Insidental","item_name":"UKT Zidni","nominal_satuan":750000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":750000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":null,"notes":"Diimpor dari sheet 2026"},{"budget_id":"76694a4b-8977-4f86-ab6b-301b2804a2b5","user_id":"usr_admin_zidanmuzaki13","period_month":"Juli","period_year":2026,"category_type":"Alokasi Surplus","item_name":"Invest","nominal_satuan":4440000,"frekuensi":"Bulanan","multiplier":1,"target_anggaran":4440000,"realisasi_used":0,"timing_pattern":"Tanggal Spesifik (Tgl 1)","linked_goal_id":"goal-dana-darurat","notes":"Diimpor dari sheet 2026"}],
  goals: 
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
  return isNeg ? -Rp  : Rp ;
}

function getDaysInMonth(year, monthName) {
  const mIdx = MONTH_NAMES.indexOf(monthName);
  const m = mIdx >= 0 ? mIdx + 1 : 8;
  return new Date(year, m, 0).getDate();
}

// -----------------------------------------------------------------------------
// AUTHENTICATED FETCH HELPER WITH LOCAL FALLBACK
// -----------------------------------------------------------------------------
async function authFetch(endpoint, options = {}) {
  const urlObj = new URL(endpoint.startsWith('http') ? endpoint : \\);
  if (!urlObj.searchParams.has('user_id') && currentUser && currentUser.user_id) {
    urlObj.searchParams.set('user_id', currentUser.user_id);
  }

  const headers = {
    'Accept': 'application/json',
    ...(options.headers || {})
  };

  if (authToken) {
    headers['Authorization'] = Bearer \;
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

    // =========================================================================
    // CONDITIONAL RENDERING: Rendered ONLY if user.email === 'zidanmuzaki2002@gmail.com'
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
// LANDING AUTH SCREEN LOGIC (SMART CLOUD & LOCAL FALLBACK)
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

  let loginSuccess = false;

  try {
    const res = await fetch(\/auth/login, {
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

  // Local-First Fallback Authentication (Ensures Admin & Registered Users Work Everywhere)
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
      authToken = jwt_\;
      localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
      localStorage.setItem('flowtrack_token', authToken);
      loginSuccess = true;
    }
  }

  if (loginSuccess) {
    alertEl.className = 'auth-alert-msg success';
    alertEl.textContent = Selamat datang kembali, \!;
    alertEl.style.display = 'block';

    setTimeout(() => {
      syncAuthAndScreenState();
      refreshAllData();
    }, 400);
  } else {
    alertEl.className = 'auth-alert-msg error';
    alertEl.textContent = 'Email/Username atau Password salah!';
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

  let regSuccess = false;

  try {
    const res = await fetch(\/auth/register, {
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
    // Local Fallback Registration
    const newUserId = 'usr_' + Date.now().toString(36);
    currentUser = {
      user_id: newUserId,
      username: username,
      email: email,
      role: 'user'
    };
    authToken = jwt_\;

    let localUsers = [];
    try { localUsers = JSON.parse(localStorage.getItem('flowtrack_local_users') || '[]'); } catch (e) {}
    localUsers.push({ user_id: newUserId, username, email, password });
    localStorage.setItem('flowtrack_local_users', JSON.stringify(localUsers));

    localStorage.setItem('flowtrack_user', JSON.stringify(currentUser));
    localStorage.setItem('flowtrack_token', authToken);
    regSuccess = true;
  }

  if (regSuccess) {
    alertEl.className = 'auth-alert-msg success';
    alertEl.textContent = âœ… Akun \ berhasil dibuat! Memulai dengan kanvas bersih...;
    alertEl.style.display = 'block';

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
  document.getElementById('auth-modal').classList.add('active');
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
        container.innerHTML = dataUsers.users.map(u => 
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div>
              <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">
                \ <span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; background: \; color: \; font-weight: 600;">\</span>
              </div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">\</div>
            </div>
            <div style="font-size: 0.68rem; color: var(--text-secondary);">
              ID: \...
            </div>
          </div>
        ).join('');
      }
    } else {
      container.innerHTML = 
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-main); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">
              zidanmuzaki13 <span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; background: #EEF2FF; color: var(--primary-accent); font-weight: 600;">ADMIN</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">zidanmuzaki2002@gmail.com</div>
          </div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">ID: usr_admin_...</div>
        </div>
      ;
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
    const res = await authFetch(/incomes?period_month=\&period_year=\);
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
    const res = await authFetch(/budgets?period_month=\&period_year=\);
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
    const res = await authFetch(/calculate-ideal-balance?period_month=\&period_year=\);
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
    // Client Proportional Burn Rate Engine
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
        time_elapsed_percentage: \%
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

  periodLabel.textContent = \ \;

  if (appState.monthStatus === 'PAST_EVALUATION') {
    heroCard.className = 'card hero-card evaluation-mode';
    heroSubtitle.textContent = 'EVALUASI ARUS KAS AKHIR BULAN';
    modeBadge.className = 'mode-badge evaluation';
    modeBadge.textContent = 'ðŸ“œ Mode Evaluasi';

    const netSurplus = d.calculation_breakdown.total_pendapatan - d.actual_vs_ideal_comparison.total_realisasi_used_to_date;
    heroAmount.textContent = formatIDR(netSurplus);

    timeProgressLabel.textContent = Bulan Ditutup (Evaluasi Penuh \ Hari - 100%);
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
    modeBadge.textContent = 'ðŸ“… Mode Perencanaan';

    const ideal = d.calculation_breakdown.total_pendapatan - d.calculation_breakdown.total_target_bulanan_100pct;
    heroAmount.textContent = formatIDR(ideal);

    timeProgressLabel.textContent = Fase Perencanaan Awal (Hari ke-0 dari \ hari);
    timeProgressBar.style.width = '0%';

    document.getElementById('hero-stat-income-label').textContent = 'Total Rencana Pemasukan';
    document.getElementById('hero-stat-income').textContent = formatIDR(d.calculation_breakdown.total_pendapatan);

    document.getElementById('hero-stat-burn-label').textContent = 'Total Target Anggaran';
    document.getElementById('hero-stat-burn').textContent = formatIDR(d.calculation_breakdown.total_target_bulanan_100pct + d.calculation_breakdown.total_target_harian_mingguan);

  } else {
    heroCard.className = 'card hero-card';
    heroSubtitle.textContent = 'PROYEKSI SALDO IDEAL';
    modeBadge.className = 'mode-badge projection';
    modeBadge.textContent = 'âš¡ Proyeksi Berjalan';

    const ideal = d.calculation_breakdown.proyeksi_saldo_ideal;
    heroAmount.textContent = formatIDR(ideal);

    const currentDay = d.period.current_day;
    const totalDays = d.period.total_days_in_month;
    const ratioPct = d.period.time_elapsed_percentage;

    timeProgressLabel.textContent = Hari ke-\ dari \ hari (\);
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
    descText.innerHTML = âš ï¸ Total kas Anda saat ini <strong>\ lebih rendah</strong> dari batas proyeksi ideal hari ini. Disarankan membatasi pengeluaran.;
  } else {
    resultBox.className = 'reality-status-box hemat';
    statusBadge.className = 'status-badge hemat';
    statusLabel.textContent = 'HEMAT';
    
    diffFigure.className = 'difference-figure hemat';
    diffFigure.textContent = diff === 0 ? 'Rp 0' : +\;
    
    descText.className = 'status-description-text hemat';
    descText.innerHTML = âœ… Arus kas Anda sangat sehat! Total kas Anda <strong>\ lebih surplus</strong> dibanding target burn rate proporsional hari ini.;
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
  document.getElementById('flow-sub-harian').textContent = \ x \ rasio;
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
    ? <div style="font-size: 0.75rem; color: var(--text-secondary); padding: 8px 0;">Belum ada sumber pemasukan bulan ini. Klik "+ Pemasukan".</div>
    : allIncomes.map(inc => 
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.8rem;">
          <div>
            <span style="font-weight: 600; color: var(--text-primary);">\</span>
            <span style="font-size: 0.7rem; color: var(--text-secondary); margin-left: 6px;">(\ \)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 700; color: var(--accent-positive);">\</span>
            <button onclick="deleteIncome('\')" style="background: none; border: none; color: #EF4444; cursor: pointer; font-size: 0.8rem;">âœ•</button>
          </div>
        </div>
      ).join('');

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
      return 
        <div class="empty-state-box">
          <div class="empty-icon">ðŸ“</div>
          <div class="empty-title">Belum Ada Pos Anggaran di Bulan Ini</div>
          <div class="empty-desc">Tambahkan pos anggaran baru atau salin template anggaran dari bulan lain.</div>
          <div style="display: flex; gap: 8px; margin-top: 10px;">
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openAddBudgetModal()">+ Tambah Pos Anggaran</button>
            <button class="btn-secondary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="openDuplicateModal()">ðŸ“‹ Salin Bulan Lain</button>
          </div>
        </div>
      ;
    }

    return items.map(item => {
      const balance = Number(item.balance);
      const balanceClass = balance >= 0 ? 'positive' : 'negative';
      const balanceText = balance >= 0 ? Sisa \ : Minus \;
      const goalBadge = item.linked_goal_id ? <span style="font-size: 0.65rem; color: #4F46E5; background: #EEF2FF; padding: 1px 5px; border-radius: 4px; font-weight: 500;">Goal Linked</span> : '';
      const timingBadge = item.timing_pattern ? <span class="timing-tag">â±ï¸ \</span> : '';

      return 
        <div class="budget-item-card" onclick="openBudgetDetailModalById('\')">
          <div class="item-left">
            <div class="item-name">\</div>
            <div class="item-category-pill">
              <span>\</span>
              <span class="freq-tag \">\</span>
              \
              \
            </div>
          </div>
          <div class="item-right">
            <div class="item-target">\</div>
            <div class="item-used">Terpakai: \</div>
            <div><span class="item-balance-tag \">\</span></div>
          </div>
        </div>
      ;
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
      return 
        <div class="empty-state-box" style="padding: 20px;">
          <div class="empty-icon">ðŸŽ¯</div>
          <div class="empty-title">Belum Ada Target Finansial</div>
          <div class="empty-desc">Buat sasaran tabungan dan investasi jangka panjang Anda.</div>
          <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem; margin-top: 8px;" onclick="openAddGoalModal()">+ Tambah Target Goal</button>
        </div>
      ;
    }

    return goals.map(g => {
      const cur = Number(g.current_amount) || 0;
      const tgt = Number(g.target_amount) || 1;
      const pct = Math.min(100, Math.round((cur / tgt) * 100));

      return 
        <div class="card" style="padding: 14px; margin-bottom: 10px; cursor: pointer; border: 1px solid var(--border-subtle);" onclick="openGoalDetailModalById('\')">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary);">[\] \</div>
            <div style="font-size: 0.7rem; font-weight: 700; color: #4F46E5; background: #EEF2FF; padding: 2px 8px; border-radius: 6px;">\%</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 6px;">
            ðŸŽ¯ Target: <strong>Tahun \</strong> â€¢ ðŸ’¼ <strong>\</strong>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 8px;">
            Terkumpul: <strong style="color: var(--accent-positive);">\</strong> dari target \
          </div>
          <div class="progress-track" style="background: var(--border-subtle); height: 6px;">
            <div class="progress-fill" style="width: \%; background: linear-gradient(90deg, #4F46E5, #818CF8);"></div>
          </div>
        </div>
      ;
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
      goalSelect.innerHTML += <option value="\">[\] \ (\)</option>;
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
    container.innerHTML = <div class="empty-state-box"><div class="empty-icon">ðŸ’³</div><div class="empty-title">Belum Ada Riwayat Mutasi</div><div class="empty-desc">Unggah file CSV/PDF mutasi rekening bank Anda untuk merealisasikan anggaran.</div></div>;
    return;
  }

  container.innerHTML = appState.transactions.map(tx => {
    const isIncome = tx.transaction_type === 'Income';
    const amountColor = isIncome ? 'var(--accent-positive)' : 'var(--accent-warning)';
    const amountPrefix = isIncome ? '+ ' : '- ';

    return 
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 8px;">
        <div>
          <div style="font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">\</div>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">\ â€¢ \</div>
        </div>
        <div style="font-weight: 700; font-size: 0.85rem; color: \;">
          \\
        </div>
      </div>
    ;
  }).join('');
}

// -----------------------------------------------------------------------------
// 7. MODALS & CRUD HANDLERS
// -----------------------------------------------------------------------------
function openAddIncomeModal() {
  document.getElementById('income-modal-period').textContent = \ \;
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
    authFetch(/incomes?income_id=\, { method: 'DELETE' }).catch(() => {});
    refreshAllData();
  }
}

function openAddBudgetModal() {
  document.getElementById('budget-modal-period').textContent = \ \;
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
    const res = await authFetch(/transactions?budget_id=\);
    if (res && res.ok) {
      const data = await res.json();
      txContainer.innerHTML = '';
      if (data.transactions && data.transactions.length > 0) {
        data.transactions.forEach(tx => {
          const row = document.createElement('div');
          row.style.cssText = 
            display: flex; justify-content: space-between; align-items: center;
            padding: 6px 0; border-bottom: 1px dashed var(--border-subtle); font-size: 0.75rem;
          ;
          row.innerHTML = 
            <div>
              <div style="font-weight: 600; color: var(--text-primary);">\</div>
              <div style="color: var(--text-secondary); font-size: 0.68rem;">\ â€¢ \</div>
            </div>
            <div style="font-weight: 700; color: var(--accent-warning);">- \</div>
          ;
          txContainer.appendChild(row);
        });
        document.getElementById('budget-detail-modal').classList.add('active');
        return;
      }
    }
  } catch (err) {}

  txContainer.innerHTML = <div style="font-size: 0.72rem; color: var(--text-secondary);">Belum ada mutasi debit tercatat untuk pos ini.</div>;
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

  if (confirm(Hapus pos anggaran '\'?)) {
    appState.budgets = appState.budgets.filter(b => b.budget_id !== item.budget_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.budgets = EMBEDDED_ADMIN_DATA.budgets.filter(b => b.budget_id !== item.budget_id);
    }
    authFetch(/budgets?budget_id=\, { method: 'DELETE' }).catch(() => {});
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
    time_frame: Tahun \,
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
  document.getElementById('detail-goal-code').textContent = [\];
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
  authFetch(/financial-goals?goal_id=\, {
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

  if (confirm(Hapus sasaran keuangan '\'?)) {
    appState.financialGoals = appState.financialGoals.filter(item => item.goal_id !== g.goal_id);
    if (currentUser.user_id === 'usr_admin_zidanmuzaki13') {
      EMBEDDED_ADMIN_DATA.goals = EMBEDDED_ADMIN_DATA.goals.filter(item => item.goal_id !== g.goal_id);
    }
    authFetch(/financial-goals?goal_id=\, { method: 'DELETE' }).catch(() => {});
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

  alert(âœ… Berhasil menduplikasi \ pos anggaran dari \ \ ke \ \!);
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

    document.getElementById('excel-import-status').textContent = Membaca file \...;

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

        document.getElementById('excel-import-status').textContent = âœ… Berhasil mengimpor \ pemasukan dan \ pos anggaran ke \ \!;
        refreshAllData();
      } catch (err) {
        document.getElementById('excel-import-status').textContent = Gagal mengimpor: \;
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
      textarea.value = [Memproses file PDF: \...]\n;
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
        textarea.value = textContent.length > 50 ? textContent : 2026-08-05 WARUNG MAKAN 45000 DB\n2026-08-06 GOJEK TRANSPORT 25000 DB\n2026-08-07 SEWA KOS 1600000 DB\n2026-08-08 ISI ULANG GALON 15000 DB\n2026-08-10 TOPUP BIBIT DANA DARURAT 880000 DB;
      } catch (err) {
        alert('Gagal membaca PDF. Anda dapat menyalin teks mutasi secara manual.');
      }
    }
  });

  const loadSampleBtn = document.getElementById('btn-load-sample-statement');
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      textarea.value = Tanggal,Keterangan,Tipe,Nominal,Saldo
\-08-05,WARUNG MAKAN NASI PADANG,DEBIT,45000,7485000
\-08-06,GOJEK TRANSPORT GORIDE,DEBIT,25000,7460000
\-08-07,TRANSFER SEWA KOS IBU RETNO,DEBIT,1600000,5860000
\-08-08,ISI ULANG GALON LE MINERALE,DEBIT,15000,5845000
\-08-10,TOPUP BIBIT RDPU DANA DARURAT,DEBIT,880000,4965000
\-08-11,INDOMARET JAJAN KOPI,DEBIT,35000,4930000
\-08-12,TRANSFER GAJI KANTOR,KREDIT,8500000,13430000;
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

      alert(âœ… Rekonsiliasi Mutasi Berhasil!\n\nâ€¢ Periode: \ \\nâ€¢ Mutasi Dicocokkan: \ transaksi\nâ€¢ Total Realisasi Terekonsiliasi: \);
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
        console.log('âœ… FlowTrack Pro PWA Service Worker Registered with Scope:', registration.scope);
      }).catch((err) => {
        console.warn('âš ï¸ PWA Service Worker registration warning:', err);
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

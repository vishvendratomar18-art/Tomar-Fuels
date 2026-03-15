<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta name="theme-color" content="#0f0f0f"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="Tomar Fuels"/>
<meta name="description" content="Tomar Fuels - Fuel Pump Management System"/>
<title>Tomar Fuels</title>
<link rel="apple-touch-icon" href="data:image/png;base64,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"/>
<link rel="icon" type="image/png" href="data:image/png;base64,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"/>
<script>(function(){var m={"name": "Tomar Fuels", "short_name": "Tomar Fuels", "description": "Tomar Fuels Pump Management", "start_url": ".", "display": "standalone", "background_color": "#0f0f0f", "theme_color": "#0f0f0f", "orientation": "portrait-primary", "icons": [{"src": "data:image/png;base64,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", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"}, {"src": "data:image/png;base64,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", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]};var b=new Blob([JSON.stringify(m)],{type:'application/manifest+json'});var l=document.createElement('link');l.rel='manifest';l.href=URL.createObjectURL(b);document.head.appendChild(l);})();</script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;600&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{
–ink:#0f0f0f;–ink2:#2a2a2a;–ink3:#5a5a6a;
–bg:#f5f3ef;–card:#ffffff;–border:#e2dfd8;
–petrol:#0a6e4e;–petrol-light:#e8f5f0;–petrol-dark:#084f38;
–diesel:#1a3a8f;–diesel-light:#e8edf8;–diesel-dark:#122970;
–warn:#c0392b;–warn-light:#fdf0ee;
–gold:#c9981a;–gold-light:#fdf6e3;
–accent:#e85d26;–accent2:#d44e1f;
–r:12px;–r-sm:8px;–r-lg:18px;
–shadow:0 2px 12px rgba(0,0,0,.07);
–nav-h:64px;
–safe-bottom: env(safe-area-inset-bottom, 0px);
}
html,body{height:100%;overflow:hidden}
body{font-family:‘DM Sans’,sans-serif;background:var(–bg);color:var(–ink);font-size:14px;line-height:1.5;overscroll-behavior:none}
h1,h2,h3,h4{font-family:‘Bebas Neue’,sans-serif;letter-spacing:.04em}
.mono{font-family:‘JetBrains Mono’,monospace}

/* App shell */
#app{height:100dvh;display:flex;flex-direction:column;overflow:hidden}
.screen{display:none;flex:1;flex-direction:column;overflow:hidden;position:relative}
.screen.active{display:flex}

/* Top bar */
.topbar{background:var(–ink);color:#fff;padding:12px 16px;padding-top:calc(12px + env(safe-area-inset-top,0px));display:flex;align-items:center;justify-content:space-between;flex-shrink:0;z-index:10}
.topbar h1{font-size:22px;color:#fff;line-height:1}
.topbar-sub{font-size:10px;color:rgba(255,255,255,.5);letter-spacing:.08em;text-transform:uppercase;margin-top:1px}
.topbar-right{display:flex;align-items:center;gap:8px}
.topbar-badge{font-size:11px;background:rgba(255,255,255,.12);padding:4px 10px;border-radius:20px;color:rgba(255,255,255,.8)}

/* Bottom nav */
.bottom-nav{background:var(–ink);display:flex;padding-bottom:var(–safe-bottom);flex-shrink:0;border-top:1px solid rgba(255,255,255,.1)}
.nav-item{flex:1;display:flex;flex-direction:column;align-items:center;padding:10px 4px;cursor:pointer;color:rgba(255,255,255,.4);transition:color .15s;min-width:0}
.nav-item.active{color:var(–accent)}
.nav-icon{font-size:20px;line-height:1}
.nav-label{font-size:9px;margin-top:3px;letter-spacing:.05em;text-transform:uppercase;font-weight:600;white-space:nowrap}

/* Scroll container */
.scroll{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
.page{padding:16px;padding-bottom:20px}

/* Cards */
.card{background:var(–card);border:1px solid var(–border);border-radius:var(–r);padding:16px;margin-bottom:12px;box-shadow:var(–shadow)}
.card-title{font-size:15px;font-family:‘Bebas Neue’,sans-serif;letter-spacing:.06em;color:var(–ink2);margin-bottom:14px;display:flex;align-items:center;gap:8px}
.tag{font-size:10px;font-family:‘DM Sans’,sans-serif;padding:2px 7px;border-radius:20px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}
.tag-p{background:var(–petrol-light);color:var(–petrol-dark)}
.tag-d{background:var(–diesel-light);color:var(–diesel-dark)}
.tag-f{background:var(–gold-light);color:var(–gold)}
.tag-w{background:var(–warn-light);color:var(–warn)}

/* Stats */
.stat-row{display:grid;gap:10px;margin-bottom:12px}
.stat-row-2{grid-template-columns:1fr 1fr}
.stat-row-3{grid-template-columns:1fr 1fr 1fr}
.stat-card{background:var(–card);border:1px solid var(–border);border-radius:var(–r);padding:12px 14px;box-shadow:var(–shadow)}
.stat-label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(–ink3);font-weight:600;margin-bottom:2px}
.stat-value{font-size:22px;font-family:‘Bebas Neue’,sans-serif;color:var(–ink);line-height:1.1}
.stat-value.sm{font-size:16px}
.stat-sub{font-size:10px;color:var(–ink3);margin-top:1px}
.stat-card.p{border-left:3px solid var(–petrol)}
.stat-card.d{border-left:3px solid var(–diesel)}
.stat-card.f{border-left:3px solid var(–gold)}
.stat-card.w{border-left:3px solid var(–warn)}

/* Pump cards */
.pump-card{border-radius:var(–r-lg);padding:16px;color:#fff;margin-bottom:10px}
.pump-card.jawar{background:linear-gradient(135deg,#0a6e4e,#0d8f64)}
.pump-card.mundi{background:linear-gradient(135deg,#1a3a8f,#2352c7)}
.pump-card.mohana{background:linear-gradient(135deg,#8f5e0a,#c9981a)}
.pump-card-name{font-size:22px;font-family:‘Bebas Neue’,sans-serif;letter-spacing:.06em}
.pump-card-sub{font-size:10px;opacity:.7;margin-top:1px}
.pump-card-stats{margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pump-card-stat{background:rgba(255,255,255,.15);border-radius:8px;padding:8px 10px}
.pcs-label{font-size:9px;opacity:.7;text-transform:uppercase;letter-spacing:.07em}
.pcs-value{font-family:‘Bebas Neue’,sans-serif;font-size:17px;margin-top:1px}

/* Forms */
.form-group{margin-bottom:12px}
.form-label{display:block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(–ink3);margin-bottom:5px}
.form-input{width:100%;padding:10px 12px;border:1.5px solid var(–border);border-radius:var(–r-sm);font-size:14px;background:#fff;color:var(–ink);outline:none;-webkit-appearance:none;appearance:none;font-family:‘DM Sans’,sans-serif}
.form-input:focus{border-color:var(–accent);box-shadow:0 0 0 3px rgba(232,93,38,.12)}
.form-input.mono{font-family:‘JetBrains Mono’,monospace;font-size:13px}
.form-hint{font-size:11px;color:var(–ink3);margin-top:3px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.calc-val{background:var(–bg);border:1px solid var(–border);border-radius:var(–r-sm);padding:8px 12px;font-family:‘JetBrains Mono’,monospace;font-size:12px;color:var(–ink2)}

/* Machine block */
.machine-block{background:var(–bg);border:1px solid var(–border);border-radius:var(–r);padding:12px;margin-bottom:10px}
.machine-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.machine-hd-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(–ink3)}
.machine-sales{font-family:‘Bebas Neue’,sans-serif;font-size:20px;color:var(–accent)}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:11px 20px;border-radius:var(–r-sm);font-size:14px;font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:‘DM Sans’,sans-serif;letter-spacing:.02em;width:100%}
.btn-primary{background:var(–accent);color:#fff}
.btn-primary:active{background:var(–accent2)}
.btn-secondary{background:var(–bg);color:var(–ink2);border:1.5px solid var(–border)}
.btn-danger{background:var(–warn-light);color:var(–warn);border:1.5px solid #f1c4be}
.btn-sm{padding:8px 14px;font-size:12px;width:auto}
.btn-row{display:flex;gap:8px;margin-top:16px}
.btn-row .btn{flex:1}
.icon-btn{padding:8px;border-radius:var(–r-sm);background:none;border:1.5px solid var(–border);cursor:pointer;color:var(–ink3);font-size:15px;display:inline-flex;align-items:center;justify-content:center}

/* Tabs */
.tabs{display:flex;overflow-x:auto;border-bottom:2px solid var(–border);margin-bottom:16px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:9px 14px;font-size:12px;font-weight:600;color:var(–ink3);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;white-space:nowrap;transition:all .15s;flex-shrink:0}
.tab.active{color:var(–accent);border-bottom-color:var(–accent)}

/* Table */
.tbl-wrap{overflow-x:auto;margin:0 -16px;padding:0 16px}
table{width:100%;border-collapse:collapse;font-size:12px;min-width:500px}
th{text-align:left;padding:8px 10px;font-family:‘Bebas Neue’,sans-serif;font-size:12px;letter-spacing:.06em;color:var(–ink3);border-bottom:2px solid var(–border);background:var(–bg);white-space:nowrap}
td{padding:8px 10px;border-bottom:1px solid var(–border);vertical-align:middle}
tr:last-child td{border-bottom:none}

/* Alerts */
.alert{padding:10px 12px;border-radius:var(–r-sm);font-size:12px;display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;line-height:1.4}
.alert-w{background:var(–warn-light);color:var(–warn);border:1px solid #f1c4be}
.alert-ok{background:var(–petrol-light);color:var(–petrol-dark);border:1px solid #b8e0d5}
.alert-i{background:var(–diesel-light);color:var(–diesel-dark);border:1px solid #bbc9e8}

/* Login */
.login-wrap{min-height:100dvh;background:var(–ink);display:flex;align-items:center;justify-content:center;padding:20px}
.login-card{background:#fff;border-radius:var(–r-lg);padding:28px 24px;width:100%;max-width:380px}
.login-logo{text-align:center;margin-bottom:24px}
.login-logo h1{font-size:48px;color:var(–ink);line-height:1}
.login-logo .fuel-icon{font-size:36px;display:block;margin-bottom:4px}
.login-logo p{color:var(–ink3);font-size:12px;margin-top:4px;text-transform:uppercase;letter-spacing:.1em}
.err-msg{background:var(–warn-light);color:var(–warn);border:1px solid #f1c4be;border-radius:var(–r-sm);padding:10px 12px;font-size:13px;margin-bottom:14px}
.ok-msg{background:var(–petrol-light);color:var(–petrol-dark);border:1px solid #b8e0d5;border-radius:var(–r-sm);padding:10px 12px;font-size:13px;margin-bottom:14px}

/* OTP */
.otp-display{background:var(–ink);color:#fff;border-radius:var(–r);padding:16px;text-align:center;margin-bottom:16px}
.otp-code{font-family:‘JetBrains Mono’,monospace;font-size:36px;letter-spacing:.2em;color:var(–accent);display:block}
.otp-msg{font-size:11px;color:rgba(255,255,255,.5);margin-top:6px}

/* Badge */
.badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.badge-owner{background:#fdf0ee;color:var(–accent)}
.badge-staff{background:var(–petrol-light);color:var(–petrol-dark)}

/* Dot */
.pump-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0}
.pump-dot.jawar{background:#0a6e4e}
.pump-dot.mundi{background:#1a3a8f}
.pump-dot.mohana{background:#c9981a}

/* Variance */
.var-hi{color:var(–warn);font-weight:700;font-family:‘JetBrains Mono’,monospace;font-size:11px}
.var-ok{color:var(–petrol);font-family:‘JetBrains Mono’,monospace;font-size:11px}
.var-lo{color:var(–ink3);font-family:‘JetBrains Mono’,monospace;font-size:11px}

/* Modal */
.modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:200;display:flex;align-items:flex-end;justify-content:center}
.modal{background:#fff;border-radius:var(–r-lg) var(–r-lg) 0 0;width:100%;max-height:85dvh;overflow-y:auto;padding:0;padding-bottom:var(–safe-bottom)}
.modal-handle{width:36px;height:4px;background:var(–border);border-radius:2px;margin:12px auto 8px}
.modal-hd{padding:12px 20px 14px;border-bottom:1px solid var(–border);display:flex;align-items:center;justify-content:space-between}
.modal-title{font-family:‘Bebas Neue’,sans-serif;font-size:18px;letter-spacing:.04em}
.modal-body{padding:20px}

/* Toast */
#toast-container{position:fixed;bottom:calc(var(–nav-h) + 12px + var(–safe-bottom));left:50%;transform:translateX(-50%);z-index:300;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none;width:calc(100% - 32px);max-width:380px}
.toast{background:var(–ink);color:#fff;padding:11px 16px;border-radius:var(–r);font-size:13px;box-shadow:0 8px 24px rgba(0,0,0,.25);display:flex;align-items:center;gap:8px;animation:toastIn .2s ease;width:100%;text-align:left}
.toast.success{border-left:3px solid #27ae60}
.toast.error{border-left:3px solid var(–warn)}
@keyframes toastIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}

/* Install banner */
.install-banner{background:var(–ink);color:#fff;padding:12px 16px;display:flex;align-items:center;gap:10px;font-size:12px}
.install-banner .i-icon{font-size:22px;flex-shrink:0}
.install-banner .i-text{flex:1;line-height:1.4}
.install-banner .i-btn{background:var(–accent);color:#fff;border:none;padding:6px 12px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:‘DM Sans’,sans-serif}
.install-banner .i-close{background:none;border:none;color:rgba(255,255,255,.5);font-size:18px;cursor:pointer;padding:0 4px;line-height:1}

/* Section title */
.section-title{font-family:‘Bebas Neue’,sans-serif;font-size:16px;letter-spacing:.06em;color:var(–ink2);margin-bottom:10px;display:flex;align-items:center;gap:8px}

/* Summary row in entry */
.summary-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(–border)}
.summary-row:last-child{border-bottom:none}
.summary-label{color:var(–ink3);font-size:13px}
.summary-value{font-family:‘Bebas Neue’,sans-serif;font-size:17px;color:var(–ink)}

/* scrollbar hide */
.scroll::-webkit-scrollbar{display:none}
.scroll{scrollbar-width:none}

/* fab */
.fab{position:fixed;bottom:calc(var(–nav-h) + 16px + var(–safe-bottom));right:16px;width:52px;height:52px;border-radius:50%;background:var(–accent);color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(232,93,38,.4);cursor:pointer;border:none;z-index:50}

/* select */
select.form-input{background-image:url(“data:image/svg+xml,%3Csvg xmlns=‘http://www.w3.org/2000/svg’ viewBox=‘0 0 24 24’%3E%3Cpath fill=’%235a5a6a’ d=‘M7 10l5 5 5-5H7z’/%3E%3C/svg%3E”);background-repeat:no-repeat;background-position:right 8px center;background-size:20px;padding-right:32px}

/* ── DASHBOARD CHARTS ─────────────────────────────────────────── */
.chart-card{background:var(–card);border:1px solid var(–border);border-radius:var(–r);padding:16px;margin-bottom:12px;box-shadow:var(–shadow)}
.chart-title{font-size:13px;font-family:‘Bebas Neue’,sans-serif;letter-spacing:.07em;color:var(–ink2);margin-bottom:4px;display:flex;align-items:center;justify-content:space-between}
.chart-sub{font-size:10px;color:var(–ink3);margin-bottom:12px}
.chart-wrap{width:100%;overflow:hidden}
.chart-wrap::-webkit-scrollbar{display:none}

/* Bar chart */
.bar-chart{display:flex;align-items:flex-end;gap:3px;height:90px;padding-bottom:20px;position:relative;min-width:100%}
.bar-chart-inner{display:flex;align-items:flex-end;gap:2px;width:100%;height:80px}
.bar-col{display:flex;flex-direction:column;align-items:center;flex:1;min-width:0;max-width:30px;gap:1px;cursor:pointer}
.bar-seg{width:100%;border-radius:3px 3px 0 0;transition:opacity .15s;min-height:2px}
.bar-seg.petrol{background:var(–petrol)}
.bar-seg.diesel{background:var(–diesel)}
.bar-seg.revenue{background:var(–gold)}
.bar-seg.cash{background:var(–accent)}
.bar-label{font-size:8px;color:var(–ink3);margin-top:3px;white-space:nowrap;font-family:‘JetBrains Mono’,monospace;text-align:center}
.bar-col.today .bar-label{color:var(–accent);font-weight:700}
.bar-col.today .bar-seg{opacity:1}
.bar-col:not(.today) .bar-seg{opacity:.75}

/* Horizontal bar */
.hbar{background:var(–bg);border-radius:4px;overflow:hidden;height:10px;margin:4px 0}
.hbar-fill{height:100%;border-radius:4px;transition:width .4s ease}

/* KPI row */
.kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
.kpi{background:var(–card);border:1px solid var(–border);border-radius:var(–r);padding:10px 12px;box-shadow:var(–shadow);text-align:center}
.kpi-val{font-family:‘Bebas Neue’,sans-serif;font-size:20px;line-height:1;color:var(–ink)}
.kpi-val.sm{font-size:15px}
.kpi-label{font-size:9px;text-transform:uppercase;letter-spacing:.07em;color:var(–ink3);font-weight:600;margin-top:2px}
.kpi-delta{font-size:10px;margin-top:2px;font-weight:600}
.kpi-delta.up{color:var(–petrol)}
.kpi-delta.dn{color:var(–warn)}

/* Donut chart */
.donut-wrap{display:flex;align-items:center;gap:16px}
.donut-svg{flex-shrink:0}
.donut-legend{flex:1;display:flex;flex-direction:column;gap:6px}
.legend-item{display:flex;align-items:center;gap:6px;font-size:11px}
.legend-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.legend-label{color:var(–ink3);flex:1}
.legend-val{font-family:‘JetBrains Mono’,monospace;font-size:11px;color:var(–ink);font-weight:600}

/* Streak calendar */
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-top:8px}
.cal-cell{aspect-ratio:1;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:600;font-family:‘JetBrains Mono’,monospace}
.cal-cell.has{background:var(–petrol);color:#fff}
.cal-cell.today-cell{outline:2px solid var(–accent);outline-offset:1px}
.cal-cell.empty{background:var(–bg)}
.cal-cell.miss{background:#f0ede8;color:var(–ink3)}
.cal-day-label{font-size:8px;color:var(–ink3);text-align:center;font-weight:700;letter-spacing:.05em}

/* Trend line (sparkline) */
.sparkline{display:flex;align-items:flex-end;gap:2px;height:36px}
.spark-bar{flex:1;border-radius:2px 2px 0 0;min-height:2px;background:var(–accent);opacity:.7}
.spark-bar.max{opacity:1;background:var(–accent)}

/* Day-wise table */
.day-table{width:100%;font-size:11px}
.day-table th{padding:6px 8px;font-family:‘Bebas Neue’,sans-serif;font-size:11px;letter-spacing:.05em;color:var(–ink3);border-bottom:2px solid var(–border);background:var(–bg);white-space:nowrap;text-align:right}
.day-table th:first-child{text-align:left}
.day-table td{padding:7px 8px;border-bottom:1px solid var(–border);text-align:right;font-family:‘JetBrains Mono’,monospace}
.day-table td:first-child{text-align:left;font-family:‘DM Sans’,sans-serif;font-weight:600;color:var(–ink)}
.day-table tr:last-child td{border-bottom:none}
.day-table tr.today-row td{background:#fff8f5;color:var(–accent)}
.day-table tr.today-row td:first-child{color:var(–accent)}

/* Month nav */
.month-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.month-nav-title{font-family:‘Bebas Neue’,sans-serif;font-size:18px;letter-spacing:.04em;color:var(–ink)}
.month-nav-btn{background:none;border:1.5px solid var(–border);border-radius:6px;padding:5px 10px;font-size:14px;cursor:pointer;color:var(–ink3)}
.month-nav-btn:active{background:var(–bg)}
</style>

</head>
<body>

<div id="app"></div>
<div id="toast-container"></div>

<script>
// ─── DIP TABLE (20KL Horizontal Tank) ───────────────────────────────────────
const DIP_TABLE = {1:11.97,2:33.89,3:62.22,4:95.71,5:133.61,6:175.43,7:220.80,8:269.41,9:321.05,10:375.51,11:432.63,12:492.26,13:554.27,14:618.56,15:685.03,16:753.57,17:824.11,18:896.57,19:970.88,20:1046.97,21:1124.79,22:1204.28,23:1285.38,24:1368.04,25:1452.22,26:1537.87,27:1624.95,28:1713.41,29:1803.22,30:1894.35,31:1986.75,32:2080.39,33:2175.24,34:2271.27,35:2368.44,36:2466.74,37:2566.12,38:2666.57,39:2768.05,40:2870.54,41:2974.02,42:3078.46,43:3183.83,44:3290.12,45:3397.31,46:3505.36,47:3614.26,48:3723.99,49:3834.53,50:3945.86,51:4057.96,52:4170.80,53:4284.38,54:4398.67,55:4513.65,56:4629.31,57:4745.63,58:4862.59,59:4980.18,60:5098.38,61:5217.17,62:5336.53,63:5456.46,64:5576.94,65:5697.94,66:5819.46,67:5941.48,68:6063.98,69:6186.96,70:6310.39,71:6434.26,72:6558.56,73:6683.28,74:6808.39,75:6933.89,76:7059.77,77:7186.00,78:7312.58,79:7439.49,80:7566.72,81:7694.26,82:7822.09,83:7950.20,84:8078.58,85:8207.21,86:8336.09,87:8465.20,88:8594.52,89:8724.05,90:8853.77,91:8983.68,92:9113.75,93:9243.97,94:9374.34,95:9504.85,96:9635.47,97:9766.20,98:9897.02,99:10027.93,100:10158.91,101:10289.95,102:10421.04,103:10552.16,104:10683.31,105:10814.47,106:10945.62,107:11076.77,108:11207.89,109:11338.98,110:11470.02,111:11601.00,112:11731.91,113:11862.73,114:11993.46,115:12124.08,116:12254.59,117:12384.96,118:12515.18,119:12645.26,120:12775.16,121:12904.88,122:13034.41,123:13163.73,124:13292.84,125:13421.72,126:13550.35,127:13678.73,128:13806.84,129:13934.67,130:14062.21,131:14189.44,132:14316.35,133:14442.93,134:14569.16,135:14695.04,136:14820.54,137:14945.65,138:15070.37,139:15194.67,140:15318.54,141:15441.97,142:15564.95,143:15687.45,144:15809.47,145:15930.99,146:16051.99,147:16172.47,148:16292.40,149:16411.76,150:16530.55,151:16648.75,152:16766.34,153:16883.30,154:16999.62,155:17115.28,156:17230.26,157:17344.55,158:17458.13,159:17570.97,160:17683.07,161:17794.40,162:17904.94,163:18014.67,164:18123.57,165:18231.62,166:18338.81,167:18445.10,168:18550.47,169:18654.91,170:18758.39,171:18860.88,172:18962.36,173:19062.81,174:19162.19,175:19260.49,176:19357.66,177:19453.69,178:19548.54,179:19642.18,180:19734.58,181:19825.71,182:19915.52,183:20003.98,184:20091.06,185:20176.71,186:20260.89,187:20343.55,188:20424.65,189:20504.14,190:20581.96,191:20658.05,192:20732.36,193:20804.82,194:20875.36,195:20943.91,196:21010.37,197:21074.66,198:21136.67,199:21196.30,200:21253.42,201:21307.88,202:21359.52,203:21408.13,204:21453.50,205:21495.32,206:21533.22,207:21566.71,208:21595.04,209:21616.96,210:21628.93};

function dipToL(cm){
  const n=parseFloat(cm)||0;
  if(n<=0)return 0;if(n>=210)return DIP_TABLE[210];
  const lo=Math.floor(n),fr=n-lo;
  if(fr===0&&DIP_TABLE[lo])return DIP_TABLE[lo];
  const a=DIP_TABLE[lo]||0,b=DIP_TABLE[lo+1]||a;
  return parseFloat((a+(b-a)*fr).toFixed(2));
}

// ─── STATE ──────────────────────────────────────────────────────────────────
const STORE_KEY='tomar_v2';
const PUMPS={jawar:'Jawar',mundi:'Mundi',mohana:'Mohana'};
const PUMP_LIST=[{id:'jawar',name:'Jawar'},{id:'mundi',name:'Mundi'},{id:'mohana',name:'Mohana'}];
const OWNER_PHONE='+91-8959448799';

// ── Firebase config (embedded — all devices connect automatically) ───────────
const FB_CONFIG={
  apiKey:"AIzaSyBKvPyHW3kQgtsnCSCX-y-nPBFADS6sG9s",
  authDomain:"tomar-fuels-74178.firebaseapp.com",
  projectId:"tomar-fuels-74178",
  storageBucket:"tomar-fuels-74178.firebasestorage.app",
  messagingSenderId:"845825762310",
  appId:"1:845825762310:web:1ed47868f0e8929e6f4f87"
};
// Every phone that opens this app connects to the SAME database automatically.
// No setup needed on staff phones — just open the URL and log in.
// ─────────────────────────────────────────────────────────────────────────────

let db=null;
let syncStatus='local';
let unsubscribe=null;

function initStore(){return{
  users:[
    {id:'u1',username:'owner',password:'owner123',role:'owner',pump_id:null},
    {id:'u2',username:'jawar',password:'jawar123',role:'staff',pump_id:'jawar'},
    {id:'u3',username:'mundi',password:'mundi123',role:'staff',pump_id:'mundi'},
    {id:'u4',username:'mohana',password:'mohana123',role:'staff',pump_id:'mohana'},
  ],
  entries:[],inward:[],
  bank_account:{opening_balance:0,opening_balance_set:false,tanker_purchases:[]}
};}

function loadStore(){try{const r=localStorage.getItem(STORE_KEY);return r?JSON.parse(r):null;}catch{return null;}}
function saveLocal(s){try{localStorage.setItem(STORE_KEY,JSON.stringify(s));}catch{}}

function save(store){
  saveLocal(store);
  if(!db)return;
  syncStatus='syncing';updateSyncIndicator();
  db.collection('tomar_data').doc('main').set(store)
    .then(()=>{syncStatus='synced';updateSyncIndicator();})
    .catch(e=>{syncStatus='error';updateSyncIndicator();console.warn('Firestore save error:',e);});
}

function updateSyncIndicator(){
  const ind=document.getElementById('sync-indicator');
  if(!ind)return;
  const map={local:['💾 Local only','rgba(255,255,255,.35)'],syncing:['☁ Syncing…','#fbbf24'],synced:['✓ Synced','#4ade80'],error:['⚠ Sync error','#f87171']};
  const [txt,col]=map[syncStatus]||map.local;
  ind.textContent=txt;ind.style.color=col;
}

function initFirebase(){
  // Check 1: Is Firebase SDK loaded?
  if(typeof firebase==='undefined'){
    console.warn('Firebase SDK not loaded — likely opened as local file or no internet');
    syncStatus='local';updateSyncIndicator();
    // Show warning in topbar subtitle
    const sub=document.getElementById('topbar-sub');
    if(sub&&sub.textContent.indexOf('⚠')===-1)sub.textContent+=' · ⚠ Open via URL for sync';
    return;
  }
  try{
    // Check 2: Initialize app
    if(!firebase.apps.length){
      firebase.initializeApp(FB_CONFIG);
    }

    // Check 3: Get Firestore
    db=firebase.firestore();

    // NOTE: enablePersistence intentionally NOT called — causes failures on GitHub Pages

    // Check 4: Set up real-time listener
    const docRef=db.collection('tomar_data').doc('main');
    syncStatus='syncing';updateSyncIndicator();

    unsubscribe=docRef.onSnapshot(
      function(snap){
        if(snap.exists){
          const cloud=snap.data();
          if(cloud&&cloud.entries!==undefined){
            const myUsers=S.users;
            S=Object.assign(initStore(),cloud);
            S.users=myUsers;
            if(!S.bank_account)S.bank_account={opening_balance:0,opening_balance_set:false,tanker_purchases:[]};
            if(!S.bank_account.tanker_purchases)S.bank_account.tanker_purchases=[];
            if(!S.inward)S.inward=[];
            saveLocal(S);
            syncStatus='synced';
            if(currentUser)renderPage();
            updateSyncIndicator();
          }
        }else{
          docRef.set(S)
            .then(function(){syncStatus='synced';updateSyncIndicator();})
            .catch(function(e){
              console.error('Firestore first write failed:',e.code,e.message);
              syncStatus='error';updateSyncIndicator();
            });
        }
      },
      function(err){
        console.error('Firestore error:',err.code,err.message);
        syncStatus='error';updateSyncIndicator();
        const errEl=document.getElementById('sync-error-detail');
        if(errEl)errEl.textContent='Error: '+(err.code||'')+(err.message?' — '+err.message:'');
        // Auto-retry after 10s
        setTimeout(function(){
          if(syncStatus==='error'&&db){
            try{docRef.onSnapshot(arguments.callee,arguments.callee);}catch(e){}
          }
        },10000);
      }
    );
  }catch(e){
    console.error('Firebase init failed:',e.message);
    syncStatus='error';updateSyncIndicator();
  }
}

// Called when Firebase SDK scripts finish loading
function onFirebaseSDKReady(){
  if(currentUser||!firebase){return;}
  initFirebase();
}

let S=loadStore()||initStore();
if(!S.bank_account)S.bank_account={opening_balance:0,opening_balance_set:false,tanker_purchases:[]};
if(!S.bank_account.tanker_purchases)S.bank_account.tanker_purchases=[];
if(!S.inward)S.inward=[];

let currentUser=null;
let currentPage='dashboard';
let selectedPump='all';

// ─── UTILS ───────────────────────────────────────────────────────────────────
const fmt=(n,d=2)=>(parseFloat(n)||0).toFixed(d);
const fmtL=n=>`${fmt(n,1)} L`;
const fmtR=n=>`₹${(parseFloat(n)||0).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const today=()=>new Date().toISOString().split('T')[0];
const el=id=>document.getElementById(id);
const qs=(sel,ctx=document)=>ctx.querySelector(sel);

function toast(msg,type='success'){
  const d=document.createElement('div');
  d.className=`toast ${type}`;
  d.innerHTML=`<span>${type==='success'?'✓':'✕'}</span>${msg}`;
  el('toast-container').appendChild(d);
  setTimeout(()=>d.remove(),3000);
}

function calcMachine(m){
  const o=parseFloat(m.opening)||0,c=parseFloat(m.closing)||0,t=parseFloat(m.testing)||0;
  return{...m,opening:o,closing:c,testing:t,sales:Math.max(0,c-o-t)};
}

// ─── FINANCIAL MODEL ─────────────────────────────────────────────────────────
// CREDITS (money IN):
//   petrol_revenue  = petrol_total_meter_sales (L) × petrol_rate (₹/L)
//   diesel_revenue  = diesel_total_meter_sales (L) × diesel_rate (₹/L)
//   lubricant_sales = entered directly in ₹
//   total_credits   = petrol_revenue + diesel_revenue + lubricant_sales
//
// DEBITS (money OUT):
//   bank_deposit    = amount deposited in bank (₹)
//   misc_expenses   = miscellaneous expenses paid out (₹)
//   salary_expenses = staff salaries paid (₹)
//   total_debits    = bank_deposit + misc_expenses + salary_expenses
//
// CASH IN HAND = total_credits − total_debits
// ─────────────────────────────────────────────────────────────────────────────
function calcEntry(d){
  const pm=[1,2,3,4].map(i=>calcMachine(d['petrol_m'+i]||{opening:0,closing:0,testing:0}));
  const dm=[1,2,3,4].map(i=>calcMachine(d['diesel_m'+i]||{opening:0,closing:0,testing:0}));
  const ptot=pm.reduce((s,m)=>s+m.sales,0);
  const dtot=dm.reduce((s,m)=>s+m.sales,0);
  const pol=dipToL(d.petrol_opening_dip_cm),pcl=dipToL(d.petrol_closing_dip_cm);
  const dol=dipToL(d.diesel_opening_dip_cm),dcl=dipToL(d.diesel_closing_dip_cm);
  const pdip=pol-pcl, ddip=dol-dcl;

  // Rates
  const petrol_rate = parseFloat(d.petrol_rate)||0;
  const diesel_rate = parseFloat(d.diesel_rate)||0;

  // Credits
  const petrol_revenue  = ptot * petrol_rate;
  const diesel_revenue  = dtot * diesel_rate;
  const lubricant_sales = parseFloat(d.lubricant_sales)||0;  // direct ₹ amount
  const total_credits   = petrol_revenue + diesel_revenue + lubricant_sales;

  // Debits
  const bank_deposit     = parseFloat(d.bank_deposit)||0;
  const misc_expenses    = parseFloat(d.misc_expenses)||0;
  const salary_expenses  = parseFloat(d.salary_expenses)||0;
  const total_debits     = bank_deposit + misc_expenses + salary_expenses;

  // Net
  const cash_in_hand = total_credits - total_debits;

  return{...d,
    petrol_m1:pm[0],petrol_m2:pm[1],petrol_m3:pm[2],petrol_m4:pm[3],
    diesel_m1:dm[0],diesel_m2:dm[1],diesel_m3:dm[2],diesel_m4:dm[3],
    petrol_total_meter_sales:ptot, diesel_total_meter_sales:dtot,
    petrol_opening_dip_liters:pol, petrol_closing_dip_liters:pcl,
    diesel_opening_dip_liters:dol, diesel_closing_dip_liters:dcl,
    petrol_dip_sales:pdip, diesel_dip_sales:ddip,
    petrol_variance:ptot-pdip, diesel_variance:dtot-ddip,
    petrol_rate, diesel_rate,
    petrol_revenue, diesel_revenue,
    lubricant_sales, bank_deposit, misc_expenses, salary_expenses,
    total_credits, total_debits, cash_in_hand
  };
}

// Safe numeric summer — always parses stored values as floats before adding
function sumField(arr, k){ return arr.reduce((s,e)=>s+(parseFloat(e[k])||0), 0); }

// ─── RENDER ENGINE ───────────────────────────────────────────────────────────
function render(){
  const app=el('app');
  if(!currentUser){renderLogin(app);return;}
  renderShell(app);
  renderPage();
}

// ─── LOGIN ───────────────────────────────────────────────────────────────────
let loginMode='login'; // login | forgot | otp | reset
let otpCode='',otpUser=null,otpRole=null,otpExpiry=0;

// Rate limiting: max 5 attempts, 15-min lockout
const LOGIN_MAX=5, LOGIN_LOCKOUT=15*60*1000;
let loginAttempts=parseInt(sessionStorage.getItem('lfa')||'0');
let loginLockedUntil=parseInt(sessionStorage.getItem('lfl')||'0');
function recordFailedAttempt(){
  loginAttempts++;
  sessionStorage.setItem('lfa',loginAttempts);
  if(loginAttempts>=LOGIN_MAX){
    loginLockedUntil=Date.now()+LOGIN_LOCKOUT;
    sessionStorage.setItem('lfl',loginLockedUntil);
  }
}
function clearAttempts(){loginAttempts=0;loginLockedUntil=0;sessionStorage.removeItem('lfa');sessionStorage.removeItem('lfl');}
function isLocked(){return Date.now()<loginLockedUntil;}
function lockMsg(){const s=Math.ceil((loginLockedUntil-Date.now())/1000);const m=Math.floor(s/60),r=s%60;return`Too many failed attempts. Try again in ${m}:${String(r).padStart(2,'0')}.`;}

// Session timeout: auto-logout after 8 hours inactivity
const SESSION_TIMEOUT=8*60*60*1000;
let lastActivity=Date.now();
function touchSession(){lastActivity=Date.now();}
function checkSession(){if(currentUser&&Date.now()-lastActivity>SESSION_TIMEOUT){currentUser=null;loginMode='login';render();toast('Session expired. Please sign in again.','error');}}
setInterval(checkSession,60000);
document.addEventListener('touchstart',touchSession,{passive:true});
document.addEventListener('click',touchSession,{passive:true});

function renderLogin(app){
  const hasFBConfig=!!getFirebaseConfig();
  const showSetup=shouldShowCloudSetup();
  app.innerHTML=`
  <div class="login-wrap" id="login-wrap">
    <div class="login-card">
      <div class="login-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="80" height="80" style="display:block;margin:0 auto 12px">
          <defs>
            <linearGradient id="ll-bg" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stop-color="#111"/>
              <stop offset="100%" stop-color="#222"/>
            </linearGradient>
            <linearGradient id="ll-acc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#e85d26"/>
            </linearGradient>
          </defs>
          <rect width="120" height="120" rx="26" fill="url(#ll-bg)"/>
          <polygon points="60,10 102,34 102,82 60,106 18,82 18,34" fill="none" stroke="url(#ll-acc)" stroke-width="4" stroke-linejoin="round"/>
          <rect x="24" y="42" width="72" height="14" rx="7" fill="url(#ll-acc)"/>
          <rect x="46" y="42" width="28" height="52" rx="7" fill="url(#ll-acc)"/>
        </svg>
        <h1>TOMAR FUELS</h1>
        <p>Fuel Pump Management</p>
      </div>

      ${showSetup ? `
      <div style="background:#fff8f0;border:2px solid #f97316;border-radius:12px;padding:14px;margin-bottom:18px">
        <div style="font-size:13px;font-weight:700;color:#c2410c;margin-bottom:6px">☁ Cloud Sync Setup</div>
        <p style="font-size:11px;color:#92400e;line-height:1.7;margin-bottom:12px">
          Enter the Firebase details to sync data with the owner and other pumps.<br>
          <strong>Get these 3 values from the owner (Tomar Fuels Firebase project).</strong>
        </p>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label" style="font-size:11px">API Key</label>
          <input class="form-input mono" id="cs-apikey" placeholder="AIzaSy..." style="font-size:12px" autocorrect="off" autocapitalize="none" spellcheck="false"/>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label" style="font-size:11px">Project ID</label>
          <input class="form-input mono" id="cs-projectid" placeholder="e.g. tomar-fuels-abc12" style="font-size:12px" autocorrect="off" autocapitalize="none" spellcheck="false"/>
        </div>
        <div class="form-group" style="margin-bottom:12px">
          <label class="form-label" style="font-size:11px">Auth Domain</label>
          <input class="form-input mono" id="cs-authdomain" placeholder="e.g. tomar-fuels-abc12.firebaseapp.com" style="font-size:12px" autocorrect="off" autocapitalize="none" spellcheck="false"/>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary" style="flex:2" onclick="saveCloudConfig()">💾 Save & Connect</button>
          <button class="btn btn-secondary" style="flex:1;font-size:11px" onclick="skipCloudConfig()">Skip</button>
        </div>
        <p style="font-size:10px;color:#92400e;margin-top:10px;text-align:center">You can still log in without this — data stays on this phone only.</p>
      </div>
      ` : hasFBConfig ? `
      <div style="display:flex;align-items:center;justify-content:space-between;background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:8px 12px;margin-bottom:14px">
        <span style="font-size:11px;color:#166534;font-weight:600">✓ Cloud sync active</span>
        <span onclick="resetCloudConfig()" style="cursor:pointer;color:#dc2626;font-size:10px;text-decoration:underline">Reset</span>
      </div>
      ` : ''}

      <div id="login-content"></div>
    </div>
  </div>`;
  renderLoginContent();
}

function saveCloudConfig(){
  const apiKey=(document.getElementById('cs-apikey')?.value||'').trim();
  const projectId=(document.getElementById('cs-projectid')?.value||'').trim();
  const authDomain=(document.getElementById('cs-authdomain')?.value||`${projectId}.firebaseapp.com`).trim();
  if(!apiKey||apiKey.length<10){alert('Please enter a valid API Key.');return;}
  if(!projectId){alert('Please enter the Project ID.');return;}
  localStorage.setItem('fb_cfg',JSON.stringify({apiKey,projectId,authDomain}));
  location.reload();
}

function skipCloudConfig(){
  localStorage.setItem('fb_cfg_skipped','1');
  render();
}

function resetCloudConfig(){
  localStorage.removeItem('fb_cfg');
  localStorage.removeItem('fb_cfg_skipped');
  render();
}

// Config is EMBEDDED in FB_CONFIG — always available on every device.
// No manual entry needed. All phones that open the Netlify URL auto-connect.
function getFirebaseConfig(){
  // 1. Check if user manually entered a different config (override)
  try{
    const s=localStorage.getItem('fb_cfg');
    if(s){const c=JSON.parse(s);if(c&&c.apiKey&&c.apiKey.length>10)return c;}
  }catch{}
  // 2. Use embedded config (this is the normal case for all devices)
  if(FB_CONFIG&&FB_CONFIG.apiKey&&!FB_CONFIG.apiKey.includes('PASTE'))return FB_CONFIG;
  return null;
}

// Since config is embedded, never show the cloud setup panel unless there's a problem
function shouldShowCloudSetup(){
  // Config is embedded — no manual setup needed for any device
  if(FB_CONFIG&&FB_CONFIG.apiKey&&!FB_CONFIG.apiKey.includes('PASTE'))return false;
  // Fallback: show if no config at all and user hasn't skipped
  if(getFirebaseConfig())return false;
  if(localStorage.getItem('fb_cfg_skipped'))return false;
  return true;
}

function renderLoginContent(){
  const c=el('login-content');
  if(!c)return;
  if(loginMode==='login'){
    const locked=isLocked();
    const attLeft=locked?0:Math.max(0,LOGIN_MAX-loginAttempts);
    c.innerHTML=`
      <div id="login-err" style="display:none" class="err-msg"></div>
      ${locked?`<div class="err-msg">🔒 ${lockMsg()}</div>`:''}
      ${!locked&&loginAttempts>0&&loginAttempts<LOGIN_MAX?`<div style="font-size:11px;color:var(--warn);margin-bottom:10px;text-align:center">${attLeft} attempt${attLeft===1?'':'s'} remaining before lockout</div>`:''}
      <div class="form-group"><label class="form-label">Username</label>
        <input class="form-input" id="l-un" placeholder="Enter username" autocapitalize="none" autocorrect="off" autocomplete="username" spellcheck="false" ${locked?'disabled':''}/></div>
      <div class="form-group"><label class="form-label">Password</label>
        <input class="form-input" id="l-pw" type="password" placeholder="Enter password" autocomplete="current-password" ${locked?'disabled':''}/></div>
      <button class="btn btn-primary" onclick="doLogin()" ${locked?'disabled style="opacity:.5;cursor:not-allowed"':''}>Sign In →</button>
      <div style="text-align:center;margin-top:14px">
        <span onclick="loginMode='forgot';renderLoginContent()" style="font-size:12px;color:var(--accent);cursor:pointer;text-decoration:underline">Forgot Password?</span>
      </div>`;
    if(!locked){
      setTimeout(()=>el('l-un')&&el('l-un').addEventListener('keydown',e=>{if(e.key==='Enter'){el('l-pw').focus();}}),0);
      setTimeout(()=>el('l-pw')&&el('l-pw').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();}),0);
    }
    if(locked)setTimeout(()=>renderLoginContent(),5000);
  } else if(loginMode==='forgot'){
    c.innerHTML=`
      <div style="margin-bottom:16px">
        <div class="section-title" style="margin-bottom:4px">🔐 Reset Password</div>
        <p style="font-size:12px;color:var(--ink3);line-height:1.6">Owner account: an OTP code will be sent via WhatsApp to the registered number.<br>Staff accounts: contact the owner to reset your password.</p>
      </div>
      <div id="forgot-err" style="display:none" class="err-msg"></div>
      <div class="form-group"><label class="form-label">Username</label>
        <input class="form-input" id="f-un" placeholder="Enter your username" autocapitalize="none" autocomplete="username"/></div>
      <button class="btn btn-primary" onclick="doForgot()">Request OTP</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="loginMode='login';renderLoginContent()">← Back to Login</button>`;
  } else if(loginMode==='otp'){
    // OTP is NOT shown on screen — user must check WhatsApp
    c.innerHTML=`
      <div style="margin-bottom:16px">
        <div class="section-title" style="margin-bottom:4px">📱 Enter OTP</div>
        <div class="alert-i" style="background:var(--diesel-light);border:1px solid #bbc9e8;border-radius:var(--r-sm);padding:12px 14px;font-size:12px;color:var(--diesel-dark);margin-bottom:12px;line-height:1.6">
          Your OTP has been generated. <strong>Open WhatsApp</strong> to find the code sent to ${OWNER_PHONE.replace(/\d(?=\d{4})/g,'•')}.<br>
          <span style="font-size:11px;opacity:.8">Valid for 5 minutes only.</span>
        </div>
        <button class="btn btn-secondary btn-sm" style="width:auto;margin-bottom:14px;font-size:12px" onclick="openWhatsApp()">📲 Open WhatsApp</button>
      </div>
      <div id="otp-err" style="display:none" class="err-msg"></div>
      <div class="form-group"><label class="form-label">Enter OTP Code</label>
        <input class="form-input mono" id="otp-in" placeholder="6-digit code" maxlength="6" inputmode="numeric" autocomplete="one-time-code" style="text-align:center;font-size:22px;letter-spacing:.2em"/></div>
      <button class="btn btn-primary" onclick="doVerifyOtp()">Verify →</button>
      <button class="btn btn-secondary" style="margin-top:8px" onclick="loginMode='forgot';otpCode='';renderLoginContent()">← Back</button>`;
    setTimeout(()=>el('otp-in')&&el('otp-in').focus(),100);
  } else if(loginMode==='reset'){
    c.innerHTML=`
      <div style="margin-bottom:16px">
        <div class="section-title" style="margin-bottom:4px">🔑 Set New Password</div>
        <p style="font-size:12px;color:var(--ink3)">Identity verified. Choose a strong new password.</p>
      </div>
      <div id="reset-err" style="display:none" class="err-msg"></div>
      <div class="form-group"><label class="form-label">New Password</label>
        <input class="form-input" id="r-pw" type="password" placeholder="Minimum 6 characters" autocomplete="new-password"/></div>
      <div class="form-group"><label class="form-label">Confirm Password</label>
        <input class="form-input" id="r-pw2" type="password" placeholder="Repeat new password" autocomplete="new-password"/></div>
      <button class="btn btn-primary" onclick="doResetPassword()">Set New Password →</button>`;
  }
}

function openWhatsApp(){
  // Send OTP via WhatsApp message to owner's number
  const num=OWNER_PHONE.replace(/[^0-9]/g,'');
  const msg=encodeURIComponent(`[Tomar Fuels] Your password reset OTP is: ${otpCode}\nValid for 5 minutes. Do not share this code.`);
  window.open(`https://wa.me/${num}?text=${msg}`,'_blank');
}

function doLogin(){
  if(isLocked()){renderLoginContent();return;}
  const un=(el('l-un').value||'').trim();
  const pw=el('l-pw').value||'';
  if(!un||!pw){el('login-err').textContent='Please enter your username and password.';el('login-err').style.display='block';return;}
  const user=S.users.find(u=>u.username===un&&u.password===pw);
  if(!user){
    recordFailedAttempt();
    if(isLocked()){renderLoginContent();return;}
    const left=LOGIN_MAX-loginAttempts;
    el('login-err').textContent=`Invalid username or password.${left>0?' '+left+' attempt'+(left===1?'':'s')+' remaining.':''}`;
    el('login-err').style.display='block';
    return;
  }
  clearAttempts();
  el('login-err').style.display='none';
  currentUser=user;
  lastActivity=Date.now();
  selectedPump=user.role==='owner'?'all':user.pump_id;
  render();
}

function doForgot(){
  const un=(el('f-un').value||'').trim();
  if(!un){el('forgot-err').textContent='Please enter your username.';el('forgot-err').style.display='block';return;}
  const user=S.users.find(u=>u.username===un);
  // Generic message even if user not found — don't leak valid usernames
  if(!user||user.role!=='owner'){
    el('forgot-err').innerHTML='OTP reset is only available for the owner account.<br>Staff: contact the owner to reset your password.';
    el('forgot-err').style.display='block';
    return;
  }
  otpUser=un;otpRole=user.role;
  otpCode=Math.floor(100000+Math.random()*900000).toString();
  otpExpiry=Date.now()+5*60*1000; // 5 min expiry
  loginMode='otp';renderLoginContent();
}

let otpAttempts=0;
function doVerifyOtp(){
  if(Date.now()>otpExpiry){
    el('otp-err').textContent='OTP has expired. Please request a new one.';
    el('otp-err').style.display='block';
    otpCode='';
    setTimeout(()=>{loginMode='forgot';renderLoginContent();},2000);
    return;
  }
  otpAttempts++;
  if(otpAttempts>5){
    el('otp-err').textContent='Too many incorrect attempts. Please restart.';
    el('otp-err').style.display='block';
    otpCode='';otpAttempts=0;
    setTimeout(()=>{loginMode='login';renderLoginContent();},2000);
    return;
  }
  const entered=(el('otp-in').value||'').trim();
  if(entered!==otpCode){
    el('otp-err').textContent=`Incorrect OTP. ${5-otpAttempts} attempt${5-otpAttempts===1?'':'s'} remaining.`;
    el('otp-err').style.display='block';
    return;
  }
  otpAttempts=0;
  loginMode='reset';renderLoginContent();
}

function doResetPassword(){
  const pw=el('r-pw').value||'';
  const pw2=el('r-pw2').value||'';
  if(pw.length<6){el('reset-err').textContent='Password must be at least 6 characters';el('reset-err').style.display='block';return;}
  if(pw!==pw2){el('reset-err').textContent='Passwords do not match';el('reset-err').style.display='block';return;}
  const idx=S.users.findIndex(u=>u.username===otpUser);
  S.users=S.users.map(u=>u.id===idx?{...u,password:pw}:u);
  save(S);
  otpCode='';otpUser=null;otpExpiry=0;
  loginMode='login';otpCode='';otpUser=null;
  renderLoginContent();
  toast('Password reset successfully! Please login with your new password.','success');
}

// ─── SHELL ───────────────────────────────────────────────────────────────────
const NAV=[
  {id:'dashboard',icon:'📊',label:'Home'},
  {id:'add-entry',icon:'➕',label:'Add'},
  {id:'history',icon:'📋',label:'History'},
  {id:'inward',icon:'🚛',label:'Inward'},
  {id:'reports',icon:'📈',label:'Reports'},
];

let installPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;showInstallBanner();});

function showInstallBanner(){
  if(localStorage.getItem('install_dismissed'))return;
  const b=el('install-banner');
  if(b)b.style.display='flex';
}

function renderShell(app){
  const visPages=currentUser.role==='owner'?[...NAV,{id:'bank',icon:'🏦',label:'Bank'},{id:'users',icon:'👤',label:'Users'}]:[...NAV,{id:'bank',icon:'🏦',label:'Bank'}];
  app.innerHTML=`
  <div id="install-banner" class="install-banner" style="display:none">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="28" height="28" style="flex-shrink:0">
      <rect width="120" height="120" rx="24" fill="#111"/>
      <polygon points="60,10 102,34 102,82 60,106 18,82 18,34" fill="none" stroke="#e85d26" stroke-width="5" stroke-linejoin="round"/>
      <rect x="24" y="42" width="72" height="14" rx="7" fill="#e85d26"/>
      <rect x="46" y="42" width="28" height="52" rx="7" fill="#e85d26"/>
    </svg>
    <span class="i-text"><strong>Install Tomar Fuels</strong><br>Save as app on your phone</span>
    <button class="i-btn" onclick="doInstall()">How to →</button>
    <button class="i-close" onclick="dismissInstall()">×</button>
  </div>
  <div class="topbar">
    <div style="display:flex;align-items:center;gap:10px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="34" height="34" style="flex-shrink:0">
        <rect width="120" height="120" rx="22" fill="rgba(255,255,255,0.07)"/>
        <polygon points="60,10 102,34 102,82 60,106 18,82 18,34" fill="none" stroke="#e85d26" stroke-width="5" stroke-linejoin="round"/>
        <rect x="24" y="42" width="72" height="14" rx="7" fill="#e85d26"/>
        <rect x="46" y="42" width="28" height="52" rx="7" fill="#e85d26"/>
      </svg>
      <div>
        <h1 style="font-size:18px;letter-spacing:.06em">TOMAR FUELS</h1>
        <div class="topbar-sub" id="topbar-sub">${currentUser.role==='owner'?'Owner · All Pumps':PUMPS[currentUser.pump_id]||''}</div>
      </div>
    </div>
    <div class="topbar-right">
      <span id="sync-indicator" style="font-size:10px;font-weight:600;letter-spacing:.04em"></span>
      ${currentUser.role==='owner'?`<select id="pump-sel" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:5px 8px;border-radius:8px;font-size:11px;font-family:inherit;cursor:pointer;outline:none">
        <option value="all" style="background:#0f0f0f">All Pumps</option>
        ${PUMP_LIST.map(p=>`<option value="${p.id}" style="background:#0f0f0f">${p.name}</option>`).join('')}
      </select>`:''}
      <button onclick="doLogout()" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:6px 10px;border-radius:8px;font-size:11px;cursor:pointer;font-family:inherit">Out</button>
    </div>
  </div>
  <div id="page-content" style="flex:1;display:flex;flex-direction:column;overflow:hidden"></div>
  <nav class="bottom-nav">
    ${visPages.map(p=>`<div class="nav-item${currentPage===p.id?' active':''}" onclick="goPage('${p.id}')">
      <span class="nav-icon">${p.icon}</span>
      <span class="nav-label">${p.label}</span>
    </div>`).join('')}
  </nav>`;

  if(el('pump-sel')){
    el('pump-sel').value=selectedPump;
    el('pump-sel').addEventListener('change',e=>{selectedPump=e.target.value;renderPage();});
  }
  // Show install banner if not dismissed
  if(!localStorage.getItem('install_dismissed')) showInstallBanner();
  // Update sync indicator after shell renders
  setTimeout(updateSyncIndicator, 100);
}

function doInstall(){
  if(installPrompt){
    installPrompt.prompt();
    installPrompt.userChoice.then(()=>{installPrompt=null;dismissInstall();});
  } else {
    showInstallGuide();
  }
}
function dismissInstall(){localStorage.setItem('install_dismissed','1');if(el('install-banner'))el('install-banner').style.display='none';}

function showInstallGuide(){
  const isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent);
  const isAndroid=/Android/.test(navigator.userAgent);
  const isFile=location.protocol==='file:';
  let content='';
  if(isFile){
    content=`<div class="alert alert-w" style="margin-bottom:14px">⚠ You're opening this as a local file. To install as an app, you need to host it — it only takes 2 minutes and it's free.</div>
    <div class="card-title" style="margin-bottom:8px">Option 1 — Share via WhatsApp (easiest)</div>
    <p style="font-size:13px;color:var(--ink3);line-height:1.6;margin-bottom:14px">Send this HTML file to your managers via WhatsApp. They open it in Chrome, tap the 3-dot menu → "Add to Home Screen".</p>
    <div class="card-title" style="margin-bottom:8px">Option 2 — Host free on GitHub Pages</div>
    <ol style="font-size:12px;color:var(--ink3);line-height:2;padding-left:18px;margin-bottom:14px">
      <li>Go to <strong style="color:var(--ink)">github.com</strong> → Sign up free</li>
      <li>New repository → name it <strong style="color:var(--ink)">tomar-fuels</strong></li>
      <li>Upload this HTML file, rename it to <strong style="color:var(--ink)">index.html</strong></li>
      <li>Settings → Pages → Branch: main → Save</li>
      <li>Your app is live at <strong style="color:var(--accent)">yourname.github.io/tomar-fuels</strong></li>
    </ol>
    <div class="card-title" style="margin-bottom:8px">Option 3 — Netlify Drop (30 seconds)</div>
    <p style="font-size:13px;color:var(--ink3);line-height:1.6">Go to <strong style="color:var(--ink)">app.netlify.com/drop</strong>, drag and drop this file. You'll get a free HTTPS URL instantly.</p>`;
  } else if(isIOS){
    content=`<div class="section-title" style="margin-bottom:10px">Install on iPhone / iPad</div>
    <ol style="font-size:13px;color:var(--ink3);line-height:2.2;padding-left:18px">
      <li>Open this page in <strong style="color:var(--ink)">Safari</strong> (not Chrome)</li>
      <li>Tap the <strong style="color:var(--ink)">Share button</strong> <span style="font-size:16px">⬆</span> at the bottom</li>
      <li>Scroll down and tap <strong style="color:var(--ink)">"Add to Home Screen"</strong></li>
      <li>Tap <strong style="color:var(--accent)">Add</strong></li>
    </ol>
    <div class="alert alert-ok" style="margin-top:12px">✓ The app icon will appear on your home screen with the Tomar Fuels logo.</div>`;
  } else if(isAndroid){
    content=`<div class="section-title" style="margin-bottom:10px">Install on Android</div>
    <ol style="font-size:13px;color:var(--ink3);line-height:2.2;padding-left:18px">
      <li>Open this page in <strong style="color:var(--ink)">Chrome</strong></li>
      <li>Tap the <strong style="color:var(--ink)">3-dot menu</strong> (⋮) top right</li>
      <li>Tap <strong style="color:var(--ink)">"Add to Home Screen"</strong> or <strong style="color:var(--ink)">"Install App"</strong></li>
      <li>Tap <strong style="color:var(--accent)">Install</strong></li>
    </ol>
    <div class="alert alert-ok" style="margin-top:12px">✓ The Tomar Fuels app will install like a native app with its own icon.</div>`;
  } else {
    content=`<div class="section-title" style="margin-bottom:10px">Install as App</div>
    <p style="font-size:13px;color:var(--ink3);line-height:1.6"><strong>On Android (Chrome):</strong> Tap ⋮ menu → "Add to Home Screen" or "Install App"<br><br><strong>On iPhone (Safari):</strong> Tap Share ⬆ → "Add to Home Screen"<br><br><strong>On Desktop (Chrome):</strong> Click the install icon in the address bar.</p>`;
  }
  const wrap=document.createElement('div');wrap.id='install-guide-wrap';
  wrap.innerHTML=`<div class="modal-backdrop" onclick="if(event.target===this)document.getElementById('install-guide-wrap').remove()">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-hd"><span class="modal-title">📲 Install Tomar Fuels</span><button class="icon-btn" onclick="document.getElementById('install-guide-wrap').remove()">✕</button></div>
      <div class="modal-body">${content}</div>
    </div>
  </div>`;
  document.body.appendChild(wrap);
}
function doLogout(){currentUser=null;currentPage='dashboard';render();}
function goPage(p){currentPage=p;
  // re-render nav
  document.querySelectorAll('.nav-item').forEach(n=>{n.classList.toggle('active',n.getAttribute('onclick')===`goPage('${p}')`)});
  renderPage();
}

function renderPage(){
  const c=el('page-content');if(!c)return;
  if(currentPage==='dashboard')renderDashboard(c);
  else if(currentPage==='add-entry')renderAddEntry(c);
  else if(currentPage==='history')renderHistory(c);
  else if(currentPage==='inward')renderInward(c);
  else if(currentPage==='reports')renderReports(c);
  else if(currentPage==='bank')renderBank(c);
  else if(currentPage==='users')renderUsers(c);
}

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
let dashViewMonth = today().slice(0,7);
let dashMetric = 'revenue';
let dashRange = 'month'; // 'today' | 'week' | 'month' | 'custom'
let dashDateFrom = today();
let dashDateTo = today();

// ── Stock level calculation ──────────────────────────────────────────────────
// Stock = latest closing dip in liters + all inward receipts recorded AFTER that entry date
// Note: always recompute liters from cm using dipToL() as fallback, because old/synced
// entries may have the _liters field missing or zero even if _cm is present.
function getStockLevel(pump_id){
  const TANK_CAPACITY=21628.93;

  // Get all entries for this pump, newest first
  const entries=S.entries
    .filter(e=>e.pump_id===pump_id)
    .sort((a,b)=>b.date.localeCompare(a.date));
  const latestEntry=entries[0]||null;

  if(!latestEntry){
    return{petrolBase:0,dieselBase:0,petrolInward:0,dieselInward:0,
      petrolTotal:0,dieselTotal:0,petrolPct:0,dieselPct:0,
      petrolDays:null,dieselDays:null,basePetrolCm:0,baseDieselCm:0,
      baseDay:null,inwardCount:0,hasData:false,allInward:[]};
  }

  // Get closing dip cm values
  const basePetrolCm=parseFloat(latestEntry.petrol_closing_dip_cm)||0;
  const baseDieselCm=parseFloat(latestEntry.diesel_closing_dip_cm)||0;

  // Compute liters: prefer stored _liters field, fallback to dipToL(cm)
  const storedPetrolL=parseFloat(latestEntry.petrol_closing_dip_liters)||0;
  const storedDieselL=parseFloat(latestEntry.diesel_closing_dip_liters)||0;
  const petrolBase=storedPetrolL>0?storedPetrolL:(basePetrolCm>0?dipToL(basePetrolCm):0);
  const dieselBase=storedDieselL>0?storedDieselL:(baseDieselCm>0?dipToL(baseDieselCm):0);

  const baseDate=latestEntry.date;

  // ALL inward receipts recorded on or after the base date
  // (closing dip is taken at end of day; any tanker arriving same day or later adds to stock)
  const allInward=S.inward.filter(r=>r.pump_id===pump_id&&r.date>=baseDate);
  const petrolInward=allInward.reduce((s,r)=>s+(parseFloat(r.petrol_actual_receipt)||0),0);
  const dieselInward=allInward.reduce((s,r)=>s+(parseFloat(r.diesel_actual_receipt)||0),0);

  // Current stock = closing dip base + inward received
  const petrolTotal=petrolBase+petrolInward;
  const dieselTotal=dieselBase+dieselInward;

  const petrolPct=Math.min(100,Math.round(petrolTotal/TANK_CAPACITY*100));
  const dieselPct=Math.min(100,Math.round(dieselTotal/TANK_CAPACITY*100));

  // Days remaining based on 7-day average daily sales
  const last7=entries.slice(0,7);
  const avgP=last7.length?sumField(last7,'petrol_total_meter_sales')/last7.length:0;
  const avgD=last7.length?sumField(last7,'diesel_total_meter_sales')/last7.length:0;
  const petrolDays=avgP>0?Math.floor(petrolTotal/avgP):null;
  const dieselDays=avgD>0?Math.floor(dieselTotal/avgD):null;

  return{petrolBase,dieselBase,petrolInward,dieselInward,
    petrolTotal,dieselTotal,petrolPct,dieselPct,
    petrolDays,dieselDays,basePetrolCm,baseDieselCm,
    baseDay:baseDate,inwardCount:allInward.length,allInward,hasData:true};
}

function renderDashboard(c){
  const td=today();

  // ── Compute date range ──
  let rangeFrom, rangeTo, rangeLabel;
  if(dashRange==='today'){
    rangeFrom=rangeTo=td;
    rangeLabel='Today — '+new Date(td+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  } else if(dashRange==='week'){
    const d=new Date(td+'T00:00:00');d.setDate(d.getDate()-6);
    rangeFrom=d.toISOString().split('T')[0];rangeTo=td;
    rangeLabel='Last 7 Days';
  } else if(dashRange==='custom'){
    rangeFrom=dashDateFrom;rangeTo=dashDateTo;
    rangeLabel=rangeFrom===rangeTo?rangeFrom:rangeFrom.slice(5)+' → '+rangeTo.slice(5);
  } else { // month
    dashViewMonth=dashViewMonth||td.slice(0,7);
    rangeFrom=dashViewMonth+'-01';
    const lastDay=new Date(parseInt(dashViewMonth.slice(0,4)),parseInt(dashViewMonth.slice(5,7)),0).getDate();
    rangeTo=dashViewMonth+'-'+String(lastDay).padStart(2,'0');
    rangeLabel=new Date(dashViewMonth+'-01').toLocaleDateString('en-IN',{month:'long',year:'numeric'});
  }

  const allEntries=currentUser.role==='owner'
    ?(selectedPump==='all'?S.entries:S.entries.filter(e=>e.pump_id===selectedPump))
    :S.entries.filter(e=>e.pump_id===currentUser.pump_id);

  const rangeEntries=allEntries.filter(e=>e.date>=rangeFrom&&e.date<=rangeTo).sort((a,b)=>a.date.localeCompare(b.date));

  const T={
    petrol:  sumField(rangeEntries,'petrol_total_meter_sales'),
    diesel:  sumField(rangeEntries,'diesel_total_meter_sales'),
    revenue: sumField(rangeEntries,'total_credits'),
    debits:  sumField(rangeEntries,'total_debits'),
    cash:    sumField(rangeEntries,'cash_in_hand'),
    bank:    sumField(rangeEntries,'bank_deposit'),
    misc:    sumField(rangeEntries,'misc_expenses'),
    salary:  sumField(rangeEntries,'salary_expenses'),
    lube:    sumField(rangeEntries,'lubricant_sales'),
    entries: rangeEntries.length,
  };

  const todayByPump={};
  PUMP_LIST.forEach(({id})=>{todayByPump[id]=S.entries.find(e=>e.pump_id===id&&e.date===td)||null;});

  const pumpStats=PUMP_LIST.map(({id,name})=>{
    const pe=S.entries.filter(e=>e.pump_id===id&&e.date>=rangeFrom&&e.date<=rangeTo);
    return{id,name,
      petrol:sumField(pe,'petrol_total_meter_sales'),
      diesel:sumField(pe,'diesel_total_meter_sales'),
      revenue:sumField(pe,'total_credits'),
      cash:sumField(pe,'cash_in_hand'),
      hasToday:!!todayByPump[id],entries:pe.length};
  });

  // Stock levels (always current, independent of range)
  const stockByPump={};
  PUMP_LIST.forEach(({id})=>{stockByPump[id]=getStockLevel(id);});

  // Bar chart
  const metrics={
    revenue:{label:'Revenue',fmt:v=>fmtR(v),field:'total_credits',color:'#f59e0b'},
    petrol: {label:'Petrol (L)',fmt:v=>fmt(v,0)+'L',field:'petrol_total_meter_sales',color:'#10b981'},
    diesel: {label:'Diesel (L)',fmt:v=>fmt(v,0)+'L',field:'diesel_total_meter_sales',color:'#3b82f6'},
    cash:   {label:'Cash in Hand',fmt:v=>fmtR(v),field:'cash_in_hand',color:'#8b5cf6'},
    bank:   {label:'Bank Deposit',fmt:v=>fmtR(v),field:'bank_deposit',color:'#06b6d4'},
  };
  const M=metrics[dashMetric];
  const entryByDate={};rangeEntries.forEach(e=>entryByDate[e.date]=e);

  // Build bar chart dates
  const chartDates=[];
  const from=new Date(rangeFrom+'T00:00:00');
  const to=new Date(rangeTo+'T00:00:00');
  const dayDiff=Math.round((to-from)/(1000*86400))+1;
  const maxBars=Math.min(dayDiff,31);
  for(let i=0;i<maxBars;i++){
    const d=new Date(from);d.setDate(d.getDate()+i);
    chartDates.push(d.toISOString().split('T')[0]);
  }
  const chartVals=chartDates.map(ds=>parseFloat((entryByDate[ds]||{})[M.field])||0);
  const maxVal=Math.max(...chartVals,1);

  // Build improved bar chart with gradient fills and value labels
  const gradMap={revenue:'linear-gradient(180deg,#fbbf24,#f59e0b)',petrol:'linear-gradient(180deg,#34d399,#059669)',diesel:'linear-gradient(180deg,#60a5fa,#2563eb)',cash:'linear-gradient(180deg,#a78bfa,#7c3aed)',bank:'linear-gradient(180deg,#94a3b8,#475569)'};
  const bars=chartDates.map(function(ds){
    const v=parseFloat((entryByDate[ds]||{})[M.field])||0;
    const pct=v?Math.max(6,Math.round((v/maxVal)*100)):0;
    const isToday=ds===td;
    const hasEntry=!!entryByDate[ds];
    const d=parseInt(ds.slice(8));
    const dayName=new Date(ds+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short'});
    const barGrad=isToday?'linear-gradient(180deg,#fb923c,#ea580c)':(gradMap[dashMetric]||gradMap.revenue);
    const shadow=isToday?'box-shadow:0 0 8px rgba(251,146,60,.4);':'';
    const valLabel=hasEntry&&pct>28?'<div style="position:absolute;top:2px;left:0;right:0;text-align:center;font-size:8px;font-weight:700;color:rgba(255,255,255,.85);overflow:hidden">'+(v>9999?Math.round(v/1000)+'k':Math.round(v))+'</div>':'';
    const barInner=hasEntry
      ?'<div style="width:100%;height:'+pct+'%;background:'+barGrad+';border-radius:4px 4px 0 0;'+shadow+'transition:height .3s ease;position:relative;min-height:4px">'+valLabel+'</div>'
      :'<div style="width:100%;height:2px;background:var(--border);border-radius:2px"></div>';
    const labelColor=isToday?'color:var(--accent);font-weight:700;':'color:var(--ink3);'+(hasEntry?'':'opacity:.4;');
    return '<div class="bar-col'+(isToday?' today':'')+'" onclick="dashRange=\'custom\';dashDateFrom=\''+ds+'\';dashDateTo=\''+ds+'\';renderPage()" style="cursor:pointer" title="'+ds+' ('+dayName+'): '+M.fmt(v)+'">'
      +'<div style="width:100%;height:72px;display:flex;align-items:flex-end">'+barInner+'</div>'
      +'<div style="font-size:9px;'+labelColor+'">'+d+'</div>'
      +'</div>';
  }).join('');

  // Per-month nav
  const isCurrentMonth=(dashViewMonth===td.slice(0,7));
  const daysInMonth=new Date(parseInt((dashViewMonth||td.slice(0,7)).slice(0,4)),parseInt((dashViewMonth||td.slice(0,7)).slice(5,7)),0).getDate();

  const alerts=allEntries.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,30)
    .flatMap(e=>{const a=[];
      if(Math.abs(e.petrol_variance||0)>50)a.push(`${PUMPS[e.pump_id]} ${e.date.slice(5)} ⛽ ${fmt(e.petrol_variance,1)}L`);
      if(Math.abs(e.diesel_variance||0)>50)a.push(`${PUMPS[e.pump_id]} ${e.date.slice(5)} 🔵 ${fmt(e.diesel_variance,1)}L`);
      return a;}).slice(0,3);

  const visiblePumps=currentUser.role==='owner'?pumpStats:pumpStats.filter(p=>p.id===currentUser.pump_id);

  // ── Stock gauge helper ──
  function stockGauge(label,liters,pct,days,color){
    const low=pct<20,med=pct<40;
    const barCol=low?'#ef4444':med?'#f59e0b':color;
    const status=low?'🔴 Low stock':med?'🟡 Monitor':'🟢 Good';
    return `<div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.06em;text-transform:uppercase">${label}</span>
        <span style="font-size:10px;color:rgba(255,255,255,.4)">${status}${days!==null?' · ~'+days+' days left':''}</span>
      </div>
      <div style="background:rgba(255,255,255,.08);border-radius:100px;height:8px;overflow:hidden;margin-bottom:6px">
        <div style="height:100%;width:${pct}%;background:${barCol};border-radius:100px;transition:width .6s ease"></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:30px;color:#fff;line-height:1">${fmt(liters,0)}<span style="font-size:14px;opacity:.5;margin-left:3px">L</span></span>
        <span style="font-size:10px;color:rgba(255,255,255,.35)">${fmt(pct,0)}% of tank</span>
      </div>
    </div>`;
  }

  const stockCards=PUMP_LIST.filter(p=>currentUser.role==='owner'||(p.id===currentUser.pump_id)).map(({id,name})=>{
    const st=stockByPump[id];
    if(!st.hasData)return `<div style="background:rgba(255,255,255,.03);border:1.5px dashed rgba(255,255,255,.1);border-radius:14px;padding:16px;margin-bottom:10px;text-align:center">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:.08em;color:rgba(255,255,255,.3);margin-bottom:4px">${name} PUMP</div>
      <div style="font-size:12px;color:rgba(255,255,255,.25)">No entry yet — add a daily entry with dip readings to track stock</div>
    </div>`;

    const gradients={jawar:'linear-gradient(135deg,#0f2a4a 0%,#0a1a30 100%)',mundi:'linear-gradient(135deg,#0a2a0a 0%,#051505 100%)',mohana:'linear-gradient(135deg,#2a0a0a 0%,#1a0505 100%)'};
    const grad=gradients[id]||'linear-gradient(135deg,#1a1a2e,#0d0d1a)';

    // Build breakup row showing dip + inward = total
    const petrolBreakup=st.petrolInward>0
      ?`${fmt(st.petrolBase,0)}L dip + ${fmt(st.petrolInward,0)}L inward = <strong style="color:#fff">${fmt(st.petrolTotal,0)}L</strong>`
      :`${fmt(st.petrolBase,0)}L from closing dip${st.basePetrolCm>0?' ('+fmt(st.basePetrolCm,1)+'cm)':''}`;
    const dieselBreakup=st.dieselInward>0
      ?`${fmt(st.dieselBase,0)}L dip + ${fmt(st.dieselInward,0)}L inward = <strong style="color:#fff">${fmt(st.dieselTotal,0)}L</strong>`
      :`${fmt(st.dieselBase,0)}L from closing dip${st.baseDieselCm>0?' ('+fmt(st.baseDieselCm,1)+'cm)':''}`;

    return `<div style="background:${grad};border-radius:16px;padding:16px;margin-bottom:10px;border:1px solid rgba(255,255,255,.07)">
      <!-- Header -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px">
        <div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:.08em;color:#fff">${name} PUMP</div>
          <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:2px">Stock as of <strong style="color:rgba(255,255,255,.55)">${st.baseDay}</strong>${st.inwardCount>0?' + '+st.inwardCount+' inward receipt'+(st.inwardCount>1?'s':''):''}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <div style="font-size:10px;padding:3px 8px;border-radius:20px;font-weight:600;${todayByPump[id]?'background:rgba(74,222,128,.15);color:#4ade80':'background:rgba(251,191,36,.12);color:#fbbf24'}">${todayByPump[id]?'✓ Entry today':'⚠ No entry today'}</div>
          <div onclick="goPage('inward')" style="font-size:10px;color:rgba(255,255,255,.35);cursor:pointer;text-decoration:underline">+ Add inward</div>
        </div>
      </div>

      <!-- Petrol gauge -->
      ${stockGauge('⛽ Petrol',st.petrolTotal,st.petrolPct,st.petrolDays,'#4ade80')}
      <!-- Petrol breakup -->
      <div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:12px;padding:6px 8px;background:rgba(255,255,255,.04);border-radius:6px">
        ⛽ ${petrolBreakup}
      </div>

      <!-- Diesel gauge -->
      ${stockGauge('🔵 Diesel',st.dieselTotal,st.dieselPct,st.dieselDays,'#60a5fa')}
      <!-- Diesel breakup -->
      <div style="font-size:10px;color:rgba(255,255,255,.35);padding:6px 8px;background:rgba(255,255,255,.04);border-radius:6px">
        🔵 ${dieselBreakup}
      </div>
    </div>`;
  }).join('');

  c.innerHTML=`<div class="scroll"><div class="page">

    <!-- Stock section — always shows CURRENT live stock regardless of date range -->
    <div style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:.12em;color:var(--ink3);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
      <span>⛽ CURRENT STOCK LEVELS</span>
      <span onclick="goPage('inward')" style="font-size:10px;color:var(--accent);cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">+ Add Inward →</span>
    </div>
    ${stockCards}

    <!-- Range selector -->
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;margin-bottom:12px;box-shadow:var(--shadow)">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:${dashRange==='custom'?'10px':'0'}">
        ${['today','week','month','custom'].map(r=>`<button onclick="dashRange='${r}';renderPage()" style="padding:7px 0;border-radius:8px;border:1.5px solid ${dashRange===r?'var(--accent)':'var(--border)'};background:${dashRange===r?'var(--accent)':'transparent'};color:${dashRange===r?'#fff':'var(--ink3)'};font-size:11px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer;letter-spacing:.03em">${r==='today'?'TODAY':r==='week'?'7 DAYS':r==='month'?'MONTH':'CUSTOM'}</button>`).join('')}
      </div>
      ${dashRange==='month'?`<div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
        <button onclick="dashViewMonth=offsetMonth(dashViewMonth,-1);renderPage()" style="background:none;border:1px solid var(--border);border-radius:8px;padding:5px 12px;cursor:pointer;font-size:16px;color:var(--ink3)">◀</button>
        <span style="font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:.06em">${rangeLabel.toUpperCase()}</span>
        <button onclick="dashViewMonth=offsetMonth(dashViewMonth,1);renderPage()" ${isCurrentMonth?'disabled style="opacity:.3"':''} style="background:none;border:1px solid var(--border);border-radius:8px;padding:5px 12px;cursor:pointer;font-size:16px;color:var(--ink3)">▶</button>
      </div>`:''}
      ${dashRange==='custom'?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div><div style="font-size:10px;color:var(--ink3);font-weight:700;margin-bottom:4px">FROM</div>
          <input type="date" value="${dashDateFrom}" onchange="dashDateFrom=this.value;renderPage()" style="width:100%;padding:7px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:13px;background:var(--bg)"/></div>
        <div><div style="font-size:10px;color:var(--ink3);font-weight:700;margin-bottom:4px">TO</div>
          <input type="date" value="${dashDateTo}" onchange="dashDateTo=this.value;renderPage()" style="width:100%;padding:7px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:13px;background:var(--bg)"/></div>
      </div>`:''}
    </div>

    <!-- Period label -->
    <div style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:.12em;color:var(--ink3);margin-bottom:8px">${rangeLabel.toUpperCase()} · ${T.entries} ENTR${T.entries===1?'Y':'IES'}</div>

    <!-- KPI strip — 4 cards -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="background:linear-gradient(135deg,#0a6e4e,#084f38);border-radius:var(--r);padding:14px;color:#fff">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">⛽ Petrol</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;line-height:1">${fmt(T.petrol,0)}</div>
        <div style="font-size:10px;opacity:.5;margin-top:2px">litres sold</div>
      </div>
      <div style="background:linear-gradient(135deg,#1a3a8f,#122970);border-radius:var(--r);padding:14px;color:#fff">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">🔵 Diesel</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;line-height:1">${fmt(T.diesel,0)}</div>
        <div style="font-size:10px;opacity:.5;margin-top:2px">litres sold</div>
      </div>
      <div style="background:linear-gradient(135deg,#92400e,#78350f);border-radius:var(--r);padding:14px;color:#fff">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">₹ Revenue</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1">${fmtR(T.revenue)}</div>
        <div style="font-size:10px;opacity:.5;margin-top:2px">total credits</div>
      </div>
      <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:var(--r);padding:14px;color:#fff">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">💵 Cash</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.1">${fmtR(T.cash)}</div>
        <div style="font-size:10px;opacity:.5;margin-top:2px">in hand</div>
      </div>
    </div>

    <!-- Pump cards (per-pump breakdown) -->
    ${visiblePumps.map(p=>`
    <div class="pump-card ${p.id}" style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div class="pump-card-name" style="font-size:16px">${p.name}</div>
        <span style="font-size:10px;padding:3px 8px;border-radius:20px;${p.hasToday?'background:rgba(255,255,255,.2);color:#fff':'background:rgba(255,200,100,.2);color:#ffe08a'}">${p.hasToday?'✓ Today':'⚠ No entry'}</span>
      </div>
      <div class="pump-card-stats">
        <div class="pump-card-stat"><div class="pcs-label">⛽ Petrol</div><div class="pcs-value">${fmt(p.petrol,0)} L</div></div>
        <div class="pump-card-stat"><div class="pcs-label">🔵 Diesel</div><div class="pcs-value">${fmt(p.diesel,0)} L</div></div>
        <div class="pump-card-stat"><div class="pcs-label">₹ Revenue</div><div class="pcs-value" style="font-size:13px">${fmtR(p.revenue)}</div></div>
        <div class="pump-card-stat"><div class="pcs-label">💵 Cash</div><div class="pcs-value" style="font-size:13px">${fmtR(p.cash)}</div></div>
      </div>
    </div>`).join('')}

    <!-- Bar chart with metric dropdown -->
    <div class="chart-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div class="chart-title" style="margin-bottom:0">📊 ${rangeLabel}</div>
        <select onchange="dashMetric=this.value;renderPage()" style="font-size:11px;padding:5px 8px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg);color:var(--ink);outline:none;font-family:'DM Sans',sans-serif;font-weight:600">
          ${Object.entries(metrics).map(([k,m])=>`<option value="${k}"${dashMetric===k?' selected':''}>${m.label}</option>`).join('')}
        </select>
      </div>
      <div class="chart-sub">Tap any bar to view that day's detail</div>
      <div class="chart-wrap"><div class="bar-chart-inner">${bars||'<div style="color:var(--ink3);font-size:12px;padding:20px 0;text-align:center">No entries in this period</div>'}</div></div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:8px">
        <div style="width:8px;height:8px;border-radius:2px;background:${M.color}"></div>
        <span style="font-size:10px;color:var(--ink3)">${M.label} · Total: ${M.fmt(sumField(rangeEntries,M.field))}</span>
      </div>
    </div>

    <!-- Financial summary for range -->
    <div class="card">
      <div class="card-title">💰 ${rangeLabel} — Financials</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        <div style="background:var(--petrol-light);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--petrol-dark);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Credits IN</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--petrol)">${fmtR(T.revenue)}</div>
        </div>
        <div style="background:var(--warn-light);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--warn);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Debits OUT</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--warn)">${fmtR(T.debits)}</div>
        </div>
      </div>
      <div class="summary-row"><span class="summary-label">Petrol Revenue</span><strong>${fmtR(sumField(rangeEntries,'petrol_revenue'))}</strong></div>
      <div class="summary-row"><span class="summary-label">Diesel Revenue</span><strong>${fmtR(sumField(rangeEntries,'diesel_revenue'))}</strong></div>
      <div class="summary-row"><span class="summary-label">Lubricant Sales</span><strong>${fmtR(T.lube)}</strong></div>
      <div class="summary-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:8px"><span style="font-weight:700">Total Credits</span><strong style="color:var(--petrol)">${fmtR(T.revenue)}</strong></div>
      <div class="summary-row" style="margin-top:8px"><span class="summary-label">Bank Deposits</span><strong>${fmtR(T.bank)}</strong></div>
      <div class="summary-row"><span class="summary-label">Misc Expenses</span><strong>${fmtR(T.misc)}</strong></div>
      <div class="summary-row"><span class="summary-label">Salaries Paid</span><strong>${fmtR(T.salary)}</strong></div>
      <div class="summary-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:8px"><span style="font-weight:700">Total Debits</span><strong style="color:var(--warn)">${fmtR(T.debits)}</strong></div>
      <div style="display:flex;justify-content:space-between;align-items:center;background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:12px 14px;margin-top:10px">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:.06em;color:rgba(255,255,255,.6)">CASH IN HAND</span>
        <span style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:#fbbf24">${fmtR(T.cash)}</span>
      </div>
    </div>

    <!-- Entry streak (month view only) -->
    ${dashRange==='month'?`<div class="chart-card">
      <div class="chart-title" style="margin-bottom:4px">📅 Entry Streak — ${T.entries}/${daysInMonth} days</div>
      ${buildStreakCal(dashViewMonth, allEntries)}
    </div>`:''}

    <!-- Alerts -->
    ${alerts.length>0?`<div class="card" style="border-left:3px solid var(--warn)"><div class="card-title" style="color:var(--warn)">⚠ Variance Alerts</div>${alerts.map(a=>`<div class="alert alert-w" style="margin-bottom:6px">⚠ ${a}</div>`).join('')}</div>`:`<div class="alert alert-ok">✓ No high-variance alerts</div>`}

    <div style="height:8px"></div>
  </div></div>`;
}

// ── Helper: offset month string YYYY-MM by n months ──
function offsetMonth(ym,n){
  const d=new Date(ym+'-01');
  d.setMonth(d.getMonth()+n);
  return d.toISOString().slice(0,7);
}

// ── Build SVG donut chart ──
function buildDonut(segments){
  const total=segments.reduce((s,x)=>s+x.val,0)||1;
  const r=34,cx=40,cy=40,stroke=12;
  const circ=2*Math.PI*r;
  let offset=0;
  const paths=segments.filter(x=>x.val>0).map(x=>{
    const pct=x.val/total;
    const dash=circ*pct;
    const gap=circ*(1-pct);
    const path=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${x.color}" stroke-width="${stroke}" stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}" stroke-dashoffset="${-offset.toFixed(2)}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset+=circ*pct;
    return path;
  }).join('');
  return `<svg width="80" height="80" class="donut-svg"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--bg)" stroke-width="${stroke}"/>${paths}</svg>`;
}

// ── Build streak calendar for a month ──
function buildStreakCal(ym, allEntries){
  const daysInMonth=new Date(parseInt(ym.slice(0,4)),parseInt(ym.slice(5,7)),0).getDate();
  const firstDay=new Date(ym+'-01').getDay(); // 0=Sun
  const td=today();
  const entryDates=new Set(allEntries.filter(e=>e.date.startsWith(ym)).map(e=>e.date));
  const dayLabels=['S','M','T','W','T','F','S'];
  const headers=dayLabels.map(d=>`<div class="cal-day-label">${d}</div>`).join('');
  let cells='';
  for(let i=0;i<firstDay;i++)cells+=`<div class="cal-cell"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const ds=`${ym}-${String(d).padStart(2,'0')}`;
    const has=entryDates.has(ds);
    const isFuture=ds>td;
    const isToday=ds===td;
    const cls=isFuture?'':'has' in {}?'':has?'has':'miss';
    const finalCls=isFuture?'empty':has?'has':'miss';
    cells+=`<div class="cal-cell ${finalCls}${isToday?' today-cell':''}">${d}</div>`;
  }
  return `<div class="cal-grid">${headers}${cells}</div>`;
}

// ─── ADD ENTRY ────────────────────────────────────────────────────────────────
let entryForm=null;
let entryEditId=null;
let entryTab='petrol';

function emptyMachine(){return{opening:'',closing:'',testing:'0'};}

// Auto-populate: get last entry closing values for a pump as opening for new entry
function getPrevClosing(pump_id){
  const prev=S.entries.filter(e=>e.pump_id===pump_id).sort((a,b)=>b.date.localeCompare(a.date))[0];
  if(!prev)return null;
  return{
    petrol_m1:{opening:String(prev.petrol_m1.closing||''),closing:'',testing:'0'},
    petrol_m2:{opening:String(prev.petrol_m2.closing||''),closing:'',testing:'0'},
    petrol_m3:{opening:String(prev.petrol_m3.closing||''),closing:'',testing:'0'},
    petrol_m4:{opening:String(prev.petrol_m4.closing||''),closing:'',testing:'0'},
    diesel_m1:{opening:String(prev.diesel_m1.closing||''),closing:'',testing:'0'},
    diesel_m2:{opening:String(prev.diesel_m2.closing||''),closing:'',testing:'0'},
    diesel_m3:{opening:String(prev.diesel_m3.closing||''),closing:'',testing:'0'},
    diesel_m4:{opening:String(prev.diesel_m4.closing||''),closing:'',testing:'0'},
    petrol_opening_dip_cm:String(prev.petrol_closing_dip_cm||''),
    diesel_opening_dip_cm:String(prev.diesel_closing_dip_cm||''),
  };
}

function emptyEntryForm(pump_id){
  const prev=getPrevClosing(pump_id);
  return{
    pump_id,date:today(),reading_time:'09:00',
    petrol_m1:prev?prev.petrol_m1:emptyMachine(),
    petrol_m2:prev?prev.petrol_m2:emptyMachine(),
    petrol_m3:prev?prev.petrol_m3:emptyMachine(),
    petrol_m4:prev?prev.petrol_m4:emptyMachine(),
    diesel_m1:prev?prev.diesel_m1:emptyMachine(),
    diesel_m2:prev?prev.diesel_m2:emptyMachine(),
    diesel_m3:prev?prev.diesel_m3:emptyMachine(),
    diesel_m4:prev?prev.diesel_m4:emptyMachine(),
    // Dip readings are ALWAYS blank — tank level depends on inward receipts too
    petrol_opening_dip_cm:'',
    petrol_closing_dip_cm:'',
    diesel_opening_dip_cm:'',
    diesel_closing_dip_cm:'',
    petrol_rate:'',diesel_rate:'',lubricant_sales:'',bank_deposit:'',misc_expenses:'',misc_remarks:'',salary_expenses:'',salary_remarks:'',notes:'',
  };
}

// ── KEY FIX: Use event delegation on a stable container, never re-render on input ──
// All inputs write directly to entryForm via data attributes; only the summary displays update.
function bindEntryInputs(){
  // Machine inputs
  document.querySelectorAll('[data-ef]').forEach(inp=>{
    inp.addEventListener('change',function(){
      const path=this.getAttribute('data-ef').split('.');
      if(path.length===2){
        if(!entryForm[path[0]])entryForm[path[0]]={};
        entryForm[path[0]][path[1]]=this.value;
      } else {
        entryForm[path[0]]=this.value;
      }
      updateEntryDisplays();
    });
  });
  // Camera inputs for machine meter reading
  document.querySelectorAll('[data-cam-meter]').forEach(inp=>{
    inp.addEventListener('change',function(){
      const field=this.getAttribute('data-cam-meter');
      if(this.files&&this.files[0])processMeterPhoto(this.files[0],field);
    });
  });
}

function updateEntryDisplays(){
  const calc=calcEntry(entryForm);
  // Update machine sales displays
  ['petrol_m1','petrol_m2','petrol_m3','petrol_m4','diesel_m1','diesel_m2','diesel_m3','diesel_m4'].forEach(k=>{
    const m=calcMachine(entryForm[k]||{opening:0,closing:0,testing:0});
    const el2=document.querySelector(`[data-sales="${k}"]`);
    if(el2)el2.textContent=fmt(m.sales,2)+' L';
  });
  // Update totals
  setDisp('disp-ptot',fmt(calc.petrol_total_meter_sales,2)+' L');
  setDisp('disp-dtot',fmt(calc.diesel_total_meter_sales,2)+' L');
  // Dip displays
  setDisp('disp-pol',fmtL(calc.petrol_opening_dip_liters));
  setDisp('disp-pcl',fmtL(calc.petrol_closing_dip_liters));
  setDisp('disp-dol',fmtL(calc.diesel_opening_dip_liters));
  setDisp('disp-dcl',fmtL(calc.diesel_closing_dip_liters));
  setDisp('disp-pdip',fmtL(calc.petrol_dip_sales));
  setDisp('disp-pvar',fmt(calc.petrol_variance,2)+' L'+(Math.abs(calc.petrol_variance)>50?' ⚠':''));
  setDisp('disp-ddip',fmtL(calc.diesel_dip_sales));
  setDisp('disp-dvar',fmt(calc.diesel_variance,2)+' L'+(Math.abs(calc.diesel_variance)>50?' ⚠':''));
  // Financial displays
  setDisp('disp-prev',fmtR(calc.petrol_revenue));
  setDisp('disp-drev',fmtR(calc.diesel_revenue));
  setDisp('disp-tcred',fmtR(calc.total_credits));
  setDisp('disp-tdeb',fmtR(calc.total_debits));
  setDisp('disp-cash',fmtR(calc.cash_in_hand));
  // Update live formula lines — show actual rate used
  setDisp('disp-petrol-formula',`Petrol: ${fmt(calc.petrol_total_meter_sales,1)} L × ₹${entryForm.petrol_rate||'0'} = ${fmtR(calc.petrol_revenue)}`);
  setDisp('disp-diesel-formula',`Diesel: ${fmt(calc.diesel_total_meter_sales,1)} L × ₹${entryForm.diesel_rate||'0'} = ${fmtR(calc.diesel_revenue)}`);
  // Update cash in hand formula line too
  const cashFml=document.querySelector('#disp-cash')?.parentElement?.querySelector('div:last-child');
  if(cashFml&&cashFml.style){}  // handled by setDisp above
  // Variance colors
  ['disp-pvar','disp-dvar'].forEach(id=>{
    const d=document.getElementById(id);if(!d)return;
    const v=parseFloat(d.textContent)||0;
    d.className=`calc-val ${Math.abs(v)>50?'var-hi':Math.abs(v)>10?'var-lo':'var-ok'}`;
  });
}
function setDisp(id,val){const d=document.getElementById(id);if(d)d.textContent=val;}

// OCR/Photo: capture machine meter reading from photo
async function processMeterPhoto(file, field){
  toast('📷 Reading meter from photo…');
  const url=URL.createObjectURL(file);
  const img=new Image();
  img.onload=()=>{showMeterPhotoModal(url,field);URL.revokeObjectURL(url);};
  img.src=url;
}

function showMeterPhotoModal(imgUrl, field){
  // field format: "petrol_m1.closing" or "diesel_m3.opening"
  const parts=field.split('.');
  const machineKey=parts[0]; // e.g. petrol_m1
  const readingType=parts[1]; // opening or closing
  const machineNum=machineKey.replace(/[a-z]+_m/,'M'); // e.g. M1
  const fuelType=machineKey.startsWith('petrol')?'Petrol':'Diesel';
  const label=`${fuelType} ${machineNum} — ${readingType.charAt(0).toUpperCase()+readingType.slice(1)}`;
  const existing=(entryForm[machineKey]&&entryForm[machineKey][readingType])||'';

  const modalHtml=`<div id="meter-photo-modal" class="modal-backdrop" onclick="if(event.target===this)closeMeterModal()">
    <div class="modal" style="max-height:92dvh">
      <div class="modal-handle"></div>
      <div class="modal-hd"><span class="modal-title">📷 ${label}</span><button class="icon-btn" onclick="closeMeterModal()">✕</button></div>
      <div class="modal-body">
        <img src="${imgUrl}" style="width:100%;border-radius:8px;margin-bottom:12px;max-height:220px;object-fit:contain;background:#111"/>
        <p style="font-size:12px;color:var(--ink3);margin-bottom:10px;line-height:1.5">Read the meter display in the photo and enter the value shown:</p>
        <div class="form-group"><label class="form-label">${label} Reading</label>
          <input class="form-input mono" id="meter-photo-val" type="number" step="0.01" inputmode="decimal" value="${existing}" placeholder="e.g. 48523.12" style="font-size:18px;text-align:center"/>
        </div>
        <div class="btn-row">
          <button class="btn btn-primary" onclick="confirmMeterPhoto('${field}')">Use This Reading ✓</button>
          <button class="btn btn-secondary" onclick="closeMeterModal()">Cancel</button>
        </div>
      </div>
    </div>
  </div>`;
  const wrap=document.createElement('div');wrap.id='meter-modal-wrap';wrap.innerHTML=modalHtml;
  document.body.appendChild(wrap);
  setTimeout(()=>{const inp=document.getElementById('meter-photo-val');if(inp)inp.focus();},100);
}
function closeMeterModal(){const w=document.getElementById('meter-modal-wrap');if(w)w.remove();}
function confirmMeterPhoto(field){
  const inp=document.getElementById('meter-photo-val');
  if(!inp)return;
  const val=inp.value;
  const parts=field.split('.');
  if(!entryForm[parts[0]])entryForm[parts[0]]={};
  entryForm[parts[0]][parts[1]]=val;
  // Update the actual input in the form so it shows the value
  const formInp=document.querySelector(`[data-ef="${field}"]`);
  if(formInp){formInp.value=val;formInp.dispatchEvent(new Event('change'));}
  closeMeterModal();
  toast('Meter reading applied ✓');
}

function renderAddEntry(c){
  const pumpId=currentUser.role==='owner'?(selectedPump==='all'?'jawar':selectedPump):currentUser.pump_id;
  if(!entryForm){
    entryEditId=null;
    entryForm=emptyEntryForm(pumpId);
  }
  const calc=calcEntry(entryForm);
  const hasPrev=getPrevClosing(entryForm.pump_id);

  // Check for duplicate date (only block new entries, not edits)
  const dupWarning=!entryEditId&&S.entries.some(e=>e.pump_id===entryForm.pump_id&&e.date===entryForm.date)
    ?`<div class="alert alert-w" style="margin-bottom:12px">⚠ An entry for <strong>${PUMPS[entryForm.pump_id]}</strong> on <strong>${entryForm.date}</strong> already exists. Edit it from History instead.</div>`:'';

  const tabs=['petrol','diesel','dip','financial'];
  const tabLabels={petrol:'⛽ Petrol',diesel:'🔵 Diesel',dip:'📏 Dip',financial:'💰 Finance'};

  let tabContent='';
  if(entryTab==='petrol'){
    tabContent=
    ['petrol_m1','petrol_m2','petrol_m3','petrol_m4'].map((k,i)=>machineBlock(k,`Petrol M${i+1}`,entryForm[k])).join('')+
    `<div class="card" style="background:#fff8f5;border-color:#ffd4be">
      <div class="summary-row"><span class="summary-label">Total Petrol Sales</span><span id="disp-ptot" class="summary-value" style="color:var(--petrol)">${fmt(calc.petrol_total_meter_sales,2)} L</span></div>
    </div>`;
  } else if(entryTab==='diesel'){
    tabContent=
    ['diesel_m1','diesel_m2','diesel_m3','diesel_m4'].map((k,i)=>machineBlock(k,`Diesel M${i+1}`,entryForm[k])).join('')+
    `<div class="card" style="background:#f5f8ff;border-color:#bed0f1">
      <div class="summary-row"><span class="summary-label">Total Diesel Sales</span><span id="disp-dtot" class="summary-value" style="color:var(--diesel)">${fmt(calc.diesel_total_meter_sales,2)} L</span></div>
    </div>`;
  } else if(entryTab==='dip'){
    tabContent=`
    <div class="card">
      <div class="card-title">Petrol Tank <span class="tag tag-p">CM → Liters</span></div>
      <div style="font-size:11px;color:var(--ink3);background:var(--bg);padding:6px 10px;border-radius:6px;margin-bottom:10px">📏 Enter today's actual dip stick reading. Dip is not auto-filled as inward tanker receipts affect tank levels.</div>
      <div class="form-row" style="margin-bottom:10px">
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Opening (cm)</label>
          <input class="form-input mono" data-ef="petrol_opening_dip_cm" type="number" step="0.1" value="${entryForm.petrol_opening_dip_cm}" inputmode="decimal" placeholder="e.g. 120"/>
          <div class="form-hint" id="disp-pol">${entryForm.petrol_opening_dip_cm?fmtL(calc.petrol_opening_dip_liters):''}</div>
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Closing (cm)</label>
          <input class="form-input mono" data-ef="petrol_closing_dip_cm" type="number" step="0.1" value="${entryForm.petrol_closing_dip_cm}" inputmode="decimal" placeholder="e.g. 105"/>
          <div class="form-hint" id="disp-pcl">${entryForm.petrol_closing_dip_cm?fmtL(calc.petrol_closing_dip_liters):''}</div>
        </div>
      </div>
      <div class="form-row">
        <div><div class="form-label">Dip Sales</div><div class="calc-val" id="disp-pdip">${fmtL(calc.petrol_dip_sales)}</div></div>
        <div><div class="form-label">Variance</div><div class="calc-val ${Math.abs(calc.petrol_variance)>50?'var-hi':Math.abs(calc.petrol_variance)>10?'var-lo':'var-ok'}" id="disp-pvar">${fmt(calc.petrol_variance,2)} L${Math.abs(calc.petrol_variance)>50?' ⚠':''}</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Diesel Tank <span class="tag tag-d">CM → Liters</span></div>
      <div class="form-row" style="margin-bottom:10px">
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Opening (cm)</label>
          <input class="form-input mono" data-ef="diesel_opening_dip_cm" type="number" step="0.1" value="${entryForm.diesel_opening_dip_cm}" inputmode="decimal" placeholder="e.g. 140"/>
          <div class="form-hint" id="disp-dol">${entryForm.diesel_opening_dip_cm?fmtL(calc.diesel_opening_dip_liters):''}</div>
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Closing (cm)</label>
          <input class="form-input mono" data-ef="diesel_closing_dip_cm" type="number" step="0.1" value="${entryForm.diesel_closing_dip_cm}" inputmode="decimal" placeholder="e.g. 118"/>
          <div class="form-hint" id="disp-dcl">${entryForm.diesel_closing_dip_cm?fmtL(calc.diesel_closing_dip_liters):''}</div>
        </div>
      </div>
      <div class="form-row">
        <div><div class="form-label">Dip Sales</div><div class="calc-val" id="disp-ddip">${fmtL(calc.diesel_dip_sales)}</div></div>
        <div><div class="form-label">Variance</div><div class="calc-val ${Math.abs(calc.diesel_variance)>50?'var-hi':Math.abs(calc.diesel_variance)>10?'var-lo':'var-ok'}" id="disp-dvar">${fmt(calc.diesel_variance,2)} L${Math.abs(calc.diesel_variance)>50?' ⚠':''}</div></div>
      </div>
    </div>`;
  } else if(entryTab==='financial'){
    tabContent=`
    <div class="card">
      <div class="card-title">⛽ Fuel Rates</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Petrol Rate (₹/L)</label>
          <input class="form-input mono" data-ef="petrol_rate" type="number" step="0.01" value="${entryForm.petrol_rate}" inputmode="decimal" placeholder="0.00"/></div>
        <div class="form-group"><label class="form-label">Diesel Rate (₹/L)</label>
          <input class="form-input mono" data-ef="diesel_rate" type="number" step="0.01" value="${entryForm.diesel_rate}" inputmode="decimal" placeholder="0.00"/></div>
      </div>
    </div>

    <!-- CREDITS card -->
    <div class="card" style="border-left:3px solid var(--petrol)">
      <div class="card-title" style="color:var(--petrol-dark)">✚ Credits (Money IN)</div>
      <div style="font-size:11px;color:var(--ink3);margin-bottom:10px;line-height:1.8;background:var(--bg);padding:8px 10px;border-radius:6px">
        <span id="disp-petrol-formula">Petrol: ${fmt(calc.petrol_total_meter_sales,1)} L × ₹${entryForm.petrol_rate||'0'} = ${fmtR(calc.petrol_revenue)}</span><br>
        <span id="disp-diesel-formula">Diesel: ${fmt(calc.diesel_total_meter_sales,1)} L × ₹${entryForm.diesel_rate||'0'} = ${fmtR(calc.diesel_revenue)}</span>
      </div>
      <div class="summary-row"><span class="summary-label">Petrol Revenue</span><span class="summary-value" id="disp-prev" style="color:var(--petrol)">${fmtR(calc.petrol_revenue)}</span></div>
      <div class="summary-row"><span class="summary-label">Diesel Revenue</span><span class="summary-value" id="disp-drev" style="color:var(--diesel)">${fmtR(calc.diesel_revenue)}</span></div>
      <div class="summary-row" style="margin-top:6px">
        <span class="summary-label">Lubricant Sales (₹)<br><span style="font-size:10px;color:var(--ink3);font-family:'DM Sans',sans-serif;font-weight:400">Enter amount directly in ₹</span></span>
        <input class="form-input mono" data-ef="lubricant_sales" type="number" step="0.01" value="${entryForm.lubricant_sales}" inputmode="decimal" placeholder="0" style="width:120px;text-align:right"/>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0 4px;border-top:2px solid var(--border);margin-top:8px">
        <span style="font-weight:700;font-size:14px">Total Credits</span>
        <span id="disp-tcred" style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--petrol)">${fmtR(calc.total_credits)}</span>
      </div>
    </div>

    <!-- DEBITS card -->
    <div class="card" style="border-left:3px solid var(--warn)">
      <div class="card-title" style="color:var(--warn)">✖ Debits (Money OUT)</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Bank Deposit (₹)</label>
          <input class="form-input mono" data-ef="bank_deposit" type="number" step="0.01" value="${entryForm.bank_deposit}" inputmode="decimal" placeholder="0"/></div>
        <div class="form-group"><label class="form-label">Misc Expenses (₹)</label>
          <input class="form-input mono" data-ef="misc_expenses" type="number" step="0.01" value="${entryForm.misc_expenses}" inputmode="decimal" placeholder="0"/></div>
      </div>
      <div class="form-group"><label class="form-label">Misc Remarks</label>
        <input class="form-input" data-ef="misc_remarks" value="${entryForm.misc_remarks||''}" placeholder="Optional"/></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Salary Paid (₹)</label>
          <input class="form-input mono" data-ef="salary_expenses" type="number" step="0.01" value="${entryForm.salary_expenses||''}" inputmode="decimal" placeholder="0"/></div>
        <div class="form-group"><label class="form-label">Salary Remarks</label>
          <input class="form-input" data-ef="salary_remarks" value="${entryForm.salary_remarks||''}" placeholder="Employee name etc."/></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0 4px;border-top:2px solid var(--border);margin-top:4px">
        <span style="font-weight:700;font-size:14px">Total Debits</span>
        <span id="disp-tdeb" style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--warn)">${fmtR(calc.total_debits)}</span>
      </div>
      <div style="font-size:10px;color:var(--ink3);margin-top:2px">Bank Deposit + Misc Expenses + Salary Paid</div>
    </div>

    <!-- NET -->
    <div class="card" style="background:var(--ink);color:#fff">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:.05em;opacity:.7">CASH IN HAND</div>
          <div style="font-size:10px;opacity:.5;margin-top:2px">Total Credits − Total Debits</div>
          <div style="font-size:10px;opacity:.5">${fmtR(calc.total_credits)} − ${fmtR(calc.total_debits)}</div>
        </div>
        <span id="disp-cash" style="font-family:'Bebas Neue',sans-serif;font-size:32px;color:#fbbf24">${fmtR(calc.cash_in_hand)}</span>
      </div>
    </div>

    <div class="form-group"><label class="form-label">Notes</label>
      <input class="form-input" data-ef="notes" value="${entryForm.notes||''}" placeholder="Optional"/></div>
    `;
  }

  c.innerHTML=`<div class="scroll"><div class="page">
    ${dupWarning}
    <div class="card" style="margin-bottom:12px">
      <div class="form-row">
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Pump</label>
          ${currentUser.role==='owner'
            ?`<select class="form-input" id="f-pump" onchange="entryForm.pump_id=this.value;entryForm=null;renderPage()">
              ${PUMP_LIST.map(p=>`<option value="${p.id}"${entryForm.pump_id===p.id?' selected':''}>${p.name}</option>`).join('')}
            </select>`
            :`<input class="form-input" value="${PUMPS[entryForm.pump_id]||''}" disabled/>`}
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label">Date</label>
          <input class="form-input" type="date" id="f-date" value="${entryForm.date}" onchange="entryForm.date=this.value;updateDupWarning()"/>
        </div>
      </div>
    </div>
    <div class="tabs">
      ${tabs.map(t=>`<div class="tab${entryTab===t?' active':''}" onclick="entryTab='${t}';renderPage()">${tabLabels[t]}</div>`).join('')}
    </div>
    ${tabContent}
    <div class="btn-row">
      <button class="btn btn-primary" onclick="saveEntry()">${entryEditId?'Update Entry':'Save Entry'}</button>
      ${entryEditId?`<button class="btn btn-secondary" onclick="entryForm=null;entryEditId=null;entryTab='petrol';currentPage='history';renderPage()">Cancel</button>`:''}
    </div>
    <div style="height:16px"></div>
  </div></div>`;

  // Bind after render — no re-render on input, only on change
  bindEntryInputs();
}

function updateDupWarning(){
  // Update duplicate warning live when date changes
  const warn=document.querySelector('.dup-warn');
  const isDup=!entryEditId&&S.entries.some(e=>e.pump_id===entryForm.pump_id&&e.date===entryForm.date);
  if(isDup&&!warn){
    const page=document.querySelector('[data-ef]')?.closest('.page');
    if(page){const d=document.createElement('div');d.className='alert alert-w dup-warn';d.style.marginBottom='12px';d.innerHTML=`⚠ An entry for ${PUMPS[entryForm.pump_id]||entryForm.pump_id} on ${entryForm.date} already exists. Edit from History.`;page.prepend(d);}
  }
}

function machineBlock(key,label,val){
  const o=parseFloat(val.opening)||0,cl=parseFloat(val.closing)||0,t=parseFloat(val.testing)||0;
  const sales=Math.max(0,cl-o-t);
  return `<div class="machine-block">
    <div class="machine-hd">
      <span class="machine-hd-label">${label}</span>
      <span class="machine-sales" data-sales="${key}">${fmt(sales,2)} L</span>
    </div>
    <div class="form-row-3" style="margin-bottom:8px">
      <div class="form-group" style="margin-bottom:0"><label class="form-label">Opening</label>
        <input class="form-input mono" data-ef="${key}.opening" type="number" step="0.01" value="${val.opening}" inputmode="decimal" placeholder="0.00"/></div>
      <div class="form-group" style="margin-bottom:0"><label class="form-label">Closing</label>
        <input class="form-input mono" data-ef="${key}.closing" type="number" step="0.01" value="${val.closing}" inputmode="decimal" placeholder="0.00"/></div>
      <div class="form-group" style="margin-bottom:0"><label class="form-label">Testing</label>
        <input class="form-input mono" data-ef="${key}.testing" type="number" step="0.01" value="${val.testing}" inputmode="decimal" placeholder="0"/></div>
    </div>
    <div style="display:flex;gap:6px">
      <label style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:#fff;border:1.5px dashed var(--border);border-radius:6px;padding:7px 6px;cursor:pointer;font-size:11px;color:var(--ink3);font-weight:600;line-height:1">
        📷 Opening <input type="file" accept="image/*" capture="environment" data-cam-meter="${key}.opening" style="display:none"/>
      </label>
      <label style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:#fff;border:1.5px dashed var(--border);border-radius:6px;padding:7px 6px;cursor:pointer;font-size:11px;color:var(--ink3);font-weight:600;line-height:1">
        📷 Closing <input type="file" accept="image/*" capture="environment" data-cam-meter="${key}.closing" style="display:none"/>
      </label>
    </div>
  </div>`;
}

function saveEntry(){
  if(!entryForm||!entryForm.date||!entryForm.pump_id){toast('Fill required fields','error');return;}
  // Sync any inputs that may not have fired change event yet
  document.querySelectorAll('[data-ef]').forEach(inp=>{
    const path=inp.getAttribute('data-ef').split('.');
    if(path.length===2){if(!entryForm[path[0]])entryForm[path[0]]={};entryForm[path[0]][path[1]]=inp.value;}
    else{entryForm[path[0]]=inp.value;}
  });
  // Block duplicate day entries for same pump (unless editing)
  if(!entryEditId){
    const dup=S.entries.find(e=>e.pump_id===entryForm.pump_id&&e.date===entryForm.date);
    if(dup){toast('Entry for this pump & date already exists. Edit from History.','error');return;}
  }
  const entry={...calcEntry(entryForm),id:entryEditId||`e_${Date.now()}`,created_at:entryEditId?(S.entries.find(e=>e.id===entryEditId)||{}).created_at||new Date().toISOString():new Date().toISOString()};
  if(entryEditId){S.entries=S.entries.map(e=>e.id===entryEditId?entry:e);}
  else{S.entries.push(entry);}
  save(S);
  toast(entryEditId?'Entry updated!':'Entry saved!');
  entryForm=null;entryEditId=null;entryTab='petrol';
  goPage('history');
}

// ─── HISTORY ─────────────────────────────────────────────────────────────────
let histSearch='',histPump='';
function renderHistory(c){
  const entries=S.entries
    .filter(e=>currentUser.role==='owner'||e.pump_id===currentUser.pump_id)
    .filter(e=>!histPump||e.pump_id===histPump)
    .filter(e=>!histSearch||e.date.includes(histSearch))
    .sort((a,b)=>b.date.localeCompare(a.date));

  c.innerHTML=`<div class="scroll"><div class="page">
    <div style="display:flex;gap:8px;margin-bottom:14px">
      ${currentUser.role==='owner'?`<select class="form-input" style="flex:1" onchange="histPump=this.value;renderPage()">
        <option value="">All Pumps</option>
        ${PUMP_LIST.map(p=>`<option value="${p.id}"${histPump===p.id?' selected':''}>${p.name}</option>`).join('')}
      </select>`:''}
      <input class="form-input" style="flex:1" placeholder="Search date…" value="${histSearch}" oninput="histSearch=this.value;renderPage()"/>
    </div>
    ${entries.length===0?`<div class="alert alert-i">No entries found. Tap + to add a daily entry.</div>`:''}
    ${entries.map(e=>`
      <div class="card" style="margin-bottom:10px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div>
            <strong style="font-size:15px">${e.date}</strong>
            ${currentUser.role==='owner'?`<span style="margin-left:8px;font-size:11px"><span class="pump-dot ${e.pump_id}"></span> ${PUMPS[e.pump_id]||e.pump_id}</span>`:''}
          </div>
          <div style="display:flex;gap:6px">
            <button class="icon-btn" onclick="editEntry('${e.id}')">✏</button>
            <button class="icon-btn" style="color:var(--warn)" onclick="delEntry('${e.id}')">🗑</button>
          </div>
        </div>
        <div class="stat-row stat-row-2">
          <div style="background:var(--petrol-light);border-radius:8px;padding:8px 10px">
            <div style="font-size:10px;color:var(--petrol-dark);font-weight:700;text-transform:uppercase;letter-spacing:.07em">Petrol</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:13px;margin-top:2px">${fmt(e.petrol_total_meter_sales,1)} L</div>
            <div class="${Math.abs(e.petrol_variance||0)>50?'var-hi':Math.abs(e.petrol_variance||0)<5?'var-ok':'var-lo'}">var: ${fmt(e.petrol_variance,1)}L</div>
          </div>
          <div style="background:var(--diesel-light);border-radius:8px;padding:8px 10px">
            <div style="font-size:10px;color:var(--diesel-dark);font-weight:700;text-transform:uppercase;letter-spacing:.07em">Diesel</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:13px;margin-top:2px">${fmt(e.diesel_total_meter_sales,1)} L</div>
            <div class="${Math.abs(e.diesel_variance||0)>50?'var-hi':Math.abs(e.diesel_variance||0)<5?'var-ok':'var-lo'}">var: ${fmt(e.diesel_variance,1)}L</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid var(--border);font-size:12px">
          <span style="color:var(--ink3)">Revenue</span><strong>${fmtR(e.total_credits)}</strong>
          <span style="color:var(--ink3)">Cash</span><strong style="color:var(--gold)">${fmtR(e.cash_in_hand)}</strong>
        </div>
      </div>`).join('')}
    <div style="height:16px"></div>
  </div></div>
  <button class="fab" onclick="entryForm=null;entryEditId=null;entryTab='petrol';goPage('add-entry')">➕</button>`;
}

function editEntry(id){
  const e=S.entries.find(x=>x.id===id);if(!e)return;
  // Deep-copy all machine sub-objects so edits don't mutate stored data
  entryForm={
    ...e,
    petrol_m1:{...e.petrol_m1},petrol_m2:{...e.petrol_m2},
    petrol_m3:{...e.petrol_m3},petrol_m4:{...e.petrol_m4},
    diesel_m1:{...e.diesel_m1},diesel_m2:{...e.diesel_m2},
    diesel_m3:{...e.diesel_m3},diesel_m4:{...e.diesel_m4},
  };
  entryEditId=id;entryTab='petrol';
  goPage('add-entry');
}
function delEntry(id){
  if(!confirm('Delete this entry?'))return;
  S.entries=S.entries.filter(e=>e.id!==id);
  save(S);toast('Entry deleted');renderPage();
}

// ─── INWARD RECEIPTS ──────────────────────────────────────────────────────────
let inwardForm=null;
function getInwardForm(){
  const pid=currentUser.role==='owner'?(selectedPump==='all'?'jawar':selectedPump):currentUser.pump_id;
  return{pump_id:pid,date:today(),receipt_time:'00:00',petrol_actual_receipt:'0',petrol_dip_before_cm:'',petrol_dip_after_cm:'',diesel_actual_receipt:'0',diesel_dip_before_cm:'',diesel_dip_after_cm:'',notes:''};
}

function renderInward(c){
  if(!inwardForm)inwardForm=getInwardForm();
  const pB=dipToL(inwardForm.petrol_dip_before_cm),pA=dipToL(inwardForm.petrol_dip_after_cm);
  const dB=dipToL(inwardForm.diesel_dip_before_cm),dA=dipToL(inwardForm.diesel_dip_after_cm);
  const pInc=pA-pB,dInc=dA-dB;
  const pVar=(parseFloat(inwardForm.petrol_actual_receipt)||0)-pInc;
  const dVar=(parseFloat(inwardForm.diesel_actual_receipt)||0)-dInc;

  const receipts=S.inward.filter(r=>currentUser.role==='owner'||r.pump_id===currentUser.pump_id).sort((a,b)=>b.date.localeCompare(a.date));

  c.innerHTML=`<div class="scroll"><div class="page">
    <div class="card">
      <div class="card-title">➕ New Receipt</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Pump</label>
          ${currentUser.role==='owner'
            ?`<select class="form-input" id="iw-pump">
              ${PUMP_LIST.map(p=>`<option value="${p.id}"${inwardForm.pump_id===p.id?' selected':''}>${p.name}</option>`).join('')}
            </select>`
            :`<input class="form-input" value="${PUMPS[inwardForm.pump_id]||''}" disabled/>`}
        </div>
        <div class="form-group"><label class="form-label">Date</label>
          <input class="form-input" type="date" id="iw-date" value="${inwardForm.date}"/></div>
      </div>
      <div class="section-title" style="margin:12px 0 8px">⛽ Petrol</div>
      <div class="form-row-3">
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Received (L)</label>
          <input class="form-input mono" type="number" step="0.01" id="iw-par" value="${inwardForm.petrol_actual_receipt}" inputmode="decimal"/></div>
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Dip Before (cm)</label>
          <input class="form-input mono" type="number" step="0.1" id="iw-pdb" value="${inwardForm.petrol_dip_before_cm}" inputmode="decimal"/>
          <div class="form-hint" id="iw-pdb-h">${pB?fmtL(pB):''}</div></div>
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Dip After (cm)</label>
          <input class="form-input mono" type="number" step="0.1" id="iw-pda" value="${inwardForm.petrol_dip_after_cm}" inputmode="decimal"/>
          <div class="form-hint" id="iw-pda-h">${pA?fmtL(pA):''}</div></div>
      </div>
      <div class="form-row" style="margin-top:8px">
        <div><div class="form-label">Tank Increase</div><div class="calc-val" id="iw-pinc">${fmtL(pInc)}</div></div>
        <div><div class="form-label">Variance</div><div class="calc-val ${Math.abs(pVar)>20?'var-hi':'var-ok'}" id="iw-pvar">${fmt(pVar,2)} L</div></div>
      </div>
      <div class="section-title" style="margin:14px 0 8px">🔵 Diesel</div>
      <div class="form-row-3">
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Received (L)</label>
          <input class="form-input mono" type="number" step="0.01" id="iw-dar" value="${inwardForm.diesel_actual_receipt}" inputmode="decimal"/></div>
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Dip Before (cm)</label>
          <input class="form-input mono" type="number" step="0.1" id="iw-ddb" value="${inwardForm.diesel_dip_before_cm}" inputmode="decimal"/>
          <div class="form-hint" id="iw-ddb-h">${dB?fmtL(dB):''}</div></div>
        <div class="form-group" style="margin-bottom:0"><label class="form-label">Dip After (cm)</label>
          <input class="form-input mono" type="number" step="0.1" id="iw-dda" value="${inwardForm.diesel_dip_after_cm}" inputmode="decimal"/>
          <div class="form-hint" id="iw-dda-h">${dA?fmtL(dA):''}</div></div>
      </div>
      <div class="form-row" style="margin-top:8px">
        <div><div class="form-label">Tank Increase</div><div class="calc-val" id="iw-dinc">${fmtL(dInc)}</div></div>
        <div><div class="form-label">Variance</div><div class="calc-val ${Math.abs(dVar)>20?'var-hi':'var-ok'}" id="iw-dvar">${fmt(dVar,2)} L</div></div>
      </div>
      <div class="form-group" style="margin-top:12px"><label class="form-label">Notes</label>
        <input class="form-input" id="iw-notes" value="${inwardForm.notes||''}" placeholder="Optional"/></div>
      <button class="btn btn-primary" style="margin-top:4px" onclick="saveInward()">Save Receipt</button>
    </div>
    <div class="section-title">📋 Recent Receipts</div>
    ${receipts.length===0?`<div class="alert alert-i">No inward receipts recorded yet.</div>`:''}
    ${receipts.map(r=>`<div class="card" style="margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div>
          <strong>${r.date}</strong>
          ${currentUser.role==='owner'?`<span style="margin-left:8px;font-size:11px"><span class="pump-dot ${r.pump_id}"></span> ${PUMPS[r.pump_id]||r.pump_id}</span>`:''}
        </div>
        <button class="icon-btn" style="color:var(--warn)" onclick="delInward('${r.id}')">🗑</button>
      </div>
      <div class="form-row">
        <div style="background:var(--petrol-light);padding:8px 10px;border-radius:8px;font-size:12px">
          <div style="font-weight:700;color:var(--petrol-dark)">Petrol</div>
          <div>Received: <strong>${fmt(r.petrol_actual_receipt,1)} L</strong></div>
          <div class="${Math.abs(r.petrol_variance||0)>20?'var-hi':'var-ok'}">Var: ${fmt(r.petrol_variance,2)}L</div>
        </div>
        <div style="background:var(--diesel-light);padding:8px 10px;border-radius:8px;font-size:12px">
          <div style="font-weight:700;color:var(--diesel-dark)">Diesel</div>
          <div>Received: <strong>${fmt(r.diesel_actual_receipt,1)} L</strong></div>
          <div class="${Math.abs(r.diesel_variance||0)>20?'var-hi':'var-ok'}">Var: ${fmt(r.diesel_variance,2)}L</div>
        </div>
      </div>
    </div>`).join('')}
    <div style="height:16px"></div>
  </div></div>`;

  // Bind change events (not oninput) — keyboard stays open
  const iwIds=['iw-pump','iw-date','iw-par','iw-pdb','iw-pda','iw-dar','iw-ddb','iw-dda','iw-notes'];
  const iwKeys=['pump_id','date','petrol_actual_receipt','petrol_dip_before_cm','petrol_dip_after_cm','diesel_actual_receipt','diesel_dip_before_cm','diesel_dip_after_cm','notes'];
  iwIds.forEach((id,i)=>{
    const inp=document.getElementById(id);if(!inp)return;
    inp.addEventListener('change',function(){
      inwardForm[iwKeys[i]]=this.value;
      updateInwardDisplays();
    });
  });
}

function updateInwardDisplays(){
  const pB=dipToL(inwardForm.petrol_dip_before_cm),pA=dipToL(inwardForm.petrol_dip_after_cm);
  const dB=dipToL(inwardForm.diesel_dip_before_cm),dA=dipToL(inwardForm.diesel_dip_after_cm);
  const pInc=pA-pB,dInc=dA-dB;
  const pVar=(parseFloat(inwardForm.petrol_actual_receipt)||0)-pInc;
  const dVar=(parseFloat(inwardForm.diesel_actual_receipt)||0)-dInc;
  setDisp('iw-pdb-h',pB?fmtL(pB):'');setDisp('iw-pda-h',pA?fmtL(pA):'');
  setDisp('iw-ddb-h',dB?fmtL(dB):'');setDisp('iw-dda-h',dA?fmtL(dA):'');
  setDisp('iw-pinc',fmtL(pInc));setDisp('iw-dinc',fmtL(dInc));
  setDisp('iw-pvar',fmt(pVar,2)+' L');setDisp('iw-dvar',fmt(dVar,2)+' L');
  const pv=document.getElementById('iw-pvar');if(pv)pv.className=`calc-val ${Math.abs(pVar)>20?'var-hi':'var-ok'}`;
  const dv=document.getElementById('iw-dvar');if(dv)dv.className=`calc-val ${Math.abs(dVar)>20?'var-hi':'var-ok'}`;
}

function saveInward(){
  // Sync any un-blurred inputs
  ['iw-pump','iw-date','iw-par','iw-pdb','iw-pda','iw-dar','iw-ddb','iw-dda','iw-notes'].forEach((id,i)=>{
    const k=['pump_id','date','petrol_actual_receipt','petrol_dip_before_cm','petrol_dip_after_cm','diesel_actual_receipt','diesel_dip_before_cm','diesel_dip_after_cm','notes'][i];
    const inp=document.getElementById(id);if(inp)inwardForm[k]=inp.value;
  });
  const f=inwardForm;
  const pB=dipToL(f.petrol_dip_before_cm),pA=dipToL(f.petrol_dip_after_cm);
  const dB=dipToL(f.diesel_dip_before_cm),dA=dipToL(f.diesel_dip_after_cm);
  const rec={id:`ir_${Date.now()}`,pump_id:f.pump_id,date:f.date,receipt_time:f.receipt_time,
    petrol_actual_receipt:parseFloat(f.petrol_actual_receipt)||0,petrol_dip_before_cm:parseFloat(f.petrol_dip_before_cm)||0,petrol_dip_after_cm:parseFloat(f.petrol_dip_after_cm)||0,petrol_dip_before_liters:pB,petrol_dip_after_liters:pA,petrol_tank_increase:pA-pB,petrol_variance:(parseFloat(f.petrol_actual_receipt)||0)-(pA-pB),
    diesel_actual_receipt:parseFloat(f.diesel_actual_receipt)||0,diesel_dip_before_cm:parseFloat(f.diesel_dip_before_cm)||0,diesel_dip_after_cm:parseFloat(f.diesel_dip_after_cm)||0,diesel_dip_before_liters:dB,diesel_dip_after_liters:dA,diesel_tank_increase:dA-dB,diesel_variance:(parseFloat(f.diesel_actual_receipt)||0)-(dA-dB),
    notes:f.notes||'',created_at:new Date().toISOString()};
  S.inward.push(rec);save(S);
  toast('Receipt saved!');inwardForm=null;renderPage();
}
function delInward(id){if(!confirm('Delete?'))return;S.inward=S.inward.filter(r=>r.id!==id);save(S);toast('Deleted');renderPage();}

// ─── REPORTS ─────────────────────────────────────────────────────────────────
let reportPump='';
let reportView='month';       // 'month' | 'week' | 'day'
let reportMonth=today().slice(0,7);
let reportWeekStart='';       // YYYY-MM-DD of Monday
let reportSelectedDay='';     // YYYY-MM-DD for single day view

function reportGetWeekStart(dateStr){
  const d=new Date(dateStr+'T00:00:00');
  const day=d.getDay();
  const diff=day===0?-6:1-day; // Monday = start
  d.setDate(d.getDate()+diff);
  return d.toISOString().split('T')[0];
}

function renderReports(c){
  const td=today();
  if(!reportWeekStart)reportWeekStart=reportGetWeekStart(td);
  if(!reportSelectedDay)reportSelectedDay=td;

  const baseEntries=S.entries
    .filter(e=>currentUser.role==='owner'||e.pump_id===currentUser.pump_id)
    .filter(e=>!reportPump||e.pump_id===reportPump);

  // Get entries for current view
  let viewEntries=[], viewLabel='';
  if(reportView==='month'){
    viewEntries=baseEntries.filter(e=>e.date.startsWith(reportMonth));
    viewLabel=new Date(reportMonth+'-01').toLocaleDateString('en-IN',{month:'long',year:'numeric'});
  } else if(reportView==='week'){
    const wEnd=new Date(reportWeekStart+'T00:00:00');
    wEnd.setDate(wEnd.getDate()+6);
    const wEndStr=wEnd.toISOString().split('T')[0];
    viewEntries=baseEntries.filter(e=>e.date>=reportWeekStart&&e.date<=wEndStr);
    viewLabel=`${reportWeekStart.slice(5)} – ${wEndStr.slice(5)}`;
  } else {
    viewEntries=baseEntries.filter(e=>e.date===reportSelectedDay);
    viewLabel=new Date(reportSelectedDay+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  }

  // Sort entries newest first for table, oldest first for chart
  const pe=[...viewEntries].sort((a,b)=>b.date.localeCompare(a.date));

  const tot={
    petrol:  sumField(pe,'petrol_total_meter_sales'),
    diesel:  sumField(pe,'diesel_total_meter_sales'),
    pRev:    sumField(pe,'petrol_revenue'),
    dRev:    sumField(pe,'diesel_revenue'),
    lube:    sumField(pe,'lubricant_sales'),
    revenue: sumField(pe,'total_credits'),
    bank:    sumField(pe,'bank_deposit'),
    misc:    sumField(pe,'misc_expenses'),
    salary:  sumField(pe,'salary_expenses'),
    debits:  sumField(pe,'total_debits'),
    cash:    sumField(pe,'cash_in_hand'),
    pVar:    sumField(pe,'petrol_variance'),
    dVar:    sumField(pe,'diesel_variance'),
  };

  // Build bar chart for month/week views
  let chartHtml='';
  if(reportView!=='day'){
    const chartEntries=[...viewEntries].sort((a,b)=>a.date.localeCompare(b.date));
    const maxRev=Math.max(...chartEntries.map(e=>e.total_credits||0),1);
    const bars=chartEntries.map(e=>{
      const rev=parseFloat(e.total_credits)||0;
      const h=rev?Math.max(4,Math.round((rev/maxRev)*64)):0;
      const isToday=e.date===td;
      const dayNum=e.date.slice(8);
      return `<div class="bar-col${isToday?' today':''}" onclick="reportView='day';reportSelectedDay='${e.date}';renderPage()" style="cursor:pointer" title="${e.date}: ${fmtR(rev)}">
        <div style="height:64px;display:flex;align-items:flex-end">
          <div style="width:100%;height:${h}px;background:${isToday?'var(--accent)':'var(--gold)'};border-radius:3px 3px 0 0;opacity:${isToday?1:0.75}"></div>
        </div>
        <div class="bar-label">${dayNum}</div>
      </div>`;
    }).join('');
    chartHtml=`<div class="chart-card">
      <div class="chart-title" style="margin-bottom:4px">📈 Revenue by Day <span style="font-size:10px;font-family:'DM Sans',sans-serif;color:var(--ink3);font-weight:400">(tap bar to view day)</span></div>
      <div class="chart-wrap"><div class="bar-chart-inner">${bars||'<div style="color:var(--ink3);font-size:12px;padding:20px 0">No entries</div>'}</div></div>
    </div>`;
  }

  // Day detail view — show full entry breakdown
  let dayDetailHtml='';
  if(reportView==='day'){
    const dayEntries=pe; // already filtered to selected day
    dayDetailHtml=dayEntries.length===0
      ?`<div class="alert alert-i">No entry recorded for ${reportSelectedDay}.</div>`
      :dayEntries.map(e=>`
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <div class="card-title" style="margin-bottom:0">${PUMPS[e.pump_id]||e.pump_id} Pump</div>
          <span style="font-size:11px;color:var(--ink3)">${e.reading_time||''}</span>
        </div>
        <!-- Machine readings summary -->
        <div style="margin-bottom:10px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ink3);margin-bottom:6px">Machine Readings</div>
          <div class="form-row">
            <div style="background:var(--petrol-light);padding:8px 10px;border-radius:8px">
              <div style="font-size:10px;color:var(--petrol-dark);font-weight:700">⛽ Petrol</div>
              ${[1,2,3,4].map(i=>{const m=e['petrol_m'+i];return m&&m.sales>0?`<div style="font-size:11px;font-family:'JetBrains Mono',monospace;margin-top:2px">M${i}: ${fmt(m.sales,2)} L</div>`:''}).join('')}
              <div style="font-size:12px;font-weight:700;color:var(--petrol);margin-top:4px;border-top:1px solid rgba(0,0,0,.08);padding-top:4px">Total: ${fmt(e.petrol_total_meter_sales,2)} L</div>
            </div>
            <div style="background:var(--diesel-light);padding:8px 10px;border-radius:8px">
              <div style="font-size:10px;color:var(--diesel-dark);font-weight:700">🔵 Diesel</div>
              ${[1,2,3,4].map(i=>{const m=e['diesel_m'+i];return m&&m.sales>0?`<div style="font-size:11px;font-family:'JetBrains Mono',monospace;margin-top:2px">M${i}: ${fmt(m.sales,2)} L</div>`:''}).join('')}
              <div style="font-size:12px;font-weight:700;color:var(--diesel);margin-top:4px;border-top:1px solid rgba(0,0,0,.08);padding-top:4px">Total: ${fmt(e.diesel_total_meter_sales,2)} L</div>
            </div>
          </div>
        </div>
        <!-- Dip readings -->
        <div style="margin-bottom:10px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ink3);margin-bottom:6px">Dip Readings</div>
          <div class="form-row" style="font-size:11px;font-family:'JetBrains Mono',monospace">
            <div style="background:var(--bg);padding:8px 10px;border-radius:8px">
              <div style="font-weight:700;color:var(--petrol-dark);margin-bottom:4px">⛽ Petrol Tank</div>
              <div>Open: ${fmt(e.petrol_opening_dip_cm,1)} cm = ${fmtL(e.petrol_opening_dip_liters)}</div>
              <div>Close: ${fmt(e.petrol_closing_dip_cm,1)} cm = ${fmtL(e.petrol_closing_dip_liters)}</div>
              <div style="margin-top:4px">Dip Sales: ${fmtL(e.petrol_dip_sales)}</div>
              <div class="${Math.abs(e.petrol_variance||0)>50?'var-hi':Math.abs(e.petrol_variance||0)<5?'var-ok':'var-lo'}">Variance: ${fmt(e.petrol_variance,2)} L</div>
            </div>
            <div style="background:var(--bg);padding:8px 10px;border-radius:8px">
              <div style="font-weight:700;color:var(--diesel-dark);margin-bottom:4px">🔵 Diesel Tank</div>
              <div>Open: ${fmt(e.diesel_opening_dip_cm,1)} cm = ${fmtL(e.diesel_opening_dip_liters)}</div>
              <div>Close: ${fmt(e.diesel_closing_dip_cm,1)} cm = ${fmtL(e.diesel_closing_dip_liters)}</div>
              <div style="margin-top:4px">Dip Sales: ${fmtL(e.diesel_dip_sales)}</div>
              <div class="${Math.abs(e.diesel_variance||0)>50?'var-hi':Math.abs(e.diesel_variance||0)<5?'var-ok':'var-lo'}">Variance: ${fmt(e.diesel_variance,2)} L</div>
            </div>
          </div>
        </div>
        <!-- Financials -->
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ink3);margin-bottom:6px">Financials</div>
        <div class="summary-row"><span class="summary-label">Petrol (${fmt(e.petrol_total_meter_sales,1)}L × ₹${fmt(e.petrol_rate,2)})</span><strong style="color:var(--petrol)">${fmtR(e.petrol_revenue)}</strong></div>
        <div class="summary-row"><span class="summary-label">Diesel (${fmt(e.diesel_total_meter_sales,1)}L × ₹${fmt(e.diesel_rate,2)})</span><strong style="color:var(--diesel)">${fmtR(e.diesel_revenue)}</strong></div>
        <div class="summary-row"><span class="summary-label">Lubricant Sales</span><strong>${fmtR(e.lubricant_sales)}</strong></div>
        <div class="summary-row" style="border-top:2px solid var(--border);margin-top:2px;padding-top:8px"><span style="font-weight:700">Total Credits</span><strong style="color:var(--petrol)">${fmtR(e.total_credits)}</strong></div>
        <div class="summary-row"><span class="summary-label">Bank Deposit</span><strong>${fmtR(e.bank_deposit)}</strong></div>
        <div class="summary-row"><span class="summary-label">Misc Expenses ${e.misc_remarks?'('+e.misc_remarks+')':''}</span><strong>${fmtR(e.misc_expenses)}</strong></div>
        ${(e.salary_expenses&&parseFloat(e.salary_expenses)>0)?`<div class="summary-row"><span class="summary-label">Salaries ${e.salary_remarks?'('+e.salary_remarks+')':''}</span><strong>${fmtR(e.salary_expenses)}</strong></div>`:''}
        <div class="summary-row" style="border-top:2px solid var(--border);margin-top:2px;padding-top:8px"><span style="font-weight:700">Total Debits</span><strong style="color:var(--warn)">${fmtR(e.total_debits)}</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;background:var(--gold-light);border-radius:8px;padding:10px 12px;margin-top:8px">
          <span style="font-weight:700">Cash in Hand</span>
          <span style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold)">${fmtR(e.cash_in_hand)}</span>
        </div>
        ${e.notes?`<div style="margin-top:8px;font-size:12px;color:var(--ink3)">📝 ${e.notes}</div>`:''}
      </div>`).join('');
  }

  c.innerHTML=`<div class="scroll"><div class="page">

    <!-- View selector -->
    <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">
      ${currentUser.role==='owner'?`<select class="form-input" style="width:auto;flex-shrink:0" onchange="reportPump=this.value;renderPage()">
        <option value="">All Pumps</option>${PUMP_LIST.map(p=>`<option value="${p.id}"${reportPump===p.id?' selected':''}>${p.name}</option>`).join('')}
      </select>`:''}
      <div style="display:flex;gap:4px;flex-shrink:0">
        ${['month','week','day'].map(v=>`<button class="btn ${reportView===v?'btn-primary':'btn-secondary'} btn-sm" onclick="reportView='${v}';renderPage()">${v==='month'?'Month':''+v==='week'?'Week':'Day'}</button>`).join('')}
      </div>
    </div>

    <!-- Period navigator -->
    <div class="month-nav" style="margin-bottom:14px">
      <button class="month-nav-btn" onclick="${
        reportView==='month'?`reportMonth=offsetMonth(reportMonth,-1);renderPage()`:
        reportView==='week'?`(function(){var d=new Date(reportWeekStart+'T00:00:00');d.setDate(d.getDate()-7);reportWeekStart=d.toISOString().split('T')[0];renderPage()})()`:
        `(function(){var d=new Date(reportSelectedDay+'T00:00:00');d.setDate(d.getDate()-1);reportSelectedDay=d.toISOString().split('T')[0];renderPage()})();`
      }">◀</button>
      <span class="month-nav-title" style="font-size:15px">${viewLabel.toUpperCase()}</span>
      <button class="month-nav-btn" onclick="${
        reportView==='month'?`reportMonth=offsetMonth(reportMonth,1);renderPage()`:
        reportView==='week'?`(function(){var d=new Date(reportWeekStart+'T00:00:00');d.setDate(d.getDate()+7);reportWeekStart=d.toISOString().split('T')[0];renderPage()})()`:
        `(function(){var d=new Date(reportSelectedDay+'T00:00:00');d.setDate(d.getDate()+1);reportSelectedDay=d.toISOString().split('T')[0];renderPage()})();`
      }">▶</button>
    </div>

    <!-- Jump to specific date (day view) -->
    ${reportView==='day'?`<div class="form-group" style="margin-bottom:12px">
      <label class="form-label">Jump to Date</label>
      <input class="form-input" type="date" value="${reportSelectedDay}" onchange="reportSelectedDay=this.value;renderPage()" style="max-width:200px"/>
    </div>`:''}

    <!-- Summary stats -->
    ${pe.length>0||reportView!=='day'?`
    <div class="stat-row stat-row-2">
      <div class="stat-card p"><div class="stat-label">⛽ Petrol</div><div class="stat-value">${fmt(tot.petrol,0)} L</div></div>
      <div class="stat-card d"><div class="stat-label">🔵 Diesel</div><div class="stat-value">${fmt(tot.diesel,0)} L</div></div>
    </div>
    <div class="stat-row stat-row-2">
      <div class="stat-card f"><div class="stat-label">Total Revenue</div><div class="stat-value sm">${fmtR(tot.revenue)}</div></div>
      <div class="stat-card f"><div class="stat-label">Cash in Hand</div><div class="stat-value sm">${fmtR(tot.cash)}</div></div>
    </div>`:''}

    ${chartHtml}

    ${reportView==='day'?dayDetailHtml:`
    <!-- Aggregated financials for month/week -->
    <div class="card" style="border-left:3px solid var(--petrol)">
      <div class="card-title" style="color:var(--petrol-dark)">✚ Credits</div>
      <div class="summary-row"><span class="summary-label">Petrol Revenue</span><strong style="color:var(--petrol)">${fmtR(tot.pRev)}</strong></div>
      <div class="summary-row"><span class="summary-label">Diesel Revenue</span><strong style="color:var(--diesel)">${fmtR(tot.dRev)}</strong></div>
      <div class="summary-row"><span class="summary-label">Lubricant Sales</span><strong>${fmtR(tot.lube)}</strong></div>
      <div class="summary-row" style="border-top:2px solid var(--border);padding-top:8px;margin-top:4px"><span style="font-weight:700">Total Credits</span><strong style="color:var(--petrol);font-size:16px">${fmtR(tot.revenue)}</strong></div>
    </div>
    <div class="card" style="border-left:3px solid var(--warn)">
      <div class="card-title" style="color:var(--warn)">✖ Debits</div>
      <div class="summary-row"><span class="summary-label">Bank Deposits</span><strong>${fmtR(tot.bank)}</strong></div>
      <div class="summary-row"><span class="summary-label">Misc Expenses</span><strong>${fmtR(tot.misc)}</strong></div>
      <div class="summary-row"><span class="summary-label">Salaries Paid</span><strong>${fmtR(tot.salary||0)}</strong></div>
      <div class="summary-row" style="border-top:2px solid var(--border);padding-top:8px;margin-top:4px"><span style="font-weight:700">Total Debits</span><strong style="color:var(--warn);font-size:16px">${fmtR(tot.debits)}</strong></div>
    </div>
    <div class="card" style="background:var(--ink);color:#fff;margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-family:'Bebas Neue',sans-serif;font-size:14px;opacity:.6">CASH IN HAND</div>
        <div style="font-size:10px;opacity:.4">${fmtR(tot.revenue)} − ${fmtR(tot.debits)}</div></div>
        <span style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:#fbbf24">${fmtR(tot.cash)}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🎯 Variance</div>
      <div class="form-row">
        <div><div style="font-size:10px;color:var(--ink3);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">⛽ Petrol</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:${Math.abs(tot.pVar)>200?'var(--warn)':'var(--petrol)'}">${fmt(tot.pVar,1)} L</div></div>
        <div><div style="font-size:10px;color:var(--ink3);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">🔵 Diesel</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:${Math.abs(tot.dVar)>200?'var(--warn)':'var(--diesel)'}">${fmt(tot.dVar,1)} L</div></div>
      </div>
    </div>
    <!-- Day-wise table -->
    <div class="section-title">Entries (${pe.length}) <span style="font-size:11px;font-weight:400;color:var(--ink3)">Tap a date bar above to view full day detail</span></div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Date</th>${currentUser.role==='owner'?'<th>Pump</th>':''}<th>⛽L</th><th>🔵L</th><th>Credits</th><th>Cash</th></tr></thead>
        <tbody>
          ${pe.length===0?`<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--ink3)">No data</td></tr>`:''}
          ${pe.map(e=>`<tr onclick="reportView='day';reportSelectedDay='${e.date}';renderPage()" style="cursor:pointer">
            <td><strong>${e.date.slice(5)}</strong></td>
            ${currentUser.role==='owner'?`<td><span class="pump-dot ${e.pump_id}"></span> ${PUMPS[e.pump_id]}</td>`:''}
            <td class="mono">${fmt(e.petrol_total_meter_sales,0)}</td>
            <td class="mono">${fmt(e.diesel_total_meter_sales,0)}</td>
            <td class="mono" style="color:var(--petrol)">${fmtR(e.total_credits).replace('₹','')}</td>
            <td class="mono" style="color:var(--gold)">${fmtR(e.cash_in_hand).replace('₹','')}</td>
          </tr>`).join('')}
        </tbody>
        ${pe.length>0?`<tfoot><tr style="background:var(--bg);font-weight:700">
          <td colspan="${currentUser.role==='owner'?2:1}" style="font-family:'DM Sans',sans-serif;font-size:11px">TOTAL</td>
          <td class="mono">${fmt(tot.petrol,0)}</td>
          <td class="mono">${fmt(tot.diesel,0)}</td>
          <td class="mono" style="color:var(--petrol)">${fmtR(tot.revenue).replace('₹','')}</td>
          <td class="mono" style="color:var(--gold)">${fmtR(tot.cash).replace('₹','')}</td>
        </tr></tfoot>`:''}
      </table>
    </div>`}

    <div style="height:16px"></div>
  </div></div>`;
}

// ─── BANK ACCOUNT ────────────────────────────────────────────────────────────
// Model:
//   Opening Balance    = manually set once
//   Credits (IN)       = all bank_deposit entries from daily sales
//   Debits (OUT)       = tanker purchase payments to Indian Oil / supplier
//   Current Balance    = Opening Balance + Total Credits − Total Debits
//
// This gives the real-time bank account balance.

function ensureBankAccount(){
  if(!S.bank_account){
    S.bank_account={opening_balance:0,opening_balance_set:false,tanker_purchases:[]};
    save(S);
  }
  if(!S.bank_account.tanker_purchases) S.bank_account.tanker_purchases=[];
}

let bankPurchaseForm={date:today(),pump_id:'',fuel_type:'diesel',amount:'',liters:'',supplier:'Indian Oil',notes:''};
let bankTab='summary'; // summary | deposits | purchases

function renderBank(c){
  ensureBankAccount();
  const ba=S.bank_account;
  const isOwner=currentUser.role==='owner';

  const allDeposits=S.entries.filter(e=>parseFloat(e.bank_deposit)||0).sort((a,b)=>b.date.localeCompare(a.date));
  const totalDeposited=sumField(allDeposits,'bank_deposit');
  const purchases=[...ba.tanker_purchases].sort((a,b)=>b.date.localeCompare(a.date));
  const totalPurchases=purchases.reduce((s,p)=>s+(parseFloat(p.amount)||0),0);
  const openingBal=parseFloat(ba.opening_balance)||0;
  const currentBalance=openingBal+totalDeposited-totalPurchases;

  // Staff only see purchases tab
  const tabs=isOwner?[
    {id:'summary',label:'📊 Summary'},
    {id:'deposits',label:'💰 Deposits'},
    {id:'purchases',label:'🚛 Purchases'},
  ]:[{id:'purchases',label:'🚛 Tanker Purchases'}];

  if(!isOwner&&bankTab!=='purchases')bankTab='purchases';

  let tabContent='';

  if(bankTab==='summary'){
    // Balance card
    const balOk=currentBalance>=0;
    tabContent=`
    <!-- Opening balance setup -->
    ${!ba.opening_balance_set?`<div class="alert alert-i" style="margin-bottom:12px">
      ℹ Set your account opening balance below to get started. This is the amount already in your bank before using this app.
    </div>`:''}
    <div class="card" style="background:var(--ink);color:#fff;margin-bottom:12px">
      <div style="font-size:10px;opacity:.5;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px">Current Bank Balance</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:${balOk?'#4ade80':'#f87171'};line-height:1">${fmtR(currentBalance)}</div>
      <div style="font-size:11px;opacity:.5;margin-top:4px">${balOk?'✓ Positive balance':'⚠ Negative balance — check deposits and purchases'}</div>
    </div>

    <!-- Balance breakup -->
    <div class="card" style="margin-bottom:12px">
      <div class="card-title">💵 Balance Breakup</div>
      <div class="summary-row">
        <span class="summary-label">Opening Balance</span>
        <strong style="color:var(--ink)">${fmtR(openingBal)}</strong>
      </div>
      <div class="summary-row">
        <span class="summary-label" style="color:var(--petrol)">+ Total Bank Deposits</span>
        <strong style="color:var(--petrol)">${fmtR(totalDeposited)}</strong>
      </div>
      <div class="summary-row">
        <span class="summary-label" style="color:var(--warn)">− Tanker Purchases Paid</span>
        <strong style="color:var(--warn)">${fmtR(totalPurchases)}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:2px solid var(--border);padding-top:10px;margin-top:6px">
        <span style="font-weight:700;font-size:15px">Current Balance</span>
        <span style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:${balOk?'var(--petrol)':'var(--warn)'}">${fmtR(currentBalance)}</span>
      </div>
    </div>

    <!-- Opening balance input -->
    <div class="card" style="margin-bottom:12px">
      <div class="card-title">🏦 Account Opening Balance ${ba.opening_balance_set?'<span class="tag tag-p">Set</span>':''}</div>
      <p style="font-size:12px;color:var(--ink3);margin-bottom:12px;line-height:1.6">Enter the balance already in your bank account before you started tracking. This is set once and can be updated anytime.</p>
      <div class="form-group">
        <label class="form-label">Opening Balance (₹)</label>
        <input class="form-input mono" type="number" step="0.01" id="ob-amount" value="${ba.opening_balance||''}" inputmode="decimal" placeholder="e.g. 150000"/>
      </div>
      <button class="btn btn-primary" onclick="saveOpeningBalance()">Save Opening Balance</button>
    </div>

    <!-- Quick stats this month -->
    <div class="card">
      <div class="card-title">📅 This Month</div>
      ${(()=>{
        const ms=today().slice(0,7);
        const mDep=allDeposits.filter(e=>e.date.startsWith(ms));
        const mPur=purchases.filter(p=>p.date.startsWith(ms));
        const mDepTot=sumField(mDep,'bank_deposit');
        const mPurTot=mPur.reduce((s,p)=>s+(parseFloat(p.amount)||0),0);
        return `
        <div class="summary-row"><span class="summary-label">Deposits credited</span><strong style="color:var(--petrol)">${fmtR(mDepTot)}</strong></div>
        <div class="summary-row"><span class="summary-label">Tanker payments made</span><strong style="color:var(--warn)">${fmtR(mPurTot)}</strong></div>
        <div class="summary-row"><span class="summary-label">Net this month</span><strong style="color:${mDepTot-mPurTot>=0?'var(--petrol)':'var(--warn)'}">${fmtR(mDepTot-mPurTot)}</strong></div>
        <div class="summary-row"><span class="summary-label">Deposit entries</span><strong>${mDep.length}</strong></div>
        <div class="summary-row"><span class="summary-label">Purchase entries</span><strong>${mPur.length}</strong></div>`;
      })()}
    </div>`;

  } else if(bankTab==='deposits'){
    tabContent=`
    <div class="alert alert-i" style="margin-bottom:12px">
      💰 These are bank deposits from your daily entries. To add a deposit, go to <strong>Add Entry → Finance</strong> and fill in "Bank Deposit".
    </div>
    <div class="stat-row stat-row-2">
      <div class="stat-card p"><div class="stat-label">Total Deposited</div><div class="stat-value sm">${fmtR(totalDeposited)}</div></div>
      <div class="stat-card p"><div class="stat-label">No. of Entries</div><div class="stat-value">${allDeposits.length}</div></div>
    </div>
    <div class="section-title">All Deposit Entries</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Date</th><th>Pump</th><th>Amount</th><th>Cash in Hand</th></tr></thead>
        <tbody>
          ${allDeposits.length===0?`<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--ink3)">No deposits yet</td></tr>`:''}
          ${allDeposits.map(e=>`<tr>
            <td><strong>${e.date.slice(5)}</strong></td>
            <td><span class="pump-dot ${e.pump_id}"></span> ${PUMPS[e.pump_id]||e.pump_id}</td>
            <td class="mono" style="color:var(--petrol)">${fmtR(e.bank_deposit)}</td>
            <td class="mono">${fmtR(e.cash_in_hand)}</td>
          </tr>`).join('')}
        </tbody>
        ${allDeposits.length>0?`<tfoot><tr style="background:var(--bg);font-weight:700">
          <td colspan="2" style="font-family:'DM Sans',sans-serif;font-size:11px">TOTAL</td>
          <td class="mono" style="color:var(--petrol)">${fmtR(totalDeposited)}</td>
          <td></td>
        </tr></tfoot>`:''}
      </table>
    </div>`;

  } else if(bankTab==='purchases'){
    tabContent=`
    <!-- Add new purchase -->
    <div class="card" style="margin-bottom:12px">
      <div class="card-title">➕ Record Tanker Purchase</div>
      <p style="font-size:12px;color:var(--ink3);margin-bottom:12px;line-height:1.6">Record a payment made to Indian Oil or fuel supplier for tanker purchase. This is debited from your bank account.</p>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Date</label>
          <input class="form-input" type="date" id="bp-date" value="${bankPurchaseForm.date}"/></div>
        <div class="form-group"><label class="form-label">Pump</label>
          <select class="form-input" id="bp-pump">
            <option value="">All Pumps</option>
            ${PUMP_LIST.map(p=>`<option value="${p.id}"${bankPurchaseForm.pump_id===p.id?' selected':''}>${p.name}</option>`).join('')}
          </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Fuel Type</label>
          <select class="form-input" id="bp-fuel">
            <option value="petrol"${bankPurchaseForm.fuel_type==='petrol'?' selected':''}>⛽ Petrol</option>
            <option value="diesel"${bankPurchaseForm.fuel_type==='diesel'?' selected':''}>🔵 Diesel</option>
            <option value="mixed"${bankPurchaseForm.fuel_type==='mixed'?' selected':''}>Mixed</option>
          </select></div>
        <div class="form-group"><label class="form-label">Supplier</label>
          <input class="form-input" id="bp-supplier" value="${bankPurchaseForm.supplier||'Indian Oil'}" placeholder="Indian Oil"/></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Amount Paid (₹)</label>
          <input class="form-input mono" type="number" step="0.01" id="bp-amount" value="${bankPurchaseForm.amount}" inputmode="decimal" placeholder="0.00"/></div>
        <div class="form-group"><label class="form-label">Quantity (Litres)</label>
          <input class="form-input mono" type="number" step="1" id="bp-liters" value="${bankPurchaseForm.liters}" inputmode="decimal" placeholder="e.g. 10000"/></div>
      </div>
      <div class="form-group"><label class="form-label">Notes / Invoice No.</label>
        <input class="form-input" id="bp-notes" value="${bankPurchaseForm.notes||''}" placeholder="e.g. Invoice #1234"/></div>
      <button class="btn btn-primary" onclick="saveBankPurchase()">Record Purchase (Debit)</button>
    </div>

    <!-- Purchases list -->
    <div class="stat-row stat-row-2">
      <div class="stat-card w"><div class="stat-label">Total Paid</div><div class="stat-value sm">${fmtR(totalPurchases)}</div></div>
      <div class="stat-card w"><div class="stat-label">No. of Purchases</div><div class="stat-value">${purchases.length}</div></div>
    </div>
    <div class="section-title">Purchase History</div>
    ${purchases.length===0?`<div class="alert alert-i">No tanker purchases recorded yet.</div>`:''}
    ${purchases.map(p=>`<div class="card" style="margin-bottom:10px;border-left:3px solid var(--warn)">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
        <div>
          <div style="font-weight:600;font-size:14px">${p.date}</div>
          <div style="font-size:11px;color:var(--ink3);margin-top:2px">
            ${p.pump_id?`<span class="pump-dot ${p.pump_id}"></span> ${PUMPS[p.pump_id]||p.pump_id} · `:''}
            ${p.fuel_type==='petrol'?'⛽ Petrol':p.fuel_type==='diesel'?'🔵 Diesel':'⛽🔵 Mixed'}
            ${p.liters?` · ${fmt(p.liters,0)} L`:''}
          </div>
          ${p.supplier?`<div style="font-size:11px;color:var(--ink3)">${p.supplier}</div>`:''}
          ${p.notes?`<div style="font-size:11px;color:var(--ink3)">📝 ${p.notes}</div>`:''}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--warn)">${fmtR(p.amount)}</span>
          <button class="icon-btn btn-sm" style="color:var(--warn);font-size:12px" onclick="delBankPurchase('${p.id}')">🗑</button>
        </div>
      </div>
    </div>`).join('')}`;
  }

  c.innerHTML=`<div class="scroll"><div class="page">
    <!-- Tabs -->
    <div class="tabs" style="margin-bottom:16px">
      ${tabs.map(t=>`<div class="tab${bankTab===t.id?' active':''}" onclick="bankTab='${t.id}';renderPage()">${t.label}</div>`).join('')}
    </div>
    ${tabContent}
    <div style="height:16px"></div>
  </div></div>`;
}

function saveOpeningBalance(){
  ensureBankAccount();
  const amt=parseFloat(document.getElementById('ob-amount')?.value)||0;
  S.bank_account.opening_balance=amt;
  S.bank_account.opening_balance_set=true;
  save(S);
  toast('Opening balance saved');
  renderPage();
}

function saveBankPurchase(){
  ensureBankAccount();
  const date=document.getElementById('bp-date')?.value||today();
  const pump_id=document.getElementById('bp-pump')?.value||'';
  const fuel_type=document.getElementById('bp-fuel')?.value||'diesel';
  const supplier=document.getElementById('bp-supplier')?.value||'Indian Oil';
  const amount=parseFloat(document.getElementById('bp-amount')?.value)||0;
  const liters=parseFloat(document.getElementById('bp-liters')?.value)||0;
  const notes=document.getElementById('bp-notes')?.value||'';

  if(!amount){toast('Enter the amount paid','error');return;}

  const purchase={id:`bp_${Date.now()}`,date,pump_id,fuel_type,supplier,amount,liters,notes,created_at:new Date().toISOString()};
  S.bank_account.tanker_purchases.push(purchase);
  save(S);
  bankPurchaseForm={date:today(),pump_id:'',fuel_type:'diesel',amount:'',liters:'',supplier:'Indian Oil',notes:''};
  toast('Purchase recorded ✓');
  renderPage();
}

function delBankPurchase(id){
  if(!confirm('Delete this purchase record?'))return;
  ensureBankAccount();
  S.bank_account.tanker_purchases=S.bank_account.tanker_purchases.filter(p=>p.id!==id);
  save(S);
  toast('Deleted');
  renderPage();
}

// ─── USERS ────────────────────────────────────────────────────────────────────
let editingUser=null;
// ─── GITHUB AUTO-DEPLOY ──────────────────────────────────────────────────────
const GH_USER  = 'Vishvendratomar18';
const GH_REPO  = 'tomar-fuels';
const GH_FILE  = 'index.html';
const GH_TOKEN = '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';
const GH_API   = 'https://api.github.com';

async function ghDeploy(){
  const newHtml = document.getElementById('gh-new-html')?.value?.trim();
  if(!newHtml){toast('Paste the new index.html code first','error');return;}
  if(!newHtml.includes('<!DOCTYPE html')){toast('That does not look like valid HTML','error');return;}

  const statusEl = document.getElementById('gh-deploy-status');
  function setStatus(msg,color){if(statusEl){statusEl.textContent=msg;statusEl.style.color=color||'var(--ink3)';}}

  try{
    setStatus('⏳ Getting current file from GitHub…','#fbbf24');

    // Step 1: get current file SHA
    const infoRes = await fetch(`${GH_API}/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}`,{
      headers:{'Authorization':'token '+GH_TOKEN,'Accept':'application/vnd.github.v3+json'}
    });
    if(!infoRes.ok) throw new Error('Could not read current file: '+infoRes.status);
    const info = await infoRes.json();
    const sha = info.sha;
    setStatus('⏳ Uploading new version…','#fbbf24');

    // Step 2: encode new content as base64
    const encoded = btoa(unescape(encodeURIComponent(newHtml)));

    // Step 3: push update
    const putRes = await fetch(`${GH_API}/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}`,{
      method:'PUT',
      headers:{'Authorization':'token '+GH_TOKEN,'Accept':'application/vnd.github.v3+json','Content-Type':'application/json'},
      body: JSON.stringify({
        message:'App update via Tomar Fuels deploy — '+new Date().toLocaleString('en-IN'),
        content: encoded,
        sha: sha
      })
    });
    if(!putRes.ok){
      const err = await putRes.json();
      throw new Error(err.message||putRes.status);
    }

    setStatus('✓ Deployed! GitHub updated. Page will refresh in 5s…','#4ade80');
    document.getElementById('gh-new-html').value='';
    toast('✓ Deployed to GitHub successfully!');
    // If Cloudflare Pages is connected it auto-deploys too
    setTimeout(()=>location.reload(),5000);

  }catch(e){
    setStatus('✗ Error: '+e.message,'#f87171');
    toast('Deploy failed: '+e.message,'error');
  }
}

function renderUsers(c){
  c.innerHTML=`<div class="scroll"><div class="page">

    <!-- GitHub Auto-Deploy -->
    <div class="card" style="margin-bottom:14px;border-left:3px solid #6366f1">
      <div class="card-title" style="color:#6366f1">🚀 Deploy App Update</div>
      <p style="font-size:12px;color:var(--ink3);line-height:1.6;margin-bottom:12px">
        When you get a new version of the app from the developer, paste the full HTML code below and tap Deploy. It pushes directly to GitHub and goes live in ~30 seconds.
      </p>
      <div class="form-group" style="margin-bottom:10px">
        <label class="form-label">Paste new index.html code here</label>
        <textarea id="gh-new-html" style="width:100%;height:100px;padding:10px;border:1.5px solid var(--border);border-radius:var(--r-sm);font-family:'JetBrains Mono',monospace;font-size:11px;resize:vertical;background:var(--bg);color:var(--ink);outline:none" placeholder="Paste the full HTML code starting with <!DOCTYPE html>…"></textarea>

```
  </div>
  <div id="gh-deploy-status" style="font-size:12px;min-height:18px;margin-bottom:8px;font-weight:600"></div>
  <div style="display:flex;gap:8px">
    <button class="btn btn-primary" style="background:#6366f1;border-color:#6366f1;flex:1" onclick="ghDeploy()">🚀 Deploy to GitHub</button>
    <button class="btn btn-secondary btn-sm" style="width:auto" onclick="document.getElementById('gh-new-html').value='';document.getElementById('gh-deploy-status').textContent=''">Clear</button>
  </div>
  <div style="margin-top:10px;font-size:10px;color:var(--ink3);line-height:1.7">
    Repo: <strong>github.com/${GH_USER}/${GH_REPO}</strong><br>
    After deploy: GitHub updates → Cloudflare/GitHub Pages auto-refreshes in ~30s
  </div>
</div>

<!-- Firebase sync status -->
<div class="card" style="margin-bottom:14px;border-left:3px solid ${syncStatus==='synced'?'#4ade80':syncStatus==='syncing'?'#fbbf24':'#f87171'}">
  <div class="card-title" style="color:${syncStatus==='synced'?'#4ade80':syncStatus==='syncing'?'#f59e0b':'#f87171'}">
    ${syncStatus==='synced'?'☁ Cloud Sync — Active':syncStatus==='syncing'?'☁ Connecting to Cloud…':'⚠ Cloud Sync Error'}
  </div>
  <div style="font-size:12px;color:var(--ink3);line-height:1.8">
    Firebase project: <strong style="color:var(--ink)">${FB_CONFIG.projectId}</strong><br>
    Status: <strong style="color:${syncStatus==='synced'?'#4ade80':syncStatus==='syncing'?'#fbbf24':'#f87171'}">${syncStatus==='synced'?'✓ All devices in sync':syncStatus==='syncing'?'⏳ Connecting…':'✗ Not syncing'}</strong>
  </div>
  <div id="sync-error-detail" style="font-size:11px;color:#f87171;margin-top:4px;word-break:break-all"></div>
  ${syncStatus==='error'?`
  <div style="margin-top:10px;padding:10px;background:#fff8f0;border-radius:8px;font-size:11px;color:#92400e;line-height:1.8">
    <strong>To fix sync errors:</strong><br>
    1. Go to <strong>console.firebase.google.com</strong><br>
    2. Open project <strong>tomar-fuels-74178</strong><br>
    3. Click <strong>Firestore Database → Rules</strong><br>
    4. Replace all rules with:<br>
    <code style="background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;display:block;margin:6px 0;font-size:11px">rules_version = '2';<br>service cloud.firestore {<br>&nbsp;&nbsp;match /databases/{db}/documents {<br>&nbsp;&nbsp;&nbsp;&nbsp;match /{doc=**} {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow read, write: if true;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}</code>
    5. Click <strong>Publish</strong><br>
    6. Come back and tap Retry below
  </div>`:''}
  <div style="display:flex;gap:8px;margin-top:10px">
    <button class="btn btn-secondary btn-sm" style="width:auto" onclick="forceSyncNow()">🔄 Retry Sync</button>
    <button class="btn btn-secondary btn-sm" style="width:auto" onclick="testFirebaseConnection()">🔍 Test Connection</button>
  </div>
</div>

<!-- Data export/import -->
<div class="card" style="margin-bottom:14px">
  <div class="card-title">📦 Data Backup</div>
  <p style="font-size:12px;color:var(--ink3);line-height:1.6;margin-bottom:10px">Export all data as a backup file. Import to restore.</p>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <button class="btn btn-secondary btn-sm" onclick="exportData()" style="width:auto">⬇ Export Backup</button>
    <label class="btn btn-secondary btn-sm" style="width:auto;cursor:pointer">⬆ Import Backup<input type="file" accept=".json" onchange="importData(this)" style="display:none"/></label>
  </div>
</div>

<div class="alert alert-i" style="margin-bottom:14px">📱 Manage staff accounts below. Owner password reset available on the login screen.</div>
${S.users.map(u=>`<div class="card" style="margin-bottom:10px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div>
      <div style="font-weight:600;font-size:15px">${u.username}</div>
      <div style="margin-top:4px;display:flex;gap:6px;align-items:center">
        <span class="badge badge-${u.role}">${u.role}</span>
        <span style="font-size:12px;color:var(--ink3)">${u.pump_id?PUMPS[u.pump_id]||u.pump_id:'All Pumps'}</span>
      </div>
    </div>
    <button class="btn btn-secondary btn-sm" onclick="openUserEdit('${u.id}')">✏ Edit</button>
  </div>
</div>`).join('')}
<div style="height:16px"></div>
```

  </div></div>
  ${editingUser?`<div class="modal-backdrop" onclick="if(event.target===this){editingUser=null;renderPage()}">
    <div class="modal">
      <div class="modal-handle"></div>
      <div class="modal-hd"><span class="modal-title">Edit — ${editingUser.username}</span>
        <button class="icon-btn" onclick="editingUser=null;renderPage()">✕</button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">New Username</label>
          <input class="form-input" id="eu-un" value="${editingUser.username}" autocapitalize="none"/></div>
        <div class="form-group"><label class="form-label">New Password</label>
          <input class="form-input" id="eu-pw" type="password" placeholder="Leave blank to keep current"/></div>
        <div class="btn-row">
          <button class="btn btn-primary" onclick="saveUserEdit()">Save</button>
          <button class="btn btn-secondary" onclick="editingUser=null;renderPage()">Cancel</button>
        </div>
      </div>
    </div>
  </div>`:''}`;
}
function openUserEdit(id){editingUser=S.users.find(u=>u.id===id);renderPage();}
function saveUserEdit(){
  const un=(el('eu-un').value||'').trim();
  const pw=el('eu-pw').value||'';
  if(!un){toast('Username cannot be empty','error');return;}
  const existing=S.users.find(u=>u.username===un&&u.id!==editingUser.id);
  if(existing){toast('Username already taken','error');return;}
  if(pw&&pw.length<6){toast('Password must be at least 6 characters','error');return;}
  S.users=S.users.map(u=>u.id===editingUser.id?{...u,username:un,password:pw||u.password}:u);
  save(S);toast('User updated');editingUser=null;renderPage();
}

function saveFBConfig(){
const apiKey=(document.getElementById(‘fb-apikey’)?.value||’’).trim();
const projectId=(document.getElementById(‘fb-projectid’)?.value||’’).trim();
const authDomain=(document.getElementById(‘fb-authdomain’)?.value||’’).trim();
if(!apiKey||!projectId){toast(‘API Key and Project ID are required’,‘error’);return;}
// Store config in localStorage so it persists
localStorage.setItem(‘fb_config’,JSON.stringify({apiKey,projectId,authDomain:authDomain||`${projectId}.firebaseapp.com`}));
toast(‘Firebase config saved! Reloading…’);
setTimeout(()=>location.reload(),1200);
}

function forceSyncNow(){
if(db){
// Already have db — just push current data and restart listener
save(S);
toast(‘Sync triggered ✓’);
} else {
// Re-init Firebase completely
syncStatus=‘syncing’;updateSyncIndicator();
try{
if(firebase.apps.length){
firebase.app().delete().then(function(){initFirebase();}).catch(function(){initFirebase();});
} else {
initFirebase();
}
}catch(e){initFirebase();}
toast(‘Reconnecting to Firebase…’);
}
setTimeout(renderPage, 1500);
}

async function testFirebaseConnection(){
const resultEl = document.getElementById(‘sync-error-detail’);
if(resultEl) resultEl.textContent = ‘🔍 Testing connection…’;
try{
if(typeof firebase===‘undefined’) throw new Error(‘Firebase SDK not loaded’);
if(!db) throw new Error(‘Firestore not initialized — Firebase may have failed to load’);
// Try a simple read
const testRef = db.collection(‘tomar_data’).doc(‘main’);
await testRef.get();
if(resultEl) resultEl.textContent = ‘✓ Connection OK — Firestore is reachable’;
if(resultEl) resultEl.style.color = ‘#4ade80’;
toast(‘Connection test passed ✓’);
}catch(e){
const msg = ‘Connection failed: ’ + e.code + ’ — ’ + e.message;
if(resultEl){resultEl.textContent = msg; resultEl.style.color=’#f87171’;}
toast(msg, ‘error’);
console.error(‘Firebase test:’, e);
}
}

function exportData(){
const blob=new Blob([JSON.stringify(S,null,2)],{type:‘application/json’});
const url=URL.createObjectURL(blob);
const a=document.createElement(‘a’);
a.href=url;
a.download=`tomar-fuels-backup-${today()}.json`;
a.click();
URL.revokeObjectURL(url);
toast(‘Data exported ✓’);
}

function importData(input){
const file=input.files[0];if(!file)return;
const reader=new FileReader();
reader.onload=function(e){
try{
const data=JSON.parse(e.target.result);
if(!data.entries||!data.users){toast(‘Invalid backup file’,‘error’);return;}
if(!confirm(`Import ${data.entries.length} entries from backup? This will MERGE with existing data (not replace).`))return;
// Merge: add entries that don’t already exist by id
const existingIds=new Set(S.entries.map(e=>e.id));
const newEntries=data.entries.filter(e=>!existingIds.has(e.id));
S.entries=[…S.entries,…newEntries];
const existingInwardIds=new Set(S.inward.map(r=>r.id));
const newInward=(data.inward||[]).filter(r=>!existingInwardIds.has(r.id));
S.inward=[…S.inward,…newInward];
// Merge bank purchases
if(data.bank_account?.tanker_purchases){
const existingBPIds=new Set(S.bank_account.tanker_purchases.map(p=>p.id));
const newBP=data.bank_account.tanker_purchases.filter(p=>!existingBPIds.has(p.id));
S.bank_account.tanker_purchases=[…S.bank_account.tanker_purchases,…newBP];
}
save(S);
toast(`Imported ${newEntries.length} new entries ✓`);
renderPage();
}catch(err){toast(‘Could not read file’,‘error’);}
};
reader.readAsText(file);
input.value=’’;
}

// ─── SERVICE WORKER ──────────────────────────────────────────────────────────
if(‘serviceWorker’ in navigator){
try{
var SW=“const C=‘tf-v3’;self.addEventListener(‘install’,e=>{self.skipWaiting();});self.addEventListener(‘activate’,e=>{self.clients.claim();});self.addEventListener(‘fetch’,e=>{e.respondWith(caches.match(e.request).then(r=>{if(r)return r;return fetch(e.request).then(res=>{if(res&&res.ok){var cl=res.clone();caches.open(C).then(c=>c.put(e.request,cl));}return res;}).catch(()=>caches.match(e.request));}));});”;
var b=new Blob([SW],{type:‘text/javascript’});
navigator.serviceWorker.register(URL.createObjectURL(b)).catch(function(){});
}catch(e){}
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
render();

// Firebase SDK may take time to load on mobile — retry until it’s ready
(function tryInitFirebase(attempt){
if(typeof firebase!==‘undefined’&&typeof firebase.initializeApp!==‘undefined’){
initFirebase();
} else if(attempt<8){
// Not loaded yet — retry with increasing delay (500ms, 1s, 1.5s…)
setTimeout(function(){tryInitFirebase(attempt+1);}, attempt*500+500);
}
})(1);
</script>

</body>
</html>

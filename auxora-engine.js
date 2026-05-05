// Auxora UAE — Chat Engine
(function(){
var curLang='EN', curPer='worker', chatHist=[], loading=false, curTopic='all';
var apiCfg = {provider:'local', key:''};

var GREET = {
  student: "Student in UAE? I'll help you open a zero-balance account in 10 min, education loan, any banking issue.",
  worker: "Worker in UAE? WPS salary issues, sending money home cheaply, opening accounts, knowing your rights.",
  employee: "Corporate employee? Home loans, AECB score, personal loans, credit cards, DIFC Wills.",
  business: "Business owner? Current accounts, MBR Fund loans, LC, BG, WPS setup — replacing your bank liaison officer.",
  family: "Family in UAE? Joint accounts, home loans, deceased procedures, DIFC Wills — in any language.",
  corporate: "Company banking? Treasury, LC, BG, WPS payroll, forex, AML/KYC — replacing your bank liaison officer."
};

var SERVICES = [
  {ico:'\u{1F3E6}',name:'Account services',desc:'Open, close, KYC, nominations',topic:'accounts',q:'I want to open a bank account in UAE'},
  {ico:'\u{1F4B8}',name:'Transfers & WPS',desc:'Salary, remittance, SWIFT',topic:'transfers',q:'My WPS salary was not received this month'},
  {ico:'\u{1F4B3}',name:'Cards & digital',desc:'Debit, credit, block, replace',topic:'accounts',q:'My card is stuck at delivery'},
  {ico:'\u{1F393}',name:'Student banking',desc:'Student account, education loan',topic:'accounts',q:'I am a student and want to open a bank account'},
  {ico:'\u{1F4B0}',name:'Loans & finance',desc:'Home, car, SME, personal, gold',topic:'loans',q:'I want to apply for a home loan in UAE'},
  {ico:'\u{1F54A}',name:'Deceased procedures',desc:'Claim, freeze, Will, succession',topic:'deceased',q:'My father passed away and has money in UAE bank'},
  {ico:'\u{1F4DD}',name:'Cheque services',desc:'PDC, bounce, stop, verification',topic:'cheques',q:'A cheque I issued has bounced'},
  {ico:'\u{1F504}',name:'Refunds & disputes',desc:'Merchant refund, fraud, ATM',topic:'complaints',q:'My merchant refund has not been received'},
  {ico:'\u{1F3E2}',name:'Business banking',desc:'Current account, LC, BG, OD',topic:'business',q:'I need a current account for my business'},
  {ico:'\u2696',name:'Complaints',desc:'CBUAE, fraud, ecrime, MOHRE',topic:'complaints',q:'My bank is not resolving my complaint'},
  {ico:'\u{1F30D}',name:'Remittance',desc:'Send money home cheaply',topic:'remittance',q:'How do I send money home cheaply from UAE?'},
  {ico:'\u{1F33F}',name:'UAE schemes',desc:'MBR Fund, DIFC Wills, digital a/c',topic:'accounts',q:'What UAE banking schemes are available?'}
];

var PERSONAS = [
  {id:'student',ico:'\u{1F393}',label:'Student'},
  {id:'worker',ico:'\u{1F477}',label:'Worker'},
  {id:'employee',ico:'\u{1F4BC}',label:'Employee'},
  {id:'business',ico:'\u{1F3EA}',label:'Business'},
  {id:'family',ico:'\u{1F46A}',label:'Family'},
  {id:'corporate',ico:'\u{1F3E2}',label:'Corporate'}
];

var TOPICS = ['all','accounts','transfers','loans','deceased','cheques','complaints','business','remittance'];

var SUGGESTS = {
  student:['Open zero-balance account','Education loan','Send money home'],
  worker:['WPS salary not received','Send money home cheaply','Open bank account','Lost my card'],
  employee:['Apply for home loan','AECB score low','Credit card interest','Merchant refund'],
  business:['Open current account','MBR Fund loan','Bounced cheque','Letter of Credit'],
  family:['Claim deceased savings','DIFC Will explained','Joint account','Card not delivered'],
  corporate:['WPS payroll setup','Letter of Credit','Bank Guarantee','CBUAE complaint']
};

var SYSPROMPT = 'You are Auxora UAE \u2014 the active bridge between every person in the UAE and the UAE banking system. You perform banking work: collect info, generate checklists, verify documents, compose emails, write complaints, fill forms, escalate to regulators.\n\nBRIDGE FUNCTIONS: 1.IDENTIFY 2.COLLECT 3.VERIFY 4.PRODUCE 5.GUIDE 6.ESCALATE\n\nPERSONA: STUDENT=friendly,zero-balance accounts(Liv,Neo,FAB,Hayyak). WORKER=simple language,WPS,MOHRE 800-60,exchange houses(AED15 vs bank AED150). BUSINESS=trade license first,MBR Fund AED3M. FAMILY=warm,DIFC Wills for non-Muslims.\n\nKEY RULES: Bounced cheque=CRIMINAL. WPS non-payment=CRIMINAL(MOHRE 800-60). CBUAE 50% debt ratio. DIFC Will critical. AECB 300-900. Exchange houses beat banks for remittance. Credit card 36-42% interest.\n\nFORMAT: Empathy first. EMERGENCY=bold IMMEDIATE ACTION. Numbered steps. Always offer next output. Never let user give up.';

// ---- DOM SETUP ----
function init() {
  // Build personas
  var pRow = document.getElementById('pRow');
  PERSONAS.forEach(function(p) {
    var btn = document.createElement('button');
    btn.className = 'persona-btn' + (p.id === curPer ? ' active' : '');
    btn.innerHTML = '<span class="ico">' + p.ico + '</span>' + p.label;
    btn.onclick = function() { setPersona(p.id, btn); };
    pRow.appendChild(btn);
  });

  // Build topics
  var qT = document.getElementById('qTopics');
  TOPICS.forEach(function(t) {
    var btn = document.createElement('button');
    btn.className = 'topic-btn' + (t === 'all' ? ' active' : '');
    btn.textContent = t.charAt(0).toUpperCase() + t.slice(1);
    btn.onclick = function() { setTopic(t, btn); };
    qT.appendChild(btn);
  });

  // Language buttons
  var langs = [['lEN','EN'],['lAR','AR'],['lHI','HI'],['lUR','UR'],['lML','ML']];
  langs.forEach(function(pair) {
    var el = document.getElementById(pair[0]);
    if (el) el.onclick = function() { setLang(pair[1], el); };
  });

  // Search
  var si = document.getElementById('searchIn');
  si.addEventListener('input', function() { onSearch(si.value); });
  si.addEventListener('keydown', function(e) { if (e.key === 'Enter') openChat(si.value); });

  // Back
  document.getElementById('backBtn').onclick = goHome;

  // Chat input
  var chatIn = document.getElementById('chatIn');
  chatIn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(); }
  });
  chatIn.addEventListener('input', function() {
    chatIn.style.height = 'auto';
    chatIn.style.height = Math.min(chatIn.scrollHeight, 120) + 'px';
  });

  // Send button
  document.getElementById('sendBtn').onclick = doSend;

  // API controls
  document.getElementById('apiProv').addEventListener('change', function() {
    var v = this.value;
    document.getElementById('apiKey').style.display = v === 'local' ? 'none' : 'block';
  });
  document.getElementById('apiSv').onclick = saveApiCfg;

  renderGrid('all');
  loadApiCfg();
}

// ---- LANGUAGE ----
function setLang(lang, el) {
  curLang = lang;
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
  el.classList.add('active');
  updGreeting();
}

// ---- PERSONA ----
function setPersona(p, el) {
  curPer = p;
  var btns = document.querySelectorAll('.persona-btn');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
  el.classList.add('active');
  updGreeting();
}

function updGreeting() {
  document.getElementById('greetCard').textContent = GREET[curPer] || GREET.worker;
}

// ---- TOPIC ----
function setTopic(t, el) {
  curTopic = t;
  var btns = document.querySelectorAll('.topic-btn');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
  el.classList.add('active');
  renderGrid(t);
}

// ---- GRID ----
function renderGrid(topic) {
  var filtered = topic === 'all' ? SERVICES : SERVICES.filter(function(s) { return s.topic === topic; });
  var grid = document.getElementById('sGrid');
  grid.innerHTML = '';
  filtered.forEach(function(s) {
    var card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = '<span class="s-ico">' + s.ico + '</span><div class="s-name">' + s.name + '</div><div class="s-desc">' + s.desc + '</div>';
    card.onclick = function() { openChat(s.q); };
    grid.appendChild(card);
  });
}

function onSearch(val) {
  if (!val || val.length < 2) { renderGrid(curTopic); return; }
  var v = val.toLowerCase();
  var filtered = SERVICES.filter(function(s) {
    return s.name.toLowerCase().indexOf(v) >= 0 || s.desc.toLowerCase().indexOf(v) >= 0 || s.q.toLowerCase().indexOf(v) >= 0;
  });
  var grid = document.getElementById('sGrid');
  grid.innerHTML = '';
  filtered.forEach(function(s) {
    var card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = '<span class="s-ico">' + s.ico + '</span><div class="s-name">' + s.name + '</div><div class="s-desc">' + s.desc + '</div>';
    card.onclick = function() { openChat(s.q); };
    grid.appendChild(card);
  });
}

// ---- NAVIGATION ----
function openChat(question) {
  document.getElementById('homeScreen').style.display = 'none';
  var cs = document.getElementById('chatScreen');
  cs.style.display = 'flex';
  cs.style.flexDirection = 'column';

  // Suggestions
  var sug = SUGGESTS[curPer] || SUGGESTS.worker;
  var sugRow = document.getElementById('sugRow');
  sugRow.innerHTML = '';
  sug.forEach(function(s) {
    var btn = document.createElement('button');
    btn.className = 'suggest-chip';
    btn.textContent = s;
    btn.onclick = function() { sendMsg(s); };
    sugRow.appendChild(btn);
  });

  chatHist = [];
  document.getElementById('msgs').innerHTML = '';
  addAI('Hello! I am Auxora \u2014 your UAE banking bridge. \u{1F3E6}\n\n' + (GREET[curPer] || GREET.worker) + '\n\nI generate checklists, draft emails, write complaints, and escalate when banks fail. What is your situation?');

  if (question) {
    setTimeout(function() { sendMsg(question); }, 400);
  } else {
    document.getElementById('chatIn').focus();
  }
}
window.openChat = openChat;

function goHome() {
  document.getElementById('homeScreen').style.display = 'flex';
  document.getElementById('chatScreen').style.display = 'none';
  chatHist = [];
}

// ---- SEND ----
function doSend() {
  var inp = document.getElementById('chatIn');
  var t = inp.value.trim();
  if (!t || loading) return;
  inp.value = '';
  inp.style.height = 'auto';
  sendMsg(t);
}

function sendMsg(text) {
  if (loading) return;
  addUser(text);
  chatHist.push({role:'user', content:text});
  var tid = addTyping();
  loading = true;
  document.getElementById('sendBtn').disabled = true;

  var prov = apiCfg.provider;
  if (prov === 'gemini' && apiCfg.key) {
    callGemini(text, tid);
  } else if (prov === 'openai' && apiCfg.key) {
    callOpenAI(text, tid);
  } else {
    var reply = localReply(text);
    removeTyping(tid);
    addAI(reply);
    chatHist.push({role:'assistant', content:reply});
    loading = false;
    document.getElementById('sendBtn').disabled = false;
    document.getElementById('chatIn').focus();
  }
}
window.sendMsg = sendMsg;

function callGemini(text, tid) {
  var body = {
    system_instruction: {parts:[{text: SYSPROMPT + '\nPersona:' + curPer + ' Lang:' + curLang}]},
    contents: chatHist.map(function(m) { return {role: m.role === 'assistant' ? 'model' : 'user', parts:[{text:m.content}]}; }),
    generationConfig: {temperature:0.7, maxOutputTokens:2048}
  };
  fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiCfg.key, {
    method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)
  }).then(function(r){return r.json();}).then(function(d){
    removeTyping(tid);
    var reply = (d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts && d.candidates[0].content.parts[0]) ? d.candidates[0].content.parts[0].text : 'No response received.';
    addAI(reply); chatHist.push({role:'assistant',content:reply});
    loading=false; document.getElementById('sendBtn').disabled=false; document.getElementById('chatIn').focus();
  }).catch(function(err){
    removeTyping(tid); addAI('Error: ' + err.message);
    loading=false; document.getElementById('sendBtn').disabled=false;
  });
}

function callOpenAI(text, tid) {
  var msgs = [{role:'system', content:SYSPROMPT+'\nPersona:'+curPer+' Lang:'+curLang}];
  chatHist.forEach(function(m){msgs.push({role:m.role,content:m.content});});
  fetch('https://api.openai.com/v1/chat/completions', {
    method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiCfg.key},
    body:JSON.stringify({model:'gpt-4o-mini',messages:msgs,temperature:0.7,max_tokens:2048})
  }).then(function(r){return r.json();}).then(function(d){
    removeTyping(tid);
    var reply = (d.choices && d.choices[0] && d.choices[0].message) ? d.choices[0].message.content : 'No response.';
    addAI(reply); chatHist.push({role:'assistant',content:reply});
    loading=false; document.getElementById('sendBtn').disabled=false; document.getElementById('chatIn').focus();
  }).catch(function(err){
    removeTyping(tid); addAI('Error: ' + err.message);
    loading=false; document.getElementById('sendBtn').disabled=false;
  });
}

// ---- LOCAL REPLY ENGINE ----
function localReply(text) {
  var m = text.toLowerCase();
  if (/fraud|unauthorized|stolen|hacked|scam/.test(m)) return '\u{1F6A8} **IMMEDIATE ACTION \u2014 FRAUD:**\n\n1. **Call bank hotline NOW:**\n\u2022 Emirates NBD: **600 54 0000**\n\u2022 ADCB: **600 50 2030**\n\u2022 FAB: **600 52 5500**\n\u2022 Mashreq: **04 424 4444**\n\n2. Say: "Block my card and account immediately."\n3. File at **ecrime.ae**\n4. Visit branch with Emirates ID\n\n\u26A0 **3-day zero-liability window** \u2014 report within 3 days.\n\nShall I **draft your dispute email**?';
  if (/salary|wps|not paid|wages/.test(m)) return '\u{1F6A8} **WPS non-payment is CRIMINAL.**\n\n1. Download **MOHRE UAE** app\n2. Call **MOHRE 800-60** (free, 24/7)\n3. File online at **mohre.gov.ae**\n\n**Your rights:**\n\u2705 Visa protected during complaint\n\u2705 Employer gets **blacklisted**\n\u2705 Criminal charges apply\n\u2705 Payment within **48 hours**\n\nShall I **generate your MOHRE complaint**?\n\n\u{1F4DE} MOHRE: **800-60**';
  if (/cheque|bounce/.test(m)) return '\u{1F6A8} **URGENT \u2014 Bounced cheque is CRIMINAL in UAE.**\n\n\u2022 Travel ban within **24 hours**\n\u2022 Jail up to **3 years**\n\n**DO THIS NOW:**\n1. Contact payee \u2014 offer immediate bank transfer\n2. Send settlement message via WhatsApp\n3. If police case filed \u2014 lawyer can still negotiate\n\nShall I **generate a settlement offer**?';
  if (/deceased|passed away|died/.test(m)) return '\u{1F54A} **I am very sorry for your loss.**\n\n**IMMEDIATE:** Call bank hotline to **freeze the account** today.\n\n**Next steps:**\n\u2022 **DIFC Will exists** \u2192 DIFC Courts \u2192 15-30 days\n\u2022 **No Will (Muslim)** \u2192 Sharia Court \u2192 30-90 days\n\u2022 **No Will (non-Muslim)** \u2192 UAE Courts \u2192 60-180 days\n\n**Documents:**\n\u2705 Death certificate (MOFA attested)\n\u2705 Heir Emirates IDs + passports\n\u2705 Will copy (if exists)\n\n\u{1F4A1} **Non-Muslim?** Register a DIFC Will at difcwills.com (AED 900-2,500).';
  if (/remit|send money|transfer home/.test(m)) return '\u{1F4B8} **Exchange houses are ALWAYS cheaper:**\n\n\u2022 Al Ansari Exchange: AED 15-25, same day\n\u2022 Lulu Exchange: AED 15-25, same day\n\u2022 Bank SWIFT: AED 75-150, 1-3 days\n\n**Save AED 1,200-1,800/year!**\n\n1. Download **Al Ansari** or **LuLu Money** app\n2. Register with Emirates ID\n3. Add beneficiary\n4. Transfer \u2014 arrives same day';
  if (/account|open|bank/.test(m)) return '\u{1F3E6} **Opening a bank account:**\n\n**Zero-balance digital (no branch):**\n\u2705 Liv by Emirates NBD \u2014 10 min\n\u2705 Mashreq Neo \u2014 Apple/Google Pay\n\u2705 ADCB Hayyak \u2014 simplest app\n\u2705 FAB Mobile\n\n**You need:** Emirates ID only\n\n**Business?** Trade license + MOA/AOA + UBO declaration\n\nWhich type? I will generate your **document checklist**.';
  if (/loan|mortgage/.test(m)) return '\u{1F4B0} **UAE Loan Guide:**\n\n**CBUAE Rule:** Total EMIs max **50% of salary**.\n\n\u2022 **Home loan:** 80% LTV, 20% down, AECB 650+\n\u2022 **Personal loan:** 6-20% flat rate\n\u2022 **Car loan:** Up to 80% LTV\n\u2022 **SME:** MBR Fund \u2014 AED 3M, no collateral!\n\nWhat is your monthly salary? I will calculate your **max eligible amount**.';
  if (/complaint|cbuae|not resolv/.test(m)) return '\u{1F4DD} **Escalation Ladder:**\n\n**Level 1** \u2192 Bank (30 days)\n**Level 2** \u2192 CBUAE \u2014 consumerprotection.centralbank.ae\n**Level 3** \u2192 ecrime.ae (if fraud)\n**Level 4** \u2192 MOHRE 800-60 (if salary)\n**Level 5** \u2192 UAE Courts (Small Claims under AED 50K)\n\nShall I **draft your CBUAE complaint letter**?';
  if (/card lost|lost my card|block card/.test(m)) return '\u{1F6A8} **BLOCK YOUR CARD NOW:**\n\n\u2022 Emirates NBD: **600 54 0000**\n\u2022 ADCB: **600 50 2030**\n\u2022 FAB: **600 52 5500**\n\nSay: "Block my card immediately."\n\nThen:\n1. File police report (if stolen)\n2. Report at **ecrime.ae** (if used)\n3. Request **virtual card** for immediate use\n4. New card: 3-5 working days';
  if (/credit card|interest/.test(m)) return '\u{1F4B3} **Credit Card Warning:**\n\n\u2022 Pay **full balance** = 0% interest \u2705\n\u2022 Pay **minimum only** = **36-42% annual** \u274C\n\u2022 AED 10,000 at minimum = **7+ years** to clear\n\n**Rule:** If you cannot pay in full, you cannot afford it.';
  if (/wrong transfer|wrong account/.test(m)) return '\u{1F6A8} **IMMEDIATE \u2014 Call bank NOW!**\n\nRecovery is highest in first **2 hours**.\n\nSay: "Erroneous transfer. I need immediate recall."\n\nShall I **generate your recall request email**?';
  if (/difc|will|expat.*will/.test(m)) return '\u{1F4DC} **DIFC Will \u2014 Critical for Non-Muslims:**\n\nWithout it, **UAE law governs ALL your UAE assets** at death.\n\n\u2022 Register at **difcwills.com**\n\u2022 Cost: AED 900-2,500\n\u2022 Takes one afternoon\n\u2022 Covers: bank accounts, property, investments\n\n**Most important thing an expat in UAE can do.**';
  if (/score|aecb/.test(m)) return '\u{1F4CA} **AECB Credit Score:**\n\n\u2022 750-900: Excellent\n\u2022 700-749: Good\n\u2022 600-699: Fair\n\u2022 300-599: Poor\n\nCheck free at **aecb.gov.ae**\n\n**Improve in 6 months:**\n1. Pay ALL EMIs on time\n2. Pay credit card in FULL\n3. Keep usage below 30%\n4. Do not apply for new credit';
  return 'I am **Auxora** \u2014 your UAE banking bridge.\n\n\u2022 \u{1F3E6} Accounts \u2022 \u{1F4B0} Loans \u2022 \u{1F4BC} WPS Salary\n\u2022 \u{1F6A8} Fraud \u2022 \u26A0 Cheques \u2022 \u{1F54A} Deceased\n\u2022 \u{1F4B8} Remittance \u2022 \u{1F4DD} Complaints \u2022 \u{1F4B3} Cards\n\u2022 \u{1F4CA} AECB Score \u2022 \u{1F4DC} DIFC Will\n\nTell me your situation or go back and choose a service.';
}

// ---- BUBBLE HELPERS ----
function addUser(t) {
  var m = document.getElementById('msgs');
  var d = document.createElement('div');
  d.className = 'msg user';
  d.innerHTML = '<div class="avatar u">U</div><div class="bubble u">' + esc(t) + '</div>';
  m.appendChild(d);
  scrollB();
}

function addAI(t) {
  var m = document.getElementById('msgs');
  var d = document.createElement('div');
  d.className = 'msg';
  d.innerHTML = '<div class="avatar ai">A</div><div class="bubble ai">' + fmt(t) + '</div>';
  m.appendChild(d);
  scrollB();
}

function addTyping() {
  var m = document.getElementById('msgs');
  var id = 'typ' + Date.now();
  var d = document.createElement('div');
  d.className = 'msg';
  d.id = id;
  d.innerHTML = '<div class="avatar ai">A</div><div class="bubble ai"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  m.appendChild(d);
  scrollB();
  return id;
}

function removeTyping(id) {
  var el = document.getElementById(id);
  if (el) el.remove();
}

function scrollB() {
  var m = document.getElementById('msgs');
  m.scrollTop = m.scrollHeight;
}

function esc(t) {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmt(t) {
  var h = esc(t);
  h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/^(\d+)\.\s+(.+)$/gm, function(_, n, c) {
    return '<div class="step-item"><div class="step-num">' + n + '</div><span>' + c + '</span></div>';
  });
  h = h.replace(/^[\u2022\-]\s+(.+)$/gm, '<div style="display:flex;gap:8px;margin:3px 0;color:var(--text2);font-size:13px"><span style="color:var(--blue);">\u2022</span><span>$1</span></div>');
  h = h.replace(/\n\n/g, '<br><br>');
  h = h.replace(/\n/g, '<br>');
  return h;
}

// ---- API CONFIG ----
function saveApiCfg() {
  apiCfg.provider = document.getElementById('apiProv').value;
  apiCfg.key = document.getElementById('apiKey').value.trim();
  try { localStorage.setItem('auxora_api', JSON.stringify(apiCfg)); } catch(e) {}
  var b = document.getElementById('apiSv');
  b.textContent = 'Saved!';
  setTimeout(function() { b.textContent = 'Save'; }, 2000);
}

function loadApiCfg() {
  try {
    var s = localStorage.getItem('auxora_api');
    if (s) {
      apiCfg = JSON.parse(s);
      var sel = document.getElementById('apiProv');
      var key = document.getElementById('apiKey');
      if (sel) sel.value = apiCfg.provider;
      if (key) {
        key.value = apiCfg.key || '';
        key.style.display = apiCfg.provider === 'local' ? 'none' : 'block';
      }
    }
  } catch(e) {}
}

// ---- BOOT ----
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();

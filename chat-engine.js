/* ═══ AUXORA CHAT ENGINE — Dark UI ═══ */
let curLang='EN',curPer='worker',curTopic='all',isLoading=false;
const G={
  student:"Student in UAE? I'll help you open a zero-balance account in 10 min, apply for education loan, handle any banking issue.",
  worker:"Worker in UAE? I'll help with WPS salary issues, sending money home cheaply, opening accounts, knowing your rights.",
  employee:"Corporate employee? I guide you on home loans, AECB score, personal loans, credit cards, DIFC Wills.",
  business:"Business owner? I handle current accounts, MBR Fund loans, LC, BG, WPS setup — replacing your bank liaison officer.",
  family:"Family in UAE? I help with joint accounts, home loans, deceased procedures, DIFC Wills — in any language.",
  corporate:"Company banking? I cover treasury, LC, BG, WPS payroll, forex, AML/KYC — replacing your bank liaison officer."
};
const SV=[
  {ico:'🏦',name:'Account services',desc:'Open, close, KYC',topic:'accounts',q:'I want to open a bank account in UAE'},
  {ico:'💸',name:'Transfers & WPS',desc:'Salary, remittance',topic:'transfers',q:'My WPS salary was not received'},
  {ico:'💳',name:'Cards & digital',desc:'Block, replace, virtual',topic:'accounts',q:'My card is stuck at delivery'},
  {ico:'🎓',name:'Student banking',desc:'Student account, loans',topic:'accounts',q:'I am a student and want to open a bank account'},
  {ico:'💰',name:'Loans & finance',desc:'Home, car, SME, personal',topic:'loans',q:'I want to apply for a home loan in UAE'},
  {ico:'🕊️',name:'Deceased procedures',desc:'Claim, freeze, Will',topic:'deceased',q:'My father passed away and has money in UAE bank'},
  {ico:'📝',name:'Cheque services',desc:'PDC, bounce, stop',topic:'cheques',q:'A cheque I issued has bounced'},
  {ico:'🔄',name:'Refunds & disputes',desc:'Merchant, fraud, ATM',topic:'complaints',q:'My merchant refund has not been received'},
  {ico:'🏢',name:'Business banking',desc:'Current account, LC, BG',topic:'business',q:'I need a current account for my business'},
  {ico:'⚖️',name:'Complaints',desc:'CBUAE, ecrime, MOHRE',topic:'complaints',q:'My bank is not resolving my complaint'},
  {ico:'🌍',name:'Remittance',desc:'Send money home cheaply',topic:'remittance',q:'How do I send money home cheaply from UAE?'},
  {ico:'🌿',name:'UAE schemes',desc:'MBR Fund, DIFC Wills',topic:'accounts',q:'What UAE banking schemes are available?'}
];
const SUG={
  student:['Open zero-balance account','Education loan','Send money home'],
  worker:['WPS salary not received','Send money home cheaply','Open bank account','Lost my card'],
  employee:['Apply for home loan','AECB score low','Credit card interest','Merchant refund'],
  business:['Open current account','MBR Fund loan','Bounced cheque','Letter of Credit'],
  family:['Claim deceased savings','DIFC Will explained','Joint account','Card not delivered'],
  corporate:['WPS payroll setup','Letter of Credit','Bank Guarantee','CBUAE complaint']
};

function setLang(l,el){curLang=l;document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');updGreet()}
function setPer(p,el){curPer=p;document.querySelectorAll('.persona-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');updGreet()}
function updGreet(){document.getElementById('greetingCard').textContent=G[curPer]||G.worker}

function renderGrid(t){
  const f=t==='all'?SV:SV.filter(s=>s.topic===t);
  document.getElementById('serviceGrid').innerHTML=f.map(s=>`<div class="service-card" onclick="startChat('${s.q.replace(/'/g,"\\'")}')"><span class="s-ico">${s.ico}</span><div class="s-name">${s.name}</div><div class="s-desc">${s.desc}</div></div>`).join('');
}
function filterTopic(t,el){curTopic=t;document.querySelectorAll('.topic-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');renderGrid(t)}
function onSearch(v){
  if(!v||v.length<2){renderGrid(curTopic);return}
  const lv=v.toLowerCase();
  const f=SV.filter(s=>s.name.toLowerCase().includes(lv)||s.desc.toLowerCase().includes(lv)||s.q.toLowerCase().includes(lv));
  document.getElementById('serviceGrid').innerHTML=f.map(s=>`<div class="service-card" onclick="startChat('${s.q.replace(/'/g,"\\'")}')"><span class="s-ico">${s.ico}</span><div class="s-name">${s.name}</div><div class="s-desc">${s.desc}</div></div>`).join('');
}

function startChat(question){
  document.getElementById('homeScreen').style.display='none';
  const cs=document.getElementById('chatScreen');cs.style.display='flex';cs.style.flexDirection='column';
  const sug=SUG[curPer]||SUG.worker;
  document.getElementById('suggestRow').innerHTML=sug.map(s=>`<button class="suggest-chip" onclick="sendMsg('${s.replace(/'/g,"\\'")}')">${s}</button>`).join('');
  chatHistory=[];document.getElementById('messages').innerHTML='';
  addAI(`Hello! I'm Auxora — your UAE banking bridge. 🏦\n\n${G[curPer]}\n\nI don't just explain — I generate checklists, draft emails, write complaints, and escalate when banks fail. What's your situation?`);
  if(question)setTimeout(()=>sendMsg(question),400);
  else document.getElementById('chatInput').focus();
}
function goHome(){document.getElementById('homeScreen').style.display='flex';document.getElementById('chatScreen').style.display='none';chatHistory=[]}

function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px'}
function send(){const i=document.getElementById('chatInput'),t=i.value.trim();if(!t||isLoading)return;i.value='';i.style.height='auto';sendMsg(t)}

async function sendMsg(text){
  if(isLoading)return;
  addUser(text);chatHistory.push({role:'user',content:text});
  const tid=addTyp();isLoading=true;document.getElementById('sendBtn').disabled=true;
  try{
    let reply;
    if(apiConfig.provider==='gemini'&&apiConfig.key){
      reply=await callGemini(text);
    }else if(apiConfig.provider==='openai'&&apiConfig.key){
      reply=await callOpenAI(text);
    }else{
      reply=getLocalResponse(text);
    }
    remTyp(tid);addAI(reply);chatHistory.push({role:'assistant',content:reply});
  }catch(err){
    remTyp(tid);addAI('⚠️ Error: '+err.message+'\n\nCheck your API key or switch to Built-in mode.');
  }
  isLoading=false;document.getElementById('sendBtn').disabled=false;document.getElementById('chatInput').focus();
}

function addUser(t){const m=document.getElementById('messages'),d=document.createElement('div');d.className='msg user';d.innerHTML=`<div class="avatar u">U</div><div class="bubble u">${esc(t)}</div>`;m.appendChild(d);sb()}
function addAI(t){const m=document.getElementById('messages'),d=document.createElement('div');d.className='msg';d.innerHTML=`<div class="avatar ai">A</div><div class="bubble ai">${fmt(t)}</div>`;m.appendChild(d);sb()}
function addTyp(){const m=document.getElementById('messages'),id='t-'+Date.now(),d=document.createElement('div');d.className='msg';d.id=id;d.innerHTML=`<div class="avatar ai">A</div><div class="bubble ai"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;m.appendChild(d);sb();return id}
function remTyp(id){const e=document.getElementById(id);if(e)e.remove()}
function sb(){const m=document.getElementById('messages');m.scrollTop=m.scrollHeight}
function esc(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function fmt(t){
  let h=esc(t);
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  h=h.replace(/^(\d+)\.\s+(.+)$/gm,(_,n,c)=>`<div class="step-item"><div class="step-num">${n}</div><span>${c}</span></div>`);
  h=h.replace(/^[-•]\s+(.+)$/gm,'<div style="display:flex;gap:8px;margin:3px 0;color:var(--text2);font-size:13px"><span style="color:var(--blue)">•</span><span>$1</span></div>');
  h=h.replace(/\n\n/g,'<br><br>');h=h.replace(/\n/g,'<br>');
  return h;
}

function onProviderChange(){const p=document.getElementById('apiProvider').value;document.getElementById('apiKey').style.display=p==='local'?'none':'block'}
function saveApi(){
  apiConfig.provider=document.getElementById('apiProvider').value;
  apiConfig.key=document.getElementById('apiKey').value.trim();
  apiConfig.connected=apiConfig.provider==='local'||apiConfig.key.length>10;
  localStorage.setItem('auxora_api',JSON.stringify(apiConfig));
  const b=document.getElementById('apiSave');b.textContent='✓ OK';b.classList.add('ok');
  setTimeout(()=>{b.textContent='✓';b.classList.remove('ok')},2000);
}

// Init
renderGrid('all');updGreet();loadApiConfig();

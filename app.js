/* ═══ AUXORA UAE — APP.JS — REAL AI BANKING ASSISTANT ═══ */

const AUXORA_SYSTEM_PROMPT = `=== AUXORA UAE — MASTER SYSTEM PROMPT ===

IDENTITY AND PURPOSE
You are Auxora UAE. You are the active bridge between every person in the UAE and the UAE banking system. You do not simply explain banking procedures — you perform them on behalf of the user. You collect their information, identify the exact procedure, generate their document checklist, verify their documents, fill their forms, compose their bank emails, write their complaint letters, guide every step in their language, and escalate to regulators when banks fail.

You serve every person in the UAE: students, construction workers, domestic workers, labourers, corporate employees, business owners, SMEs, large corporations, and their families. You exist because millions of people in UAE face banking problems every day and have no accessible way to solve them. You are that way.

You are NOT a financial advisor. You are the operational bridge. You do the documentation work, the communication work, and the escalation work that the banking system requires. The user makes all final financial decisions.

CORE OPERATING PRINCIPLE — THE BRIDGE
Every interaction must move the user from their problem to its solution. You never stop at explaining. After every explanation you ask: "Shall I now generate your document checklist?" or "Shall I write the email for this?" or "Want me to fill this form?" You always offer to do the next piece of work. You are active, not passive.

The bridge has six active functions you perform in every case:
IDENTIFY — Understand the problem in any language and map it to the exact UAE banking procedure
COLLECT — Ask targeted questions to gather every piece of information the bank will need
VERIFY — Read every uploaded document, check validity, cross-check consistency, give readiness score
PRODUCE — Fill forms, draft emails, write complaint letters, generate complete applications
GUIDE — Walk through every step in sequence in the user's language at their pace
ESCALATE — When banks fail, move through every regulatory level with complete formal documents

LANGUAGE RULES
Detect language from the first message. Respond in exactly that language. Never switch unless asked. Adapt vocabulary and sentence length to the user's apparent literacy level — a labourer's message gets shorter simpler sentences than a corporate manager's message, in the same language.
Languages: English, Arabic (Modern Standard and Gulf khaleeji dialect), Hindi, Urdu, Malayalam, Tamil, Filipino/Tagalog, Bengali, Sinhala. If unclear, ask in the three most likely: "What language would you prefer? / ما هي لغتك المفضلة؟ / आप कौन सी भाषा पसंद करते हैं?"

PERSONA DETECTION AND ADAPTATION
Student: Signals: university, college, visa, IELTS, scholarship, student, studying. Tone: simple, friendly, encouraging. Immediately mention zero-balance digital accounts — Liv by Emirates NBD, Mashreq Neo, FAB Mobile, ADCB Hayyak — open from phone in 10 minutes, no branch visit, no minimum balance, no salary certificate. For under-21: guardian or parent must be present.

Labourer / Blue-collar worker: Signals: construction, factory, driver, helper, camp, accommodation, AED 800-2000 salary. Tone: very simple language, short sentences, zero jargon. Primary concern is WPS salary. Always recommend exchange houses for remittance — Al Ansari Exchange, Lulu Exchange, Al Fardan — fees AED 10-25 versus bank SWIFT at AED 75-150. Explicitly state: WPS non-payment is a criminal violation. The employer gets blacklisted. The worker has full legal protection. MOHRE hotline: 800-60, free, 24/7. Offer to write MOHRE complaint immediately.

Domestic worker: Signals: housemaid, nanny, cook, cleaner, sponsor, kafala, working inside home. Tone: extra gentle, empathetic. This is a vulnerable population. State clearly: the domestic worker has a legal right to open a personal bank account. The sponsor cannot legally prevent this. Protected under UAE Domestic Worker Law 2017, which is separate from standard labour law. Offer to guide account opening immediately.

Corporate employee: Signals: salary AED 8,000 or above, company car, HR, bonus, professional, manager, engineer. Tone: professional and efficient. Key services: home loan or mortgage, personal loan, credit card, AECB score management. ALWAYS calculate the CBUAE 50% debt burden ratio before any loan guidance. ALWAYS warn: credit card interest is 36-42% annually if not paid in full every month. Offer to calculate affordability and generate loan application checklist.

Business owner / SME: Signals: trade license, my business, shop, staff, employees, VAT, invoices. Tone: practical and solutions-focused. First always check: is the trade license valid and not expired? Expired license means instant rejection. Always mention Mohammed Bin Rashid Fund — SME loans up to AED 3 million, no collateral. Khalifa Fund for Abu Dhabi businesses. State clearly: Auxora replaces the bank liaison officer. Offer to generate complete business account opening checklist.

Corporate / large company: Signals: treasury, board, auditor, LC, BG, forex, multi-bank, AML, compliance. Tone: formal and precise. Key services: LC, BG, OD, WPS payroll setup, forex, AML/KYC compliance. State: Auxora replaces the bank liaison officer entirely. Offer to produce LC document checklist, BG application, WPS payroll setup guide.

Family / resident: Signals: family, children, joint account, wife, husband, home purchase, school fees. Tone: warm and reassuring. Critical: ALWAYS proactively tell non-Muslim families about DIFC Wills — without a registered Will, UAE law governs all UAE assets at death, not home country law. Register at difcwills.com, AED 900-2,500. Offer to guide deceased procedure or Will registration immediately.

THE BRIDGE IN ACTION — HOW EVERY CONVERSATION FLOWS
Step 1 — UNDERSTAND: When the user describes a problem, identify the exact procedure it maps to. Never ask them to use banking terminology. Understand plain language, emotional language, broken language, and any supported language.
Step 2 — CONFIRM AND PROFILE: Confirm understanding. Ask 2-3 targeted questions to build the complete case profile the bank will need. Never ask more than necessary.
Step 3 — GENERATE CHECKLIST: Produce the exact document checklist for this person, this procedure, and this bank if known. Explain each document simply. Warn about common rejection reasons.
Step 4 — VERIFY DOCUMENTS: When user uploads documents, read and verify each one. Check expiry dates, name consistency across all documents, format requirements. Give a readiness percentage. List exactly what needs to be fixed before the bank visit.
Step 5 — PRODUCE OUTPUTS: Based on the procedure, produce whatever the banking system requires — filled form guidance, professional email to bank, formal complaint letter, CBUAE escalation letter, MOHRE complaint, deceased account notification. Generate immediately on request.
Step 6 — GUIDE THE VISIT: Tell the user exactly what to say and do when they arrive at the bank. Which counter to go to. What to ask for. What form to fill. How to follow up if bank staff is unhelpful.
Step 7 — ESCALATE IF NEEDED: If bank does not respond or refuses unjustly, generate the next level escalation document immediately. Move through: bank nodal officer, CBUAE Consumer Protection, ecrime.ae for cybercrime, MOHRE for labour issues, UAE Courts for legal cases.

COMPLETE PROCEDURE COVERAGE
ACCOUNT SERVICES: Savings account (Emirates ID mandatory, digital zero-balance options), Student account (ADCB HasanAh, Liv student), Current/commercial account (trade license, MOA/AOA, UBO), Joint account (Either or Survivor mode), KYC update (URGENT if expired), Nomination update, Account dormancy reactivation, Account closure.
CHEQUE SERVICES: Verification, Post-dated cheques, Stop cheque, BOUNCED CHEQUE (CRIMINAL — travel ban 24hrs, jail 3 years), Demand draft.
LOAN SERVICES: Home loan (80% LTV expats, AECB 650+, DLD), Personal loan (50% DTI), Car loan (comprehensive insurance mandatory), SME/business loan (MBR Fund AED 3M), Education loan, Gold loan.
WPS AND SALARY: Non-payment (criminal, MOHRE 800-60), WPS status check, Domestic worker salary, Employer absconded.
REMITTANCE: Exchange house first always (Al Ansari, Lulu, Al Fardan AED 10-25 vs bank AED 75-150), SWIFT for >AED 50K, Cost comparison.
DECEASED: DIFC Will fast path, Sharia court, No-Will probate (60-180 days), Gratuity claim, Joint account survivor, FD claim, Locker access. FIRST RESPONSE: empathy always. NON-MUSLIM PROACTIVE RULE: always mention DIFC Wills.
CARDS AND DIGITAL: Lost/stolen (EMERGENCY hotlines), Card delivery tracking, Credit card (36-42% interest warning), Virtual card.
REFUNDS AND DISPUTES: Merchant refund, Unauthorized transaction, ATM failure, Double charge, Wrong transfer, Subscription cancellation.
BUSINESS BANKING: Current account, LC, BG, CC/OD, WPS payroll setup, Forex.
COMPLAINTS AND ESCALATION: Level 1 Bank (30 days) → Level 2 CBUAE consumerprotection.centralbank.ae → Level 3 ecrime.ae → Level 4 MOHRE 800-60 → Level 5 UAE Courts.
GOVERNMENT SCHEMES: MBR Fund, Khalifa Fund, DIFC Wills, Zero-balance digital accounts, UAE Pass.

DOCUMENT VERIFICATION RULES
Emirates ID: valid, not expired. If expiry within 1 month: flag as urgent.
Passport + UAE visa: valid, visa type compatible.
Salary certificate: issued within 3 months maximum.
Bank statement: 3-6 months depending on procedure.
Trade license: valid and not expired. Expired = instant rejection.
AECB credit report: check for defaults, late payments, existing loans.
Name consistency: must match EXACTLY across all documents.
After verification: report each document as VERIFIED / WARNING / FAILED. Calculate overall readiness percentage.

CRITICAL UAE-SPECIFIC RULES — ALWAYS APPLY
BOUNCED CHEQUE IS A CRIMINAL OFFENCE. Travel ban within 24 hours. Jail up to 3 years. ALWAYS generate settlement offer IMMEDIATELY.
WPS NON-PAYMENT IS CRIMINAL. MOHRE 800-60. Generate complaint immediately.
CBUAE 50% DEBT BURDEN RATIO. Calculate before every loan recommendation.
DIFC WILL FOR NON-MUSLIMS. Always proactively mention when deceased, joint account, or estate comes up.
AECB IS UAE-SPECIFIC. Range 300-900. Good is 700+. Free at aecb.gov.ae.
EXCHANGE HOUSES ALWAYS BEAT BANKS ON REMITTANCE. Always recommend first. Calculate savings.
ACCOUNT DORMANCY AFTER 3 YEARS. Funds transferred to CBUAE unclaimed fund.
OFF-PLAN PROPERTY: RERA-REGISTERED ONLY. Check rera.gov.ae.
GRATUITY IS A LEGAL RIGHT. Cannot be withheld. Generate MOHRE complaint if refused.
ECRIME.AE FOR CYBERCRIME. Always direct here first for fraud.
DOMESTIC WORKER LAW 2017 IS SEPARATE from standard labour law.
FREE ZONE VS MAINLAND. Different banking requirements. Always clarify for business users.
CREDIT CARD MINIMUM PAYMENT TRAP. 36-42% annual interest. Always warn.

EMAIL AND DOCUMENT PRODUCTION ENGINE
Every email includes: specific subject line with reference numbers, full account details placeholder, factual description, specific resolution request with deadline, CBUAE regulatory reference, professional closing.
Every UAE bank email ends with: "I expect a response within 5 working days as per Central Bank of the UAE Consumer Protection Regulations."

RESPONSE FORMAT RULES
Open with empathy for every distressing situation.
EMERGENCY CASES: open with bold IMMEDIATE ACTION and give the first three steps to do right now.
Answer first, explain second.
Numbered steps for every procedure.
After every explanation, offer to produce the next output.
Never use jargon without explaining it.
End every complaint response by mentioning CBUAE Consumer Protection rights.
End every business banking response by mentioning Auxora replaces the bank liaison officer.
End every WPS response with MOHRE hotline 800-60.
End every deceased response for non-Muslims with DIFC Will reminder.
Never let a user give up — if bank fails, immediately offer next escalation level with the document ready.

=== MASTER SYSTEM PROMPT END ===`;

// ─── State ───
let apiConfig = { provider: 'local', key: '', connected: false };
let chatHistory = [];

document.addEventListener('DOMContentLoaded', () => {
  initCard3D();
  initScrollReveal();
  initStatsCounter();
  initTabs();
  initBridgeParticles();
  if (document.body.classList.contains('chat-page')) {
    initAIChat();
  }
  initMobileMenu();
  initNavScroll();
  loadApiConfig();
});

/* ─── 3D CARD MOUSE TRACKING ─── */
function initCard3D() {
  const card = document.getElementById('card3d');
  if (!card) return;
  const wrap = card.parentElement;
  let raf;
  wrap.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.animation = 'none';
      card.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 20}deg) translateZ(10px)`;
    });
  });
  wrap.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
    card.style.transform = 'rotateY(-8deg) rotateX(5deg)';
    card.style.animation = 'card-float 6s ease-in-out infinite';
    setTimeout(() => { card.style.transition = 'transform 0.1s ease-out'; }, 600);
  });
  wrap.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease-out';
    card.style.animation = 'none';
  });
}

/* ─── BRIDGE PARTICLES ─── */
function initBridgeParticles() {
  const container = document.getElementById('bfParticles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 8 + 's';
    s.style.animationDuration = (6 + Math.random() * 6) + 's';
    s.style.width = s.style.height = (1 + Math.random() * 2) + 'px';
    container.appendChild(s);
  }
}

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stat items animate on scroll
  const statObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.stat-item').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0) scale(1)'; }, i * 120);
      });
      statObserver.disconnect();
    }
  }, { threshold: 0.3 });
  const stats = document.getElementById('stats');
  if (stats) statObserver.observe(stats);
}

/* ─── STATS COUNTER ─── */
function initStatsCounter() {
  let counted = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
  }, { threshold: 0.5 });
  const stats = document.getElementById('stats');
  if (stats) observer.observe(stats);
}

/* ─── AI CHAT ENGINE ─── */
function initAIChat() {
  const messagesEl = document.getElementById('chatMessages');
  const inputEl = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const typingEl = document.getElementById('chatTyping');

  addMessage('bot', "Hello! I'm **Auxora** — your active banking bridge for the UAE. 🏦\n\nI don't just explain banking — I **do the work** for you:\n• Generate document checklists\n• Draft professional bank emails\n• Write complaint letters\n• Guide every step in your language\n• Escalate when banks fail\n\nI serve everyone — students, workers, families, businesses — in **9 languages**.\n\nAsk me anything, or tap a quick topic below.");

  // Send on button click
  sendBtn.addEventListener('click', () => sendUserMessage());
  // Send on Enter
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendUserMessage(); }
  });
  // Quick action buttons
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      if (q) { inputEl.value = q; sendUserMessage(); }
    });
  });

  // API config
  const providerEl = document.getElementById('apiProvider');
  const keyEl = document.getElementById('apiKey');
  const saveBtn = document.getElementById('apiSave');

  providerEl.addEventListener('change', () => {
    keyEl.style.display = providerEl.value === 'local' ? 'none' : 'block';
  });
  saveBtn.addEventListener('click', () => {
    apiConfig.provider = providerEl.value;
    apiConfig.key = keyEl.value.trim();
    apiConfig.connected = providerEl.value === 'local' || apiConfig.key.length > 10;
    localStorage.setItem('auxora_api', JSON.stringify(apiConfig));
    saveBtn.textContent = '✓ Connected';
    saveBtn.classList.add('connected');
    setTimeout(() => { saveBtn.textContent = 'Connect'; saveBtn.classList.remove('connected'); }, 2000);
  });

  async function sendUserMessage() {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = '';
    addMessage('user', text);
    chatHistory.push({ role: 'user', content: text });
    typingEl.classList.add('active');
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const response = await getAIResponse(text);
      typingEl.classList.remove('active');
      addMessage('bot', response);
      chatHistory.push({ role: 'assistant', content: response });
    } catch (err) {
      typingEl.classList.remove('active');
      addMessage('bot', `⚠️ Error: ${err.message}\n\nPlease check your API key in the settings below, or switch to **Built-in (No Key)** mode.`);
    }
  }

  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    const label = role === 'bot' ? 'Auxora' : 'You';
    const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    div.innerHTML = `<span class="msg-label">${label}</span>${html}`;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}

/* ─── AI RESPONSE ROUTER ─── */
async function getAIResponse(userMsg) {
  if (apiConfig.provider === 'gemini' && apiConfig.key) {
    return await callGemini(userMsg);
  } else if (apiConfig.provider === 'openai' && apiConfig.key) {
    return await callOpenAI(userMsg);
  } else {
    return getLocalResponse(userMsg);
  }
}

/* ─── GEMINI API ─── */
async function callGemini(userMsg) {
  const contents = chatHistory.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  // Prepend system instruction as first user turn if needed
  const body = {
    system_instruction: { parts: [{ text: AUXORA_SYSTEM_PROMPT }] },
    contents: contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
  };
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiConfig.key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gemini API error ${res.status}`);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
}

/* ─── OPENAI API ─── */
async function callOpenAI(userMsg) {
  const messages = [
    { role: 'system', content: AUXORA_SYSTEM_PROMPT },
    ...chatHistory.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
  ];
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiConfig.key}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages, temperature: 0.7, max_tokens: 2048 })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `OpenAI API error ${res.status}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response from OpenAI.';
}

/* ─── LOCAL CONVERSATIONAL ENGINE ─── */
let flowState = { active: null, step: 0, data: {} };

function getLocalResponse(userMsg) {
  const msg = userMsg.toLowerCase();
  // If we're in an active flow, continue it
  if (flowState.active) return continueFlow(msg, userMsg);
  // Detect new flow
  if (msg.match(/account|open|bank account/)) return startFlow('account');
  if (msg.match(/loan|mortgage|home loan|personal loan|car loan/)) return startFlow('loan');
  if (msg.match(/fraud|unauthorized|stolen|hacked|scam/)) return startFlow('fraud');
  if (msg.match(/salary|wps|not paid|wages|payment delay/)) return startFlow('wps');
  if (msg.match(/cheque|bounce|bounced/)) return startFlow('cheque');
  if (msg.match(/deceased|passed away|died|death|inheritance/)) return startFlow('deceased');
  if (msg.match(/remit|send money|transfer home|exchange/)) return startFlow('remittance');
  if (msg.match(/complaint|escalat|cbuae|not resolv/)) return startFlow('complaint');
  if (msg.match(/credit card|card interest|minimum payment/)) return startFlow('creditcard');
  if (msg.match(/credit score|aecb|score/)) return startFlow('creditscore');
  if (msg.match(/document|upload|salary slip|fill form/)) return startFlow('docextract');
  if (msg.match(/difc|will|expat.*will|inheritance law/)) return "**DIFC Will — Critical for Non-Muslim Expats** 📜\n\n**Without a registered Will, UAE law governs ALL your UAE assets at death** — not your home country law.\n\n**Registration:**\n1. Visit **difcwills.com**\n2. Cost: **AED 900-2,500**\n3. Takes **one afternoon**\n4. Covers: bank accounts, property, investments, vehicles\n\n**Why it matters:**\n• Without Will: **60-180 days** court process, assets frozen\n• With DIFC Will: **15-30 days** fast path\n• Your chosen heirs inherit — not UAE default distribution\n\n**This is the most important thing an expat in UAE can do.**\n\nShall I guide you through registration?\n\n" + resetFlow();
  if (msg.match(/leaving uae|exit uae|going back|closing.*account|leave country/)) return "**Leaving UAE — Banking Checklist:**\n\n1. **Clear all loans and credit cards** (mandatory before exit)\n2. **Cancel standing orders** and auto-debits\n3. Close or convert account to **non-resident status**\n4. **Collect all cheques** — cancel any post-dated ones\n5. **Transfer funds** home via exchange house (cheapest)\n6. Get **clearance letter** from bank\n7. Close **AECB profile** — check for outstanding items\n\n⚠️ **DO NOT leave with unpaid loans** — this is a criminal offence. Travel ban will be issued.\n\nWant me to generate your **account closure checklist**?\n\n" + resetFlow();
  if (msg.match(/frozen|account.*frozen|block.*account|freeze/)) return "**Account Frozen? Here's why and how to fix it:**\n\n**Common reasons:**\n1. **Emirates ID expired** → Renew at ICA.gov.ae urgently\n2. **KYC outdated** → Visit branch with updated documents\n3. **Fraud flag** → Call bank hotline to verify identity\n4. **AML/compliance hold** → Bank review required\n5. **Court order** → Legal matter — consult lawyer\n\n**Action plan:**\n1. Call bank hotline — ask for **exact reason**\n2. Gather required documents\n3. Visit branch with **Emirates ID**\n4. If bank unreasonable → file at **consumerprotection.centralbank.ae**\n\nWant me to **draft an unfreeze request email** to your bank?\n\n" + resetFlow();
  // Emergency detectors — bypass flows
  if (msg.match(/wrong transfer|sent money wrong|wrong account/)) return "🚨 **IMMEDIATE ACTION — WRONG TRANSFER:**\n\n1. **Call your bank hotline NOW:** give them the exact amount, time, and wrong account number.\n2. Say: \"I made an erroneous transfer. I need an immediate recall request placed.\"\n3. I will generate your written recall request now so you can email it simultaneously.\n\n⚠️ Recovery probability is highest in the **first 2 hours**. Every minute reduces the chance.\n\n**Draft Recall Request:**\n\n> Subject: Urgent — Erroneous Transfer Recall Request — Account [YOUR ACCOUNT]\n> Dear Banking Operations,\n> I made an erroneous transfer of AED [AMOUNT] on [DATE] at [TIME] to account [WRONG ACCOUNT]. This was not intended. I request an immediate recall.\n> My details: [NAME] | [ACCOUNT] | [EMIRATES ID]\n> I expect a response within 5 working days as per CBUAE Consumer Protection Regulations.\n\n" + resetFlow();
  if (msg.match(/card lost|card stolen|lost my card|block card|block my card/)) return "🚨 **BLOCK YOUR CARD IMMEDIATELY:**\n\n• Emirates NBD: **600 54 0000**\n• ADCB: **600 50 2030**\n• FAB: **600 52 5500**\n• Mashreq: **04 424 4444**\n• DIB: **04 609 2222**\n\n**Say:** \"My card is lost/stolen. Block it immediately.\"\n\nAfter blocking:\n1. File **police report** if stolen\n2. Report at **ecrime.ae** if used fraudulently\n3. Request **virtual card** for immediate online use\n4. New card: **3-5 working days**\n\n" + resetFlow();
  if (msg.match(/draft.*email|write.*email|generate.*email|email template|write.*letter/)) return "**Which email template do you need?**\n\n1️⃣ Card not delivered\n2️⃣ Unauthorized transaction dispute\n3️⃣ CBUAE formal escalation complaint\n4️⃣ Merchant refund request\n5️⃣ WPS/MOHRE salary complaint\n6️⃣ Deceased account freeze notification\n7️⃣ Bounced cheque settlement offer\n8️⃣ Wrong transfer recall request\n\nType the number and I'll generate the complete professional email.\n\n" + resetFlow();
  return "I'm **Auxora** — your active banking bridge for the UAE. I can help with:\n\n• 🏦 **Open Account** — zero-balance, digital, student, business\n• 💰 **Loans** — home, personal, car, SME (MBR Fund)\n• 💼 **WPS Salary** — non-payment, MOHRE complaints\n• 🚨 **Fraud** — unauthorized transactions, card block\n• ⚠️ **Cheques** — bounced cheque (criminal!), stop payment\n• 🕊️ **Deceased Accounts** — DIFC Will, succession\n• 💸 **Remittance** — cheapest transfers home\n• 📝 **Complaints** — bank → CBUAE escalation\n• 💳 **Credit Cards** — interest trap, applications\n• 📊 **AECB Score** — check, improve, loan eligibility\n• 📄 **Documents** — verification, checklists\n• ✉️ **Draft Emails** — bank complaints, dispute letters\n\nJust type your question or tap a topic below. 🏦";
}

function startFlow(type) {
  flowState = { active: type, step: 1, data: {} };
  const flows = {
    account: "Great! Let's open a bank account. 🏦\n\n**Who are you?**\n\n1️⃣ Student\n2️⃣ Employee / Corporate worker\n3️⃣ Labourer / Construction worker\n4️⃣ Business owner\n5️⃣ Domestic worker\n6️⃣ Freelancer / Self-employed\n\n*Type the number or describe yourself.*",
    loan: "Let's find the right loan for you. 💰\n\n**What type of loan do you need?**\n\n1️⃣ Home / Mortgage loan\n2️⃣ Personal loan\n3️⃣ Car loan\n4️⃣ Business / SME loan\n5️⃣ Education loan\n\n*Type the number.*",
    fraud: "🚨 **FRAUD ALERT — Let me help you immediately.**\n\n**First — have you already called your bank hotline?**\n\n1️⃣ Yes, I already called\n2️⃣ No, not yet\n3️⃣ I don't know my bank's number\n\n⚠️ *Every minute counts. The 3-day zero-liability window is critical.*",
    wps: "Let me help with your salary issue. 💼\n\n**How long has your salary been delayed?**\n\n1️⃣ Less than 1 week\n2️⃣ 1-2 weeks\n3️⃣ 2-4 weeks\n4️⃣ More than 1 month\n5️⃣ Never received any salary",
    cheque: "⚠️ **Cheque bouncing is CRIMINAL in UAE.**\n\n**What's your situation?**\n\n1️⃣ I issued a cheque and might not have funds\n2️⃣ My cheque already bounced\n3️⃣ I received a bounced cheque from someone\n4️⃣ I want to stop/cancel a cheque",
    deceased: "I'm sorry for your loss. I'll guide you through every step. 🕊️\n\n**Does the deceased have a registered Will?**\n\n1️⃣ Yes — DIFC Will or registered Will\n2️⃣ No — no Will exists\n3️⃣ I'm not sure\n4️⃣ Non-Muslim (Sharia may not apply)",
    remittance: "Let's find the cheapest way to send money home. 💸\n\n**Which country are you sending to?**\n\n1️⃣ India\n2️⃣ Pakistan\n3️⃣ Philippines\n4️⃣ Bangladesh\n5️⃣ Sri Lanka\n6️⃣ Other country\n\n*Type the number or country name.*",
    complaint: "Let's escalate your complaint properly. 📝\n\n**What's the issue about?**\n\n1️⃣ Bank charged wrong fees\n2️⃣ Loan/card dispute\n3️⃣ Account frozen unfairly\n4️⃣ Bank not responding to complaint\n5️⃣ Salary not credited via WPS\n6️⃣ Other issue",
    creditcard: "**Credit Card Help** 💳\n\n**What do you need?**\n\n1️⃣ Lost/stolen card — BLOCK NOW\n2️⃣ Understanding interest charges\n3️⃣ Applying for a new card\n4️⃣ Dispute a transaction\n5️⃣ Reduce my debt",
    creditscore: "**AECB Credit Score Check** 📊\n\n**Do you know your current score?**\n\n1️⃣ Yes, I know my score\n2️⃣ No, how do I check?\n3️⃣ My score is low — how to improve?",
    docextract: "**Document Assistant** 📄\n\n**What document do you have?**\n\n1️⃣ Salary certificate / slip\n2️⃣ Emirates ID\n3️⃣ Bank statement\n4️⃣ Trade license\n5️⃣ I need a checklist for a procedure\n\n*In a future update, you'll be able to upload & we'll extract all fields automatically!*"
  };
  return flows[type] || "How can I help?";
}

function continueFlow(msg, raw) {
  const { active, step, data } = flowState;
  const num = parseInt(msg) || 0;

  if (active === 'account') {
    if (step === 1) {
      const personas = { 1:'student', 2:'employee', 3:'labourer', 4:'business', 5:'domestic', 6:'freelancer' };
      data.persona = personas[num] || (msg.match(/student/) ? 'student' : msg.match(/employ|corporate/) ? 'employee' : msg.match(/labour|construct/) ? 'labourer' : 'employee');
      flowState.step = 2;
      return `Got it — **${data.persona}**.\n\n**Do you have an Emirates ID?**\n\n1️⃣ Yes\n2️⃣ No — I just arrived\n3️⃣ It's expired`;
    }
    if (step === 2) {
      data.hasID = num === 1 ? 'yes' : num === 2 ? 'no' : 'expired';
      flowState.step = 3;
      if (data.hasID === 'no') return "You need a valid **Emirates ID** to open any bank account in the UAE. Visit an **ICP center** or apply via the **UAEPASS app**. Processing takes 5-10 business days.\n\n*Come back once you have your Emirates ID and I'll walk you through account opening!*\n\n" + resetFlow();
      if (data.hasID === 'expired') return "⚠️ Your Emirates ID must be **valid**. Renew it via **ICA.gov.ae** or the **UAEPASS app** (AED 100). Takes 2-3 days.\n\n*Once renewed, come back and I'll help you open your account!*\n\n" + resetFlow();
      return `**What's your monthly salary range?**\n\n1️⃣ No salary (student/unemployed)\n2️⃣ Under AED 3,000\n3️⃣ AED 3,000 - 5,000\n4️⃣ AED 5,000 - 15,000\n5️⃣ Above AED 15,000`;
    }
    if (step === 3) {
      data.salary = num;
      flowState.active = null;
      const recs = {
        student: "**Best accounts for students:**\n\n✅ **Liv by Emirates NBD** — AED 0 balance, instant virtual card, stylish app\n✅ **Mashreq Neo** — AED 0, Apple/Google Pay ready\n✅ **ADCB Hayyak** — AED 0, open in 5 min\n\n**You need:** Emirates ID + Passport\n**Time:** 5-15 minutes, no branch visit\n\n💡 Under 21? Some banks need a guardian.",
        labourer: "**Best accounts for you:**\n\n✅ **Emirates NBD CASH** — Simple, WPS compatible\n✅ **ADCB Hayyak** — Zero balance, very easy app\n✅ **Mashreq Neo** — AED 0, send money home cheap\n\n**You need:** Emirates ID only\n**Time:** 10 minutes on phone\n\n💡 Use **Al Ansari Exchange** to send money home — only AED 15 vs bank AED 150!",
        employee: "**Best accounts for salaried employees:**\n\n✅ **Emirates NBD** — Salary transfer perks, free credit card\n✅ **ADCB** — Strong digital banking\n✅ **FAB** — Best forex rates\n\n**Salary AED 5000+** unlocks: free credit card, checkbook, salary advance\n\n**You need:** Emirates ID + Salary certificate + Employment letter",
        business: "**Business Account Checklist:**\n\n1. Valid **Trade License** (within 6 months expiry)\n2. **MOA / AOA** — company documents\n3. Partners' **Emirates ID + Passport**\n4. **TRN** (Tax Registration Number) for VAT\n5. Initial deposit AED 10,000-50,000\n\n💡 **MBR Fund**: Up to AED 3M, no collateral, low interest for startups!",
        domestic: "**Your legal rights:**\nUnder Domestic Worker Law 2017, you have the **legal right** to own a bank account.\n\n✅ **ADCB Hayyak** — Zero balance\n✅ **Emirates NBD CASH** — Simple app\n\n**You need:** Emirates ID + Passport\nYour employer CANNOT prevent you from opening an account.",
        freelancer: "**Freelancer accounts:**\n\n✅ **Wio Bank** — Built for freelancers, instant setup\n✅ **Mashreq Neo** — Zero balance\n✅ **Liv** — Good for multiple income streams\n\n**You need:** Emirates ID + Freelance permit/license\n\n💡 Register for VAT if income > AED 375,000/year"
      };
      return (recs[data.persona] || recs.employee) + "\n\n" + resetFlow();
    }
  }

  if (active === 'loan') {
    if (step === 1) {
      const types = { 1:'home', 2:'personal', 3:'car', 4:'business', 5:'education' };
      data.type = types[num] || 'personal';
      flowState.step = 2;
      return `**${data.type.charAt(0).toUpperCase() + data.type.slice(1)} loan** — got it.\n\n**What is your monthly salary? (AED)**\n\n*Type the amount, e.g. "8000" or "15000"*`;
    }
    if (step === 2) {
      data.salary = parseInt(msg.replace(/[^0-9]/g,'')) || 0;
      flowState.step = 3;
      if (data.salary < 3000) return "⚠️ Most UAE banks require **minimum AED 3,000-5,000** monthly salary for loans.\n\n💡 For SME/business funding, check **MBR Fund** (no salary requirement, up to AED 3M).\n\n" + resetFlow();
      return `**Do you know your AECB credit score?**\n\n1️⃣ Yes — 750+ (Excellent)\n2️⃣ Yes — 650-749 (Good)\n3️⃣ Yes — below 650 (Fair/Poor)\n4️⃣ No — I haven't checked\n\n*Check at aecb.gov.ae — AED 28 for basic report*`;
    }
    if (step === 3) {
      data.score = num;
      flowState.active = null;
      const maxEMI = Math.floor(data.salary * 0.5);
      const scoreText = data.score === 1 ? "Excellent — best rates available!" : data.score === 2 ? "Good — standard approval likely." : data.score === 3 ? "Fair — limited options, higher rates." : "Check your score at **aecb.gov.ae** (AED 28).";
      let loanInfo = `**Your Loan Profile:**\n• Salary: **AED ${data.salary.toLocaleString()}**/month\n• Max EMI allowed: **AED ${maxEMI.toLocaleString()}**/month (CBUAE 50% rule)\n• Credit: ${scoreText}\n\n`;
      if (data.type === 'home') loanInfo += `**Home Loan:**\n• Max LTV: 80% expats / 85% nationals\n• Down payment: minimum 20%\n• Rate: 3.5-5.5% variable\n• Term: up to 25 years\n• AECB score 650+ required\n\n**Documents needed:**\n✅ Emirates ID + Passport\n✅ Salary certificate (within 3 months)\n✅ 6-month bank statements\n✅ AECB credit report\n✅ Property SPA from RERA developer\n✅ Title deed (for ready property)`;
      else if (data.type === 'personal') loanInfo += `**Personal Loan:**\n• Rate: 6-20% flat (compare APR!)\n• Amount: up to AED ${Math.min(data.salary*20, 500000).toLocaleString()}\n• Term: 1-4 years\n\n**Documents:**\n✅ Emirates ID\n✅ Salary certificate\n✅ 3-month bank statements`;
      else if (data.type === 'car') loanInfo += `**Car Loan:**\n• LTV: up to 80%\n• Term: up to 5 years\n• Insurance: comprehensive mandatory\n• Vehicle registered in bank's name until paid\n\n**Documents:**\n✅ Emirates ID\n✅ Salary certificate\n✅ Quotation from dealer`;
      else loanInfo += `**Business Loan:**\n• **MBR Fund**: Up to AED 3M, no collateral\n• **Khalifa Fund** (Abu Dhabi): competitive rates\n• Bank SME loans: AED 100K-5M\n\n**Documents:**\n✅ Valid Trade License\n✅ 12-month bank statements\n✅ Audited financials\n✅ Business plan`;
      return loanInfo + "\n\n" + resetFlow();
    }
  }

  if (active === 'fraud') {
    if (step === 1) {
      if (num === 2 || num === 3) {
        flowState.step = 2;
        return "🚨 **CALL YOUR BANK RIGHT NOW:**\n\n• Emirates NBD: **600 54 0000**\n• ADCB: **600 50 2030**\n• FAB: **600 52 5500**\n• Mashreq: **04 424 4444**\n• DIB: **04 609 2222**\n• RAK Bank: **04 213 0000**\n\n**Tell them:** \"I have unauthorized transactions. Block my card and account immediately.\"\n\n**Have you called now?** Type **yes** when done.";
      }
      flowState.step = 3;
      return "Good. **What type of fraud happened?**\n\n1️⃣ Unauthorized card transaction\n2️⃣ Online banking hack\n3️⃣ Phishing / SMS scam\n4️⃣ ATM skimming\n5️⃣ Someone impersonating me";
    }
    if (step === 2) {
      flowState.step = 3;
      return "Good — card blocked. ✅\n\n**What type of fraud?**\n\n1️⃣ Unauthorized card charge\n2️⃣ Online banking hack\n3️⃣ Phishing / SMS scam\n4️⃣ ATM skimming\n5️⃣ Identity theft";
    }
    if (step === 3) {
      flowState.active = null;
      return "**Complete these steps TODAY:**\n\n**Step 1** ✅ Bank hotline called — card blocked\n**Step 2** — Visit bank branch with **Emirates ID**\n• File **written dispute form**\n• Get **reference number** (keep it!)\n• Request **provisional credit**\n\n**Step 3** — File cybercrime report\n→ **ecrime.ae** or Dubai Police app\n\n**Step 4** — File CBUAE complaint if bank doesn't resolve in 15 days\n→ **consumerprotection.centralbank.ae**\n\n⚠️ The **3-day zero-liability** window: if reported within 3 days, bank covers losses.\n\nWant me to **draft a dispute email** to your bank? Just tell me the bank name and amount.\n\n" + resetFlow();
    }
  }

  if (active === 'wps') {
    if (step === 1) {
      data.delay = num;
      flowState.step = 2;
      const urgency = num >= 3 ? "🚨 **This is a criminal violation by your employer.**" : "⚠️ Your employer has 48 hours after due date to pay.";
      return `${urgency}\n\n**What is your job type?**\n\n1️⃣ Construction / Manual labour\n2️⃣ Domestic worker (housemaid/nanny)\n3️⃣ Office / Corporate employee\n4️⃣ Driver / Delivery\n5️⃣ Other`;
    }
    if (step === 2) {
      flowState.active = null;
      return "**Here's your action plan:**\n\n**Step 1** — Download **MOHRE UAE** app\n→ Check your WPS payment record\n\n**Step 2** — Call **MOHRE hotline 800-60** (free, 24/7)\n→ They will contact your employer\n\n**Step 3** — File online at **mohre.gov.ae**\n→ Takes 5 minutes with Emirates ID\n→ Employer must pay within **48 hours**\n\n**Your rights:**\n✅ Visa is **protected** during complaint\n✅ You will **NOT** get in trouble\n✅ MOHRE can **blacklist** your employer\n✅ Criminal charges apply to employer\n\n💡 Keep screenshots of your labour contract and any WhatsApp messages about salary.\n\n" + resetFlow();
    }
  }

  if (active === 'cheque') {
    if (step === 1) {
      data.situation = num;
      flowState.active = null;
      if (num === 1 || num === 2) return "🚨 **URGENT — ACT IN THE NEXT FEW HOURS:**\n\n1. **Call the payee RIGHT NOW.** Offer to pay the full amount TODAY via bank transfer.\n2. If they agree: **transfer immediately.** Ask for written WhatsApp confirmation.\n3. If they have already filed at police: **settlement is still possible.** A lawyer can negotiate.\n\n⚠️ **WARNING:** Travel ban can be issued within **24 hours** of police case filing. Jail up to **3 years** plus fine.\n\n**Settlement Offer Message (send to payee):**\n\n> Dear [Payee Name],\n> I sincerely apologize for the returned cheque of AED [AMOUNT]. I am arranging immediate payment via bank transfer today. Please confirm your bank details (IBAN) and I will transfer within the hour. I request you to kindly not file a police case as I am resolving this immediately.\n> [Your Name] | [Your Phone]\n\nWant me to customize this with your details?\n\n" + resetFlow();
      if (num === 3) return "**If you received a bounced cheque:**\n\n1. Contact the issuer first — give them **48 hours** to pay\n2. If no response: file at **Dubai Police** or relevant emirate police\n3. The issuer faces **travel ban + jail up to 3 years**\n\n**Your rights:** Full legal protection. The issuer committed a criminal offence.\n\nWant me to **draft a formal demand letter** to the cheque issuer?\n\n" + resetFlow();
      return "**Stop/Cancel a cheque:**\n\n1. Call bank hotline **immediately** (before clearance)\n2. Fee: **AED 100-500** per cheque\n3. Visit branch with **Emirates ID** + cheque details\n4. Get **written confirmation** of stop payment\n\n⚠️ Stop payment only works **before** the cheque is cleared.\n\n" + resetFlow();
    }
  }

  if (active === 'deceased') {
    if (step === 1) {
      data.willStatus = num;
      flowState.step = 2;
      return "**Which bank held the deceased's account?**\n\n1️⃣ Emirates NBD\n2️⃣ ADCB\n3️⃣ FAB\n4️⃣ Mashreq\n5️⃣ DIB\n6️⃣ Other / Multiple banks\n7️⃣ I don't know";
    }
    if (step === 2) {
      flowState.active = null;
      let path = '';
      if (data.willStatus === 1) {
        path = "**WITH DIFC Will — Fast Path (15-30 days):**\n\n1. Get **Death Certificate** from municipality\n2. Get it **attested by MOFA** (Ministry of Foreign Affairs)\n3. Bring DIFC Will + attested death cert + heir Emirates ID\n4. Apply at **DIFC Courts** — difccourts.ae\n5. Bank releases funds on court order\n\n**Documents needed:**\n✅ Original death certificate (MOFA attested)\n✅ DIFC Will copy\n✅ Heir Emirates ID + passport\n✅ Relationship proof";
      } else if (data.willStatus === 4) {
        path = "**NON-MUSLIM without DIFC Will — UAE Probate (60-180 days):**\n\n1. Get **Death Certificate** — MOFA attested\n2. Apply at **UAE Courts** for succession certificate\n3. All legal heirs must be identified\n4. Court appoints executor\n5. Bank releases on court order\n\n⚠️ **Without DIFC Will, UAE law governs ALL UAE assets — not your home country law.**\n\n💡 **DIFC Will registration:** difcwills.com — AED 900-2,500. Takes one afternoon. This is the most important thing an expat in UAE can do.";
      } else {
        path = "**WITHOUT Will — Court Process (60-180 days):**\n\n1. Get **Death Certificate** — MOFA attested\n2. Apply at **Sharia Court** (Muslim) or **UAE Courts** (non-Muslim)\n3. Inheritance distributed per court ruling\n4. All heirs must be present or represented\n\n**Documents needed:**\n✅ Original death certificate (MOFA attested)\n✅ Heir Emirates IDs + passports\n✅ Marriage certificate (attested)\n✅ Bank account details if known";
      }
      return path + "\n\n**IMMEDIATE ACTION:** Call bank hotline NOW to **freeze the account** — prevents any unauthorized withdrawals.\n\nWant me to **draft the bank freeze notification letter**?\n\n🕊️ *For non-Muslim families: please register a DIFC Will at difcwills.com to protect your family.*\n\n" + resetFlow();
    }
  }

  if (active === 'remittance') {
    if (step === 1) {
      const countries = {1:'India',2:'Pakistan',3:'Philippines',4:'Bangladesh',5:'Sri Lanka',6:'Other'};
      data.country = countries[num] || raw;
      flowState.step = 2;
      return `Sending to **${data.country}** — got it.\n\n**How much do you send monthly? (AED)**\n\n1️⃣ Under AED 1,000\n2️⃣ AED 1,000 - 3,000\n3️⃣ AED 3,000 - 10,000\n4️⃣ Above AED 10,000`;
    }
    if (step === 2) {
      flowState.active = null;
      const amounts = {1:500,2:2000,3:5000,4:15000};
      const amt = amounts[num] || 3000;
      const bankFee = amt < 3000 ? 75 : 150;
      const exchFee = amt < 3000 ? 15 : 25;
      const yearlySave = (bankFee - exchFee) * 12;
      return `**💸 Remittance Comparison for AED ${amt.toLocaleString()}:**\n\n| Provider | Fee | Speed | App |\n|---|---|---|---|\n| **Al Ansari Exchange** | AED ${exchFee} | Same day | ✅ Yes |\n| **Lulu Exchange** | AED ${exchFee} | Same day | ✅ LuLu Money |\n| **Al Fardan Exchange** | AED ${exchFee + 5} | Same day | ✅ Yes |\n| Bank SWIFT | AED ${bankFee}-${bankFee+50} | 1-3 days | Net banking |\n\n**You save AED ${yearlySave.toLocaleString()}/year** by using exchange houses instead of bank SWIFT!\n\n**My recommendation:**\n1. Download **Al Ansari Exchange** or **LuLu Money** app\n2. Register with **Emirates ID**\n3. Add beneficiary (name, bank, account number)\n4. Transfer — arrives same day\n\n💡 Bank SWIFT only makes sense for amounts **above AED 50,000**.\n\n` + resetFlow();
    }
  }

  if (active === 'complaint') {
    if (step === 1) {
      data.issue = num;
      flowState.step = 2;
      return "**Have you already complained to the bank directly?**\n\n1️⃣ Yes — they didn't resolve it\n2️⃣ Yes — they haven't responded\n3️⃣ No — I haven't complained yet";
    }
    if (step === 2) {
      flowState.active = null;
      if (num === 3) return "**Step 1 — File with the bank first:**\n\n1. Call bank hotline or visit branch\n2. File a **written complaint** — get a **reference number**\n3. Bank has **30 days** to resolve\n4. If unresolved → escalate to CBUAE\n\nWant me to **draft your bank complaint email**?\n\n" + resetFlow();
      return "**Escalation Ladder — Your Rights:**\n\n**Level 1** ✅ Bank (you've done this)\n**Level 2** → **CBUAE Consumer Protection**\n→ consumerprotection.centralbank.ae\n→ Banks are **legally required** to respond\n\n**Level 3** → **ecrime.ae** (if fraud/cybercrime involved)\n\n**Level 4** → **MOHRE 800-60** (if salary/labour related)\n\n**Level 5** → **UAE Courts** (Small Claims for under AED 50,000)\n\n**Draft CBUAE Complaint:**\n\n> Subject: Formal Complaint Against [BANK] — Unresolved [X] Days\n> Dear Sir/Madam, I formally submit this complaint against [BANK] for failure to resolve my complaint within the mandated timeframe.\n> Complainant: [NAME] | Emirates ID: [ID] | Account: [NUMBER]\n> Issue: [DESCRIBE] | Bank Ref: [REF] | Filed: [DATE]\n> I request CBUAE to investigate and direct [BANK] to resolve this matter.\n> Documents attached: [LIST]\n\nWant me to **customize this letter** with your details?\n\n" + resetFlow();
    }
  }

  if (active === 'creditcard') {
    if (step === 1) {
      flowState.active = null;
      if (num === 1) return "🚨 **IMMEDIATE ACTION — BLOCK YOUR CARD NOW:**\n\n• Emirates NBD: **600 54 0000**\n• ADCB: **600 50 2030**\n• FAB: **600 52 5500**\n• Mashreq: **04 424 4444**\n• DIB: **04 609 2222**\n\n**Say:** \"My card is lost/stolen. Block it immediately.\"\n\n**Then:**\n1. File police report (if stolen)\n2. Report at **ecrime.ae** (if used fraudulently)\n3. Request **virtual card** for immediate online use\n4. New card delivered in **3-5 working days**\n\n" + resetFlow();
      if (num === 2) return "**⚠️ Credit Card Interest — The Trap:**\n\n• If you pay **full balance** monthly: **0% interest** ✅\n• If you pay **minimum only**: **36-42% annual interest** ❌\n• AED 10,000 balance at minimum payment takes **7+ years** to clear\n• You'll pay **AED 15,000+ in interest** on that AED 10,000\n\n**Rule:** ALWAYS pay full balance. If you can't pay in full, you can't afford the purchase.\n\n" + resetFlow();
      if (num === 3) return "**Credit Card Application:**\n\n• Minimum salary: **AED 5,000/month** (CBUAE rule)\n• AECB score: **650+** recommended\n• ⚠️ Interest: **36-42%** annually if not paid in full\n\n**Documents:** Emirates ID + Salary certificate + 3-month bank statement\n\n**Best cards by type:**\n• Cashback: Emirates NBD Cashback, ADCB Touchpoints\n• Travel: FAB Infinite, Emirates NBD Skywards\n• No annual fee: Mashreq Solitaire (salary AED 15K+)\n\n" + resetFlow();
      if (num === 4) return "**Dispute a Transaction:**\n\n1. Call bank hotline — request **chargeback**\n2. File written dispute with **transaction details**\n3. Bank investigates within **45-90 days**\n4. If denied → file at **consumerprotection.centralbank.ae**\n\nWant me to **draft your dispute email**?\n\n" + resetFlow();
      return "**Reduce Credit Card Debt — Action Plan:**\n\n1. **Stop using the card immediately**\n2. Pay **more than minimum** every month\n3. Call bank — request **balance transfer** at lower rate\n4. Consider **personal loan** to consolidate (6-20% vs 36-42%)\n5. Pay highest-interest card first (avalanche method)\n\n**CBUAE Rule:** Total debt payments cannot exceed **50% of salary**.\n\n" + resetFlow();
    }
  }

  if (active === 'creditscore') {
    if (step === 1) {
      flowState.active = null;
      if (num === 1) {
        return "**Tell me your score range:**\n\n• **750-900** Excellent — Best rates, fast approvals, high limits. Proceed with any loan application.\n• **700-749** Good — Approved for most loans, standard rates. Compare at least 3 banks.\n• **600-699** Fair — Some approvals, higher interest. Improve score for 6 months first.\n• **300-599** Poor — Rejection likely. Rebuild score first.\n\nWant me to generate a **loan application checklist** based on your score?\n\n" + resetFlow();
      }
      if (num === 2) return "**How to Check Your AECB Score:**\n\n1. Visit **aecb.gov.ae**\n2. Register with **Emirates ID**\n3. **Free report** once per year\n4. Detailed report: **AED 28**\n\n**Score Range:**\n• 750-900: Excellent\n• 700-749: Good\n• 600-699: Fair\n• 300-599: Poor\n\n💡 Good score (700+) = better loan rates, faster approvals, higher credit limits.\n\n" + resetFlow();
      return "**6-Month Score Improvement Plan:**\n\n**Month 1-2:**\n✅ Pay ALL EMIs on time — set auto-pay\n✅ Pay credit card **full balance** (not minimum)\n✅ Keep credit card usage below **30%** of limit\n\n**Month 3-4:**\n✅ Don't apply for new credit (each application lowers score)\n✅ Clear any outstanding defaults\n✅ Check AECB report for errors — dispute if found\n\n**Month 5-6:**\n✅ Maintain clean record\n✅ Score should improve **50-100 points**\n✅ Re-apply for loan with updated report\n\n**Fastest fix:** Clear any defaults/late payments — these hurt the most.\n\n" + resetFlow();
    }
  }

  if (active === 'docextract') {
    if (step === 1) {
      flowState.active = null;
      if (num === 5) return "**Which procedure do you need a checklist for?**\n\n• **Account Opening:** Emirates ID + Passport + Salary cert (employees) or Trade License (business)\n• **Home Loan:** Emirates ID + Passport + Salary cert + 6-month statements + AECB report + Property SPA\n• **Personal Loan:** Emirates ID + Salary cert + 3-month statements\n• **Business Account:** Trade License + MOA/AOA + Partner IDs + UBO declaration\n• **CBUAE Complaint:** Written complaint + Bank reference number + All correspondence\n• **Deceased Claim:** Death cert (MOFA attested) + Will/DIFC Will + Heir IDs\n\nTell me the procedure and I'll generate the **exact checklist**.\n\n" + resetFlow();
      return "**Document Verification Checklist:**\n\n**Emirates ID:** ✅ Valid + not expired (if expiry within 1 month — renew URGENTLY)\n**Salary Certificate:** ✅ Within 3 months, employer stamp, matches WPS record\n**Bank Statement:** ✅ 3-6 months, shows consistent salary credits\n**Trade License:** ✅ Valid, not expired (expired = instant rejection)\n**Passport + Visa:** ✅ Both valid, visa type compatible\n**Name Consistency:** ✅ Must match EXACTLY across all documents\n\n⚠️ Even a **middle name difference** between documents causes rejection.\n\nUpload your documents and I'll verify each one. *(Document upload coming in next update!)*\n\n" + resetFlow();
    }
  }

  // Default: end flow for unrecognized input
  flowState.active = null;
  return "I didn't catch that. Let me start fresh.\n\n" + getLocalResponse(raw);
}

function resetFlow() {
  flowState = { active: null, step: 0, data: {} };
  return "*Type another question or tap a topic below.*";
}

/* ─── EMAIL TEMPLATE GENERATOR ─── */
function generateEmailTemplate(type) {
  const templates = {
    cardNotDelivered: "**Subject:** Urgent: Debit Card Not Delivered — Account [ACCOUNT NUMBER]\n\nDear Customer Service Team,\n\nI am writing to report that my debit card has not been delivered despite [X] working days having passed since [DATE]. My registered delivery address is [ADDRESS].\n\nMy account details:\n• Full Name: [NAME]\n• Account Number: [NUMBER]\n• Emirates ID: [ID NUMBER]\n• Card Request Date: [DATE]\n\nI request:\n1. Immediate investigation into delivery status\n2. Reissuance with express delivery if lost in transit\n3. Approval to collect at branch counter with Emirates ID\n\nI expect a response within 5 working days as per the Central Bank of the UAE Consumer Protection Regulations.\n\nYours faithfully,\n[FULL NAME] | Mobile: [MOBILE] | Date: [DATE]",
    unauthorizedTx: "**Subject:** Urgent Fraud Report — Unauthorized Transaction — Account [NUMBER] — AED [AMOUNT]\n\nDear Fraud and Disputes Team,\n\nI report an unauthorized transaction on my account. I did not authorize this transaction.\n\nTransaction details:\n• Account: [NUMBER]\n• Amount: AED [X]\n• Date and Time: [DATE/TIME]\n• Merchant/Reference: [DETAILS]\n\nI have filed a cybercrime report at ecrime.ae (Reference: [IF AVAILABLE]).\n\nI request:\n1. Immediate block on my card\n2. Provisional credit of AED [X] during investigation\n3. Full investigation and permanent refund\n4. Written confirmation within 5 working days\n\nI expect a response within 5 working days as per CBUAE Consumer Protection Regulations.\n\nYours faithfully,\n[NAME] | Account: [NUMBER] | Emirates ID: [ID] | Date: [DATE]",
    cbuaeEscalation: "**Subject:** Formal Complaint Against [BANK NAME] — Unresolved [X] Days — CBUAE Intervention Required\n\nThe Consumer Protection Department,\nCentral Bank of the UAE\n\nDear Sir or Madam,\n\nI formally submit this complaint against [BANK NAME] for failure to resolve my complaint within the mandated regulatory timeframe.\n\nComplainant: [NAME] | Emirates ID: [ID] | Account: [NUMBER]\nBank: [NAME] | Branch: [BRANCH]\n\nIssue: [DESCRIBE — what happened, when, amounts, references]\nTimeline: Incident on [DATE]. Complaint filed on [DATE]. Bank ref: [REF].\n\nAmount in dispute: AED [AMOUNT].\n\nI request CBUAE to investigate and direct [BANK NAME] to resolve this matter.\n\nDocuments attached: [LIST ALL]\n\nYours faithfully,\n[NAME] | Date: [DATE] | Mobile: [MOBILE]"
  };
  return templates[type] || "Template not found.";
}

/* ─── LOAD/SAVE API CONFIG ─── */
function loadApiConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem('auxora_api'));
    if (saved) {
      apiConfig = saved;
      const providerEl = document.getElementById('apiProvider');
      const keyEl = document.getElementById('apiKey');
      if (providerEl) providerEl.value = apiConfig.provider;
      if (keyEl) { keyEl.value = apiConfig.key; keyEl.style.display = apiConfig.provider === 'local' ? 'none' : 'block'; }
    }
  } catch(e) {}
}

/* ─── MOBILE MENU ─── */
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '60px';
    links.style.left = '0'; links.style.right = '0';
    links.style.background = 'rgba(250,250,250,0.98)';
    links.style.padding = '20px'; links.style.gap = '16px';
    links.style.borderBottom = '1px solid rgba(0,0,0,0.06)';
    btn.textContent = open ? '☰' : '✕';
  });
}

/* ─── TABS ─── */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById('tab-' + btn.dataset.tab);
      if (tab) tab.classList.add('active');
    });
  });
}

/* ─── NAV SCROLL ─── */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60 ? 'rgba(250,250,250,0.95)' : 'rgba(250,250,250,0.85)';
  }, { passive: true });
}

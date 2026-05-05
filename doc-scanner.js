// ═══ AUXORA DOC-SCANNER ENGINE ═══
// AI-powered document scanning, extraction & verification
// Supports: Gemini Vision API (primary) + Tesseract.js (fallback)

const AuxoraScanner = (function () {
  'use strict';

  // ── Document Type Definitions ──
  const DOC_TYPES = {
    EMIRATES_ID: {
      id: 'emirates_id', label: 'Emirates ID',
      fields: ['fullName', 'nameArabic', 'idNumber', 'nationality', 'dateOfBirth', 'expiryDate', 'gender', 'occupation', 'cardNumber'],
      patterns: { idNumber: /^784-\d{4}-\d{7}-\d$/ }
    },
    PASSPORT: {
      id: 'passport', label: 'Passport',
      fields: ['fullName', 'passportNumber', 'nationality', 'dateOfBirth', 'issueDate', 'expiryDate', 'issuingAuthority'],
      patterns: { passportNumber: /^[A-Z0-9]{6,9}$/ }
    },
    SALARY_CERT: {
      id: 'salary_certificate', label: 'Salary Certificate',
      fields: ['employerName', 'employeeName', 'designation', 'basicSalary', 'totalSalary', 'issueDate', 'stampPresent'],
      freshnessMonths: 3
    },
    TRADE_LICENSE: {
      id: 'trade_license', label: 'Trade License',
      fields: ['companyName', 'licenseNumber', 'activityType', 'issueDate', 'expiryDate', 'jurisdiction'],
      patterns: { licenseNumber: /^\d{5,8}$/ }
    },
    TENANCY: {
      id: 'tenancy_contract', label: 'Tenancy Contract / Ejari',
      fields: ['tenantName', 'landlordName', 'propertyAddress', 'ejariNumber', 'startDate', 'endDate', 'annualRent']
    },
    BANK_STATEMENT: {
      id: 'bank_statement', label: 'Bank Statement',
      fields: ['accountHolder', 'accountNumber', 'bankName', 'statementPeriod', 'closingBalance'],
      freshnessMonths: 6
    },
    VISA: {
      id: 'uae_visa', label: 'UAE Visa',
      fields: ['fullName', 'visaNumber', 'nationality', 'expiryDate', 'sponsor', 'visaType']
    },
    UTILITY_BILL: {
      id: 'utility_bill', label: 'Utility Bill',
      fields: ['accountHolder', 'accountNumber', 'provider', 'billingPeriod', 'address', 'amountDue']
    },
    AECB_REPORT: {
      id: 'aecb_report', label: 'AECB Credit Report',
      fields: ['fullName', 'creditScore', 'reportDate', 'totalAccounts', 'overdueAccounts']
    },
    UNKNOWN: { id: 'unknown', label: 'Unknown Document', fields: [] }
  };

  // ── Procedure-to-Document Mapping ──
  const PROCEDURE_DOCS = {
    savings: ['emirates_id', 'passport', 'uae_visa', 'salary_certificate', 'tenancy_contract'],
    kyc: ['emirates_id', 'passport', 'uae_visa', 'salary_certificate'],
    close: ['emirates_id'],
    joint: ['emirates_id', 'passport', 'uae_visa', 'salary_certificate', 'tenancy_contract'],
    'dec-will': ['emirates_id', 'passport'],
    'dec-no-will': ['emirates_id', 'passport'],
    'personal-loan': ['emirates_id', 'passport', 'salary_certificate', 'bank_statement', 'aecb_report'],
    'home-loan': ['emirates_id', 'passport', 'salary_certificate', 'bank_statement'],
    'merch-refund': ['bank_statement'],
    'unauth-txn': ['emirates_id', 'bank_statement'],
    'intl-remit': ['emirates_id'],
    'chq-bounce': ['emirates_id'],
    'lost-card': ['emirates_id'],
    'wps-issue': ['emirates_id'],
    cbuae: ['emirates_id']
  };

  // ── Gemini Vision API Extraction ──
  async function extractWithGemini(imageBase64, mimeType, apiKey) {
    const prompt = `You are Auxora — a UAE banking document scanner. Analyze this document image and return a JSON object with these exact keys:

{
  "documentType": "one of: emirates_id, passport, salary_certificate, trade_license, tenancy_contract, bank_statement, uae_visa, utility_bill, aecb_report, unknown",
  "confidence": 0.0-1.0,
  "fields": {
    // Extract ALL visible fields. Use these key names where applicable:
    // fullName, nameArabic, idNumber, passportNumber, nationality, dateOfBirth,
    // expiryDate, issueDate, gender, occupation, cardNumber, employerName,
    // employeeName, designation, basicSalary, totalSalary, stampPresent (boolean),
    // companyName, licenseNumber, activityType, jurisdiction, tenantName,
    // landlordName, propertyAddress, ejariNumber, startDate, endDate, annualRent,
    // accountHolder, accountNumber, bankName, statementPeriod, closingBalance,
    // visaNumber, sponsor, visaType, provider, billingPeriod, address, amountDue,
    // creditScore, reportDate, totalAccounts, overdueAccounts
  },
  "authenticity": {
    "score": 0.0-1.0,
    "flags": ["list of observations about document authenticity"],
    "structureValid": true/false,
    "expectedHeaderPresent": true/false,
    "dateFormatsConsistent": true/false
  },
  "rawText": "all visible text in the document"
}

Rules:
- Dates should be in DD/MM/YYYY format
- Currency amounts should include "AED" prefix
- For Emirates ID number, expect format: 784-YYYY-NNNNNNN-N
- If a field is not visible or unclear, set it to null
- For stampPresent, check if an official stamp/seal is visible
- Return ONLY valid JSON, no markdown or explanation`;

    const body = {
      contents: [{
        parts: [
          { text: prompt },
          { inline_data: { mime_type: mimeType, data: imageBase64 } }
        ]
      }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 4096 }
    };

    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
    );
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    // Strip markdown code fences if present
    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();
    return JSON.parse(cleaned);
  }

  // ── Tesseract.js Fallback ──
  let tesseractLoaded = false;
  async function loadTesseract() {
    if (tesseractLoaded) return;
    if (typeof Tesseract === 'undefined') {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    tesseractLoaded = true;
  }

  async function extractWithTesseract(imageDataUrl) {
    await loadTesseract();
    const worker = await Tesseract.createWorker('eng+ara', 1, {
      logger: () => {}
    });
    const { data } = await worker.recognize(imageDataUrl);
    await worker.terminate();
    return parseOCRText(data.text);
  }

  // ── OCR Text Parser (fallback) ──
  function parseOCRText(text) {
    const t = text || '';
    const lines = t.split('\n').map(l => l.trim()).filter(Boolean);
    const lower = t.toLowerCase();

    // Detect doc type from keywords
    let documentType = 'unknown';
    let confidence = 0.4;

    if (/emirates\s*id|identity\s*card|united\s*arab\s*emirates/i.test(t) && /784-/.test(t)) {
      documentType = 'emirates_id'; confidence = 0.8;
    } else if (/passport|travel\s*document/i.test(t) && /nationality/i.test(t)) {
      documentType = 'passport'; confidence = 0.7;
    } else if (/salary\s*(certificate|slip)|remuneration|payslip/i.test(t)) {
      documentType = 'salary_certificate'; confidence = 0.75;
    } else if (/trade\s*license|commercial\s*license|ded|adgm|difc/i.test(t)) {
      documentType = 'trade_license'; confidence = 0.7;
    } else if (/tenancy|ejari|lease\s*agreement|rental/i.test(t)) {
      documentType = 'tenancy_contract'; confidence = 0.7;
    } else if (/bank\s*statement|account\s*summary|closing\s*balance/i.test(t)) {
      documentType = 'bank_statement'; confidence = 0.7;
    } else if (/visa|residence\s*permit|entry\s*permit/i.test(t)) {
      documentType = 'uae_visa'; confidence = 0.65;
    } else if (/dewa|etisalat|du\s|utility/i.test(t)) {
      documentType = 'utility_bill'; confidence = 0.7;
    } else if (/aecb|credit\s*score|credit\s*report|etihad\s*credit/i.test(t)) {
      documentType = 'aecb_report'; confidence = 0.7;
    }

    // Extract fields using regex
    const fields = {};
    const eidMatch = t.match(/784-\d{4}-\d{7}-\d/);
    if (eidMatch) fields.idNumber = eidMatch[0];

    const dateMatches = t.match(/\d{2}[\/\-\.]\d{2}[\/\-\.]\d{4}/g) || [];
    if (dateMatches.length >= 1) fields.dateOfBirth = dateMatches[0].replace(/[\-\.]/g, '/');
    if (dateMatches.length >= 2) fields.expiryDate = dateMatches[dateMatches.length - 1].replace(/[\-\.]/g, '/');

    const nameMatch = t.match(/(?:name|holder|applicant)[:\s]*([A-Z][A-Za-z\s\-']{3,40})/i);
    if (nameMatch) fields.fullName = nameMatch[1].trim();

    const natMatch = t.match(/(?:nationality|citizen)[:\s]*([A-Za-z\s]{3,30})/i);
    if (natMatch) fields.nationality = natMatch[1].trim();

    const genderMatch = t.match(/(?:sex|gender)[:\s]*(male|female|m|f)/i);
    if (genderMatch) fields.gender = genderMatch[1].length === 1 ? (genderMatch[1].toUpperCase() === 'M' ? 'Male' : 'Female') : genderMatch[1];

    const occMatch = t.match(/(?:occupation|profession|designation)[:\s]*([A-Za-z\s\-]{3,40})/i);
    if (occMatch) fields.occupation = occMatch[1].trim();

    const salaryMatch = t.match(/(?:total|gross|net|salary|amount)[:\s]*(?:aed\s?)?([\d,]+\.?\d*)/i);
    if (salaryMatch) fields.totalSalary = 'AED ' + salaryMatch[1];

    const passMatch = t.match(/(?:passport\s*(?:no|number|#))[:\s]*([A-Z0-9]{6,9})/i);
    if (passMatch) fields.passportNumber = passMatch[1];

    const accMatch = t.match(/(?:account\s*(?:no|number|#))[:\s]*(\d{8,16})/i);
    if (accMatch) fields.accountNumber = accMatch[1];

    return {
      documentType,
      confidence,
      fields,
      authenticity: buildAuthenticityFromOCR(t, documentType, fields),
      rawText: t
    };
  }

  function buildAuthenticityFromOCR(text, docType, fields) {
    const flags = [];
    let score = 0.5;

    if (docType === 'emirates_id') {
      if (/united\s*arab\s*emirates/i.test(text)) { flags.push('UAE header present'); score += 0.15; }
      if (fields.idNumber && /^784-/.test(fields.idNumber)) { flags.push('Valid ID number format'); score += 0.15; }
    }
    if (fields.expiryDate) {
      const parts = fields.expiryDate.split('/');
      if (parts.length === 3 && parseInt(parts[2]) >= 2020 && parseInt(parts[2]) <= 2035) {
        flags.push('Expiry date in valid range'); score += 0.1;
      }
    }
    if (text.length > 50) { flags.push('Sufficient text content detected'); score += 0.1; }

    return {
      score: Math.min(score, 1.0),
      flags,
      structureValid: flags.length >= 2,
      expectedHeaderPresent: /united\s*arab\s*emirates|uae|government/i.test(text),
      dateFormatsConsistent: true
    };
  }

  // ── Verification Engine ──
  function verifyDocument(extraction, procedureId) {
    const results = { checks: [], overallStatus: 'pass', warnings: [], errors: [] };
    const f = extraction.fields || {};
    const docType = extraction.documentType;
    const now = new Date();

    // 1. Expiry Check
    if (f.expiryDate) {
      const exp = parseDate(f.expiryDate);
      if (exp) {
        if (exp < now) {
          results.checks.push({ label: 'Document expiry', status: 'fail', detail: 'EXPIRED on ' + f.expiryDate });
          results.errors.push('This document has expired (' + f.expiryDate + '). Banks will reject it.');
          results.overallStatus = 'fail';
        } else {
          const daysLeft = Math.ceil((exp - now) / 86400000);
          if (daysLeft < 30) {
            results.checks.push({ label: 'Document expiry', status: 'warn', detail: 'Expires in ' + daysLeft + ' days' });
            results.warnings.push('Document expires in ' + daysLeft + ' days. Renew before applying.');
          } else {
            results.checks.push({ label: 'Document expiry', status: 'pass', detail: 'Valid until ' + f.expiryDate });
          }
        }
      }
    }

    // 2. Freshness Check (salary cert, bank statement)
    const typeDef = Object.values(DOC_TYPES).find(d => d.id === docType);
    if (typeDef?.freshnessMonths && f.issueDate) {
      const issued = parseDate(f.issueDate);
      if (issued) {
        const monthsAgo = (now.getFullYear() - issued.getFullYear()) * 12 + (now.getMonth() - issued.getMonth());
        if (monthsAgo > typeDef.freshnessMonths) {
          results.checks.push({ label: 'Document freshness', status: 'fail', detail: 'Issued ' + monthsAgo + ' months ago (max ' + typeDef.freshnessMonths + ')' });
          results.errors.push('Document is too old. Must be within ' + typeDef.freshnessMonths + ' months.');
          results.overallStatus = 'fail';
        } else {
          results.checks.push({ label: 'Document freshness', status: 'pass', detail: 'Issued ' + monthsAgo + ' month(s) ago' });
        }
      }
    }

    // 3. Completeness Check
    if (typeDef && typeDef.fields) {
      const critical = typeDef.fields.filter(k => ['fullName', 'idNumber', 'expiryDate', 'passportNumber', 'employeeName', 'totalSalary'].includes(k));
      const missing = critical.filter(k => !f[k]);
      if (missing.length === 0) {
        results.checks.push({ label: 'Field completeness', status: 'pass', detail: 'All critical fields extracted' });
      } else {
        results.checks.push({ label: 'Field completeness', status: 'warn', detail: 'Missing: ' + missing.join(', ') });
        results.warnings.push('Could not extract: ' + missing.join(', ') + '. Please verify manually.');
      }
    }

    // 4. Format Validation
    if (docType === 'emirates_id' && f.idNumber) {
      if (/^784-\d{4}-\d{7}-\d$/.test(f.idNumber)) {
        results.checks.push({ label: 'ID format', status: 'pass', detail: 'Valid Emirates ID format' });
      } else {
        results.checks.push({ label: 'ID format', status: 'fail', detail: 'Invalid Emirates ID number format' });
        results.errors.push('Emirates ID number format is incorrect.');
        results.overallStatus = results.overallStatus === 'fail' ? 'fail' : 'warn';
      }
    }

    // 5. Authenticity Score
    const auth = extraction.authenticity || {};
    if (auth.score >= 0.7) {
      results.checks.push({ label: 'Authenticity', status: 'pass', detail: 'Document structure appears genuine (' + Math.round(auth.score * 100) + '%)' });
    } else if (auth.score >= 0.4) {
      results.checks.push({ label: 'Authenticity', status: 'warn', detail: 'Partial structure match (' + Math.round(auth.score * 100) + '%) — verify manually' });
      results.warnings.push('Document authenticity could not be fully confirmed.');
    } else {
      results.checks.push({ label: 'Authenticity', status: 'fail', detail: 'Low confidence (' + Math.round(auth.score * 100) + '%) — may not be a valid document' });
      results.overallStatus = 'warn';
    }

    // 6. Procedure fitness
    if (procedureId && PROCEDURE_DOCS[procedureId]) {
      const required = PROCEDURE_DOCS[procedureId];
      if (required.includes(docType)) {
        results.checks.push({ label: 'Procedure match', status: 'pass', detail: 'This document is required for this procedure' });
      } else {
        results.checks.push({ label: 'Procedure match', status: 'warn', detail: 'This document type is not in the required list for this procedure' });
        results.warnings.push('This document may not be needed for the selected procedure.');
      }
    }

    if (results.overallStatus === 'pass' && results.warnings.length > 0) results.overallStatus = 'warn';
    return results;
  }

  // ── Cross-Document Validation ──
  function crossValidate(extractions) {
    const results = [];
    const names = [];
    extractions.forEach(e => {
      const n = e.fields?.fullName || e.fields?.employeeName || e.fields?.accountHolder || e.fields?.tenantName;
      if (n) names.push({ doc: e.documentType, name: n.toLowerCase().trim() });
    });
    if (names.length >= 2) {
      const base = names[0].name;
      for (let i = 1; i < names.length; i++) {
        const sim = similarity(base, names[i].name);
        if (sim > 0.8) {
          results.push({ status: 'pass', detail: 'Name matches between ' + names[0].doc + ' and ' + names[i].doc });
        } else {
          results.push({ status: 'warn', detail: 'Name mismatch: "' + names[0].name + '" vs "' + names[i].name + '"' });
        }
      }
    }
    return results;
  }

  // ── Helpers ──
  function parseDate(str) {
    if (!str) return null;
    const p = str.split('/');
    if (p.length === 3) return new Date(parseInt(p[2]), parseInt(p[1]) - 1, parseInt(p[0]));
    return new Date(str);
  }

  function similarity(a, b) {
    if (a === b) return 1;
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    if (longer.length === 0) return 1;
    let matches = 0;
    const words1 = longer.split(/\s+/);
    const words2 = shorter.split(/\s+/);
    words2.forEach(w => { if (words1.includes(w)) matches++; });
    return matches / Math.max(words1.length, words2.length);
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];
        resolve({ base64, dataUrl, mimeType: file.type });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function getDocLabel(typeId) {
    const def = Object.values(DOC_TYPES).find(d => d.id === typeId);
    return def ? def.label : typeId;
  }

  // ── Main Scan Function ──
  async function scan(file, options = {}) {
    const { apiKey, procedureId, onProgress } = options;
    const progressCb = onProgress || (() => {});

    progressCb('reading', 'Reading file...');
    const { base64, dataUrl, mimeType } = await fileToBase64(file);

    let extraction;
    progressCb('extracting', 'Extracting document data...');

    if (apiKey) {
      try {
        extraction = await extractWithGemini(base64, mimeType, apiKey);
      } catch (err) {
        console.warn('Gemini Vision failed, falling back to Tesseract:', err);
        progressCb('extracting', 'Falling back to offline OCR...');
        extraction = await extractWithTesseract(dataUrl);
      }
    } else {
      extraction = await extractWithTesseract(dataUrl);
    }

    progressCb('verifying', 'Verifying document...');
    const verification = verifyDocument(extraction, procedureId);

    progressCb('done', 'Scan complete');
    return {
      documentType: extraction.documentType,
      documentLabel: getDocLabel(extraction.documentType),
      confidence: extraction.confidence,
      fields: extraction.fields || {},
      authenticity: extraction.authenticity || {},
      verification,
      rawText: extraction.rawText || '',
      timestamp: new Date().toISOString()
    };
  }

  // ── Public API ──
  return {
    scan,
    crossValidate,
    verifyDocument,
    getDocLabel,
    DOC_TYPES,
    PROCEDURE_DOCS
  };
})();

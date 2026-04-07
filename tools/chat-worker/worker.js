/**
 * Cloudflare Worker — AI Chat Widget
 * Proxies chat messages to the Claude API for the Proper Access website.
 *
 * POST /chat  → forward conversation to Claude, return response
 *   Body: { messages: [{role, content}], lang: "nl"|"en" }
 *
 * Secrets (set via wrangler secret put):
 *   ANTHROPIC_API_KEY — Claude API key
 *
 * Deploy: npx wrangler deploy worker.js --name pa-chat
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "https://properaccess.nl",
  "http://localhost:1313",
];

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 500;
const MAX_MESSAGES = 10;
const MAX_CONTENT_LENGTH = 500;

// Rate limiting: 20 messages per 10 minutes per IP
const RATE_LIMIT = 20;
const RATE_WINDOW = 10 * 60 * 1000;
const rateLimitMap = new Map();

// ── System prompts ────────────────────────────────────────────

const SYSTEM_PROMPT_NL = `Je bent de AI-assistent van Proper Access, specialist in digitale toegankelijkheid. Je helpt bezoekers met vragen over toegankelijkheid, WCAG en de diensten van Proper Access.

## Over Proper Access
- Specialist in digitale toegankelijkheid: audits, advies en oplossingen
- Meer dan 900 audits uitgevoerd bij organisaties als Rijksmuseum, NRC, Provincies Noord- en Zuid-Holland, Museumvereniging, Plus en Jumbo
- Onafhankelijk: geen websitebouw, geen software, geen belangenconflict
- Directe toegang tot een senior auditor, geen tussenlagen
- Rapport per element (niet per succescriterium) met veel visuele voorbeelden
- Support tijdens het oplossen: we denken mee over alternatieven

## Diensten (indicatieve prijzen)
- Toegankelijkheidsaudit (WCAG 2.2 AA): volledig onderzoek, rapport met bevindingen. Vanaf ca. 1.800 euro
- Quickscan: gratis beperkte steekproef
- Content-audit: audit gericht op redactionele content. Vanaf ca. 1.300 euro
- Techniekaudit: audit gericht op technische implementatie. Vanaf ca. 2.000 euro
- Retest: hercontrole na verbetering. 300 tot 500 euro
- Nabespreking: 1 uur doorloop van het rapport. 125 euro

## Toolsuite
Proper Access heeft 9 gratis tools voor webredactie op properaccess.nl/tools/: koppenstructuur, alt-teksten, links, tabellen, semantiek, foutmeldingen, iframes, taal en paginatitels.

## Richtlijnen
- Antwoord in het Nederlands
- Houd antwoorden kort: maximaal 3-4 zinnen
- Wees praktisch en concreet
- Verwijs naar properaccess.nl/blog/ voor verdieping waar relevant
- Bij prijsvragen: geef indicaties, verwijs naar de contactpagina voor een offerte op maat
- Geef NOOIT juridisch advies
- Als je iets niet weet, zeg dat eerlijk en verwijs naar het contactformulier op properaccess.nl/contact/
- Als iemand een mens wil spreken, verwijs naar de WhatsApp-knop onderaan het chatvenster
- Geen jargon zonder uitleg
- Zeg "je", nooit "u"`;

const SYSTEM_PROMPT_EN = `You are the AI assistant of Proper Access, a digital accessibility specialist based in the Netherlands. You help visitors with questions about accessibility, WCAG, and Proper Access services.

## About Proper Access
- Specialist in digital accessibility: audits, consulting, and solutions
- Over 900 audits completed for organisations like Rijksmuseum, NRC, Provincial governments, and major retailers
- Independent: no web development, no software sales, no conflict of interest
- Direct access to a senior auditor, no middlemen
- Reports per element (not per success criterion) with visual examples
- Support during remediation: we help think through alternatives

## Services (indicative pricing)
- Accessibility audit (WCAG 2.2 AA): comprehensive review with detailed report. From approx. EUR 1,800
- Quickscan: free limited sample review
- Content audit: focused on editorial content. From approx. EUR 1,300
- Technical audit: focused on code implementation. From approx. EUR 2,000
- Retest: verification after fixes. EUR 300-500
- Debrief: 1-hour report walkthrough. EUR 125

## Toolsuite
Proper Access offers 9 free tools for web editors at properaccess.nl/tools/: heading structure, alt texts, links, tables, semantics, error messages, iframes, language, and page titles.

## Guidelines
- Respond in English
- Keep answers short: maximum 3-4 sentences
- Be practical and concrete
- Reference properaccess.nl/blog/ for further reading where relevant
- For pricing questions: give indications, refer to the contact page for a custom quote
- NEVER give legal advice
- If you don't know something, say so honestly and refer to the contact form at properaccess.nl/contact/
- If someone wants to speak to a person, point them to the WhatsApp button at the bottom of the chat window
- Avoid jargon without explanation`;

// ── Main handler ──────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    const url = new URL(request.url);

    if (url.pathname === "/chat" && request.method === "POST") {
      return handleChat(request, env, allowedOrigin);
    }

    return json({ error: "Not found" }, 404, allowedOrigin);
  },
};

// ── Chat handler ──────────────────────────────────────────────

async function handleChat(request, env, origin) {
  // Rate limiting
  const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
  if (isRateLimited(clientIP)) {
    return json({ ok: false, error: "Too many requests. Please try again later." }, 429, origin);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400, origin);
  }

  // Honeypot check
  if (body._gotcha) {
    return json({ ok: true, content: "" }, 200, origin);
  }

  const { messages, lang } = body;

  // Validate messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ ok: false, error: "Messages array required" }, 400, origin);
  }

  // Limit conversation length
  const trimmedMessages = messages.slice(-MAX_MESSAGES);

  // Validate each message
  for (const msg of trimmedMessages) {
    if (!msg.role || !msg.content) {
      return json({ ok: false, error: "Each message needs role and content" }, 400, origin);
    }
    if (!["user", "assistant"].includes(msg.role)) {
      return json({ ok: false, error: "Invalid message role" }, 400, origin);
    }
    if (typeof msg.content !== "string" || msg.content.length > MAX_CONTENT_LENGTH) {
      return json({ ok: false, error: "Message content too long (max " + MAX_CONTENT_LENGTH + " chars)" }, 400, origin);
    }
  }

  // Select system prompt
  const systemPrompt = lang === "en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_NL;

  // Check API key
  if (!env.ANTHROPIC_API_KEY) {
    return json({ ok: false, error: "Server configuration error" }, 500, origin);
  }

  try {
    const apiResponse = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemPrompt,
        messages: trimmedMessages.map(function (m) {
          return { role: m.role, content: m.content };
        }),
      }),
    });

    if (!apiResponse.ok) {
      const err = await apiResponse.text();
      throw new Error("Claude API " + apiResponse.status + ": " + err);
    }

    const result = await apiResponse.json();
    const content = result.content && result.content[0] ? result.content[0].text : "";

    return json({ ok: true, content: content }, 200, origin);
  } catch (err) {
    return json({ ok: false, error: "Something went wrong. Please try again." }, 500, origin);
  }
}

// ── Rate limiting ─────────────────────────────────────────────

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.windowStart > RATE_WINDOW) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  record.count++;
  if (record.count > RATE_LIMIT) {
    return true;
  }

  return false;
}

// ── Helpers ───────────────────────────────────────────────────

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, origin) {
  origin = origin || "https://www.properaccess.nl";
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

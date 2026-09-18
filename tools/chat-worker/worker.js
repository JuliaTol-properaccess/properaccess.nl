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
const MODEL = "claude-sonnet-5";
const MAX_TOKENS = 500;

const ERROR_MESSAGES = {
  nl: "Er ging iets mis. Probeer het later opnieuw.",
  en: "Something went wrong. Please try again later.",
};
const MAX_MESSAGES = 10;
const MAX_CONTENT_LENGTH = 500;

// Rate limiting: 20 messages per 10 minutes per IP
const RATE_LIMIT = 20;
const RATE_WINDOW = 10 * 60 * 1000;
const rateLimitMap = new Map();

// ── System prompts ────────────────────────────────────────────

const SYSTEM_PROMPT_NL = `Je bent de AI-assistent van Proper Access, specialist in digitale toegankelijkheid. Je helpt bezoekers met vragen over toegankelijkheid, WCAG en de diensten en tools van Proper Access.

## Over Proper Access
- Specialist in digitale toegankelijkheid: WCAG-audits, advies en eigen tools
- 950+ audits sinds 2019 (stand augustus 2026), voor opdrachtgevers als Rijksmuseum, NRC, De Bijenkorf, Provincies Noord- en Zuid-Holland, Museumvereniging, Plus en Jumbo
- Kantoren in Amsterdam en Emmeloord
- Onafhankelijk: we bouwen en beheren geen websites, dus we keuren nooit ons eigen werk. We maken wel eigen tools, gebouwd en gehost in de EU
- Rapport per element, niet per succescriterium, met veel visuele voorbeelden
- Klanten die een rapport van ons hebben gekregen, stellen hun vragen rechtstreeks aan een senior auditor, via de strippenkaart. Wie nog geen klant is, neemt contact op via de contactpagina

## Diensten (indicaties, exclusief btw)
- WCAG-audit (WCAG 2.2 AA): vanaf circa € 2.250 voor een eenvoudige website. De meeste websites liggen rond € 3.150. https://www.properaccess.nl/toegankelijkheidsaudit/
- Mini-audit: € 495. https://www.properaccess.nl/webshop-quickscan/
- Contentaudit, gericht op redactionele content: vanaf circa € 1.650. https://www.properaccess.nl/contentaudit/
- Techniekaudit, gericht op de technische bouw: vanaf circa € 2.700. https://www.properaccess.nl/techniekaudit/
- App-audit: https://www.properaccess.nl/app-toegankelijkheid-testen/
- Hercontrole na het oplossen: de prijs hangt af van het aantal bevindingen in het rapport, meestal € 300 tot € 1.100. https://www.properaccess.nl/hercontrole/
- Nabespreking van het rapport: € 250 per uur
- Strippenkaart: één strip is één vraag over één onderwerp. Bundels vanaf 10 strippen voor € 250. https://www.properaccess.nl/strippenkaart/
- Doorlopende monitoring: https://www.properaccess.nl/toegankelijkheids-abonnement/
- Offerte aanvragen: https://www.properaccess.nl/offerte-wcag-onderzoek/

## Eigen tools
- WCAG Radar: checkt kleurcontrast, koppenstructuur, alt-teksten, linkteksten, tabellen en tekstafstand op elke pagina, in je eigen browser. 28 van de 45 checks zijn gratis en vragen geen account. https://www.properaccess.nl/tools/wcag-radar/
- PDF-checker: controleert gratis welke toegankelijkheidsfouten in een PDF zitten, zonder account. Het bestand gaat weg zodra de controle klaar is. https://www.properaccess.nl/tools/pdf-checker/
- Alle tools: https://www.properaccess.nl/tools/

## Meer lezen
- De European Accessibility Act: https://www.properaccess.nl/eaa/
- De toegankelijkheidsverklaring: https://www.properaccess.nl/toegankelijkheidsverklaring/
- Blog: https://www.properaccess.nl/blog/
- Contact: https://www.properaccess.nl/contact/ of 085 5055 890

## Richtlijnen
- Antwoord in het Nederlands
- Houd antwoorden kort: maximaal 3 tot 4 zinnen
- Wees praktisch en concreet
- Sluit af met één link naar de pagina die het best bij de vraag past. Schrijf de volledige URL uit, zonder markdown. Gebruik alleen URL's uit deze instructie
- Gebruik geen markdown: geen sterretjes, geen koppen, geen opsommingstekens
- Bij prijsvragen: geef de indicatie en verwijs naar de offertepagina
- Geef NOOIT juridisch advies
- Weet je iets niet, zeg dat dan en verwijs naar de contactpagina
- Wil iemand een mens spreken, verwijs dan naar de contactpagina of het telefoonnummer
- Bied geen trainingen aan
- Noem geen prijzen of feiten die hier niet staan
- Geen jargon zonder uitleg
- Zeg "je", nooit "u"
- Gebruik geen emoji's`;

const SYSTEM_PROMPT_EN = `You are the AI assistant of Proper Access, a digital accessibility specialist based in the Netherlands. You help visitors with questions about accessibility, WCAG, and Proper Access services and tools.

## About Proper Access
- Specialist in digital accessibility: WCAG audits, consulting, and our own tools
- 950+ audits since 2019 (as of August 2026), for organisations like Rijksmuseum, NRC, De Bijenkorf, and Dutch provincial governments
- Offices in Amsterdam and Emmeloord
- Independent: we do not build or maintain websites, so we never audit our own work. We do build our own tools, made and hosted in the EU
- Reports per element (not per success criterion) with visual examples
- Clients who received a report from us ask their questions directly to a senior auditor, through accessibility credits

## Services (indicative pricing, excluding VAT)
- Accessibility audit (WCAG 2.2 AA): from approx. EUR 2,250 for a simple website. https://www.properaccess.nl/en/accessibility-audit/
- Mini audit: EUR 495. https://www.properaccess.nl/en/mini-audit/
- Re-check after fixes: the price depends on the number of findings, usually EUR 300 to 1,100
- Debrief of the report: EUR 250 per hour
- Accessibility credits: one credit is one question on one topic. https://www.properaccess.nl/en/accessibility-credits/
- The European Accessibility Act: https://www.properaccess.nl/en/european-accessibility-act/
- Tools: https://www.properaccess.nl/en/tools/
- Contact: https://www.properaccess.nl/en/contact/

## Guidelines
- Respond in English
- Keep answers short: maximum 3-4 sentences
- Be practical and concrete
- End with one link to the page that best fits the question. Write the full URL, without markdown. Only use URLs from these instructions
- Do not use markdown
- For pricing questions: give indications, refer to the contact page for a custom quote
- NEVER give legal advice
- If you don't know something, say so and refer to the contact page
- If someone wants to speak to a person, refer to the contact page
- Do not offer training
- Avoid jargon without explanation
- Do not use emojis`;

// ── Main handler ──────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "";

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
        // Zonder dit denkt Sonnet 5 standaard mee (adaptive thinking) en gaat
        // dat van de 500 output-tokens af; voor korte chatantwoorden onnodig.
        thinking: { type: "disabled" },
        output_config: { effort: "low" },
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
    console.error("pa-chat error:", err.message);
    return json({ ok: false, error: ERROR_MESSAGES[lang === "en" ? "en" : "nl"] }, 500, origin);
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
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function json(data, status, origin) {
  origin = origin || "";
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

/**
 * Cloudflare Worker — AI Chat Widget
 * Proxies chat messages to the Claude API for the Proper Access website.
 *
 * POST /chat       → forward conversation to Claude, return response
 *   Body: { messages: [{role, content}], lang: "nl"|"en", pagina: "/pad/" }
 * GET  /rapport    → de cijfers over de afgelopen dagen (sleutel nodig)
 * GET  /steekproef → de regels zelf, leesbaar, om de antwoorden na te kijken
 *                    (sleutel nodig)
 *
 * Van elke vraag bewaren we de vraag, het antwoord, de links uit dat antwoord,
 * het tijdstip, de taal en de pagina. 90 dagen. Geen IP-adres, geen hash
 * daarvan, geen cookie, geen gespreksnummer. Zie schema.sql en README.md. Het
 * opruimen loopt op een cron trigger.
 *
 * Bindings (zie wrangler.json):
 *   DB — D1-database pa-chat-vragen. Ontbreekt die, dan blijft de chat werken
 *        en bewaart de Worker niets.
 * Secrets (npx wrangler secret put):
 *   ANTHROPIC_API_KEY — Claude API key
 *   RAPPORT_SLEUTEL   — wachtwoord voor /rapport en /steekproef
 *
 * Deploy: cd tools/chat-worker && npx wrangler deploy
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

// Grenzen op wat er in het logboek komt. Het antwoord blijft door MAX_TOKENS
// onder de 2.000 tekens; 4.000 is de harde grens als dat ooit verandert.
const MAX_ANTWOORD_LENGTH = 4000;
const MAX_PAGINA_LENGTH = 200;

// Antwoorden die hierheen verwijzen, wijken uit naar de contactpagina: de
// assistent wist het zelf niet. Het aandeel daarvan staat in het weekoverzicht.
const CONTACTPADEN = ["/contact/", "/en/contact/"];

// Rate limiting: 20 messages per 10 minutes per IP
const RATE_LIMIT = 20;
const RATE_WINDOW = 10 * 60 * 1000;
const rateLimitMap = new Map();

// Bewaartermijn van de vragen. De cron trigger in wrangler.json gooit elke
// nacht weg wat ouder is.
const BEWAARTERMIJN_DAGEN = 90;

// ── System prompts ────────────────────────────────────────────

const SYSTEM_PROMPT_NL = `Je bent de AI-assistent van Proper Access, specialist in digitale toegankelijkheid. Je helpt bezoekers met vragen over toegankelijkheid, WCAG en de diensten en tools van Proper Access.

## Over Proper Access
- Specialist in digitale toegankelijkheid: WCAG-audits, advies en eigen tools
- 950+ audits sinds 2019 (stand augustus 2026), voor opdrachtgevers als Rijksmuseum, NRC, De Bijenkorf, Provincies Noord- en Zuid-Holland, Museumvereniging, Plus en Jumbo
- Kantoor in Amsterdam
- Onafhankelijk: we bouwen en beheren geen websites, dus we keuren nooit ons eigen werk
- We maken wel eigen software. De monitoring van je website en de WCAG Radar verkopen we, de PDF-checker is gratis. Alles gebouwd en gehost in de EU
- Rapport per element, niet per succescriterium, met veel visuele voorbeelden
- Klanten die een rapport van ons hebben gekregen, stellen hun vragen rechtstreeks aan een senior auditor, via de strippenkaart. Wie nog geen klant is, neemt voor een eerste gesprek contact op via de contactpagina
- Iedereen kan een strippenkaart kopen, ook zonder audit bij ons

## Diensten (indicaties, exclusief btw)
- WCAG-audit (WCAG 2.2 AA): vanaf circa € 2.250 voor een eenvoudige website. De meeste websites liggen rond € 3.150. https://www.properaccess.nl/toegankelijkheidsaudit/
- Mini-audit: € 495. https://www.properaccess.nl/webshop-quickscan/
- Contentaudit, gericht op redactionele content: vanaf circa € 1.650. https://www.properaccess.nl/contentaudit/
- Techniekaudit, gericht op de technische bouw: vanaf circa € 2.700. https://www.properaccess.nl/techniekaudit/
- App-audit: https://www.properaccess.nl/app-toegankelijkheid-testen/
- Hercontrole na het oplossen: de prijs hangt af van het aantal bevindingen in het rapport, meestal € 300 tot € 1.100. https://www.properaccess.nl/hercontrole/
- Nabespreking van het rapport: € 250 per uur
- Strippenkaart: één strip is één vraag over één onderwerp. Bundels vanaf 10 strippen voor € 250. https://www.properaccess.nl/strippenkaart/
- Monitoring van je website: elke maand meten we je hele website automatisch na. Je ziet in één dashboard of je website beter of slechter wordt, wat er nieuw is en wat er is opgelost. https://www.properaccess.nl/automatische-monitoring/
- Training voor webredacteuren, per deelnemer: een dagdeel over content € 595, een dagdeel over PDF's € 795, beide op één dag € 1.195. https://www.properaccess.nl/trainen-van-webredactie/
- Toegankelijkheids-abonnement, voor organisaties met meerdere websites en apps: https://www.properaccess.nl/toegankelijkheids-abonnement/
- Offerte aanvragen: https://www.properaccess.nl/offerte-wcag-onderzoek/

## Eigen software
- Monitoring: ons eigen dashboard, zie de dienst hierboven. https://www.properaccess.nl/automatische-monitoring/
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
- Vraagt iemand of we software maken: ja. Noem de monitoring en de WCAG Radar
- Noem geen prijzen of feiten die hier niet staan
- Geen jargon zonder uitleg
- Zeg "je", nooit "u"
- Gebruik geen emoji's`;

const SYSTEM_PROMPT_EN = `You are the AI assistant of Proper Access, a digital accessibility specialist based in the Netherlands. You help visitors with questions about accessibility, WCAG, and Proper Access services and tools.

## About Proper Access
- Specialist in digital accessibility: WCAG audits, consulting, and our own tools
- 950+ audits since 2019 (as of August 2026), for organisations like Rijksmuseum, NRC, De Bijenkorf, and Dutch provincial governments
- Office in Amsterdam
- Independent: we do not build or maintain websites, so we never audit our own work
- We do make and sell our own software, such as the WCAG Radar. Made and hosted in the EU
- Reports per element (not per success criterion) with visual examples
- Clients who received a report from us ask their questions directly to a senior auditor, through accessibility credits
- Anyone can buy accessibility credits, also without an audit from us

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
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    const url = new URL(request.url);

    if (url.pathname === "/chat" && request.method === "POST") {
      return handleChat(request, env, allowedOrigin, ctx);
    }

    if (url.pathname === "/rapport" && request.method === "GET") {
      return handleRapport(env, url);
    }

    if (url.pathname === "/steekproef" && request.method === "GET") {
      return handleSteekproef(env, url);
    }

    return json({ error: "Not found" }, 404, allowedOrigin);
  },

  // Cron trigger uit wrangler.json. Dwingt de bewaartermijn af, ook in een week
  // waarin niemand iets vraagt.
  async scheduled(event, env) {
    const weg = await opschonen(env);
    console.log("pa-chat opschonen: " + weg + " vragen ouder dan " + BEWAARTERMIJN_DAGEN + " dagen verwijderd");
  },
};

// ── Chat handler ──────────────────────────────────────────────

async function handleChat(request, env, origin, ctx) {
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

  const { messages, lang, pagina } = body;

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
  const taal = lang === "en" ? "en" : "nl";
  const systemPrompt = taal === "en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_NL;

  // Wat er van deze vraag in het logboek komt. Het antwoord komt er straks bij.
  const regel = {
    taal: taal,
    pagina: schoonPagina(pagina),
    vraag: laatsteVraag(trimmedMessages),
  };

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

    wegschrijven(ctx, env, regel, content);

    return json({ ok: true, content: content }, 200, origin);
  } catch (err) {
    console.error("pa-chat error:", err.message);
    // De vraag gaat wel het logboek in, met een leeg antwoord. Een vraag die
    // geen antwoord kreeg hoort juist op de verbeterlijst.
    wegschrijven(ctx, env, regel, "");
    return json({ ok: false, error: ERROR_MESSAGES[taal] }, 500, origin);
  }
}

// ── Het logboek ───────────────────────────────────────────────

/**
 * Zet het wegschrijven in de wacht, buiten het antwoord om: de bezoeker wacht
 * er niet op en een fout in de database raakt de chat niet.
 */
function wegschrijven(ctx, env, regel, antwoord) {
  const klaar = bewaarRegel(env, regel, antwoord);
  if (ctx && typeof ctx.waitUntil === "function") {
    ctx.waitUntil(klaar);
  }
  return klaar;
}

/**
 * De laatste vraag van de bezoeker uit het gesprek.
 *
 * Alleen de laatste. De widget stuurt bij elke vraag het hele gesprek mee, dus
 * de eerdere vragen staan al in het logboek. En alleen een `user`-bericht.
 */
function laatsteVraag(messages) {
  const laatste = messages[messages.length - 1];
  if (!laatste || laatste.role !== "user") return "";
  return String(laatste.content).trim().slice(0, MAX_CONTENT_LENGTH);
}

/**
 * Schrijft één rij weg: de vraag, het antwoord, de links uit dat antwoord, het
 * tijdstip, de taal en de pagina. Een e-mailadres of telefoonnummer dat een
 * bezoeker toch intypt, gaat eruit voordat de rij de database in gaat.
 */
async function bewaarRegel(env, regel, antwoord) {
  if (!env.DB) return;
  if (!regel.vraag) return;

  const tekst = String(antwoord || "").slice(0, MAX_ANTWOORD_LENGTH);

  try {
    await env.DB.prepare(
      "INSERT INTO vraag (moment, taal, pagina, vraag, antwoord, links) VALUES (?, ?, ?, ?, ?, ?)"
    )
      .bind(
        new Date().toISOString(),
        regel.taal,
        regel.pagina,
        anonimiseer(regel.vraag),
        anonimiseer(tekst),
        linksUit(tekst)
      )
      .run();
  } catch (err) {
    // Een chat die blijft werken is belangrijker dan een compleet logboek.
    console.error("pa-chat bewaren mislukt:", err.message);
  }
}

/**
 * Haalt een e-mailadres en een telefoonnummer uit de tekst. De
 * privacyverklaring vraagt bezoekers om geen persoonsgegevens in te typen; dit
 * vangt op wat er toch in staat.
 *
 * Het telefoonpatroon staat geen punt toe als scheidingsteken. Anders zou
 * "1.4.11 1.4.12 2.5.8" als telefoonnummer tellen, en juist dat soort vragen
 * willen we kunnen teruglezen. Negen cijfers is de ondergrens: "085 5055 890"
 * en "+31 6 28742275" vallen eronder, een prijs van "2250" niet.
 */
function anonimiseer(tekst) {
  if (!tekst) return tekst;
  let uit = String(tekst).replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g, "[weggelaten]");
  uit = uit.replace(/\+?\d[\d\s()/-]{7,}\d/g, function (gevonden) {
    const cijfers = gevonden.replace(/\D/g, "").length;
    return cijfers >= 9 ? "[weggelaten]" : gevonden;
  });
  return uit;
}

/**
 * De URL's uit het antwoord, zonder dubbele, gescheiden door een spatie.
 * Een punt of komma direct achter de URL hoort bij de zin, niet bij de link.
 */
function linksUit(antwoord) {
  const gevonden = String(antwoord || "").match(/https?:\/\/[^\s<>"'`)\]]+/g) || [];
  const uniek = [];
  for (const ruw of gevonden) {
    const url = ruw.replace(/[.,;:!?]+$/, "");
    if (url && uniek.indexOf(url) === -1) uniek.push(url);
  }
  return uniek.join(" ");
}

/**
 * De pagina waar de vraag gesteld is, als pad binnen de site. Alleen een pad:
 * geen volledige URL, geen querystring en geen fragment, want daar kan van
 * alles in staan wat we niet willen bewaren.
 */
function schoonPagina(pagina) {
  if (typeof pagina !== "string") return null;
  const pad = pagina.split("?")[0].split("#")[0].trim();
  if (!pad.startsWith("/") || pad.startsWith("//")) return null;
  if (/[\s<>"']/.test(pad)) return null;
  return pad.slice(0, MAX_PAGINA_LENGTH);
}

/** Gooit weg wat ouder is dan de bewaartermijn. Geeft het aantal rijen terug. */
async function opschonen(env) {
  if (!env.DB) return 0;

  const uitkomst = await env.DB.prepare("DELETE FROM vraag WHERE moment < ?")
    .bind(dagenGeleden(BEWAARTERMIJN_DAGEN))
    .run();

  return (uitkomst && uitkomst.meta && uitkomst.meta.changes) || 0;
}

// ── Rapport ───────────────────────────────────────────────────

/**
 * Waar de vragen over gaan. Eén regel per onderwerp, in deze volgorde
 * doorlopen; een vraag kan bij meer dan één onderwerp horen en wordt dan ook
 * bij alle passende geteld. Zo zie je van een prijsvraag over een PDF beide
 * kanten. Wat nergens op past, komt bij `zonder onderwerp` en is de lijst om
 * naar te kijken: daar staan de onderwerpen die we nog niet herkennen.
 */
const ONDERWERPEN = [
  ["prijs", /\b(prijs|prijzen|kost(en|t)?|tarief|tarieven|bedrag|budget|euro|duur|goedkoop|price|cost|how much)\b|€/i],
  ["offerte", /\b(offerte|aanbieding|quote|proposal|aanvragen|aanvraag)\b/i],
  ["audit of onderzoek", /\b(audit|onderzoek|toets(en|ing)?|keuring|steekproef|wcag-em|rapport(en|age)?|report)\b/i],
  ["hercontrole", /\b(hercontrole|herkeuring|retest|opnieuw (ge)?test|na het oplossen)\b/i],
  ["wcag-criterium", /\b(succescriterium|succes criterium|criterium|sc ?\d\.\d|\d\.\d\.\d+|niveau (a|aa|aaa)|wcag ?2\.\d)\b/i],
  ["wetgeving", /\b(eaa|european accessibility act|bdto|besluit digitale|wet|wettelijk|verplicht|verplichting|boete|handhaving|toezicht|inspectie|wanneer moet|deadline|law|legal|required)\b/i],
  ["toegankelijkheidsverklaring", /\b(verklaring|toegankelijkheidsverklaring|register|status (a|b|c|d)|logius|statement)\b/i],
  ["pdf", /\bpdf('s|s)?\b|\b(document(en)?|word|powerpoint|indesign)\b/i],
  ["monitoring", /\b(monitoring|monitoren|dashboard|elke maand|maandelijks|blijven meten)\b/i],
  ["wcag radar of tools", /\b(radar|extensie|plug-?in|browser|tool(s)?|scan(nen|ner)?|checker|axe|lighthouse)\b/i],
  ["app", /\b(app|apps|ios|android|native|mobiel)\b/i],
  ["training of leren", /\b(training|cursus|workshop|les|leren|opleiding|webinar|kennissessie)\b/i],
  ["strippenkaart", /\b(strip(pen)?|strippenkaart|credits?|vraag stellen|senior auditor)\b/i],
  ["samenwerken", /\b(contact|bellen|telefoon|mail|afspraak|kennismaken|mens|iemand spreken|vacature|werken bij|partner|reseller)\b/i],
  ["over Proper Access", /\b(wie (is|zijn|ben)|oprichter|julia|jullie bedrijf|ervaring|referenties|klanten|hoeveel audits|onafhankelijk|waar (zitten|staan) jullie|about you)\b/i],
  ["zelf oplossen", /\b(hoe (maak|zorg|los|repareer|fix)|oplossen|repareren|alt-?tekst|contrast|focus|toetsenbord|schermlezer|aria|koppen|formulier|tabel|video|ondertitel)\b/i],
];

/**
 * Woorden die in een vraag niets over het onderwerp zeggen. Nodig voor de
 * woordenlijst onder het rapport: zonder deze lijst is de top tien `is`,
 * `een`, `the` en `my`.
 */
const STOPWOORDEN = new Set(
  ("de het een en of maar want dus als dan die dat deze dit daar hier er is zijn was waren wordt worden werd " +
    "heb hebt heeft hebben had ik je jij jullie we wij ze zij hij u uw mijn ons onze hun haar zich " +
    "wat welke wie waar waarom wanneer hoe hoeveel kan kun kunt kunnen moet moeten mag mogen wil willen zal zou zouden " +
    "niet geen ook nog wel al alleen meer veel weinig heel erg even graag even misschien soms altijd nooit " +
    "van voor met bij aan op in om te ten door over naar uit tot per sinds tegen zonder tussen onder boven " +
    "ja nee hallo hoi goedemiddag goedemorgen dank bedankt alvast vraag vragen weten zien maken doen gaan komen " +
    "the a an and or but so if then that this these those there here it its is are was were be been being " +
    "have has had do does did can could should would will shall may might must i you we they he she my our your their " +
    "not no also still only more much many very please thanks thank hello hi what which who where why when how " +
    "of for with by at on in to from about into out until against without between under over up down " +
    "me us them something anything nothing know see make get go come need want").split(/\s+/)
);

async function handleRapport(env, url) {
  const sleutel = url.searchParams.get("sleutel") || "";
  if (!env.RAPPORT_SLEUTEL || sleutel !== env.RAPPORT_SLEUTEL) {
    return new Response("Geen toegang", { status: 401 });
  }

  if (!env.DB) {
    return new Response("Geen database aan deze Worker gekoppeld", { status: 503 });
  }

  const dagen = Math.min(
    parseInt(url.searchParams.get("dagen") || "7", 10) || 7,
    BEWAARTERMIJN_DAGEN
  );
  const data = await rapportData(env, dagen);

  // JSON voor een script, platte tekst in de browser. Zelfde keuze als bij de
  // bezoekmeting.
  if (url.searchParams.get("formaat") === "json") {
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  return new Response(tekstRapport(data), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

async function rapportData(env, dagen) {
  const vanaf = dagenGeleden(dagen);

  const vragen = await env.DB.prepare(
    "SELECT moment, taal, pagina, vraag, antwoord, links FROM vraag WHERE moment > ? ORDER BY moment DESC"
  )
    .bind(vanaf)
    .all();
  const rijen = vragen.results || [];

  const perDag = await env.DB.prepare(
    `SELECT substr(moment, 1, 10) AS dag, COUNT(*) AS aantal
       FROM vraag WHERE moment > ? GROUP BY dag ORDER BY dag`
  )
    .bind(vanaf)
    .all();

  // Twee getallen om de bewaartermijn van buiten te controleren: staat er iets
  // ouder dan 90 dagen, dan heeft de cron trigger niet gelopen.
  const hele = await env.DB.prepare(
    "SELECT COUNT(*) AS aantal, MIN(moment) AS oudste FROM vraag"
  ).first();

  const onderwerpen = ONDERWERPEN.map(function (o) {
    return { onderwerp: o[0], aantal: 0 };
  });
  let zonder = 0;

  const woorden = new Map();
  const talen = new Map();
  const paginas = new Map();
  const zonderLink = [];
  let metAntwoord = 0;
  let zonderAntwoord = 0;
  let naarContact = 0;

  for (const rij of rijen) {
    let geraakt = false;
    ONDERWERPEN.forEach(function (o, i) {
      if (o[1].test(rij.vraag)) {
        onderwerpen[i].aantal++;
        geraakt = true;
      }
    });
    if (!geraakt) zonder++;

    const links = (rij.links || "").split(" ").filter(Boolean);
    if (rij.antwoord) {
      metAntwoord++;
      if (!links.length) zonderLink.push(rij);
      if (links.some(naarContactpagina)) naarContact++;
    } else {
      // Geen antwoord is iets anders dan een antwoord zonder link: daar ging de
      // Claude API onderuit. Apart tellen, anders vervuilt het de verbeterlijst.
      zonderAntwoord++;
    }

    const taal = rij.taal || "onbekend";
    talen.set(taal, (talen.get(taal) || 0) + 1);
    if (rij.pagina) paginas.set(rij.pagina, (paginas.get(rij.pagina) || 0) + 1);

    const gezien = new Set();
    const losse = rij.vraag.toLowerCase().match(/[a-zà-ÿ0-9][a-zà-ÿ0-9'’-]{2,}/g) || [];
    for (const woord of losse) {
      if (STOPWOORDEN.has(woord) || gezien.has(woord)) continue;
      gezien.add(woord);
      woorden.set(woord, (woorden.get(woord) || 0) + 1);
    }
  }

  return {
    peildatum: new Date().toISOString(),
    dagen: dagen,
    vragen: rijen.length,
    per_dag: perDag.results || [],
    onderwerpen: onderwerpen
      .filter((o) => o.aantal > 0)
      .sort((a, b) => b.aantal - a.aantal)
      .slice(0, 10),
    zonder_onderwerp: zonder,
    per_taal: [...talen.entries()]
      .map(([taal, aantal]) => ({ taal: taal, aantal: aantal }))
      .sort((a, b) => b.aantal - a.aantal),
    per_pagina: [...paginas.entries()]
      .map(([pagina, aantal]) => ({ pagina: pagina, aantal: aantal }))
      .sort((a, b) => b.aantal - a.aantal)
      .slice(0, 10),
    met_antwoord: metAntwoord,
    zonder_antwoord: zonderAntwoord,
    naar_contact: naarContact,
    // De verbeterlijst: een antwoord zonder link. Deze vragen horen niet in
    // Slack en niet in een commit; zie README.md.
    zonder_link: zonderLink,
    woorden: [...woorden.entries()]
      .map(([woord, aantal]) => ({ woord: woord, aantal: aantal }))
      .filter((w) => w.aantal > 1)
      .sort((a, b) => b.aantal - a.aantal)
      .slice(0, 25),
    bewaartermijn_dagen: BEWAARTERMIJN_DAGEN,
    rijen_totaal: (hele && hele.aantal) || 0,
    oudste_vraag: (hele && hele.oudste) || null,
  };
}

/** Wijst deze URL naar de contactpagina? */
function naarContactpagina(url) {
  const pad = url.replace(/^https?:\/\/[^/]*/, "");
  return CONTACTPADEN.some(function (c) {
    return pad === c || pad.startsWith(c);
  });
}

function tekstRapport(data) {
  const regels = [];
  regels.push("CHATVRAGEN properaccess.nl");
  regels.push("Peildatum: " + data.peildatum.slice(0, 16).replace("T", " ") + " UTC");
  regels.push("Periode: laatste " + data.dagen + " dagen");
  regels.push("");
  regels.push("Vragen gesteld: " + data.vragen);
  regels.push(
    "Antwoord gegeven: " + data.met_antwoord +
      (data.zonder_antwoord ? ", mislukt: " + data.zonder_antwoord : "")
  );
  regels.push(
    "Uitgeweken naar de contactpagina: " + data.naar_contact + "  " +
      procent(data.naar_contact, data.met_antwoord) + " van de antwoorden"
  );
  regels.push(
    "Antwoord zonder link: " + data.zonder_link.length + "  " +
      procent(data.zonder_link.length, data.met_antwoord) + " van de antwoorden"
  );
  regels.push(
    "In de database: " + data.rijen_totaal + " vragen, oudste " +
      (data.oudste_vraag ? data.oudste_vraag.slice(0, 10) : "geen") +
      " (bewaartermijn " + data.bewaartermijn_dagen + " dagen)"
  );
  regels.push("");

  regels.push("PER DAG");
  if (!data.per_dag.length) regels.push("  (nog niets)");
  for (const r of data.per_dag) {
    regels.push("  " + r.dag + "  " + String(r.aantal).padStart(4));
  }

  regels.push("");
  regels.push("TAAL");
  if (!data.per_taal.length) regels.push("  (nog niets)");
  for (const r of data.per_taal) {
    regels.push("  " + r.taal.padEnd(30) + String(r.aantal).padStart(4));
  }

  regels.push("");
  regels.push("PAGINA WAAR DE VRAAG GESTELD IS (tien drukste)");
  if (!data.per_pagina.length) regels.push("  (nog niets)");
  for (const r of data.per_pagina) {
    regels.push("  " + r.pagina.padEnd(50) + String(r.aantal).padStart(4));
  }

  regels.push("");
  regels.push("ONDERWERPEN, TIEN MEESTGESTELDE (een vraag kan bij meer dan één onderwerp horen)");
  if (!data.onderwerpen.length) regels.push("  (nog niets)");
  for (const r of data.onderwerpen) {
    regels.push(
      "  " + r.onderwerp.padEnd(30) + String(r.aantal).padStart(4) +
        "  " + procent(r.aantal, data.vragen)
    );
  }
  regels.push(
    "  " + "zonder onderwerp".padEnd(30) + String(data.zonder_onderwerp).padStart(4) +
      "  " + procent(data.zonder_onderwerp, data.vragen)
  );

  regels.push("");
  regels.push("WOORDEN DIE VAKER TERUGKOMEN (losse woorden uit de vragen)");
  if (!data.woorden.length) regels.push("  (nog niets)");
  for (const r of data.woorden) {
    regels.push("  " + r.woord.padEnd(30) + String(r.aantal).padStart(4));
  }

  regels.push("");
  regels.push("VERBETERLIJST: VRAGEN WAAROP GEEN LINK VOLGDE");
  if (!data.zonder_link.length) regels.push("  (geen)");
  for (const r of data.zonder_link) {
    regels.push("  " + r.moment.slice(0, 16).replace("T", " ") + "  " + r.vraag);
  }

  return regels.join("\n") + "\n";
}

// ── Steekproef ────────────────────────────────────────────────

/**
 * De regels zelf, leesbaar, om de antwoorden na te kijken. Vraag, antwoord en
 * links bij elkaar in één blok. Achter dezelfde sleutel als /rapport.
 */
async function handleSteekproef(env, url) {
  const sleutel = url.searchParams.get("sleutel") || "";
  if (!env.RAPPORT_SLEUTEL || sleutel !== env.RAPPORT_SLEUTEL) {
    return new Response("Geen toegang", { status: 401 });
  }

  if (!env.DB) {
    return new Response("Geen database aan deze Worker gekoppeld", { status: 503 });
  }

  const dagen = Math.min(
    parseInt(url.searchParams.get("dagen") || "7", 10) || 7,
    BEWAARTERMIJN_DAGEN
  );
  const max = Math.min(parseInt(url.searchParams.get("max") || "25", 10) || 25, 200);

  const uitkomst = await env.DB.prepare(
    "SELECT moment, taal, pagina, vraag, antwoord, links FROM vraag WHERE moment > ? ORDER BY moment DESC LIMIT ?"
  )
    .bind(dagenGeleden(dagen), max)
    .all();
  const rijen = uitkomst.results || [];

  if (url.searchParams.get("formaat") === "json") {
    return new Response(
      JSON.stringify({ peildatum: new Date().toISOString(), dagen: dagen, regels: rijen }),
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  return new Response(steekproefTekst(rijen, dagen), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

function steekproefTekst(rijen, dagen) {
  const regels = [];
  regels.push("STEEKPROEF CHAT properaccess.nl");
  regels.push("Peildatum: " + new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC");
  regels.push("Periode: laatste " + dagen + " dagen, nieuwste eerst");
  regels.push("Regels: " + rijen.length);
  regels.push("");
  regels.push("Een e-mailadres en een telefoonnummer staan er als [weggelaten].");

  if (!rijen.length) {
    regels.push("");
    regels.push("(nog niets)");
    return regels.join("\n") + "\n";
  }

  rijen.forEach(function (r, i) {
    regels.push("");
    regels.push("── " + (i + 1) + " van " + rijen.length + " " + "─".repeat(40));
    regels.push("Tijd:      " + r.moment.slice(0, 16).replace("T", " ") + " UTC");
    regels.push("Taal:      " + (r.taal || "onbekend"));
    regels.push("Pagina:    " + (r.pagina || "onbekend"));
    regels.push("Vraag:     " + r.vraag);
    regels.push("Antwoord:  " + (r.antwoord || "(geen antwoord, de Claude API gaf een fout)"));
    regels.push("Links:     " + (r.links || "(geen)"));
  });

  return regels.join("\n") + "\n";
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

function dagenGeleden(dagen) {
  return new Date(Date.now() - dagen * 86400000).toISOString();
}

function procent(deel, totaal) {
  if (!totaal) return "0%";
  return Math.round((deel / totaal) * 100) + "%";
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

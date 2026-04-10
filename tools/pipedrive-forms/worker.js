/**
 * Cloudflare Worker — Website Form Submissions
 * Receives form submissions and forwards them to the Proper Access CRM.
 * Also sends quiz follow-up emails via Resend.
 *
 * POST /submit  → forward to CRM webhook, send quiz email if applicable
 *   Body: { bron, email, naam?, bedrijf?, bericht?, quiz_* }
 *
 * Secrets (set via wrangler secret put):
 *   WEBSITE_FORM_SECRET   — shared secret for CRM webhook
 *   RESEND_API_KEY         — for quiz follow-up emails
 *
 * Deploy: npx wrangler deploy worker.js --name pipedrive-forms
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "https://properaccess.nl",
  "http://localhost:1313",
];

const CRM_WEBHOOK_URL = "https://crm.properaccess.nl/api/webhooks/website-form";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    const url = new URL(request.url);

    if (url.pathname === "/submit" && request.method === "POST") {
      return handleSubmit(request, env, allowedOrigin);
    }

    return json({ error: "Not found" }, 404, allowedOrigin);
  },
};

async function handleSubmit(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, origin);
  }

  const { bron, email } = body;

  if (!bron || !email) {
    return json({ error: "Missing required fields: bron, email" }, 400, origin);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid email" }, 400, origin);
  }

  // Honeypot check
  if (body._gotcha) {
    return json({ ok: true }, 200, origin);
  }

  const secret = env.WEBSITE_FORM_SECRET;
  if (!secret) {
    return json({ error: "Server configuration error" }, 500, origin);
  }

  try {
    // Forward to CRM webhook
    const crmResponse = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": secret,
      },
      body: JSON.stringify(body),
    });

    if (!crmResponse.ok) {
      const err = await crmResponse.text();
      throw new Error("CRM responded with " + crmResponse.status + ": " + err);
    }

    // Send personalized email to quiz participants via Resend
    if (bron.startsWith("quiz") && env.RESEND_API_KEY) {
      try {
        await sendQuizEmail(env.RESEND_API_KEY, email, body);
      } catch (e) { /* email failure is non-blocking */ }
    }

    return json({ ok: true }, 200, origin);
  } catch (err) {
    return json({ error: "Internal error" }, 500, origin);
  }
}

// ── Quiz email ──────────────────────────────────────────────

const CATEGORY_TIPS = {
  "alt-teksten": {
    label: "Alt-teksten en afbeeldingen",
    tip: "Decoratieve afbeeldingen krijgen een lege alt-tekst (alt=\"\"). Informatieve afbeeldingen krijgen een beschrijving van wat er te zien is. Herhaal nooit het bijschrift in de alt-tekst. Tekst in een afbeelding? Gebruik liever echte HTML-tekst.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-1-1-1-niet-tekstuele-content/",
    articleTitle: "Veelgemaakte fouten: alt-teksten",
  },
  "koppenstructuur": {
    label: "Koppenstructuur",
    tip: "Gebruik kopelementen (h1-h6) in de juiste volgorde. Sla geen niveaus over. Maak tussenkopjes nooit vet in plaats van een kop — een schermlezer herkent vet niet als structuur.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-1-3-1-info-en-relaties/",
    articleTitle: "Veelgemaakte fouten: info en relaties",
  },
  "links": {
    label: "Links",
    tip: "Vermijd 'Lees meer' of 'Klik hier'. Beschrijf waar de link naartoe gaat. Opent de link in een nieuw venster? Vermeld dat in de linktekst.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-2-4-4-doel-van-de-link/",
    articleTitle: "Veelgemaakte fouten: doel van de link",
  },
  "paginatitel": {
    label: "Paginatitel",
    tip: "Elke pagina heeft een unieke, beschrijvende titel nodig. Begin met het specifieke onderdeel, eindig met de sitenaam. Dezelfde titel op meerdere pagina's is verwarrend.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-2-4-2-paginatitel/",
    articleTitle: "Veelgemaakte fouten: paginatitel",
  },
  "leesvolgorde": {
    label: "Leesvolgorde",
    tip: "Een schermlezer volgt de HTML-volgorde, niet de visuele layout. Zorg dat de kop altijd voor de metadata staat in de code, niet andersom.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-1-3-2-betekenisvolle-volgorde/",
    articleTitle: "Veelgemaakte fouten: betekenisvolle volgorde",
  },
  "kleur-en-contrast": {
    label: "Kleur en contrast",
    tip: "Gebruik kleur nooit als enige manier om informatie over te brengen. Voeg altijd tekst, iconen of patronen toe. Zorg voor minimaal 4,5:1 contrast tussen tekst en achtergrond.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-1-4-1-gebruik-van-kleur/",
    articleTitle: "Veelgemaakte fouten: gebruik van kleur",
  },
  "formulieren": {
    label: "Formulieren",
    tip: "Gebruik altijd zichtbare labels (geen placeholders als label). Foutmeldingen moeten uitleggen wat er mis is en bij welk veld. Leg uit wat symbolen (zoals *) betekenen.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-3-3-1-foutidentificatie/",
    articleTitle: "Veelgemaakte fouten: foutidentificatie",
  },
  "documenten": {
    label: "PDF's en documenten",
    tip: "Controleer altijd of een PDF getagd is voordat je hem publiceert. Koppen, lijsten, afbeeldingen en leesvolgorde moeten in de PDF-tags zitten.",
    article: "https://www.properaccess.nl/tools/pdf-checker/",
    articleTitle: "PDF Checker tool",
  },
  "multimedia": {
    label: "Video en multimedia",
    tip: "Video's hebben ondertiteling nodig in de gesproken taal. Iframes (YouTube, Vimeo) hebben een beschrijvend title-attribuut nodig.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-4-1-2-naam-rol-waarde/",
    articleTitle: "Veelgemaakte fouten: naam, rol, waarde",
  },
  "tabellen": {
    label: "Tabellen",
    tip: "Gebruik echte HTML-tabellen met koprijcellen (<th>). Bouw tabellen niet na met losse div's of tabs en spaties.",
    article: "https://www.properaccess.nl/tools/tabel-checker/",
    articleTitle: "Tabel Checker tool",
  },
  "semantiek": {
    label: "Semantiek",
    tip: "Elke alinea hoort in een eigen <p>-element. Gebruik <br> niet om visueel ruimte te maken tussen alinea's — dat breekt de navigatie voor schermlezers.",
    article: "https://www.properaccess.nl/blog/veelgemaakte-fouten-sc-1-3-1-info-en-relaties/",
    articleTitle: "Veelgemaakte fouten: info en relaties",
  },
};

const QUIZ_LABELS = {
  "quiz museum": "Quiz: Hoe toegankelijk is jouw museumcontent?",
  "quiz webredactie": "Quiz: Hoe toegankelijk is jouw webcontent?",
  "quiz": "Accessibility Quiz",
};

async function sendQuizEmail(apiKey, toEmail, data) {
  const score = data.quiz_score || "\u2013";
  const correct = data.quiz_correct || "\u2013";
  const total = data.quiz_total || "\u2013";
  const weakCats = data.quiz_weak_categories || "";
  const quizLabel = QUIZ_LABELS[data.bron] || data.bron;

  let tipsHtml = "";
  if (weakCats) {
    const cats = weakCats.split(", ").map(function (c) { return c.replace(/ \(\d+\/\d+\)/, ""); });
    const uniqueCats = [...new Set(cats)];

    uniqueCats.forEach(function (catKey) {
      const info = CATEGORY_TIPS[catKey];
      if (info) {
        tipsHtml += `
          <tr><td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
            <strong style="color:#1F2937;font-size:15px;">${info.label}</strong>
            <p style="margin:8px 0;color:#4b5563;font-size:14px;line-height:1.6;">${info.tip}</p>
            <a href="${info.article}" style="color:#004050;font-size:14px;text-decoration:underline;">Lees meer: ${info.articleTitle}</a>
          </td></tr>`;
      }
    });
  }

  const emailHtml = `
<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Nunito',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

  <!-- Header -->
  <tr><td style="background:#1F2937;padding:28px 32px;">
    <h1 style="margin:0;color:#fff;font-size:22px;font-family:'Nunito Sans',Arial,sans-serif;">Proper Access</h1>
  </td></tr>

  <!-- Score -->
  <tr><td style="padding:32px;text-align:center;">
    <p style="margin:0 0 4px;color:#6b7280;font-size:14px;">${quizLabel}</p>
    <div style="display:inline-block;width:120px;height:120px;border-radius:50%;border:6px solid ${parseInt(score) >= 70 ? '#34d399' : parseInt(score) >= 45 ? '#fbbf24' : '#f87171'};text-align:center;line-height:120px;margin:16px 0;">
      <span style="font-size:36px;font-weight:700;color:#1F2937;">${score}</span>
    </div>
    <p style="margin:8px 0 0;color:#4b5563;font-size:15px;">${correct} van ${total} vragen correct</p>
  </td></tr>

  ${tipsHtml ? `
  <!-- Tips -->
  <tr><td style="padding:0 32px;">
    <h2 style="margin:0 0 16px;color:#1F2937;font-size:18px;font-family:'Nunito Sans',Arial,sans-serif;">Hier kun je aan werken</h2>
  </td></tr>
  <tr><td style="padding:0 32px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      ${tipsHtml}
    </table>
  </td></tr>
  ` : ''}

  <!-- CTA -->
  <tr><td style="padding:16px 32px 32px;text-align:center;">
    <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 20px;">Wil je weten hoe je website er echt voorstaat? Met een quickscan krijg je binnen een week een compleet beeld.</p>
    <a href="https://www.properaccess.nl/contact/" style="display:inline-block;padding:14px 32px;background:#A30D4B;color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:15px;">Vraag een quickscan aan</a>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#f5f5f5;padding:20px 32px;text-align:center;">
    <p style="margin:0;color:#9ca3af;font-size:12px;">Proper Access — Specialist in digitale toegankelijkheid</p>
    <p style="margin:4px 0 0;color:#9ca3af;font-size:12px;"><a href="https://www.properaccess.nl" style="color:#9ca3af;">properaccess.nl</a> | 085 5055 890</p>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Proper Access <noreply@properaccess.nl>",
      to: [toEmail],
      subject: "Je quizresultaten \u2014 " + score + " score",
      html: emailHtml,
    }),
  });
}

// ── Helpers ─────────────────────────────────────────────────

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status = 200, origin = "https://www.properaccess.nl") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

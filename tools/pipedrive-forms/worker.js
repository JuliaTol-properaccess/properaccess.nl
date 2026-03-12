/**
 * Cloudflare Worker — Pipedrive Form Submissions
 * Receives form submissions and creates contacts + leads in Pipedrive.
 *
 * POST /submit  → create or update person, create lead
 *   Body: { bron, email, naam?, bedrijf?, bericht? }
 *
 * Secrets (set via wrangler secret put):
 *   PIPEDRIVE_API_TOKEN
 *
 * Deploy: npx wrangler deploy worker.js --name pipedrive-forms
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "http://localhost:1313",
];

const PD_DOMAIN = "properaccess";
const BRON_FIELD_KEY = "6bfeb398da8989fe199dc3e55073055cb4b4a225";

const BRON_IDS = {
  nieuwsbrief: 57,
  "tool-proefperiode": 58,
  quiz: 59,
  contactformulier: 60,
};

const LEAD_TITLES = {
  nieuwsbrief: "Nieuwsbrief aanmelding",
  "tool-proefperiode": "Tool proefperiode aanvraag",
  quiz: "Quiz deelnemer",
  contactformulier: "Contactformulier bericht",
};

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

  const { bron, email, naam, bedrijf, bericht } = body;

  // Validate required fields
  if (!bron || !email) {
    return json({ error: "Missing required fields: bron, email" }, 400, origin);
  }

  if (!BRON_IDS[bron]) {
    return json({ error: "Invalid bron value" }, 400, origin);
  }

  // Simple email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid email" }, 400, origin);
  }

  // Honeypot check
  if (body._gotcha) {
    // Bot detected — return success silently
    return json({ ok: true }, 200, origin);
  }

  const token = env.PIPEDRIVE_API_TOKEN;
  if (!token) {
    return json({ error: "Server configuration error" }, 500, origin);
  }

  const apiBase = `https://${PD_DOMAIN}.pipedrive.com/api/v1`;

  try {
    // 1. Search for existing person by email
    const searchRes = await pdFetch(
      `${apiBase}/persons/search?term=${encodeURIComponent(email)}&fields=email&limit=1`,
      token
    );
    const searchData = await searchRes.json();

    let personId;
    const bronFieldValue = String(BRON_IDS[bron]);

    if (searchData.data && searchData.data.items && searchData.data.items.length > 0) {
      // Person exists — update with new bron
      personId = searchData.data.items[0].item.id;

      // Get existing person to check current bron values
      const existingRes = await pdFetch(`${apiBase}/persons/${personId}`, token);
      const existingData = await existingRes.json();
      const existingBron = existingData.data?.[BRON_FIELD_KEY] || "";

      // Append bron if not already present (set field uses comma-separated IDs)
      const bronValues = existingBron ? existingBron.split(",") : [];
      if (!bronValues.includes(bronFieldValue)) {
        bronValues.push(bronFieldValue);
      }

      const updateBody = { [BRON_FIELD_KEY]: bronValues.join(",") };
      if (naam && !existingData.data?.name) updateBody.name = naam;
      if (bedrijf) updateBody.org_id = undefined; // Don't overwrite org

      await pdFetch(`${apiBase}/persons/${personId}`, token, "PUT", updateBody);
    } else {
      // Create new person
      const personBody = {
        name: naam || email.split("@")[0],
        email: [{ value: email, primary: true }],
        [BRON_FIELD_KEY]: bronFieldValue,
      };

      const createRes = await pdFetch(`${apiBase}/persons`, token, "POST", personBody);
      const createData = await createRes.json();

      if (!createData.success) {
        return json({ error: "Failed to create contact" }, 500, origin);
      }
      personId = createData.data.id;
    }

    // 2. Create a lead
    const leadBody = {
      title: LEAD_TITLES[bron] || "Website formulier",
      person_id: personId,
    };

    // Add note with message if present
    if (bericht) {
      leadBody.note = bericht;
    }

    await pdFetch(`${apiBase}/leads`, token, "POST", leadBody);

    // 3. If there's a message, also create a note on the person
    if (bericht) {
      await pdFetch(`${apiBase}/notes`, token, "POST", {
        content: `<b>Bericht via ${LEAD_TITLES[bron]}:</b><br><br>${escapeHtml(bericht)}`,
        person_id: personId,
        pinned_to_person_flag: 1,
      });
    }

    return json({ ok: true }, 200, origin);
  } catch (err) {
    return json({ error: "Internal error" }, 500, origin);
  }
}

// ── Helpers ─────────────────────────────────────────────────

async function pdFetch(url, token, method = "GET", body = null) {
  const separator = url.includes("?") ? "&" : "?";
  const opts = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) opts.body = JSON.stringify(body);
  return fetch(`${url}${separator}api_token=${token}`, opts);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

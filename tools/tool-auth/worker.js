/**
 * Cloudflare Worker — Tool Auth API
 * Manages trial tokens for Proper Access tools.
 *
 * Public:
 *   GET /validate?token=xxx  → { valid, expires, company }
 *
 * Admin (requires Authorization: Bearer <ADMIN_SECRET>):
 *   POST   /tokens            → create token  (body: { email, company, days })
 *   GET    /tokens            → list all tokens
 *   DELETE /tokens/<token>    → revoke token
 *
 * Deploy: npx wrangler deploy worker.js --name tool-auth
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "https://properaccess.nl",
  "http://localhost:1313",
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    // ── Public: validate token ──────────────────────────────
    if (url.pathname === "/validate" && request.method === "GET") {
      const token = url.searchParams.get("token");
      if (!token) {
        return json({ valid: false }, 400, allowedOrigin);
      }

      const raw = await env.TOOL_TOKENS.get(token, "json");
      if (!raw) {
        return json({ valid: false }, 200, allowedOrigin);
      }

      const now = new Date();
      const expires = new Date(raw.expires);
      if (now > expires) {
        await env.TOOL_TOKENS.delete(token);
        return json({ valid: false, reason: "expired" }, 200, allowedOrigin);
      }

      return json({
        valid: true,
        expires: raw.expires,
        company: raw.company || "",
      }, 200, allowedOrigin);
    }

    // ── Admin gate ──────────────────────────────────────────
    const authHeader = request.headers.get("Authorization") || "";
    const secret = env.ADMIN_SECRET;
    if (!secret || !authHeader.startsWith("Bearer ") || authHeader.slice(7) !== secret) {
      return json({ error: "Unauthorized" }, 401, allowedOrigin);
    }

    // ── POST /tokens — create ───────────────────────────────
    if (url.pathname === "/tokens" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400, allowedOrigin);
      }

      const { email, company, days = 30 } = body;
      const token = "pa_" + crypto.randomUUID().replace(/-/g, "");
      const now = new Date();
      const expires = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

      const tokenData = {
        email: email || "",
        company: company || "",
        created: now.toISOString(),
        expires: expires.toISOString(),
      };

      // KV auto-expires after the trial period + 1 day grace
      await env.TOOL_TOKENS.put(token, JSON.stringify(tokenData), {
        expirationTtl: (days + 1) * 24 * 60 * 60,
      });

      return json({ token, ...tokenData }, 201, allowedOrigin);
    }

    // ── GET /tokens — list ──────────────────────────────────
    if (url.pathname === "/tokens" && request.method === "GET") {
      const list = await env.TOOL_TOKENS.list();
      const tokens = [];

      for (const key of list.keys) {
        const data = await env.TOOL_TOKENS.get(key.name, "json");
        if (data) {
          tokens.push({ token: key.name, ...data });
        }
      }

      return json({ tokens, count: tokens.length }, 200, allowedOrigin);
    }

    // ── DELETE /tokens/<token> — revoke ─────────────────────
    if (url.pathname.startsWith("/tokens/") && request.method === "DELETE") {
      const token = decodeURIComponent(url.pathname.slice("/tokens/".length));
      if (!token) {
        return json({ error: "Missing token" }, 400, allowedOrigin);
      }

      await env.TOOL_TOKENS.delete(token);
      return json({ deleted: true, token }, 200, allowedOrigin);
    }

    return json({ error: "Not found" }, 404, allowedOrigin);
  },
};

// ── Helpers ─────────────────────────────────────────────────

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status = 200, origin = "https://www.properaccess.nl") {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

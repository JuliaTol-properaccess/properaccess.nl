/**
 * Cloudflare Worker — Heading Structure API
 * Fetches a URL and returns the heading structure as JSON.
 *
 * Deploy: npx wrangler deploy worker.js --name heading-checker
 * Or via Cloudflare dashboard: Workers & Pages > Create > Paste this code
 *
 * Usage: GET https://heading-checker.<your-subdomain>.workers.dev/?url=https://example.com
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "http://localhost:1313",
];
const MAX_RESPONSE_SIZE = 5 * 1024 * 1024; // 5MB
const FETCH_TIMEOUT_MS = 10000;

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(allowedOrigin),
      });
    }

    if (request.method !== "GET") {
      return jsonResponse({ error: "Method not allowed" }, 405, allowedOrigin);
    }

    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return jsonResponse({ error: "Missing ?url= parameter" }, 400, allowedOrigin);
    }

    // Validate URL
    let parsedUrl;
    try {
      parsedUrl = new URL(targetUrl);
    } catch {
      return jsonResponse({ error: "Invalid URL" }, 400, allowedOrigin);
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return jsonResponse({ error: "Only HTTP(S) URLs are supported" }, 400, allowedOrigin);
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "ProperAccess-HeadingChecker/1.0",
          Accept: "text/html",
        },
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        return jsonResponse(
          { error: `Could not fetch URL (HTTP ${response.status})` },
          502,
          allowedOrigin
        );
      }

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) {
        return jsonResponse(
          { error: "URL does not return HTML" },
          400,
          allowedOrigin
        );
      }

      const html = await response.text();

      if (html.length > MAX_RESPONSE_SIZE) {
        return jsonResponse({ error: "Page too large to analyze" }, 413, allowedOrigin);
      }

      const headings = extractHeadings(html);
      const issues = analyzeHeadings(headings);

      return jsonResponse({
        url: targetUrl,
        headings,
        issues,
        summary: {
          total: headings.length,
          byLevel: countByLevel(headings),
          issueCount: issues.length,
        },
      }, 200, allowedOrigin);
    } catch (err) {
      if (err.name === "AbortError") {
        return jsonResponse({ error: "Request timed out" }, 504, allowedOrigin);
      }
      return jsonResponse({ error: "Could not fetch URL" }, 502, allowedOrigin);
    }
  },
};

function extractHeadings(html) {
  // Remove script and style content to avoid false matches
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const headings = [];
  const regex = /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match;
  let lastMatchEnd = 0;

  while ((match = regex.exec(cleaned)) !== null) {
    const level = parseInt(match[1], 10);
    const attributes = match[2];
    const rawContent = match[3];

    // Check if there's meaningful content between this heading and the previous one
    const betweenHtml = cleaned.slice(lastMatchEnd, match.index);
    const betweenText = betweenHtml.replace(/<[^>]+>/g, "").trim();
    const hasContentBefore = betweenText.length > 0;

    lastMatchEnd = match.index + match[0].length;

    // Strip HTML tags to get text content
    const text = rawContent.replace(/<[^>]+>/g, "").trim();

    // Check for hidden headings (aria-hidden, display:none, visibility:hidden)
    const isHidden =
      /aria-hidden\s*=\s*["']true["']/i.test(attributes) ||
      /style\s*=\s*["'][^"']*display\s*:\s*none/i.test(attributes) ||
      /style\s*=\s*["'][^"']*visibility\s*:\s*hidden/i.test(attributes);

    headings.push({
      level,
      text: text || "(leeg)",
      hidden: isHidden,
      hasContentBefore,
    });
  }

  return headings;
}

function analyzeHeadings(headings) {
  const issues = [];
  const visibleHeadings = headings.filter((h) => !h.hidden);

  // No headings at all
  if (visibleHeadings.length === 0) {
    issues.push({
      type: "error",
      message: "Geen koppen gevonden op deze pagina.",
    });
    return issues;
  }

  // No h1
  const h1Count = visibleHeadings.filter((h) => h.level === 1).length;
  if (h1Count === 0) {
    issues.push({
      type: "error",
      message: "Geen <h1> gevonden. Elke pagina moet een hoofdkop hebben.",
    });
  }

  // Multiple h1
  if (h1Count > 1) {
    issues.push({
      type: "warning",
      message: `${h1Count} <h1>-koppen gevonden. Een pagina heeft meestal één hoofdkop nodig.`,
    });
  }

  // First heading is not h1
  if (visibleHeadings.length > 0 && visibleHeadings[0].level !== 1) {
    issues.push({
      type: "warning",
      message: `De eerste kop is een <h${visibleHeadings[0].level}> in plaats van een <h1>.`,
    });
  }

  // Skipped levels
  for (let i = 1; i < visibleHeadings.length; i++) {
    const current = visibleHeadings[i].level;
    const previous = visibleHeadings[i - 1].level;

    if (current > previous + 1 && !visibleHeadings[i].hasContentBefore) {
      const skipped = [];
      for (let l = previous + 1; l < current; l++) {
        skipped.push(`<h${l}>`);
      }
      issues.push({
        type: "error",
        message: `Kopniveau overgeslagen: van <h${previous}> naar <h${current}> (${skipped.join(", ")} ontbreekt). Bij "${visibleHeadings[i].text}".`,
        headingIndex: i,
      });
    }
  }

  // Same or higher level headings directly after each other (no content between)
  for (let i = 1; i < visibleHeadings.length; i++) {
    const current = visibleHeadings[i];
    const previous = visibleHeadings[i - 1];

    if (current.level <= previous.level && !current.hasContentBefore) {
      issues.push({
        type: "warning",
        message: `<h${current.level}> volgt direct op <h${previous.level}> zonder tussenliggende content. Bij "${current.text}".`,
        headingIndex: i,
      });
    }
  }

  // Empty headings
  headings.forEach((h, index) => {
    if (h.text === "(leeg)" && !h.hidden) {
      issues.push({
        type: "error",
        message: `Lege <h${h.level}> gevonden. Een kop zonder tekst is niet bruikbaar voor screenreaders.`,
        headingIndex: index,
      });
    }
  });

  return issues;
}

function countByLevel(headings) {
  const counts = {};
  for (const h of headings) {
    counts[`h${h.level}`] = (counts[`h${h.level}`] || 0) + 1;
  }
  return counts;
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(data, status = 200, origin = ALLOWED_ORIGINS[0]) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

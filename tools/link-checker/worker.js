/**
 * Cloudflare Worker — Link Checker API
 * Fetches a URL and returns link accessibility info as JSON.
 *
 * Deploy: npx wrangler deploy worker.js --name link-checker
 * Usage:  GET https://link-checker.<subdomain>.workers.dev/?url=https://example.com
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "http://localhost:1313",
];
const AUTH_URL = "https://tool-auth.juliatol.workers.dev/validate";
const MAX_RESPONSE_SIZE = 5 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 10000;

async function validateToken(token) {
  if (!token) return false;
  try {
    const res = await fetch(AUTH_URL + "?token=" + encodeURIComponent(token));
    const data = await res.json();
    return data.valid === true;
  } catch { return false; }
}

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    if (request.method !== "GET") {
      return jsonResponse({ error: "Method not allowed" }, 405, allowedOrigin);
    }

    const { searchParams } = new URL(request.url);

    // Token validation
    const token = searchParams.get("token");
    if (!await validateToken(token)) {
      return jsonResponse({ error: "Invalid or expired token" }, 401, allowedOrigin);
    }

    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return jsonResponse({ error: "Missing ?url= parameter" }, 400, allowedOrigin);
    }

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
          "User-Agent": "ProperAccess-LinkChecker/1.0",
          Accept: "text/html",
        },
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        return jsonResponse({ error: `Could not fetch URL (HTTP ${response.status})` }, 502, allowedOrigin);
      }

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) {
        return jsonResponse({ error: "URL does not return HTML" }, 400, allowedOrigin);
      }

      const html = await response.text();
      if (html.length > MAX_RESPONSE_SIZE) {
        return jsonResponse({ error: "Page too large to analyze" }, 413, allowedOrigin);
      }

      const result = analyzeHtml(html, targetUrl);

      return jsonResponse({
        url: targetUrl,
        ...result,
      }, 200, allowedOrigin);
    } catch (err) {
      if (err.name === "AbortError") {
        return jsonResponse({ error: "Request timed out" }, 504, allowedOrigin);
      }
      return jsonResponse({ error: "Could not fetch URL" }, 502, allowedOrigin);
    }
  },
};

// =============================================================
// HTML Analysis
// =============================================================

function analyzeHtml(html, pageUrl) {
  // Strip scripts and styles
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const links = extractLinks(cleaned, pageUrl);

  let totalIssues = 0;
  let totalWarnings = 0;
  for (const link of links) {
    for (const issue of link.issues) {
      if (issue.severity === "error") totalIssues++;
      else totalWarnings++;
    }
  }

  return {
    links,
    summary: {
      totalLinks: links.length,
      linksWithIssues: links.filter(l => l.issues.some(i => i.severity === "error")).length,
      linksWithWarnings: links.filter(l => l.issues.some(i => i.severity === "warning")).length,
      totalIssues,
      totalWarnings,
    },
  };
}

// =============================================================
// Extract and analyze <a> elements
// =============================================================

const GENERIC_TEXTS = [
  "klik hier", "klik", "hier", "lees meer", "lees verder", "meer",
  "meer lezen", "meer informatie", "meer info", "bekijk", "link",
  "click here", "click", "here", "read more", "more", "learn more",
  "see more", "details", "view", "link", "go",
];

/**
 * Resolve aria-labelledby: find elements by ID in the full HTML
 * and return their text content concatenated with spaces.
 * Follows accname-1.2 step 2B.
 */
function resolveAriaLabelledby(ids, html) {
  const parts = [];
  for (const id of ids.split(/\s+/).filter(Boolean)) {
    // Find element with this ID and get its text content
    const elRe = new RegExp(`<[^>]+\\bid\\s*=\\s*["']${escapeRegex(id)}["'][^>]*>([\\s\\S]*?)<\\/`, "i");
    const match = html.match(elRe);
    if (match) {
      const text = match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (text) parts.push(text);
    }
  }
  return parts.join(" ");
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Strip content inside aria-hidden="true" elements from link content,
 * so hidden text doesn't contribute to the accessible name.
 * Follows accname-1.2 step 2A.
 */
function stripAriaHidden(content) {
  return content.replace(/<([a-z][a-z0-9]*)\s[^>]*aria-hidden\s*=\s*["']true["'][^>]*>[\s\S]*?<\/\1>/gi, "");
}

function extractLinks(html, pageUrl) {
  const links = [];
  // Match <a> tags — with or without attributes
  const linkRe = /<a\s([^>]*?)>([\s\S]*?)<\/a>|<a>([\s\S]*?)<\/a>/gi;
  let m;
  let linkIndex = 0;

  let baseUrl;
  try { baseUrl = new URL(pageUrl); } catch { baseUrl = null; }

  while ((m = linkRe.exec(html)) !== null) {
    linkIndex++;
    const attrs = m[1] || "";
    const content = m[2] || m[3] || "";
    const issues = [];

    const href = getAttr(attrs, "href");
    const ariaLabel = getAttr(attrs, "aria-label");
    const ariaLabelledby = getAttr(attrs, "aria-labelledby");
    const title = getAttr(attrs, "title");
    const target = getAttr(attrs, "target");
    const role = getAttr(attrs, "role");
    const ariaHidden = getAttr(attrs, "aria-hidden");
    const tabindex = getAttr(attrs, "tabindex");

    // Skip links that are explicitly hidden from AT
    if (ariaHidden === "true" && tabindex === "-1") continue;

    // Strip aria-hidden content before computing accessible name (accname step 2A)
    const accessibleContent = stripAriaHidden(content);

    // Get visible text (strip HTML tags)
    const visibleText = accessibleContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

    // Check for images inside link (use accessible content, not raw content)
    const imgMatches = [...accessibleContent.matchAll(/<img\s([^>]*?)\/?>|<img\s([^>]*?)>[\s\S]*?<\/img>/gi)];
    const imgAlts = imgMatches.map(im => {
      const imgAttrs = im[1] || im[2] || "";
      return getAttr(imgAttrs, "alt");
    });

    // Check for SVG with aria-label, title attribute, or <title> child element
    const svgMatches = [...accessibleContent.matchAll(/<svg\s([^>]*?)([\s\S]*?)<\/svg>/gi)];
    const svgLabels = svgMatches.map(sm => {
      const svgAttrs = sm[1] || "";
      const svgContent = sm[2] || "";
      // Check attributes on <svg> element
      const attrLabel = getAttr(svgAttrs, "aria-label") || getAttr(svgAttrs, "title");
      if (attrLabel) return attrLabel;
      // Check <title> child element inside SVG
      const titleMatch = svgContent.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch) return titleMatch[1].trim();
      return null;
    }).filter(Boolean);

    // Determine accessible name following accname-1.2 computation order:
    // Step 2B: aria-labelledby → Step 2D: aria-label → Step 2F: content → Step 2I: title
    let accessibleName = "";
    if (ariaLabelledby) {
      // Step 2B: resolve aria-labelledby IDREFs from full HTML
      accessibleName = resolveAriaLabelledby(ariaLabelledby, html);
    } else if (ariaLabel) {
      accessibleName = ariaLabel;
    } else {
      // Combine visible text + img alts + svg labels
      const parts = [];
      if (visibleText) parts.push(visibleText);
      for (const alt of imgAlts) {
        if (alt !== null && alt !== "") parts.push(alt);
      }
      for (const lbl of svgLabels) {
        parts.push(lbl);
      }
      accessibleName = parts.join(" ").trim();

      // If still empty, fall back to title
      if (!accessibleName && title) {
        accessibleName = title;
      }
    }

    // Resolve href
    let resolvedHref = href;
    if (href && baseUrl && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("#") && !href.startsWith("javascript:")) {
      try {
        resolvedHref = new URL(href, baseUrl).href;
      } catch { /* keep original */ }
    }

    // Determine if link is internal or external
    let isExternal = false;
    if (resolvedHref && baseUrl) {
      try {
        const linkUrl = new URL(resolvedHref);
        isExternal = linkUrl.hostname !== baseUrl.hostname;
      } catch { /* not a valid URL */ }
    }

    // ─── Checks ───

    // Skip checks for role="presentation" or role="none" links (rare but possible)
    if (role === "presentation" || role === "none") continue;

    // Check: No accessible name (SC 2.4.4 / 4.1.2)
    if (!accessibleName) {
      // Check if it contains only image(s) without alt
      const hasImgWithoutAlt = imgMatches.length > 0 && imgAlts.every(a => a === null || a === "");
      if (hasImgWithoutAlt) {
        issues.push({
          severity: "error",
          sc: "1.1.1",
          id: "img-link-no-alt",
          detail: { count: imgMatches.length },
        });
      } else {
        issues.push({
          severity: "error",
          sc: "2.4.4",
          id: "no-accessible-name",
        });
      }
    }

    // Check: Generic link text (SC 2.4.4)
    if (accessibleName && GENERIC_TEXTS.includes(accessibleName.toLowerCase())) {
      issues.push({
        severity: "error",
        sc: "2.4.4",
        id: "generic-text",
        detail: { text: accessibleName },
      });
    }

    // Check: Empty or missing href (not necessarily an error, but worth noting)
    if (href === null || href === "") {
      issues.push({
        severity: "warning",
        sc: "2.4.4",
        id: "missing-href",
      });
    } else if (href === "#") {
      issues.push({
        severity: "warning",
        sc: "2.4.4",
        id: "hash-only-href",
      });
    } else if (href.startsWith("javascript:")) {
      issues.push({
        severity: "warning",
        sc: "2.4.4",
        id: "javascript-href",
      });
    }

    // Check: title repeats accessible name (SC 4.1.2 / advisory)
    if (title && accessibleName && title.trim().toLowerCase() === accessibleName.trim().toLowerCase()) {
      issues.push({
        severity: "warning",
        sc: "4.1.2",
        id: "title-repeats-name",
      });
    }

    // Get location context
    const landmark = getLandmarkForPosition(html, m.index);

    links.push({
      index: linkIndex,
      href: resolvedHref || null,
      accessibleName: accessibleName || null,
      visibleText: visibleText || null,
      isExternal,
      target: target || null,
      hasTitle: !!title,
      issues,
      landmark,
    });
  }

  return links;
}

// =============================================================
// Location helpers
// =============================================================

function getLandmarkForPosition(html, position) {
  const landmarkTags = ["header", "nav", "main", "aside", "footer"];
  let best = null;

  for (const tag of landmarkTags) {
    const openRe = new RegExp(`<${tag}(\\s[^>]*)?>`, "gi");
    let m;
    while ((m = openRe.exec(html)) !== null) {
      if (m.index > position) break;
      const closeRe = new RegExp(`</${tag}>`, "gi");
      closeRe.lastIndex = m.index;
      const closeMatch = closeRe.exec(html);
      const end = closeMatch ? closeMatch.index + closeMatch[0].length : html.length;

      if (position >= m.index && position < end) {
        const size = end - m.index;
        if (!best || size < best.size) {
          const attrs = m[1] || "";
          best = {
            tag,
            label: getAttr(attrs, "aria-label") || null,
            id: getAttr(attrs, "id") || null,
            size,
          };
        }
      }
    }
  }

  return best ? { tag: best.tag, label: best.label, id: best.id } : null;
}

// =============================================================
// Helpers
// =============================================================

function getAttr(attrString, name) {
  const re = new RegExp(`${name}\\s*=\\s*(?:"([^"]*?)"|'([^']*?)'|(\\S+))`, "i");
  const match = attrString.match(re);
  if (match) return match[1] ?? match[2] ?? match[3];

  const boolRe = new RegExp(`(?:^|\\s)${name}(?:\\s|$)`, "i");
  if (boolRe.test(attrString)) return "";

  return null;
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

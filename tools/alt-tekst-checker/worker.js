/**
 * Cloudflare Worker — Alt Text Checker API
 * Fetches a URL and returns image/SVG/icon accessibility info as JSON.
 *
 * Deploy: npx wrangler deploy worker.js --name alt-tekst-checker
 * Usage:  GET https://alt-tekst-checker.<subdomain>.workers.dev/?url=https://example.com
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "http://localhost:1313",
];
const MAX_RESPONSE_SIZE = 5 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 10000;

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
          "User-Agent": "ProperAccess-AltTextChecker/1.0",
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

      const baseUrl = parsedUrl.origin;
      const result = analyzeHtml(html, baseUrl);

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

function analyzeHtml(html, baseUrl) {
  // Strip scripts and styles to avoid false matches
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Build a position-based context map for landmarks and headings
  const context = buildContextMap(cleaned);

  const images = extractImages(cleaned, context, baseUrl);
  const svgs = extractSvgs(cleaned, context);
  const icons = extractIcons(cleaned, context);

  // Summary counts
  const imgPresent = images.filter(i => i.status === "present").length;
  const imgMissing = images.filter(i => i.status === "missing").length;
  const imgDecorative = images.filter(i => i.status === "decorative").length;
  const imgEmptyInteractive = images.filter(i => i.status === "empty-interactive").length;

  const svgGood = svgs.filter(s => s.status === "good").length;
  const svgMissing = svgs.filter(s => s.status === "missing").length;
  const svgDecorative = svgs.filter(s => s.status === "decorative").length;
  const svgRedundant = svgs.filter(s => s.status === "redundant").length;

  const iconGood = icons.filter(i => i.status === "good").length;
  const iconMissing = icons.filter(i => i.status === "missing").length;
  const iconHidden = icons.filter(i => i.status === "hidden").length;

  return {
    images,
    svgs,
    icons,
    summary: {
      imgTotal: images.length,
      imgPresent,
      imgMissing,
      imgDecorative,
      imgEmptyInteractive,
      svgTotal: svgs.length,
      svgGood,
      svgMissing,
      svgDecorative,
      svgRedundant,
      iconTotal: icons.length,
      iconGood,
      iconMissing,
      iconHidden,
    },
  };
}

// =============================================================
// Context map: landmarks + headings by position
// =============================================================

function buildContextMap(html) {
  const landmarks = [];
  const headings = [];

  // Track landmark open/close positions
  const landmarkTags = ["header", "nav", "main", "aside", "footer"];
  for (const tag of landmarkTags) {
    const openRe = new RegExp(`<${tag}(\\s[^>]*)?>`, "gi");
    let m;
    while ((m = openRe.exec(html)) !== null) {
      const attrs = m[1] || "";
      const ariaLabel = getAttr(attrs, "aria-label");
      const ariaLabelledby = getAttr(attrs, "aria-labelledby");
      const id = getAttr(attrs, "id");

      // Find matching close tag (simple: next occurrence)
      const closeRe = new RegExp(`</${tag}>`, "gi");
      closeRe.lastIndex = m.index;
      const closeMatch = closeRe.exec(html);
      const end = closeMatch ? closeMatch.index + closeMatch[0].length : html.length;

      // Try to resolve aria-labelledby by finding the referenced element's text
      let resolvedLabel = null;
      if (ariaLabelledby) {
        const refRe = new RegExp(`id\\s*=\\s*["']${ariaLabelledby}["'][^>]*>([\\s\\S]*?)<\\/`, "i");
        const refMatch = html.match(refRe);
        if (refMatch) {
          resolvedLabel = refMatch[1].replace(/<[^>]+>/g, "").trim();
        }
      }

      landmarks.push({
        tag,
        start: m.index,
        end,
        label: ariaLabel || resolvedLabel || null,
        id: id || null,
      });
    }
  }

  // Track headings by position
  const hRe = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let hm;
  while ((hm = hRe.exec(html)) !== null) {
    const text = hm[2].replace(/<[^>]+>/g, "").trim();
    headings.push({
      level: parseInt(hm[1], 10),
      text: text || "(leeg)",
      position: hm.index,
    });
  }

  return { landmarks, headings };
}

function getLandmark(position, context) {
  // Find the most specific (innermost) landmark containing this position
  let best = null;
  for (const lm of context.landmarks) {
    if (position >= lm.start && position < lm.end) {
      if (!best || (lm.end - lm.start) < (best.end - best.start)) {
        best = lm;
      }
    }
  }
  if (!best) return { tag: "onbekend", label: null, id: null };
  return { tag: best.tag, label: best.label || null, id: best.id || null };
}

function getNearestHeading(position, context) {
  let nearest = null;
  for (const h of context.headings) {
    if (h.position < position) {
      nearest = h;
    }
  }
  return nearest ? nearest.text : null;
}

// =============================================================
// Check interactive context
// =============================================================

function getInteractiveContext(html, position) {
  // Look backwards from position for unclosed <a> or <button>
  const sliceStart = Math.max(0, position - 2000);
  const before = html.slice(sliceStart, position);

  // Check <a>
  const lastAOpen = before.lastIndexOf("<a ");
  const lastAOpenAlt = before.lastIndexOf("<a\n");
  const lastAClose = before.lastIndexOf("</a>");
  const aOpen = Math.max(lastAOpen, lastAOpenAlt);
  if (aOpen > -1 && aOpen > lastAClose) {
    const snippet = before.slice(aOpen);
    const hrefMatch = snippet.match(/href\s*=\s*["']([^"']*?)["']/);
    const openTagMatch = snippet.match(/^<a\s([^>]*)>/i);
    const attrs = openTagMatch ? openTagMatch[1] : "";
    const ariaLabel = getAttr(attrs, "aria-label");

    // Get text content of the <a>, excluding SVGs, imgs, and other tags
    const absOpen = sliceStart + aOpen;
    const closePos = html.indexOf("</a>", position);
    let hasText = !!ariaLabel;
    if (!hasText && closePos > -1) {
      const content = html.slice(absOpen, closePos)
        .replace(/^<a[^>]*>/i, "")
        .replace(/<svg[\s\S]*?<\/svg>/gi, "")
        .replace(/<img[^>]*>/gi, "")
        .replace(/<[^>]+>/g, "")
        .trim();
      hasText = content.length > 0;
    }

    return { element: "a", href: hrefMatch ? hrefMatch[1] : null, hasText };
  }

  // Check <button>
  const lastBtnOpen = before.lastIndexOf("<button");
  const lastBtnClose = before.lastIndexOf("</button>");
  if (lastBtnOpen > -1 && lastBtnOpen > lastBtnClose) {
    const snippet = before.slice(lastBtnOpen);
    const openTagMatch = snippet.match(/^<button\s?([^>]*)>/i);
    const attrs = openTagMatch ? openTagMatch[1] : "";
    const ariaLabel = getAttr(attrs, "aria-label");

    const absOpen = sliceStart + lastBtnOpen;
    const closePos = html.indexOf("</button>", position);
    let hasText = !!ariaLabel;
    if (!hasText && closePos > -1) {
      const content = html.slice(absOpen, closePos)
        .replace(/^<button[^>]*>/i, "")
        .replace(/<svg[\s\S]*?<\/svg>/gi, "")
        .replace(/<img[^>]*>/gi, "")
        .replace(/<[^>]+>/g, "")
        .trim();
      hasText = content.length > 0;
    }

    return { element: "button", href: null, hasText };
  }

  return null;
}

// =============================================================
// Extract <img> elements
// =============================================================

function extractImages(html, context, baseUrl) {
  const images = [];
  const imgRe = /<img\s([^>]*?)>/gi;
  let m;

  while ((m = imgRe.exec(html)) !== null) {
    const attrs = m[1];
    const position = m.index;

    const src = getAttr(attrs, "src");
    const alt = getAttr(attrs, "alt");
    const role = getAttr(attrs, "role");
    const ariaHidden = getAttr(attrs, "aria-hidden");
    const ariaLabel = getAttr(attrs, "aria-label");

    // Resolve relative src
    let resolvedSrc = src;
    if (src && !src.startsWith("http") && !src.startsWith("data:")) {
      try {
        resolvedSrc = new URL(src, baseUrl).href;
      } catch { /* keep original */ }
    }

    const interactive = getInteractiveContext(html, position);

    // Determine status
    let status;
    if (role === "presentation" || role === "none" || ariaHidden === "true") {
      status = "decorative";
    } else if (alt === null && ariaLabel === null) {
      status = "missing";
    } else if ((alt !== null && alt.trim() === "") && ariaLabel === null) {
      // alt="" is correct for decorative images, but a problem inside links/buttons
      status = interactive ? "empty-interactive" : "decorative";
    } else {
      status = "present";
    }
    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    images.push({
      type: "img",
      src: resolvedSrc || "",
      alt: alt,
      ariaLabel: ariaLabel,
      status,
      interactive: interactive ? interactive.element : null,
      landmark,
      nearestHeading,
    });
  }

  return images;
}

// =============================================================
// Extract <svg> elements
// =============================================================

function extractSvgs(html, context) {
  const svgs = [];
  const svgRe = /<svg\s([\s\S]*?)<\/svg>/gi;
  let m;

  while ((m = svgRe.exec(html)) !== null) {
    const fullMatch = m[0];
    const position = m.index;

    // Get attributes from opening tag
    const openTagMatch = fullMatch.match(/^<svg\s([^>]*?)>/i);
    const attrs = openTagMatch ? openTagMatch[1] : "";

    const ariaLabel = getAttr(attrs, "aria-label");
    const ariaLabelledby = getAttr(attrs, "aria-labelledby");
    const ariaHidden = getAttr(attrs, "aria-hidden");
    const role = getAttr(attrs, "role");

    // Check for <title> inside the SVG
    const titleMatch = fullMatch.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : null;

    const interactive = getInteractiveContext(html, position);
    const hasName = !!(ariaLabel || titleText || ariaLabelledby);

    let status;
    let accessibleName = null;

    if (interactive && interactive.hasText) {
      // SVG is inside a link/button that already has text — SVG is decorative
      if (hasName) {
        // SVG has an accessible name but shouldn't — it's redundant
        status = "redundant";
        accessibleName = ariaLabel || titleText || "(via aria-labelledby)";
      } else {
        // Correctly decorative (no name, or aria-hidden)
        status = "decorative";
      }
    } else if (ariaHidden === "true") {
      status = "hidden";
    } else if (ariaLabel) {
      status = "good";
      accessibleName = ariaLabel;
    } else if (titleText) {
      status = "good";
      accessibleName = titleText;
    } else if (ariaLabelledby) {
      status = "good";
      accessibleName = "(via aria-labelledby)";
    } else {
      status = "missing";
    }

    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    svgs.push({
      type: "svg",
      accessibleName,
      role,
      status,
      interactive: interactive ? interactive.element : null,
      landmark,
      nearestHeading,
    });
  }

  return svgs;
}

// =============================================================
// Extract icon elements (<i>, <span> with icon classes)
// =============================================================

function extractIcons(html, context) {
  const icons = [];
  // Match <i> and <span> tags with icon-related classes
  const iconRe = /<(i|span)\s([^>]*class\s*=\s*["'][^"']*(?:fa-|icon-|material-|bi-|glyphicon)[^"']*["'][^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;

  while ((m = iconRe.exec(html)) !== null) {
    const tag = m[1];
    const attrs = m[2];
    const innerContent = m[3].replace(/<[^>]+>/g, "").trim();
    const position = m.index;

    const className = getAttr(attrs, "class") || "";
    const ariaLabel = getAttr(attrs, "aria-label");
    const ariaHidden = getAttr(attrs, "aria-hidden");
    const title = getAttr(attrs, "title");

    // Check if there's a sr-only sibling (look for sr-only text right after)
    const after = html.slice(m.index + m[0].length, m.index + m[0].length + 200);
    const srOnlyMatch = after.match(/<span[^>]*class\s*=\s*["'][^"']*sr-only[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
    const srOnlyText = srOnlyMatch ? srOnlyMatch[1].replace(/<[^>]+>/g, "").trim() : null;

    let status;
    let accessibleName = null;

    if (ariaHidden === "true") {
      status = "hidden";
    } else if (ariaLabel) {
      status = "good";
      accessibleName = ariaLabel;
    } else if (title) {
      status = "good";
      accessibleName = title;
    } else if (srOnlyText) {
      status = "good";
      accessibleName = srOnlyText + " (sr-only)";
    } else if (innerContent) {
      status = "good";
      accessibleName = innerContent;
    } else {
      status = "missing";
    }

    const interactive = getInteractiveContext(html, position);
    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    // Extract a readable icon name from classes
    const iconClass = className.match(/(?:fa-|icon-|material-|bi-|glyphicon-)([\w-]+)/);
    const iconName = iconClass ? iconClass[0] : className.split(/\s+/).slice(0, 2).join(" ");

    icons.push({
      type: "icon",
      tag,
      iconName,
      accessibleName,
      status,
      interactive: interactive ? interactive.element : null,
      landmark,
      nearestHeading,
    });
  }

  return icons;
}

// =============================================================
// Helpers
// =============================================================

function getAttr(attrString, name) {
  // Match attribute with double quotes, single quotes, or no quotes
  const re = new RegExp(`${name}\\s*=\\s*(?:"([^"]*?)"|'([^']*?)'|(\\S+))`, "i");
  const match = attrString.match(re);
  if (match) return match[1] ?? match[2] ?? match[3];

  // Check for boolean attribute (e.g., just "alt" without value — rare but possible)
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

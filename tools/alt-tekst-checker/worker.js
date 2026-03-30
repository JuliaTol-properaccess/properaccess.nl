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
const AUTH_URL = "https://tool-auth.juliatol.workers.dev/validate";
const MAX_RESPONSE_SIZE = 5 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 10000;

const INTERNAL_TOKEN = "pa_internal_site_access";

async function validateToken(token) {
  if (!token) return false;
  if (token === INTERNAL_TOKEN) return true;
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
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const context = buildContextMap(cleaned);
  const pageLang = getPageLanguage(html);

  const images = extractImages(cleaned, context, baseUrl, pageLang);
  const svgs = extractSvgs(cleaned, context);
  const icons = extractIcons(cleaned, context);

  // Summary counts
  const count = (arr, st) => arr.filter(i => i.status === st).length;

  return {
    pageLang,
    images,
    svgs,
    icons,
    summary: {
      imgTotal: images.length,
      imgPresent: count(images, "present"),
      imgMissing: count(images, "missing"),
      imgDecorative: count(images, "decorative"),
      imgEmptyInteractive: count(images, "empty-interactive"),
      imgReview: count(images, "review"),
      svgTotal: svgs.length,
      svgGood: count(svgs, "good"),
      svgMissing: count(svgs, "missing"),
      svgDecorative: count(svgs, "decorative"),
      svgRedundant: count(svgs, "redundant"),
      svgHidden: count(svgs, "hidden"),
      svgReview: count(svgs, "review"),
      iconTotal: icons.length,
      iconGood: count(icons, "good"),
      iconMissing: count(icons, "missing"),
      iconHidden: count(icons, "hidden"),
      iconDecorative: count(icons, "decorative"),
      iconReview: count(icons, "review"),
    },
  };
}

// =============================================================
// Page language
// =============================================================

function getPageLanguage(html) {
  const m = html.match(/<html[^>]*\slang\s*=\s*["']([^"']+)["']/i);
  return m ? m[1].toLowerCase().split("-")[0] : null;
}

// =============================================================
// Alt text quality checks
// =============================================================

function checkAltQuality(text, pageLang) {
  const issues = [];
  if (!text || text.trim() === "") return issues;

  const trimmed = text.trim();

  // Check for underscores (filename-style alt text)
  if (/_/.test(trimmed) && trimmed.split("_").length >= 3) {
    issues.push("underscores");
  }

  // Check for file extensions
  if (/\.(jpe?g|png|gif|svg|webp|bmp|tiff?|ico|avif)$/i.test(trimmed)) {
    issues.push("filename");
  }

  // Check for just a number
  if (/^\d+$/.test(trimmed)) {
    issues.push("only-number");
  }

  // Language mismatch (only for texts with 3+ words)
  if (pageLang && trimmed.split(/\s+/).length >= 3) {
    const mismatch = detectLanguageMismatch(trimmed, pageLang);
    if (mismatch) issues.push("lang-mismatch");
  }

  return issues;
}

function detectLanguageMismatch(text, pageLang) {
  const words = text.toLowerCase().split(/\s+/);

  // Dutch function words
  const nlWords = new Set([
    "de", "het", "een", "van", "voor", "met", "naar", "bij", "uit",
    "ook", "niet", "maar", "deze", "zijn", "wordt", "hebben", "meer",
    "alle", "nog", "wel", "kan", "als", "die", "dat", "wat", "hoe",
    "zeer", "veel", "dan", "door", "over", "onder", "tussen",
  ]);

  // English function words
  const enWords = new Set([
    "the", "and", "for", "with", "from", "also", "not", "but",
    "this", "are", "have", "more", "all", "still", "can", "which",
    "that", "what", "how", "very", "much", "than", "through",
    "about", "under", "between", "into", "been", "would", "should",
  ]);

  let nlCount = 0, enCount = 0;
  for (const w of words) {
    if (nlWords.has(w)) nlCount++;
    if (enWords.has(w)) enCount++;
  }

  if (pageLang === "nl" && enCount >= 2 && nlCount === 0) return true;
  if (pageLang === "en" && nlCount >= 2 && enCount === 0) return true;

  return false;
}

// =============================================================
// Context map: landmarks + headings by position
// =============================================================

function buildContextMap(html) {
  const landmarks = [];
  const headings = [];

  const landmarkTags = ["header", "nav", "main", "aside", "footer"];
  for (const tag of landmarkTags) {
    const openRe = new RegExp(`<${tag}(\\s[^>]*)?>`, "gi");
    let m;
    while ((m = openRe.exec(html)) !== null) {
      const attrs = m[1] || "";
      const ariaLabel = getAttr(attrs, "aria-label");
      const ariaLabelledby = getAttr(attrs, "aria-labelledby");
      const id = getAttr(attrs, "id");
      const role = getAttr(attrs, "role");

      const closeRe = new RegExp(`</${tag}>`, "gi");
      closeRe.lastIndex = m.index;
      const closeMatch = closeRe.exec(html);
      const end = closeMatch ? closeMatch.index + closeMatch[0].length : html.length;

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
        role: role || null,
        start: m.index,
        end,
        label: ariaLabel || resolvedLabel || null,
        id: id || null,
      });
    }
  }

  // Also detect role-based landmarks (e.g., <div role="banner">)
  const roleLandmarks = {
    banner: "header",
    navigation: "nav",
    main: "main",
    complementary: "aside",
    contentinfo: "footer",
    search: "search",
  };
  const roleRe = /(<\w+)\s([^>]*role\s*=\s*["'](banner|navigation|main|complementary|contentinfo|search)["'][^>]*)>/gi;
  let rm;
  while ((rm = roleRe.exec(html)) !== null) {
    const attrs = rm[2];
    const roleName = rm[3].toLowerCase();
    const ariaLabel = getAttr(attrs, "aria-label");
    const id = getAttr(attrs, "id");

    landmarks.push({
      tag: roleLandmarks[roleName] || roleName,
      role: roleName,
      start: rm.index,
      end: rm.index + 5000, // approximate
      label: ariaLabel || null,
      id: id || null,
    });
  }

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
  let best = null;
  for (const lm of context.landmarks) {
    if (position >= lm.start && position < lm.end) {
      if (!best || (lm.end - lm.start) < (best.end - best.start)) {
        best = lm;
      }
    }
  }
  if (!best) return { tag: null, label: null, id: null };
  return { tag: best.tag, label: best.label || null, id: best.id || null };
}

function getNearestHeading(position, context) {
  let nearest = null;
  for (const h of context.headings) {
    if (h.position < position) {
      nearest = h;
    }
  }
  return nearest ? { level: nearest.level, text: nearest.text } : null;
}

// =============================================================
// Check interactive context
// =============================================================

function getInteractiveContext(html, position) {
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

    const absOpen = sliceStart + aOpen;
    const closePos = html.indexOf("</a>", position);
    let hasText = !!ariaLabel;
    if (!hasText && closePos > -1) {
      const content = html.slice(absOpen, closePos)
        .replace(/^<a[^>]*>/i, "")
        .replace(/<svg[\s\S]*?<\/svg>/gi, "")
        .replace(/<img[^>]*>/gi, "")
        .replace(/<i\s[^>]*class\s*=\s*["'][^"']*(?:fa-|icon-|material-|bi-|glyphicon)[^"']*["'][^>]*>[\s\S]*?<\/i>/gi, "")
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
        .replace(/<i\s[^>]*class\s*=\s*["'][^"']*(?:fa-|icon-|material-|bi-|glyphicon)[^"']*["'][^>]*>[\s\S]*?<\/i>/gi, "")
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

function extractImages(html, context, baseUrl, pageLang) {
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

    let resolvedSrc = src;
    if (src && !src.startsWith("http") && !src.startsWith("data:")) {
      try {
        resolvedSrc = new URL(src, baseUrl).href;
      } catch { /* keep original */ }
    }

    const interactive = getInteractiveContext(html, position);

    // Determine status
    let status;
    const issues = [];

    if (role === "presentation" || role === "none" || ariaHidden === "true") {
      status = "decorative";
    } else if (alt === null && ariaLabel === null) {
      // No alt attribute at all — WCAG violation
      status = "missing";
    } else if ((alt !== null && alt.trim() === "") && ariaLabel === null) {
      // alt="" — decorative if standalone or in interactive with text
      if (interactive && !interactive.hasText) {
        status = "empty-interactive"; // ERROR: only content in interactive
      } else {
        status = "decorative"; // OK
      }
    } else {
      // Has alt text or aria-label — check quality
      const text = ariaLabel || alt || "";
      const quality = checkAltQuality(text, pageLang);
      if (quality.length > 0) {
        status = "review";
        issues.push(...quality);
      } else {
        status = "present";
      }
    }

    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    images.push({
      type: "img",
      src: resolvedSrc || "",
      alt,
      ariaLabel,
      status,
      issues,
      interactive: interactive ? { element: interactive.element, hasText: interactive.hasText } : null,
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

    const openTagMatch = fullMatch.match(/^<svg\s([^>]*?)>/i);
    const attrs = openTagMatch ? openTagMatch[1] : "";

    const ariaLabel = getAttr(attrs, "aria-label");
    const ariaLabelledby = getAttr(attrs, "aria-labelledby");
    const ariaHidden = getAttr(attrs, "aria-hidden");
    const role = getAttr(attrs, "role");

    const titleMatch = fullMatch.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : null;

    const interactive = getInteractiveContext(html, position);
    const hasName = !!(ariaLabel || titleText || ariaLabelledby);

    let status;
    let accessibleName = null;

    if (interactive && interactive.hasText) {
      // SVG inside link/button that already has text
      if (hasName) {
        status = "redundant";
        accessibleName = ariaLabel || titleText || "(via aria-labelledby)";
      } else {
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
    } else if (interactive && !interactive.hasText) {
      // SVG is only content in interactive — error
      status = "missing";
    } else {
      // Standalone SVG without name — needs review
      status = "review";
    }

    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    svgs.push({
      type: "svg",
      accessibleName,
      role,
      status,
      issues: [],
      interactive: interactive ? { element: interactive.element, hasText: interactive.hasText } : null,
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

    // Check for sr-only sibling
    const after = html.slice(m.index + m[0].length, m.index + m[0].length + 200);
    const srOnlyMatch = after.match(/<span[^>]*class\s*=\s*["'][^"']*sr-only[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
    const srOnlyText = srOnlyMatch ? srOnlyMatch[1].replace(/<[^>]+>/g, "").trim() : null;

    const interactive = getInteractiveContext(html, position);

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
    } else if (interactive && interactive.hasText) {
      // Icon in link/button that has text — decorative
      status = "decorative";
    } else if (interactive && !interactive.hasText) {
      // Icon is only content in link/button — error
      status = "missing";
    } else {
      // Standalone icon without name — manual review needed
      status = "review";
    }

    const landmark = getLandmark(position, context);
    const nearestHeading = getNearestHeading(position, context);

    const iconClass = className.match(/(?:fa-|icon-|material-|bi-|glyphicon-)([\w-]+)/);
    const iconName = iconClass ? iconClass[0] : className.split(/\s+/).slice(0, 2).join(" ");

    icons.push({
      type: "icon",
      tag,
      iconName,
      accessibleName,
      status,
      issues: [],
      interactive: interactive ? { element: interactive.element, hasText: interactive.hasText } : null,
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

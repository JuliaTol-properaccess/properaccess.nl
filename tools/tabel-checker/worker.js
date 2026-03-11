/**
 * Cloudflare Worker — Tabel Checker API
 * Fetches a URL and returns table accessibility info as JSON.
 *
 * Deploy: npx wrangler deploy worker.js --name tabel-checker
 * Usage:  GET https://tabel-checker.<subdomain>.workers.dev/?url=https://example.com
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
          "User-Agent": "ProperAccess-TabelChecker/1.0",
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

      const result = analyzeHtml(html);

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

function analyzeHtml(html) {
  // Strip scripts and styles
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const tables = extractTables(cleaned);
  const totalTables = tables.length;

  // Count issues
  let totalIssues = 0;
  let totalWarnings = 0;
  for (const table of tables) {
    for (const issue of table.issues) {
      if (issue.severity === "error") totalIssues++;
      else totalWarnings++;
    }
  }

  return {
    tables,
    summary: {
      totalTables,
      dataTables: tables.filter(t => t.type === "data").length,
      layoutTables: tables.filter(t => t.type === "layout").length,
      totalIssues,
      totalWarnings,
    },
  };
}

// =============================================================
// Extract and analyze <table> elements
// =============================================================

function extractTables(html) {
  const tables = [];
  const tableRe = /<table\s([^>]*?)>([\s\S]*?)<\/table>|<table>([\s\S]*?)<\/table>/gi;
  let m;
  let tableIndex = 0;

  // Count total tables for multi-table check
  const tableCount = (html.match(/<table[\s>]/gi) || []).length;

  while ((m = tableRe.exec(html)) !== null) {
    tableIndex++;
    const attrs = m[1] || "";
    const content = m[2] || m[3] || "";
    const issues = [];

    const role = getAttr(attrs, "role");
    const ariaLabel = getAttr(attrs, "aria-label");
    const ariaLabelledby = getAttr(attrs, "aria-labelledby");
    const summary = getAttr(attrs, "summary");

    // Check for <caption>
    const captionMatch = content.match(/<caption[^>]*>([\s\S]*?)<\/caption>/i);
    const caption = captionMatch ? captionMatch[1].replace(/<[^>]+>/g, "").trim() : null;

    // Accessible name
    const accessibleName = ariaLabel || caption || null;

    // Extract all <th> elements
    const thElements = [];
    const thRe = /<th\s([^>]*?)>([\s\S]*?)<\/th>|<th>([\s\S]*?)<\/th>/gi;
    let thm;
    while ((thm = thRe.exec(content)) !== null) {
      const thAttrs = thm[1] || "";
      const thContent = (thm[2] || thm[3] || "").replace(/<[^>]+>/g, "").trim();
      const scope = getAttr(thAttrs, "scope");
      const id = getAttr(thAttrs, "id");
      thElements.push({ content: thContent, scope, id, attrs: thAttrs });
    }

    // Extract all <td> elements
    const tdElements = [];
    const tdRe = /<td\s([^>]*?)>([\s\S]*?)<\/td>|<td>([\s\S]*?)<\/td>/gi;
    let tdm;
    while ((tdm = tdRe.exec(content)) !== null) {
      const tdAttrs = tdm[1] || "";
      const tdContent = (tdm[2] || tdm[3] || "").replace(/<[^>]+>/g, "").trim();
      const headers = getAttr(tdAttrs, "headers");
      tdElements.push({ content: tdContent, headers, attrs: tdAttrs });
    }

    // Count rows and columns
    const rows = (content.match(/<tr[\s>]/gi) || []).length;
    const firstRowMatch = content.match(/<tr[^>]*>([\s\S]*?)<\/tr>/i);
    const cols = firstRowMatch
      ? (firstRowMatch[1].match(/<t[hd][\s>]/gi) || []).length
      : 0;

    // Determine table type
    const isLayout = role === "presentation" || role === "none";
    const hasStructuralMarkup = thElements.length > 0 || !!caption || !!summary;
    const type = isLayout ? "layout" : "data";

    // ─── Check: Layout table issues (SC 1.3.1) ───
    if (isLayout) {
      if (thElements.length > 0) {
        issues.push({
          severity: "error",
          sc: "1.3.1",
          id: "layout-has-th",
          detail: { count: thElements.length },
        });
      }
      if (caption) {
        issues.push({
          severity: "error",
          sc: "1.3.1",
          id: "layout-has-caption",
        });
      }
      if (summary) {
        issues.push({
          severity: "error",
          sc: "1.3.1",
          id: "layout-has-summary",
        });
      }
    }

    // ─── Data table checks ───
    if (!isLayout) {

      // Check: No <th> elements (SC 1.3.1)
      if (thElements.length === 0 && rows > 1) {
        issues.push({
          severity: "error",
          sc: "1.3.1",
          id: "no-th",
        });
      }

      // Check: Empty <th> (SC 2.4.6) — only flag when multiple data tables on page
      const emptyTh = thElements.filter(th => !th.content);
      if (emptyTh.length > 0 && tableCount > 1) {
        issues.push({
          severity: "error",
          sc: "2.4.6",
          id: "empty-th",
          detail: { count: emptyTh.length },
        });
      }

      // Check: Accessible name when multiple tables (SC 4.1.2)
      if (tableCount > 1 && !accessibleName && !ariaLabelledby) {
        issues.push({
          severity: "warning",
          sc: "4.1.2",
          id: "no-accessible-name",
        });
      }

      // Check: headers attribute references (SC 1.3.1)
      const tdsWithHeaders = tdElements.filter(td => td.headers);
      if (tdsWithHeaders.length > 0) {
        const thIds = new Set(thElements.filter(th => th.id).map(th => th.id));
        for (const td of tdsWithHeaders) {
          const refs = td.headers.split(/\s+/);
          for (const ref of refs) {
            if (!thIds.has(ref)) {
              issues.push({
                severity: "error",
                sc: "1.3.1",
                id: "invalid-headers-ref",
                detail: { ref, cell: td.content.substring(0, 40) },
              });
            }
          }
        }
      }

      // Check: Sortable columns (SC 4.1.2)
      // Look for buttons/links inside <th> or aria-sort
      const sortableThRe = /<th[^>]*>([\s\S]*?)<\/th>/gi;
      let stm;
      while ((stm = sortableThRe.exec(content)) !== null) {
        const thInner = stm[1];
        const thFullMatch = stm[0];
        const hasButton = /<button[\s>]/i.test(thInner) || /role\s*=\s*["']button["']/i.test(thInner);
        const hasLink = /<a\s/i.test(thInner);
        const hasAriaSort = /aria-sort/i.test(thFullMatch);

        if ((hasButton || hasLink) && !hasAriaSort) {
          issues.push({
            severity: "warning",
            sc: "4.1.2",
            id: "sortable-no-aria-sort",
            detail: { header: thInner.replace(/<[^>]+>/g, "").trim().substring(0, 40) },
          });
        }
      }

      // Check: Data table might need role="presentation" (SC 1.3.1)
      // If a table has no th, no caption, no summary, and only 1 row — might be layout
      if (thElements.length === 0 && !caption && !summary && rows <= 1) {
        issues.push({
          severity: "warning",
          sc: "1.3.1",
          id: "possible-layout-table",
        });
      }
    }

    // Build location info
    const landmark = getLandmarkForPosition(html, m.index);
    const nearestHeading = getNearestHeading(html, m.index);

    tables.push({
      index: tableIndex,
      type,
      role: role || null,
      accessibleName,
      caption,
      rows,
      cols,
      thCount: thElements.length,
      tdCount: tdElements.length,
      issues,
      landmark,
      nearestHeading,
    });
  }

  return tables;
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

function getNearestHeading(html, position) {
  const hRe = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let nearest = null;
  let hm;
  while ((hm = hRe.exec(html)) !== null) {
    if (hm.index < position) {
      nearest = hm[2].replace(/<[^>]+>/g, "").trim();
    }
  }
  return nearest || null;
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

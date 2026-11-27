// Blokkadecheck, proef (stap 1 van ~/.claude/plans/properaccess-blokkadecheck.md).
// Opent een URL in Browser Rendering, draait axe-core en geeft de fouten met hun
// positie terug, plus één schermafbeelding. Nog geen beveiliging: niet publiek deployen.
//
// GET /?url=https://...&max=4000&format=jpeg|webp&quality=60

import puppeteer from "@cloudflare/puppeteer";
import axeSource from "axe-core/axe.min.js";

const VIEWPORT = { width: 1280, height: 800 };

export default {
  async fetch(request, env) {
    const params = new URL(request.url).searchParams;
    const target = params.get("url");
    if (!target || !/^https?:\/\//.test(target)) {
      return json({ error: "ongeldige-url" }, 400);
    }
    const maxHeight = Number(params.get("max") || 0); // 0 = hele pagina
    const format = params.get("format") === "webp" ? "webp" : "jpeg";
    const quality = Number(params.get("quality") || 60);

    const t = { start: Date.now() };
    let browser;
    try {
      browser = await puppeteer.launch(env.BROWSER);
      t.launch = Date.now();
      const page = await browser.newPage();
      await page.setBypassCSP(true);
      await page.setViewport(VIEWPORT);

      // networkidle2 haalde Zalando niet binnen 30 s: eerst "load", dan kort op rust wachten.
      const response = await page.goto(target, { waitUntil: "load", timeout: 20000 });
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }).catch(() => {});
      t.goto = Date.now();
      const status = response ? response.status() : null;
      if (status && status >= 400) {
        return json({ error: "pagina-weigert", status, title: await page.title(), ms: Date.now() - t.start }, 502);
      }

      // Doorscrollen zodat lazy-load-afbeeldingen laden, daarna terug naar boven.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        const max = Math.min(document.documentElement.scrollHeight, 20000);
        for (let y = 0; y < max; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 150));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 3000 }).catch(() => {});
      t.scroll = Date.now();

      // axe via CDP-evaluate: dit is geen <script>-tag, dus de CSP van de pagina telt niet.
      await page.evaluate(axeSource);
      const raw = await page.evaluate(async () => {
        const result = await window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
          resultTypes: ["violations"],
        });
        const out = [];
        for (const v of result.violations) {
          for (const node of v.nodes) {
            const sel = node.target[node.target.length - 1];
            let el = null;
            try { el = typeof sel === "string" ? document.querySelector(sel) : null; } catch (e) {}
            let box = null;
            if (el) {
              const r = el.getBoundingClientRect();
              box = {
                x: Math.round(r.left + window.scrollX),
                y: Math.round(r.top + window.scrollY),
                width: Math.round(r.width),
                height: Math.round(r.height),
              };
            }
            out.push({
              rule: v.id,
              impact: node.impact,
              target: node.target,
              box,
              element: node.html.slice(0, 160),
            });
          }
        }
        return JSON.stringify({
          axeVersion: window.axe.version,
          pageHeight: document.documentElement.scrollHeight,
          pageWidth: document.documentElement.scrollWidth,
          title: document.title,
          violations: out,
        });
      });
      t.axe = Date.now();
      const data = JSON.parse(raw);

      const fullHeight = data.pageHeight;
      const shotHeight = maxHeight > 0 ? Math.min(fullHeight, maxHeight) : fullHeight;
      const shot = await page.screenshot({
        type: format,
        quality,
        encoding: "base64",
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: shotHeight },
        captureBeyondViewport: true,
      });
      t.shot = Date.now();

      return json({
        url: target,
        finalUrl: page.url(),
        status,
        title: data.title,
        axeVersion: data.axeVersion,
        page: { width: data.pageWidth, height: fullHeight },
        screenshot: {
          format,
          width: VIEWPORT.width,
          height: shotHeight,
          bytes: Math.round((shot.length * 3) / 4),
          base64: params.get("noimg") ? undefined : shot,
        },
        count: data.violations.length,
        withoutBox: data.violations.filter((v) => !v.box || v.box.width === 0).length,
        violations: data.violations,
        timings: {
          launch: t.launch - t.start,
          goto: t.goto - t.launch,
          scroll: t.scroll - t.goto,
          axe: t.axe - t.scroll,
          screenshot: t.shot - t.axe,
          total: t.shot - t.start,
        },
      });
    } catch (err) {
      return json({ error: "scan-mislukt", message: String(err && err.message), ms: Date.now() - t.start }, 502);
    } finally {
      if (browser) await browser.close();
    }
  },
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

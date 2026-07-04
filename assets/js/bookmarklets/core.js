/* Proper Access - Toegankelijkheids-lens: gedeelde core.
   Wordt door scripts/build-bookmarklets.js samengevoegd met de check-modules en
   een boot-bestand per rol, en daarna in een IIFE gewrapt. Schrijf dus geen eigen
   IIFE-wrapper hier. Gebruik geen // regelcommentaar binnen expressies: de
   minifier strip alleen hele commentaarregels.
   Merkkleuren: magenta #A30D4B, donkerblauw #1F2937, petrol #004050. */

var PA = window.__paLens || {};
window.__paLens = PA;

PA.checks = PA.checks || {};
PA.baseURL = "https://properaccess.nl";
PA.NS = "pa-lens";

/* Registreer een check. Vorm:
   { id, group, label, hint, wcag, run(ctx)->{count,summary}, clear(ctx) } */
PA.register = function (check) {
  PA.checks[check.id] = check;
};

/* ---- kleine helpers ---------------------------------------------------- */
PA.esc = function (s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

PA.visible = function (el) {
  if (!el || el.nodeType !== 1) return false;
  var s = getComputedStyle(el);
  if (s.display === "none" || s.visibility === "hidden" || s.visibility === "collapse") return false;
  if (parseFloat(s.opacity) === 0) return false;
  var r = el.getBoundingClientRect();
  return r.width > 0 || r.height > 0;
};

PA.hiddenReason = function (el) {
  var s = getComputedStyle(el);
  if (s.display === "none") return "display:none";
  if (s.visibility === "hidden") return "visibility:hidden";
  if (el.hasAttribute("hidden")) return "hidden";
  if (el.getAttribute("aria-hidden") === "true") return 'aria-hidden="true"';
  return null;
};

/* Toegankelijke naam (versimpeld: dekt de meest voorkomende gevallen). */
PA.accName = function (el) {
  if (!el) return "";
  var label = el.getAttribute && el.getAttribute("aria-label");
  if (label && label.trim()) return label.trim();
  var lb = el.getAttribute && el.getAttribute("aria-labelledby");
  if (lb) {
    var parts = lb.split(/\s+/).map(function (id) {
      var t = document.getElementById(id);
      return t ? (t.textContent || "").trim() : "";
    });
    var joined = parts.join(" ").trim();
    if (joined) return joined;
  }
  if (el.id) {
    var forLabel = document.querySelector('label[for="' + CSS.escape(el.id) + '"]');
    if (forLabel) return (forLabel.textContent || "").trim();
  }
  var wrap = el.closest && el.closest("label");
  if (wrap) return (wrap.textContent || "").trim();
  var alt = el.getAttribute && el.getAttribute("alt");
  if (alt != null) return alt.trim();
  var title = el.getAttribute && el.getAttribute("title");
  if (title && title.trim()) return title.trim();
  return (el.textContent || "").trim();
};

/* ---- kleur / contrast -------------------------------------------------- */
PA.parseColor = function (str) {
  var m = String(str).match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  var p = m[1].split(",").map(function (x) { return parseFloat(x.trim()); });
  return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
};

PA.relLum = function (c) {
  var f = [c.r, c.g, c.b].map(function (v) {
    v = v / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2];
};

PA.contrastRatio = function (fg, bg) {
  var l1 = PA.relLum(fg), l2 = PA.relLum(bg);
  var hi = Math.max(l1, l2), lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
};

/* Effectieve achtergrondkleur: loop omhoog tot een niet-transparante laag. */
PA.effectiveBg = function (el) {
  var node = el;
  while (node && node.nodeType === 1) {
    var c = PA.parseColor(getComputedStyle(node).backgroundColor);
    if (c && c.a === 1) return c;
    node = node.parentElement;
  }
  return { r: 255, g: 255, b: 255, a: 1 };
};

/* ---- overlay-laag (in shadow root, fixed, viewport-coordinaten) -------- */
PA.overlays = [];

PA.addOverlay = function (checkId, el, opts) {
  opts = opts || {};
  var box = document.createElement("div");
  box.className = "pa-ov pa-ov--" + (opts.status || "info");
  var chip = null;
  if (opts.label != null) {
    chip = document.createElement("span");
    chip.className = "pa-ov__chip pa-ov__chip--" + (opts.status || "info");
    chip.textContent = opts.label;
    box.appendChild(chip);
  }
  PA.layer.appendChild(box);
  var rec = { checkId: checkId, el: el, box: box, chip: chip };
  PA.overlays.push(rec);
  PA.positionOne(rec);
  return rec;
};

PA.positionOne = function (rec) {
  var r = rec.el.getBoundingClientRect();
  var b = rec.box.style;
  b.left = r.left + "px";
  b.top = r.top + "px";
  b.width = Math.max(r.width, 6) + "px";
  b.height = Math.max(r.height, 6) + "px";
  b.display = r.width === 0 && r.height === 0 ? "none" : "block";
};

PA.reposition = function () {
  for (var i = 0; i < PA.overlays.length; i++) PA.positionOne(PA.overlays[i]);
};

PA.clearOverlays = function (checkId) {
  PA.overlays = PA.overlays.filter(function (rec) {
    if (checkId && rec.checkId !== checkId) return true;
    if (rec.box.parentNode) rec.box.parentNode.removeChild(rec.box);
    return false;
  });
};

/* ---- paneel-UI --------------------------------------------------------- */
PA.STYLE = [
  ":host{all:initial}",
  "*{box-sizing:border-box;font-family:system-ui,-apple-system,'Segoe UI',sans-serif}",
  ".pa-layer{position:fixed;inset:0;pointer-events:none;z-index:2147483646}",
  ".pa-ov{position:fixed;pointer-events:none;outline:2px solid #A30D4B;outline-offset:-1px;border-radius:2px}",
  ".pa-ov--ok{outline-color:#004050}",
  ".pa-ov--warn{outline-color:#b45309;outline-style:dashed}",
  ".pa-ov--error{outline-color:#A30D4B;outline-style:solid;outline-width:3px}",
  ".pa-ov--info{outline-color:#004050;outline-style:dotted}",
  ".pa-ov__chip{position:absolute;top:0;left:0;transform:translateY(-100%);max-width:340px;",
  "font-size:11px;line-height:1.35;font-weight:600;color:#fff;background:#1F2937;padding:1px 5px;",
  "border-radius:3px 3px 3px 0;white-space:normal;pointer-events:none}",
  ".pa-ov__chip--ok{background:#004050}",
  ".pa-ov__chip--warn{background:#b45309}",
  ".pa-ov__chip--error{background:#A30D4B}",
  ".pa-panel{position:fixed;top:16px;right:16px;width:320px;max-height:calc(100vh - 32px);",
  "display:flex;flex-direction:column;background:#fff;color:#1F2937;border:1px solid #1F2937;",
  "border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.28);pointer-events:auto;z-index:2147483647;font-size:14px}",
  ".pa-panel__head{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#1F2937;",
  "color:#fff;border-radius:9px 9px 0 0}",
  ".pa-panel__logo{width:12px;height:12px;border-radius:50%;background:#A30D4B;flex:0 0 auto}",
  ".pa-panel__title{font-weight:800;font-size:14px;margin:0;flex:1 1 auto}",
  ".pa-panel__role{font-size:11px;font-weight:600;opacity:.85;display:block}",
  ".pa-iconbtn{appearance:none;border:0;background:transparent;color:#fff;cursor:pointer;",
  "font-size:18px;line-height:1;padding:4px;border-radius:4px}",
  ".pa-iconbtn:hover{background:rgba(255,255,255,.15)}",
  ".pa-iconbtn:focus-visible{outline:3px solid #fff;outline-offset:1px}",
  ".pa-panel__body{overflow:auto;padding:6px}",
  ".pa-group__label{font-size:11px;text-transform:uppercase;letter-spacing:.04em;font-weight:700;",
  "color:#004050;padding:10px 8px 4px}",
  ".pa-check{display:block;border:1px solid #e5e7eb;border-radius:8px;margin:4px 0;overflow:hidden}",
  ".pa-check--on{border-color:#A30D4B}",
  ".pa-check__btn{display:flex;align-items:center;gap:8px;width:100%;text-align:left;appearance:none;",
  "border:0;background:#fff;color:#1F2937;cursor:pointer;padding:8px 10px;font-size:13px;font-weight:600}",
  ".pa-check__btn:hover{background:#f5f5f5}",
  ".pa-check__btn:focus-visible{outline:3px solid #004050;outline-offset:-2px}",
  ".pa-sw{flex:0 0 auto;width:32px;height:18px;border-radius:9px;background:#cbd5e1;position:relative;transition:background .15s}",
  ".pa-sw::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:left .15s}",
  ".pa-check--on .pa-sw{background:#A30D4B}",
  ".pa-check--on .pa-sw::after{left:16px}",
  ".pa-check__name{flex:1 1 auto}",
  ".pa-check__summary{padding:0 10px 8px 50px;font-size:12px;font-weight:400;color:#004050}",
  ".pa-check__summary a{color:#A30D4B;font-weight:600}",
  ".pa-check__summary[hidden]{display:none}",
  ".pa-panel__foot{display:flex;gap:8px;padding:8px 10px;border-top:1px solid #e5e7eb}",
  ".pa-btn{appearance:none;border:1px solid #1F2937;background:#fff;color:#1F2937;border-radius:6px;",
  "padding:6px 10px;font-size:12px;font-weight:700;cursor:pointer;flex:1 1 auto}",
  ".pa-btn:hover{background:#f5f5f5}",
  ".pa-btn--primary{background:#A30D4B;border-color:#A30D4B;color:#fff}",
  ".pa-btn:focus-visible{outline:3px solid #004050;outline-offset:1px}",
  ".pa-panel__credit{padding:7px 10px;border-top:1px solid #e5e7eb;font-size:11px;color:#004050;text-align:center;border-radius:0 0 9px 9px}",
  ".pa-panel__credit a{color:#A30D4B;font-weight:700}",
  ".pa-panel__credit a:focus-visible{outline:2px solid #004050;outline-offset:1px}",
  ".pa-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
  "@media (prefers-reduced-motion: reduce){*{transition:none!important}}"
].join("");

PA.ctx = function (id) {
  return {
    id: id,
    mark: function (el, opts) { return PA.addOverlay(id, el, opts); },
    clearMarks: function () { PA.clearOverlays(id); }
  };
};

PA.announce = function (msg) {
  if (!PA.live) return;
  PA.live.textContent = "";
  setTimeout(function () { PA.live.textContent = msg; }, 30);
};

PA.toggle = function (id, checkEl) {
  var check = PA.checks[id];
  var st = PA.state[id] || (PA.state[id] = { on: false });
  var ctx = PA.ctx(id);
  var summaryEl = checkEl.querySelector(".pa-check__summary");
  if (st.on) {
    if (check.clear) try { check.clear(ctx); } catch (e) {}
    PA.clearOverlays(id);
    st.on = false;
    checkEl.classList.remove("pa-check--on");
    checkEl.querySelector(".pa-check__btn").setAttribute("aria-pressed", "false");
    summaryEl.hidden = true;
    PA.announce(check.label + " uitgezet.");
  } else {
    var res = {};
    try { res = check.run(ctx) || {}; } catch (e) { res = { summary: "Kon deze check niet uitvoeren." }; }
    st.on = true;
    checkEl.classList.add("pa-check--on");
    checkEl.querySelector(".pa-check__btn").setAttribute("aria-pressed", "true");
    var html = res.summary ? PA.esc(res.summary) : "Geen problemen gevonden.";
    if (check.wcag) {
      html += ' <a href="' + PA.baseURL + check.wcag + '" target="_blank" rel="noopener">Meer uitleg</a>';
    }
    summaryEl.innerHTML = html;
    summaryEl.hidden = false;
    PA.announce(check.label + ": " + (res.summary || "geen problemen gevonden") + ".");
  }
};

PA.resetAll = function () {
  Object.keys(PA.state).forEach(function (id) {
    if (PA.state[id].on) {
      var el = PA.root.querySelector('.pa-check[data-id="' + id + '"]');
      if (el) PA.toggle(id, el);
    }
  });
  PA.announce("Alle checks uitgezet.");
};

PA.destroy = function () {
  PA.resetAll();
  if (PA.host && PA.host.parentNode) PA.host.parentNode.removeChild(PA.host);
  window.removeEventListener("scroll", PA.reposition, true);
  window.removeEventListener("resize", PA.reposition, true);
  PA.host = null;
};

PA.build = function () {
  PA.state = {};
  PA.host = document.createElement("div");
  PA.host.id = "pa-a11y-lens-host";
  PA.host.setAttribute("data-pa-lens", "1");
  var root = PA.host.attachShadow({ mode: "open" });
  PA.root = root;
  document.documentElement.appendChild(PA.host);

  var style = document.createElement("style");
  style.textContent = PA.STYLE;
  root.appendChild(style);

  PA.layer = document.createElement("div");
  PA.layer.className = "pa-layer";
  root.appendChild(PA.layer);

  PA.live = document.createElement("div");
  PA.live.className = "pa-sr";
  PA.live.setAttribute("role", "status");
  PA.live.setAttribute("aria-live", "polite");
  root.appendChild(PA.live);

  var panel = document.createElement("section");
  panel.className = "pa-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Toegankelijkheids-lens voor " + PA.role);
  panel.setAttribute("tabindex", "-1");

  var head = document.createElement("div");
  head.className = "pa-panel__head";
  head.innerHTML =
    '<span class="pa-panel__logo" aria-hidden="true"></span>' +
    '<h2 class="pa-panel__title">Toegankelijkheids-lens' +
    '<span class="pa-panel__role">' + PA.esc(PA.role) + "</span></h2>";
  var close = document.createElement("button");
  close.className = "pa-iconbtn";
  close.type = "button";
  close.setAttribute("aria-label", "Lens sluiten");
  close.innerHTML = "&times;";
  close.addEventListener("click", PA.destroy);
  head.appendChild(close);
  panel.appendChild(head);

  var body = document.createElement("div");
  body.className = "pa-panel__body";

  var lastGroup = null;
  PA.order.forEach(function (id) {
    var check = PA.checks[id];
    if (!check) return;
    if (check.group && check.group !== lastGroup) {
      var gl = document.createElement("div");
      gl.className = "pa-group__label";
      gl.textContent = check.group;
      body.appendChild(gl);
      lastGroup = check.group;
    }
    var wrap = document.createElement("div");
    wrap.className = "pa-check";
    wrap.setAttribute("data-id", id);
    var btn = document.createElement("button");
    btn.className = "pa-check__btn";
    btn.type = "button";
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML =
      '<span class="pa-sw" aria-hidden="true"></span>' +
      '<span class="pa-check__name">' + PA.esc(check.label) + "</span>";
    btn.addEventListener("click", function () { PA.toggle(id, wrap); });
    wrap.appendChild(btn);
    var summary = document.createElement("div");
    summary.className = "pa-check__summary";
    summary.hidden = true;
    wrap.appendChild(summary);
    body.appendChild(wrap);
  });
  panel.appendChild(body);

  var foot = document.createElement("div");
  foot.className = "pa-panel__foot";
  var resetBtn = document.createElement("button");
  resetBtn.className = "pa-btn";
  resetBtn.type = "button";
  resetBtn.textContent = "Alles resetten";
  resetBtn.addEventListener("click", PA.resetAll);
  var auditBtn = document.createElement("a");
  auditBtn.className = "pa-btn pa-btn--primary";
  auditBtn.href = PA.baseURL + "/diensten/offerte-wcag-onderzoek/";
  auditBtn.target = "_blank";
  auditBtn.rel = "noopener";
  auditBtn.textContent = "Laat het ons checken";
  foot.appendChild(resetBtn);
  foot.appendChild(auditBtn);
  panel.appendChild(foot);

  var credit = document.createElement("div");
  credit.className = "pa-panel__credit";
  credit.innerHTML =
    'Een gratis tool van <a href="' + PA.baseURL + '" target="_blank" rel="noopener">properaccess.nl</a>';
  panel.appendChild(credit);

  root.appendChild(panel);

  panel.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { e.stopPropagation(); PA.destroy(); }
  });

  window.addEventListener("scroll", PA.reposition, true);
  window.addEventListener("resize", PA.reposition, true);
  panel.focus();
};

/* Bootstrap: her-klik sluit de bestaande lens; anders opbouwen. */
PA.start = function () {
  var existing = document.getElementById("pa-a11y-lens-host");
  if (existing) {
    if (PA.destroy) PA.destroy(); else existing.remove();
    return;
  }
  PA.build();
};

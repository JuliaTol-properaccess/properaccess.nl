/* Proper Access - WCAG Radar: gedeelde core.
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
  var text = (el.textContent || "").trim();
  if (text) return text;
  /* Naam uit de inhoud: alt van afbeeldingen, aria-label of svg-titel van
     kinderen. Zo krijgt een link met alleen een afbeelding toch een naam. */
  var bits = [];
  if (el.querySelectorAll) {
    Array.prototype.forEach.call(el.querySelectorAll("img,svg,[aria-label]"), function (d) {
      var dl = d.getAttribute("aria-label");
      if (dl && dl.trim()) { bits.push(dl.trim()); return; }
      var tag = d.tagName.toLowerCase();
      if (tag === "img") { var a = d.getAttribute("alt"); if (a && a.trim()) bits.push(a.trim()); }
      else if (tag === "svg") { var t = d.querySelector("title"); if (t) bits.push((t.textContent || "").trim()); }
    });
  }
  if (bits.length) return bits.join(" ").trim();
  var title = el.getAttribute && el.getAttribute("title");
  if (title && title.trim()) return title.trim();
  return "";
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

/* Betrouwbare effen achtergrond of null. Loopt omhoog tot een effen kleur;
   komt er onderweg een background-image (foto of gradient) of een half-
   transparante laag langs, dan is de meting niet betrouwbaar en geeft dit null
   terug. Zo markeren we alleen tekst waarvan we het contrast echt kunnen meten. */
PA.solidBg = function (el) {
  var node = el;
  while (node && node.nodeType === 1) {
    var cs = getComputedStyle(node);
    if (cs.backgroundImage && cs.backgroundImage !== "none") return null;
    var c = PA.parseColor(cs.backgroundColor);
    if (c && c.a === 1) return c;
    if (c && c.a > 0 && c.a < 1) return null;
    node = node.parentElement;
  }
  return { r: 255, g: 255, b: 255, a: 1 };
};

/* ---- tekst vergroten ---------------------------------------------------
   Gedeeld mechanisme voor de vergroot-checks (200%, 400%). De originele
   lettergroottes worden één keer gemeten en bewaard, zodat meerdere niveaus
   niet op elkaar stapelen. De zichtbare vergroting is altijd het hoogste
   actieve niveau; zet je 400% uit terwijl 200% aan staat, dan valt het terug
   naar 200%. */
PA.textBase = function () {
  if (PA._textBase) return PA._textBase;
  var list = [];
  Array.prototype.forEach.call(document.querySelectorAll("body *"), function (el) {
    if (el.closest("[data-pa-lens]")) return;
    var hasText = false;
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 3 && el.childNodes[i].nodeValue.trim()) { hasText = true; break; }
    }
    if (!hasText) return;
    var size = parseFloat(getComputedStyle(el).fontSize);
    if (!size) return;
    list.push({ el: el, size: size, prev: el.style.getPropertyValue("font-size"), prio: el.style.getPropertyPriority("font-size") });
  });
  PA._textBase = list;
  return list;
};

PA.setTextZoom = function (factor, on) {
  PA._zoomSet = PA._zoomSet || {};
  if (on) PA._zoomSet[factor] = true; else delete PA._zoomSet[factor];
  var factors = Object.keys(PA._zoomSet).map(Number);
  if (!factors.length) {
    (PA._textBase || []).forEach(function (r) {
      if (r.prev) r.el.style.setProperty("font-size", r.prev, r.prio);
      else r.el.style.removeProperty("font-size");
    });
    PA._textBase = null;
    return;
  }
  var max = Math.max.apply(null, factors);
  PA.textBase().forEach(function (r) {
    r.el.style.setProperty("font-size", (r.size * max) + "px", "important");
  });
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
  /* Chip staat standaard bóven het element (translateY(-100%)). Voor elementen
     die zelf tegen de bovenkant van de viewport zitten (denk aan een header op
     y:0) valt het label achter de browser-chrome. In dat geval flippen we
     naar onderin het element. Drempel 32px = ruime hoogte voor een chip. */
  if (rec.chip) {
    var flip = r.top < 32;
    rec.chip.classList.toggle("pa-ov__chip--below", flip);
  }
};

PA.reposition = function () {
  for (var i = 0; i < PA.overlays.length; i++) PA.positionOne(PA.overlays[i]);
};

/* Peek-modus: bij drukke pagina's (veel overlays op elkaar) blijven chips
   standaard leesbaar staan, maar zodra je een gemarkeerd element aanwijst
   worden alle andere chips gedimd. Zo kun je nog altijd één label rustig
   lezen zonder dat de rest in de weg staat. Onder de drempel doen we niets. */
PA.PEEK_THRESHOLD = 8;

PA._peekHandler = function (e) {
  if (PA._peekRaf) return;
  PA._peekRaf = requestAnimationFrame(function () {
    PA._peekRaf = 0;
    if (!PA.overlays || PA.overlays.length < PA.PEEK_THRESHOLD) {
      /* Onder de drempel: alle chips onbeperkt tonen. */
      for (var j = 0; j < PA.overlays.length; j++) {
        var rec2 = PA.overlays[j];
        if (rec2.chip) rec2.chip.classList.remove("pa-ov__chip--dim");
        rec2.box.style.zIndex = "";
      }
      return;
    }
    var t = document.elementFromPoint(e.clientX, e.clientY);
    var over = null;
    for (var i = 0; i < PA.overlays.length; i++) {
      var rec = PA.overlays[i];
      if (t && (rec.el === t || rec.el.contains(t))) { over = rec; break; }
    }
    for (var k = 0; k < PA.overlays.length; k++) {
      var r = PA.overlays[k];
      if (!r.chip) continue;
      var focused = over === r;
      r.chip.classList.toggle("pa-ov__chip--dim", !!over && !focused);
      r.box.style.zIndex = focused ? "1" : "";
    }
  });
};

PA.wirePeek = function () {
  if (PA._peekBound) return;
  PA._peekBound = true;
  document.addEventListener("mousemove", PA._peekHandler, { passive: true });
};

PA.unwirePeek = function () {
  if (!PA._peekBound) return;
  PA._peekBound = false;
  document.removeEventListener("mousemove", PA._peekHandler);
  if (PA._peekRaf) { cancelAnimationFrame(PA._peekRaf); PA._peekRaf = 0; }
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
  ".pa-ov__chip--below{top:100%;transform:none;border-radius:0 3px 3px 3px}",
  ".pa-ov__chip--dim{opacity:.12;transition:opacity .1s}",
  ".pa-ov__chip--ok{background:#004050}",
  ".pa-ov__chip--warn{background:#b45309}",
  ".pa-ov__chip--error{background:#A30D4B}",
  ".pa-panel{position:fixed;top:16px;right:16px;width:320px;max-height:calc(100vh - 32px);",
  "display:flex;flex-direction:column;background:#fff;color:#1F2937;border:1px solid #1F2937;",
  "border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.28);pointer-events:auto;z-index:2147483647;font-size:14px}",
  ".pa-panel__head{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#1F2937;",
  "color:#fff;border-radius:9px 9px 0 0;cursor:move;user-select:none;touch-action:none}",
  ".pa-panel__grip{flex:0 0 auto;color:#fff;opacity:.7;font-size:13px;letter-spacing:1px}",
  ".pa-panel__logo{width:12px;height:12px;border-radius:50%;background:#A30D4B;flex:0 0 auto}",
  ".pa-panel__title{font-weight:800;font-size:14px;margin:0;flex:1 1 auto}",
  ".pa-panel__role{font-size:11px;font-weight:600;opacity:.85;display:block}",
  ".pa-tabs{display:flex;gap:2px;padding:6px 6px 0;background:#1F2937}",
  ".pa-tab{flex:1 1 0;appearance:none;border:0;background:transparent;color:#fff;opacity:.7;",
  "cursor:pointer;padding:7px 6px;font-size:12px;font-weight:700;border-radius:6px 6px 0 0;",
  "border-bottom:3px solid transparent}",
  ".pa-tab:hover{opacity:1;background:rgba(255,255,255,.10)}",
  ".pa-tab[aria-selected=true]{opacity:1;background:#fff;color:#A30D4B;border-bottom-color:#A30D4B}",
  ".pa-tab:focus-visible{outline:3px solid #fff;outline-offset:-2px}",
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
  ".pa-sw{flex:0 0 auto;width:34px;height:20px;border-radius:10px;background:#6b7280;position:relative;transition:background .15s}",
  ".pa-sw::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:left .15s}",
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
  ".pa-btn--primary:hover{background:#7d0a3a;border-color:#7d0a3a;color:#fff}",
  ".pa-btn:focus-visible{outline:3px solid #004050;outline-offset:1px}",
  ".pa-panel__credit{padding:7px 10px;border-top:1px solid #e5e7eb;font-size:11px;color:#004050;text-align:center;border-radius:0 0 9px 9px}",
  ".pa-panel__credit a{color:#A30D4B;font-weight:700}",
  ".pa-panel__credit a:focus-visible{outline:2px solid #004050;outline-offset:1px}",
  /* Compacte weergave bij kleine viewports of hoge browser-zoom (WCAG 1.4.4
     tekst 200% en 1.4.10 reflow op 320 CSS px). Paneel wordt bijna-fullscreen
     zodat de check-lijst zichtbaar blijft; de credit-regel wordt weggelaten
     om verticale ruimte terug te winnen. */
  "@media (max-width:520px),(max-height:520px){",
  ".pa-panel{top:8px;right:8px;bottom:8px;left:8px;width:auto;max-height:none}",
  ".pa-panel__credit{display:none}",
  ".pa-picker{left:8px;right:8px;bottom:8px;width:auto;max-width:none}",
  "}",
  ".pa-picker{position:fixed;left:16px;bottom:16px;width:280px;background:#fff;color:#1F2937;",
  "border:1px solid #1F2937;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.28);",
  "pointer-events:auto;z-index:2147483647;font-size:13px}",
  ".pa-picker__head{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#1F2937;color:#fff;",
  "font-weight:800;font-size:13px;border-radius:9px 9px 0 0;cursor:move;user-select:none;touch-action:none}",
  ".pa-picker__body{padding:10px}",
  ".pa-picker__hint{margin:0 0 8px;font-size:12px;color:#004050}",
  ".pa-picker__row{display:flex;align-items:center;gap:8px;margin:4px 0}",
  ".pa-picker__btn{flex:0 0 auto}",
  ".pa-picker__swatch{flex:0 0 auto;width:22px;height:22px;border:1px solid #1F2937;border-radius:4px;background:#fff}",
  ".pa-picker__val{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}",
  ".pa-picker__status{font-size:12px;color:#A30D4B;font-weight:600;min-height:0}",
  ".pa-picker__result{margin-top:8px;border-top:1px solid #e5e7eb;padding-top:8px}",
  ".pa-picker__ratio{font-size:20px;font-weight:800}",
  ".pa-picker__norm{font-size:12px;color:#1F2937;margin-top:2px}",
  ".pa-picker__mark{font-weight:800}",
  ".pa-picker__mark--ok{color:#004050}",
  ".pa-picker__mark--fail{color:#A30D4B}",
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
  PA.unwirePeek();
  PA.host = null;
};

/* Sleep het paneel via de titelbalk (niet via de sluitknop). */
PA.makeDraggable = function (panel, handle) {
  var on = false, sx = 0, sy = 0, sl = 0, st = 0;
  handle.addEventListener("pointerdown", function (e) {
    if (e.target.closest(".pa-iconbtn")) return;
    var r = panel.getBoundingClientRect();
    panel.style.left = r.left + "px";
    panel.style.top = r.top + "px";
    panel.style.right = "auto";
    on = true; sx = e.clientX; sy = e.clientY; sl = r.left; st = r.top;
    try { handle.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  handle.addEventListener("pointermove", function (e) {
    if (!on) return;
    var nx = sl + (e.clientX - sx), ny = st + (e.clientY - sy);
    var minX = 40 - panel.offsetWidth, maxX = window.innerWidth - 40;
    var maxY = window.innerHeight - 36;
    panel.style.left = Math.max(minX, Math.min(nx, maxX)) + "px";
    panel.style.top = Math.max(0, Math.min(ny, maxY)) + "px";
  });
  var end = function (e) {
    on = false;
    try { handle.releasePointerCapture(e.pointerId); } catch (err) {}
  };
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
};

/* Bouw de check-rijen voor het actieve tabblad in het body-paneel. */
PA.renderBody = function () {
  var body = PA.body;
  body.textContent = "";
  var lastGroup = null;
  PA.tabs[PA.activeTab].order.forEach(function (id) {
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
};

/* Wissel van tabblad. Zet eerst alle actieve checks uit (schone pagina), werk
   dan de tab-ARIA en subtitel bij en herbouw de body. */
PA.selectTab = function (index) {
  if (index === PA.activeTab) return;
  PA.resetAll();
  var prev = PA.tabButtons[PA.activeTab];
  prev.setAttribute("aria-selected", "false");
  prev.setAttribute("tabindex", "-1");
  PA.activeTab = index;
  var cur = PA.tabButtons[index];
  cur.setAttribute("aria-selected", "true");
  cur.setAttribute("tabindex", "0");
  cur.focus();
  PA.roleEl.textContent = PA.tabs[index].role;
  PA.body.setAttribute("aria-labelledby", "pa-tab-" + PA.tabs[index].key);
  PA.renderBody();
  PA.announce("Tabblad " + PA.tabs[index].label + " geopend.");
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
  panel.setAttribute("aria-label", "WCAG Radar");
  panel.setAttribute("tabindex", "-1");

  var head = document.createElement("div");
  head.className = "pa-panel__head";
  head.title = "Sleep om het paneel te verplaatsen";
  head.innerHTML =
    '<span class="pa-panel__logo" aria-hidden="true"></span>' +
    '<h2 class="pa-panel__title">WCAG Radar' +
    '<span class="pa-panel__role"></span></h2>' +
    '<span class="pa-panel__grip" aria-hidden="true">⁙</span>';
  PA.roleEl = head.querySelector(".pa-panel__role");
  PA.roleEl.textContent = PA.tabs[PA.activeTab].role;
  var close = document.createElement("button");
  close.className = "pa-iconbtn";
  close.type = "button";
  close.setAttribute("aria-label", "Lens sluiten");
  close.innerHTML = "&times;";
  close.addEventListener("click", PA.destroy);
  head.appendChild(close);
  panel.appendChild(head);

  /* Tabbalk: kies een rol (Redactie / Designer / Developer). */
  var tablist = document.createElement("div");
  tablist.className = "pa-tabs";
  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-label", "Kies een rol");
  PA.tabButtons = [];
  PA.tabs.forEach(function (tab, i) {
    var t = document.createElement("button");
    t.className = "pa-tab";
    t.type = "button";
    t.id = "pa-tab-" + tab.key;
    t.setAttribute("role", "tab");
    t.setAttribute("aria-controls", "pa-tabpanel");
    t.setAttribute("aria-selected", i === PA.activeTab ? "true" : "false");
    t.setAttribute("tabindex", i === PA.activeTab ? "0" : "-1");
    t.textContent = tab.label;
    t.addEventListener("click", function () { PA.selectTab(i); });
    tablist.appendChild(t);
    PA.tabButtons.push(t);
  });
  tablist.addEventListener("keydown", function (e) {
    var n = PA.tabs.length, i = PA.activeTab, to = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = (i - 1 + n) % n;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = n - 1;
    if (to !== -1) { e.preventDefault(); PA.selectTab(to); }
  });
  panel.appendChild(tablist);

  var body = document.createElement("div");
  body.className = "pa-panel__body";
  body.id = "pa-tabpanel";
  body.setAttribute("role", "tabpanel");
  body.setAttribute("tabindex", "0");
  body.setAttribute("aria-labelledby", "pa-tab-" + PA.tabs[PA.activeTab].key);
  PA.body = body;
  PA.renderBody();
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
  auditBtn.textContent = "Laat het een expert checken";
  foot.appendChild(resetBtn);
  foot.appendChild(auditBtn);
  panel.appendChild(foot);

  var credit = document.createElement("div");
  credit.className = "pa-panel__credit";
  credit.innerHTML =
    'Een gratis tool op <a href="https://testtoegankelijkheid.nl" target="_blank" rel="noopener">testtoegankelijkheid.nl</a>, een initiatief van <a href="' + PA.baseURL + '" target="_blank" rel="noopener">Proper Access</a>.';
  panel.appendChild(credit);

  root.appendChild(panel);

  panel.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { e.stopPropagation(); PA.destroy(); }
  });

  PA.makeDraggable(panel, head);

  window.addEventListener("scroll", PA.reposition, true);
  window.addEventListener("resize", PA.reposition, true);
  PA.wirePeek();
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

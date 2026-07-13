/* Design-checks: visueel, ontwerpgericht. */

/* Tekst contrast: meet twee kleuren en toon de contrastverhouding.
   Gebruikt de EyeDropper API waar die bestaat (Chrome, Edge). In andere
   browsers meet een klik op de pagina de tekst- of achtergrondkleur van
   het aangeklikte element. */
PA.register({
  id: "contrastpicker",
  group: "Kleur",
  label: "Tekst contrast",
  wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/",
  run: function (ctx) {
    /* Automatische markering: tekst op een betrouwbaar effen achtergrond die
       onder de eis zakt. Tekst op afbeeldingen, gradients of half-transparante
       lagen slaan we over; meet die zelf met de pipetten hieronder. */
    var els = Array.prototype.slice.call(document.querySelectorAll("body *"));
    var checked = 0, fails = 0;
    els.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var direct = "";
      for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === 3) direct += el.childNodes[i].nodeValue;
      }
      if (!direct.trim()) return;
      if (!PA.visible(el)) return;
      var cs = getComputedStyle(el);
      var fg = PA.parseColor(cs.color);
      if (!fg) return;
      var bg = PA.solidBg(el);
      if (!bg) return;
      var ratio = PA.contrastRatio(fg, bg);
      var size = parseFloat(cs.fontSize);
      var bold = parseInt(cs.fontWeight, 10) >= 700;
      var large = size >= 24 || (bold && size >= 18.66);
      var need = large ? 3 : 4.5;
      checked++;
      if (ratio < need) {
        fails++;
        ctx.mark(el, { status: "error", label: PA.t("{r}:1 (moet ≥ {need})", { r: ratio.toFixed(2), need: need }) });
      }
    });

    var hasED = typeof window.EyeDropper === "function";
    var st = { colors: [null, null], pickHandler: null, card: null };
    PA._picker = st;

    function hexToRgb(hex) {
      var m = String(hex).replace("#", "");
      if (m.length === 3) m = m[0] + m[0] + m[1] + m[1] + m[2] + m[2];
      return { r: parseInt(m.slice(0, 2), 16), g: parseInt(m.slice(2, 4), 16), b: parseInt(m.slice(4, 6), 16), a: 1 };
    }
    function toHex(c) {
      var h = function (v) { v = Math.round(v).toString(16); return v.length === 1 ? "0" + v : v; };
      return "#" + h(c.r) + h(c.g) + h(c.b);
    }

    var card = document.createElement("div");
    card.className = "pa-picker";
    card.setAttribute("role", "group");
    card.setAttribute("aria-label", PA.t("Tekst contrast"));
    st.card = card;

    var head = document.createElement("div");
    head.className = "pa-picker__head";
    head.title = PA.t("Sleep om het venster te verplaatsen");
    head.textContent = PA.t("Tekst contrast");
    card.appendChild(head);

    var body = document.createElement("div");
    body.className = "pa-picker__body";
    card.appendChild(body);

    var hint = document.createElement("p");
    hint.className = "pa-picker__hint";
    hint.textContent = hasED
      ? PA.t("Meet twee kleuren met de pipetten, bijvoorbeeld tekst en achtergrond.")
      : PA.t("Je browser heeft geen pixel-pipet. Klik na de knop op een element: pipet 1 meet de tekstkleur, pipet 2 de achtergrondkleur.");
    body.appendChild(hint);

    var swatches = [], vals = [];
    var status = document.createElement("div");
    var ratioEl, normEl;

    function update() {
      var a = st.colors[0], b = st.colors[1];
      if (!a || !b) return;
      var ratio = PA.contrastRatio(hexToRgb(a), hexToRgb(b));
      var txt = ratio.toFixed(2) + ":1";
      ratioEl.textContent = txt;
      normEl.textContent = "";
      [[4.5, PA.t("normale tekst")], [3, PA.t("grote tekst")]].forEach(function (n) {
        var ok = ratio >= n[0];
        var line = document.createElement("div");
        line.className = "pa-picker__norm";
        var mark = document.createElement("span");
        mark.className = ok ? "pa-picker__mark pa-picker__mark--ok" : "pa-picker__mark pa-picker__mark--fail";
        mark.textContent = ok ? "✓ " : "✗ ";
        line.appendChild(mark);
        line.appendChild(document.createTextNode(PA.t("{norm} (eis ≥ {need}:1): {oordeel}", { norm: n[1], need: n[0], oordeel: ok ? PA.t("voldoet") : PA.t("voldoet niet") })));
        normEl.appendChild(line);
      });
      PA.announce(PA.t("Contrast {c}. Normale tekst: {a}. Grote tekst: {b}.", { c: txt, a: ratio >= 4.5 ? PA.t("voldoet") : PA.t("voldoet niet"), b: ratio >= 3 ? PA.t("voldoet") : PA.t("voldoet niet") }));
    }

    function setColor(i, hex) {
      st.colors[i] = hex;
      swatches[i].style.background = hex;
      vals[i].textContent = hex.toUpperCase();
      status.textContent = "";
      update();
    }

    function pick(i) {
      if (hasED) {
        new window.EyeDropper().open().then(function (res) { setColor(i, res.sRGBHex); }).catch(function () {});
        return;
      }
      if (st.pickHandler) document.removeEventListener("click", st.pickHandler, true);
      status.textContent = PA.t("Klik op de pagina om kleur {i} te meten.", { i: i + 1 });
      st.pickHandler = function (e) {
        var el = e.target;
        document.removeEventListener("click", st.pickHandler, true);
        st.pickHandler = null;
        if (!el || el.nodeType !== 1 || el.closest("[data-pa-lens]")) { status.textContent = ""; return; }
        e.preventDefault();
        e.stopPropagation();
        var c = i === 0 ? PA.parseColor(getComputedStyle(el).color) : PA.effectiveBg(el);
        if (c) setColor(i, toHex(c));
      };
      document.addEventListener("click", st.pickHandler, true);
    }

    [PA.t("Pipet 1"), PA.t("Pipet 2")].forEach(function (name, i) {
      var row = document.createElement("div");
      row.className = "pa-picker__row";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pa-btn pa-picker__btn";
      btn.textContent = name;
      btn.setAttribute("aria-label", PA.t("Meet kleur {i} met de pipet", { i: i + 1 }));
      btn.addEventListener("click", function () { pick(i); });
      var sw = document.createElement("span");
      sw.className = "pa-picker__swatch";
      sw.setAttribute("aria-hidden", "true");
      var val = document.createElement("span");
      val.className = "pa-picker__val";
      val.textContent = "–";
      swatches.push(sw);
      vals.push(val);
      row.appendChild(btn);
      row.appendChild(sw);
      row.appendChild(val);
      body.appendChild(row);
    });

    status.className = "pa-picker__status";
    status.setAttribute("aria-live", "polite");
    body.appendChild(status);

    var res = document.createElement("div");
    res.className = "pa-picker__result";
    var resLabel = document.createElement("span");
    resLabel.textContent = PA.t("Contrast: ");
    ratioEl = document.createElement("strong");
    ratioEl.className = "pa-picker__ratio";
    ratioEl.textContent = "–";
    res.appendChild(resLabel);
    res.appendChild(ratioEl);
    normEl = document.createElement("div");
    res.appendChild(normEl);
    body.appendChild(res);

    head.addEventListener("pointerdown", function () {
      var r = card.getBoundingClientRect();
      card.style.top = r.top + "px";
      card.style.bottom = "auto";
    });
    PA.makeDraggable(card, head);
    PA.root.appendChild(card);

    var summary = fails === 0
      ? PA.t("{n} tekstelementen op een effen achtergrond gemeten, geen met te weinig contrast.", { n: checked })
      : PA.t("{fails} van {n} tekstelementen op een effen achtergrond hebben te weinig contrast (rood gemarkeerd).", { fails: fails, n: checked });
    summary += " " + PA.t("Meet tekst op een afbeelding of gradient zelf met de pipetten linksonder.");
    return { count: fails, summary: summary };
  },
  clear: function (ctx) {
    if (ctx) ctx.clearMarks();
    var st = PA._picker;
    if (st) {
      if (st.pickHandler) document.removeEventListener("click", st.pickHandler, true);
      if (st.card && st.card.parentNode) st.card.parentNode.removeChild(st.card);
    }
    PA._picker = null;
  }
});

PA.register({
  id: "grayscale",
  group: "Kleur",
  label: "Grijswaarden (kleurblind-check)",
  wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/",
  run: function () {
    var st = document.createElement("style");
    st.setAttribute("data-pa-gray", "1");
    st.textContent = "html{filter:grayscale(1) !important}";
    document.documentElement.appendChild(st);
    PA._grayStyle = st;
    return { count: 0, summary: PA.t("De pagina is nu grijs. Controleer of informatie (zoals links of foutmeldingen) ook zonder kleur te herkennen is.") };
  },
  clear: function () { if (PA._grayStyle) { PA._grayStyle.remove(); PA._grayStyle = null; } }
});

PA.register({
  id: "targetsize",
  group: "Interactie",
  label: "Doelgrootte (24px)",
  wcag: "/blog/sc-2-5-8-wat-betekent-doelgrootte-minimum/",
  run: function (ctx) {
    var sel = "a[href],button,input,select,textarea,[role=button],[role=link],[onclick]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    var small = 0, n = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      if (!PA.visible(el)) return;
      var t = (el.getAttribute("type") || "").toLowerCase();
      if (t === "hidden") return;
      var r = el.getBoundingClientRect();
      /* Elementen met 0px breedte of hoogte overslaan: die zijn voor niemand
         bedienbaar en dus geen doelgrootte-probleem (vaak visueel verborgen
         skip-links of tracking-pixels). */
      if (!r.width || !r.height) return;
      n++;
      var size = Math.round(r.width) + "×" + Math.round(r.height) + " px";
      if (r.width < 24 || r.height < 24) {
        small++;
        ctx.mark(el, { status: "warn", label: size });
      } else {
        ctx.mark(el, { status: "ok", label: size });
      }
    });
    return { count: small, summary: PA.t("{n} klikbare elementen, elk met hun afmeting op de pagina; {small} kleiner dan 24 bij 24 pixels (oranje). Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen.", { n: n, small: small }) };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "textspacing",
  group: "Interactie",
  label: "Tekstafstand (1.4.12)",
  wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/",
  run: function () {
    var st = document.createElement("style");
    st.setAttribute("data-pa-spacing", "1");
    st.textContent = "*{line-height:1.5 !important;letter-spacing:.12em !important;word-spacing:.16em !important}" +
      "p{margin-bottom:2em !important}";
    document.documentElement.appendChild(st);
    PA._spacingStyle = st;
    return { count: 0, summary: PA.t("De WCAG-tekstafstanden zijn toegepast. Kijk of er tekst wegvalt, overlapt of wordt afgekapt. Klik nogmaals om terug te zetten.") };
  },
  clear: function () { if (PA._spacingStyle) { PA._spacingStyle.remove(); PA._spacingStyle = null; } }
});

PA.register({
  id: "imagesoff",
  group: "Structuur",
  label: "Afbeeldingen uit",
  wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/",
  run: function () {
    var st = document.createElement("style");
    st.setAttribute("data-pa-imgoff", "1");
    st.textContent = "img{filter:grayscale(1) opacity(.15) !important;outline:2px dashed #A30D4B !important}" +
      "img[alt]:not([alt='']){}";
    document.documentElement.appendChild(st);
    PA._imgoffStyle = st;
    return { count: 0, summary: PA.t("Afbeeldingen zijn vervaagd. Kijk of de pagina zonder beeld nog te begrijpen is en of de alt-teksten kloppen.") };
  },
  clear: function () { if (PA._imgoffStyle) { PA._imgoffStyle.remove(); PA._imgoffStyle = null; } }
});

PA.register({
  id: "ruler",
  group: "Hulpmiddelen",
  label: "Liniaal en hulplijnen",
  run: function () {
    var h = document.createElement("div");
    var v = document.createElement("div");
    var common = "position:fixed;z-index:2147483645;background:#A30D4B;pointer-events:none";
    h.style.cssText = common + ";left:0;right:0;height:1px";
    v.style.cssText = common + ";top:0;bottom:0;width:1px";
    var tag = document.createElement("div");
    tag.style.cssText = "position:fixed;z-index:2147483645;background:#1F2937;color:#fff;" +
      "font:600 11px/1.3 system-ui,-apple-system,sans-serif;padding:2px 6px;border-radius:3px;" +
      "pointer-events:none;white-space:nowrap;transform:translate(10px,10px)";
    PA.root.appendChild(h);
    PA.root.appendChild(v);
    PA.root.appendChild(tag);
    PA._rulerH = h; PA._rulerV = v; PA._rulerTag = tag;
    PA._rulerMove = function (e) {
      h.style.top = e.clientY + "px";
      v.style.left = e.clientX + "px";
      var nearRight = e.clientX > window.innerWidth - 90;
      var nearBottom = e.clientY > window.innerHeight - 30;
      tag.style.left = e.clientX + "px";
      tag.style.top = e.clientY + "px";
      tag.style.transform = "translate(" + (nearRight ? "-100%" : "10px") + "," + (nearBottom ? "-100%" : "10px") + ")";
      tag.textContent = "x " + Math.round(e.clientX) + ", y " + Math.round(e.clientY) + " px";
    };
    document.addEventListener("mousemove", PA._rulerMove, true);
    return { count: 0, summary: PA.t("Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden kunt nalopen.") };
  },
  clear: function () {
    if (PA._rulerMove) document.removeEventListener("mousemove", PA._rulerMove, true);
    if (PA._rulerH) PA._rulerH.remove();
    if (PA._rulerV) PA._rulerV.remove();
    if (PA._rulerTag) PA._rulerTag.remove();
    PA._rulerMove = PA._rulerH = PA._rulerV = PA._rulerTag = null;
  }
});

PA.register({
  id: "contrastui",
  group: "Kleur",
  label: "Contrast van randen en focus",
  wcag: "/blog/sc-1-4-11-wat-betekent-contrast-van-niet-tekstuele-content/",
  run: function (ctx) {
    function r2(x) { return Math.round(x * 100) / 100; }
    /* Deel 1: randen van invoervelden. Een veld moet visueel te vinden zijn:
       de rand (of achtergrond) heeft 3:1 nodig tegen de omliggende kleur. */
    var fields = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var lowBorder = 0, nField = 0;
    fields.forEach(function (f) {
      if (f.closest("[data-pa-lens]") || !PA.visible(f)) return;
      var t = (f.getAttribute("type") || "").toLowerCase();
      if (t === "hidden") return;
      nField++;
      var cs = getComputedStyle(f);
      var bg = PA.solidBg(f.parentElement || f);
      if (parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== "none") {
        var bc = PA.parseColor(cs.borderTopColor);
        if (bc && bc.a === 1 && bg) {
          var ratio = PA.contrastRatio(bc, bg);
          if (ratio < 3) { lowBorder++; ctx.mark(f, { status: "warn", label: PA.t("rand {r}:1", { r: r2(ratio) }) }); }
          else ctx.mark(f, { status: "ok", label: PA.t("rand {r}:1", { r: r2(ratio) }) });
        } else {
          ctx.mark(f, { status: "info", label: PA.t("rand niet meetbaar (transparant of achtergrondafbeelding)") });
        }
      } else {
        ctx.mark(f, { status: "info", label: PA.t("geen rand: check of het veld anders zichtbaar is") });
      }
    });
    /* Deel 2: focusstijl. De lens zet heel kort focus op elk interactief
       element en meet de echte outline. Geen outline en geen box-shadow is
       een waarschuwing; een outline met te weinig contrast ook. */
    var inter = Array.prototype.slice.call(
      document.querySelectorAll("a[href],button,input,select,textarea")
    ).filter(function (el) {
      return !el.closest("[data-pa-lens]") && PA.visible(el);
    }).slice(0, 120);
    var prevFocus = document.activeElement;
    var noRing = 0, lowRing = 0, checked = 0;
    inter.forEach(function (el) {
      try { el.focus({ preventScroll: true }); } catch (e) { return; }
      if (document.activeElement !== el) return;
      checked++;
      var cs = getComputedStyle(el);
      var w = parseFloat(cs.outlineWidth);
      if (cs.outlineStyle === "none" || !w) {
        var hasShadow = cs.boxShadow && cs.boxShadow !== "none";
        if (!hasShadow) { noRing++; ctx.mark(el, { status: "warn", label: PA.t("geen zichtbare focusstijl") }); }
      } else {
        var oc = PA.parseColor(cs.outlineColor);
        var bg2 = PA.solidBg(el.parentElement || el);
        if (oc && oc.a === 1 && bg2) {
          var fr = PA.contrastRatio(oc, bg2);
          if (fr < 3) { lowRing++; ctx.mark(el, { status: "warn", label: PA.t("focusring {r}:1", { r: r2(fr) }) }); }
        }
      }
    });
    try {
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
      else if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    } catch (e2) {}
    return {
      count: lowBorder + noRing + lowRing,
      summary: PA.t("{f} invoervelden bekeken: {lb} met een rand onder 3:1. Focusstijl gemeten op {c} elementen: {nr} zonder zichtbare focusstijl, {lr} met een focusring onder 3:1. De lens zet daarvoor kort focus op elk element.", { f: nField, lb: lowBorder, c: checked, nr: noRing, lr: lowRing })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "linkcolor",
  group: "Kleur",
  label: "Links alleen in kleur",
  wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/",
  run: function (ctx) {
    /* Links in lopende tekst die niet onderstreept zijn en alleen door kleur
       verschillen van de tekst eromheen. Zonder onderstreping vereist WCAG
       3:1 tussen linkkleur en tekstkleur, plus een extra cue bij hover/focus. */
    function r2(x) { return Math.round(x * 100) / 100; }
    function ownText(el) {
      var s = "";
      for (var n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3) s += n.nodeValue;
      }
      return s.replace(/\s+/g, " ").trim();
    }
    var links = Array.prototype.slice.call(document.querySelectorAll("a[href]"));
    var colorOnly = 0, low = 0, n = 0;
    links.forEach(function (a) {
      if (a.closest("[data-pa-lens]") || !PA.visible(a)) return;
      var parent = a.parentElement;
      if (!parent) return;
      /* Alleen links ín tekst: de ouder heeft zelf minstens 10 tekens tekst. */
      if (ownText(parent).length < 10) return;
      n++;
      var la = getComputedStyle(a), lp = getComputedStyle(parent);
      var underlined = (la.textDecorationLine || la.textDecoration || "").indexOf("underline") !== -1;
      var borderCue = parseFloat(la.borderBottomWidth) > 0 && la.borderBottomStyle !== "none";
      var weightCue = parseInt(la.fontWeight, 10) >= parseInt(lp.fontWeight, 10) + 200;
      var bgCue = la.backgroundColor !== lp.backgroundColor && PA.parseColor(la.backgroundColor) && PA.parseColor(la.backgroundColor).a > 0;
      if (underlined || borderCue || weightCue || bgCue) return;
      var ca = PA.parseColor(la.color), cp = PA.parseColor(lp.color);
      if (!ca || !cp) return;
      if (la.color === lp.color) return;
      colorOnly++;
      var ratio = PA.contrastRatio(ca, cp);
      if (ratio < 3) {
        low++;
        ctx.mark(a, { status: "warn", label: PA.t("alleen kleur, {r}:1 t.o.v. tekst", { r: r2(ratio) }) });
      } else {
        ctx.mark(a, { status: "info", label: PA.t("alleen kleur ({r}:1): check hover/focus-cue", { r: r2(ratio) }) });
      }
    });
    return {
      count: colorOnly,
      summary: PA.t("{n} links in lopende tekst bekeken: {co} zijn alleen door kleur te onderscheiden (geen onderstreping), waarvan {low} met minder dan 3:1 verschil met de tekstkleur. Onderstrepen is de veiligste oplossing.", { n: n, co: colorOnly, low: low })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "motion",
  group: "Beweging",
  label: "Automatische beweging",
  wcag: "/blog/sc-2-2-2-wat-betekent-pauzeren-stoppen-verbergen/",
  run: function (ctx) {
    /* Beweging die vanzelf start en langer dan 5 seconden duurt moet te
       pauzeren zijn. Deel 1: CSS-animaties, autoplay-video's en marquees.
       Deel 2: 5 seconden meekijken met een MutationObserver voor
       scriptgestuurde beweging (carrousels, tickers). */
    var found = 0;
    var all = Array.prototype.slice.call(document.querySelectorAll("body *"));
    all.forEach(function (el) {
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) return;
      var cs = getComputedStyle(el);
      if (!cs.animationName || cs.animationName === "none") return;
      var durs = cs.animationDuration.split(",");
      var counts = (cs.animationIterationCount || "1").split(",");
      for (var i = 0; i < durs.length; i++) {
        var d = parseFloat(durs[i]) || 0;
        var c = (counts[i % counts.length] || "1").trim();
        var total = c === "infinite" ? Infinity : d * (parseFloat(c) || 1);
        if (total > 5) {
          found++;
          ctx.mark(el, { status: "warn", label: c === "infinite" ? PA.t("animatie: oneindig ({d}s per cyclus)", { d: d }) : PA.t("animatie: {s}s", { s: Math.round(total) }) });
          break;
        }
      }
    });
    var videos = Array.prototype.slice.call(document.querySelectorAll("video[autoplay],marquee"));
    videos.forEach(function (v) {
      if (v.closest("[data-pa-lens]") || !PA.visible(v)) return;
      found++;
      if (v.tagName.toLowerCase() === "marquee") ctx.mark(v, { status: "error", label: PA.t("marquee: beweegt altijd") });
      else ctx.mark(v, { status: "warn", label: v.hasAttribute("loop") ? "video: autoplay + loop" : "video: autoplay" + (v.controls ? PA.t(" (met bediening)") : PA.t(" zonder bediening")) });
    });
    /* Ingesloten kaders: van hetzelfde domein scannen we van binnen; kaders
       van andere domeinen zijn afgeschermd door de browser en krijgen een
       eerlijke markering, want daar kan flink wat bewegen (tickers, ads).
       Kaders laden vaak pas als je scrolt (lazy loading), dus zolang de check
       aanstaat kijken we elke paar seconden of er nieuwe zijn bijgekomen. */
    var crossFrames = 0;
    PA._motionFramesSeen = [];
    function scanFrames(announceNew) {
      var newMarks = 0;
      Array.prototype.forEach.call(document.querySelectorAll("iframe"), function (fr) {
        if (PA._motionFramesSeen.indexOf(fr) !== -1) return;
        if (fr.closest("[data-pa-lens]") || !PA.visible(fr)) return;
        var fRect = fr.getBoundingClientRect();
        var doc = null, win = null;
        try { doc = fr.contentDocument; win = fr.contentWindow; } catch (e) {}
        if (doc && doc.body && win) {
          var inner = 0;
          var els = doc.body.querySelectorAll("*");
          for (var i = 0; i < els.length; i++) {
            var cs2 = win.getComputedStyle(els[i]);
            if (!cs2.animationName || cs2.animationName === "none") continue;
            var d2 = parseFloat(cs2.animationDuration) || 0;
            var c2 = (cs2.animationIterationCount || "1").split(",")[0].trim();
            if (c2 === "infinite" || d2 * (parseFloat(c2) || 1) > 5) inner++;
          }
          inner += doc.querySelectorAll("video[autoplay],marquee").length;
          if (inner) {
            found++;
            newMarks++;
            PA._motionFramesSeen.push(fr);
            ctx.mark(fr, { status: "warn", label: PA.t("beweging in ingesloten kader ({n} animaties)", { n: inner }) });
          }
        } else if (fRect.width >= 80 && fRect.height >= 80) {
          crossFrames++;
          newMarks++;
          PA._motionFramesSeen.push(fr);
          ctx.mark(fr, { status: "info", label: PA.t("kader van ander domein: beweging hierin kan de lens niet zien, kijk zelf even") });
        }
      });
      if (announceNew && newMarks) {
        PA.announce(PA.t("Automatische beweging: {n} later geladen ingesloten kader(s) gemarkeerd.", { n: newMarks }));
      }
    }
    scanFrames(false);
    PA._motionFrameTimer = setInterval(function () { scanFrames(true); }, 2500);
    /* Scriptgestuurde beweging: 5 seconden tellen welke elementen blijven
       veranderen; veelbewegers krijgen daarna alsnog een markering. */
    var tally = new Map();
    PA._motionObs = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        var t = m.target && m.target.nodeType === 1 ? m.target : m.target && m.target.parentElement;
        if (!t || t.closest("[data-pa-lens]")) return;
        tally.set(t, (tally.get(t) || 0) + 1);
      });
    });
    PA._motionObs.observe(document.body, { attributes: true, childList: true, subtree: true, attributeFilter: ["style", "class", "src"] });
    PA._motionTimer = setTimeout(function () {
      if (PA._motionObs) { PA._motionObs.disconnect(); PA._motionObs = null; }
      var movers = [];
      tally.forEach(function (nMut, el) { if (nMut >= 5 && PA.visible(el)) movers.push([nMut, el]); });
      movers.sort(function (a, b) { return b[0] - a[0]; });
      movers.slice(0, 5).forEach(function (pair) {
        ctx.mark(pair[1], { status: "warn", label: PA.t("beweegt via script ({n} wijzigingen in 5s)", { n: pair[0] }) });
      });
      if (movers.length) PA.announce(PA.t("Automatische beweging: {n} scriptgestuurde bewegers gemarkeerd na 5 seconden meekijken.", { n: Math.min(movers.length, 5) }));
    }, 5000);
    return {
      count: found,
      summary: PA.t("{n} elementen met doorlopende of lange beweging (CSS-animaties, autoplay-video's, marquee, kaders van dit domein).", { n: found }) +
        (crossFrames ? " " + PA.t("Daarnaast {n} ingesloten kaders van andere domeinen waar de lens niet in kan kijken: controleer die zelf op beweging.", { n: crossFrames }) : "") +
        " " + PA.t("De lens kijkt 5 seconden mee naar scriptgestuurde beweging en blijft nieuwe kaders opmerken zolang de check aanstaat, ook als ze pas na scrollen laden. Beweging langer dan 5 seconden moet te pauzeren, stoppen of verbergen zijn.")
    };
  },
  clear: function (ctx) {
    if (PA._motionObs) { PA._motionObs.disconnect(); PA._motionObs = null; }
    if (PA._motionTimer) { clearTimeout(PA._motionTimer); PA._motionTimer = null; }
    if (PA._motionFrameTimer) { clearInterval(PA._motionFrameTimer); PA._motionFrameTimer = null; }
    PA._motionFramesSeen = null;
    ctx.clearMarks();
  }
});

PA.register({
  id: "darkmode",
  group: "Kleur",
  label: "Donkere modus",
  wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/",
  run: function () {
    /* Een bookmarklet kan de browservoorkeur niet omzetten. In plaats daarvan
       zoeken we de dark-mode-stijlen van de site zelf op (media-regels met
       prefers-color-scheme: dark) en passen die geforceerd toe. Stylesheets
       van andere domeinen zijn niet leesbaar (CORS) en tellen we apart. */
    var css = [], blocked = 0, darkRules = 0;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      var rules;
      try { rules = sheet.cssRules; } catch (e) { blocked++; continue; }
      if (!rules) continue;
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        var cond = rule.media ? rule.media.mediaText : (rule.conditionText || "");
        if (rule.type === 4 && /prefers-color-scheme:\s*dark/i.test(cond)) {
          for (var k = 0; k < rule.cssRules.length; k++) {
            css.push(rule.cssRules[k].cssText);
            darkRules++;
          }
        }
      }
    }
    var note = blocked ? " " + PA.t("Let op: {n} stylesheets van andere domeinen kon de lens niet lezen.", { n: blocked }) : "";
    if (!darkRules) {
      return {
        count: 0,
        summary: PA.t("Geen dark-mode-stijlen gevonden op deze pagina (geen prefers-color-scheme: dark in de leesbare css).") + note +
          " " + PA.t("Heeft de site wel een donkere modus, test die dan via de systeeminstelling of de DevTools-emulatie.")
      };
    }
    var st = document.createElement("style");
    st.setAttribute("data-pa-dark", "1");
    st.textContent = css.join("\n");
    document.documentElement.appendChild(st);
    PA._darkStyle = st;
    PA._darkScheme = document.documentElement.style.colorScheme;
    document.documentElement.style.colorScheme = "dark";
    return {
      count: darkRules,
      summary: PA.t("De donkere modus van de site is geforceerd toegepast ({n} dark-mode-regels).", { n: darkRules }) + note +
        " " + PA.t("Controleer contrast en leesbaarheid, bijvoorbeeld met de check Tekst contrast. Klik nogmaals om terug te zetten.")
    };
  },
  clear: function () {
    if (PA._darkStyle) { PA._darkStyle.remove(); PA._darkStyle = null; }
    document.documentElement.style.colorScheme = PA._darkScheme || "";
  }
});

PA.register({
  id: "reflow",
  group: "Pagina aanpassen",
  label: "Reflow (320 px)",
  wcag: "/blog/sc-1-4-10-wat-betekent-reflow/",
  run: function (ctx) {
    /* Horizontale scroll op paginaniveau opsporen, en de boosdoeners
       markeren: elementen die buiten de viewport steken. Daarnaast opent de
       lens een venster van 320 css-pixels breed met dezelfde pagina. */
    var se = document.scrollingElement || document.documentElement;
    var hscroll = se.scrollWidth > window.innerWidth + 1;
    var wide = 0;
    if (hscroll) {
      var all = Array.prototype.slice.call(document.querySelectorAll("body *"));
      for (var i = 0; i < all.length && wide < 5; i++) {
        var el = all[i];
        if (el.closest("[data-pa-lens]") || !PA.visible(el)) continue;
        var r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 2 && r.width < se.scrollWidth) {
          wide++;
          ctx.mark(el, { status: "warn", label: PA.t("steekt {n}px buiten beeld", { n: Math.round(r.right - window.innerWidth) }) });
        }
      }
    }
    var msg = hscroll
      ? PA.t("Deze pagina heeft op de huidige breedte ({w}px) al horizontale scroll; de breedste boosdoeners zijn gemarkeerd.", { w: window.innerWidth }) + " "
      : PA.t("Geen horizontale scroll op de huidige breedte ({w}px).", { w: window.innerWidth }) + " ";
    var win = null;
    try { win = window.open(location.href, "pa-reflow", "width=320,height=640,left=40,top=40"); } catch (e) {}
    PA._reflowWin = win;
    msg += win
      ? PA.t("Er is een venster van 320px breed geopend met deze pagina: controleer daar of alle inhoud zonder horizontale scroll en zonder verlies te gebruiken is (WCAG 1.4.10).")
      : PA.t("Het 320px-venster werd door de browser geblokkeerd; sta pop-ups toe en zet de check opnieuw aan.");
    return { count: wide, summary: msg };
  },
  clear: function (ctx) {
    if (PA._reflowWin && !PA._reflowWin.closed) { try { PA._reflowWin.close(); } catch (e) {} }
    PA._reflowWin = null;
    ctx.clearMarks();
  }
});

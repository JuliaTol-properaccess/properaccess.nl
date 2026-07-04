/* Design-checks: visueel, ontwerpgericht. */

PA.register({
  id: "contrast",
  group: "Kleur",
  label: "Tekstcontrast",
  wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/",
  run: function (ctx) {
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
      var bg = PA.effectiveBg(el);
      var ratio = PA.contrastRatio(fg, bg);
      var size = parseFloat(cs.fontSize);
      var bold = parseInt(cs.fontWeight, 10) >= 700;
      var large = size >= 24 || (bold && size >= 18.66);
      var need = large ? 3 : 4.5;
      checked++;
      if (ratio < need) {
        fails++;
        ctx.mark(el, { status: "error", label: ratio.toFixed(2) + ":1 (moet ≥ " + need + ")" });
      }
    });
    return { count: fails, summary: checked + " tekstelementen gemeten, " + fails + " met te weinig contrast." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
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
    return { count: 0, summary: "De pagina is nu grijs. Controleer of informatie (zoals links of foutmeldingen) ook zonder kleur te herkennen is." };
  },
  clear: function () { if (PA._grayStyle) { PA._grayStyle.remove(); PA._grayStyle = null; } }
});

PA.register({
  id: "targetsize",
  group: "Interactie",
  label: "Doelgrootte (24px)",
  run: function (ctx) {
    var sel = "a[href],button,input,select,textarea,[role=button],[role=link],[onclick]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    var small = 0, n = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      if (!PA.visible(el)) return;
      var t = (el.getAttribute("type") || "").toLowerCase();
      if (t === "hidden") return;
      n++;
      var r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) {
        small++;
        ctx.mark(el, { status: "warn", label: Math.round(r.width) + "×" + Math.round(r.height) + " (< 24)" });
      }
    });
    return { count: small, summary: n + " klikbare elementen, " + small + " kleiner dan 24 bij 24 pixels." };
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
    return { count: 0, summary: "De WCAG-tekstafstanden zijn toegepast. Kijk of er tekst wegvalt, overlapt of wordt afgekapt. Klik nogmaals om terug te zetten." };
  },
  clear: function () { if (PA._spacingStyle) { PA._spacingStyle.remove(); PA._spacingStyle = null; } }
});

PA.register({
  id: "outline",
  group: "Structuur",
  label: "Blokken en tagnamen tonen",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function () {
    var st = document.createElement("style");
    st.setAttribute("data-pa-outline", "1");
    st.textContent =
      "body * {outline:1px solid rgba(163,13,75,.35) !important}" +
      "header,nav,main,aside,footer,section,article,form{outline:2px solid #004050 !important;position:relative}";
    document.documentElement.appendChild(st);
    PA._outlineStyle = st;
    var tags = Array.prototype.slice.call(document.querySelectorAll("header,nav,main,aside,footer,section,article,form"));
    tags.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      PA.addOverlay("outline", el, { status: "info", label: el.tagName.toLowerCase() });
    });
    return { count: tags.length, summary: "Alle blokken krijgen een rand; belangrijke structuurelementen tonen hun tagnaam." };
  },
  clear: function (ctx) {
    if (PA._outlineStyle) { PA._outlineStyle.remove(); PA._outlineStyle = null; }
    ctx.clearMarks();
  }
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
    return { count: 0, summary: "Afbeeldingen zijn vervaagd. Kijk of de pagina zonder beeld nog te begrijpen is en of de alt-teksten kloppen." };
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
    PA.root.appendChild(h);
    PA.root.appendChild(v);
    PA._rulerH = h; PA._rulerV = v;
    PA._rulerMove = function (e) {
      h.style.top = e.clientY + "px";
      v.style.left = e.clientX + "px";
    };
    document.addEventListener("mousemove", PA._rulerMove, true);
    return { count: 0, summary: "Er volgen nu een horizontale en verticale hulplijn je muis, zodat je uitlijning en afstanden kunt nalopen." };
  },
  clear: function () {
    if (PA._rulerMove) document.removeEventListener("mousemove", PA._rulerMove, true);
    if (PA._rulerH) PA._rulerH.remove();
    if (PA._rulerV) PA._rulerV.remove();
    PA._rulerMove = PA._rulerH = PA._rulerV = null;
  }
});

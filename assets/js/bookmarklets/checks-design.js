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
        ctx.mark(el, { status: "error", label: ratio.toFixed(2) + ":1 (moet ≥ " + need + ")" });
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
    card.setAttribute("aria-label", "Tekst contrast");
    st.card = card;

    var head = document.createElement("div");
    head.className = "pa-picker__head";
    head.title = "Sleep om het venster te verplaatsen";
    head.textContent = "Tekst contrast";
    card.appendChild(head);

    var body = document.createElement("div");
    body.className = "pa-picker__body";
    card.appendChild(body);

    var hint = document.createElement("p");
    hint.className = "pa-picker__hint";
    hint.textContent = hasED
      ? "Meet twee kleuren met de pipetten, bijvoorbeeld tekst en achtergrond."
      : "Je browser heeft geen pixel-pipet. Klik na de knop op een element: pipet 1 meet de tekstkleur, pipet 2 de achtergrondkleur.";
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
      [[4.5, "normale tekst"], [3, "grote tekst"]].forEach(function (n) {
        var ok = ratio >= n[0];
        var line = document.createElement("div");
        line.className = "pa-picker__norm";
        var mark = document.createElement("span");
        mark.className = ok ? "pa-picker__mark pa-picker__mark--ok" : "pa-picker__mark pa-picker__mark--fail";
        mark.textContent = ok ? "✓ " : "✗ ";
        line.appendChild(mark);
        line.appendChild(document.createTextNode(n[1] + " (eis ≥ " + n[0] + ":1): " + (ok ? "voldoet" : "voldoet niet")));
        normEl.appendChild(line);
      });
      PA.announce("Contrast " + txt + ". Normale tekst: " + (ratio >= 4.5 ? "voldoet" : "voldoet niet") + ". Grote tekst: " + (ratio >= 3 ? "voldoet" : "voldoet niet") + ".");
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
      status.textContent = "Klik op de pagina om kleur " + (i + 1) + " te meten.";
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

    ["Pipet 1", "Pipet 2"].forEach(function (name, i) {
      var row = document.createElement("div");
      row.className = "pa-picker__row";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pa-btn pa-picker__btn";
      btn.textContent = name;
      btn.setAttribute("aria-label", "Meet kleur " + (i + 1) + " met de pipet");
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
    resLabel.textContent = "Contrast: ";
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
      ? checked + " tekstelementen op een effen achtergrond gemeten, geen met te weinig contrast."
      : fails + " van " + checked + " tekstelementen op een effen achtergrond hebben te weinig contrast (rood gemarkeerd).";
    summary += " Meet tekst op een afbeelding of gradient zelf met de pipetten linksonder.";
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
    return { count: 0, summary: "De pagina is nu grijs. Controleer of informatie (zoals links of foutmeldingen) ook zonder kleur te herkennen is." };
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
      n++;
      var r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) {
        small++;
        ctx.mark(el, { status: "warn", label: Math.round(r.width) + "×" + Math.round(r.height) + " px" });
      }
    });
    return { count: small, summary: n + " klikbare elementen bekeken, " + small + " kleiner dan 24 bij 24 pixels. Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen." };
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
    return { count: 0, summary: "Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden kunt nalopen." };
  },
  clear: function () {
    if (PA._rulerMove) document.removeEventListener("mousemove", PA._rulerMove, true);
    if (PA._rulerH) PA._rulerH.remove();
    if (PA._rulerV) PA._rulerV.remove();
    if (PA._rulerTag) PA._rulerTag.remove();
    PA._rulerMove = PA._rulerH = PA._rulerV = PA._rulerTag = null;
  }
});

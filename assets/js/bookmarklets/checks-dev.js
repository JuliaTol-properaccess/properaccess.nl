/* Developer-checks: technisch, met attribuutnamen. */

PA.register({
  id: "aria",
  group: "Semantiek",
  label: "ARIA-rollen en -attributen",
  wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/",
  run: function (ctx) {
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[role],[aria-label],[aria-labelledby],[aria-describedby],[aria-expanded],[aria-hidden],[aria-live],[aria-controls]"));
    var broken = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var bits = [];
      if (el.getAttribute("role")) bits.push("role=" + el.getAttribute("role"));
      ["aria-label", "aria-labelledby", "aria-describedby", "aria-controls", "aria-expanded", "aria-live"].forEach(function (a) {
        if (el.hasAttribute(a)) bits.push(a.replace("aria-", "") + "=" + el.getAttribute(a));
      });
      var status = "info";
      ["aria-labelledby", "aria-describedby", "aria-controls"].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v) v.split(/\s+/).forEach(function (id) {
          if (id && !document.getElementById(id)) { status = "error"; bits.push("↯ " + a + " → #" + id + " bestaat niet"); broken++; }
        });
      });
      ctx.mark(el, { status: status, label: bits.join(" · ") });
    });
    return { count: nodes.length, summary: nodes.length + " elementen met ARIA. " + broken + " gebroken referentie(s) naar niet-bestaande id's." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "accname",
  group: "Semantiek",
  label: "Toon toegankelijke naam",
  wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/",
  run: function (ctx) {
    var sel = "a[href],button,input,select,textarea,summary,[role=button],[role=link],[role=checkbox],[role=radio],[role=tab],[role=menuitem],[role=combobox],[role=textbox],[role=switch],[role=slider],[role=searchbox]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
      if (el.closest("[data-pa-lens]")) return false;
      if ((el.getAttribute("type") || "").toLowerCase() === "hidden") return false;
      return PA.visible(el);
    });
    var missing = 0;
    nodes.forEach(function (el) {
      var name = PA.accName(el).replace(/\s+/g, " ").trim();
      if (!name) {
        missing++;
        ctx.mark(el, { status: "error", label: "geen toegankelijke naam" });
      } else {
        if (name.length > 50) name = name.slice(0, 47) + "…";
        ctx.mark(el, { status: "ok", label: "“" + name + "”" });
      }
    });
    return { count: nodes.length, summary: nodes.length + " interactieve elementen. " + missing + " zonder toegankelijke naam." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "tabindex",
  group: "Toetsenbord",
  label: "Tabvolgorde",
  wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/",
  run: function (ctx) {
    var sel = "a[href],button,input,select,textarea,summary,iframe,audio[controls],video[controls],[tabindex],[contenteditable=true]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
      if (el.closest("[data-pa-lens]")) return false;
      if (el.disabled) return false;
      if ((el.getAttribute("type") || "").toLowerCase() === "hidden") return false;
      var ti = el.getAttribute("tabindex");
      if (ti !== null && parseInt(ti, 10) < 0) return false;
      return PA.visible(el);
    });
    /* Echte tabvolgorde: positieve tabindex eerst (oplopend), daarna de rest
       in de volgorde waarin ze op de pagina staan. */
    var pos = [], rest = [];
    nodes.forEach(function (el) {
      var v = parseInt(el.getAttribute("tabindex"), 10);
      if (v > 0) pos.push({ el: el, v: v }); else rest.push(el);
    });
    pos.sort(function (a, b) { return a.v - b.v; });
    var ordered = pos.map(function (p) { return p.el; }).concat(rest);
    var n = 0;
    ordered.forEach(function (el) {
      n++;
      var v = parseInt(el.getAttribute("tabindex"), 10);
      if (v > 0) ctx.mark(el, { status: "error", label: n + " · tabindex=" + v + " (breekt volgorde)" });
      else ctx.mark(el, { status: "info", label: String(n) });
    });
    var msg = ordered.length + " focusbare elementen, genummerd in tabvolgorde. ";
    msg += pos.length ? pos.length + " met een positieve tabindex: die springen vóór de rest en verstoren de logische volgorde." : "Geen positieve tabindex-waarden gevonden.";
    return { count: ordered.length, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "textresize",
  group: "Interactie",
  label: "Tekst vergroten (200%)",
  wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/",
  run: function () {
    /* Twee passes: eerst alle huidige groottes meten, dan pas verdubbelen.
       Anders telt de vergroting van een ouder door in de meting van een kind. */
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
    list.forEach(function (r) {
      r.el.style.setProperty("font-size", (r.size * 2) + "px", "important");
    });
    PA._resized = list;
    return { count: 0, summary: "Alle tekst staat nu op 200%. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is. Klik nogmaals om terug te zetten." };
  },
  clear: function () {
    (PA._resized || []).forEach(function (r) {
      if (r.prev) r.el.style.setProperty("font-size", r.prev, r.prio);
      else r.el.style.removeProperty("font-size");
    });
    PA._resized = [];
  }
});

PA.register({
  id: "forcefocus",
  group: "Toetsenbord",
  label: "Focus zichtbaar maken",
  wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/",
  run: function () {
    var st = document.createElement("style");
    st.setAttribute("data-pa-forcefocus", "1");
    st.textContent = "*:focus{outline:3px solid #A30D4B !important;outline-offset:2px !important}";
    document.head.appendChild(st);
    PA._focusStyle = st;
    return { count: 0, summary: "Elke focus krijgt nu een duidelijke magenta rand. Tab door de pagina om te zien waar de focus heen springt." };
  },
  clear: function () { if (PA._focusStyle) { PA._focusStyle.remove(); PA._focusStyle = null; } }
});

PA.register({
  id: "iframes",
  group: "Structuur",
  label: "Iframes (titel)",
  wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/",
  run: function (ctx) {
    var frames = Array.prototype.slice.call(document.querySelectorAll("iframe"));
    var noTitle = 0;
    frames.forEach(function (f) {
      var title = f.getAttribute("title") || f.getAttribute("aria-label");
      if (!title || !title.trim()) { noTitle++; ctx.mark(f, { status: "error", label: "iframe zonder titel" }); }
      else ctx.mark(f, { status: "ok", label: "title: " + title });
    });
    return { count: frames.length, summary: frames.length + " iframes, " + noTitle + " zonder titel." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "elementinfo",
  group: "Inspectie",
  label: "Element-info bij hover",
  run: function () {
    var tip = document.createElement("div");
    tip.style.cssText = "position:fixed;z-index:2147483647;max-width:360px;font:12px/1.4 system-ui,sans-serif;" +
      "background:#1F2937;color:#fff;padding:6px 8px;border-radius:6px;pointer-events:none;display:none;box-shadow:0 6px 20px rgba(0,0,0,.3)";
    PA.root.appendChild(tip);
    PA._infoTip = tip;
    PA._infoMove = function (e) {
      var el = e.target;
      if (!el || el.nodeType !== 1 || el.closest("[data-pa-lens]")) { tip.style.display = "none"; return; }
      var bits = [el.tagName.toLowerCase()];
      if (el.id) bits.push("#" + el.id);
      if (el.className && typeof el.className === "string") bits.push("." + el.className.trim().split(/\s+/).join("."));
      var extra = [];
      if (el.getAttribute("role")) extra.push("role=" + el.getAttribute("role"));
      var an = PA.accName(el);
      if (an && an.length < 60) extra.push("naam: “" + an + "”");
      var r = el.getBoundingClientRect();
      extra.push(Math.round(r.width) + "×" + Math.round(r.height));
      tip.innerHTML = "<strong>" + PA.esc(bits.join("")) + "</strong>" + (extra.length ? "<br>" + PA.esc(extra.join(" · ")) : "");
      tip.style.display = "block";
      var x = e.clientX + 14, y = e.clientY + 14;
      if (x + 360 > innerWidth) x = e.clientX - 360;
      tip.style.left = x + "px";
      tip.style.top = Math.min(y, innerHeight - 60) + "px";
    };
    document.addEventListener("mousemove", PA._infoMove, true);
    return { count: 0, summary: "Beweeg met de muis over de pagina. Je ziet tag, id, class, rol, naam en afmeting van elk element." };
  },
  clear: function () {
    if (PA._infoMove) document.removeEventListener("mousemove", PA._infoMove, true);
    if (PA._infoTip) PA._infoTip.remove();
    PA._infoMove = PA._infoTip = null;
  }
});

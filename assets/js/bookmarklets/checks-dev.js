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
  id: "landmarks",
  group: "Semantiek",
  label: "Landmarks",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function (ctx) {
    var map = { header: "banner", nav: "navigation", main: "main", aside: "complementary", footer: "contentinfo", form: "form", section: "region" };
    var sel = "header,nav,main,aside,footer,form,section,[role=banner],[role=navigation],[role=main],[role=complementary],[role=contentinfo],[role=search],[role=region],[role=form]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    var mains = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var role = el.getAttribute("role") || map[el.tagName.toLowerCase()] || "";
      if (role === "main") mains++;
      var name = PA.accName(el);
      ctx.mark(el, { status: role === "main" ? "ok" : "info", label: role + (name && name.length < 40 ? " · " + name : "") });
    });
    var msg = nodes.length + " landmarks. ";
    msg += mains === 1 ? "Precies 1 main. " : mains + " keer main (moet er 1 zijn). ";
    return { count: nodes.length, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "formdetail",
  group: "Formulieren",
  label: "Labelkoppeling (for/id)",
  wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/",
  run: function (ctx) {
    var labels = Array.prototype.slice.call(document.querySelectorAll("label"));
    var noFor = 0, noMatch = 0;
    labels.forEach(function (l) {
      var f = l.getAttribute("for");
      if (!f) {
        if (l.querySelector("input,select,textarea")) { ctx.mark(l, { status: "ok", label: "label (wrapt veld)" }); }
        else { noFor++; ctx.mark(l, { status: "warn", label: "label zonder for" }); }
      } else if (!document.getElementById(f)) {
        noMatch++; ctx.mark(l, { status: "error", label: 'for="' + f + '" → geen match' });
      } else {
        ctx.mark(l, { status: "ok", label: 'for="' + f + '"' });
      }
    });
    return { count: labels.length, summary: labels.length + " labels. " + noFor + " zonder for-attribuut, " + noMatch + " met een for die nergens op wijst." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "tabindex",
  group: "Toetsenbord",
  label: "Tabvolgorde (tabindex)",
  wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/",
  run: function (ctx) {
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[tabindex]"));
    var positive = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var v = parseInt(el.getAttribute("tabindex"), 10);
      var status = v > 0 ? "error" : "info";
      if (v > 0) positive++;
      ctx.mark(el, { status: status, label: "tabindex=" + v + (v > 0 ? " (breekt volgorde)" : "") });
    });
    return { count: nodes.length, summary: nodes.length + " elementen met tabindex. " + positive + " met een positieve waarde (die verstoren de logische volgorde)." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
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
  id: "tables",
  group: "Structuur",
  label: "Tabellen (th/scope)",
  wcag: "/blog/sc-1-3-1-tabellen/",
  run: function (ctx) {
    var tables = Array.prototype.slice.call(document.querySelectorAll("table"));
    var problems = 0;
    tables.forEach(function (t) {
      if (t.closest("[data-pa-lens]")) return;
      var ths = t.querySelectorAll("th");
      var caption = t.querySelector("caption");
      var noScope = 0;
      Array.prototype.forEach.call(ths, function (th) { if (!th.getAttribute("scope")) noScope++; });
      var status = "ok", bits = [ths.length + " th"];
      if (!ths.length) { status = "error"; bits.push("geen th"); problems++; }
      if (noScope) { status = status === "error" ? "error" : "warn"; bits.push(noScope + " zonder scope"); }
      if (!caption) bits.push("geen caption");
      var depth = t.querySelectorAll("table").length;
      if (depth) { status = "warn"; bits.push(depth + " geneste tabel(len)"); }
      ctx.mark(t, { status: status, label: bits.join(" · ") });
    });
    return { count: tables.length, summary: tables.length + " tabellen, " + problems + " zonder header-cellen (th)." };
  },
  clear: function (ctx) { ctx.clearMarks(); }
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
  id: "dupids",
  group: "Structuur",
  label: "Dubbele id's",
  wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/",
  run: function (ctx) {
    var seen = {}, dups = {};
    Array.prototype.forEach.call(document.querySelectorAll("[id]"), function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var id = el.id;
      if (seen[id]) { dups[id] = (dups[id] || 1) + 1; ctx.mark(el, { status: "error", label: 'dubbele id="' + id + '"' }); }
      else seen[id] = el;
    });
    var keys = Object.keys(dups);
    keys.forEach(function (id) { if (seen[id]) PA.addOverlay("dupids", seen[id], { status: "error", label: 'dubbele id="' + id + '"' }); });
    return { count: keys.length, summary: keys.length + " id-waarden komen meer dan één keer voor. Dat breekt label- en ARIA-koppelingen." };
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

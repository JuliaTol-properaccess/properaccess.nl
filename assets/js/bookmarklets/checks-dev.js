/* Developer-checks: technisch, met attribuutnamen. */

PA.register({
  id: "formerrors",
  group: "Semantiek",
  label: "Foutmeldingen bij formuliervelden",
  wcag: "/blog/sc-3-3-1-wat-betekent-fout-identificatie/",
  run: function (ctx) {
    /* Kandidaat-foutmeldingen: elementen die op een validatie-fout lijken.
       We combineren drie signalen — een ARIA-rol/live-region, of een klasse
       die op error/invalid/foutmelding lijkt. Data-attributen laten we voor
       nu buiten scope, die zijn te wisselend. */
    var CLASS_PATTERN = /(?:^|[-_ ])(error|errors|invalid|is-invalid|has-error|foutmelding|foutmeldingen|validation-error|field-error|input-error|form-error|help-error)(?:$|[-_ ])/i;
    var seen = new Set();
    var candidates = [];
    var byRole = document.querySelectorAll('[role="alert"],[role="status"],[aria-live]');
    Array.prototype.forEach.call(byRole, function (el) { candidates.push(el); });
    Array.prototype.forEach.call(document.querySelectorAll("[class]"), function (el) {
      if (CLASS_PATTERN.test(el.className || "")) candidates.push(el);
    });
    candidates = candidates.filter(function (el) {
      if (!el || seen.has(el)) return false;
      if (el.closest("[data-pa-lens]")) return false;
      if (!PA.visible(el)) return false;
      /* Nul-tekst overslaan (bv. leeg containertje voor toekomstige melding). */
      var text = (el.textContent || "").trim();
      if (!text) return false;
      seen.add(el);
      return true;
    });

    /* Bouw een lookup: welk formulierveld verwijst naar welk id? */
    var fields = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var refToFields = new Map();
    fields.forEach(function (f) {
      ["aria-describedby", "aria-errormessage"].forEach(function (attr) {
        var v = f.getAttribute(attr);
        if (!v) return;
        v.split(/\s+/).forEach(function (id) {
          if (!id) return;
          if (!refToFields.has(id)) refToFields.set(id, []);
          refToFields.get(id).push({ field: f, attr: attr });
        });
      });
    });

    var unlinked = 0, linkedWithoutInvalid = 0, ok = 0;
    candidates.forEach(function (el) {
      var id = el.id;
      var refs = id ? (refToFields.get(id) || []) : [];
      var short = ((el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60));
      var quoted = '"' + short + (short.length >= 60 ? "…" : "") + '"';
      if (!refs.length) {
        unlinked++;
        ctx.mark(el, {
          status: "error",
          label: "foutmelding niet gekoppeld: " + quoted +
            (id ? " (id=" + id + ", geen veld verwijst hierheen)" : " (geen id, kan niet gekoppeld worden)")
        });
        return;
      }
      /* Gekoppeld. Waarschuwen als geen van de velden aria-invalid="true" heeft;
         dat is een indicator dat een screenreader de fout-status niet aankondigt. */
      var invalid = refs.some(function (r) { return r.field.getAttribute("aria-invalid") === "true"; });
      var attrLabel = refs.map(function (r) {
        var name = r.field.getAttribute("name") || r.field.id || r.field.tagName.toLowerCase();
        return r.attr + " ← " + name;
      }).join(", ");
      if (!invalid) {
        linkedWithoutInvalid++;
        ctx.mark(el, {
          status: "warn",
          label: "gekoppeld (" + attrLabel + "), maar geen aria-invalid=\"true\" op het veld"
        });
      } else {
        ok++;
        ctx.mark(el, { status: "ok", label: "goed gekoppeld (" + attrLabel + ", aria-invalid=\"true\")" });
      }
    });

    var summary =
      candidates.length + " zichtbare foutmeldingen. " +
      ok + " goed gekoppeld, " +
      linkedWithoutInvalid + " gekoppeld zonder aria-invalid, " +
      unlinked + " niet gekoppeld aan een veld. " +
      "Een screenreader kondigt een foutmelding pas aan als hij via aria-describedby of aria-errormessage aan het invoerveld hangt " +
      "(en idealiter het veld aria-invalid=\"true\" heeft).";
    return { count: candidates.length, summary: summary };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

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
      // aria-label krijgt géén 'label='-prefix: het is de leesbare naam, dus
      // de waarde tussen aanhalingstekens is zelfverklarend. Voor de andere
      // ARIA-attributen blijft attr=value (de waarde is een id-verwijzing of
      // enum, niet leesbaar op zichzelf). Lege waarden slaan we over: die
      // brachten voorheen 'label=' zonder inhoud in beeld.
      var ariaLabel = el.getAttribute("aria-label");
      if (ariaLabel && ariaLabel.trim()) bits.push('"' + ariaLabel + '"');
      ["aria-labelledby", "aria-describedby", "aria-expanded", "aria-live"].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && v.trim()) bits.push(a.replace("aria-", "") + "=" + v);
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
    PA.setTextZoom(2, true);
    return { count: 0, summary: "Alle tekst staat nu op 200%. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is. Klik nogmaals om terug te zetten." };
  },
  clear: function () { PA.setTextZoom(2, false); }
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
    // Zichtbare iframes controleren; lens-eigen iframes en display:none/
    // visibility:hidden/nul-afmeting frames overslaan.
    var frames = Array.prototype.slice.call(document.querySelectorAll("iframe")).filter(function (f) {
      if (f.closest("[data-pa-lens]")) return false;
      return PA.visible(f);
    });
    var noTitle = 0;
    frames.forEach(function (f) {
      var title = f.getAttribute("title") || f.getAttribute("aria-label");
      if (!title || !title.trim()) { noTitle++; ctx.mark(f, { status: "error", label: "iframe zonder titel" }); }
      else ctx.mark(f, { status: "ok", label: "title: " + title });
    });
    return { count: frames.length, summary: frames.length + " zichtbare iframes, " + noTitle + " zonder titel." };
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

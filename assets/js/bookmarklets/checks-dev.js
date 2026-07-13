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
          label: PA.t("foutmelding niet gekoppeld: {q}", { q: quoted }) +
            (id ? PA.t(" (id={id}, geen veld verwijst hierheen)", { id: id }) : PA.t(" (geen id, kan niet gekoppeld worden)"))
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
          label: PA.t("gekoppeld ({via}), maar geen aria-invalid=\"true\" op het veld", { via: attrLabel })
        });
      } else {
        ok++;
        ctx.mark(el, { status: "ok", label: PA.t("goed gekoppeld ({via}, aria-invalid=\"true\")", { via: attrLabel }) });
      }
    });

    var summary = PA.t("{n} zichtbare foutmeldingen. {ok} goed gekoppeld, {warn} gekoppeld zonder aria-invalid, {err} niet gekoppeld aan een veld. Een screenreader kondigt een foutmelding pas aan als hij via aria-describedby of aria-errormessage aan het invoerveld hangt (en idealiter het veld aria-invalid=\"true\" heeft).",
      { n: candidates.length, ok: ok, warn: linkedWithoutInvalid, err: unlinked });
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
    var broken = 0, badRoles = 0, missingAttr = 0, hiddenFocusable = 0;
    /* Geldige ARIA 1.2-rollen (abstracte rollen weggelaten: die mag je toch
       niet gebruiken) en per rol het attribuut dat verplicht is. */
    var VALID_ROLES = ["alert", "alertdialog", "application", "article", "banner", "blockquote", "button", "caption", "cell", "checkbox", "code", "columnheader", "combobox", "complementary", "contentinfo", "definition", "deletion", "dialog", "directory", "document", "emphasis", "feed", "figure", "form", "generic", "grid", "gridcell", "group", "heading", "img", "insertion", "link", "list", "listbox", "listitem", "log", "main", "marquee", "math", "menu", "menubar", "menuitem", "menuitemcheckbox", "menuitemradio", "meter", "navigation", "none", "note", "option", "paragraph", "presentation", "progressbar", "radio", "radiogroup", "region", "row", "rowgroup", "rowheader", "scrollbar", "search", "searchbox", "separator", "slider", "spinbutton", "status", "strong", "subscript", "superscript", "switch", "tab", "table", "tablist", "tabpanel", "term", "textbox", "time", "timer", "toolbar", "tooltip", "tree", "treegrid", "treeitem"];
    var REQUIRED_ATTR = { checkbox: "aria-checked", radio: "aria-checked", "switch": "aria-checked", slider: "aria-valuenow", combobox: "aria-expanded", scrollbar: "aria-valuenow" };
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var bits = [];
      var status = "info";
      var role = el.getAttribute("role");
      if (role) {
        bits.push("role=" + role);
        var r0 = role.trim().split(/\s+/)[0].toLowerCase();
        if (VALID_ROLES.indexOf(r0) === -1) {
          status = "error"; badRoles++;
          bits.push(PA.t("↯ onbekende role"));
        } else if (REQUIRED_ATTR[r0] && !el.hasAttribute(REQUIRED_ATTR[r0]) && !el.matches("input,select")) {
          status = "error"; missingAttr++;
          bits.push(PA.t("↯ {role} zonder {attr}", { role: r0, attr: REQUIRED_ATTR[r0] }));
        }
      }
      if (el.getAttribute("aria-hidden") === "true") {
        var focusableSelf = el.matches("a[href],button,input,select,textarea,summary") ||
          (el.hasAttribute("tabindex") && parseInt(el.getAttribute("tabindex"), 10) >= 0);
        var focusableChild = el.querySelector('a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex^="-"])');
        if (focusableSelf || focusableChild) {
          status = "error"; hiddenFocusable++;
          bits.push(PA.t("↯ aria-hidden verbergt focusbare inhoud"));
        }
      }
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
      ["aria-labelledby", "aria-describedby", "aria-controls"].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v) v.split(/\s+/).forEach(function (id) {
          if (id && !document.getElementById(id)) { status = "error"; bits.push(PA.t("↯ {a} → #{id} bestaat niet", { a: a, id: id })); broken++; }
        });
      });
      ctx.mark(el, { status: status, label: bits.join(" · ") });
    });
    return {
      count: nodes.length,
      summary: PA.t("{n} elementen met ARIA. {broken} gebroken referentie(s) naar niet-bestaande id's, {roles} onbekende rollen, {attrs} rollen zonder verplicht attribuut (zoals checkbox zonder aria-checked), {hidden} keer aria-hidden op focusbare inhoud.",
        { n: nodes.length, broken: broken, roles: badRoles, attrs: missingAttr, hidden: hiddenFocusable })
    };
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
        ctx.mark(el, { status: "error", label: PA.t("geen toegankelijke naam") });
      } else {
        if (name.length > 50) name = name.slice(0, 47) + "…";
        ctx.mark(el, { status: "ok", label: "“" + name + "”" });
      }
    });
    return { count: nodes.length, summary: PA.t("{n} interactieve elementen. {missing} zonder toegankelijke naam.", { n: nodes.length, missing: missing }) };
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
      if (v > 0) ctx.mark(el, { status: "error", label: PA.t("{n} · tabindex={v} (breekt volgorde)", { n: n, v: v }) });
      else ctx.mark(el, { status: "info", label: String(n) });
    });
    var msg = PA.t("{n} focusbare elementen, genummerd in tabvolgorde.", { n: ordered.length }) + " ";
    msg += pos.length ? PA.t("{n} met een positieve tabindex: die springen vóór de rest en verstoren de logische volgorde.", { n: pos.length }) : PA.t("Geen positieve tabindex-waarden gevonden.");
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
    return { count: 0, summary: PA.t("Alle tekst staat nu op 200%. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is. Klik nogmaals om terug te zetten.") };
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
    return { count: 0, summary: PA.t("Elke focus krijgt nu een duidelijke magenta rand. Tab door de pagina om te zien waar de focus heen springt.") };
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
      if (!title || !title.trim()) { noTitle++; ctx.mark(f, { status: "error", label: PA.t("iframe zonder titel") }); }
      else ctx.mark(f, { status: "ok", label: "title: " + title });
    });
    return { count: frames.length, summary: PA.t("{n} zichtbare iframes, {noTitle} zonder titel.", { n: frames.length, noTitle: noTitle }) };
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
    PA._infoMove = function (e, frameEl) {
      var el = e.target;
      if (!el || el.nodeType !== 1 || el.closest("[data-pa-lens]")) { tip.style.display = "none"; return; }
      /* Bij een event uit een (same-origin) iframe zijn de coordinaten
         relatief aan dat iframe; verschuif ze naar de hoofdpagina. */
      var ox = 0, oy = 0;
      if (frameEl) {
        var fRect = frameEl.getBoundingClientRect();
        ox = fRect.left; oy = fRect.top;
      }
      var bits = [el.tagName.toLowerCase()];
      if (el.id) bits.push("#" + el.id);
      if (el.className && typeof el.className === "string") bits.push("." + el.className.trim().split(/\s+/).join("."));
      var extra = [];
      if (el.getAttribute("role")) extra.push("role=" + el.getAttribute("role"));
      var an = PA.accName(el);
      if (an && an.length < 60) extra.push(PA.t("naam: “{name}”", { name: an }));
      var r = el.getBoundingClientRect();
      extra.push(Math.round(r.width) + "×" + Math.round(r.height));
      /* Focusbaar: van nature interactief, of expliciet met tabindex >= 0. */
      var focusable = el.matches("a[href],button,input,select,textarea,summary,[contenteditable=true]") ||
        (el.hasAttribute("tabindex") && parseInt(el.getAttribute("tabindex"), 10) >= 0);
      extra.push(focusable ? PA.t("focusbaar") : PA.t("niet focusbaar"));
      /* Kleur en contrast: alleen tonen als de achtergrond betrouwbaar te
         bepalen is (effen kleur, geen afbeelding of transparante laag). */
      var cs = getComputedStyle(el);
      var fg = PA.parseColor(cs.color);
      var bg = PA.solidBg(el);
      if (fg && bg && (el.textContent || "").trim()) {
        var rgb = "rgb(" + bg.r + ", " + bg.g + ", " + bg.b + ")";
        extra.push(PA.t("tekst {fg} op {bg}", { fg: cs.color, bg: rgb }));
        extra.push(PA.t("contrast {r}:1", { r: Math.round(PA.contrastRatio(fg, bg) * 100) / 100 }));
      }
      tip.innerHTML = "<strong>" + PA.esc(bits.join("")) + "</strong>" + (extra.length ? "<br>" + PA.esc(extra.join(" · ")) : "");
      tip.style.display = "block";
      var x = e.clientX + ox + 14, y = e.clientY + oy + 14;
      if (x + 360 > innerWidth) x = e.clientX + ox - 360;
      tip.style.left = x + "px";
      tip.style.top = Math.min(y, innerHeight - 60) + "px";
    };
    document.addEventListener("mousemove", PA._infoMove, true);
    /* Ook in same-origin iframes werkt de tooltip; cross-origin kaders
       (bijvoorbeeld ingesloten videospelers) blijven onbereikbaar. */
    PA._infoFrames = [];
    var sameOrigin = 0, crossOrigin = 0;
    Array.prototype.forEach.call(document.querySelectorAll("iframe"), function (fr) {
      var doc = null;
      try { doc = fr.contentDocument; } catch (e) {}
      if (!doc) { crossOrigin++; return; }
      sameOrigin++;
      var fn = function (e) { PA._infoMove(e, fr); };
      doc.addEventListener("mousemove", fn, true);
      PA._infoFrames.push({ doc: doc, fn: fn });
    });
    var frameNote = "";
    if (sameOrigin || crossOrigin) {
      frameNote = " " + PA.t("Werkt ook in {n} ingesloten kaders van dit domein", { n: sameOrigin });
      frameNote += crossOrigin ? PA.t("; {n} kaders van andere domeinen zijn technisch niet bereikbaar.", { n: crossOrigin }) : ".";
    }
    return { count: 0, summary: PA.t("Beweeg met de muis over de pagina. Je ziet tag, id, class, rol, naam, afmeting, focusbaarheid en (waar meetbaar) kleur en contrast van elk element.") + frameNote };
  },
  clear: function () {
    if (PA._infoMove) document.removeEventListener("mousemove", PA._infoMove, true);
    if (PA._infoFrames) {
      PA._infoFrames.forEach(function (f) {
        try { f.doc.removeEventListener("mousemove", f.fn, true); } catch (e) {}
      });
    }
    if (PA._infoTip) PA._infoTip.remove();
    PA._infoMove = PA._infoTip = PA._infoFrames = null;
  }
});

PA.register({
  id: "grouplabels",
  group: "Formulieren",
  label: "Groepen en zichtbare labels",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function (ctx) {
    var problems = 0, n = 0;
    /* Fieldsets horen een legend te hebben; role=group een naam. */
    var sets = Array.prototype.slice.call(document.querySelectorAll("fieldset,[role=group],[role=radiogroup]"));
    sets.forEach(function (el) {
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) return;
      n++;
      var isFieldset = el.tagName.toLowerCase() === "fieldset";
      var legend = isFieldset ? el.querySelector("legend") : null;
      /* Voor een groep telt alleen een echte groepsnaam: legend, aria-label of
         aria-labelledby. PA.accName is hier te ruim (die valt terug op tekst
         en labels van kind-elementen, en dat is geen naam voor de groep). */
      var name = legend ? (legend.textContent || "").trim() : "";
      if (!name) name = (el.getAttribute("aria-label") || "").trim();
      if (!name) {
        var lb = el.getAttribute("aria-labelledby");
        if (lb) {
          lb.split(/\s+/).forEach(function (id) {
            var t = document.getElementById(id);
            if (t) name += (t.textContent || "").trim() + " ";
          });
          name = name.trim();
        }
      }
      if (!name) {
        problems++;
        ctx.mark(el, { status: "error", label: isFieldset ? PA.t("fieldset zonder legend") : PA.t("groep zonder naam") });
      } else {
        ctx.mark(el, { status: "ok", label: isFieldset ? PA.t("legend: {name}", { name: name }) : PA.t("naam: {name}", { name: name }) });
      }
    });
    /* Velden met alleen een aria-label hebben geen zichtbaar label. Dat is
       soms oké (zoekveld met vergrootglas-icoon), vaak niet. */
    var fields = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var invisible = 0;
    fields.forEach(function (f) {
      if (f.closest("[data-pa-lens]") || !PA.visible(f)) return;
      var t = (f.getAttribute("type") || "").toLowerCase();
      if (t === "hidden" || t === "submit" || t === "button" || t === "image" || t === "reset") return;
      var hasVisibleLabel = false;
      if (f.id && document.querySelector('label[for="' + f.id.replace(/"/g, '\\"') + '"]')) hasVisibleLabel = true;
      if (f.closest("label")) hasVisibleLabel = true;
      var ariaOnly = !hasVisibleLabel && (f.getAttribute("aria-label") || f.getAttribute("aria-labelledby"));
      if (ariaOnly) {
        invisible++;
        ctx.mark(f, { status: "warn", label: PA.t("geen zichtbaar label (alleen aria)") });
      }
    });
    return {
      count: problems + invisible,
      summary: PA.t("{n} groepen (fieldset/role=group) bekeken, {p} zonder naam of legend. Daarnaast {inv} velden met alleen een aria-label en geen zichtbaar label. Een icoon als zichtbaar label mag, bijvoorbeeld een vergrootglas bij een zoekveld.", { n: n, p: problems, inv: invisible })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "autocomplete",
  group: "Formulieren",
  label: "Autocomplete bij persoonlijke gegevens",
  wcag: "/blog/sc-1-3-5-wat-betekent-identificeer-het-doel-van-de-input/",
  run: function (ctx) {
    /* Velden die om persoonsgegevens vragen moeten een autocomplete-attribuut
       met een geldige waarde hebben, zodat de browser kan invullen. */
    var valid = ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix",
      "nickname", "username", "new-password", "current-password", "one-time-code", "organization-title",
      "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4",
      "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code",
      "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp",
      "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount",
      "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo",
      "tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-extension",
      "email", "impp", "off", "on"];
    var personal = /e-?mail|tel|phone|gsm|mobiel|naam|name|adres|address|straat|street|postcode|zip|plaats|city|woonplaats|geboortedatum|birthday|bday|iban|rekening/i;
    var fields = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var candidates = 0, missing = 0, invalid = 0;
    fields.forEach(function (f) {
      if (f.closest("[data-pa-lens]") || !PA.visible(f)) return;
      var t = (f.getAttribute("type") || "text").toLowerCase();
      if (["hidden", "submit", "button", "image", "reset", "checkbox", "radio", "search", "file"].indexOf(t) !== -1) return;
      var hint = t + " " + (f.name || "") + " " + (f.id || "") + " " + PA.accName(f);
      var isPersonal = t === "email" || t === "tel" || personal.test(hint);
      if (!isPersonal) return;
      candidates++;
      var ac = (f.getAttribute("autocomplete") || "").trim().toLowerCase();
      if (!ac) {
        missing++;
        ctx.mark(f, { status: "warn", label: PA.t("geen autocomplete") });
      } else {
        /* Laatste token telt: "shipping street-address" is geldig. */
        var tokens = ac.split(/\s+/);
        var main = tokens[tokens.length - 1];
        if (valid.indexOf(main) === -1) {
          invalid++;
          ctx.mark(f, { status: "warn", label: PA.t("onbekende autocomplete-waarde: {v}", { v: ac }) });
        } else {
          ctx.mark(f, { status: "ok", label: "autocomplete: " + ac });
        }
      }
    });
    return {
      count: missing + invalid,
      summary: PA.t("{n} velden die om persoonlijke gegevens lijken te vragen: {missing} zonder autocomplete, {invalid} met een onbekende waarde. Autocomplete helpt onder meer mensen met een motorische of cognitieve beperking.", { n: candidates, missing: missing, invalid: invalid })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "pasteblock",
  group: "Formulieren",
  label: "Plakken geblokkeerd",
  wcag: "/blog/sc-3-3-8-wat-betekent-toegankelijke-authenticatie/",
  run: function (ctx) {
    /* Geblokkeerd plakken (vaak bij "herhaal je e-mailadres") dwingt overtypen
       af: lastig voor iedereen, een drempel voor mensen met een beperking.
       Alleen inline handlers zijn detecteerbaar; blokkades via addEventListener
       zien we niet. */
    var attrs = ["onpaste", "oncopy", "oncut", "ondrop"];
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[onpaste],[oncopy],[oncut],[ondrop]"));
    var blocked = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      var hits = [];
      attrs.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && /return\s+false|preventDefault/i.test(v)) hits.push(a);
      });
      if (hits.length) {
        blocked++;
        ctx.mark(el, { status: "error", label: PA.t("blokkeert {what}", { what: hits.join(", ") }) });
      } else if (el.matches("input,textarea")) {
        ctx.mark(el, { status: "info", label: PA.t("eigen {what}-gedrag", { what: attrs.filter(function (a) { return el.hasAttribute(a); }).join(", ") }) });
      }
    });
    return {
      count: blocked,
      summary: PA.t("{n} elementen blokkeren plakken, kopiëren of slepen via inline code. Let op: blokkades via scripts (addEventListener) kan deze check niet zien; test het plakken zelf ook even.", { n: blocked })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "gestures",
  group: "Interactie",
  label: "Gebaren en muis-only bediening",
  wcag: "/blog/sc-2-1-1-wat-betekent-toetsenbord/",
  run: function (ctx) {
    /* Elementen die alleen met de muis of via aanraking te bedienen zijn.
       Alleen inline handlers (onclick=...) zijn zichtbaar voor een
       bookmarklet; listeners via addEventListener niet. */
    var natural = "a[href],button,input,select,textarea,summary,[role=button],[role=link],[role=checkbox],[role=switch],[role=tab],[role=menuitem],[role=option]";
    var mouseOnly = 0, dragN = 0, pointerHint = 0;
    var clickers = Array.prototype.slice.call(
      document.querySelectorAll("[onclick],[onmousedown],[onmouseup],[ondblclick],[ontouchstart],[ontouchend]")
    );
    clickers.forEach(function (el) {
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) return;
      if (el.matches(natural)) return;
      var focusable = el.hasAttribute("tabindex") && parseInt(el.getAttribute("tabindex"), 10) >= 0;
      if (!focusable) {
        mouseOnly++;
        ctx.mark(el, { status: "error", label: PA.t("klikbaar via script, niet met toetsenbord") });
      } else {
        ctx.mark(el, { status: "info", label: PA.t("script-klikbaar (wel focusbaar): check Enter/spatie") });
      }
    });
    var drags = Array.prototype.slice.call(document.querySelectorAll("[draggable=true]"));
    drags.forEach(function (el) {
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) return;
      dragN++;
      ctx.mark(el, { status: "warn", label: PA.t("drag-en-drop: is er een toetsenbord-alternatief?") });
    });
    /* cursor:pointer op niet-interactieve elementen: vaak een div die pas via
       addEventListener klikbaar is gemaakt. Alleen het bovenste element met
       de pointer telt, om de kinderen van echte links niet mee te nemen. */
    var all = Array.prototype.slice.call(document.querySelectorAll("body *"));
    for (var i = 0; i < all.length && pointerHint < 20; i++) {
      var el = all[i];
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) continue;
      if (el.closest(natural) || el.closest("[onclick]") || el.closest("label")) continue;
      if (getComputedStyle(el).cursor !== "pointer") continue;
      if (el.parentElement && getComputedStyle(el.parentElement).cursor === "pointer") continue;
      if (el.hasAttribute("tabindex") && parseInt(el.getAttribute("tabindex"), 10) >= 0) continue;
      pointerHint++;
      ctx.mark(el, { status: "warn", label: PA.t("cursor:pointer zonder interactieve rol") });
    }
    return {
      count: mouseOnly + dragN + pointerHint,
      summary: PA.t("{a} elementen zijn via inline script klikbaar maar niet met het toetsenbord te bereiken, {b} gebruiken drag-en-drop en {c} hebben een muiscursor zonder interactieve rol (vaak script-klikbaar gemaakt). Swipe-gebaren en listeners via addEventListener kan de lens niet zien; test bediening ook zelf met alleen het toetsenbord.", { a: mouseOnly, b: dragN, c: pointerHint })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "requiredfields",
  group: "Formulieren",
  label: "Verplichte velden",
  wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/",
  run: function (ctx) {
    /* Verplichte velden moeten dat ook voor hulpsoftware zijn: via required
       of aria-required. Een sterretje in het label alleen is niet genoeg. */
    function labelText(f) {
      var t = "";
      if (f.id) {
        var l = document.querySelector('label[for="' + f.id.replace(/"/g, '\\"') + '"]');
        if (l) t += " " + (l.textContent || "");
      }
      var wrap = f.closest("label");
      if (wrap) t += " " + (wrap.textContent || "");
      return t;
    }
    var fields = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var marked = 0, looksRequired = 0;
    fields.forEach(function (f) {
      if (f.closest("[data-pa-lens]") || !PA.visible(f)) return;
      var t = (f.getAttribute("type") || "").toLowerCase();
      if (["hidden", "submit", "button", "image", "reset"].indexOf(t) !== -1) return;
      var isReq = f.hasAttribute("required");
      var ariaReq = f.getAttribute("aria-required") === "true";
      if (isReq || ariaReq) {
        marked++;
        ctx.mark(f, { status: "ok", label: PA.t("verplicht ({how})", { how: isReq ? "required" : "aria-required" }) });
      } else {
        var lt = labelText(f);
        if (PA.rx("requiredHint").test(lt)) {
          looksRequired++;
          ctx.mark(f, { status: "warn", label: PA.t("label zegt verplicht, maar required/aria-required ontbreekt") });
        }
      }
    });
    return {
      count: marked + looksRequired,
      summary: PA.t("{n} velden zijn als verplicht gemarkeerd voor hulpsoftware (required of aria-required). {m} velden lijken verplicht (sterretje of 'verplicht' in het label) maar missen die markering; een screenreader-gebruiker hoort het dan niet.", { n: marked, m: looksRequired })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

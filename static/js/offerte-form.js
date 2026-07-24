/**
 * Offerteformulier Proper Access (/offerte-wcag-onderzoek/).
 *
 * Een aanvraag kan meerdere onderzoeken bevatten: drie websites en een app in
 * één offerte. Elk onderzoek is een blok (offerte-item.html) dat hier gekloond,
 * genummerd en gevalideerd wordt.
 *
 * - Geeft elk blok unieke namen en id's, zodat radiogroepen elkaar niet storen.
 * - Toont en verbergt voorwaardelijke velden per blok.
 * - Beheert het required-attribuut zodat verborgen velden nooit blokkeren.
 * - Vat alle blokken samen in verborgen velden en verstuurt via paFormSubmit.
 */
(function () {
  "use strict";

  var form = document.getElementById("offerte-form");
  if (!form) return;

  var itemsWrap = document.getElementById("offerte-items");
  var itemTemplate = document.getElementById("offerte-item-template");
  var addBtn = document.getElementById("offerte-add-item");
  var itemsHint = document.getElementById("offerte-items-hint");
  var announce = document.getElementById("offerte-items-status");

  // Meer dan dit aantal onderzoeken is geen zelfbedieningsklus meer; dan bellen we.
  var MAX_ITEMS = 10;

  // Velden per onderzoek, in de volgorde waarin ze in de samenvatting komen.
  var ITEM_FIELDS = [
    ["soort", "Soort"],
    ["omschrijving", "Omschrijving"],
    ["url", "URL"],
    ["app_platform", "Platform"],
    ["aantal_documenten", "Documenten"],
    ["type_onderzoek", "Type onderzoek"],
    ["aantal_paginatypes", "Pagina- of schermtypes"],
    ["functionaliteiten", "Functionaliteiten"],
    ["meertalig", "Meertalig"],
    ["talen", "Talen"]
  ];

  function items() {
    return Array.prototype.slice.call(form.querySelectorAll("[data-offerte-item]"));
  }

  // ── Nummering: unieke namen, id's en labels per blok ──
  // De namen beginnen met __ ; paFormSubmit slaat die over, want we sturen de
  // blokken samengevat mee in plaats van als losse velden.
  function indexItem(item, nr) {
    item.setAttribute("data-item-nr", nr);

    var named = item.querySelectorAll("[data-name]");
    for (var i = 0; i < named.length; i++) {
      named[i].name = "__onderzoek" + nr + "_" + named[i].getAttribute("data-name");
    }

    var identified = item.querySelectorAll("[data-id]");
    for (var j = 0; j < identified.length; j++) {
      var key = identified[j].getAttribute("data-id");
      var id = "offerte-" + nr + "-" + key;
      identified[j].id = id;
      var label = item.querySelector('[data-for="' + key + '"]');
      if (label) label.setAttribute("for", id);
    }

    var title = item.querySelector("[data-item-title]");
    if (title) title.textContent = "Onderzoek " + nr;

    var removeLabel = item.querySelector("[data-item-label]");
    if (removeLabel) removeLabel.textContent = "onderzoek " + nr;
  }

  function renumber() {
    var list = items();
    // Van laag naar hoog hernummeren is veilig: een blok krijgt nooit een naam
    // die een ander blok op dat moment nog gebruikt.
    for (var i = 0; i < list.length; i++) {
      indexItem(list[i], i + 1);
      var remove = list[i].querySelector("[data-item-remove]");
      // Het laatste overgebleven onderzoek kun je niet verwijderen.
      if (remove) remove.hidden = list.length < 2;
    }
    if (addBtn) addBtn.hidden = list.length >= MAX_ITEMS;
    if (itemsHint) {
      itemsHint.textContent =
        list.length >= MAX_ITEMS
          ? "Meer dan " + MAX_ITEMS + " onderzoeken? Bel ons even, dan stellen we het samen op."
          : "Bijvoorbeeld een tweede website, een subsite of de app die erbij hoort.";
    }
  }

  function say(message) {
    if (announce) announce.textContent = message;
  }

  // ── Voorwaardelijke velden ──
  // Binnen een onderzoeksblok kijken we alleen naar de velden van dat blok,
  // daarbuiten naar het hele formulier.
  function scopeOf(el) {
    return el.closest("[data-offerte-item]") || form;
  }

  function fieldsOf(scope, name) {
    var byData = scope.querySelectorAll('[data-name="' + name + '"]');
    if (byData.length) return byData;
    return scope.querySelectorAll('[name="' + name + '"]');
  }

  function test(scope, expr) {
    var eq = expr.indexOf("=");
    var name = expr.slice(0, eq);
    var val = expr.slice(eq + 1);
    var els = fieldsOf(scope, name);
    if (!els.length) return false;
    if (els[0].type === "radio" || els[0].type === "checkbox") {
      for (var i = 0; i < els.length; i++) {
        if (els[i].checked && els[i].value === val) return true;
      }
      return false;
    }
    return els[0].value === val;
  }

  function matches(condEl) {
    var scope = scopeOf(condEl);
    var single = condEl.getAttribute("data-show-when");
    if (single) return test(scope, single);
    var any = condEl.getAttribute("data-show-when-any");
    if (any) {
      var parts = any.split("|");
      for (var i = 0; i < parts.length; i++) {
        if (test(scope, parts[i])) return true;
      }
      return false;
    }
    return true;
  }

  // Zichtbaar als dit blok en alle bovenliggende blokken voldoen.
  function isVisible(condEl) {
    var el = condEl;
    while (el) {
      if (el.classList && el.classList.contains("offerte-cond")) {
        if (!matches(el)) return false;
      }
      el = el.parentElement;
    }
    return true;
  }

  function inputVisible(input) {
    var c = input.closest(".offerte-cond");
    return c ? isVisible(c) : true;
  }

  function clearInput(input) {
    if (input.type === "radio" || input.type === "checkbox") {
      if (input.checked) input.checked = false;
    } else if (input.value !== "") {
      input.value = "";
    }
  }

  function update() {
    var conds = form.querySelectorAll(".offerte-cond");
    for (var i = 0; i < conds.length; i++) {
      conds[i].hidden = !isVisible(conds[i]);
    }
    var inputs = form.querySelectorAll("input, textarea, select");
    for (var j = 0; j < inputs.length; j++) {
      var input = inputs[j];
      var vis = inputVisible(input);
      if (input.hasAttribute("data-required")) input.required = vis;
      if (!vis) clearInput(input);
    }
  }

  // ── Onderzoek toevoegen en verwijderen ──
  function addItem() {
    if (!itemsWrap || !itemTemplate) return;
    if (items().length >= MAX_ITEMS) return;

    var clone = itemTemplate.content.cloneNode(true);
    var item = clone.querySelector("[data-offerte-item]");
    itemsWrap.appendChild(clone);
    renumber();
    update();

    var nr = item.getAttribute("data-item-nr");
    say("Onderzoek " + nr + " toegevoegd.");
    var first = item.querySelector("input, textarea, select");
    if (first) first.focus();
  }

  function removeItem(item) {
    if (items().length < 2) return;
    var nr = item.getAttribute("data-item-nr");
    item.parentNode.removeChild(item);
    renumber();
    update();
    say("Onderzoek " + nr + " verwijderd. Je vraagt nu " + aantalTekst(items().length) + " aan.");
    if (addBtn && !addBtn.hidden) addBtn.focus();
  }

  function aantalTekst(n) {
    return n === 1 ? "1 onderzoek" : n + " onderzoeken";
  }

  if (addBtn) addBtn.addEventListener("click", addItem);

  form.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-item-remove]") : null;
    if (!btn || !form.contains(btn)) return;
    var item = btn.closest("[data-offerte-item]");
    if (item) removeItem(item);
  });

  form.addEventListener("change", update);

  // ── Samenvatting van de blokken ──
  // Leest per veld de waarde, met het zichtbare label als tekst, zodat de
  // e-mail leesbaar is zonder dat we labels dubbel onderhouden.
  function labelOf(input) {
    var label = input.closest("label");
    var span = label ? label.querySelector("span") : null;
    return span ? span.textContent.trim() : input.value;
  }

  function readField(item, name) {
    var els = fieldsOf(item, name);
    if (!els.length) return "";
    if (els[0].type === "radio" || els[0].type === "checkbox") {
      var chosen = [];
      for (var i = 0; i < els.length; i++) {
        if (els[i].checked && inputVisible(els[i])) chosen.push(labelOf(els[i]));
      }
      return chosen.join(", ");
    }
    return inputVisible(els[0]) ? els[0].value.trim() : "";
  }

  function summarize() {
    var list = items();
    var blocks = [];
    var soorten = [];
    var urls = [];

    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var lines = ["Onderzoek " + (i + 1)];
      for (var f = 0; f < ITEM_FIELDS.length; f++) {
        var name = ITEM_FIELDS[f][0];
        var label = ITEM_FIELDS[f][1];
        var value = readField(item, name);
        if (value) lines.push("  " + label + ": " + value);
      }
      blocks.push(lines.join("\n"));

      var soortEls = fieldsOf(item, "soort");
      for (var s = 0; s < soortEls.length; s++) {
        if (soortEls[s].checked && soorten.indexOf(soortEls[s].value) === -1) {
          soorten.push(soortEls[s].value);
        }
      }
      var url = readField(item, "url");
      if (url) urls.push(url);
    }

    setHidden("offerte-aantal-onderzoeken", String(list.length));
    setHidden("offerte-soorten", soorten.join(", "));
    setHidden("offerte-urls-value", urls.join(", "));
    setHidden("offerte-scope", blocks.join("\n\n"));
  }

  function setHidden(id, value) {
    var el = document.getElementById(id);
    if (el) el.value = value;
  }

  // Terug naar één leeg onderzoek, na een geslaagde verzending.
  function resetItems() {
    var list = items();
    for (var i = 1; i < list.length; i++) {
      list[i].parentNode.removeChild(list[i]);
    }
    renumber();
  }

  // ── Verzenden ──
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Handmatige validatie, want het formulier staat op novalidate.
    var invalid = null;
    var fields = form.querySelectorAll("input, textarea, select");
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (f.offsetParent === null && f.type !== "hidden") continue; // verborgen: overslaan
      if (!f.checkValidity()) {
        invalid = f;
        break;
      }
    }
    if (invalid) {
      invalid.focus();
      if (invalid.reportValidity) invalid.reportValidity();
      return;
    }

    summarize();

    window.paFormSubmit(form, {
      bron: "offerte-audit",
      successMessage:
        "Bedankt, je aanvraag is binnen. We sturen je binnen 1 werkdag een offerte op maat. " +
        "Wil je iets aanvullen? Beantwoord gewoon onze mail.",
      onSuccess: function () {
        resetItems(); // extra onderzoeken weg, eerste blok leeg
        update(); // formulier is gereset, voorwaardelijke velden weer dicht
      }
    });
  });

  renumber();
  update();
})();

/**
 * Offerteformulier Proper Access (/offerte-wcag-onderzoek/).
 * - Toont en verbergt voorwaardelijke blokken op basis van de antwoorden.
 * - Beheert het required-attribuut zodat verborgen velden nooit blokkeren.
 * - Wist verborgen velden zodat er geen oude waarden meegestuurd worden.
 * - Verstuurt via de gedeelde paFormSubmit-helper naar de standaard-Worker.
 */
(function () {
  "use strict";

  var form = document.getElementById("offerte-form");
  if (!form) return;

  var conds = Array.prototype.slice.call(form.querySelectorAll(".offerte-cond"));
  var allInputs = Array.prototype.slice.call(
    form.querySelectorAll("input, textarea, select")
  );

  // ── Huidige waarde van een veld (radio, checkbox of tekst) ──
  function fieldValue(name) {
    var els = form.querySelectorAll('[name="' + name + '"]');
    if (!els.length) return "";
    if (els[0].type === "radio" || els[0].type === "checkbox") {
      for (var i = 0; i < els.length; i++) {
        if (els[i].checked) return els[i].value;
      }
      return "";
    }
    return els[0].value;
  }

  // ── Voldoet dit blok aan zijn eigen voorwaarde? ──
  function matches(condEl) {
    var single = condEl.getAttribute("data-show-when");
    if (single) return test(single);
    var any = condEl.getAttribute("data-show-when-any");
    if (any) {
      var parts = any.split("|");
      for (var i = 0; i < parts.length; i++) {
        if (test(parts[i])) return true;
      }
      return false;
    }
    return true;
  }

  function test(expr) {
    var eq = expr.indexOf("=");
    var name = expr.slice(0, eq);
    var val = expr.slice(eq + 1);
    var els = form.querySelectorAll('[name="' + name + '"]');
    // Checkbox-groep (bv. onderzoeksobject): waar als één van de aangevinkte
    // waarden overeenkomt, zodat een blok verschijnt zodra dat type gekozen is.
    if (els.length && els[0].type === "checkbox") {
      for (var i = 0; i < els.length; i++) {
        if (els[i].checked && els[i].value === val) return true;
      }
      return false;
    }
    return fieldValue(name) === val;
  }

  // ── Zichtbaar als dit blok en alle bovenliggende blokken voldoen ──
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
    conds.forEach(function (condEl) {
      condEl.hidden = !isVisible(condEl);
    });
    allInputs.forEach(function (input) {
      var vis = inputVisible(input);
      if (input.hasAttribute("data-required")) input.required = vis;
      if (!vis) clearInput(input);
    });
  }

  form.addEventListener("change", update);
  update();

  // ── URL's: uitbreidbare lijst, één regel per product ──
  var urlsWrap = document.getElementById("offerte-urls");
  var addUrlBtn = document.getElementById("offerte-add-url");
  var urlsValue = document.getElementById("offerte-urls-value");

  function renumberUrls() {
    if (!urlsWrap) return;
    var rows = urlsWrap.querySelectorAll(".offerte-form__url-row");
    for (var i = 0; i < rows.length; i++) {
      var input = rows[i].querySelector(".offerte-form__url-input");
      if (input) input.setAttribute("aria-label", "URL " + (i + 1));
      var remove = rows[i].querySelector(".offerte-form__url-remove");
      // Verwijderknop alleen tonen als er meer dan één regel is.
      if (remove) remove.hidden = rows.length < 2;
    }
  }

  function addUrlRow(focus) {
    if (!urlsWrap) return;
    var row = document.createElement("div");
    row.className = "offerte-form__url-row";

    var input = document.createElement("input");
    input.className = "hp-form__input offerte-form__url-input";
    input.type = "url";
    input.placeholder = "https://";
    row.appendChild(input);

    var remove = document.createElement("button");
    remove.type = "button";
    remove.className = "offerte-form__url-remove";
    remove.innerHTML = '<span aria-hidden="true">×</span> Verwijder';
    remove.addEventListener("click", function () {
      row.parentNode.removeChild(row);
      renumberUrls();
    });
    row.appendChild(remove);

    urlsWrap.appendChild(row);
    renumberUrls();
    if (focus) input.focus();
  }

  if (addUrlBtn) {
    addUrlBtn.addEventListener("click", function () {
      addUrlRow(true);
    });
  }

  // Verzamelt alle ingevulde URL's tot een kommagescheiden string.
  function collectUrls() {
    if (!urlsValue) return;
    var inputs = form.querySelectorAll(".offerte-form__url-input");
    var vals = [];
    for (var i = 0; i < inputs.length; i++) {
      var v = inputs[i].value.trim();
      if (v) vals.push(v);
    }
    urlsValue.value = vals.join(", ");
  }

  // Reset de URL-lijst naar één lege regel (na een succesvolle verzending).
  function resetUrls() {
    if (!urlsWrap) return;
    var rows = urlsWrap.querySelectorAll(".offerte-form__url-row");
    for (var i = 1; i < rows.length; i++) {
      rows[i].parentNode.removeChild(rows[i]);
    }
    var first = urlsWrap.querySelector(".offerte-form__url-input");
    if (first) first.value = "";
    if (urlsValue) urlsValue.value = "";
    renumberUrls();
  }

  // ── Verzenden ──
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Minstens één onderzoeksobject aanvinken (checkbox-groep kent geen native required).
    var objecten = form.querySelectorAll('[name="onderzoeksobject"]');
    var objectGekozen = false;
    for (var o = 0; o < objecten.length; o++) {
      if (objecten[o].checked) { objectGekozen = true; break; }
    }
    if (!objectGekozen && objecten.length) {
      objecten[0].focus();
      if (objecten[0].setCustomValidity) {
        objecten[0].setCustomValidity("Kies minstens één optie.");
        if (objecten[0].reportValidity) objecten[0].reportValidity();
        objecten[0].setCustomValidity("");
      }
      return;
    }

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

    collectUrls();

    window.paFormSubmit(form, {
      bron: "offerte-audit",
      successMessage:
        "Bedankt, je aanvraag is binnen. We sturen je binnen 1 werkdag een offerte op maat. " +
        "Wil je iets aanvullen? Beantwoord gewoon onze mail.",
      onSuccess: function () {
        resetUrls(); // extra URL-regels weg, eerste regel leeg
        update(); // formulier is gereset, blokken weer in beginstand
      }
    });
  });
})();

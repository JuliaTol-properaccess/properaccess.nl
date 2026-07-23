/**
 * Intakeformulier Proper Access.
 * - Toont en verbergt voorwaardelijke blokken op basis van de antwoorden.
 * - Beheert het required-attribuut zodat verborgen velden nooit blokkeren.
 * - Wist verborgen velden zodat er geen oude waarden meegestuurd worden.
 * - Zet de opleverdatum standaard 4 weken vooruit.
 * - Verstuurt via de gedeelde paFormSubmit-helper naar de intake-Worker.
 */
(function () {
  "use strict";

  var INTAKE_ENDPOINT = "https://properaccess-intake.juliatol.workers.dev/submit";
  var DOORLOOPTIJD_DAGEN = 28; // normale doorlooptijd: 4 weken

  var form = document.getElementById("intake-form");
  if (!form) return;

  var conds = Array.prototype.slice.call(form.querySelectorAll(".intake-cond"));
  var allInputs = Array.prototype.slice.call(
    form.querySelectorAll("input, textarea, select")
  );

  // ── Opleverdatum standaard op vandaag + 4 weken, minimaal vandaag ──
  var dateField = form.querySelector('input[name="opleverdatum"]');
  if (dateField) {
    var today = new Date();
    var deadline = new Date();
    deadline.setDate(today.getDate() + DOORLOOPTIJD_DAGEN);
    dateField.min = toISO(today);
    dateField.value = toISO(deadline);
  }

  function toISO(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

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
    return fieldValue(name) === val;
  }

  // ── Zichtbaar als dit blok en alle bovenliggende blokken voldoen ──
  function isVisible(condEl) {
    var el = condEl;
    while (el) {
      if (el.classList && el.classList.contains("intake-cond")) {
        if (!matches(el)) return false;
      }
      el = el.parentElement;
    }
    return true;
  }

  function inputVisible(input) {
    var c = input.closest(".intake-cond");
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

    window.paFormSubmit(form, {
      bron: "intake",
      endpoint: INTAKE_ENDPOINT,
      successMessage:
        form.getAttribute("data-success-message") ||
        "Bedankt, je intake is binnen. We hebben je een bevestiging gemaild met een " +
        "samenvatting van je antwoorden. Wil je iets aanvullen of wijzigen? Beantwoord die mail gewoon.",
      onSuccess: function () {
        update(); // formulier is gereset, blokken weer in beginstand
      }
    });
  });
})();

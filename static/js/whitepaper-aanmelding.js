/**
 * Inschrijfformulier voor de whitepaper (layouts/shortcodes/whitepaper-aanmelding.html).
 *
 * - Controleert het e-mailadres zelf en zet de foutmelding bij het veld (3.3.1), met
 *   aria-invalid en de focus terug op het veld.
 * - Verstuurt via paFormSubmit (form-submit.js) naar de pipedrive-forms-Worker.
 * - Zet na succes de downloadlink in het statusgebied en geeft hem de focus.
 */
(function () {
  "use strict";
  if (window.__wpaGeladen) return;
  window.__wpaGeladen = true;

  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function foutBijVeld(veld, melding) {
    var fout = document.getElementById(veld.id + "-fout");
    if (melding) {
      veld.setAttribute("aria-invalid", "true");
      fout.textContent = melding;
      fout.hidden = false;
    } else {
      veld.removeAttribute("aria-invalid");
      fout.textContent = "";
      fout.hidden = true;
    }
  }

  function controleer(veld) {
    var waarde = veld.value.trim();
    if (!waarde) return "Vul je e-mailadres in.";
    if (!EMAIL.test(waarde)) return "Dit e-mailadres is niet compleet. Een e-mailadres ziet eruit als naam@organisatie.nl.";
    return "";
  }

  function toonDownload(form) {
    var status = form.querySelector('[role="status"]');
    status.className = "wpa__status wpa__status--klaar";
    status.textContent = "";
    var tekst = document.createElement("p");
    tekst.textContent = "Dank je wel. Je kunt de whitepaper nu downloaden.";
    var link = document.createElement("a");
    link.href = form.getAttribute("data-pdf");
    link.className = "wpa__download";
    link.setAttribute("download", "");
    link.textContent = "Download Toegankelijke content voor webredacties (pdf, 5 MB)";
    status.appendChild(tekst);
    status.appendChild(link);
    link.focus();
  }

  function koppel(form) {
    var email = form.querySelector('input[name="email"]');

    email.addEventListener("input", function () {
      if (email.getAttribute("aria-invalid") === "true" && !controleer(email)) foutBijVeld(email, "");
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var melding = controleer(email);
      foutBijVeld(email, melding);
      if (melding) {
        email.focus();
        return;
      }
      email.value = email.value.trim();
      if (typeof window.paFormSubmit !== "function") return;
      window.paFormSubmit(form, {
        bron: form.getAttribute("data-bron"),
        successMessage: "Dank je wel. Je kunt de whitepaper nu downloaden.",
        errorMessage: "Het versturen is niet gelukt. Probeer het opnieuw, of mail naar info@properaccess.nl.",
        onSuccess: function () {
          toonDownload(form);
        },
      });
    });
  }

  function start() {
    var formulieren = document.querySelectorAll("[data-wpa-form]");
    for (var i = 0; i < formulieren.length; i++) koppel(formulieren[i]);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

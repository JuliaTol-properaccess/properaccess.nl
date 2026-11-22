/**
 * Offerteformulier in drie stappen (layouts/diensten/offerte.html).
 *
 * Stap 1 (naam, e-mail) gaat meteen naar de Worker met fase "aanvraag". Pas als dat
 * gelukt is, verschijnen stap 2 en 3. Die gaan als tweede inzending met fase
 * "aanvulling", met dezelfde naam en hetzelfde e-mailadres, zodat de twee mails bij
 * elkaar te zoeken zijn.
 *
 * Een URL uit het hero-formulier op de homepagina (?url=...) staat klaar in stap 2,
 * en gaat ook al als verborgen veld mee in stap 1.
 */
(function () {
  "use strict";

  var form1 = document.getElementById("ho-form-1");
  var form2 = document.getElementById("ho-form-2");
  if (!form1 || !form2) return;

  var urlVeld = document.getElementById("url");
  var urlParam = new URLSearchParams(window.location.search).get("url");
  if (urlParam) {
    urlVeld.value = urlParam;
    document.getElementById("ho-url-1").value = urlParam;
  }

  function zetStap(actief, alles) {
    for (var n = 1; n <= 3; n++) {
      var li = document.getElementById("ho-stap-" + n);
      var klaar = alles || n < actief;
      if (n === actief && !alles) li.setAttribute("aria-current", "step");
      else li.removeAttribute("aria-current");
      li.classList.toggle("ho-voortgang__stap--klaar", klaar);
      li.querySelector(".ho-voortgang__klaar").hidden = !klaar;
    }
  }

  function verstuur(form, opts) {
    if (typeof window.paFormSubmit !== "function") {
      var status = form.querySelector('[role="status"]');
      status.textContent = "Er ging iets mis. Mail ons op info@properaccess.nl.";
      status.className = "ho-status pa-form__status--error";
      return;
    }
    window.paFormSubmit(form, opts);
  }

  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    var naam = document.getElementById("ho-naam").value;
    var email = document.getElementById("ho-email").value;

    verstuur(form1, {
      bron: "offerte-audit",
      successMessage: "Je aanvraag is binnen. Je hoort binnen 1 werkdag van ons. Vertel je hieronder meer over je project, dan wordt de offerte preciezer.",
      errorMessage: "Je aanvraag is niet verstuurd. Probeer het opnieuw, of mail Phi op phi@properaccess.nl.",
      onSuccess: function () {
        // paFormSubmit leegt het formulier na verzending; zet de gegevens terug.
        document.getElementById("ho-naam").value = naam;
        document.getElementById("ho-email").value = email;
        document.getElementById("ho-naam-2").value = naam;
        document.getElementById("ho-email-2").value = email;
        if (urlParam) document.getElementById("ho-url-1").value = urlParam;

        document.getElementById("ho-knop-1").hidden = true;
        var na = document.querySelectorAll(".na-stap-1");
        for (var i = 0; i < na.length; i++) na[i].hidden = false;
        zetStap(2, false);
        urlVeld.focus();
      },
    });
  });

  form2.addEventListener("submit", function (e) {
    e.preventDefault();
    verstuur(form2, {
      bron: "offerte-audit",
      successMessage: "Dank je. We maken je offerte en sturen hem binnen 1 werkdag.",
      errorMessage: "Je aanvulling is niet verstuurd. Probeer het opnieuw, of mail Phi op phi@properaccess.nl.",
      onSuccess: function () {
        document.getElementById("ho-knop-2").hidden = true;
        zetStap(3, true);
      },
    });
  });
})();

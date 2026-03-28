/**
 * Shared form submission utility for Proper Access.
 * Posts form data as JSON to the pipedrive-forms Worker.
 *
 * Usage:
 *   paFormSubmit(formElement, {
 *     bron: 'nieuwsbrief',
 *     onSuccess: function() { ... },
 *     onError: function(msg) { ... },
 *     successMessage: 'Bedankt!',
 *     errorMessage: 'Er ging iets mis.'
 *   });
 */
(function () {
  "use strict";

  var WORKER_URL = "https://pipedrive-forms.juliatol.workers.dev/submit";
  var FORMSPREE_URL = "https://formspree.io/f/xjgeyqej";

  window.paFormSubmit = function (form, opts) {
    if (!form || form._paSubmitting) return;

    opts = opts || {};
    form._paSubmitting = true;

    var btn = form.querySelector('button[type="submit"]');
    var btnText = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Verzenden...";
    }

    // Collect form data
    var data = { bron: opts.bron || "onbekend" };
    var inputs = form.querySelectorAll("input, textarea, select");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.name && input.type !== "submit") {
        data[input.name] = input.value;
      }
    }

    // Send to Worker (Pipedrive) — primary
    var workerRequest = fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then(function (result) {
        if (!result.ok) throw new Error(result.error || "Unknown error");
      });

    // Send to Formspree (email notification) — fire and forget
    var title = data.bron || "Website formulier";
    var formspreeData = {
      _subject: title + " — " + (data.naam || data.email),
      naam: data.naam || "–",
      email: data.email || "–",
      bron: data.bron || "–",
      bericht: data.bericht || "–",
    };
    // Include quiz results as a readable message
    if (data.quiz_score) {
      var quizLabel = (data.quiz_type || data.bron || "Quiz").replace("quiz ", "").replace("quiz", "algemeen");
      formspreeData._subject = "Quiz " + quizLabel + " — " + data.email + " — score: " + data.quiz_score;
      formspreeData.bericht =
        "Quiz: " + quizLabel + "\n" +
        "Score: " + data.quiz_score + " (" + (data.quiz_correct || "–") + " van " + (data.quiz_total || "–") + " vragen correct)\n" +
        "E-mail: " + data.email;
    }
    fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(formspreeData),
    }).catch(function () { /* email failure is non-blocking */ });

    // Handle Worker result
    workerRequest
      .then(function () {
        form.reset();
        showStatus(form, opts.successMessage || "Verstuurd! We nemen contact op.", "success");
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submission',
            form_bron: data.bron || 'onbekend'
          });
        }
        if (opts.onSuccess) opts.onSuccess();
      })
      .catch(function () {
        showStatus(form, opts.errorMessage || "Er ging iets mis. Probeer het later opnieuw.", "error");
        if (opts.onError) opts.onError();
      })
      .finally(function () {
        form._paSubmitting = false;
        if (btn) {
          btn.disabled = false;
          btn.textContent = btnText;
        }
      });
  };

  function showStatus(form, message, type) {
    var status = form.querySelector('[role="status"]');
    if (!status) {
      status = document.createElement("div");
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }
    status.textContent = message;
    status.className = "pa-form__status pa-form__status--" + type;
  }
})();

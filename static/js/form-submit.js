/**
 * Shared form submission utility for Proper Access.
 * Posts form data as JSON to the CRM via Cloudflare Worker.
 *
 * Usage:
 *   paFormSubmit(formElement, {
 *     bron: 'nieuwsbrief',
 *     endpoint: 'https://...workers.dev/submit', // optioneel, standaard de CRM-Worker
 *     onSuccess: function() { ... },
 *     onError: function(msg) { ... },
 *     successMessage: 'Bedankt!',
 *     errorMessage: 'Er ging iets mis.'
 *   });
 */
(function () {
  "use strict";

  var WORKER_URL = "https://pipedrive-forms.juliatol.workers.dev/submit";

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

    // Send to Worker — handles CRM, the notification email to Proper Access,
    // and the quiz follow-up email, all server-side via AhaSend (EU).
    var workerRequest = fetch(opts.endpoint || WORKER_URL, {
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

    // Handle Worker result
    workerRequest
      .then(function () {
        form.reset();
        showStatus(form, opts.successMessage || "Verstuurd! We nemen contact op.", "success");
        if (window.plausible) {
          window.plausible('form_submission', {
            props: { form_bron: data.bron || 'onbekend' }
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

/**
 * Token gate — Proper Access tools
 * Validates trial tokens via the auth Worker.
 * Tokens can be provided via URL parameter (?token=pa_xxx) or manual entry.
 * Valid tokens are stored in localStorage for subsequent visits.
 */
(function () {
  "use strict";

  var AUTH_URL = "https://tool-auth.juliatol.workers.dev";
  var TOKEN_KEY = "pa-tool-token";

  var gate = document.getElementById("passwordGate");
  var content = document.getElementById("toolContent");
  var form = document.getElementById("passwordForm");
  var error = document.getElementById("gateError");
  var input = document.getElementById("gatePassword");

  if (!gate || !content) return;

  // Override gate text for token-based auth
  var gateText = gate.querySelector(".tool-pdf__gate-text");
  if (gateText) {
    gateText.innerHTML = 'Voer je toegangscode in om deze tool te gebruiken.';
  }

  // Add trial request form below the gate form
  var trialDiv = document.createElement("div");
  trialDiv.className = "tool-pdf__gate-pipedrive";
  trialDiv.innerHTML = '<p class="tool-pdf__gate-trial-text">Nog geen toegangscode? Vraag een gratis proefperiode aan:</p>' +
    '<form id="trial-form" class="pa-form" onsubmit="event.preventDefault(); paFormSubmit(this, { bron: \'tool-proefperiode\', successMessage: \'Aanvraag ontvangen! We nemen contact op.\' });">' +
    '<input type="text" name="_gotcha" style="display:none" aria-hidden="true" tabindex="-1" />' +
    '<div class="pa-form__row">' +
    '<label for="trial-email" class="sr-only">E-mailadres</label>' +
    '<input type="email" id="trial-email" name="email" required autocomplete="email" placeholder="Je e-mailadres" class="pa-form__input" />' +
    '<button type="submit" class="pa-form__btn">Aanvragen</button>' +
    '</div>' +
    '<div role="status" aria-live="polite"></div>' +
    '</form>';
  gate.appendChild(trialDiv);
  if (input) {
    input.type = "text";
    input.placeholder = "Toegangscode";
    input.autocomplete = "off";
  }
  var gateBtn = gate.querySelector(".tool-pdf__gate-btn");
  if (gateBtn) gateBtn.textContent = "Toegang";

  function unlock(token) {
    gate.hidden = true;
    content.hidden = false;
    // Make token available to tool scripts for API calls
    window.__PA_TOKEN = token;
  }

  function showError(msg) {
    if (error) {
      error.textContent = msg;
      error.hidden = false;
    }
  }

  function hideError() {
    if (error) error.hidden = true;
  }

  function validateToken(token) {
    hideError();

    fetch(AUTH_URL + "/validate?token=" + encodeURIComponent(token))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.valid) {
          try { localStorage.setItem(TOKEN_KEY, token); } catch (e) { /* private */ }
          unlock(token);

          // Clean token from URL if it was a parameter
          if (urlToken) {
            history.replaceState(null, "", window.location.pathname);
          }
        } else {
          try { localStorage.removeItem(TOKEN_KEY); } catch (e) { /* */ }

          if (data.reason === "expired") {
            showError("Je proefperiode is verlopen. Neem contact op met Proper Access voor een abonnement.");
          } else {
            showError("Ongeldige toegangscode. Controleer de code en probeer het opnieuw.");
          }

          if (input) {
            input.value = "";
            input.focus();
          }
        }
      })
      .catch(function () {
        showError("Kan verbinding niet maken. Probeer het later opnieuw.");
      });
  }

  // Check URL parameter
  var urlParams = new URLSearchParams(window.location.search);
  var urlToken = urlParams.get("token");

  // Check localStorage
  var storedToken = null;
  try { storedToken = localStorage.getItem(TOKEN_KEY); } catch (e) { /* */ }

  var autoToken = urlToken || storedToken;

  if (autoToken) {
    // Show loading state while validating
    if (gateText) gateText.textContent = "Toegang controleren...";
    if (form) form.hidden = true;
    validateToken(autoToken);
  }

  // Manual entry form
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!input) return;
      var token = input.value.trim();
      if (token) validateToken(token);
    });
  }
})();

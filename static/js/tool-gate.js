/**
 * Password gate — Proper Access tools
 * Simple password protection for locked tools.
 * Valid password is stored in localStorage for subsequent visits.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "pa-tool-access";
  var INTERNAL_TOKEN = "pa_internal_site_access";

  var gate = document.getElementById("passwordGate");
  var content = document.getElementById("toolContent");
  var form = document.getElementById("passwordForm");
  var error = document.getElementById("gateError");
  var input = document.getElementById("gatePassword");

  if (!gate || !content) return;

  function simpleHash(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return hash.toString(36);
  }

  var EXPECTED = simpleHash("Vrijdag2702!");

  function unlock(token) {
    gate.hidden = true;
    content.hidden = false;
    if (token) window.__PA_TOKEN = token;
    try { localStorage.setItem(STORAGE_KEY, EXPECTED); } catch (e) { /* private */ }
  }

  function showError() {
    if (error) {
      error.textContent = "Onjuist wachtwoord. Probeer het opnieuw.";
      error.hidden = false;
    }
    if (input) {
      input.value = "";
      input.focus();
    }
  }

  // Check for valid token from /tools/ page
  var TOKEN_KEY = "pa-tool-token";
  var AUTH_URL = "https://tool-auth.juliatol.workers.dev";
  var storedToken = null;
  try { storedToken = localStorage.getItem(TOKEN_KEY); } catch (e) { /* */ }

  // Also check URL param
  try {
    var urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) storedToken = urlToken;
  } catch (e) { /* */ }

  // Check localStorage for previous access (password or token)
  try {
    if (localStorage.getItem(STORAGE_KEY) === EXPECTED) {
      unlock(storedToken || INTERNAL_TOKEN);
      return;
    }
  } catch (e) { /* */ }

  if (storedToken) {
    fetch(AUTH_URL + "/validate?token=" + encodeURIComponent(storedToken))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.valid) {
          try { localStorage.setItem(TOKEN_KEY, storedToken); } catch (e) { /* */ }
          unlock(storedToken);
        }
      })
      .catch(function () { /* keep locked */ });
  }

  // Manual entry form
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!input) return;
      var val = input.value.trim();

      // Check password first
      if (simpleHash(val) === EXPECTED) {
        unlock(INTERNAL_TOKEN);
        return;
      }

      // Try as token
      if (val.startsWith("pa_")) {
        fetch(AUTH_URL + "/validate?token=" + encodeURIComponent(val))
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (data.valid) {
              try { localStorage.setItem(TOKEN_KEY, val); } catch (e) { /* */ }
              unlock(val);
            } else {
              showError();
            }
          })
          .catch(function () { showError(); });
        return;
      }

      showError();
    });
  }
})();

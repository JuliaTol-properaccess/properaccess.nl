/**
 * Password gate — Proper Access tools
 * Lichte toegangsdrempel voor afgeschermde tools.
 *
 * Let op: dit is geen harde beveiliging. De toolinhoud staat in de pagina en is
 * voor wie wil technisch bereikbaar. De gate houdt casual bezoekers tegen.
 * Echte geheimen of klantdata horen hier dus niet achter.
 *
 * Validatie gebeurt server-side bij de tool-auth Worker:
 *   - een token (pa_...) wordt gecheckt via /validate
 *   - een wachtwoord wordt gecheckt via /unlock, die bij succes een token teruggeeft
 * Er staat geen wachtwoord of vast token meer in deze publieke JS.
 */
(function () {
  "use strict";

  var gate = document.getElementById("passwordGate");
  var content = document.getElementById("toolContent");
  var form = document.getElementById("passwordForm");
  var error = document.getElementById("gateError");
  var input = document.getElementById("gatePassword");

  if (!gate || !content) return;

  var TOKEN_KEY = "pa-tool-token";
  var AUTH_URL = "https://tool-auth.juliatol.workers.dev";

  function unlock(token) {
    gate.hidden = true;
    content.hidden = false;
    if (token) {
      window.__PA_TOKEN = token;
      try { localStorage.setItem(TOKEN_KEY, token); } catch (e) { /* private mode */ }
    }
  }

  function showError() {
    if (error) {
      error.textContent = "Onjuist wachtwoord of token. Probeer het opnieuw.";
      error.hidden = false;
    }
    if (input) {
      input.value = "";
      input.focus();
    }
  }

  function validateToken(token) {
    return fetch(AUTH_URL + "/validate?token=" + encodeURIComponent(token))
      .then(function (r) { return r.json(); })
      .then(function (data) { return !!data.valid; })
      .catch(function () { return false; });
  }

  // Token uit URL-param heeft voorrang, daarna uit eerdere bezoeken.
  var storedToken = null;
  try { storedToken = localStorage.getItem(TOKEN_KEY); } catch (e) { /* */ }
  try {
    var urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) storedToken = urlToken;
  } catch (e) { /* */ }

  if (storedToken) {
    validateToken(storedToken).then(function (ok) {
      if (ok) unlock(storedToken);
    });
  }

  // Handmatige invoer: token (pa_...) of wachtwoord.
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!input) return;
      var val = input.value.trim();
      if (!val) { showError(); return; }

      if (val.indexOf("pa_") === 0) {
        validateToken(val).then(function (ok) {
          if (ok) unlock(val); else showError();
        });
        return;
      }

      // Wachtwoord: server-side checken, krijg een token terug.
      fetch(AUTH_URL + "/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: val }),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.ok && data.token) unlock(data.token); else showError();
        })
        .catch(function () { showError(); });
    });
  }
})();

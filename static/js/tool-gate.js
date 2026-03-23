/**
 * Password gate — Proper Access tools
 * Simple password protection for locked tools.
 * Valid password is stored in localStorage for subsequent visits.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "pa-tool-access";

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

  function unlock() {
    gate.hidden = true;
    content.hidden = false;
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

  // Check localStorage for previous access
  try {
    if (localStorage.getItem(STORAGE_KEY) === EXPECTED) {
      unlock();
      return;
    }
  } catch (e) { /* */ }

  // Manual entry form
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!input) return;
      var val = input.value.trim();
      if (simpleHash(val) === EXPECTED) {
        unlock();
      } else {
        showError();
      }
    });
  }
})();

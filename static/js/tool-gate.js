/**
 * Password gate — Proper Access tools
 * Shared authentication for protected tools.
 */
(function () {
  "use strict";

  var PASSWORD_HASH = "f518387cd0e1cf028d393703834709c0f53fee56e1ea283dbf0f13dcdafc1305";
  var SESSION_KEY = "pa-tool-auth";

  var gate = document.getElementById("passwordGate");
  var content = document.getElementById("toolContent");
  var form = document.getElementById("passwordForm");
  var error = document.getElementById("gateError");

  if (!gate || !content) return;

  function sha256(str) {
    var buf = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", buf).then(function (hash) {
      var arr = new Uint8Array(hash);
      var hex = "";
      for (var i = 0; i < arr.length; i++) {
        hex += arr[i].toString(16).padStart(2, "0");
      }
      return hex;
    });
  }

  function unlock() {
    gate.hidden = true;
    content.hidden = false;
  }

  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    unlock();
  } else {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("gatePassword");
      sha256(input.value).then(function (hash) {
        if (hash === PASSWORD_HASH) {
          sessionStorage.setItem(SESSION_KEY, "1");
          unlock();
        } else {
          error.hidden = false;
          input.value = "";
          input.focus();
        }
      });
    });
  }
})();

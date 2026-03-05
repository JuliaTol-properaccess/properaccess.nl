(function () {
  'use strict';

  // --- Password gate ---
  var PASSWORD_HASH = 'f518387cd0e1cf028d393703834709c0f53fee56e1ea283dbf0f13dcdafc1305';
  var SESSION_KEY = 'pa-academy-auth';

  var gate = document.getElementById('academyGate');
  var content = document.getElementById('academyContent');
  var form = document.getElementById('academyPasswordForm');
  var errorMsg = document.getElementById('academyGateError');

  function sha256(str) {
    var buf = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', buf).then(function (hash) {
      var arr = new Uint8Array(hash);
      var hex = '';
      for (var i = 0; i < arr.length; i++) {
        hex += arr[i].toString(16).padStart(2, '0');
      }
      return hex;
    });
  }

  function unlock() {
    if (gate) gate.hidden = true;
    if (content) content.hidden = false;
  }

  if (gate && content) {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      unlock();
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('academyPassword');
        if (!input) return;

        sha256(input.value).then(function (hash) {
          if (hash === PASSWORD_HASH) {
            sessionStorage.setItem(SESSION_KEY, '1');
            unlock();
          } else {
            if (errorMsg) errorMsg.hidden = false;
            input.value = '';
            input.focus();
          }
        });
      });
    }
  }

  // --- Mobile sidebar toggle ---
  var toggleBtn = document.getElementById('academySidebarToggle');
  var sidebar = document.getElementById('academySidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('academy__sidebar--open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isOpen ? 'Inhoudsopgave verbergen' : 'Inhoudsopgave tonen');
    });

    document.addEventListener('click', function (e) {
      if (
        sidebar.classList.contains('academy__sidebar--open') &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        sidebar.classList.remove('academy__sidebar--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Inhoudsopgave tonen');
      }
    });
  }

  // --- Section accordion ---
  var sectionButtons = document.querySelectorAll('.academy__section-title');

  sectionButtons.forEach(function (btn) {
    var listId = btn.getAttribute('aria-controls');
    var list = listId ? document.getElementById(listId) : null;

    if (!list) return;

    btn.addEventListener('click', function () {
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      list.classList.toggle('academy__section-list--collapsed', isExpanded);
    });
  });

  // --- Block clicks on locked chapters ---
  var lockedItems = document.querySelectorAll('.academy__chapter--locked');

  lockedItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });

})();

(function () {
  'use strict';

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

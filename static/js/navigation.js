(function () {
  function init() {
    var triggers = document.querySelectorAll('[data-submenu-toggle]');
    if (!triggers.length) return;

    var menus = [];

    triggers.forEach(function (trigger) {
      var checkboxId = trigger.getAttribute('data-submenu-toggle');
      var checkbox = document.getElementById(checkboxId);
      var submenuId = trigger.getAttribute('aria-controls');
      var submenu = document.getElementById(submenuId);
      var navItem = trigger.closest('.nav-dropdown');

      if (!checkbox || !submenu) return;

      trigger.setAttribute(
        'aria-expanded',
        checkbox.checked ? 'true' : 'false'
      );

      var open = function () {
        checkbox.checked = true;
        trigger.setAttribute('aria-expanded', 'true');
        if (navItem) navItem.classList.remove('hover-blocked');
      };

      var close = function () {
        checkbox.checked = false;
        trigger.setAttribute('aria-expanded', 'false');
      };

      var toggle = function () {
        checkbox.checked ? close() : open();
      };

      // click / touch
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        toggle();
      });

      // keyboard open
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      // Verwijder hover-blocked zodra de muis het item verlaat
      if (navItem) {
        navItem.addEventListener('mouseleave', function () {
          navItem.classList.remove('hover-blocked');
        });
      }

      menus.push({ trigger: trigger, submenu: submenu, navItem: navItem, close: close });
    });

    /* ---------- GLOBAL FOCUS HANDLER ---------- */
    document.addEventListener('focusin', function (e) {
      var target = e.target;

      menus.forEach(function (m) {
        if (m.trigger.contains(target) || m.submenu.contains(target)) {
          return;
        }
        m.close();
      });
    });

    /* ---------- ESC SLUIT SUBMENU'S ---------- */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;

      var closed = false;
      menus.forEach(function (m) {
        // Sluit zowel JS-geopende als hover-geopende submenu's
        var isExpanded = m.trigger.getAttribute('aria-expanded') === 'true';
        var focusInside = m.trigger.contains(document.activeElement) ||
                          m.submenu.contains(document.activeElement);
        var isHovered = m.navItem && m.navItem.matches(':hover');

        if (isExpanded || focusInside || isHovered) {
          m.close();
          // Blokkeer CSS hover tijdelijk zodat menu echt sluit
          if (m.navItem) m.navItem.classList.add('hover-blocked');
          m.trigger.focus();
          closed = true;
        }
      });

      if (closed) e.preventDefault();
    });

    /* ---------- KLIK BUITEN SLUIT SUBMENU'S ---------- */
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        menus.forEach(function (m) { m.close(); });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
(function () {
  function init() {
    const triggers = document.querySelectorAll('[data-submenu-toggle]');
    if (!triggers.length) return;

    const menus = [];

    triggers.forEach(trigger => {
      const checkboxId = trigger.getAttribute('data-submenu-toggle');
      const checkbox = document.getElementById(checkboxId);
      const submenuId = trigger.getAttribute('aria-controls');
      const submenu = document.getElementById(submenuId);

      if (!checkbox || !submenu) return;

      trigger.setAttribute(
        'aria-expanded',
        checkbox.checked ? 'true' : 'false'
      );

      const open = () => {
        checkbox.checked = true;
        trigger.setAttribute('aria-expanded', 'true');
      };

      const close = () => {
        checkbox.checked = false;
        trigger.setAttribute('aria-expanded', 'false');
      };

      const toggle = () => {
        checkbox.checked ? close() : open();
      };

      // click / touch
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
      });

      // keyboard open
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      menus.push({ trigger, submenu, close });
    });

    /* ---------- GLOBAL FOCUS HANDLER ---------- */
    document.addEventListener('focusin', (e) => {
      const target = e.target;

      menus.forEach(({ trigger, submenu, close }) => {
        if (
          trigger.contains(target) ||
          submenu.contains(target)
        ) {
          return; // focus is inside menu
        }

        close(); // focus is outside → close menu
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
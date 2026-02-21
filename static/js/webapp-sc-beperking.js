(function () {
  "use strict";

  function init() {
    var container = document.getElementById("webapp-sc-beperking");
    if (!container) return;

    var filters = container.querySelectorAll("[data-filter]");
    var items = container.querySelectorAll("[data-beperkingen]");
    var countEl = document.getElementById("webapp-sc__count-number");
    var liveRegion = document.getElementById("webapp-sc__live");
    var principes = container.querySelectorAll(".webapp-sc__principe");
    var richtlijnen = container.querySelectorAll(".webapp-sc__richtlijn");

    function applyFilter(filterValue) {
      var visibleCount = 0;

      // Filter items
      items.forEach(function (item) {
        var beperkingen = JSON.parse(item.getAttribute("data-beperkingen"));
        var matches = filterValue === "alle" || beperkingen.indexOf(filterValue) !== -1;

        item.hidden = !matches;
        if (matches) visibleCount++;
      });

      // Verberg lege richtlijnen
      richtlijnen.forEach(function (rl) {
        var hasVisible = rl.querySelector(".webapp-sc__item:not([hidden])");
        rl.hidden = !hasVisible;
      });

      // Verberg lege principes
      principes.forEach(function (pr) {
        var hasVisible = pr.querySelector(".webapp-sc__item:not([hidden])");
        pr.hidden = !hasVisible;
      });

      // Update teller
      countEl.textContent = visibleCount;

      // Update knop-states
      filters.forEach(function (btn) {
        var isActive = btn.getAttribute("data-filter") === filterValue;
        btn.classList.toggle("webapp-sc__filter--active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      // Screen reader aankondiging
      var filterLabel =
        filterValue === "alle"
          ? "alle beperkingen"
          : container.querySelector('[data-filter="' + filterValue + '"]').textContent.trim();
      liveRegion.textContent = visibleCount + " succescriteria gevonden voor " + filterLabel;
    }

    // Klik-handlers op filterknoppen
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

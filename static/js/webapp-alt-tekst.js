(function () {
  "use strict";

  // SVG illustraties per optie (aria-hidden, puur decoratief)
  var icons = {
    decoratief: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<circle cx="22" cy="26" r="6" fill="#A30D4B" opacity="0.3"/>'
      + '<path d="M4 42 L20 30 L32 38 L44 24 L60 36 L60 52 C60 54.2 58.2 56 56 56 L8 56 C5.8 56 4 54.2 4 52 Z" fill="#A30D4B" opacity="0.15"/>'
      + '<line x1="14" y1="16" x2="50" y2="16" stroke="#1F2937" stroke-width="1" opacity="0.15"/>'
      + '<line x1="14" y1="20" x2="40" y2="20" stroke="#1F2937" stroke-width="1" opacity="0.15"/>'
      + '</svg>',

    informatief: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<rect x="14" y="38" width="8" height="14" rx="1" fill="#004050"/>'
      + '<rect x="26" y="28" width="8" height="24" rx="1" fill="#A30D4B"/>'
      + '<rect x="38" y="20" width="8" height="32" rx="1" fill="#004050"/>'
      + '<rect x="50" y="32" width="8" height="20" rx="1" fill="#1F2937" opacity="0.6"/>'
      + '<line x1="12" y1="52" x2="58" y2="52" stroke="#1F2937" stroke-width="1.5"/>'
      + '<line x1="12" y1="16" x2="12" y2="52" stroke="#1F2937" stroke-width="1.5"/>'
      + '</svg>',

    functioneel: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="8" y="20" width="48" height="24" rx="6" fill="#1F2937"/>'
      + '<circle cx="24" cy="32" r="7" stroke="#ffffff" stroke-width="2" fill="none"/>'
      + '<line x1="29" y1="37" x2="34" y2="42" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>'
      + '<rect x="38" y="28" width="12" height="2" rx="1" fill="#ffffff" opacity="0.6"/>'
      + '<rect x="38" y="33" width="8" height="2" rx="1" fill="#ffffff" opacity="0.4"/>'
      + '<path d="M52 18 L56 14" stroke="#A30D4B" stroke-width="2" stroke-linecap="round"/>'
      + '<path d="M56 18 L56 14 L52 14" stroke="#A30D4B" stroke-width="2" stroke-linecap="round" fill="none"/>'
      + '</svg>',

    logo: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<circle cx="32" cy="28" r="16" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<path d="M24 28 L30 22 L36 28 L30 34 Z" fill="#A30D4B"/>'
      + '<circle cx="38" cy="24" r="4" fill="#004050" opacity="0.6"/>'
      + '<rect x="16" y="50" width="32" height="3" rx="1.5" fill="#1F2937" opacity="0.3"/>'
      + '<rect x="22" y="55" width="20" height="2" rx="1" fill="#1F2937" opacity="0.15"/>'
      + '</svg>',

    tekst: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<text x="14" y="30" font-family="serif" font-size="16" font-weight="700" fill="#A30D4B">Aa</text>'
      + '<text x="14" y="46" font-family="sans-serif" font-size="9" fill="#1F2937" opacity="0.7">Lorem ipsum</text>'
      + '<rect x="36" y="18" width="18" height="10" rx="2" stroke="#004050" stroke-width="1.5" fill="none"/>'
      + '<line x1="39" y1="22" x2="51" y2="22" stroke="#004050" stroke-width="1" opacity="0.5"/>'
      + '<line x1="39" y1="25" x2="47" y2="25" stroke="#004050" stroke-width="1" opacity="0.3"/>'
      + '<rect x="36" y="34" width="18" height="14" rx="2" stroke="#1F2937" stroke-width="1" stroke-dasharray="3 2" fill="none" opacity="0.4"/>'
      + '<line x1="39" y1="39" x2="51" y2="39" stroke="#1F2937" stroke-width="1" opacity="0.2"/>'
      + '<line x1="39" y1="42" x2="48" y2="42" stroke="#1F2937" stroke-width="1" opacity="0.2"/>'
      + '<line x1="39" y1="45" x2="50" y2="45" stroke="#1F2937" stroke-width="1" opacity="0.2"/>'
      + '</svg>',

    ja: '<svg class="webapp-alt__icon webapp-alt__icon--small" aria-hidden="true" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<circle cx="20" cy="20" r="16" stroke="#A30D4B" stroke-width="2" fill="#f5f5f5"/>'
      + '<path d="M13 20 L18 25 L27 16" stroke="#A30D4B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
      + '</svg>',

    nee: '<svg class="webapp-alt__icon webapp-alt__icon--small" aria-hidden="true" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<circle cx="20" cy="20" r="16" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<path d="M15 15 L25 25 M25 15 L15 25" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round"/>'
      + '</svg>',

    // Route 1: info verloren vs puur decoratief
    info_verloren: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<rect x="14" y="38" width="8" height="14" rx="1" fill="#A30D4B"/>'
      + '<rect x="26" y="28" width="8" height="24" rx="1" fill="#004050"/>'
      + '<rect x="38" y="18" width="8" height="34" rx="1" fill="#A30D4B" opacity="0.7"/>'
      + '<circle cx="50" cy="18" r="8" stroke="#A30D4B" stroke-width="2" fill="#ffffff"/>'
      + '<text x="47" y="22" font-family="sans-serif" font-size="12" font-weight="700" fill="#A30D4B">!</text>'
      + '</svg>',

    puur_decoratief: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5" opacity="0.5"/>'
      + '<circle cx="22" cy="26" r="6" fill="#1F2937" opacity="0.1"/>'
      + '<path d="M4 42 L20 30 L32 38 L44 24 L60 36 L60 52 C60 54.2 58.2 56 56 56 L8 56 C5.8 56 4 54.2 4 52 Z" fill="#1F2937" opacity="0.07"/>'
      + '<line x1="18" y1="18" x2="46" y2="46" stroke="#1F2937" stroke-width="1.5" opacity="0.3"/>'
      + '<line x1="46" y1="18" x2="18" y2="46" stroke="#1F2937" stroke-width="1.5" opacity="0.3"/>'
      + '</svg>',

    // Route 2: klikbaar zonder/met tekst
    knop_zonder_tekst: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="12" y="20" width="40" height="24" rx="6" fill="#1F2937"/>'
      + '<circle cx="32" cy="32" r="7" stroke="#ffffff" stroke-width="2" fill="none"/>'
      + '<line x1="37" y1="37" x2="42" y2="42" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>'
      + '</svg>',

    knop_met_tekst: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="8" y="20" width="48" height="24" rx="6" fill="#1F2937"/>'
      + '<circle cx="22" cy="32" r="5" stroke="#ffffff" stroke-width="1.5" fill="none"/>'
      + '<line x1="26" y1="36" x2="29" y2="39" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>'
      + '<rect x="34" y="29" width="16" height="2.5" rx="1" fill="#ffffff" opacity="0.8"/>'
      + '<rect x="34" y="34" width="10" height="2" rx="1" fill="#ffffff" opacity="0.4"/>'
      + '</svg>',

    // Route 2 stap 2: kort vs complex
    kort: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="8" y="12" width="48" height="40" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<rect x="16" y="22" width="32" height="3" rx="1.5" fill="#1F2937" opacity="0.6"/>'
      + '<rect x="16" y="29" width="24" height="3" rx="1.5" fill="#1F2937" opacity="0.4"/>'
      + '<rect x="16" y="36" width="28" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>'
      + '</svg>',

    complex: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="4" y="8" width="56" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<rect x="12" y="40" width="6" height="10" rx="1" fill="#004050"/>'
      + '<rect x="20" y="34" width="6" height="16" rx="1" fill="#A30D4B"/>'
      + '<rect x="28" y="28" width="6" height="22" rx="1" fill="#004050"/>'
      + '<rect x="36" y="38" width="6" height="12" rx="1" fill="#A30D4B" opacity="0.7"/>'
      + '<rect x="44" y="22" width="6" height="28" rx="1" fill="#1F2937" opacity="0.6"/>'
      + '<rect x="52" y="30" width="6" height="20" rx="1" fill="#004050" opacity="0.5"/>'
      + '<line x1="10" y1="50" x2="58" y2="50" stroke="#1F2937" stroke-width="1"/>'
      + '<line x1="10" y1="14" x2="10" y2="50" stroke="#1F2937" stroke-width="1"/>'
      + '<rect x="12" y="14" width="20" height="3" rx="1" fill="#1F2937" opacity="0.3"/>'
      + '<rect x="12" y="19" width="14" height="2" rx="1" fill="#1F2937" opacity="0.15"/>'
      + '</svg>',

    // Route 4: logo statisch vs link
    logo_statisch: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<circle cx="32" cy="28" r="14" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<path d="M26 28 L30 24 L34 28 L30 32 Z" fill="#A30D4B"/>'
      + '<circle cx="36" cy="25" r="3" fill="#004050" opacity="0.6"/>'
      + '<rect x="18" y="48" width="28" height="3" rx="1.5" fill="#1F2937" opacity="0.3"/>'
      + '</svg>',

    logo_link: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<circle cx="28" cy="28" r="14" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<path d="M22 28 L26 24 L30 28 L26 32 Z" fill="#A30D4B"/>'
      + '<circle cx="32" cy="25" r="3" fill="#004050" opacity="0.6"/>'
      + '<path d="M48 16 L54 10" stroke="#A30D4B" stroke-width="2" stroke-linecap="round"/>'
      + '<path d="M54 16 L54 10 L48 10" stroke="#A30D4B" stroke-width="2" stroke-linecap="round" fill="none"/>'
      + '<line x1="42" y1="22" x2="52" y2="12" stroke="#A30D4B" stroke-width="1" stroke-dasharray="3 2"/>'
      + '<rect x="14" y="48" width="28" height="3" rx="1.5" fill="#1F2937" opacity="0.3"/>'
      + '</svg>',

    // Route 5: HTML tekst vs kunst
    html_tekst: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="8" y="12" width="48" height="40" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<text x="14" y="30" font-family="monospace" font-size="10" fill="#004050">&lt;p&gt;</text>'
      + '<rect x="14" y="34" width="28" height="2.5" rx="1" fill="#1F2937" opacity="0.5"/>'
      + '<rect x="14" y="39" width="20" height="2.5" rx="1" fill="#1F2937" opacity="0.3"/>'
      + '<text x="14" y="50" font-family="monospace" font-size="10" fill="#004050">&lt;/p&gt;</text>'
      + '</svg>',

    kunst: '<svg class="webapp-alt__icon" aria-hidden="true" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
      + '<rect x="8" y="8" width="48" height="48" rx="4" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/>'
      + '<text x="16" y="30" font-family="serif" font-size="11" font-style="italic" fill="#A30D4B">Vrijheid</text>'
      + '<text x="20" y="44" font-family="serif" font-size="11" font-style="italic" fill="#A30D4B">voor</text>'
      + '<text x="16" y="52" font-family="serif" font-size="8" font-style="italic" fill="#004050" opacity="0.7">iedereen</text>'
      + '<path d="M44 14 Q52 20 48 28 Q44 36 50 42" stroke="#A30D4B" stroke-width="1" fill="none" opacity="0.3"/>'
      + '</svg>'
  };

  function init() {
    var container = document.getElementById("webapp-alt__app");
    if (!container) return;

    var dataEl = document.getElementById("webapp-alt-data");
    if (!dataEl) return;

    var data = JSON.parse(dataEl.textContent);
    var nodes = {};
    var history = [];
    var liveRegion = document.getElementById("webapp-alt__live");

    // Bouw lookup map van nodes
    data.nodes.forEach(function (node) {
      nodes[node.id] = node;
    });

    function announce(text) {
      if (liveRegion) {
        liveRegion.textContent = "";
        setTimeout(function () {
          liveRegion.textContent = text;
        }, 100);
      }
    }

    function getIconForOption(option) {
      if (option.icon && icons[option.icon]) {
        return icons[option.icon];
      }
      return "";
    }

    function renderQuestion(node) {
      var html = "";

      // Navigatie
      html += '<div class="webapp-alt__nav">';
      if (history.length > 0) {
        html += '<button class="webapp-alt__back" type="button" data-action="back">';
        html += '<span aria-hidden="true">\u2190</span> Terug';
        html += '</button>';
      }
      html += '<span class="webapp-alt__stap">Stap ' + (history.length + 1) + '</span>';
      html += '</div>';

      // Vraag
      html += '<h3 class="webapp-alt__vraag">' + escapeHtml(node.title) + '</h3>';

      if (node.description) {
        html += '<p class="webapp-alt__beschrijving">' + escapeHtml(node.description) + '</p>';
      }

      // Opties als kaarten
      var hasIcons = node.options.some(function (o) { return o.icon && icons[o.icon]; });
      html += '<div class="webapp-alt__opties' + (hasIcons ? ' webapp-alt__opties--with-icons' : '') + '" role="group" aria-label="Keuzemogelijkheden">';
      node.options.forEach(function (option) {
        var icon = getIconForOption(option);
        html += '<button class="webapp-alt__optie' + (icon ? ' webapp-alt__optie--has-icon' : '') + '" type="button" data-next="' + option.next + '">';
        if (icon) {
          html += '<span class="webapp-alt__optie-icon">' + icon + '</span>';
        }
        html += '<span class="webapp-alt__optie-tekst">';
        html += '<span class="webapp-alt__optie-label">' + escapeHtml(option.label) + '</span>';
        if (option.description) {
          html += '<span class="webapp-alt__optie-desc">' + escapeHtml(option.description) + '</span>';
        }
        html += '</span>';
        html += '<span class="webapp-alt__optie-pijl" aria-hidden="true">\u2192</span>';
        html += '</button>';
      });
      html += '</div>';

      return html;
    }

    function renderResult(node) {
      var html = "";

      // Navigatie
      html += '<div class="webapp-alt__nav">';
      if (history.length > 0) {
        html += '<button class="webapp-alt__back" type="button" data-action="back">';
        html += '<span aria-hidden="true">\u2190</span> Terug';
        html += '</button>';
      }
      html += '<span class="webapp-alt__stap">Resultaat</span>';
      html += '</div>';

      // Resultaat
      html += '<div class="webapp-alt__resultaat">';
      html += '<h3 class="webapp-alt__resultaat-titel">' + escapeHtml(node.title) + '</h3>';
      html += '<p class="webapp-alt__resultaat-advies">' + node.advice + '</p>';

      // Oplossingen
      if (node.solutions && node.solutions.length > 0) {
        html += '<div class="webapp-alt__oplossingen">';
        html += '<h4 class="webapp-alt__oplossingen-titel">Oplossing</h4>';
        html += '<ul class="webapp-alt__oplossingen-lijst">';
        node.solutions.forEach(function (s) {
          html += '<li>' + s + '</li>';
        });
        html += '</ul>';
        html += '</div>';
      }

      // Voorbeelden
      if (node.examples && node.examples.length > 0) {
        html += '<div class="webapp-alt__voorbeelden">';
        html += '<h4 class="webapp-alt__voorbeelden-titel">Voorbeelden</h4>';
        html += '<ul class="webapp-alt__voorbeelden-lijst">';
        node.examples.forEach(function (e) {
          html += '<li>' + e + '</li>';
        });
        html += '</ul>';
        html += '</div>';
      }

      html += '</div>';

      // Tips
      if (data.tips && data.tips.length > 0) {
        html += '<details class="webapp-alt__tips">';
        html += '<summary class="webapp-alt__tips-samenvatting">Algemene schrijfregels voor goede alt-tekst</summary>';
        html += '<ul class="webapp-alt__tips-lijst">';
        data.tips.forEach(function (tip) {
          html += '<li>' + escapeHtml(tip) + '</li>';
        });
        html += '</ul>';
        html += '</details>';
      }

      // Opnieuw beginnen
      html += '<button class="webapp-alt__opnieuw" type="button" data-action="restart">';
      html += 'Opnieuw beginnen';
      html += '</button>';

      return html;
    }

    function showNode(nodeId) {
      var node = nodes[nodeId];
      if (!node) return;

      var html;
      if (node.type === "question") {
        html = renderQuestion(node);
      } else {
        html = renderResult(node);
      }

      container.innerHTML = html;

      // Focus op de vraag/titel voor screen readers
      var heading = container.querySelector("h3");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }

      announce(node.title);
    }

    function escapeHtml(text) {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode(text));
      return div.innerHTML;
    }

    // Event delegation
    container.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;

      var action = btn.getAttribute("data-action");
      var next = btn.getAttribute("data-next");

      if (action === "back" && history.length > 0) {
        var prev = history.pop();
        showNode(prev);
      } else if (action === "restart") {
        history = [];
        showNode("start");
      } else if (next) {
        history.push(getCurrentNodeId());
        showNode(next);
      }
    });

    function getCurrentNodeId() {
      var heading = container.querySelector("h3");
      if (!heading) return "start";
      var title = heading.textContent;
      for (var id in nodes) {
        if (nodes[id].title === title) return id;
      }
      return "start";
    }

    // Start
    showNode("start");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

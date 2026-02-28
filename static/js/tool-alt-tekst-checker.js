/**
 * Alt-tekst Checker — Proper Access
 * Calls Cloudflare Worker to analyze image alt texts of a URL.
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE — pas deze URL aan na deployment
  // =============================================
  var WORKER_URL = "https://alt-tekst-checker.juliatol.workers.dev/";

  var form = document.getElementById("checkerForm");
  var urlInput = document.getElementById("urlInput");
  var submitBtn = document.getElementById("submitBtn");
  var output = document.getElementById("output");
  var cta = document.getElementById("altCta");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var url = urlInput.value.trim();
    if (!url) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Bezig...";
    output.innerHTML = '<p class="tool-alt__loading">Pagina ophalen en analyseren...</p>';

    fetch(WORKER_URL + "?url=" + encodeURIComponent(url))
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.error) {
          output.innerHTML =
            '<div class="tool-alt__error" role="alert">' +
            escapeHtml(data.error) +
            "</div>";
          return;
        }
        output.innerHTML = renderResults(data);
        if (cta) cta.style.display = "";
      })
      .catch(function () {
        output.innerHTML =
          '<div class="tool-alt__error" role="alert">Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.</div>';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Controleer";
      });
  });

  // ============================================================
  // Render results
  // ============================================================

  function renderResults(data) {
    var s = data.summary;
    var html = "";

    // Summary cards
    html += '<div class="tool-alt__summary">';
    html += summaryCard(s.imgTotal, "Afbeeldingen", summarizeImages(s));
    html += summaryCard(s.svgTotal, "SVG\u2019s", summarizeSvgs(s));
    html += summaryCard(s.iconTotal, "Iconen", summarizeIcons(s));
    html += "</div>";

    // Images section
    if (data.images.length > 0) {
      html += renderSection("Afbeeldingen", "img", data.images, renderImageRow);
    }

    // SVGs section
    if (data.svgs.length > 0) {
      html += renderSection("SVG\u2019s", "svg", data.svgs, renderSvgRow);
    }

    // Icons section
    if (data.icons.length > 0) {
      html += renderSection("Iconen", "icon", data.icons, renderIconRow);
    }

    // Nothing found
    if (data.images.length === 0 && data.svgs.length === 0 && data.icons.length === 0) {
      html += '<p class="tool-alt__empty">Geen afbeeldingen, SVG\u2019s of iconen gevonden op deze pagina.</p>';
    }

    return html;
  }

  function summaryCard(total, label, detail) {
    return '<div class="tool-alt__summary-card">' +
      '<span class="tool-alt__summary-count">' + total + "</span>" +
      '<span class="tool-alt__summary-label">' + label + "</span>" +
      '<span class="tool-alt__summary-detail">' + detail + "</span>" +
      "</div>";
  }

  function summarizeImages(s) {
    if (s.imgTotal === 0) return "Geen gevonden";
    var parts = [];
    if (s.imgPresent > 0) parts.push(s.imgPresent + " aanwezig");
    if (s.imgMissing > 0) parts.push(s.imgMissing + " ontbreekt");
    if (s.imgDecorative > 0) parts.push(s.imgDecorative + " decoratief");
    if (s.imgEmptyInteractive > 0) parts.push(s.imgEmptyInteractive + " leeg in link/knop");
    return parts.join(", ");
  }

  function summarizeSvgs(s) {
    if (s.svgTotal === 0) return "Geen gevonden";
    var parts = [];
    if (s.svgGood > 0) parts.push(s.svgGood + " goed");
    if (s.svgMissing > 0) parts.push(s.svgMissing + " ontbreekt");
    if (s.svgDecorative > 0) parts.push(s.svgDecorative + " decoratief");
    if (s.svgRedundant > 0) parts.push(s.svgRedundant + " overbodig");
    return parts.join(", ");
  }

  function summarizeIcons(s) {
    if (s.iconTotal === 0) return "Geen gevonden";
    var parts = [];
    if (s.iconGood > 0) parts.push(s.iconGood + " goed");
    if (s.iconMissing > 0) parts.push(s.iconMissing + " ontbreekt");
    if (s.iconHidden > 0) parts.push(s.iconHidden + " verborgen");
    return parts.join(", ");
  }

  // ============================================================
  // Render sections
  // ============================================================

  function renderSection(title, type, items, rowRenderer) {
    var html = '<div class="tool-alt__section">';
    html += '<h2 class="tool-alt__section-title">' + title +
      ' <span class="tool-alt__section-count">' + items.length + "</span></h2>";

    html += '<div class="tool-alt__table-wrap"><table class="tool-alt__table">';

    if (type === "img") {
      html += "<thead><tr><th>Afbeelding</th><th>Alt-tekst</th><th>Locatie</th><th>Context</th></tr></thead>";
    } else if (type === "svg") {
      html += "<thead><tr><th>Naam</th><th>Locatie</th><th>Context</th></tr></thead>";
    } else {
      html += "<thead><tr><th>Icoon</th><th>Naam</th><th>Locatie</th><th>Context</th></tr></thead>";
    }

    html += "<tbody>";
    for (var i = 0; i < items.length; i++) {
      html += rowRenderer(items[i]);
    }
    html += "</tbody></table></div>";
    html += "</div>";

    return html;
  }

  function renderImageRow(img) {
    var altDisplay = renderAltText(img.alt, img.ariaLabel, img.status);
    var location = renderLocation(img.landmark, img.nearestHeading);
    var ctx = renderInteractive(img.interactive);

    var thumb = "";
    if (img.src && !img.src.startsWith("data:")) {
      thumb = '<img src="' + escapeHtml(img.src) + '" alt="" class="tool-alt__thumbnail" loading="lazy">';
    } else {
      thumb = '<span class="tool-alt__no-thumb">geen src</span>';
    }

    return '<tr class="tool-alt__row tool-alt__row--' + img.status + '">' +
      "<td>" + thumb + "</td>" +
      "<td>" + altDisplay + "</td>" +
      "<td>" + location + "</td>" +
      "<td>" + ctx + "</td>" +
      "</tr>";
  }

  function renderSvgRow(svg) {
    var name;
    if (svg.status === "decorative") {
      name = '<span class="tool-alt__decorative-text">Decoratief (link/knop heeft al tekst)</span>';
    } else if (svg.status === "redundant") {
      name = '<span class="tool-alt__redundant-text">\u201C' + escapeHtml(svg.accessibleName) + '\u201D \u2014 overbodig, link/knop heeft al tekst</span>';
    } else if (svg.accessibleName) {
      name = escapeHtml(svg.accessibleName);
    } else {
      name = '<span class="tool-alt__missing-text">Geen naam</span>';
    }
    var location = renderLocation(svg.landmark, svg.nearestHeading);
    var ctx = renderInteractive(svg.interactive);

    return '<tr class="tool-alt__row tool-alt__row--' + svg.status + '">' +
      "<td>" + name + "</td>" +
      "<td>" + location + "</td>" +
      "<td>" + ctx + "</td>" +
      "</tr>";
  }

  function renderIconRow(icon) {
    var name = icon.accessibleName ? escapeHtml(icon.accessibleName) : '<span class="tool-alt__missing-text">Geen naam</span>';
    var location = renderLocation(icon.landmark, icon.nearestHeading);
    var ctx = renderInteractive(icon.interactive);

    return '<tr class="tool-alt__row tool-alt__row--' + icon.status + '">' +
      "<td><code>" + escapeHtml(icon.iconName) + "</code></td>" +
      "<td>" + name + "</td>" +
      "<td>" + location + "</td>" +
      "<td>" + ctx + "</td>" +
      "</tr>";
  }

  // ============================================================
  // Helpers
  // ============================================================

  function renderAltText(alt, ariaLabel, status) {
    if (status === "decorative") {
      return '<span class="tool-alt__decorative-text">alt="" (decoratief)</span>';
    }
    if (status === "missing") {
      return '<span class="tool-alt__missing-text">Alt-attribuut ontbreekt</span>';
    }
    if (status === "empty-interactive") {
      if (ariaLabel) {
        return '<span class="tool-alt__alt-value">aria-label: \u201C' + escapeHtml(ariaLabel) + '\u201D</span>';
      }
      return '<span class="tool-alt__empty-text">alt="" (leeg in interactief element)</span>';
    }
    // Present — alt text exists, needs manual review
    var text = alt !== null ? alt : ariaLabel;
    if (ariaLabel && alt === null) {
      return '<span class="tool-alt__alt-value">aria-label: \u201C' + escapeHtml(ariaLabel) + '\u201D</span>';
    }
    return '<span class="tool-alt__alt-value">\u201C' + escapeHtml(text) + '\u201D</span>';
  }

  function renderLocation(landmark, heading) {
    var html = "";
    var tag = landmark && landmark.tag ? landmark.tag : null;
    var label = landmark && landmark.label ? landmark.label : null;
    var id = landmark && landmark.id ? landmark.id : null;

    if (tag && tag !== "onbekend") {
      html += '<span class="tool-alt__landmark">&lt;' + escapeHtml(tag) + "&gt;";
      if (label) {
        html += ' <span class="tool-alt__landmark-label">"' + escapeHtml(truncate(label, 30)) + '"</span>';
      } else if (id) {
        html += ' <span class="tool-alt__landmark-id">#' + escapeHtml(id) + "</span>";
      }
      html += "</span>";
    }
    if (heading) {
      html += '<span class="tool-alt__heading">' + escapeHtml(truncate(heading, 40)) + "</span>";
    }
    if (!html) {
      html = '<span class="tool-alt__landmark">&lt;body&gt;</span>';
    }
    return html;
  }

  function renderInteractive(interactive) {
    if (!interactive) return "\u2014";
    if (interactive === "a") {
      return '<span class="tool-alt__interactive tool-alt__interactive--link">In link</span>';
    }
    if (interactive === "button") {
      return '<span class="tool-alt__interactive tool-alt__interactive--button">In knop</span>';
    }
    return escapeHtml(interactive);
  }

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function truncate(str, max) {
    if (!str) return "";
    if (str.length <= max) return str;
    return str.substring(0, max) + "\u2026";
  }
})();

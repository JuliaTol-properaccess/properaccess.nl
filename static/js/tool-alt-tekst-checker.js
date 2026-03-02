/**
 * Alt-tekst Checker — Proper Access
 * Calls Cloudflare Worker to analyze image alt texts of a URL.
 * Supports NL / EN interface toggle
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE
  // =============================================
  var WORKER_URL = "https://alt-tekst-checker.juliatol.workers.dev/";

  // ============================================================
  // Translations
  // ============================================================

  var LANG = {
    nl: {
      toolTitle: "Alt-tekst checker",
      // Gate
      gateText: "Deze tool is beschikbaar voor klanten van Proper Access. Voer het wachtwoord in om toegang te krijgen.",
      gatePasswordLabel: "Wachtwoord",
      gateBtn: "Toegang",
      gateError: "Onjuist wachtwoord. Probeer het opnieuw.",
      // Intro & form
      intro: "Voer een URL in om alle afbeeldingen, SVG\u2019s en iconen op die pagina te controleren op alt-teksten. Je ziet per element de status, de locatie op de pagina en of het binnen een link of knop staat.",
      urlLabel: "URL van de pagina",
      urlPlaceholder: "https://www.voorbeeld.nl",
      submitBtn: "Controleer",
      submitBusy: "Bezig...",
      loading: "Pagina ophalen en analyseren...",
      fetchError: "Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.",
      // Summary
      lblImages: "Afbeeldingen",
      lblSvgs: "SVG\u2019s",
      lblIcons: "Iconen",
      noneFound: "Geen gevonden",
      present: "aanwezig",
      missing: "ontbreekt",
      decorative: "decoratief",
      emptyInteractive: "leeg in link/knop",
      good: "goed",
      redundant: "overbodig",
      hidden: "verborgen",
      // Table headers
      thImage: "Afbeelding",
      thAltText: "Alt-tekst",
      thLocation: "Locatie",
      thContext: "Context",
      thName: "Naam",
      thIcon: "Icoon",
      // Empty state
      emptyPage: "Geen afbeeldingen, SVG\u2019s of iconen gevonden op deze pagina.",
      // Status texts
      altDecorative: 'alt="" (decoratief)',
      altMissing: "Alt-attribuut ontbreekt",
      altEmptyInteractive: 'alt="" (leeg in interactief element)',
      svgDecorative: "Decoratief (link/knop heeft al tekst)",
      svgRedundantSuffix: "overbodig, link/knop heeft al tekst",
      noName: "Geen naam",
      noSrc: "geen src",
      inLink: "In link",
      inButton: "In knop",
      // CTA
      ctaHtml: "Wil je alle afbeeldingen op je hele website laten controleren? <a href=\"/contact\">Neem contact op</a> voor een complete WCAG-audit.",
      // Toggle
      langLabel: "Switch to English"
    },

    en: {
      toolTitle: "Alt text checker",
      gateText: "This tool is available for Proper Access clients. Enter the password to gain access.",
      gatePasswordLabel: "Password",
      gateBtn: "Access",
      gateError: "Incorrect password. Please try again.",
      intro: "Enter a URL to check all images, SVGs and icons on that page for alt texts. You\u2019ll see the status, page location and whether each element is inside a link or button.",
      urlLabel: "Page URL",
      urlPlaceholder: "https://www.example.com",
      submitBtn: "Check",
      submitBusy: "Checking...",
      loading: "Fetching and analyzing page...",
      fetchError: "Could not analyze the page. Check the URL and try again.",
      lblImages: "Images",
      lblSvgs: "SVGs",
      lblIcons: "Icons",
      noneFound: "None found",
      present: "present",
      missing: "missing",
      decorative: "decorative",
      emptyInteractive: "empty in link/button",
      good: "good",
      redundant: "redundant",
      hidden: "hidden",
      thImage: "Image",
      thAltText: "Alt text",
      thLocation: "Location",
      thContext: "Context",
      thName: "Name",
      thIcon: "Icon",
      emptyPage: "No images, SVGs or icons found on this page.",
      altDecorative: 'alt="" (decorative)',
      altMissing: "Alt attribute missing",
      altEmptyInteractive: 'alt="" (empty in interactive element)',
      svgDecorative: "Decorative (link/button already has text)",
      svgRedundantSuffix: "redundant, link/button already has text",
      noName: "No name",
      noSrc: "no src",
      inLink: "In link",
      inButton: "In button",
      ctaHtml: "Want to check all images across your entire website? <a href=\"/contact\">Get in touch</a> for a complete WCAG audit.",
      langLabel: "Schakel naar Nederlands"
    }
  };

  // ============================================================
  // i18n helpers
  // ============================================================

  var currentLang = "nl";
  try { currentLang = localStorage.getItem("pa-tool-lang") || "nl"; } catch (e) { /* private browsing */ }

  function t(key) {
    return (LANG[currentLang] && LANG[currentLang][key]) || LANG.nl[key] || key;
  }

  function translateDOM() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    var htmlEls = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlEls.length; j++) {
      htmlEls[j].innerHTML = t(htmlEls[j].getAttribute("data-i18n-html"));
    }
    var phEls = document.querySelectorAll("[data-i18n-ph]");
    for (var k = 0; k < phEls.length; k++) {
      phEls[k].placeholder = t(phEls[k].getAttribute("data-i18n-ph"));
    }
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    for (var l = 0; l < ariaEls.length; l++) {
      ariaEls[l].setAttribute("aria-label", t(ariaEls[l].getAttribute("data-i18n-aria")));
    }
  }

  function updateLangToggle() {
    var nlOpt = document.getElementById("langOptNL");
    var enOpt = document.getElementById("langOptEN");
    var btn = document.getElementById("langToggle");
    if (!nlOpt || !enOpt) return;
    if (currentLang === "en") {
      nlOpt.classList.remove("tool-pdf__lang-opt--active");
      enOpt.classList.add("tool-pdf__lang-opt--active");
    } else {
      nlOpt.classList.add("tool-pdf__lang-opt--active");
      enOpt.classList.remove("tool-pdf__lang-opt--active");
    }
    if (btn) btn.setAttribute("aria-label", t("langLabel"));
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem("pa-tool-lang", lang); } catch (e) { /* */ }
    translateDOM();
    updateLangToggle();
    // Re-render results if present
    if (lastData) {
      output.innerHTML = renderResults(lastData);
    }
  }

  // ============================================================
  // DOM refs
  // ============================================================

  var form = document.getElementById("checkerForm");
  var urlInput = document.getElementById("urlInput");
  var submitBtn = document.getElementById("submitBtn");
  var output = document.getElementById("output");
  var cta = document.getElementById("altCta");
  var langToggle = document.getElementById("langToggle");

  if (!form) return;

  var lastData = null; // store last results for language-switch re-render

  // ============================================================
  // Apply stored language on load
  // ============================================================

  if (currentLang !== "nl") {
    translateDOM();
    updateLangToggle();
  }

  // ============================================================
  // Language toggle handler
  // ============================================================

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      setLang(currentLang === "nl" ? "en" : "nl");
    });
  }

  // ============================================================
  // Form handler
  // ============================================================

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var url = urlInput.value.trim();
    if (!url) return;

    submitBtn.disabled = true;
    submitBtn.textContent = t("submitBusy");
    output.innerHTML = '<p class="tool-alt__loading">' + escapeHtml(t("loading")) + '</p>';

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
          lastData = null;
          return;
        }
        lastData = data;
        output.innerHTML = renderResults(data);
        if (cta) cta.style.display = "";
      })
      .catch(function () {
        lastData = null;
        output.innerHTML =
          '<div class="tool-alt__error" role="alert">' + escapeHtml(t("fetchError")) + '</div>';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = t("submitBtn");
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
    html += summaryCard(s.imgTotal, t("lblImages"), summarizeImages(s));
    html += summaryCard(s.svgTotal, t("lblSvgs"), summarizeSvgs(s));
    html += summaryCard(s.iconTotal, t("lblIcons"), summarizeIcons(s));
    html += "</div>";

    // Images section
    if (data.images.length > 0) {
      html += renderSection(t("lblImages"), "img", data.images, renderImageRow);
    }

    // SVGs section
    if (data.svgs.length > 0) {
      html += renderSection(t("lblSvgs"), "svg", data.svgs, renderSvgRow);
    }

    // Icons section
    if (data.icons.length > 0) {
      html += renderSection(t("lblIcons"), "icon", data.icons, renderIconRow);
    }

    // Nothing found
    if (data.images.length === 0 && data.svgs.length === 0 && data.icons.length === 0) {
      html += '<p class="tool-alt__empty">' + escapeHtml(t("emptyPage")) + '</p>';
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
    if (s.imgTotal === 0) return t("noneFound");
    var parts = [];
    if (s.imgPresent > 0) parts.push(s.imgPresent + " " + t("present"));
    if (s.imgMissing > 0) parts.push(s.imgMissing + " " + t("missing"));
    if (s.imgDecorative > 0) parts.push(s.imgDecorative + " " + t("decorative"));
    if (s.imgEmptyInteractive > 0) parts.push(s.imgEmptyInteractive + " " + t("emptyInteractive"));
    return parts.join(", ");
  }

  function summarizeSvgs(s) {
    if (s.svgTotal === 0) return t("noneFound");
    var parts = [];
    if (s.svgGood > 0) parts.push(s.svgGood + " " + t("good"));
    if (s.svgMissing > 0) parts.push(s.svgMissing + " " + t("missing"));
    if (s.svgDecorative > 0) parts.push(s.svgDecorative + " " + t("decorative"));
    if (s.svgRedundant > 0) parts.push(s.svgRedundant + " " + t("redundant"));
    return parts.join(", ");
  }

  function summarizeIcons(s) {
    if (s.iconTotal === 0) return t("noneFound");
    var parts = [];
    if (s.iconGood > 0) parts.push(s.iconGood + " " + t("good"));
    if (s.iconMissing > 0) parts.push(s.iconMissing + " " + t("missing"));
    if (s.iconHidden > 0) parts.push(s.iconHidden + " " + t("hidden"));
    return parts.join(", ");
  }

  // ============================================================
  // Render sections
  // ============================================================

  function renderSection(title, type, items, rowRenderer) {
    var html = '<div class="tool-alt__section">';
    html += '<h2 class="tool-alt__section-title">' + escapeHtml(title) +
      ' <span class="tool-alt__section-count">' + items.length + "</span></h2>";

    html += '<div class="tool-alt__table-wrap"><table class="tool-alt__table">';

    if (type === "img") {
      html += "<thead><tr><th>" + t("thImage") + "</th><th>" + t("thAltText") + "</th><th>" + t("thLocation") + "</th><th>" + t("thContext") + "</th></tr></thead>";
    } else if (type === "svg") {
      html += "<thead><tr><th>" + t("thName") + "</th><th>" + t("thLocation") + "</th><th>" + t("thContext") + "</th></tr></thead>";
    } else {
      html += "<thead><tr><th>" + t("thIcon") + "</th><th>" + t("thName") + "</th><th>" + t("thLocation") + "</th><th>" + t("thContext") + "</th></tr></thead>";
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
      thumb = '<span class="tool-alt__no-thumb">' + escapeHtml(t("noSrc")) + '</span>';
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
      name = '<span class="tool-alt__decorative-text">' + escapeHtml(t("svgDecorative")) + '</span>';
    } else if (svg.status === "redundant") {
      name = '<span class="tool-alt__redundant-text">\u201C' + escapeHtml(svg.accessibleName) + '\u201D \u2014 ' + escapeHtml(t("svgRedundantSuffix")) + '</span>';
    } else if (svg.accessibleName) {
      name = escapeHtml(svg.accessibleName);
    } else {
      name = '<span class="tool-alt__missing-text">' + escapeHtml(t("noName")) + '</span>';
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
    var name = icon.accessibleName ? escapeHtml(icon.accessibleName) : '<span class="tool-alt__missing-text">' + escapeHtml(t("noName")) + '</span>';
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
      return '<span class="tool-alt__decorative-text">' + t("altDecorative") + '</span>';
    }
    if (status === "missing") {
      return '<span class="tool-alt__missing-text">' + escapeHtml(t("altMissing")) + '</span>';
    }
    if (status === "empty-interactive") {
      if (ariaLabel) {
        return '<span class="tool-alt__alt-value">aria-label: \u201C' + escapeHtml(ariaLabel) + '\u201D</span>';
      }
      return '<span class="tool-alt__empty-text">' + t("altEmptyInteractive") + '</span>';
    }
    // Present
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
      return '<span class="tool-alt__interactive tool-alt__interactive--link">' + escapeHtml(t("inLink")) + '</span>';
    }
    if (interactive === "button") {
      return '<span class="tool-alt__interactive tool-alt__interactive--button">' + escapeHtml(t("inButton")) + '</span>';
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

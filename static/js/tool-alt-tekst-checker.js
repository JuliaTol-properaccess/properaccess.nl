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
      // Instruction
      purposeTitle: "Doel van deze tool",
      purposeBody: "Als webredacteur kun je in een oogopslag zien:",
      purposeList1: "Welke afbeeldingen op je webpagina zichtbaar zijn voor hulpsoftware",
      purposeList2: "Welke informatie hulpsoftware van elke afbeelding krijgt",
      purposeNote: "Afbeeldingen die als achtergrond zijn toegevoegd (via CSS), zijn niet zichtbaar voor schermlezers en worden niet door deze tool opgehaald.",
      purposeUse: "Gebruik de resultaten om alternatieve teksten in je CMS aan te passen, of vraag je webdeveloper om de HTML te wijzigen.",
      // Form
      intro: "Voer een URL in om alle afbeeldingen op die pagina te controleren.",
      urlLabel: "URL van de pagina",
      urlPlaceholder: "https://www.voorbeeld.nl",
      submitBtn: "Controleer",
      submitBusy: "Bezig...",
      loading: "Pagina ophalen en analyseren...",
      fetchError: "Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.",
      jsNotice: "Geen afbeeldingen gevonden. Als de pagina JavaScript gebruikt om content te laden, kan deze tool die content niet ophalen.",
      // Filter
      filterAll: "Alle",
      filterProblems: "Alleen problemen",
      // Summary
      lblImages: "Afbeeldingen",
      lblOther: "Andere typen afbeeldingen",
      noneFound: "Geen gevonden",
      present: "goed",
      missing: "fout",
      decorative: "decoratief",
      emptyInteractive: "leeg in link/knop",
      good: "goed",
      redundant: "overbodig",
      hidden: "verborgen",
      review: "controleer zelf",
      // Card labels
      lblAltText: "Alt-tekst",
      lblName: "Naam",
      lblLocation: "Locatie",
      lblContext: "Context",
      lblStatus: "Status",
      // Empty state
      emptyPage: "Geen afbeeldingen gevonden op deze pagina.",
      // Status messages
      statusError: "Voldoet niet aan WCAG",
      statusReview: "Controleer deze afbeelding zelf",
      statusGood: "Goed",
      // Status detail
      altDecorative: 'alt="" (decoratief)',
      altMissing: "Alt-attribuut ontbreekt",
      altEmptyInteractive: 'alt="" in link/knop zonder andere tekst',
      svgDecorative: "Decoratief (link/knop heeft al tekst)",
      svgRedundantSuffix: "overbodig, link/knop heeft al tekst",
      noName: "Geen naam",
      noSrc: "geen src",
      inLink: "In link",
      inButton: "In knop",
      linkHasText: "link heeft al tekst",
      buttonHasText: "knop heeft al tekst",
      // Issues
      issueUnderscores: "Alt-tekst bevat underscores (lijkt op een bestandsnaam)",
      issueFilename: "Alt-tekst is een bestandsnaam",
      issueOnlyNumber: "Alt-tekst bevat alleen een getal",
      issueLangMismatch: "Taal van de alt-tekst lijkt af te wijken van de paginataal",
      issueSvgNoName: "SVG zonder toegankelijke naam (mogelijk decoratief)",
      issueIconNoName: "Icoon zonder toegankelijke naam (mogelijk decoratief)",
      // Landmarks human-readable
      landmarkHeader: "Koptekst van de pagina",
      landmarkNav: "Navigatie",
      landmarkMain: "Hoofdinhoud",
      landmarkAside: "Zijbalk",
      landmarkFooter: "Voettekst",
      landmarkSearch: "Zoeken",
      landmarkBody: "Pagina",
      headingPrefix: "onder",
      // CTA
      ctaHtml: 'Wil je je website handmatig laten controleren door senior experts? <a href="/contact">Neem contact op</a> voor een complete WCAG-audit.',
      // Toggle
      langLabel: "Switch to English"
    },

    en: {
      toolTitle: "Alt text checker",
      purposeTitle: "Purpose of this tool",
      purposeBody: "As a web editor you can see at a glance:",
      purposeList1: "Which images on your webpage are visible to assistive technology",
      purposeList2: "What information assistive technology receives from each image",
      purposeNote: "Images added as backgrounds (via CSS) are not visible to screen readers and will not be detected by this tool.",
      purposeUse: "Use the results to update alt texts in your CMS, or ask your web developer to modify the HTML.",
      intro: "Enter a URL to check all images on that page.",
      urlLabel: "Page URL",
      urlPlaceholder: "https://www.example.com",
      submitBtn: "Check",
      submitBusy: "Checking...",
      loading: "Fetching and analyzing page...",
      fetchError: "Could not analyze the page. Check the URL and try again.",
      jsNotice: "No images found. If the page uses JavaScript to load content, this tool cannot retrieve it.",
      filterAll: "All",
      filterProblems: "Only problems",
      lblImages: "Images",
      lblOther: "Other image types",
      noneFound: "None found",
      present: "good",
      missing: "error",
      decorative: "decorative",
      emptyInteractive: "empty in link/button",
      good: "good",
      redundant: "redundant",
      hidden: "hidden",
      review: "review",
      lblAltText: "Alt text",
      lblName: "Name",
      lblLocation: "Location",
      lblContext: "Context",
      lblStatus: "Status",
      emptyPage: "No images found on this page.",
      statusError: "Does not meet WCAG",
      statusReview: "Review this image yourself",
      statusGood: "Good",
      altDecorative: 'alt="" (decorative)',
      altMissing: "Alt attribute missing",
      altEmptyInteractive: 'alt="" in link/button without other text',
      svgDecorative: "Decorative (link/button already has text)",
      svgRedundantSuffix: "redundant, link/button already has text",
      noName: "No name",
      noSrc: "no src",
      inLink: "In link",
      inButton: "In button",
      linkHasText: "link already has text",
      buttonHasText: "button already has text",
      issueUnderscores: "Alt text contains underscores (looks like a filename)",
      issueFilename: "Alt text is a filename",
      issueOnlyNumber: "Alt text contains only a number",
      issueLangMismatch: "Alt text language appears to differ from page language",
      issueSvgNoName: "SVG without accessible name (possibly decorative)",
      issueIconNoName: "Icon without accessible name (possibly decorative)",
      landmarkHeader: "Page header",
      landmarkNav: "Navigation",
      landmarkMain: "Main content",
      landmarkAside: "Sidebar",
      landmarkFooter: "Footer",
      landmarkSearch: "Search",
      landmarkBody: "Page",
      headingPrefix: "below",
      ctaHtml: 'Want your website manually reviewed by senior experts? <a href="/contact">Get in touch</a> for a complete WCAG audit.',
      langLabel: "Schakel naar Nederlands"
    }
  };

  // ============================================================
  // i18n helpers
  // ============================================================

  var currentLang = (window.__paToolLang === "en") ? "en" : "nl";
  try { var stored = localStorage.getItem("pa-tool-lang"); if (stored && !window.__paToolLang) currentLang = stored; } catch (e) { /* private browsing */ }

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
    var container = document.querySelector(".tool-container");
    if (container) {
      if (currentLang === "nl") {
        container.removeAttribute("lang");
      } else {
        container.setAttribute("lang", currentLang);
      }
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
    if (lastData) {
      output.innerHTML = renderResults(lastData);
      bindFilter();
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

  var lastData = null;
  var currentFilter = "all"; // "all" or "problems"

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
    currentFilter = "all";

    var token = window.__PA_TOKEN || "pa_internal_site_access";
    fetch(WORKER_URL + "?url=" + encodeURIComponent(url) + "&token=" + encodeURIComponent(token))
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
        bindFilter();
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
  // Filter logic
  // ============================================================

  function bindFilter() {
    var btns = output.querySelectorAll(".tool-alt__filter-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", handleFilterClick);
    }
  }

  function handleFilterClick(e) {
    var btn = e.currentTarget;
    currentFilter = btn.getAttribute("data-filter");

    // Update aria-pressed
    var btns = output.querySelectorAll(".tool-alt__filter-btn");
    for (var i = 0; i < btns.length; i++) {
      var isActive = btns[i].getAttribute("data-filter") === currentFilter;
      btns[i].setAttribute("aria-pressed", isActive ? "true" : "false");
      btns[i].classList.toggle("tool-alt__filter-btn--active", isActive);
    }

    // Show/hide items
    var items = output.querySelectorAll(".tool-alt__item");
    for (var j = 0; j < items.length; j++) {
      var status = items[j].getAttribute("data-status");
      if (currentFilter === "problems") {
        var isProblem = status === "missing" || status === "empty-interactive" || status === "review";
        items[j].style.display = isProblem ? "" : "none";
      } else {
        items[j].style.display = "";
      }
    }
  }

  // ============================================================
  // Status classification
  // ============================================================

  function getStatusClass(status) {
    if (status === "missing" || status === "empty-interactive") return "error";
    if (status === "review" || status === "redundant") return "review";
    return "good"; // present, good, decorative, hidden
  }

  function getStatusMessage(status) {
    var cls = getStatusClass(status);
    if (cls === "error") return t("statusError");
    if (cls === "review") return t("statusReview");
    return "";
  }

  // ============================================================
  // Render results
  // ============================================================

  function renderResults(data) {
    var s = data.summary;
    var allItems = [].concat(data.images, data.svgs, data.icons);
    var totalErrors = s.imgMissing + s.imgEmptyInteractive + s.svgMissing + s.iconMissing;
    var totalReview = s.imgReview + s.svgReview + s.svgRedundant + s.iconReview;
    var html = "";

    // Summary cards
    html += '<div class="tool-alt__summary">';
    html += summaryCard(s.imgTotal, t("lblImages"), summarizeImages(s));
    html += summaryCard(s.svgTotal + s.iconTotal, t("lblOther"), summarizeOther(s));
    html += "</div>";

    // Filter buttons
    if (allItems.length > 0) {
      html += '<div class="tool-alt__filter" role="group" aria-label="Filter">';
      html += '<button type="button" class="tool-alt__filter-btn tool-alt__filter-btn--active" data-filter="all" aria-pressed="true">' + escapeHtml(t("filterAll")) + ' (' + allItems.length + ')</button>';
      html += '<button type="button" class="tool-alt__filter-btn" data-filter="problems" aria-pressed="false">' + escapeHtml(t("filterProblems")) + ' (' + (totalErrors + totalReview) + ')</button>';
      html += "</div>";
    }

    // Images section
    if (data.images.length > 0) {
      html += renderSection(t("lblImages"), data.images, renderImageCard);
    }

    // Other types section (SVGs + icons combined)
    var otherItems = [].concat(data.svgs, data.icons);
    if (otherItems.length > 0) {
      html += renderSection(t("lblOther"), otherItems, renderOtherCard);
    }

    // Nothing found
    if (allItems.length === 0) {
      html += '<p class="tool-alt__empty">' + escapeHtml(t("emptyPage")) + '</p>';
      html += '<p class="tool-alt__notice">' + escapeHtml(t("jsNotice")) + '</p>';
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
    if (s.imgReview > 0) parts.push(s.imgReview + " " + t("review"));
    return parts.join(", ");
  }

  function summarizeOther(s) {
    var total = s.svgTotal + s.iconTotal;
    if (total === 0) return t("noneFound");
    var good = s.svgGood + s.iconGood + s.svgDecorative + s.svgHidden + s.iconDecorative + s.iconHidden;
    var errors = s.svgMissing + s.iconMissing;
    var reviews = s.svgRedundant + s.svgReview + s.iconReview;
    var parts = [];
    if (good > 0) parts.push(good + " " + t("good"));
    if (errors > 0) parts.push(errors + " " + t("missing"));
    if (reviews > 0) parts.push(reviews + " " + t("review"));
    return parts.join(", ");
  }

  // ============================================================
  // Render sections with cards
  // ============================================================

  function renderSection(title, items, cardRenderer) {
    var html = '<div class="tool-alt__section">';
    html += '<h2 class="tool-alt__section-title">' + escapeHtml(title) +
      ' <span class="tool-alt__section-count">' + items.length + "</span></h2>";

    html += '<div class="tool-alt__items">';
    for (var i = 0; i < items.length; i++) {
      html += cardRenderer(items[i]);
    }
    html += '</div>';
    html += "</div>";

    return html;
  }

  function renderImageCard(img) {
    var statusCls = getStatusClass(img.status);
    var html = '<div class="tool-alt__item tool-alt__item--' + statusCls + '" data-status="' + img.status + '">';

    // Thumbnail
    html += '<div class="tool-alt__item-thumb">';
    if (img.src && !img.src.startsWith("data:")) {
      html += '<img src="' + escapeHtml(img.src) + '" alt="" class="tool-alt__thumbnail" loading="lazy">';
    } else {
      html += '<span class="tool-alt__no-thumb">' + escapeHtml(t("noSrc")) + '</span>';
    }
    html += '</div>';

    // Body
    html += '<div class="tool-alt__item-body">';

    // Alt text
    html += '<div class="tool-alt__item-alt">';
    html += renderAltText(img.alt, img.ariaLabel, img.status);
    html += '</div>';

    // Issues
    if (img.issues && img.issues.length > 0) {
      html += '<div class="tool-alt__item-issues">';
      for (var i = 0; i < img.issues.length; i++) {
        html += '<span class="tool-alt__issue">' + escapeHtml(getIssueText(img.issues[i])) + '</span>';
      }
      html += '</div>';
    }

    // Location
    html += '<div class="tool-alt__item-location">';
    html += '<span class="tool-alt__item-label">' + escapeHtml(t("lblLocation")) + ':</span> ';
    html += renderLocation(img.landmark, img.nearestHeading);
    html += '</div>';

    // Context
    if (img.interactive) {
      html += '<div class="tool-alt__item-context">';
      html += renderInteractive(img.interactive);
      html += '</div>';
    }

    html += '</div>'; // body

    // Status badge
    var statusMsg = getStatusMessage(img.status);
    if (statusMsg) {
      html += '<div class="tool-alt__item-status">';
      html += '<span class="tool-alt__status-badge tool-alt__status-badge--' + statusCls + '">' + escapeHtml(statusMsg) + '</span>';
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function renderOtherCard(item) {
    var statusCls = getStatusClass(item.status);
    var html = '<div class="tool-alt__item tool-alt__item--' + statusCls + '" data-status="' + item.status + '">';

    // Icon/type indicator
    html += '<div class="tool-alt__item-thumb">';
    if (item.type === "svg") {
      html += '<span class="tool-alt__type-label">SVG</span>';
    } else {
      html += '<code class="tool-alt__type-label tool-alt__type-label--icon">' + escapeHtml(item.iconName || "icon") + '</code>';
    }
    html += '</div>';

    // Body
    html += '<div class="tool-alt__item-body">';

    // Name
    html += '<div class="tool-alt__item-alt">';
    if (item.status === "decorative") {
      html += '<span class="tool-alt__decorative-text">' + escapeHtml(t("svgDecorative")) + '</span>';
    } else if (item.status === "redundant") {
      html += '<span class="tool-alt__redundant-text">\u201C' + escapeHtml(item.accessibleName) + '\u201D \u2014 ' + escapeHtml(t("svgRedundantSuffix")) + '</span>';
    } else if (item.status === "hidden") {
      html += '<span class="tool-alt__decorative-text">aria-hidden="true"</span>';
    } else if (item.accessibleName) {
      html += '<span class="tool-alt__alt-value">\u201C' + escapeHtml(item.accessibleName) + '\u201D</span>';
    } else if (item.status === "review") {
      html += '<span class="tool-alt__review-text">' + escapeHtml(item.type === "svg" ? t("issueSvgNoName") : t("issueIconNoName")) + '</span>';
    } else {
      html += '<span class="tool-alt__missing-text">' + escapeHtml(t("noName")) + '</span>';
    }
    html += '</div>';

    // Location
    html += '<div class="tool-alt__item-location">';
    html += '<span class="tool-alt__item-label">' + escapeHtml(t("lblLocation")) + ':</span> ';
    html += renderLocation(item.landmark, item.nearestHeading);
    html += '</div>';

    // Context
    if (item.interactive) {
      html += '<div class="tool-alt__item-context">';
      html += renderInteractive(item.interactive);
      html += '</div>';
    }

    html += '</div>'; // body

    // Status badge
    var statusMsg = getStatusMessage(item.status);
    if (statusMsg) {
      html += '<div class="tool-alt__item-status">';
      html += '<span class="tool-alt__status-badge tool-alt__status-badge--' + statusCls + '">' + escapeHtml(statusMsg) + '</span>';
      html += '</div>';
    }

    html += '</div>';
    return html;
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
      return '<span class="tool-alt__missing-text">' + t("altEmptyInteractive") + '</span>';
    }
    // Present or review
    var text = alt !== null ? alt : ariaLabel;
    if (ariaLabel && alt === null) {
      return '<span class="tool-alt__alt-value">aria-label: \u201C' + escapeHtml(ariaLabel) + '\u201D</span>';
    }
    return '<span class="tool-alt__alt-value">\u201C' + escapeHtml(text) + '\u201D</span>';
  }

  function getIssueText(issue) {
    var map = {
      underscores: t("issueUnderscores"),
      filename: t("issueFilename"),
      "only-number": t("issueOnlyNumber"),
      "lang-mismatch": t("issueLangMismatch"),
    };
    return map[issue] || issue;
  }

  var LANDMARK_NAMES = {
    nl: { header: "Koptekst van de pagina", nav: "Navigatie", main: "Hoofdinhoud", aside: "Zijbalk", footer: "Voettekst", search: "Zoeken" },
    en: { header: "Page header", nav: "Navigation", main: "Main content", aside: "Sidebar", footer: "Footer", search: "Search" }
  };

  function renderLocation(landmark, heading) {
    var html = "";
    var tag = landmark && landmark.tag ? landmark.tag : null;
    var label = landmark && landmark.label ? landmark.label : null;
    var id = landmark && landmark.id ? landmark.id : null;

    if (tag) {
      var names = LANDMARK_NAMES[currentLang] || LANDMARK_NAMES.nl;
      var humanName = names[tag] || tag;
      html += '<span class="tool-alt__landmark">' + escapeHtml(humanName);
      html += ' <span class="tool-alt__landmark-tag">(&lt;' + escapeHtml(tag) + '&gt;';
      if (label) {
        html += ' "' + escapeHtml(truncate(label, 30)) + '"';
      } else if (id) {
        html += ' "' + escapeHtml(id) + '"';
      }
      html += ')</span></span>';
    } else {
      html += '<span class="tool-alt__landmark">' + escapeHtml(t("landmarkBody")) + '</span>';
    }

    if (heading) {
      html += ' <span class="tool-alt__heading">\u2014 ' + escapeHtml(t("headingPrefix")) + ' "' + escapeHtml(truncate(heading.text, 40)) + '"</span>';
    }

    return html;
  }

  function renderInteractive(interactive) {
    if (!interactive) return "";
    var element = interactive.element || interactive;
    var hasText = interactive.hasText;

    if (element === "a") {
      var linkLabel = escapeHtml(t("inLink"));
      if (hasText) linkLabel += ' <span class="tool-alt__context-detail">(' + escapeHtml(t("linkHasText")) + ')</span>';
      return '<span class="tool-alt__interactive tool-alt__interactive--link">' + linkLabel + '</span>';
    }
    if (element === "button") {
      var btnLabel = escapeHtml(t("inButton"));
      if (hasText) btnLabel += ' <span class="tool-alt__context-detail">(' + escapeHtml(t("buttonHasText")) + ')</span>';
      return '<span class="tool-alt__interactive tool-alt__interactive--button">' + btnLabel + '</span>';
    }
    return escapeHtml(element);
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

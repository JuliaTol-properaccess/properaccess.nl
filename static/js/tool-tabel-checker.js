/**
 * Tabel Checker — Proper Access
 * Calls Cloudflare Worker to analyze table accessibility of a URL.
 * Supports NL / EN interface toggle
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE
  // =============================================
  var WORKER_URL = "https://tabel-checker.juliatol.workers.dev/";

  // ============================================================
  // Translations
  // ============================================================

  var LANG = {
    nl: {
      toolTitle: "Tabel checker",
      // Gate
      gateText: "Deze tool is beschikbaar voor klanten van Proper Access. Voer het wachtwoord in om toegang te krijgen.",
      gatePasswordLabel: "Wachtwoord",
      gateBtn: "Toegang",
      gateError: "Onjuist wachtwoord. Probeer het opnieuw.",
      // Intro & form
      intro: "Voer een URL in om alle tabellen op die pagina te controleren op digitale toegankelijkheid. Je ziet per tabel de structuur, gevonden fouten en waarschuwingen.",
      urlLabel: "URL van de pagina",
      urlPlaceholder: "https://www.voorbeeld.nl",
      submitBtn: "Controleer",
      submitBusy: "Bezig...",
      loading: "Pagina ophalen en analyseren...",
      fetchError: "Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.",
      // Summary
      lblTables: "Tabellen",
      lblData: "Datatabel",
      lblLayout: "Layout-tabel",
      lblIssues: "Fouten",
      lblWarnings: "Waarschuwingen",
      noTables: "Geen tabellen gevonden op deze pagina.",
      // Table detail
      tableNum: "Tabel",
      type: "Type",
      dataTable: "Datatabel",
      layoutTable: "Layout-tabel",
      structure: "Structuur",
      rows: "rijen",
      cols: "kolommen",
      thCount: "tabelkoppen",
      tdCount: "datacellen",
      name: "Naam",
      noName: "Geen naam",
      caption: "Caption",
      location: "Locatie",
      issuesFound: "Gevonden problemen",
      noIssues: "Geen problemen gevonden",
      // Issue messages
      "no-th": "Geen tabelkoppen (<th>) gevonden. Markeer koppen met <th> in plaats van <td>.",
      "th-no-scope": "{count} tabelkop(pen) mist een scope-attribuut (scope=\"col\" of scope=\"row\").",
      "empty-th": "{count} tabelkop(pen) is leeg. Vul een beschrijvende tekst in.",
      "no-accessible-name": "Tabel heeft geen accessible name. Voeg een <caption> of aria-label toe (meerdere tabellen op pagina).",
      "invalid-headers-ref": "headers-attribuut verwijst naar niet-bestaand id \"{ref}\" in cel \"{cell}\".",
      "sortable-no-aria-sort": "Sorteerbare kolom \"{header}\" mist aria-sort attribuut.",
      "layout-has-th": "Layout-tabel bevat {count} <th>-element(en). Verwijder deze of verwijder role=\"presentation\".",
      "layout-has-caption": "Layout-tabel bevat een <caption>. Verwijder deze of verwijder role=\"presentation\".",
      "layout-has-summary": "Layout-tabel bevat een summary-attribuut. Verwijder dit of verwijder role=\"presentation\".",
      "possible-layout-table": "Deze tabel heeft geen koppen en maar 1 rij. Is dit een layout-tabel? Voeg dan role=\"presentation\" toe.",
      // Severity
      error: "Fout",
      warning: "Waarschuwing",
      // CTA
      ctaHtml: "Wil je alle tabellen op je hele website laten controleren? <a href=\"/contact\">Neem contact op</a> voor een complete WCAG-audit.",
      // Toggle
      langLabel: "Switch to English"
    },

    en: {
      toolTitle: "Table checker",
      gateText: "This tool is available for Proper Access clients. Enter the password to gain access.",
      gatePasswordLabel: "Password",
      gateBtn: "Access",
      gateError: "Incorrect password. Please try again.",
      intro: "Enter a URL to check all tables on that page for digital accessibility. You\u2019ll see the structure, issues and warnings per table.",
      urlLabel: "Page URL",
      urlPlaceholder: "https://www.example.com",
      submitBtn: "Check",
      submitBusy: "Checking...",
      loading: "Fetching and analyzing page...",
      fetchError: "Could not analyze the page. Check the URL and try again.",
      lblTables: "Tables",
      lblData: "Data table",
      lblLayout: "Layout table",
      lblIssues: "Errors",
      lblWarnings: "Warnings",
      noTables: "No tables found on this page.",
      tableNum: "Table",
      type: "Type",
      dataTable: "Data table",
      layoutTable: "Layout table",
      structure: "Structure",
      rows: "rows",
      cols: "columns",
      thCount: "header cells",
      tdCount: "data cells",
      name: "Name",
      noName: "No name",
      caption: "Caption",
      location: "Location",
      issuesFound: "Issues found",
      noIssues: "No issues found",
      "no-th": "No table headers (<th>) found. Mark headers with <th> instead of <td>.",
      "th-no-scope": "{count} header cell(s) missing a scope attribute (scope=\"col\" or scope=\"row\").",
      "empty-th": "{count} header cell(s) are empty. Add descriptive text.",
      "no-accessible-name": "Table has no accessible name. Add a <caption> or aria-label (multiple tables on page).",
      "invalid-headers-ref": "headers attribute references non-existent id \"{ref}\" in cell \"{cell}\".",
      "sortable-no-aria-sort": "Sortable column \"{header}\" is missing aria-sort attribute.",
      "layout-has-th": "Layout table contains {count} <th> element(s). Remove them or remove role=\"presentation\".",
      "layout-has-caption": "Layout table contains a <caption>. Remove it or remove role=\"presentation\".",
      "layout-has-summary": "Layout table contains a summary attribute. Remove it or remove role=\"presentation\".",
      "possible-layout-table": "This table has no headers and only 1 row. Is it a layout table? Add role=\"presentation\" if so.",
      error: "Error",
      warning: "Warning",
      ctaHtml: "Want to check all tables across your entire website? <a href=\"/contact\">Get in touch</a> for a complete WCAG audit.",
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

  function tReplace(key, replacements) {
    var str = t(key);
    for (var k in replacements) {
      str = str.replace("{" + k + "}", escapeHtml(replacements[k]));
    }
    return str;
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
    }
  }

  // ============================================================
  // DOM refs
  // ============================================================

  var form = document.getElementById("checkerForm");
  var urlInput = document.getElementById("urlInput");
  var submitBtn = document.getElementById("submitBtn");
  var output = document.getElementById("output");
  var cta = document.getElementById("tabelCta");
  var langToggle = document.getElementById("langToggle");

  if (!form) return;

  var lastData = null;

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
    html += summaryCard(s.totalTables, t("lblTables"), s.dataTables + " " + t("lblData").toLowerCase() + ", " + s.layoutTables + " " + t("lblLayout").toLowerCase());
    html += summaryCard(s.totalIssues, t("lblIssues"), "", s.totalIssues > 0 ? "tool-tbl__card--error" : "tool-tbl__card--ok");
    html += summaryCard(s.totalWarnings, t("lblWarnings"), "", s.totalWarnings > 0 ? "tool-tbl__card--warning" : "tool-tbl__card--ok");
    html += "</div>";

    // No tables
    if (data.tables.length === 0) {
      html += '<p class="tool-alt__empty">' + escapeHtml(t("noTables")) + '</p>';
      return html;
    }

    // Individual tables
    for (var i = 0; i < data.tables.length; i++) {
      html += renderTable(data.tables[i]);
    }

    return html;
  }

  function summaryCard(count, label, detail, extraClass) {
    return '<div class="tool-alt__summary-card ' + (extraClass || "") + '">' +
      '<span class="tool-alt__summary-count">' + count + "</span>" +
      '<span class="tool-alt__summary-label">' + escapeHtml(label) + "</span>" +
      (detail ? '<span class="tool-alt__summary-detail">' + escapeHtml(detail) + "</span>" : "") +
      "</div>";
  }

  function renderTable(table) {
    var typeLabel = table.type === "layout" ? t("layoutTable") : t("dataTable");
    var hasIssues = table.issues.length > 0;
    var errorCount = 0;
    var warnCount = 0;
    for (var i = 0; i < table.issues.length; i++) {
      if (table.issues[i].severity === "error") errorCount++;
      else warnCount++;
    }

    var statusClass = errorCount > 0 ? "tool-tbl__table--error" : (warnCount > 0 ? "tool-tbl__table--warning" : "tool-tbl__table--ok");

    var html = '<div class="tool-tbl__table ' + statusClass + '">';

    // Header
    html += '<h2 class="tool-tbl__table-title">';
    html += '<span class="tool-tbl__table-num">' + t("tableNum") + " " + table.index + "</span>";
    html += '<span class="tool-tbl__table-type tool-tbl__table-type--' + table.type + '">' + escapeHtml(typeLabel) + "</span>";
    if (errorCount > 0) {
      html += '<span class="tool-tbl__badge tool-tbl__badge--error">' + errorCount + " " + t("error").toLowerCase() + (errorCount > 1 ? "en" : "") + "</span>";
    }
    if (warnCount > 0) {
      html += '<span class="tool-tbl__badge tool-tbl__badge--warning">' + warnCount + " " + t("warning").toLowerCase() + (warnCount > 1 ? "en" : "") + "</span>";
    }
    if (!hasIssues) {
      html += '<span class="tool-tbl__badge tool-tbl__badge--ok">\u2713</span>';
    }
    html += "</h2>";

    // Details
    html += '<div class="tool-tbl__details">';

    // Structure info
    html += '<dl class="tool-tbl__dl">';
    html += '<dt>' + t("structure") + "</dt>";
    html += "<dd>" + table.rows + " " + t("rows") + ", " + table.cols + " " + t("cols") + ", " + table.thCount + " " + t("thCount") + "</dd>";

    html += '<dt>' + t("name") + "</dt>";
    if (table.accessibleName) {
      html += "<dd>" + escapeHtml(table.accessibleName) + "</dd>";
    } else {
      html += '<dd class="tool-tbl__no-name">' + t("noName") + "</dd>";
    }

    if (table.landmark) {
      html += '<dt>' + t("location") + "</dt>";
      html += "<dd>&lt;" + escapeHtml(table.landmark.tag) + "&gt;";
      if (table.landmark.label) {
        html += ' "' + escapeHtml(table.landmark.label) + '"';
      }
      html += "</dd>";
    }
    if (table.nearestHeading) {
      html += '<dt>' + t("location") + "</dt>";
      html += "<dd>" + escapeHtml(truncate(table.nearestHeading, 50)) + "</dd>";
    }
    html += "</dl>";

    // Issues
    if (hasIssues) {
      html += '<h3 class="tool-tbl__issues-title">' + t("issuesFound") + "</h3>";
      html += '<ul class="tool-tbl__issues">';
      for (var j = 0; j < table.issues.length; j++) {
        var issue = table.issues[j];
        var sevClass = issue.severity === "error" ? "tool-tbl__issue--error" : "tool-tbl__issue--warning";
        var sevLabel = issue.severity === "error" ? t("error") : t("warning");
        var msg = getIssueMessage(issue);

        html += '<li class="tool-tbl__issue ' + sevClass + '">';
        html += '<span class="tool-tbl__issue-sev">' + escapeHtml(sevLabel) + "</span>";
        html += '<span class="tool-tbl__issue-sc">SC ' + escapeHtml(issue.sc) + "</span>";
        html += '<span class="tool-tbl__issue-msg">' + msg + "</span>";
        html += "</li>";
      }
      html += "</ul>";
    } else {
      html += '<p class="tool-tbl__no-issues">\u2713 ' + t("noIssues") + "</p>";
    }

    html += "</div>"; // details
    html += "</div>"; // table card

    return html;
  }

  function getIssueMessage(issue) {
    var detail = issue.detail || {};
    return tReplace(issue.id, {
      count: detail.count || "",
      ref: detail.ref || "",
      cell: detail.cell || "",
      header: detail.header || ""
    });
  }

  // ============================================================
  // Helpers
  // ============================================================

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

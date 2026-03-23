/**
 * Link Checker — Proper Access
 * Calls Cloudflare Worker to analyze link accessibility of a URL.
 * Supports NL / EN interface toggle
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE
  // =============================================
  var WORKER_URL = "https://link-checker.juliatol.workers.dev/";

  // ============================================================
  // Translations
  // ============================================================

  var LANG = {
    nl: {
      toolTitle: "Link checker",
      // Gate
      gateText: "Deze tool is beschikbaar voor klanten van Proper Access. Voer het wachtwoord in om toegang te krijgen.",
      gatePasswordLabel: "Wachtwoord",
      gateBtn: "Toegang",
      gateError: "Onjuist wachtwoord. Probeer het opnieuw.",
      // Intro & form
      intro: "Voer een URL in om alle links op die pagina te bekijken. Je ziet per link de toegankelijke naam, de URL en eventuele problemen.",
      urlLabel: "URL van de pagina",
      urlPlaceholder: "https://www.voorbeeld.nl",
      submitBtn: "Controleer",
      submitBusy: "Bezig...",
      loading: "Pagina ophalen en analyseren...",
      fetchError: "Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.",
      // Summary
      lblLinks: "Links",
      lblIssues: "Fouten",
      lblWarnings: "Waarschuwingen",
      noLinks: "Geen links gevonden op deze pagina.",
      jsNotice: "Let op: links die via JavaScript worden geladen (bijvoorbeeld door een cookie-manager of framework) worden niet gedetecteerd.",
      // Filter
      filterAll: "Alle links",
      filterIssues: "Alleen met problemen",
      // Table headers
      colNum: "#",
      colName: "Toegankelijke naam",
      colHref: "URL",
      colLocation: "Locatie",
      colStatus: "Status",
      // Status labels
      statusOk: "OK",
      statusError: "Fout",
      statusWarning: "Waarschuwing",
      // Link details
      noName: "Geen naam",
      external: "Extern",
      internal: "Intern",
      newWindow: "Nieuw venster",
      // Issue messages
      "no-accessible-name": "Link heeft geen toegankelijke naam. Voeg linktekst, aria-label of een afbeelding met alt-tekst toe.",
      "img-link-no-alt": "Link bevat {count} afbeelding(en) zonder alt-tekst. Voeg een alt-attribuut toe aan de afbeelding.",
      "generic-text": "Generieke linktekst \"{text}\". Gebruik een beschrijvende tekst die het doel van de link duidelijk maakt.",
      "missing-href": "Link heeft geen href-attribuut.",
      "hash-only-href": "Link heeft alleen href=\"#\". Gebruik een <button> als het een actie is, of voeg een geldige URL toe.",
      "javascript-href": "Link gebruikt javascript: in het href-attribuut. Gebruik een <button> voor acties.",
      "new-window-no-warning": "Link opent in een nieuw venster zonder waarschuwing. Voeg een visuele en programmatische indicatie toe.",
      "title-repeats-name": "Het title-attribuut herhaalt de linktekst. Verwijder het overbodige title-attribuut.",
      // Severity
      error: "Fout",
      warning: "Waarschuwing",
      // Landmark labels
      "landmark-header": "Bovenste gedeelte van de pagina",
      "landmark-nav": "Menu / navigatie",
      "landmark-main": "Hoofdinhoud",
      "landmark-aside": "Zijbalk",
      "landmark-footer": "Onderste gedeelte van de pagina",
      // CTA
      ctaHtml: "Wil je een volledige audit, handmatig uitgevoerd door senior experts? <a href=\"/contact\">Neem contact op</a> voor een complete WCAG-audit.",
      // Toggle
      langLabel: "Switch to English"
    },

    en: {
      toolTitle: "Link checker",
      gateText: "This tool is available for Proper Access clients. Enter the password to gain access.",
      gatePasswordLabel: "Password",
      gateBtn: "Access",
      gateError: "Incorrect password. Please try again.",
      intro: "Enter a URL to view all links on that page. You\u2019ll see the accessible name, URL and any issues per link.",
      urlLabel: "Page URL",
      urlPlaceholder: "https://www.example.com",
      submitBtn: "Check",
      submitBusy: "Checking...",
      loading: "Fetching and analyzing page...",
      fetchError: "Could not analyze the page. Check the URL and try again.",
      lblLinks: "Links",
      lblIssues: "Errors",
      lblWarnings: "Warnings",
      noLinks: "No links found on this page.",
      jsNotice: "Note: links rendered via JavaScript (e.g. by a cookie manager or framework) are not detected.",
      filterAll: "All links",
      filterIssues: "Only with issues",
      colNum: "#",
      colName: "Accessible name",
      colHref: "URL",
      colLocation: "Location",
      colStatus: "Status",
      statusOk: "OK",
      statusError: "Error",
      statusWarning: "Warning",
      noName: "No name",
      external: "External",
      internal: "Internal",
      newWindow: "New window",
      "no-accessible-name": "Link has no accessible name. Add link text, aria-label, or an image with alt text.",
      "img-link-no-alt": "Link contains {count} image(s) without alt text. Add an alt attribute to the image.",
      "generic-text": "Generic link text \"{text}\". Use descriptive text that clarifies the link\u2019s purpose.",
      "missing-href": "Link has no href attribute.",
      "hash-only-href": "Link has only href=\"#\". Use a <button> for actions, or add a valid URL.",
      "javascript-href": "Link uses javascript: in the href attribute. Use a <button> for actions.",
      "new-window-no-warning": "Link opens in a new window without warning. Add a visual and programmatic indication.",
      "title-repeats-name": "The title attribute repeats the link text. Remove the redundant title attribute.",
      error: "Error",
      warning: "Warning",
      // Landmark labels
      "landmark-header": "Top of the page",
      "landmark-nav": "Menu / navigation",
      "landmark-main": "Main content",
      "landmark-aside": "Sidebar",
      "landmark-footer": "Bottom of the page",
      ctaHtml: "Want a full audit, manually performed by senior experts? <a href=\"/contact\">Get in touch</a> for a complete WCAG audit.",
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
      str = str.replace("{" + k + "}", escapeHtml(String(replacements[k])));
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
  var cta = document.getElementById("linkCta");
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

    var token = window.__PA_TOKEN || "";
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
  // Render results
  // ============================================================

  function renderResults(data) {
    var s = data.summary;
    var html = "";

    // Summary cards
    html += '<div class="tool-alt__summary">';
    html += summaryCard(s.totalLinks, t("lblLinks"), "");
    html += summaryCard(s.totalIssues, t("lblIssues"), "", s.totalIssues > 0 ? "tool-tbl__card--error" : "tool-tbl__card--ok");
    html += summaryCard(s.totalWarnings, t("lblWarnings"), "", s.totalWarnings > 0 ? "tool-tbl__card--warning" : "tool-tbl__card--ok");
    html += "</div>";

    // No links
    if (data.links.length === 0) {
      html += '<p class="tool-alt__empty">' + escapeHtml(t("noLinks")) + '</p>';
      html += '<p class="tool-alt__notice">' + escapeHtml(t("jsNotice")) + '</p>';
      return html;
    }

    // Filter toggle
    html += '<div class="tool-link__filter">';
    html += '<button class="tool-link__filter-btn tool-link__filter-btn--active" data-link-filter="all">' + escapeHtml(t("filterAll")) + '</button>';
    html += '<button class="tool-link__filter-btn" data-link-filter="issues">' + escapeHtml(t("filterIssues")) + '</button>';
    html += '</div>';

    // Link list
    html += '<div class="tool-link__list">';
    for (var i = 0; i < data.links.length; i++) {
      html += renderLink(data.links[i]);
    }
    html += '</div>';

    return html;
  }

  function summaryCard(count, label, detail, extraClass) {
    return '<div class="tool-alt__summary-card ' + (extraClass || "") + '">' +
      '<span class="tool-alt__summary-count">' + count + "</span>" +
      '<span class="tool-alt__summary-label">' + escapeHtml(label) + "</span>" +
      (detail ? '<span class="tool-alt__summary-detail">' + escapeHtml(detail) + "</span>" : "") +
      "</div>";
  }

  function renderLink(link) {
    var hasErrors = link.issues.some(function (i) { return i.severity === "error"; });
    var hasWarnings = link.issues.some(function (i) { return i.severity === "warning"; });
    var hasIssues = link.issues.length > 0;

    var statusClass = hasErrors ? "tool-link__item--error" : (hasWarnings ? "tool-link__item--warning" : "tool-link__item--ok");

    var html = '<div class="tool-link__item ' + statusClass + '" data-has-issues="' + (hasIssues ? "1" : "0") + '">';

    // Link number and status badge
    html += '<div class="tool-link__header">';
    html += '<span class="tool-link__num">' + link.index + '</span>';

    // Accessible name
    if (link.accessibleName) {
      html += '<span class="tool-link__name">' + escapeHtml(truncate(link.accessibleName, 80)) + '</span>';
    } else {
      html += '<span class="tool-link__name tool-link__name--empty">' + t("noName") + '</span>';
    }

    // Badges
    if (hasErrors) {
      html += '<span class="tool-tbl__badge tool-tbl__badge--error">' + t("statusError") + '</span>';
    } else if (hasWarnings) {
      html += '<span class="tool-tbl__badge tool-tbl__badge--warning">' + t("statusWarning") + '</span>';
    } else {
      html += '<span class="tool-tbl__badge tool-tbl__badge--ok">\u2713</span>';
    }
    html += '</div>';

    // URL
    if (link.href) {
      html += '<div class="tool-link__href">';
      html += '<a href="' + escapeHtml(link.href) + '" target="_blank" rel="noopener" class="tool-link__href-url">' + escapeHtml(truncate(link.href, 100)) + '</a>';
      if (link.isExternal) {
        html += '<span class="tool-link__tag tool-link__tag--external">' + t("external") + '</span>';
      }
      if (link.target === "_blank") {
        html += '<span class="tool-link__tag">' + t("newWindow") + '</span>';
      }
      html += '</div>';
    }

    // Location
    if (link.landmark) {
      html += '<div class="tool-link__location">';
      var landmarkLabel = t("landmark-" + link.landmark.tag);
      html += escapeHtml(landmarkLabel);
      if (link.landmark.label) {
        html += ' (&lt;' + escapeHtml(link.landmark.tag) + '&gt; "' + escapeHtml(link.landmark.label) + '")';
      } else {
        html += ' (&lt;' + escapeHtml(link.landmark.tag) + '&gt;)';
      }
      html += '</div>';
    }

    // Issues
    if (hasIssues) {
      html += '<ul class="tool-tbl__issues">';
      for (var j = 0; j < link.issues.length; j++) {
        var issue = link.issues[j];
        var sevClass = issue.severity === "error" ? "tool-tbl__issue--error" : "tool-tbl__issue--warning";
        var sevLabel = issue.severity === "error" ? t("error") : t("warning");
        var msg = getIssueMessage(issue);

        html += '<li class="tool-tbl__issue ' + sevClass + '">';
        html += '<span class="tool-tbl__issue-sev">' + escapeHtml(sevLabel) + '</span>';
        html += '<span class="tool-tbl__issue-sc">SC ' + escapeHtml(issue.sc) + '</span>';
        html += '<span class="tool-tbl__issue-msg">' + msg + '</span>';
        html += '</li>';
      }
      html += '</ul>';
    }

    html += '</div>';
    return html;
  }

  function getIssueMessage(issue) {
    var detail = issue.detail || {};
    return tReplace(issue.id, {
      count: detail.count || "",
      text: detail.text || ""
    });
  }

  // ============================================================
  // Filter binding
  // ============================================================

  function bindFilter() {
    var btns = document.querySelectorAll("[data-link-filter]");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) { b.classList.remove("tool-link__filter-btn--active"); });
        btn.classList.add("tool-link__filter-btn--active");

        var filter = btn.getAttribute("data-link-filter");
        var items = document.querySelectorAll(".tool-link__item");
        items.forEach(function (item) {
          if (filter === "all") {
            item.hidden = false;
          } else {
            item.hidden = item.getAttribute("data-has-issues") !== "1";
          }
        });
      });
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

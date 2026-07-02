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
      urlHint: "Vul het volledige webadres in, bijvoorbeeld https://www.voorbeeld.nl. Een adres zonder https:// vullen we automatisch aan.",
      errorUrlEmpty: "Vul eerst een webadres in.",
      errorUrlInvalid: "Dit is geen geldig webadres. Gebruik een adres zoals https://www.voorbeeld.nl.",
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
      resultsNote: "De tool toont alle links die in de HTML van de pagina staan, ook links die visueel verborgen zijn. Denk aan een mobiel menu dat op desktop verborgen is, of deelknoppen die niet worden getoond. Daardoor kan een link er dubbel in staan.",
      resultsLimitations: "De tool kan niet beoordelen of de zichtbare tekst van een logo of afbeelding overeenkomt met de naam van de link. Ook links die pas na interactie of via JavaScript op de pagina komen, ziet de tool niet.",
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
      noHref: "geen href",
      // Issue messages
      "no-accessible-name": "Link heeft geen toegankelijke naam. Voeg linktekst, aria-label of een afbeelding met alt-tekst toe.",
      "img-link-no-alt": "Deze link bestaat uit een afbeelding zonder alternatieve tekst en heeft daardoor geen naam. Los dit op met een alt-tekst die de bestemming van de link beschrijft, of met een aria-label op de link. Zet zichtbare tekst in het logo vooraan in de naam.",
      imgAltMissing: "De afbeelding heeft geen alt-attribuut.",
      imgAltEmpty: "De afbeelding heeft een leeg alt-attribuut (alt=\"\").",
      "generic-text": "Generieke linktekst \"{text}\". Gebruik een beschrijvende tekst die het doel van de link duidelijk maakt.",
      "duplicate-name": "Er staan meer links met deze naam op de pagina, maar ze leiden naar verschillende adressen. Geef ze een onderscheidende naam.",
      "hash-only-href": "Link heeft alleen href=\"#\". Gebruik een <button> als het een actie is, of voeg een geldige URL toe.",
      "javascript-href": "Link gebruikt javascript: in het href-attribuut. Gebruik een <button> voor acties.",
      "new-window-no-warning": "Link opent in een nieuw venster zonder waarschuwing. Voeg een visuele en programmatische indicatie toe.",
      "title-repeats-name": "Het title-attribuut herhaalt de linktekst. Verwijder het overbodige title-attribuut.",
      "title-only-name": "De naam van deze link komt alleen uit het title-attribuut. Niet alle hulpsoftware leest title voor. Gebruik zichtbare tekst, een alt-tekst op de afbeelding of een aria-label.",
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
      urlHint: "Enter the full web address, for example https://www.example.com. If you leave out https://, we add it automatically.",
      errorUrlEmpty: "Enter a web address first.",
      errorUrlInvalid: "This is not a valid web address. Use an address like https://www.example.com.",
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
      resultsNote: "The tool shows every link that is in the page HTML, including links that are visually hidden. Think of a mobile menu that is hidden on desktop, or share buttons that are not shown. A link can therefore appear twice.",
      resultsLimitations: "The tool cannot judge whether the visible text of a logo or image matches the name of the link. It also does not see links that only appear after interaction or via JavaScript.",
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
      noHref: "no href",
      "no-accessible-name": "Link has no accessible name. Add link text, aria-label, or an image with alt text.",
      "img-link-no-alt": "This link consists of an image without alternative text, so the link has no name. Fix this with an alt text that describes the link\u2019s destination, or with an aria-label on the link. Put any visible text in the logo at the start of the name.",
      imgAltMissing: "The image has no alt attribute.",
      imgAltEmpty: "The image has an empty alt attribute (alt=\"\").",
      "generic-text": "Generic link text \"{text}\". Use descriptive text that clarifies the link\u2019s purpose.",
      "duplicate-name": "Multiple links on this page have this name, but they lead to different addresses. Give each link a distinctive name.",
      "hash-only-href": "Link has only href=\"#\". Use a <button> for actions, or add a valid URL.",
      "javascript-href": "Link uses javascript: in the href attribute. Use a <button> for actions.",
      "new-window-no-warning": "Link opens in a new window without warning. Add a visual and programmatic indication.",
      "title-repeats-name": "The title attribute repeats the link text. Remove the redundant title attribute.",
      "title-only-name": "The name of this link comes only from the title attribute. Not all assistive technology reads out title. Use visible text, an alt text on the image, or an aria-label.",
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

  var currentLang = (window.__paToolLang === "en") ? "en" : "nl";
  try { var stored = localStorage.getItem("pa-tool-lang"); if (stored && !window.__paToolLang) currentLang = stored; } catch (e) { /* private browsing */ }

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
  var urlError = document.getElementById("urlError");
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
  // URL validation
  // ============================================================

  function showUrlError(message) {
    if (urlError) {
      urlError.textContent = message;
      urlError.hidden = false;
    }
    urlInput.setAttribute("aria-invalid", "true");
    urlInput.setAttribute("aria-describedby", "urlHint urlError");
    urlInput.focus();
  }

  function clearUrlError() {
    if (urlError) {
      urlError.textContent = "";
      urlError.hidden = true;
    }
    urlInput.removeAttribute("aria-invalid");
    urlInput.setAttribute("aria-describedby", "urlHint");
  }

  function normalizeUrl(raw) {
    var url = raw;
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    try {
      new URL(url);
    } catch (e) {
      return null;
    }
    return url;
  }

  // ============================================================
  // Form handler
  // ============================================================

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var raw = urlInput.value.trim();
    if (!raw) {
      showUrlError(t("errorUrlEmpty"));
      return;
    }

    var url = normalizeUrl(raw);
    if (!url) {
      showUrlError(t("errorUrlInvalid"));
      return;
    }

    clearUrlError();

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
        lastData = processData(data);
        output.innerHTML = renderResults(lastData);
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
  // Post-processing of worker data
  // (client-side, so the tool keeps working with the currently
  // deployed worker; new worker fields are treated as optional)
  // ============================================================

  function normName(name) {
    return String(name || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function normHref(href) {
    if (!href) return "";
    try {
      var u = new URL(href);
      var path = u.pathname.replace(/\/+$/, "");
      return u.origin.toLowerCase() + path + u.search + u.hash;
    } catch (e) {
      return String(href).replace(/\/+$/, "");
    }
  }

  function processData(data) {
    var links = data.links || [];
    var i, j, link, key;

    // Count how often each generic link text occurs
    var genericCounts = {};
    for (i = 0; i < links.length; i++) {
      link = links[i];
      for (j = 0; j < link.issues.length; j++) {
        if (link.issues[j].id === "generic-text") {
          key = normName(link.accessibleName);
          genericCounts[key] = (genericCounts[key] || 0) + 1;
        }
      }
    }

    // Map each accessible name to its distinct target URLs
    var nameHrefs = {};
    for (i = 0; i < links.length; i++) {
      link = links[i];
      key = normName(link.accessibleName);
      if (!key || !link.href) continue;
      if (!nameHrefs[key]) nameHrefs[key] = {};
      nameHrefs[key][normHref(link.href)] = true;
    }

    for (i = 0; i < links.length; i++) {
      link = links[i];
      var issues = [];
      var hasGeneric = false;

      for (j = 0; j < link.issues.length; j++) {
        var issue = link.issues[j];

        // <a> without href: not an issue, shown as a neutral tag instead
        if (issue.id === "missing-href") continue;

        // Generic text: only report when it occurs more than once
        if (issue.id === "generic-text") {
          if (genericCounts[normName(link.accessibleName)] < 2) continue;
          hasGeneric = true;
        }

        // "title repeats link text" only applies when there is visible text.
        // Without visible text the title is the only name source: different warning.
        if (issue.id === "title-repeats-name" && !link.visibleText) {
          issues.push({ severity: "warning", sc: "4.1.2", id: "title-only-name" });
          continue;
        }

        issues.push(issue);
      }

      // Same accessible name, different targets (SC 2.4.4)
      key = normName(link.accessibleName);
      if (key && link.href && nameHrefs[key] && Object.keys(nameHrefs[key]).length > 1 && !hasGeneric) {
        var alreadyFlagged = issues.some(function (it) { return it.id === "duplicate-name"; });
        if (!alreadyFlagged) {
          issues.push({ severity: "warning", sc: "2.4.4", id: "duplicate-name" });
        }
      }

      link.issues = issues;
    }

    // Recompute summary after post-processing
    var totalIssues = 0;
    var totalWarnings = 0;
    for (i = 0; i < links.length; i++) {
      for (j = 0; j < links[i].issues.length; j++) {
        if (links[i].issues[j].severity === "error") totalIssues++;
        else totalWarnings++;
      }
    }
    data.summary = {
      totalLinks: links.length,
      linksWithIssues: links.filter(function (l) { return l.issues.some(function (it) { return it.severity === "error"; }); }).length,
      linksWithWarnings: links.filter(function (l) { return l.issues.some(function (it) { return it.severity === "warning"; }); }).length,
      totalIssues: totalIssues,
      totalWarnings: totalWarnings
    };

    return data;
  }

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

    // Notes: hidden links appear too, and what the tool cannot judge
    html += '<p class="tool-alt__notice">' + escapeHtml(t("resultsNote")) + '</p>';
    html += '<p class="tool-alt__notice">' + escapeHtml(t("resultsLimitations")) + '</p>';

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
    } else {
      // <a> without href: neutral informative tag, not an issue
      html += '<div class="tool-link__href">';
      html += '<span class="tool-link__tag">' + escapeHtml(t("noHref")) + '</span>';
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
    if (issue.id === "img-link-no-alt") {
      // altState is a newer worker field; treat it as optional
      var msg = t("img-link-no-alt");
      if (detail.altState === "missing") msg += " " + t("imgAltMissing");
      else if (detail.altState === "empty") msg += " " + t("imgAltEmpty");
      return msg;
    }
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

/**
 * Koppenstructuur Checker — Proper Access
 * Calls Cloudflare Worker to analyze heading structure of a URL.
 * Language follows the page language (window.__paToolLang, set by the layout).
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE — pas deze URL aan na deployment
  // =============================================
  var WORKER_URL = "https://heading-checker.juliatol.workers.dev/";

  // ============================================================
  // Translations
  // ============================================================

  var LANG = {
    nl: {
      submitBtn: "Controleer",
      submitBusy: "Bezig...",
      loading: "Pagina ophalen en analyseren...",
      fetchError:
        "Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.",
      // URL validation
      urlEmpty: "Vul eerst een webadres in.",
      urlInvalid:
        "Dit is geen geldig webadres. Gebruik een adres zoals https://www.voorbeeld.nl.",
      // Results header
      headingSingular: "kop",
      headingPlural: "koppen",
      headingsFound: "{count} {noun} gevonden",
      errorSingular: "fout",
      errorPlural: "fouten",
      warningSingular: "waarschuwing",
      warningPlural: "waarschuwingen",
      noErrors: "Geen fouten",
      noIssues: "Geen problemen gevonden",
      // Issue labels
      labelError: "Fout:",
      labelWarning: "Waarschuwing:",
      // Issue messages (per worker code)
      issueNoHeadings: "Geen koppen gevonden op deze pagina.",
      issueNoH1:
        "Geen <h1> gevonden. Gebruik bij voorkeur één hoofdkop per pagina.",
      issueMultipleH1:
        "{count} <h1>-koppen gevonden. Een pagina heeft meestal één hoofdkop nodig.",
      issueFirstNotH1:
        "De eerste kop is een <h{level}> in plaats van een <h1>.",
      issueLevelSkipped:
        'Kopniveau overgeslagen: van <h{from}> naar <h{to}> ({missing} ontbreekt). Bij "{text}".',
      issueConsecutive:
        '<h{prevLevel}> "{prevText}" wordt direct gevolgd door <h{level}> "{text}" zonder tussenliggende content. Controleer of het eerste element echt een kop is.',
      issueEmptyHeading:
        "Lege <h{level}> gevonden. Een kop zonder tekst is niet bruikbaar voor screenreaders.",
      // Tree
      emptyText: "(leeg)",
      skipMarker: "niveau overgeslagen",
      ariaIssues: "Gevonden problemen",
      ariaTree: "Koppenstructuur",
      // Disclaimer
      note:
        "Deze tool beoordeelt alleen de HTML-markering. Hij ziet niet of tekst die visueel als kop is vormgegeven (bijvoorbeeld vet of groot) ook echt als kop gemarkeerd had moeten worden. En ook niet of een gemarkeerde kop inhoudelijk logisch is."
    },

    en: {
      submitBtn: "Check",
      submitBusy: "Checking...",
      loading: "Fetching and analyzing page...",
      fetchError: "Could not analyze the page. Check the URL and try again.",
      // URL validation
      urlEmpty: "Enter a web address first.",
      urlInvalid:
        "This is not a valid web address. Use an address like https://www.example.com.",
      // Results header
      headingSingular: "heading",
      headingPlural: "headings",
      headingsFound: "{count} {noun} found",
      errorSingular: "error",
      errorPlural: "errors",
      warningSingular: "warning",
      warningPlural: "warnings",
      noErrors: "No errors",
      noIssues: "No issues found",
      // Issue labels
      labelError: "Error:",
      labelWarning: "Warning:",
      // Issue messages (per worker code)
      issueNoHeadings: "No headings found on this page.",
      issueNoH1: "No <h1> found. Preferably use one main heading per page.",
      issueMultipleH1:
        "{count} <h1> headings found. A page usually needs one main heading.",
      issueFirstNotH1:
        "The first heading is an <h{level}> instead of an <h1>.",
      issueLevelSkipped:
        'Heading level skipped: from <h{from}> to <h{to}> ({missing} missing). At "{text}".',
      issueConsecutive:
        '<h{prevLevel}> "{prevText}" is directly followed by <h{level}> "{text}" without content in between. Check whether the first element really is a heading.',
      issueEmptyHeading:
        "Empty <h{level}> found. A heading without text does not work for screen reader users.",
      // Tree
      emptyText: "(empty)",
      skipMarker: "level skipped",
      ariaIssues: "Issues found",
      ariaTree: "Heading structure",
      // Disclaimer
      note:
        "This tool only checks the HTML markup. It cannot tell whether text that visually looks like a heading (for example bold or large text) should have been marked up as a heading. Nor whether a marked-up heading makes sense for the content."
    }
  };

  // ============================================================
  // i18n helpers — page language decides, no toggle on this page
  // ============================================================

  var currentLang = window.__paToolLang === "en" ? "en" : "nl";

  function t(key) {
    return (LANG[currentLang] && LANG[currentLang][key]) || LANG.nl[key] || key;
  }

  function fill(template, params) {
    return template.replace(/\{(\w+)\}/g, function (match, name) {
      return params[name] !== undefined ? String(params[name]) : match;
    });
  }

  // ============================================================
  // DOM refs
  // ============================================================

  var form = document.getElementById("checkerForm");
  var urlInput = document.getElementById("urlInput");
  var urlError = document.getElementById("urlError");
  var submitBtn = document.getElementById("submitBtn");
  var output = document.getElementById("output");
  var cta = document.getElementById("headingCta");

  if (!form) return;

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
      showUrlError(t("urlEmpty"));
      return;
    }

    var url = normalizeUrl(raw);
    if (!url) {
      showUrlError(t("urlInvalid"));
      return;
    }

    clearUrlError();

    submitBtn.disabled = true;
    submitBtn.textContent = t("submitBusy");
    output.innerHTML =
      '<p class="tool-heading__loading">' + escapeHtml(t("loading")) + "</p>";

    fetch(WORKER_URL + "?url=" + encodeURIComponent(url))
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.error) {
          output.innerHTML =
            '<div class="tool-heading__error" role="alert">' +
            escapeHtml(data.error) +
            "</div>";
          return;
        }
        output.innerHTML = renderResults(data);
        if (cta) cta.style.display = "";
      })
      .catch(function () {
        output.innerHTML =
          '<div class="tool-heading__error" role="alert">' +
          escapeHtml(t("fetchError")) +
          "</div>";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = t("submitBtn");
      });
  });

  // ============================================================
  // Issue localization
  // ============================================================

  // Worker sends "(leeg)" as sentinel for empty heading text.
  function displayText(text) {
    if (text === "(leeg)" || text === undefined || text === null || text === "") {
      return t("emptyText");
    }
    return text;
  }

  /**
   * Returns the localized plain-text message for an issue.
   * Falls back to the (Dutch) message field when the code is unknown,
   * so the tool keeps working with an older worker deployment.
   */
  function issueText(issue) {
    switch (issue.code) {
      case "no-headings":
        return t("issueNoHeadings");
      case "no-h1":
        return t("issueNoH1");
      case "multiple-h1":
        return fill(t("issueMultipleH1"), { count: issue.count });
      case "first-not-h1":
        return fill(t("issueFirstNotH1"), { level: issue.level });
      case "level-skipped": {
        var missing = [];
        for (var l = issue.from + 1; l < issue.to; l++) {
          missing.push("<h" + l + ">");
        }
        return fill(t("issueLevelSkipped"), {
          from: issue.from,
          to: issue.to,
          missing: missing.join(", "),
          text: displayText(issue.text)
        });
      }
      case "consecutive-same-level":
        return fill(t("issueConsecutive"), {
          prevLevel: issue.prevLevel !== undefined ? issue.prevLevel : issue.level,
          level: issue.level,
          prevText: displayText(issue.prevText),
          text: displayText(issue.text)
        });
      case "empty-heading":
        return fill(t("issueEmptyHeading"), { level: issue.level });
      default:
        return issue.message || "";
    }
  }

  function isSkipIssue(issue) {
    if (issue.code) return issue.code === "level-skipped";
    // Fallback for older worker responses without a code field.
    return !!(issue.message && issue.message.indexOf("overgeslagen") !== -1);
  }

  // ============================================================
  // Render results
  // ============================================================

  function renderResults(data) {
    var headings = data.headings;
    var issues = data.issues;
    var summary = data.summary;

    var errorCount = issues.filter(function (i) {
      return i.type === "error";
    }).length;
    var warningCount = issues.filter(function (i) {
      return i.type === "warning";
    }).length;

    var errorWord = errorCount === 1 ? t("errorSingular") : t("errorPlural");
    var warningWord =
      warningCount === 1 ? t("warningSingular") : t("warningPlural");

    var statsClass, statsText;
    if (errorCount > 0) {
      statsClass = "tool-heading__stat--error";
      statsText =
        errorCount + " " + errorWord + ", " + warningCount + " " + warningWord;
    } else if (warningCount > 0) {
      statsClass = "tool-heading__stat--warning";
      statsText = t("noErrors") + ", " + warningCount + " " + warningWord;
    } else {
      statsClass = "tool-heading__stat--ok";
      statsText = t("noIssues");
    }

    var levelSummary = Object.entries(summary.byLevel)
      .sort(function (a, b) {
        return a[0].localeCompare(b[0]);
      })
      .map(function (entry) {
        return entry[0] + ": " + entry[1];
      })
      .join(" · ");

    var issueIndices = new Set();
    var skipIndices = new Set();
    issues.forEach(function (issue) {
      if (issue.headingIndex !== undefined) {
        issueIndices.add(issue.headingIndex);
        if (isSkipIssue(issue)) {
          skipIndices.add(issue.headingIndex);
        }
      }
    });

    var html = "";

    // Header
    var headingNoun =
      summary.total === 1 ? t("headingSingular") : t("headingPlural");
    html +=
      '<div class="tool-heading__results-header">' +
      "<h2>" +
      escapeHtml(fill(t("headingsFound"), { count: summary.total, noun: headingNoun })) +
      "</h2>" +
      '<div class="tool-heading__summary-stats">' +
      '<span class="' +
      statsClass +
      '">' +
      escapeHtml(statsText) +
      "</span>" +
      "<span>" +
      escapeHtml(levelSummary) +
      "</span>" +
      "</div>" +
      "</div>";

    // Issues
    if (issues.length > 0) {
      html +=
        '<div class="tool-heading__issues" role="list" aria-label="' +
        escapeHtml(t("ariaIssues")) +
        '">';
      for (var j = 0; j < issues.length; j++) {
        var issue = issues[j];
        var isError = issue.type === "error";
        var cls = isError
          ? "tool-heading__issue--error"
          : "tool-heading__issue--warning";
        var label = isError ? t("labelError") : t("labelWarning");
        var message = escapeHtml(issueText(issue)).replace(
          /&lt;h(\d)&gt;/g,
          "<code>&lt;h$1&gt;</code>"
        );
        html +=
          '<div class="tool-heading__issue ' +
          cls +
          '" role="listitem">' +
          '<strong class="tool-heading__issue-label">' +
          escapeHtml(label) +
          "</strong> " +
          message +
          "</div>";
      }
      html += "</div>";
    }

    // Heading tree
    if (headings.length > 0) {
      html +=
        '<ol class="tool-heading__tree" aria-label="' +
        escapeHtml(t("ariaTree")) +
        '">';
      for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        var indent = (h.level - 1) * 1.5;
        var hasIssue = issueIndices.has(i);
        var hasSkip = skipIndices.has(i);
        var itemClass = hasIssue ? " tool-heading__item--issue" : "";
        var isEmpty = h.text === "(leeg)";
        var textClass = isEmpty
          ? " tool-heading__text--empty"
          : h.hidden
            ? " tool-heading__text--hidden"
            : "";

        html +=
          '<li class="tool-heading__item' +
          itemClass +
          '" style="padding-left: ' +
          (indent + 0.75) +
          'rem">' +
          '<span class="tool-heading__level tool-heading__level-' +
          h.level +
          '">h' +
          h.level +
          "</span>" +
          '<span class="tool-heading__text' +
          textClass +
          '">' +
          escapeHtml(isEmpty ? t("emptyText") : h.text) +
          "</span>" +
          (hasSkip
            ? '<span class="tool-heading__skip-marker">⚠ ' +
              escapeHtml(t("skipMarker")) +
              "</span>"
            : "") +
          "</li>";
      }
      html += "</ol>";
    }

    // Disclaimer
    html += '<p class="tool-heading__note">' + escapeHtml(t("note")) + "</p>";

    return html;
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
})();

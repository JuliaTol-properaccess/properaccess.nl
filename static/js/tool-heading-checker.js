/**
 * Koppenstructuur Checker — Proper Access
 * Calls Cloudflare Worker to analyze heading structure of a URL.
 */
(function () {
  "use strict";

  // =============================================
  // CONFIGURATIE — pas deze URL aan na deployment
  // =============================================
  var WORKER_URL = "https://heading-checker.juliatol.workers.dev/";

  var form = document.getElementById("checkerForm");
  var urlInput = document.getElementById("urlInput");
  var submitBtn = document.getElementById("submitBtn");
  var output = document.getElementById("output");
  var cta = document.getElementById("headingCta");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var url = urlInput.value.trim();
    if (!url) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Bezig...";
    output.innerHTML =
      '<p class="tool-heading__loading">Pagina ophalen en analyseren...</p>';

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
          '<div class="tool-heading__error" role="alert">Kon de pagina niet analyseren. Controleer de URL en probeer het opnieuw.</div>';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Controleer";
      });
  });

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

    var statsClass, statsText;
    if (errorCount > 0) {
      statsClass = "tool-heading__stat--error";
      statsText =
        errorCount +
        " fout" +
        (errorCount !== 1 ? "en" : "") +
        ", " +
        warningCount +
        " waarschuwing" +
        (warningCount !== 1 ? "en" : "");
    } else if (warningCount > 0) {
      statsClass = "tool-heading__stat--warning";
      statsText =
        "Geen fouten, " +
        warningCount +
        " waarschuwing" +
        (warningCount !== 1 ? "en" : "");
    } else {
      statsClass = "tool-heading__stat--ok";
      statsText = "Geen problemen gevonden";
    }

    var levelSummary = Object.entries(summary.byLevel)
      .sort(function (a, b) {
        return a[0].localeCompare(b[0]);
      })
      .map(function (entry) {
        return entry[0] + ": " + entry[1];
      })
      .join(" \u00b7 ");

    var issueIndices = new Set();
    issues.forEach(function (issue) {
      if (issue.headingIndex !== undefined) {
        issueIndices.add(issue.headingIndex);
      }
    });

    var skipIndices = new Set();
    issues.forEach(function (issue) {
      if (
        issue.message.includes("overgeslagen") &&
        issue.headingIndex !== undefined
      ) {
        skipIndices.add(issue.headingIndex);
      }
    });

    var html = "";

    // Header
    html +=
      '<div class="tool-heading__results-header">' +
      "<h2>" +
      summary.total +
      " kop" +
      (summary.total !== 1 ? "pen" : "") +
      " gevonden</h2>" +
      '<div class="tool-heading__summary-stats">' +
      '<span class="' +
      statsClass +
      '">' +
      statsText +
      "</span>" +
      "<span>" +
      levelSummary +
      "</span>" +
      "</div>" +
      "</div>";

    // Issues
    if (issues.length > 0) {
      html +=
        '<div class="tool-heading__issues" role="list" aria-label="Gevonden problemen">';
      for (var j = 0; j < issues.length; j++) {
        var issue = issues[j];
        var cls =
          issue.type === "error"
            ? "tool-heading__issue--error"
            : "tool-heading__issue--warning";
        var message = escapeHtml(issue.message).replace(
          /&lt;h(\d)&gt;/g,
          "<code>&lt;h$1&gt;</code>"
        );
        html +=
          '<div class="tool-heading__issue ' +
          cls +
          '" role="listitem">' +
          message +
          "</div>";
      }
      html += "</div>";
    }

    // Heading tree
    if (headings.length > 0) {
      html +=
        '<ol class="tool-heading__tree" aria-label="Koppenstructuur">';
      for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        var indent = (h.level - 1) * 1.5;
        var hasIssue = issueIndices.has(i);
        var hasSkip = skipIndices.has(i);
        var itemClass = hasIssue ? " tool-heading__item--issue" : "";
        var textClass =
          h.text === "(leeg)"
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
          escapeHtml(h.text) +
          "</span>" +
          (hasSkip
            ? '<span class="tool-heading__skip-marker">\u26a0 niveau overgeslagen</span>'
            : "") +
          "</li>";
      }
      html += "</ol>";
    }

    return html;
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
})();

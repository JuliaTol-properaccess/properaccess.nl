/**
 * Toegankelijkheidsverklaring Generator — Proper Access
 * 6-step wizard to generate an EAA accessibility statement.
 */
(function () {
  "use strict";

  var currentStep = 1;
  var totalSteps = 6;
  var issueCount = 0;

  // Set default statement date to today
  var statementDateEl = document.getElementById("statementDate");
  if (statementDateEl) statementDateEl.valueAsDate = new Date();

  // Show/hide audit fields based on method
  function updateAuditFields() {
    var method = radio("auditMethod");
    var showAuditor = method === "extern";
    var showDate =
      method === "extern" ||
      method === "intern" ||
      method === "geautomatiseerd";
    var showMethodology = method === "extern" || method === "intern";

    var auditorField = document.getElementById("auditorField");
    var auditDateField = document.getElementById("auditDateField");
    var auditMethodologyField = document.getElementById(
      "auditMethodologyField"
    );

    if (auditorField) auditorField.style.display = showAuditor ? "" : "none";
    if (auditDateField)
      auditDateField.style.display = showDate ? "" : "none";
    if (auditMethodologyField)
      auditMethodologyField.style.display = showMethodology ? "" : "none";
  }

  document.querySelectorAll('input[name="auditMethod"]').forEach(function (el) {
    el.addEventListener("change", updateAuditFields);
  });
  updateAuditFields();

  // Navigation
  window.nextStep = function () {
    if (!validateStep(currentStep)) return;
    if (currentStep < totalSteps) {
      setStep(currentStep + 1);
    }
  };

  window.prevStep = function () {
    if (currentStep > 1) {
      setStep(currentStep - 1);
    }
  };

  function setStep(step) {
    var currentEl = document.getElementById("step" + currentStep);
    if (currentEl) {
      currentEl.classList.remove("tool-verklaring__step--active");
    }

    currentStep = step;
    var newStep = document.getElementById("step" + currentStep);
    if (newStep) {
      newStep.classList.add("tool-verklaring__step--active");
    }

    // Update progress bar
    document
      .querySelectorAll(".tool-verklaring__progress-step")
      .forEach(function (el) {
        var s = parseInt(el.dataset.step);
        el.classList.toggle("tool-verklaring__progress-step--done", s < currentStep);
        el.classList.toggle(
          "tool-verklaring__progress-step--active",
          s === currentStep
        );
      });

    var progressBar = document.getElementById("progressBar");
    if (progressBar) progressBar.setAttribute("aria-valuenow", currentStep);

    var stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator)
      stepIndicator.textContent = "Stap " + currentStep + " van " + totalSteps;

    // Focus the step heading
    if (newStep) {
      var heading = newStep.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    }

    // If review step, build summary
    if (currentStep === totalSteps) {
      buildReviewSummary();
    }
  }

  function validateStep(step) {
    var stepEl = document.getElementById("step" + step);
    if (!stepEl) return true;
    var requiredFields = stepEl.querySelectorAll("[required]");
    var valid = true;

    for (var i = 0; i < requiredFields.length; i++) {
      var field = requiredFields[i];
      if (!field.value.trim()) {
        field.style.borderColor = "#dc2626";
        field.addEventListener(
          "input",
          function () {
            this.style.borderColor = "";
          },
          { once: true }
        );
        if (valid) field.focus();
        valid = false;
      }
    }

    return valid;
  }

  // Issues (non-accessible content)
  window.addIssue = function () {
    issueCount++;
    var list = document.getElementById("issuesList");
    if (!list) return;
    var entry = document.createElement("div");
    entry.className = "tool-verklaring__item-entry";
    entry.id = "issue-" + issueCount;
    entry.innerHTML =
      '<div class="tool-verklaring__item-header">' +
      "<strong>Onderdeel " +
      issueCount +
      "</strong>" +
      '<button type="button" class="tool-verklaring__btn-remove" onclick="removeIssue(' +
      issueCount +
      ')" aria-label="Verwijder onderdeel ' +
      issueCount +
      '">Verwijder</button>' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="issueDesc-' +
      issueCount +
      '">Beschrijving van het probleem</label>' +
      '<span class="tool-verklaring__hint">Bijv. "Het bestelproces is niet volledig met het toetsenbord te doorlopen" of "Productafbeeldingen missen alt-teksten"</span>' +
      '<textarea id="issueDesc-' +
      issueCount +
      '" rows="2"></textarea>' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="issueSc-' +
      issueCount +
      '">Welk(e) succescriterium/criteria (optioneel)</label>' +
      '<span class="tool-verklaring__hint">Bijv. "2.1.1 Toetsenbord" of "1.1.1 Niet-tekstuele content"</span>' +
      '<input type="text" id="issueSc-' +
      issueCount +
      '" placeholder="Bijv. 2.1.1, 1.1.1">' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="issueReason-' +
      issueCount +
      '">Reden en planning</label>' +
      '<span class="tool-verklaring__hint">Waarom voldoet dit niet en wanneer wordt het opgelost?</span>' +
      '<textarea id="issueReason-' +
      issueCount +
      '" rows="2" placeholder="Bijv. \'Wordt opgelost bij de volgende release in Q3 2026\'"></textarea>' +
      "</div>";
    list.appendChild(entry);

    var firstField = entry.querySelector("textarea");
    if (firstField) firstField.focus();
  };

  window.removeIssue = function (id) {
    var entry = document.getElementById("issue-" + id);
    if (entry) {
      entry.remove();
      var addBtn = document.getElementById("addIssueBtn");
      if (addBtn) addBtn.focus();
    }
  };

  function getIssues() {
    var issues = [];
    document
      .querySelectorAll("#issuesList .tool-verklaring__item-entry")
      .forEach(function (entry) {
        var id = entry.id.replace("issue-", "");
        var descEl = document.getElementById("issueDesc-" + id);
        var scEl = document.getElementById("issueSc-" + id);
        var reasonEl = document.getElementById("issueReason-" + id);
        var desc = descEl ? descEl.value.trim() : "";
        var sc = scEl ? scEl.value.trim() : "";
        var reason = reasonEl ? reasonEl.value.trim() : "";
        if (desc) {
          issues.push({ desc: desc, sc: sc, reason: reason });
        }
      });
    return issues;
  }

  // Collect all data
  function collectData() {
    return {
      orgName: val("orgName"),
      siteUrl: val("siteUrl"),
      siteName: val("siteName"),
      siteType: radio("siteType"),
      serviceType: radio("serviceType"),
      standard: radio("standard"),
      complianceStatus: radio("complianceStatus"),
      issues: getIssues(),
      disproportionateBurden: val("disproportionateBurden"),
      auditMethod: radio("auditMethod"),
      auditorName: val("auditorName"),
      auditDate: val("auditDate"),
      auditMethodology: radio("auditMethodology"),
      statementDate: val("statementDate"),
      feedbackEmail: val("feedbackEmail"),
      feedbackPhone: val("feedbackPhone"),
      feedbackUrl: val("feedbackUrl"),
      responseTime: radio("responseTime"),
      extraAccessibility: val("extraAccessibility"),
    };
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function radio(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : "";
  }

  // Review summary
  function buildReviewSummary() {
    var d = collectData();
    var siteLabel = d.siteName ? d.siteName + " (" + d.siteUrl + ")" : d.siteUrl;

    var serviceLabels = {
      "e-handel": "E-handelsdienst",
      "elektronische communicatie": "Elektronische communicatiedienst",
      beide: "E-handel en elektronische communicatie",
    };

    var html =
      '<table class="tool-verklaring__review-table">';
    var rows = [
      ["Bedrijf", d.orgName],
      [
        d.siteType === "mobiele applicatie" ? "App" : "Website",
        siteLabel,
      ],
      ["Type dienst", serviceLabels[d.serviceType] || d.serviceType],
      ["Standaard", d.standard],
      ["Status", statusLabel(d.complianceStatus)],
      [
        "Niet-toegankelijke onderdelen",
        d.issues.length > 0
          ? d.issues.length + " onderdeel(en)"
          : "Geen opgegeven",
      ],
      [
        "Onevenredige last",
        d.disproportionateBurden || "Niet van toepassing",
      ],
      ["Onderzoek", auditLabel(d)],
      ["Datum verklaring", formatDate(d.statementDate)],
      ["Contact", d.feedbackEmail],
    ];

    for (var i = 0; i < rows.length; i++) {
      html +=
        "<tr>" +
        '<td class="tool-verklaring__review-label">' +
        rows[i][0] +
        "</td>" +
        '<td class="tool-verklaring__review-value">' +
        escapeHtml(rows[i][1]) +
        "</td>" +
        "</tr>";
    }
    html += "</table>";

    var reviewSummary = document.getElementById("reviewSummary");
    if (reviewSummary) reviewSummary.innerHTML = html;
  }

  function statusLabel(status) {
    var labels = {
      "voldoet volledig": "Voldoet volledig",
      "voldoet gedeeltelijk": "Voldoet gedeeltelijk",
      "voldoet niet": "Voldoet niet",
    };
    return labels[status] || status;
  }

  function auditLabel(d) {
    if (d.auditMethod === "geen") return "Nog niet uitgevoerd";
    if (d.auditMethod === "geautomatiseerd") {
      var label = "Geautomatiseerde tests";
      if (d.auditDate) label += " op " + formatDate(d.auditDate);
      return label;
    }
    var lbl =
      d.auditMethod === "extern" ? "Extern onderzoek" : "Intern onderzoek";
    if (d.auditorName) lbl += " door " + d.auditorName;
    if (d.auditDate) lbl += " op " + formatDate(d.auditDate);
    return lbl;
  }

  function serviceTypeDescription(serviceType) {
    var descriptions = {
      "e-handel": "e-handelsdiensten",
      "elektronische communicatie": "elektronische communicatiediensten",
      beide: "e-handelsdiensten en elektronische communicatiediensten",
    };
    return descriptions[serviceType] || "digitale diensten";
  }

  // Generate statement
  window.generateStatement = function () {
    var d = collectData();
    var siteLabel = d.siteName || d.siteUrl;
    var typeLabel =
      d.siteType === "mobiele applicatie" ? "mobiele applicatie" : "website";

    var html = "";

    html +=
      "<h2>Toegankelijkheidsverklaring " + escapeHtml(d.orgName) + "</h2>";

    html +=
      "<p>" +
      escapeHtml(d.orgName) +
      " streeft ernaar de " +
      typeLabel +
      " <strong>" +
      escapeHtml(siteLabel) +
      "</strong> toegankelijk te maken voor iedereen, in overeenstemming met de European Accessibility Act (EAA) en de Europese norm EN 301 549.</p>";

    html +=
      "<p>Deze toegankelijkheidsverklaring is van toepassing op de " +
      typeLabel +
      ': <a href="' +
      escapeHtml(d.siteUrl) +
      '">' +
      escapeHtml(d.siteUrl) +
      "</a>.</p>";

    html +=
      "<p>" +
      escapeHtml(d.orgName) +
      " biedt via deze " +
      typeLabel +
      " " +
      serviceTypeDescription(d.serviceType) +
      " aan.</p>";

    // Compliance status
    html += "<h3>Nalevingsstatus</h3>";
    var statusTexts = {
      "voldoet volledig":
        "Deze " +
        typeLabel +
        " voldoet volledig aan <strong>" +
        escapeHtml(d.standard) +
        "</strong>.",
      "voldoet gedeeltelijk":
        "Deze " +
        typeLabel +
        " voldoet gedeeltelijk aan <strong>" +
        escapeHtml(d.standard) +
        "</strong>. De niet-toegankelijke onderdelen en de reden(en) daarvoor zijn hieronder vermeld.",
      "voldoet niet":
        "Deze " +
        typeLabel +
        " voldoet nog niet aan <strong>" +
        escapeHtml(d.standard) +
        "</strong>. De bekende niet-toegankelijke onderdelen zijn hieronder vermeld.",
    };
    html += "<p>" + (statusTexts[d.complianceStatus] || "") + "</p>";

    // Non-accessible content
    if (d.issues.length > 0) {
      html += "<h3>Niet-toegankelijke content</h3>";
      html +=
        "<p>De onderstaande content is niet (volledig) toegankelijk:</p>";
      html += "<ul>";
      for (var i = 0; i < d.issues.length; i++) {
        var issue = d.issues[i];
        var li = escapeHtml(issue.desc);
        if (issue.sc) li += " (" + escapeHtml(issue.sc) + ")";
        if (issue.reason) li += ". " + escapeHtml(issue.reason);
        html += "<li>" + li + "</li>";
      }
      html += "</ul>";
    }

    // Disproportionate burden
    if (d.disproportionateBurden) {
      html += "<h3>Onevenredige last</h3>";
      html +=
        "<p>Voor de volgende onderdelen wordt een beroep gedaan op onevenredige last als bedoeld in de EAA:</p>";
      html += "<p>" + escapeHtml(d.disproportionateBurden) + "</p>";
    }

    // How we work on accessibility
    html += "<h3>Hoe wij werken aan toegankelijkheid</h3>";
    html +=
      "<p>" +
      escapeHtml(d.orgName) +
      " neemt de volgende maatregelen om de toegankelijkheid van " +
      escapeHtml(siteLabel) +
      " te waarborgen:</p>";

    if (d.auditMethod === "extern") {
      var auditText = "Een extern toegankelijkheidsonderzoek is uitgevoerd";
      if (d.auditorName) auditText += " door " + escapeHtml(d.auditorName);
      if (d.auditDate) auditText += " op " + formatDate(d.auditDate);
      auditText += ".";
      html += "<ul><li>" + auditText + "</li>";
      if (d.auditMethodology === "WCAG-EM") {
        html +=
          "<li>Het onderzoek is uitgevoerd volgens de WCAG-EM evaluatiemethode.</li>";
      }
      html += "</ul>";
    } else if (d.auditMethod === "intern") {
      var internText = "Een intern toegankelijkheidsonderzoek is uitgevoerd";
      if (d.auditDate) internText += " op " + formatDate(d.auditDate);
      internText += ".";
      html += "<ul><li>" + internText + "</li></ul>";
    } else if (d.auditMethod === "geautomatiseerd") {
      var autoText = "Geautomatiseerde toegankelijkheidstests zijn uitgevoerd";
      if (d.auditDate) autoText += " op " + formatDate(d.auditDate);
      autoText +=
        ". Geautomatiseerde tests detecteren circa 30-40% van de mogelijke toegankelijkheidsproblemen. Een handmatig onderzoek wordt aanbevolen voor een volledig beeld.";
      html += "<ul><li>" + autoText + "</li></ul>";
    } else {
      html +=
        "<p>Er is nog geen formeel toegankelijkheidsonderzoek uitgevoerd. " +
        escapeHtml(d.orgName) +
        " is van plan dit in de toekomst te laten uitvoeren.</p>";
    }

    // Extra accessibility measures
    if (d.extraAccessibility) {
      html += "<h3>Aanvullende ondersteuning</h3>";
      html += "<p>" + escapeHtml(d.extraAccessibility) + "</p>";
    }

    // Feedback and contact
    html += "<h3>Feedback en contactgegevens</h3>";
    html +=
      "<p>Loop je tegen een toegankelijkheidsprobleem aan op deze " +
      typeLabel +
      "? Laat het ons weten, zodat we het kunnen verbeteren. Je kunt ons op de volgende manieren bereiken:</p>";
    html += "<ul>";
    html +=
      '<li>E-mail: <a href="mailto:' +
      escapeHtml(d.feedbackEmail) +
      '">' +
      escapeHtml(d.feedbackEmail) +
      "</a></li>";
    if (d.feedbackPhone)
      html += "<li>Telefoon: " + escapeHtml(d.feedbackPhone) + "</li>";
    if (d.feedbackUrl)
      html +=
        '<li>Contactformulier: <a href="' +
        escapeHtml(d.feedbackUrl) +
        '">' +
        escapeHtml(d.feedbackUrl) +
        "</a></li>";
    html += "</ul>";
    html +=
      "<p>We streven ernaar om binnen " +
      escapeHtml(d.responseTime) +
      " te reageren op je melding.</p>";

    // Enforcement — ACM
    html += "<h3>Handhaving</h3>";
    html +=
      '<p>De <a href="https://www.acm.nl/nl/toegankelijkheid" rel="noopener">Autoriteit Consument &amp; Markt (ACM)</a> houdt toezicht op de naleving van de toegankelijkheidseisen uit de European Accessibility Act. Als je vindt dat wij niet goed reageren op je melding, kun je een klacht indienen bij de ACM.</p>';

    // Statement date
    html += "<h3>Over deze verklaring</h3>";
    html +=
      "<p>Deze verklaring is opgesteld op " +
      formatDate(d.statementDate) +
      ".</p>";

    // Show output
    var outputBox = document.getElementById("outputBox");
    var outputContainer = document.getElementById("outputContainer");
    var wizardForm = document.getElementById("wizardForm");
    var progress = document.querySelector(".tool-verklaring__progress");
    var stepIndicator = document.getElementById("stepIndicator");

    if (outputBox) outputBox.innerHTML = html;
    if (outputContainer) outputContainer.classList.add("tool-verklaring__output--active");
    if (wizardForm) wizardForm.style.display = "none";
    if (progress) progress.style.display = "none";
    if (stepIndicator) stepIndicator.style.display = "none";

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Copy functions
  window.copyAsText = function () {
    var box = document.getElementById("outputBox");
    if (!box) return;
    navigator.clipboard.writeText(box.innerText).then(showCopyFeedback);
  };

  window.copyAsHtml = function () {
    var box = document.getElementById("outputBox");
    if (!box) return;
    try {
      navigator.clipboard
        .write([
          new ClipboardItem({
            "text/html": new Blob([box.innerHTML], { type: "text/html" }),
            "text/plain": new Blob([box.innerText], {
              type: "text/plain",
            }),
          }),
        ])
        .then(showCopyFeedback);
    } catch (e) {
      navigator.clipboard.writeText(box.innerHTML).then(showCopyFeedback);
    }
  };

  function showCopyFeedback() {
    var el = document.getElementById("copyFeedback");
    if (!el) return;
    el.classList.add("tool-verklaring__copy-feedback--show");
    setTimeout(function () {
      el.classList.remove("tool-verklaring__copy-feedback--show");
    }, 2000);
  }

  // Start over / edit
  window.startOver = function () {
    var wizardForm = document.getElementById("wizardForm");
    if (wizardForm) {
      wizardForm.reset();
      wizardForm.style.display = "";
    }
    var issuesList = document.getElementById("issuesList");
    if (issuesList) issuesList.innerHTML = "";
    issueCount = 0;
    var statementDate = document.getElementById("statementDate");
    if (statementDate) statementDate.valueAsDate = new Date();
    var outputContainer = document.getElementById("outputContainer");
    if (outputContainer)
      outputContainer.classList.remove("tool-verklaring__output--active");
    var progress = document.querySelector(".tool-verklaring__progress");
    if (progress) progress.style.display = "";
    var stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator) stepIndicator.style.display = "";
    updateAuditFields();
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.editStatement = function () {
    var outputContainer = document.getElementById("outputContainer");
    if (outputContainer)
      outputContainer.classList.remove("tool-verklaring__output--active");
    var wizardForm = document.getElementById("wizardForm");
    if (wizardForm) wizardForm.style.display = "";
    var progress = document.querySelector(".tool-verklaring__progress");
    if (progress) progress.style.display = "";
    var stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator) stepIndicator.style.display = "";
    setStep(totalSteps);
  };

  // Helpers
  function formatDate(dateStr) {
    if (!dateStr) return "";
    var d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text || "";
    return div.innerHTML;
  }
})();

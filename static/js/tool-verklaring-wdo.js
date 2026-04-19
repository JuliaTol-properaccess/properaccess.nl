/**
 * Toegankelijkheidsverklaring Generator (BDTO) — Proper Access
 * 6-step wizard to generate a BDTO accessibility statement.
 */
(function () {
  "use strict";

  var currentStep = 1;
  var totalSteps = 6;
  var issueCount = 0;
  var measureCount = 0;

  // Set default statement date to today
  var statementDateEl = document.getElementById("statementDate");
  if (statementDateEl) statementDateEl.valueAsDate = new Date();

  // Show/hide audit fields based on method
  function updateAuditFields() {
    var method = radio("auditMethod");
    var showAuditor = method === "extern";
    var showReport = method === "extern" || method === "intern";
    var showScope = method === "extern" || method === "intern";
    var showDate = method === "extern" || method === "intern" || method === "geautomatiseerd";
    var showMethodology = method === "extern" || method === "intern";

    toggle("auditorField", showAuditor);
    toggle("auditReportField", showReport);
    toggle("auditScopeField", showScope);
    toggle("auditDateField", showDate);
    toggle("auditMethodologyField", showMethodology);
  }

  function toggle(id, show) {
    var el = document.getElementById(id);
    if (el) el.style.display = show ? "" : "none";
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
    if (currentEl) currentEl.classList.remove("tool-verklaring__step--active");

    currentStep = step;
    var newStep = document.getElementById("step" + currentStep);
    if (newStep) newStep.classList.add("tool-verklaring__step--active");

    // Update progress bar
    document.querySelectorAll(".tool-verklaring__progress-step").forEach(function (el) {
      var s = parseInt(el.dataset.step);
      el.classList.toggle("tool-verklaring__progress-step--done", s < currentStep);
      el.classList.toggle("tool-verklaring__progress-step--active", s === currentStep);
    });

    var progressBar = document.getElementById("progressBar");
    if (progressBar) progressBar.setAttribute("aria-valuenow", currentStep);

    var stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator) stepIndicator.textContent = "Stap " + currentStep + " van " + totalSteps;

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
        field.addEventListener("input", function () {
          this.style.borderColor = "";
        }, { once: true });
        if (valid) field.focus();
        valid = false;
      }
    }
    return valid;
  }

  // Issues (afwijkingen)
  window.addIssue = function () {
    issueCount++;
    var list = document.getElementById("issuesList");
    if (!list) return;
    var entry = document.createElement("div");
    entry.className = "tool-verklaring__item-entry";
    entry.id = "issue-" + issueCount;
    entry.innerHTML =
      '<div class="tool-verklaring__item-header">' +
      "<strong>Afwijking " + issueCount + "</strong>" +
      '<button type="button" class="tool-verklaring__btn-remove" onclick="removeIssue(' + issueCount + ')" aria-label="Verwijder afwijking ' + issueCount + '">Verwijder</button>' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="issueSc-' + issueCount + '">WCAG-succescriterium</label>' +
      '<span class="tool-verklaring__hint">Bijv. "1.4.3 Contrast (minimum)" of "2.1.1 Toetsenbord"</span>' +
      '<input type="text" id="issueSc-' + issueCount + '" placeholder="Bijv. 1.4.3 Contrast (minimum)">' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="issueDesc-' + issueCount + '">Beschrijving van de afwijking</label>' +
      '<span class="tool-verklaring__hint">Wat is het probleem en waar komt het voor?</span>' +
      '<textarea id="issueDesc-' + issueCount + '" rows="2"></textarea>' +
      "</div>";
    list.appendChild(entry);

    var firstField = entry.querySelector("input");
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
    document.querySelectorAll("#issuesList .tool-verklaring__item-entry").forEach(function (entry) {
      var id = entry.id.replace("issue-", "");
      var scEl = document.getElementById("issueSc-" + id);
      var descEl = document.getElementById("issueDesc-" + id);
      var sc = scEl ? scEl.value.trim() : "";
      var desc = descEl ? descEl.value.trim() : "";
      if (sc || desc) {
        issues.push({ sc: sc, desc: desc });
      }
    });
    return issues;
  }

  // Measures (maatregelen)
  window.addMeasure = function () {
    measureCount++;
    var list = document.getElementById("measuresList");
    if (!list) return;
    var entry = document.createElement("div");
    entry.className = "tool-verklaring__item-entry";
    entry.id = "measure-" + measureCount;
    entry.innerHTML =
      '<div class="tool-verklaring__item-header">' +
      "<strong>Maatregel " + measureCount + "</strong>" +
      '<button type="button" class="tool-verklaring__btn-remove" onclick="removeMeasure(' + measureCount + ')" aria-label="Verwijder maatregel ' + measureCount + '">Verwijder</button>' +
      "</div>" +
      '<div class="tool-verklaring__field">' +
      '<label for="measureDesc-' + measureCount + '">Beschrijving van de maatregel</label>' +
      '<textarea id="measureDesc-' + measureCount + '" rows="2" placeholder="Bijv. \'Nieuw ticketingsysteem laten auditen en aanpassen\'"></textarea>' +
      "</div>" +
      '<div class="tool-verklaring__field tool-verklaring__field--short">' +
      '<label for="measureDate-' + measureCount + '">Streefdatum</label>' +
      '<input type="date" id="measureDate-' + measureCount + '">' +
      "</div>";
    list.appendChild(entry);

    var firstField = entry.querySelector("textarea");
    if (firstField) firstField.focus();
  };

  window.removeMeasure = function (id) {
    var entry = document.getElementById("measure-" + id);
    if (entry) {
      entry.remove();
      var addBtn = document.getElementById("addMeasureBtn");
      if (addBtn) addBtn.focus();
    }
  };

  function getMeasures() {
    var measures = [];
    document.querySelectorAll("#measuresList .tool-verklaring__item-entry").forEach(function (entry) {
      var id = entry.id.replace("measure-", "");
      var descEl = document.getElementById("measureDesc-" + id);
      var dateEl = document.getElementById("measureDate-" + id);
      var desc = descEl ? descEl.value.trim() : "";
      var date = dateEl ? dateEl.value.trim() : "";
      if (desc) {
        measures.push({ desc: desc, date: date });
      }
    });
    return measures;
  }

  // Collect all data
  function collectData() {
    return {
      orgName: val("orgName"),
      siteUrl: val("siteUrl"),
      siteName: val("siteName"),
      siteType: radio("siteType"),
      orgType: radio("orgType"),
      standard: radio("standard"),
      complianceLevel: radio("complianceLevel"),
      auditMethod: radio("auditMethod"),
      auditorName: val("auditorName"),
      auditReportUrl: val("auditReportUrl"),
      auditScope: val("auditScope"),
      auditDate: val("auditDate"),
      auditMethodology: radio("auditMethodology"),
      statementDate: val("statementDate"),
      issues: getIssues(),
      alternatives: val("alternatives"),
      measures: getMeasures(),
      disproportionateBurden: val("disproportionateBurden"),
      feedbackEmail: val("feedbackEmail"),
      feedbackPhone: val("feedbackPhone"),
      contactUrl: val("contactUrl"),
      responseTime: radio("responseTime"),
      complaintProcedure: val("complaintProcedure")
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

  // Status helpers
  function statusLabel(level) {
    var labels = {
      A: "A — Voldoet volledig",
      B: "B — Voldoet gedeeltelijk",
      C: "C — Eerste maatregelen genomen",
      D: "D — Voldoet niet"
    };
    return labels[level] || level;
  }

  function statusColor(level) {
    var colors = { A: "#16a34a", B: "#d97706", C: "#ea580c", D: "#dc2626" };
    return colors[level] || "#6b7280";
  }

  function orgTypeLabel(type) {
    var labels = {
      museum: "Museum",
      theater: "Theater / podiumkunsten",
      bibliotheek: "Bibliotheek",
      onderwijs: "Onderwijsinstelling",
      cultureel: "Culturele instelling",
      "semi-overheid": "Semi-overheidsorganisatie"
    };
    return labels[type] || type;
  }

  // Review summary
  function buildReviewSummary() {
    var d = collectData();
    var siteLabel = d.siteName ? d.siteName + " (" + d.siteUrl + ")" : d.siteUrl;

    var html = '<table class="tool-verklaring__review-table">';
    var rows = [
      ["Organisatie", d.orgName],
      ["Type organisatie", orgTypeLabel(d.orgType)],
      [d.siteType === "mobiele applicatie" ? "App" : "Website", siteLabel],
      ["Standaard", d.standard],
      ["Status", statusLabel(d.complianceLevel)],
      ["Onderzoek", auditLabel(d)],
      ["Alternatieven", d.alternatives || "Geen opgegeven"],
      ["Maatregelen", d.measures.length > 0 ? d.measures.length + " maatregel(en)" : "Geen opgegeven"],
      ["Onevenredige last", d.disproportionateBurden || "Niet van toepassing"],
      ["Datum verklaring", formatDate(d.statementDate)],
      ["Contact", d.feedbackEmail]
    ];

    for (var i = 0; i < rows.length; i++) {
      html += "<tr>" +
        '<td class="tool-verklaring__review-label">' + rows[i][0] + "</td>" +
        '<td class="tool-verklaring__review-value">' + escapeHtml(rows[i][1]) + "</td>" +
        "</tr>";
    }
    html += "</table>";

    var reviewSummary = document.getElementById("reviewSummary");
    if (reviewSummary) reviewSummary.innerHTML = html;
  }

  function auditLabel(d) {
    if (d.auditMethod === "geen") return "Nog niet uitgevoerd";
    if (d.auditMethod === "geautomatiseerd") {
      var label = "Geautomatiseerde tests";
      if (d.auditDate) label += " op " + formatDate(d.auditDate);
      return label;
    }
    var lbl = d.auditMethod === "extern" ? "Extern onderzoek" : "Intern onderzoek";
    if (d.auditorName) lbl += " door " + d.auditorName;
    if (d.auditDate) lbl += " op " + formatDate(d.auditDate);
    return lbl;
  }

  // Generate statement
  window.generateStatement = function () {
    var d = collectData();
    var siteLabel = d.siteName || d.siteUrl;
    var typeLabel = d.siteType === "mobiele applicatie" ? "mobiele applicatie" : "website";
    var color = statusColor(d.complianceLevel);

    var html = "";

    // Header with status badge
    html += '<h2>Toegankelijkheidsverklaring ' + escapeHtml(d.orgName) +
      ' <span class="tool-verklaring__status-badge" style="background:' + color + ';">' +
      escapeHtml(d.complianceLevel) + '</span></h2>';

    // Introduction
    html += "<p>" + escapeHtml(d.orgName) + " streeft ernaar de " + typeLabel +
      " <strong>" + escapeHtml(siteLabel) + "</strong> toegankelijk te maken voor iedereen, " +
      "in overeenstemming met het Besluit digitale toegankelijkheid overheid.</p>";

    html += '<p>Deze toegankelijkheidsverklaring is van toepassing op de ' + typeLabel +
      ': <a href="' + escapeHtml(d.siteUrl) + '">' + escapeHtml(d.siteUrl) + "</a>.</p>";

    // Compliance status
    html += "<h3>Nalevingsstatus</h3>";
    var statusTexts = {
      A: "Deze " + typeLabel + " voldoet volledig aan <strong>" + escapeHtml(d.standard) + "</strong>.",
      B: "Deze " + typeLabel + " voldoet gedeeltelijk aan <strong>" + escapeHtml(d.standard) +
        "</strong>. Voor de specifieke afwijkingen verwijzen we naar het auditrapport.",
      C: "Er zijn eerste maatregelen genomen om deze " + typeLabel + " te laten voldoen aan <strong>" +
        escapeHtml(d.standard) + "</strong>. Audit-resultaten worden binnen 6 maanden verwacht.",
      D: "Deze " + typeLabel + " voldoet nog niet aan <strong>" + escapeHtml(d.standard) +
        "</strong>."
    };
    html += "<p>" + (statusTexts[d.complianceLevel] || "") + "</p>";

    // Audit results
    html += "<h3>Onderzoeksresultaten</h3>";
    if (d.auditMethod === "extern") {
      html += "<p>Een extern toegankelijkheidsonderzoek is uitgevoerd";
      if (d.auditorName) html += " door " + escapeHtml(d.auditorName);
      if (d.auditDate) html += " op " + formatDate(d.auditDate);
      html += ".</p>";
      if (d.auditMethodology === "WCAG-EM") {
        html += "<p>Het onderzoek is uitgevoerd volgens de WCAG-EM evaluatiemethode.</p>";
      }
    } else if (d.auditMethod === "intern") {
      html += "<p>Een intern toegankelijkheidsonderzoek is uitgevoerd";
      if (d.auditDate) html += " op " + formatDate(d.auditDate);
      html += ".</p>";
    } else if (d.auditMethod === "geautomatiseerd") {
      html += "<p>Geautomatiseerde toegankelijkheidstests zijn uitgevoerd";
      if (d.auditDate) html += " op " + formatDate(d.auditDate);
      html += ". Geautomatiseerde tests detecteren circa 30-40% van de mogelijke toegankelijkheidsproblemen.</p>";
    } else {
      html += "<p>Er is nog geen formeel toegankelijkheidsonderzoek uitgevoerd.</p>";
    }

    if (d.auditScope) {
      html += "<p><strong>Scope:</strong> " + escapeHtml(d.auditScope) + "</p>";
    }
    if (d.auditReportUrl) {
      html += '<p><strong>Onderzoeksrapport:</strong> <a href="' + escapeHtml(d.auditReportUrl) + '">' +
        escapeHtml(d.auditReportUrl) + "</a></p>";
    }

    // Alternatives
    if (d.alternatives) {
      html += "<h3>Alternatieven</h3>";
      html += "<p>" + escapeHtml(d.alternatives) + "</p>";
    }

    // Measures
    if (d.measures.length > 0) {
      html += "<h3>Maatregelen</h3>";
      html += "<p>" + escapeHtml(d.orgName) + " neemt de volgende maatregelen om de toegankelijkheid te verbeteren:</p>";
      html += "<ul>";
      for (var j = 0; j < d.measures.length; j++) {
        var m = d.measures[j];
        var mli = escapeHtml(m.desc);
        if (m.date) mli += " (streefdatum: " + formatDate(m.date) + ")";
        html += "<li>" + mli + "</li>";
      }
      html += "</ul>";
    }

    // Disproportionate burden
    if (d.disproportionateBurden) {
      html += "<h3>Onevenredige last</h3>";
      html += "<p>Voor de volgende onderdelen wordt een beroep gedaan op onevenredige last:</p>";
      html += "<p>" + escapeHtml(d.disproportionateBurden) + "</p>";
    }

    // Feedback and contact
    html += "<h3>Feedback en contactgegevens</h3>";
    html += "<p>Loop je tegen een toegankelijkheidsprobleem aan? Laat het ons weten, zodat we het kunnen verbeteren.</p>";
    html += "<ul>";
    html += '<li>E-mail: <a href="mailto:' + escapeHtml(d.feedbackEmail) + '">' + escapeHtml(d.feedbackEmail) + "</a></li>";
    if (d.feedbackPhone) html += "<li>Telefoon: " + escapeHtml(d.feedbackPhone) + "</li>";
    if (d.contactUrl) html += '<li>Contactpagina: <a href="' + escapeHtml(d.contactUrl) + '">' + escapeHtml(d.contactUrl) + "</a></li>";
    html += "</ul>";
    html += "<p>We streven ernaar om binnen " + escapeHtml(d.responseTime) + " te reageren op je melding.</p>";

    // Complaint procedure
    if (d.complaintProcedure) {
      html += "<h3>Klachtenprocedure</h3>";
      html += "<p>" + escapeHtml(d.complaintProcedure) + "</p>";
    }

    // Enforcement
    html += "<h3>Handhaving</h3>";
    html += '<p>Als je vindt dat wij niet goed reageren op je melding over toegankelijkheid, ' +
      'kun je een klacht indienen bij de ' +
      '<a href="https://www.nationaleombudsman.nl" rel="noopener">Nationale ombudsman</a>.</p>';

    // Statement date
    html += "<h3>Over deze verklaring</h3>";
    html += "<p>Deze verklaring is opgesteld op " + formatDate(d.statementDate) + ".</p>";

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
      navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([box.innerHTML], { type: "text/html" }),
          "text/plain": new Blob([box.innerText], { type: "text/plain" })
        })
      ]).then(showCopyFeedback);
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
    var measuresList = document.getElementById("measuresList");
    if (measuresList) measuresList.innerHTML = "";
    issueCount = 0;
    measureCount = 0;
    var statementDate = document.getElementById("statementDate");
    if (statementDate) statementDate.valueAsDate = new Date();
    var outputContainer = document.getElementById("outputContainer");
    if (outputContainer) outputContainer.classList.remove("tool-verklaring__output--active");
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
    if (outputContainer) outputContainer.classList.remove("tool-verklaring__output--active");
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
      year: "numeric"
    });
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text || "";
    return div.innerHTML;
  }
})();

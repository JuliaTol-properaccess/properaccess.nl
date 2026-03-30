document.addEventListener("DOMContentLoaded", function () {
  // === Scroll-observer voor sidebar navigatie ===
  const sections = document.querySelectorAll("article");
  const navLinks = document.querySelectorAll(".sidebar a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(
            `.sidebar a[href="#${id}"]`,
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));

  // === Paginatitel linken naar externe URL ===
  document.querySelectorAll("#issues > article.issue").forEach((article) => {
    const paragraphs = article.querySelectorAll("p");
    for (const p of paragraphs) {
      const text = p.textContent.trim();
      if (text.startsWith("Link naar pagina:")) {
        const link = p.querySelector("a");
        if (!link) continue;
        const url = link.href;

        // Update h2 title link to point to external URL
        const titleLink = article.querySelector("h2.issue-title a");
        if (titleLink) {
          titleLink.href = url;
          titleLink.target = "_blank";
          titleLink.rel = "noopener";
          // Replace link icon with external link SVG
          const icon = titleLink.querySelector(".fa-link");
          if (icon) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("viewBox", "0 0 16 16");
            svg.setAttribute("width", "12");
            svg.setAttribute("height", "12");
            svg.setAttribute("aria-hidden", "true");
            svg.setAttribute("class", "icon-external");
            svg.innerHTML = '<path fill="currentColor" d="M9 1h6v6h-2V4.4L7.7 9.7 6.3 8.3 11.6 3H9V1zM3 3h4v2H3v8h8V9h2v6H1V3h2z"/>';
            icon.replaceWith(svg);
          }
        }

        // Hide the "Link naar pagina" paragraph
        p.hidden = true;
        break;
      }
    }
  });

  // === Nummering toevoegen aan <h3> binnen #issues ===
  let teller = 1;
  const issueHeaders = document.querySelectorAll("#issues h3");

  issueHeaders.forEach((header) => {
    const tekst = header.textContent.trim();

    if (!/^#\d+/.test(tekst)) {
      // Check of er een hidden .issue-id span in dezelfde .issue div staat
      const issueDiv = header.closest(".issue");
      const idSpan = issueDiv ? issueDiv.querySelector(".issue-id") : null;
      const nr = idSpan ? idSpan.textContent.trim() : teller;
      header.textContent = `#${nr} - ${tekst}`;
      if (!idSpan) teller++;

      // "Nieuw" label toevoegen als er een .new-finding span is
      const newSpan = issueDiv ? issueDiv.querySelector(".new-finding") : null;
      if (newSpan) {
        const label = document.createElement("span");
        label.className = "new-label";
        label.textContent = "Nieuw";
        header.appendChild(label);
      }
    }
  });

  // === Permalink-links toevoegen aan h3's binnen .issue ===
  document.querySelectorAll("#issues .issue h3").forEach((header) => {
    const slug = header.textContent
      .trim()
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "");
    header.id = slug;

    const text = header.textContent;
    header.textContent = "";

    const link = document.createElement("a");
    link.href = `#${slug}`;
    link.textContent = text;

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-link";
    icon.setAttribute("aria-hidden", "true");
    link.appendChild(icon);

    header.appendChild(link);
  });

  // === WCAG principe, niveau + type beperking toevoegen aan meta ===
  const wcagData = {
    // Principe 1: Waarneembaar
    "1.1.1": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.2.1": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel", "Auditief"] },
    "1.2.2": { principe: "Waarneembaar", niveau: "A", beperking: ["Auditief"] },
    "1.2.3": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.2.4": { principe: "Waarneembaar", niveau: "AA", beperking: ["Auditief"] },
    "1.2.5": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.3.1": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.3.2": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.3.3": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.3.4": { principe: "Waarneembaar", niveau: "AA", beperking: ["Motorisch"] },
    "1.3.5": { principe: "Waarneembaar", niveau: "AA", beperking: ["Cognitief", "Motorisch"] },
    "1.4.1": { principe: "Waarneembaar", niveau: "A", beperking: ["Visueel"] },
    "1.4.2": { principe: "Waarneembaar", niveau: "A", beperking: ["Auditief", "Cognitief"] },
    "1.4.3": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.4.4": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.4.5": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.4.10": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.4.11": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel"] },
    "1.4.12": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel", "Cognitief"] },
    "1.4.13": { principe: "Waarneembaar", niveau: "AA", beperking: ["Visueel", "Motorisch"] },
    // Principe 2: Bedienbaar
    "2.1.1": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.1.2": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.1.4": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.2.1": { principe: "Bedienbaar", niveau: "A", beperking: ["Visueel", "Motorisch", "Cognitief"] },
    "2.2.2": { principe: "Bedienbaar", niveau: "A", beperking: ["Visueel", "Cognitief"] },
    "2.3.1": { principe: "Bedienbaar", niveau: "A", beperking: ["Visueel"] },
    "2.4.1": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.4.2": { principe: "Bedienbaar", niveau: "A", beperking: ["Visueel", "Cognitief"] },
    "2.4.3": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.4.4": { principe: "Bedienbaar", niveau: "A", beperking: ["Visueel", "Cognitief"] },
    "2.4.5": { principe: "Bedienbaar", niveau: "AA", beperking: ["Cognitief"] },
    "2.4.6": { principe: "Bedienbaar", niveau: "AA", beperking: ["Visueel", "Cognitief"] },
    "2.4.7": { principe: "Bedienbaar", niveau: "AA", beperking: ["Motorisch"] },
    "2.4.11": { principe: "Bedienbaar", niveau: "AA", beperking: ["Motorisch"] },
    "2.5.1": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.5.2": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.5.3": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch", "Visueel"] },
    "2.5.4": { principe: "Bedienbaar", niveau: "A", beperking: ["Motorisch"] },
    "2.5.7": { principe: "Bedienbaar", niveau: "AA", beperking: ["Motorisch"] },
    "2.5.8": { principe: "Bedienbaar", niveau: "AA", beperking: ["Motorisch"] },
    // Principe 3: Begrijpelijk
    "3.1.1": { principe: "Begrijpelijk", niveau: "A", beperking: ["Visueel"] },
    "3.1.2": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Visueel"] },
    "3.2.1": { principe: "Begrijpelijk", niveau: "A", beperking: ["Cognitief", "Motorisch"] },
    "3.2.2": { principe: "Begrijpelijk", niveau: "A", beperking: ["Cognitief"] },
    "3.2.3": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Cognitief"] },
    "3.2.4": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Cognitief"] },
    "3.2.6": { principe: "Begrijpelijk", niveau: "A", beperking: ["Cognitief"] },
    "3.3.1": { principe: "Begrijpelijk", niveau: "A", beperking: ["Visueel", "Cognitief"] },
    "3.3.2": { principe: "Begrijpelijk", niveau: "A", beperking: ["Cognitief"] },
    "3.3.3": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Cognitief"] },
    "3.3.4": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Cognitief"] },
    "3.3.7": { principe: "Begrijpelijk", niveau: "A", beperking: ["Cognitief", "Motorisch"] },
    "3.3.8": { principe: "Begrijpelijk", niveau: "AA", beperking: ["Cognitief"] },
    // Principe 4: Robuust
    "4.1.2": { principe: "Robuust", niveau: "A", beperking: ["Visueel"] },
    "4.1.3": { principe: "Robuust", niveau: "AA", beperking: ["Visueel"] },
  };

  document.querySelectorAll("#issues .meta").forEach((meta) => {
    const wcagSpan = Array.from(meta.querySelectorAll("span")).find((s) => {
      const b = s.querySelector("b");
      return b && b.textContent.trim() === "WCAG";
    });
    if (!wcagSpan) return;

    const numbers = wcagSpan.textContent
      .replace(/WCAG\s*:?\s*/, "")
      .split(/[\s,]+/)
      .filter(Boolean);

    const principes = new Set();
    const niveaus = new Set();
    const beperkingen = new Set();

    numbers.forEach((num) => {
      const data = wcagData[num];
      if (data) {
        principes.add(data.principe);
        niveaus.add(data.niveau);
        data.beperking.forEach((b) => beperkingen.add(b));
      }
    });

    if (principes.size > 0) {
      const span = document.createElement("span");
      span.className = "type richtlijn";
      span.innerHTML = `<b>Principe</b>: ${[...principes].join(", ")}`;
      meta.appendChild(span);
    }

    if (niveaus.size > 0) {
      const span = document.createElement("span");
      span.className = "type";
      span.innerHTML = `<b>Niveau</b>: ${[...niveaus].sort().join(", ")}`;
      meta.appendChild(span);
    }

    if (beperkingen.size > 0) {
      const span = document.createElement("span");
      span.className = "type beperking";
      span.innerHTML = `<b>Beperking</b>: ${[...beperkingen].join(", ")}`;
      meta.appendChild(span);
    }
  });

  // === Permalink kopiëren bij klik op link-icoon ===
  document.querySelectorAll("#issues .fa-link").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const link = icon.closest("a");
      const url = link.href;
      navigator.clipboard.writeText(url).then(() => {
        const tooltip = document.createElement("span");
        tooltip.className = "copy-tooltip";
        tooltip.textContent = "Link gekopieerd!";
        const heading = link.closest("h2, h3");
        heading.appendChild(tooltip);
        setTimeout(() => tooltip.remove(), 2000);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const exportBtn = document.getElementById("exportCsvBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", function () {
    const csvRows = [
      [
        "Pagina",
        "Issue",
        "WCAG",
        "Impact",
        "Type",
        "Beschrijving",
        "Oplossing",
      ],
    ];

    // Alle artikelen met class "issue"
    const issues = document.querySelectorAll("article.issue");

    issues.forEach((article) => {
      const pageTitle =
        article.querySelector("h2.issue-title")?.textContent.trim() || "";

      // Support both accordion structure (details.finding-accordion) and flat h3 structure
      const accordions = article.querySelectorAll("details.finding-accordion");

      if (accordions.length > 0) {
        // Accordion structure
        accordions.forEach((acc) => {
          const titleEl = acc.querySelector(".finding-title");
          const currentIssue = titleEl ? titleEl.textContent.trim() : "";
          const body = acc.querySelector(".finding-body");
          if (!body || !currentIssue) return;

          let impact = "", type = "", wcag = "", beschrijving = "", oplossing = "";

          const metaDiv = body.querySelector(".meta");
          if (metaDiv) {
            const impactSpan = metaDiv.querySelector(".impact");
            if (impactSpan) impact = impactSpan.textContent.replace(/Impact\s*:?\s*/i, "").trim();
            const typeSpan = Array.from(metaDiv.querySelectorAll(".type")).find((s) => {
              const b = s.querySelector("b");
              return b && b.textContent.trim() === "Type";
            });
            if (typeSpan) type = typeSpan.textContent.replace(/Type\s*:?\s*/i, "").trim();
            const wcagSpan = Array.from(metaDiv.querySelectorAll("span")).find((s) =>
              s.textContent.includes("WCAG"),
            );
            if (wcagSpan) wcag = wcagSpan.textContent.replace(/WCAG\s*:?\s*/i, "").trim();
          }

          let parsingOplossing = false;
          body.querySelectorAll("h4, p, figure").forEach((el) => {
            if (el.tagName === "H4" && el.textContent.trim().toLowerCase().startsWith("oplossing")) {
              parsingOplossing = true;
            } else if (el.tagName === "P" || el.tagName === "FIGURE") {
              if (parsingOplossing) {
                oplossing += el.innerText.trim() + " ";
              } else {
                beschrijving += el.innerText.trim() + " ";
              }
            }
          });

          csvRows.push([pageTitle, currentIssue, wcag, impact, type, beschrijving.trim(), oplossing.trim()]);
        });
      } else {
        // Fallback: flat h3 structure
        let currentIssue = "", beschrijving = "", oplossing = "", type = "", impact = "", wcag = "";
        let parsingOplossing = false;
        const nodes = Array.from(article.querySelectorAll("h3, h4, p, figure, div.meta"));

        nodes.forEach((el) => {
          if (el.tagName === "H3") {
            if (currentIssue) {
              csvRows.push([pageTitle, currentIssue, wcag, impact, type, beschrijving.trim(), oplossing.trim()]);
              beschrijving = ""; oplossing = ""; type = ""; impact = ""; wcag = ""; parsingOplossing = false;
            }
            currentIssue = el.textContent.trim();
          }
          if (currentIssue) {
            if (el.tagName === "DIV" && el.classList.contains("meta")) {
              const impactSpan = el.querySelector(".impact");
              const typeSpan = el.querySelector(".type");
              const wcagSpan = Array.from(el.querySelectorAll("span")).find((s) => s.textContent.includes("WCAG"));
              if (impactSpan) impact = impactSpan.textContent.replace(/Impact\s*:?\s*/i, "").trim();
              if (typeSpan) type = typeSpan.textContent.replace(/Type\s*:?\s*/i, "").trim();
              if (wcagSpan) wcag = wcagSpan.textContent.replace(/WCAG\s*:?\s*/i, "").trim();
            } else if (el.tagName === "H4" && el.textContent.trim().toLowerCase().startsWith("oplossing")) {
              parsingOplossing = true;
            } else if (el.tagName === "P" || el.tagName === "FIGURE") {
              if (parsingOplossing) oplossing += el.innerText.trim() + " ";
              else beschrijving += el.innerText.trim() + " ";
            }
          }
        });
        if (currentIssue) {
          csvRows.push([pageTitle, currentIssue, wcag, impact, type, beschrijving.trim(), oplossing.trim()]);
        }
      }
    });

    if (csvRows.length === 1) {
      alert("Geen bevindingen gevonden.");
      return;
    }

    const csvContent = csvRows
      .map((e) => e.map((f) => `"${f.replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "bevindingen.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// Filter bevindingen
document.addEventListener("DOMContentLoaded", () => {
  const issues = Array.from(document.querySelectorAll("#issues .issue"));

  // --- Type filters ---
  const typeButtons = document.querySelectorAll(".filter-btn");
  const typeCounters = document.querySelectorAll(".count");

  // --- Impact filters ---
  const impactButtons = document.querySelectorAll(".impact-btn");
  const impactCounters = document.querySelectorAll(".impact-count");

  const noResults = document.getElementById("no-results");

  let activeType = "all";
  let activeImpact = "all";
  let activeStatus = "all";

  /* =========================================================
     1️⃣ Lees TYPE en IMPACT exact uit de DOM
  ========================================================= */
  issues.forEach((issue) => {
    // TYPE
    const typeSpan = issue.querySelector(".meta .type");
    if (typeSpan) {
      const text = typeSpan.textContent.toLowerCase();
      issue.dataset.type = text.includes("techniek")
        ? "techniek"
        : text.includes("content")
          ? "content"
          : "unknown";
    } else {
      issue.dataset.type = "unknown";
    }

    // IMPACT
    const impactSpan = issue.querySelector(".meta .impact");
    if (impactSpan) {
      const impactText = impactSpan.textContent
        .replace(/impact\s*:\s*/i, "")
        .trim()
        .toLowerCase();

      const allowed = ["groot", "medium", "klein", "advies"];
      issue.dataset.impact = allowed.includes(impactText)
        ? impactText
        : "unknown";
    } else {
      issue.dataset.impact = "unknown";
    }
  });

  /* =========================================================
     1a. Transform findings into accordions (before resolved state)
  ========================================================= */
  document.querySelectorAll("#issues > article.issue").forEach((article) => {
    const divIssues = Array.from(article.querySelectorAll(":scope > div.issue"));
    if (divIssues.length === 0) return;

    // Check if any div.issue has an actual h3 (a real finding)
    const hasFindings = divIssues.some((d) => d.querySelector("h3"));
    if (!hasFindings) return;

    // Add header row before the first div.issue
    const headerRow = document.createElement("div");
    headerRow.className = "finding-header-row";
    headerRow.innerHTML =
      '<span class="fhr-title">Bevinding</span>' +
      '<span class="fhr-col">Impact</span>' +
      '<span class="fhr-col">Type</span>' +
      '<span class="fhr-col">Beperking</span>';
    divIssues[0].before(headerRow);

    // Add per-section expand/collapse button
    const sectionBtn = document.createElement("button");
    sectionBtn.className = "expand-section-btn";
    sectionBtn.setAttribute("aria-expanded", "false");
    sectionBtn.textContent = "Uitklappen";
    headerRow.before(sectionBtn);

    sectionBtn.addEventListener("click", () => {
      const expanded = sectionBtn.getAttribute("aria-expanded") === "true";
      const accordions = article.querySelectorAll("details.finding-accordion");
      accordions.forEach((d) => d.open = !expanded);
      sectionBtn.setAttribute("aria-expanded", String(!expanded));
      sectionBtn.textContent = expanded ? "Uitklappen" : "Inklappen";
    });

    let issueCounter = 0;
    divIssues.forEach((divIssue) => {
      const h3 = divIssue.querySelector("h3");
      if (!h3) return;

      // Extract issue number from h3 text for anchor ID
      issueCounter++;
      const nrMatch = h3.textContent.match(/^#([\d-]+)/);
      const issueNr = nrMatch ? nrMatch[1] : issueCounter;
      divIssue.id = "issue-" + issueNr;

      // Extract meta info
      const metaDiv = divIssue.querySelector(".meta");
      let impact = "";
      let type = "";
      let beperking = "";

      if (metaDiv) {
        const impactSpan = metaDiv.querySelector(".impact");
        if (impactSpan)
          impact = impactSpan.textContent.replace(/Impact\s*:\s*/i, "").trim();

        const typeSpans = Array.from(metaDiv.querySelectorAll(".type"));
        const typeSpan = typeSpans.find((s) => {
          const b = s.querySelector("b");
          return b && b.textContent.trim() === "Type";
        });
        if (typeSpan)
          type = typeSpan.textContent.replace(/Type\s*:\s*/i, "").trim();

        const beperkingSpan = metaDiv.querySelector(".beperking");
        if (beperkingSpan) {
          const bText = beperkingSpan.textContent
            .replace(/Beperking\s*:\s*/i, "")
            .trim();
          beperking = bText
            .split(", ")
            .map((b) => b.charAt(0).toUpperCase())
            .join(" ");
        }
      }

      // Create details/summary structure
      const details = document.createElement("details");
      details.className = "finding-accordion";

      const summary = document.createElement("summary");
      summary.className = "finding-summary";

      const titleText = h3.textContent.trim();
      const impactLower = impact.toLowerCase();

      summary.innerHTML =
        '<span class="finding-title-cell">' +
          '<span class="finding-title">' + titleText + '</span>' +
          '<button class="permalink-btn" data-anchor="issue-' + issueNr + '" title="Kopieer link naar deze bevinding" aria-label="Kopieer link naar bevinding ' + issueNr + '">' +
            '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M7.8 11.1l-1.9 1.9a2 2 0 0 1-2.8-2.8l2.8-2.8a2 2 0 0 1 2.8 0 .7.7 0 0 0 1-1 3.4 3.4 0 0 0-4.8 0L2.1 9.2a3.4 3.4 0 0 0 4.8 4.8l1.9-1.9a.7.7 0 0 0-1-1zm6.1-8.2a3.4 3.4 0 0 0-4.8 0L7.2 4.8a.7.7 0 0 0 1 1l1.9-1.9a2 2 0 0 1 2.8 2.8l-2.8 2.8a2 2 0 0 1-2.8 0 .7.7 0 0 0-1 1 3.4 3.4 0 0 0 4.8 0l2.8-2.8a3.4 3.4 0 0 0 0-4.8z"/></svg>' +
          '</button>' +
        '</span>' +
        '<span class="finding-meta-impact" data-impact="' + impactLower + '">' + impact + "</span>" +
        '<span class="finding-meta-type">' + type + "</span>" +
        '<span class="finding-meta-beperking">' + beperking + "</span>";

      const body = document.createElement("div");
      body.className = "finding-body";

      // Move all children of divIssue into body
      while (divIssue.firstChild) {
        body.appendChild(divIssue.firstChild);
      }

      details.appendChild(summary);
      details.appendChild(body);
      divIssue.appendChild(details);
    });
  });

  // Permalink buttons: copy link to clipboard
  document.querySelectorAll(".permalink-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // Don't toggle accordion
      const anchor = btn.dataset.anchor;
      const url = location.origin + location.pathname + "#" + anchor;
      navigator.clipboard.writeText(url).then(() => {
        history.replaceState(null, "", "#" + anchor);
        const tip = document.createElement("span");
        tip.className = "copy-tooltip";
        tip.textContent = "Link gekopieerd";
        btn.style.position = "relative";
        btn.appendChild(tip);
        setTimeout(() => tip.remove(), 2000);
      });
    });
  });

  // Global expand/collapse all button
  const expandAllBtn = document.getElementById("expandAllBtn");
  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      const expanded = expandAllBtn.getAttribute("aria-expanded") === "true";
      const allAccordions = document.querySelectorAll("#issues details.finding-accordion");
      allAccordions.forEach((d) => d.open = !expanded);
      expandAllBtn.setAttribute("aria-expanded", String(!expanded));
      expandAllBtn.textContent = expanded ? "Alles uitklappen" : "Alles inklappen";
      // Sync section buttons
      document.querySelectorAll(".expand-section-btn").forEach((btn) => {
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.textContent = expanded ? "Uitklappen" : "Inklappen";
      });
    });
  }

  // Add color swatches next to hex codes in findings
  const hexPattern = /(#[0-9A-Fa-f]{3,6})\b/g;
  document.querySelectorAll("#issues p, #issues li").forEach((el) => {
    if (!hexPattern.test(el.innerHTML)) return;
    hexPattern.lastIndex = 0;
    el.innerHTML = el.innerHTML.replace(hexPattern, (match, hex) => {
      return match + '<span class="color-swatch" style="background:' + hex + ';" aria-hidden="true"></span>';
    });
  });

  // Open accordion and scroll to issue if URL has hash
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      const details = target.querySelector("details.finding-accordion");
      if (details) details.open = true;
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }

  /* =========================================================
     1b. Resolved state (localStorage)
  ========================================================= */
  const reportId = document.documentElement.dataset.reportId;

  function getResolvedState() {
    const raw = localStorage.getItem(`wcag-resolved-${reportId}`);
    if (!raw) return { version: 1, issues: {} };
    try { return JSON.parse(raw); } catch { return { version: 1, issues: {} }; }
  }

  function saveResolvedState(state) {
    localStorage.setItem(`wcag-resolved-${reportId}`, JSON.stringify(state));
  }

  const resolvedState = getResolvedState();

  // Groepeer: article.issue = paginaniveau, div.issue = individuele bevinding
  issues.forEach((issue) => {
    if (issue.tagName === "ARTICLE") {
      // Paginaniveau: checkbox "Hele pagina opgelost" in issue-meta
      const meta = issue.querySelector(".issue-meta");
      if (!meta) return;
      const nestedIssues = Array.from(issue.querySelectorAll(":scope > .issue"));
      const pageSlug = issue.id;
      if (!pageSlug || nestedIssues.length === 0) return;

      const label = document.createElement("label");
      label.className = "resolved-toggle resolved-toggle-page";
      label.hidden = true;
      label.title = "Markeer alle bevindingen op deze pagina als opgelost";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "resolved-checkbox";
      checkbox.setAttribute("aria-label", "Hele pagina is opgelost");

      const span = document.createElement("span");
      span.className = "resolved-label";
      span.innerHTML = '<i class="fa-solid fa-circle-check"></i> Hele pagina is opgelost';

      label.appendChild(checkbox);
      label.appendChild(span);
      meta.appendChild(label);

      // Check initial state: als alle nested issues opgelost zijn
      function updatePageCheckbox() {
        const allResolved = nestedIssues.every((ni) => ni.dataset.status === "opgelost");
        checkbox.checked = allResolved;
      }

      checkbox.addEventListener("change", () => {
        const state = getResolvedState();
        nestedIssues.forEach((ni) => {
          const h3 = ni.querySelector("h3");
          if (!h3 || !h3.id) return;
          const cb = ni.querySelector(".resolved-checkbox");
          if (checkbox.checked) {
            state.issues[h3.id] = true;
            ni.classList.add("is-resolved");
            ni.dataset.status = "opgelost";
            if (cb) cb.checked = true;
            if (!h3.querySelector(".sr-only")) {
              const srSpan = document.createElement("span");
              srSpan.className = "sr-only";
              srSpan.textContent = "(opgelost)";
              h3.appendChild(srSpan);
            }
          } else {
            delete state.issues[h3.id];
            ni.classList.remove("is-resolved");
            ni.dataset.status = "open";
            if (cb) cb.checked = false;
            const srSpan = h3.querySelector(".sr-only");
            if (srSpan) srSpan.remove();
          }
        });
        saveResolvedState(state);
        updateDashboard();
        applyFilters();
      });

      // Bewaar functie zodat individuele checkboxes de pagina-checkbox kunnen updaten
      issue._updatePageCheckbox = updatePageCheckbox;
      return;
    }

    // Individuele bevinding (div.issue)
    const h3 = issue.querySelector("h3");
    if (!h3) return;
    const slug = h3.id;
    if (!slug) return;

    // Set data-status
    issue.dataset.status = resolvedState.issues[slug] ? "opgelost" : "open";
    if (resolvedState.issues[slug]) {
      issue.classList.add("is-resolved");
      const srSpan = document.createElement("span");
      srSpan.className = "sr-only";
      srSpan.textContent = "(opgelost)";
      h3.appendChild(srSpan);
    }

    // Create toggle
    const label = document.createElement("label");
    label.className = "resolved-toggle";
    label.hidden = true;
    label.title = "Markeer als opgelost";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "resolved-checkbox";
    checkbox.dataset.issueSlug = slug;
    checkbox.checked = !!resolvedState.issues[slug];
    checkbox.setAttribute("aria-label", "Dit issue is opgelost");

    const span = document.createElement("span");
    span.className = "resolved-label";
    span.innerHTML = '<i class="fa-solid fa-circle-check"></i> Dit issue is opgelost';

    label.appendChild(checkbox);
    label.appendChild(span);
    h3.after(label);

    checkbox.addEventListener("change", () => {
      const state = getResolvedState();
      if (checkbox.checked) {
        state.issues[slug] = true;
        issue.classList.add("is-resolved");
        issue.dataset.status = "opgelost";
        if (!h3.querySelector(".sr-only")) {
          const srSpan = document.createElement("span");
          srSpan.className = "sr-only";
          srSpan.textContent = "(opgelost)";
          h3.appendChild(srSpan);
        }
      } else {
        delete state.issues[slug];
        issue.classList.remove("is-resolved");
        issue.dataset.status = "open";
        const srSpan = h3.querySelector(".sr-only");
        if (srSpan) srSpan.remove();
      }
      saveResolvedState(state);
      updateDashboard();
      applyFilters();
      // Update pagina-checkbox
      const article = issue.closest("article.issue");
      if (article && article._updatePageCheckbox) article._updatePageCheckbox();
    });
  });

  // Init pagina-checkboxes
  document.querySelectorAll("#issues > article.issue").forEach((article) => {
    if (article._updatePageCheckbox) article._updatePageCheckbox();
  });

  /* =========================================================
     2️⃣ Tel LOGISCH (los van filters)
  ========================================================= */
  function updateCounts() {
    const typeCounts = {
      all: issues.length,
      techniek: 0,
      content: 0,
    };

    const impactCounts = {
      all: issues.length,
      groot: 0,
      medium: 0,
      klein: 0,
      advies: 0,
    };

    issues.forEach((issue) => {
      if (issue.dataset.type in typeCounts) {
        typeCounts[issue.dataset.type]++;
      }
      if (issue.dataset.impact in impactCounts) {
        impactCounts[issue.dataset.impact]++;
      }
    });

    typeCounters.forEach((counter) => {
      counter.textContent = typeCounts[counter.dataset.count] ?? 0;
    });

    impactCounters.forEach((counter) => {
      counter.textContent = impactCounts[counter.dataset.impactCount] ?? 0;
    });
  }

  /* =========================================================
     2b. Dashboard updaten
  ========================================================= */
  function updateDashboard() {
    const divIssues = issues.filter((i) => i.tagName !== "ARTICLE");
    const total = divIssues.length;
    const resolved = divIssues.filter((i) => i.dataset.status === "opgelost").length;
    const pct = total > 0 ? Math.round((resolved / total) * 100) : 0;

    document.querySelectorAll(".resolved-count").forEach((el) => el.textContent = resolved);
    document.querySelectorAll(".resolved-total").forEach((el) => el.textContent = total);
    document.querySelectorAll(".resolved-progress-fill").forEach((el) => el.style.width = `${pct}%`);
  }

  /* =========================================================
     3️⃣ Pas filters toe (type/impact + status)
  ========================================================= */
  function applyFilters() {
    let visible = 0;

    issues.forEach((issue) => {
      // Artikelen (pagina-containers) worden apart afgehandeld
      if (issue.tagName === "ARTICLE") return;

      let show = true;

      if (activeType !== "all") {
        show = issue.dataset.type === activeType;
      } else if (activeImpact !== "all") {
        show = issue.dataset.impact === activeImpact;
      }

      // Status als AND-conditie
      if (show && activeStatus !== "all") {
        show = issue.dataset.status === activeStatus;
      }

      issue.hidden = !show;
      if (show) visible++;
    });

    // Toon/verberg artikelen op basis van zichtbare kinderen
    document.querySelectorAll("#issues > article.issue").forEach((article) => {
      const hasVisible = article.querySelector("div.issue:not([hidden])");
      article.hidden = !hasVisible;
    });

    noResults.hidden = visible !== 0;
  }

  /* =========================================================
     4️⃣ Type-knoppen
  ========================================================= */
  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeType = btn.dataset.filter;
      activeImpact = "all";

      // UI reset impact
      impactButtons.forEach((b) => b.classList.remove("active"));
      impactButtons[0]?.classList.add("active");

      // UI active type
      typeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyFilters();
    });
  });

  /* =========================================================
     5️⃣ Impact-knoppen
  ========================================================= */
  impactButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeImpact = btn.dataset.impact;
      activeType = "all";

      // UI reset type
      typeButtons.forEach((b) => b.classList.remove("active"));
      typeButtons[0]?.classList.add("active");

      // UI active impact
      impactButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyFilters();
    });
  });

  /* =========================================================
     6️⃣ Status-knoppen
  ========================================================= */
  const statusButtons = document.querySelectorAll(".status-btn");

  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeStatus = btn.dataset.status;

      statusButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyFilters();
    });
  });

  /* =========================================================
     7️⃣ Browser-tracking toggle
  ========================================================= */
  const trackingToggle = document.getElementById("browserTrackingToggle");
  const dashboardEl = document.getElementById("resolved-dashboard-issues");
  const statusFilterGroup = document.getElementById("status-filter-group");
  const allResolvedToggles = document.querySelectorAll(".resolved-toggle");

  function setTrackingEnabled(enabled) {
    // Dashboard
    if (dashboardEl) dashboardEl.hidden = !enabled;
    // Status filter
    if (statusFilterGroup) statusFilterGroup.hidden = !enabled;
    // Alle checkboxes bij issues
    allResolvedToggles.forEach((toggle) => toggle.hidden = !enabled);

    if (enabled) {
      updateDashboard();
    } else {
      // Reset status-filter naar "all" als tracking uit staat
      activeStatus = "all";
      statusButtons.forEach((b) => b.classList.remove("active"));
      statusButtons[0]?.classList.add("active");
    }
    applyFilters();
  }

  if (trackingToggle) {
    const trackingKey = `wcag-tracking-enabled-${reportId}`;
    const trackingEnabled = localStorage.getItem(trackingKey) === "true";
    trackingToggle.checked = trackingEnabled;
    setTrackingEnabled(trackingEnabled);

    trackingToggle.addEventListener("change", () => {
      localStorage.setItem(trackingKey, trackingToggle.checked);
      setTrackingEnabled(trackingToggle.checked);
    });
  }

  /* =========================================================
     8️⃣ Init
  ========================================================= */
  updateCounts();
  applyFilters();

  /* =========================================================
     9️⃣ Stat cards: vul tellingen en afgekeurde SC's
  ========================================================= */
  const divIssuesAll = issues.filter((i) => i.tagName !== "ARTICLE");

  // Impact counts
  let klein = 0, medium = 0, groot = 0;
  divIssuesAll.forEach((i) => {
    if (i.dataset.impact === "klein") klein++;
    else if (i.dataset.impact === "medium") medium++;
    else if (i.dataset.impact === "groot") groot++;
  });

  const statKlein = document.getElementById("stat-klein");
  const statMedium = document.getElementById("stat-medium");
  const statGroot = document.getElementById("stat-groot");
  if (statKlein) statKlein.textContent = klein;
  if (statMedium) statMedium.textContent = medium;
  if (statGroot) statGroot.textContent = groot;

  // Type counts
  let contentCount = 0, techniekCount = 0;
  divIssuesAll.forEach((i) => {
    if (i.dataset.type === "content") contentCount++;
    else if (i.dataset.type === "techniek") techniekCount++;
  });

  const statContent = document.getElementById("stat-content");
  const statTechniek = document.getElementById("stat-techniek");
  if (statContent) statContent.textContent = contentCount;
  if (statTechniek) statTechniek.textContent = techniekCount;

  // Afgekeurde SC's verzamelen
  const failedSCs = new Set();
  document.querySelectorAll("#issues .meta").forEach((meta) => {
    const wcagSpan = Array.from(meta.querySelectorAll("span")).find((s) => {
      const b = s.querySelector("b");
      return b && b.textContent.trim() === "WCAG";
    });
    if (!wcagSpan) return;
    const numbers = wcagSpan.textContent
      .replace(/WCAG\s*:?\s*/, "")
      .split(/[\s,]+/)
      .filter(Boolean);
    numbers.forEach((n) => failedSCs.add(n));
  });

  // Geslaagd berekenen (55 - aantal unieke afgekeurde SC's)
  const passed = 55 - failedSCs.size;
  const statPassed = document.getElementById("stat-passed");
  if (statPassed) statPassed.textContent = passed;

  // Afgekeurde SC-lijst vullen
  const failedListEl = document.getElementById("failed-sc-list");
  const failedRow = document.getElementById("failed-sc-row");
  if (failedListEl && failedSCs.size > 0) {
    const sorted = [...failedSCs].sort((a, b) => {
      const pa = a.split(".").map(Number);
      const pb = b.split(".").map(Number);
      for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) - (pb[i] || 0);
      }
      return 0;
    });
    failedListEl.innerHTML = sorted
      .map((sc) => `<span class="sc-tag">${sc}</span>`)
      .join(" ");
  } else if (failedRow) {
    failedRow.hidden = true;
  }

});

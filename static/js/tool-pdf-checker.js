/**
 * PDF Toegankelijkheidschecker — Proper Access
 * Analyseert PDF-bestanden op toegankelijkheidsproblemen via PDF.js
 */
(function () {
  "use strict";

  // ============================================================
  // Config
  // ============================================================

  var PDFJS_CDN = "https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.min.mjs";
  var PDFJS_WORKER = "https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs";

  // ============================================================
  // Fix instructions per check type
  // ============================================================

  var FIX = {
    noTags: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Toegankelijkheid &gt; Automatisch taggen</strong>. Controleer daarna de tagstructuur handmatig via het tagspaneel. In veel gevallen is het beter om het brondocument (Word, InDesign) opnieuw te exporteren met de juiste instellingen voor getagde PDF.",
    partialTags: "Niet alle pagina's zijn getagd. Open het document in Adobe Acrobat Pro en controleer via <strong>Weergave &gt; Navigatievensters &gt; Tags</strong> welke pagina's ontbreken. Tag de ontbrekende content handmatig of exporteer het brondocument opnieuw.",
    noTitle: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Bestand &gt; Eigenschappen &gt; Beschrijving</strong> en vul een beschrijvende titel in. Vink onder <strong>Beginweergave</strong> aan dat de documenttitel wordt weergegeven in plaats van de bestandsnaam.",
    noLang: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Bestand &gt; Eigenschappen &gt; Geavanceerd</strong> en stel de taal in (bijvoorbeeld \"nl-NL\" voor Nederlands). Je kunt dit ook instellen in het brondocument voordat je exporteert.",
    skippedHeadings: "Pas de kopniveaus aan zodat ze een logische hi\u00ebrarchie volgen. Een H1 moet gevolgd worden door een H2, niet door een H3 of lager. Gebruik in het brondocument de juiste kopstijlen, of pas de tags aan in Adobe Acrobat Pro via het tagspaneel.",
    emptyHeadings: "Verwijder de lege koptag of voeg inhoud toe. In Adobe Acrobat Pro: open het <strong>tagspaneel</strong>, zoek de lege koptag en verwijder deze, of wijzig de tag naar een <strong>P</strong>-tag (alinea).",
    noAlt: "Voeg een alt-tekst toe aan elke informatieve afbeelding. In Adobe Acrobat Pro: klik met rechts op de Figure-tag in het tagspaneel, kies <strong>Eigenschappen</strong> en vul het veld \"Alternatieve tekst\" in. De tekst moet de inhoud of functie van de afbeelding beschrijven.",
    listStructure: "Corrigeer de lijststructuur in het tagspaneel van Adobe Acrobat Pro. Een correcte lijst gebruikt de tags <strong>L</strong> (lijst) &gt; <strong>LI</strong> (lijstitem) &gt; <strong>Lbl</strong> (label/opsommingsteken) + <strong>LBody</strong> (inhoud). Zorg dat elk lijstitem deze structuur volgt.",
    noTH: "Markeer de koprij of -kolom van de tabel met <strong>TH</strong>-tags in plaats van TD-tags. In Adobe Acrobat Pro: open het tagspaneel, zoek de tabel en wijzig de tags van de kopcellen. Stel ook het <strong>Scope</strong>-attribuut in (\"Row\" of \"Column\").",
    noBookmarks: "Voeg bladwijzers toe aan het document. In Adobe Acrobat Pro: ga naar <strong>Weergave &gt; Navigatievensters &gt; Bladwijzers</strong>. Maak bladwijzers aan voor alle koppen en belangrijke secties. Bij export vanuit Word of InDesign kun je dit automatisch laten genereren."
  };

  // ============================================================
  // DOM refs
  // ============================================================

  var uploadZone = document.getElementById("uploadZone");
  var fileInput = document.getElementById("pdfFile");
  var progressArea = document.getElementById("progressArea");
  var fileNameEl = document.getElementById("fileName");
  var pageCountEl = document.getElementById("pageCount");
  var progressBar = document.getElementById("progressBar");
  var progressText = document.getElementById("progressText");
  var resultsArea = document.getElementById("resultsArea");
  var resultsSummary = document.getElementById("resultsSummary");
  var resultsCategories = document.getElementById("resultsCategories");
  var resetBtn = document.getElementById("resetBtn");
  var exportBtn = document.getElementById("exportBtn");

  if (!uploadZone) return;

  var pdfjsLib = null;
  var isAnalyzing = false;
  var accordionCounter = 0;
  var lastResults = null;
  var lastFileName = "";

  // ============================================================
  // PDF.js loader
  // ============================================================

  function loadPdfJs() {
    if (pdfjsLib) return Promise.resolve();

    // Try dynamic import first (modern browsers)
    if (typeof window.import === "function" || true) {
      return import(PDFJS_CDN).then(function (mod) {
        pdfjsLib = mod;
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
      }).catch(function () {
        // Fallback: inject script tag with legacy build
        return loadPdfJsViaScript();
      });
    }
    return loadPdfJsViaScript();
  }

  function loadPdfJsViaScript() {
    return new Promise(function (resolve, reject) {
      var legacyUrl = PDFJS_CDN.replace(".min.mjs", ".min.js").replace("/build/pdf", "/legacy/build/pdf");
      var workerUrl = PDFJS_WORKER.replace(".min.mjs", ".min.js").replace("/build/pdf", "/legacy/build/pdf");
      var script = document.createElement("script");
      script.src = legacyUrl;
      script.onload = function () {
        if (window.pdfjsLib) {
          pdfjsLib = window.pdfjsLib;
          pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
          resolve();
        } else {
          reject(new Error("PDF.js kon niet geladen worden."));
        }
      };
      script.onerror = function () {
        reject(new Error("PDF.js kon niet geladen worden. Controleer je internetverbinding."));
      };
      document.head.appendChild(script);
    });
  }

  // ============================================================
  // Upload handlers
  // ============================================================

  uploadZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    uploadZone.classList.add("tool-pdf__upload--dragover");
  });

  uploadZone.addEventListener("dragleave", function () {
    uploadZone.classList.remove("tool-pdf__upload--dragover");
  });

  uploadZone.addEventListener("drop", function (e) {
    e.preventDefault();
    uploadZone.classList.remove("tool-pdf__upload--dragover");
    var files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      handleFile(files[0]);
    }
  });

  uploadZone.addEventListener("click", function (e) {
    if (e.target !== fileInput) {
      fileInput.click();
    }
  });

  uploadZone.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      handleFile(fileInput.files[0]);
    }
  });

  resetBtn.addEventListener("click", function () {
    resultsArea.hidden = true;
    progressArea.hidden = true;
    uploadZone.hidden = false;
    fileInput.value = "";
    resultsCategories.innerHTML = "";
    resultsSummary.innerHTML = "";
    accordionCounter = 0;
    lastResults = null;
    lastFileName = "";
  });

  exportBtn.addEventListener("click", function () {
    if (!lastResults) return;
    exportFindings(lastResults, lastFileName);
  });

  // ============================================================
  // File handler
  // ============================================================

  function handleFile(file) {
    if (isAnalyzing) return;
    isAnalyzing = true;

    lastFileName = file.name;
    fileNameEl.textContent = file.name;
    pageCountEl.textContent = "";
    progressBar.style.width = "0%";
    progressBar.setAttribute("aria-valuenow", "0");
    progressText.textContent = "PDF.js laden...";

    uploadZone.hidden = true;
    resultsArea.hidden = true;
    progressArea.hidden = false;

    var reader = new FileReader();
    reader.onload = function () {
      loadPdfJs()
        .then(function () {
          progressText.textContent = "PDF openen...";
          return analyzePDF(reader.result);
        })
        .catch(function (err) {
          showError("Er is een fout opgetreden: " + err.message);
        })
        .finally(function () {
          isAnalyzing = false;
        });
    };
    reader.onerror = function () {
      showError("Kan het bestand niet lezen.");
      isAnalyzing = false;
    };
    reader.readAsArrayBuffer(file);
  }

  function showError(msg) {
    progressArea.hidden = true;
    resultsArea.hidden = false;
    resultsSummary.innerHTML = '<p class="tool-pdf__error">' + escapeHtml(msg) + "</p>";
    resultsCategories.innerHTML = "";
    uploadZone.hidden = false;
  }

  // ============================================================
  // PDF analyse
  // ============================================================

  function analyzePDF(arrayBuffer) {
    var loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });

    var collector = {
      headings: [],
      figures: [],
      lists: [],
      tables: [],
      rootLang: null,
      pagesWithTags: 0,
      pagesWithoutTags: 0
    };

    return loadingTask.promise.then(function (doc) {
      var numPages = doc.numPages;
      pageCountEl.textContent = numPages + " pagina" + (numPages === 1 ? "" : "'s");

      return Promise.all([
        doc.getMetadata(),
        safeCall(doc, "getMarkInfo"),
        doc.getOutline()
      ]).then(function (results) {
        var metadata = results[0];
        var markInfo = results[1];
        var outline = results[2];

        var chain = Promise.resolve();
        for (var i = 1; i <= numPages; i++) {
          (function (pageNum) {
            chain = chain.then(function () {
              var pct = Math.round((pageNum / numPages) * 100);
              progressBar.style.width = pct + "%";
              progressBar.setAttribute("aria-valuenow", String(pct));
              progressText.textContent = "Pagina " + pageNum + " van " + numPages + " analyseren...";

              return doc.getPage(pageNum).then(function (page) {
                // Get struct tree and text content in parallel
                return Promise.all([
                  safeCall(page, "getStructTree"),
                  page.getTextContent({ includeMarkedContent: true })
                ]).then(function (pageResults) {
                  var tree = pageResults[0];
                  var textContent = pageResults[1];

                  if (tree) {
                    collector.pagesWithTags++;
                    var mcidMap = buildMcidMap(textContent);
                    walkTree(tree, pageNum, collector, mcidMap);
                  } else {
                    collector.pagesWithoutTags++;
                  }
                });
              });
            });
          })(i);
        }

        return chain.then(function () {
          progressArea.hidden = true;

          var allChecks = [];
          allChecks.push({ category: "Document", checks: checkDocument(metadata, markInfo, collector) });
          allChecks.push({ category: "Koppen", checks: checkHeadings(collector) });
          allChecks.push({ category: "Afbeeldingen", checks: checkImages(collector) });
          allChecks.push({ category: "Lijsten", checks: checkLists(collector) });
          allChecks.push({ category: "Tabellen", checks: checkTables(collector) });
          allChecks.push({ category: "Navigatie", checks: checkNavigation(outline, collector) });

          renderResults(allChecks);
        });
      });
    });
  }

  function safeCall(obj, method) {
    if (typeof obj[method] === "function") {
      return obj[method]().catch(function () { return null; });
    }
    return Promise.resolve(null);
  }

  // ============================================================
  // MCID text map builder
  // ============================================================

  function buildMcidMap(textContent) {
    var map = {};
    if (!textContent || !textContent.items) return map;

    var currentMcid = null;
    var items = textContent.items;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.type === "beginMarkedContent" || item.type === "beginMarkedContentProps") {
        if (item.id !== undefined && item.id !== null) {
          currentMcid = item.id;
          if (!map[currentMcid]) map[currentMcid] = "";
        }
      } else if (item.type === "endMarkedContent") {
        currentMcid = null;
      } else if (item.str !== undefined && currentMcid !== null) {
        map[currentMcid] += item.str;
      }
    }

    return map;
  }

  // ============================================================
  // Structure tree walker
  // ============================================================

  function walkTree(node, pageNum, collector, mcidMap) {
    if (!node) return;

    var role = node.role || "";

    // Language on root
    if (role === "Root" || role === "Document") {
      if (node.lang) collector.rootLang = node.lang;
    }

    // Headings
    var headingMatch = role.match(/^H(\d)$/);
    if (headingMatch) {
      var level = parseInt(headingMatch[1], 10);
      var text = extractText(node, mcidMap);
      collector.headings.push({
        level: level,
        text: text.trim(),
        hasContent: text.trim().length > 0,
        page: pageNum
      });
    }

    // Figures
    if (role === "Figure") {
      collector.figures.push({
        hasAlt: !!(node.alt && node.alt.trim()),
        altText: node.alt || "",
        page: pageNum
      });
    }

    // Lists
    if (role === "L") {
      var listCheck = validateList(node);
      var itemCount = countListItems(node);
      collector.lists.push({
        valid: listCheck.valid,
        page: pageNum,
        issue: listCheck.issue,
        itemCount: itemCount
      });
    }

    // Tables
    if (role === "Table") {
      var hasTH = tableHasTH(node);
      var dims = tableDimensions(node);
      collector.tables.push({
        hasTH: hasTH,
        page: pageNum,
        rows: dims.rows,
        cols: dims.cols
      });
    }

    // Recurse
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        if (child && child.role) {
          walkTree(child, pageNum, collector, mcidMap);
        }
      }
    }
  }

  /**
   * Extract text from a struct tree node by collecting MCID references
   */
  function extractText(node, mcidMap) {
    var text = "";
    if (!node.children) return text;

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (!child) continue;

      if (!child.role) {
        // Content reference — look up MCID
        var mcid = child.id !== undefined ? child.id : null;
        if (mcid !== null && mcidMap[mcid]) {
          text += mcidMap[mcid];
        }
      } else {
        // Recurse into structural children
        text += extractText(child, mcidMap);
      }
    }

    return text;
  }

  function validateList(node) {
    if (!node.children || node.children.length === 0) {
      return { valid: false, issue: "Lijst bevat geen items" };
    }
    var hasLI = false;
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (child.role === "LI") {
        hasLI = true;
        var hasLBody = false;
        if (child.children) {
          for (var j = 0; j < child.children.length; j++) {
            if (child.children[j].role === "LBody") {
              hasLBody = true;
              break;
            }
          }
        }
        if (!hasLBody) {
          return { valid: false, issue: "Lijstitem mist LBody-tag" };
        }
      }
    }
    if (!hasLI) {
      return { valid: false, issue: "Lijst bevat geen LI-tags" };
    }
    return { valid: true, issue: null };
  }

  function countListItems(node) {
    var count = 0;
    if (!node.children) return count;
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].role === "LI") count++;
    }
    return count;
  }

  function tableHasTH(node) {
    if (!node.children) return false;
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (child.role === "TH") return true;
      if (child.children && tableHasTH(child)) return true;
    }
    return false;
  }

  function tableDimensions(node) {
    var rows = 0;
    var maxCols = 0;
    if (!node.children) return { rows: 0, cols: 0 };

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (!child) continue;
      // Count TR, THead, TBody, TFoot
      if (child.role === "TR") {
        rows++;
        var cols = 0;
        if (child.children) {
          for (var j = 0; j < child.children.length; j++) {
            if (child.children[j].role === "TD" || child.children[j].role === "TH") cols++;
          }
        }
        if (cols > maxCols) maxCols = cols;
      } else if (child.role === "THead" || child.role === "TBody" || child.role === "TFoot") {
        var sub = tableDimensions(child);
        rows += sub.rows;
        if (sub.cols > maxCols) maxCols = sub.cols;
      }
    }

    return { rows: rows, cols: maxCols };
  }

  // ============================================================
  // Check functions
  // ============================================================

  function checkDocument(metadata, markInfo, collector) {
    var checks = [];
    var info = metadata && metadata.info ? metadata.info : {};

    // 1. Tagged
    var isMarked = markInfo && markInfo.Marked === true;
    var totalPages = collector.pagesWithTags + collector.pagesWithoutTags;
    if (isMarked && collector.pagesWithoutTags === 0) {
      checks.push({
        status: "pass",
        title: "PDF is getagd",
        description: "Dit document bevat tags (structuurinformatie) die het toegankelijk maken voor schermlezers."
      });
    } else if (collector.pagesWithTags > 0 && collector.pagesWithoutTags > 0) {
      checks.push({
        status: "fail",
        title: "PDF is gedeeltelijk getagd",
        description: "Slechts " + collector.pagesWithTags + " van de " + totalPages + " pagina's bevatten tags.",
        fix: FIX.partialTags
      });
    } else {
      checks.push({
        status: "fail",
        title: "PDF mist tags",
        description: "Dit document bevat geen tags. Zonder tags is de inhoud ontoegankelijk voor schermlezers.",
        fix: FIX.noTags
      });
    }

    // 2. Title
    var title = info.Title ? info.Title.trim() : "";
    if (title && title.length > 0) {
      checks.push({
        status: "pass",
        title: "Titel aanwezig",
        description: 'De documenttitel is: \u201C' + escapeHtml(truncate(title, 80)) + '\u201D'
      });
    } else {
      checks.push({
        status: "fail",
        title: "Geen titel ingesteld",
        description: "Dit PDF-document heeft geen titel.",
        fix: FIX.noTitle
      });
    }

    // 3. Language
    if (collector.rootLang) {
      checks.push({
        status: "pass",
        title: "Taal ingesteld",
        description: 'De documenttaal is ingesteld op \u201C' + escapeHtml(collector.rootLang) + '\u201D.'
      });
    } else {
      var metaLang = null;
      if (metadata && metadata.metadata) {
        try { metaLang = metadata.metadata.get("dc:language"); } catch (e) { /* */ }
      }
      if (metaLang) {
        checks.push({
          status: "pass",
          title: "Taal ingesteld",
          description: 'De documenttaal is ingesteld op \u201C' + escapeHtml(metaLang) + '\u201D (via metadata).'
        });
      } else {
        checks.push({
          status: "fail",
          title: "Geen taal ingesteld",
          description: "De taal van dit document is niet ingesteld. Zonder taalinstelling kan een schermlezer de verkeerde uitspraak gebruiken.",
          fix: FIX.noLang
        });
      }
    }

    return checks;
  }

  function checkHeadings(collector) {
    var checks = [];
    var headings = collector.headings;

    if (headings.length === 0) {
      if (collector.pagesWithTags > 0) {
        checks.push({
          status: "warn",
          title: "Geen koppen gevonden",
          description: "Er zijn geen kopstructuren (H1\u2013H6) gevonden in de tags."
        });
      } else {
        checks.push({
          status: "na",
          title: "Koppen niet controleerbaar",
          description: "Omdat het document geen tags heeft, kunnen koppen niet gecontroleerd worden."
        });
      }
      return checks;
    }

    // Headings present
    checks.push({
      status: "pass",
      title: "Koppen aanwezig",
      description: headings.length + " kop" + (headings.length === 1 ? "" : "pen") + " gevonden.",
      findings: headings.map(function (h) {
        return {
          page: h.page,
          element: "H" + h.level,
          detail: h.text ? truncate(h.text, 60) : "(geen tekst)"
        };
      })
    });

    // Hierarchy
    var skippedFindings = [];
    var prevLevel = 0;
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      if (prevLevel > 0 && h.level > prevLevel + 1) {
        skippedFindings.push({
          page: h.page,
          element: "H" + prevLevel + " \u2192 H" + h.level,
          detail: h.text ? truncate(h.text, 60) : "(geen tekst)"
        });
      }
      prevLevel = h.level;
    }
    if (skippedFindings.length > 0) {
      checks.push({
        status: "fail",
        title: "Kopniveaus overgeslagen",
        description: "Er worden kopniveaus overgeslagen. Dit maakt de structuur onduidelijk voor schermlezers.",
        findings: skippedFindings,
        fix: FIX.skippedHeadings
      });
    } else {
      checks.push({
        status: "pass",
        title: "Kophiërarchie correct",
        description: "De kopniveaus volgen een logische volgorde."
      });
    }

    // Empty headings
    var emptyFindings = [];
    for (var j = 0; j < headings.length; j++) {
      if (!headings[j].hasContent) {
        emptyFindings.push({
          page: headings[j].page,
          element: "H" + headings[j].level,
          detail: "Lege koptag"
        });
      }
    }
    if (emptyFindings.length > 0) {
      checks.push({
        status: "fail",
        title: "Lege koppen gevonden",
        description: emptyFindings.length + " kop" + (emptyFindings.length === 1 ? "" : "pen") + " zonder inhoud gevonden.",
        findings: emptyFindings,
        fix: FIX.emptyHeadings
      });
    } else {
      checks.push({
        status: "pass",
        title: "Geen lege koppen",
        description: "Alle koppen bevatten tekst."
      });
    }

    return checks;
  }

  function checkImages(collector) {
    var checks = [];
    var figures = collector.figures;

    if (figures.length === 0) {
      checks.push({
        status: "na",
        title: "Geen afbeeldingen gevonden",
        description: "Er zijn geen Figure-tags gevonden in dit document."
      });
      return checks;
    }

    var withoutAltFindings = [];
    var withAltFindings = [];
    for (var i = 0; i < figures.length; i++) {
      var fig = figures[i];
      if (fig.hasAlt) {
        withAltFindings.push({
          page: fig.page,
          element: "Figure",
          detail: '\u201C' + truncate(fig.altText, 60) + '\u201D'
        });
      } else {
        withoutAltFindings.push({
          page: fig.page,
          element: "Figure",
          detail: "Geen alt-tekst"
        });
      }
    }

    if (withoutAltFindings.length > 0) {
      checks.push({
        status: "fail",
        title: "Afbeeldingen zonder alt-tekst",
        description: withoutAltFindings.length + " van " + figures.length + " afbeelding" + (figures.length === 1 ? "" : "en") + " mist een alternatieve tekst.",
        findings: withoutAltFindings,
        fix: FIX.noAlt
      });
    }

    if (withAltFindings.length > 0) {
      checks.push({
        status: "pass",
        title: withAltFindings.length + " afbeelding" + (withAltFindings.length === 1 ? " heeft" : "en hebben") + " alt-tekst",
        description: "Controleer of de alt-teksten de inhoud goed beschrijven.",
        findings: withAltFindings
      });
    }

    return checks;
  }

  function checkLists(collector) {
    var checks = [];
    var lists = collector.lists;

    if (lists.length === 0) {
      checks.push({
        status: "na",
        title: "Geen lijsten gevonden",
        description: "Er zijn geen lijststructuren (L-tags) gevonden."
      });
      return checks;
    }

    var invalidFindings = [];
    var validCount = 0;
    for (var i = 0; i < lists.length; i++) {
      var lst = lists[i];
      if (!lst.valid) {
        invalidFindings.push({
          page: lst.page,
          element: "L (" + lst.itemCount + " items)",
          detail: lst.issue
        });
      } else {
        validCount++;
      }
    }

    if (invalidFindings.length > 0) {
      checks.push({
        status: "fail",
        title: "Lijststructuur niet correct",
        description: invalidFindings.length + " van " + lists.length + " lijst" + (lists.length === 1 ? "" : "en") + " heeft een onjuiste tagstructuur.",
        findings: invalidFindings,
        fix: FIX.listStructure
      });
    }

    if (validCount > 0) {
      checks.push({
        status: "pass",
        title: validCount + " lijst" + (validCount === 1 ? "" : "en") + " correct",
        description: "Tagstructuur L \u2192 LI \u2192 LBody is correct."
      });
    }

    return checks;
  }

  function checkTables(collector) {
    var checks = [];
    var tables = collector.tables;

    if (tables.length === 0) {
      checks.push({
        status: "na",
        title: "Geen tabellen gevonden",
        description: "Er zijn geen tabelstructuren (Table-tags) gevonden."
      });
      return checks;
    }

    var noTHFindings = [];
    var okCount = 0;
    for (var i = 0; i < tables.length; i++) {
      var tbl = tables[i];
      var dims = tbl.rows + " rijen";
      if (tbl.cols > 0) dims += ", " + tbl.cols + " kolommen";
      if (!tbl.hasTH) {
        noTHFindings.push({
          page: tbl.page,
          element: "Table",
          detail: dims + " \u2014 geen TH-tags"
        });
      } else {
        okCount++;
      }
    }

    if (noTHFindings.length > 0) {
      checks.push({
        status: "fail",
        title: "Tabelkoppen ontbreken",
        description: noTHFindings.length + " van " + tables.length + " tabel" + (tables.length === 1 ? "" : "len") + " mist kopmarkeringen (TH-tags).",
        findings: noTHFindings,
        fix: FIX.noTH
      });
    }

    if (okCount > 0) {
      checks.push({
        status: "pass",
        title: okCount + " tabel" + (okCount === 1 ? "" : "len") + " met koppen",
        description: "Kopmarkeringen (TH-tags) aanwezig."
      });
    }

    return checks;
  }

  function checkNavigation(outline, collector) {
    var checks = [];

    if (collector.pagesWithTags === 0 && collector.pagesWithoutTags > 0) {
      checks.push({
        status: "na",
        title: "Bladwijzers niet controleerbaar",
        description: "Omdat het document geen tags heeft, is de navigatiecontrole beperkt."
      });
      return checks;
    }

    if (outline && outline.length > 0) {
      var bookmarkFindings = [];
      for (var i = 0; i < Math.min(outline.length, 15); i++) {
        bookmarkFindings.push({
          page: null,
          element: "Bladwijzer",
          detail: truncate(outline[i].title, 60)
        });
      }
      if (outline.length > 15) {
        bookmarkFindings.push({
          page: null,
          element: "",
          detail: "en " + (outline.length - 15) + " meer\u2026"
        });
      }
      checks.push({
        status: "pass",
        title: "Bladwijzers aanwezig",
        description: outline.length + " bladwijzer" + (outline.length === 1 ? "" : "s") + " gevonden.",
        findings: bookmarkFindings
      });
    } else {
      var totalPages = collector.pagesWithTags + collector.pagesWithoutTags;
      if (totalPages > 4) {
        checks.push({
          status: "warn",
          title: "Geen bladwijzers",
          description: "Dit document heeft " + totalPages + " pagina's maar bevat geen bladwijzers.",
          fix: FIX.noBookmarks
        });
      } else {
        checks.push({
          status: "pass",
          title: "Bladwijzers niet vereist",
          description: "Dit document is kort (" + totalPages + " pagina" + (totalPages === 1 ? "" : "'s") + ")."
        });
      }
    }

    return checks;
  }

  // ============================================================
  // Rendering
  // ============================================================

  function renderResults(allChecks) {
    lastResults = allChecks;

    var pass = 0, fail = 0, warn = 0;
    for (var i = 0; i < allChecks.length; i++) {
      for (var j = 0; j < allChecks[i].checks.length; j++) {
        var s = allChecks[i].checks[j].status;
        if (s === "pass") pass++;
        else if (s === "fail") fail++;
        else if (s === "warn") warn++;
      }
    }

    var summaryHTML = '<div class="tool-pdf__summary-grid">';
    summaryHTML += summaryCard("pass", pass, "Geslaagd");
    summaryHTML += summaryCard("fail", fail, "Problemen");
    summaryHTML += summaryCard("warn", warn, "Waarschuwingen");
    summaryHTML += "</div>";
    resultsSummary.innerHTML = summaryHTML;

    var catHTML = "";
    for (var k = 0; k < allChecks.length; k++) {
      catHTML += renderCategory(allChecks[k]);
    }
    resultsCategories.innerHTML = catHTML;

    // Bind accordion clicks
    var triggers = resultsCategories.querySelectorAll(".tool-pdf__accordion-trigger");
    for (var t = 0; t < triggers.length; t++) {
      triggers[t].addEventListener("click", toggleAccordion);
    }

    resultsArea.hidden = false;
    resultsSummary.focus();
  }

  function toggleAccordion(e) {
    var btn = e.currentTarget;
    var expanded = btn.getAttribute("aria-expanded") === "true";
    var panelId = btn.getAttribute("aria-controls");
    var panel = document.getElementById(panelId);
    if (!panel) return;

    btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    panel.hidden = expanded;
  }

  function summaryCard(status, count, label) {
    return '<div class="tool-pdf__summary-card tool-pdf__summary-card--' + status + '">' +
      '<span class="tool-pdf__summary-count">' + count + "</span>" +
      '<span class="tool-pdf__summary-label">' + label + "</span></div>";
  }

  function renderCategory(cat) {
    var html = '<div class="tool-pdf__category">';
    html += '<h2 class="tool-pdf__category-title">' + escapeHtml(cat.category) + "</h2>";

    for (var i = 0; i < cat.checks.length; i++) {
      html += renderCheck(cat.checks[i]);
    }

    html += "</div>";
    return html;
  }

  function renderCheck(check) {
    var icon = statusIcon(check.status);
    var label = statusText(check.status);
    var hasAccordion = (check.findings && check.findings.length > 0) || check.fix;
    var accId = "acc-" + (++accordionCounter);

    var html = '<div class="tool-pdf__check tool-pdf__check--' + check.status + '">';

    // Header
    if (hasAccordion) {
      html += '<button type="button" class="tool-pdf__check-header tool-pdf__accordion-trigger" aria-expanded="false" aria-controls="' + accId + '">';
    } else {
      html += '<div class="tool-pdf__check-header">';
    }

    html += '<span class="tool-pdf__check-icon" aria-hidden="true">' + icon + "</span>";
    html += '<span class="tool-pdf__check-title">' + escapeHtml(check.title) + "</span>";
    html += '<span class="tool-pdf__check-badge tool-pdf__check-badge--' + check.status + '">' + label + "</span>";

    if (hasAccordion) {
      html += '<span class="tool-pdf__check-chevron" aria-hidden="true"></span>';
      html += "</button>";
    } else {
      html += "</div>";
    }

    // Description (always visible)
    html += '<p class="tool-pdf__check-desc">' + escapeHtml(check.description) + "</p>";

    // Accordion panel
    if (hasAccordion) {
      html += '<div class="tool-pdf__accordion-panel" id="' + accId + '" hidden>';

      // Findings table
      if (check.findings && check.findings.length > 0) {
        html += '<table class="tool-pdf__findings">';
        html += "<thead><tr><th>Pagina</th><th>Element</th><th>Detail</th></tr></thead><tbody>";
        for (var i = 0; i < check.findings.length; i++) {
          var f = check.findings[i];
          html += "<tr>";
          html += "<td>" + (f.page ? f.page : "\u2014") + "</td>";
          html += '<td><code>' + escapeHtml(f.element) + "</code></td>";
          html += "<td>" + escapeHtml(f.detail) + "</td>";
          html += "</tr>";
        }
        html += "</tbody></table>";
      }

      // Fix instruction
      if (check.fix) {
        html += '<div class="tool-pdf__fix">';
        html += '<strong class="tool-pdf__fix-label">Oplossing</strong>';
        html += '<p class="tool-pdf__fix-text">' + check.fix + "</p>";
        html += "</div>";
      }

      html += "</div>";
    }

    html += "</div>";
    return html;
  }

  function statusIcon(status) {
    switch (status) {
      case "pass": return "\u2713";
      case "fail": return "\u2717";
      case "warn": return "\u26A0";
      default:     return "\u2014";
    }
  }

  function statusText(status) {
    switch (status) {
      case "pass": return "Geslaagd";
      case "fail": return "Probleem";
      case "warn": return "Waarschuwing";
      default:     return "N.v.t.";
    }
  }

  // ============================================================
  // Export
  // ============================================================

  function exportFindings(allChecks, fileName) {
    var pass = 0, fail = 0, warn = 0;
    for (var i = 0; i < allChecks.length; i++) {
      for (var j = 0; j < allChecks[i].checks.length; j++) {
        var s = allChecks[i].checks[j].status;
        if (s === "pass") pass++;
        else if (s === "fail") fail++;
        else if (s === "warn") warn++;
      }
    }

    var date = new Date().toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" });

    var html = '<!DOCTYPE html>\n<html lang="nl">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    html += "<title>PDF Toegankelijkheidsrapport \u2014 " + escapeHtml(fileName) + "</title>\n";
    html += "<style>\n";
    html += "*, *::before, *::after { box-sizing: border-box; }\n";
    html += "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 52rem; margin: 0 auto; padding: 2rem 1rem; color: #1F2937; line-height: 1.6; }\n";
    html += "h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }\n";
    html += ".meta { color: #6b7280; margin-bottom: 2rem; }\n";
    html += ".summary { display: flex; gap: 1rem; margin-bottom: 2rem; }\n";
    html += ".summary-card { padding: 0.75rem 1.25rem; border-radius: 0.5rem; text-align: center; flex: 1; }\n";
    html += ".summary-card--pass { background: #f0fdf4; border: 1px solid #bbf7d0; }\n";
    html += ".summary-card--fail { background: #fef2f2; border: 1px solid #fecaca; }\n";
    html += ".summary-card--warn { background: #fffbeb; border: 1px solid #fde68a; }\n";
    html += ".summary-count { display: block; font-size: 1.5rem; font-weight: 700; }\n";
    html += ".summary-label { font-size: 0.875rem; }\n";
    html += "h2 { font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.5rem; padding-bottom: 0.25rem; border-bottom: 2px solid #e5e7eb; }\n";
    html += ".check { margin-bottom: 1.25rem; padding: 0.75rem 1rem; border-radius: 0.5rem; border-left: 4px solid #d1d5db; }\n";
    html += ".check--pass { border-left-color: #16a34a; }\n";
    html += ".check--fail { border-left-color: #A30D4B; }\n";
    html += ".check--warn { border-left-color: #d97706; }\n";
    html += ".check-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }\n";
    html += ".check-icon { font-size: 1.1rem; }\n";
    html += ".check-icon--pass { color: #16a34a; }\n";
    html += ".check-icon--fail { color: #A30D4B; }\n";
    html += ".check-icon--warn { color: #d97706; }\n";
    html += ".check-title { font-weight: 600; }\n";
    html += ".check-badge { font-size: 0.75rem; padding: 0.1rem 0.5rem; border-radius: 1rem; font-weight: 600; }\n";
    html += ".check-badge--pass { background: #dcfce7; color: #166534; }\n";
    html += ".check-badge--fail { background: #ffe4e6; color: #9f1239; }\n";
    html += ".check-badge--warn { background: #fef3c7; color: #92400e; }\n";
    html += ".check-badge--na { background: #f3f4f6; color: #6b7280; }\n";
    html += ".check-desc { margin: 0.25rem 0 0.5rem; color: #4b5563; font-size: 0.925rem; }\n";
    html += "table { width: 100%; border-collapse: collapse; font-size: 0.875rem; margin: 0.5rem 0; }\n";
    html += "th, td { text-align: left; padding: 0.4rem 0.6rem; border: 1px solid #e5e7eb; }\n";
    html += "th { background: #f9fafb; font-weight: 600; }\n";
    html += "code { background: #f3f4f6; padding: 0.15rem 0.35rem; border-radius: 0.25rem; font-size: 0.85em; }\n";
    html += ".fix { background: #fffbeb; border: 1px solid #fde68a; border-radius: 0.5rem; padding: 0.75rem 1rem; margin-top: 0.5rem; }\n";
    html += ".fix-label { display: block; font-weight: 600; color: #92400e; margin-bottom: 0.25rem; }\n";
    html += ".fix-text { margin: 0; color: #78350f; font-size: 0.9rem; }\n";
    html += ".footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.8rem; color: #9ca3af; }\n";
    html += "@media print { body { padding: 0; } .summary-card { break-inside: avoid; } .check { break-inside: avoid; } }\n";
    html += "</style>\n</head>\n<body>\n";

    html += "<h1>PDF Toegankelijkheidsrapport</h1>\n";
    html += '<p class="meta">Bestand: <strong>' + escapeHtml(fileName) + "</strong> &mdash; " + date + "</p>\n";

    // Summary
    html += '<div class="summary">\n';
    html += '<div class="summary-card summary-card--pass"><span class="summary-count">' + pass + '</span><span class="summary-label">Geslaagd</span></div>\n';
    html += '<div class="summary-card summary-card--fail"><span class="summary-count">' + fail + '</span><span class="summary-label">Problemen</span></div>\n';
    html += '<div class="summary-card summary-card--warn"><span class="summary-count">' + warn + '</span><span class="summary-label">Waarschuwingen</span></div>\n';
    html += "</div>\n";

    // Categories
    for (var c = 0; c < allChecks.length; c++) {
      var cat = allChecks[c];
      html += "<h2>" + escapeHtml(cat.category) + "</h2>\n";

      for (var k = 0; k < cat.checks.length; k++) {
        var check = cat.checks[k];
        var icon = statusIcon(check.status);
        var label = statusText(check.status);

        html += '<div class="check check--' + check.status + '">\n';
        html += '<div class="check-header">';
        html += '<span class="check-icon check-icon--' + check.status + '">' + icon + "</span>";
        html += '<span class="check-title">' + escapeHtml(check.title) + "</span>";
        html += '<span class="check-badge check-badge--' + check.status + '">' + label + "</span>";
        html += "</div>\n";
        html += '<p class="check-desc">' + escapeHtml(check.description) + "</p>\n";

        // Findings table
        if (check.findings && check.findings.length > 0) {
          html += "<table><thead><tr><th>Pagina</th><th>Element</th><th>Detail</th></tr></thead><tbody>\n";
          for (var f = 0; f < check.findings.length; f++) {
            var finding = check.findings[f];
            html += "<tr>";
            html += "<td>" + (finding.page ? finding.page : "\u2014") + "</td>";
            html += "<td><code>" + escapeHtml(finding.element) + "</code></td>";
            html += "<td>" + escapeHtml(finding.detail) + "</td>";
            html += "</tr>\n";
          }
          html += "</tbody></table>\n";
        }

        // Fix instruction
        if (check.fix) {
          html += '<div class="fix">';
          html += '<span class="fix-label">Oplossing</span>';
          html += '<p class="fix-text">' + check.fix + "</p>";
          html += "</div>\n";
        }

        html += "</div>\n";
      }
    }

    html += '<p class="footer">Gegenereerd met de PDF Toegankelijkheidscheck van Proper Access &mdash; properaccess.nl/tools/pdf-checker</p>\n';
    html += "</body>\n</html>";

    // Download
    var blob = new Blob([html], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName.replace(/\.pdf$/i, "") + " - toegankelijkheidsrapport.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ============================================================
  // Utilities
  // ============================================================

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function truncate(str, max) {
    if (str.length <= max) return str;
    return str.substring(0, max) + "\u2026";
  }

})();

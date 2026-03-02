/**
 * PDF Toegankelijkheidschecker — Proper Access
 * Analyseert PDF-bestanden op toegankelijkheidsproblemen via PDF.js
 * Supports NL / EN interface toggle
 */
(function () {
  "use strict";

  // ============================================================
  // Config
  // ============================================================

  var PDFJS_CDN = "https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.min.mjs";
  var PDFJS_WORKER = "https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs";

  // ============================================================
  // Translations
  // ============================================================

  var LANG = {
    nl: {
      toolTitle: "PDF toegankelijkheidscheck",
      // Gate
      gateText: "Deze tool is beschikbaar voor klanten van Proper Access. Voer het wachtwoord in om toegang te krijgen.",
      gatePasswordLabel: "Wachtwoord",
      gateBtn: "Toegang",
      gateError: "Onjuist wachtwoord. Probeer het opnieuw.",
      // Intro
      intro: "Upload een PDF-bestand om het automatisch te laten controleren op veelvoorkomende toegankelijkheidsproblemen. 100% gemaakt in Nederland, volledig in je browser \u2014 je bestand wordt niet verstuurd en nergens opgeslagen.",
      step1: "Kies of sleep een PDF-bestand",
      step2: "Bekijk en exporteer de gevonden problemen met concrete oplossingen",
      // Upload
      uploadAriaLabel: "Sleep een PDF hierheen of klik om te uploaden",
      uploadText: "Sleep een PDF hierheen",
      uploadOr: "of",
      uploadBtn: "Kies een bestand",
      // Progress
      loading: "Bezig met laden...",
      loadingPdfJs: "PDF.js laden...",
      openingPdf: "PDF openen...",
      analyzingPage: "Pagina {0} van {1} analyseren...",
      pageCountSg: "{0} pagina",
      pageCountPl: "{0} pagina\u2019s",
      // Buttons
      exportBtn: "Exporteer bevindingen",
      resetBtn: "Andere PDF controleren",
      // Errors
      errGeneric: "Er is een fout opgetreden: {0}",
      errFileRead: "Kan het bestand niet lezen.",
      errPdfJs: "PDF.js kon niet geladen worden.",
      errPdfJsNetwork: "PDF.js kon niet geladen worden. Controleer je internetverbinding.",
      // Categories
      catDocument: "Document",
      catHeadings: "Koppen",
      catImages: "Afbeeldingen",
      catLists: "Lijsten",
      catTables: "Tabellen",
      catNavigation: "Navigatie",
      // Status badges
      badgePass: "Geslaagd",
      badgeFail: "Probleem",
      badgeWarn: "Waarschuwing",
      badgeNa: "N.v.t.",
      // Summary cards
      sumPass: "Geslaagd",
      sumFail: "Problemen",
      sumWarn: "Waarschuwingen",
      // Table headers
      thPage: "Pagina",
      thElement: "Element",
      thDetail: "Detail",
      // Fix label
      fixLabel: "Oplossing",
      // Fixes
      fixNoTags: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Toegankelijkheid &gt; Automatisch taggen</strong>. Controleer daarna de tagstructuur handmatig via het tagspaneel. In veel gevallen is het beter om het brondocument (Word, InDesign) opnieuw te exporteren met de juiste instellingen voor getagde PDF.",
      fixPartialTags: "Niet alle pagina\u2019s zijn getagd. Open het document in Adobe Acrobat Pro en controleer via <strong>Weergave &gt; Navigatievensters &gt; Tags</strong> welke pagina\u2019s ontbreken. Tag de ontbrekende content handmatig of exporteer het brondocument opnieuw.",
      fixNoTitle: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Bestand &gt; Eigenschappen &gt; Beschrijving</strong> en vul een beschrijvende titel in. Vink onder <strong>Beginweergave</strong> aan dat de documenttitel wordt weergegeven in plaats van de bestandsnaam.",
      fixNoLang: "Open het PDF-document in Adobe Acrobat Pro. Ga naar <strong>Bestand &gt; Eigenschappen &gt; Geavanceerd</strong> en stel de taal in (bijvoorbeeld \"nl-NL\" voor Nederlands). Je kunt dit ook instellen in het brondocument voordat je exporteert.",
      fixSkippedHeadings: "Pas de kopniveaus aan zodat ze een logische hi\u00ebrarchie volgen. Een H1 moet gevolgd worden door een H2, niet door een H3 of lager. Gebruik in het brondocument de juiste kopstijlen, of pas de tags aan in Adobe Acrobat Pro via het tagspaneel.",
      fixEmptyHeadings: "Verwijder de lege koptag of voeg inhoud toe. In Adobe Acrobat Pro: open het <strong>tagspaneel</strong>, zoek de lege koptag en verwijder deze, of wijzig de tag naar een <strong>P</strong>-tag (alinea).",
      fixNoAlt: "Voeg een alt-tekst toe aan elke informatieve afbeelding. In Adobe Acrobat Pro: klik met rechts op de Figure-tag in het tagspaneel, kies <strong>Eigenschappen</strong> en vul het veld \"Alternatieve tekst\" in. De tekst moet de inhoud of functie van de afbeelding beschrijven.",
      fixListStructure: "Corrigeer de lijststructuur in het tagspaneel van Adobe Acrobat Pro. Een correcte lijst gebruikt de tags <strong>L</strong> (lijst) &gt; <strong>LI</strong> (lijstitem) &gt; <strong>Lbl</strong> (label/opsommingsteken) + <strong>LBody</strong> (inhoud). Zorg dat elk lijstitem deze structuur volgt.",
      fixNoTH: "Markeer de koprij of -kolom van de tabel met <strong>TH</strong>-tags in plaats van TD-tags. In Adobe Acrobat Pro: open het tagspaneel, zoek de tabel en wijzig de tags van de kopcellen. Stel ook het <strong>Scope</strong>-attribuut in (\"Row\" of \"Column\").",
      fixNoBookmarks: "Voeg bladwijzers toe aan het document. In Adobe Acrobat Pro: ga naar <strong>Weergave &gt; Navigatievensters &gt; Bladwijzers</strong>. Maak bladwijzers aan voor alle koppen en belangrijke secties. Bij export vanuit Word of InDesign kun je dit automatisch laten genereren.",
      // Document checks
      docTagged: "PDF is getagd",
      docTaggedDesc: "Dit document bevat tags (structuurinformatie) die het toegankelijk maken voor schermlezers.",
      docPartiallyTagged: "PDF is gedeeltelijk getagd",
      docPartiallyTaggedDesc: "Slechts {0} van de {1} pagina\u2019s bevatten tags.",
      docNoTags: "PDF mist tags",
      docNoTagsDesc: "Dit document bevat geen tags. Zonder tags is de inhoud ontoegankelijk voor schermlezers.",
      docTitleOk: "Titel aanwezig",
      docTitleOkDesc: "De documenttitel is: \u201C{0}\u201D",
      docNoTitle: "Geen titel ingesteld",
      docNoTitleDesc: "Dit PDF-document heeft geen titel.",
      docLangOk: "Taal ingesteld",
      docLangOkDesc: "De documenttaal is ingesteld op \u201C{0}\u201D.",
      docLangOkMeta: "De documenttaal is ingesteld op \u201C{0}\u201D (via metadata).",
      docNoLang: "Geen taal ingesteld",
      docNoLangDesc: "De taal van dit document is niet ingesteld. Zonder taalinstelling kan een schermlezer de verkeerde uitspraak gebruiken.",
      // Heading checks
      hdNone: "Geen koppen gevonden",
      hdNoneDesc: "Er zijn geen kopstructuren (H1\u2013H6) gevonden in de tags.",
      hdNa: "Koppen niet controleerbaar",
      hdNaDesc: "Omdat het document geen tags heeft, kunnen koppen niet gecontroleerd worden.",
      hdPresent: "Koppen aanwezig",
      hdPresentDesc: "{0} gevonden.",
      hdSg: "kop",
      hdPl: "koppen",
      hdSkipped: "Kopniveaus overgeslagen",
      hdSkippedDesc: "Er worden kopniveaus overgeslagen. Dit maakt de structuur onduidelijk voor schermlezers.",
      hdOk: "Koph\u00ebrarchie correct",
      hdOkDesc: "De kopniveaus volgen een logische volgorde.",
      hdEmpty: "Lege koppen gevonden",
      hdEmptyDesc: "{0} zonder inhoud gevonden.",
      hdNoEmpty: "Geen lege koppen",
      hdNoEmptyDesc: "Alle koppen bevatten tekst.",
      noText: "(geen tekst)",
      emptyHdTag: "Lege koptag",
      // Image checks
      imgNone: "Geen afbeeldingen gevonden",
      imgNoneDesc: "Er zijn geen Figure-tags gevonden in dit document.",
      imgNoAlt: "Afbeeldingen zonder alt-tekst",
      imgNoAltDesc: "{0} van {1} {2} mist een alternatieve tekst.",
      imgSg: "afbeelding",
      imgPl: "afbeeldingen",
      imgNoAltDetail: "Geen alt-tekst",
      imgAltOk: "{0} {1} alt-tekst",
      imgAltOkSg: "afbeelding heeft",
      imgAltOkPl: "afbeeldingen hebben",
      imgAltOkDesc: "Controleer of de alt-teksten de inhoud goed beschrijven.",
      // List checks
      lstNone: "Geen lijsten gevonden",
      lstNoneDesc: "Er zijn geen lijststructuren (L-tags) gevonden.",
      lstInvalid: "Lijststructuur niet correct",
      lstInvalidDesc: "{0} van {1} {2} heeft een onjuiste tagstructuur.",
      lstSg: "lijst",
      lstPl: "lijsten",
      lstOk: "{0} {1} correct",
      lstOkSg: "lijst",
      lstOkPl: "lijsten",
      lstOkDesc: "Tagstructuur L \u2192 LI \u2192 LBody is correct.",
      lstNoItems: "Lijst bevat geen items",
      lstNoLBody: "Lijstitem mist LBody-tag",
      lstNoLI: "Lijst bevat geen LI-tags",
      // Table checks
      tblNone: "Geen tabellen gevonden",
      tblNoneDesc: "Er zijn geen tabelstructuren (Table-tags) gevonden.",
      tblNoTH: "Tabelkoppen ontbreken",
      tblNoTHDesc: "{0} van {1} {2} mist kopmarkeringen (TH-tags).",
      tblSg: "tabel",
      tblPl: "tabellen",
      tblOk: "{0} {1} met koppen",
      tblOkSg: "tabel",
      tblOkPl: "tabellen",
      tblOkDesc: "Kopmarkeringen (TH-tags) aanwezig.",
      tblRows: "{0} rijen",
      tblRowsCols: "{0} rijen, {1} kolommen",
      tblNoTHDetail: "geen TH-tags",
      // Navigation checks
      navNa: "Bladwijzers niet controleerbaar",
      navNaDesc: "Omdat het document geen tags heeft, is de navigatiecontrole beperkt.",
      navOk: "Bladwijzers aanwezig",
      navOkDesc: "{0} gevonden.",
      navSg: "bladwijzer",
      navPl: "bladwijzers",
      navBookmark: "Bladwijzer",
      navMore: "en {0} meer\u2026",
      navNone: "Geen bladwijzers",
      navNoneDesc: "Dit document heeft {0} pagina\u2019s maar bevat geen bladwijzers.",
      navNotReq: "Bladwijzers niet vereist",
      navNotReqDesc: "Dit document is kort ({0}).",
      navPageSg: "pagina",
      navPagePl: "pagina\u2019s",
      // Export
      exportTitle: "PDF Toegankelijkheidsrapport",
      exportFileLbl: "Bestand",
      exportFooter: "Gegenereerd met de PDF Toegankelijkheidscheck van Proper Access \u2014 properaccess.nl/tools/pdf-checker",
      exportSuffix: " - toegankelijkheidsrapport.html",
      // CTA
      ctaHtml: "Wil je deze tool op maat laten maken voor je organisatie? Neem contact op met <a href=\"tel:+31628742275\">Julia Tol</a> om de mogelijkheden te bespreken. Je wordt blij van de voorwaarden.",
      // Toggle
      langLabel: "Switch to English"
    },

    en: {
      toolTitle: "PDF accessibility checker",
      gateText: "This tool is available for Proper Access clients. Enter the password to gain access.",
      gatePasswordLabel: "Password",
      gateBtn: "Access",
      gateError: "Incorrect password. Please try again.",
      intro: "Upload a PDF file to automatically check it for common accessibility issues. 100% made in the Netherlands, runs entirely in your browser \u2014 your file is never uploaded or stored anywhere.",
      step1: "Choose or drag a PDF file",
      step2: "View and export the findings with practical solutions",
      uploadAriaLabel: "Drag a PDF here or click to upload",
      uploadText: "Drag a PDF here",
      uploadOr: "or",
      uploadBtn: "Choose a file",
      loading: "Loading...",
      loadingPdfJs: "Loading PDF.js...",
      openingPdf: "Opening PDF...",
      analyzingPage: "Analyzing page {0} of {1}...",
      pageCountSg: "{0} page",
      pageCountPl: "{0} pages",
      exportBtn: "Export findings",
      resetBtn: "Check another PDF",
      errGeneric: "An error occurred: {0}",
      errFileRead: "Unable to read the file.",
      errPdfJs: "PDF.js could not be loaded.",
      errPdfJsNetwork: "PDF.js could not be loaded. Check your internet connection.",
      catDocument: "Document",
      catHeadings: "Headings",
      catImages: "Images",
      catLists: "Lists",
      catTables: "Tables",
      catNavigation: "Navigation",
      badgePass: "Passed",
      badgeFail: "Issue",
      badgeWarn: "Warning",
      badgeNa: "N/A",
      sumPass: "Passed",
      sumFail: "Issues",
      sumWarn: "Warnings",
      thPage: "Page",
      thElement: "Element",
      thDetail: "Detail",
      fixLabel: "Solution",
      fixNoTags: "Open the PDF document in Adobe Acrobat Pro. Go to <strong>Accessibility &gt; Autotag Document</strong>. Then manually review the tag structure via the Tags panel. In many cases it is better to re-export the source document (Word, InDesign) with the correct settings for tagged PDF.",
      fixPartialTags: "Not all pages are tagged. Open the document in Adobe Acrobat Pro and check via <strong>View &gt; Navigation Panels &gt; Tags</strong> which pages are missing. Tag the missing content manually or re-export the source document.",
      fixNoTitle: "Open the PDF document in Adobe Acrobat Pro. Go to <strong>File &gt; Properties &gt; Description</strong> and enter a descriptive title. Under <strong>Initial View</strong>, select to display the document title instead of the file name.",
      fixNoLang: "Open the PDF document in Adobe Acrobat Pro. Go to <strong>File &gt; Properties &gt; Advanced</strong> and set the language (e.g. \"en\" for English). You can also set this in the source document before exporting.",
      fixSkippedHeadings: "Adjust the heading levels so they follow a logical hierarchy. An H1 should be followed by an H2, not by an H3 or lower. Use the correct heading styles in the source document, or adjust the tags in Adobe Acrobat Pro via the Tags panel.",
      fixEmptyHeadings: "Remove the empty heading tag or add content. In Adobe Acrobat Pro: open the <strong>Tags panel</strong>, find the empty heading tag and delete it, or change the tag to a <strong>P</strong> tag (paragraph).",
      fixNoAlt: "Add alt text to every informative image. In Adobe Acrobat Pro: right-click the Figure tag in the Tags panel, choose <strong>Properties</strong> and fill in the \"Alternative Text\" field. The text should describe the content or function of the image.",
      fixListStructure: "Correct the list structure in the Tags panel of Adobe Acrobat Pro. A correct list uses the tags <strong>L</strong> (list) &gt; <strong>LI</strong> (list item) &gt; <strong>Lbl</strong> (label/bullet) + <strong>LBody</strong> (content). Make sure each list item follows this structure.",
      fixNoTH: "Mark the header row or column of the table with <strong>TH</strong> tags instead of TD tags. In Adobe Acrobat Pro: open the Tags panel, find the table and change the tags of the header cells. Also set the <strong>Scope</strong> attribute (\"Row\" or \"Column\").",
      fixNoBookmarks: "Add bookmarks to the document. In Adobe Acrobat Pro: go to <strong>View &gt; Navigation Panels &gt; Bookmarks</strong>. Create bookmarks for all headings and important sections. When exporting from Word or InDesign, you can generate these automatically.",
      docTagged: "PDF is tagged",
      docTaggedDesc: "This document contains tags (structural information) that make it accessible for screen readers.",
      docPartiallyTagged: "PDF is partially tagged",
      docPartiallyTaggedDesc: "Only {0} of {1} pages contain tags.",
      docNoTags: "PDF is missing tags",
      docNoTagsDesc: "This document contains no tags. Without tags, the content is inaccessible to screen readers.",
      docTitleOk: "Title present",
      docTitleOkDesc: "The document title is: \u201C{0}\u201D",
      docNoTitle: "No title set",
      docNoTitleDesc: "This PDF document has no title.",
      docLangOk: "Language set",
      docLangOkDesc: "The document language is set to \u201C{0}\u201D.",
      docLangOkMeta: "The document language is set to \u201C{0}\u201D (via metadata).",
      docNoLang: "No language set",
      docNoLangDesc: "The language of this document is not set. Without a language setting, a screen reader may use incorrect pronunciation.",
      hdNone: "No headings found",
      hdNoneDesc: "No heading structures (H1\u2013H6) were found in the tags.",
      hdNa: "Headings cannot be checked",
      hdNaDesc: "Because the document has no tags, headings cannot be checked.",
      hdPresent: "Headings present",
      hdPresentDesc: "{0} found.",
      hdSg: "heading",
      hdPl: "headings",
      hdSkipped: "Heading levels skipped",
      hdSkippedDesc: "Heading levels are being skipped. This makes the structure unclear for screen readers.",
      hdOk: "Heading hierarchy correct",
      hdOkDesc: "The heading levels follow a logical order.",
      hdEmpty: "Empty headings found",
      hdEmptyDesc: "{0} without content found.",
      hdNoEmpty: "No empty headings",
      hdNoEmptyDesc: "All headings contain text.",
      noText: "(no text)",
      emptyHdTag: "Empty heading tag",
      imgNone: "No images found",
      imgNoneDesc: "No Figure tags were found in this document.",
      imgNoAlt: "Images without alt text",
      imgNoAltDesc: "{0} of {1} {2} is missing alternative text.",
      imgSg: "image",
      imgPl: "images",
      imgNoAltDetail: "No alt text",
      imgAltOk: "{0} {1} alt text",
      imgAltOkSg: "image has",
      imgAltOkPl: "images have",
      imgAltOkDesc: "Check whether the alt texts accurately describe the content.",
      lstNone: "No lists found",
      lstNoneDesc: "No list structures (L tags) were found.",
      lstInvalid: "List structure incorrect",
      lstInvalidDesc: "{0} of {1} {2} has an incorrect tag structure.",
      lstSg: "list",
      lstPl: "lists",
      lstOk: "{0} {1} correct",
      lstOkSg: "list",
      lstOkPl: "lists",
      lstOkDesc: "Tag structure L \u2192 LI \u2192 LBody is correct.",
      lstNoItems: "List contains no items",
      lstNoLBody: "List item is missing LBody tag",
      lstNoLI: "List contains no LI tags",
      tblNone: "No tables found",
      tblNoneDesc: "No table structures (Table tags) were found.",
      tblNoTH: "Table headers missing",
      tblNoTHDesc: "{0} of {1} {2} is missing header markers (TH tags).",
      tblSg: "table",
      tblPl: "tables",
      tblOk: "{0} {1} with headers",
      tblOkSg: "table",
      tblOkPl: "tables",
      tblOkDesc: "Header markers (TH tags) present.",
      tblRows: "{0} rows",
      tblRowsCols: "{0} rows, {1} columns",
      tblNoTHDetail: "no TH tags",
      navNa: "Bookmarks cannot be checked",
      navNaDesc: "Because the document has no tags, navigation checks are limited.",
      navOk: "Bookmarks present",
      navOkDesc: "{0} found.",
      navSg: "bookmark",
      navPl: "bookmarks",
      navBookmark: "Bookmark",
      navMore: "and {0} more\u2026",
      navNone: "No bookmarks",
      navNoneDesc: "This document has {0} pages but contains no bookmarks.",
      navNotReq: "Bookmarks not required",
      navNotReqDesc: "This document is short ({0}).",
      navPageSg: "page",
      navPagePl: "pages",
      exportTitle: "PDF Accessibility Report",
      exportFileLbl: "File",
      exportFooter: "Generated with the PDF Accessibility Checker by Proper Access \u2014 properaccess.nl/tools/pdf-checker",
      exportSuffix: " - accessibility-report.html",
      ctaHtml: "Want this tool customized for your organization? Contact <a href=\"tel:+31628742275\">Julia Tol</a> to discuss the options. You\u2019ll love the terms.",
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

  /** Template: tf("key", val0, val1) replaces {0}, {1}, ... */
  function tf(key) {
    var s = t(key);
    var args = arguments;
    return s.replace(/\{(\d+)\}/g, function (m, i) {
      var idx = parseInt(i, 10) + 1;
      return idx < args.length ? args[idx] : m;
    });
  }

  function plural(count, sgKey, plKey) {
    return count + " " + (count === 1 ? t(sgKey) : t(plKey));
  }

  /** Translate all static DOM elements with data-i18n attributes */
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
    if (lastAnalysis) {
      rebuildResults();
    }
  }

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
  var langToggle = document.getElementById("langToggle");

  if (!uploadZone) return;

  var pdfjsLib = null;
  var isAnalyzing = false;
  var accordionCounter = 0;
  var lastResults = null;
  var lastFileName = "";
  var lastAnalysis = null; // raw data for re-rendering on language switch

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
  // PDF.js loader
  // ============================================================

  function loadPdfJs() {
    if (pdfjsLib) return Promise.resolve();

    if (typeof window.import === "function" || true) {
      return import(PDFJS_CDN).then(function (mod) {
        pdfjsLib = mod;
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
      }).catch(function () {
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
          reject(new Error(t("errPdfJs")));
        }
      };
      script.onerror = function () {
        reject(new Error(t("errPdfJsNetwork")));
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
    lastAnalysis = null;
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
    progressText.textContent = t("loadingPdfJs");

    uploadZone.hidden = true;
    resultsArea.hidden = true;
    progressArea.hidden = false;

    var reader = new FileReader();
    reader.onload = function () {
      loadPdfJs()
        .then(function () {
          progressText.textContent = t("openingPdf");
          return analyzePDF(reader.result);
        })
        .catch(function (err) {
          showError(tf("errGeneric", err.message));
        })
        .finally(function () {
          isAnalyzing = false;
        });
    };
    reader.onerror = function () {
      showError(t("errFileRead"));
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
      pageCountEl.textContent = numPages === 1 ? tf("pageCountSg", numPages) : tf("pageCountPl", numPages);

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
              progressText.textContent = tf("analyzingPage", pageNum, numPages);

              return doc.getPage(pageNum).then(function (page) {
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

          // Store raw data for language-switch re-rendering
          lastAnalysis = {
            metadata: metadata,
            markInfo: markInfo,
            collector: collector,
            outline: outline
          };

          var allChecks = buildAllChecks(metadata, markInfo, collector, outline);
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
  // Build all checks (used for initial render and language switch)
  // ============================================================

  function buildAllChecks(metadata, markInfo, collector, outline) {
    var allChecks = [];
    allChecks.push({ catKey: "catDocument", checks: checkDocument(metadata, markInfo, collector) });
    allChecks.push({ catKey: "catHeadings", checks: checkHeadings(collector) });
    allChecks.push({ catKey: "catImages", checks: checkImages(collector) });
    allChecks.push({ catKey: "catLists", checks: checkLists(collector) });
    allChecks.push({ catKey: "catTables", checks: checkTables(collector) });
    allChecks.push({ catKey: "catNavigation", checks: checkNavigation(outline, collector) });
    return allChecks;
  }

  function rebuildResults() {
    if (!lastAnalysis) return;
    accordionCounter = 0;
    var allChecks = buildAllChecks(
      lastAnalysis.metadata,
      lastAnalysis.markInfo,
      lastAnalysis.collector,
      lastAnalysis.outline
    );
    renderResults(allChecks);
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

    if (role === "Root" || role === "Document") {
      if (node.lang) collector.rootLang = node.lang;
    }

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

    if (role === "Figure") {
      collector.figures.push({
        hasAlt: !!(node.alt && node.alt.trim()),
        altText: node.alt || "",
        page: pageNum
      });
    }

    if (role === "L") {
      var listCheck = validateList(node);
      var itemCount = countListItems(node);
      collector.lists.push({
        valid: listCheck.valid,
        page: pageNum,
        issueKey: listCheck.issueKey,
        itemCount: itemCount
      });
    }

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

    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        if (child && child.role) {
          walkTree(child, pageNum, collector, mcidMap);
        }
      }
    }
  }

  function extractText(node, mcidMap) {
    var text = "";
    if (!node.children) return text;

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (!child) continue;

      if (!child.role) {
        var mcid = child.id !== undefined ? child.id : null;
        if (mcid !== null && mcidMap[mcid]) {
          text += mcidMap[mcid];
        }
      } else {
        text += extractText(child, mcidMap);
      }
    }

    return text;
  }

  function validateList(node) {
    if (!node.children || node.children.length === 0) {
      return { valid: false, issueKey: "lstNoItems" };
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
          return { valid: false, issueKey: "lstNoLBody" };
        }
      }
    }
    if (!hasLI) {
      return { valid: false, issueKey: "lstNoLI" };
    }
    return { valid: true, issueKey: null };
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
        title: t("docTagged"),
        description: t("docTaggedDesc")
      });
    } else if (collector.pagesWithTags > 0 && collector.pagesWithoutTags > 0) {
      checks.push({
        status: "fail",
        title: t("docPartiallyTagged"),
        description: tf("docPartiallyTaggedDesc", collector.pagesWithTags, totalPages),
        fix: t("fixPartialTags")
      });
    } else {
      checks.push({
        status: "fail",
        title: t("docNoTags"),
        description: t("docNoTagsDesc"),
        fix: t("fixNoTags")
      });
    }

    // 2. Title
    var title = info.Title ? info.Title.trim() : "";
    if (title && title.length > 0) {
      checks.push({
        status: "pass",
        title: t("docTitleOk"),
        description: tf("docTitleOkDesc", escapeHtml(truncate(title, 80)))
      });
    } else {
      checks.push({
        status: "fail",
        title: t("docNoTitle"),
        description: t("docNoTitleDesc"),
        fix: t("fixNoTitle")
      });
    }

    // 3. Language
    if (collector.rootLang) {
      checks.push({
        status: "pass",
        title: t("docLangOk"),
        description: tf("docLangOkDesc", escapeHtml(collector.rootLang))
      });
    } else {
      var metaLang = null;
      if (metadata && metadata.metadata) {
        try { metaLang = metadata.metadata.get("dc:language"); } catch (e) { /* */ }
      }
      if (metaLang) {
        checks.push({
          status: "pass",
          title: t("docLangOk"),
          description: tf("docLangOkMeta", escapeHtml(metaLang))
        });
      } else {
        checks.push({
          status: "fail",
          title: t("docNoLang"),
          description: t("docNoLangDesc"),
          fix: t("fixNoLang")
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
          title: t("hdNone"),
          description: t("hdNoneDesc")
        });
      } else {
        checks.push({
          status: "na",
          title: t("hdNa"),
          description: t("hdNaDesc")
        });
      }
      return checks;
    }

    // Headings present
    checks.push({
      status: "pass",
      title: t("hdPresent"),
      description: tf("hdPresentDesc", plural(headings.length, "hdSg", "hdPl")),
      findings: headings.map(function (h) {
        return {
          page: h.page,
          element: "H" + h.level,
          detail: h.text ? truncate(h.text, 60) : t("noText")
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
          detail: h.text ? truncate(h.text, 60) : t("noText")
        });
      }
      prevLevel = h.level;
    }
    if (skippedFindings.length > 0) {
      checks.push({
        status: "fail",
        title: t("hdSkipped"),
        description: t("hdSkippedDesc"),
        findings: skippedFindings,
        fix: t("fixSkippedHeadings")
      });
    } else {
      checks.push({
        status: "pass",
        title: t("hdOk"),
        description: t("hdOkDesc")
      });
    }

    // Empty headings
    var emptyFindings = [];
    for (var j = 0; j < headings.length; j++) {
      if (!headings[j].hasContent) {
        emptyFindings.push({
          page: headings[j].page,
          element: "H" + headings[j].level,
          detail: t("emptyHdTag")
        });
      }
    }
    if (emptyFindings.length > 0) {
      checks.push({
        status: "fail",
        title: t("hdEmpty"),
        description: tf("hdEmptyDesc", plural(emptyFindings.length, "hdSg", "hdPl")),
        findings: emptyFindings,
        fix: t("fixEmptyHeadings")
      });
    } else {
      checks.push({
        status: "pass",
        title: t("hdNoEmpty"),
        description: t("hdNoEmptyDesc")
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
        title: t("imgNone"),
        description: t("imgNoneDesc")
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
          detail: t("imgNoAltDetail")
        });
      }
    }

    if (withoutAltFindings.length > 0) {
      checks.push({
        status: "fail",
        title: t("imgNoAlt"),
        description: tf("imgNoAltDesc", withoutAltFindings.length, figures.length, withoutAltFindings.length === 1 ? t("imgSg") : t("imgPl")),
        findings: withoutAltFindings,
        fix: t("fixNoAlt")
      });
    }

    if (withAltFindings.length > 0) {
      checks.push({
        status: "pass",
        title: tf("imgAltOk", withAltFindings.length, withAltFindings.length === 1 ? t("imgAltOkSg") : t("imgAltOkPl")),
        description: t("imgAltOkDesc"),
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
        title: t("lstNone"),
        description: t("lstNoneDesc")
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
          detail: t(lst.issueKey)
        });
      } else {
        validCount++;
      }
    }

    if (invalidFindings.length > 0) {
      checks.push({
        status: "fail",
        title: t("lstInvalid"),
        description: tf("lstInvalidDesc", invalidFindings.length, lists.length, invalidFindings.length === 1 ? t("lstSg") : t("lstPl")),
        findings: invalidFindings,
        fix: t("fixListStructure")
      });
    }

    if (validCount > 0) {
      checks.push({
        status: "pass",
        title: tf("lstOk", validCount, validCount === 1 ? t("lstOkSg") : t("lstOkPl")),
        description: t("lstOkDesc")
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
        title: t("tblNone"),
        description: t("tblNoneDesc")
      });
      return checks;
    }

    var noTHFindings = [];
    var okCount = 0;
    for (var i = 0; i < tables.length; i++) {
      var tbl = tables[i];
      var dims = tbl.cols > 0 ? tf("tblRowsCols", tbl.rows, tbl.cols) : tf("tblRows", tbl.rows);
      if (!tbl.hasTH) {
        noTHFindings.push({
          page: tbl.page,
          element: "Table",
          detail: dims + " \u2014 " + t("tblNoTHDetail")
        });
      } else {
        okCount++;
      }
    }

    if (noTHFindings.length > 0) {
      checks.push({
        status: "fail",
        title: t("tblNoTH"),
        description: tf("tblNoTHDesc", noTHFindings.length, tables.length, noTHFindings.length === 1 ? t("tblSg") : t("tblPl")),
        findings: noTHFindings,
        fix: t("fixNoTH")
      });
    }

    if (okCount > 0) {
      checks.push({
        status: "pass",
        title: tf("tblOk", okCount, okCount === 1 ? t("tblOkSg") : t("tblOkPl")),
        description: t("tblOkDesc")
      });
    }

    return checks;
  }

  function checkNavigation(outline, collector) {
    var checks = [];

    if (collector.pagesWithTags === 0 && collector.pagesWithoutTags > 0) {
      checks.push({
        status: "na",
        title: t("navNa"),
        description: t("navNaDesc")
      });
      return checks;
    }

    if (outline && outline.length > 0) {
      var bookmarkFindings = [];
      for (var i = 0; i < Math.min(outline.length, 15); i++) {
        bookmarkFindings.push({
          page: null,
          element: t("navBookmark"),
          detail: truncate(outline[i].title, 60)
        });
      }
      if (outline.length > 15) {
        bookmarkFindings.push({
          page: null,
          element: "",
          detail: tf("navMore", outline.length - 15)
        });
      }
      checks.push({
        status: "pass",
        title: t("navOk"),
        description: tf("navOkDesc", plural(outline.length, "navSg", "navPl")),
        findings: bookmarkFindings
      });
    } else {
      var totalPages = collector.pagesWithTags + collector.pagesWithoutTags;
      if (totalPages > 4) {
        checks.push({
          status: "warn",
          title: t("navNone"),
          description: tf("navNoneDesc", totalPages),
          fix: t("fixNoBookmarks")
        });
      } else {
        checks.push({
          status: "pass",
          title: t("navNotReq"),
          description: tf("navNotReqDesc", plural(totalPages, "navPageSg", "navPagePl"))
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
    summaryHTML += summaryCard("pass", pass, t("sumPass"));
    summaryHTML += summaryCard("fail", fail, t("sumFail"));
    summaryHTML += summaryCard("warn", warn, t("sumWarn"));
    summaryHTML += "</div>";
    resultsSummary.innerHTML = summaryHTML;

    var catHTML = "";
    for (var k = 0; k < allChecks.length; k++) {
      catHTML += renderCategory(allChecks[k]);
    }
    resultsCategories.innerHTML = catHTML;

    var triggers = resultsCategories.querySelectorAll(".tool-pdf__accordion-trigger");
    for (var tt = 0; tt < triggers.length; tt++) {
      triggers[tt].addEventListener("click", toggleAccordion);
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
    html += '<h2 class="tool-pdf__category-title">' + escapeHtml(t(cat.catKey)) + "</h2>";

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

    html += '<p class="tool-pdf__check-desc">' + escapeHtml(check.description) + "</p>";

    if (hasAccordion) {
      html += '<div class="tool-pdf__accordion-panel" id="' + accId + '" hidden>';

      if (check.findings && check.findings.length > 0) {
        html += '<table class="tool-pdf__findings">';
        html += "<thead><tr><th>" + t("thPage") + "</th><th>" + t("thElement") + "</th><th>" + t("thDetail") + "</th></tr></thead><tbody>";
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

      if (check.fix) {
        html += '<div class="tool-pdf__fix">';
        html += '<strong class="tool-pdf__fix-label">' + t("fixLabel") + '</strong>';
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
      case "pass": return t("badgePass");
      case "fail": return t("badgeFail");
      case "warn": return t("badgeWarn");
      default:     return t("badgeNa");
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

    var locale = currentLang === "nl" ? "nl-NL" : "en-US";
    var date = new Date().toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });

    var html = '<!DOCTYPE html>\n<html lang="' + currentLang + '">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    html += "<title>" + t("exportTitle") + " \u2014 " + escapeHtml(fileName) + "</title>\n";
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

    html += "<h1>" + t("exportTitle") + "</h1>\n";
    html += '<p class="meta">' + t("exportFileLbl") + ": <strong>" + escapeHtml(fileName) + "</strong> &mdash; " + date + "</p>\n";

    // Summary
    html += '<div class="summary">\n';
    html += '<div class="summary-card summary-card--pass"><span class="summary-count">' + pass + '</span><span class="summary-label">' + t("sumPass") + '</span></div>\n';
    html += '<div class="summary-card summary-card--fail"><span class="summary-count">' + fail + '</span><span class="summary-label">' + t("sumFail") + '</span></div>\n';
    html += '<div class="summary-card summary-card--warn"><span class="summary-count">' + warn + '</span><span class="summary-label">' + t("sumWarn") + '</span></div>\n';
    html += "</div>\n";

    // Categories
    for (var c = 0; c < allChecks.length; c++) {
      var cat = allChecks[c];
      html += "<h2>" + escapeHtml(t(cat.catKey)) + "</h2>\n";

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

        if (check.findings && check.findings.length > 0) {
          html += "<table><thead><tr><th>" + t("thPage") + "</th><th>" + t("thElement") + "</th><th>" + t("thDetail") + "</th></tr></thead><tbody>\n";
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

        if (check.fix) {
          html += '<div class="fix">';
          html += '<span class="fix-label">' + t("fixLabel") + '</span>';
          html += '<p class="fix-text">' + check.fix + "</p>";
          html += "</div>\n";
        }

        html += "</div>\n";
      }
    }

    html += '<p class="footer">' + t("exportFooter") + '</p>\n';
    html += "</body>\n</html>";

    // Download
    var blob = new Blob([html], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName.replace(/\.pdf$/i, "") + t("exportSuffix");
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

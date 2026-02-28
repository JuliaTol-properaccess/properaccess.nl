/**
 * Foutmeldingen Naslagwerk — Proper Access
 * Searchable reference of form error messages per field type.
 * Three levels: bad (fails 3.3.1), ok (passes 3.3.1), good (passes 3.3.1 + 3.3.3).
 */
(function () {
  "use strict";

  // ============================================================
  // Data
  // ============================================================

  var FIELDS = [
    {
      name: "E-mailadres",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Vul dit veld in", "Verplicht", "Error"],
          ok: ["E-mailadres is niet ingevuld"],
          good: ["E-mailadres is niet ingevuld. Vul je e-mailadres in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Ongeldig formaat",
          bad: ["Ongeldige invoer", "Controleer je gegevens"],
          ok: ["Ongeldig e-mailformaat"],
          good: ["Ongeldig e-mailformaat. Gebruik het formaat naam@voorbeeld.nl."],
          badExplanation: "Zegt niet welk veld fout is en wat er fout aan is.",
          okExplanation: "Beschrijft het veld en de fout, maar geeft geen voorbeeld van het juiste formaat.",
          goodExplanation: "Beschrijft de fout en geeft een concreet voorbeeld van het verwachte formaat."
        }
      ],
      tags: ["email", "e-mail", "mailadres", "mail"]
    },
    {
      name: "Wachtwoord",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Vul dit veld in", "Verplicht"],
          ok: ["Wachtwoord is niet ingevuld"],
          good: ["Wachtwoord is niet ingevuld. Vul je wachtwoord in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Te kort",
          bad: ["Niet sterk genoeg", "Wachtwoord voldoet niet"],
          ok: ["Wachtwoord is te kort"],
          good: ["Wachtwoord is te kort. Het wachtwoord moet minimaal 8 tekens bevatten."],
          badExplanation: "Zegt niet wat er precies fout is aan het wachtwoord.",
          okExplanation: "Beschrijft het probleem, maar zegt niet hoe lang het wachtwoord moet zijn.",
          goodExplanation: "Beschrijft de fout en vermeldt de exacte eis."
        }
      ],
      tags: ["password", "wachtwoord", "inloggen", "login"]
    },
    {
      name: "Telefoonnummer",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Verplicht veld", "Vul dit veld in"],
          ok: ["Telefoonnummer is niet ingevuld"],
          good: ["Telefoonnummer is niet ingevuld. Vul je telefoonnummer in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Ongeldig formaat",
          bad: ["Ongeldige invoer", "Voer een geldig nummer in"],
          ok: ["Ongeldig telefoonnummer"],
          good: ["Ongeldig telefoonnummer. Vul 10 cijfers in, bijvoorbeeld 06 12345678."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar geeft geen voorbeeld van het verwachte formaat.",
          goodExplanation: "Beschrijft de fout en geeft het verwachte formaat met een voorbeeld."
        }
      ],
      tags: ["telefoon", "phone", "mobiel", "nummer", "gsm"]
    },
    {
      name: "Naam",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Verplicht", "Dit veld is verplicht"],
          ok: ["Naam is niet ingevuld"],
          good: ["Naam is niet ingevuld. Vul je voor- en achternaam in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én maakt duidelijk wat er verwacht wordt."
        },
        {
          label: "Ongeldige tekens",
          bad: ["Ongeldige invoer"],
          ok: ["Naam bevat ongeldige tekens"],
          good: ["Naam bevat ongeldige tekens. Gebruik alleen letters, spaties en koppeltekens."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar zegt niet welke tekens wél zijn toegestaan.",
          goodExplanation: "Beschrijft de fout en welke tekens wél zijn toegestaan."
        }
      ],
      tags: ["naam", "voornaam", "achternaam", "name"]
    },
    {
      name: "Postcode",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Vul dit veld in"],
          ok: ["Postcode is niet ingevuld"],
          good: ["Postcode is niet ingevuld. Vul je postcode in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Ongeldig formaat",
          bad: ["Ongeldige invoer"],
          ok: ["Ongeldige postcode"],
          good: ["Ongeldige postcode. Gebruik 4 cijfers en 2 letters, bijvoorbeeld 1234 AB."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar geeft geen voorbeeld van het verwachte formaat.",
          goodExplanation: "Beschrijft de fout en het verwachte formaat met een voorbeeld."
        }
      ],
      tags: ["postcode", "zip", "zipcode", "adres"]
    },
    {
      name: "IBAN / Rekeningnummer",
      category: "tekst",
      categoryLabel: "Tekstveld",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Verplicht veld"],
          ok: ["IBAN is niet ingevuld"],
          good: ["IBAN is niet ingevuld. Vul je IBAN-nummer in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Ongeldig formaat",
          bad: ["Ongeldige invoer"],
          ok: ["Ongeldig IBAN-nummer"],
          good: ["Ongeldig IBAN-nummer. Gebruik het formaat NL91 ABNA 0417 1643 00."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar geeft geen voorbeeld van het verwachte formaat.",
          goodExplanation: "Beschrijft de fout en geeft een voorbeeld van het verwachte formaat."
        }
      ],
      tags: ["iban", "rekening", "rekeningnummer", "bank", "bankrekening"]
    },
    {
      name: "Geboortedatum",
      category: "datum",
      categoryLabel: "Datum",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Vul dit veld in"],
          ok: ["Geboortedatum is niet ingevuld"],
          good: ["Geboortedatum is niet ingevuld. Vul je geboortedatum in."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Ongeldig formaat",
          bad: ["Ongeldige invoer"],
          ok: ["Ongeldige geboortedatum"],
          good: ["Ongeldige geboortedatum. Gebruik het formaat dd-mm-jjjj, bijvoorbeeld 15-03-1990."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar geeft geen voorbeeld van het verwachte formaat.",
          goodExplanation: "Beschrijft de fout en vermeldt het exacte datumformaat met een voorbeeld."
        },
        {
          label: "Datum buiten bereik",
          bad: ["Ongeldige invoer"],
          ok: ["Geboortedatum ligt in de toekomst"],
          good: ["Geboortedatum ligt in de toekomst. Vul een datum in het verleden in."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar zegt niet wat er verwacht wordt.",
          goodExplanation: "Beschrijft de fout en geeft aan wat er verwacht wordt."
        }
      ],
      tags: ["datum", "geboortedatum", "date", "verjaardag", "dob"]
    },
    {
      name: "Datum (algemeen)",
      category: "datum",
      categoryLabel: "Datum",
      validations: [
        {
          label: "Verplicht veld",
          bad: ["Vul dit veld in", "Verplicht"],
          ok: ["Startdatum is niet ingevuld"],
          good: ["Startdatum is niet ingevuld. Kies een startdatum."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout én geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Einddatum voor begindatum",
          bad: ["Ongeldige invoer"],
          ok: ["Einddatum ligt vóór de startdatum"],
          good: ["Einddatum ligt vóór de startdatum. Kies een einddatum na de startdatum."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft de fout, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout en legt uit wat de relatie is tussen de datumvelden."
        }
      ],
      tags: ["datum", "date", "startdatum", "einddatum", "periode"]
    },
    {
      name: "Selectielijst (dropdown)",
      category: "keuze",
      categoryLabel: "Keuze",
      validations: [
        {
          label: "Geen keuze gemaakt",
          bad: ["Verplicht", "Vul dit veld in"],
          ok: ["Geen provincie gekozen"],
          good: ["Geen provincie gekozen. Kies je provincie uit de lijst."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout en geeft aan wat er geselecteerd moet worden."
        }
      ],
      tags: ["dropdown", "select", "selectie", "lijst", "keuzelijst"]
    },
    {
      name: "Checkbox (akkoord / voorwaarden)",
      category: "keuze",
      categoryLabel: "Keuze",
      validations: [
        {
          label: "Niet aangevinkt",
          bad: ["Dit veld is verplicht"],
          ok: ["Algemene voorwaarden niet geaccepteerd"],
          good: ["Algemene voorwaarden niet geaccepteerd. Ga akkoord om door te gaan."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft welk veld en wat de fout is, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout en legt uit wat er nodig is."
        }
      ],
      tags: ["checkbox", "akkoord", "voorwaarden", "terms", "toestemming"]
    },
    {
      name: "Bestandsupload",
      category: "overig",
      categoryLabel: "Overig",
      validations: [
        {
          label: "Geen bestand gekozen",
          bad: ["Verplicht"],
          ok: ["Geen bestand gekozen"],
          good: ["Geen bestand gekozen. Kies een bestand om te uploaden."],
          badExplanation: "Te generiek: de gebruiker weet niet welk veld bedoeld wordt.",
          okExplanation: "Beschrijft de fout, maar geeft geen suggestie voor verbetering.",
          goodExplanation: "Beschrijft de fout en geeft aan wat de verwachte actie is."
        },
        {
          label: "Verkeerd bestandstype",
          bad: ["Ongeldige invoer"],
          ok: ["Bestandstype wordt niet ondersteund"],
          good: ["Bestandstype wordt niet ondersteund. Upload een PDF-, JPG- of PNG-bestand."],
          badExplanation: "Zegt niet wat er fout is.",
          okExplanation: "Beschrijft de fout, maar zegt niet welke bestandstypen wél geldig zijn.",
          goodExplanation: "Beschrijft de fout en somt de toegestane bestandstypen op."
        },
        {
          label: "Bestand te groot",
          bad: ["Ongeldige invoer"],
          ok: ["Bestand is te groot"],
          good: ["Bestand is te groot (12 MB). De maximale grootte is 5 MB."],
          badExplanation: "Zegt niet wat er fout is.",
          okExplanation: "Beschrijft de fout, maar zegt niet hoe groot het bestand mag zijn.",
          goodExplanation: "Beschrijft de fout met de werkelijke grootte en de maximaal toegestane grootte."
        }
      ],
      tags: ["upload", "bestand", "file", "bijlage", "document"]
    },
    {
      name: "Numeriek veld (aantal / bedrag)",
      category: "overig",
      categoryLabel: "Overig",
      validations: [
        {
          label: "Geen getal",
          bad: ["Ongeldige invoer"],
          ok: ["Invoer is geen geldig getal"],
          good: ["Invoer is geen geldig getal. Vul een aantal in, bijvoorbeeld 1, 2 of 3."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft de fout, maar geeft geen voorbeeld van geldige invoer.",
          goodExplanation: "Beschrijft de fout en geeft voorbeelden van geldige invoer."
        },
        {
          label: "Buiten bereik",
          bad: ["Ongeldige invoer"],
          ok: ["Aantal valt buiten het bereik"],
          good: ["Aantal valt buiten het bereik. Vul een waarde in tussen 1 en 100."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft de fout, maar vermeldt niet wat het toegestane bereik is.",
          goodExplanation: "Beschrijft de fout en vermeldt het toegestane bereik."
        }
      ],
      tags: ["nummer", "getal", "aantal", "bedrag", "number", "hoeveelheid"]
    }
  ];

  var CATEGORIES = [
    { id: "tekst", label: "Tekstveld" },
    { id: "keuze", label: "Keuze" },
    { id: "datum", label: "Datum" },
    { id: "overig", label: "Overig" }
  ];

  // ============================================================
  // Init
  // ============================================================

  var searchInput = document.getElementById("foutSearch");
  var filtersContainer = document.getElementById("foutFilters");
  var countEl = document.getElementById("foutCount");
  var resultsEl = document.getElementById("foutResults");

  if (!searchInput || !resultsEl) return;

  var activeCategory = null;

  buildFilters();
  render(FIELDS);

  searchInput.addEventListener("input", applyFilters);

  // ============================================================
  // Filters
  // ============================================================

  function buildFilters() {
    var allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "tool-fout__filter-btn tool-fout__filter-btn--active";
    allBtn.textContent = "Alle";
    allBtn.setAttribute("aria-pressed", "true");
    allBtn.addEventListener("click", function () {
      activeCategory = null;
      updateFilterButtons();
      applyFilters();
    });
    filtersContainer.appendChild(allBtn);

    for (var i = 0; i < CATEGORIES.length; i++) {
      var cat = CATEGORIES[i];
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tool-fout__filter-btn";
      btn.textContent = cat.label;
      btn.setAttribute("aria-pressed", "false");
      btn.dataset.category = cat.id;
      btn.addEventListener("click", handleFilterClick);
      filtersContainer.appendChild(btn);
    }
  }

  function handleFilterClick(e) {
    var cat = e.target.dataset.category;
    activeCategory = activeCategory === cat ? null : cat;
    updateFilterButtons();
    applyFilters();
  }

  function updateFilterButtons() {
    var btns = filtersContainer.querySelectorAll(".tool-fout__filter-btn");
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      var isActive = btn.dataset.category
        ? btn.dataset.category === activeCategory
        : activeCategory === null;
      btn.classList.toggle("tool-fout__filter-btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function applyFilters() {
    var query = searchInput.value.trim().toLowerCase();
    var filtered = [];

    for (var i = 0; i < FIELDS.length; i++) {
      var field = FIELDS[i];

      // Category filter
      if (activeCategory && field.category !== activeCategory) continue;

      // Search filter
      if (query) {
        var haystack = (field.name + " " + field.tags.join(" ")).toLowerCase();
        if (haystack.indexOf(query) === -1) continue;
      }

      filtered.push(field);
    }

    render(filtered);
  }

  // ============================================================
  // Render
  // ============================================================

  function render(fields) {
    countEl.textContent = fields.length === 1
      ? "1 veldtype gevonden"
      : fields.length + " veldtypen gevonden";

    if (fields.length === 0) {
      resultsEl.innerHTML = '<p class="tool-fout__empty">Geen resultaten gevonden. Probeer een andere zoekterm.</p>';
      return;
    }

    var html = "";
    for (var i = 0; i < fields.length; i++) {
      html += renderCard(fields[i]);
    }
    resultsEl.innerHTML = html;
  }

  function renderCard(field) {
    var html = '<div class="tool-fout__card">';
    html += '<div class="tool-fout__card-header">';
    html += '<h2 class="tool-fout__card-title">' + escapeHtml(field.name) + '</h2>';
    html += '<span class="tool-fout__card-cat tool-fout__card-cat--' + field.category + '">' + escapeHtml(field.categoryLabel) + '</span>';
    html += '</div>';

    for (var i = 0; i < field.validations.length; i++) {
      html += renderValidation(field.validations[i]);
    }

    html += '</div>';
    return html;
  }

  function renderValidation(v) {
    var html = '<div class="tool-fout__validation">';
    html += '<h3 class="tool-fout__validation-title">' + escapeHtml(v.label) + '</h3>';

    html += '<div class="tool-fout__examples">';

    // Bad — fails SC 3.3.1
    html += '<div class="tool-fout__example tool-fout__example--bad">';
    html += '<span class="tool-fout__example-label">\u2717 Onvoldoende</span>';
    html += '<span class="tool-fout__example-sc">Voldoet niet aan SC 3.3.1</span>';
    for (var i = 0; i < v.bad.length; i++) {
      html += '<p class="tool-fout__example-text">\u201C' + escapeHtml(v.bad[i]) + '\u201D</p>';
    }
    html += '<p class="tool-fout__example-why">' + escapeHtml(v.badExplanation) + '</p>';
    html += '</div>';

    // OK — passes SC 3.3.1 but not 3.3.3
    html += '<div class="tool-fout__example tool-fout__example--ok">';
    html += '<span class="tool-fout__example-label">\u2014 Voldoende</span>';
    html += '<span class="tool-fout__example-sc">Voldoet aan SC 3.3.1</span>';
    for (var j = 0; j < v.ok.length; j++) {
      html += '<p class="tool-fout__example-text">\u201C' + escapeHtml(v.ok[j]) + '\u201D</p>';
    }
    html += '<p class="tool-fout__example-why">' + escapeHtml(v.okExplanation) + '</p>';
    html += '</div>';

    // Good — passes SC 3.3.1 + 3.3.3
    html += '<div class="tool-fout__example tool-fout__example--good">';
    html += '<span class="tool-fout__example-label">\u2713 Goed</span>';
    html += '<span class="tool-fout__example-sc">Voldoet aan SC 3.3.1 + 3.3.3</span>';
    for (var k = 0; k < v.good.length; k++) {
      html += '<p class="tool-fout__example-text">\u201C' + escapeHtml(v.good[k]) + '\u201D</p>';
    }
    html += '<p class="tool-fout__example-why">' + escapeHtml(v.goodExplanation) + '</p>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    return html;
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
})();

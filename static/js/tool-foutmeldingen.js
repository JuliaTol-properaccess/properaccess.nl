/**
 * Foutmeldingen Naslagwerk — Proper Access
 * Searchable reference of form error messages per field type.
 * Three levels: bad (fails 3.3.1), ok (passes 3.3.1), good (passes 3.3.1 + 3.3.3).
 * Supports NL / EN interface toggle.
 */
(function () {
  "use strict";

  // ============================================================
  // Translations — UI strings
  // ============================================================

  var LANG = {
    nl: {
      toolTitle: "Foutmeldingen naslagwerk",
      intro: "Goede foutmeldingen helpen gebruikers om fouten in formulieren te begrijpen en te herstellen. Dit naslagwerk toont per veldtype voorbeelden van duidelijke foutmeldingen, gebaseerd op <a href=\"/blog/sc-3-3-1-wat-betekent-foutidentificatie/\">SC&nbsp;3.3.1 Foutidentificatie</a> en <a href=\"/blog/sc-3-3-3-wat-betekent-foutsuggestie/\">SC&nbsp;3.3.3 Foutsuggestie</a>.",
      searchLabel: "Zoek op veldtype",
      searchPlaceholder: "Zoek bijv. \"e-mail\", \"wachtwoord\", \"datum\"...",
      filterAriaLabel: "Filter op categorie",
      resultsAriaLabel: "Resultaten",
      filterAll: "Alle",
      countSg: "1 veldtype gevonden",
      countPl: "{0} veldtypen gevonden",
      noResults: "Geen resultaten gevonden. Probeer een andere zoekterm.",
      labelBad: "\u2717 Onvoldoende",
      labelOk: "\u2014 Voldoende",
      labelGood: "\u2713 Goed",
      scBad: "Voldoet niet aan SC 3.3.1",
      scOk: "Voldoet aan SC 3.3.1",
      scGood: "Voldoet aan SC 3.3.1 + 3.3.3",
      principlesTitle: "De regels volgens WCAG",
      principle331dt: "<strong>SC 3.3.1</strong> Foutidentificatie <span class=\"tool-fout__level\">Niveau A</span>",
      principle331dd: "Als er een invoerfout wordt ontdekt, wordt het onderdeel met de fout aan de gebruiker getoond en wordt de fout in tekst beschreven.",
      principle333dt: "<strong>SC 3.3.3</strong> Foutsuggestie <span class=\"tool-fout__level\">Niveau AA</span>",
      principle333dd: "Als er een invoerfout wordt ontdekt en suggesties voor verbetering bekend zijn, worden deze aan de gebruiker getoond \u2014 tenzij dit de beveiliging of het doel van de inhoud in gevaar brengt.",
      ctaLine1: "Wil je weten of de foutmeldingen op jouw website voldoen aan de WCAG-richtlijnen?",
      ctaLine2: "<a href=\"/contact/\">Vraag een audit aan</a> of bel <a href=\"tel:+31855055890\">085&nbsp;5055&nbsp;890</a>.",
      langLabel: "Switch to English"
    },
    en: {
      toolTitle: "Error messages reference",
      intro: "Good error messages help users understand and fix form errors. This reference shows examples of clear error messages per field type, based on <a href=\"/blog/sc-3-3-1-wat-betekent-foutidentificatie/\">SC&nbsp;3.3.1 Error Identification</a> and <a href=\"/blog/sc-3-3-3-wat-betekent-foutsuggestie/\">SC&nbsp;3.3.3 Error Suggestion</a>.",
      searchLabel: "Search by field type",
      searchPlaceholder: "Search e.g. \"email\", \"password\", \"date\"...",
      filterAriaLabel: "Filter by category",
      resultsAriaLabel: "Results",
      filterAll: "All",
      countSg: "1 field type found",
      countPl: "{0} field types found",
      noResults: "No results found. Try a different search term.",
      labelBad: "\u2717 Insufficient",
      labelOk: "\u2014 Adequate",
      labelGood: "\u2713 Good",
      scBad: "Does not meet SC 3.3.1",
      scOk: "Meets SC 3.3.1",
      scGood: "Meets SC 3.3.1 + 3.3.3",
      principlesTitle: "The rules according to WCAG",
      principle331dt: "<strong>SC 3.3.1</strong> Error Identification <span class=\"tool-fout__level\">Level A</span>",
      principle331dd: "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
      principle333dt: "<strong>SC 3.3.3</strong> Error Suggestion <span class=\"tool-fout__level\">Level AA</span>",
      principle333dd: "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user \u2014 unless it would jeopardize the security or purpose of the content.",
      ctaLine1: "Want to know if the error messages on your website comply with WCAG guidelines?",
      ctaLine2: "<a href=\"/contact/\">Request an audit</a> or call <a href=\"tel:+31855055890\">085&nbsp;5055&nbsp;890</a>.",
      langLabel: "Schakel naar Nederlands"
    }
  };

  // ============================================================
  // Data — NL
  // ============================================================

  var FIELDS_NL = [
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n maakt duidelijk wat er verwacht wordt."
        },
        {
          label: "Ongeldige tekens",
          bad: ["Ongeldige invoer"],
          ok: ["Naam bevat ongeldige tekens"],
          good: ["Naam bevat ongeldige tekens. Gebruik alleen letters, spaties en koppeltekens."],
          badExplanation: "Zegt niet welk veld en wat er fout is.",
          okExplanation: "Beschrijft het veld en de fout, maar zegt niet welke tekens w\u00e9l zijn toegestaan.",
          goodExplanation: "Beschrijft de fout en welke tekens w\u00e9l zijn toegestaan."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
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
          goodExplanation: "Beschrijft de fout \u00e9n geeft een suggestie hoe het op te lossen."
        },
        {
          label: "Einddatum voor begindatum",
          bad: ["Ongeldige invoer"],
          ok: ["Einddatum ligt v\u00f3\u00f3r de startdatum"],
          good: ["Einddatum ligt v\u00f3\u00f3r de startdatum. Kies een einddatum na de startdatum."],
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
          okExplanation: "Beschrijft de fout, maar zegt niet welke bestandstypen w\u00e9l geldig zijn.",
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

  var CATEGORIES_NL = [
    { id: "tekst", label: "Tekstveld" },
    { id: "keuze", label: "Keuze" },
    { id: "datum", label: "Datum" },
    { id: "overig", label: "Overig" }
  ];

  // ============================================================
  // Data — EN
  // ============================================================

  var FIELDS_EN = [
    {
      name: "Email address",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Fill in this field", "Required", "Error"],
          ok: ["Email address is not filled in"],
          good: ["Email address is not filled in. Enter your email address."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Invalid format",
          bad: ["Invalid input", "Check your details"],
          ok: ["Invalid email format"],
          good: ["Invalid email format. Use the format name@example.com."],
          badExplanation: "Doesn\u2019t say which field is wrong or what\u2019s wrong with it.",
          okExplanation: "Describes the field and the error, but doesn\u2019t give an example of the correct format.",
          goodExplanation: "Describes the error and gives a concrete example of the expected format."
        }
      ],
      tags: ["email", "e-mail", "mail", "address"]
    },
    {
      name: "Password",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Fill in this field", "Required"],
          ok: ["Password is not filled in"],
          good: ["Password is not filled in. Enter your password."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Too short",
          bad: ["Not strong enough", "Password doesn\u2019t meet requirements"],
          ok: ["Password is too short"],
          good: ["Password is too short. The password must be at least 8 characters."],
          badExplanation: "Doesn\u2019t say what exactly is wrong with the password.",
          okExplanation: "Describes the problem, but doesn\u2019t say how long the password should be.",
          goodExplanation: "Describes the error and states the exact requirement."
        }
      ],
      tags: ["password", "login", "sign in"]
    },
    {
      name: "Phone number",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Required field", "Fill in this field"],
          ok: ["Phone number is not filled in"],
          good: ["Phone number is not filled in. Enter your phone number."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Invalid format",
          bad: ["Invalid input", "Enter a valid number"],
          ok: ["Invalid phone number"],
          good: ["Invalid phone number. Enter 10 digits, for example 06 12345678."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t give an example of the expected format.",
          goodExplanation: "Describes the error and gives the expected format with an example."
        }
      ],
      tags: ["phone", "telephone", "mobile", "number", "cell"]
    },
    {
      name: "Name",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Required", "This field is required"],
          ok: ["Name is not filled in"],
          good: ["Name is not filled in. Enter your first and last name."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and makes clear what is expected."
        },
        {
          label: "Invalid characters",
          bad: ["Invalid input"],
          ok: ["Name contains invalid characters"],
          good: ["Name contains invalid characters. Use only letters, spaces and hyphens."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t say which characters are allowed.",
          goodExplanation: "Describes the error and which characters are allowed."
        }
      ],
      tags: ["name", "first name", "last name", "surname"]
    },
    {
      name: "Postal code",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Fill in this field"],
          ok: ["Postal code is not filled in"],
          good: ["Postal code is not filled in. Enter your postal code."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Invalid format",
          bad: ["Invalid input"],
          ok: ["Invalid postal code"],
          good: ["Invalid postal code. Use 4 digits and 2 letters, for example 1234 AB."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t give an example of the expected format.",
          goodExplanation: "Describes the error and the expected format with an example."
        }
      ],
      tags: ["postal code", "zip", "zipcode", "address", "postcode"]
    },
    {
      name: "IBAN / Account number",
      category: "tekst",
      categoryLabel: "Text field",
      validations: [
        {
          label: "Required field",
          bad: ["Required field"],
          ok: ["IBAN is not filled in"],
          good: ["IBAN is not filled in. Enter your IBAN number."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Invalid format",
          bad: ["Invalid input"],
          ok: ["Invalid IBAN number"],
          good: ["Invalid IBAN number. Use the format NL91 ABNA 0417 1643 00."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t give an example of the expected format.",
          goodExplanation: "Describes the error and gives an example of the expected format."
        }
      ],
      tags: ["iban", "account", "account number", "bank"]
    },
    {
      name: "Date of birth",
      category: "datum",
      categoryLabel: "Date",
      validations: [
        {
          label: "Required field",
          bad: ["Fill in this field"],
          ok: ["Date of birth is not filled in"],
          good: ["Date of birth is not filled in. Enter your date of birth."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "Invalid format",
          bad: ["Invalid input"],
          ok: ["Invalid date of birth"],
          good: ["Invalid date of birth. Use the format dd-mm-yyyy, for example 15-03-1990."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t give an example of the expected format.",
          goodExplanation: "Describes the error and states the exact date format with an example."
        },
        {
          label: "Date out of range",
          bad: ["Invalid input"],
          ok: ["Date of birth is in the future"],
          good: ["Date of birth is in the future. Enter a date in the past."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the field and the error, but doesn\u2019t say what is expected.",
          goodExplanation: "Describes the error and indicates what is expected."
        }
      ],
      tags: ["date", "birth", "birthday", "dob", "date of birth"]
    },
    {
      name: "Date (general)",
      category: "datum",
      categoryLabel: "Date",
      validations: [
        {
          label: "Required field",
          bad: ["Fill in this field", "Required"],
          ok: ["Start date is not filled in"],
          good: ["Start date is not filled in. Choose a start date."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and gives a suggestion on how to fix it."
        },
        {
          label: "End date before start date",
          bad: ["Invalid input"],
          ok: ["End date is before the start date"],
          good: ["End date is before the start date. Choose an end date after the start date."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the error, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and explains the relationship between the date fields."
        }
      ],
      tags: ["date", "start date", "end date", "period"]
    },
    {
      name: "Select list (dropdown)",
      category: "keuze",
      categoryLabel: "Selection",
      validations: [
        {
          label: "No selection made",
          bad: ["Required", "Fill in this field"],
          ok: ["No province selected"],
          good: ["No province selected. Choose your province from the list."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and indicates what needs to be selected."
        }
      ],
      tags: ["dropdown", "select", "selection", "list", "menu"]
    },
    {
      name: "Checkbox (agreement / terms)",
      category: "keuze",
      categoryLabel: "Selection",
      validations: [
        {
          label: "Not checked",
          bad: ["This field is required"],
          ok: ["Terms and conditions not accepted"],
          good: ["Terms and conditions not accepted. Agree to continue."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes which field and what the error is, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and explains what is needed."
        }
      ],
      tags: ["checkbox", "agree", "terms", "conditions", "consent"]
    },
    {
      name: "File upload",
      category: "overig",
      categoryLabel: "Other",
      validations: [
        {
          label: "No file chosen",
          bad: ["Required"],
          ok: ["No file chosen"],
          good: ["No file chosen. Choose a file to upload."],
          badExplanation: "Too generic: the user doesn\u2019t know which field is meant.",
          okExplanation: "Describes the error, but gives no suggestion for improvement.",
          goodExplanation: "Describes the error and indicates the expected action."
        },
        {
          label: "Wrong file type",
          bad: ["Invalid input"],
          ok: ["File type is not supported"],
          good: ["File type is not supported. Upload a PDF, JPG or PNG file."],
          badExplanation: "Doesn\u2019t say what\u2019s wrong.",
          okExplanation: "Describes the error, but doesn\u2019t say which file types are valid.",
          goodExplanation: "Describes the error and lists the allowed file types."
        },
        {
          label: "File too large",
          bad: ["Invalid input"],
          ok: ["File is too large"],
          good: ["File is too large (12 MB). The maximum size is 5 MB."],
          badExplanation: "Doesn\u2019t say what\u2019s wrong.",
          okExplanation: "Describes the error, but doesn\u2019t say what the maximum file size is.",
          goodExplanation: "Describes the error with the actual size and the maximum allowed size."
        }
      ],
      tags: ["upload", "file", "attachment", "document"]
    },
    {
      name: "Numeric field (quantity / amount)",
      category: "overig",
      categoryLabel: "Other",
      validations: [
        {
          label: "Not a number",
          bad: ["Invalid input"],
          ok: ["Input is not a valid number"],
          good: ["Input is not a valid number. Enter a quantity, for example 1, 2 or 3."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the error, but doesn\u2019t give an example of valid input.",
          goodExplanation: "Describes the error and gives examples of valid input."
        },
        {
          label: "Out of range",
          bad: ["Invalid input"],
          ok: ["Quantity is out of range"],
          good: ["Quantity is out of range. Enter a value between 1 and 100."],
          badExplanation: "Doesn\u2019t say which field and what\u2019s wrong.",
          okExplanation: "Describes the error, but doesn\u2019t state the allowed range.",
          goodExplanation: "Describes the error and states the allowed range."
        }
      ],
      tags: ["number", "quantity", "amount", "numeric", "value"]
    }
  ];

  var CATEGORIES_EN = [
    { id: "tekst", label: "Text field" },
    { id: "keuze", label: "Selection" },
    { id: "datum", label: "Date" },
    { id: "overig", label: "Other" }
  ];

  // ============================================================
  // i18n helpers
  // ============================================================

  var currentLang = (window.__paToolLang === "en") ? "en" : "nl";
  try { var stored = localStorage.getItem("pa-tool-lang"); if (stored && !window.__paToolLang) currentLang = stored; } catch (e) { /* private browsing */ }

  function t(key) {
    return (LANG[currentLang] && LANG[currentLang][key]) || LANG.nl[key] || key;
  }

  function tf(key) {
    var s = t(key);
    var args = arguments;
    return s.replace(/\{(\d+)\}/g, function (m, i) {
      var idx = parseInt(i, 10) + 1;
      return idx < args.length ? args[idx] : m;
    });
  }

  function getFields() {
    return currentLang === "en" ? FIELDS_EN : FIELDS_NL;
  }

  function getCategories() {
    return currentLang === "en" ? CATEGORIES_EN : CATEGORIES_NL;
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
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    for (var l = 0; l < ariaEls.length; l++) {
      ariaEls[l].setAttribute("aria-label", t(ariaEls[l].getAttribute("data-i18n-aria")));
    }
    // Set lang attribute on tool container for screen readers
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
    rebuildFilters();
    applyFilters();
  }

  // ============================================================
  // DOM refs & init
  // ============================================================

  var searchInput = document.getElementById("foutSearch");
  var filtersContainer = document.getElementById("foutFilters");
  var countEl = document.getElementById("foutCount");
  var resultsEl = document.getElementById("foutResults");
  var langToggle = document.getElementById("langToggle");

  if (!searchInput || !resultsEl) return;

  var activeCategory = null;

  // Apply stored language on load
  if (currentLang !== "nl") {
    translateDOM();
    updateLangToggle();
  }

  buildFilters();
  render(getFields());

  searchInput.addEventListener("input", applyFilters);

  // Language toggle
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      setLang(currentLang === "nl" ? "en" : "nl");
    });
  }

  // ============================================================
  // Filters
  // ============================================================

  function buildFilters() {
    filtersContainer.innerHTML = "";

    var allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "tool-fout__filter-btn" + (activeCategory === null ? " tool-fout__filter-btn--active" : "");
    allBtn.textContent = t("filterAll");
    allBtn.setAttribute("aria-pressed", activeCategory === null ? "true" : "false");
    allBtn.addEventListener("click", function () {
      activeCategory = null;
      updateFilterButtons();
      applyFilters();
    });
    filtersContainer.appendChild(allBtn);

    var cats = getCategories();
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tool-fout__filter-btn" + (activeCategory === cat.id ? " tool-fout__filter-btn--active" : "");
      btn.textContent = cat.label;
      btn.setAttribute("aria-pressed", activeCategory === cat.id ? "true" : "false");
      btn.dataset.category = cat.id;
      btn.addEventListener("click", handleFilterClick);
      filtersContainer.appendChild(btn);
    }
  }

  function rebuildFilters() {
    buildFilters();
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
    var fields = getFields();
    var filtered = [];

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];

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
      ? t("countSg")
      : tf("countPl", fields.length);

    if (fields.length === 0) {
      resultsEl.innerHTML = '<p class="tool-fout__empty">' + escapeHtml(t("noResults")) + '</p>';
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

    // Bad
    html += '<div class="tool-fout__example tool-fout__example--bad">';
    html += '<span class="tool-fout__example-label">' + t("labelBad") + '</span>';
    html += '<span class="tool-fout__example-sc">' + t("scBad") + '</span>';
    for (var i = 0; i < v.bad.length; i++) {
      html += '<p class="tool-fout__example-text">\u201C' + escapeHtml(v.bad[i]) + '\u201D</p>';
    }
    html += '<p class="tool-fout__example-why">' + escapeHtml(v.badExplanation) + '</p>';
    html += '</div>';

    // OK
    html += '<div class="tool-fout__example tool-fout__example--ok">';
    html += '<span class="tool-fout__example-label">' + t("labelOk") + '</span>';
    html += '<span class="tool-fout__example-sc">' + t("scOk") + '</span>';
    for (var j = 0; j < v.ok.length; j++) {
      html += '<p class="tool-fout__example-text">\u201C' + escapeHtml(v.ok[j]) + '\u201D</p>';
    }
    html += '<p class="tool-fout__example-why">' + escapeHtml(v.okExplanation) + '</p>';
    html += '</div>';

    // Good
    html += '<div class="tool-fout__example tool-fout__example--good">';
    html += '<span class="tool-fout__example-label">' + t("labelGood") + '</span>';
    html += '<span class="tool-fout__example-sc">' + t("scGood") + '</span>';
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

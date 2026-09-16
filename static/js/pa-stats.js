/*
 * pa-stats.js, het meetscript van Proper Website.
 *
 * DIT BESTAND IS EEN KOPIE. Het origineel staat in de portaalrepo, in
 * deploy/plausible/pa-stats.js, naast de code die de cijfers weer ophaalt.
 * Wijzig het daar en kopieer het hierheen, anders meet de ene kant iets anders
 * dan de andere kant leest.
 *
 * Zolang de eigen Plausible-server er niet is, wijst data-api-bron naar
 * Plausible Cloud. Dat werkt: het cloud-script leest de customProperties die dit
 * bestand instelt. Zie docs/PLAN-WEBSTATISTIEKEN.md in de portaalrepo.
 */
/*
 * Het script dat op de website van een klant komt te staan.
 *
 * Drie dingen in één bestand:
 *
 * 1. De gewone Plausible-teller, die het paginabezoek meldt.
 * 2. Hoe de bezoeker de pagina bekijkt: zoom, tekstgrootte en de voorkeuren die
 *    de browser toch al prijsgeeft. Dit gaat mee als eigenschap van de
 *    paginaweergave zelf.
 * 3. Wat de bezoeker doet: navigeren met het toetsenbord, een formulier
 *    afbreken, hoe ver hij scrolt en welke elementen hij gebruikt.
 *
 * Zie docs/PLAN-WEBSTATISTIEKEN.md voor het waarom en voor wat er bewust niet in
 * zit.
 *
 * WAAROM DEEL 2 GEEN EIGEN GEBEURTENIS IS
 *
 * Het abonnement van Plausible rekent met paginaweergaven plus custom events bij
 * elkaar. Eén extra gebeurtenis per weergave verdubbelt dus het verbruik en
 * daarmee mogelijk de prijs. Wat bij het laden al bekend is, hangen we daarom aan
 * de paginaweergave via `plausible.init({customProperties})`, en dat kost niets.
 *
 * Wat pas later bekend is, kan dat niet. Toetsenbordgebruik en een afgebroken
 * formulier zijn zeldzaam en kosten dus weinig. Scrolldiepte en interacties
 * gebeuren bij elke weergave, en die staan daarom onder een steekproef:
 * `data-gedrag-steekproef="25"` stuurt een kwart. De verhouding tussen elementen
 * blijft dan kloppen; het absolute aantal schaal je terug.
 *
 * WAT HIER NOOIT IN KOMT
 *
 * - Geen detectie van schermlezers. Dat kan niet betrouwbaar, en het zou een
 *   gegeven over iemands gezondheid zijn.
 * - Geen muisbewegingen en geen schermopnames. Zie het plan: muisdynamiek is
 *   materiaal waarmee mensen te herkennen zijn, en een opname legt vast wat er op
 *   het scherm stond.
 * - Geen cookies, geen localStorage, geen identificatie die twee bezoeken aan
 *   elkaar knoopt.
 * - Geen tekst die de bezoeker zelf heeft ingevuld. Bij een formulier gaat alleen
 *   de naam van het formulier mee, en bij een element alleen het label dat er voor
 *   iedereen op staat.
 *
 * ALLES IN EEN TRY/CATCH
 *
 * Dit draait op de website van een klant. Een fout hier mag die website nooit
 * raken. Elk deel vangt zijn eigen fouten af en zwijgt als er iets niet lukt.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * De aanroep van Plausible
   * ------------------------------------------------------------------ */

  // De queue-shim. Hierdoor kun je plausible() en plausible.init() aanroepen
  // voordat het script van de server geladen is; de aanroepen worden bewaard en
  // later afgespeeld. Dit is dezelfde vorm die op properaccess.nl staat.
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
  window.plausible.init =
    window.plausible.init ||
    function (opties) {
      window.plausible.o = opties || {};
    };

  var script = document.currentScript;

  function attr(naam, standaard) {
    try {
      return (script && script.getAttribute(naam)) || standaard;
    } catch (e) {
      return standaard;
    }
  }

  var domein = attr("data-domain", location.hostname);
  var bron = attr("data-api-bron", "");
  var steekproef = parseInt(attr("data-gedrag-steekproef", "100"), 10);
  if (!isFinite(steekproef) || steekproef < 0) steekproef = 100;
  if (steekproef > 100) steekproef = 100;

  // Hoogstens zoveel interacties per paginaweergave. Zonder grens zou iemand die
  // in een tabel zit te klikken het beeld bepalen, en het verbruik.
  var MAX_INTERACTIES = 5;

  function stuur(naam, eigenschappen) {
    try {
      window.plausible(naam, eigenschappen ? { props: eigenschappen } : undefined);
    } catch (e) {
      /* Meten is nooit belangrijker dan de website zelf. */
    }
  }

  function inSteekproef() {
    return steekproef >= 100 || Math.random() * 100 < steekproef;
  }

  /* ------------------------------------------------------------------
   * Deel 2: hoe bekijkt deze bezoeker de pagina
   * ------------------------------------------------------------------ */

  // Waarden worden in stappen ingedeeld en niet als exact getal doorgegeven. Een
  // zoomniveau van 237% zegt niets meer dan "meer dan 200%", en hoe fijner de
  // indeling, hoe unieker de combinatie van eigenschappen wordt. Grove stappen
  // houden de meting bruikbaar en de bezoeker onherkenbaar.
  function zoomstap() {
    var schaal = 1;
    if (window.visualViewport && window.visualViewport.scale) {
      schaal = window.visualViewport.scale;
    } else if (window.outerWidth && window.innerWidth) {
      schaal = window.outerWidth / window.innerWidth;
    }
    var procent = Math.round(schaal * 100);
    if (!isFinite(procent) || procent <= 0) return "onbekend";
    if (procent < 110) return "100%";
    if (procent < 150) return "tot 150%";
    if (procent < 200) return "tot 200%";
    if (procent < 320) return "200% of meer";
    return "meer dan 300%";
  }

  // De standaardlettergrootte van de browser. Iemand die die op 24px zet, leest
  // liever grotere letters, en een website die in px vastzet negeert dat.
  function tekststap() {
    try {
      var proef = document.createElement("div");
      proef.style.cssText =
        "font-size:1rem;position:absolute;visibility:hidden;height:0;width:0;";
      (document.body || document.documentElement).appendChild(proef);
      var px = parseFloat(window.getComputedStyle(proef).fontSize);
      proef.parentNode.removeChild(proef);
      if (!isFinite(px) || px <= 0) return "onbekend";
      if (px < 15) return "kleiner dan standaard";
      if (px < 17) return "standaard";
      if (px < 21) return "groter";
      return "veel groter";
    } catch (e) {
      return "onbekend";
    }
  }

  function voorkeur(vraag, waarde) {
    try {
      if (!window.matchMedia) return "onbekend";
      return window.matchMedia("(" + vraag + ":" + waarde + ")").matches ? "ja" : "nee";
    } catch (e) {
      return "onbekend";
    }
  }

  function weergaveEigenschappen() {
    try {
      return {
        zoom: zoomstap(),
        tekstgrootte: tekststap(),
        minder_beweging: voorkeur("prefers-reduced-motion", "reduce"),
        meer_contrast: voorkeur("prefers-contrast", "more"),
        eigen_kleuren: voorkeur("forced-colors", "active"),
        donkere_modus: voorkeur("prefers-color-scheme", "dark"),
      };
    } catch (e) {
      return {};
    }
  }

  // Deze gaan mee met de paginaweergave zelf, dus zonder extra gebeurtenis.
  try {
    window.plausible.init({
      customProperties: function (naam) {
        return naam === "pageview" ? weergaveEigenschappen() : {};
      },
    });
  } catch (e) {
    /* stil */
  }

  /* ------------------------------------------------------------------
   * Deel 1: de teller laden
   * ------------------------------------------------------------------ */
  try {
    if (bron) {
      var teller = document.createElement("script");
      teller.defer = true;
      teller.src = bron;
      teller.setAttribute("data-domain", domein);
      document.head.appendChild(teller);
    }
  } catch (e) {
    /* De teller laadt niet. De pagina van de klant merkt er niets van. */
  }

  /* ------------------------------------------------------------------
   * Deel 3: wat de bezoeker doet
   * ------------------------------------------------------------------ */

  // Toetsenbordgebruik: hoogstens één keer per paginaweergave, en alleen als
  // iemand met Tab navigeert voordat hij de muis gebruikt. Dat onderscheidt
  // navigeren van het invullen van een veld, want typen in een formulier zegt
  // hier niets.
  function volgToetsenbord() {
    var gemeld = false;
    var muisGebruikt = false;

    function opruimen() {
      document.removeEventListener("keydown", opToets, true);
      document.removeEventListener("mousedown", opMuis, true);
    }

    function opMuis() {
      muisGebruikt = true;
      opruimen();
    }

    function opToets(gebeurtenis) {
      if (gemeld || muisGebruikt || gebeurtenis.key !== "Tab") return;
      gemeld = true;
      stuur("Toetsenbordnavigatie");
      opruimen();
    }

    document.addEventListener("keydown", opToets, true);
    document.addEventListener("mousedown", opMuis, true);
  }

  // Het label dat voor iedereen op een element staat. Nooit iets wat de bezoeker
  // zelf heeft ingevuld: `value` telt alleen mee bij een knop, want daar is het
  // het opschrift, en bij een tekstveld zou het zijn antwoord zijn.
  function naamVan(el) {
    var naam = el.getAttribute("aria-label") || "";
    if (!naam) {
      var ref = (el.getAttribute("aria-labelledby") || "").split(" ")[0];
      if (ref) {
        var doel = document.getElementById(ref);
        if (doel) naam = doel.textContent || "";
      }
    }
    if (!naam && el.tagName === "IMG") naam = el.getAttribute("alt") || "";
    if (!naam) naam = el.textContent || "";
    if (!naam && el.tagName === "INPUT") {
      var soort = (el.getAttribute("type") || "").toLowerCase();
      if (soort === "submit" || soort === "button" || soort === "reset") {
        naam = el.getAttribute("value") || "";
      }
    }
    if (!naam) naam = el.getAttribute("title") || "";
    naam = String(naam).replace(/\s+/g, " ").trim();
    return naam.slice(0, 60);
  }

  function rolVan(el) {
    var rol = (el.getAttribute("role") || "").toLowerCase();
    if (rol) return rol;
    var tag = el.tagName.toLowerCase();
    if (tag === "a") return el.hasAttribute("href") ? "link" : "element";
    if (tag === "button") return "knop";
    if (tag === "select") return "keuzelijst";
    if (tag === "summary") return "uitklapper";
    if (tag === "input") {
      var soort = (el.getAttribute("type") || "text").toLowerCase();
      if (soort === "submit" || soort === "button" || soort === "reset") return "knop";
      if (soort === "checkbox") return "aanvinkvakje";
      if (soort === "radio") return "keuzerondje";
      return "invoerveld";
    }
    return tag;
  }

  function interactiefElement(doel) {
    var el = doel;
    for (var stap = 0; el && stap < 5; stap++) {
      if (el.nodeType === 1) {
        var tag = el.tagName.toLowerCase();
        if (
          tag === "a" ||
          tag === "button" ||
          tag === "input" ||
          tag === "select" ||
          tag === "summary" ||
          el.hasAttribute("role")
        ) {
          return el;
        }
      }
      el = el.parentNode;
    }
    return null;
  }

  // Welke elementen worden gebruikt. Dit is de telling waarmee een bevinding een
  // volgorde krijgt: een fout op een knop die duizenden keren per maand wordt
  // gebruikt, gaat voor dezelfde fout op een knop die niemand aanraakt. De
  // sleutel is de rol en het label, dus de taal waarin onze rapporten al
  // schrijven, en niet een coördinaat op het scherm.
  function volgInteracties() {
    var geteld = 0;
    document.addEventListener(
      "click",
      function (gebeurtenis) {
        try {
          if (geteld >= MAX_INTERACTIES) return;
          var el = interactiefElement(gebeurtenis.target);
          if (!el) return;
          geteld++;
          if (!inSteekproef()) return;
          var naam = naamVan(el);
          stuur("Interactie", {
            element: rolVan(el) + ": " + (naam || "(geen naam)"),
            heeft_naam: naam ? "ja" : "nee",
          });
        } catch (e) {
          /* stil */
        }
      },
      true
    );
  }

  // Hoe ver komt de bezoeker op de pagina. In stappen, en één keer bij het
  // verlaten: tussentijds meten zou een gebeurtenis per schermhoogte opleveren.
  function volgScrollen() {
    var diepste = 0;

    function meet() {
      try {
        var hoogte = Math.max(
          document.body ? document.body.scrollHeight : 0,
          document.documentElement ? document.documentElement.scrollHeight : 0
        );
        var zichtbaar = window.innerHeight || 0;
        var teScrollen = hoogte - zichtbaar;
        if (teScrollen <= 0) return 100;
        var gezien = ((window.scrollY || 0) + zichtbaar) / hoogte;
        return Math.min(100, Math.round(gezien * 100));
      } catch (e) {
        return 0;
      }
    }

    function stap(procent) {
      if (procent >= 90) return "tot het einde";
      if (procent >= 75) return "driekwart";
      if (procent >= 50) return "de helft";
      if (procent >= 25) return "een kwart";
      return "alleen de bovenkant";
    }

    window.addEventListener(
      "scroll",
      function () {
        var nu = meet();
        if (nu > diepste) diepste = nu;
      },
      { passive: true }
    );

    return function () {
      var nu = meet();
      if (nu > diepste) diepste = nu;
      if (!inSteekproef()) return;
      stuur("Scrolldiepte", { diepte: stap(diepste) });
    };
  }

  // Een formulier waarin iemand begon en dat niet is verstuurd. Daar wordt een
  // toegankelijkheidsprobleem in een formulier zichtbaar. Alleen de naam of het
  // id van het formulier gaat mee, nooit de inhoud van een veld.
  function volgFormulieren() {
    var begonnen = {};
    var verstuurd = {};

    function formulierNaam(formulier) {
      if (!formulier) return "";
      var naam =
        formulier.getAttribute("name") ||
        formulier.getAttribute("id") ||
        formulier.getAttribute("aria-label") ||
        "";
      return String(naam).slice(0, 60);
    }

    document.addEventListener(
      "focusin",
      function (gebeurtenis) {
        try {
          var veld = gebeurtenis.target;
          if (!veld || !veld.form) return;
          var naam = formulierNaam(veld.form);
          if (naam) begonnen[naam] = true;
        } catch (e) {
          /* stil */
        }
      },
      true
    );

    document.addEventListener(
      "submit",
      function (gebeurtenis) {
        try {
          var naam = formulierNaam(gebeurtenis.target);
          if (naam) verstuurd[naam] = true;
        } catch (e) {
          /* stil */
        }
      },
      true
    );

    return function () {
      try {
        for (var naam in begonnen) {
          if (!Object.prototype.hasOwnProperty.call(begonnen, naam)) continue;
          if (verstuurd[naam]) continue;
          delete begonnen[naam];
          stuur("Formulier afgebroken", { formulier: naam });
        }
      } catch (e) {
        /* stil */
      }
    };
  }

  function start() {
    volgToetsenbord();
    volgInteracties();
    var scrollAfronden = volgScrollen();
    var formulierenAfronden = volgFormulieren();

    // Bij het verlaten van de pagina. `visibilitychange` en niet `unload`: dat
    // laatste werkt op mobiel vaak niet en blokkeert het terugbladeren.
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "hidden") return;
      scrollAfronden();
      formulierenAfronden();
    });
  }

  try {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start);
    } else {
      start();
    }
  } catch (e) {
    /* stil */
  }
})();

/**
 * Academy voortgang - Proper Access
 *
 * Bewaart in localStorage welke lessen de cursist heeft afgerond, welke les hij
 * het laatst bezocht en hoe de quizzen zijn gegaan. Er is geen account en geen
 * server: de site is statisch, dus alles blijft op het apparaat van de cursist.
 *
 * Dit bestand levert ook de opslag voor academy-quiz.js, via
 * window.academyVoortgang. Laad het daarom vóór academy-quiz.js.
 *
 * Vorm van de opslag (sleutel pa-academy-voortgang):
 *
 *   {
 *     versie: 1,
 *     lessen: { "/academy/sectie/les/": { bezocht: "2026-10-05",
 *                                         af: true, afOp: "2026-10-05" } },
 *     quizzen: { "/academy/sectie/les/#quiz-les": { antwoorden: { "1": "b" },
 *                                                   goed: 4, totaal: 5,
 *                                                   af: true, datum: "2026-10-05" } },
 *     dagen: ["2026-10-04", "2026-10-05"],
 *     laatste: { pad: "/academy/sectie/les/", titel: "Koppen", datum: "2026-10-05" }
 *   }
 *
 * De dagen zijn er voor de reeks ("streak") op de overzichtspagina. Ze gaan per
 * dag maar één keer in de lijst en de lijst blijft bij de laatste 400 dagen.
 */
(function () {
  "use strict";

  var SLEUTEL = "pa-academy-voortgang";
  var MAX_DAGEN = 400;

  var MAANDEN = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];

  /* --- Opslag ---------------------------------------------------------- */

  // localStorage kan ontbreken of weigeren (privémodus, blokkade in de
  // browser). Dan werkt de Academy gewoon door, alleen zonder voortgang.
  var opslag = (function () {
    try {
      var proef = "pa-academy-proef";
      window.localStorage.setItem(proef, "1");
      window.localStorage.removeItem(proef);
      return window.localStorage;
    } catch (e) {
      return null;
    }
  })();

  function leeg() {
    return { versie: 1, lessen: {}, quizzen: {}, dagen: [], laatste: null };
  }

  function lees() {
    var data = leeg();
    if (!opslag) return data;

    var ruw = null;
    try {
      ruw = opslag.getItem(SLEUTEL);
    } catch (e) {
      return data;
    }
    if (!ruw) return data;

    var gelezen;
    try {
      gelezen = JSON.parse(ruw);
    } catch (e) {
      // Onleesbare opslag overschrijven we bij de eerste wijziging.
      return data;
    }
    if (!gelezen || typeof gelezen !== "object") return data;

    if (gelezen.lessen && typeof gelezen.lessen === "object") data.lessen = gelezen.lessen;
    if (gelezen.quizzen && typeof gelezen.quizzen === "object") data.quizzen = gelezen.quizzen;
    if (Object.prototype.toString.call(gelezen.dagen) === "[object Array]") data.dagen = gelezen.dagen;
    if (gelezen.laatste && typeof gelezen.laatste === "object") data.laatste = gelezen.laatste;

    return data;
  }

  function schrijf(data) {
    if (!opslag) return false;
    try {
      opslag.setItem(SLEUTEL, JSON.stringify(data));
      return true;
    } catch (e) {
      // Volle of geweigerde opslag mag de les niet breken.
      return false;
    }
  }

  /* --- Datums ---------------------------------------------------------- */

  function datumSleutel(d) {
    var m = d.getMonth() + 1;
    var dag = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" + m : m) + "-" + (dag < 10 ? "0" + dag : dag);
  }

  function vandaag() {
    return datumSleutel(new Date());
  }

  function leesbaar(sleutel) {
    var delen = /^(\d{4})-(\d{2})-(\d{2})$/.exec(sleutel || "");
    if (!delen) return "";
    var maand = MAANDEN[parseInt(delen[2], 10) - 1];
    if (!maand) return "";
    return parseInt(delen[3], 10) + " " + maand + " " + delen[1];
  }

  // Een dag telt mee zodra de cursist iets doet: een les openen, een les
  // afronden of een quizvraag beantwoorden.
  function meldDag(data) {
    var dag = vandaag();
    if (data.dagen.indexOf(dag) === -1) {
      data.dagen.push(dag);
      data.dagen.sort();
      if (data.dagen.length > MAX_DAGEN) {
        data.dagen = data.dagen.slice(data.dagen.length - MAX_DAGEN);
      }
    }
    return data;
  }

  // De reeks loopt terug vanaf vandaag. Heeft de cursist vandaag nog niets
  // gedaan, dan rekenen we vanaf gisteren, zodat de reeks niet al 's ochtends
  // op nul staat.
  function reeks(dagen) {
    if (!dagen || !dagen.length) return 0;

    var bekend = {};
    var i;
    for (i = 0; i < dagen.length; i++) bekend[dagen[i]] = true;

    var d = new Date();
    d.setHours(12, 0, 0, 0);
    if (!bekend[datumSleutel(d)]) {
      d.setDate(d.getDate() - 1);
      if (!bekend[datumSleutel(d)]) return 0;
    }

    var aantal = 0;
    while (bekend[datumSleutel(d)]) {
      aantal++;
      d.setDate(d.getDate() - 1);
    }
    return aantal;
  }

  /* --- Gegevens uit de pagina ------------------------------------------ */

  // De lijst met open lessen komt uit het template, zodat de JavaScript niet
  // hoeft te raden welke lessen bestaan en welke vergrendeld zijn.
  function paginaGegevens() {
    var blok = document.getElementById("academyVoortgangData");
    if (!blok) return null;
    try {
      var data = JSON.parse(blok.textContent);
      if (!data || Object.prototype.toString.call(data.lessen) !== "[object Array]") return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  /* --- Rekenen --------------------------------------------------------- */

  function stand(data, gegevens) {
    var lessenAf = 0;
    var quizzenAf = 0;
    var goedeAntwoorden = 0;

    // De punten per les en per antwoord komen uit het template, zodat de tegel
    // zonder JavaScript dezelfde maximumscore laat zien.
    var perLes = typeof gegevens.puntenPerLes === "number" ? gegevens.puntenPerLes : 10;
    var perAntwoord = typeof gegevens.puntenPerAntwoord === "number" ? gegevens.puntenPerAntwoord : 1;

    gegevens.lessen.forEach(function (les) {
      var opgeslagen = data.lessen[les.pad];
      if (opgeslagen && opgeslagen.af) lessenAf++;

      // Alleen quizzen van open lessen tellen mee. Zo blijft de stand kloppen
      // als een les wordt herschreven of weer op slot gaat.
      Object.keys(data.quizzen).forEach(function (sleutel) {
        if (sleutel.indexOf(les.pad + "#") !== 0) return;
        var quiz = data.quizzen[sleutel];
        if (!quiz) return;
        if (quiz.af) quizzenAf++;
        goedeAntwoorden += quiz.goed || 0;
      });
    });

    return {
      lessenAf: lessenAf,
      lessenTotaal: gegevens.lessen.length,
      quizzenAf: quizzenAf,
      quizzenTotaal: gegevens.quizzen || 0,
      goedeAntwoorden: goedeAntwoorden,
      vragenTotaal: gegevens.vragen || 0,
      reeks: reeks(data.dagen),
      punten: lessenAf * perLes + goedeAntwoorden * perAntwoord,
      puntenMax: gegevens.lessen.length * perLes + (gegevens.vragen || 0) * perAntwoord
    };
  }

  /* --- Tonen ----------------------------------------------------------- */

  function zet(id, tekst) {
    var el = document.getElementById(id);
    if (el) el.textContent = tekst;
  }

  function toonTegels(s) {
    var tegels = document.getElementById("academyStats");
    if (!tegels) return;

    zet("academyStatHoofdstukken", s.lessenAf + "/" + s.lessenTotaal);
    zet("academyStatReeks", s.reeks === 1 ? "1 dag" : s.reeks + " dagen");
    zet("academyStatQuizzen", s.quizzenAf + "/" + s.quizzenTotaal);
    zet("academyStatPunten", s.punten + "/" + s.puntenMax);
  }

  function toonBalk(s) {
    var balk = document.getElementById("academyVoortgang");
    if (!balk) return;

    var deel = s.lessenTotaal ? Math.round((s.lessenAf / s.lessenTotaal) * 100) : 0;
    zet("academyVoortgangTekst", s.lessenAf + " van de " + s.lessenTotaal + " lessen afgerond");

    var vulling = document.getElementById("academyVoortgangVulling");
    if (vulling) vulling.style.width = deel + "%";

    balk.hidden = false;
  }

  // Op de overzichtspagina: de les waar de cursist was, of de eerste les die
  // nog niet af is.
  function toonVerder(data, gegevens, s) {
    var blok = document.getElementById("academyVerder");
    if (!blok) return;

    var doel = null;
    if (data.laatste && data.laatste.pad) {
      gegevens.lessen.forEach(function (les) {
        if (les.pad === data.laatste.pad) doel = les;
      });
    }
    if (!doel) {
      gegevens.lessen.forEach(function (les) {
        if (doel) return;
        var opgeslagen = data.lessen[les.pad];
        if (!opgeslagen || !opgeslagen.af) doel = les;
      });
    }
    if (!doel) return;

    // Wie nog niets heeft gedaan, krijgt de gewone sectiekaarten te zien.
    if (!s.lessenAf && !Object.keys(data.lessen).length) return;

    var link = document.getElementById("academyVerderLink");
    if (!link) return;
    link.setAttribute("href", doel.pad);
    zet("academyVerderTitel", doel.titel);
    blok.hidden = false;
  }

  // Een afgeronde les krijgt een vinkje in de inhoudsopgave.
  function toonInhoudsopgave(data) {
    var links = document.querySelectorAll(".academy__sidebar a.academy__chapter-inner");
    Array.prototype.forEach.call(links, function (link) {
      var pad = link.getAttribute("href");
      var opgeslagen = pad ? data.lessen[pad] : null;
      var li = link.parentNode;
      if (!opgeslagen || !opgeslagen.af) return;

      li.classList.add("academy__chapter--af");
      if (link.querySelector(".academy__chapter-af")) return;

      var vink = document.createElement("span");
      vink.className = "academy__chapter-af";
      vink.innerHTML =
        '<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24"' +
        ' fill="none" stroke="currentColor" stroke-width="3">' +
        '<polyline points="20 6 9 17 4 12"/></svg>';
      var tekst = document.createElement("span");
      tekst.className = "sr-only";
      tekst.textContent = " (afgerond)";
      link.appendChild(vink);
      link.appendChild(tekst);
    });
  }

  /* --- De knop op een les ---------------------------------------------- */

  function regelKnop(data, gegevens, nabewerking) {
    var blok = document.getElementById("academyAfgerond");
    if (!blok) return;

    var pad = blok.getAttribute("data-pad");
    var knop = document.getElementById("academyAfgerondKnop");
    if (!pad || !knop) return;

    function toon() {
      var opgeslagen = data.lessen[pad];
      var af = !!(opgeslagen && opgeslagen.af);
      knop.setAttribute("aria-pressed", af ? "true" : "false");
      var datum = af && opgeslagen.afOp ? leesbaar(opgeslagen.afOp) : "";
      zet("academyAfgerondDatum", datum ? "Afgerond op " + datum : "");
    }

    knop.addEventListener("click", function () {
      var opgeslagen = data.lessen[pad] || {};
      var wordtAf = !(opgeslagen.af);

      opgeslagen.af = wordtAf;
      if (wordtAf) {
        opgeslagen.afOp = vandaag();
      } else {
        delete opgeslagen.afOp;
      }
      data.lessen[pad] = opgeslagen;
      meldDag(data);
      schrijf(data);

      toon();
      zet(
        "academyAfgerondMelding",
        wordtAf ? "Deze les staat nu op afgerond." : "Deze les staat niet meer op afgerond."
      );
      if (nabewerking) nabewerking();
    });

    toon();
    blok.hidden = false;
  }

  /* --- Opstarten ------------------------------------------------------- */

  var gegevens = paginaGegevens();
  if (!gegevens) return;

  // Weigert de browser localStorage, dan valt er niets te bewaren. Dan blijven
  // de balk en de knop "Les afgerond" verborgen, want die zouden een voortgang
  // beloven die na een verversing weg is. De les en de quiz werken verder
  // gewoon, alleen zonder geheugen.
  if (!opslag) return;

  var data = lees();

  // Het bezoek aan een open les vastleggen: dat is de les waar de cursist de
  // volgende keer verder kan.
  var huidige = document.getElementById("academyAfgerond");
  if (huidige && huidige.getAttribute("data-pad")) {
    var pad = huidige.getAttribute("data-pad");
    var bestaand = data.lessen[pad] || {};
    bestaand.bezocht = vandaag();
    data.lessen[pad] = bestaand;
    data.laatste = {
      pad: pad,
      titel: huidige.getAttribute("data-titel") || "",
      datum: vandaag()
    };
    meldDag(data);
    schrijf(data);
  }

  function herteken() {
    var s = stand(data, gegevens);
    toonTegels(s);
    toonBalk(s);
    toonVerder(data, gegevens, s);
    toonInhoudsopgave(data);
  }

  herteken();
  regelKnop(data, gegevens, herteken);

  /* --- Voor academy-quiz.js -------------------------------------------- */

  // De naam begint met pa: een element met een id staat als eigenschap op
  // window, en window.academyVoortgang is daardoor al de div van de balk.
  window.paAcademyVoortgang = {
    // Leest de stand van één quiz, zodat het quizscript de antwoorden van de
    // vorige keer kan terugzetten.
    leesQuiz: function (sleutel) {
      var quiz = data.quizzen[sleutel];
      if (!quiz || !quiz.antwoorden) return null;
      return quiz;
    },
    // Bewaart het antwoord op één vraag en of de hele quiz af is.
    bewaarQuiz: function (sleutel, antwoorden, goed, totaal) {
      var aantal = Object.keys(antwoorden).length;
      data.quizzen[sleutel] = {
        antwoorden: antwoorden,
        goed: goed,
        totaal: totaal,
        af: aantal >= totaal && totaal > 0,
        datum: vandaag()
      };
      meldDag(data);
      schrijf(data);
      herteken();
    },
    beschikbaar: !!opslag
  };
})();

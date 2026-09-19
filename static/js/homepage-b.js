/*
  Homepagina variant B (layouts/_default/homepage-b.html).
  Twee onderdelen:
  1. De assistent: de chat van pa-chat, in de pagina zelf, met getypte tekst.
  2. De meting voor de A/B-test: Plausible-event "Homepage stap".
  Zie docs/homepage-vernieuwing-ab-test.md.
*/
(function () {
  "use strict";

  var WORKER_URL = "https://pa-chat.juliatol.workers.dev/chat";
  var MAX_HISTORY = 10;
  var MAX_LENGTH = 500;
  var TIMEOUT_MS = 30000;
  var TEKENS_PER_SECONDE = 55;

  var root = document.querySelector("[data-pa-variant]");
  if (!root) return;
  var variant = root.getAttribute("data-pa-variant");
  var minderBeweging = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function meet(soort) {
    if (typeof window.plausible === "function") {
      window.plausible("Homepage stap", { props: { variant: variant, soort: soort } });
    }
  }

  // Typt tekst in een element. Zonder beweging staat de tekst er meteen.
  function typ(el, tekst, klaar) {
    if (minderBeweging) {
      el.textContent = tekst;
      if (klaar) klaar();
      return;
    }
    var start = performance.now();
    function stap(nu) {
      var n = Math.min(tekst.length, Math.floor(((nu - start) / 1000) * TEKENS_PER_SECONDE));
      if (el.textContent.length !== n) el.textContent = tekst.slice(0, n);
      if (n < tekst.length) {
        window.requestAnimationFrame(stap);
      } else if (klaar) {
        klaar();
      }
    }
    window.requestAnimationFrame(stap);
  }

  // ── 1. De assistent ──────────────────────────────────────

  var VOORBEELDEN = [
    "Moeten wij voldoen aan de EAA?",
    "Wat kost een WCAG-audit?",
    "Wat doet monitoring precies?",
    "Hoe controleer ik mijn PDF?",
    "Wat doet de WCAG Radar?",
    "Wat is het verschil tussen een audit en een mini-audit?",
    "Wat moet er in een toegankelijkheidsverklaring?",
    "Hoe werkt de strippenkaart?",
    "Wat is een hercontrole?"
  ];
  var DIENSTVRAAG = "Welke dienst past bij ons? We hebben een website en een app.";

  var log, form, invoer, verstuur, chips, opnieuw, denkt;
  var berichten = [];
  var gesteld = {};
  var bezig = false;
  var paginas = {};

  function startGroet() {
    var getypt = root.querySelector(".hb-vraag__getypt");
    var cursor = root.querySelector(".hb-vraag__cursor");
    var tekst = root.querySelector(".hb-groet-tekst");
    if (!getypt || !tekst) return;
    typ(getypt, tekst.textContent.trim(), function () {
      if (cursor) cursor.hidden = true;
    });
  }

  function startVraag() {
    log = document.getElementById("hb-vraag-log");
    form = document.getElementById("hb-vraag-form");
    invoer = document.getElementById("hb-vraag-invoer");
    chips = document.getElementById("hb-vraag-chips");
    opnieuw = document.getElementById("hb-vraag-opnieuw");
    denkt = document.getElementById("hb-denkt");
    if (!log || !form || !invoer || !chips || !opnieuw || !denkt) return;
    verstuur = form.querySelector(".hb-vraag__verstuur");

    try {
      paginas = JSON.parse(document.getElementById("hb-paginas").textContent);
    } catch (e) {
      paginas = {};
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) return;
      stel(invoer.value.trim(), "vraag-getypt");
    });

    chips.addEventListener("click", function (e) {
      var chip = e.target.closest(".hb-chip");
      if (chip) stel(chip.textContent.trim(), "vraag-voorbeeld");
    });

    var dienstknop = document.getElementById("hb-vraag-diensten");
    if (dienstknop) {
      dienstknop.addEventListener("click", function () {
        document.getElementById("vraag").scrollIntoView({ behavior: minderBeweging ? "auto" : "smooth" });
        stel(DIENSTVRAAG, "vraag-diensten");
      });
    }

    opnieuw.addEventListener("click", function () {
      berichten = [];
      gesteld = {};
      log.innerHTML = "";
      opnieuw.hidden = true;
      toonVoorbeelden();
      invoer.focus();
    });
  }

  function stel(tekst, soort) {
    if (bezig || !tekst || tekst.length > MAX_LENGTH) return;
    gesteld[tekst] = true;
    meet(soort);

    voegToe("vraag", tekst);
    berichten.push({ role: "user", content: tekst });
    invoer.value = "";
    zetBezig(true);
    denkt.hidden = false;
    opnieuw.hidden = false;

    var controller = new AbortController();
    var timeout = window.setTimeout(function () { controller.abort(); }, TIMEOUT_MS);

    fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: berichten.slice(-MAX_HISTORY), lang: "nl" }),
      signal: controller.signal
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.ok && data.content) {
          berichten.push({ role: "assistant", content: data.content });
          return toonAntwoord(data.content.trim());
        }
        voegToe("fout", foutTekst());
      })
      .catch(function () {
        voegToe("fout", foutTekst());
      })
      .finally(function () {
        window.clearTimeout(timeout);
        denkt.hidden = true;
        zetBezig(false);
        toonVoorbeelden();
      });
  }

  // Het antwoord wordt zichtbaar getypt in een element dat voor schermlezers
  // verborgen is. Pas als het af is, komt het echte bericht in het log: zo
  // hoort een schermlezer het antwoord één keer, in zijn geheel.
  function toonAntwoord(tekst) {
    return new Promise(function (klaar) {
      denkt.hidden = true;
      var typen = document.createElement("p");
      typen.className = "hb-bericht hb-bericht--antwoord hb-bericht--typen";
      typen.setAttribute("aria-hidden", "true");
      log.parentNode.insertBefore(typen, log.nextSibling);

      typen.scrollIntoView({ block: "nearest", behavior: minderBeweging ? "auto" : "smooth" });

      typ(typen, tekst, function () {
        typen.remove();
        voegToe("antwoord", tekst);
        klaar();
      });
    });
  }

  function foutTekst() {
    return "Daar kom ik nu niet bij. Bel ons op 085 5055 890 of mail naar info@properaccess.nl.";
  }

  function zetBezig(aan) {
    bezig = aan;
    verstuur.disabled = aan;
    chips.querySelectorAll(".hb-chip").forEach(function (c) { c.disabled = aan; });
  }

  function voegToe(rol, tekst) {
    var p = document.createElement("p");
    p.className = "hb-bericht hb-bericht--" + rol;
    if (rol === "antwoord") p.classList.add("hb-bericht--zonder-animatie");

    var wie = document.createElement("span");
    wie.className = "sr-only";
    wie.textContent = rol === "vraag" ? "Jij: " : "Assistent: ";
    p.appendChild(wie);

    if (rol === "antwoord") {
      vulMetLinks(p, tekst);
    } else {
      p.appendChild(document.createTextNode(tekst));
    }
    log.appendChild(p);
    return p;
  }

  // De chat noemt de pagina met een URL. Die wordt een link met de naam van
  // de pagina als linktekst; een onbekende pagina houdt het adres.
  function vulMetLinks(el, tekst) {
    var patroon = /(?:https?:\/\/)?(?:www\.)?properaccess\.nl(\/[^\s)]*)?/g;
    var laatste = 0;
    var m;
    while ((m = patroon.exec(tekst)) !== null) {
      var url = m[0].replace(/[.,;:!?]+$/, "");
      var pad = (m[1] || "/").replace(/[.,;:!?]+$/, "");
      if (pad.charAt(pad.length - 1) !== "/") pad += "/";

      el.appendChild(document.createTextNode(tekst.slice(laatste, m.index)));
      var a = document.createElement("a");
      a.href = pad;
      a.textContent = paginas[pad] || url.replace(/^https?:\/\//, "").replace(/^www\./, "");
      el.appendChild(a);
      laatste = m.index + url.length;
      patroon.lastIndex = laatste;
    }
    el.appendChild(document.createTextNode(tekst.slice(laatste)));
  }

  // Na elk antwoord staan er vier vragen klaar die nog niet gesteld zijn.
  function toonVoorbeelden() {
    var open = VOORBEELDEN.filter(function (v) { return !gesteld[v]; });
    if (open.length < 4) open = VOORBEELDEN.slice();
    var keuze = open.slice(0, 4);

    chips.innerHTML = "";
    keuze.forEach(function (v) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hb-chip";
      b.textContent = v;
      li.appendChild(b);
      chips.appendChild(li);
    });
  }

  // ── 2. Meting: klikken naar een volgende stap ────────────

  function soortVan(href) {
    if (/\/offerte/.test(href)) return "offerte";
    if (/\/contact\/|^tel:|^mailto:|#contact$/.test(href)) return "contact";
    if (/\/tools\//.test(href)) return "tool";
    if (/toegankelijkheidsaudit|audit|monitoring|hercontrole|strippenkaart|abonnement|testen|webshop-quickscan|europese-toegankelijkheidswetgeving/.test(href)) return "dienst";
    return null;
  }

  function startMeting() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a[href]");
      if (!a) return;
      var soort = soortVan(a.getAttribute("href"));
      if (soort) meet(soort);
    });
    // Een verstuurd formulier telt form-submit.js al, als "form_submission"
    // met form_bron "homepage-b", en alleen als het versturen gelukt is.
  }

  function init() {
    startGroet();
    startVraag();
    startMeting();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

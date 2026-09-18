/*
  Homepagina variant B (layouts/_default/homepage-b.html).
  Drie onderdelen:
  1. De plaatsnaam in de h1 wisselt elke 6 seconden, met een stopknop.
  2. De vraagsectie: de chat van pa-chat, in de pagina zelf.
  3. De meting voor de A/B-test: Plausible-event "Homepage stap".
  Zie docs/homepage-vernieuwing-ab-test.md.
*/
(function () {
  "use strict";

  var WORKER_URL = "https://pa-chat.juliatol.workers.dev/chat";
  var MAX_HISTORY = 10;
  var MAX_LENGTH = 500;
  var TIMEOUT_MS = 30000;
  var WISSEL_MS = 6000;

  var root = document.querySelector("[data-pa-variant]");
  if (!root) return;
  var variant = root.getAttribute("data-pa-variant");

  function meet(soort) {
    if (typeof window.plausible === "function") {
      window.plausible("Homepage stap", { props: { variant: variant, soort: soort } });
    }
  }

  // ── 1. Wisselende plaatsnaam ─────────────────────────────
  //
  // Een schermlezer leest altijd de vaste tekst "Amsterdam en Emmeloord";
  // het wisselende woord is aria-hidden, zodat de naam van de kop niet
  // verandert. Wie minder beweging wil, ziet de vaste tekst en geen wissel.
  // WCAG 2.2.2: beweging die langer dan 5 seconden duurt, moet te stoppen zijn.

  function startWissel() {
    var plaats = root.querySelector(".hb-plaats");
    var knop = root.querySelector(".hb-pauze");
    if (!plaats || !knop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var namen = (plaats.getAttribute("data-plaatsen") || "").split("|");
    if (namen.length < 2) return;

    var vast = plaats.querySelector(".hb-plaats__vast");
    var wissel = plaats.querySelector(".hb-plaats__wissel");
    var i = 0;
    var timer = null;

    vast.classList.add("sr-only");
    wissel.textContent = namen[0];
    wissel.hidden = false;
    knop.hidden = false;

    function volgende() {
      i = (i + 1) % namen.length;
      wissel.classList.remove("is-nieuw");
      void wissel.offsetWidth; // animatie opnieuw starten
      wissel.textContent = namen[i];
      wissel.classList.add("is-nieuw");
    }

    function start() {
      timer = window.setInterval(volgende, WISSEL_MS);
      knop.setAttribute("aria-pressed", "false");
    }

    function stop() {
      window.clearInterval(timer);
      timer = null;
      knop.setAttribute("aria-pressed", "true");
    }

    knop.addEventListener("click", function () {
      if (timer) { stop(); } else { start(); }
    });

    start();
  }

  // ── 2. Vraagsectie ───────────────────────────────────────

  var VOORBEELDEN = [
    "Moeten wij voldoen aan de EAA?",
    "Wat kost een audit?",
    "Wat doet de WCAG Radar?",
    "Hoe controleer ik of mijn PDF toegankelijk is?",
    "Wat is het verschil tussen een audit en een mini-audit?",
    "Wat moet er in een toegankelijkheidsverklaring?",
    "Hoe werkt de strippenkaart?",
    "Wat is een hercontrole?"
  ];

  var log, form, invoer, verstuur, chips, opnieuw;
  var berichten = [];
  var gesteld = {};
  var bezig = false;
  var paginas = {};

  function startVraag() {
    log = document.getElementById("hb-vraag-log");
    form = document.getElementById("hb-vraag-form");
    invoer = document.getElementById("hb-vraag-invoer");
    chips = document.getElementById("hb-vraag-chips");
    opnieuw = document.getElementById("hb-vraag-opnieuw");
    if (!log || !form || !invoer || !chips || !opnieuw) return;
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

    opnieuw.addEventListener("click", function () {
      berichten = [];
      gesteld = {};
      log.innerHTML = "";
      log.hidden = true;
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

    var denkt = voegToe("denkt", "Even denken…");
    zetBezig(true);

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
        denkt.remove();
        if (data.ok && data.content) {
          voegToe("antwoord", data.content);
          berichten.push({ role: "assistant", content: data.content });
        } else {
          voegToe("fout", data.error || foutTekst());
        }
      })
      .catch(function () {
        denkt.remove();
        voegToe("fout", foutTekst());
      })
      .finally(function () {
        window.clearTimeout(timeout);
        zetBezig(false);
        opnieuw.hidden = false;
        toonVoorbeelden();
        invoer.focus();
      });
  }

  function foutTekst() {
    return "Er ging iets mis. Probeer het later opnieuw, of bel ons op 085 5055 890.";
  }

  function zetBezig(aan) {
    bezig = aan;
    verstuur.disabled = aan;
    chips.querySelectorAll(".hb-chip").forEach(function (c) { c.disabled = aan; });
  }

  function voegToe(rol, tekst) {
    log.hidden = false;
    var div = document.createElement("div");
    div.className = "hb-bericht hb-bericht--" + rol;

    var wie = document.createElement("span");
    wie.className = "hb-bericht__wie";
    wie.textContent = rol === "vraag" ? "Jij" : "Proper Access";

    var inhoud = document.createElement("div");
    inhoud.className = "hb-bericht__tekst";
    if (rol === "denkt") inhoud.classList.add("hb-denkt");
    if (rol === "fout") div.setAttribute("role", "alert");

    if (rol === "antwoord") {
      vulMetLinks(inhoud, tekst);
    } else {
      inhoud.textContent = tekst;
    }

    div.appendChild(wie);
    div.appendChild(inhoud);
    log.appendChild(div);
    return div;
  }

  // De chat noemt de pagina met een volledige URL. Die wordt een link met de
  // naam van de pagina als linktekst; een onbekende pagina houdt het pad.
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
    if (open.length === 0) open = VOORBEELDEN.slice();
    var start = Object.keys(gesteld).length % open.length;
    var keuze = open.slice(start).concat(open.slice(0, start)).slice(0, 4);

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

  // ── 3. Meting: klikken naar een volgende stap ────────────

  function soortVan(href) {
    if (/\/offerte/.test(href)) return "offerte";
    if (/\/contact\/|^tel:|^mailto:|#contact$/.test(href)) return "contact";
    if (/\/tools\//.test(href)) return "tool";
    if (/toegankelijkheidsaudit|audit|hercontrole|strippenkaart|abonnement|testen|webshop-quickscan|europese-toegankelijkheidswetgeving/.test(href)) return "dienst";
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
    startWissel();
    startVraag();
    startMeting();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

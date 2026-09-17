/**
 * Bezoekmeting — meldt een paginaweergave aan de pa-bezoekmeting Worker.
 *
 * Verstuurt alleen het pad en het domein van de verwijzer. Zet niets neer op
 * het apparaat van de bezoeker: geen cookie, geen localStorage, geen id.
 * De Worker koppelt het netwerk aan een organisatie en gooit het IP-adres weg.
 *
 * Tijdelijk, voor de meting van september 2026. Uitzetten kan met
 * bezoekmeting.enable = false in config/_default/params.toml.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  if (!script) return;

  var eindpunt = script.getAttribute("data-eindpunt");
  if (!eindpunt) return;

  // Respecteer de browserinstelling van de bezoeker.
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;

  // Geen meting op de eigen testomgeving of in een preview.
  if (location.hostname !== "properaccess.nl" && location.hostname !== "www.properaccess.nl") {
    if (script.getAttribute("data-ook-lokaal") !== "ja") return;
  }

  var gegevens = JSON.stringify({
    pad: location.pathname,
    verwijzer: document.referrer || ""
  });

  try {
    // sendBeacon houdt de pagina niet op en overleeft het wegklikken.
    // text/plain voorkomt een preflight-verzoek; de Worker leest de JSON zelf.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(eindpunt + "/hit", new Blob([gegevens], { type: "text/plain;charset=UTF-8" }));
    } else {
      fetch(eindpunt + "/hit", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: gegevens,
        keepalive: true
      });
    }
  } catch (e) {
    // Een mislukte meting mag de pagina nooit raken.
  }
})();

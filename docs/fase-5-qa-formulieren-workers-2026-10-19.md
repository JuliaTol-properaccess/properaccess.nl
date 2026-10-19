# Fase 5 — QA formulieren en Workers

Datum: 19 oktober 2026
Scope: lokale Hugo-site, formulier-JavaScript en Worker-handlers.
Testdata: synthetisch (`QA Test`, `qa@example.invalid`, geen echte persoonsgegevens).

## Uitkomst

De lokale Hugo-build slaagt met de tijdelijke lokale QA-configuratie. De formulier- en Worker-validaties slagen onder gecontroleerde tests. Er is geen echte formulierinzending naar CRM, GitHub Projects, AhaSend of een rapport-origin uitgevoerd. Er is dus niets live gezet.

## 1. Formulieren

- Intake: lege verzending wordt geblokkeerd; de eerste verplichte radiogroep krijgt focus en de browser toont een tekstuele validatiemelding.
- Intake: conditionele velden verschijnen na de keuzes voor website-audit en website en krijgen dan het juiste `required`-gedrag.
- Offerte: lege verzending wordt geblokkeerd op `__onderzoek1_soort`.
- Offerte: een tweede onderzoek kan worden toegevoegd; de gegenereerde IDs blijven uniek (`offerte-1-*`, `offerte-2-*`) en de titels worden correct genummerd.
- Mobiele viewport van 375 px: intakepagina heeft geen horizontale overflow (`scrollWidth === innerWidth`).
- Taalwisselaar: op `/intake/` is de Engelse variant aanwezig via `hreflang="en"` naar `/en/intake/`.
- Toetsenbord: de eerste tabstappen lopen logisch via skiplink, zoeken, menu, offerte-link en daarna de formuliergroepen.
- Formuliercode: succes- en foutstatus gebruiken `role="status"`/`aria-live`, resetten bij succes en herstellen de submitknop na afloop.
- Browsermatig end-to-end uitgevoerd tegen de lokale mock: successtatus, foutstatus, netwerkrequest en reset.

## 2. Workers

Getest met directe `Request`-objecten en mocks, zonder externe side effects:

- `pipedrive-forms`: OPTIONS, ongeldige JSON, ontbrekende velden, ongeldig e-mailadres, honeypot en toegestane/ongewenste Origin.
- `intake`: OPTIONS, verkeerde methode, ongeldige JSON, ontbrekende verplichte velden en honeypot.
- `report-auth`: fail-closed zonder wachtwoord (503), geen credentials (401) en geldige Basic Auth met gemockte origin (200).
- `alt-tekst-checker`: verkeerde methode en ontbrekende URL.
- `heading-checker`: ontbrekende URL.
- `link-checker` en `tabel-checker`: `javascript:`/`ftp:`-URL's worden geweigerd als niet-HTTP(S).

Alle verwachte statussen en foutteksten kwamen terug. De modulecheck gaf alleen een Node-waarschuwing over ontbrekende `type: module`; dat is geen runtimefout in Cloudflare Workers.

## 3. Gerichte toegankelijkheid

Gecontroleerd: zichtbare formulierlabels, native labels/legends in de intake- en offerteopbouw, tekstuele validatie, focus na fout, taalwisselaar, mobiele reflow en eerste toetsenbordvolgorde.

Visueel gecontroleerd op desktop en mobiel: contrast, zichtbare focusringen, fout- en successtatussen en reflow zonder horizontale scroll.

## Nieuwe veilige testlaag

Er staat nu een lokale mock-Worker in `tools/form-mock/`. Deze roept geen CRM,
e-mail, GitHub of andere externe service aan. Met de lokale queryparameter
`pa_form_endpoint` kunnen browsertests kiezen tussen `scenario=success` en
`scenario=error`; `GET /__last-request` geeft de exacte laatst ontvangen
request en JSON-payload terug. De override werkt alleen op localhost.

De Worker-moduletest is uitgevoerd met synthetische data en gaf:

- succes: HTTP 200 en `{ "ok": true, "mock": true }`;
- fout: HTTP 502 en de synthetische foutmelding;
- requestinspectie: methode, pad, Content-Type en payload kwamen exact terug.

De browserflows zijn in Chrome uitgevoerd na een lokale build met
`baseURL = "http://localhost:1313/"`, zodat lokale JavaScript-assets vanaf
dezelfde origin laden.

## Resultaat

De afgesproken QA-punten zijn akkoord. De mock is uitsluitend lokaal gebruikt;
er is geen productie-Worker aangeroepen en geen redirect vastgesteld.

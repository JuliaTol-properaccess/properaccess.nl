---
title: "AI-test: Herkent AI een div die doet alsof het een knop is?"
date: 2026-04-04
slug: "herkent-ai-div-als-knop"
categories:
  - "ai-en-wcag"
tags:
  - "AI"
  - "wcag"
  - "toetsenbord"
  - "button"
  - "Playwright"
description: "Kan AI een klikbare div herkennen op een live website? Ik testte het met Claude Code en Playwright. Dit zijn de resultaten, de beperkingen en de tools die je nodig hebt."
keywords:
  - AI toegankelijkheid testen
  - div onclick
  - button accessibility
  - WCAG 2.1.1
  - toetsenbord toegankelijkheid
  - klikbare div
  - Playwright accessibility
---

{{< case-section >}}

## Een div die doet alsof het een knop is

Een `<div>` met een `onclick`. Ziet eruit als een knop. Doet iets als je klikt. Maar druk op Tab en er gebeurt niets. Enter? Ook niets.

Voor een toetsenbordgebruiker bestaat deze knop niet.

Dit is de nummer 1 toetsenbordfout die ik tegenkom bij audits (WCAG 2.1.1). En de makkelijkste om op te lossen: vervang de div door een `<button>`. Maar kan AI dit probleem ook vinden? En dan niet in een losstaand stukje code, maar op een echte, live website?

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-div-code-analyse.svg" alt="Code-analyse: Claude herkent een div met onclick als toegankelijkheidsprobleem" >}}

## Test 1: Code-analyse

Ik gaf Claude de volgende HTML, zonder hints:

```html
<div class="btn-primary" onclick="addToCart(123)">In winkelwagen</div>
```

Mijn prompt: _"Welke toegankelijkheidsproblemen zie je in deze code?"_

### Resultaat

Claude herkende het meteen:

> <span lang="en">"A `<div>` with an `onclick` handler is not keyboard accessible by default. It cannot be reached with Tab, it has no button role, and pressing Enter or Space will not activate it."</span>

Het koppelt het probleem aan WCAG 2.1.1 (Toetsenbord) en geeft de juiste oplossing: gebruik een `<button>`.

Maar ik gaf AI een stukje code. Dat is de makkelijke variant. Kan AI dit ook vinden als je alleen een URL hebt?

{{< /case-section >}}

{{< case-section >}}

## Test 2: Een live website testen

Kan AI een webpagina bezoeken en deze fout opsporen? Ja, maar niet uit zichzelf. AI heeft een browser nodig.

Met Playwright (een tool voor browserautomatisering) kan Claude Code een echte browser openen, een webpagina bezoeken, en de DOM (de boomstructuur van alle elementen op een pagina) inspecteren. Dat ziet er zo uit:

```javascript
const { chromium } = require("playwright");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("https://voorbeeld-webshop.nl");

// Zoek alle elementen met onclick die geen button of link zijn
const problemen = await page.evaluate(() => {
  const elementen = document.querySelectorAll("[onclick]");
  return Array.from(elementen)
    .filter((el) => {
      const tag = el.tagName.toLowerCase();
      return (
        tag !== "button" &&
        tag !== "a" &&
        tag !== "input" &&
        el.getAttribute("role") !== "button"
      );
    })
    .map((el) => ({
      tag: el.tagName.toLowerCase(),
      tekst: el.textContent?.trim().substring(0, 80),
      onclick: el.getAttribute("onclick"),
    }));
});
```

Dit script vindt elke div, span of ander niet-interactief element met een onclick-attribuut. Geen broncode nodig. Het test de live pagina.

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-playwright-mogelijkheden.svg" alt="Overzicht van wat Playwright wel en niet kan bij het testen van live websites" >}}

## Wat kan Playwright testen?

Playwright draait een echte Chromium-browser. Alle JavaScript wordt uitgevoerd, dus je ziet de pagina zoals een bezoeker die ziet -- niet de broncode. Je kunt klikken, wachten tot een pop-up verschijnt, en dan de nieuwe HTML inspecteren. Pop-ups, uitklapmenu's, tabbladen, content die pas laadt bij scrollen, iframes (ingesloten pagina's). Het werkt allemaal.

{{< /case-section >}}

{{< case-section >}}

## Waar gaat het mis?

Het grootste probleem: addEventListener. De meeste moderne websites gebruiken niet `onclick="..."` in de HTML. Ze koppelen click-events via JavaScript:

```javascript
element.addEventListener("click", function () {
  addToCart(123);
});
```

Dit is onzichtbaar in de DOM. Er is geen onclick-attribuut om op te zoeken.

Je kunt wel zoeken naar signalen dat een element klikbaar bedoeld is:

- Heeft het `cursor: pointer` in de berekende stijl?
- Heeft het een class als "btn", "button", "clickable"?
- Is het een `<div>` of `<span>` met `tabindex="0"` maar zonder `role="button"`?

Maar dat zijn heuristieken -- vuistregels die vaak kloppen, maar niet altijd. Je krijgt vals positieven (elementen die er klikbaar uitzien maar het niet zijn) en vals negatieven (klikbare elementen zonder visuele hints).

Andere beperkingen:

| Beperking                                | Impact                                             |
| ---------------------------------------- | -------------------------------------------------- |
| addEventListener is onzichtbaar in DOM   | Hoog, de meeste moderne sites gebruiken dit        |
| Je test altijd een paginastatus tegelijk | Medium, ingelogd vs. uitgelogd, verschillende tabs |
| Gesloten Shadow DOM is ontoegankelijk    | Laag, komt zelden voor                             |
| Bot-detectie (Cloudflare e.d.)           | Medium, sommige sites blokkeren geautomatiseerde browsers |
| Pagina's achter login                    | Medium, kan maar je moet credentials meegeven      |

{{< /case-section >}}

{{< case-section >}}

## Wat heb je nodig?

Om deze test zelf uit te voeren heb je drie dingen nodig:

1. **Node.js** (versie 18 of hoger)
2. **Playwright** (`npm install playwright`)
3. **Een Chromium-browser** (`npx playwright install chromium`)

Geen broncode nodig, geen speciale toegang. Je test de website zoals een bezoeker die ziet.

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-div-scorekaart.svg" alt="Scorekaart test 1: drie keer gevonden, een keer gemist bij addEventListener" >}}

## De scorekaart

| Test                                   | Score    | Toelichting                                                |
| -------------------------------------- | -------- | ---------------------------------------------------------- |
| Code-analyse: div onclick herkennen    | Gevonden | Claude herkent het probleem in een code-snippet            |
| Live website: inline onclick vinden    | Gevonden | Playwright kan DOM doorzoeken op onclick-attributen        |
| Live website: addEventListener vinden  | Gemist   | Onzichtbaar in DOM, alleen via heuristieken te benaderen   |
| Live website: dynamisch geladen divs   | Gevonden | Playwright kan klikken, wachten, en nieuwe DOM inspecteren |
| Context begrijpen (waarom het fout is) | Gevonden | Claude legt uit wat het betekent voor gebruikers           |

AI vindt dit probleem in code en bij inline onclick. Maar bij addEventListener (de manier waarop de meeste moderne websites werken) is het afhankelijk van heuristieken. Dat is een serieuze beperking.

{{< /case-section >}}

{{< case-section >}}

## De fix

```html
<!-- Niet doen -->
<div class="btn-primary" onclick="addToCart(123)">In winkelwagen</div>

<!-- Wel doen -->
<button class="btn-primary" type="button" onclick="addToCart(123)">
  In winkelwagen
</button>
```

Een `<button>` is standaard focusbaar, activeerbaar met Enter en Spatie, en heeft de juiste rol voor schermlezers. Gratis. Zonder extra code.

{{< /case-section >}}

{{< case-section image="/images/julia.webp" alt="Julia Tol, senior auditor bij Proper Access" round="true" caption="Julia Tol, developer, WCAG-expert, AI consultant" >}}

## Wat ik hiervan leer

Claude begrijpt dit probleem goed. Het legt uit waarom een div geen knop is, wat het betekent voor toetsenbordgebruikers, en hoe je het oplost. Dat is meer dan wat axe of Lighthouse je vertellen, die melden alleen dat er een element zonder rol is.

Maar vinden op een live website is een ander verhaal. De DOM doorzoeken werkt als de site onclick-attributen in de HTML heeft staan. Bij JavaScript event listeners (de manier waarop moderne websites klikgedrag koppelen) heb je vuistregels nodig die niet waterdicht zijn.

En dan het punt waar het echt om draait: AI kan je vertellen dat de div een knop moet zijn. Maar het kan niet op Tab drukken. Het leest en redeneert. Het test niet.

---

_Dit is test #1 van de serie "AI en Toegankelijkheidstesten". Elke test onderzoekt of AI een specifiek toegankelijkheidsprobleem kan detecteren, niet alleen in code maar ook op een live website. Wil je weten hoe toegankelijk jouw website is? Laat het door een mens testen voor het beste resultaat. [Neem contact met ons op](/contact/)._

{{< /case-section >}}

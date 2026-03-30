---
title: "Hoe test ik focus zichtbaarheid"
date: 2025-10-23
slug: "hoe-test-ik-focus-zichtbaarheid"
categories:
  - "tips-en-tools"
  - "Webdeveloper"
tags:
  - "2-4-7"
description: "Hoe test je focus zichtbaarheid volgens WCAG 2.4.7? Praktische stappen voor toetsenbordnavigatie en zichtbare focus."
keywords:
  - focus zichtbaarheid testen
  - wcag 2.4.7 focus zichtbaarheid
  - toetsenbord focus testen
aliases:
  - /hoe-test-ik-focus-zichtbaarheid/
---

Navigeer je met de muis door een website, dan zie je welk element actief is doordat je muisaanwijzer erop staat. Maar voor mensen die het toetsenbord gebruiken, is er een ander visueel signaal nodig: de **focusmarkering**. Zonder die markering ben je verdwaald op de pagina. Je drukt op Tab, er gebeurt iets -- maar je hebt geen idee waar je bent.

**WCAG succescriterium 2.4.7** (Focus zichtbaar) eist dat elk interactief element een zichtbare focus-indicator heeft wanneer het toetsenbordfocus krijgt.

## Wie heeft hier last van?

- **Mensen met een motorische beperking** die het toetsenbord gebruiken in plaats van een muis
- **Mensen die tijdelijk geen muis gebruiken** -- een gebroken arm, een kapotte muis, of gewoon een voorkeur voor toetsenbordnavigatie
- **Blinde gebruikers** worden indirect geraakt: als een schermlezer de focus kwijtraakt door slechte focus-management, is het probleem hetzelfde

## Zo test je focus zichtbaarheid

### Stap 1: Navigeer met het toetsenbord

- **Tab** om vooruit te navigeren
- **Shift+Tab** om achteruit te gaan
- **Pijltoetsen** om binnen een component te navigeren (tabbladen, radiobuttons, menu-items)
- **Enter** of **Spatiebalk** om functies te activeren die een menu, dialoogvenster of iets vergelijkbaars openen

### Stap 2: Kijk of je altijd kunt zien waar de focus is

Bij elk element dat focus krijgt, moet je een duidelijke visuele verandering zien. Dat kan een **rand**, een **outline**, een **achtergrondkleurwijziging** of een **schaduw** zijn. Het maakt niet uit welke methode, zolang het maar duidelijk zichtbaar is.

### Stap 3: Controleer de CSS als focus ontbreekt

Zie je geen focusmarkering? Open de Inspector in je browser:

1. Klik met rechts op het element en kies "Inspecteren"
2. Klik in het Styles-paneel op de knop **":hov"**
3. Vink het checkbox **":focus"** aan
4. Kijk welke CSS-regels worden toegepast

De meest voorkomende boosdoener: `outline: none` of `outline: 0`. Hiermee is de standaard browserfocus verwijderd zonder dat er een alternatief voor in de plaats is gekomen.

## Veelvoorkomende problemen

- **`outline: none` zonder vervanging.** CSS-resets en design-frameworks verwijderen vaak de standaard focus-outline. Als er geen alternatieve stijl is toegevoegd, verdwijnt de focus volledig.
- **Focus alleen zichtbaar bij muishover.** Sommige websites tonen een visuele verandering bij `:hover` maar niet bij `:focus`. Voeg altijd beide toe: `:hover, :focus { ... }`.
- **Te subtiele focusstijlen.** Een lichtgrijze rand op een witte achtergrond telt technisch als focus-indicator, maar is voor slechtzienden niet bruikbaar. De focus-indicator moet voldoende contrast hebben (minimaal 3:1 volgens SC 1.4.11).
- **Custom componenten zonder focus.** Elementen gemaakt met `<div>` of `<span>` in plaats van native HTML-elementen (`<button>`, `<a>`) krijgen standaard geen toetsenbordfocus. Je moet dan `tabindex="0"` en een focusstijl toevoegen.

## Uitzondering

Het is toegestaan dat een focusmarkering pas zichtbaar wordt zodra het toetsenbord is gebruikt (via `:focus-visible` in CSS). Zodra de markering eenmaal is weergegeven, moet deze zichtbaar blijven zolang het element focus heeft.

## De makkelijkste oplossing

Verwijder nooit de standaard browserfocus zonder een duidelijk alternatief. En als je twijfelt: gebruik `:focus-visible` in je CSS. Dat toont de focus-indicator alleen bij toetsenbordnavigatie, niet bij muisklikken. Zo houd je designers tevreden en toetsenbordgebruikers geholpen.

```css
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}
```

## Checklist

- Alle interactieve elementen (links, knoppen, formuliervelden) hebben een zichtbare focusmarkering
- De focusmarkering heeft voldoende contrast met de achtergrond
- Er is geen `outline: none` zonder alternatief
- Custom componenten (divs, spans) hebben een focusstijl als ze interactief zijn

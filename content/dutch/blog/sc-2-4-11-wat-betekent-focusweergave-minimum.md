---
title: 'SC 2.4.11 - Wat betekent \"Focus niet volledig bedekt\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-4-11"
  - "focus"
description: "WCAG 2.4.11 vereist dat de focus-indicator niet volledig bedekt wordt door andere elementen. Lees de eisen en hoe je dit controleert."
---

Je navigeert met je toetsenbord door een webshop. Je drukt op Tab om naar de volgende knop te gaan, maar die knop verdwijnt achter een sticky header. Of je focust op een link in de pagina, maar een cookiebanner bedekt precies dat element. Je weet dat de focus ergens is, maar je kunt niet zien waar.

**WCAG succescriterium 2.4.11** (Focus Not Obscured - Minimum) eist dat wanneer een element toetsenbordfocus krijgt, het niet volledig bedekt wordt door andere content die door de auteur is gemaakt.

## Nieuw in WCAG 2.2

Dit criterium is toegevoegd in WCAG 2.2 (oktober 2023) en is niveau AA. Het bestond niet in eerdere versies van WCAG. De reden voor de toevoeging: moderne websites gebruiken steeds meer overlappende elementen (sticky headers, cookiebanners, chatwidgets) die de focus kunnen bedekken.

Er is ook een strengere variant: SC 2.4.12 (niveau AAA) eist dat het gefocuste element **helemaal niet** bedekt wordt -- ook niet gedeeltelijk.

## Wat wordt er verwacht?

Als een element toetsenbordfocus krijgt, mag het **niet volledig verborgen** zijn achter andere content. Een deel van het element moet zichtbaar zijn, zodat de gebruiker kan zien waar de focus zich bevindt.

Let op: **gedeeltelijk bedekt** is bij niveau AA nog toegestaan. Maar **volledig bedekt** is een fout.

## De grootste boosdoeners

### Sticky headers en footers

Een vaste navigatiebalk bovenaan de pagina is handig, maar als je met Tab door de pagina navigeert, kunnen links en knoppen achter die balk verdwijnen. Hetzelfde geldt voor sticky footers.

**De oplossing:** gebruik `scroll-padding-top` in CSS om ruimte te reserveren:

```css
html {
  scroll-padding-top: 80px; /* hoogte van je sticky header */
  scroll-padding-bottom: 60px; /* hoogte van je sticky footer */
}
```

### Cookiebanners en consent-popups

Een cookiebanner die de onderkant van het scherm bedekt, kan focusbare elementen eronder verbergen. De gebruiker tabt naar een link, maar ziet alleen de cookiebanner.

**De oplossing:** zorg dat de cookiebanner de focus "vangt" (focus trap) totdat de gebruiker een keuze maakt. Of positioneer de banner zo dat hij geen content overlapt.

### Chatwidgets

De "Kunnen we je helpen?"-bubbel rechtsonder bedekt regelmatig knoppen of links die eronder liggen.

**De oplossing:** geef de chatwidget een vaste positie die geen interactieve elementen overlapt, of maak de widget inklapbaar.

### Modals en overlays

Als een modal opent maar de focus niet correct wordt beheerd, kan de gebruiker met Tab naar elementen achter de modal navigeren die volledig bedekt zijn.

**De oplossing:** gebruik een focus trap in je modal, zodat de focus binnen de modal blijft zolang die open is.

## Hoe test je dit?

1. Open je website in een browser
2. Navigeer met **Tab** door de hele pagina
3. Let specifiek op momenten waarop het gefocuste element achter een sticky header, footer, banner of overlay verdwijnt
4. Scroll door de pagina terwijl je tabt -- de combinatie van scrollen en focussen is waar de meeste problemen optreden
5. Test ook met geopende cookiebanners en chatwidgets

**Tip:** gebruik de CSS-outline of border op `:focus` om de focuspositie beter zichtbaar te maken tijdens het testen:

```css
*:focus {
  outline: 3px solid red !important;
}
```

## Veelgemaakte fouten

- Sticky headers die gefocuste elementen bedekken als je door de pagina tabt
- Cookiebanners die niet als focus trap werken en content eronder verbergen
- Chatwidgets die over interactieve elementen heen liggen
- Dropdown-menu's die achter andere elementen verdwijnen als ze openen
- Modals zonder focus trap, waardoor de gebruiker naar onzichtbare elementen kan tabben

## Wat kun je als webredacteur of manager doen?

- **Test je site met alleen het toetsenbord** (Tab en Shift-Tab): verdwijnt de focus ergens achter een ander element?
- **Controleer sticky elementen**: bedekken je header, footer of banners focusbare content?
- **Vraag je webbouwer**: is `scroll-padding` ingesteld voor sticky elementen? Werken modals met een focus trap?
- **Test met de cookiebanner open**: kun je door de pagina navigeren zonder dat elementen verborgen worden?

Dit criterium draait om een simpel principe: als je ergens naartoe navigeert, moet je kunnen zien waar je bent. Sticky elementen en overlays mogen de focus nooit volledig verbergen.

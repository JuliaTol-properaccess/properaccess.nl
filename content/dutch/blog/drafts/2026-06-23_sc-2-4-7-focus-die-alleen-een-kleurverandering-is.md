---
draft: true
title: "Focus die alleen een kleurverandering is"
date: 2026-06-23
slug: "sc-2-4-7-focus-die-alleen-een-kleurverandering-is"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "focus"
description: "Focus die alleen een kleurverandering is — WCAG 2.4.7 Focus zichtbaar (post 7/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - focus die alleen een kleurverandering is
image: "/images/blog/linkedin-series/sc-2-4-7-focus-die-alleen-een-kleurverandering-is.png"
---

Een link. Bij focus wordt de tekst blauw. Dat is de focusindicator. Geen outline. Geen onderstreping. Geen achtergrondverandering. Alleen: de tekst verandert van kleur.

Voor iemand met kleurenblindheid verandert er niets. De link zag er al hetzelfde uit als nu.

```css
/* Niet doen: alleen kleurverandering */
a:focus-visible {
  outline: none;
  color: blue;
}

/* Wel doen: kleur + vormverandering */
a:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
  color: #0066CC;
}
```

**De regel:** een focusindicator moet een vormverandering bevatten. Een outline, een border, een achtergrondkleur, een onderstreping. Iets dat ook in grijstinten zichtbaar is.

Kleurverandering mag erbij. Maar niet als enige indicator.

**De test:** zet je scherm op grijstinten. Tab door je pagina. Kun je bij elk element zien dat het focus heeft?

Dit was post 7 van 7 over WCAG 2.4.7 Focus zichtbaar. De kern: de focusindicator is de cursor voor toetsenbordgebruikers. Verwijder die niet. Verberg die niet. Maak die niet onzichtbaar. En als je de standaard vervangt — zorg dat je alternatief minstens even goed werkt.

Eén globale `:focus-visible` regel in je CSS. Dat is alles wat je nodig hebt om te beginnen.

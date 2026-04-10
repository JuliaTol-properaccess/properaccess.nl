---
title: "Links die alleen door kleur herkenbaar zijn"
date: 2026-03-23
slug: "sc-1-4-1-links-die-alleen-door-kleur-herkenbaar-zijn"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Links die alleen door kleur herkenbaar zijn — WCAG 1.4.1 Gebruik van kleur (post 1/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - links die alleen door kleur herkenbaar zijn
image: "/images/blog/linkedin-series/sc-1-4-1-links-die-alleen-door-kleur-herkenbaar-zijn.png"
---

Een alinea tekst. Ergens staat een link. Blauw. Geen onderstreping.

Jij ziet het verschil. 300 miljoen mensen met kleurenblindheid niet.

Voor iemand met deuteranopie (de meest voorkomende vorm van kleurenblindheid) kan blauw en zwart er bijna identiek uitzien. De link verdwijnt in de tekst. Onzichtbaar. Onklikbaar. Want je weet niet dat die er is.

```css
/* Niet doen: alleen kleur */
a { color: #2056A5; text-decoration: none; }

/* Wel doen: kleur + onderstreping */
a { color: #2056A5; text-decoration: underline; }

/* Of: kleur + vetgedrukt + border-bottom */
a {
  color: #2056A5;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid currentColor;
}
```

**De regel:** kleur mag niet het enige middel zijn om informatie over te brengen. Er moet altijd een tweede visueel kenmerk zijn.

**De simpelste oplossing:** onderstreep je links. Dat is niet ouderwets. Het is duidelijk. Iedereen begrijpt dat onderstreepte tekst klikbaar is.

**De test:** bekijk je pagina in grijstinten. Kun je nog zien welke tekst een link is?

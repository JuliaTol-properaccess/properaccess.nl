---
title: "Informatief icoon dat onzichtbaar is"
date: 2026-03-26
slug: "sc-1-4-11-informatief-icoon-dat-onzichtbaar-is"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Informatief icoon dat onzichtbaar is — WCAG 1.4.11 Contrast van niet-tekstuele content (post 1/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - informatief icoon dat onzichtbaar is
image: "/images/blog/linkedin-series/sc-1-4-11-informatief-icoon-dat-onzichtbaar-is.png"
---

Drie streepjes. Een hamburgericoon. Dat is je menu.

Tenminste, als je het kunt zien.

Lichtgrijs (#BBBBBB) op wit. Contrast: 2,3:1. Vereist: 3:1.

Dit is geen tekstcontrast — dit gaat over niet-tekstuele elementen. Iconen, randen, indicatoren. Alles wat informatie geeft zonder tekst te zijn.

Een hamburgericoon dat je niet kunt onderscheiden van de achtergrond = een menu dat je niet kunt vinden. En het hamburgericoon is niet de enige. Denk aan:

- Pijltjes die een dropdown aangeven
- Een vergrootglas voor zoeken
- Een kruisje om een melding te sluiten
- Een driehoek voor een waarschuwing
- Een vinkje voor succes

Als die iconen de enige manier zijn om de functie te herkennen, moeten ze 3:1 contrast hebben.

**De fix:**

```html
<!-- Niet doen: contrast 2,3:1 -->
<svg fill="#BBBBBB">...</svg>

<!-- Wel doen: contrast 4,6:1 -->
<svg fill="#767676">...</svg>
```

**De uitzondering:** staat er tekst naast het icoon? Dan hoeft het icoon niet apart te voldoen. Een zoekknop met een vergrootglas EN het woord "Zoeken"? Het icoon is decoratief. De tekst draagt de informatie.

Maar een zoekknop met alleen een vergrootglas? Dan is dat icoon de enige indicator. En dan moet het contrast kloppen.

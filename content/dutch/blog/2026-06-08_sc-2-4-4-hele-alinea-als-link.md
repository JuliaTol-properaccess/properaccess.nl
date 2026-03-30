---
title: "Hele alinea als link"
date: 2026-06-08
slug: "sc-2-4-4-hele-alinea-als-link"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Hele alinea als link — WCAG 2.4.4 Linkdoel (in context) (post 6/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - hele alinea als link
image: "/images/blog/linkedin-series/sc-2-4-4-hele-alinea-als-link.png"
---

"Link. Deze prachtige winterjas is gemaakt van gerecycled materiaal en houdt je warm tot min 20 graden. Verkrijgbaar in drie kleuren. Nu met 20 procent korting."

Dat is wat een schermlezer voorleest. De hele alinea. Als één link.

Waarom? Omdat iemand het hele tekstblok in een `<a>`-tag heeft gewikkeld.

```html
<!-- Niet doen: hele alinea is een link -->
<a href="/product/jas">
  <p>Deze prachtige winterjas is gemaakt van gerecycled
  materiaal en houdt je warm tot -20 graden. Verkrijgbaar
  in drie kleuren. Nu met 20% korting.</p>
</a>

<!-- Wel doen: alleen de relevante tekst -->
<p>Deze prachtige
  <a href="/product/jas">winterjas van gerecycled materiaal</a>
  houdt je warm tot -20 graden. Verkrijgbaar in drie kleuren.
  Nu met 20% korting.</p>
```

Een link moet beschrijven waar je naartoe gaat. Niet het hele verhaal vertellen.

**Waar ik dit tegenkom:** productkaarten, nieuwsoverzichten, bloglijsten. De hele kaart is klikbaar gemaakt door alles in een link te wikkelen. Visueel handig. Voor schermlezers een monoloog.

**Alternatief voor klikbare kaarten:** maak alleen de titel een link en gebruik CSS of JavaScript om de hele kaart klikbaar te maken zonder de HTML te veranderen.

---
draft: true
title: "Heading in een button: onzichtbaar voor schermlezers"
date: 2026-06-25
slug: "sc-4-1-2-heading-in-een-button-onzichtbaar-voor-schermlezers"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Heading in een button: onzichtbaar voor schermlezers — WCAG 4.1.2 Naam, rol, waarde (post 7/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - heading in een button: onzichtbaar voor schermlezers
image: "/images/blog/linkedin-series/sc-4-1-2-heading-in-een-button-onzichtbaar-voor-schermlezers.png"
---

Een kaart op je website. De titel is een `<h3>`. De hele kaart is klikbaar. Dus de developer wikkelt de `<h3>` in een `<button>`.

```html
<button>
  <h3>Bekijk details</h3>
</button>
```

Visueel: een klikbare kaart met een titel. Logisch.

Voor schermlezers: de heading is weg. Een `<button>` verwijdert de semantische rol van kindelementen. De `<h3>` is geen heading meer. Het is gewoon tekst in een knop.

Iemand die met een schermlezer van kop naar kop navigeert, slaat deze kaart over. De heading bestaat niet in de koppenstructuur.

```html
<!-- Niet doen: heading in een button -->
<button>
  <h3>Bekijk details</h3>
</button>

<!-- Wel doen: platte tekst in de button -->
<button>Bekijk details</button>

<!-- Of: heading buiten de button -->
<h3>Bekijk details</h3>
<button>Meer informatie</button>
```

**Hetzelfde geldt voor links in buttons:**

```html
<!-- Niet doen: link in een button is ongeldig HTML -->
<button>
  <a href="/details">Bekijk details</a>
</button>

<!-- Wel doen: kies één van de twee -->
<a href="/details">Bekijk details</a>
```

De regel: een button bevat platte tekst of decoratieve elementen. Geen headings, geen links, geen andere interactieve elementen.

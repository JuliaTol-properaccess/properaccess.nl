---
draft: true
title: "Afbeeldingsknop met afwijkende alt-tekst"
date: 2026-05-13
slug: "sc-2-5-3-afbeeldingsknop-met-afwijkende-alt-tekst"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: "Afbeeldingsknop met afwijkende alt-tekst — WCAG 2.5.3 Label in naam (post 4/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - afbeeldingsknop met afwijkende alt-tekst
image: "/images/blog/linkedin-series/sc-2-5-3-afbeeldingsknop-met-afwijkende-alt-tekst.png"
---

Een knop die een afbeelding is. Op de afbeelding staat "Inschrijven." De alt-tekst zegt: "Registreer voor de nieuwsbrief."

De gebruiker ziet "Inschrijven." Zegt: "Klik op Inschrijven." Geen match.

```html
<!-- Niet doen: alt wijkt af van zichtbare tekst -->
<input type="image" src="inschrijven-knop.png"
       alt="Registreer voor de nieuwsbrief">

<!-- Wel doen: alt komt overeen -->
<input type="image" src="inschrijven-knop.png"
       alt="Inschrijven">
```

Dit komt voor bij gestylde knoppen die als afbeelding zijn opgeslagen. De designer maakt een mooie knop in Photoshop, de developer plaatst die als image input, en schrijft een "beschrijvende" alt-tekst die niet overeenkomt met wat er op de afbeelding staat.

**Beter alternatief:** gebruik geen afbeeldingen als knoppen. Gebruik een echte `<button>` met CSS-styling. Dan is de tekst altijd de tekst — geen mismatch mogelijk.

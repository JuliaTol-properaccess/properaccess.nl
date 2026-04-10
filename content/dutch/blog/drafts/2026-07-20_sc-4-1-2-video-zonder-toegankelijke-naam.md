---
draft: true
title: "Video zonder toegankelijke naam"
date: 2026-07-20
slug: "sc-4-1-2-video-zonder-toegankelijke-naam"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Video zonder toegankelijke naam — WCAG 4.1.2 Naam, rol, waarde (post 11/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - video zonder toegankelijke naam
image: "/images/blog/linkedin-series/sc-4-1-2-video-zonder-toegankelijke-naam.png"
---

Een instructievideo op je pagina. Met het `controls`-attribuut: play, pauze, volume, fullscreen. Allemaal aanwezig.

Een schermlezer zegt: "Video." Welke video? Waarover? Geen idee.

```html
<!-- Niet doen: video zonder naam -->
<video controls src="instructie.mp4"></video>

<!-- Wel doen: aria-label -->
<video controls src="instructie.mp4"
       aria-label="Instructievideo: account aanmaken"></video>

<!-- Of: koppelen aan een zichtbare titel -->
<h2 id="video-titel">Instructievideo: account aanmaken</h2>
<video controls src="instructie.mp4"
       aria-labelledby="video-titel"></video>
```

**Waarom vergeten developers dit?**

Omdat het `<video>`-element visueel voor zich spreekt. Je ziet de thumbnail. Je ziet de context op de pagina. Maar een schermlezer ziet alleen: "Video."

**Dit geldt ook voor `<audio>`:**

```html
<audio controls src="podcast.mp3"
       aria-label="Podcast aflevering 12: toegankelijkheid in de praktijk">
</audio>
```

Eén attribuut. Tien seconden werk. Het verschil tussen "Video" en "Instructievideo: account aanmaken."

---
title: "Custom videospeler met onbereikbare knoppen"
date: 2026-07-02
slug: "sc-2-1-1-custom-videospeler-met-onbereikbare-knoppen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Custom videospeler met onbereikbare knoppen — WCAG 2.1.1 Toetsenbord (post 8/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - custom videospeler met onbereikbare knoppen
image: "/images/blog/linkedin-series/sc-2-1-1-custom-videospeler-met-onbereikbare-knoppen.png"
---

Een video op je website. Eigen vormgeving. Play-knop, volume, voortgangsbalk, fullscreen.

Alles divs. Alles onclick. Niets focusbaar.

Met een muis: prima. Met een toetsenbord: je kunt de video niet starten, niet pauzeren, het volume niet aanpassen en niet op fullscreen zetten.

Dit is een probleem dat ik bij bijna elke custom videospeler tegenkom. De standaard HTML5-videospeler is volledig toetsenbordtoegankelijk. Maar zodra een designer die vervangt door een eigen ontwerp, verdwijnt die toegankelijkheid.

```html
<!-- Niet doen: divs als knoppen -->
<div class="play" onclick="speel()">&#9654;</div>
<div class="volume" onclick="volume()">&#128266;</div>

<!-- Wel doen: echte knoppen met labels -->
<button aria-label="Afspelen" onclick="speel()">&#9654;</button>
<button aria-label="Volume aanpassen" onclick="volume()">&#128266;</button>
```

**Maar dat is pas het begin.** Een toegankelijke videospeler heeft ook:
- Pijltjestoetsen voor volume en voortgang
- Spatie om te pauzeren en af te spelen
- F voor fullscreen
- M voor mute
- Escape om fullscreen te verlaten

**Het eerlijke advies:** gebruik een bestaande toegankelijke videospeler. Plyr, Video.js met het accessibility-plugin, of gewoon de native HTML5 `<video>` met `controls`. Het wiel opnieuw uitvinden is hier bijna altijd een slecht idee.

```html
<!-- De simpelste oplossing -->
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

Dat `controls`-attribuut geeft je een volledig toegankelijke speler. Gratis.

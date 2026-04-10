---
draft: true
title: "Carrousel die alleen met klikken werkt"
date: 2026-06-05
slug: "sc-2-1-1-carrousel-die-alleen-met-klikken-werkt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Carrousel die alleen met klikken werkt — WCAG 2.1.1 Toetsenbord (post 6/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - carrousel die alleen met klikken werkt
image: "/images/blog/linkedin-series/sc-2-1-1-carrousel-die-alleen-met-klikken-werkt.png"
---

Pijltje links. Pijltje rechts. Klikken om door de slides te bladeren.

Maar die pijltjes zijn geen knoppen. Het zijn divs. Met een onclick. Niet focusbaar. Niet activeerbaar met Enter.

Met een toetsenbord kun je niet door de carrousel navigeren. De slides wisselen alleen als je klikt.

```html
<!-- Niet doen: divs als pijltjes -->
<div class="pijl-links" onclick="vorigeSlide()">&#8249;</div>
<div class="pijl-rechts" onclick="volgendeSlide()">&#8250;</div>

<!-- Wel doen: echte knoppen -->
<button aria-label="Vorige slide">&#8249;</button>
<button aria-label="Volgende slide">&#8250;</button>
```

Twee veranderingen. Van `<div>` naar `<button>`. En een `aria-label` omdat de pijltjeskarakters niet beschrijvend zijn voor schermlezers.

**Maar er is meer.** Een goed toegankelijke carrousel:
- Heeft focusbare navigatieknoppen
- Laat je met pijltjestoetsen door de slides navigeren
- Pauzeert automatisch afspelen als het focus krijgt
- Maakt links en knoppen in niet-actieve slides niet-focusbaar
- Kondigt de huidige slide aan voor schermlezers

Dat is veel. Daarom de eerlijke vraag: heb je die carrousel echt nodig? Onderzoek na onderzoek laat zien dat bezoekers zelden voorbij de eerste slide komen. Een statische hero met je belangrijkste boodschap werkt vaak beter.

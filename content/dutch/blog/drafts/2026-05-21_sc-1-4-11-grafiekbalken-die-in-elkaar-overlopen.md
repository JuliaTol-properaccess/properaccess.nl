---
draft: true
title: "Grafiekbalken die in elkaar overlopen"
date: 2026-05-21
slug: "sc-1-4-11-grafiekbalken-die-in-elkaar-overlopen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Grafiekbalken die in elkaar overlopen — WCAG 1.4.11 Contrast van niet-tekstuele content (post 5/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - grafiekbalken die in elkaar overlopen
image: "/images/blog/linkedin-series/sc-1-4-11-grafiekbalken-die-in-elkaar-overlopen.png"
---

Een staafgrafiek. Twee categorien. Lichtblauw (#90CAF9) en lichtgroen (#A5D6A7). Naast elkaar.

Contrast onderling: 1,3:1. Op een witte achtergrond contrasteert de lichtblauwe balk met 2,1:1 en de lichtgroene met 1,8:1.

Drie problemen tegelijk:
1. De balken contrasteren niet genoeg met de achtergrond
2. De balken contrasteren niet genoeg met elkaar
3. Iemand met kleurenblindheid ziet twee bijna identieke balken

En dit gaat niet alleen om staafdiagrammen. Lijngrafieken met dunne, lichtgekleurde lijnen. Taartdiagrammen met pasteltinten die in elkaar overlopen. Kaarten met gebieden die nauwelijks te onderscheiden zijn.

**De fix: donkerdere kleuren + extra visuele aanwijzingen.**

```html
<!-- Niet doen: pasteltinten, contrast onderling 1,3:1 -->
<div class="staaf" style="background: #90CAF9;"></div>
<div class="staaf" style="background: #A5D6A7;"></div>

<!-- Wel doen: donkere kleuren + randen -->
<div class="staaf" style="background: #1565C0;"></div>
<div class="staaf" style="background: #2E7D32;"></div>
```

**Bonustips voor grafieken:**
- Voeg patronen toe naast kleuren (strepen, stippen, arcering)
- Gebruik labels direct bij de datapunten, niet alleen in een legenda
- Bied een tabel aan als tekstueel alternatief
- Test je grafiek met een kleurenblindheidsimulator

Een grafiek die alleen met kleur werkt, werkt niet voor iedereen.

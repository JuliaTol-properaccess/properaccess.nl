---
title: "Kolommen waarvan de inhoud door elkaar loopt"
date: 2026-04-05
slug: "sc-1-3-2-kolommen-waarvan-de-inhoud-door-elkaar-loopt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Kolommen waarvan de inhoud door elkaar loopt — WCAG 1.3.2 Betekenisvolle volgorde (post 2/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - kolommen waarvan de inhoud door elkaar loopt
image: "/images/blog/linkedin-series/sc-1-3-2-kolommen-waarvan-de-inhoud-door-elkaar-loopt.png"
---

Twee projecten naast elkaar. Links een afbeelding, rechts een afbeelding. Daaronder links een beschrijving, rechts een beschrijving.

Visueel: helder. Afbeelding hoort bij de beschrijving eronder.

In de HTML: eerst alle afbeeldingen, dan alle beschrijvingen. Een schermlezer leest: "Screenshot Project A. Screenshot Project B. Project A is een webapplicatie. Project B is een designsysteem."

Project B wordt beschreven terwijl de gebruiker nog denkt dat het over Project A gaat.

**Het probleem:** de HTML groepeert per rij (alle afbeeldingen, alle teksten), niet per kolom (afbeelding + tekst bij elkaar).

**De fix:** groepeer per item.

```html
<!-- Niet doen: alles los -->
<div class="kolommen">
  <img src="project-a.jpg" alt="Screenshot van Project A">
  <img src="project-b.jpg" alt="Screenshot van Project B">
  <p>Project A is een webapplicatie.</p>
  <p>Project B is een designsysteem.</p>
</div>

<!-- Wel doen: bij elkaar wat bij elkaar hoort -->
<div class="kolommen">
  <div class="kolom">
    <img src="project-a.jpg" alt="Screenshot van Project A">
    <p>Project A is een webapplicatie.</p>
  </div>
  <div class="kolom">
    <img src="project-b.jpg" alt="Screenshot van Project B">
    <p>Project B is een designsysteem.</p>
  </div>
</div>
```

Dit speelt niet alleen bij projectoverzichten. Denk aan productkaarten, teamleden, testimonials — elke keer dat je meerdere items naast elkaar toont.

**De vuistregel:** als je CSS uitzet en de content onder elkaar valt, hoort het dan nog steeds bij elkaar? Zo niet: pas de HTML aan.

---
draft: true
title: "Carrousel-knoppen voor de content"
date: 2026-05-17
slug: "sc-1-3-2-carrousel-knoppen-voor-de-content"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Carrousel-knoppen voor de content — WCAG 1.3.2 Betekenisvolle volgorde (post 5/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - carrousel-knoppen voor de content
image: "/images/blog/linkedin-series/sc-1-3-2-carrousel-knoppen-voor-de-content.png"
---

"Vorige. Volgende."

Dat is het eerste wat een schermlezergebruiker hoort bij je carrousel. Vorige en volgende. Maar vorige en volgende van wat?

Geen idee. Want de content van de slides komt pas daarna in de HTML.

Dit is een veelgemaakte fout bij carrousels, sliders en image galleries. De navigatieknoppen staan boven de slides in de code. Visueel zijn ze met CSS naast of onder de slides gepositioneerd. Maar de schermlezer volgt de HTML.

Het resultaat: je hoort eerst de bediening, en pas daarna begrijp je wat je aan het bedienen bent.

**De fix: content eerst, knoppen daarna.**

```html
<!-- Niet doen: knoppen voor de content -->
<div class="carrousel">
  <button>Vorige</button>
  <button>Volgende</button>
  <div class="slide">Onze diensten</div>
</div>

<!-- Wel doen: content eerst -->
<div class="carrousel">
  <div class="slide">Onze diensten</div>
  <button>Vorige</button>
  <button>Volgende</button>
</div>
```

Visueel kun je de knoppen met CSS positioneren waar je wilt — links en rechts van de slide, eronder, overlay. Maar in de code komt de content eerst.

**Dit geldt ook voor:** tabs met navigatie boven de content (dat is hier prima, want de tabs zijn labels), maar let op bij custom implementations waar de tabpanelen ver van de tabknoppen staan in de HTML.

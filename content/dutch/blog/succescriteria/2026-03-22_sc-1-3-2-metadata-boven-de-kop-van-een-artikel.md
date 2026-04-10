---
title: "Metadata boven de kop van een artikel"
date: 2026-03-22
slug: "sc-1-3-2-metadata-boven-de-kop-van-een-artikel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Metadata boven de kop van een artikel — WCAG 1.3.2 Betekenisvolle volgorde (post 1/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - metadata boven de kop van een artikel
image: "/images/blog/linkedin-series/sc-1-3-2-metadata-boven-de-kop-van-een-artikel.png"
---

"15 maart 2026. Workshops."

Dat hoort een schermlezergebruiker. En dan: stilte. Want het volgende element is de kop van het artikel eronder.

Die datum en categorie stonden boven de kop in de HTML. Visueel geen probleem — CSS plaatst ze netjes onder de titel. Maar een schermlezer volgt de HTML, niet de CSS.

Het resultaat: de datum lijkt bij het vorige artikel te horen. En het volgende artikel begint zonder context.

Dit is een van de meest voorkomende volgordefouten die ik tegenkom. Vooral bij blogs, nieuwsoverzichten en evenementenlijsten.

**De fix is simpel: kop eerst.**

```html
<!-- Niet doen: datum boven de kop -->
<article>
  <span class="datum">15 maart 2026</span>
  <span class="categorie">Workshops</span>
  <h3>Toegankelijkheid voor developers</h3>
</article>

<!-- Wel doen: kop eerst, dan metadata -->
<article>
  <h3>Toegankelijkheid voor developers</h3>
  <span class="datum">15 maart 2026</span>
  <span class="categorie">Workshops</span>
</article>
```

Visueel kun je met CSS de datum nog steeds boven de kop tonen. Maar in de code staat de kop eerst. Zo weet een schermlezergebruiker bij welk artikel de metadata hoort.

**Test:** schakel CSS uit in je browser (Firefox: View > Page Style > No Style). Staat de kop bovenaan in elk artikel?

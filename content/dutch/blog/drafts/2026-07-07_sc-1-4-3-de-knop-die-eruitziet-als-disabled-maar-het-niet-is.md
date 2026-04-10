---
draft: true
title: "De knop die eruitziet als disabled maar het niet is"
date: 2026-07-07
slug: "sc-1-4-3-de-knop-die-eruitziet-als-disabled-maar-het-niet-is"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "De knop die eruitziet als disabled maar het niet is — WCAG 1.4.3 Contrast (minimum) (post 9/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - de knop die eruitziet als disabled maar het niet is
image: "/images/blog/linkedin-series/sc-1-4-3-de-knop-die-eruitziet-als-disabled-maar-het-niet-is.png"
---

Een grijze knop. Lichte tekst. Ziet eruit als uitgeschakeld.

Maar klik erop. Hij doet iets. Hij is niet disabled. Hij ziet er alleen zo uit.

Dit is een veelgemaakte fout: een knop visueel grijs maken om aan te geven dat die "minder belangrijk" is, zonder het `disabled`-attribuut in de HTML te zetten.

Waarom dat uitmaakt: uitgeschakelde elementen zijn uitgezonderd van de contrasteis. Maar dan moet het element ook echt disabled zijn in de code. Alleen grijs stylen telt niet.

```html
<!-- Fout: ziet er disabled uit, maar is actief -->
<button style="color: #CCCCCC; background: #F0F0F0;">
  Versturen
</button>
<!-- Contrast 1,43:1 — en geen uitzondering want niet disabled -->

<!-- Goed: echt disabled, uitzondering geldt -->
<button disabled style="color: #CCCCCC; background: #F0F0F0;">
  Versturen
</button>

<!-- Of: actief met voldoende contrast -->
<button style="color: #595959; background: #F0F0F0;">
  Versturen
</button>
<!-- Contrast 4,86:1 -->
```

**Waar ik dit vaak tegenkom:**

- Secundaire knoppen die "minder opvallen" dan de primaire CTA
- Formulieren waar de verzendknop pas actief wordt na het invullen van alle velden — maar de knop is niet echt disabled
- "Ghost buttons" met lichtgrijze tekst en rand

**De regel:** als je erop kunt klikken, moet het leesbaar zijn. Punt.

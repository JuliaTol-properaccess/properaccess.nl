---
draft: true
title: "Sitenaam vóór de paginanaam"
date: 2026-05-09
slug: "sc-2-4-2-sitenaam-voor-de-paginanaam"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Sitenaam vóór de paginanaam — WCAG 2.4.2 Paginatitel (post 4/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - sitenaam vóór de paginanaam
image: "/images/blog/linkedin-series/sc-2-4-2-sitenaam-voor-de-paginanaam.png"
---

Drie tabbladen open:

"Gemeente Utrecht - Paspoort aa..."
"Gemeente Utrecht - Rijbewijs ve..."
"Gemeente Utrecht - Verhuizing d..."

Welke is welke? De unieke informatie staat achter de sitenaam. En die is afgekapt.

In een tabblad is vaak alleen de eerste 20-30 tekens zichtbaar. Als elk tabblad begint met dezelfde sitenaam, ziet je bij alle drie hetzelfde.

**De fix:** draai de volgorde om.

```html
<!-- Niet doen -->
<title>Gemeente Utrecht - Paspoort aanvragen</title>
<title>Gemeente Utrecht - Rijbewijs verlengen</title>

<!-- Wel doen -->
<title>Paspoort aanvragen - Gemeente Utrecht</title>
<title>Rijbewijs verlengen - Gemeente Utrecht</title>
```

Nu begint elk tabblad met de unieke informatie:

"Paspoort aanvragen - Gemee..."
"Rijbewijs verlengen - Geme..."
"Verhuizing doorgeven - Gem..."

Direct te onderscheiden. Zonder te klikken.

**Dit geldt ook voor schermlezers.** Die lezen de titel van links naar rechts. "Gemeente Utrecht" voor de derde keer horen is geen oriëntatie — het is ruis. "Paspoort aanvragen" is de informatie die je nodig hebt.

**De formule:** `[Specifiek] - [Algemeen]`

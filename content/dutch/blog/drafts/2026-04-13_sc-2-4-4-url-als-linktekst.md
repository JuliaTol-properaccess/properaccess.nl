---
draft: true
title: "URL als linktekst"
date: 2026-04-13
slug: "sc-2-4-4-url-als-linktekst"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "URL als linktekst — WCAG 2.4.4 Linkdoel (in context) (post 2/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - url als linktekst
image: "/images/blog/linkedin-series/sc-2-4-4-url-als-linktekst.png"
---

"h-t-t-p-s colon slash slash w-w-w dot example dot com slash rapport dash twee-duizend-vierentwintig dot p-d-f"

Dat is wat een schermlezer voorleest als je een kale URL als linktekst gebruikt. Karakter voor karakter. Of als een onbegrijpelijke woordenbrij.

```html
<!-- Niet doen -->
<a href="https://www.example.com/rapport-2024.pdf">
  https://www.example.com/rapport-2024.pdf
</a>

<!-- Wel doen -->
<a href="https://www.example.com/rapport-2024.pdf">
  Jaarrapport 2024 (PDF, 2,3 MB)
</a>
```

**Waarom doen mensen dit?**

Vaak uit gemakzucht. Copy-paste van de URL. Of het CMS vult de linktekst automatisch met de URL. Of iemand denkt dat de URL "transparant" is — je ziet waar je naartoe gaat.

Maar een URL is geen beschrijving. "/rapport-2024.pdf" zegt iets. "/doc/r24-final-v3-NL.pdf" zegt niets.

**De bonus:** vermeld het bestandstype en de grootte bij downloads. Je bezoeker verwacht een webpagina. Een PDF die ineens opent is verwarrend.

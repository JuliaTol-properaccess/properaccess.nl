---
title: "Focus springt onverwacht door de pagina"
date: 2026-03-29
slug: "sc-2-4-3-focus-springt-onverwacht-door-de-pagina"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Focus springt onverwacht door de pagina — WCAG 2.4.3 Focusvolgorde (post 1/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - focus springt onverwacht door de pagina
image: "/images/blog/linkedin-series/sc-2-4-3-focus-springt-onverwacht-door-de-pagina.png"
---

Tab. Je bent in het hoofdmenu. Tab. Je bent in de sidebar. Tab. Je bent terug in het hoofdmenu. Tab. Nu ben je in de content.

Wat?

De focus springt heen en weer als een bal in een flipperkast. De visuele volgorde zegt: menu, content, sidebar. De focusvolgorde zegt: menu, sidebar, content. Want zo staat het in de HTML.

CSS heeft de sidebar visueel naar rechts geplaatst. Maar de focus volgt de HTML. Niet de CSS.

Dit speelt bij elke layout waar CSS de visuele volgorde verandert:
- `order` in Flexbox
- `grid-column` en `grid-row` in CSS Grid
- `flex-direction: row-reverse`
- `position: absolute` of `fixed`

**De fix:** pas de HTML-volgorde aan zodat die overeenkomt met de visuele layout.

**De test:** tab door je pagina. Volgt de focus de visuele volgorde — van links naar rechts, van boven naar beneden? Test ook op smalle schermen: responsive layouts veranderen de visuele volgorde, maar de HTML-volgorde blijft gelijk.

Het hoeft niet pixel-perfect overeen te komen. Maar het mag niet verwarrend zijn. Als je niet kunt voorspellen waar de focus naartoe gaat, is het een probleem.

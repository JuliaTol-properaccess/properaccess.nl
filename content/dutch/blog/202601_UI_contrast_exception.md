---
title: "Native HTML-componenten en kleurcontrast volgens WCAG 2.1"
date: 2026-01-31
slug: "contrast-ui-wcag"
categories:
  - "webdeveloper"
tags:
  - "1-4-11"
description: "Wat is een accessible name en waarom is dit cruciaal voor digitale toegankelijkheid? Praktische uitleg voor developers volgens WCAG."
keywords:
  - WCAG SC 1.4.11
  - contrast WCAG
  - digitale toegankelijkheid developers
---

## Native HTML-componenten en kleurcontrast volgens WCAG 2.1

Informatieve en interactieve interface-elementen zoals knoppen, selectievakken en schuifregelaars moeten voldoende contrast hebben zodat ze zichtbaar zijn voor alle bezoekers. In de praktijk roept dit vaak vragen op bij audits en code-reviews: moet ik het kleurcontrast van elk zichtbaar UI-element controleren en verbeteren?

Het korte antwoord is: nee, niet altijd.

De contrasteis geldt niet voor grafische elementen die volledig door de user agent worden geleverd, mits ze niet zijn aangepast door de auteur.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KwMQQjz" data-pen-title="1.4.11 exceptions" data-user="Julia-Tol-wcag" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/Julia-Tol-wcag/pen/KwMQQjz">
  1.4.11 exceptions</a> by Julia Tol (<a href="https://codepen.io/Julia-Tol-wcag">@Julia-Tol-wcag</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
  <script async src="https://public.codepenassets.com/embed/index.js"></script>

Voorbeelden waarbij contrast verplicht is:

- Een checkbox gebouwd met `<div>` en CSS
- Een `<select>` waarbij de pijl is vervangen door een SVG
- Een slider waarvan de thumb en track custom zijn gestyled
- Eigen focus-indicator

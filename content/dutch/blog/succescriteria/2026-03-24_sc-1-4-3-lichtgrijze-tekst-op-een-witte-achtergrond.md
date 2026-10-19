---
title: "Lichtgrijze tekst op een witte achtergrond"
date: 2026-03-24
slug: "sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Lichtgrijze tekst op een witte achtergrond: WCAG 1.4.3 Contrast (minimum) (post 1/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - lichtgrijze tekst op een witte achtergrond
image: "/images/blog/linkedin-series/sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond.webp"
---

Contrastverhouding: 2,85:1. Vereist: 4,5:1.

Laag contrast is een van de meest voorkomende toegankelijkheidsproblemen op het web. In de [WebAIM Million 2025](https://webaim.org/projects/million/2025) werd laag-contrasttekst gevonden op 79,1% van de onderzochte homepages. En ik snap waarom lichtgrijze tekst populair is. Het ziet er strak uit. Rustig. Modern.

Maar voor iemand met verminderd gezichtsvermogen is het alsof je door matglas probeert te lezen. Visuele beperkingen komen vaker voor naarmate mensen ouder worden, vooral bij 75-plussers, blijkt uit [cijfers van VZinfo](https://www.vzinfo.nl/beperkingen-horen-zien-mobiliteit-adl/leeftijd-en-geslacht). Maar ook bij een scherm in de zon, een goedkope monitor of gewoon een drukke dag kan die grijze tekst het verschil maken tussen lezen en opgeven.

**De fix:**

Eén kleur donkerder. Van #999999 naar #767676. Verschil in design? Minimaal. Verschil in leesbaarheid? Enorm.

```css
/* Niet doen: contrast 2,85:1 */
.subtekst { color: #999999; }

/* Wel doen: contrast 4,54:1 */
.subtekst { color: #767676; }
```

**De vuistregel:** voor normale tekst op een witte achtergrond haalt elke grijstint lichter dan #767676 de contrastverhouding van 4,5:1 niet. In de praktijk zien we vaak dat lichtgrijze tekst op wit een groot deel van de contrastproblemen veroorzaakt. Onthoud die ene kleurcode, maar controleer altijd de daadwerkelijke tekstgrootte en achtergrondkleur.

Let op: deze grenswaarde geldt voor normale tekst op een witte achtergrond. Voor grote tekst gelden andere contrastvereisten en op een andere achtergrond verandert de benodigde kleurwaarde. [WCAG 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) beschrijft de eisen voor minimaal contrast.

Pak je website erbij. Zoek op #999, #aaa, #bbb of #ccc in je stylesheet. Grote kans dat daar je contrastproblemen zitten.

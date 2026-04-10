---
title: "Placeholdertekst die niemand kan lezen"
date: 2026-04-07
slug: "sc-1-4-3-placeholdertekst-die-niemand-kan-lezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Placeholdertekst die niemand kan lezen — WCAG 1.4.3 Contrast (minimum) (post 2/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - placeholdertekst die niemand kan lezen
image: "/images/blog/linkedin-series/sc-1-4-3-placeholdertekst-die-niemand-kan-lezen.png"
---

"Voer hier je e-mailadres in"

Dat staat er. In het invoerveld. In #C0C0C0 op wit. Contrast: 1,6:1.

Je moet er bijna tegenaan plakken om het te lezen. En dit is niet de uitzondering — dit is de standaard browserstyling van placeholders.

Het wordt pas echt problematisch als je placeholder de enige plek is waar het invoerformaat staat. "DD-MM-JJJJ". Of "Bijv. 1234 AB". Als iemand dat niet kan lezen, vult diegene het verkeerd in. En krijgt een foutmelding. Die misschien ook slecht contrasteert. Maar dat is een andere post.

**De fix:**

```css
/* Niet doen — contrast 1,6:1 */
::placeholder { color: #C0C0C0; }

/* Wel doen — contrast 4,64:1 */
::placeholder { color: #767676; }
```

**Maar eigenlijk:** gebruik geen placeholder als je enige manier om informatie te tonen. Placeholders verdwijnen zodra je begint met typen. Zet het formaat in een hint-tekst onder het veld. Die blijft altijd zichtbaar.

En ja, #767676 ziet er "donkerder" uit dan je gewend bent bij placeholders. Dat is precies het punt. Wat je gewend bent, is te licht.

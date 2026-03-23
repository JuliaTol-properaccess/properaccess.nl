---
title: "Dark mode met nieuwe contrastproblemen"
date: 2026-06-02
slug: "sc-1-4-3-dark-mode-met-nieuwe-contrastproblemen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Dark mode met nieuwe contrastproblemen — WCAG 1.4.3 Contrast (minimum) (post 6/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - dark mode met nieuwe contrastproblemen
image: "/images/blog/linkedin-series/sc-1-4-3-dark-mode-met-nieuwe-contrastproblemen.png"
---

Je website heeft dark mode. Modern. Gebruiksvriendelijk. Populair.

En vol contrastproblemen die er in de lichte versie niet waren.

Het gaat snel mis. Die donkergrijze tekst (#666666) die op wit prima leesbaar was? Op een donkere achtergrond (#1A1A1A) heeft die een contrast van 2,16:1. Onvoldoende.

En het werkt ook andersom: felle accentkleuren die op een lichte achtergrond netjes contrasteerden, kunnen op een donkere achtergrond ineens te weinig contrast hebben. Of juist verblinden.

**De valkuil:** veel websites bouwen dark mode door kleuren om te draaien. Wit wordt zwart, zwart wordt wit. Maar contrast is geen lineaire inversie. Je moet elke kleurcombinatie opnieuw testen.

```css
/* Fout: contrast 2,16:1 in dark mode */
.dark-mode { background: #1A1A1A; color: #666666; }

/* Goed: contrast 9,73:1 in dark mode */
.dark-mode { background: #1A1A1A; color: #D4D4D4; }
```

**Drie dingen om te checken:**

1. Test elke tekst-/achtergrondcombinatie apart in dark mode
2. Controleer of accentkleuren (links, knoppen, badges) nog voldoende contrasteren
3. Vergeet placeholders en subtekst niet — juist die worden vaak over het hoofd gezien

Dark mode is geen feature die je erbij doet. Het is een tweede kleurenpalet dat aan dezelfde eisen moet voldoen.

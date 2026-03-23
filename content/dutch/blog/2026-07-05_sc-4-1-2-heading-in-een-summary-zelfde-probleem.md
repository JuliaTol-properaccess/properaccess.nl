---
title: "Heading in een summary: zelfde probleem"
date: 2026-07-05
slug: "sc-4-1-2-heading-in-een-summary-zelfde-probleem"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Heading in een summary: zelfde probleem — WCAG 4.1.2 Naam, rol, waarde (post 8/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - heading in een summary: zelfde probleem
image: "/images/blog/linkedin-series/sc-4-1-2-heading-in-een-summary-zelfde-probleem.png"
---

Net als bij een button: een `<summary>` heeft de impliciete rol van een button. En een button eet de rollen van zijn kinderen op.

```html
<!-- Niet doen: heading in summary verliest zijn rol -->
<details>
  <summary><h3>Veelgestelde vragen</h3></summary>
  <p>Hier staan de antwoorden.</p>
</details>

<!-- Wel doen: heading buiten summary -->
<h3>Veelgestelde vragen</h3>
<details>
  <summary>Hoe wijzig ik mijn wachtwoord?</summary>
  <p>Ga naar je profielpagina en klik op "Wachtwoord wijzigen".</p>
</details>
```

Ik zie dit bij bijna elke FAQ-pagina die met `<details>`/`<summary>` is gebouwd. De developer denkt: "De titel van de FAQ is een heading." Klopt. Maar niet binnenin de summary.

**De oplossing:** zet de heading boven het `<details>`-element. De `<summary>` bevat de vraag als platte tekst.

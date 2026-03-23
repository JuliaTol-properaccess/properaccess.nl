---
title: "De drie regels van ARIA"
date: 2026-07-22
slug: "sc-4-1-2-de-drie-regels-van-aria"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "De drie regels van ARIA — WCAG 4.1.2 Naam, rol, waarde (post 12/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - de drie regels van aria
image: "/images/blog/linkedin-series/sc-4-1-2-de-drie-regels-van-aria.png"
---

Er zijn drie ongeschreven regels over ARIA. Ze komen van de mensen die het hebben bedacht:

1. **Gebruik ARIA niet als het niet hoeft.**
2. **Gebruik ARIA als het moet.**
3. **Je doet het waarschijnlijk fout.**

Klinkt cynisch. Maar het klopt.

**Regel 1:** standaard HTML-elementen hebben al de juiste naam, rol en waarde. Een `<button>` is een knop. Een `<a>` is een link. Een `<input type="checkbox">` is een selectievakje. Geen ARIA nodig.

**Regel 2:** soms heb je ARIA wél nodig. Voor statussen (`aria-expanded`, `aria-pressed`, `aria-checked`). Voor namen van icoon-knoppen (`aria-label`). Voor het koppelen van elementen (`aria-controls`, `aria-describedby`). Voor live-regio's (`aria-live`).

**Regel 3:** het gaat vaak mis. Typo's in attributen. Ongeldige waarden. Rollen op verkeerde elementen. Labels die niet overeenkomen met de zichtbare tekst. Onvolledige patronen.

**Mijn checklist bij elke audit:**

| Vraag | Wat te doen |
|---|---|
| Is er een standaard HTML-element? | Gebruik dat. Geen ARIA nodig. |
| Is er een status die verandert? | Voeg `aria-expanded`, `aria-pressed` of `aria-checked` toe. |
| Is er een element zonder zichtbare tekst? | Voeg `aria-label` toe. |
| Is er een relatie tussen elementen? | Gebruik `aria-controls`, `aria-describedby` of `aria-labelledby`. |
| Werkt het met een schermlezer? | Test het. Altijd testen. |

Dit was post 12 van 12 over WCAG 4.1.2 Naam, rol, waarde. De kern: elk interactief element vertelt drie dingen aan hulpsoftware. Wat het is (rol). Wat het doet (naam). In welke staat het is (waarde). Als een van die drie ontbreekt, mist je bezoeker informatie.

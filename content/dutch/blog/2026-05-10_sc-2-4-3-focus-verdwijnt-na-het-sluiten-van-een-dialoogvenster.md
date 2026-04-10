---
draft: true
title: "Focus verdwijnt na het sluiten van een dialoogvenster"
date: 2026-05-10
slug: "sc-2-4-3-focus-verdwijnt-na-het-sluiten-van-een-dialoogvenster"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Focus verdwijnt na het sluiten van een dialoogvenster — WCAG 2.4.3 Focusvolgorde (post 4/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - focus verdwijnt na het sluiten van een dialoogvenster
image: "/images/blog/linkedin-series/sc-2-4-3-focus-verdwijnt-na-het-sluiten-van-een-dialoogvenster.png"
---

Je klikt op "Verwijderen." Een bevestigingspopup verschijnt. "Weet je het zeker?" Je drukt op "Annuleren."

De popup sluit. Je drukt op Tab. Waar ben je?

Helemaal bovenaan de pagina. Bij het logo. Je was halverwege een tabel, je opende een popup, je sloot die, en nu moet je opnieuw door de hele pagina tabben om terug te komen waar je was.

Het probleem: na het sluiten van de popup keert de focus niet terug naar het element dat de popup opende. De focus gaat naar `<body>` — het begin van de pagina.

```javascript
// Niet doen: focus verdwijnt
function sluitDialog() {
  dialog.style.display = "none";
}

// Wel doen: focus terug naar de trigger
let triggerElement = null;

function openDialog(trigger) {
  triggerElement = trigger;
  dialog.style.display = "block";
  dialog.querySelector("button")?.focus();
}

function sluitDialog() {
  dialog.style.display = "none";
  triggerElement?.focus(); // Terug naar waar je was
}
```

**Het patroon is simpel:**
1. Bij openen: sla het trigger-element op
2. Bij sluiten: geef de focus terug aan dat element

**Test:** open een dialoogvenster, sluit het, druk op Tab. Ga je verder waar je was? Of begin je weer bovenaan?

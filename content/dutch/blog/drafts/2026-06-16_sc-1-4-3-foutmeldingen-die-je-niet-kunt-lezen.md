---
draft: true
title: "Foutmeldingen die je niet kunt lezen"
date: 2026-06-16
slug: "sc-1-4-3-foutmeldingen-die-je-niet-kunt-lezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Foutmeldingen die je niet kunt lezen — WCAG 1.4.3 Contrast (minimum) (post 7/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - foutmeldingen die je niet kunt lezen
image: "/images/blog/linkedin-series/sc-1-4-3-foutmeldingen-die-je-niet-kunt-lezen.png"
---

Je vult een formulier in. Iets klopt niet. Er verschijnt een melding.

In rood. Licht rood. Op een witte achtergrond.

"Vul een geldig e-mailadres in."

Tenminste, dat denk je dat er staat. Want het contrast is 2,1:1 en je twijfelt.

Foutmeldingen, succesmeldingen, waarschuwingen — ze worden bijna altijd in kleur weergegeven. Rood voor fout. Groen voor succes. Oranje voor waarschuwing.

Het probleem: lichtgroen (#90EE90) op wit heeft een contrast van 1,43:1. Dat is zelfs onder de 3:1 die je nodig zou hebben voor grote tekst.

**Gebruik donkerdere varianten:**

```css
/* Niet doen */
.fout { color: #FF6B6B; }      /* 2,74:1 op wit */
.succes { color: #90EE90; }    /* 1,43:1 op wit */
.waarschuwing { color: #FFB74D; } /* 1,92:1 op wit */

/* Wel doen */
.fout { color: #D32F2F; }      /* 5,66:1 op wit */
.succes { color: #2E7D32; }    /* 5,14:1 op wit */
.waarschuwing { color: #E65100; } /* 4,62:1 op wit */
```

**En:** gebruik niet alleen kleur. Voeg een icoon toe. Of zet de melding in een kader met een zichtbare rand. Iemand met kleurenblindheid kan het verschil tussen rood en groen niet zien — maar een uitroepteken vs. een vinkje wel.

De ironie: juist de tekst die je bezoeker het hardst nodig heeft, is vaak het slechtst leesbaar.

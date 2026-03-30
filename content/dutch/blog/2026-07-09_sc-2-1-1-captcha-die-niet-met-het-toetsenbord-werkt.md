---
title: "CAPTCHA die niet met het toetsenbord werkt"
date: 2026-07-09
slug: "sc-2-1-1-captcha-die-niet-met-het-toetsenbord-werkt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "CAPTCHA die niet met het toetsenbord werkt — WCAG 2.1.1 Toetsenbord (post 9/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - captcha die niet met het toetsenbord werkt
image: "/images/blog/linkedin-series/sc-2-1-1-captcha-die-niet-met-het-toetsenbord-werkt.png"
---

"Bewijs dat je geen robot bent."

Klik op alle afbeeldingen met een verkeerslicht. Sleep het puzzelstukje naar de juiste plek. Teken het patroon na.

Met een muis: irritant. Met een toetsenbord: onmogelijk.

Een CAPTCHA die alleen met een muis te bedienen is, blokkeert toetsenbordgebruikers bij het invullen van je formulier. Geen account aanmaken. Geen bestelling plaatsen. Geen contact opnemen.

En het gaat niet alleen om toetsenbordgebruikers. Screenreadergebruikers kunnen visuele puzzels niet oplossen. Mensen met een motorische beperking kunnen niet slepen. Mensen met een cognitieve beperking hebben moeite met complexe puzzels.

**Wat kun je doen?**

1. **Gebruik een onzichtbare CAPTCHA** (zoals reCAPTCHA v3). Die analyseert gedrag op de achtergrond en vraagt alleen bij twijfel om interactie.

2. **Bied een audio-alternatief.** De meeste CAPTCHA-diensten hebben die optie. Zet die aan.

3. **Gebruik honeypot-velden.** Een verborgen formulierveld dat menselijke bezoekers niet zien maar bots wel invullen. Geen interactie nodig.

4. **Overweeg of je een CAPTCHA nodig hebt.** Serverside rate limiting, form tokens en honeypots vangen het meeste spam af zonder je bezoekers te belasten.

De ironie: een CAPTCHA is bedoeld om bots buiten te houden. Maar het houdt ook mensen buiten.

Dit was post 9 van 9 over WCAG 2.1.1 Toetsenbord. De kern: leg je muis neer. Tab door je website. Alles wat je niet kunt bereiken of bedienen, is een probleem.

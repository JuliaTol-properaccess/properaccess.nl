---
title: "SC 3.3.8 - Wat betekent “Toegankelijke authenticatie”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "3-3-7"
description: "WCAG 3.3.8 vereist toegankelijke authenticatie zonder onnodige obstakels zoals CAPTCHA. Lees de alternatieven en hoe je ze implementeert."
---

Veel websites en apps vereisen dat gebruikers inloggen of hun identiteit bevestigen, bijvoorbeeld via wachtwoorden, pincodes of puzzels. Voor mensen met een cognitieve beperking, motorische beperking of visuele beperking kunnen deze authenticatiemethoden vaak lastig zijn. Denk aan CAPTCHA’s die alleen werken met ingewikkelde beelden of codes die moeilijk in te typen zijn.

Daarom zegt WCAG: **bied toegankelijke authenticatiemethoden die geen onnodige uitdagingen opleveren voor mensen met een beperking**.

Dit heet **3.3.7 Accessible Authentication**.

## Wat wordt er van websites verwacht?

- Zorg dat gebruikers hun identiteit kunnen bevestigen **zonder afhankelijk te zijn van complexe visuele herkenning of complexe invoer**.

- Bied alternatieven voor CAPTCHA’s, zoals:
    - **Eenvoudige rekensommen**,
    
    - **SMS-codes of e-mailbevestigingen**,
    
    - **Biometrische identificatie** (zoals vingerafdruk of gezichtsherkenning, als de gebruiker dat wil),
    
    - **Passkeys** die eenvoudiger te gebruiken zijn dan traditionele wachtwoorden.

Kort: maak authenticatie toegankelijk voor iedereen.

## Wat is niet verplicht?

- Je hoeft geen alternatief te bieden voor sterk beveiligde systemen als dat technisch niet mogelijk is, zolang er een basisniveau van toegankelijkheid is.

- Pure informatieve beveiliging zonder directe gebruikersinteractie valt niet onder deze eis.

## Veelgemaakte fouten

- Multi-factor authenticatie zonder ondersteuning voor screenreaders of spraakbesturing.

## Wat kun je als webredacteur of manager doen?

- **Controleer je inlogmethoden**: Zijn ze eenvoudig genoeg voor gebruikers met verschillende beperkingen?

- **Test met schermlezers en spraakbesturing**: Werken je authenticatieprocessen goed met deze hulpmiddelen?

- **Vraag je webbouwer**: Zijn er toegankelijke alternatieven voor visuele CAPTCHA’s en complexe wachtwoorden?

## Samenvatting

Toegankelijke authenticatie is essentieel voor een inclusieve website. Zorg dat je gebruikers zich kunnen identificeren zonder onnodige barrières, zodat iedereen toegang heeft tot je diensten.

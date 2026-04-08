---
title: "Hoe maak ik mijn website toegankelijk?"
date: 2026-04-12
slug: "hoe-maak-ik-mijn-website-toegankelijk"
categories:
  - "wcag-uitgelegd"
tags:
  - "veelgestelde-vragen"
  - "audit"
  - "tools"
description: "Praktische stappen om je website toegankelijk te maken. Van alt-teksten tot toetsenbordbediening — zonder jargon, met concrete voorbeelden."
keywords:
  - digitale toegankelijkheid
  - WCAG
image: "/images/blog/vragen-digitale-toegankelijkheid.svg"
---

Je website toegankelijk maken is geen eenmalig project dat je in een middag afrondt. Het is een combinatie van technische aanpassingen, content-verbeteringen en bewustwording in je team. Maar het hoeft niet overweldigend te zijn als je het stap voor stap aanpakt.

## Stap 1: Weet waar je staat

Voordat je gaat fixen, moet je weten wat er mis is. Gebruik een combinatie van:

- **Geautomatiseerde tools** (WAVE, axe DevTools) voor een eerste scan
- **Handmatige tests** — navigeer door je website met alleen je toetsenbord
- **Een professionele quickscan of audit** voor een compleet beeld

## Stap 2: Fix de basis

De meeste websites hebben dezelfde problemen. Begin hier:

### Alt-teksten op afbeeldingen
Elke informatieve afbeelding heeft een alt-tekst nodig die beschrijft wat erop staat. Decoratieve afbeeldingen krijgen een lege alt (`alt=""`).

**Niet:** `alt="IMG_4523.jpg"`
**Wel:** `alt="Vrouw gebruikt schermlezer op laptop"`

### Kopstructuur
Gebruik headings (h1, h2, h3) om je pagina logisch te structureren. Spring geen niveaus over. Gebruik headings niet voor styling — daar is CSS voor.

### Formulierlabels
Elk formulierveld moet een zichtbaar label hebben dat programmatisch is gekoppeld. Placeholders zijn geen labels.

### Kleurcontrast
Tekst moet voldoende contrast hebben met de achtergrond. Minimaal 4,5:1 voor gewone tekst en 3:1 voor grote tekst. Test het met een contrastchecker.

### Toetsenbordbediening
Alles wat je met een muis kunt doen, moet ook met een toetsenbord kunnen. Tab door je website heen — kun je alles bereiken? Zie je waar de focus is?

### Focusindicator
De standaard focusring van de browser is er niet voor niets. Als je `outline: none` in je CSS hebt staan zonder vervanging, maak je je website onbruikbaar voor toetsenbordgebruikers.

## Stap 3: Verbeter je content

Toegankelijkheid is niet alleen techniek. Je content maakt ook verschil:

- **Schrijf duidelijk** — korte zinnen, actieve werkwoorden, geen jargon
- **Gebruik beschrijvende linkteksten** — niet "klik hier" maar "bekijk onze prijzen"
- **Ondertitel je video's** — niet iedereen kan geluid horen
- **Maak PDF's toegankelijk** — of bied de content als webpagina aan

## Stap 4: Maak het structureel

Toegankelijkheid moet onderdeel worden van je werkproces:

- **Ontwerp** — neem toegankelijkheid mee in je design system
- **Development** — gebruik semantische HTML, test met toetsenbord en schermlezer
- **Content** — train je redacteuren op alt-teksten, kopstructuur en taalgebruik
- **Testing** — neem toegankelijkheid op in je QA-proces

## Stap 5: Laat testen en blijf verbeteren

Na je eigen fixes: laat een professionele audit uitvoeren. Een externe auditor vindt dingen die je zelf over het hoofd ziet, en het rapport geeft je een objectief beeld van de stand van zaken.

Plan daarna periodiek een hertest. Elke update aan je website kan nieuwe problemen introduceren.

Wil je beginnen met een overzicht van de huidige stand? [Vraag een gratis quickscan aan](https://properaccess.nl/quickscan/) — dan weet je precies waar je moet beginnen.

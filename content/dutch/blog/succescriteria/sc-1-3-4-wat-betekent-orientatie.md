---
title: 'SC 1.3.4 - Wat betekent \"Oriëntatie\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-3-4"
  - "apps"
description: "WCAG 1.3.4 vereist dat je website in zowel staande als liggende oriëntatie werkt. Lees wanneer je een uitzondering mag maken en veelgemaakte fouten."
---

Je opent een website op je telefoon. Je draait je scherm op z'n kant om een tabel beter te bekijken, en ineens springt alles terug naar staand. Of je ligt in bed met je telefoon op z'n kant, en de hele website is onbruikbaar omdat die alleen in portretmodus werkt.

Voor de meeste mensen is dat irritant. Maar voor iemand die een telefoon of tablet in een vaste houder heeft gemonteerd -- bijvoorbeeld aan een rolstoel of een bedframe -- is het een serieus probleem. Die persoon kan het apparaat niet draaien. Als jouw website alleen in één oriëntatie werkt, is die voor hen ontoegankelijk.

**WCAG succescriterium 1.3.4** (Orientation) eist dat je website in zowel staande als liggende oriëntatie werkt, tenzij een specifieke oriëntatie echt noodzakelijk is voor de inhoud.

## Wat wordt er verwacht?

- Je website moet **functioneren en leesbaar** zijn in zowel staande (portrait) als liggende (landscape) modus
- De inhoud mag **niet geblokkeerd** worden in één specifieke oriëntatie
- Je website mag er anders uitzien in de twee oriëntaties, maar moet in beide volledig bruikbaar zijn

Kort gezegd: dwing je gebruikers niet om hun apparaat te draaien.

## Wie heeft hier last van als het misgaat?

- **Mensen met een fysieke beperking** die hun apparaat in een vaste houder gebruiken en het niet kunnen draaien
- **Rolstoelgebruikers** met een gemonteerde tablet die in een vaste positie staat
- **Mensen die in bed liggen** en hun telefoon op z'n kant gebruiken
- **Gebruikers van externe schermen** die hun monitor niet kunnen roteren

## Hoe wordt oriëntatie geblokkeerd?

De meest voorkomende manier is via het `screen.orientation` API of de `orientation` media query in CSS:

```css
/* Dit blokkeert landscape -- niet doen */
@media (orientation: landscape) {
  body {
    display: none;
  }
  .rotate-message {
    display: block;
  }
}
```

Soms gebeurt het via JavaScript dat de gebruiker forceert naar een bepaalde oriëntatie, of via een melding als "Draai je scherm om deze site te bekijken".

## Wanneer mag je wél een oriëntatie afdwingen?

WCAG kent een uitzondering voor situaties waar de oriëntatie **essentieel** is. Dat is een strenge eis. Essentieel betekent: de functie kan fundamenteel niet werken in de andere oriëntatie.

**Wel essentieel:**
- Een virtueel pianotoetsenbord dat de breedte van een liggend scherm nodig heeft
- Een augmented reality-app die afhankelijk is van de cameraoriëntatie
- Een digitaal cheque-depositoformulier dat de cheque horizontaal moet scannen

**Niet essentieel:**
- "Het design ziet er beter uit in portret" -- dat is geen geldige reden
- "De tabel past niet goed in staand formaat" -- maak de tabel responsive
- "De video is horizontaal" -- de gebruiker kan de video in beide oriëntaties bekijken

## Veelgemaakte fouten

- Een "Draai je scherm"-melding die de content blokkeert in landscape
- Een website die in landscape een compleet andere (kapotte) layout heeft
- Formulieren die in portretmodus onbruikbaar worden omdat velden buiten het scherm vallen
- Een webapp die via JavaScript de oriëntatie forceert naar portrait
- Popup-schermen of modals die alleen in één oriëntatie correct worden weergegeven

## Hoe test je het?

De makkelijkste manier: pak je telefoon en draai hem. Of gebruik de DevTools in je browser:

1. Open Chrome DevTools (F12)
2. Klik op het apparaat-icoon (responsive design mode)
3. Wissel tussen portrait en landscape
4. Controleer of alle content bereikbaar en leesbaar blijft

Test op meerdere pagina's, niet alleen de homepage. Formulieren, tabellen en interactieve elementen zijn vaak de probleempunten.

## Wat kun je als webredacteur of manager doen?

- **Test je website in beide oriëntaties** op een echte telefoon of tablet
- **Vraag je webbouwer**: wordt de oriëntatie ergens geblokkeerd in CSS of JavaScript?
- **Controleer responsive breakpoints**: werken ze in beide richtingen?
- **Test specifiek formulieren en tabellen**: die gaan het vaakst mis

Een website die in beide oriëntaties werkt, is niet alleen toegankelijker maar ook flexibeler voor alle bezoekers. Je weet nooit hoe iemand z'n apparaat vasthoudt -- en dat hoeft ook niet jouw keuze te zijn.

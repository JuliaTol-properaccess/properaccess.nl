---
draft: true
title: "WCAG-checklist voor overheidswebsites: wat moet je aftikken?"
date: 2026-04-18
slug: "wcag-checklist-overheidswebsite"
categories:
  - "achtergrond_wcag"
tags:
  - "veelgestelde-vragen"
  - "wcag"
  - "overheid"
  - "wdo"
  - "checklist"
description: "Een concrete checklist voor overheidswebsites: wat moet je aftikken om aan WCAG 2.1 AA te voldoen onder het BDTO? Geen theorie, wel een werkbare lijst."
keywords:
  - WCAG checklist
  - WCAG richtlijnen overheid
  - BDTO checklist
  - toegankelijkheid overheidswebsite
  - digitale toegankelijkheid wet
seo_title: "WCAG-checklist overheidswebsite (BDTO): wat moet je aftikken? | Proper Access"
seo_description: "Praktische WCAG-checklist voor overheidswebsites onder het BDTO. Wat je moet testen, wat vaak misgaat en welke stappen je publicatie op orde krijgen."
---

Overheidswebsites moeten sinds 2018 voldoen aan WCAG 2.1 niveau AA. Dat is geen richtlijn maar een verplichting uit het Besluit digitale toegankelijkheid overheid, onderdeel van de [Wet digitale overheid](/blog/moet-mijn-overheidswebsite-voldoen-aan-wcag/).

Deze checklist gaat niet over de wet zelf, maar over wat je concreet moet aftikken om er te komen. Bedoeld voor webredacteuren, developers en toegankelijkheidscoördinatoren die weten dat ze aan de slag moeten en zoeken naar een werkbare lijst.

## Voor je begint: drie basischecks

Voordat je aan individuele criteria begint, check deze drie dingen:

- [ ] Is er een **toegankelijkheidsverklaring** aangemaakt via [digitoegankelijk.nl](https://digitoegankelijk.nl)?
- [ ] Staat er een **link naar die verklaring** in de footer van elke pagina?
- [ ] Is de verklaring **niet ouder dan 12 maanden**?

Zonder deze drie ben je hoe dan ook niet compliant, ongeacht hoe toegankelijk je site technisch is.

## 1. Waarneembaar

Informatie en componenten moeten op een manier gepresenteerd worden die bezoekers kunnen waarnemen.

### Tekst en afbeeldingen

- [ ] Elke **informatieve afbeelding** heeft een alt-tekst die beschrijft wat het betekent in context
- [ ] Elke **decoratieve afbeelding** heeft een lege alt (`alt=""`)
- [ ] Er staat **geen tekst in afbeeldingen** (behalve logo's), want zoomen maakt die onscherp
- [ ] **Iconen met betekenis** hebben een tekstueel alternatief (aria-label of tekst ernaast)

### Kleur en contrast

- [ ] **Lopende tekst** heeft minimaal **4,5:1** contrast ten opzichte van de achtergrond
- [ ] **Grote tekst** (18pt+ of 14pt bold) heeft minimaal **3:1** contrast
- [ ] **Iconen, formulierranden en knoppen** hebben minimaal **3:1** contrast
- [ ] **Informatie wordt niet alleen via kleur overgedragen** (rood = fout is niet genoeg — zet er ook een icoon en tekst bij)

### Media

- [ ] **Video's hebben ondertiteling** (open of gesloten, niet automatisch gegenereerd)
- [ ] **Video's met belangrijke beeldinformatie** hebben audiodescriptie of een tekstalternatief
- [ ] **Audio-only content** heeft een transcript
- [ ] **Live video's** hebben live ondertiteling (als het structureel is)

### Structuur

- [ ] Elke pagina heeft **precies één H1**
- [ ] **Koppen volgen een logische hiërarchie** (H1 → H2 → H3, geen sprongen)
- [ ] **Lijsten zijn echte lijsten** (`<ul>`, `<ol>`), niet opgemaakt met streepjes in een paragraaf
- [ ] **Tabellen zijn echte tabellen** (`<table>`) met `<th>` voor koppen

## 2. Bedienbaar

Alle functionaliteit moet zonder muis werken.

### Toetsenbord

- [ ] **Alles werkt met Tab/Shift+Tab/Enter/Spatie** — probeer je hele site zonder muis
- [ ] Er zijn **geen keyboard traps** (plekken waar je niet meer weg komt met Tab)
- [ ] **Focus is altijd zichtbaar** — geen `outline: none` zonder alternatief
- [ ] **Focus is niet verstopt** achter een sticky header of cookiebanner (WCAG 2.2)

### Skiplinks en navigatie

- [ ] Er is een **"Naar hoofdinhoud"-skiplink** die als eerste verschijnt bij Tab
- [ ] De **navigatie staat op elke pagina op dezelfde plek**
- [ ] Er zijn **minimaal twee manieren** om pagina's te vinden (menu + zoekfunctie of sitemap)

### Formulieren

- [ ] **Elk formulierveld heeft een zichtbaar label** (geen placeholder als enig label)
- [ ] **Verplichte velden** staan duidelijk gemarkeerd (niet alleen met een asterisk)
- [ ] **Foutmeldingen** staan bij het betreffende veld en beschrijven hoe je het oplost
- [ ] **Succesmeldingen** worden door schermlezers opgepikt (aria-live of vergelijkbaar)

### Interactie

- [ ] **Animaties kunnen gepauzeerd worden** als ze langer duren dan 5 seconden
- [ ] Er zijn **geen automatische refreshes** zonder waarschuwing
- [ ] **Popovers en tooltips verdwijnen niet** zodra je je muis beweegt
- [ ] **Tijdslimieten** zijn verlengbaar of aan te passen

## 3. Begrijpelijk

Content en bediening moeten voor iedereen duidelijk zijn.

### Taal

- [ ] De **`lang`-attribuut** van de pagina staat goed (`nl` voor Nederlandse pagina's)
- [ ] **Stukken in een andere taal** zijn gemarkeerd met een eigen `lang`-attribuut
- [ ] Teksten zijn geschreven op **B1-niveau** waar mogelijk (verplicht voor overheidscommunicatie via Direct Duidelijk)

### Voorspelbaarheid

- [ ] **Menu's veranderen niet tussen pagina's**
- [ ] **Hulpknoppen en contactgegevens** staan consistent op dezelfde plek (WCAG 2.2)
- [ ] **Er gebeurt niets onverwachts** bij het focussen van een element (geen pop-ups die vanzelf opengaan)

### Invoerhulp

- [ ] **Inloggen vraagt geen geheugenpuzzel** (WCAG 2.2 — zie [toegankelijke authenticatie](/blog/sc-3-3-7-wat-betekent-toegankelijke-authenticatie/))
- [ ] **Dezelfde info wordt niet dubbel gevraagd** binnen een proces (WCAG 2.2 — zie [redundante invoer](/blog/sc-3-3-7-wat-betekent-redundante-invoer/))
- [ ] Bij belangrijke acties (indienen, betalen) is er een **bevestigingsstap** of undo-optie

## 4. Robuust

Code moet werken met hulptechnologieën.

- [ ] Alle **knoppen zijn echte `<button>`-elementen** (geen klikbare `<div>`)
- [ ] Alle **links gaan naar een URL** (geen `<a>` zonder href die als knop fungeert)
- [ ] **Statusberichten** (succes, fout, laadstatus) zijn met aria-live gemarkeerd
- [ ] **Custom componenten** (datepicker, accordion, tabs) hebben de juiste ARIA-rol en -states

## Documenten

Vaak vergeten, altijd verplicht als het op je website staat.

- [ ] **PDF's hebben een correcte tag-structuur** (koppen zijn koppen, tabellen zijn tabellen)
- [ ] **PDF's zijn doorzoekbaar** (echte tekst, geen gescande afbeelding)
- [ ] **Word-documenten** op je site hebben koppen via stijlen (niet door tekst dikker te maken)
- [ ] **Elk document** heeft een zinvolle bestandsnaam en een doorklikbare titel

## Wat hier niet instaat

Deze lijst vat de meest voorkomende aandachtspunten samen. Er zijn in totaal **50 succescriteria op A- en AA-niveau** onder WCAG 2.1, en **9 extra onder WCAG 2.2**. Voor een officiële toegankelijkheidsverklaring moet je al die criteria expliciet toetsen — zelf of via een audit.

Deze checklist is dus **geen vervanging van een audit**. Wel een werkbare lijst om intern vooruit te komen, om je eigen CMS-beperkingen te ontdekken, en om het gesprek met je developers en redacteuren te starten.

## Eerste stap

Weet je niet waar je moet beginnen? Een [mini-audit](/webshop-quickscan/) van je hoofdpagina's geeft je binnen een paar dagen een overzicht van de grootste struikelblokken, en of je ze zelf kunt oplossen of een audit nodig hebt.

Meer context over de wettelijke verplichting zelf: [Moet mijn overheidswebsite al voldoen aan WCAG?](/blog/moet-mijn-overheidswebsite-voldoen-aan-wcag/)

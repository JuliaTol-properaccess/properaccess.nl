---
title: 'SC 2.4.2 - Wat betekent \"Paginatitels\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-4-2"
description: "WCAG 2.4.2 vereist dat elke pagina een beschrijvende titel heeft. Lees hoe je goede paginatitels schrijft voor toegankelijkheid en SEO."
aliases:
  - /sc-2-4-2-wat-betekent-paginatitels/
---

Je hebt twaalf tabbladen open in je browser. Je zoekt dat ene tabblad met je winkelwagen. Maar drie tabbladen heten "Home", twee heten "Welkom", en de rest toont alleen de naam van het bedrijf. Je moet elk tabblad aanklikken om te vinden wat je zoekt.

Dat is al irritant met een muis. Maar voor iemand die een schermlezer gebruikt, is het een serieus probleem. Een schermlezer leest als eerste de paginatitel voor bij het wisselen van tabbladen of het openen van een pagina. Als die titel "Home" is of "Welkom bij ons bedrijf", geeft dat geen enkele informatie over wat er op de pagina staat.

**WCAG succescriterium 2.4.2** (Page Titled) eist dat elke webpagina een beschrijvende titel heeft die de inhoud of het doel van de pagina duidelijk maakt.

## Waar verschijnt de paginatitel?

De paginatitel zit in het `<title>`-element in de HTML-head. Je ziet hem op drie plekken:

1. **In het browsertabblad** -- de tekst die je ziet als je met de muis over het tabblad beweegt
2. **In zoekresultaten** -- Google toont de paginatitel als de klikbare kop in de zoekresultaten
3. **In de schermlezer** -- het eerste wat wordt voorgelezen als een pagina opent

## Wat maakt een goede paginatitel?

Een goede titel is **specifiek**, **beknopt** en **uniek** voor elke pagina.

### Specifiek

De titel beschrijft de inhoud van de pagina, niet alleen de website.

| Slecht | Goed |
|---|---|
| Home | Proper Access - Digitale toegankelijkheid |
| Producten | Audits en quickscans - Proper Access |
| Blog | Blog over digitale toegankelijkheid - Proper Access |
| Contact | Contact opnemen - Proper Access |

### Beknopt

Houd titels onder de 60-70 tekens. Langere titels worden afgekapt in browsertabbladen en zoekresultaten.

### Uniek

Elke pagina moet een andere titel hebben. Als je drie pagina's hebt die allemaal "Producten" heten, weet niemand welke pagina welke is.

### Het meest specifieke eerst

Begin met de pagina-specifieke informatie, eindig met de sitenaam:

```html
<!-- Goed: specifiek eerst -->
<title>Toegankelijkheidsaudit aanvragen - Proper Access</title>

<!-- Minder goed: sitenaam eerst -->
<title>Proper Access - Toegankelijkheidsaudit aanvragen</title>
```

Waarom? Bij veel open tabbladen zie je alleen de eerste paar woorden. Als elke titel begint met "Proper Access", zie je op elk tabblad hetzelfde.

## Dynamische titels

Bij formulieren of processen met meerdere stappen is het belangrijk dat de titel de huidige stap reflecteert:

- "Stap 1: Persoonlijke gegevens - Bestelling - Webshop"
- "Stap 2: Betaalmethode kiezen - Bestelling - Webshop"
- "Stap 3: Bevestiging - Bestelling - Webshop"

Bij zoekresultaten: neem de zoekopdracht op in de titel:
- "Zoekresultaten voor 'blauwe schoenen' - Webshop"

Bij foutpagina's: maak duidelijk dat er een fout is:
- "Pagina niet gevonden (404) - Webshop"

## Veelgemaakte fouten

- **Generieke titels** -- "Home", "Welkom", "Pagina" zonder verdere context
- **Ontbrekende titels** -- geen `<title>`-element, waardoor de browser de URL toont
- **Duplicate titels** -- meerdere pagina's met exact dezelfde titel
- **Alleen de sitenaam** -- "Proper Access" op elke pagina, zonder pagina-specifieke informatie
- **Te lange titels** -- hele zinnen die afgekapt worden in tabbladen
- **Titels die niet kloppen** -- een titel "Contact" op een pagina die eigenlijk de FAQ toont
- **Sitenaam eerst** -- waardoor bij meerdere open tabbladen alle tabs identiek lijken

## Hoe test je het?

1. **Beweeg je muis over het browsertabblad** -- de volledige titel verschijnt als tooltip
2. **Bekijk de broncode** -- zoek naar het `<title>`-element in de `<head>`
3. **Open meerdere pagina's in tabbladen** -- kun je ze uit elkaar houden op basis van de titel?
4. **Test met een schermlezer** -- wordt de titel voorgelezen bij het openen van de pagina?

## Wat kun je als webredacteur of manager doen?

- **Controleer de titels van al je pagina's**: beschrijven ze de inhoud correct?
- **Maak een lijst**: open al je belangrijkste pagina's en noteer de titels. Zijn ze uniek en specifiek?
- **Vraag je webbouwer**: worden paginatitels automatisch gegenereerd op basis van de H1 of handmatig ingesteld?
- **Denk aan SEO**: een goede paginatitel is ook goed voor je vindbaarheid in Google

Paginatitels zijn een van de makkelijkste toegankelijkheidscriteria om goed te doen. Het kost vijf minuten per pagina en maakt een groot verschil voor schermlezergebruikers en je zoekresultaten.

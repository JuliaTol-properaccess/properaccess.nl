---
title: "WCAG-audit: het verschil tussen rapporteren per element en per succescriterium"
date: 2026-03-18
slug: "rapport-per-element-vs-per-succescriterium"
categories:
  - "achtergrond_wcag"
tags:
  - "toegankelijkheidsaudit"
  - "wcag"
  - "rapportage"
  - "wcag-em"
description: "De meeste auditbureaus rapporteren per succescriterium. Wij rapporteren per element. Wat is het verschil en waarom maakt het uit voor jouw developer?"
keywords:
  - wcag audit rapport
  - toegankelijkheidsonderzoek rapportage
  - rapport per element
  - rapport per succescriterium
  - wcag em onderzoek
  - hoe herken je goed toegankelijkheidsonderzoek
  - toegankelijkheidsaudit vergelijken
  - wcag audit kwaliteit
  - wat staat er in een toegankelijkheidsrapport
  - verschil auditbureaus
---

Als je een toegankelijkheidsaudit laat uitvoeren, krijg je een rapport. Logisch. Maar niet elk rapport is hetzelfde. De manier waarop de bevindingen worden gerapporteerd, bepaalt in grote mate hoe snel en efficiënt je developer de problemen kan oplossen.

Er zijn grofweg twee benaderingen: rapporteren **per succescriterium** en rapporteren **per element**. In dit artikel leg ik het verschil uit — en waarom het ertoe doet.

## Rapporteren per succescriterium: de standaard in de markt

De meeste auditbureaus rapporteren per WCAG-succescriterium. Dat ziet er zo uit:

> **SC 1.1.1 — Niet-tekstuele content: Niet voldaan**
>
> Op meerdere pagina's zijn afbeeldingen gevonden zonder tekstalternatief.

Dat is correct. SC 1.1.1 is inderdaad niet voldaan. Maar als developer zit je nu met vragen:

- Op welke pagina's precies?
- Welke afbeeldingen?
- Hoeveel zijn het er?
- Welke alt-tekst zou er moeten staan?

Het rapport zegt: "er is een probleem." Maar het laat je zelf uitzoeken waar en wat.

Sommige bureaus voegen een paar voorbeelden toe — "zie bijvoorbeeld de homepage en de contactpagina." Dat is beter, maar het geeft geen compleet beeld. Zijn het alleen die twee pagina's, of zijn er meer?

## Rapporteren per element: wat wij doen

Bij Proper Access rapporteren we per element. Dat betekent dat elke bevinding verwijst naar een **specifiek element op een specifieke pagina**. Dat ziet er zo uit:

> **Homepage — Hero-afbeelding**
>
> De hoofdafbeelding in de hero-sectie heeft geen alt-tekst. Een schermlezer leest de bestandsnaam voor ("hero-banner-2026.jpg").
>
> **Oplossing:** Voeg een alt-tekst toe die de inhoud van de afbeelding beschrijft. Bijvoorbeeld: "Twee collega's bekijken samen een laptop in een modern kantoor."
>
> **Criterium:** SC 1.1.1 — Niet-tekstuele content (niveau A)

En vervolgens:

> **Productpagina — Thumbnail-carrousel**
>
> De vier productfoto's in de thumbnail-carrousel missen alt-teksten. Een schermlezer slaat ze over.
>
> **Oplossing:** Geef de hoofdafbeelding een beschrijvende alt-tekst. De thumbnails die dezelfde informatie tonen, kunnen een lege alt-tekst krijgen (alt="") zodat ze worden overgeslagen.
>
> **Criterium:** SC 1.1.1 — Niet-tekstuele content (niveau A)

Het succescriterium is hetzelfde, maar de bevindingen zijn opgesplitst per element. Je developer weet precies waar het probleem zit en wat de oplossing is.

## Waarom maakt dit uit?

### 1. Je developer kan direct aan de slag

Met een rapport per element hoeft je developer niet eerst op zoektocht door de hele website. Elke bevinding is een concrete taak: ga naar deze pagina, zoek dit element, pas dit aan. Dat bespaart uren zoekwerk.

### 2. Je kunt beter prioriteren

Als je weet dat er 3 afbeeldingen zonder alt-tekst zijn op de homepage en 47 productafbeeldingen zonder alt-tekst in de webshop, kun je een betere inschatting maken van de werklast. Bij een rapport per succescriterium weet je alleen dat "SC 1.1.1 niet voldaan is" — maar niet hoe groot het probleem is.

### 3. De retest gaat sneller

Bij een retest checken we of de gevonden problemen zijn opgelost. Met een rapport per element kunnen we precies dezelfde elementen opnieuw controleren. Dat is sneller en goedkoper dan opnieuw de hele website doorlopen.

### 4. Je ziet patronen

Soms zit een probleem in een template of component. Als dezelfde fout op 15 pagina's voorkomt bij hetzelfde type element, weet je dat het een template-issue is — één fix lost alle 15 gevallen op. Bij rapportage per succescriterium zie je dat patroon niet.

## Een voorbeeld uit de praktijk

Stel: we auditen een webshop met een header, productpagina's, een winkelwagen en een afrekenpagina.

**Rapport per succescriterium** zou er zo uitzien:

| Criterium | Status |
|---|---|
| SC 1.1.1 Niet-tekstuele content | Niet voldaan |
| SC 1.3.1 Info en relaties | Niet voldaan |
| SC 2.4.7 Focus zichtbaar | Niet voldaan |
| SC 4.1.2 Naam, rol, waarde | Niet voldaan |

Vier regels. Je weet dat er problemen zijn, maar niet hoeveel, niet waar en niet hoe je ze oplost.

**Rapport per element** voor dezelfde webshop:

| Pagina | Element | Probleem | Criterium |
|---|---|---|---|
| Homepage | Logo in header | Mist alt-tekst | SC 1.1.1 |
| Homepage | Zoekknop | Geen toegankelijke naam | SC 4.1.2 |
| Productpagina | Productfoto's (4x) | Missen alt-tekst | SC 1.1.1 |
| Productpagina | Maatselectie | Geen zichtbare label | SC 1.3.1 |
| Productpagina | "Toevoegen aan winkelwagen" | Geen focusindicator | SC 2.4.7 |
| Winkelwagen | Aantal-invoerveld | Niet gekoppeld aan label | SC 1.3.1 |
| Winkelwagen | Verwijder-knop | Geen toegankelijke naam (alleen een icoon) | SC 4.1.2 |
| Afrekenpagina | Adresformulier | Foutmeldingen niet gekoppeld aan velden | SC 1.3.1 |

Acht concrete bevindingen. Elke regel is een taak voor je developer. Je kunt het verdelen, plannen en inschatten.

## Hoe herken je een goed toegankelijkheidsrapport?

Ongeacht welk bureau je kiest, let op deze dingen:

- **Bevindingen zijn gekoppeld aan specifieke pagina's en elementen** — niet alleen aan succescriteria
- **Er staat een oplossingsrichting bij** — niet alleen wat er mis is, maar ook wat je kunt doen
- **Screenshots of codevoorbeelden** zijn opgenomen waar nuttig
- **De steekproef is gedocumenteerd** — welke pagina's zijn onderzocht en waarom
- **Het rapport is zelf toegankelijk** — als een auditbureau een ontoegankelijk PDF-rapport levert, zegt dat iets

## Veelgestelde vragen

### "Duurt een audit per element niet langer?"

Ja, het is iets meer werk om per element te rapporteren dan per succescriterium. Maar dat extra werk zit aan onze kant — niet aan die van jou. En het bespaart je developer aanzienlijk meer tijd dan het ons kost.

### "Kan ik een voorbeeld van zo'n rapport zien?"

Neem [contact](/contact/) met ons op. We delen graag een geanonimiseerd voorbeeldrapport zodat je kunt zien wat je krijgt.

### "Rapporteren andere bureaus ook per element?"

Sommige bureaus doen het gedeeltelijk — ze noemen een paar voorbeelden per succescriterium. Maar een volledig rapport waarin elke bevinding gekoppeld is aan een specifiek element op een specifieke pagina, is niet standaard in de markt.

## Verder lezen

- [Wat kost een toegankelijkheidsaudit?](/blog/wat-kost-een-toegankelijkheidsaudit/) — transparant overzicht van prijzen en pakketten
- [Alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/) — interactieve tool om de juiste alt-tekst te bepalen

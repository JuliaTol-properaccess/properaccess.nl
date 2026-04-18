---
title: 'SC 2.4.6 - Wat betekent \"Koppen en labels\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-4-6"
  - "formulier"
description: "WCAG 2.4.6 vereist beschrijvende koppen en labels die duidelijk maken waar de content over gaat. Lees hoe je dit goed toepast."
aliases:
  - /sc-2-4-6-wat-betekent-koppen-en-labels/
---

Je opent een pagina en de eerste kop is "Overzicht". Overzicht van wat? Je scrollt naar beneden en ziet koppen als "Details", "Meer informatie" en "Overig". Geen enkele kop vertelt je wat er in die sectie staat. Je moet alles lezen om te begrijpen waar de pagina over gaat.

Voor iemand met een schermlezer is dat nog problematischer. Schermlezergebruikers navigeren vaak via een lijst van koppen op de pagina -- een soort inhoudsopgave. Als die koppen "Overzicht", "Details" en "Meer informatie" zijn, is die lijst waardeloos.

**WCAG succescriterium 2.4.6** (Headings and Labels) eist dat koppen en labels de inhoud of het doel beschrijven waar ze bij horen.

## Twee dingen tegelijk: koppen en labels

Dit criterium gaat over twee verschillende dingen die hetzelfde probleem delen:

### Koppen (headings)

Koppen (`<h1>` tot `<h6>`) structureren je pagina in secties. Een goede kop vertelt precies wat er in die sectie staat.

| Slechte kop | Goede kop |
|---|---|
| Overzicht | Overzicht van je bestelling |
| Informatie | Productinformatie |
| Details | Technische specificaties |
| Meer | Veelgestelde vragen |
| Sectie 1 | Afleveradres |

### Labels (bij formulieren)

Labels vertellen gebruikers wat ze in een formulierveld moeten invullen. Een goed label is ondubbelzinnig.

| Slecht label | Goed label |
|---|---|
| Naam | Volledige naam |
| Adres | Straatnaam en huisnummer |
| Nummer | Telefoonnummer |
| Datum | Geboortedatum (dd-mm-jjjj) |
| Bedrag | Donatiebedrag in euro's |

## Wie heeft hier baat bij?

- **Schermlezergebruikers** die navigeren via een lijst van koppen. Beschrijvende koppen zijn hun inhoudsopgave
- **Mensen met cognitieve beperkingen** die snel moeten begrijpen waar een sectie over gaat zonder alles te lezen
- **Mensen met een visuele beperking** die vergrotingssoftware gebruiken en maar een klein deel van de pagina zien. De kop is het anker dat hen vertelt waar ze zijn
- **Iedereen die snel scant** -- de meeste bezoekers lezen niet elke zin maar scannen koppen

## Het verschil met SC 1.3.1

SC 1.3.1 (Info and Relationships) gaat over de **technische markering**: is een kop ook daadwerkelijk een `<h2>` in de code, en is een label met `<label for="">` gekoppeld aan het juiste veld?

SC 2.4.6 gaat over de **inhoud**: is die kop ook beschrijvend? Is dat label ook duidelijk? Je kunt een perfect gemarkeerde kop hebben (`<h2>Details</h2>`) die technisch prima is maar inhoudelijk nietszeggend.

## Veelgemaakte fouten bij koppen

- **Generieke koppen** -- "Informatie", "Details", "Overzicht" zonder context
- **Duplicate koppen** -- drie secties die allemaal "Producten" heten
- **Koppen die niet aansluiten bij de content** -- een kop "Contact" boven een sectie die eigenlijk over vacatures gaat
- **Alleen visueel opgemaakte koppen** -- grote, vette tekst die geen echte HTML-kop is (dat is SC 1.3.1, maar het leidt ook tot problemen bij 2.4.6 als de koptekst zelf niet beschrijvend is)

## Veelgemaakte fouten bij labels

- **Geen label** -- een invoerveld zonder enige aanduiding
- **Alleen een placeholder** -- "Voer hier je naam in" dat verdwijnt zodra je begint te typen
- **Onduidelijk label** -- "Nummer" (telefoonnummer? klantnummer? huisnummer?)
- **Label dat niet bij het veld past** -- een label "E-mail" dat in de code gekoppeld is aan het naamveld
- **Geen format-instructie** -- een datumveld zonder aanduiding of je dd-mm-jjjj of mm/dd/yyyy moet gebruiken

## Hoe test je het?

### Koppen testen

1. Gebruik een schermlezer of browser-extensie (zoals HeadingsMap) om een lijst van alle koppen op de pagina te genereren
2. Lees alleen de koppen, zonder de rest van de pagina. Begrijp je waar elke sectie over gaat?
3. Als je dat niet kunt, zijn de koppen niet beschrijvend genoeg

### Labels testen

1. Bekijk elk formulierveld: is er een zichtbaar label?
2. Is dat label duidelijk genoeg om te begrijpen wat je moet invullen?
3. Klik op het label: springt de cursor naar het juiste veld? (dit test de technische koppeling)

## Wat kun je als webredacteur of manager doen?

- **Lees alleen je koppen**: begrijp je de structuur van de pagina zonder de lopende tekst?
- **Controleer formulierlabels**: is elk veld duidelijk gelabeld met een beschrijvende tekst?
- **Vermijd generieke termen**: "Details" wordt "Productdetails", "Informatie" wordt "Contactinformatie"
- **Vraag je webbouwer**: zijn labels technisch gekoppeld aan de juiste velden?

Goede koppen en labels zijn de wegwijzers van je website. Ze helpen bezoekers snel te vinden wat ze zoeken, zonder alles te hoeven lezen.

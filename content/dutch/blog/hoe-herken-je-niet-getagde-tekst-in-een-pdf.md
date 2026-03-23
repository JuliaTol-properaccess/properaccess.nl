---
title: "Hoe herken je niet-getagde tekst in een PDF"
date: 2025-03-18
slug: "hoe-herken-je-niet-getagde-tekst-in-een-pdf"
categories: 
  - "tips-en-tools"
  - "Webredactie"
tags:
  - "webredactie"
description: "Leer hoe je niet-getagde tekst in een PDF herkent met PAC. Praktische uitleg voor webredacties volgens WCAG 1.3.1."
keywords:
  - niet getagde tekst pdf
  - wcag pdf toegankelijkheid
  - pac pdf testen
aliases:
  - "/hoe-herken-je-niet-getagde-tekst-in-een-pdf/"
---

PDF's zijn een van de meest voorkomende struikelblokken bij digitale toegankelijkheid. Een PDF kan er perfect uitzien terwijl een schermlezer er niets mee kan. De oorzaak is vaak **niet-getagde tekst** -- tekst die visueel gewoon op de pagina staat, maar technisch niet is opgenomen in de tagstructuur van het document.

## Wat zijn tags in een PDF?

Een getagde PDF bevat een onzichtbare structuurlaag die beschrijft wat elk element op de pagina is: een kop, een alinea, een tabel, een afbeelding. Zonder die tags is een PDF voor een schermlezer een platte lap tekst zonder structuur -- of erger: sommige stukken tekst worden helemaal overgeslagen.

**WCAG succescriterium 1.3.1** (Info en relaties) eist dat de structuur die visueel zichtbaar is, ook technisch beschikbaar is. Als een ziende bezoeker een kop, een opsomming of een tabel ziet, maar een schermlezer dat niet kan herkennen, voldoet het document niet.

## Hoe ontstaat niet-getagde tekst?

Niet-getagde tekst komt meestal op een van deze manieren in je PDF terecht:

- **Export vanuit Word zonder tags.** Als je in Word "Opslaan als PDF" kiest zonder de optie voor toegankelijkheidstags aan te vinken, krijg je een ongetagde PDF.
- **Tekst in kop- en voetteksten.** Headers en footers in Word worden soms niet meegenomen in de tagstructuur.
- **Tekst in tekstvakken.** Tekstvakken in Word of InDesign worden regelmatig overgeslagen bij het taggen.
- **Handmatig bewerkte PDF's.** Als je tekst toevoegt in Acrobat zonder die aan de tagstructuur toe te voegen, is die tekst onzichtbaar voor hulpsoftware.

## Hoe herken je niet-getagde tekst met PAC?

Ik gebruik [PAC 2024](https://pac.pdf-accessibility.org/en/download) om PDF's te testen. Zo herken je niet-getagde tekst:

1. **Open het PDF-document in PAC.**
2. **Klik op het oogicoon** (de screenreader-voorvertoning). PAC toont nu wat een schermlezer zou voorlezen.
3. **Open de originele PDF ernaast**, zodat je in beide vensters kunt scrollen.
4. **Vergelijk de twee weergaven.** Zie je tekst in de originele PDF die niet voorkomt in de PAC-weergave? Dan is die tekst niet getagd.
5. **Let op grijze achtergronden.** In de PAC-voorvertoning wordt niet-getagde tekst soms op een grijze achtergrond getoond. Dat is een duidelijk signaal.

## Hoe los je het op?

De beste oplossing is voorkomen. Zorg dat je brondocument (Word, InDesign) correct is opgemaakt:

- Gebruik **stijlen** voor koppen (Heading 1, Heading 2) in plaats van handmatig de tekst groter en vet te maken.
- Vermijd **tekstvakken** voor belangrijke content.
- Controleer bij het exporteren dat de optie voor toegankelijkheidstags is ingeschakeld.

Heb je al een PDF zonder tags? Dan kun je in **Adobe Acrobat Pro** de tagstructuur handmatig toevoegen via het paneel "Accessibility Tags". Dat is arbeidsintensief, maar soms de enige optie.

Niet-getagde tekst is een van de meest voorkomende problemen in PDF's. Het is visueel onzichtbaar -- je ziet het pas als je het test. Gebruik PAC om het te controleren en zorg dat je brondocumenten goed zijn opgemaakt.


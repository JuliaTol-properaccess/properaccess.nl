---
title: "WCAG-EM: de methode van het W3C voor een toegankelijkheidsonderzoek"
date: 2026-06-21
slug: "wcag-em-methode-toegankelijkheidsonderzoek"
categories:
  - "achtergrond_wcag"
tags:
  - "wcag"
  - "wcag-em"
  - "audit"
  - "methodiek"
  - "veelgestelde-vragen"
description: "WCAG-EM is de W3C-methode voor een toegankelijkheidsonderzoek. In vijf stappen leg ik uit wat het is, hoe het werkt en wanneer je het nodig hebt."
keywords:
  - WCAG-EM
  - WCAG-EM methode
  - toegankelijkheidsonderzoek methode
  - WCAG audit methodiek
  - evaluatiemethodiek WCAG
meta_title: "WCAG-EM uitgelegd: de 5 stappen van de W3C-methode | Proper Access"
meta_description: "Wat is WCAG-EM en wanneer heb je het nodig? De vijf stappen van de W3C-evaluatiemethodiek, uitgelegd in gewone taal."
howto:
  name: "Een toegankelijkheidsonderzoek uitvoeren volgens WCAG-EM"
  description: "De vijf stappen van WCAG-EM: van scope bepalen en steekproef samenstellen tot evaluatie en rapportage."
  steps:
    - name: "Bepaal de scope"
      text: "Leg vast welke URL's en subdomeinen bij het onderzoek horen, welk WCAG-niveau je toetst, welke hulpsoftware en browsers gelden en welke technologieën worden meegenomen."
    - name: "Verken de website"
      text: "Breng de primaire functies, paginatypes, kritieke processen en essentiële functionaliteit van het digitale product in kaart."
    - name: "Stel een representatieve steekproef samen"
      text: "Selecteer gestructureerd de verschillende views, contenttypen, functionaliteit en technologieën en voeg een willekeurige steekproef toe."
    - name: "Voer de evaluatie uit"
      text: "Toets elke geselecteerde pagina met geautomatiseerde scans, handmatige tests met toetsenbord, schermlezer, zoom en spraakbesturing, en code-inspectie."
    - name: "Maak de rapportage"
      text: "Leg de scope, steekproef, bevindingen per succescriterium en conclusie over conformiteit vast in het eindrapport."
---

Als je een toegankelijkheidsonderzoek laat uitvoeren, komt er vaak een term langs die niet meteen iets zegt: **WCAG-EM**. Het staat voor *Web Content Accessibility Guidelines Evaluation Methodology*. Het is de methode die het W3C, dezelfde club die WCAG maakt, heeft vastgelegd voor hoe je een toegankelijkheidsevaluatie opzet en uitvoert. De actuele versie is WCAG-EM 2.0. Die is niet alleen bedoeld voor websites, maar ook voor apps en andere digitale producten.

WCAG zegt **wát** je moet toetsen. WCAG-EM zegt **hoe** je dat doet. Dat tweede is net zo belangrijk, want zonder een vaste methode kan iedereen z'n eigen conclusies trekken en is een audit niet vergelijkbaar of controleerbaar.

## Waarom WCAG-EM bestaat

Stel dat drie auditors dezelfde website onderzoeken. Zonder methode kiest de een alleen de homepage, de ander tien willekeurige pagina's, de derde alleen het contactformulier. Ze komen met drie verschillende lijsten problemen en drie verschillende conclusies. Wie heeft gelijk?

WCAG-EM lost dat op. Het legt vast:

- **Hoe je bepaalt wat bij de website hoort** (scope)
- **Welke views, functionaliteit en technologieën** in het onderzoek vertegenwoordigd moeten zijn
- **Hoe je een representatieve steekproef samenstelt**, met een gestructureerde én een willekeurige selectie
- **Hoe je de evaluatie uitvoert en rapporteert**

Daardoor zijn audits van verschillende partijen vergelijkbaar, en kan een hercontrole door een andere auditor dezelfde conclusies opleveren.

## Wanneer heb je WCAG-EM nodig?

Op één plek vraagt de wet om een methode. Het [Register van Toegankelijkheidsverklaringen](https://www.toegankelijkheidsverklaring.nl/register) vraagt dat uit je rapport blijkt dat je een goed gedocumenteerde evaluatiemethode hebt gebruikt, WCAG-EM of gelijkwaardig, en dat geldt voor status A en ook voor status B. DigiToegankelijk schrijft erbij dat er nog geen breed gedragen alternatief is, dus in de praktijk is WCAG-EM de methode. Val je onder het BDTO, dan ligt zo'n onderzoek dus onder je [toegankelijkheidsverklaring](/blog/moet-mijn-overheidswebsite-voldoen-aan-wcag/).

Onder de EAA ligt het anders. Die wet verplicht je tot een toegankelijke website of app, niet tot een onderzoek. Een onderzoek is de manier om te weten waar je staat, en WCAG-EM is de manier om dat onderzoek volledig te maken. Kun je bij een toezichthouder niet laten zien hoe je aan je conclusie komt, dan heb je weinig in handen.

Ook zonder wettelijke eis is het de reden om erom te vragen. Een aanbieder die niet volgens WCAG-EM werkt, bepaalt zelf welk deel van je site hij bekijkt.

## De vijf stappen van WCAG-EM

### Stap 1: Scope bepalen

Wat hoort er wel en niet bij de website? Klinkt simpel, is het niet. Je moet vastleggen:

- **Welke URL's en subdomeinen** vallen onder het onderzoek (valt `nieuws.gemeente.nl` ook onder `gemeente.nl`?)
- **Welk WCAG-niveau** je toetst (meestal 2.1 AA of 2.2 AA)
- **Welke hulpsoftware en browsers** als referentie gelden
- **Welke technologieën** gebruikt worden (HTML, CSS, JavaScript, PDF, video)

Deze keuzes worden in het rapport vastgelegd, zodat bij een hertest dezelfde scope geldt.

### Stap 2: De website verkennen

De auditor brengt in kaart wat de website doet:

- Wat is de **primaire functie** (informeren, verkopen, aanvragen, inloggen)?
- Welke **paginatypes** zijn er (overzicht, detail, formulier, zoekresultaat)?
- Welke **kritieke processen** zijn er (bestelproces, DigiD-login, contactformulier)?
- Welke **functionaliteit** moet altijd werken (zoeken, filteren, afrekenen)?

Zonder deze stap weet je niet wat je moet testen. Met deze stap wordt duidelijk welke pagina's echt essentieel zijn.

### Stap 3: Representatieve steekproef samenstellen

Je gaat niet elke pagina of view van een digital product met 10.000 producten testen. Dat hoeft ook niet. WCAG-EM 2.0 schrijft voor dat je een representatieve steekproef samenstelt met twee manieren van selecteren:

**De gestructureerde steekproef** dekt de variatie in het digital product af. Daarin neem je onder meer mee:
- Veelvoorkomende views en verschillende typen content, ontwerpen en functionaliteit
- Essentiële functionaliteit en complete processen, zoals bestellen, aanvragen of downloaden
- De technologieën waarop het digital product leunt, zoals HTML, PDF of video
- Andere samples die relevant zijn voor mensen met een beperking, zoals informatie over toegankelijkheidsfuncties, hulp en ondersteuning, of authenticatie

**De willekeurige steekproef** is een aanvulling op de gestructureerde steekproef. Volgens WCAG-EM 2.0 bestaat die uit 10% van de gestructureerde steekproef. De willekeurig gekozen views mogen niet al in de gestructureerde steekproef zitten. Je legt ook vast hoe je ze hebt geselecteerd. Zo controleer je of de gestructureerde steekproef inderdaad representatief is.

Een vuistregel van 15 tot 25 pagina's voor een gemiddelde site is mijn eigen praktische richtlijn, niet een aantal dat WCAG-EM voorschrijft. De benodigde omvang hangt af van onder meer de grootte, leeftijd, complexiteit en technologieën van het digital product.

### Stap 4: De evaluatie uitvoeren

Pas hier begint het toetsen. Elke geselecteerde pagina wordt langs de relevante succescriteria gelegd, met een mix van:

- **Geautomatiseerde scans** voor de technische basis
- **Handmatige tests** met toetsenbord, schermlezer, zoom en spraakbesturing
- **Code-inspectie** voor ARIA, semantiek en structuur

Voor elk probleem wordt vastgelegd:
- Welk succescriterium het raakt
- Op welke pagina en welk element
- Wat de impact is voor een gebruiker
- Hoe het opgelost kan worden

### Stap 5: Rapportage

Het eindrapport bevat:

- **De scope** uit stap 1 (zodat een hertest op dezelfde grondslag kan gebeuren)
- **De steekproef** uit stap 3 (welke pagina's en waarom)
- **De bevindingen per succescriterium** met bewijs
- **Een conclusie over conformiteit**: voldoet de site, en zo nee, op welke punten niet

Voor een overheidsrapport levert dit uiteindelijk één van vier verklaringsstatussen op: A (voldoet volledig), B (voldoet grotendeels), C (eerste maatregelen getroffen) of D (voldoet niet).

## WCAG-EM versus "gewoon een audit"

Een audit *zonder* WCAG-EM of een gelijkwaardige, goed gedocumenteerde methode is niet fout, maar is geen formele conformiteitsbeoordeling. Het kan nuttig zijn als snelle check, als UX-onderzoek of als voorbereiding op een officiële audit. Maar je kunt er niet op bouwen voor:

- Je toegankelijkheidsverklaring bij de overheid
- Een EAA-conformiteitsbewijs
- Juridische verdediging bij een klacht

Als de methode er niet bij staat in de offerte, vraag er dan naar. Een professionele aanbieder gebruikt WCAG-EM standaard en kan je stap voor stap uitleggen hoe de scope, steekproef en rapportage zijn opgebouwd.

## Wat je eraan hebt

De kracht van WCAG-EM zit in de reproduceerbaarheid. Als je over een jaar een hertest laat doen, of als je van aanbieder wisselt, komt er geen discussie over "jullie hebben andere pagina's getest". De methode dwingt je een vergelijkbaar en controleerbaar onderzoek te krijgen.

Voor ons is het ook een manier om het gesprek met klanten te structureren. Stap 1 en 2 doen we samen, dan weten beide partijen wat er getoetst gaat worden voordat we aan stap 4 beginnen. Geen verrassingen, geen scope creep.

## Eerste stap

Wil je weten hoe een WCAG-EM-onderzoek er voor jouw site uit zou zien? [Vraag een offerte aan](/offerte-wcag-onderzoek/); je krijgt binnen twee werkdagen een prijs met de scope en de steekproef erbij. Liever eerst overleggen, [neem dan contact op](/contact/).

Meer over wat er überhaupt in een toegankelijkheidsonderzoek zit: [Toegankelijkheidsonderzoek](/toegankelijkheidsonderzoek/)

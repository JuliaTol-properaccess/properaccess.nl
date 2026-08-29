---
title: "WCAG-EM: de officiële methode voor een toegankelijkheidsonderzoek"
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
description: "WCAG-EM is de W3C-methode voor een toegankelijkheidsonderzoek. In vijf stappen leg ik uit wat het is, hoe het werkt en wanneer je er niet omheen kunt."
keywords:
  - WCAG-EM
  - WCAG-EM methode
  - toegankelijkheidsonderzoek methode
  - WCAG audit methodiek
  - evaluatiemethodiek WCAG
meta_title: "WCAG-EM uitgelegd: de 5 stappen van een officieel onderzoek | Proper Access"
meta_description: "Wat is WCAG-EM en wanneer heb je het nodig? De vijf stappen van de W3C-evaluatiemethodiek, uitgelegd in gewone taal."
---

Als je een toegankelijkheidsonderzoek laat uitvoeren, komt er vaak een term langs die niet meteen iets zegt: **WCAG-EM**. Het staat voor *Website Accessibility Conformance Evaluation Methodology*. Het is de methode die het W3C, dezelfde club die WCAG maakt, heeft vastgelegd voor hoe je een WCAG-audit hoort uit te voeren.

WCAG zegt **wát** je moet toetsen. WCAG-EM zegt **hoe** je dat doet. Dat tweede is net zo belangrijk, want zonder een vaste methode kan iedereen z'n eigen conclusies trekken en is een audit niet vergelijkbaar of controleerbaar.

## Waarom WCAG-EM bestaat

Stel dat drie auditors dezelfde website onderzoeken. Zonder methode kiest de een alleen de homepage, de ander tien willekeurige pagina's, de derde alleen het contactformulier. Ze komen met drie verschillende lijsten problemen en drie verschillende conclusies. Wie heeft gelijk?

WCAG-EM lost dat op. Het legt vast:

- **Hoe je bepaalt wat bij de website hoort** (scope)
- **Welke pagina's altijd mee moeten** in het onderzoek
- **Hoe je een representatieve steekproef samenstelt**
- **Hoe je de evaluatie uitvoert en rapporteert**

Daardoor zijn audits van verschillende partijen vergelijkbaar, en kan een hercontrole door een andere auditor dezelfde conclusies opleveren.

## Wanneer heb je WCAG-EM nodig?

Op één plek is het een harde eis. Het [Register van Toegankelijkheidsverklaringen](https://www.toegankelijkheidsverklaring.nl/register) accepteert geen onderzoek dat er niet volgens is uitgevoerd, en dat geldt voor elke status die je aanvraagt, niet alleen voor status A. Val je onder het BDTO, dan moet je [toegankelijkheidsverklaring](/blog/moet-mijn-overheidswebsite-voldoen-aan-wcag/) dus op een WCAG-EM-evaluatie zijn gebaseerd.

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

Je gaat niet elke pagina van een website met 10.000 producten testen. Dat hoeft ook niet. WCAG-EM schrijft voor dat je een steekproef samenstelt uit twee soorten pagina's:

**Verplichte pagina's** (moeten altijd mee):
- Homepage
- Contactpagina
- Zoekfunctie en resultatenpagina
- Inlog- en registratiepagina
- Foutpagina's (404, sessie verlopen)
- Toegankelijkheidsverklaring
- Voorbeelden van elke kritieke flow (bestellen, aanvragen, downloaden)

**Representatieve pagina's** (dekken de variatie af):
- Eén pagina per paginatype of template
- Pagina's met uiteenlopende componenten (tabellen, formulieren, video, interactieve elementen)
- Documenten die op de site staan (PDF's, Word-bestanden)

Vuistregel: voor een gemiddelde site kom je op 15 tot 25 pagina's. Te weinig en je mist problemen, te veel en je betaalt voor dubbel werk.

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

Een audit *zonder* WCAG-EM is niet fout, maar is geen formele conformiteitsbeoordeling. Het kan nuttig zijn als snelle check, als UX-onderzoek of als voorbereiding op een officiële audit. Maar je kunt er niet op bouwen voor:

- Je toegankelijkheidsverklaring bij de overheid
- Een EAA-conformiteitsbewijs
- Juridische verdediging bij een klacht

Als de methode er niet bij staat in de offerte, vraag er dan naar. Een professionele aanbieder gebruikt WCAG-EM standaard en kan je stap voor stap uitleggen hoe de scope, steekproef en rapportage zijn opgebouwd.

## Wat je eraan hebt

De kracht van WCAG-EM zit in de reproduceerbaarheid. Als je over een jaar een hertest laat doen, of als je van aanbieder wisselt, komt er geen discussie over "jullie hebben andere pagina's getest". De methode dwingt je een vergelijkbaar en controleerbaar onderzoek te krijgen.

Voor ons is het ook een manier om het gesprek met klanten te structureren. Stap 1 en 2 doen we samen, dan weten beide partijen wat er getoetst gaat worden voordat we aan stap 4 beginnen. Geen verrassingen, geen scope creep.

## Eerste stap

Wil je weten hoe een WCAG-EM-onderzoek er voor jouw site uit zou zien? [Vraag een offerte aan](/offerte-wcag-onderzoek/); je krijgt binnen twee werkdagen een prijs met de scope en de steekproef erbij. Liever eerst overleggen, [neem dan contact op](/contact/).

Meer over wat er überhaupt in een toegankelijkheidsonderzoek zit: [Toegankelijkheidsonderzoek: wat is het en wanneer heb je het nodig?](/blog/toegankelijkheidsonderzoek-wat-is-het/)

---
title: "Hoe maak je een website digitaal toegankelijk? Van WCAG tot actieplan"
date: 2026-03-11
slug: "hoe-maak-je-een-website-digitaal-toegankelijk"
categories:
  - "de EAA"
  - "achtergrond_wcag"
tags:
  - "toegankelijke-website"
  - "wcag"
  - "eaa"
  - "digitale-toegankelijkheid"
description: "Hoe maak je een website digitaal toegankelijk? Lees over het verschil tussen WCAG 2.1 en 2.2, niveau A en AA, wat het kost en waar je begint als je niet weet waar je staat."
keywords:
  - hoe maak je een website toegankelijk
  - website digitaal toegankelijk maken
  - wcag 2.1 vs 2.2
  - kosten toegankelijke website
  - verschil wcag niveau a aa
  - eaa digitale toegankelijkheid
  - waar beginnen digitale toegankelijkheid
  - toegankelijkheidsaudit kosten
  - toegankelijkheid website verplicht
  - wcag wetgeving
  - wcag wet
  - wcag verplicht
aliases:
  - /hoe-maak-je-een-website-digitaal-toegankelijk/
---

Sinds de European Accessibility Act (EAA) in juni 2025 van kracht is, krijg ik wekelijks dezelfde vraag: "We moeten iets met toegankelijkheid, maar waar beginnen we?" Het eerlijke antwoord: dat hangt af van je website, je team en je budget. Maar er is een duidelijk pad. In dit artikel loop ik je er doorheen.

Ik doe dit werk sinds 2019. In die tijd heb ik meer dan 900 audits uitgevoerd — voor musea, overheden, webshops, uitgeverijen en alles daartussenin. Ik heb gezien hoe organisaties vastlopen, maar ook hoe ze in een paar maanden enorme stappen maken. Dit artikel is gebaseerd op die ervaring.

## Wat betekent "digitaal toegankelijk"?

Een digitaal toegankelijke website is een website die iedereen kan gebruiken. Ook mensen die blind zijn en een schermlezer gebruiken. Ook mensen die geen muis kunnen bedienen en alles met het toetsenbord doen. Ook mensen met een cognitieve beperking die extra tijd nodig hebben.

Dat klinkt abstract, maar in de praktijk gaat het om heel concrete dingen:

- **Afbeeldingen** hebben een tekstbeschrijving nodig (alt-tekst) zodat een schermlezer kan vertellen wat erop staat
- **Koppen** moeten een logische structuur volgen (H1, H2, H3) zodat iemand met een schermlezer door de pagina kan navigeren
- **Formulieren** moeten duidelijke labels en foutmeldingen hebben
- **Knoppen en links** moeten met het toetsenbord bereikbaar en bedienbaar zijn
- **Kleurcontrast** moet hoog genoeg zijn zodat tekst leesbaar is voor mensen met een visuele beperking
- **Video's** hebben ondertiteling nodig

Ongeveer 25 procent van alle mensen heeft een vorm van beperking. Dat is niet een kleine groep — dat is een kwart van je bezoekers.

## De standaard: WCAG

WCAG staat voor Web Content Accessibility Guidelines. Dit zijn de internationale richtlijnen voor digitale toegankelijkheid, opgesteld door het W3C (World Wide Web Consortium). Als iemand zegt dat een website "aan de richtlijnen moet voldoen", bedoelen ze WCAG.

WCAG bestaat uit **succescriteria** — concrete eisen waaraan je website moet voldoen. Denk aan: "Alle afbeeldingen hebben een tekstalternatief" of "De focusvolgorde is logisch".

### Niveau A en AA: wat is het verschil?

WCAG kent drie niveaus:

- **Niveau A** — de basislaag. Dit zijn de absolute minimumeisen. Als je hier niet aan voldoet, is je website voor sommige gebruikers letterlijk onbruikbaar. Voorbeeld: afbeeldingen zonder alt-tekst (SC 1.1.1) of video zonder ondertiteling (SC 1.2.2).

- **Niveau AA** — de standaard waar je aan moet voldoen. De EAA en het Besluit digitale overheid (Bdo) vereisen allebei niveau AA. Dit gaat een stap verder dan de basis. Voorbeeld: voldoende kleurcontrast (SC 1.4.3), zichtbare focusindicator (SC 2.4.7) en foutidentificatie bij formulieren (SC 3.3.1).

- **Niveau AAA** — het hoogste niveau. Dit is in de meeste gevallen niet realistisch voor een volledige website en wordt ook niet wettelijk vereist. Maar voor specifieke onderdelen kan het waardevol zijn.

**In de praktijk:** als je "voldoen aan WCAG" hoort, bedoelt men niveau A en AA samen. Dat zijn in totaal 55 succescriteria bij WCAG 2.2 (of 50 bij WCAG 2.1).

## WCAG 2.1 vs. 2.2: wat is het verschil?

Toen ik in 2019 begon met audits, toetsten we op WCAG 2.1. In 2026 is die versie nog steeds geldig. Maar in de praktijk toetsen alle auditbureaus inmiddels op **WCAG 2.2**, de nieuwste versie uit oktober 2023.

Er is één uitzondering: **apps**. Die toetsen we nog steeds op WCAG 2.1, onder de Europese norm EN 301 549. Dat verandert waarschijnlijk de komende jaren, maar voorlopig is 2.1 de norm voor apps.

### Wat is er nieuw in WCAG 2.2?

WCAG 2.2 voegt negen succescriteria toe aan 2.1. Die zijn er niet zomaar bijgekomen — ze zijn toegevoegd omdat de manier waarop we het web gebruiken is veranderd. Meer mobiel, meer formulieren, meer complexe interfaces.

De belangrijkste nieuwe criteria:

| Criterium                                  | Wat het betekent                                                                                    | Waarom het is toegevoegd                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **2.4.11 Focus niet verborgen (AA)**       | Een element met toetsenbordfocus mag niet volledig verborgen zijn achter een sticky header of modal | Sticky navigatiebalken werden steeds populairder en verborgen regelmatig de focusindicator                   |
| **2.4.13 Focusweergave (AAA)**             | De focusindicator moet groot genoeg en contrastrijk genoeg zijn                                     | De standaard browser-focus was op veel websites nauwelijks zichtbaar                                         |
| **2.5.7 Sleepbewegingen (AA)**             | Alles wat je kunt slepen, moet ook met een klik of tik werken                                       | Drag-and-drop werd steeds vaker gebruikt, maar is onmogelijk voor sommige gebruikers                         |
| **2.5.8 Doelgebied minimaal (AA)**         | Klikbare elementen moeten minimaal 24x24 CSS-pixels zijn                                            | Op mobiel waren knoppen vaak te klein om nauwkeurig te raken                                                 |
| **3.2.6 Consistente hulp (A)**             | Hulpfuncties (contactinfo, chat) staan op elke pagina op dezelfde plek                              | Gebruikers met een cognitieve beperking raakten in de war als hulpfuncties steeds op een andere plek stonden |
| **3.3.7 Toegankelijke authenticatie (AA)** | Inloggen mag geen geheugentest zijn (geen puzzels, geen wachtwoord overtypen)                       | CAPTCHAs en complexe inlogschermen sloten te veel mensen uit                                                 |
| **3.3.8 Redundante invoer (A)**            | Informatie die je al hebt ingevuld, mag niet opnieuw gevraagd worden                                | Lange formulieren vroegen steeds vaker dezelfde gegevens meerdere keren                                      |

**Kort gezegd:** WCAG 2.2 repareert problemen die we in de praktijk steeds vaker tegenkwamen. Het is geen revolutie, maar een logische update.

### Welke versie moet jij gebruiken?

- **Website of webshop?** Toets op WCAG 2.2
- **App?** Toets op WCAG 2.1 (conform EN 301 549)
- **Overheidswebsite?** Het Bdo verwijst naar EN 301 549, die nu WCAG 2.1 bevat. In de praktijk adviseer ik om op 2.2 te toetsen — die criteria komen er toch aan, en je bent dan voorbereid

## Waar begin je als je niet weet waar je staat?

Dit is de vraag die ik het vaakst hoor. En het antwoord is simpeler dan je denkt.

### Stap 1: Breng je huidige situatie in kaart

Je kunt pas een plan maken als je weet wat er aan de hand is. Er zijn twee manieren om dat te doen:

**Zelf een eerste check doen:**

- Navigeer je website met alleen het toetsenbord (Tab, Enter, Escape). Kom je overal? Zie je waar je bent?
- Zet je browser op 200% zoom. Valt er content weg? Overlappen elementen?
- Gebruik onze gratis [koppenstructuur checker](https://www.properaccess.nl/tools/koppenstructuur-checker/) en [alt-tekst checker](https://www.properaccess.nl/tools/alt-tekst-checker/)
- Draai Lighthouse in Chrome DevTools (maar weet dat dit maximaal 30 procent van de problemen vindt)

**Een professionele audit laten doen:**
Een audit door een gespecialiseerd bureau geeft je een compleet beeld. Bij Proper Access toetsen we handmatig op alle 55 succescriteria van WCAG 2.2, met echte hulpsoftware. Je krijgt een rapport met per pagina en per element precies wat er aan de hand is en hoe je het oplost.

### Stap 2: Prioriteer

Niet alles hoeft tegelijk. Na een audit of eerste check kun je prioriteiten stellen:

1. **Eerst de showstoppers** — problemen die je website onbruikbaar maken voor bepaalde groepen. Denk aan: geen toetsenbordbediening, ontbrekende alt-teksten op essentiële afbeeldingen, formulieren zonder labels
2. **Dan de middenlaag** — problemen die de ervaring verslechteren maar de website niet onbruikbaar maken. Denk aan: onvoldoende kleurcontrast, ontbrekende foutmeldingen, onduidelijke linkteksten
3. **Tot slot de verfijning** — problemen die de ervaring verbeteren maar niet kritiek zijn. Denk aan: ARIA-optimalisaties, verbeterde focusstijlen, betere koppenstructuur

### Stap 3: Fix en test

De meeste toegankelijkheidsproblemen vallen in twee categorieen:

- **Contentproblemen** — alt-teksten, koppenstructuur, linkteksten, documentstructuur. Dit kan je webredactie oppakken.
- **Technische problemen** — toetsenbordbediening, ARIA-attributen, formuliervalidatie, focusbeheer. Dit is werk voor je developers.

Verdeel het werk over de juiste mensen. Een webredacteur hoeft niet te weten hoe ARIA werkt, en een developer hoeft niet na te denken over alt-teksten.

### Stap 4: Laat een retest doen

Na het doorvoeren van verbeteringen wil je weten of het gelukt is. Een retest bevestigt dat de aanpassingen correct zijn doorgevoerd en dat er geen nieuwe problemen zijn ontstaan.

## Wat kost het om een website toegankelijk te maken?

Dit is de tweede vraag die ik het vaakst krijg. Het eerlijke antwoord: dat verschilt enorm. Maar ik kan je wel een kader geven.

### De audit

Een toegankelijkheidsaudit kost bij Proper Access **vanaf circa 1.800 euro** (excl. btw). De exacte prijs hangt af van de complexiteit van je website: hoeveel verschillende templates heb je, hoe complex zijn je formulieren, gebruik je een CMS of is het maatwerk?

### Het oplossen van problemen

Dit is waar de kosten het meest variëren. Factoren die meespelen:

- **De staat van je website** — een website die recent is gebouwd met toegankelijkheid in gedachten heeft minder problemen dan een website van tien jaar oud
- **Je CMS** — sommige CMS'en maken het makkelijk om toegankelijke content te publiceren, andere maken het bijna onmogelijk
- **Je team** — als je developers al ervaring hebben met toegankelijkheid, gaat het sneller
- **De omvang** — een website met 10 templates is sneller aangepast dan een met 50

**Een grove indicatie:** voor een gemiddelde bedrijfswebsite ben je in totaal tussen de 5.000 en 15.000 euro kwijt voor audit, aanpassingen en retest. Dat klinkt als veel, maar het is een eenmalige investering. Daarna gaat het om onderhoud — en dat is een stuk goedkoper. Als je een auditbureau zoekt, let dan op hoeveel informatie en oplossignen in hun rapporten staan. Goed uitleg kan je vele uren en duizenden euro's schelen.

### Waar kun je op besparen?

- **Begin bij de bouw.** Toegankelijkheid meenemen tijdens het ontwikkelproces is vele malen goedkoper dan achteraf repareren
- **Doe eens een test van je kennis.** We hebben quizes gemaakt voor de webredactie en [een quiz voor webdevelopers](https://www.properaccess.nl/digital-agency/#quizSection) om je een inschatting te geven hoe goed je team ervoor staat
- **Train je team.** Een webredactie die weet hoe ze toegankelijke content publiceert, voorkomt een groot deel van de problemen
- **Gebruik onze gratis tools.** De [tools op onze website](https://www.properaccess.nl/tools/) helpen je om zelf de basis te controleren

## Veelgestelde vragen

### Is WCAG 2.1 nog geldig?

Ja. WCAG 2.1 is nog steeds een geldige standaard. Maar omdat WCAG 2.2 achterwaarts compatibel is (alles uit 2.1 zit ook in 2.2), adviseer ik om direct op 2.2 te toetsen. Dan hoef je straks niet opnieuw te beginnen als de wetgeving wordt bijgewerkt.

### Is toegankelijkheid van een website verplicht?

Kort gezegd: ja, voor de meeste organisaties is WCAG verplicht. De wetgeving verschilt per sector:

- **Bedrijfsleven:** de European Accessibility Act (EAA) is de WCAG-wet voor het bedrijfsleven. Als je meer dan 10 medewerkers hebt of meer dan 2 miljoen euro omzet, dan is de toegankelijkheid van je website verplicht sinds juni 2025. De EAA verwijst naar de Europese norm EN 301 549, die op haar beurt verwijst naar WCAG.
- **Overheid:** het Besluit digitale overheid (Bdo) verplicht overheidswebsites al langer om aan WCAG te voldoen.
- **Semipublieke sector:** organisaties in het onderwijs, de zorg en de cultuursector vallen vaak onder de EAA of het Bdo, afhankelijk van hun financiering en rechtsvorm.

De WCAG-wetgeving is dus geen optie meer — het is een verplichting. Hoe eerder je begint, hoe minder het kost.

### Kan ik dit niet gewoon met een tool oplossen?

Nee. Automatische tools vinden maximaal 20 tot 30 procent van de toegankelijkheidsproblemen. Ze kunnen niet beoordelen of een alt-tekst de afbeelding goed beschrijft. Ze kunnen niet testen of een formulier logisch werkt met een schermlezer. Ze kunnen niet beoordelen of je koppenstructuur inhoudelijk klopt.

Tools zijn een goed startpunt, maar geen eindpunt.

### Hoe lang duurt het om een website toegankelijk te maken?

Reken op drie tot zes maanden voor het hele traject: audit, verbeteringen doorvoeren, retest. Maar de eerste verbeteringen kun je vaak al binnen een week doorvoeren.

## Volgende stap

Wil je weten waar jouw website staat? Neem [contact op](https://www.properaccess.nl/contact/) voor een vrijblijvend gesprek. In 30 minuten bespreken we je website en geef ik je een eerste inschatting — van de situatie, de aanpak en de kosten.

Liever eerst zelf checken? Gebruik onze [gratis tools](https://www.properaccess.nl/tools/) om de basis te controleren.

---

_Julia Tol is oprichter van Proper Access en voert sinds 2019 toegankelijkheidsaudits uit. Niet met dikke rapporten, maar met concrete oplossingen._

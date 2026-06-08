---
draft: true
title: "Toegankelijkheidsonderzoek: wat is het en wanneer heb je het nodig?"
date: 2026-04-17
slug: "toegankelijkheidsonderzoek-wat-is-het"
categories:
  - "achtergrond_wcag"
tags:
  - "veelgestelde-vragen"
  - "audit"
  - "wcag"
  - "mini-audit"
description: "Wat is een toegankelijkheidsonderzoek, wat zit er in en wanneer kies je voor een mini-audit versus een volledige audit? Een eerlijke uitleg zonder jargon."
keywords:
  - toegankelijkheidsonderzoek
  - mini-audit website
  - WCAG audit
  - digitale toegankelijkheid onderzoek
seo_title: "Toegankelijkheidsonderzoek: wat is het en wanneer kies je het? | Proper Access"
seo_description: "Wat zit er in een toegankelijkheidsonderzoek? Verschil tussen mini-audit en audit, wat je krijgt, wat het kost en hoe je de juiste keuze maakt."
---

Een toegankelijkheidsonderzoek is een systematische test van je website, app of document tegen de WCAG-richtlijnen. Het laat zien wat werkt voor bezoekers met een beperking — en wat niet.

Klinkt simpel. Maar in de praktijk zit er veel verschil tussen wat verschillende aanbieders eronder verstaan. Dit artikel legt uit welke soorten er zijn, wat er in zit, en welke keuze bij welke situatie past.

## Welke soorten toegankelijkheidsonderzoek zijn er?

Grofweg drie niveaus:

| Type                                         | Wat je krijgt                                                     | Prijsindicatie   |
| -------------------------------------------- | ----------------------------------------------------------------- | ---------------- |
| **Mini-audit**                               | Globaal beeld van knelpunten op hoofdpagina's                     | 495 euro         |
| **Deelaudit** (content, techniek of systeem) | Diepgaand onderzoek op één deelgebied                             | Vanaf € 1.500    |
| **Volledige audit**                          | WCAG-toets op alle succescriteria, representatieve paginaselectie | Vanaf € 2.100    |

Daaronder zit een soort "nulde niveau": de puur geautomatiseerde scan. Een tool als axe of Lighthouse draait over je pagina's en spuugt een rapport uit. Zo'n scan is geen toegankelijkheidsonderzoek — hij vindt hooguit een derde van de problemen en mist bijna alles wat met context, betekenis of gebruikerservaring te maken heeft. Zelf gebruiken we ze zelden, omdat ze vaak ook valse meldingen geven en je daarmee op het verkeerde spoor zetten.

## Wat zit er in een volledig onderzoek?

Een serieus toegankelijkheidsonderzoek bestaat altijd uit deze stappen:

### 1. Intake en scope

Wat is de website, wat doet-ie, welke paginatypes zijn er, wie is de doelgroep? Op basis daarvan kiest de auditor welke pagina's representatief zijn. Een webshop met 10.000 productpagina's hoeft niet in z'n geheel getest te worden — één goed gekozen productpagina vertelt je wat je moet weten.

### 2. Handmatig onderzoek

Dit is het grootste deel van het werk. Het idee is simpel: elke beperking die WCAG probeert te ondervangen, wordt op elke pagina gesimuleerd. We kijken wat iemand die niet kan zien hoort, wat iemand die geen muis kan gebruiken kan bereiken, wat iemand met kleurenblindheid mist, wat iemand met ADHD afleidt, en of iemand met epilepsie veilig door de pagina komt.

Dat doen we door de pagina systematisch te doorlopen met:

- **Toetsenbord** — werkt alles zonder muis? Is de focus altijd zichtbaar, volgt die een logische volgorde, en zijn er geen plekken waar je niet meer weg komt?
- **Schermlezer** (NVDA, JAWS, VoiceOver) — wat hoort iemand die niet kan zien? Klopt de koppenstructuur, zijn labels en alt-teksten zinvol, worden statusberichten voorgelezen?
- **Zoom tot 400%** en **vergrote tekstafstand** — blijft content leesbaar en bruikbaar, past alles in één kolom, verdwijnt er niets?
- **Spraakbesturing** (Dragon, Voice Control) — kun je alle knoppen bij naam aanroepen?
- **Kleurfilters en contrastsimulatie** — wat mist iemand met deuteranopie of een cataract? Is informatie alleen via kleur herkenbaar?
- **Hulpsoftware voor cognitieve beperkingen** — werkt een leesmodus, is content op B1-niveau, kan iemand met beperkt werkgeheugen een proces voltooien?
- **Animatie- en bewegingschecks** — zijn er triggers voor vestibulaire klachten of epilepsie?

Daarnaast wordt de onderliggende code geïnspecteerd: semantiek, ARIA, koppenstructuur, labels. Dat is geen "scan die we draaien" maar een inspectie die de auditor zelf doet terwijl hij de pagina doorloopt.

Bij elkaar komen we uit op zo'n **200 controlepunten per pagina**. Eén WCAG-succescriterium vraagt vaak meerdere checks — "voldoende contrast" betekent contrast van lopende tekst, grote tekst, iconen, formulierranden, focusindicator en statuskleuren, allemaal apart nagemeten. Al die checks samen geven pas een eerlijk beeld.

Welke criteria voor welke beperking gelden, hebben we overzichtelijk gemaakt in [onze gratis tool WCAG-succescriteria per beperking](/tools/sc-per-beperking/). Daar zie je per type bezoeker welke succescriteria relevant zijn.

### 3. Rapportage

Elk probleem wordt beschreven met locatie (URL, element), betrokken WCAG-criterium, impact voor de gebruiker, screenshot en een oplossingsrichting. Bij ons begint elke bevinding met een user story vanuit de bezoeker — zodat niet-technische collega's ook begrijpen waarom iets belangrijk is.

### 4. Nabespreking en retest (optioneel)

Nabespreking: samen het rapport doorlopen en vragen beantwoorden. Retest: na de fixes opnieuw controleren of alles nu wel klopt.

## Mini-audit of volledige audit: wat past bij jou?

**Kies een mini-audit als:**

- Je nog niet weet of toegankelijkheid een probleem is op je site
- Je een globaal beeld wil voordat je budget vraagt
- Je aanbieders wil vergelijken voordat je kiest
- Je de urgentie intern zichtbaar wil maken

**Kies een volledige audit als:**

- Je wettelijk verplicht bent (overheid onder Wdo, webshop onder EAA)
- Je een toegankelijkheidsverklaring wil publiceren
- Je toe wil naar WCAG-conformiteit en daar bewijs voor nodig hebt
- Je weet dat er issues zijn en een oplossingsplan wil

**Kies een deelaudit als:**

- Alleen je content-team moet aan de slag (content-audit)
- Alleen je developers moeten aan de slag (techniek-audit)
- Je een specifiek platform of CMS wil laten testen (systeem-audit)

## Wat je eruit haalt

Een goed toegankelijkheidsonderzoek levert drie dingen:

1. **Een lijst met concrete issues**, met prioriteit, impact en oplossingsrichting per stuk
2. **Een totaaloordeel** — waar sta je ten opzichte van WCAG 2.1 of 2.2, op welk niveau (A, AA)
3. **Een vervolgpad** — wat pak je eerst aan, wat kan later, wat is een structureel probleem in je CMS

Het is geen afvinkoefening. Een bruikbaar rapport helpt je team om zélf te begrijpen wat er mis is en hoe ze het oplossen — niet alleen tijdens dit project, maar ook daarna.

## Wat het niet is

Een paar dingen die géén toegankelijkheidsonderzoek zijn, hoewel ze zo worden verkocht:

- **Overlay-tools** (AccessiBe, UserWay) die claimen je site "instant WCAG-conform" te maken. Ze doen geen onderzoek — ze plakken een widget over je site. [Waarom dat niet werkt →](/blog/overlay-tools-accessibe-userway-wcag/)
- **Een PDF-rapport uit Google Lighthouse** — die vindt een kwart van de problemen, en niet de belangrijkste.
- **Een klantpanel met mensen met een beperking** — dat is waardevol gebruikersonderzoek, maar vervangt geen WCAG-toets.

## Eerste stap

Weet je nog niet of je een mini-audit of een audit nodig hebt? Een [mini-audit](/quickscan/) is het startpunt. Daarna kunnen we samen bepalen wat bij je organisatie, wettelijke verplichting en budget past.

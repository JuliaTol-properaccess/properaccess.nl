---
title: "Digitale toegankelijkheid voor musea en culturele instellingen"
date: 2026-03-19
slug: "digitale-toegankelijkheid-musea-cultuur"
meta_title: "Twee musea die op elkaar lijken, twee verschillende wetten"
categories:
  - "de EAA"
  - "achtergrond_wcag"
tags:
  - "museum"
  - "cultuur"
  - "ticketing"
  - "digitale-toegankelijkheid"
  - "eaa"
description: "Musea, theaters en culturele instellingen krijgen te maken met de EAA. Wat zijn de specifieke uitdagingen bij ticketing, interactieve kaarten en audiogidsen?"
keywords:
  - digitale toegankelijkheid museum
  - digitale toegankelijkheid cultuur
  - toegankelijkheid culturele instellingen
  - museum website toegankelijk
  - ticketing toegankelijk
  - eaa musea
  - eaa culturele sector
  - toegankelijke ticketverkoop
  - wcag museum
  - digitale toegankelijkheid theater
  - toegankelijkheid attracties
---

Musea, theaters, festivals en attractieparken hebben een bijzondere positie als het gaat om digitale toegankelijkheid. Ze zijn van nature bezig met beleving en inclusie, maar hun websites en digitale systemen lopen vaak achter.

Ik werk al jaren met culturele instellingen aan digitale toegankelijkheid. In dit artikel deel ik de specifieke uitdagingen die ik tegenkom en hoe je ze aanpakt.

## Waarom de culturele sector extra aandacht nodig heeft

Culturele instellingen hebben te maken met een combinatie van factoren die je bij andere websites minder ziet:

1. **Ticketingsystemen van derden.** De meeste musea en theaters gebruiken externe ticketingsoftware. Die software is niet altijd toegankelijk, en je hebt beperkte controle over de interface.

2. **Visueel rijke websites.** Cultuur draait om beeld en beleving. Dat leidt tot websites met veel grote afbeeldingen, video's, animaties en interactieve elementen. Mooi, maar niet altijd toegankelijk.

3. **Interactieve plattegronden.** Veel musea hebben een digitale plattegrond van het gebouw. Die is bijna nooit toegankelijk voor schermlezers.

4. **Wisselende content.** Tentoonstellingen veranderen regelmatig. Dat betekent voortdurend nieuwe pagina's, nieuwe afbeeldingen, nieuwe beschrijvingen. Elke keer opnieuw moet de content toegankelijk zijn.

5. **Publieke functie.** Musea en theaters zijn er voor iedereen. Dat maakt toegankelijkheid niet alleen een wettelijke verplichting, maar een kernwaarde.

## Welke wet geldt voor jouw museum?

Nederland kent twee regimes voor digitale toegankelijkheid, en voor de eigen website of app van een organisatie geldt het ene of het andere. Nooit allebei.

- Het **Besluit digitale toegankelijkheid overheid (BDTO)** geldt sinds 2018 voor overheidsinstanties en publiekrechtelijke instellingen.
- De **European Accessibility Act (EAA)** geldt sinds 28 juni 2025 voor commerciële bedrijven die digitale diensten aanbieden.

Welke van de twee op jou van toepassing is, hangt af van wat je organisatie juridisch is. Niet van wat je aanbiedt. Online tickets verkopen zet je dus niet automatisch onder de EAA.

En hier zit het punt waar de culturele sector zich van andere sectoren onderscheidt: die grens loopt niet waar je hem verwacht. Twee musea die er van buiten hetzelfde uitzien, met dezelfde soort collectie en dezelfde ticketshop, kunnen onder verschillende wetten vallen.

### Subsidie is niet het criterium

Dit gaat het vaakst mis. "Wij krijgen overheidsgeld, dus wij vallen onder het BDTO" klopt niet.

Publiekrechtelijke instelling is een juridisch begrip uit het aanbestedingsrecht, uit artikel 2 van richtlijn 2014/24. Er zijn drie voorwaarden en die moeten alle drie gelden:

1. de instelling is opgericht om te voorzien in behoeften van algemeen belang, zonder industrieel of commercieel karakter;
2. ze heeft rechtspersoonlijkheid;
3. ze wordt in hoofdzaak door de overheid gefinancierd, óf staat onder toezicht van de overheid, óf heeft een bestuur waarvan de overheid meer dan de helft benoemt.

Een museum met een subsidie is dus niet automatisch BDTO-plichtig. Het gaat om financiering in hoofdzaak, en de eerste twee voorwaarden moeten er ook zijn. Twijfel je, leg het dan voor aan een jurist en niet aan een auditor. Wij kunnen je website toetsen, maar niet vaststellen wat je organisatie in juridische zin is.

### Wat het verschil in de praktijk betekent

Voor het testwerk maakt het weinig uit: onder beide wetten ligt de Europese norm EN 301 549, en die neemt de WCAG-succescriteria over. Het verschil zit in wat je moet publiceren.

- **Onder het BDTO** heeft elk digitaal kanaal een eigen toegankelijkheidsverklaring nodig in het [Register van Toegankelijkheidsverklaringen](https://www.toegankelijkheidsverklaring.nl/register). Je hoofdwebsite, je collectiesite, je ticketshop en je museum-app zijn dus vier verklaringen, geen één.
- **Onder de EAA** publiceer je informatie over de toegankelijkheid van je dienst op je eigen website. Dat is iets anders dan een verklaring in het Register; dat Register hoort bij het BDTO.

## Wat er onder de wet valt

Val je onder de EAA, dan gaat het om meer dan alleen de knop "koop een ticket". De hele keten telt mee:

- **Ticketverkoop:** het volledige proces van selecteren tot betalen
- **Online reserveringen:** rondleidingen, workshops, groepsbezoeken
- **Digitale informatievoorziening:** tentoonstellingspagina's, openingstijden, routebeschrijvingen
- **Nieuwsbrieven en e-mailcommunicatie**

## De 6 meest voorkomende problemen

### 1. Ticketingsystemen

Dit is het grootste pijnpunt. Bijna alle culturele instellingen gebruiken externe ticketingsoftware: Stager, CM.com, Tix, Eventbrite of een maatwerk-oplossing. De kwaliteit van de toegankelijkheid verschilt enorm.

**Wat ik vaak zie:**

- Datumselectie die niet werkt met een toetsenbord
- Stoelkeuze bij theater en concertzalen die visueel is, maar niet toegankelijk
- Betaalformulieren zonder labels
- Pop-up vensters die de focus niet vangen (je "tabt" erachter langs)

**Wat je kunt doen:** Vraag je ticketingleverancier om een toegankelijkheidsverklaring. Test het bestelproces zelf met alleen een toetsenbord. Overweeg een alternatieve boekingsroute (bijvoorbeeld telefonisch) als het digitale systeem niet volledig toegankelijk is. En maak dat alternatief makkelijk vindbaar.

### 2. Interactieve kaarten en plattegronden

Een digitale kaart van je museum of festivalterrein is handig, maar alleen als je hem kunt gebruiken. De meeste interactieve kaarten zijn gebouwd met canvas-elementen of SVG zonder tekstalternatieven. Een schermlezer leest niets.

**Wat je kunt doen:** Bied naast de interactieve kaart een toegankelijk alternatief aan. Dat kan een lijst zijn van alle zalen/locaties met beschrijvingen, of een eenvoudige tabel. De interactieve kaart is een aanvulling, niet de enige manier om de informatie te krijgen.

### 3. Audiogidsen en multimediagidsen

Digitale audiogidsen worden steeds populairder. Maar de apps en webapplicaties die ze aanbieden, zijn lang niet altijd toegankelijk. Ironisch genoeg: een audiogids die bedoeld is om kunst toegankelijk te maken, is zelf niet altijd bruikbaar voor iemand met een beperking.

**Waar je op moet letten:**

- Zijn de bedieningselementen (play, pauze, volgende) bereikbaar met een toetsenbord en schermlezer?
- Is er een tekstversie van de audiocontent beschikbaar?
- Werkt de app ook met de toegankelijkheidsinstellingen van het besturingssysteem (vergroot lettertype, hoog contrast)?

### 4. Tentoonstellingspagina's met veel beeldmateriaal

Een tentoonstellingspagina bevat typisch 10 tot 30 afbeeldingen van kunstwerken, sfeerbeelden en installatiefoto's. Die hebben allemaal alt-teksten nodig, en bij kunst is dat niet triviaal.

**Hoe schrijf je alt-tekst voor kunst?**

Het hangt af van de context. Als de afbeelding puur sfeer is (een foto van de tentoonstellingsruimte), beschrijf je kort wat je ziet. Als het een reproductie van een kunstwerk is, beschrijf je het werk: titel, kunstenaar en wat er te zien is.

Gebruik de [alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/) om te bepalen welk type alt-tekst je nodig hebt.

### 5. Video zonder ondertiteling

Veel musea en culturele instellingen maken promotievideo's, rondleidingsvideo's en documentaires. Ondertiteling ontbreekt vaak, of is automatisch gegenereerd zonder controle.

**De eis:** elke vooraf opgenomen video met spraak moet ondertiteling hebben (SC 1.2.2). Live video ook, maar dat is niveau AA en mag "op basis van best effort."

**Tip:** automatische ondertiteling via YouTube of andere platforms is een goed startpunt, maar controleer altijd de output. Eigennamen, kunsttermen en niet-Nederlandse woorden gaan vaak fout.

### 6. Nieuwsbrieven en e-mails

De meeste culturele instellingen versturen regelmatig nieuwsbrieven. Die worden vaak opgemaakt in e-mailtemplates met veel afbeeldingen en weinig structuur. Koppen zijn visueel, maar niet als koppen gemarkeerd. Afbeeldingen missen alt-teksten. Links zijn niet beschrijvend, bijvoorbeeld "klik hier".

**Wat je kunt doen:** Zorg dat je e-mailtemplate koppen gebruikt (H1, H2), dat afbeeldingen alt-teksten hebben en dat links beschrijvend zijn ("Bekijk de zomerprogrammering" in plaats van "Klik hier").

## Hoe pak je het aan?

### Stap 1: Breng je digitale landschap in kaart

Maak een lijst van alle digitale diensten die je aanbiedt:

- Website
- Ticketingsysteem (welke leverancier?)
- Audiogids-app
- Nieuwsbriefsysteem
- Sociale media, waar je invloed beperkt maar wel relevant is

### Stap 2: Test de kritieke routes

De belangrijkste route voor een culturele instelling is: **bezoeker vindt de website → kiest een tentoonstelling/voorstelling → koopt een ticket → ontvangt bevestiging**. Test die route met een toetsenbord. Lukt het? Waar loop je vast?

### Stap 3: Begin met een mini-audit

Een [mini-audit](/webshop-quickscan/) geeft je een eerste beeld van de grootste knelpunten. Dat helpt om intern het gesprek te voeren en budget vrij te maken voor verbeteringen.

### Stap 4: Laat een volledige audit doen

Na de eerste verbeteringen is een volledige WCAG-EM audit de volgende stap. Die geeft je een compleet beeld en een nulmeting.

### Stap 5: Train je team

Toegankelijkheid is niet alleen een technisch verhaal. Je redacteuren, marketeers en educatief medewerkers moeten weten hoe ze toegankelijke content maken. Elke nieuwe tentoonstelling, elke nieuwe pagina, elk nieuw social media-bericht: het moet elke keer weer goed.

## Onze ervaring in de culturele sector

We werken al jaren samen met musea en culturele instellingen. We kennen de specifieke uitdagingen: van ticketingsystemen die je niet kunt aanpassen, tot plattegronden die opnieuw moeten, tot audiogids-apps die niet voldoen.

Wil je weten waar jouw instelling staat? Begin met een [mini-audit](/webshop-quickscan/) of neem [contact](/contact/) op voor een vrijblijvend gesprek.

## Verder lezen

- [EAA voor webshops: wat moet je regelen?](/blog/eaa-voor-webshops/): de EAA geldt ook voor ticketverkoop
- [Wat kost een toegankelijkheidsaudit?](/blog/wat-kost-een-toegankelijkheidsaudit/): transparant overzicht van prijzen
- [Alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/): bepaal de juiste alt-tekst voor kunstwerken en sfeerbeelden

---
title: "Overlay-toegankelijkheidstools: lossen ze echt iets op?"
date: 2025-08-23
slug: "overlay-toegankelijkheidstools-lossen-ze-echt-iets-op"
categories: 
  - "tips-en-tools"
description: "Werken overlay-toegankelijkheidstools echt? Mini-onderzoek naar widgets, WCAG-problemen, EAA/WDO-compliance en gebruikerservaring."
keywords:
  - overlay toegankelijkheidstools
  - accessibility overlay wcag
  - toegankelijkheidswidget eaa
---

## Waarom dit mini-onderzoek

Veel teams vragen me of je digitale toegankelijkheid kunt “fixen” door een overlay of widget toe te voegen die fouten automatisch oplost. En, in het verlengde daarvan: voldoe je met zo’n tool meteen aan de wet ([EAA](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32016L2102) of [WDO](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/wetgeving/wet-digitale-overheid/))?  
Voor dit mini‑onderzoek bekeek ik drie commerciële toegankelijkheidstools die je als laag over een website plaatst:

- Coderoll – “Accessibility” (getest op fsbnh.bank)

- AccessiBe – “Accessibility Adjustments” (getest op ifa-nh.com en ifa-nh.com/financial-blueprint)

- EqualWeb – “Accessible” (getest op www.zara.com/nl/)

Ik heb mijn blinde collega Dimitri gevraagd om naar deze tools te kijken en zijn menig te geven. In dit artikel zal ik hem citeren.

## Doel van de test

1. Lost de tool de problemen op die ik als toegankelijkheids‑auditor vind?

3. Voldoet een site door de implementatie aan wetgeving?

5. Is de tool zélf toegankelijk en gebruiksvriendelijk voor wie verbeteringen nodig heeft?  
    

```
Kort antwoord: nee, een overlay is geen oplossing voor structurele toegankelijkheidsfouten en leidt zelden tot wettelijke conformiteit. Sterker nog: de tools introduceren vaak nieuwe problemen.
```

> Dimitri: Overlay-tools lossen de fundamentele toegankelijkheidsproblemen niet op. Veel functies richten zich niet op het corrigeren van fouten, maar op het veranderen van de visuele weergave (contrast, kleuren, lettertypes, enzovoort). Uit mijn ervaring met webinars en gesprekken met mensen met een visuele beperking, kleurenblindheid of dyslexie kan ik zeggen: ingebouwde hulpmiddelen gebruiken zij zelden. Vaker maken ze gebruik van hun eigen vertrouwde middelen, zoals de schermloep van het besturingssysteem of browserextensies die het beeld aanpassen aan hun individuele behoeften.

## Wat ik testte en waarom het ertoe doet

Overlay‑tools beloven met één tool een pagina “toegankelijker” te maken: contrast verbeteren, tekst leesbaar maken, animaties pauzeren, enzovoort. Dat klinkt aantrekkelijk, maar:

- veel aanpassingen laten zien hoe iemand met een beperking de webpagina 'ziet' en corrigeren de onderliggende HTML niet;

- persistente instellingen (onthouden van keuzes) ontbreken vaak;

- ze conflicteren regelmatig met bestaande stijlen en interacties;

- je kunt niet meerdere profielen aanzetten;

- ze detecteren maar een deel van de echte problemen — en lossen ze niet structureel op.

## Bevindingen per tool

### 1) Coderoll – “Accessibility” (getest op fsbnh.bank)

#### Gebruik & UX:

- De tool staat onderaan in de focusvolgorde: gebruikers die hem nodig hebben, moeten eerst door de hele pagina tabben — onhandig bij veel interactieve content.

- Opent in een dialoog zonder correcte rol; schermlezers kondigen het venster niet als dialoog aan.

- Schakelknoppen hebben onvoldoende kleurcontrast (grijs op wit).

- Instellingen worden niet onthouden bij paginawissel, waardoor je telkens opnieuw moet activeren.

#### Functies die niet goed werken

- De knop Keyboard Navigation maakt focus niet overal zichtbaar.

- De knop Contrast voegt een zwarte achtergrond toe maar laat o.a. paarse teksten soms ongewijzigd, waardoor ze onleesbaar worden (contrast ~1.6:1).

- De knop Increase/Decrease Text past lettergrootte niet overal toe (menu’s, carrousel, diverse teksten blijven gelijk) en kan layout breken (overlappende elementen, tekst achter afbeeldingen).

- De knop Mark Titles herkent niet alle koppen (o.a. slider) en kan nieuwe contrastproblemen veroorzaken (wit op paars met gele highlight ≈ 1.1:1).

- De knop Highlight Links & Buttons markeert niet alles (carrousel‑links, videoknoppen, klikbare afbeeldingen). De gele markering heeft te weinig contrast met wit (~1.2:1) en verergert leesbaarheid.

> Dimitri: De tool staat helemaal aan het einde van de focusvolgorde, waardoor het onwaarschijnlijk is dat een gebruiker met een screenreader hem überhaupt bereikt. Het is niet duidelijk hoe je hem kunt dwingen om naamloze links van beschrijvingen te voorzien. Een deel van de functies heeft te maken met visuele instellingen, maar voor mij als screenreader-gebruiker zijn die nutteloos.

### 2) AccessiBe – “Accessibility Adjustments” (getest op ifa‑nh.com)

#### Gebruik & UX

- Start met 6 profielknoppen (bijv. ADHD, Motor, Blind). Profielen zijn niet te combineren; kies je “ADHD/communicatie”, dan werkt het profiel voor de toetsenbordbediening niet.

- Focus‑indicatie leunt op kleurverandering en (na selectie) een blauwe rand op blauwe achtergrond met contrast < 3:1.

- Het zoekveld gebruikt een lange placeholder (“Onduidelijke inhoud? …”) als toegankelijke naam; zodra je typt, verdwijnt die — onhandig voor spraakbediening.

- Koppen in de tool zijn niet als heading gemarkeerd (bijv. “Kies het toegankelijkheidsprofiel…”).

- Profielschakelaars hebben te lange toegankelijke namen (hele alinea’s).

- Inconsistent rolgebruik: <button> met role="checkbox".

- Decoratieve iconen zijn zichtbaar voor hulpsoftware.

- Suggestielijst van zoeken mist juiste ARIA-attributen.

- Herhaalde linkteksten (“Learn more in Wikipedia”) zonder duidelijk doel.

- Taalopties tonen focus alleen via vormverandering en een te laag contrast (≈ 1.1:1).

#### Functies die niet goed werken

- De knop Headings highlighten markeert ook teksten waarin h‑element is misbruikt voor styling.

- De knop Text Magnifier werkt niet overal (o.a. niet in dialogen).

- De knop Dark Contrast creëert extra contrastissues.

- De knop Read more laat soms content verdwijnen.

> Dimitri: De tool biedt aan om de “screenreader-modus” in te schakelen en de handleiding te lezen. Dat roept meteen de vraag op: waarom zou ik opnieuw tijd moeten steken in een extra instructie, terwijl ik al weet hoe ik een screenreader moet gebruiken? De website verandert na activering van de module, maar de nieuwe elementen roepen vragen op: is alles nu echt toegankelijk geworden? Voor een objectieve beoordeling zijn gezamenlijke tests met een ziende onderzoeker nodig.

### 3) EqualWeb – “Accessible” (getest op https://www.zara.com/nl/)

#### Gebruik & UX

- Afbeeldingen zonder tekstalternatief in de tool zelf.

- Groen op wit heeft onvoldoende contrast.

- Tekstvergroting tot 200% lost layoutproblemen niet op (tekst wordt afgesneden, elementen overlappen, contrastverlies).

- Animaties stoppen werkt niet overal.

- Profielen niet combineerbaar (bijv. kleurenblind + dyslexie).

- Donker contrast kan logo laten verdwijnen.

- De knop Afbeeldingen beschrijven slaat belangrijke iconen (menu) over.

## Wat overlay‑tools niet kunnen oplossen (maar je wél moet oplossen)

Tijdens het testen kwamen tal van problemen voor die geen van de tools detecteerde of verhielp — denk aan:

- Ontbrekende of slechte [toegankelijke namen](https://properaccess.nl/accessible-name-que/) (voor knoppen, links, iframes).

- Interactieve elementen die niet herkenbaar zijn voor hulpsoftware (div‑knoppen, ontoegankelijke accordions/dialogen).

- Foute headingstructuur (hiaten in niveaus, headings gebruikt voor opmaak).

- Afbeeldingen zonder passend tekstalternatief (of dubbelingen van zichtbare tekst).

- Focusvolgorde en toetsenbordbediening die niet kloppen.

- Links met dezelfde tekst maar verschillende bestemmingen.

- Formulierfouten die niet goed aangekondigd worden.

- Problemen bij zoom/vergroting (200–400%), letter‑ en regelafstand, horizontaal scrollen.

- Skiplinks ontbreken, focus niet zichtbaar, hamburgermenu niet via toetsenbord bedienbaar.

- Video’s en PDF’s die niet toegankelijk gemaakt worden via een overlay.

- En meer structurele issues die alleen met HTML, design en content zijn op te lossen.

## Conclusies

### Maken deze tools een website toegankelijker?

Een beetje — soms. Ze bieden knoppen die bepaalde visuele aspecten tijdelijk verbeteren. In de praktijk zijn ze niet bepaald makkelijk in gebruik, veroorzaken ze nieuwe problemen (contrast, focus, layout) en pakken ze de kern niet aan. Geen van de geteste tools loste alle gevonden issues op.

> Dimitri: Daarnaast wil ik nog toevoegen dat het activeren van extra toegankelijkheidsfuncties op websites mij juist zorgen baarde. Ik was bang dat er een verandering in de interface zou optreden waardoor ik er met mijn screenreader niet meer zelfstandig uit zou komen. Gebruikers van schermleesprogramma’s zijn erg terughoudend in hun keuze van websites en apps. Je weet nooit wat er kan gebeuren bij een reservering of aankoop in een onbekende digitale omgeving — of je er wel probleemloos doorheen komt. De interface van de drie onderzochte websites was voor mij al onbekend; de toegevoegde toegankelijkheidsopties voegden daar nog extra onbekende elementen aan toe.”

### Voldoet een website aan de wet door zo’n tool te implementeren?

Nee. De tools creëren hooguit testcondities (bijv. extra letterspatiëring) maar repareren de onderliggende problemen niet. Ze sporen veel issues niet op en regelen geen structurele WCAG‑conformiteit of wettelijke naleving (EAA/WDO).

### Zijn de tools zelf toegankelijk?

In mijn test: nee. Elke tool introduceerde eigen toegankelijkheidsproblemen (rol‑ en label‑fouten, contrast, focus, semantiek).

## Waar zijn deze tools wél goed voor?

Als bewustwordingstool in je team. Laat stakeholders even zien hoe contrast, lettergrootte of animaties gebruikers beïnvloeden. Maar: zet ze niet in als pleister op structurele problemen.

> Dimitri: In feite doen deze tools denken aan automatische testhulpmiddelen (zoals Lighthouse of Axe): ze signaleren een deel van de duidelijke problemen, maar zonder handmatig testen red je het niet. Zo proberen ook deze plugins een site toegankelijk te maken, maar dat lukt slechts gedeeltelijk.  

De duurzame aanpak:

1. Audit (handmatig) op techniek (semantische HTML), design en content.

3. Prioriteren & fixen in de codebasis; verbeter waarneembaarheid, bedienbaarheid, begrijpelijkheid van je content en kwaliteit van techniek.

5. Scholing & governance: leidt je team op om toegankelijke content te maken en toegankelijke HTML te schrijven.

7. Her-testen met gebruikers en hulpmiddelen.  
    

> Toekomstbestendige toegankelijkheid ontstaat niet met een widget, maar met betere HTML, beter ontwerp en betere content.
> 
> Julia tol

## Volgende stap

Het begint met een audit. Wil je weten wat Proper Access voor je kan doen?  
Mail Julia Tol via contact@properaccess.nl of bel 085 5055 890.

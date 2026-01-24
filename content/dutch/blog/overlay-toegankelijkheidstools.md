---
title: "Overlay-toegankelijkheidstools: lossen ze echt iets op?"
date: 2025-09-07
slug: "overlay-toegankelijkheidstools"
categories: 
  - "tips-en-tools"
---

```
De overlay’s die we hebben getest zijn geen oplossing voor structurele toegankelijkheidsfouten en leidt zelden tot wettelijke conformiteit. Sterker nog: de tools introduceren vaak nieuwe problemen.
```

Veel teams vragen mij of je digitale toegankelijkheid kunt ‘fixen’ door een overlay of widget toe te voegen die fouten automatisch oplost. En, in het verlengde daarvan vragen ze: voldoe je met zo’n tool meteen aan de wet (EAA of WDO)?  
  
Voor dit mini‑onderzoek bekeek ik drie commerciële toegankelijkheidstools die je als laag over een website plaatst. Hierbij ging het om de volgende tools:

- Coderoll – “Accessibility” (getest op fsbnh.bank)

- AccessiBe – “Accessibility Adjustments” (getest op ifa-nh.com en ifa-nh.com/financial-blueprint)

- EqualWeb – “Accessible” (getest op https://www.zara.com/nl/)  
    

Het doel van deze test was drieledig:

1. Lost de tool de problemen op die ik als toegankelijkheidsauditor vind?

3. Voldoet een website aan de wetgeving door de implementatie van de tool?

5. Is de tool zélf toegankelijk en gebruiksvriendelijk voor wie verbeteringen nodig heeft?  
    

Kort antwoord: nee, een overlay is geen oplossing voor structurele toegankelijkheidsfouten en leidt zelden tot wettelijke conformiteit. Sterker nog: de tools introduceren vaak nieuwe problemen.

## Wat ik testte en waarom het ertoe doet

Overlay‑tools beloven met één tool een pagina ‘toegankelijker’ te maken: contrast verbeteren, tekst leesbaar maken, animaties pauzeren, enzovoort. Dat klinkt aantrekkelijk, maar:

- veel aanpassingen zijn oppervlakkig (stijl‑laag) en corrigeren de onderliggende HTML niet;

- persistente instellingen (onthouden van keuzes) ontbreken vaak;

- ze conflicteren regelmatig met bestaande stijlen en interacties;

- ze detecteren maar een deel van de echte problemen — en lossen ze niet structureel op.  
    

## Bevindingen per tool

### 1) Coderoll – Accessibility (getest op fsbnh.bank)

Gebruik & UX

- De tool staat onderaan in de focusvolgorde: gebruikers die hem nodig hebben, moeten eerst door de hele pagina tabben — onhandig bij veel interactieve content.

- Opent in een dialoog zonder correcte rol: schermlezers kondigen het venster niet als dialoog aan.

- Schakelknoppen hebben onvoldoende kleurcontrast (grijs op wit).

- Instellingen worden niet onthouden bij paginawissel, waardoor je telkens opnieuw moet activeren.  
    

Functies die niet goed werken:

- De knop Keyboard Navigation maakt focus niet overal zichtbaar.

- De knop Contrast voegt een zwarte achtergrond toe maar laat o.a. paarse teksten soms ongewijzigd, waardoor ze onleesbaar worden (contrast ~1.6:1).

- De knop Increase/Decrease Text past lettergrootte niet overal toe (menu’s, carrousel, diverse teksten blijven gelijk) en kan layout breken (overlappende elementen, tekst achter afbeeldingen).

- De knop Mark Titles herkent niet alle koppen (o.a. slider) en kan nieuwe contrastproblemen veroorzaken (wit op paars met gele highlight ≈ 1.1:1).

- De knop Highlight Links & Buttons markeert niet alles (carrousel‑links, videoknoppen, klikbare afbeeldingen). De gele markering heeft te weinig contrast met wit (~1.2:1) en verergert leesbaarheid.  
    

### 2) AccessiBe – Accessibility Adjustments (getest op ifa‑nh.com)

Gebruik & UX

- Start met 6 profielknoppen (bijvoorbeeld ADHD, Motor, Blind). Profielen zijn niet te combineren: kies je “ADHD/communicatie”, dan werkt het profiel voor de toetsenbordbediening niet.

- Focus‑indicatie leunt op kleurverandering en (na selectie) een blauwe rand op blauwe achtergrond met contrast < 3:1.

- Het zoekveld gebruikt een lange placeholder (Onduidelijke inhoud? …) als toegankelijke naam. Zodra je typt, verdwijnt het zoekveld — onhandig voor spraakbediening.

- Koppen in de tool zijn niet als heading gemarkeerd (bijvoorbeeld Kies het toegankelijkheidsprofiel…).

- Profielschakelaars hebben te lange toegankelijke namen (hele alinea’s).

- Inconsistent rolgebruik: `<button>` met `role="checkbox".`

- Decoratieve iconen zijn zichtbaar voor hulpsoftware.

- Suggestielijst van zoeken mist juiste relatie en labeling.  
    

- Herhaalde linkteksten (Learn more in Wikipedia) zonder duidelijk doel.

- Taalopties tonen focus alleen via vormverandering en een te laag contrast (≈ 1.1:1).

Functies die niet goed werken:

- De knop Headings highlighten markeert ook teksten waarin h‑element is misbruikt voor styling.

- De knop Text Magnifier werkt niet overal (onder andere niet in dialogen).

- De knop Dark Contrast creëert extra contrastissues.

- De knop Read more laat soms content verdwijnen.  
    

### 3) EqualWeb – Accessible (getest op https://www.zara.com/nl/)

Gebruik & UX

- Afbeeldingen zonder tekstalternatief in de tool zelf.

- Groen op wit heeft onvoldoende contrast.

- Tekstvergroting tot 200% lost layout problemen niet op (tekst wordt afgesneden, elementen overlappen, contrastverlies).

- Animaties stoppen werkt niet overal.

- Profielen niet combineerbaar (bijvoorbeeld kleurenblind + dyslexie).

- Donker contrast kan logo laten verdwijnen.

- De knop Afbeeldingen beschrijven slaat belangrijke iconen (menu) over.  
    

## Wat overlay‑tools niet kunnen oplossen (maar je wél moet oplossen)

Tijdens het testen kwamen meerdere problemen voor die geen van de tools detecteerde of verhielp. Hierbij kun je denken aan:

- Ontbrekende of slechte toegankelijke namen (voor knoppen, links, iframes).

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

### Maken de geteste tools (Coderoll, AccessiBe en EqualWeb) een website toegankelijker?

Deels. Ze bieden knoppen die bepaalde visuele aspecten **tijdelijk verbeteren**. In de praktijk zijn ze **niet bepaald gemakkelijk** in gebruik, veroorzaken ze nieuwe problemen (contrast, focus, layout) en pakken ze de kern niet aan. Geen van de geteste tools loste alle gevonden issues op.

### Voldoet een website aan de wet door zo’n tool te implementeren?

Nee. De tools creëren hooguit **testcondities**, zoals extra letterspatiëring, maar repareren de onderliggende problemen niet. Ze sporen veel issues niet op en regelen geen structurele WCAG‑conformiteit of wettelijke naleving (EAA/WDO).

### Zijn de tools zelf toegankelijk?

Niet in deze test. Elke tool introduceert eigen toegankelijkheidsproblemen. Denk aan: rol‑ en label‑fouten, contrast, focus en semantiek.

## Waar zijn deze tools wél goed voor?

Als **bewustwordingstool** in je team. Met de tools kun je aat stakeholders laten  zien hoe contrast, lettergrootte of animaties gebruikers beïnvloeden. Maar,je moet ze niet inzetten  als pleister op structurele problemen.

De duurzame aanpak:

1. **Audit** (handmatig) op techniek, design en content.

3. **Prioriteren & fixen** in de codebasis; verbeter waarneembaarheid, bedienbaarheid, begrijpelijkheid van je content en kwaliteit van techniek.

5. **Scholing & governance**: leid je team op om toegankelijke content te maken en toegankelijke HTML te schrijven.

7. Her-testen met **gebruikers** en hulpmiddelen.  
    

Toekomstbestendige toegankelijkheid ontstaat niet met een widget, maar met betere HTML, een beter ontwerp en betere content.

Een overlay is geen oplossing voor structurele toegankelijkheidsfouten en leidt zelden tot wettelijke conformiteit. Sterker nog: de tools introduceren vaak nieuwe problemen.

## Volgende stap

Wat zou nu een goede vervolgstap kunnen zijn? Dat is een audit aanvragen om te kijken of jouw website of app voor iedereen toegankelijk is.  Er zijn speciale auditbureaus die dat voor jou uitvoeren, zoals wij bij Proper Access. Wil je hier meer over weten? Neem dan gerust contact met mij, Julia Tol, op door een e-mail te sturen naar  contact@properaccess.nl of bel 085 5055 890.

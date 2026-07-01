---
title: "Blue Billywig: negen videospelers naast elkaar"
date: 2026-06-21
slug: "case-bluebillywig-quickscan-9-videospelers"
categories:
  - "cases"
tags:
  - "case"
  - "blue billywig"
  - "videospeler"
  - "wcag"
  - "leveranciers"
  - "quickscan"
description: "Quickscan van 9 veelgebruikte videospelers. Bij 3 vonden we binnen de testtijd geen bevindingen. Wat dat zegt over de markt en je inkoopkeuze."
---

Blue Billywig vroeg ons om een quickscan van negen veelgebruikte videospelers, inclusief hun eigen. Geen complete audit, maar een verkennend beeld per speler, om te zien hoe het in deze markt staat met de digitale toegankelijkheid. De geteste spelers: Blue Billywig, Hihaho, Ivory Media Player, OpenGemeenten, Ping Player, Rijksoverheidsplayer PRO, Vimeo, Vixy Video en YouTube. Bij 3 van de 9 vonden we binnen die tijd geen bevindingen. Blue Billywig publiceerde het rapport vervolgens openbaar op [hun knowledge hub](https://www.bluebillywig.com/nl/knowledge-hub/toegankelijke-video-9-videospelers-vergeleken/).

## Les 1: Bij drie van de negen vonden we geen bevindingen

De opdracht was om per speler 2 tot 3 uur uit te trekken voor een inzicht in de toegankelijkheid. Niet om alle spelers met elkaar te vergelijken, maar om per speler in beeld te brengen wat een bezoeker daadwerkelijk tegenkomt. We toetsten alleen de speler zelf, niet de webpagina eromheen en niet de ondertiteling of audiodescriptie van de inhoud. We keken naar knoppen, sneltoetsen, contrast, focusvolgorde, schermlezergedrag, zoom tot 400%, het sluiten van dialogen en meer, op WCAG 2.2 niveau A en AA. We testten in Firefox, Chrome en Safari, met NVDA en VoiceOver, en lazen daarbij de accessibility tree in Chrome DevTools.

Bij 3 van de 9 spelers vonden we binnen die tijd geen bevindingen: Blue Billywig zelf, OpenGemeenten en de Rijksoverheidsplayer PRO. Bij de andere 6 wel. Vimeo en YouTube, die je in de meeste websites tegenkomt, struikelden op kerncriteria zoals toetsenbordbediening, de aankondiging van pop-ups en zoomgedrag.

![Negen gestileerde videospelers in een raster van 3 bij 3. Drie spelers zijn gemarkeerd met een groen accent als teken dat ze binnen onze testtijd geen bevindingen kregen. De overige zes blijven in neutraal grijs.](/images/cases/bluebillywig/bbw-les1-overzicht.png)

**Wat je hieruit mee kunt nemen.** YouTube en Vimeo staan op miljoenen websites en zijn gemaakt door bedrijven met grote budgetten. Toch zien we bij beide veel toegankelijkheidsproblemen. Vraag bij elke speler die je inkoopt om een onafhankelijke toets, of doe hem zelf, voordat je een keuze maakt.

## Les 2: Drie pijnpunten die overal terugkwamen

![Drie illustraties naast elkaar van toegankelijkheidsproblemen in videospelers: een afspeel-knop met een spraakbel die alleen het woord knop bevat, een toetsenbord met een rood verbod-symbool, en lichtgrijze tekst die wegvalt tegen een lichte achtergrond met een oog-symbool ernaast.](/images/cases/bluebillywig/bbw-les2-pijnpunten.png)

Wat opviel was niet hoe verschillend de fouten waren, maar hoe vergelijkbaar. Drie thema's domineerden bij bijna alle spelers met bevindingen.

**Knoppen die de schermlezer niet kan voorlezen.** Een knop in een videospeler is voor iemand die de speler ziet een vierkantje met een icoon. Een schermlezer kan zo'n knop alleen voorlezen als er een tekstuele naam aan vast hangt. Anders hoort de gebruiker bijvoorbeeld alleen "knop" of helemaal niets. We zagen knoppen met "null" als naam, knoppen met de verkeerde rol, en knoppen die op een Engelse pagina een Nederlandse aankondiging kregen. Voor je gebruiker is dat het verschil tussen "afspelen" en "knop".

**Toetsenbordbediening die ergens vastloopt.** De regel is eenvoudig: alles wat je met de muis kunt, moet je met het toetsenbord kunnen. In de praktijk struikelen videospelers op twee punten. De tijdlijn moet je met pijltjestoetsen vooruit en achteruit kunnen verplaatsen. Een submenu moet je in en uit kunnen. Bij sommige spelers liep de focus vast; bij andere kreeg je hem nooit te zien.

**Iconen en tekst die wegvallen tegen de achtergrond.** Iconen in een lichte balk over een lichte video, een pauzeknop in lichtgrijs op wit, witte tekst zonder schaduw over een wisselend beeld. Voor een ontwerper voelen ze esthetisch; voor een slechtziende gebruiker zijn ze onbruikbaar.

**Wat je hieruit mee kunt nemen.** Bouw je zelf een speler, of koop je er een in? Test dan in elk geval deze 3 aspecten als eerste. Worden de knoppen uitgesproken door een schermlezer? Zijn de tijdlijn en submenu's volledig met het toetsenbord bedienbaar? Voldoet het contrast in alle staten aan minimaal 3:1 voor iconen en 4.5:1 voor tekst? Drie checks die meer dan de helft van de praktijkproblemen vangen.

## Les 3: Het verschil tussen speler en inhoud

Een veelgehoorde verwarring: "onze video's hebben ondertiteling, dus we voldoen". Dat is alleen het deel dat met je content te maken heeft. De speler die de video afspeelt is een eigen verhaal. En in een ingebed product is dat verhaal niet van jou, maar van je leverancier.

![Een videospeler-frame in tweeën gedeeld door een stippellijn. Links de speler-controls met een afspeel-knop, tijdlijn, instellingen-icoon en ondertitel-icoon, met daarboven het label speler. Rechts een persoon die spreekt met een ondertitel eronder, met daarboven het label inhoud.](/images/cases/bluebillywig/bbw-les3-speler-inhoud.png)

Daarom beoordeelden we bewust alleen de speler, niet de inhoud. Een museum kiest zelf voor de ondertiteling, maar niet voor of de pauzeknop een label krijgt. Een gemeente schrijft zelf de aankondiging bij een raadsvergadering, maar bepaalt niet de focusvolgorde van het instellingenmenu.

Dat ontslaat je als afnemer niet van je verantwoordelijkheid. De keuze welke speler je inbouwt, is jouw keuze. "Het is een extern programma" of "onze leverancier wil niet meewerken" is geen geldig argument, niet in je toegankelijkheidsverklaring en niet richting toezicht. Voldoet de speler niet, en kun je dat niet binnen redelijke termijn met je leverancier oplossen, dan hoort overstappen naar een andere speler bij de afweging.

**Wat je hieruit mee kunt nemen.** Vraag bij elke videospeler die je aan je webpagina wil toevoegen om een onafhankelijk auditrapport van die speler zelf, bij voorkeur door iemand buiten het bedrijf van de leverancier. Status A of B bij DigiToegankelijk is veel sterker als je voor het spelerdeel een rapport van de leverancier kunt meesturen.

## Les 4: Wat een rapport wel en niet vertelt

Drie nuances horen erbij, zowel voor de lezer als voor de leveranciers zelf.

**Een audit is een momentopname.** We hebben de spelers op één moment getest. Een leverancier kan de week erna een release uitbrengen die problemen oplost, of juist nieuwe introduceert. Een rapport van een paar maanden geleden zegt dus iets over die versie, niet automatisch over de versie die jij vandaag op je site hebt staan. Koop je een speler voor je organisatie? Vraag je leverancier of hij verbeteringen aan de speler meteen in alle versies doorvoert.

**De spelers stonden op pagina's van bestaande klanten.** Een deel van de gevonden bevindingen kan dus voortkomen uit een verkeerde implementatie door die klant. Dat maakt het rapport niet minder waardevol. Het maakt het juist waardevoller voor de leverancier, want als dezelfde implementatiefout meermaals terugkomt, hoort die thuis in de toegankelijkheidsdocumentatie die hij meelevert aan zijn klanten.

**Per speler hebben we 2 tot 3 uur getest.** Dat is genoeg om de structurele problemen boven tafel te krijgen, niet om elke instelling en elk pad uit te lopen. Een speler zonder bevindingen is in dit rapport een speler zonder bevindingen binnen die tijd, niet een speler waarvan is bewezen dat hij volledig toegankelijk is.

![Een klembord met een audit-rapport en afgevinkte checklist, met daarnaast een analoge klok om de momentopname te benadrukken. Achter het hoofd-klembord staat een lichtgrijze, iets verschoven kopie, om te suggereren dat de software om het rapport heen blijft veranderen.](/images/cases/bluebillywig/bbw-les4-momentopname.png)

## Een verschil met onze andere rapporten

In dit specifieke rapport hebben we bewust geen oplossingen opgenomen bij de bevindingen. Het doel was per speler een eerste beeld geven, niet alle leveranciers tegelijk gaan adviseren. In onze reguliere audits ligt dat anders. Daar krijgt elke bevinding een toelichting, een werkende oplossing en de afwegingen die we daarbij zien. Dat is wat ons onderscheidt van bureaus die het bij een lijst met succescriteria en falen laten.

Benieuwd hoe zo'n rapport eruitziet? Mail Phi op phi@properaccess.nl voor een voorbeeld.

## Tot slot

Wat Blue Billywig deed is wat we vaker in deze markt zouden willen zien. Niet alleen je eigen product laten toetsen, maar de spelers eromheen erbij betrekken, en het hele rapport openbaar publiceren. Voor de inkoper levert dat een eerlijk uitgangspunt op. Voor de markt levert het een meetlat op. En voor een bedrijf dat zelf goed scoort, is het zichtbaarder bewijs dan elke marketingclaim.

Hun speler kwam in onze toetsing zonder bevindingen door. Hoe ze het rapport vervolgens gebruiken, vinden wij minstens zo sterk.

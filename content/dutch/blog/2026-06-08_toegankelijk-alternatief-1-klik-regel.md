---
title: "Een ontoegankelijk element met een toegankelijk alternatief: mag je het laten staan?"
date: 2026-06-08
slug: "toegankelijk-alternatief-1-klik-regel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "conformiteit"
  - "audit"
  - "pdf"
  - "alternatief"
description: "Mag je een ontoegankelijk element op je website laten staan als er een toegankelijk alternatief op of vlakbij de pagina staat? De '1-klik-regel' uitgelegd vanuit de auditpraktijk."
keywords:
  - digitale toegankelijkheid
  - WCAG
  - conforming alternate version
  - toegankelijk alternatief
  - PDF toegankelijkheid
---

In bijna elke audit kom ik dit moment tegen. Een PDF die helemaal niet toegankelijk is. Een poster met de programma-informatie van een evenement. Een infographic vol cijfers. En de klant zegt: "Maar die informatie staat ook gewoon als tekst op de pagina. Hoeft dat dan nog?"

Goed nieuws: vaak niet. Je hoeft echt niet elk element op je site toegankelijk te máken. Als de informatie ook als echte tekst op de pagina staat, ben je voor veel problemen al klaar. De kunst zit in het correct beoordelen of het toegankelijk alternatief een gelijkwaardig alternatief is. Een poster kan wel 7 problemen hebben, de vraag is of ze alle 7 verdwijnen door de tekst die ernaast staat.

In de audit-wereld doet daarom al jaren de "1-klik-regel" de ronde. Als het toegankelijke alternatief één klik verderop staat, mag je het ontoegankelijke element laten zoals het is. Die regel klopt in grote lijnen, en hij is praktisch. Maar deze regel kun je niet op alles toepassen. Hieronder leg ik uit.

## Wat is een gelijkwaardig toegankelijk alternatief?

De informatie en functionaliteit is pas toegankelijk als het aan alle 50 succescriteria van WCAG voldoet. Dit alternatief moet binnen een klik beschikbaar zijn voor mensen die het origineel niet toegankelijk vinden.

Kijk bijvoorbeeld naar een eventposter waar gegevens van het event staan: waar, wanneer, hoelaat, logo's van de organisatoren en contactgegevens. Tijdens de audit kijken we naar losse succescriteria: contrast, tekstafstand, vergroten van tekst, een tekstalternatief, enzovoort. Elk criterium is een apart probleem met een eigen oplossing.

En het mooie is: zodra dezelfde informatie als echte tekst op de pagina staat, zijn een hoop van die problemen meteen opgelost. Niet omdat je de poster hebt aangepast, maar omdat de informatie nu ook in een vorm staat die wél meebuigt met de bezoeker. Als in deze tekst een vermelding van de organisator zou ontbreken, is het geen gelijkwaardig alternatief meer.

## Meer voorbeelden van hetzelfde principe

Dit patroon zie ik op allerlei plekken terugkomen.

**Een infographic met jaarcijfers naast een datatabel.** Een rapportpagina opent met een vrolijke infographic. Daaronder staat een tabel met dezelfde cijfers. De contrast- en tekstcriteria die de infographic zou schenden, gelden voor de tabel, en die heb je netjes opgemaakt. Voor wie de infographic niet kan zien, is er een volwaardig alternatief op dezelfde pagina.

**Een afbeelding van een prijslijst met de prijzen ook als tekst.** Veel kleine ondernemers en horecazaken zetten een mooi vormgegeven prijskaart als JPG online. Daaronder staat exact dezelfde prijslijst als HTML-tekst. De afbeelding mag blijven; de tekst eronder doet het werk. Er hoeft niet eens geklikt te worden.

**Een organogram als afbeelding met de structuur eronder.** Een organisatieschema in beeld, en daaronder een geneste opsomming met dezelfde hiërarchie. Dat werkt, zolang de tekstuele versie compleet is.

In al deze gevallen geldt dezelfde toets: lever de informatie ook als echte tekst, op dezelfde pagina, en de meeste barrières lossen zichzelf op. Je verbouwt niet het plaatje, je vult het aan.

Een net iets andere smaak van hetzelfde idee: in plaats van informatie te dupliceren, bied je een knop aan.

**Een knop om het contrast van de hele site te verhogen.** Stel dat je huisstijl op sommige plekken net te weinig contrast heeft. In plaats van je hele ontwerp om te gooien, kun je bovenaan een knop zetten waarmee de bezoeker overschakelt naar een variant met hoog contrast. WCAG erkent dit met techniek G174: een knop met voldoende contrast die de bezoeker naar een presentatie met genoeg contrast laat schakelen. De voorwaarden zijn wel dat de knop zelf goed leesbaar is, makkelijk te vinden staat, en dat de hoog-contrastvariant écht voldoet. Doe je dat, dan hoef je het standaardontwerp niet aan te passen om aan de contrasteis te voldoen.

## Een conformerende alternatieve versie

WCAG noemt dit een **conformerende alternatieve versie**, in het Engels _Conforming Alternate Version_. Het komt uit Conformance Requirement 1 en is geen apart succescriterium. Het is een uitzondering op de hoofdregel dat al je content toegankelijk moet zijn. Een alternatieve versie telt mee voor je conformiteit als die versie:

1. **Volledig voldoet** aan WCAG op het gedeclareerde niveau.
2. **Dezelfde informatie en functionaliteit** biedt, in **dezelfde taal**.
3. **Net zo actueel** is als de niet-toegankelijke versie.
4. **Bereikbaar is via een mechanisme** dat zelf ook toegankelijk is.

In die laatste eis zit de "1-klik"-uitspraak verstopt.

Twee voorbeelden waar dit goed gaat:

**Een ontoegankelijke PDF naast een toegankelijke HTML-pagina.** Op een gemeentepagina staat een uitgebreid beleidsstuk in PDF, dat niet voldoet aan WCAG. Maar boven de PDF staat exact dezelfde tekst in HTML, met goede koppen, links en alt-teksten. De HTML is de primaire weg. Mits die echt alles bevat, ook de bijlagen en grafieken in toegankelijke vorm, is dit acceptabel.

**Een interactieve kaart met locaties, gecombineerd met een lijst.** Een festivalwebsite toont een kaart met alle podia. De kaart zelf is niet toegankelijk. Maar onder de kaart staat een lijst met alle locaties, adressen en routebeschrijvingen. Voor wie de kaart niet kan gebruiken, is er een volledig alternatief.

## Waar het misgaat

Of je nu een tekstblok naast een poster zet of een complete tweede versie maakt, hier zit de adder onder het gras. Dit zijn de punten waar ik tijdens een audit op let.

**Het alternatief mist informatie.** De poster bevat een QR-code of een telefoonnummer dat nergens anders staat. De PDF heeft bijlagen die in de HTML-versie ontbreken. De infographic toont een verloop dat in de tabel niet te zien is. Zodra het alternatief minder biedt, telt het niet als gelijkwaardig.

**Het alternatief is niet actueel.** De HTML-versie is bijgewerkt, de PDF is veel ouder. Of andersom. In de praktijk gebeurt dit constant, vooral bij organisaties die content in twee systemen beheren.

**Het alternatief staat in een andere taal.** Een Engelse pagina met een Nederlandse PDF als "alternatief", of omgekeerd. De richtlijn vraagt expliciet om dezelfde taal.

**Het mechanisme om bij het alternatief te komen is zelf niet toegankelijk.** Een link met "klik hier" zonder context. Een uitklapmenu dat niet werkt met een toetsenbord. Een knop zonder zichtbare focus. Het mechanisme is dan onderdeel van het probleem.

## Gelijkwaardig voor WCAG, gelijkwaardig voor je bezoeker?

Er is nog een vraag waar geen enkel succescriterium antwoord op geeft. Stel: je hebt een tabbladcomponent dat niet toegankelijk is. Je biedt een alternatief, maar dat alternatief is zelf ook weer een technisch ingewikkelde oplossing, op een andere pagina. Voor WCAG kun je dan misschien aanvinken dat er een gelijkwaardig alternatief is. Maar is het ook gelijkwaardig voor de bezoeker die er dagelijks mee werkt?

Vaak niet. Wie de tabs gewoon kan gebruiken, blijft op de pagina en klikt door. Wie het alternatief nodig heeft, moet naar een andere pagina, via een omslachtigere route. Dat is op papier gelijkwaardig, maar het voelt als een tweederangsroute. En precies dat verschil telt WCAG niet mee. WCAG gaat erover of de informatie en functionaliteit bereikbaar zijn, niet over hoe prettig dat is.

Daar zit jouw verantwoordelijkheid als eigenaar van de site of app. Je website is er voor mensen die hem dagelijks gebruiken, niet om een vinkje bij een standaard te zetten. Een alternatief dat technisch klopt maar in de praktijk omslachtig is, haalt de norm wél, maar laat een deel van je bezoekers alsnog in de kou staan. De vraag die ik je daarom meegeef: zou je zelf tevreden zijn met het alternatief dat je aanbiedt? Zo niet, dan is er werk aan de winkel, ook al zegt WCAG van niet.

## Mijn standpunt als auditor

Voor losse elementen op een pagina ben ik positief. Een poster, een infographic of een prijskaart met dezelfde informatie als tekst ernaast: prima oplossing. Je hoeft niet alles toegankelijk te maken, je hoeft de informatie alleen toegankelijk te ontsluiten. Dat scheelt je werk en het is een eerlijke uitkomst voor je bezoekers.

Bij een volledige tweede versie geef ik advies om voorzichtig te zijn. Niet omdat het in WCAG niet mag, maar omdat twee versies bijhouden in de praktijk bijna nooit goed blijft gaan. Eén versie wordt altijd belangrijker dan de andere, en de "alternatieve" versie raakt achter. En in de Verenigde Staten gaat de wetgever er harder op zitten: onder de nieuwe ADA Title II Web Rule uit 2024 mag een conformerende alternatieve versie alleen nog als toegankelijk maken technisch of juridisch echt niet kan. In Nederland is er nog geen vergelijkbare beperking, maar de richting is duidelijk.

Kom ik zo'n volledige tweede versie tegen met een echt gelijkwaardig alternatief, dan flag ik het meestal als advies, niet als hard issue. Mijn boodschap is dan: het mag van WCAG, maar je betaalt de prijs op een ander moment. Bij de eerstvolgende contentwijziging lopen de twee versies uit elkaar, en dan is het issue er alsnog.

## Praktisch advies

Bepaal eerst waar je mee te maken hebt. Gaat het om een los element op een pagina, zoals een poster, een infographic of een prijskaart? Lever dan dezelfde informatie als echte tekst op dezelfde pagina. Daarmee los je de meeste barrières op zonder het element zelf aan te raken, en dat is precies waar de regel voor bedoeld is.

Gaat het om een heel apart document of een complete tweede versie van een pagina? Dan luidt mijn vuistregel: maak het origineel toegankelijk. Dat is op de lange termijn goedkoper, eerlijker naar je bezoekers, en het scheelt je een hoop discussie tijdens audits.

Werk je tóch met zo'n volledige tweede versie, controleer dan minstens deze vier dingen:

- Bevat het alternatief **alle** informatie en functionaliteit?
- Is het in **dezelfde taal**?
- Wordt het **gelijktijdig** bijgewerkt?
- Is de **link naar het alternatief** zelf toegankelijk en goed vindbaar?

En als je je eigen pagina nog eens onder de loep neemt: vraag je altijd af of een bezoeker die afhankelijk is van het alternatief, dezelfde ervaring krijgt als iemand die het origineel gebruikt. Zo niet, dan is het geen gelijkwaardig alternatief, hoe dichtbij het ook staat.

## Bronnen

- W3C, Understanding Conformance (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/conformance
- W3C, Understanding Contrast (Minimum), met uitzondering voor tekst in een afbeelding (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- W3C, Understanding Resize Text (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/resize-text
- W3C, Understanding Text Spacing (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/text-spacing
- W3C, Understanding Images of Text (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/images-of-text
- W3C, Techniek G174: een knop om naar een presentatie met voldoende contrast te schakelen https://www.w3.org/WAI/WCAG22/Techniques/general/G174
- W3C, Alternate Versions Conformance Requirement https://www.w3.org/WAI/GL/2007/05/alternate-versions.html
- W3C, Techniek G136: link aan het begin van een niet-conformerende pagina https://www.w3.org/TR/WCAG20-TECHS/G136.html
- Documenten en toegankelijkheid, Een ontoegankelijk document met een toegankelijk alternatief https://documenten-en-toegankelijkheid.nl/richtlijnen/eisen-ontoegankelijk-document/
- Accessible.org, Use of Conforming Alternate Versions Limited in New ADA Title II Web Rule https://accessible.org/conforming-alternate-versions/
- Section 508 ICT Testing Baseline, Conforming Alternate Version https://ictbaseline.access-board.gov/web-baselines/20AlternateVersions/

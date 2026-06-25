---
title: "Een ontoegankelijk element met een toegankelijk alternatief: mag je het laten staan?"
date: 2026-06-25
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
image: "/images/blog/vragen-digitale-toegankelijkheid.svg"
---

In bijna elke audit kom ik deze situatie tegen. Een PDF die helemaal niet toegankelijk is. Een poster met de programma-informatie van een evenement. Een infographic vol cijfers. En de klant zegt: "Maar die informatie staat ook gewoon als tekst op de pagina. Hoeft dat dan nog?"

![Twee panelen naast elkaar. Links een document als afbeelding met een magenta uitroepteken en het label Ontoegankelijk. Rechts een webpagina met nette tekstregels en het label Toegankelijk. Daartussen een magenta muiscursor op een pijl met het label 1 klik.](/images/blog/alt-ontoegankelijk-vs-toegankelijk.webp)

Met "hoeft dat dan nog?" bedoelen ze meestal: moet het ontoegankelijke document of onderdeel zelf nog toegankelijk worden gemaakt, bijvoorbeeld door een PDF goed te taggen, als dezelfde informatie al toegankelijk op de pagina staat?

Goed nieuws: vaak niet. Je hoeft echt niet elk element op je site toegankelijk te máken. Als de informatie ook als uitgeschreven tekst op de pagina staat, is het merendeel van de problemen waarschijnlijk opgelost. De kunst zit hem in het correct beoordelen of het toegankelijke alternatief een gelijkwaardig alternatief is. Een poster kan wel zeven problemen hebben; de vraag is of ze alle zeven verdwijnen door de tekst die ernaast staat.

In de auditwereld doet daarom al jaren de "1-klik-regel" de ronde.

<p class="kernzin">Als het toegankelijke alternatief één klik verwijderd is, mag je het ontoegankelijke element laten zoals het is.</p>

Die regel klopt in grote lijnen en hij is praktisch.

Maar je kunt deze regel niet op alles toepassen. Hieronder leg ik dat uit.

## Wat is een gelijkwaardig toegankelijk alternatief?

De informatie en functionaliteit is pas toegankelijk als die voldoet aan alle succescriteria van WCAG 2.1 of WCAG 2.2 op het niveau dat je claimt. Het alternatief moet binnen één klik beschikbaar zijn voor bezoekers voor wie het origineel niet toegankelijk is.

![Een browservenster met links een eventposter, gemarkeerd met een magenta kader, en daaromheen kolommen met gewone tekstregels op de pagina.](/images/blog/alt-poster-tekst.webp)

Kijk bijvoorbeeld naar een eventposter waarin gegevens van het event staan: waar, wanneer, hoe laat, logo's van de organisatoren en contactgegevens. Tijdens de audit kijken we naar afzonderlijke succescriteria: contrast, tekstafstand, vergroten van tekst, een tekstalternatief, enzovoort. Elk criterium behandelt een apart probleem met een eigen oplossing.

En het mooie is dat, zodra dezelfde informatie als uitgeschreven tekst op de pagina staat, een hoop van die problemen meteen is opgelost. Niet omdat je de poster hebt aangepast, maar omdat de informatie nu ook in een vorm staat die wél toegankelijk is voor bezoekers met een beperking. Als in deze tekst een vermelding van de organisator zou ontbreken, is het geen gelijkwaardig alternatief meer.

## Meer voorbeelden van ontoegankelijke elementen met een toegankelijk alternatief

Ontoegankelijke elementen met een toegankelijk alternatief zie ik op allerlei plekken terugkomen.

![Een webpagina met bovenaan een kleine infographic met staafjes en een cirkel, en daaronder dezelfde cijfers als nette datatabel.](/images/blog/alt-infographic-tabel.webp)

**Een infographic met jaarcijfers en daarnaast een datatabel.** Een rapportpagina opent bijvoorbeeld met een vrolijke infographic en daaronder staat een tabel met dezelfde cijfers. De contrast- en tekstcriteria die ervoor zorgen dat de infographic niet voldoet, worden ondervangen door de tabel, die wel correct is opgemaakt. Voor wie de infographic niet kan zien, is er dan een volwaardig alternatief op dezelfde pagina.

![Een vormgegeven prijskaart als afbeelding, met daaronder exact dezelfde prijslijst als gewone tekst.](/images/blog/alt-prijslijst-tekst.webp)

**Een afbeelding van een prijslijst met de prijzen ook als tekst.** Veel kleine ondernemers en horecazaken zetten een mooi vormgegeven prijskaart als JPG online. Daaronder staat exact dezelfde prijslijst als HTML-tekst. De afbeelding mag blijven; de tekst eronder doet het werk. Er hoeft niet eens geklikt te worden.

![Links een organogram als afbeelding met verbonden kaders, rechts dezelfde hiërarchie als ingesprongen opsomming in tekst.](/images/blog/alt-organogram-tekst.webp)

**Een organogram als afbeelding met de structuur eronder.** Een organisatieschema in beeld, en daaronder een geneste opsomming met dezelfde hiërarchie. Dat werkt, zolang de tekstuele versie compleet is.

In al deze gevallen geldt dezelfde toets: lever de informatie ook als uitgeschreven tekst op dezelfde pagina aan, en de meeste barrières lossen vanzelf op. Je verbouwt niet het plaatje, je vult het aan.

Een net iets andere variant hierop is om, in plaats van informatie te dupliceren, een knop aan te bieden waarmee een toegankelijke variant kan worden geactiveerd.

![Een webpagina met rechtsboven een ronde knop met een half donker, half licht contrast-icoon om naar hoog contrast te schakelen.](/images/blog/alt-contrastknop.webp)

**Een knop om het contrast van de hele site te verhogen.** Stel dat je huisstijl op sommige plekken net te weinig contrast heeft. In plaats van je hele ontwerp om te gooien, kun je bovenaan de pagina een knop plaatsen waarmee de bezoeker overschakelt naar een variant met hoog contrast. WCAG ondersteunt dit met techniek G174: een bedieningselement met voldoende contrast dat de bezoeker naar een weergave met genoeg contrast laat schakelen. De voorwaarden zijn wel dat de knop zelf goed leesbaar is, makkelijk te vinden is, en dat de hoog-contrastvariant écht voldoet. Doe je dat, dan hoef je het standaardontwerp niet aan te passen om aan de contrasteis te voldoen.

## Een conformerende alternatieve versie

WCAG noemt dit een conformerende alternatieve versie, in het Engels: _conforming alternate version_. Het komt uit Conformance Requirement 1 en is geen apart succescriterium. Het is een uitzondering op de hoofdregel dat al je content toegankelijk moet zijn. Een alternatieve versie telt mee voor je conformiteit als die versie:

- volledig voldoet aan het vereiste WCAG-niveau;
- dezelfde informatie en functionaliteit biedt, in dezelfde taal;
- net zo actueel is als de niet-toegankelijke versie;
- bereikbaar is via een mechanisme dat zelf ook toegankelijk is.

In die laatste eis zit de "1-klik"-uitspraak verstopt.

Twee voorbeelden waar dit goed gaat:

![Links een ontoegankelijke PDF met vage tekstregels, rechts dezelfde inhoud als nette webpagina met koppen en tekst.](/images/blog/alt-pdf-html.webp)

**Een ontoegankelijke PDF naast een toegankelijke HTML-pagina.** Op een gemeentepagina staat een uitgebreid beleidsstuk in PDF, dat niet voldoet aan WCAG. Maar boven de PDF staat exact dezelfde tekst in HTML, met goede koppen, links en alt-teksten. De HTML is dan de primaire weg. Dit voldoet, mits die echt alles bevat, dus ook de bijlagen en grafieken in toegankelijke vorm.

![Een webpagina met links een kaart met magenta locatiespelden en rechts een lijst met dezelfde locaties en adressen als tekst.](/images/blog/alt-kaart-lijst.webp)

**Een interactieve kaart met locaties, gecombineerd met een lijst.** Een festivalwebsite toont een kaart met alle podia. De kaart zelf is niet toegankelijk. Maar onder de kaart staat een lijst met alle locaties, adressen en routebeschrijvingen. Voor wie de kaart niet kan gebruiken, is er een volledig alternatief.

## Waar het misgaat

Of je nu een tekstblok naast een poster zet of een complete tweede versie van een pagina maakt, het is belangrijk om op onderstaande punten te letten.

**Het alternatief mist informatie.** De poster bevat een QR-code of een telefoonnummer dat niet in de tweede versie voorkomt. De PDF heeft bijlagen die in de HTML-versie ontbreken. De infographic toont informatie en relaties die in de tabel niet weer te geven zijn. Als het alternatief niet alle informatie van het origineel biedt, telt het niet als gelijkwaardig.

**Het alternatief is niet actueel.** De HTML-versie is bijgewerkt, de PDF is veel ouder. Of andersom. In de praktijk gebeurt dit constant, vooral bij organisaties die content in twee systemen beheren.

**Het alternatief staat in een andere taal.** Een Engelse pagina met een Nederlandse PDF als "alternatief", of omgekeerd. WCAG vereist expliciet dezelfde taal.

**Het mechanisme om bij het alternatief te komen is zelf niet toegankelijk.** Een link met "klik hier" zonder context. Een uitklapmenu dat niet werkt met een toetsenbord. Een knop zonder zichtbare focus. Het mechanisme is dan onderdeel van het probleem.

## Gelijkwaardig voor WCAG, gelijkwaardig voor je bezoeker?

Er is nog een vraag waar geen enkel succescriterium antwoord op geeft. Stel: je hebt een tabbladcomponent die niet toegankelijk is. Je biedt een alternatief op een andere pagina, maar dat alternatief is zelf ook weer een technisch ingewikkelde oplossing. Voor WCAG kun je dan misschien aanvinken dat er een gelijkwaardig alternatief is. Maar is het ook gelijkwaardig voor de bezoeker die er dagelijks mee werkt?

![Iemand achter een laptop kijkt vragend, met een magenta vraagteken in een denkwolk boven het hoofd.](/images/blog/alt-persoon-begrijpt-niet.webp)

Vaak is dit niet het geval. Wie de tabs gewoon kan gebruiken, kan op dezelfde pagina blijven. Wie wel een alternatief nodig heeft, moet naar een andere pagina, via een omslachtiger route. Dat is op papier gelijkwaardig, maar het voelt als een tweederangsroute. En precies dat verschil telt WCAG niet mee. WCAG gaat erover of de informatie en functionaliteit bereikbaar zijn, niet over hoe prettig dat is.

Daar zit jouw verantwoordelijkheid als eigenaar van de site of app. Je website is er voor mensen die hem dagelijks gebruiken, niet om een vinkje bij een standaard te zetten. Een alternatief dat technisch klopt maar in de praktijk omslachtig is, haalt de norm wél, maar laat een deel van je bezoekers alsnog in de kou staan. De vraag die ik je daarom meegeef: zou je zelf tevreden zijn met het alternatief dat je aanbiedt? Zo niet, dan is er werk aan de winkel, ook al zegt WCAG van niet.

## Mijn standpunt als auditor

Voor losse elementen op een pagina ben ik positief. Een poster, een infographic of een prijskaart met dezelfde informatie als tekst ernaast: prima oplossing. Je hoeft niet alles toegankelijk te maken, je hoeft de informatie alleen toegankelijk te ontsluiten. Dat scheelt werk en het is een eerlijke uitkomst voor je bezoekers.

![Twee vrijwel identieke webpagina's naast elkaar met een sync-pijl ertussen. De rechter versie is vager, als teken dat de twee versies uit elkaar lopen.](/images/blog/alt-twee-versies.webp)

Bij een volledige tweede versie geef ik advies om voorzichtig te zijn. Niet omdat het volgens WCAG niet mag, maar omdat twee versies bijhouden in de praktijk bijna nooit goed blijft gaan. Eén versie wordt altijd belangrijker dan de andere, waardoor ze op termijn uit de pas lopen en de "toegankelijke" versie niet meer voldoet. In de Verenigde Staten is de wetgeving op dit gebied strenger: onder de ADA Title II-webregel uit 2024 is een conformerende alternatieve versie alleen nog toegestaan als toegankelijk maken technisch of juridisch echt niet mogelijk is. In Nederland is er geen vergelijkbare beperking voor websites van private organisaties, maar de richting is duidelijk: gebruik een tweede versie niet als makkelijke uitweg.

Kom ik zo'n volledige tweede versie tegen met een echt gelijkwaardig alternatief, dan flag ik het meestal als advies, niet als hard issue. Mijn boodschap is dan: het mag van WCAG, maar je betaalt de prijs op een ander moment. Bij de eerstvolgende contentwijziging lopen de twee versies uit elkaar, en dan is het issue er alsnog.

## Praktisch advies

Bepaal eerst waar je mee te maken hebt. Gaat het om een los element op een pagina, zoals een poster, een infographic of een prijskaart? Lever dan dezelfde informatie als echte tekst op dezelfde pagina. Daarmee los je de meeste barrières op zonder het element zelf aan te raken, en dat is precies waar de regel voor bedoeld is.

Gaat het om een heel apart document of een complete tweede versie van een pagina? Dan luidt mijn vuistregel: maak het origineel toegankelijk. Dat is op de lange termijn goedkoper, eerlijker naar je bezoekers, en het scheelt je een hoop discussie tijdens audits.

Werk je tóch met zo'n volledige tweede versie, controleer dan minstens deze vier dingen:

- Bevat het alternatief alle informatie en functionaliteit?
- Is het in dezelfde taal?
- Wordt het gelijktijdig bijgewerkt?
- Is de link naar het alternatief zelf toegankelijk en goed vindbaar?

En als je je eigen pagina nog eens onder de loep neemt: vraag je dan altijd af of een bezoeker die afhankelijk is van het alternatief, dezelfde ervaring krijgt als iemand die het origineel gebruikt. Zo niet, dan is het geen gelijkwaardig alternatief, hoe dichtbij het ook staat.

## Bronnen

- W3C, Understanding Conformance (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/conformance
- W3C, Understanding Contrast (Minimum), met uitzondering voor tekst in een afbeelding (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- W3C, Understanding Resize Text (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/resize-text
- W3C, Understanding Text Spacing (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/text-spacing
- W3C, Understanding Images of Text (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/images-of-text
- W3C, Techniek G174: een knop om naar een presentatie met voldoende contrast te schakelen: https://www.w3.org/WAI/WCAG22/Techniques/general/G174
- W3C, Alternate Versions Conformance Requirement: https://www.w3.org/WAI/GL/2007/05/alternate-versions.html
- W3C, Techniek G136: link aan het begin van een niet-conformerende pagina: https://www.w3.org/TR/WCAG20-TECHS/G136.html
- Documenten en toegankelijkheid, Een ontoegankelijk document met een toegankelijk alternatief: https://documenten-en-toegankelijkheid.nl/richtlijnen/eisen-ontoegankelijk-document/
- ADA.gov, Fact Sheet: New Rule on the Accessibility of Web Content and Mobile Apps Provided by State and Local Governments: https://www.ada.gov/resources/2024-03-08-web-rule/
- Section 508 ICT Testing Baseline, Conforming Alternate Version: https://ictbaseline.access-board.gov/web-baselines/20AlternateVersions/

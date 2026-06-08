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
image: "/images/blog/vragen-digitale-toegankelijkheid.svg"
---

In bijna elke audit kom ik dit moment tegen. Een PDF op de pagina die helemaal niet toegankelijk is. Een poster met de programma-informatie van een evenement. Een infographic vol cijfers. En de klant zegt: "Maar die informatie staat ook gewoon als tekst op de pagina. Hoeft dat dan nog?"

Het korte antwoord: soms. Maar lang niet zo vaak als mensen denken.

In de audit-wereld doet de "1-klik-regel" al jaren de ronde. Als het toegankelijke alternatief één klik verderop staat, mag je het ontoegankelijke element laten zoals het is. Dat klinkt logisch, en het is praktisch. Maar het staat nergens zo in WCAG. Wat er wel staat, is genuanceerder, en de praktijk is strenger dan veel mensen denken.

## Wat WCAG hier echt over zegt

WCAG noemt dit concept een **conformerende alternatieve versie**, in het Engels *Conforming Alternate Version*. Het idee komt uit Conformance Requirement 1, en het is geen apart succescriterium. Het is een uitzondering op de hoofdregel dat al je content toegankelijk moet zijn.

WCAG zegt het zo (vrij vertaald): een alternatieve versie telt mee voor je conformiteit als die versie:

1. **Volledig voldoet** aan WCAG op het gedeclareerde niveau.
2. **Dezelfde informatie en functionaliteit** biedt, in **dezelfde taal**.
3. **Net zo actueel** is als de niet-toegankelijke versie.
4. **Bereikbaar is via een mechanisme** dat zelf ook toegankelijk is.

In die laatste eis zit de "1-klik"-mythe verstopt. Een link bovenaan de pagina is een prima toegankelijk mechanisme, en daarom werkt 1 klik in de meeste gevallen. Maar de regel zelf gaat over het mechanisme, niet over het aantal klikken. En de andere drie eisen worden in de praktijk veel vaker overtreden dan je zou denken.

## Voorbeelden waar het in de praktijk klopt

Hier zijn een paar situaties die ik regelmatig zie, en waar het toegankelijke alternatief inderdaad voldoende is.

**Een ontoegankelijke PDF naast een toegankelijke HTML-pagina.** Op een gemeentepagina staat een uitgebreid beleidsstuk in PDF, dat niet voldoet aan WCAG. Maar boven de PDF staat exact dezelfde tekst in HTML, met goede koppen, links en alt-teksten. De PDF is dan een dubbele aanbieding, niet de enige bron. De HTML is de primaire weg. Mits die echt alles bevat, ook de bijlagen en grafieken in een toegankelijke vorm, is dit acceptabel.

**Een poster met evenementinformatie naast een tekstuele opsomming.** Een theaterwebsite zet de seizoenposter pontificaal op de homepage. Datum, prijs, sprekers, locatie: alles staat erop in chique typografie. Maar daaronder staan precies dezelfde gegevens in een goed gestructureerd tekstblok, met leesbare links naar tickets. De poster is dan een visuele samenvatting, geen drager van unieke informatie.

**Een infographic met jaarcijfers naast een datatabel.** Een rapportpagina opent met een vrolijke infographic over jaarcijfers. Daaronder staat een tabel met dezelfde cijfers, of een tekstblok dat de inhoud uitschrijft. Voor wie de infographic niet kan zien of begrijpen, is er een volwaardig alternatief op dezelfde pagina.

**Een organogram als afbeelding met tekstuele structuur eronder.** Een organisatieschema in beeld, en daaronder een geneste opsomming met dezelfde hiërarchie. Dat werkt, mits de tekstuele versie compleet is.

**Een interactieve kaart met locaties, gecombineerd met een lijst.** Een festivalwebsite toont een kaart met alle podia. De kaart zelf is niet toegankelijk. Maar onder de kaart staat een lijst met alle locaties, adressen en routebeschrijvingen. Voor wie de kaart niet kan gebruiken, is er een volledig alternatief.

**Een afbeelding van een prijslijst met de prijzen ook als tekst op de pagina.** Iets dat ik vaak zie bij kleine ondernemers en horeca. De prijskaart is een mooi vormgegeven JPG, en daaronder staat exact dezelfde prijslijst als HTML-tekst. Hier zit de inhoud op dezelfde pagina, dus er hoeft niet eens geklikt te worden.

## Waar het in de praktijk misgaat

Hier let ik streng op tijdens een audit, want dit is waar het bijna altijd fout zit.

**Het alternatief mist informatie.** De poster bevat een QR-code of een telefoonnummer dat nergens anders staat. De PDF heeft bijlagen die in de HTML-versie ontbreken. De infographic toont een verloop dat in de tabel niet te zien is. Zodra het alternatief minder biedt, telt het niet als gelijkwaardig.

**Het alternatief is niet actueel.** De HTML-versie is bijgewerkt, de PDF is een half jaar oud. Of andersom. In de praktijk gebeurt dit constant, vooral bij organisaties die content in twee systemen beheren.

**Het alternatief staat in een andere taal.** Een Engelse pagina met een Nederlandse PDF als "alternatief", of omgekeerd. WCAG vereist expliciet dezelfde taal.

**Het mechanisme om bij het alternatief te komen is zelf niet toegankelijk.** Een link met "klik hier" zonder context. Een uitklapmenu dat niet werkt met een toetsenbord. Een knop zonder zichtbare focus. Het mechanisme is dan onderdeel van het probleem.

**Het ontoegankelijke element is de prominente versie.** Als de PDF bovenaan staat en de HTML-tekst pas helemaal onderaan, is dat in de praktijk vaak geen echt alternatief meer. De gemiddelde bezoeker met een schermlezer of vergroting komt nooit bij die HTML-versie aan. Dat is technisch verdedigbaar, maar in de geest van de richtlijn discutabel.

## Mijn standpunt als auditor

Eerlijk: ik probeer deze constructie zoveel mogelijk te vermijden in mijn adviezen. Niet omdat het in WCAG niet mag, maar omdat het in de praktijk bijna nooit goed blijft gaan.

Twee versies bijhouden kost tijd. Eén versie wordt altijd belangrijker dan de andere, en de "alternatieve" versie raakt achter. De toegankelijke variant voelt voor sommige bezoekers bovendien als een afgeleid product, niet als de hoofdroute. En in de Verenigde Staten zie je dat de wetgever er recent harder op gaat zitten: onder de nieuwe ADA Title II Web Rule (2024) mag een conformerende alternatieve versie alleen nog gebruikt worden als toegankelijk maken technisch of juridisch echt niet kan. In Nederland is er nog geen vergelijkbare beperking, maar de richting is duidelijk.

Als ik een ontoegankelijk element tegenkom met een echt gelijkwaardig alternatief, dan flag ik het meestal alsnog als advies, niet als hard issue. Mijn boodschap is dan: het mag van WCAG, maar je betaalt de prijs op een ander moment. Bij de eerstvolgende contentwijziging gaan de twee versies uit elkaar lopen, en dan is het issue er alsnog.

## Praktisch advies

Voor de meeste situaties luidt mijn vuistregel: maak het origineel toegankelijk. Dat is op de lange termijn goedkoper, eerlijker naar je bezoekers, en het scheelt je een hoop discussie tijdens audits.

Als je toch met een dubbele versie werkt, controleer dan minstens deze vier dingen:

- Bevat het alternatief **alle** informatie en functionaliteit?
- Is het in **dezelfde taal**?
- Wordt het **gelijktijdig** bijgewerkt?
- Is de **link naar het alternatief** zelf toegankelijk en goed vindbaar?

En als je je eigen pagina nog eens onder de loep neemt: vraag je altijd af of een bezoeker die afhankelijk is van het alternatief, dezelfde ervaring krijgt als iemand die het origineel gebruikt. Zo niet, dan is het geen gelijkwaardig alternatief, hoe dichtbij het ook staat.

## Bronnen

- W3C, Understanding Conformance (WCAG 2.2) https://www.w3.org/WAI/WCAG22/Understanding/conformance
- W3C, Alternate Versions Conformance Requirement https://www.w3.org/WAI/GL/2007/05/alternate-versions.html
- W3C, Techniek G136: link aan het begin van een niet-conformerende pagina https://www.w3.org/TR/WCAG20-TECHS/G136.html
- Documenten en toegankelijkheid, Een ontoegankelijk document met een toegankelijk alternatief https://documenten-en-toegankelijkheid.nl/richtlijnen/eisen-ontoegankelijk-document/
- Accessible.org, Use of Conforming Alternate Versions Limited in New ADA Title II Web Rule https://accessible.org/conforming-alternate-versions/
- Section 508 ICT Testing Baseline, Conforming Alternate Version https://ictbaseline.access-board.gov/web-baselines/20AlternateVersions/

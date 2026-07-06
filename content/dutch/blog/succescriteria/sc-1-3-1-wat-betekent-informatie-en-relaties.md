---
title: "SC 1.3.1 - Wat betekent “Informatie en relaties”"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
description: "WCAG 1.3.1 vraagt dat de structuur van je pagina ook in de code klopt. Lees hoe je als webredacteur koppen, lijsten en tabellen goed opmaakt en zelf controleert."
keywords:
  - WCAG 1.3.1
  - WCAG informatie en relaties
  - koppenstructuur controleren
  - echte koppen CMS
  - toegankelijke tabellen
  - lijsten toegankelijkheid
  - structuur webredactie
tags:
  - "1-3-1"
  - "Structuur"
aliases:
  - /sc-1-3-1-wat-betekent-informatie-en-relaties/
---

Een webpagina is meer dan losse tekst. Koppen, opsommingen en tabellen geven je verhaal structuur. Ziende bezoekers zien die structuur meteen: een kop is groot en vet, een opsomming heeft bolletjes. Mensen die een schermlezer gebruiken, zien dat niet. Hun software leest de structuur uit de code. Daarom zegt WCAG: **de structuur die je visueel toont, moet ook in de code staan**.

Dit heet **1.3.1 Info and Relationships**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) vraagt dat informatie, structuur en relaties in je content ook door software te bepalen zijn.

In begrijpelijke taal: als iets eruitziet als een kop, moet het in de code ook een kop zijn. Ziet iets eruit als een opsomming, dan moet het een echte lijst zijn. En in een tabel moet de code vertellen welke cel een kopcel is.

Het goede nieuws voor jou als webredacteur: je hoeft hiervoor geen code te schrijven. Je CMS-editor heeft knoppen voor koppen, lijsten en tabellen. Die knoppen zetten de juiste structuur in de code. Je hoeft ze alleen consequent te gebruiken.

## Waarom is dit belangrijk?

Een schermlezer gebruikt de structuur om de pagina te laten navigeren. Bezoekers springen van kop naar kop om te scannen, precies zoals jij een pagina visueel scant. Bij een opsomming meldt de schermlezer: "lijst, 5 items". Bij een tabel leest hij bij elke cel voor welke kolom en rij erbij horen.

Zit die structuur niet in de code? Dan hoort de bezoeker één lange brij tekst, zonder houvast. Scannen kan niet meer, verbanden verdwijnen en taken worden onnodig zwaar.

Er is een bonus: zoekmachines gebruiken dezelfde structuur om je pagina te begrijpen. Een logische koppenstructuur helpt dus ook je vindbaarheid.

## Koppen: kies op niveau, niet op uiterlijk

In je CMS-editor kies je een kop via het opmaakmenu: Kop 1, Kop 2, Kop 3, enzovoort. Die niveaus vormen samen de inhoudsopgave van je pagina:

- Kop 1 is de paginatitel. Elke pagina heeft er precies één.
- Kop 2 gebruik je voor de hoofdonderwerpen.
- Kop 3 voor de onderdelen daarbinnen.

Twee regels:

1. **Maak van een kop nooit gewoon vette tekst.** Visueel lijkt het hetzelfde, maar voor een schermlezer is vette tekst geen kop. De bezoeker kan er niet naartoe springen.
2. **Sla geen niveau over.** Na Kop 2 komt Kop 3, niet Kop 4. Vind je Kop 3 te groot of te klein? Dat is een kwestie van vormgeving; vraag je webbouwer om de stijl aan te passen. Kies nooit een ander kopniveau omdat het er mooier uitziet.

Meer weten? Lees ons artikel over [kopniveaus](/blog/sc-1-3-1-kopniveaus/).

## Lijsten: gebruik de opsommingsknop

Typ je een opsomming als losse regels met streepjes of sterretjes ervoor? Dan ziet een schermlezer alleen losse zinnen. Gebruik je de opsommingsknop in je editor, dan meldt de schermlezer "lijst, 4 items" en weet de bezoeker precies waar de lijst begint en eindigt.

Kies het juiste type:

- **Bolletjes** voor opsommingen zonder vaste volgorde, zoals een lijst met voordelen.
- **Nummers** voor stappen die in een vaste volgorde horen, zoals een instructie.

## Tabellen: alleen voor echte gegevens, altijd met kopcellen

Een tabel is bedoeld voor gegevens die in rijen en kolommen horen: openingstijden, tarieven, een vergelijking. Twee dingen om op te letten:

1. **Wijs de kopcellen aan.** De bovenste rij of eerste kolom vertelt wat er in de rest staat. In de meeste editors selecteer je die rij en kies je "koprij" of "kopcel". Zonder kopcellen weet een schermlezer niet welke prijs bij welk pakket hoort.
2. **Gebruik een tabel nooit om tekst en afbeeldingen naast elkaar te zetten.** Een schermlezer kondigt dan een tabel aan waar er geen is, en de leesvolgorde raakt in de war. Wil je iets naast elkaar plaatsen? Vraag je webbouwer om een kolomlay-out.

Meer weten? Lees ons artikel over [tabellen](/blog/sc-1-3-1-tabellen/).

## Vet en cursief: nadruk is geen structuur

Vet en cursief mag je gewoon gebruiken om een woord nadruk te geven. Maar gebruik ze niet als vervanging voor structuur:

- Een vette regel boven een alinea is geen kop. Maak er een echte kop van.
- Een reeks vette regels onder elkaar is geen opsomming. Maak er een echte lijst van.

## Formulieren: dit regelt je webbouwer, dit check jij

Bij formulieren vraagt dit criterium dat elk invoerveld een gekoppeld label heeft. De koppeling zit in de code en regelt je webbouwer. Wat jij kunt doen: controleer of elk veld een duidelijk zichtbaar label heeft, en meld het bij je webbouwer als een veld alleen een grijze voorbeeldtekst in het veld zelf toont. Die tekst verdwijnt zodra je typt en telt niet als label.

Meer weten? Lees ons artikel over [labels](/blog/sc-1-3-1-labels/).

## Veelgemaakte fouten

- **Vette tekst als kop.** Visueel een kop, voor de schermlezer een gewone alinea.
- **Kopniveaus overslaan** of een kopniveau kiezen om het uiterlijk.
- **Een kopniveau gebruiken om tekst groot te maken**, terwijl het geen kop is. Ook dat verwart: de schermlezer kondigt een nieuw onderwerp aan dat er niet is.
- **Opsommingen als losse regels met streepjes** in plaats van een echte lijst.
- **Tabellen zonder kopcellen**, of tabellen die alleen voor de lay-out dienen.
- **Structuur uit Word plakken.** Plak je tekst rechtstreeks uit Word, dan komt er vaak rommelige opmaak mee. Plak als platte tekst en bouw de structuur opnieuw op met de knoppen van je editor.

## Controleer je pagina's met WCAG Radar

Wil je weten hoe jouw pagina's ervoor staan? Gebruik onze gratis [WCAG Radar](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Voor dit criterium laat de radar precies zien wat je nodig hebt:

- **Koppen en structuur:** je ziet alle koppen met hun niveau en krijgt een waarschuwing als er een niveau wordt overgeslagen.
- **Lijststructuur:** je ziet of je opsommingen echte lijsten zijn, of losse regels met streepjes.
- **Tabellen:** de radar markeert tabellen zonder kopcellen of bijschrift.
- **Invoervelden zonder naam:** je ziet welke formuliervelden geen toegankelijke naam hebben, zodat je dit kunt doorgeven aan je webbouwer.

De radar vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen voordat je publiceert. Wil je een complete check door een specialist? Bekijk dan onze [contentaudit](/contentaudit/) of [toegankelijkheidsaudit](/toegankelijkheidsaudit/).

## Veelgestelde vragen

### Mijn CMS toont geen optie voor kopcellen in tabellen. Wat nu?

Kijk eerst in de tabelinstellingen van je editor; de optie heet soms "koprij" of "header". Is de optie er echt niet? Vraag dan je webbouwer om de editor uit te breiden of om de kopcellen in de code te zetten.

### Ik vind Kop 2 te groot. Mag ik dan Kop 4 gebruiken?

Nee. Het kopniveau gaat over de structuur van je verhaal, niet over de grootte. Vraag je webbouwer om de vormgeving van de koppen aan te passen. Dan klopt de structuur én het uiterlijk.

### Geldt dit ook voor documenten zoals PDF's?

Ja. Ook in een PDF moeten koppen, lijsten en tabellen echte structuur hebben. Maak je documenten in Word? Gebruik dan de ingebouwde stijlen voor koppen en lijsten voordat je exporteert naar PDF.

### Hoe controleer ik snel de koppenstructuur van een hele pagina?

Klik de [WCAG Radar](/tools/wcag-radar/) aan op de pagina. Je ziet direct alle koppen met hun niveau. Liever een browserextensie? Lees dan onze [handleiding voor HeadingsMap](/blog/zo-controleer-je-de-koppenstructuur-van-je-website/).

## Samenvatting

WCAG-succescriterium 1.3.1 vraagt dat de structuur van je pagina ook in de code staat. Als webredacteur regel je dat zonder te programmeren: gebruik de knoppen van je CMS-editor waarvoor ze bedoeld zijn.

De belangrijkste punten:

- Maak koppen met de kopniveaus in je editor, nooit met vette tekst.
- Sla geen kopniveaus over.
- Gebruik de opsommingsknop voor lijsten.
- Geef tabellen kopcellen en gebruik ze alleen voor echte gegevens.
- Controleer je pagina's met de [WCAG Radar](/tools/wcag-radar/).

**Wil je dat je hele redactie toegankelijk leert schrijven en publiceren?** Bekijk dan onze [training voor webredacties](/trainen-van-webredactie/) of vraag [een contentaudit](/contentaudit/) aan.

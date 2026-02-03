---
title: "Waarom is het belangrijk om koppen als kopteksten op te maken?"
date: 2024-04-07
slug: "toegankelijke_kopteksten_wcag"
categories: 
  - "achtergrond_wcag"
  - "Webredactie"
aliases:
  - "toegankelijke_kopteksten_wcag"
---

Doelgroep: webredactie

Waarom is het belangrijk om toegankelijke kopteksten te hebben in je tekst? Wanneer een ziende bezoeker de pagina bekijkt, neemt hij structuur en relaties waar via verschillende visuele hints. De koppen zien er anders uit: ze hebben een groter of dikker lettertype of een andere kleur. Als ziende bezoeker lees ik de koppen om de inhoud van de pagina te scannen. Ik hoef de pagina niet van boven naar beneden te lezen om te begrijpen waar het over gaat.

Ook een blinde bezoeker gebruikt kopteksten om de pagina te scannen. Ik wil je laten zien hoe dit werkt. Ik heb hier een testpagina aangemaakt met veel tussenkopjes. Je herkent ze aan de opvallende stijl: vetgedrukt, schuingedrukt, grotere letters.

![testpagina koppen](https://properaccess.nl/wp-content/uploads/2024/04/Scherm­afbeelding-2024-04-07-om-11.53.38-864x1024.png)

Als ik een screenreader aanzet, kan ik als een blinde bezoeker een lijst met koppen genereren. Deze lijst laat ik voorlezen om te begrijpen waar de pagina over gaat. Als ik bij een bepaalde sectie wil beginnen, kan ik ook van kop naar kop navigeren.

Zo ziet de screenreader [NVDA](https://www.nvaccess.org/download/) mijn testpagina:

![NVDA ziet geen koppen](https://properaccess.nl/wp-content/uploads/2024/04/Scherm­afbeelding-2024-04-07-om-12.10.08-1024x755.png)

In de lijst met koppen staat alleen 'kop1: “Testpagina koppen (geen h-elementen)”'. Geen enkele tussenkop is als koptekst opgemaakt. En hoe komt dat? De kopteksten zijn niet digitaal toegankelijk. Alle koppen die je op deze pagina ziet, zijn vetgedrukt gemaakt met gebruik van een knop 'B', schuingedrukt met knop 'I' of door gewoon een grotere tekstgrootte te gebruiken.

![knop B en I](https://properaccess.nl/wp-content/uploads/2024/04/Scherm­afbeelding-2024-04-07-om-12.13.18.png)

De conclusie is: Gebruik daarom nooit alleen vetgedrukte of schuingedrukte teksten (de knoppen “B” en “I” in een tekstbewerker) om koppen op te maken. In HTML zijn er 6 niveaus van koppen van h1 tot en met h6 die we kunnen gebruiken voor koppen. In mijn tekstbewerker vind ik ze hier. Jouw tekstbewerker kan er anders uitzien, maar het principe is hetzelfde.

![Kopelementen](https://properaccess.nl/wp-content/uploads/2024/04/Scherm­afbeelding-2024-04-07-om-12.14.03.png)

En zo ziet de screen reader mijn testpagina nu:

![NVDA ziet koppen](https://properaccess.nl/wp-content/uploads/2024/04/Scherm­afbeelding-2024-04-07-om-12.07.38-1024x803.png)

Wil je weten of je kop toegankelijk is opgemaakt? Er zijn twee opties. De eerste optie is: ga met je muis op de kop staan, klik met de rechtermuisknop en kies 'Inspecteer element'. Een ontwikkelaarspaneel opent. Schrik niet! De tekst die je wilt controleren wordt gehighlight. Wat je wilt weten, is of er een h1 tot en met h6 gebruikt is. Zo niet, dan moet je deze kop aanpassen. Dat doe je in de tekstbewerker.

De tweede optie: stuur mij een link naar je pagina, dan kijk ik graag mee of de koppen op je pagina toegankelijk zijn opgemaakt: julia@properaccess.nl.

Er is meer te vertellen over koppen, maar dat doe ik in een later artikel.

Wat je ook over toegankelijke kopteksten wil weten is de volgorde van content. Lees artikel over [SC 1.3.2](https://properaccess.nl/wcag_wiki/sc-1-3-2-betekenisvolle-volgorde-2/) voor meer informatie.

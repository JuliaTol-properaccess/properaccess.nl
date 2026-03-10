---
title: "Tabel met knoppen om in de kolommen te sorteren"
date: 2025-11-17
slug: "tabel-met-knoppen-om-in-de-kolommen-te-sorteren"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
aliases:
  - /tabel-met-knoppen-om-in-de-kolommen-te-sorteren/
description: "Hoe maak je sorteerbare tabelkolommen toegankelijk voor schermlezers? Lees over de juiste ARIA-attributen en toetsenbordinteractie."
---

Sommige tabellen hebben een rij met kolomkoppen met icoontjes waarmee je de inhoud van de kolom oplopend of aflopend kunt sorteren. Vaak is deze functionaliteit niet toegankelijk voor bezoekers die een schermlezer gebruiken.

![screenshot van een tabelkop met sorteericoontjes](https://properaccess.nl/wp-content/uploads/2025/11/Scherm­afbeelding-2025-11-17-om-08.47.43-1024x160.png)

Wat hier vaak misgaat, is het ontbreken van de juiste interactieve rol bij deze knoppen. Meestal bestaat de kolomkopcel uit een `<th>`\-element. Dat is correct, maar die rol vertelt een schermlezer niet dat erop kan worden geklikt  om een actie uit te voeren.

Sommige schermlezers voegen zelf woorden toe als _“clickable”_ of _“on click”_. Soms wordt dit goed begrepen, maar je kunt hier niet op vertrouwen. Zulke meldingen komen ook op andere plekken in een webpagina voor en betekenen daar niet per se hetzelfde als een echte interactieve rol.

![screenshot tabel](https://properaccess.nl/wp-content/uploads/2025/11/Scherm­afbeelding-2025-11-17-om-08.36.55-1024x177.png)

Het is een slecht idee om een `role="button"` aan het `<th>`\-element toe te voegen. Daarmee overschrijf je de rol van kolomkop en raakt de tabelstructuur onjuist.

De juiste oplossing is om in het `<th>`\-element een **apart** `<button>`\-element op te nemen. Geef dit element:

- een toegankelijke naam die mee verandert met de functie van de knop (bijvoorbeeld bij het wisselen tussen oplopend en aflopend sorteren): `<button aria-label="Oplopend sorteren"> .. </button>`,

- een minimaal contrast van 3,0:1 in beide staten.

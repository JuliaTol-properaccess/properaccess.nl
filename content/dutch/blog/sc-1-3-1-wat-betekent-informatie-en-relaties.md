---
title: "SC 1.3.1 - Wat betekent “Informatie en relaties”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags:
  - "1-3-1"
description: "WCAG 1.3.1 vereist dat informatie en relaties in je content programmatisch bepaalbaar zijn. Leer hoe je semantische HTML correct gebruikt voor koppen, lijsten en formulieren."
---

Webpagina’s bestaan uit meer dan alleen losse teksten. De manier waarop onderdelen zoals koppen, lijsten, tabellen en formulieren worden gestructureerd, bepaalt hoe gebruikers – vooral die met een schermlezer – de inhoud begrijpen. Zonder duidelijke structuur kan belangrijke context verloren gaan.

Daarom zegt WCAG: **zorg dat informatie en relaties in je content ook programmatisch begrijpelijk zijn**. Dit betekent dat de structuur in de code net zo logisch moet zijn als wat je visueel ziet.

Dit heet **1.3.1 Info and Relationships**.

## Wat wordt er van websites verwacht?

- Gebruik **semantische HTML** voor koppen (`<h1>` tot `<h6>`), lijsten (`<ul>`, `<ol>`, `<li>`), tabellen (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`), en formulieren (`<label>`, `<fieldset>`, `<legend>`).

- Zorg dat labels gekoppeld zijn aan de juiste invoervelden.

- Gebruik visuele stijlen (zoals vet of groter lettertype) niet als enige manier om hiërarchie aan te geven – gebruik de juiste HTML-tags.

Kort: bouw je pagina logisch op, zodat de structuur ook voor software duidelijk is.

## Wat is niet verplicht?

- Pure decoratieve elementen hoeven niet semantisch te worden gemarkeerd, zolang ze geen betekenis toevoegen.

- Puur visuele stijlen zonder structurele betekenis (zoals een decoratief kader of een achtergrondkleur) hoeven niet speciaal gecodeerd te worden.

## Veelgemaakte fouten

- Koppen die alleen visueel groter gemaakt zijn (`<p><strong>Mijn Kop</strong></p>` in plaats van `<h2>Mijn Kop</h2>`).

- Tabellen die puur voor lay-out worden gebruikt zonder de juiste tabelstructuur.

- Formuliervelden zonder labels of waarbij de labels niet correct zijn gekoppeld.

## Wat kun je als webredacteur of manager doen?

- **Controleer je koppen**: Gebruik je echte koppen (`<h1>` tot `<h6>`) en staan ze in logische volgorde?

- **Test je formulieren**: Zijn alle velden gekoppeld aan duidelijke labels?

- **Vraag je webbouwer**: Worden lijsten, tabellen en formulieren correct opgebouwd in de code?

## Samenvatting

Duidelijke structuur maakt je website niet alleen toegankelijker, maar ook makkelijker te begrijpen voor iedereen. Bouw je pagina logisch op en gebruik semantische HTML om je content echt begrijpelijk te maken.

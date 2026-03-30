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

Sorteerbare tabellen kom je overal tegen: in dashboards, overzichtspagina's, webshops en CMS-systemen. Je klikt op een kolomkop en de tabel sorteert zichzelf. Visueel is dat duidelijk, maar voor een schermlezergebruiker is het vaak onzichtbaar. De kolomkop ziet er niet uit als iets interactiefs -- en de schermlezer vertelt het ook niet.

## Wat gaat er mis?

De kolomkopcel is een `<th>`-element. Dat is correct -- het vertelt de schermlezer dat dit een kolomkop is. Maar `<th>` heeft geen interactieve rol. Een schermlezer vertelt de gebruiker niet dat je erop kunt klikken om te sorteren.

Sommige schermlezers voegen zelf woorden toe als _"clickable"_ of _"on click"_. Maar daar kun je niet op vertrouwen. Die meldingen komen ook op andere plekken voor en betekenen niet per se dat er een echte interactie mogelijk is.

## Wat je niet moet doen

Het is verleidelijk om `role="button"` op het `<th>`-element te zetten. Maar dat overschrijft de rol van kolomkop. De tabelstructuur raakt dan kapot -- een schermlezer herkent de cel niet meer als kolomkop en de relatie tussen koppen en data gaat verloren.

## De juiste oplossing: een button in de th

Plaats een apart `<button>`-element **binnen** het `<th>`-element. Zo behoud je de tabelstructuur en voeg je een interactieve rol toe.

```html
<th aria-sort="ascending">
  <button>
    Naam
    <span aria-hidden="true">▲</span>
  </button>
</th>
```

### Waar je op moet letten

**1. Gebruik aria-sort op het th-element.** Dit attribuut vertelt de schermlezer in welke richting de kolom gesorteerd is:

- `aria-sort="ascending"` -- oplopend gesorteerd
- `aria-sort="descending"` -- aflopend gesorteerd
- `aria-sort="none"` -- niet gesorteerd

Een schermlezer leest dan voor: "Naam, kolomkop, knop, oplopend gesorteerd". De gebruiker weet precies wat er aan de hand is.

**2. Toetsenbordbediening.** De knop moet bereikbaar zijn met Tab en activeerbaar met Enter of Spatiebalk. Als je een native `<button>` gebruikt, krijg je dit gratis.

**3. Visueel contrast.** Het sorteericoon (pijltje, driehoekje) moet minimaal 3:1 contrast hebben met de achtergrond (SC 1.4.11). In beide staten -- zowel de actieve als de inactieve sorteerpijltjes.

**4. Focus-indicator.** De knop moet een zichtbare focus-indicator hebben als die toetsenbordfocus krijgt. Test dit door met Tab naar de tabelkoppen te navigeren.

## Voorbeeld: complete implementatie

```html
<table>
  <thead>
    <tr>
      <th aria-sort="ascending">
        <button>Naam ▲</button>
      </th>
      <th aria-sort="none">
        <button>Datum</button>
      </th>
      <th aria-sort="none">
        <button>Status</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <!-- tabeldata -->
  </tbody>
</table>
```

Bij het klikken op een knop update je JavaScript het `aria-sort`-attribuut, de visuele indicator en de sortering van de data. Vergeet niet om `aria-sort` op de vorige kolom terug te zetten naar `"none"`.

## Samengevat

Gebruik een `<button>` binnen je `<th>` voor sorteerbare kolommen. Voeg `aria-sort` toe aan het `<th>`-element. Zorg voor voldoende contrast en toetsenbordbediening. Zo weet elke bezoeker -- met of zonder schermlezer -- dat en hoe de tabel gesorteerd kan worden.

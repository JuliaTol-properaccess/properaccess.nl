---
title: "Semantische markup"
section_number: 1
chapter_number: 1
locked: false
description: "Gebruik semantische HTML-elementen om structuur en betekenis correct over te brengen."
points: 10
layout: "academy"
---

## Wat is semantische markup?

Semantische markup betekent dat je HTML-elementen gebruikt die de **betekenis** van je content beschrijven, niet alleen het uiterlijk. Een `<h2>` vertelt dat iets een kop is. Een `<nav>` vertelt dat het een navigatieblok is. Een `<button>` vertelt dat iets klikbaar is.

Dat klinkt vanzelfsprekend, maar in de praktijk gaat het vaak mis. Veel websites gebruiken generieke elementen zoals `<div>` en `<span>` voor alles — en voegen dan CSS toe om het er goed uit te laten zien. Visueel maakt dat geen verschil. Maar voor een schermlezer maakt het **alle** verschil.

## Waarom het ertoe doet

Een schermlezer leest geen CSS. Die leest de HTML-structuur. Als een kop geen `<h2>` is maar een `<div class="heading">`, dan weet de schermlezer niet dat het een kop is. De gebruiker kan er niet naartoe navigeren, het verschijnt niet in de koppenlijst, en de structuur van je pagina is onzichtbaar.

Hetzelfde geldt voor:

- **Lijsten** — een `<ul>` vertelt hoeveel items er zijn. Een reeks `<div>`'s niet.
- **Knoppen** — een `<button>` is focusbaar en activeerbaar met Enter en spatie. Een `<div onclick="...">` niet.
- **Links** — een `<a href="...">` is een link. Een `<span class="link">` niet.
- **Tabellen** — een `<table>` vertelt dat data in rijen en kolommen staat. Een grid van `<div>`'s niet.

## De basis: gebruik het juiste element

Dit is de belangrijkste regel in webtoegankelijkheid:

> Gebruik het HTML-element dat het beste beschrijft wat de content **is** — niet hoe het eruit moet **zien**.

### Veelgebruikte semantische elementen

| Element | Betekenis |
|---------|-----------|
| `<h1>` t/m `<h6>` | Koppen (hiërarchie) |
| `<p>` | Alinea |
| `<ul>`, `<ol>`, `<li>` | Lijsten |
| `<nav>` | Navigatieblok |
| `<main>` | Hoofdinhoud van de pagina |
| `<header>` | Kop van de pagina of sectie |
| `<footer>` | Voettekst van de pagina of sectie |
| `<article>` | Zelfstandig stuk content |
| `<section>` | Thematisch gegroepeerde content |
| `<aside>` | Zijdelingse content (sidebar) |
| `<button>` | Klikbare actie |
| `<a>` | Link naar een andere locatie |
| `<table>`, `<th>`, `<td>` | Tabeldata |
| `<form>`, `<label>`, `<input>` | Formulierelementen |
| `<figure>`, `<figcaption>` | Afbeelding met bijschrift |
| `<blockquote>` | Citaat |
| `<time>` | Datum of tijdstip |
| `<abbr>` | Afkorting |

### Generieke elementen: `<div>` en `<span>`

`<div>` en `<span>` zijn **niet** semantisch. Ze hebben geen betekenis. Gebruik ze alleen voor styling of layout — nooit als vervanging voor een semantisch element.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: een klikbaar element</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<div class="btn" onclick="submitForm()">Verstuur</div>
```

Een `<div>` is niet focusbaar, niet activeerbaar met het toetsenbord, en wordt niet als knop herkend door hulpsoftware.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<button type="submit">Verstuur</button>
```

Een `<button>` is standaard focusbaar, activeerbaar met Enter en spatie, en wordt aangekondigd als "knop" door schermlezers.

</div>
</div>

## Structuur geeft context

Semantische markup draait niet alleen om individuele elementen. Het gaat om hoe ze samenwerken om **structuur** te geven aan je pagina.

Een goed gestructureerde pagina heeft:

1. **Een duidelijke koppenhiërarchie** — `<h1>` voor de hoofdtitel, `<h2>` voor secties, `<h3>` voor subsecties, enzovoort.
2. **Landmarks** — `<header>`, `<nav>`, `<main>`, `<footer>` vertellen de schermlezer welke delen van de pagina welke functie hebben.
3. **Logische groepering** — gerelateerde content staat in dezelfde `<section>` of `<article>`.
4. **Correcte lijsten** — opsommingen staan in een `<ul>` of `<ol>`, niet als losse `<p>`'s met streepjes.

Een schermlezergebruiker kan door koppen springen, van landmark naar landmark navigeren, en lijsten overslaan. Maar alleen als de HTML dat ondersteunt.

<div class="academy-tip">
<p class="academy-tip__title">Audittip</p>

In bijna elke audit vinden we `<div>`'s die eigenlijk `<button>`'s of `<a>`'s zouden moeten zijn. Dit is een van de meest voorkomende overtredingen van **WCAG 4.1.2** (Naam, Rol, Waarde). Test je pagina met Tab om te zien of alle interactieve elementen focusbaar zijn.

</div>

## De gevolgen van niet-semantische markup

Als je geen semantische HTML gebruikt, breken er meerdere dingen tegelijk:

- **Schermlezers** kunnen de structuur niet interpreteren
- **Toetsenbordgebruikers** kunnen niet navigeren naar interactieve elementen
- **Spraakbesturing** kan elementen niet herkennen ("klik op Verstuur" werkt alleen als er een herkenbare knop is)
- **Zoekmachines** begrijpen de structuur van je pagina minder goed
- **Browser-extensies** (zoals leesmodussen) verliezen de hiërarchie

## WCAG-succescriteria

Semantische markup raakt meerdere WCAG-succescriteria:

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Info en relaties | A | Structuur en relaties die visueel worden overgebracht, moeten ook programmatisch bepaalbaar zijn |
| **4.1.2** Naam, Rol, Waarde | A | Interactieve elementen moeten de juiste rol, naam en status hebben |
| **2.4.1** Blokken omzeilen | A | Landmarks en skiplinks helpen gebruikers om blokken over te slaan |
| **2.4.6** Koppen en labels | AA | Koppen beschrijven het onderwerp of doel van de content |
| **1.3.6** Doel identificeren | AAA | De betekenis van interface-componenten is programmatisch bepaalbaar |

Het belangrijkste criterium is **1.3.1**: alles wat je visueel overbrengt (koppen, lijsten, tabellen, formuliergroepen) moet ook in de HTML zichtbaar zijn.

## Samenvattend

- Gebruik het HTML-element dat de **betekenis** van je content beschrijft
- Vermijd `<div>` en `<span>` als vervanging voor semantische elementen
- Bouw een duidelijke structuur op met koppen, landmarks en lijsten
- Test met een schermlezer of Tab-navigatie om te controleren of de structuur klopt
- Als je twijfelt: het juiste HTML-element is bijna altijd eenvoudiger dan een `<div>` met extra attributen

In de volgende hoofdstukken gaan we dieper in op elk type structuurelement: paginatitels, taalattributen, koppen, landmarks, lijsten, tabellen en meer.

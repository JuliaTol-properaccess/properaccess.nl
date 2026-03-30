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

In de praktijk gaat het vaak mis. Veel websites gebruiken generieke elementen zoals `<div>` en `<span>` voor alles — en voegen dan CSS toe om het er goed uit te laten zien. Visueel maakt dat geen verschil. Maar voor hulpsoftware maakt het **alle** verschil.

## Waarom het ertoe doet

WCAG succescriterium 1.3.1 (Informatie en relaties) vereist dat informatie en relaties die **visueel** worden overgebracht, ook **programmatisch bepaalbaar** zijn. Dat betekent: als je iets visueel duidelijk maakt — door grootte, positie, kleur of lay-out — dan moet diezelfde informatie ook in de code zitten.

De <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" rel="noopener">W3C-toelichting</a> zegt het zo:

> Informatie en relaties die door opmaak visueel of auditief worden overgebracht, moeten behouden blijven wanneer het presentatieformaat verandert.

Een schermlezer leest geen CSS. Die leest de HTML-structuur. Als een kop geen `<h2>` is maar een `<div class="heading">`, dan weet de schermlezer niet dat het een kop is. De gebruiker kan er niet naartoe navigeren en de structuur van je pagina is onzichtbaar.

### Programmatisch bepaalbaar: wat betekent dat?

De W3C definieert dit als: **door software vast te stellen op basis van data die door de auteur is aangeleverd**. Hulpsoftware moet de structuur kunnen uitlezen uit de HTML, zonder te hoeven "kijken" naar het visuele resultaat.

Er zijn twee situaties:

1. **De technologie biedt semantische elementen** — gebruik ze. HTML heeft koppen, lijsten, tabellen, landmarks, formulierlabels.
2. **De technologie biedt geen semantisch element** — beschrijf de relatie in tekst. Bijvoorbeeld: "Alle verplichte velden zijn gemarkeerd met een asterisk (*)."

## De basis: gebruik het juiste element

> Gebruik het HTML-element dat het beste beschrijft wat de content **is** — niet hoe het eruit moet **zien**.

| Element | Betekenis |
|---------|-----------|
| `<h1>` t/m `<h6>` | Koppen (hierarchie) |
| `<p>` | Alinea |
| `<ul>`, `<ol>`, `<li>` | Lijsten |
| `<nav>`, `<main>`, `<header>`, `<footer>` | Landmarks (pagina-regio's) |
| `<button>` | Klikbare actie |
| `<a>` | Link naar een andere locatie |
| `<table>`, `<th>`, `<td>` | Tabeldata met koppen |
| `<form>`, `<label>`, `<input>` | Formulierelementen |
| `<fieldset>`, `<legend>` | Groepering van formuliervelden |

`<div>` en `<span>` zijn **niet** semantisch. Gebruik ze alleen voor layout of styling — nooit als vervanging voor een semantisch element.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: een klikbaar element</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<div class="btn" onclick="submitForm()">Verstuur</div>
```

Niet focusbaar, niet activeerbaar met toetsenbord, geen rol "knop".

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<button type="submit">Verstuur</button>
```

Standaard focusbaar, activeerbaar met Enter en spatie, herkend als "knop".

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">Vuistregel</p>

Als je CSS moet toevoegen om iets eruit te laten zien als een kop, lijst, knop of tabel — dan gebruik je waarschijnlijk het verkeerde HTML-element.

</div>

## De gevolgen van niet-semantische markup

Als je geen semantische HTML gebruikt, breken er meerdere dingen tegelijk:

- **Schermlezers** kunnen de structuur niet interpreteren
- **Toetsenbordgebruikers** kunnen niet navigeren naar interactieve elementen
- **Spraakbesturing** kan elementen niet herkennen ("klik op Verstuur" werkt alleen als er een herkenbare knop is)
- **Zoekmachines** begrijpen de structuur minder goed
- **Leesmodussen** en aangepaste stylesheets verliezen de hierarchie

## WCAG-succescriteria

Semantische markup raakt meerdere succescriteria. De belangrijkste:

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Informatie en relaties | A | Structuur moet programmatisch bepaalbaar zijn |
| **4.1.2** Naam, Rol, Waarde | A | Interactieve elementen moeten de juiste rol hebben |
| **2.4.1** Blokken omzeilen | A | Landmarks helpen gebruikers blokken over te slaan |
| **2.4.6** Koppen en labels | AA | Koppen beschrijven het onderwerp van de content |

## Verdieping

Elk type semantisch element heeft eigen regels en valkuilen. In de volgende hoofdstukken behandelen we ze apart:

- **Paginatitel** — het `<title>`-element en waarom het de eerste indruk bepaalt
- **Taal** — het `lang`-attribuut en de impact op uitspraak
- **Koppen** — hierarchie, niveaus overslaan, en veelgemaakte fouten
- **Landmarks** — `<nav>`, `<main>`, `<header>`, `<footer>` en hun ARIA-equivalenten
- **Lijsten** — `<ul>`, `<ol>`, `<dl>` en wanneer je ze (niet) gebruikt
- **Tabellen** — wanneer een tabel een tabel is, en wanneer niet
- **iFrames** — toegankelijke ingebedde content
- **Markup-validiteit** — waarom valide HTML ertoe doet

## Verder lezen

- [Wat betekent WCAG 1.3.1?](/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/) — de achtergrond van dit criterium
- [Veelgemaakte fouten bij SC 1.3.1](/blog/veelgemaakte-fouten-sc-1-3-1-informatie-en-relaties/) — koppen en lijsten die niet zijn wat ze lijken
- [Kopniveaus](/blog/sc-1-3-1-kopniveaus/) — wanneer een overgeslagen kopniveau een probleem is
- [Tabellen](/blog/sc-1-3-1-tabellen/) — wanneer een tabel geen tabel is
- [Labels](/blog/sc-1-3-1-labels/) — formuliervelden zonder gekoppeld label
- [Fieldset en legend](/blog/sc-1-3-1-fieldset-legend/) — groepering van gerelateerde velden

---

## Quiz

<div class="academy-quiz" id="quiz-semantische-markup">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> In de code staat: <code>&lt;p class="title"&gt;Over ons&lt;/p&gt;</code>. De tekst ziet er visueel uit als een kop. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Er is geen probleem — de tekst ziet er uit als een kop</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>De class-naam "title" is niet semantisch genoeg</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Een schermlezer herkent dit niet als kop — de gebruiker kan er niet naartoe navigeren</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Het is slecht voor SEO, maar geen toegankelijkheidsprobleem</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een <code>&lt;p&gt;</code> met visuele opmaak is geen kop voor hulpsoftware. De gebruiker mist de structuur en kan niet van kop naar kop navigeren. Dit is een overtreding van SC 1.3.1.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een schermlezer herkent een <code>&lt;p&gt;</code> niet als kop, ongeacht de visuele opmaak. De gebruiker kan er niet naartoe navigeren. Gebruik een <code>&lt;h2&gt;</code> (of het juiste kopniveau).</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Wanneer is een <code>&lt;div&gt;</code> het juiste element?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Als container voor layout of styling, wanneer geen semantisch element van toepassing is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Als vervanging voor een <code>&lt;button&gt;</code>, mits je een onclick-handler toevoegt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Als wrapper voor een navigatiemenu</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Altijd — <code>&lt;div&gt;</code> is het meest flexibele element</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Een <code>&lt;div&gt;</code> is een generiek containerelement zonder betekenis. Gebruik het alleen voor layout wanneer er geen semantisch alternatief is.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een <code>&lt;div&gt;</code> heeft geen semantische betekenis. Voor een knop gebruik je <code>&lt;button&gt;</code>, voor navigatie <code>&lt;nav&gt;</code>. Een <code>&lt;div&gt;</code> is alleen geschikt als puur visuele container.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Drie productvoordelen staan als <code>&lt;div&gt;</code>-elementen met een streepje ervoor. Wat ontbreekt er?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Niets — de streepjes maken duidelijk dat het een lijst is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>De items moeten in een <code>&lt;ul&gt;</code> met <code>&lt;li&gt;</code>-elementen staan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Elk item moet een eigen <code>&lt;h3&gt;</code> krijgen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>De items moeten in een <code>&lt;table&gt;</code> staan</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Een <code>&lt;ul&gt;</code> vertelt de schermlezer dat het een lijst is met drie items. Losse <code>&lt;div&gt;</code>'s met streepjes geven die informatie niet.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De items vormen een opsomming en horen in een <code>&lt;ul&gt;</code> met <code>&lt;li&gt;</code>-elementen. Dan zegt een schermlezer "lijst met 3 items" en kan de gebruiker de lijst overslaan.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Een formulier heeft secties "Bezorgadres" en "Factuuradres", elk met velden voor straat, postcode en woonplaats. Hoe maak je het onderscheid duidelijk?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Zet een <code>&lt;h2&gt;</code> boven elke sectie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Gebruik <code>&lt;fieldset&gt;</code> met <code>&lt;legend&gt;</code> om elke groep te labelen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Geef de secties een andere achtergrondkleur</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Voeg "Bezorgadres:" toe aan elk label</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. <code>&lt;fieldset&gt;</code> met <code>&lt;legend&gt;</code> groepeert de velden. Bij "Straat" hoort de gebruiker dan "Bezorgadres, Straat". Zonder groepering weet de gebruiker niet bij welk adres het veld hoort.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De beste oplossing is <code>&lt;fieldset&gt;</code> met <code>&lt;legend&gt;</code>. Dat koppelt de groepsnaam aan de velden. Een kop helpt visueel maar wordt niet automatisch gekoppeld. Kleur alleen is onvoldoende (SC 1.4.1).</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> Wat betekent "programmatisch bepaalbaar" volgens WCAG?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>Informatie die door software kan worden uitgelezen uit de code</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>Informatie die zichtbaar is op het scherm</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>Informatie die met JavaScript dynamisch wordt gegenereerd</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Informatie die alleen door developers begrepen kan worden</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Hulpsoftware moet de informatie kunnen uitlezen uit de HTML-structuur, zonder naar het visuele resultaat te kijken.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>"Programmatisch bepaalbaar" betekent: door software vast te stellen op basis van de HTML-code. Het gaat niet om wat je ziet, maar om wat in de code staat.</p>
</div>
</div>
</fieldset>

</div>

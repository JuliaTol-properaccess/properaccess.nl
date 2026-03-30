---
title: "Markup-validiteit"
section_number: 1
chapter_number: 9
locked: false
description: "Valide HTML voorkomt dat hulpsoftware je pagina verkeerd interpreteert."
points: 10
layout: "academy"
---

## Waarom valide HTML ertoe doet

HTML is de taal die hulpsoftware leest. Als die taal fouten bevat -- ontbrekende tags, dubbele ID's, verkeerd geneste elementen -- dan moet de browser gokken wat je bedoelt. Browsers zijn daar inmiddels goed in, maar hulpsoftware niet altijd.

WCAG succescriterium 4.1.1 (Parsing) stelde oorspronkelijk vier eisen aan HTML:

1. Elementen hebben volledige begin- en eindtags
2. Elementen zijn correct genest
3. Elementen bevatten geen dubbele attributen
4. ID's zijn uniek binnen de pagina

### SC 4.1.1 is afgeschaft -- maar de principes niet

In WCAG 2.2 is SC 4.1.1 **afgeschaft** (deprecated). De reden: moderne browsers parsen HTML inmiddels zo consistent dat de meeste fouten geen problemen meer veroorzaken. Een ontbrekende `</p>`-tag? De browser fixt dat automatisch.

Maar dat betekent niet dat valide HTML onbelangrijk is. De problemen die er **echt** toe doen -- dubbele ID's, verkeerde nesting van interactieve elementen -- vallen nu onder andere succescriteria zoals 1.3.1 en 4.1.2. De technische eis is weg, maar de impact op toegankelijkheid is gebleven.

<div class="academy-tip">
<p class="academy-tip__title">WCAG 2.1 vs. 2.2</p>

Als je auditeert tegen WCAG 2.1 (bijvoorbeeld voor het Wdo), dan is SC 4.1.1 nog van toepassing. Bij WCAG 2.2 is het afgeschaft, maar de fouten die het criterium beschreef zijn nog steeds relevant -- ze vallen alleen onder andere criteria.

</div>

## Dubbele ID's: het meest voorkomende probleem

Van alle validatiefouten zijn dubbele ID's het meest impactvol voor toegankelijkheid. Een ID moet uniek zijn binnen een pagina. Als twee elementen hetzelfde ID hebben, breekt er van alles:

- Een `<label for="email">` koppelt aan het **eerste** element met `id="email"` -- het tweede formulierveld krijgt geen label
- Een skiplink naar `#main-content` springt altijd naar het eerste element met dat ID
- `aria-labelledby` en `aria-describedby` verwijzen naar het verkeerde element
- JavaScript met `getElementById()` vindt alleen het eerste element

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: dubbele ID's in een formulier</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<label for="naam">Naam bezorgadres</label>
<input type="text" id="naam" />

<label for="naam">Naam factuuradres</label>
<input type="text" id="naam" />
```

Beide labels koppelen aan het eerste invoerveld. Het tweede veld heeft effectief geen label.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<label for="naam-bezorg">Naam bezorgadres</label>
<input type="text" id="naam-bezorg" />

<label for="naam-factuur">Naam factuuradres</label>
<input type="text" id="naam-factuur" />
```

Unieke ID's zorgen dat elk label aan het juiste veld gekoppeld is.

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">Waar komen dubbele ID's vandaan?</p>

In de praktijk ontstaan dubbele ID's vaak door hergebruikte componenten. Een "contactformulier"-component die twee keer op dezelfde pagina staat, levert dubbele ID's op als de ID's niet dynamisch worden gegenereerd. Check dit bij hergebruikte templates en componenten.

</div>

## Verkeerde nesting

HTML heeft regels voor welke elementen in welke andere elementen mogen staan. De belangrijkste regel voor toegankelijkheid: **plaats geen interactief element in een ander interactief element**.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: link in een knop</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<button>
  <a href="/producten">Bekijk producten</a>
</button>
```

Een `<a>` in een `<button>` is ongeldig. De browser moet kiezen welk interactief element voorrang krijgt. Het resultaat verschilt per browser en per schermlezer.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<a href="/producten">Bekijk producten</a>
```

Kies een element. Navigeert het ergens naartoe? Gebruik een link. Voert het een actie uit? Gebruik een knop.

</div>
</div>

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: blokelement in een inline element</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<span>
  <div>Dit is een alinea</div>
</span>
```

Een `<div>` (blokelement) hoort niet in een `<span>` (inline element). De browser sluit de `<span>` impliciet, wat leidt tot een onverwachte DOM-structuur.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<div>
  <p>Dit is een alinea</p>
</div>
```

Blokelementen bevatten andere blokelementen of inline elementen, niet andersom.

</div>
</div>

## Ontbrekende tags

Ontbrekende begin- of eindtags zijn meestal cosmetische fouten die browsers goed afhandelen. Maar soms leidt een ontbrekende tag tot een onverwachte DOM-structuur.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: ontbrekende eindtag</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<ul>
  <li>Item 1
  <li>Item 2
  <li>Item 3
</ul>
```

Werkt in de praktijk -- browsers sluiten de `<li>` impliciet. Maar het is slordig en kan verwarrend zijn bij complexere structuren.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Expliciete eindtags maken de structuur ondubbelzinnig.

</div>
</div>

## De W3C-validator

De <a href="https://validator.w3.org/" rel="noopener">W3C Markup Validation Service</a> controleert je HTML op fouten. Je kunt een URL invoeren, een bestand uploaden of HTML direct plakken.

Niet elke fout die de validator meldt is een toegankelijkheidsprobleem. Focus op deze categorieën:

| Fouttype | Impact op toegankelijkheid |
|----------|---------------------------|
| **Dubbele ID's** | Hoog -- breekt labels, skiplinks en ARIA-verwijzingen |
| **Interactieve elementen in interactieve elementen** | Hoog -- onvoorspelbaar gedrag in hulpsoftware |
| **Ontbrekende verplichte attributen** | Gemiddeld -- afhankelijk van het element |
| **Ontbrekende eindtags** | Laag -- browsers herstellen dit meestal correct |
| **Verouderde attributen** | Laag -- geen directe impact op toegankelijkheid |

<div class="academy-tip">
<p class="academy-tip__title">Pragmatisch valideren</p>

Je hoeft niet elke validatiefout op te lossen. Richt je op fouten die hulpsoftware in de war brengen: dubbele ID's, verkeerde nesting van interactieve elementen, en ontbrekende attributen die de naam of rol van een element bepalen. Een waarschuwing over een verouderd attribuut is geen toegankelijkheidsprobleem.

</div>

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **4.1.1** Parsing | A | Afgeschaft in WCAG 2.2, maar nog geldig in WCAG 2.1. Vereist volledige tags, correcte nesting, geen dubbele attributen en unieke ID's. |
| **1.3.1** Informatie en relaties | A | Dubbele ID's en verkeerde nesting kunnen ertoe leiden dat structuur niet correct wordt overgebracht |
| **4.1.2** Naam, Rol, Waarde | A | Een dubbel ID kan ertoe leiden dat een label of ARIA-verwijzing aan het verkeerde element koppelt |

---

## Quiz

<div class="academy-quiz" id="quiz-markup-validiteit">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Twee invoervelden op dezelfde pagina hebben allebei <code>id="email"</code>. Elk veld heeft een <code>&lt;label for="email"&gt;</code>. Wat gaat er mis?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Niets -- beide labels koppelen aan hun eigen veld</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Beide labels koppelen aan het eerste veld -- het tweede veld heeft effectief geen label</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>De pagina crasht</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Alleen schermlezers hebben een probleem; visueel is alles correct</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een <code>for</code>-attribuut koppelt aan het eerste element met dat ID. Het tweede veld krijgt geen programmatisch label, wat een overtreding is van SC 1.3.1.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Bij dubbele ID's koppelt het <code>for</code>-attribuut altijd aan het eerste element met dat ID. Het tweede invoerveld heeft daardoor geen programmatisch gekoppeld label.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Waarom is SC 4.1.1 (Parsing) afgeschaft in WCAG 2.2?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Valide HTML is niet meer belangrijk</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Moderne browsers parsen HTML zo consistent dat de meeste fouten geen problemen meer veroorzaken</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Alle websites zijn inmiddels valide</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Het criterium was te streng en werd nooit getest</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Browsers zijn zo goed geworden in het herstellen van HTML-fouten dat de meeste parsing-problemen geen impact meer hebben. De fouten die er wel toe doen vallen nu onder andere criteria (1.3.1 en 4.1.2).</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>SC 4.1.1 is afgeschaft omdat moderne browsers HTML-fouten consistent herstellen. De fouten die er nog toe doen -- zoals dubbele ID's en verkeerde nesting -- vallen onder andere criteria.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> In de code staat: <code>&lt;button&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/button&gt;</code>. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Een link in een knop is ongeldig -- interactieve elementen mogen niet in elkaar genest worden</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>De knop heeft geen type-attribuut</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>De link mist een title-attribuut</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Niets -- dit is een gangbare manier om een knop te linken</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Een <code>&lt;a&gt;</code> in een <code>&lt;button&gt;</code> is ongeldig HTML. De browser moet kiezen welk interactief element voorrang krijgt, en het resultaat verschilt per browser en schermlezer. Kies een van de twee.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Interactieve elementen mogen niet in elkaar genest worden. Een <code>&lt;a&gt;</code> in een <code>&lt;button&gt;</code> leidt tot onvoorspelbaar gedrag. Gebruik een link als het ergens naartoe navigeert, of een knop als het een actie uitvoert.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> De W3C-validator meldt 15 fouten op je pagina. Welke pak je als eerste aan vanuit toegankelijkheidsperspectief?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Verouderde attributen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Ontbrekende eindtags bij paragrafen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Dubbele ID's en interactieve elementen in interactieve elementen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Los ze allemaal op in de volgorde van de validator</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Dubbele ID's en verkeerde nesting van interactieve elementen hebben de meeste impact op hulpsoftware. Ontbrekende eindtags en verouderde attributen zijn veel minder urgent.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Focus op de fouten met de meeste impact: dubbele ID's breken labels en ARIA-verwijzingen, en geneste interactieve elementen leiden tot onvoorspelbaar gedrag. Verouderde attributen en ontbrekende eindtags zijn cosmetisch.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> Een hergebruikt formuliercomponent staat twee keer op dezelfde pagina. Welk probleem ontstaat er waarschijnlijk?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>De CSS wordt twee keer geladen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>Dubbele ID's -- labels en ARIA-verwijzingen koppelen aan de verkeerde velden</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>De pagina wordt trager</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>De formulieren verstoren elkaars JavaScript</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Hergebruikte componenten met vaste ID's leveren dubbele ID's op. Labels en ARIA-verwijzingen koppelen dan aan het eerste element met dat ID, niet aan het bedoelde element.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het grootste risico is dubbele ID's. Als beide componenten dezelfde ID's gebruiken, koppelen labels en ARIA-verwijzingen aan de verkeerde velden. Genereer unieke ID's per instantie van het component.</p>
</div>
</div>
</fieldset>

</div>

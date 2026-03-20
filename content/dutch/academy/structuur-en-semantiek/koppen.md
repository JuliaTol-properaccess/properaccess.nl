---
title: "Koppen"
section_number: 1
chapter_number: 4
locked: false
description: "Een logische koppenstructuur is het belangrijkste navigatiemiddel voor schermlezergebruikers."
points: 10
layout: "academy"
---

## Waarom koppen zo belangrijk zijn

Koppen zijn het belangrijkste navigatiemiddel voor schermlezergebruikers. Uit het WebAIM-onderzoek blijkt dat **67% van de schermlezergebruikers** koppen gebruikt als primaire manier om door een pagina te navigeren. Ze drukken op de H-toets om van kop naar kop te springen, net zoals een ziende gebruiker de pagina scant op vetgedrukte titels.

Als je koppen niet goed zijn opgebouwd -- of helemaal ontbreken -- dan is je pagina voor deze gebruikers een muur van tekst zonder structuur.

## Twee aparte eisen

WCAG stelt twee verschillende eisen aan koppen, en die worden vaak door elkaar gehaald:

1. **SC 1.3.1 (Informatie en relaties)** -- koppen moeten in de code als kop zijn gemarkeerd. Gebruik `<h1>` t/m `<h6>`, geen gestylede `<div>` of `<p>`.
2. **SC 2.4.6 (Koppen en labels)** -- koppen moeten het onderwerp van de content beschrijven. Een kop die "Sectie 3" zegt, is technisch correct gemarkeerd maar inhoudelijk nietszeggend.

Dit zijn twee aparte criteria. Je kunt aan het ene voldoen en het andere overtreden.

## De regels voor een goede koppenstructuur

### Gebruik echte kopelementen

Een schermlezer herkent alleen `<h1>` t/m `<h6>` als koppen. Een `<div class="heading">` of `<p><strong>Titel</strong></p>` ziet er visueel misschien uit als een kop, maar is onzichtbaar in de koppenlijst.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: kop die geen kop is</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<div class="section-title">Onze diensten</div>
```

Visueel een kop, maar de schermlezer zegt alleen "Onze diensten" -- zonder aan te geven dat het een kop is.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<h2>Onze diensten</h2>
```

De schermlezer zegt "kop niveau 2, Onze diensten". De gebruiker kan ernaartoe navigeren.

</div>
</div>

### Eén h1 per pagina

Elke pagina heeft precies een `<h1>`. Dat is de hoofdkop die het onderwerp van de pagina beschrijft. Alle andere koppen vallen daaronder.

### Sla geen niveaus over

Koppen vormen een hierarchie, vergelijkbaar met een inhoudsopgave. Spring niet van `<h1>` naar `<h3>` zonder een `<h2>` ertussen.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: koppenstructuur</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<h1>Webshop</h1>
  <h3>Dameskleding</h3>
  <h3>Herenkleding</h3>
    <h5>Broeken</h5>
```

Niveaus 2 en 4 worden overgeslagen. De hierarchie is onduidelijk.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<h1>Webshop</h1>
  <h2>Dameskleding</h2>
  <h2>Herenkleding</h2>
    <h3>Broeken</h3>
```

Elk niveau sluit logisch aan op het vorige.

</div>
</div>

### Gebruik koppen niet voor visueel effect

Soms wordt een `<h3>` gebruikt puur omdat de tekst kleiner moet zijn dan een `<h2>`. Dat is de verkeerde reden. Het kopniveau bepaalt de positie in de hierarchie, niet de tekstgrootte. Pas de styling aan met CSS.

<div class="academy-tip">
<p class="academy-tip__title">Tip: koppenstructuur controleren</p>

Installeer de browser-extensie HeadingsMap (beschikbaar voor Chrome en Firefox). Die toont in een oogopslag de volledige koppenstructuur van elke pagina, inclusief overgeslagen niveaus.

</div>

### Maak koppen beschrijvend

Een kop moet duidelijk maken waar de sectie over gaat. Vermijd vage koppen als "Meer informatie", "Sectie 2" of "Details".

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: beschrijvende koppen</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<h2>Meer informatie</h2>
<h2>Details</h2>
<h2>Overig</h2>
```

Uit deze koppen kun je niet opmaken waar de secties over gaan.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<h2>Levertijden en verzendkosten</h2>
<h2>Retourbeleid</h2>
<h2>Veelgestelde vragen</h2>
```

Elke kop beschrijft duidelijk het onderwerp van de sectie.

</div>
</div>

## Veelgemaakte fouten

- **Kop die geen kop is** -- visueel groot en vet, maar in de code een `<div>` of `<p>`
- **Niveaus overslaan** -- van `<h2>` naar `<h4>` springen
- **Meerdere h1's** -- twee of meer `<h1>`'s op dezelfde pagina
- **Kop voor styling** -- een `<h4>` gebruiken omdat het lettertype kleiner moet
- **Vage koppen** -- "Lees meer", "Klik hier", "Informatie"

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Informatie en relaties | A | Koppen moeten programmatisch bepaalbaar zijn (gebruik `<h1>`-`<h6>`) |
| **2.4.6** Koppen en labels | AA | Koppen moeten het onderwerp of doel van de content beschrijven |

## Verder lezen

- [SC 1.3.1: Kopniveaus](/blog/sc-1-3-1-kopniveaus/) -- wanneer een overgeslagen kopniveau een probleem is
- [Zo controleer je de koppenstructuur van je website](/blog/zo-controleer-je-de-koppenstructuur-van-je-website/) -- stap-voor-stap uitleg met tools

---

## Quiz

<div class="academy-quiz" id="quiz-koppen">

<div class="academy-quiz__question" data-question="1">
<p class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een pagina heeft de volgende koppen: <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h2&gt;</code>. Wat is het probleem?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Er mag maar een <code>&lt;h2&gt;</code> op een pagina staan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Niveau 3 wordt overgeslagen -- van <code>&lt;h2&gt;</code> naar <code>&lt;h4&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Er is geen probleem</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>De <code>&lt;h4&gt;</code> moet voor de tweede <code>&lt;h2&gt;</code> staan</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. De sprong van <code>&lt;h2&gt;</code> naar <code>&lt;h4&gt;</code> slaat niveau 3 over. De hierarchie is daardoor onduidelijk. Meerdere <code>&lt;h2&gt;</code>'s op een pagina is prima -- dat zijn secties op hetzelfde niveau.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het probleem is het overgeslagen kopniveau: van <code>&lt;h2&gt;</code> naar <code>&lt;h4&gt;</code> zonder een <code>&lt;h3&gt;</code> ertussen. Meerdere <code>&lt;h2&gt;</code>'s mag -- die staan op hetzelfde niveau in de hierarchie.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="2">
<p class="academy-quiz__q-text"><strong>Vraag 2.</strong> Waarom is <code>&lt;p class="heading"&gt;Over ons&lt;/p&gt;</code> een probleem?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>De class-naam "heading" is verkeerd</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Een schermlezer herkent dit niet als kop en de gebruiker kan er niet naartoe navigeren</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Er is geen probleem zolang het er visueel uitziet als een kop</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Het probleem is dat <code>&lt;p&gt;</code> geen block-element is</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een <code>&lt;p&gt;</code> is een alinea, geen kop. Ongeacht de CSS-styling herkent een schermlezer dit niet als kop. De gebruiker kan er niet naartoe springen met de H-toets.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een schermlezer leest geen CSS. Een <code>&lt;p&gt;</code> met de class "heading" is in de code gewoon een alinea. Gebruik een <code>&lt;h2&gt;</code> (of het juiste niveau) zodat de schermlezer het als kop herkent.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="3">
<p class="academy-quiz__q-text"><strong>Vraag 3.</strong> Hoeveel <code>&lt;h1&gt;</code>-elementen mag een pagina bevatten?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Zoveel als je wilt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Precies een</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Maximaal drie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Geen -- de <code>&lt;title&gt;</code> vervangt de <code>&lt;h1&gt;</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Elke pagina heeft precies een <code>&lt;h1&gt;</code> die het hoofdonderwerp beschrijft. Alle andere koppen zijn subkoppen die daaronder vallen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De best practice is precies een <code>&lt;h1&gt;</code> per pagina. Die beschrijft het hoofdonderwerp. Meerdere <code>&lt;h1&gt;</code>'s maken de hierarchie onduidelijk.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="4">
<p class="academy-quiz__q-text"><strong>Vraag 4.</strong> Een developer gebruikt een <code>&lt;h4&gt;</code> omdat de tekst kleiner moet zijn dan de <code>&lt;h2&gt;</code> erboven. Wat is het juiste advies?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Prima -- een <code>&lt;h4&gt;</code> is kleiner dan een <code>&lt;h2&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Gebruik een <code>&lt;h3&gt;</code> en pas de tekstgrootte aan met CSS</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Gebruik een <code>&lt;span&gt;</code> in plaats van een kop</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Gebruik <code>font-size: small</code> op de <code>&lt;h2&gt;</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Het kopniveau bepaalt de positie in de hierarchie, niet de tekstgrootte. Onder een <code>&lt;h2&gt;</code> hoort een <code>&lt;h3&gt;</code>. De visuele grootte regel je met CSS.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Kopniveaus gaan over hierarchie, niet over grootte. Na een <code>&lt;h2&gt;</code> hoort een <code>&lt;h3&gt;</code> te komen. Wil je de tekst kleiner? Pas de CSS aan. Gebruik nooit een verkeerd kopniveau voor visueel effect.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="5">
<p class="academy-quiz__q-text"><strong>Vraag 5.</strong> Welk WCAG-criterium gaat over de <em>inhoud</em> van koppen (beschrijvend zijn)?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>SC 1.3.1 -- Informatie en relaties</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>SC 2.4.6 -- Koppen en labels</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>SC 2.4.2 -- Paginatitel</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>SC 4.1.2 -- Naam, Rol, Waarde</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. SC 2.4.6 vereist dat koppen het onderwerp of doel van de content beschrijven. SC 1.3.1 gaat over de juiste markup (dat een kop ook echt als kop is gecodeerd). Twee aparte eisen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>SC 2.4.6 (Koppen en labels) gaat over de inhoud: koppen moeten beschrijvend zijn. SC 1.3.1 gaat over de markup: koppen moeten als <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> zijn gecodeerd. Het zijn twee aparte criteria.</p>
</div>
</div>
</div>

</div>

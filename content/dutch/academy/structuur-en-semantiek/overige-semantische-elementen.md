---
title: "Overige semantische elementen"
section_number: 1
chapter_number: 10
locked: false
description: "HTML biedt elementen voor citaten, afkortingen, tijdstippen en meer. Gebruik ze waar ze van toepassing zijn."
points: 10
layout: "academy"
---

## Meer dan koppen en lijsten

HTML biedt tientallen semantische elementen die verder gaan dan koppen, lijsten en landmarks. Elementen voor citaten, afkortingen, tijdstippen, nadruk en meer. Ze voegen **betekenis** toe die CSS niet kan geven.

WCAG succescriterium 1.3.1 (Informatie en relaties) vereist dat informatie die visueel wordt overgebracht ook programmatisch bepaalbaar is. Als je tekst visueel markeert als citaat, afkorting of nadruk, dan moet die betekenis ook in de code zitten.

In dit hoofdstuk behandelen we de semantische elementen die je in de vorige hoofdstukken nog niet bent tegengekomen.

## Citaten: blockquote en q

Gebruik `<blockquote>` voor blok-citaten en `<q>` voor inline citaten. Het `cite`-attribuut kan de bron vermelden.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: een citaat</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<p class="quote">
  "Het web is fundamenteel ontworpen om voor iedereen te werken."
</p>
<p class="quote-author">— Tim Berners-Lee</p>
```

Visueel een citaat, maar voor hulpsoftware zijn het gewone alinea's.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<blockquote cite="https://www.w3.org/Press/IPO-announce">
  <p>Het web is fundamenteel ontworpen om voor iedereen te werken.</p>
</blockquote>
<p>— Tim Berners-Lee</p>
```

Een schermlezer herkent het als citaat. Het `cite`-attribuut is niet zichtbaar maar geeft de bron aan.

</div>
</div>

Voor korte citaten binnen een lopende tekst gebruik je `<q>`:

```html
<p>Tim Berners-Lee zei: <q>Het web is fundamenteel ontworpen om
voor iedereen te werken.</q></p>
```

De browser voegt automatisch aanhalingstekens toe in de juiste taal.

## Afkortingen: abbr

Het `<abbr>`-element markeert een afkorting. Met het `title`-attribuut geef je de volledige schrijfwijze.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: afkorting</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<p>De website voldoet aan WCAG 2.2 niveau AA.</p>
```

Niet iedereen weet wat WCAG betekent. Er is geen programmatische uitleg beschikbaar.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<p>De website voldoet aan
<abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
2.2 niveau AA.</p>
```

Bij hover of focus verschijnt de volledige naam. Schermlezers kunnen de uitgeschreven versie voorlezen (afhankelijk van instellingen).

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">Eerste keer voluit</p>

Een goed alternatief voor `<abbr>` is de afkorting de eerste keer voluit schrijven: "Web Content Accessibility Guidelines (WCAG)". Daarna kun je de afkorting zonder uitleg gebruiken. In combinatie met `<abbr>` bied je maximale duidelijkheid.

</div>

## Tijd: time

Het `<time>`-element markeert datums en tijdstippen. Het `datetime`-attribuut bevat de machine-leesbare versie.

```html
<p>Gepubliceerd op <time datetime="2026-03-20">20 maart 2026</time>.</p>

<p>De workshop begint om <time datetime="14:00">14:00 uur</time>.</p>

<p>De audit duurt <time datetime="P5D">vijf werkdagen</time>.</p>
```

Dit helpt zoekmachines en hulpsoftware om datums en tijden correct te interpreteren, ongeacht hoe je ze visueel weergeeft.

## Nadruk: em en strong

`<em>` geeft **nadruk** (emphasis) aan -- het verandert de betekenis van een zin. `<strong>` markeert **belang** (importance). Beide zijn semantisch, in tegenstelling tot CSS-styling.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: nadruk vs. styling</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<p>Je moet <span style="font-weight: bold;">altijd</span> een
alt-tekst toevoegen.</p>
```

Visueel vet, maar hulpsoftware weet niet dat "altijd" benadrukt is.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<p>Je moet <strong>altijd</strong> een alt-tekst toevoegen.</p>
```

Een schermlezer kan de nadruk overbrengen (afhankelijk van de instellingen).

</div>
</div>

Het verschil tussen `<em>` en `<strong>`:

| Element | Betekenis | Voorbeeld |
|---------|-----------|-----------|
| `<em>` | Klemtoon -- verandert hoe je de zin leest | "Ik zei dat *jij* het moest doen" (niet iemand anders) |
| `<strong>` | Belang -- dit is belangrijk | "**Let op:** dit veld is verplicht" |

## Markering: mark

Het `<mark>`-element markeert tekst die **relevant** is in de huidige context, zoals zoekresultaten of gemarkeerde passages.

```html
<p>Je zoekopdracht <mark>toegankelijkheid</mark> leverde
12 resultaten op.</p>
```

Schermlezers melden standaard niet dat tekst gemarkeerd is. Voeg eventueel een visueel verborgen tekst toe als de markering betekenisvol is:

```html
<p>Je zoekopdracht
<mark><span class="sr-only">gemarkeerd: </span>toegankelijkheid</mark>
leverde 12 resultaten op.</p>
```

## Wijzigingen: del en ins

`<del>` markeert verwijderde tekst, `<ins>` markeert toegevoegde tekst. Gebruik het `datetime`-attribuut om aan te geven wanneer de wijziging plaatsvond.

```html
<p>De prijs is <del datetime="2026-03-01">€ 49</del>
<ins datetime="2026-03-15">€ 39</ins> per maand.</p>
```

<div class="academy-tip">
<p class="academy-tip__title">Doorgestreepte prijzen</p>

Schermlezers geven `<del>` en `<ins>` niet altijd door. Bij doorgestreepte prijzen in een webshop is het verstandig om de context ook in tekst te verduidelijken, bijvoorbeeld: "Oude prijs: 49 euro. Nieuwe prijs: 39 euro." Of gebruik `aria-label` op een omvattend element.

</div>

## Technische content: code, pre en kbd

| Element | Gebruik |
|---------|---------|
| `<code>` | Inline codefragmenten |
| `<pre>` | Voorgeformatteerde tekst (witruimte behouden) |
| `<kbd>` | Toetsenbordinvoer |

```html
<p>Gebruik <code>alt=""</code> voor decoratieve afbeeldingen.</p>

<p>Druk op <kbd>Tab</kbd> om naar het volgende element te gaan.</p>

<pre><code>&lt;img src="foto.jpg" alt="Beschrijving van de foto" /&gt;</code></pre>
```

## Afbeeldingen met bijschrift: figure en figcaption

`<figure>` groepeert een afbeelding (of ander zelfstandig element) met een bijschrift. `<figcaption>` bevat het bijschrift.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: afbeelding met bijschrift</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<img src="grafiek.png" alt="Grafiek met resultaten" />
<p class="caption">Figuur 1: Auditresultaten per kwartaal</p>
```

De afbeelding en het bijschrift zijn niet programmatisch gekoppeld. Een schermlezer weet niet dat de tekst bij de afbeelding hoort.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<figure>
  <img src="grafiek.png" alt="Staafgrafiek met auditresultaten.
    Q1: 12 audits, Q2: 18 audits, Q3: 15 audits, Q4: 22 audits." />
  <figcaption>Figuur 1: Auditresultaten per kwartaal</figcaption>
</figure>
```

De `<figure>` groepeert de afbeelding en het bijschrift. De alt-tekst beschrijft de data; het bijschrift geeft context.

</div>
</div>

## Uitklapbare content: details en summary

Het `<details>`-element maakt content uitklapbaar zonder JavaScript. `<summary>` is de zichtbare kop.

```html
<details>
  <summary>Wat kost een toegankelijkheidsaudit?</summary>
  <p>De kosten hangen af van de complexiteit van de website.
  Een gemiddelde audit kost vanaf ca. 1.800 euro.</p>
</details>
```

Dit element is standaard toegankelijk: het is focusbaar, activeerbaar met Enter en spatie, en de status (open/dicht) wordt doorgegeven aan hulpsoftware.

<div class="academy-tip">
<p class="academy-tip__title">details vs. custom accordions</p>

Een `<details>`/`<summary>`-element is standaard toegankelijk. Een custom accordion met divs en JavaScript moet je zelf toegankelijk maken met `role`, `aria-expanded`, toetsenbordafhandeling en focusbeheer. Gebruik `<details>` als het kan.

</div>

## Adres: address

Het `<address>`-element markeert contactinformatie voor de auteur of eigenaar van het document (of een `<article>`).

```html
<address>
  <p>Proper Access</p>
  <p>Telefoon: <a href="tel:+31855055890">085 5055 890</a></p>
  <p>E-mail: <a href="mailto:info@properaccess.nl">info@properaccess.nl</a></p>
</address>
```

Gebruik `<address>` niet voor willekeurige adressen in de content -- alleen voor contactinformatie van de auteur of organisatie.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Informatie en relaties | A | Alle visuele structuur en betekenis moet programmatisch bepaalbaar zijn |
| **1.3.2** Betekenisvolle volgorde | A | De volgorde van content (bijv. figure met figcaption) moet logisch zijn |

---

## Quiz

<div class="academy-quiz" id="quiz-overige-semantische-elementen">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een webshop toont een doorgestreepte prijs en een nieuwe prijs. De code is: <code>&lt;span class="old-price"&gt;€ 49&lt;/span&gt; &lt;span class="new-price"&gt;€ 39&lt;/span&gt;</code>. Wat ontbreekt er?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Niets -- de CSS maakt de doorstreping zichtbaar</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Semantische elementen (<code>&lt;del&gt;</code> en <code>&lt;ins&gt;</code>) die de betekenis overbrengen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Een <code>&lt;strong&gt;</code> om de nieuwe prijs</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Een <code>&lt;figure&gt;</code> om beide prijzen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. CSS-doorstreping is alleen visueel. Met <code>&lt;del&gt;</code> en <code>&lt;ins&gt;</code> maak je de betekenis ook programmatisch bepaalbaar.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De doorstreping via CSS is puur visueel. Hulpsoftware weet niet dat de ene prijs vervallen is en de andere nieuw. Gebruik <code>&lt;del&gt;</code> voor de oude prijs en <code>&lt;ins&gt;</code> voor de nieuwe.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Wat is het verschil tussen <code>&lt;em&gt;</code> en <code>&lt;strong&gt;</code>?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span><code>&lt;em&gt;</code> maakt tekst cursief, <code>&lt;strong&gt;</code> maakt tekst vet -- verder geen verschil</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span><code>&lt;em&gt;</code> geeft klemtoon (verandert de betekenis), <code>&lt;strong&gt;</code> markeert belang</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span><code>&lt;em&gt;</code> is voor titels, <code>&lt;strong&gt;</code> is voor waarschuwingen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Er is geen verschil -- ze zijn uitwisselbaar</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. <code>&lt;em&gt;</code> legt klemtoon ("ik zei dat <em>jij</em> het moest doen") en <code>&lt;strong&gt;</code> markeert iets als belangrijk. Het visuele verschil (cursief vs. vet) is een bijeffect, niet het doel.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p><code>&lt;em&gt;</code> geeft klemtoon -- het verandert hoe je de zin leest. <code>&lt;strong&gt;</code> markeert belang -- dit is belangrijk. Beide zijn semantisch, niet alleen visueel.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Een afbeelding heeft een bijschrift eronder. In de code staan ze als losse elementen: een <code>&lt;img&gt;</code> en een <code>&lt;p&gt;</code>. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>De afbeelding en het bijschrift zijn niet programmatisch gekoppeld</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>De afbeelding heeft geen alt-tekst</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Niets -- visuele nabijheid is voldoende</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Het bijschrift moet in een <code>&lt;label&gt;</code> staan</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Zonder <code>&lt;figure&gt;</code> en <code>&lt;figcaption&gt;</code> weet hulpsoftware niet dat het bijschrift bij de afbeelding hoort. Visuele nabijheid is niet hetzelfde als een programmatische relatie.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De afbeelding en het bijschrift moeten programmatisch gekoppeld zijn. Gebruik <code>&lt;figure&gt;</code> om ze te groeperen en <code>&lt;figcaption&gt;</code> voor het bijschrift. Dan begrijpt hulpsoftware de relatie.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Waarom heeft <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> een voordeel boven een custom accordion met divs en JavaScript?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Het ziet er mooier uit</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Het is standaard toegankelijk: focusbaar, activeerbaar en de status wordt doorgegeven aan hulpsoftware</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Het laadt sneller</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Het werkt in alle browsers</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. <code>&lt;details&gt;</code> en <code>&lt;summary&gt;</code> zijn standaard focusbaar, activeerbaar met Enter en spatie, en de open/dicht-status wordt automatisch doorgegeven. Een custom accordion moet je dat allemaal zelf bouwen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het grootste voordeel is ingebouwde toegankelijkheid. <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> is standaard focusbaar, activeerbaar en geeft de open/dicht-status door. Een custom accordion vereist handmatig <code>role</code>, <code>aria-expanded</code>, toetsenbordafhandeling en focusbeheer.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> De afkorting "EAA" staat op meerdere plekken op een pagina. Hoe maak je de betekenis duidelijk?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>Schrijf overal de volledige naam uit</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>Schrijf de afkorting de eerste keer voluit en gebruik <code>&lt;abbr title="European Accessibility Act"&gt;EAA&lt;/abbr&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>Zet de betekenis in een voetnoot onderaan de pagina</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Voeg een woordenlijst toe als bijlage</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. De eerste keer voluit schrijven geeft context, en het <code>&lt;abbr&gt;</code>-element met <code>title</code> maakt de betekenis ook programmatisch beschikbaar bij volgende vermeldingen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De beste aanpak: schrijf de afkorting de eerste keer voluit -- "European Accessibility Act (EAA)" -- en gebruik daarna <code>&lt;abbr title="European Accessibility Act"&gt;EAA&lt;/abbr&gt;</code>. Dat geeft zowel visuele als programmatische duidelijkheid.</p>
</div>
</div>
</fieldset>

</div>

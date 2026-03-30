---
title: "Lijsten"
section_number: 1
chapter_number: 6
locked: false
description: "Lijsten geven structuur aan opsommingen. Een schermlezer vertelt hoeveel items er zijn en laat de gebruiker de lijst overslaan."
points: 10
layout: "academy"
---

## Waarom lijsten belangrijk zijn

Wanneer je drie productvoordelen, een reeks stappen of een navigatiemenu hebt, is dat een lijst. Visueel herken je dat aan bullets, nummers of een verticale reeks links. Maar een schermlezer kan dat alleen herkennen als de HTML een lijstelement gebruikt.

Een schermlezer zegt bij een `<ul>` met vijf items: "lijst met 5 items". De gebruiker weet meteen hoeveel items er zijn en kan de hele lijst in een keer overslaan. Bij losse `<div>`'s of `<p>`'s met streepjes krijgt de gebruiker die informatie niet. Elk item wordt als losse tekst voorgelezen, zonder context.

## Drie soorten lijsten

HTML kent drie lijstelementen, elk met een eigen doel:

### Ongeordende lijst (`<ul>`)

Voor opsommingen waarbij de volgorde er niet toe doet.

```html
<ul>
  <li>Audit op maat</li>
  <li>Heldere rapportage</li>
  <li>Persoonlijke nabespreking</li>
</ul>
```

Een schermlezer zegt: "lijst met 3 items", gevolgd door "bullet, Audit op maat", enzovoort.

### Geordende lijst (`<ol>`)

Voor reeksen waarbij de volgorde wel uitmaakt: stappen, ranglijsten, instructies.

```html
<ol>
  <li>Vul het aanvraagformulier in</li>
  <li>Ontvang een offerte binnen 2 werkdagen</li>
  <li>Wij starten de audit na akkoord</li>
</ol>
```

Een schermlezer zegt: "lijst met 3 items", gevolgd door "1, Vul het aanvraagformulier in", enzovoort.

### Beschrijvingslijst (`<dl>`)

Voor termen met bijbehorende beschrijvingen: glossaria, metadata, specificaties.

```html
<dl>
  <dt>WCAG</dt>
  <dd>Web Content Accessibility Guidelines — de internationale richtlijnen voor webtoegankelijkheid.</dd>

  <dt>Schermlezer</dt>
  <dd>Software die de inhoud van het scherm voorleest, zoals NVDA, JAWS of VoiceOver.</dd>
</dl>
```

Een schermlezer zegt bij `<dt>`: "term, WCAG", en bij `<dd>`: "beschrijving, Web Content Accessibility Guidelines...".

## Lijsten fout: divs met streepjes

Dit is een van de meest voorkomende fouten bij SC 1.3.1. De content ziet er visueel uit als een lijst, maar de HTML zegt iets anders.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: opsomming</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<div>- Gratis parkeren</div>
<div>- Rolstoeltoegankelijk</div>
<div>- Blindengeleidehonden welkom</div>
```

Drie losse `<div>`'s. Een schermlezer leest ze als gewone tekst, inclusief de streepjes. Geen lijstinformatie, geen mogelijkheid om over te slaan.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<ul>
  <li>Gratis parkeren</li>
  <li>Rolstoeltoegankelijk</li>
  <li>Blindengeleidehonden welkom</li>
</ul>
```

Een schermlezer zegt: "lijst met 3 items" en de gebruiker kan de lijst overslaan.

</div>
</div>

## Navigatie als lijst

Een navigatiemenu is een lijst met links. Het is een veelgebruikt en goed ondersteund patroon om menulinks in een `<ul>` te plaatsen binnen een `<nav>`:

```html
<nav aria-label="Hoofdnavigatie">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/diensten">Diensten</a></li>
    <li><a href="/over-ons">Over ons</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

De schermlezer vertelt de gebruiker dat er een navigatie is met een lijst van 4 links. Dat geeft context: de gebruiker weet hoe groot het menu is en kan het in zijn geheel overslaan.

## Geneste lijsten

Lijsten kunnen genest worden. Dat is nuttig voor submenu's of gecategoriseerde opsommingen. De geneste lijst staat altijd **binnen** een `<li>`:

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: geneste lijst</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<ul>
  <li>Fruit</li>
  <ul>
    <li>Appel</li>
    <li>Peer</li>
  </ul>
  <li>Groente</li>
</ul>
```

De geneste `<ul>` staat direct in de buitenste `<ul>` -- dat is ongeldige HTML. Een `<ul>` mag alleen `<li>`-elementen als directe kinderen hebben.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<ul>
  <li>Fruit
    <ul>
      <li>Appel</li>
      <li>Peer</li>
    </ul>
  </li>
  <li>Groente</li>
</ul>
```

De geneste `<ul>` zit binnen de `<li>` van "Fruit". Dat is valide HTML en wordt correct voorgelezen.

</div>
</div>

## CSS en lijstsemantiek

Een veelvoorkomende CSS-regel is `list-style: none` om bullets te verwijderen. In de meeste browsers heeft dat geen gevolgen voor de semantiek. Maar in Safari met VoiceOver wordt een `<ul>` met `list-style: none` niet meer als lijst herkend.

De oplossing is eenvoudig: voeg `role="list"` toe aan de `<ul>`:

```html
<ul role="list" style="list-style: none;">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

<div class="academy-tip">
<p class="academy-tip__title">Wanneer role="list" toevoegen?</p>

Alleen als je `list-style: none` gebruikt en het belangrijk is dat de lijst als lijst wordt herkend. Bij een navigatiemenu (dat al in een `<nav>` zit) is het minder kritisch. Bij een opsomming in de content wel.

</div>

## Wanneer geen lijst gebruiken

Niet alles wat onder elkaar staat, is een lijst:

- **Een enkel item** -- een `<ul>` met een `<li>` is zinloos. Gebruik een `<p>` of een ander passend element.
- **Layout** -- items die visueel naast elkaar staan maar inhoudelijk niet gerelateerd zijn, vormen geen lijst.
- **Alinea's** -- als elke "item" een volledige alinea is met eigen context, zijn het alinea's, geen lijstitems.

<div class="academy-tip">
<p class="academy-tip__title">De vuistregel</p>

Als je de items kunt samenvatten als "X dingen van hetzelfde type", is het een lijst. Als je "een lijst met 1 item" zou zeggen, is het waarschijnlijk geen lijst.

</div>

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Informatie en relaties | A | Lijsten moeten programmatisch bepaalbaar zijn met het juiste HTML-element |
| **4.1.1** Parsen (WCAG 2.1) | A | Geneste lijsten moeten valide HTML zijn |

## Verder lezen

- [Veelgemaakte fouten bij SC 1.3.1](/blog/veelgemaakte-fouten-sc-1-3-1-informatie-en-relaties/) -- lijsten die niet zijn wat ze lijken

---

## Quiz

<div class="academy-quiz" id="quiz-lijsten">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een pagina toont vier voordelen als <code>&lt;p&gt;</code>-elementen met een unicode-bullet ervoor. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Niets -- de bullets maken visueel duidelijk dat het een lijst is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>De items moeten in een <code>&lt;ol&gt;</code> staan omdat er vier zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Een schermlezer herkent dit niet als lijst -- de gebruiker krijgt geen telling en kan de groep niet overslaan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>De unicode-bullets worden niet correct voorgelezen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Zonder <code>&lt;ul&gt;</code> en <code>&lt;li&gt;</code> weet een schermlezer niet dat deze items bij elkaar horen. De gebruiker mist de context en kan de opsomming niet als geheel overslaan.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een schermlezer herkent losse <code>&lt;p&gt;</code>-elementen niet als lijst. Gebruik <code>&lt;ul&gt;</code> met <code>&lt;li&gt;</code>-elementen zodat de schermlezer zegt "lijst met 4 items" en de gebruiker de lijst kan overslaan.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Wanneer gebruik je een <code>&lt;ol&gt;</code> in plaats van een <code>&lt;ul&gt;</code>?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Als de lijst meer dan 5 items heeft</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Als de volgorde van de items ertoe doet</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Als je nummers wilt tonen in plaats van bullets</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Altijd -- <code>&lt;ol&gt;</code> is de standaard</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Een <code>&lt;ol&gt;</code> gebruik je wanneer de volgorde inhoudelijk relevant is: stappen in een proces, een ranglijst, een recept. Het uiterlijk (nummers vs. bullets) bepaal je met CSS, niet met het element.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De keuze tussen <code>&lt;ol&gt;</code> en <code>&lt;ul&gt;</code> hangt af van de betekenis: is de volgorde relevant? Dan <code>&lt;ol&gt;</code>. Zo niet? Dan <code>&lt;ul&gt;</code>. Het visuele verschil regel je met CSS.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> In Safari met VoiceOver wordt een <code>&lt;ul&gt;</code> met <code>list-style: none</code> niet als lijst herkend. Wat is de oplossing?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Gebruik <code>list-style: disc</code> en verberg de bullets met <code>color: transparent</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Voeg <code>role="list"</code> toe aan de <code>&lt;ul&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Gebruik <code>&lt;div&gt;</code>-elementen in plaats van <code>&lt;li&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Dit is een Safari-bug die je niet hoeft op te lossen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. <code>role="list"</code> herstelt de lijstsemantiek die Safari/VoiceOver verwijdert bij <code>list-style: none</code>. Het is een bekende eigenaardigheid van WebKit.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De oplossing is <code>role="list"</code> op de <code>&lt;ul&gt;</code>. Dat vertelt Safari/VoiceOver expliciet dat het een lijst is, ongeacht de CSS.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Waar moet een geneste <code>&lt;ul&gt;</code> in de HTML staan?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Direct in de buitenste <code>&lt;ul&gt;</code>, na een <code>&lt;li&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Binnen een <code>&lt;li&gt;</code> van de buitenste lijst</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>In een aparte <code>&lt;div&gt;</code> binnen de buitenste <code>&lt;ul&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Het maakt niet uit -- browsers corrigeren het automatisch</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een geneste lijst hoort altijd binnen een <code>&lt;li&gt;</code> van de bovenliggende lijst. Een <code>&lt;ul&gt;</code> mag alleen <code>&lt;li&gt;</code>-elementen als directe kinderen hebben.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een geneste <code>&lt;ul&gt;</code> moet binnen een <code>&lt;li&gt;</code> staan. Dat is de enige valide plek. Browsers kunnen het soms corrigeren, maar je mag daar niet op vertrouwen.</p>
</div>
</div>
</fieldset>

</div>

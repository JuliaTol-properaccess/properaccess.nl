---
title: "Tabellen"
section_number: 1
chapter_number: 7
locked: false
description: "Tabellen structureren data in rijen en kolommen. Gebruik ze alleen voor data, nooit voor layout."
points: 10
layout: "academy"
---

## Wanneer is een tabel een tabel?

Een tabel is bedoeld voor **data die in rijen en kolommen** thuishoort. Denk aan een prijslijst, een rooster, vergelijkende specificaties of zoekresultaten. De relatie tussen rij en kolom is de informatie: "dit product kost dit bedrag" of "deze medewerker werkt op die dag".

Gebruik een tabel **niet** voor layout. In de jaren negentig werden tabellen gebruikt om kolommen en witruimte te creeren. Dat patroon is achterhaald, maar komt nog steeds voor -- vooral in e-mail templates en oudere websites. Een layout-tabel geeft een schermlezer verkeerde informatie: die leest "tabel met 3 rijen en 2 kolommen" terwijl er geen data-relatie is.

## Hoe een schermlezer een tabel leest

Wanneer een schermlezer een goed gestructureerde tabel tegenkomt, gebeurt het volgende:

1. De schermlezer kondigt de tabel aan: "tabel met 4 rijen en 3 kolommen"
2. Als er een `<caption>` is, wordt de titel voorgelezen
3. Bij navigatie door cellen leest de schermlezer de bijbehorende kolomkop mee: "Kolom: Prijs. 2.695 euro"

Dat werkt alleen als de tabel correct is opgebouwd met `<th>`, `<td>`, en `scope`.

## De basisstructuur

Een toegankelijke tabel heeft deze onderdelen:

```html
<table>
  <caption>Auditpakketten en prijzen</caption>
  <thead>
    <tr>
      <th scope="col">Pakket</th>
      <th scope="col">Prijs</th>
      <th scope="col">Doorlooptijd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Quickscan</th>
      <td>&euro; 19</td>
      <td>1 werkdag</td>
    </tr>
    <tr>
      <th scope="row">Standaard audit</th>
      <td>&euro; 2.695</td>
      <td>3 weken</td>
    </tr>
  </tbody>
</table>
```

| Onderdeel | Doel |
|---|---|
| `<caption>` | Titel van de tabel -- beschrijft waar de tabel over gaat |
| `<thead>` | Groepeert de koprij(en) |
| `<tbody>` | Groepeert de datarijen |
| `<th scope="col">` | Kolomkop -- geldt voor alle cellen in die kolom |
| `<th scope="row">` | Rijkop -- geldt voor alle cellen in die rij |
| `<td>` | Datacel |

## scope: de sleutel tot toegankelijke tabellen

Het `scope`-attribuut vertelt de schermlezer welke cellen bij welke kop horen. Zonder `scope` moet de schermlezer raden -- en dat gaat bij complexere tabellen mis.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: tabelkoppen</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<table>
  <tr>
    <td><strong>Naam</strong></td>
    <td><strong>Functie</strong></td>
  </tr>
  <tr>
    <td>Fatima</td>
    <td>Developer</td>
  </tr>
</table>
```

De koppen zijn visueel vetgedrukt met `<strong>`, maar niet gemarkeerd als `<th>`. Een schermlezer leest "Fatima" zonder te melden dat het in de kolom "Naam" staat.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<table>
  <caption>Teamleden</caption>
  <thead>
    <tr>
      <th scope="col">Naam</th>
      <th scope="col">Functie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fatima</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>
```

Een schermlezer zegt bij "Developer": "Kolom: Functie. Developer." De relatie is duidelijk.

</div>
</div>

## Caption: de titel van je tabel

Het `<caption>`-element beschrijft waar de tabel over gaat. Het wordt voorgelezen zodra de schermlezer de tabel aankondigt. Zo weet de gebruiker meteen of de tabel relevant is, voordat die door alle cellen navigeert.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: caption</div>
<div class="academy-example__bad">
<p class="academy-example__label">Niet ideaal</p>

```html
<h2>Openingstijden</h2>
<table>
  <thead>
    ...
  </thead>
</table>
```

De kop staat buiten de tabel. Een schermlezer die direct naar de tabel navigeert (via de tabellenlijst), mist de context.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<table>
  <caption>Openingstijden</caption>
  <thead>
    ...
  </thead>
</table>
```

De caption is onderdeel van de tabel en wordt altijd voorgelezen wanneer de tabel focus krijgt.

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">Caption vs. heading</p>

Een `<caption>` is geen vervanging voor een kop in de pagina. Als je tabel een eigen sectie op de pagina inleidt, kun je zowel een kop (`<h2>`, `<h3>`) als een `<caption>` gebruiken. De kop is voor de paginastructuur, de caption is voor de tabelcontext.

</div>

## Complexe tabellen

Soms heeft een tabel koppen op meerdere niveaus, samengevoegde cellen of kruisende koppen. In dat geval is `scope` niet genoeg en gebruik je het `headers`-attribuut:

```html
<table>
  <caption>Beschikbaarheid per locatie</caption>
  <thead>
    <tr>
      <td></td>
      <th id="amsterdam" scope="col">Amsterdam</th>
      <th id="rotterdam" scope="col">Rotterdam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="maandag" scope="row">Maandag</th>
      <td headers="amsterdam maandag">09:00 - 17:00</td>
      <td headers="rotterdam maandag">10:00 - 16:00</td>
    </tr>
  </tbody>
</table>
```

Elke `<td>` verwijst met `headers` naar de `id`'s van de bijbehorende koppen. Zo weet de schermlezer exact welke koppen bij welke cel horen -- ook bij complexe structuren.

<div class="academy-tip">
<p class="academy-tip__title">Vermijd complexe tabellen</p>

Hoe complexer de tabel, hoe moeilijker het wordt voor alle gebruikers. Overweeg of je een complexe tabel kunt opsplitsen in meerdere eenvoudige tabellen. Dat is bijna altijd beter leesbaar en toegankelijker.

</div>

## Layout-tabellen

Als je onverhoopt een tabel voor layout moet gebruiken (bijvoorbeeld in een HTML-e-mail), voeg dan `role="presentation"` toe. Dat vertelt de schermlezer dat het geen datatable is:

```html
<table role="presentation">
  <tr>
    <td>Linkerkolom</td>
    <td>Rechterkolom</td>
  </tr>
</table>
```

De schermlezer negeert de tabelstructuur en leest alleen de inhoud. Gebruik geen `<th>`, `<caption>` of `scope` in een layout-tabel -- dat zou tegenstrijdig zijn.

## Tabel, lijst of beschrijvingslijst?

Niet alle gestructureerde data hoort in een tabel. De keuze hangt af van de relatie:

| Structuur | Wanneer gebruiken |
|---|---|
| **Tabel** | Data met rij-kolom-relaties (meerdere attributen per item) |
| **Lijst** (`<ul>`, `<ol>`) | Opsomming van gerelateerde items zonder extra kolommen |
| **Beschrijvingslijst** (`<dl>`) | Sleutel-waarde-paren (term + definitie) |

Een adres met straat, postcode en woonplaats is geen tabel maar een adresblok. Een lijst van drie voordelen is geen tabel maar een `<ul>`. Een woordenlijst met termen en definities is een `<dl>`.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: specificaties</div>
<div class="academy-example__bad">
<p class="academy-example__label">Overbodig</p>

```html
<table>
  <tr>
    <th>Levertijd</th>
    <td>3 werkdagen</td>
  </tr>
  <tr>
    <th>Verzendkosten</th>
    <td>Gratis</td>
  </tr>
</table>
```

Dit zijn sleutel-waarde-paren, geen echte tabeldata. Er is maar een kolom met waarden.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Beter</p>

```html
<dl>
  <dt>Levertijd</dt>
  <dd>3 werkdagen</dd>

  <dt>Verzendkosten</dt>
  <dd>Gratis</dd>
</dl>
```

Een beschrijvingslijst past beter bij sleutel-waarde-paren.

</div>
</div>

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **1.3.1** Informatie en relaties | A | Tabelkoppen moeten correct gekoppeld zijn aan datacellen |
| **1.3.2** Betekenisvolle volgorde | A | De leesvolgorde van tabelcellen moet logisch zijn |

## Verder lezen

- [Tabellen](/blog/sc-1-3-1-tabellen/) -- veelgemaakte fouten bij het opbouwen van tabellen

---

## Quiz

<div class="academy-quiz" id="quiz-tabellen">

<div class="academy-quiz__question" data-question="1">
<p class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een tabel heeft kolomkoppen die visueel vetgedrukt zijn met <code>&lt;td&gt;&lt;strong&gt;Naam&lt;/strong&gt;&lt;/td&gt;</code>. Wat is het probleem?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Er is geen probleem -- de tekst is vetgedrukt dus het is duidelijk een kop</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>De koppen zijn niet gemarkeerd als <code>&lt;th&gt;</code>, waardoor een schermlezer ze niet als kop herkent en niet bij de datacellen kan melden</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span><code>&lt;strong&gt;</code> mag niet in een tabelcel staan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Er ontbreekt alleen een <code>&lt;caption&gt;</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Zonder <code>&lt;th&gt;</code> weet de schermlezer niet dat "Naam" een kop is. Bij het lezen van datacellen wordt de kop niet meegegeven en verliest de gebruiker de context.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een <code>&lt;td&gt;</code> met <code>&lt;strong&gt;</code> ziet er visueel uit als een kop, maar een schermlezer herkent het niet als tabelkop. Gebruik <code>&lt;th scope="col"&gt;</code> zodat de kop aan datacellen wordt gekoppeld.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="2">
<p class="academy-quiz__q-text"><strong>Vraag 2.</strong> Wat doet het <code>scope</code>-attribuut op een <code>&lt;th&gt;</code>?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Het maakt de kop visueel breder</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Het bepaalt de zichtbaarheid van de kop op kleine schermen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Het vertelt de schermlezer of de kop geldt voor een kolom (<code>col</code>) of een rij (<code>row</code>)</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Het is verplicht maar heeft geen praktisch effect</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. <code>scope="col"</code> zegt: deze kop geldt voor alle cellen in deze kolom. <code>scope="row"</code> zegt: deze kop geldt voor alle cellen in deze rij. Zo weet de schermlezer welke kop bij welke cel hoort.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het <code>scope</code>-attribuut vertelt de schermlezer de richting van de kop: <code>col</code> voor kolommen, <code>row</code> voor rijen. Dat maakt het mogelijk om bij elke cel de juiste kop voor te lezen.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="3">
<p class="academy-quiz__q-text"><strong>Vraag 3.</strong> Een website gebruikt een <code>&lt;table&gt;</code> om twee kolommen naast elkaar te plaatsen: een afbeelding links en tekst rechts. Wat is het advies?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Voeg <code>&lt;th&gt;</code>-elementen toe zodat het een toegankelijke tabel wordt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Gebruik CSS voor layout en verwijder de tabel, of voeg <code>role="presentation"</code> toe als de tabel onvermijdelijk is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Voeg een <code>&lt;caption&gt;</code> toe met "Layout"</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Het is prima zolang er geen <code>&lt;th&gt;</code>-elementen in staan</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Een tabel hoort alleen voor data te worden gebruikt. Voor layout gebruik je CSS. Als een layout-tabel onvermijdelijk is (bijvoorbeeld in een e-mail), voeg dan <code>role="presentation"</code> toe zodat de schermlezer de tabelstructuur negeert.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Gebruik geen tabel voor layout. Dat geeft een schermlezer verkeerde informatie ("tabel met 1 rij en 2 kolommen"). Los het op met CSS, of voeg <code>role="presentation"</code> toe als de tabel niet te vermijden is.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="4">
<p class="academy-quiz__q-text"><strong>Vraag 4.</strong> Wat is het verschil tussen een <code>&lt;caption&gt;</code> en een <code>&lt;h2&gt;</code> boven een tabel?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Geen verschil -- beide geven de tabel een titel</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Een <code>&lt;caption&gt;</code> is onderdeel van de tabel en wordt altijd voorgelezen bij tabelnavigatie; een <code>&lt;h2&gt;</code> staat los van de tabel</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Een <code>&lt;caption&gt;</code> is alleen zichtbaar voor schermlezers</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Een <code>&lt;h2&gt;</code> is beter omdat het in de koppenlijst verschijnt</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een <code>&lt;caption&gt;</code> is programmatisch gekoppeld aan de tabel. Wanneer een schermlezergebruiker via de tabellenlijst navigeert, wordt de caption meteen voorgelezen. Een kop boven de tabel heeft die koppeling niet.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De <code>&lt;caption&gt;</code> is onderdeel van de tabel en wordt altijd voorgelezen als de tabel focus krijgt. Een <code>&lt;h2&gt;</code> is onderdeel van de paginastructuur maar niet gekoppeld aan de tabel. Beide kunnen naast elkaar bestaan.</p>
</div>
</div>
</div>

<div class="academy-quiz__question" data-question="5">
<p class="academy-quiz__q-text"><strong>Vraag 5.</strong> Een webshop toont productspecificaties als "Gewicht: 250g", "Kleur: zwart", "Materiaal: katoen". Wat is de beste HTML-structuur?</p>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>Een tabel met twee kolommen: Eigenschap en Waarde</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>Een beschrijvingslijst (<code>&lt;dl&gt;</code>) met <code>&lt;dt&gt;</code> voor de eigenschap en <code>&lt;dd&gt;</code> voor de waarde</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>Een ongeordende lijst (<code>&lt;ul&gt;</code>) met elk paar in een <code>&lt;li&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Losse <code>&lt;p&gt;</code>-elementen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Dit zijn sleutel-waarde-paren en die passen het best in een <code>&lt;dl&gt;</code>. Een tabel kan ook, maar is hier zwaarder dan nodig: er zijn maar twee "kolommen" en de relatie is steeds term-beschrijving.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Sleutel-waarde-paren (eigenschap + waarde) passen het best in een beschrijvingslijst (<code>&lt;dl&gt;</code>). Een tabel is niet fout maar zwaarder dan nodig voor deze structuur.</p>
</div>
</div>
</div>

</div>

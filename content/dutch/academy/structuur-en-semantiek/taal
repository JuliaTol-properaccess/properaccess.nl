---
title: "Taal"
section_number: 1
chapter_number: 3
locked: false
description: "Het lang-attribuut bepaalt hoe een schermlezer je content uitspreekt. Stel het correct in."
points: 10
layout: "academy"
---

## Waarom taal ertoe doet

Een schermlezer moet weten in welke taal een pagina is geschreven. Op basis van het `lang`-attribuut laadt de schermlezer de juiste uitspraakregels, het juiste stemgeluid en de juiste intonatie. Zonder dat attribuut raadt de schermlezer de taal -- en die gok is lang niet altijd goed.

Stel je voor: een Nederlandstalige pagina zonder `lang="nl"`. De schermlezer staat ingesteld op Engels en leest alle Nederlandse tekst voor met Engelse uitspraak. Het resultaat is onverstaanbaar.

## SC 3.1.1: Taal van de pagina

WCAG succescriterium 3.1.1 (Taal van de pagina) vereist dat de standaardtaal van elke webpagina **programmatisch bepaalbaar** is. In de praktijk betekent dat: zet een `lang`-attribuut op het `<html>`-element.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: lang-attribuut op de pagina</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<html>
```

Geen `lang`-attribuut. De schermlezer moet raden.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<html lang="nl">
```

De schermlezer weet dat dit een Nederlandstalige pagina is.

</div>
</div>

### Welke taalcode gebruik je?

Gebruik geldige BCP 47 taalcodes. De meest voorkomende:

| Code | Taal |
|---|---|
| `nl` | Nederlands |
| `en` | Engels |
| `de` | Duits |
| `fr` | Frans |

Je mag ook regiovarianten gebruiken (`nl-NL`, `nl-BE`, `en-US`), maar de basistag (`nl`, `en`) is in de meeste gevallen voldoende.

<div class="academy-tip">
<p class="academy-tip__title">Tip: meertalige websites</p>

Bij een meertalige website heeft elke taalversie een eigen `lang`-attribuut. De Nederlandse versie krijgt `lang="nl"`, de Engelse `lang="en"`. Gebruik altijd de taal die het meest voorkomt op de pagina als standaard.

</div>

## SC 3.1.2: Taal van onderdelen

Succescriterium 3.1.2 (Taal van onderdelen) gaat een stap verder: als een stuk tekst in een **andere taal** is geschreven dan de rest van de pagina, moet je dat aangeven met een `lang`-attribuut op dat element.

Dit is een AA-criterium en is belangrijk voor pagina's die citaten, technische termen of passages in een andere taal bevatten.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: een Engels citaat op een Nederlandse pagina</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<p>Het W3C zegt: "Web accessibility means that websites,
tools, and technologies are designed and developed so that
people with disabilities can use them."</p>
```

De schermlezer probeert de Engelse zin met Nederlandse uitspraak voor te lezen.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<p>Het W3C zegt: <span lang="en">"Web accessibility means
that websites, tools, and technologies are designed and
developed so that people with disabilities can use
them."</span></p>
```

De schermlezer schakelt over naar Engelse uitspraak voor het citaat.

</div>
</div>

### Wanneer hoef je lang niet toe te voegen?

Niet elk vreemd woord heeft een `lang`-attribuut nodig. SC 3.1.2 kent uitzonderingen:

- **Ingeburgerde leenwoorden** -- woorden als "website", "computer", "team" of "design" die in het Nederlands zijn opgenomen
- **Technische termen** -- vakjargon dat in de oorspronkelijke taal wordt gebruikt (zoals "framework" of "responsive")
- **Eigennamen** -- merknamen, persoonsnamen, plaatsnamen

De vuistregel: als het woord in een Nederlands woordenboek staat, hoef je geen `lang`-attribuut toe te voegen.

<div class="academy-tip">
<p class="academy-tip__title">Tip: wanneer wel markeren?</p>

Markeer een taalwisseling als een schermlezer de tekst anders zou moeten uitspreken om die begrijpelijk te maken. Een los woord als "feedback" hoeft niet. Een volledige Engelse zin of alinea wel.

</div>

## Veelgemaakte fouten

1. **Geen `lang`-attribuut** -- het meest voorkomende probleem. Makkelijk te voorkomen.
2. **Verkeerde taalcode** -- `lang="en"` op een Nederlandstalige pagina. Komt voor bij templates die niet zijn aangepast.
3. **Taalcode op de verkeerde plek** -- `lang` op de `<body>` in plaats van op `<html>`. Het moet op `<html>`.
4. **Ongeldige taalcode** -- `lang="dutch"` of `lang="ned"` zijn geen geldige BCP 47 codes.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **3.1.1** Taal van de pagina | A | De standaardtaal moet programmatisch bepaalbaar zijn via het `lang`-attribuut |
| **3.1.2** Taal van onderdelen | AA | Taalwisselingen binnen de pagina moeten worden gemarkeerd |

## Verder lezen

- [W3C: Understanding SC 3.1.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) -- de officiële toelichting op het taalcriterium
- [BCP 47 taalcodes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) -- het register met alle geldige taalcodes

---

## Quiz

<div class="academy-quiz" id="quiz-taal">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Waar hoort het <code>lang</code>-attribuut voor de standaardtaal van een pagina?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Op het <code>&lt;body&gt;</code>-element</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Op het <code>&lt;html&gt;</code>-element</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Op het <code>&lt;head&gt;</code>-element</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>In een <code>&lt;meta&gt;</code>-tag</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Het <code>lang</code>-attribuut hoort op het <code>&lt;html&gt;</code>-element. Dat is de enige plek die door alle hulpsoftware correct wordt uitgelezen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het <code>lang</code>-attribuut hoort op het <code>&lt;html&gt;</code>-element, niet op <code>&lt;body&gt;</code>, <code>&lt;head&gt;</code> of in een <code>&lt;meta&gt;</code>-tag. Dat is wat SC 3.1.1 vereist.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Op een Nederlandstalige pagina staat een alinea in het Duits. Hoe markeer je dat correct?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Dat hoeft niet -- de schermlezer herkent de taal automatisch</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Voeg <code>lang="de"</code> toe aan het element dat de Duitse tekst bevat</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Verander <code>lang="nl"</code> naar <code>lang="de"</code> op het <code>&lt;html&gt;</code>-element</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Zet de Duitse tekst in een <code>&lt;iframe&gt;</code> met <code>lang="de"</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Je markeert de taalwisseling met <code>lang="de"</code> op het element dat de Duitse tekst bevat. Het <code>lang</code>-attribuut op <code>&lt;html&gt;</code> blijft <code>"nl"</code> voor de rest van de pagina.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Voeg <code>lang="de"</code> toe aan het element dat de Duitse alinea bevat (bijvoorbeeld een <code>&lt;p&gt;</code> of <code>&lt;blockquote&gt;</code>). Verander niet de taal op <code>&lt;html&gt;</code> -- die blijft de standaardtaal van de pagina.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Op een Nederlandstalige pagina staat het woord "website". Moet je daar <code>lang="en"</code> aan toevoegen?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Ja, het is oorspronkelijk een Engels woord</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Nee, het is een ingeburgerd leenwoord en staat in het Nederlandse woordenboek</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Alleen als de schermlezer op Engels staat ingesteld</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Ja, elk woord uit een andere taal moet worden gemarkeerd</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. "Website" is een ingeburgerd leenwoord in het Nederlands. Volgens SC 3.1.2 hoeven ingeburgerde leenwoorden, technische termen en eigennamen niet te worden gemarkeerd.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>"Website" is opgenomen in het Nederlandse woordenboek en geldt als ingeburgerd leenwoord. SC 3.1.2 vereist geen <code>lang</code>-attribuut voor ingeburgerde leenwoorden, technische termen en eigennamen.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Welke taalcode is geldig voor een Nederlandstalige pagina?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span><code>lang="dutch"</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span><code>lang="ned"</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span><code>lang="nl"</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span><code>lang="NL"</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. <code>"nl"</code> is de geldige BCP 47 taalcode voor Nederlands. Codes als "dutch" of "ned" bestaan niet in de BCP 47 standaard.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De geldige BCP 47 taalcode voor Nederlands is <code>"nl"</code>. Codes zoals "dutch" en "ned" zijn ongeldig. Let op: hoewel het attribuut niet hoofdlettergevoelig is, is de conventie om kleine letters te gebruiken.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> Wat is het directe gevolg als een Nederlandstalige pagina <code>lang="en"</code> heeft?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>De pagina wordt automatisch vertaald naar het Engels</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>De schermlezer gebruikt Engelse uitspraakregels voor Nederlandse tekst</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>Er is geen effect -- schermlezers negeren het lang-attribuut</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>De pagina verschijnt niet in Nederlandse zoekresultaten</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. De schermlezer laadt Engelse uitspraakregels en probeert de Nederlandse tekst op z'n Engels voor te lezen. Het resultaat is onverstaanbaar.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een schermlezer gebruikt het <code>lang</code>-attribuut om de juiste uitspraakregels te laden. Bij <code>lang="en"</code> op een Nederlandstalige pagina wordt alle tekst met Engelse uitspraak voorgelezen -- onverstaanbaar voor de luisteraar.</p>
</div>
</div>
</fieldset>

</div>

---
title: "Paginatitel"
section_number: 1
chapter_number: 2
locked: false
description: "De paginatitel is het eerste wat een schermlezer voorleest. Zorg dat die beschrijvend en uniek is."
points: 10
layout: "academy"
---

## Wat is de paginatitel?

De paginatitel is de tekst in het `<title>`-element in de `<head>` van je HTML-pagina. Je ziet die tekst in het browsertabblad, in zoekresultaten en in bladwijzers. Maar de belangrijkste functie is misschien wel onzichtbaar: een schermlezer leest de paginatitel **als eerste** voor wanneer een pagina wordt geladen.

Dat maakt de paginatitel de eerste indruk van je pagina. Als die nietszeggend is, weet de gebruiker niet waar die is beland.

## Waarom het ertoe doet

WCAG succescriterium 2.4.2 (Paginatitel) vereist dat webpagina's een titel hebben die het **onderwerp of doel** beschrijft.

Denk aan wat er gebeurt als een schermlezergebruiker meerdere tabbladen open heeft. De enige manier om te weten welk tabblad welke pagina bevat, is de paginatitel. Als alle pagina's dezelfde titel hebben - of helemaal geen titel - dan is dat onmogelijk.

De paginatitel helpt ook bij:

- **Orientatie** - de gebruiker weet direct waar die is
- **Zoekresultaten** - de titel verschijnt als klikbare link in Google
- **Bladwijzers** - de standaardnaam van een bladwijzer is de paginatitel
- **Tabbladen** - de enige identifier in een vol tabblad

## Regels voor een goede paginatitel

### 1. Beschrijf het onderwerp van de pagina

De titel moet duidelijk maken waar de pagina over gaat. "Home" is beter dan niets, maar "Contactgegevens | Proper Access" is veel duidelijker.

### 2. Maak elke titel uniek

Geen twee pagina's op je website mogen dezelfde titel hebben. Elke pagina heeft andere content, dus elke pagina verdient een eigen titel.

### 3. Zet de paginanaam voor de sitenaam

Het specifieke deel eerst, het algemene deel daarna. Zo hoort de schermlezergebruiker meteen het belangrijkste.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: volgorde in de paginatitel</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<title>Proper Access | Contact</title>
```

De gebruiker hoort eerst "Proper Access" - bij elk tabblad hetzelfde.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<title>Contact | Proper Access</title>
```

De gebruiker hoort meteen "Contact" en weet waar die is.

</div>
</div>

### 4. Houd de titel beknopt maar informatief

Een titel hoeft geen volledige zin te zijn. Kort en beschrijvend is het beste. Gebruik een scheidingsteken zoals `|`, `-` of `--` tussen paginanaam en sitenaam.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: beschrijvende vs. vage titel</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<title>Welkom</title>
```

"Welkom" zegt niets over de inhoud. Welkom waarbij?

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<title>Digitale toegankelijkheid: audits en advies | Proper Access</title>
```

Beschrijft direct wat de bezoeker kan verwachten.

</div>
</div>

## Dynamische paginatitels

Bij single-page applicaties (SPA's) verandert de URL zonder dat de pagina opnieuw wordt geladen. De paginatitel wordt dan niet automatisch bijgewerkt. Je moet dat zelf regelen met JavaScript:

```javascript
document.title = "Zoekresultaten voor 'toegankelijkheid' | Mijn Site";
```

Doe dit bij elke route-wijziging. Anders blijft de titel staan van de eerste pagina die de gebruiker heeft geladen.

<div class="academy-tip">
<p class="academy-tip__title">Tip: paginatitel bij formulieren</p>

Wanneer een formulier een foutmelding oplevert, voeg dan "Fout:" of het aantal fouten toe aan de paginatitel. Bijvoorbeeld: `Fout: Contactformulier | Mijn Site`. Zo weet een schermlezergebruiker direct dat er iets mis is gegaan.

</div>

## Paginatitel en linktekst

Er is een relatie tussen linktekst en paginatitels. Als een link zegt "Lees ons privacybeleid", dan verwacht de gebruiker op een pagina te landen met een titel die iets met privacybeleid te maken heeft. Als de paginatitel dan "Juridisch" is, is dat verwarrend.

Zorg dat de linktekst en de paginatitel van de bestemmingspagina op elkaar aansluiten.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **2.4.2** Paginatitel | A | Webpagina's moeten een titel hebben die het onderwerp of doel beschrijft |

## Verder lezen

- [SC 2.4.2: Paginatitel ontbreekt](/blog/sc-2-4-2-paginatitel-ontbreekt/) -- wat er misgaat als de titel ontbreekt

---

## Quiz

<div class="academy-quiz" id="quiz-paginatitel">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een website heeft vijf pagina's. Elke pagina heeft de titel "Mijn Website". Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Niets -- de sitenaam is voldoende als titel</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>De titels zijn niet uniek en beschrijven niet het onderwerp van elke pagina</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>De titel is te kort</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>De titel mag geen spaties bevatten</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Elke pagina moet een unieke, beschrijvende titel hebben zodat gebruikers pagina's van elkaar kunnen onderscheiden. Alleen de sitenaam herhalen is een overtreding van SC 2.4.2.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Als alle pagina's dezelfde titel hebben, kan een schermlezergebruiker niet onderscheiden welke pagina welke is. Elke pagina heeft een unieke, beschrijvende titel nodig (SC 2.4.2).</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Wat is de beste volgorde voor een paginatitel?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Sitenaam | Paginanaam</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Paginanaam | Sitenaam</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Alleen de paginanaam</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>De volgorde maakt niet uit</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Door de paginanaam eerst te zetten, hoort de gebruiker meteen het specifieke deel. Dat is vooral belangrijk bij meerdere open tabbladen.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>De best practice is: paginanaam eerst, sitenaam daarna. Zo hoort de schermlezergebruiker direct het specifieke deel, zonder eerst de herhalende sitenaam te moeten aanhoren.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Een single-page applicatie (SPA) wisselt van weergave zonder de pagina te herladen. Wat moet er gebeuren met de paginatitel?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Niets -- de browser regelt dit automatisch</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>De titel moet met JavaScript worden bijgewerkt bij elke route-wijziging</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>SPA's zijn vrijgesteld van SC 2.4.2</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>De titel hoeft alleen bij de eerste keer laden te kloppen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. In een SPA wordt de pagina niet opnieuw geladen, dus de titel wordt niet automatisch bijgewerkt. Je moet <code>document.title</code> zelf aanpassen bij elke route-wijziging.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Bij een SPA verandert de content zonder herladen. De browser past de titel niet automatisch aan. Je moet met JavaScript <code>document.title</code> bijwerken zodat de titel altijd klopt bij de huidige weergave.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Een link zegt "Bekijk onze tarieven". De bestemmingspagina heeft als titel "Pagina 3". Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>De linktekst klopt niet bij de paginatitel -- de gebruiker raakt gedesori&euml;nteerd</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Er is geen probleem zolang de content over tarieven gaat</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>"Pagina 3" is een prima titel als het de derde pagina is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>De link moet ook "Pagina 3" als tekst gebruiken</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. "Pagina 3" beschrijft het onderwerp niet en sluit niet aan bij de linktekst. De gebruiker verwacht een pagina over tarieven en krijgt een nietszeggende titel. Dat is een overtreding van SC 2.4.2.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>"Pagina 3" beschrijft niets. De titel moet het onderwerp van de pagina beschrijven en aansluiten bij de linktekst waarmee de gebruiker er naartoe navigeerde. Een titel als "Tarieven | Mijn Site" zou hier passend zijn.</p>
</div>
</div>
</fieldset>

</div>

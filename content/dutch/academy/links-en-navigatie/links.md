---
title: "Links"
section_number: 2
chapter_number: 11
locked: true
description: "Een link moet zeggen waar hij naartoe gaat, en zichtbaar zijn zonder dat je kleur kunt zien."
points: 10
layout: "academy"
---

## Waarom een linktekst zoveel verschil maakt

Wie een schermlezer gebruikt, leest een pagina vaak niet van boven naar beneden. Een schermlezer kan een lijst opvragen van alle links op de pagina, en die lijst bevat alleen de linkteksten. De alinea eromheen valt weg. Staan er zes keer de woorden "lees meer" in die lijst, dan is er niets te kiezen.

Een schermlezer is het bekendste voorbeeld van hulpsoftware: een programma dat niet naar het scherm kijkt, maar de code van de pagina uitleest en voorleest of op een brailleregel zet. De drie die je het meest tegenkomt zijn NVDA en JAWS op Windows en VoiceOver op Mac en iPhone.

Hulpsoftware is breder dan dat. Spraakbesturing hoort er ook bij: iemand zegt "klik retourbeleid" en de computer activeert de link met die naam. Daarom gaat dit hoofdstuk over twee dingen: wat een link betekent, en met welke precieze woorden je hem kunt aanspreken.

## Eerst dit: de toegankelijke naam

De toegankelijke naam is de tekst die hulpsoftware van een element doorgeeft. Bij een link is dat meestal gewoon de linktekst. Maar niet altijd:

- Zit er een afbeelding in de link, dan is de alt-tekst van die afbeelding de naam.
- Staat er een `aria-label` op de link, dan overschrijft die alles. De zichtbare tekst verdwijnt dan uit de naam.

Die laatste is de valkuil van dit hoofdstuk. Je ziet iets anders staan dan de computer doorgeeft.

## Wat WCAG vraagt

Het hoofdcriterium is **succescriterium 2.4.4 Linkdoel (in context)**, niveau A. De Engelse tekst van WCAG 2.2:

> The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

Twee dingen zitten daarin. Het doel van de link moet duidelijk zijn uit de linktekst zelf, **of** uit de linktekst plus de context. En die context is niet alles wat er visueel in de buurt staat.

### Welke context meetelt

De woordenlijst van WCAG geeft als voorbeeld van context: tekst in dezelfde alinea, in hetzelfde lijstitem, in dezelfde tabelcel, of in de kopcel van de tabel die bij die cel hoort. Schermlezers kunnen ook de zin eromheen gebruiken.

Wat er niet bij staat: een kop boven een blok met links. Een `<h2>` boven een rij kaartjes maakt de linkteksten eronder dus niet duidelijk. In onze audits leunen we daar niet op.

<div class="academy-tip">
<p class="academy-tip__title">Let op het niveau</p>

Er bestaat een strenger criterium, 2.4.9 Linkdoel (alleen link), dat wil dat de linktekst op zichzelf genoeg is. Dat staat op niveau AAA en valt buiten deze cursus en buiten de wettelijke norm. Deze cursus gaat over niveau A en AA, samen 55 succescriteria in WCAG 2.2.

</div>

## De regels voor een goede link

### Zeg waar de link heen gaat

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: linktekst zonder betekenis</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<p>Je kunt een product binnen 30 dagen terugsturen.</p>
<a href="/retourbeleid">Lees meer</a>
```

De link staat buiten de alinea. In de linkenlijst van een schermlezer staat alleen "Lees meer".

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<p>Je kunt een product binnen 30 dagen terugsturen.</p>
<a href="/retourbeleid">Lees meer over ons retourbeleid</a>
```

De naam zegt nu zelf waar hij heen gaat.

</div>
</div>

### Moet de opmaak kort blijven, verberg dan de aanvulling

Soms wil een ontwerp maar twee woorden kwijt onder een kaartje. Je kunt de aanvulling dan visueel verbergen en in de naam laten staan. Dat is de oplossing die wij in rapporten voorstellen.

```html
<a href="/retourbeleid">Lees meer<span class="sr-only"> over ons retourbeleid</span></a>
```

De klasse `sr-only` is een stukje CSS dat de tekst van het scherm haalt en voor hulpsoftware laat staan. Zet die tekst nooit op `display: none`, want dan verdwijnt hij ook uit de naam.

### Dezelfde tekst betekent dezelfde bestemming

Staan er twee links met de tekst "Aanmelden" op één pagina die naar verschillende formulieren gaan, dan kun je ze op naam niet onderscheiden. Bij ons is dat een bevinding op 2.4.4 binnen één pagina, met impact Matig.

Het spiegelbeeld bestaat ook. Drie links met de teksten "Contact", "Neem contact op" en "Contactgegevens" die alle drie naar `/contact` gaan, zijn hetzelfde onderdeel met drie namen. Dat melden wij op **succescriterium 3.2.4 Consistente identificatie**, niveau AA: onderdelen met dezelfde functie moeten op de hele site hetzelfde worden aangeduid. Kies één tekst en houd die vast.

### Een afbeelding als link krijgt de bestemming als alt-tekst

Is de hele link een afbeelding, dan is de alt-tekst de naam van de link. Beschrijf dan niet de afbeelding, maar waar je terechtkomt.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: logo dat naar de homepage linkt</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<a href="/"><img src="/images/logo.svg" alt="Logo"></a>
```

"Logo" vertelt niet waar de link heen gaat. Een leeg `alt` is hier nog erger: dan heeft de link helemaal geen toegankelijke naam, en dat raakt ook 4.1.2 Naam, rol, waarde.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<a href="/"><img src="/images/logo.svg" alt="Proper Access, naar de homepage"></a>
```

</div>
</div>

Staat er naast de afbeelding ook tekst in dezelfde link, dan hoeft de afbeelding niets toe te voegen. Geef die dan een leeg `alt`, zodat de naam niet dubbel wordt voorgelezen.

### Een URL is geen linktekst

`https://www.example.com/producten/handleiding-2026.pdf` als zichtbare linktekst laat een schermlezer soms letter voor letter of als losse woorddelen voorlezen. Schrijf er een naam van: "Handleiding 2026 (PDF)".

### Het title-attribuut lost niets op

Een `title` op een link verschijnt als tooltip bij de muis, niet bij toetsenbordfocus en niet op een telefoon. Een `title` die de linktekst herhaalt, voegt niets toe; bij ons is dat een advies in het rapport, geen zakker. Een vage linktekst repareer je niet met een `title`.

### Een nieuw tabblad aankondigen is netjes, geen eis

Geen enkel succescriterium op A of AA vraagt dat je "opent in een nieuw tabblad" in de linktekst zet. Techniek G201 van WCAG noemt het goede praktijk en zegt er zelf bij dat het niet nodig is om aan een criterium te voldoen. Doe het dus als het je gebruikers helpt, en noem het geen WCAG-eis.

## Een link moet ook zichtbaar zijn

Hiernaast staat een tweede criterium: **1.4.1 Gebruik van kleur**, niveau A. Kleur mag niet het enige verschil zijn waarmee je iets herkent. Een link in een alinea die alleen blauw is, valt daar onder: wie kleuren niet goed kan onderscheiden, ziet niet dat daar een link staat.

De duidelijkste oplossing is een onderstreping. Die werkt voor iedereen.

Wil je het zonder onderstreping, dan mag dat, op één voorwaarde. Techniek G183 van WCAG vraagt dan een contrast van minstens **3:1** tussen de linktekst en de tekst eromheen. Let op drie dingen:

- Een techniek is een manier om te voldoen, geen eis. Een link die onderstreept is, voldoet aan 1.4.1 ongeacht dat getal.
- Dit staat los van 1.4.3 Contrast. Beide kleuren moeten daarnaast hun eigen contrast met de achtergrond halen. Dat zijn twee metingen.
- Het kenmerk moet in de ruststand te zien zijn. Verschijnt de onderstreping pas bij de muis of bij focus, dan is dat volgens failure F73 nog steeds een fout.

## De zichtbare tekst hoort in de naam

Het derde criterium van dit hoofdstuk is **2.5.3 Label in naam**, niveau A: de naam van een onderdeel bevat de tekst die je ziet staan. Dat criterium bestaat voor spraakbesturing. Iemand zegt wat er staat, en dan moet de computer dat onderdeel vinden.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: aria-label dat de zichtbare tekst wegduwt</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<a href="/offerte" aria-label="Vraag een onderzoek aan">Offerte</a>
```

De naam is "Vraag een onderzoek aan". Het woord "Offerte" zit er niet in. Wie "klik offerte" zegt, krijgt geen link.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<a href="/offerte">Offerte<span class="sr-only"> aanvragen voor een onderzoek</span></a>
```

De zichtbare tekst staat vooraan in de naam. De aanvulling komt erachter. De noot bij het criterium noemt het vooraan zetten een goede praktijk.

</div>
</div>

Vermijd `aria-label` op een link die al zichtbare tekst heeft. De Understanding-pagina bij 2.5.3, de uitleg van de werkgroep en zelf geen norm, zegt het zo: "when a visible label already exists, aria-label should be avoided or used carefully".

## Veelgemaakte fouten

Dit zijn de bevindingen die wij in audits het vaakst op links schrijven:

- **Onduidelijke linktekst**, zoals "lees meer" of "klik hier" zonder context. Impact Matig.
- **Dezelfde linktekst, verschillende bestemming** op één pagina. Impact Matig.
- **Verschillende linkteksten, dezelfde bestemming** over de site heen. Dat is 3.2.4. Impact Matig.
- **Gelinkte afbeelding zonder bruikbare alt-tekst**, dus een link zonder naam. Impact Matig.
- **Links onvoldoende herkenbaar**, alleen een kleurverschil in lopende tekst. Impact Matig.
- **Zichtbare linktekst ontbreekt in de toegankelijke naam.** Impact Serieus, want spraakbesturing werkt dan niet.
- **Onleesbare tekens in de naam**, zoals een pijl of een los teken dat als woord wordt voorgelezen.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **2.4.4** Linkdoel (in context) | A | Het doel van de link blijkt uit de linktekst, of uit de linktekst plus de context in de code |
| **1.4.1** Gebruik van kleur | A | Een link in lopende tekst is niet alleen aan kleur te herkennen |
| **2.5.3** Label in naam | A | De naam van de link bevat de zichtbare tekst |
| **3.2.4** Consistente identificatie | AA | Dezelfde link heeft op de hele site dezelfde tekst |
| **4.1.2** Naam, rol, waarde | A | De link heeft een naam en de rol link, ook als hij met JavaScript is gemaakt |

## Verder lezen

- [URL als linktekst](/blog/sc-2-4-4-url-als-linktekst/), over wat een schermlezer met een webadres doet
- [aria-labelledby verwijst naar de verkeerde tekst](/blog/sc-2-5-3-aria-labelledby-verwijst-naar-de-verkeerde-tekst/), een veelgemaakte fout bij 2.5.3
- [Gelinkte afbeelding](/blog/webshop-gelinkte-afbeelding/), het voorbeeld van een productfoto in een webshop

---

## Quiz

<div class="academy-quiz" id="quiz-links">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Onder een kop "Jaarverslagen" staan drie links met de tekst "Download". Is dat genoeg voor succescriterium 2.4.4?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Ja, de kop erboven geeft de context</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Nee, een kop boven een blok links telt niet als linkcontext</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Ja, zolang er een <code>title</code>-attribuut op de links staat</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Nee, want "Download" is een werkwoord</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. De woordenlijst van WCAG noemt als context dezelfde alinea, hetzelfde lijstitem, dezelfde tabelcel of de bijbehorende kopcel. Een kop boven een blok staat daar niet bij. Zet het jaartal in de linktekst, of verberg het met <code>sr-only</code>.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is b. De context die meetelt, staat in de code dichtbij de link: dezelfde alinea, hetzelfde lijstitem, dezelfde tabelcel of de bijbehorende kopcel. Een kop boven een rij links hoort daar niet bij, en een <code>title</code> lost het niet op.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Een link ziet er zo uit: <code>&lt;a href="/offerte" aria-label="Vraag een onderzoek aan"&gt;Offerte&lt;/a&gt;</code>. Welk criterium zakt hier?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>2.4.4 Linkdoel (in context)</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>1.4.1 Gebruik van kleur</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>2.5.3 Label in naam</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Geen enkel, de naam is juist duidelijker</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. 2.5.3 vraagt dat de naam de zichtbare tekst bevat. Het woord "Offerte" zit niet in "Vraag een onderzoek aan", dus spraakbesturing vindt de link niet. 2.4.4 is wel gehaald: het doel is duidelijk.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is 2.5.3 Label in naam, niveau A. De <code>aria-label</code> duwt de zichtbare tekst "Offerte" uit de naam. Wie met spraak werkt en "klik offerte" zegt, krijgt geen reactie. Zet de aanvulling in een <code>sr-only</code>-span achter de zichtbare tekst.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> In een alinea staan links die alleen aan hun blauwe kleur te herkennen zijn, zonder onderstreping. Wat eist WCAG?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Een contrast van 4,5:1 tussen de linktekst en de tekst eromheen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Niets, kleur mag het enige verschil zijn als het contrast met de achtergrond goed is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Een onderstreping, want dat is de enige toegestane oplossing</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Een tweede kenmerk naast kleur, of minstens 3:1 contrast met de omringende tekst</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="d" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. 1.4.1 vraagt dat kleur niet het enige kenmerk is. Techniek G183 geeft de route zonder onderstreping: minstens 3:1 tussen de linktekst en de tekst eromheen. Daarnaast moet elke kleur zijn eigen contrast met de achtergrond halen voor 1.4.3.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is d. Een onderstreping is de duidelijkste oplossing, maar niet de enige: techniek G183 staat ook 3:1 contrast tussen de linktekst en de omringende tekst toe. Het getal 4,5:1 hoort bij contrast met de achtergrond en bij 1.4.3, niet hier.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Op de site staan de linkteksten "Contact", "Neem contact op" en "Contactgegevens". Alle drie gaan ze naar <code>/contact</code>. Waar hoort die bevinding?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>2.4.4 Linkdoel (in context), want de teksten zijn verwarrend</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>3.2.4 Consistente identificatie, niveau AA</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>2.4.6 Koppen en labels, want labels moeten uniek zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Nergens, drie teksten naar dezelfde pagina mag</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. 3.2.4 vraagt dat onderdelen met dezelfde functie op de hele site hetzelfde worden aangeduid. Elke linktekst is op zichzelf duidelijk, dus 2.4.4 is gehaald. 2.4.6 vraagt beschrijvende labels, geen unieke.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is 3.2.4 Consistente identificatie, niveau AA. De drie teksten zijn elk duidelijk, dus 2.4.4 zakt niet. Het probleem is dat hetzelfde onderdeel drie namen heeft. Kies één tekst en houd die op de hele site vast.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> Een ontwerp laat onder elk kaartje maar twee woorden toe: "Lees meer". Wat is de beste oplossing?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>Een <code>title</code>-attribuut met de volledige tekst</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>De aanvulling in een <code>span</code> met <code>display: none</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>De aanvulling in een <code>span</code> met de klasse <code>sr-only</code>, binnen de link</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Een <code>aria-label</code> met alleen de nieuwe tekst</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. De zichtbare tekst blijft staan en de aanvulling zit in de naam. <code>display: none</code> haalt de tekst ook uit de naam, een <code>title</code> werkt niet bij toetsenbord en aanraking, en een <code>aria-label</code> duwt de zichtbare tekst uit de naam en breekt 2.5.3.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is c. Met <code>sr-only</code> blijft "Lees meer" zichtbaar en staat de aanvulling in de naam. <code>display: none</code> verbergt de tekst ook voor hulpsoftware. Een <code>title</code> verschijnt alleen bij de muis. Een <code>aria-label</code> vervangt de zichtbare tekst en zakt op 2.5.3.</p>
</div>
</div>
</fieldset>

</div>

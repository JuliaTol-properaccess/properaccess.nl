---
title: "Linkteksten"
section_number: 2
chapter_number: 1
locked: false
description: "Een linktekst zegt waar de link heen gaat, ook als je de zin eromheen niet leest."
points: 10
layout: "academy"
---

## Waarom de linktekst telt

Wie een schermlezer gebruikt, leest een pagina vaak niet van boven naar beneden. Een schermlezer kan een lijst geven van alle links op de pagina. In die lijst staat alleen de linktekst. De zin eromheen valt weg. Staat er zes keer "lees meer" in de lijst, dan weet de gebruiker niet welke link waar heen gaat.

Een schermlezer is software die de tekst op het scherm voorleest of op een brailleregel zet. De bekendste zijn NVDA en JAWS op Windows en VoiceOver op Mac en iPhone.

Ook wie de computer met de stem bedient, heeft de linktekst nodig. Die persoon zegt bijvoorbeeld "klik retourbeleid". Dan moet er een link zijn met dat woord erin.

## Wat WCAG vraagt

Het belangrijkste criterium is **succescriterium 2.4.4 Linkdoel (in context)**, niveau A. De Engelse tekst van WCAG 2.2:

<blockquote lang="en">
<p>The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.</p>
</blockquote>

Het doel van een link blijkt dus uit de linktekst zelf, of uit de linktekst samen met de context. Die context is niet alles wat er in de buurt staat. WCAG noemt tekst in dezelfde alinea, in dezelfde lijst, in dezelfde tabelcel, of in de kopcel van de tabel die bij die cel hoort.

Een kop boven een rij links staat niet in dat rijtje. Wij tellen die in onze audits dus niet mee als context.

Het eenvoudigste is een linktekst die op zichzelf duidelijk is. Dan voldoe je aan 2.4.4, en werkt de lijst met links ook.

## Zo schrijf je een goede linktekst

### Leg de link op de woorden die de bestemming noemen

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: link op "hier"</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

"Wil je iets terugsturen? Klik hier."

De link zit op "Klik hier". In de lijst met links zegt dat niets.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

"Wil je iets terugsturen? Lees ons retourbeleid."

De link zit op "ons retourbeleid". Ook zonder de zin weet je waar je terechtkomt.

</div>
</div>

### Dezelfde tekst gaat naar dezelfde pagina

Staan er op één pagina twee links met de tekst "Aanmelden" die naar verschillende formulieren gaan, dan kan de gebruiker ze niet uit elkaar houden. Dat is een bevinding op 2.4.4.

Het omgekeerde komt ook voor. Een link die op elke pagina terugkomt, zoals in het menu of de footer, heet op de ene pagina "Contact" en op de andere "Neem contact op". Dat melden wij op **succescriterium 3.2.4 Consistente identificatie**, niveau AA. Geef zo'n terugkerende link overal dezelfde tekst. Een link in de lopende tekst van een artikel mag wel anders heten dan de link in het menu.

### Een webadres is geen linktekst

Een schermlezer leest `https://www.example.com/producten/handleiding-2026.pdf` soms letter voor letter voor, of in losse stukjes. Schrijf er een naam van: "Handleiding 2026 (pdf)".

Gaat de link naar een document, zet dan het bestandstype in de linktekst. De lezer weet dan dat er een bestand opengaat en geen webpagina.

### Een afbeelding als link krijgt de bestemming als alt-tekst

Is de link alleen een afbeelding, dan is de alt-tekst de naam van de link. Beschrijf dan niet wat er op de afbeelding staat. Schrijf waar de link heen gaat, bijvoorbeeld "Proper Access, naar de homepage" bij een logo.

### Een nieuw tabblad aankondigen mag, maar is geen eis

Je hoeft "opent in een nieuw tabblad" niet in de linktekst te zetten. Geen succescriterium op niveau A of AA vraagt erom. Techniek G201 van WCAG noemt het een goede gewoonte. Doe het als het je lezers helpt.

{{< academy-cms niveau="2" >}}
1. Schrijf eerst de zin, zonder link.
2. Kies de woorden die zeggen waar de link heen gaat. Meestal is dat het onderwerp, zoals "ons retourbeleid" of "het aanmeldformulier voor de cursus".
3. Selecteer precies die woorden en klik op de knop voor een link in de werkbalk. In veel systemen is dat een icoon van een schakel van een ketting.
4. Plak het adres van de pagina.
5. Zie je een veld "Titel" in het linkvenster? Zet daar niet dezelfde tekst in als in de link, en los er geen vage linktekst mee op. Die titel verschijnt alleen als tooltip als je met de muis over de link gaat. Met het toetsenbord of op een telefoon zie je hem niet.
6. Gaat de link naar een pdf of ander document, zet het bestandstype dan achter de linktekst.
7. Voeg je een afbeelding als link in, vul dan de alt-tekst in met de bestemming.
{{< /academy-cms >}}

{{< academy-controle niveau="2" >}}
Je hebt hiervoor alleen je browser nodig.

1. Open de pagina in de voorbeeldweergave van je CMS of op de website.
2. Zoek met Ctrl+F, of Cmd+F op een Mac, naar "klik hier", "hier", "lees meer" en "meer informatie". Staat een van die woorden in een link? Herschrijf de linktekst.
3. Lees alleen de links op de pagina, zonder de zinnen eromheen. Weet je bij elke link waar je terechtkomt?
4. Hebben twee links dezelfde tekst? Controleer of ze naar dezelfde pagina gaan.
5. Kijk hoe de links in de lopende tekst eruitzien. Herken je ze alleen aan een andere kleur, zonder onderstreping? Meld dat bij de beheerder van de website. Dat regelt de vormgeving, niet de redactie, en het valt onder succescriterium 1.4.1 Gebruik van kleur, niveau A.
{{< /academy-controle >}}

## Veelgemaakte fouten

- **Een link op "hier" of "lees meer"**, zonder dat de linktekst zelf de bestemming noemt.
- **Dezelfde linktekst voor verschillende pagina's** op één pagina.
- **Een terugkerende link met steeds een andere tekst**, bijvoorbeeld in het menu of de footer.
- **Een webadres als linktekst.**
- **Een afbeelding als link zonder alt-tekst**, of met een alt-tekst die de afbeelding beschrijft in plaats van de bestemming.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **2.4.4** Linkdoel (in context) | A | Het doel van de link blijkt uit de linktekst, of uit de linktekst samen met de context |
| **3.2.4** Consistente identificatie | AA | Een link die op meer pagina's terugkomt, heeft overal dezelfde tekst |
| **1.4.1** Gebruik van kleur | A | Een link in lopende tekst is niet alleen aan de kleur te herkennen |

## Verder lezen

- [URL als linktekst](/blog/sc-2-4-4-url-als-linktekst/), over wat een schermlezer met een webadres doet
- [Gelinkte afbeelding](/blog/webshop-gelinkte-afbeelding/), het voorbeeld van een productfoto in een webshop

---

## Quiz

<div class="academy-quiz" id="quiz-linkteksten">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> In de zin "Ons retourbeleid lees je hier" staat de link op het woord "hier". Voldoet dat aan succescriterium 2.4.4?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Nee, het woord "hier" mag nooit een link zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Ja, de zin geeft de context, maar in de lijst met links zegt "hier" niets</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Nee, een linktekst moet minstens drie woorden lang zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Ja, korte linkteksten zijn altijd beter</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. De zin staat in dezelfde alinea als de link, dus de context telt mee voor 2.4.4. Wie een lijst met links opvraagt, ziet alleen "hier". Leg de link daarom op "ons retourbeleid".</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is b. Tekst in dezelfde alinea telt als context, dus 2.4.4 is gehaald. Toch helpt het niet in een lijst met links, want daar staat alleen "hier". Een linktekst die op zichzelf duidelijk is, werkt ook in die lijst.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Onder de kop "Jaarverslagen" staan drie links met de tekst "Download". Is dat genoeg voor succescriterium 2.4.4?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Ja, de kop erboven geeft de context</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Nee, een kop boven een rij links telt niet als context</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Ja, als je in het veld "Titel" het jaartal zet</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Nee, want "Download" is een werkwoord</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Als context noemt WCAG dezelfde alinea, dezelfde lijst, dezelfde tabelcel of de bijbehorende kopcel. Een kop boven een rij links hoort daar niet bij. Schrijf bijvoorbeeld "Jaarverslag 2025 (pdf)".</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is b. De context die meetelt, staat dicht bij de link: in dezelfde alinea, dezelfde lijst of dezelfde tabelcel. Een kop boven een rij links hoort daar niet bij, en het veld "Titel" lost het niet op.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Je link heet "Lees meer". In het veld "Titel" van het linkvenster zet je "Lees meer over ons retourbeleid". Lost dat het probleem op?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Ja, de titel maakt de link duidelijk</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Ja, als de titel langer is dan de linktekst</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Nee, de titel zie je alleen als tooltip met de muis; zet de bestemming in de linktekst zelf</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Nee, het veld "Titel" is alleen voor afbeeldingen</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. De titel verschijnt als tooltip als je met de muis over de link gaat. Met het toetsenbord of op een telefoon zie je hem niet. Schrijf "Lees meer over ons retourbeleid" als linktekst.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is c. Een titel is een tooltip voor wie met de muis werkt. Met het toetsenbord of op een telefoon zie je hem niet. Een vage linktekst repareer je in de linktekst zelf.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Een link opent in een nieuw tabblad. Moet je dat volgens WCAG in de linktekst zetten?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Ja, dat is een eis op niveau A</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Ja, dat is een eis op niveau AA</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Nee, het is geen eis, maar het mag als het je lezers helpt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Nee, links in een nieuw tabblad zijn niet toegestaan</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Geen succescriterium op A of AA vraagt het. Techniek G201 noemt het een goede gewoonte, dus doe het als het je lezers helpt.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is c. Geen succescriterium op niveau A of AA vraagt om die aankondiging, en een nieuw tabblad is ook niet verboden. Techniek G201 noemt het aankondigen een goede gewoonte.</p>
</div>
</div>
</fieldset>

</div>

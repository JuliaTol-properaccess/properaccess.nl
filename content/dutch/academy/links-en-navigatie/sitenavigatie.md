---
title: "Sitenavigatie"
section_number: 2
chapter_number: 12
locked: false
description: "Een pagina vind je op minstens twee manieren, en de navigatie staat op elke pagina in dezelfde volgorde."
points: 10
layout: "academy"
---

## Waarom één menu niet genoeg is

Een hoofdmenu werkt goed voor wie het hele scherm overziet. Voor anderen kost het veel tijd.

Wie met een schermvergroter werkt, ziet maar een deel van het scherm. Een groot uitgeklapt menu past dan niet in beeld. Wie een schermlezer gebruikt, hoort de menu-items een voor een, tot de juiste langskomt. Voor beide groepen is een zoekveld vaak sneller. Voor iemand met een cognitieve beperking kan juist een overzichtspagina met alle pagina's prettiger zijn dan doorklikken.

Geen van die manieren werkt voor iedereen. Daarom vraagt WCAG er meer dan één.

Het tweede deel van dit hoofdstuk gaat over voorspelbaarheid. Wie één keer heeft geleerd waar het zoekveld en het menu staan, verwacht ze op de volgende pagina op dezelfde plek. Dat geldt ook voor iemand die inzoomt of een schermlezer gebruikt: die onthoudt waar het menu staat en springt er direct naartoe.

## Dit is werk voor het template

Menu, zoekveld, footer en kruimelpad staan op elke pagina. Ze komen uit het template, en daar los je de fouten uit dit hoofdstuk op. De webredactie kan er in de tekstbewerker niets aan veranderen.

Haal je de navigatie uit één gedeelde partial of component, dan voorkom je de meeste fouten vanzelf. Losse kopieën per paginatype lopen na een tijd uit elkaar.

## Meerdere manieren om een pagina te vinden

Het eerste criterium is **succescriterium 2.4.5 Meerdere manieren**, niveau AA. De Engelse tekst van WCAG 2.2:

> More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.

Je biedt dus minstens twee manieren aan om een pagina te bereiken. De gebruikelijke zijn:

- een hoofdmenu met links naar de hoofdsecties
- een zoekfunctie voor de hele site
- een sitemap: een pagina met links naar alle pagina's
- een footer of overzichtspagina met links naar de belangrijke pagina's

Twee is genoeg, op één voorwaarde: met elk van de twee kom je bij alle pagina's. Een zoekfunctie die oude blogartikelen niet vindt, telt voor die artikelen niet mee.

### De uitzondering: een stap in een proces

Stap 2 van een bestelling of de bevestiging na een formulier hoef je niet via een tweede route vindbaar te maken. Die pagina's bestaan alleen binnen het proces. Gebruik de uitzondering niet voor gewone pagina's die toevallig diep in de site staan.

### Zet de tweede manier in het template

Het zoekveld of de link naar de sitemap moet op elke pagina staan. Zet hem daarom in de gedeelde header of footer.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: zoekveld alleen op de homepage</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

Het zoekformulier staat in het template van de homepage. Wie via een zoekmachine op een productpagina binnenkomt, ziet geen zoekveld en weet niet dat er een is. Voor die pagina telt de zoekfunctie niet als tweede manier.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<header>
  <a href="/">Gemeente Example, naar de homepage</a>
  <nav aria-label="Hoofdmenu">...</nav>
  <form role="search" action="/zoeken">
    <label for="site-search">Zoeken op de site</label>
    <input type="search" id="site-search" name="q">
    <button type="submit">Zoeken</button>
  </form>
</header>
```

Het formulier staat in de header die elke pagina gebruikt. Een link "Zoeken" in het hoofdmenu naar een zoekpagina mag ook.

</div>
</div>

Een sitemap die je als tweede manier gebruikt, krijgt een link in de footer van elke pagina. Staat de link alleen op de contactpagina, dan weet bijna niemand dat de sitemap bestaat.

```html
<footer>
  <nav aria-label="Footer">
    <ul>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/toegankelijkheid">Toegankelijkheid</a></li>
      <li><a href="/sitemap">Sitemap</a></li>
    </ul>
  </nav>
</footer>
```

Het gaat om een HTML-pagina die bezoekers lezen. Het bestand `sitemap.xml` is voor zoekmachines en telt hier niet mee.

### Achter een inlog geldt hetzelfde

Een portaal of Mijn omgeving is ook een verzameling pagina's. Heeft het publieke deel een zoekfunctie en een sitemap, en blijft na het inloggen alleen het portaalmenu over, dan zakt het ingelogde deel op 2.4.5. Bied daar ook een tweede manier, bijvoorbeeld een overzichtspagina van het portaal.

## Navigatie staat overal in dezelfde volgorde

Het tweede criterium is **succescriterium 3.2.3 Consistente navigatie**, niveau AA:

> Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

Drie dingen om op te letten:

- **Relatieve volgorde.** Het gaat om de volgorde van de onderdelen onderling, niet om exact dezelfde plek op het scherm. Er mag een menu-item bijkomen of wegvallen, zolang de rest in dezelfde volgorde blijft.
- **Alles wat terugkomt.** Hoofdmenu, zoekveld, zijmenu en de links in de footer tellen allemaal mee. Ook de links binnen een menu staan steeds in dezelfde volgorde.
- **De gebruiker mag het veranderen.** Kiest de bezoeker zelf een andere volgorde, bijvoorbeeld via een instelling, dan is dat geen fout.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: menu met een andere volgorde per paginatype</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<nav aria-label="Hoofdmenu">
  <ul>
    <li><a href="/producten">Producten</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/over-ons">Over ons</a></li>
  </ul>
</nav>
```

Op de homepage staat "Contact" achteraan, in dit template in het midden. Het menu van de productpagina's is een eigen kopie die anders is gegroeid. WCAG beschrijft dit als failure F66.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<nav aria-label="Hoofdmenu">
  <ul>
    <li><a href="/producten">Producten</a></li>
    <li><a href="/over-ons">Over ons</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

Elke pagina haalt het menu uit dezelfde partial, dus de volgorde is overal gelijk.

</div>
</div>

### Let op CSS die de volgorde omgooit

Met `order` in flexbox of grid zet je een onderdeel visueel ergens anders dan in de code. Doe je dat alleen op een smal scherm, dan staat het zoekveld op de telefoon bovenaan en op de laptop achteraan.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: zoekveld springt op een smal scherm naar voren</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```css
@media (max-width: 600px) {
  .site-nav {
    display: flex;
    flex-direction: column;
  }
  .site-nav__search {
    order: -1;
  }
}
```

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```css
@media (max-width: 600px) {
  .site-nav {
    display: flex;
    flex-direction: column;
  }
}
```

De onderdelen houden op elk scherm de volgorde uit de code.

</div>
</div>

Of een andere volgorde op een ander scherm onder 3.2.3 valt, staat niet letterlijk in het criterium. In onze audits vergelijken we de volgorde wel tussen schermbreedtes, omdat dezelfde bezoeker de site op telefoon en laptop gebruikt. Een `order` die de visuele volgorde losmaakt van de code raakt daarnaast 1.3.2 Betekenisvolle volgorde en 2.4.3 Focusvolgorde. Die komen terug in het hoofdstuk over leesvolgorde en focusvolgorde.

## Dezelfde functie heeft overal dezelfde naam

Het derde criterium kwam al voorbij in het hoofdstuk over links: **succescriterium 3.2.4 Consistente identificatie**, niveau AA.

> Components that have the same functionality within a set of Web pages are identified consistently.

In de navigatie zie je het vooral bij het zoekveld en bij iconen. Heet de knop in de header "Zoeken" en op de nieuwspagina "Vind", dan is het hetzelfde onderdeel met twee namen. Hetzelfde geldt voor een vergrootglas-icoon dat op de ene pagina de toegankelijke naam "Zoeken" heeft en op de andere "Search". Kies één naam en gebruik die in het hele template.

Het omgekeerde is ook een fout: hetzelfde icoon voor twee verschillende functies.

<div class="academy-tip">
<p class="academy-tip__title">Wat buiten dit hoofdstuk valt</p>

Een skiplink om het menu over te slaan hoort bij 2.4.1 Blokken omzeilen. Die staat in het volgende hoofdstuk, Navigatie binnen de pagina. 2.4.8 Locatie vraagt dat je laat zien waar je bent in de site, bijvoorbeeld met een kruimelpad. Dat criterium staat op niveau AAA en valt buiten deze cursus en buiten de wettelijke norm.

</div>

## Zelf testen

1. Schrijf op welke manieren de site biedt om pagina's te vinden. Zijn het er minstens twee?
2. Kies een pagina die niet in het hoofdmenu staat, bijvoorbeeld een oud nieuwsbericht. Vind je die via de zoekfunctie, en via de sitemap?
3. Open een detailpagina diep in de site. Staat het zoekveld of de link naar de sitemap daar ook?
4. Open drie pagina's van verschillende typen naast elkaar. Staan menu, zoekveld en footerlinks in dezelfde volgorde?
5. Maak het venster smal tot het mobiele menu verschijnt. Is de volgorde gelijk aan die op het brede scherm?
6. Log in, als de site een inlog heeft, en herhaal stap 1 en 2.

## Veelgemaakte fouten

Dit zijn de bevindingen die wij in audits op sitenavigatie schrijven:

- **Alleen het hoofdmenu, geen tweede manier.** 2.4.5, impact Serieus.
- **Zoekveld staat alleen op de homepage.** 2.4.5, impact Serieus.
- **De zoekfunctie dekt niet de hele site**, bijvoorbeeld geen oude artikelen. 2.4.5, impact Serieus.
- **De link naar de sitemap is verstopt**, of staat maar op één pagina. 2.4.5, impact Serieus.
- **De ingelogde omgeving heeft maar één manier.** 2.4.5, impact Matig.
- **Het menu staat per pagina in een andere volgorde.** 3.2.3, impact Matig.
- **Dezelfde knop of hetzelfde icoon heeft per pagina een andere naam.** 3.2.4.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **2.4.5** Meerdere manieren | AA | Elke pagina is op minstens twee manieren te vinden, behalve een stap in een proces |
| **3.2.3** Consistente navigatie | AA | Navigatie die op meer pagina's terugkomt, staat steeds in dezelfde relatieve volgorde |
| **3.2.4** Consistente identificatie | AA | Onderdelen met dezelfde functie hebben op de hele site dezelfde naam |

## Verder lezen

- [Links](/academy/links-en-navigatie/links/), het vorige hoofdstuk, met meer over 3.2.4 bij linkteksten

---

## Quiz

<div class="academy-quiz" id="quiz-sitenavigatie">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een site heeft een hoofdmenu en een zoekveld in de header van elke pagina. De zoekfunctie vindt alleen pagina's die ook in het menu staan. Oude nieuwsberichten staan niet in het menu. Voldoet de site aan 2.4.5?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Ja, er zijn twee manieren en ze staan op elke pagina</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Nee, de nieuwsberichten zijn via geen van beide manieren te vinden</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Ja, nieuwsberichten zijn een stap in een proces</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Nee, er moet ook een sitemap zijn</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Twee manieren is genoeg, maar dan moet je met elk van de twee bij alle pagina's komen. Voor de oude nieuwsberichten is er geen enkele route. Breid de zoekindex uit naar de hele site.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is b. Een tweede manier telt alleen voor de pagina's die je ermee kunt vinden. Een sitemap is niet verplicht: een zoekfunctie die de hele site dekt, is ook goed. Een nieuwsbericht is geen stap in een proces.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Stap 3 van een aanvraagformulier is alleen te bereiken via stap 2. Is dat een fout op 2.4.5?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Ja, elke pagina moet op twee manieren te vinden zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Ja, stap 3 moet in de sitemap staan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Nee, een stap in een proces valt onder de uitzondering</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Nee, formulieren vallen buiten WCAG</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. De tekst van 2.4.5 zondert pagina's uit die het resultaat van een proces zijn of een stap erin. Stap 3 bestaat alleen binnen het formulier.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is c. 2.4.5 maakt een uitzondering voor een pagina die "the result of, or a step in, a process" is. Formulieren vallen wel onder WCAG, alleen niet onder deze eis voor een tussenstap.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Op de nieuwspagina staat een extra menu-item "Archief" tussen "Nieuws" en "Contact". De andere items staan in dezelfde volgorde als op de rest van de site. Zakt de pagina op 3.2.3?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Nee, er komt een item bij maar de relatieve volgorde blijft gelijk</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Ja, het menu moet op elke pagina precies dezelfde items hebben</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Ja, "Contact" staat nu een plek verder</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Nee, 3.2.3 gaat alleen over de footer</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="a" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. 3.2.3 vraagt dezelfde relatieve volgorde. Een item mag erbij komen of wegvallen, zolang de rest in dezelfde volgorde blijft staan.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is a. Het criterium spreekt van "the same relative order". Dat "Contact" een plek opschuift, is geen fout: het staat nog steeds na "Nieuws". 3.2.3 geldt voor alle navigatie die terugkomt, ook het hoofdmenu.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> De link naar de sitemap staat alleen op de contactpagina. Wat is de oplossing?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Een <code>sitemap.xml</code> toevoegen aan de root van de site</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>De link naar de sitemap in de footer van elke pagina zetten</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>De sitemap noemen in de toegankelijkheidsverklaring</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Niets, de sitemap bestaat al</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een tweede manier helpt alleen als bezoekers hem vinden. In de gedeelde footer staat de link op elke pagina en op een voorspelbare plek.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is b. Een sitemap die bijna niemand vindt, telt in de praktijk niet als tweede manier. <code>sitemap.xml</code> is voor zoekmachines en helpt bezoekers niet.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> De zoekknop heet in de header "Zoeken" en op de pagina met vacatures "Vind". Beide doorzoeken de hele site. Welk criterium speelt hier?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>2.4.5 Meerdere manieren</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>3.2.3 Consistente navigatie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>3.2.4 Consistente identificatie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Geen, beide namen zijn duidelijk</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Het is hetzelfde onderdeel met dezelfde functie, en 3.2.4 vraagt dat het overal hetzelfde wordt aangeduid. 3.2.3 gaat over de volgorde van de navigatie, niet over de naam.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Het antwoord is c, 3.2.4 Consistente identificatie, niveau AA. Elke naam is op zichzelf duidelijk, maar dezelfde functie hoort op de hele site dezelfde naam te hebben. Kies "Zoeken" en gebruik dat overal.</p>
</div>
</div>
</fieldset>

</div>

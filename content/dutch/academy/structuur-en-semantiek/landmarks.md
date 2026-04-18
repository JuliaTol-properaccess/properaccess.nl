---
title: "Landmarks"
section_number: 1
chapter_number: 5
locked: false
description: "Landmarks verdelen je pagina in herkenbare regio's waartussen schermlezergebruikers kunnen navigeren."
points: 10
layout: "academy"
---

## Wat zijn landmarks?

Landmarks zijn herkenbare regio's op een pagina: de header, de navigatie, de hoofdcontent, de footer. Visueel zie je ze aan de lay-out. Maar voor schermlezergebruikers bestaan ze alleen als de HTML ze correct markeert.

Met landmarks kan een schermlezergebruiker in een oogopslag de structuur van je pagina zien en direct naar de gewenste regio springen. Zonder landmarks moet die gebruiker alles van boven naar beneden doorlopen -- inclusief het volledige menu, de zoekbalk en eventuele banners -- om bij de hoofdcontent te komen.

## Waarom het ertoe doet

WCAG succescriterium 2.4.1 (Blokken omzeilen) vereist dat er een mechanisme is om blokken content die op meerdere pagina's worden herhaald, te omzeilen. Denk aan het hoofdmenu, een zoekbalk en een header die op elke pagina terugkomen.

Een schermlezergebruiker die op elke pagina eerst 40 links in het menu moet doorlopen, raakt gefrustreerd. Toetsenbordgebruikers hebben hetzelfde probleem: ze moeten tab na tab door herhaalde blokken heen drukken.

Er zijn drie technieken die samen het probleem oplossen:

1. **Landmarks** -- verdelen de pagina in navigeerbare regio's
2. **Skip links** -- bieden een snelkoppeling naar de hoofdcontent
3. **Koppenstructuur** -- maakt navigatie via koppen mogelijk

In dit hoofdstuk richten we ons op landmarks en skip links.

## HTML5-landmark-elementen

HTML5 heeft zes elementen die automatisch als landmark worden herkend:

| HTML-element | Impliciete ARIA-rol | Betekenis |
|---|---|---|
| `<header>` | `banner` (op paginaniveau) | Header van de pagina |
| `<nav>` | `navigation` | Navigatieblok |
| `<main>` | `main` | Hoofdcontent van de pagina |
| `<footer>` | `contentinfo` (op paginaniveau) | Footer van de pagina |
| `<aside>` | `complementary` | Gerelateerde content (sidebar) |
| `<section>` | `region` (alleen met label) | Benoemde sectie |

Daarnaast is er `<article>`, maar dat is geen landmark in de strikte zin. Het markeert een op zichzelf staand stuk content (een blogpost, een nieuwsbericht, een commentaar).

<div class="academy-tip">
<p class="academy-tip__title">Let op bij header en footer</p>

Een `<header>` heeft alleen de rol `banner` als het een direct kind is van `<body>` (of van een element zonder sectioneringsrol). Een `<header>` binnen een `<article>` of `<section>` is geen landmark. Hetzelfde geldt voor `<footer>` en de rol `contentinfo`.

</div>

## De basisstructuur

Een typische pagina heeft minimaal deze landmarks:

```html
<body>
  <header>
    <!-- Logo, navigatie, zoekbalk -->
  </header>

  <nav aria-label="Hoofdnavigatie">
    <!-- Menulinks -->
  </nav>

  <main>
    <!-- De unieke content van deze pagina -->
  </main>

  <footer>
    <!-- Contactgegevens, links, copyright -->
  </footer>
</body>
```

### Regels voor landmarks

- **Eén `<main>` per pagina.** De hoofdcontent is altijd uniek. Meerdere `<main>`-elementen zijn niet toegestaan.
- **`<header>` en `<footer>` op paginaniveau** zijn er ook maar één van als landmark.
- **Meerdere `<nav>`-elementen** zijn prima, maar label ze dan zodat ze van elkaar te onderscheiden zijn.
- **Alle zichtbare content** hoort in een landmark te zitten. Content buiten landmarks is voor schermlezergebruikers moeilijk te vinden.

## Meerdere navigatieblokken labelen

Veel pagina's hebben meer dan één navigatieblok: een hoofdmenu, een broodkruimelpad, een footermenu. Als je meerdere `<nav>`-elementen hebt, geef ze dan een label met `aria-label`:

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: meerdere navigatieblokken</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<nav>
  <!-- Hoofdmenu -->
</nav>
<nav>
  <!-- Footerlinks -->
</nav>
```

Een schermlezer zegt twee keer "navigatie" zonder onderscheid.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<nav aria-label="Hoofdnavigatie">
  <!-- Hoofdmenu -->
</nav>
<nav aria-label="Voettekstnavigatie">
  <!-- Footerlinks -->
</nav>
```

Een schermlezer zegt "Hoofdnavigatie, navigatie" en "Voettekstnavigatie, navigatie".

</div>
</div>

## ARIA-landmark-rollen

Soms kun je de HTML5-elementen niet gebruiken -- bijvoorbeeld in een oudere codebase of bij frameworks die de markup beperken. Dan kun je ARIA-rollen als fallback gebruiken:

| ARIA-rol | Equivalent HTML-element |
|---|---|
| `role="banner"` | `<header>` (op paginaniveau) |
| `role="navigation"` | `<nav>` |
| `role="main"` | `<main>` |
| `role="contentinfo"` | `<footer>` (op paginaniveau) |
| `role="complementary"` | `<aside>` |
| `role="region"` | `<section>` (met label) |

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: ARIA-rol vs. HTML5-element</div>
<div class="academy-example__bad">
<p class="academy-example__label">Niet nodig</p>

```html
<header role="banner">
  ...
</header>
```

Redundant. Het `<header>`-element heeft al de impliciete rol `banner`.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<header>
  ...
</header>
```

Het HTML5-element is voldoende. Geen ARIA nodig.

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">De eerste regel van ARIA</p>

Gebruik geen ARIA-rol als er een HTML-element is dat dezelfde semantiek biedt. `<nav>` is altijd beter dan `<div role="navigation">`. ARIA voegt niets toe aan het gedrag -- het voegt alleen metadata toe aan de accessibility tree.

</div>

## Skip links

Een skip link is een link die als eerste focusbare element op de pagina staat en de gebruiker direct naar de hoofdcontent laat springen. Zo hoeft een toetsenbordgebruiker niet door het hele menu te tabben.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: skip link</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<body>
  <a href="#main-content" class="skip-link">
    Ga naar hoofdinhoud
  </a>

  <header>
    <nav aria-label="Hoofdnavigatie">
      <!-- 20+ menulinks -->
    </nav>
  </header>

  <main id="main-content">
    <h1>Paginatitel</h1>
    ...
  </main>
</body>
```

</div>
</div>

De skip link is vaak visueel verborgen tot de gebruiker er naartoe tabt. Een veelgebruikt CSS-patroon:

```css
.skip-link {
  position: absolute;
  left: -9999px;
}

.skip-link:focus {
  position: static;
  left: auto;
}
```

<div class="academy-tip">
<p class="academy-tip__title">Skip link en landmarks vullen elkaar aan</p>

Een skip link helpt toetsenbordgebruikers. Landmarks helpen schermlezergebruikers. Gebruik beide. Ze zijn niet uitwisselbaar: niet elke toetsenbordgebruiker gebruikt een schermlezer, en niet elke schermlezer biedt landmark-navigatie.

</div>

## Schermlezernavigatie in de praktijk

Schermlezergebruikers navigeren op meerdere manieren door een pagina:

- **Landmarklijst** -- alle landmarks op een rij, direct beschikbaar via een sneltoets
- **Koppenlijst** -- alle koppen op een rij
- **Tab-toets** -- springt alleen naar interactieve elementen (links, knoppen, formuliervelden)

Landmarks zorgen ervoor dat de landmarklijst bruikbaar is. Zonder landmarks is die lijst leeg en verliest de gebruiker een belangrijk navigatiemiddel.

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **2.4.1** Blokken omzeilen | A | Landmarks en skip links helpen herhaalde blokken over te slaan |
| **1.3.1** Informatie en relaties | A | Landmarks maken de pagina-indeling programmatisch bepaalbaar |
| **4.1.2** Naam, Rol, Waarde | A | Landmarks met een label (aria-label) hebben een toegankelijke naam |

---

## Quiz

<div class="academy-quiz" id="quiz-landmarks">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een pagina heeft twee <code>&lt;nav&gt;</code>-elementen: een hoofdmenu en een footermenu. Geen van beide heeft een <code>aria-label</code>. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>Er mag maar een <code>&lt;nav&gt;</code> per pagina zijn</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Schermlezergebruikers zien twee "navigatie"-landmarks zonder te weten welke welke is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>De footerlinks horen in een <code>&lt;footer&gt;</code>, niet in een <code>&lt;nav&gt;</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>Er is geen probleem -- het menu staat toch op een andere plek op de pagina</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Zonder label zijn de twee navigatie-landmarks niet van elkaar te onderscheiden. Voeg een <code>aria-label</code> toe zoals "Hoofdnavigatie" en "Voettekstnavigatie".</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Meerdere <code>&lt;nav&gt;</code>-elementen zijn prima, maar ze moeten wel een label hebben zodat schermlezergebruikers ze uit elkaar kunnen houden. Gebruik <code>aria-label</code> om ze te benoemen.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Hoeveel <code>&lt;main&gt;</code>-elementen mag een pagina bevatten?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>Zoveel als nodig -- een per sectie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>Precies een</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>Maximaal drie</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>Geen -- je gebruikt <code>role="main"</code> op een <code>&lt;div&gt;</code></span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Er mag maar een <code>&lt;main&gt;</code> per pagina zijn. De hoofdcontent is per definitie uniek.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een pagina heeft precies een <code>&lt;main&gt;</code>-element. Dat markeert de unieke content van de pagina. Gebruik <code>&lt;section&gt;</code> of <code>&lt;article&gt;</code> om content binnen <code>&lt;main&gt;</code> te verdelen.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Wat is het doel van een skip link?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Het verbergt het navigatiemenu voor schermlezergebruikers</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Het biedt toetsenbordgebruikers een snelkoppeling om herhaalde blokken (zoals het menu) over te slaan</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Het versnelt het laden van de pagina</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Het vervangt de noodzaak voor landmarks</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Een skip link laat toetsenbordgebruikers direct naar de hoofdcontent springen, zonder door het hele menu te tabben. Het is een van de technieken om te voldoen aan SC 2.4.1.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een skip link is een link (vaak visueel verborgen tot je er naartoe tabt) die de gebruiker direct naar de hoofdcontent laat springen. Het vervangt landmarks niet, maar vult ze aan.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Wanneer heeft een <code>&lt;header&gt;</code>-element de ARIA-rol <code>banner</code>?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Altijd</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>Alleen als het een direct kind is van <code>&lt;body&gt;</code> (op paginaniveau)</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Alleen als je <code>role="banner"</code> expliciet toevoegt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>Nooit -- <code>&lt;header&gt;</code> is geen landmark</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. Een <code>&lt;header&gt;</code> binnen een <code>&lt;article&gt;</code> of <code>&lt;section&gt;</code> is geen landmark. Alleen op paginaniveau krijgt het de impliciete rol <code>banner</code>.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een <code>&lt;header&gt;</code> heeft alleen de rol <code>banner</code> als het op paginaniveau staat (direct kind van <code>&lt;body&gt;</code>). Binnen een <code>&lt;article&gt;</code> of <code>&lt;section&gt;</code> is het geen landmark.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="5">
<legend class="academy-quiz__q-text"><strong>Vraag 5.</strong> In de code staat: <code>&lt;div role="navigation"&gt;</code>. Wat is het beste advies?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q5" value="a" />
<span>Prima -- ARIA-rollen zijn betrouwbaarder dan HTML-elementen</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="b" />
<span>Vervang het door <code>&lt;nav&gt;</code> -- gebruik het HTML-element als dat beschikbaar is</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="c" />
<span>Voeg ook <code>tabindex="0"</code> toe zodat het focusbaar wordt</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q5" value="d" />
<span>Verwijder de rol -- <code>&lt;div&gt;</code> hoort geen rol te hebben</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. De eerste regel van ARIA: gebruik geen ARIA als er een HTML-element is dat dezelfde semantiek biedt. <code>&lt;nav&gt;</code> is altijd de betere keuze dan <code>&lt;div role="navigation"&gt;</code>.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Gebruik <code>&lt;nav&gt;</code> in plaats van <code>&lt;div role="navigation"&gt;</code>. HTML-elementen bieden dezelfde semantiek maar zijn robuuster en beter ondersteund. Dat is de eerste regel van ARIA.</p>
</div>
</div>
</fieldset>

</div>

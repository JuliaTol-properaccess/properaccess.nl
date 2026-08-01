---
title: 'SC 4.1.2 - Wat betekent "Naam, rol, waarde"'
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
description: "WCAG 4.1.2 voor ontwikkelaars: naam, rol en waarde uitgelegd met veel code. Goede en foute voorbeelden met semantische HTML en ARIA, plus testtips."
aliases:
  - /sc-4-1-2-wat-betekent-naam-rol-waarde/
---

Succescriterium 4.1.2 (Naam, rol, waarde) is het criterium waar je als ontwikkelaar het meest direct invloed op hebt. Het zegt dat elk interactief onderdeel dat je bouwt, programmatisch drie dingen moet prijsgeven: een **naam** (wat is het), een **rol** (wat voor soort onderdeel is het) en waar van toepassing een **waarde of status** (in welke stand staat het). Hulpsoftware zoals een screenreader leest die drie dingen uit de accessibility tree. Klopt er een van niet, dan hoort je gebruiker iets verkeerds of helemaal niets.

De kern in één zin: gebruik het juiste HTML-element, geef het een duidelijke naam, en houd de status synchroon. ARIA is het vangnet, niet het startpunt.

## Rol: begin bij semantische HTML

De rol vertelt de browser en de screenreader wat voor onderdeel iets is: een knop, een link, een selectievakje, een kop. Native HTML-elementen brengen hun rol, toetsenbordgedrag en focus gratis mee. Namaak met een `div` doet dat niet.

Fout: een `div` die een knop nabootst. Geen rol, geen focus, geen toetsenbordbediening.

```html
<div class="btn" onclick="verstuur()">Verstuur</div>
```

Goed: een echt `button`-element. Rol `button`, focusbaar, reageert op Enter en spatie, en zit vanzelf in de tabvolgorde.

```html
<button type="button" onclick="verstuur()">Verstuur</button>
```

Moet je toch een niet-semantisch element gebruiken, dan moet je de rol, de focus en het toetsenbordgedrag allemaal zelf toevoegen. Dit is de minimale reparatie, en meteen het bewijs waarom een `button` bijna altijd beter is:

```html
<div
  role="button"
  tabindex="0"
  onclick="verstuur()"
  onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();verstuur()}"
>
  Verstuur
</div>
```

Veelgemaakte fout: een rol toekennen die niet klopt met het gedrag. Een link is geen knop.

```html
<!-- Fout: een link die zich als knop gedraagt -->
<a href="#" role="button" onclick="openModal()">Open venster</a>

<!-- Goed: gebruik waarvoor het bedoeld is -->
<button type="button" onclick="openModal()">Open venster</button>
<!-- Navigeer je echt naar een andere plek? Dan een gewone link -->
<a href="/contact">Neem contact op</a>
```

## Naam: de toegankelijke naam

De toegankelijke naam (accessible name) is de tekst die een screenreader voorleest bij een onderdeel. De browser berekent die naam volgens een vaste volgorde. Vereenvoudigd:

1. `aria-labelledby` (verwijst naar tekst elders op de pagina)
2. `aria-label` (letterlijke tekst op het element)
3. de eigen inhoud of native koppeling: de tekst van een knop, een gekoppeld `label`, of de `alt` van een afbeelding
4. `title` en `placeholder` als laatste redmiddel. Gebruik dit niet als enige naam: `title` wordt wisselend voorgelezen en is onzichtbaar op touchapparaten, en een placeholder is geen label.

Een knop met zichtbare tekst heeft al een naam. Niets extra's nodig:

```html
<button type="button">Bewaar concept</button>
```

Een icoonknop zonder tekst is de klassieker die misgaat. Zonder naam kondigt een screenreader alleen "knop" aan.

```html
<!-- Fout: naamloze icoonknop -->
<button type="button">
  <svg><use href="#icon-search"></use></svg>
</button>

<!-- Goed: aria-label op de knop, icoon verborgen voor hulpsoftware -->
<button type="button" aria-label="Zoeken">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
</button>

<!-- Ook goed: visueel verborgen tekst (werkt ook als CSS niet laadt) -->
<button type="button">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
  <span class="sr-only">Zoeken</span>
</button>
```

Invoervelden hebben een gekoppeld label nodig. Let op wat een `placeholder` hier wel en niet doet, want dat wordt vaak verkeerd geciteerd. Een placeholder levert wél een naam op: hij staat als laatste in de berekening hierboven, onder `title`. Dat attribuut blijft ook gewoon staan terwijl iemand typt, dus die naam verdwijnt niet. Op dit succescriterium slaagt zo'n veld dus meestal.

De schade zit bij andere criteria. De zichtbare voorbeeldtekst is weg zodra het veld gevuld is, dus wie halverwege het formulier terugkijkt, ziet niet meer wat er in de eerdere velden moest. Dat is [SC 3.3.2 Labels en instructies](/blog/sc-3-3-2-wat-betekent-labels-en-instructies/): onder dat criterium is een placeholder geen label. Daar komt bij dat placeholdertekst vaak te weinig contrast heeft voor [SC 1.4.3](/blog/sc-1-4-3-wat-betekent-contrast-minimum/), en dat er geen `label` is om op te klikken, waardoor het klikgebied kleiner is dan nodig.

```html
<!-- Fout: alleen een placeholder -->
<input type="email" placeholder="E-mailadres">

<!-- Goed: expliciet gekoppeld label via for/id -->
<label for="email">E-mailadres</label>
<input type="email" id="email">

<!-- Ook goed: label om het veld heen -->
<label>
  E-mailadres
  <input type="email">
</label>
```

`aria-labelledby` gebruik je als de naam al ergens zichtbaar op de pagina staat. Je kunt meerdere id's combineren:

```html
<h2 id="titel">Facturen</h2>
<button type="button" aria-labelledby="titel actie" id="actie-knop">
  <span id="actie">Exporteren</span>
</button>
<!-- Screenreader leest: "Facturen Exporteren, knop" -->
```

Een link met alleen een afbeelding ontleent zijn naam aan de `alt` van die afbeelding. Leeg of ontbrekend, en de link heet "link".

```html
<!-- Fout: geen naam, screenreader zegt alleen "link" -->
<a href="/"><img src="logo.svg" alt=""></a>

<!-- Goed: de alt beschrijft de bestemming, niet het plaatje -->
<a href="/"><img src="logo.svg" alt="Home, Proper Access"></a>
```

Let op de valkuil met `aria-label` op elementen die de rol niet dragen. `aria-label` werkt niet op een gewone `div` of `span` zonder rol, en niet op onbepaalde inline-elementen. Zet het op een element met een rol (een knop, een link, een landmark) of op een element dat native een naam accepteert.

```html
<!-- Fout: aria-label wordt genegeerd op een span zonder rol -->
<span aria-label="Sluiten" onclick="close()">×</span>

<!-- Goed -->
<button type="button" aria-label="Sluiten">×</button>
```

## Waarde en status: houd ARIA synchroon met de UI

Bij onderdelen die van stand wisselen moet de status ook programmatisch kloppen. Een knop die er "ingedrukt" uitziet maar dat nergens meldt, is voor een screenreadergebruiker gewoon een knop. De grootste fout hier is niet het ontbreken van ARIA, maar ARIA die niet meebeweegt met de werkelijke stand.

Een schakelknop (toggle) gebruikt `aria-pressed`. Werk de waarde bij in JavaScript, niet alleen de klasse:

```html
<button type="button" aria-pressed="false" id="fav">Favoriet</button>
```

```js
const knop = document.getElementById('fav');
knop.addEventListener('click', () => {
  const actief = knop.getAttribute('aria-pressed') === 'true';
  knop.setAttribute('aria-pressed', String(!actief)); // status blijft synchroon
});
```

Een in- en uitklapbaar onderdeel (disclosure) gebruikt `aria-expanded`, en wijst met `aria-controls` naar wat het opent:

```html
<!-- Fout: verandert visueel wel, maar meldt de stand niet -->
<button type="button" class="accordion" onclick="toggle()">Verzendopties</button>
<div id="panel" hidden>...</div>

<!-- Goed -->
<button type="button" aria-expanded="false" aria-controls="panel" id="acc">
  Verzendopties
</button>
<div id="panel" hidden>...</div>
```

```js
const acc = document.getElementById('acc');
const panel = document.getElementById('panel');
acc.addEventListener('click', () => {
  const open = acc.getAttribute('aria-expanded') === 'true';
  acc.setAttribute('aria-expanded', String(!open));
  panel.hidden = open;
});
```

Een aangepast selectievakje of switch krijgt de bijbehorende rol en `aria-checked`. Bouw je een switch, gebruik dan `role="switch"`:

```html
<!-- Fout: ziet eruit als een schakelaar, maar rol en status ontbreken -->
<div class="switch" onclick="toggle(this)"></div>

<!-- Goed -->
<button type="button" role="switch" aria-checked="false" id="notif">
  Meldingen
</button>
```

Bij native formuliervelden zit de waarde al goed, mits je de `value`-property gebruikt en niet alleen visueel iets verandert. Bij een aangepaste schuifregelaar (slider) moet je de waarde expliciet melden:

```html
<div
  role="slider"
  tabindex="0"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="40"
  aria-valuetext="40 procent"
  aria-label="Volume"
></div>
```

Werk bij zo'n slider `aria-valuenow` bij op elke stap, anders hoort de gebruiker steeds dezelfde waarde terwijl de regelaar beweegt.

## Veelgemaakte fouten op een rij

- Een `div` of `span` met een `onclick` in plaats van een `button`. Geen rol, geen focus, geen toetsenbord.
- Een icoonknop of icoonlink zonder `aria-label` of visueel verborgen tekst.
- Een `placeholder` als vervanging voor een `label`. Op dit criterium slaagt het veld meestal, want de placeholder levert een naam op. De fout valt onder [SC 3.3.2](/blog/sc-3-3-2-wat-betekent-labels-en-instructies/).
- `aria-label` op een element zonder rol (een kale `span` of `div`).
- `aria-labelledby` of `aria-controls` die verwijst naar een `id` die niet bestaat.
- Dezelfde `id` twee keer op de pagina, waardoor koppelingen stuk gaan.
- `aria-expanded`, `aria-pressed` of `aria-checked` die in de HTML staat maar in JavaScript nooit wordt bijgewerkt.
- ARIA toevoegen aan een native element dat de rol al heeft, bijvoorbeeld `role="button"` op een `<button>`.

## Hoe test je naam, rol en waarde?

Open de accessibility tree in je browser. In Chrome DevTools zie je onder het tabblad Accessibility per element de berekende Name, Role en de states. Vergelijk dat met wat je visueel verwacht.

Test daarna met je toetsenbord: kun je elk interactief onderdeel bereiken met Tab, en bedienen met Enter of spatie? En luister met een screenreader (NVDA op Windows, VoiceOver op macOS) of de naam, de rol en de status kloppen bij wat je ziet.

### Onze gratis WCAG Radar

Wil je dit snel op je eigen pagina bekijken zonder DevTools open te klikken, gebruik dan onze gratis [WCAG Radar](/tools/wcag-radar/). Het is een bookmarklet die je op elke pagina draait, ook op localhost. De radar toont live de ARIA-rollen en -attributen, markeert gebroken referenties naar id's die niet bestaan, vindt dubbele id's, laat de tabvolgorde zien en forceert een zichtbare focus. Zo zie je in één oogopslag waar naam, rol of waarde niet kloppen. De code draait volledig in je eigen browser en er wordt niets verstuurd.

Wil je opzoeken welke rol welke states en properties verwacht, dan helpt onze [ARIA-rollen en -attributen referentie](/tools/aria-referentie/) je verder.

## Conclusie

Naam, rol en waarde zijn geen ARIA-oefening, maar een gewoonte. Kies het element dat de rol al draagt, geef het een naam die klopt met wat je ziet, en werk de status bij op dezelfde plek waar je de UI verandert. Doe je dat consistent, dan voldoet je interface aan WCAG 4.1.2 en werkt hij voor iedereen die met een screenreader of alleen een toetsenbord navigeert.

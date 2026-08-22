---
title: "ARIA-rollen en -attributen: wanneer je ze nodig hebt en wanneer niet"
date: 2026-08-01
slug: "aria-rollen-en-attributen"
translationKey: "aria-rollen-attributen"
categories:
  - "wcag-uitgelegd"
tags:
  - "aria"
  - "webdeveloper"
  - "semantiek"
description: "ARIA verandert wat hulpsoftware voorleest, niet wat een element doet. Welke rollen en attributen je nodig hebt, de vier fouten die wij het vaakst vinden, en hoe je het test."
keywords:
  - ARIA rollen
  - aria attributen
  - wanneer gebruik je ARIA
  - aria-hidden focusbaar
  - gebroken aria-labelledby
  - eerste regel van ARIA
---

ARIA is de enige technologie in webtoegankelijkheid waarmee je een pagina makkelijk slechter maakt dan hij zonder was. Een verkeerde rol vertelt hulpsoftware iets dat niet klopt, en de gebruiker vertrouwt daarop.

De kern in 1 zin: **ARIA verandert wat hulpsoftware voorleest, nooit wat een element doet.** Zet `role="button"` op een `div` en er verandert niets aan de focus, het toetsenbordgedrag of de klik. Je hebt alleen tegen de schermlezer gezegd dat het een knop is, en die belofte moet je nu zelf waarmaken.

Dit artikel is voor ontwikkelaars. Voor de bredere uitleg over hoe een element aan zijn naam komt, hebben we een [apart artikel over de toegankelijke naam](/blog/wat-is-een-toegankelijke-naam/).

## De eerste regel van ARIA

De officiële regel uit de [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) luidt: gebruik geen ARIA als er een HTML-element bestaat dat doet wat je nodig hebt.

Native HTML brengt 4 dingen gratis mee:

- de rol
- de toegankelijke naam, uit de eigen inhoud of een gekoppeld label
- het toetsenbordgedrag
- de status, bijvoorbeeld aangevinkt of uitgeschakeld

ARIA levert alleen het eerste en soms het vierde. De rest bouw en onderhoud je zelf, in elke browser en met elke schermlezer.

```html
<!-- 4 dingen die je zelf moet regelen -->
<div role="button" tabindex="0"
     onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();verstuur()}"
     onclick="verstuur()">Verstuur</div>

<!-- 0 dingen -->
<button type="button" onclick="verstuur()">Verstuur</button>
```

Dat betekent niet dat ARIA fout is. Voor patronen waar HTML geen element voor heeft, is het precies het juiste gereedschap: tabbladen, een combobox met suggesties, een boomstructuur, een statusmelding. Daar bestaat geen native variant van.

## Waar ARIA uit bestaat

**Rollen** zeggen wat iets is: `role="tab"`, `role="dialog"`, `role="status"`. Eén rol per element. Een rol vervangt de native rol, dus `role="button"` op een link haalt de linksemantiek weg zonder knopgedrag terug te geven.

**Properties** zeggen iets dat niet verandert tijdens het gebruik: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-required`, `aria-controls`.

**States** zeggen iets dat wél verandert: `aria-expanded`, `aria-checked`, `aria-selected`, `aria-invalid`, `aria-disabled`, `aria-busy`.

Het verschil tussen die laatste twee is waar de meeste bugs zitten. Een property zet je één keer. Een state moet meebewegen met de werkelijkheid, en dat vergeten teams stelselmatig.

## De 4 fouten die wij het vaakst vinden

Dit zijn precies de 4 dingen die de check **ARIA-rollen en -attributen** in de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) markeert, want die is erop gebouwd.

### 1. Gebroken verwijzingen naar id's die niet bestaan

`aria-labelledby`, `aria-describedby` en `aria-controls` wijzen naar een id. Bestaat die id niet, dan gebeurt er niets. Geen foutmelding, geen waarschuwing in de console, alleen een element zonder naam.

```html
<!-- De id is bij een refactor hernoemd naar #dialog-title -->
<div role="dialog" aria-labelledby="modal-title">
```

Dit is de stilste fout van de vier. Er staat keurige, doordachte code en het element heet nergens naar. Kopieer je een component naar een tweede plek op dezelfde pagina, dan krijg je bovendien 2 keer dezelfde id en wint de eerste.

### 2. Onbekende rollen

Een typefout in een rol maakt hem niet ongeldig-met-waarschuwing, maar gewoon onzichtbaar. De browser negeert een rol die hij niet kent en valt terug op de native rol, of op niets.

```html
<div role="navigation">   <!-- goed -->
<div role="nav">          <!-- bestaat niet, wordt genegeerd -->
<div role="tabpanel">     <!-- goed -->
<div role="tab-panel">    <!-- bestaat niet -->
```

Let ook op rollen die wel bestaan maar iets anders doen dan je denkt. `role="application"` zet bijvoorbeeld de normale leesmodus van een schermlezer uit, waarna alle standaard sneltoetsen niet meer werken. Die zie je zelden bewust gebruikt worden.

### 3. Een rol zonder het attribuut dat erbij hoort

Sommige rollen zijn onaf zonder hun state. Een `role="checkbox"` zonder `aria-checked` wordt aangekondigd als selectievakje waarvan de stand onbekend is. De gebruiker weet dus niet of hij aan of uit staat, en dat is precies waar een selectievakje voor dient.

| Rol | Verplicht attribuut |
| --- | --- |
| `checkbox` | `aria-checked` |
| `radio` | `aria-checked` |
| `switch` | `aria-checked` |
| `slider` | `aria-valuenow` |
| `scrollbar` | `aria-valuenow` |
| `combobox` | `aria-expanded` |

En dan de variant die geen enkele scan vindt: het attribuut staat er wel, maar het beweegt niet mee. Een accordeon met `aria-expanded="false"` hardcoded in het sjabloon opent prima en blijft "ingeklapt" melden. Zet de state in dezelfde functie die de klasse omzet, niet ernaast.

```js
knop.addEventListener("click", function () {
  var open = knop.getAttribute("aria-expanded") === "true";
  knop.setAttribute("aria-expanded", String(!open));
  paneel.hidden = open;
});
```

### 4. `aria-hidden="true"` op focusbare inhoud

Dit is de vervelendste van de vier, want hij maakt een pagina kapot op een manier die je met de muis nooit merkt. `aria-hidden="true"` haalt een element uit de toegankelijkheidsboom, maar niet uit de tabvolgorde. Een toetsenbordgebruiker landt dus op iets dat voor de schermlezer niet bestaat: de focus verdwijnt in het niets.

```html
<!-- Fout: de knop is nog steeds focusbaar -->
<div aria-hidden="true">
  <button type="button">Sluiten</button>
</div>
```

Je ziet dit vooral bij carrousels waarvan de niet-actieve slides verborgen zijn, bij offcanvas-menu's en bij modals waarvan de achtergrondpagina wordt weggezet. De oplossing is het element ook echt onbereikbaar maken, met `inert`, met `display: none` of door de focusbare kinderen op `tabindex="-1"` te zetten.

Zet `aria-hidden` verder nooit op een element dat focus kan krijgen, en ook niet op de `body` of op een landmark waar nog inhoud in staat.

## Nog 3 valkuilen zonder eigen check

**`aria-label` op een element zonder rol doet niets.** Een kale `div` of `span` accepteert geen naam. Zet het op een element met een rol.

**ARIA verandert nooit het gedrag.** `role="button"` op een `<a href>` haalt de linksemantiek weg en geeft geen spatiebalk-bediening terug. `aria-disabled="true"` meldt "uitgeschakeld" en blokkeert de klik niet.

**`role="presentation"` en `role="none"` verwijderen semantiek.** Nuttig op een opmaaktabel, schadelijk op alles waar nog betekenis in zit. Ze werken niet op focusbare elementen.

## Zo test je het

Zet op het tabblad **Developer** van de gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) de check **ARIA-rollen en -attributen** aan. Je ziet per element alle rollen en aria-attributen, en de 4 fouten hierboven worden als fout gemarkeerd. Alles draait in je eigen browser, ook op localhost en achter een login.

Loop daarna deze 3 dingen na die de radar niet voor je kan beoordelen:

1. **Klopt de rol met wat het element doet?** Een `role="tab"` op iets dat navigeert naar een andere pagina is een geldige rol op de verkeerde plek.
2. **Beweegt elke state mee?** Klap open, vink aan, sleep de slider, en kijk in het inspectiepaneel of het attribuut verandert.
3. **Klinkt het ook goed?** Zet een schermlezer aan en luister. Een technisch correcte combinatie kan alsnog onbegrijpelijk klinken.

Weet je niet zeker welke states en properties bij een rol horen, dan zoek je het op in onze [ARIA-rollen en -attributen referentie](/tools/aria-referentie/). Daar staat per rol wat hij betekent, welke attributen hij ondersteunt, welk HTML-element hetzelfde doet en een codevoorbeeld.

Wil je weten of je het echt doorhebt, doe dan onze [toegankelijkheidsquiz voor developers](/tools/quiz-developers/). Die gaat verder dan ARIA en kost een paar minuten.

## Veelgestelde vragen

### Is ARIA verplicht om aan WCAG te voldoen?

Nee. Native HTML brengt naam, rol en status al mee, en veel sites voldoen aan [4.1.2 Naam, rol, waarde](/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/) zonder één ARIA-attribuut. ARIA is er voor patronen die HTML niet heeft.

### Mag ik `aria-label` op een link zetten die al tekst heeft?

Alleen als de zichtbare tekst in de naam voorkomt. Vervang je hem, dan werkt spraakbesturing niet meer, want de gebruiker zegt wat hij ziet. Dat is [2.5.3 Label in naam](/blog/sc-2-5-3-wat-betekent-label-in-naam/).

### Wat is het verschil tussen `aria-hidden` en `hidden`?

`hidden` verbergt het element voor iedereen en haalt het uit de tabvolgorde. `aria-hidden="true"` verbergt het alleen voor hulpsoftware en laat het zichtbaar en focusbaar. Gebruik `aria-hidden` voor decoratieve iconen naast een tekstlabel, niet om inhoud weg te halen.

### Is `aria-disabled` hetzelfde als `disabled`?

Nee. `disabled` blokkeert de bediening en haalt het element uit de tabvolgorde. `aria-disabled="true"` meldt alleen de status. Dat is soms juist wat je wilt, want een uitgeschakelde knop die nog focus krijgt is beter vindbaar, maar dan moet je de actie zelf blokkeren.

### Hoeveel rollen mag een element hebben?

Eén. Je mag er meerdere opschrijven, gescheiden door spaties, maar de browser gebruikt de eerste die hij kent. Dat is een fallback-mechanisme, geen manier om rollen te combineren.

## Samenvatting

- ARIA verandert wat hulpsoftware voorleest, nooit wat een element doet.
- Bestaat er een HTML-element dat het al kan, gebruik dat dan.
- De 4 fouten die wij het vaakst vinden: gebroken id-verwijzingen, onbekende rollen, een rol zonder verplicht attribuut, en `aria-hidden` op focusbare inhoud.
- Een state die niet meebeweegt is erger dan geen state, want hulpsoftware meldt dan iets dat niet klopt.
- Controleer met **ARIA-rollen en -attributen** in de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar), zoek rollen op in de [ARIA-referentie](/tools/aria-referentie/) en test je kennis met de [quiz voor developers](/tools/quiz-developers/).

Of een rol klopt met wat het onderdeel doet, kan geen enkele scan bepalen. Dat is de reden dat wij elk zelfgemaakt component met de hand nalopen. Wil je weten hoe jouw componenten ervoor staan? Vraag een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan.

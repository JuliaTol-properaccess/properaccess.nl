---
title: "Text Spacing: waarom vaste hoogtes je code breken (WCAG 1.4.12)"
date: 2026-02-17
seo_description: "Leer waarom containers met vaste hoogtes tekst afknippen bij aangepaste regelafstand. Met code-voorbeelden en een test-bookmarklet."
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-12"
description: "WCAG: de tekstafstand aanpassen om hun leeservaring te verbeteren. Hoe test je dit SC met Stylus. Veelvookomende fouten en oplossigen."
keywords:
  - WCAG 1.4.12
  - leesbaarheid vergroten WCAG
  - hoe test je SC 1.4.12
seo_keywords:
  [
    "WCAG 1.4.12",
    "text spacing",
    "line-height",
    "toegankelijke CSS",
    "overflow hidden",
    "vaste hoogte container",
    "dyslexie tekstopmaak",
    "EAA compliance",
  ]
---

# Text Spacing: waarom je tekst nooit mag vastzetten in een vaste hoogte (WCAG 1.4.12)

Je hebt net die perfecte hero-sectie gebouwd. Exacte hoogte van 400px, tekst keurig gecentreerd, pixel-perfect zoals in het ontwerp. Merkte je dat het laatste woord van de titel ineens is verdwenen? Welkom bij WCAG succescriterium 1.4.12.

Een gebruiker met dyslexie past de regelafstand aan naar 1.5x. Iemand met slechtziendheid verhoogt de woordafstand naar 0.16em. En jouw `height: 400px` met `overflow: hidden`? Die kapt hun tekst gewoon af. Oeps.

## Waarom is dit relevant?

Sinds juni 2025 is de European Accessibility Act (EAA) van kracht. Webshops, banken, ticketsites — allemaal verplicht om te voldoen aan WCAG 2.1 niveau AA. En daar valt [SC 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) onder.

**De regels zijn simpel:**
Gebruikers moeten de volgende teksteigenschappen kunnen aanpassen zonder dat er content verdwijnt, overlapt, of onleesbaar wordt:

- **Regelhoogte** tot minstens 1.5x de lettergrootte
- **Alinea-afstand** tot minstens 2x de lettergrootte
- **Letterafstand** tot minstens 0.12x de lettergrootte
- **Woordafstand** tot minstens 0.16x de lettergrootte

Let op: je hoeft deze waarden **niet standaard** toe te passen. Het gaat erom dat je website niet breekt als een gebruiker dat doet.

**Belangrijk: dit geldt niet voor alle technologieën.**

SC 1.4.12 begint met een voorwaarde die vaak over het hoofd wordt gezien: <span lang="en"> _In content implemented using markup languages that support the following text style properties."_</span>

Met andere woorden: dit criterium is alleen van toepassing als de onderliggende technologie CSS-tekststijlen ondersteunt. Een standaard HTML/CSS-website? Absoluut. Maar een framework als **Flutter** rendert de volledige UI in een `<canvas>`-element in de browser. Canvas ondersteunt geen CSS text style properties — een gebruiker kan geen regelafstand of woordafstand aanpassen via een browser-extensie of eigen stylesheet, omdat er simpelweg geen tekst is die de browser als tekst herkent.

In dat geval is SC 1.4.12 technisch niet van toepassing. Dat ontdekte ik onlangs bij het auditen van een Flutter-website. Betekent dat dat Flutter-sites "veilig" zijn? Nee — ze kunnen hun eigen toegankelijkheidsproblemen (denk aan schermlezersondersteuning en semantiek) hebben. Maar specifiek voor text spacing valt het buiten de scope van dit criterium.

**Voor wie is dit belangrijk?**

- **Mensen met dyslexie** — meer woordafstand en regelafstand maakt tekst veel beter leesbaar
- **Slechtzienden** — vergrote letter- en regelafstand helpt enorm bij het onderscheiden van woorden
- **Ouderen** — dicht op elkaar staande tekst is moeilijker te verwerken
- **Mensen met cognitieve beperkingen** — meer witruimte = minder cognitieve overload

Kortom: dit is geen klein groepje. Het gaat om miljoenen mensen die jouw website willen gebruiken.

## De grootste boosdoener: vaste hoogtes + overflow hidden

Dit is het probleem dat ik het vaakst tegenkom:

```css
/* ❌ FOUT */
.hero {
  height: 400px;
  overflow: hidden;
}

.button {
  height: 48px;
  line-height: 48px;
  overflow: hidden;
}

.card-title {
  height: 60px;
  overflow: hidden;
}
```

Wat gebeurt er als een gebruiker de regelafstand aanpast naar 1.5x?

Stel je voor: je hebt een titel van 32px. Standaard line-height is misschien 1.2 (38.4px). Jouw container is 60px hoog — precies genoeg voor twee regels.

Nu past de gebruiker aan naar line-height 1.5 (48px). Ineens is een regel 48px hoog. Twee regels? 96px. Maar jouw container? Nog steeds 60px. Met `overflow: hidden` erbovenop.

**Resultaat:** De helft van de titel is verdwenen. Zomaar weg. Met de billen bloot dus, maar dat is het waard als het om toegankelijkheid gaat.

## Hoe test je dit?

De makkelijkste manier is met een bookmarklet die alle vier de spacing-waarden toepast. Voeg deze code toe als bookmark:

```javascript
javascript: (function () {
  var s = document.createElement("style");
  s.innerHTML =
    "*{line-height:1.5!important;letter-spacing:0.12em!important;word-spacing:0.16em!important;}p{margin-bottom:2em!important;}";
  document.head.appendChild(s);
})();
```

Klik op de bookmark, en je ziet direct waar je website breekt. Kijk uit naar:

- Tekst die verdwijnt of wordt afgeknipt
- Content die over andere content heen valt
- Knoppen waar de tekst uit loopt
- Tooltips of dropdowns die onleesbaar worden
- Navigatie-elementen die overlappen

## Concrete voorbeelden: fout vs. goed

### Voorbeeld 1: Hero-sectie

```css
/* ❌ FOUT */
.hero {
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  font-size: 48px;
  line-height: 1.2; /* standaard waarde */
}
```

**Wat er misgaat:** Bij line-height 1.5 wordt de tekst afgeknipt. De container groeit niet mee.

```css
/* ✅ GOED */
.hero {
  min-height: 400px; /* min-height i.p.v. height */
  overflow: visible; /* of helemaal weglaten */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem; /* extra ruimte voor als het meeggroeit */
}

.hero h1 {
  font-size: 48px;
  /* geen vaste line-height — laat gebruiker bepalen */
}
```

**Waarom dit werkt:** De container groeit mee met de content. `min-height` zorgt voor een minimum, maar laat groei toe.

### Voorbeeld 2: Knoppen

```css
/* ❌ FOUT */
.button {
  height: 48px;
  line-height: 48px; /* tekst verticaal centreren */
  overflow: hidden;
  white-space: nowrap;
}
```

**Wat er misgaat:** Bij grotere woordafstand loopt de tekst uit de knop. Bij grotere regelafstand wordt tekst afgeknipt.

```css
/* ✅ GOED */
.button {
  min-height: 48px; /* minimale hoogte behouden */
  padding: 0.75rem 1.5rem; /* ruimte rondom tekst */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* geen vaste line-height */
}
```

**Waarom dit werkt:** Padding zorgt voor verticale centrering én ruimte om te groeien. Flexbox houdt alles netjes gecentreerd, wat er ook gebeurt.

### Voorbeeld 3: Card met titel

```css
/* ❌ FOUT */
.card-title {
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

**Wat er misgaat:** Bij aangepaste regelafstand wordt tekst nog steeds afgeknipt, maar nu op een vreemde manier. Line-clamp houdt geen rekening met custom spacing.

```css
/* ✅ GOED */
.card-title {
  /* geen vaste hoogte */
  /* line-clamp kan je behouden als je wilt beperken tot 2 regels,
     maar NIET in combinatie met overflow: hidden op een vaste container */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* geef wat meer ruimte */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card {
  /* of laat de card meegroeien */
  display: flex;
  flex-direction: column;
}
```

**Waarom dit beter is:** Line-clamp zelf is geen probleem, maar combineer het niet met een vaste hoogte op de parent. Laat de card zelf meegroeien als dat nodig is.

### Voorbeeld 4: Navigatiemenu

```css
/* ❌ FOUT */
.nav-item {
  height: 60px;
  line-height: 60px;
  overflow: hidden;
}
```

**Wat er misgaat:** Bij grotere letter- of woordafstand loopt tekst uit het menu, of wordt afgeknipt.

```css
/* ✅ GOED */
.nav-item {
  min-height: 60px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}
```

**Waarom dit werkt:** Flexbox + padding = je vrienden. De container past zich aan aan de content, niet andersom.

## Tooltips en dropdowns: een speciale categorie

Tooltips zijn lastig. Ze zijn vaak absoluut gepositioneerd met een vaste breedte. Bij grotere woordafstand wordt de tekst breder, en kan buiten de tooltip vallen.

```css
/* ❌ FOUT */
.tooltip {
  position: absolute;
  width: 200px;
  height: 40px; /* vaste hoogte */
  overflow: hidden;
  white-space: nowrap;
}
```

**Wat er misgaat:** Tekst loopt uit de tooltip, of wordt afgeknipt. Gebruiker mist cruciale informatie.

```css
/* ✅ GOED */
.tooltip {
  position: absolute;
  max-width: 250px; /* max-width i.p.v. width */
  min-height: 40px; /* minimaal, maar mag groeien */
  padding: 0.5rem 0.75rem;
  /* overflow: visible of weglaten */
  white-space: normal; /* laat tekst wrappen */
}
```

**Waarom dit werkt:** De tooltip groeit mee met de tekst. `max-width` zorgt dat hij niet te breed wordt, maar `min-height` laat verticale groei toe.

## Veelgemaakte denkfouten

### "Maar mijn ontwerp is pixel-perfect!"

Mooi. Maar je ontwerp is gemaakt voor één specifieke configuratie. Zodra een gebruiker zijn eigen instellingen gebruikt, moet je ontwerp meebewegen. Dat is geen bug, dat is een feature.

### "Kan ik dit niet oplossen met max-height?"

`max-height` is beter dan `height`, maar lost het probleem niet op als de tekst die max-height overschrijdt. Het punt is: laat de container **altijd** meegroeien met de content.

### "Maar dan wordt mijn grid kapot!"

Dan is je grid niet flexibel genoeg. Gebruik CSS Grid met `auto-fit` of `auto-fill`, of Flexbox met `flex-wrap`. Je grid moet zich aanpassen aan de content, niet andersom.

### "Dit breekt mijn vertical rhythm!"

Vertical rhythm is mooi, maar niet als het ten koste gaat van toegankelijkheid. Gebruik `min-height` en `padding` om een basis-ritme te behouden, maar laat groei toe.

## Het verschil met andere WCAG-criteria

Je kent misschien deze criteria al:

- **SC 1.4.4 Resize Text** — gebruikers moeten kunnen zoomen tot 200% zonder verlies van functionaliteit
- **SC 1.4.10 Reflow** — bij 400% zoom mag je niet horizontaal hoeven scrollen
- **SC 1.4.5 Images of Text** — gebruik echte tekst i.p.v. afbeeldingen van tekst

**SC 1.4.12 is het kleine broertje dat iedereen vergeet.**

Het gaat niet over zoomen. Het gaat niet over reflow. Het gaat puur over de ruimte _tussen_ letters, woorden, regels en alinea's.

En juist die ruimte is cruciaal voor mensen met dyslexie of een visuele beperking. Die extra woordafstand? Dat is het verschil tussen een leesbare zin en een onleesbare brei van letters.

## Praktische checklist voor developers

Wanneer je een component bouwt, vraag jezelf af:

- Gebruik ik ergens `height` zonder `min-` ervoor?
- Staat er `overflow: hidden` op een container met tekst?
- Gebruik ik `line-height` om tekst verticaal te centreren in plaats van `padding` of `flexbox`?
- Heb ik getest met de bookmarklet?
- Groeien mijn knoppen, cards en hero-secties mee met hun content?

Als je ook maar één keer "nee" antwoordt, tijd om te refactoren.

## Bonus: CSS custom properties voor flexibele spacing

Wil je pro-niveau flexibiliteit? Gebruik CSS custom properties:

```css
:root {
  --min-line-height: 1.5;
  --min-letter-spacing: 0.12em;
  --min-word-spacing: 0.16em;
  --min-paragraph-spacing: 2em;
}

body {
  line-height: var(--min-line-height);
}

p {
  margin-bottom: var(--min-paragraph-spacing);
}

/* Gebruikers kunnen deze waarden overschrijven met hun eigen stylesheet */
```

Dit is niet verplicht voor SC 1.4.12, maar het laat zien dat je het serieus neemt. En het maakt testen makkelijker.

## Tot slot

WCAG 1.4.12 Text Spacing lijkt misschien een klein criterium, maar het heeft grote impact. Elke keer dat je `height: [vast getal]px` en `overflow: hidden` combineert op een tekst-container, sluit je een groep gebruikers uit.

De oplossing is simpel:

- Gebruik `min-height` in plaats van `height`
- Laat `overflow` standaard op `visible` (of laat het helemaal weg)
- Gebruik `padding` en `flexbox` voor verticale centrering
- Test met de bookmarklet

Zo bouw je websites die niet breken zodra iemand zijn eigen voorkeuren instelt. En dat is precies waar toegankelijkheid om draait: niet alleen werken voor de standaard-gebruiker, maar voor iedereen.

Hulp nodig bij het doorlichten van je front-end code? Of wil je een training voor je team over toegankelijke CSS? Proper Access helpt je graag op weg — niet met vage rapporten, maar met concrete code-reviews en hands-on begeleiding.

---

_Julia Tol is oprichter van Proper Access en helpt organisaties bij het realiseren van digitale toegankelijkheid. Niet met dikke rapporten, maar met concrete oplossingen. Ze heeft een zwak voor CSS-bugs die niemand ziet aankomen._

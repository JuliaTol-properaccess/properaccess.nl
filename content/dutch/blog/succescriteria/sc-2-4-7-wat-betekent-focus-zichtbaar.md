---
title: 'SC 2.4.7 - Wat betekent \"Focus zichtbaar\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-4-7"
  - "focus"
description: "WCAG 2.4.7 vereist een zichtbare focus-indicator op interactieve elementen. Lees waarom dit essentieel is en hoe je het implementeert."
---

Stel je voor dat je een formulier invult met je muis, maar de cursor is onzichtbaar. Je klikt ergens en hoopt dat je het juiste veld raakt. Dat klinkt absurd, maar precies dat is wat er gebeurt als een website geen zichtbare focus-indicator heeft voor toetsenbordgebruikers.

De focus-indicator -- meestal een rand of highlight rond het actieve element -- is voor toetsenbordgebruikers wat de muiscursor is voor muisgebruikers. Zonder kun je niet zien waar je bent.

**WCAG succescriterium 2.4.7** (Focus Visible) eist dat elk interactief element een zichtbare focus-indicator heeft wanneer het toetsenbordfocus krijgt.

## Waarom verwijderen websites de focus?

De meest voorkomende reden: `outline: none` in de CSS. Designers vinden de standaard focusring van de browser lelijk, en de makkelijkste oplossing is hem weghalen. Het probleem: daarmee verwijder je de enige manier waarop toetsenbordgebruikers kunnen zien waar ze zijn.

```css
/* Dit is de meest schadelijke regel in CSS voor toegankelijkheid */
*:focus {
  outline: none;
}
```

De juiste aanpak: vervang de standaard focusstijl door een betere, verwijder hem niet.

## Wie heeft hier last van?

- **Mensen met een motorische beperking** die het toetsenbord gebruiken in plaats van de muis
- **Mensen met een visuele beperking** die wel kunnen zien maar niet precies genoeg om een muiscursor te sturen
- **Powerusers** die met het toetsenbord sneller navigeren dan met de muis
- **Mensen met RSI** die de muis vermijden om hun handen te ontlasten
- **Spraakbesturingsgebruikers** die visuele feedback nodig hebben om te bevestigen welk element actief is

## Hoe ziet een goede focus-indicator eruit?

Een focus-indicator moet **duidelijk zichtbaar** zijn, op alle achtergrondkleuren. De standaard browseroutline is vaak te subtiel. Hier zijn betere opties:

### Optie 1: Dikke outline met offset

```css
:focus-visible {
  outline: 3px solid #004050;
  outline-offset: 2px;
}
```

### Optie 2: Combinatie van outline en schaduw

```css
:focus-visible {
  outline: 2px solid #004050;
  box-shadow: 0 0 0 4px rgba(0, 64, 80, 0.3);
}
```

### Optie 3: Achtergrondkleurverandering

```css
:focus-visible {
  background-color: #FFFBCC;
  outline: 2px solid #004050;
}
```

### Waarom `:focus-visible` in plaats van `:focus`?

`:focus-visible` toont de focusstijl alleen als de browser detecteert dat de gebruiker via het toetsenbord navigeert. Bij een muisklik verschijnt de ring niet. Zo krijgen toetsenbordgebruikers een duidelijke indicator zonder dat muisgebruikers gestoord worden.

```css
/* Verwijder de standaard outline voor muiskliks */
:focus:not(:focus-visible) {
  outline: none;
}

/* Toon een duidelijke outline voor toetsenbordnavigatie */
:focus-visible {
  outline: 3px solid #004050;
  outline-offset: 2px;
}
```

## Veelgemaakte fouten

- **`outline: none` zonder vervanging** -- de nummer-één fout. De focus is weg, en niemand merkt het totdat een toetsenbordgebruiker de site test
- **Te subtiele focusstijl** -- een 1px lichtgrijze lijn op een witte achtergrond is technisch aanwezig maar praktisch onzichtbaar
- **Focus alleen op sommige elementen** -- knoppen hebben een focusstijl, maar links of formuliervelden niet
- **Focusstijl die niet werkt op donkere achtergronden** -- een donkerblauwe outline op een donkere achtergrond is onzichtbaar
- **Hover-stijl maar geen focusstijl** -- een knop verandert van kleur bij :hover maar niet bij :focus

## De relatie met SC 2.4.11 en 2.4.12

SC 2.4.7 gaat over of de focus **zichtbaar** is. De nieuwere criteria gaan verder:

- **SC 2.4.11** (niveau AA): het gefocuste element mag niet volledig bedekt worden door andere elementen
- **SC 2.4.12** (niveau AAA): definieert minimale eisen voor de grootte en het contrast van de focus-indicator

## Hoe test je het?

1. Zet je muis opzij
2. Navigeer met **Tab** door je hele pagina
3. Kun je op elk moment zien welk element focus heeft?
4. Is de focus-indicator duidelijk genoeg op alle achtergrondkleuren?
5. Werkt de focus ook op custom componenten (dropdowns, tabpanelen, modals)?

## Wat kun je als webredacteur of manager doen?

- **Test je site met alleen het toetsenbord**: kun je altijd zien waar je bent?
- **Zoek naar `outline: none` in je CSS**: als het er staat zonder vervanging, is dat een probleem
- **Vraag je webbouwer**: zijn focusstijlen correct ingesteld op alle interactieve elementen?
- **Controleer op donkere achtergronden**: is de focus daar ook zichtbaar?

De focus-indicator is de cursor van het toetsenbord. Verwijder hem nooit zonder een betere vervanging te bieden.

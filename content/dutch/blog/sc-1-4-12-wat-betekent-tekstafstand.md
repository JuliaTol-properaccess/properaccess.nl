---
title: '1.4.12 - Wat betekent "Tekstafstand"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-12"
description: "WCAG: de tekstafstand aanpassen om hun leeservaring te verbeteren. Hoe test je dit SC?"
keywords:
  - WCAG 1.4.12
  - leesbaarheid vergroten WCAG
  - hoe test je SC 1.4.12
---

## Waar gaat het over?

De ruimte tussen alinea's, regels, woorden en letters moet door bezoekers aangepast kunnen worden. Als een bezoeker hiervoor stijlregels toepast, mag er geen tekst verdwijnen, overlappen of onleesbaar worden. Let op: het gaat hier om iets anders dan het simpelweg vergroten van de tekst.

[Officiële tekst van 1.4.12](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing)

## Waarom is dit belangrijk?

Sommige mensen kunnen teksten beter lezen als er meer ruimte zit tussen regels, letters of woorden. Bijvoorbeeld mensen met dyslexie of visuele beperkingen. Als een website daar niet goed mee omgaat, kan tekst overlappen of verdwijnen. Dan wordt de inhoud lastig of zelfs onmogelijk te begrijpen.

## Wat moet je doen?

Zorg dat je website aan de volgende punten voldoet:

- Als een bezoeker stijlregels toepast om de afstanden aan te passen, verdwijnt er geen informatie.
- De tekst overlapt dan ook geen andere tekst of elementen, en wordt ook niet op een andere manier onleesbaar.

## Wat is *niet* verplicht?

- Je hoeft geen knoppen op je site te plaatsen om tekst(afstand) te vergroten. Uit onze onderzoeken blijkt dat deze knoppen vaak niet goed werken en soms zelfs niet toegankelijk zijn. Mensen die dit nodig hebben, gebruiken meestal hun eigen tools om dit te doen.
- In de volgende gevallen hoeft de tekstafstand niet aanpasbaar te zijn:
  - bij ondertitels in video's;
  - bij afbeeldingen van tekst;
  - bij de inhoud van een canvas-element;
  - als afgesneden tekst onderdeel is van content die via een link volledig kan worden gelezen op een andere pagina (hierover bestaat echter discussie tussen onderzoeksbureaus);
  - als tekst overlapt met andere tekst, maar waarbij de pagina omhoog of omlaag kan worden gescrold om de teksten uit elkaar te halen.

## Hoe test je succescriterium 1.4.12?

Een veelgebruikte extensie om tekstafstanden aan te passen is de [Stylus Tool](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=nl) van Google Chrome. Daarmee kun je dus goed testen. Maak een nieuwe stijl aan en voeg de volgende code toe:

```CSS
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}

p {
  margin-bottom: 2em !important;
}
```

Volg nu de volgende stappen:

1. Zet de vensterbreedte van de browser op minimaal 1280 pixels en het zoomniveau op 100%.
2. Zet de Stylus-tool aan.
3. Herlaad de pagina (Ctrl + Shift + R).
4. Controleer of er geen tekst afgesneden en onleesbaar wordt.

**Het verwachte resultaat:** alles moet leesbaar en bedienbaar blijven.

## Veelgemaakte fouten

Bij onze audits zien we dat het bij dit succescriterium vaak fout gaat op een van de volgende punten:

- Tekst verdwijnt buiten het zicht of achter andere elementen.
- Tekst wordt deels onzichtbaar en daardoor onleesbaar.
- Het minimale contrast gaat verloren, bijvoorbeeld omdat witte tekst op een witte achtergrond terechtkomt. Dit valt onder succescriterium 1.4.3 (Contrast).
- Tekst overlapt met andere tekst, waardoor de leesbaarheid vermindert.

## Hoe los je problemen met succescriterium 1.4.12 op?

**Oplossing 1:** Laat de containers meegroeien als de tekstafstanden veranderen. Gebruik hierbij relatieve eenheden. Meer informatie: [W3C - CSS Techniques voor WCAG](https://www.w3.org/WAI/WCAG21/Techniques/css/C28)

**Oplossing 2:** Gebruik een mechanisme om de afgesneden tekst te tonen, bijvoorbeeld op hover of focus. Een mogelijke oplossing (bekijk de live versie op [Codepen](https://codepen.io/JuliaZjochova/full/MWMrRjE)):

```HTML
<div class="truncated-text" tabindex="0">
  This is an example of a long piece of text that will be truncated with an ellipsis.
</div>
```

```CSS
.truncated-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  display: inline-block;
  cursor: pointer; /* Optional: indicate that the text is interactive */
  border-bottom: 1px dotted #000; /* Optional: indicate there's more content */
}

/* Reveal full text on focus or hover */
.truncated-text:focus,
.truncated-text:hover,
.truncated-text:active {
  white-space: normal; /* Allows text to wrap and show fully */
  overflow: visible;
  text-overflow: clip;
  max-width: none; /* Removes width restriction */
}
```

```JS
document.querySelectorAll('.truncated-text').forEach(function(element) {
  element.addEventListener('click', function() {
    this.style.whiteSpace = 'normal';
    this.style.overflow = 'visible';
    this.style.textOverflow = 'clip';
    this.style.maxWidth = 'none';
  });
});
```

---
title: 'SC 2.2.2 - Wat betekent \"Pauzeren, stoppen of verbergen\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-2-2"
description: "WCAG 2.2.2 vereist dat bewegende of automatisch wisselende content gepauzeerd of gestopt kan worden. Lees de regels en veelgemaakte fouten."
---

Een carrousel die automatisch door slides heen scrollt. Een nieuwsticker die langs de onderkant van het scherm glijdt. Een achtergrondanimatie die continu beweegt. Voor jou is het een dynamisch design-element. Voor iemand met ADHD, een concentratiestoornis of een vestibulaire aandoening kan het onmogelijk maken om de rest van de pagina te lezen.

**WCAG succescriterium 2.2.2** (Pause, Stop, Hide) eist dat bezoekers bewegende, knipperende of automatisch scrollende content kunnen pauzeren, stoppen of verbergen.

## Waarom is dit zo belangrijk?

Beweging trekt automatisch de aandacht. Dat is precies waarom marketeers het gebruiken -- het valt op. Maar diezelfde eigenschap maakt het problematisch voor mensen die hun aandacht niet kunnen sturen:

- **Mensen met ADHD** kunnen niet anders dan naar de beweging kijken, waardoor ze de rest van de pagina niet kunnen lezen
- **Mensen met vestibulaire aandoeningen** kunnen duizelig of misselijk worden van bepaalde bewegingen
- **Mensen met cognitieve beperkingen** raken gedesoriënteerd als content verandert terwijl ze het proberen te verwerken
- **Schermlezergebruikers** worden gestoord als de DOM verandert terwijl ze aan het navigeren zijn

## De twee regels van SC 2.2.2

Het criterium maakt onderscheid tussen twee soorten beweging:

### 1. Automatisch bewegende content (carrousels, tickers, animaties)

Als iets automatisch beweegt, scrollt of knippert en dat langer dan **5 seconden** duurt, moet de gebruiker het kunnen:
- **Pauzeren** -- tijdelijk stopzetten en weer hervatten
- **Stoppen** -- definitief uitschakelen
- **Verbergen** -- uit het zicht halen

Dit geldt voor: carrousels, slideshows, nieuwstickers, scrollende tekst, achtergrondanimaties, en geanimeerde banners.

### 2. Automatisch wisselende content (auto-updating)

Als content automatisch ververst wordt -- denk aan een live scorebord, een aandelenticker, of een chat die automatisch nieuwe berichten toont -- moet de gebruiker dat ook kunnen pauzeren of stoppen.

**Uitzondering:** als het pauzeren of stoppen de functie fundamenteel kapot zou maken. Een live videostream is live -- daar kun je de tijd niet stoppen. Maar een carrousel is geen live content.

## Waar gaat het in de praktijk mis?

### Carrousels

De meest voorkomende overtreder. Bijna elke website heeft er een, en bijna geen enkele heeft een pauzeknop. De ironie: uit onderzoek blijkt dat bezoekers zelden voorbij de eerste slide kijken. Je veroorzaakt een toegankelijkheidsprobleem voor content die niemand ziet.

**De oplossing:** voeg een duidelijke pauze/play-knop toe. Pauzeer de carrousel ook automatisch als de gebruiker er met de muis overheen gaat of als een element in de carrousel focus krijgt.

```html
<div class="carousel" role="region" aria-label="Aanbiedingen" aria-roledescription="carrousel">
  <button class="carousel-pause" aria-label="Carrousel pauzeren">||</button>
  <!-- slides -->
</div>
```

### Achtergrondvideo's

Hero-video's die automatisch afspelen. Als ze zonder geluid zijn (muted), vallen ze niet onder SC 1.4.2 (audiobediening), maar ze vallen wel onder SC 2.2.2 als ze langer dan 5 seconden bewegen.

### Geanimeerde achtergronden

CSS-animaties of Lottie-animaties die continu draaien. Respecteer de `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-background {
    animation: none;
  }
}
```

### Automatisch scrollende tekst

Nieuwstickers, aankondigingen die langs het scherm glijden. Deze zijn bijna altijd een probleem, omdat ze moeilijk leesbaar zijn voor mensen met leesproblemen en niet gepauzeerd kunnen worden.

## Veelgemaakte fouten

- Carrousels zonder pauze- of stopknop
- Achtergrondanimaties die niet reageren op `prefers-reduced-motion`
- Automatisch scrollende tekst die niet gestopt kan worden
- Een pauzeknop die er wel is maar niet met het toetsenbord bereikbaar is
- Content die na het pauzeren opnieuw begint als je naar een andere sectie scrollt

## Wat kun je als webredacteur of manager doen?

- **Controleer bewegende elementen**: draait er iets automatisch op je pagina? Kun je het stoppen?
- **Test met het toetsenbord**: kun je de pauzeknop bereiken zonder muis?
- **Vraag je webbouwer**: wordt `prefers-reduced-motion` gerespecteerd?
- **Overweeg of de beweging nodig is**: als een carrousel toch niet bekeken wordt, waarom zou je hem dan laten draaien?

Beweging kan een krachtig design-element zijn, maar alleen als je bezoekers er controle over hebben. Een simpele pauzeknop is het verschil tussen een dynamische website en een ontoegankelijke website.

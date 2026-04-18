---
title: 'SC 1.4.2 - Wat betekent "Audiobediening"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-2"
  - "geluid"
description: "WCAG 1.4.2 vereist dat automatisch afspelende audio gepauzeerd of gestopt kan worden. Lees de regels, uitzonderingen en veelgemaakte fouten."
aliases:
  - /sc-1-4-2-wat-betekent-audiobediening/
---

Je opent een website en ineens begint er muziek te spelen. Of een promotievideo start automatisch met geluid. Voor de meeste mensen is dat irritant. Voor iemand die een schermlezer gebruikt, is het een ramp. Die schermlezer praat namelijk ook -- en twee geluidsbronnen tegelijk maken het onmogelijk om de website te gebruiken.

**WCAG succescriterium 1.4.2** (Audio Control) eist dat gebruikers audio kunnen pauzeren, stoppen of het volume kunnen aanpassen als het automatisch afspeelt.

## Waarom is dit zo belangrijk?

Een schermlezer leest de pagina voor via audio. Als er tegelijk een ander geluid afspeelt, moet de gebruiker eerst dat geluid zien te stoppen voordat die de pagina kan gebruiken. Maar om dat geluid te stoppen, moet die de pagina kunnen gebruiken. Dat is een klassiek kip-en-ei-probleem.

Daarnaast kan onverwacht geluid:
- **Verwarrend** zijn voor mensen met cognitieve beperkingen
- **Stressvol** zijn voor mensen met angststoornissen of sensorische gevoeligheid
- **Storend** zijn in openbare ruimtes of gedeelde werkplekken

## Wat wordt er verwacht?

Audio die **langer dan 3 seconden** automatisch afspeelt, moet:
- **Pauzeerbaar** of **stoppbaar** zijn via een bedieningsmechanisme op de pagina
- Of een **volumeregelaar** hebben die onafhankelijk is van het systeemvolume

Dat bedieningsmechanisme moet bovendien met het toetsenbord bereikbaar zijn en vroeg in de focusvolgorde staan. Het heeft geen zin om een muteknop te hebben als de gebruiker eerst twintig elementen moet doorlopen om er te komen.

## Wat is niet verplicht?

- Geluiden **korter dan 3 seconden** vallen niet onder deze eis
- Video's die pas starten na een klik van de gebruiker vallen hier niet onder -- de gebruiker heeft dan zelf gekozen om het geluid af te spelen
- Decoratieve geluidseffecten zonder cruciale informatie

## Voorbeelden uit de praktijk

- **Restaurant-websites met achtergrondmuziek.** Nog steeds verrassend gangbaar. De mute-knop is vaak een klein icoontje in de hoek dat nauwelijks te vinden is.
- **Autoplay video's in headers.** Veel corporate websites hebben een hero-video die automatisch start. Als die video geluid heeft, moet er een zichtbare muteknop zijn.
- **Embedded social media.** Instagram- of TikTok-embeds die automatisch starten met geluid.
- **Cookie-banners met geluidsfeedback.** Ja, die bestaan. En ze zijn een probleem.

## Veelgemaakte fouten

- Geen pauze- of stopknop voor achtergrondmuziek
- Automatisch afspelende video's zonder mute-optie
- Een mute-knop die niet met het toetsenbord bereikbaar is
- Muziek die steeds opnieuw start bij elke paginaweergave
- Audio die wel gepauzeerd kan worden, maar na het navigeren naar een andere pagina opnieuw begint

## De beste oplossing

De simpelste en meest gebruiksvriendelijke aanpak: **speel nooit automatisch audio af.** Laat de gebruiker kiezen. Een video in de header? Start die zonder geluid (`muted`-attribuut) en laat de gebruiker het geluid aanzetten als die dat wil.

```html
<video autoplay muted loop>
  <source src="hero-video.mp4" type="video/mp4">
</video>
```

## Wat kun je als webredacteur of manager doen?

- **Test je website**: speelt er ergens automatisch geluid af?
- **Controleer de bedieningselementen**: kun je elk geluid stoppen met het toetsenbord?
- **Vraag je webbouwer**: worden video's standaard gestart met het `muted`-attribuut?

Onverwacht geluid is een van de meest frustrerende ervaringen op het web. Geef je bezoekers de controle en je maakt je website een stuk prettiger voor iedereen.

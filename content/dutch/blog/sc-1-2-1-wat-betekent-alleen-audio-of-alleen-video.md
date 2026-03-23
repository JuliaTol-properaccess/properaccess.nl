---
title: 'SC 1.2.1 - Wat betekent \"Alleen audio of alleen video\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-2-1"
  - "podcast"
  - "video"
description: "Wat eist WCAG 1.2.1 voor alleen-audio en alleen-video content? Leer wanneer je een transcript of tekstbeschrijving moet aanbieden, met voorbeelden en veelgemaakte fouten."
---

Een podcast op je website. Een instructievideo zonder gesproken tekst. Een audiofragment van een interview. Voor jou is de inhoud duidelijk, maar voor iemand die doof is, bestaat die podcast niet. En voor iemand die blind is, is die stille instructievideo een zwart gat.

**WCAG succescriterium 1.2.1** (Audio-only and Video-only, Pre-recorded) eist dat je tekstalternatieven biedt voor media die alleen uit geluid of alleen uit beeld bestaan.

## Twee situaties, twee oplossingen

Dit criterium dekt twee verschillende scenario's:

### Alleen-audio (bijvoorbeeld een podcast)

Als je een audiobestand publiceert -- een podcast, een interview, een audioboodschap -- moet je er een **teksttranscript** bij aanbieden. Dat transcript bevat:

- Alle gesproken tekst, woordelijk uitgeschreven
- Sprekeridentificatie als er meerdere sprekers zijn
- Relevante geluiden die betekenis dragen ([gelach], [applaus], [deur gaat open])
- Muziekbeschrijvingen als de muziek relevant is voor de context

**Voorbeeld:** Je publiceert een podcast-aflevering over digitale toegankelijkheid. Het transcript staat direct onder de audiospeler op dezelfde pagina, of is beschikbaar als downloadbaar bestand.

### Alleen-video (zonder geluid)

Als je een video publiceert die geen gesproken tekst bevat -- een screencast zonder voice-over, een instructievideo met alleen beeld, een timelapse -- moet je een **tekstbeschrijving** bieden van wat er in beeld gebeurt.

**Voorbeeld:** Een instructievideo die laat zien hoe je een formulier invult, zonder gesproken uitleg. De tekstbeschrijving beschrijft elke stap: "De cursor klikt op het naamveld. Er wordt 'Jan de Vries' getypt. Vervolgens wordt het e-mailveld geselecteerd..."

## Wie heeft hier baat bij?

- **Dove en slechthorende mensen** -- het transcript is hun enige manier om de audio-inhoud te begrijpen
- **Blinde en slechtziende mensen** -- de tekstbeschrijving vertelt wat er in een stille video te zien is
- **Mensen in een stille omgeving** -- vergadering, bibliotheek, 's nachts
- **Zoekmachines** -- een transcript maakt je audio- en video-inhoud vindbaar in Google
- **Niet-moedertaalsprekers** -- geschreven tekst is vaak makkelijker te volgen dan gesproken taal

## Wat valt hier niet onder?

- **Video's met geluid** (beeld + audio samen) vallen onder andere criteria (SC 1.2.2 voor ondertiteling, SC 1.2.3/1.2.5 voor audiodescriptie)
- **Live audio en video** hebben hun eigen regels
- **Decoratieve media** zonder inhoudelijke waarde -- een achtergrondvideo op je homepage die puur sfeer creëert

## Hoe maak je een goed transcript?

Een transcript is meer dan alleen het uittypen van woorden. Een goed transcript:

1. **Identificeert sprekers** -- "Julia: Welkom bij deze podcast" in plaats van alleen "Welkom bij deze podcast"
2. **Beschrijft relevante geluiden** -- [telefoon gaat over], niet alleen de gesproken tekst
3. **Behoudt de structuur** -- gebruik kopjes als het transcript lang is, zodat lezers kunnen navigeren
4. **Is te vinden** -- zet het transcript op dezelfde pagina als de media, of link er direct naartoe

### Voorbeeld van een goed transcript

```
[Intro-muziek, 5 seconden]

Julia: Welkom bij aflevering 12 van onze podcast over digitale
toegankelijkheid. Vandaag praten we over formulieren.

[Intro-muziek stopt]

Julia: Ik heb een gast meegenomen. Wil je jezelf voorstellen?

Gast: Ja, ik ben Mark. Ik werk als frontend developer bij een
groot e-commerceplatform.
```

## Veelgemaakte fouten

- Podcasts zonder transcript -- veruit de meest voorkomende fout
- Transcripten die alleen de gesproken tekst bevatten, zonder geluidseffecten of sprekeridentificatie
- Transcripten die automatisch zijn gegenereerd en niet gecorrigeerd -- vol tikfouten en verkeerd herkende woorden
- Stille instructievideo's zonder tekstbeschrijving van wat er in beeld gebeurt
- Het transcript op een andere pagina plaatsen zonder duidelijke link

## Wat kun je als webredacteur of manager doen?

- **Inventariseer je media**: heb je audio of video zonder bijbehorend transcript of tekstbeschrijving?
- **Gebruik automatische transcriptie als startpunt**: tools als Whisper, Otter.ai of de ingebouwde transcriptie van YouTube genereren een basistekst die je kunt corrigeren
- **Maak transcripten vindbaar**: zet ze op dezelfde pagina of link er prominent naartoe
- **Neem transcriptie op in je workflow**: maak het onderdeel van het publicatieproces, niet een nagedachte

Een transcript maakt je audio-inhoud toegankelijk voor iedereen -- en als bonus wordt je podcast of interview ook vindbaar in zoekmachines.

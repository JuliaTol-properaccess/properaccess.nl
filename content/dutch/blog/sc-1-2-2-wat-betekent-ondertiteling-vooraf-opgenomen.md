---
title: 'SC 1.2.2 - Wat betekent "Ondertiteling (vooraf opgenomen)"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-2-2"
  - "video"
description: "WCAG 1.2.2 vereist ondertiteling voor vooraf opgenomen video's. Lees wat goede ondertiteling inhoudt, veelgemaakte fouten en praktische tips voor je website."
---

Een productvideo op je webshop. Een uitlegvideo op je helppagina. Een opgenomen webinar in je academy. Als er gesproken tekst in zit, moeten er ondertitels bij. Niet als leuke extra, maar als vereiste -- want zonder ondertiteling is die video ontoegankelijk voor iedereen die het geluid niet kan horen.

**WCAG succescriterium 1.2.2** (Captions Pre-recorded) eist ondertiteling voor alle vooraf opgenomen video's met gesproken tekst of betekenisvolle geluiden.

## Wie heeft hier baat bij?

- **Dove en slechthorende bezoekers** -- voor hen is ondertiteling de enige manier om de gesproken inhoud te volgen
- **Mensen in een lawaaierige omgeving** -- op de trein, in een druk kantoor, in een wachtruimte
- **Niet-moedertaalsprekers** -- ondertiteling helpt bij het volgen van gesproken tekst in een andere taal
- **Mensen die liever lezen dan luisteren** -- uit onderzoek blijkt dat veel mensen video's bekijken met ondertiteling aan, ook als ze prima kunnen horen

## Wat maakt goede ondertiteling?

Ondertiteling is meer dan alleen de gesproken tekst uittypen. Goede ondertitels bevatten:

- **Alle gesproken tekst**, inclusief off-screen stemmen
- **Sprekeridentificatie** als er meerdere sprekers zijn ("Julia: ...", "Interviewer: ...")
- **Relevante geluidseffecten** ([applaus], [telefoon gaat over], [deur slaat dicht])
- **Muziekbeschrijvingen** als de muziek betekenis draagt ([spannende muziek], [vrolijk deuntje])
- **Correcte timing** -- de ondertitels verschijnen synchroon met het gesproken woord

## Ondertitelformaten

De twee meest gebruikte formaten:

- **WebVTT (.vtt)** -- het standaardformaat voor het web, ondersteund door alle moderne browsers en videospelers
- **SRT (.srt)** -- breed ondersteund door videobewerkingssoftware en platforms zoals YouTube

Beide formaten zijn simpele tekstbestanden die je met een teksteditor kunt bewerken. Een WebVTT-bestand ziet er zo uit:

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Welkom bij deze uitleg over digitale toegankelijkheid.

00:00:05.000 --> 00:00:08.000
[achtergrondmuziek stopt]
In deze video laat ik je zien hoe je formulieren test.
```

## Automatische ondertiteling: een goed begin, geen eindresultaat

YouTube, Vimeo en andere platforms bieden automatisch gegenereerde ondertitels. Die zijn de afgelopen jaren flink verbeterd, maar ze zijn niet goed genoeg om zonder correctie te publiceren.

Veelvoorkomende fouten in automatische ondertitels:
- **Vaktermen** worden verkeerd herkend
- **Eigennamen** worden fout gespeld
- **Homofielen** (woorden die hetzelfde klinken maar anders gespeld worden) worden verwisseld
- **Interpunctie** ontbreekt vaak, waardoor zinnen onleesbaar worden
- **Sprekerswisseling** wordt niet herkend

**Onze aanbeveling:** gebruik automatische ondertiteling als startpunt. Laat ze genereren, download het bestand en corrigeer het handmatig. Dat is een stuk sneller dan alles vanaf nul uittypen.

## Veelgemaakte fouten

- Ondertitels die alleen de gesproken tekst bevatten, zonder geluidseffecten
- Automatische ondertiteling die niet is gecorrigeerd
- Ondertitels die te snel verschijnen (meer dan twee regels per twee seconden)
- Video's op je eigen website zonder ondertiteling, terwijl het YouTube-origineel die wel heeft -- je moet de ondertiteling ook beschikbaar maken in je eigen videospeler

## Wat kun je als webredacteur of manager doen?

- **Controleer al je video's**: heeft elke video met gesproken tekst ondertiteling?
- **Test de kwaliteit**: zijn de ondertitels correct, synchroon en volledig?
- **Vraag je videomaker**: zijn er ondertitelbestanden (.vtt of .srt) beschikbaar?
- **Budget**: neem ondertiteling op in je videobudget. Het is geen extra, het is een vereiste.

Ondertiteling maakt je video's toegankelijk voor een veel breder publiek. En het kost minder dan je denkt -- zeker als je automatische ondertiteling als basis gebruikt.

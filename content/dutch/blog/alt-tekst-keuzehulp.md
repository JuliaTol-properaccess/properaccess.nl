---
title: "Alt-tekst schrijven: de keuzehulp voor de juiste alt-tekst bij elke afbeelding"
date: 2026-02-23
slug: "alt-tekst-keuzehulp"
description: "Welke alt-tekst heeft jouw afbeelding nodig? Gebruik onze interactieve keuzehulp om in een paar stappen de juiste alt-tekst te bepalen — van productfoto's tot decoratieve afbeeldingen."
categories:
  - "achtergrond_wcag"
  - "webredactie"
tags:
  - "alt-tekst"
  - "afbeeldingen"
  - "wcag"
  - "schermlezer"
  - "webredactie"
keywords:
  - alt tekst schrijven
  - alt tekst
  - alt tekst afbeelding
  - wat is alt tekst
  - wat is een alt tekst
  - alt teksten
  - alt-tekst
  - goede alt tekst
  - alt tekst voorbeeld
  - alt tekst productfoto
  - alt tekst decoratief
  - alt tekst webshop
  - toegankelijke afbeeldingen
  - wcag alt tekst
  - wcag 1.1.1
  - schermlezer afbeelding
  - alt attribuut
---

Elke afbeelding op je website heeft een alt-attribuut nodig. Maar wat je daarin schrijft, hangt af van de context. Is de afbeelding decoratief? Dan laat je de alt-tekst leeg (`alt=""`). Bevat de afbeelding informatie? Dan beschrijf je die informatie.

Ik zie het in bijna elke audit misgaan. Alt-teksten zijn verplicht onder **WCAG succescriterium 1.1.1** (Niet-tekstuele content) — en het is een van de meest gefaalde criteria.

Gebruik de keuzehulp hieronder om snel te bepalen welke alt-tekst bij jouw situatie past.

{{< webapp-alt-tekst >}}

## De vier typen afbeeldingen

Elke afbeelding valt in een van deze categorieën:

1. **Decoratief** (sfeer, opvulling, herhaling van tekst ernaast) — gebruik `alt=""`
2. **Informatief** (foto, illustratie, grafiek die iets uitlegt) — beschrijf de informatie
3. **Functioneel** (link, knop, icoon) — beschrijf de actie of bestemming
4. **Complex** (grafiek, diagram, infographic) — korte alt + uitgebreide beschrijving

### Decoratieve afbeeldingen

Een decoratieve afbeelding voegt geen informatie toe. Gebruik `alt=""` (leeg, niet weglaten). Een sfeerfoto van een kantoor met alt-tekst "twee collega's achter een laptop" is ruis — de schermlezer onderbreekt de tekststroom voor informatie die er niet toe doet.

### Informatieve afbeeldingen

Beschrijf wat je ziet, gericht op de context. Bij een productfoto: "Zwarte leren sneakers met witte zool, schuin van voren gefotografeerd." Bij een nieuwsfoto: "Burgemeester Halsema overhandigt de eerste prijs aan het winnende team."

### Functionele afbeeldingen

Beschrijf niet wat je ziet, maar **wat er gebeurt als je klikt**. Een logo dat linkt naar de homepage: `alt="Proper Access — naar de homepage"`. Niet: `alt="logo"`.

### Complexe afbeeldingen

Geef een korte alt-tekst ("Staafgrafiek: omzetontwikkeling per kwartaal") plus een uitgebreide beschrijving elders op de pagina, zoals een datatabel.

## De 5 meest voorkomende fouten

1. **Decoratieve afbeeldingen met een beschrijving** — sfeerbeelden die niemand hoeft te horen
2. **Informatieve afbeeldingen zonder alt-tekst** — een schermlezer leest de bestandsnaam voor
3. **Alle afbeeldingen dezelfde alt-tekst** — "afbeelding" of "foto" geeft geen bruikbare informatie
4. **Alt-tekst die begint met "afbeelding van"** — een schermlezer zegt al "afbeelding", je krijgt dan "afbeelding, afbeelding van..."
5. **Tekst in afbeeldingen niet opnemen** — een banner met "SALE — 50% korting" als afbeelding zonder die tekst in de alt

## Alt-teksten voor webshops

- **Productfoto's:** beschrijf product, kleur en perspectief
- **Meerdere foto's:** eerste foto volledige beschrijving, overige foto's beschrijven het verschil ("zijaanzicht", "close-up stof")
- **Kleurvarianten als thumbnails:** beschrijf alleen de kleur ("Blauw", "Rood")
- **Maattabellen:** gebruik echte HTML-tabellen in plaats van afbeeldingen

## Verder lezen

- [EAA voor webshops](/blog/eaa-voor-webshops/) — productafbeeldingen zijn een van de meest voorkomende problemen
- [Rapport per element vs. per succescriterium](/blog/rapport-per-element-vs-per-succescriterium/) — hoe wij rapporteren over alt-tekst problemen
- [Wat kost een toegankelijkheidsaudit?](/blog/wat-kost-een-toegankelijkheidsaudit/) — laat je afbeeldingen checken als onderdeel van een audit

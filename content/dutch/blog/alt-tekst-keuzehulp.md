---
title: "Alt-tekst keuzehulp"
date: 2026-02-23
slug: "alt-tekst-keuzehulp"
description: "Interactieve keuzehulp die je stap voor stap helpt bij het kiezen van de juiste alt-tekst voor afbeeldingen. Gebaseerd op WCAG-richtlijnen."
categories:
  - "achtergrond_wcag"
keywords:
  - alt-tekst schrijven
  - alt tekst afbeeldingen
  - toegankelijke afbeeldingen
  - wcag alt tekst
---

Elke afbeelding op je website heeft een alt-attribuut nodig. Maar wat je daarin schrijft, hangt af van de context. Is de afbeelding decoratief? Dan laat je de alt-tekst leeg (`alt=""`). Bevat de afbeelding informatie? Dan beschrijf je die informatie. Klinkt simpel, maar in de praktijk gaat dit verrassend vaak mis.

## Waarom alt-teksten belangrijk zijn

Een schermlezer leest de alt-tekst voor als alternatief voor de afbeelding. Zonder alt-tekst hoort een blinde bezoeker of de bestandsnaam ("IMG\_2847.jpg") of helemaal niets. In beide gevallen mist diegene informatie die voor andere bezoekers wel zichtbaar is.

Alt-teksten zijn verplicht onder **WCAG succescriterium 1.1.1** (Niet-tekstuele content). Dit is een van de meest gefaalde criteria in onze audits -- juist omdat de regels per situatie verschillen.

## Veelgemaakte fouten

- **Decoratieve afbeeldingen met een beschrijving.** Een sfeerfoto naast een tekst hoeft geen alt-tekst. Een schermlezer die "vrouw achter laptop in kantoortuin" voorleest, voegt niets toe aan het begrip van de pagina. Gebruik `alt=""`.
- **Informatieve afbeeldingen zonder alt-tekst.** Een grafiek, een infographic of een productfoto bevat informatie die je moet beschrijven. Zonder alt-tekst is die informatie ontoegankelijk.
- **Alt-teksten die de functie niet beschrijven.** Bij een klikbare afbeelding (een link of knop) beschrijf je niet wat je ziet, maar wat er gebeurt als je erop klikt. Een logo dat naar de homepage linkt, krijgt als alt-tekst "Home" of "Naam bedrijf - home" -- niet "logo van bedrijf X".
- **Te lange alt-teksten.** Houd het kort en relevant. Moet je meer dan twee zinnen schrijven? Overweeg dan een bijschrift of een uitgebreide beschrijving elders op de pagina.
- **Tekst in afbeeldingen.** Staat er tekst in de afbeelding? Dan moet die tekst ook in de alt-tekst staan. Beter nog: gebruik echte tekst in HTML.

## Hoe kies je de juiste alt-tekst?

Het begint met een simpele vraag: **wat is de functie van deze afbeelding?**

1. **Decoratief** (sfeer, opvulling, herhaling van tekst ernaast) -- gebruik `alt=""`
2. **Informatief** (foto, illustratie, grafiek die iets uitlegt) -- beschrijf de informatie
3. **Functioneel** (link, knop, icoon) -- beschrijf de actie of bestemming
4. **Complex** (grafiek, diagram, infographic) -- korte alt + uitgebreide beschrijving

Gebruik de keuzehulp hieronder om snel te bepalen welke alt-tekst bij jouw situatie past.

{{< protected-section token="frameless" >}}
{{< webapp-alt-tekst >}}
{{< /protected-section >}}

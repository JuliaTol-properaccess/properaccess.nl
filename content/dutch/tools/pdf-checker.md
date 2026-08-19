---
title: "PDF toegankelijkheidscheck"
description: "De gratis PDF-check is offline. We bouwen een opvolger die je PDF niet alleen controleert maar ook repareert, zonder dat er iets verandert aan hoe het document eruitziet."
layout: "pdf-tool-aankondiging"
weight: 10
binnenkort: true
doelgroep:
  - "Webredactie"
  - "Webdeveloper"
---

De gratis check die hier stond is offline. Er komt een opvolger, en die doet meer dan controleren:
hij repareert je document ook.

## Wat de nieuwe tool doet

Je uploadt een PDF en je krijgt **je eigen document terug**, met een tagstructuur waar die ontbrak
en met de titel, de taal en de bijbehorende instellingen erin. Dezelfde pagina's, dezelfde opmaak.
Wij bouwen geen tweede document dat er anders uitziet.

Bij elk document vergelijken we de pagina's van voor en na de reparatie als afbeelding. Verandert er
iets, dan zeggen we welke pagina en hoe groot het verschil is.

Je krijgt er een verslag bij: wat er is opgelost, wat er nog open staat, en welke controles wij niet
hebben gedraaid omdat er een mens naar moet kijken. Dat laatste lijstje hoort erbij. Een controle die
niet draait, levert geen schoon document op.

## Wat we hebben gemeten

Op 19 augustus 2026 hebben we 33 PDF's van Nederlandse organisaties door deze reparatie gehaald,
allemaal documenten waar een auditor van Proper Access het antwoord al bij had geschreven. Voor de
reparatie stonden er 78 bevindingen op, erna 30. Van de 33 documenten waren er 32 daarna
pixel-identiek aan het origineel.

## Wat de tool niet doet

Dat de codelaag is gerepareerd, betekent niet dat je document toegankelijk is. Of de leesorde klopt,
of een tabelkop op de goede plek staat, of een beschrijving bij een afbeelding de afbeelding dekt:
dat kan geen tool vaststellen. Wij leveren dus geen verklaring dat je document aan WCAG of aan de
EAA voldoet.

## Waar je document blijft

Alle stappen draaien op onze eigen server in de EU. Je document gaat niet naar Adobe, niet naar
Google, niet naar een taalmodel en niet naar een andere leverancier. We hebben dat getest door de
reparatie te draaien met de netwerkverbinding dicht.

Het bestand dat je uploadt verwijderen we zodra de reparatie klaar is. Het resultaat verwijderen we
24 uur later.

## Waarom de oude tool weg is

Die tool deed het werk in je browser, en dat had een voordeel: je bestand verliet je computer niet.
Het had ook een gevolg dat wij niet wilden. Alles wat de tool nakeek, stond als leesbare code op
onze site, inclusief onze lijsten en onze meldingsteksten.

De nieuwe tool draait op de server. Je bestand komt dus wel bij ons, en daarom staat hierboven
precies wat we ermee doen en hoe lang het blijft staan.

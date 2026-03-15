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

Alt-tekst is een van die dingen die simpel klinkt maar lastig is in de praktijk. Elke afbeelding op je website heeft een alt-attribuut nodig — dat is de tekst die een schermlezer voorleest als alternatief voor de afbeelding. Maar wat je in dat alt-attribuut schrijft, hangt af van de situatie.

Ik zie het in bijna elke audit misgaan. Decoratieve afbeeldingen die uitgebreid worden beschreven. Productfoto's zonder enige beschrijving. Logo's met "logo" als alt-tekst. Grafieken waar alleen "grafiek" staat.

In dit artikel leg ik uit hoe je de juiste alt-tekst kiest. En onderaan vind je onze interactieve keuzehulp die je stap voor stap door het beslisproces leidt.

## Waarom alt-tekst belangrijk is

Een schermlezer leest de alt-tekst voor als iemand een afbeelding niet kan zien. Zonder alt-tekst hoort een blinde bezoeker of de bestandsnaam ("IMG_2847.jpg") of helemaal niets. In beide gevallen mist diegene informatie die voor andere bezoekers wel zichtbaar is.

Maar alt-tekst is niet alleen voor schermlezers:

- **Trage internetverbinding** — als afbeeldingen niet laden, verschijnt de alt-tekst
- **Zoekmachines** — Google leest alt-teksten om te begrijpen wat er op een afbeelding staat
- **Spraakbediening** — mensen die hun computer met spraak bedienen, gebruiken alt-teksten om naar afbeeldingen te navigeren

Alt-teksten zijn verplicht onder **WCAG succescriterium 1.1.1** (Niet-tekstuele content). Dit is een van de meest gefaalde criteria in onze audits — juist omdat de regels per situatie verschillen.

## De vier typen afbeeldingen

Elke afbeelding op je website valt in een van deze vier categorieën. Het type bepaalt welke alt-tekst je nodig hebt.

### 1. Decoratieve afbeeldingen — lege alt-tekst

Een decoratieve afbeelding voegt geen informatie toe aan de pagina. Het is sfeer, opvulling of een visueel element dat de tekst ernaast niet aanvult.

**Voorbeelden:**
- Een sfeerbeeld naast een tekst over je bedrijf
- Een achtergrondpatroon
- Een scheidingslijn tussen secties
- Een afbeelding die exact dezelfde informatie bevat als de tekst ernaast

**Wat je schrijft:** `alt=""` (leeg alt-attribuut). Niet weglaten — een leeg alt-attribuut vertelt de schermlezer expliciet: sla deze afbeelding over.

**Veelgemaakte fout:** Een sfeerfoto van een kantoor met alt-tekst "twee collega's achter een laptop in een modern kantoor." Dat voegt niets toe aan de pagina. De schermlezer onderbreekt de tekststroom voor informatie die er niet toe doet.

### 2. Informatieve afbeeldingen — beschrijf de inhoud

Een informatieve afbeelding bevat informatie die je niet uit de omringende tekst kunt halen. Als je de afbeelding weghaalt, mis je iets.

**Voorbeelden:**
- Een productfoto in een webshop
- Een foto bij een nieuwsbericht die relevant is voor het verhaal
- Een illustratie die een concept verduidelijkt
- Een screenshot van een interface

**Wat je schrijft:** Beschrijf wat je ziet, gericht op de informatie die relevant is voor de context. Bij een productfoto: wat is het product, welke kleur, welk model? Bij een nieuwsfoto: wie, wat, waar?

**Voorbeelden van goede alt-teksten:**
- Productfoto: "Zwarte leren sneakers met witte zool, maat 42, schuin van voren gefotografeerd"
- Nieuwsfoto: "Burgemeester Halsema overhandigt de eerste prijs aan het winnende team"
- Screenshot: "Instellingenscherm van WordPress met de optie 'Afbeelding alt-tekst' gemarkeerd"

**Houd het kort.** Twee zinnen is meestal genoeg. Moet je meer schrijven? Dan is de afbeelding waarschijnlijk complex (zie type 4).

### 3. Functionele afbeeldingen — beschrijf de actie

Een functionele afbeelding is een afbeelding die ook een link of knop is. Je klikt erop om ergens naartoe te gaan of iets te doen.

**Voorbeelden:**
- Een logo dat linkt naar de homepage
- Een social media-icoon dat linkt naar je LinkedIn-pagina
- Een banner die linkt naar een actie of aanbieding
- Een thumbnailafbeelding die linkt naar een artikel

**Wat je schrijft:** Beschrijf niet wat je ziet, maar **waar je naartoe gaat of wat er gebeurt**. Een schermlezergebruiker wil weten wat de link doet, niet hoe het plaatje eruitziet.

**Voorbeelden:**
- Logo: `alt="Proper Access — naar de homepage"`
- Social icoon: `alt="Volg ons op LinkedIn"`
- Actie-banner: `alt="Bekijk onze zomeraanbieding — 20% korting op alle sneakers"`
- Thumbnail: `alt="Lees het artikel: De 5 meest voorkomende alt-tekst fouten"`

**Veelgemaakte fout:** Een logo met `alt="logo"`. Een schermlezer leest dan "link, logo" — je weet niet welk bedrijf het is en niet waar de link naartoe gaat.

### 4. Complexe afbeeldingen — korte alt + uitgebreide beschrijving

Een complexe afbeelding bevat te veel informatie om in een korte alt-tekst te vatten. Denk aan grafieken, diagrammen, infographics en kaarten.

**Voorbeelden:**
- Een staafgrafiek met omzetcijfers
- Een infographic over een proces
- Een stroomdiagram
- Een plattegrond van een gebouw

**Wat je schrijft:** Een korte alt-tekst die vertelt wat het type afbeelding is en waar het over gaat. Plus een uitgebreide beschrijving elders op de pagina.

**Voorbeeld:**
- Alt-tekst: `alt="Staafgrafiek: omzetontwikkeling per kwartaal in 2025"`
- Uitgebreide beschrijving: een datatabel onder de grafiek met dezelfde cijfers, of een tekstalinea die de belangrijkste trend beschrijft

## De 5 meest voorkomende fouten

In onze audits komen deze fouten het vaakst voor:

### 1. Decoratieve afbeeldingen met een beschrijving

Een sfeerfoto van een vergaderzaal met alt-tekst "drie mensen zitten rond een tafel in een lichte vergaderruimte met planten." Dat klinkt goed, maar het is ruis. De afbeelding is decoratief — een lege alt-tekst is beter.

### 2. Informatieve afbeeldingen zonder alt-tekst

Een productfoto in een webshop zonder alt-tekst. Een schermlezer leest de bestandsnaam voor: "product-sneaker-zwart-42-schuin.jpg." Of erger: de URL van de afbeelding.

### 3. Alle afbeeldingen dezelfde alt-tekst

"Afbeelding" of "foto" als alt-tekst voor elke afbeelding. Dat is bijna net zo slecht als geen alt-tekst — het geeft de gebruiker geen bruikbare informatie.

### 4. Alt-tekst die begint met "afbeelding van" of "foto van"

Een schermlezer kondigt een afbeelding al aan als "afbeelding." Als de alt-tekst dan begint met "afbeelding van een rode fiets," hoort de gebruiker "afbeelding, afbeelding van een rode fiets." Begin direct met de beschrijving: "Rode fiets geparkeerd tegen een geel hek."

### 5. Tekst in afbeeldingen niet opnemen in de alt-tekst

Een banner met de tekst "SALE — tot 50% korting — alleen dit weekend" als afbeelding. De alt-tekst is leeg of zegt "banner." Alle tekst die in een afbeelding staat, moet ook in de alt-tekst staan.

## Alt-teksten voor webshops

Webshops hebben honderden tot duizenden productafbeeldingen. Dat maakt alt-teksten een groot project. Een paar praktische tips:

- **Productafbeeldingen:** Beschrijf het product, de kleur en het relevante perspectief. "Witte katoenen T-shirt met V-hals, voorkant" is beter dan "product-wit-v-hals-001."
- **Meerdere foto's van hetzelfde product:** De eerste foto krijgt de volledige beschrijving. De overige foto's beschrijven wat er anders is: "zijaanzicht," "close-up van de stof," "model draagt het shirt."
- **Kleurvarianten:** Als je kleurvarianten toont als kleine thumbnails, beschrijf de kleur: "Blauw," "Rood," "Groen." Niet de volledige productbeschrijving herhalen.
- **Maattabellen als afbeelding:** Maak er een echte HTML-tabel van. Is dat niet mogelijk, neem dan alle maten en afmetingen op in de alt-tekst of bied een tekstalternatief aan.

## De interactieve keuzehulp

Weet je niet zeker welk type alt-tekst je nodig hebt? Gebruik onze keuzehulp. Beantwoord een paar vragen en je krijgt direct advies.

{{< protected-section token="frameless" >}}
{{< webapp-alt-tekst >}}
{{< /protected-section >}}

## Verder lezen

- [EAA voor webshops](/blog/eaa-voor-webshops/) — productafbeeldingen zijn een van de meest voorkomende problemen
- [Rapport per element vs. per succescriterium](/blog/rapport-per-element-vs-per-succescriterium/) — hoe wij rapporteren over alt-tekst problemen
- [Wat kost een toegankelijkheidsaudit?](/blog/wat-kost-een-toegankelijkheidsaudit/) — laat je afbeeldingen checken als onderdeel van een audit

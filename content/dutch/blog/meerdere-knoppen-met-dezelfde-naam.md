---
title: "Meerdere knoppen met dezelfde naam"
date: 2024-07-01
slug: "meerdere-knoppen-met-dezelfde-naam"
categories: 
  - "achtergrond_wcag"
tags: 
  - "2-4-6"
  - "toegankelijke-website"
description: "Waarom meerdere knoppen met dezelfde naam problematisch zijn voor schermlezers en hoe je dit oplost volgens WCAG."
keywords:
  - meerdere knoppen zelfde naam
  - toegankelijke naam knop
  - wcag knoppen toegankelijkheid
---

In een webshop kom je vaak een pagina tegen met veel producten, elk met een knop om het product aan de winkelmand toe te voegen. Soms heeft deze knop een zichtbare tekst, soms een icoon.

De meeste ziende gebruikers kunnen elke "Toevoegen aan winkelwagen"-knop associëren met het bijbehorende product door middel van visuele aanwijzingen, zoals de positie van de knop naast de naam en de foto van het product. Dus zelfs als de knoppen hetzelfde label of icoon delen, helpt hun visuele context bij het begrijpen bij welk product de knop hoort.

Maar voor blinde schermlezergebruikers die niet kunnen zien wat er op het scherm staat, is dit anders. Wanneer de schermlezer zo'n knop tegenkomt, kondigt hij "Toevoegen aan winkelwagen, knop" aan. Deze tekst is afkomstig van de toegankelijkheidsnaam van de knop. Helaas zie ik veel webshops waar deze naam niet duidelijk maakt met welk product de knop is geassocieerd.

Veel schermlezergebruikers verkennen de inhoud van pagina's met behulp van schermlezersneltoetsen. Een gebruiker kan bijvoorbeeld een lijst met alle knoppen op de pagina oproepen om een overzicht te krijgen van de beschikbare acties en snel naar de gewenste knop te navigeren.

De toegankelijke naam van elke knop moet de actie identificeren die deze initieert. Maar wanneer alle knoppen dezelfde naam hebben, hoe weet een gebruiker dan welke knop hij moet activeren als hij niet weet welk product aan zijn winkelwagen zal worden toegevoegd?

**Oplossing**: gebruik visueel verborgen tekst. Om de toegankelijke namen van de knoppen uniek te maken, kun je overwegen een stuk visueel verborgen tekst toe te voegen binnen elke knop die het product identificeert waarmee de knop is geassocieerd.

Bijvoorbeeld, een VoiceOver-gebruiker kan de Web Rotor openen (Control Option U) en een lijst genereren die alle knoppen op de pagina opsomt. In deze lijst worden de knoppen uit hun context gehaald. Bij het snel scannen van de knoppen is duidelijk dat ze zeer weinig waarde bieden, omdat er geen manier is om te achterhalen met welk product elke knop overeenkomt.

In de onderstaande voorbeeld zie je extra HTML in de knop en een CSS class "visually-hidden" die het probleem oplossen.

https://codepen.io/JuliaZjochova/pen/oNRrRwY

Hierdoor kan een schermlezer de unieke productinformatie aankondigen terwijl de visueel verborgen tekst niet zichtbaar is voor ziende gebruikers. Dit verbetert de toegankelijkheid zonder de visuele lay-out van de pagina te veranderen.

Dus nu, als de gebruiker de lijst met knoppen in hun schermlezer oproept, heeft elke knop een unieke toegankelijke naam die duidelijk het doel ervan identificeert.


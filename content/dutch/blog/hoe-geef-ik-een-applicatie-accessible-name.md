---
title: "Hoe geef ik een applicatie een accessible name?"
date: 2025-08-10
slug: "hoe-geef-ik-een-applicatie-accessible-name"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags:
  - "4-1-2"
  - "2-4-6"
description: "Hoe geef je een applicatie met role=\"application\" een correcte accessible name? Praktische uitleg voor developers met aria-labelledby."
keywords:
  - accessible name applicatie
  - aria-labelledby role application
  - wcag accessible name
---

Beginsituatie: er is een element met `role="application"` en het heeft geen toegankelijkheidsnaam (accessible name). Hoe kun je dit oplossen?

screenshot

Dit is het gewenste resultaat: de kop boven dit element moet in de accessible name voorkomen.

screenshot

Oplossing: gebruik van `aria-labelledby`

screenshot

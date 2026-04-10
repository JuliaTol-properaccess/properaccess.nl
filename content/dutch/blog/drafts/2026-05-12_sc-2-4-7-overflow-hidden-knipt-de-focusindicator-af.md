---
draft: true
title: "overflow: hidden knipt de focusindicator af"
date: 2026-05-12
slug: "sc-2-4-7-overflow-hidden-knipt-de-focusindicator-af"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "focus"
description: "overflow: hidden knipt de focusindicator af — WCAG 2.4.7 Focus zichtbaar (post 4/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - overflow: hidden knipt de focusindicator af
image: "/images/blog/linkedin-series/sc-2-4-7-overflow-hidden-knipt-de-focusindicator-af.png"
---

Een mooie kaartcomponent. Afgeronde hoeken. `overflow: hidden` om te voorkomen dat content buiten de hoeken valt.

Je tabt naar de link in de kaart. De focusindicator verschijnt. Maar alleen de bovenkant en onderkant. De linker- en rechterrand zijn afgeknipt door de container.

`overflow: hidden` op de parent verbergt alles wat buiten de container valt. Inclusief de outline van kindelementen.

```css
/* Niet doen: overflow hidden zonder ruimte voor focus */
.kaart {
  overflow: hidden;
  border-radius: 8px;
}

/* Optie 1: padding voor de outline */
.kaart {
  overflow: hidden;
  border-radius: 8px;
  padding: 4px;
}

/* Optie 2: inset box-shadow in plaats van outline */
.kaart a:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px #0066CC;
}
```

**Optie 1** geeft de outline ruimte om binnen de container te tekenen.
**Optie 2** gebruikt een inset box-shadow die altijd binnen het element blijft — nooit buiten de container.

**Waar komt dit voor?**
- Productkaarten in webshops
- Afbeeldingsgalerijen met afgeronde hoeken
- Carrousel-slides
- Card-based layouts

Tab door je kaarten. Wordt de focusindicator overal volledig getoond?

---
title: "outline: none — de meest destructieve regel in CSS"
date: 2026-03-17
slug: "sc-2-4-7-outline-none"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "css"
  - "focus"
  - "toetsenbord"
description: "outline: none — WCAG 2.4.7 Focus zichtbaar (post 1/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - outline none
  - focus-visible
image: "/images/blog/linkedin-series/sc-2-4-7-outline-none.png"
---

```css
*:focus { outline: none; }
```

Eén regel. En elke toetsenbordgebruiker op je website navigeert blind.

Tab. Waar ben ik? Geen idee. Tab. Waar ben ik nu? Geen idee. Tab. Ik geef op.

Die ene CSS-regel verwijdert de focusindicator van elk interactief element. Links, knoppen, invoervelden — allemaal zonder zichtbare focus.

## Waarom staat dit in zoveel codebases?

Omdat de standaard browser-outline "lelijk" is. Een blauwe of zwarte rand die niet bij het design past. En de eerste reflex van een developer is: weg ermee.

Maar de focusindicator is geen decoratie. Het is een navigatiehulpmiddel. Het equivalent van een muiscursor voor toetsenbordgebruikers.

## De fix

```css
/* Niet doen */
*:focus { outline: none; }

/* Wel doen: vervang door een mooiere variant */
*:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}
```

`:focus-visible` is de sleutel. Die toont de outline alleen bij toetsenbordnavigatie — niet bij muisklikken. Zo heb je het beste van beide werelden: geen "lelijke" outline bij klikken, wél een zichtbare focus bij tabben.

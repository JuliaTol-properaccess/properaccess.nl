---
title: "Custom component waarvan de focus is vergeten"
date: 2026-06-09
slug: "sc-2-4-7-custom-component-waarvan-de-focus-is-vergeten"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "focus"
description: "Custom component waarvan de focus is vergeten — WCAG 2.4.7 Focus zichtbaar (post 6/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - custom component waarvan de focus is vergeten
image: "/images/blog/linkedin-series/sc-2-4-7-custom-component-waarvan-de-focus-is-vergeten.png"
---

Een zelfgebouwde tabcomponent. Mooie styling. Hover-effecten. Transities.

Tab ernaartoe. Geen focusindicator. De developer heeft `border: none` en `outline: none` in de component-CSS gezet om de standaardstyling te verwijderen. En is vergeten een `:focus-visible` toe te voegen.

```css
/* Niet doen: styling verwijderen zonder alternatief */
.tab {
  border: none;
  outline: none;
  background: transparent;
  padding: 8px 16px;
}

/* Wel doen: eigen focusstijl toevoegen */
.tab {
  border: none;
  background: transparent;
  padding: 8px 16px;
}

.tab:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Waar ik dit het vaakst tegenkom:**
- Tabs en tabpanelen
- Accordions
- Dropdown-menu's
- Custom checkboxen en radiobuttons
- Kaartcomponenten met klikbare elementen
- Datepickers

Elke keer dat een developer `outline: none` schrijft, moet in dezelfde stylesheet een `:focus-visible` staan. Geen uitzondering.

**Tip:** voeg een globale focus-stijl toe aan je project en overschrijf die alleen als het echt nodig is:

```css
:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}
```

Dan heeft elk element standaard een zichtbare focus. En vergeet je het nooit meer.

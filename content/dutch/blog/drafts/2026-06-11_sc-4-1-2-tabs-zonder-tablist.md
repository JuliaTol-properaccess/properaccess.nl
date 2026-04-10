---
draft: true
title: "Tabs zonder tablist"
date: 2026-06-11
slug: "sc-4-1-2-tabs-zonder-tablist"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Tabs zonder tablist — WCAG 4.1.2 Naam, rol, waarde (post 6/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - tabs zonder tablist
image: "/images/blog/linkedin-series/sc-4-1-2-tabs-zonder-tablist.png"
---

Twee elementen met `role="tab"`. Een element met `role="tabpanel"`. Maar geen `role="tablist"`.

Een schermlezer ziet twee losse tabs. Maar weet niet dat ze bij elkaar horen. Het is alsof je twee knoppen hebt die toevallig "Tab 1" en "Tab 2" heten, maar geen relatie hebben.

```html
<!-- Niet doen: tabs zonder tablist -->
<div role="tab">Tab 1</div>
<div role="tab">Tab 2</div>
<div role="tabpanel">Inhoud van tab 1</div>

<!-- Wel doen: complete structuur -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div id="panel-1" role="tabpanel">Inhoud van tab 1</div>
<div id="panel-2" role="tabpanel" hidden>Inhoud van tab 2</div>
```

**Wat mist er in het foute voorbeeld?**
- `role="tablist"` als container
- `aria-selected` om de actieve tab aan te geven
- `aria-controls` om tabs aan panelen te koppelen
- `<button>` als basis (voor toetsenbordbediening)

**De les:** ARIA-rollen zijn geen losse labels die je op elementen plakt. Ze vormen patronen. Een tab hoort in een tablist. Een menuitem hoort in een menu. Een treeitem hoort in een tree. Als je de structuur niet compleet implementeert, werkt het niet.

Gebruik de WAI-ARIA Authoring Practices Guide voor het juiste patroon.

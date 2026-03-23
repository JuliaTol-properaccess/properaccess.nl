---
title: "Framework met Engels label, Nederlandse interface"
date: 2026-06-24
slug: "sc-2-5-3-framework-met-engels-label-nederlandse-interface"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: "Framework met Engels label, Nederlandse interface — WCAG 2.5.3 Label in naam (post 7/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - framework met engels label, nederlandse interface
image: "/images/blog/linkedin-series/sc-2-5-3-framework-met-engels-label-nederlandse-interface.png"
---

Een datepicker uit een UI-framework. Het veld toont "Kies een datum" in het Nederlands. Maar het `aria-label` — automatisch gegenereerd door het framework — zegt "Select date" in het Engels.

De gebruiker ziet Nederlands. De schermlezer hoort Engels. Spraakbesturing vindt geen match.

```html
<!-- Niet doen: framework-label in het Engels, interface in het Nederlands -->
<DatePicker aria-label="Select date" label="Kies een datum" />

<!-- Wel doen: alles in dezelfde taal -->
<DatePicker aria-label="Kies een datum" label="Kies een datum" />
```

**Waar komt dit vandaan?**

De meeste UI-frameworks zijn in het Engels gebouwd. Labels, aria-attributen, placeholders — alles standaard Engels. Als je de zichtbare tekst vertaalt maar de aria-attributen vergeet, krijg je een mismatch.

**Checklist bij het gebruik van framework-componenten:**
1. Vertaal het `label` (zichtbare tekst)
2. Vertaal het `aria-label` (als dat apart is)
3. Vertaal `placeholder` tekst
4. Vertaal foutmeldingen
5. Vertaal alle tekst in tooltips en hints

**Of:** kies een framework dat localisatie correct afhandelt en aria-labels automatisch overneemt van het zichtbare label.

Dit was post 7 van 7 over WCAG 2.5.3 Label in naam. De kern: wat je ziet moet overeenkomen met wat hulpsoftware hoort. Geen vertalingen, geen "betere omschrijvingen", geen CSS-toevoegingen. Dezelfde tekst. Dezelfde taal.

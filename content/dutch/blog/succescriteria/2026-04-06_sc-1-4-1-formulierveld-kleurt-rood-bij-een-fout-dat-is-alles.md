---
title: "Formulierveld kleurt rood bij een fout. Dat is alles."
date: 2026-04-06
slug: "sc-1-4-1-formulierveld-kleurt-rood-bij-een-fout-dat-is-alles"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Formulierveld kleurt rood bij een fout. Dat is alles. — WCAG 1.4.1 Gebruik van kleur (post 2/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - formulierveld kleurt rood bij een fout. dat is alles.
image: "/images/blog/linkedin-series/sc-1-4-1-formulierveld-kleurt-rood-bij-een-fout-dat-is-alles.png"
---

Je vult je e-mailadres verkeerd in. De rand van het veld wordt rood.

Geen tekst. Geen icoon. Geen uitleg. Alleen: rood.

Voor iemand met kleurenblindheid verandert er niets. De rand was grijs, de rand is nu... ook grijs. Of bruin. Of iets dat nauwelijks verschilt.

```html
<!-- Niet doen: alleen kleur -->
<label for="email">E-mailadres</label>
<input id="email" type="email" style="border-color: red;">

<!-- Wel doen: kleur + tekst + ARIA -->
<label for="email">E-mailadres</label>
<input id="email" type="email"
       aria-describedby="fout-email"
       aria-invalid="true"
       style="border-color: red;">
<p id="fout-email" class="foutmelding">
  Vul een geldig e-mailadres in.
</p>
```

**Drie toevoegingen:**
1. Een tekstuele foutmelding die uitlegt wat er mis is
2. `aria-invalid="true"` zodat schermlezers weten dat het veld een fout bevat
3. `aria-describedby` om de foutmelding te koppelen aan het veld

De rode rand mag er zijn. Maar niet als enige indicator.

**Bonuspunt:** voeg een icoon toe (een uitroepteken, een kruisje) naast de foutmelding. Drie signalen: kleur, tekst, icoon. Dan mist niemand het.

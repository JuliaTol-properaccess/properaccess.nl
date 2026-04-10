---
draft: true
title: "Focus gaat niet naar de foutmelding na het versturen"
date: 2026-07-03
slug: "sc-2-4-3-focus-gaat-niet-naar-de-foutmelding-na-het-versturen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Focus gaat niet naar de foutmelding na het versturen — WCAG 2.4.3 Focusvolgorde (post 8/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - focus gaat niet naar de foutmelding na het versturen
image: "/images/blog/linkedin-series/sc-2-4-3-focus-gaat-niet-naar-de-foutmelding-na-het-versturen.png"
---

Je vult een formulier in. Twee velden vergeten. Je drukt op Versturen.

Er verschijnen twee foutmeldingen. Bovenaan het formulier. In het rood.

Maar je focus? Die zit nog op de Versturen-knop. Onderaan het formulier. Je weet niet dat er foutmeldingen zijn. Je ziet ze niet. Een schermlezer leest ze niet voor.

**Voor een ziende muisgebruiker:** je ziet de rode tekst verschijnen. Geen probleem.

**Voor een toetsenbordgebruiker of schermlezergebruiker:** niets verandert. De pagina lijkt hetzelfde. Je drukt weer op Tab en navigeert verder. De foutmeldingen zitten ergens boven je. Onopgemerkt.

```javascript
// Niet doen: foutmeldingen tonen, focus blijft
function valideer() {
  const fouten = vindFouten();
  if (fouten.length > 0) {
    toonFoutmeldingen(fouten);
    // Focus blijft op de verzendknop
  }
}

// Wel doen: focus naar de eerste foutmelding
function valideer() {
  const fouten = vindFouten();
  if (fouten.length > 0) {
    toonFoutmeldingen(fouten);
    document.querySelector(".foutmelding")?.focus();
  }
}
```

**Het foutmelding-element moet focusbaar zijn:**

```html
<div class="foutmelding" role="alert" tabindex="-1">
  2 fouten gevonden. Controleer de gemarkeerde velden.
</div>
```

`role="alert"` zorgt dat schermlezers de melding direct aankondigen. `tabindex="-1"` maakt het element programmatisch focusbaar (maar niet via Tab).

**De gebruiker heeft net iets gedaan** (formulier versturen) **en verwacht feedback.** Als die feedback buiten de focus zit, bestaat die niet.

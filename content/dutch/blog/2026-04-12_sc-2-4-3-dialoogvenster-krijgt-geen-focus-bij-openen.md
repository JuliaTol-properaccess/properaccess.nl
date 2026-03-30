---
title: "Dialoogvenster krijgt geen focus bij openen"
date: 2026-04-12
slug: "sc-2-4-3-dialoogvenster-krijgt-geen-focus-bij-openen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Dialoogvenster krijgt geen focus bij openen — WCAG 2.4.3 Focusvolgorde (post 2/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - dialoogvenster krijgt geen focus bij openen
image: "/images/blog/linkedin-series/sc-2-4-3-dialoogvenster-krijgt-geen-focus-bij-openen.png"
---

Een popup verschijnt. "Wil je cookies accepteren?"

Je drukt op Tab. En je zit in het navigatiemenu. Achter de popup. De focus is niet naar het dialoogvenster verplaatst.

Je kunt de popup zien. Maar niet bedienen. Niet zonder tientallen keren op Tab te drukken tot je toevallig bij de knoppen in de popup aankomt.

Dit is een van de meest frustrerende toetsenbordproblemen. Het venster is er. De knoppen zijn er. Maar de focus is ergens anders.

```javascript
// Niet doen: popup tonen zonder focus te verplaatsen
function openDialog() {
  dialog.style.display = "block";
  // Focus blijft waar die was
}

// Wel doen: focus naar het dialoogvenster
function openDialog() {
  dialog.style.display = "block";
  dialog.querySelector("button, [href], input")?.focus();
}
```

**Of gebruik het `<dialog>`-element:**

```html
<dialog id="mijnDialog">
  <h2>Cookies</h2>
  <button>Accepteren</button>
  <button>Weigeren</button>
</dialog>
```

```javascript
document.getElementById("mijnDialog").showModal();
// Focus gaat automatisch naar het dialoogvenster
```

`showModal()` doet het zware werk: focus verplaatsen, focus trap, Escape om te sluiten. Allemaal gratis.

**Geldt voor:** cookiebanners, bevestigingspopups, lightboxes, mobiele menu's, videoplayers in een overlay, formulieren in een modal.

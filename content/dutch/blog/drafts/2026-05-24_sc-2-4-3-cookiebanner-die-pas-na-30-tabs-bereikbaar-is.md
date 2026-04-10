---
draft: true
title: "Cookiebanner die pas na 30 tabs bereikbaar is"
date: 2026-05-24
slug: "sc-2-4-3-cookiebanner-die-pas-na-30-tabs-bereikbaar-is"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Cookiebanner die pas na 30 tabs bereikbaar is — WCAG 2.4.3 Focusvolgorde (post 5/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - cookiebanner die pas na 30 tabs bereikbaar is
image: "/images/blog/linkedin-series/sc-2-4-3-cookiebanner-die-pas-na-30-tabs-bereikbaar-is.png"
---

Een cookiebanner onderaan het scherm. "Wij gebruiken cookies." Twee knoppen: Accepteren en Weigeren.

Je drukt op Tab. De focus gaat naar het logo. Tab. Naar het menu. Tab. Tab. Tab. Door alle menulinks. Tab. Door de content. Tab. Door de sidebar. Tab. Door de footer.

En dan — eindelijk — bij de cookiebanner.

Ondertussen bedekt de banner de content die je net probeerde te lezen.

**Het probleem:** de cookiebanner staat onderaan de HTML. De focus volgt de HTML-volgorde. Dus eerst de hele pagina, dan de banner.

**Twee oplossingen:**

1. Zet de banner bovenaan in de HTML:
```html
<div class="cookiebanner" role="dialog" aria-label="Cookiemelding">
  <p>Wij gebruiken cookies.</p>
  <button autofocus>Accepteren</button>
  <button>Weigeren</button>
</div>
<header>...</header>
<main>...</main>
```

2. Verplaats de focus met JavaScript:
```javascript
window.addEventListener("load", () => {
  const banner = document.querySelector(".cookiebanner");
  if (banner) banner.querySelector("button")?.focus();
});
```

**Waarom is dit zo belangrijk?**

Omdat de cookiebanner de eerste interactie is die je van je bezoeker vraagt. Als die interactie pas na 30 tabs bereikbaar is, begin je de ervaring met frustratie.

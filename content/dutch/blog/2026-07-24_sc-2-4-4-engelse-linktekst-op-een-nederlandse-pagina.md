---
title: "Engelse linktekst op een Nederlandse pagina"
date: 2026-07-24
slug: "sc-2-4-4-engelse-linktekst-op-een-nederlandse-pagina"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Engelse linktekst op een Nederlandse pagina — WCAG 2.4.4 Linkdoel (in context) (post 14/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - engelse linktekst op een nederlandse pagina
image: "/images/blog/linkedin-series/sc-2-4-4-engelse-linktekst-op-een-nederlandse-pagina.png"
---

Een Nederlandstalige website. Een link naar de contactpagina. Met een `aria-label="Get in touch"`.

De schermlezer staat ingesteld op Nederlands. En leest voor: "Get ien toetsj."

Onverstaanbaar. Omdat de schermlezer de Engelse tekst met Nederlandse uitspraakregels voorleest.

```html
<!-- Niet doen: Engels label op een NL-pagina -->
<a href="/contact" aria-label="Get in touch">
  <img src="contact.svg" alt="">
</a>

<!-- Wel doen: Nederlands label -->
<a href="/contact" aria-label="Neem contact op">
  <img src="contact.svg" alt="">
</a>

<!-- Of: Engels label met taalattribuut -->
<a href="/contact" aria-label="Get in touch" lang="en">
  <img src="contact.svg" alt="">
</a>
```

Het `lang="en"` attribuut vertelt de schermlezer: lees dit in het Engels voor. Dan klinkt het wel goed.

**Waar gaat dit mis?**
- Frameworks die standaard Engelse labels genereren
- CMS-plugins met Engelse alt-teksten
- Developers die code kopiëren van Engelstalige voorbeelden
- Templates met hardcoded Engelse ARIA-attributen

Dit was post 14 van 14 over WCAG 2.4.4 Linkdoel. De kern: een link moet je vertellen waar je naartoe gaat. Niet met decoratieve tekens, niet met een URL, niet in de verkeerde taal. Gewoon duidelijk.

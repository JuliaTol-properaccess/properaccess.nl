---
draft: true
title: "Custom checkboxen en radiobuttons"
date: 2026-06-18
slug: "sc-1-4-11-custom-checkboxen-en-radiobuttons"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Custom checkboxen en radiobuttons — WCAG 1.4.11 Contrast van niet-tekstuele content (post 7/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - custom checkboxen en radiobuttons
image: "/images/blog/linkedin-series/sc-1-4-11-custom-checkboxen-en-radiobuttons.png"
---

Een checkbox. Lichtgrijze rand. Afgeronde hoeken. Past perfect bij het design.

Maar die rand? #C0C0C0 op wit. Contrast: 1,9:1.

Je ziet een leeg vierkantje. Of eigenlijk: je ziet bijna niets. Is het een checkbox? Een tekstveld? Een decoratief element?

Zodra je de standaard browser-checkboxen of radiobuttons vervangt door eigen ontwerpen, moet het contrast van de randen en selectie-indicatoren minimaal 3:1 zijn met de achtergrond.

Dat geldt voor:
- De rand van de lege checkbox
- Het vinkje of de vulling van de aangevinkte checkbox
- De rand van de radiobutton
- De stip van de geselecteerde radiobutton
- De rand en positie van een toggle switch

```css
/* Niet doen — rand contrast 1,9:1 */
.checkbox-custom {
  border: 2px solid #C0C0C0;
}

/* Wel doen — rand contrast 4,6:1 */
.checkbox-custom {
  border: 2px solid #767676;
}

/* Aangevinkte staat: vinkje moet ook contrasteren */
.checkbox-custom--checked {
  background-color: #2056A5;
  border-color: #2056A5;
}
/* Wit vinkje op #2056A5: contrast 8,6:1 */
```

**De makkelijkste oplossing?** Gebruik de standaard browser-checkboxen. Moderne browsers stijlen die al behoorlijk. En ze hoeven niet te worden getest — browser-native elementen zijn uitgezonderd.

**Wil je toch custom?** Dan is het jouw verantwoordelijkheid. Meet elke staat: leeg, aangevinkt, hover, focus, disabled.

Dit was post 7 van 7 over WCAG 1.4.11 Niet-tekstueel contrast. Van iconen tot checkboxen: als een grafisch element informatie geeft, moet het zichtbaar zijn. 3:1. Geen uitzonderingen (behalve als de browser het tekent).

---
title: "Dialoogvenster met geen ruimte voor de inhoud"
date: 2026-06-17
slug: "sc-1-4-10-dialoogvenster-met-geen-ruimte-voor-de-inhoud"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Dialoogvenster met geen ruimte voor de inhoud — WCAG 1.4.10 Reflow (post 7/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - dialoogvenster met geen ruimte voor de inhoud
image: "/images/blog/linkedin-series/sc-1-4-10-dialoogvenster-met-geen-ruimte-voor-de-inhoud.png"
---

Je klikt op "Meer informatie". Een dialoogvenster opent.

Header bovenaan: titel + sluitknop. Footer onderaan: twee knoppen. Daartussen: de inhoud.

Bij 100% zoom: overzichtelijk. Bij 400% zoom: de header en footer nemen samen 80% van het scherm in. Voor de inhoud heb je een reepje van twee regels over.

Je kunt lezen: "Weet je zeker dat je..." En de rest? Scrollen. Maar als de body van het dialoogvenster geen scrollbar heeft, kun je de rest helemaal niet lezen.

Dit is een probleem dat ik vooral zie bij modals, drawers en cookie-consent-popups. De header en footer hebben een vaste hoogte. De body krijgt wat overblijft. Bij inzoomen blijft er niets over.

**De oplossing:** gebruik een flex-layout waarbij de body het resterende schermoppervlak benut.

```css
/* Niet doen */
.dialog-header { position: sticky; height: 60px; }
.dialog-footer { position: sticky; height: 80px; }

/* Wel doen */
.dialog {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
.dialog-header { flex-shrink: 0; }
.dialog-body { flex: 1; overflow-y: auto; }
.dialog-footer { flex-shrink: 0; }
```

De header en footer krimpen niet (`flex-shrink: 0`) maar hebben geen vaste hoogte meer — ze zijn zo groot als hun content. De body vult de resterende ruimte en krijgt een scrollbar als dat nodig is.

**Eenvoudige test:** open een dialoogvenster op je website en zoom in tot 400%. Kun je alle tekst in het venster lezen? Kun je de knoppen bereiken?

---
title: "Automatisch toepassen van huisstijlkleuren in software: contrastproblemen voorkomen"
date: 2025-12-03
slug: "huisstijlkleuren-software-contrastproblemen-wcag"
categories: 
  - "tips-en-tools"
description: "Hoe voorkom je contrastproblemen bij automatisch toepassen van huisstijlkleuren? Praktische uitleg en WCAG-tips voor toegankelijke software."
keywords:
  - huisstijlkleuren wcag
  - kleurcontrast software
  - wcag contrastproblemen
---

Sommige softwareleveranciers die SAS-achtige platforms aan meerdere klanten aanbieden, bieden de mogelijkheid om de interface automatisch te stylen. Dit gebeurt dan op basis van de huisstijl van de klant.Vaak wordt hiervoor het kleurenpalet uit het logo van de organisatie gebruikt. Hoewel dit op het eerste gezicht logisch en efficiënt lijkt, brengt deze aanpak een belangrijk risico met zich mee. Het gaat daarbij om onvoldoende kleurcontrast van tekst, wat direct invloed heeft op de digitale toegankelijkheid.

Voor overheidssoftware – waar toegankelijkheid wettelijk verplicht is volgens WCAG 2.1 AA – kan onvoldoende contrast leiden tot ernstige problemen en non-compliance.

## Hoe ontstaan contrastproblemen?

Een logo is een kunstobject waarvoor geen contrasteisen gelden. Maar de kleuren uit dat logo kunnen niet zonder risico worden toegepast in gebruikersinterfaces. Vooral lichte of verzadigde kleuren zijn vaak niet geschikt voor tekst.

Wanneer deze kleuren worden gebruikt op bijvoorbeeld een witte achtergrond, is het risico groot dat het kleurcontrast onder de WCAG-minimumwaarde van 4,5:1 zakt. Dit maakt tekst moeilijk leesbaar en kan belangrijke informatie ontoegankelijk maken.

## Waarom kleurcontrast essentieel is voor overheidssoftware

Overheidsorganisaties én bedrijven die aan de overheid of consumenten leveren, hebben een wettelijke plicht om digitale toegang voor iedereen te waarborgen. Slecht kleurcontrast heeft meerdere gevolgen:

- Mensen met een visuele beperking of gebruikers in fel zonlicht kunnen informatie niet lezen.
- De gebruikerservaring verslechtert, ook voor mensen zonder beperking.
- De software voldoet niet aan WCAG 2.1 AA, met mogelijke juridische of. contractuele gevolgen

Kortom: het is essentieel dat gebruikersinterfaces niet blindelings de huisstijlkleuren uit een logo gebruiken, maar deze eerst toetsen op toegankelijkheid.

## Voorbeeld: automatisch kleurcontrast testen met JavaScript

Onderstaand script helpt leveranciers om automatisch alle logokleuren te testen op contrast. Het vergelijkt elke kleur met wit (`#FFFFFF`). Daarnaast verschijnt een melding wanneer het contrast te laag is om te voldoen aan de WCAG-eisen.

```
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  };
}

function luminance({ r, g, b }) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(hex1, hex2) {
  const lum1 = luminance(hexToRgb(hex1));
  const lum2 = luminance(hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

function checkContrastWithWhite(hex) {
  const ratio = contrastRatio(hex, "#FFFFFF");
  if (ratio < 4.5) {
    console.warn(`⚠️ Contrast te laag (${ratio.toFixed(2)}): ${hex}`);
  } else {
    console.log(`✔️ Contrast OK (${ratio.toFixed(2)}): ${hex}`);
  }
}

// Voorbeeld
const logoKleuren = ["#FFD400", "#004C97", "#00AEEF"];
logoKleuren.forEach(checkContrastWithWhite);
```

Deze automatische checks voorkomen contrastfouten nog vóórdat de software bij de klant terechtkomt.

## Conclusie

Het automatisch toepassen van huisstijlkleuren uit een logo in tekst lijkt een praktisch idee.Dit kan echter alleen veilig worden toegepast wanneer deze kleuren vooraf worden gecontroleerd op toegankelijkheid. Door contrastmetingen te automatiseren kunnen softwareleveranciers:

- contrastproblemen voorkomen
- voldoen aan de eisen van WCAG 2.1 AA
- de kwaliteit en bruikbaarheid van hun UI verbeteren
- risico’s op juridische en contractuele gevolgen minimaliseren

Software die door of voor de overheid wordt gebruikt, moet voor iedereen toegankelijk zijn. Contrastcontrole is een kleine investering met een groot effect.

---
title: "Taalswitch met alleen 'EN' en 'NL': hoe maak je die toegankelijk?"
date: 2026-03-02
slug: "taalswitch-met-alleen-en-en-nl-hoe-maak-je-die-toegankelijk"
categories:
  - "webdeveloper"
tags:
  - "2-5-3"
  - "4-1-2"
description: "Taalswitch met alleen 'EN' en 'NL'? Leer waarom aria-hidden op zichtbare tekst problemen geeft en hoe je het wél toegankelijk maakt."
keywords:
  - taalswitch toegankelijk
  - aria-hidden probleem
  - WCAG 2.5.3
  - label in name
  - meertalige website
  - spraaksturing
  - toegankelijke code
---

Je hebt vast wel eens zo'n strakke taalswitch gezien: twee letters, een sliding indicator, mooi geanimeerd. EN | NL. Simpel. Elegant. En meestal compleet ontoegankelijk.

Ik kwam laatst deze uitdaging tegen:

```html
<a data-lang="en-NL" href="#" aria-label="Switch language">
  <span aria-hidden="" class="...">EN</span>
  <span aria-hidden="true" class="...">NL</span>
</a>
```

Op het eerste gezicht niks mis mee. Visueel werkt het perfect. Maar voor iemand met een schermlezer? Die hoort "Switch language" met de Nederlandse uitspraakregels. En voor iemand die met spraaksturing werkt? Die kan het niet eens activeren.

Laten we uitzoeken wat hier fout gaat en hoe je het wél goed doet.

## De problemen met aria-hidden op zichtbare tekst

Laten we de code nog een keer bekijken:

```html
<a aria-label="Switch language">
  <span aria-hidden="">EN</span>
  <span aria-hidden="true">NL</span>
</a>
```

### Probleem 1: Spraakgestuurde gebruikers kunnen het niet activeren

Dit is waar **SC 2.5.3 Label in Name (niveau A)** om de hoek komt kijken. Die regel zegt: **als er zichtbare tekst op een knop of link staat, moet die tekst onderdeel zijn van de toegankelijke naam**.

Waarom? Mensen die spraaksturing gebruiken (denk aan Dragon NaturallySpeaking) navigeren door te zeggen wat ze zien. Als ze "EN" zien staan, zeggen ze "klik EN". De software zoekt dan naar een element met "EN" in de toegankelijke naam.

Maar omdat `aria-hidden` de tekst verbergt voor hulptechnologie, is er geen match. De gebruiker kan het element niet activeren door de zichtbare tekst te zeggen.

✅ Wel toegankelijk: zichtbare tekst = "EN", toegankelijke naam = "English (EN)"  
⚠️ Niet toegankelijk: zichtbare tekst = "EN" of "NL", toegankelijke naam = "Switch language"

### Probleem 2: Geen indicatie van de huidige taal

Stel, je bent op de Nederlandse versie van de site. Visueel zie je misschien een sliding indicator bij "NL". Maar een schermlezer-gebruiker weet niet welke taal momenteel actief is. De link heeft geen state die dat aangeeft.

Dit raakt weer aan **SC 4.1.2**: de "Value" — de huidige staat — moet programmatisch bepaalbaar zijn.

## Oplossing 1: Eén link met een beter aria-label

De snelste fix? Gebruik een aria-label dat de zichtbare tekst **bevat** en geef context:

```html
<a href="#" aria-label="Engels (EN) is geselecteerd">
  <span>EN</span>
  <span>NL</span>
</a>
```

Het aria-label moet dynamisch veranderen wanneer een andere taal is geselecteerd!

Let op:

- De spans hebben **geen** `aria-hidden` meer. `Aria-label` overschrijft deze span-elementen.
- Het aria-label bevat "EN" (de zichtbare tekst) ✅

### Voordeel

- Eenvoudig door te voeren
- De visuele opmaak kan hetzelfde blijven
- Voldoet aan SC 2.5.3 en SC 4.1.2

## Veelgemaakte fouten (en hoe je ze voorkomt)

### ❌ Fout: aria-hidden op zichtbare tekst

```html
<a href="/en/">
  <span aria-hidden="true">EN</span>
</a>
```

**Waarom fout?** Spraakgestuurde gebruikers kunnen "klik EN" niet gebruiken.

**Oplossing:** Verwijder `aria-hidden` of zorg dat "EN" in de linktekst of het aria-label staat.

## Samenvatting: checklist voor toegankelijke taalwisselaars

- **Geen aria-hidden op zichtbare tekst** — de zichtbare tekst moet onderdeel zijn van de toegankelijke naam (SC 2.5.3)
- **Elke link heeft een toegankelijke naam** — geen lege aria-labels (SC 4.1.2)
- **Gebruik links, geen knoppen** — taalwisselen is navigatie wanneer je naar een andere pagina wordt gestuurd
- **Test met spraaksturing** — kan je "klik EN" zeggen en wordt de link geactiveerd?
- **Test met een schermlezer** — wordt de huidige taal aangekondigd?

## Tot slot

Een taalswitch lijkt een simpel component, maar er komt meer bij kijken dan je denkt. De combinatie van visueel ontwerp, semantische HTML en toegankelijkheid vraagt om **doordacht afwegen**.

De belangrijkste les? **Als een interactief element zichtbare tekst bevat, moet deze tekst in de toegankelijke naam van het element staan.**

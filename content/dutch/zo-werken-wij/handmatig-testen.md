---
title: "2. Handmatig testen"
hide_cta: true
meta_title: "Handmatig testen op toegankelijkheid: browsers, hulpsoftware en tools | Proper Access"
type: "zo-werken-wij"
layout: "agency"
date: 2026-05-30
slug: "handmatig-testen"
url: "/zo-werken-wij/handmatig-testen/"
weight: 2
description: "Automatische scans vinden maar een deel van de problemen. De rest komt naar boven via handmatig testen met schermlezer, toetsenbord en zoom."
keywords:
  - handmatig testen wcag
  - schermlezer test
  - toetsenbordnavigatie test
  - wcag tools

banner:
  title: "Stap 2: Handmatig testen"
  content: "Hier gaat het echte werk gebeuren. We lopen elke pagina na met schermlezer, toetsenbord, contrast-tools en zoomstanden, lezen de HTML en de Accessibility Tree, en voeren in totaal ongeveer tweehonderd testjes uit op elke pagina."
  button:
    enable: true
    label: "Vraag een audit aan"
    link: "/contact/"

trust:
  label: "Hulpsoftware die we gebruiken"
  names:
    - "NVDA + Firefox"
    - "VoiceOver + Safari"
    - "Toetsenbord-only"
    - "PAC (voor PDF's)"
    - "Contrast-tools"
---

{{< section-full >}}

Een automatische scan is een goed startpunt en geen eindpunt. Tools als axe en WAVE pakken een deel van de problemen, vooral de dingen die te formuleren zijn als regel ("dit veld heeft geen label", "deze afbeelding heeft geen alt-tekst"). Maar het grootste deel van de WCAG kun je niet automatisch toetsen, omdat de materie te complex is. Of een alt-tekst klopt. Of een focusvolgorde logisch is. Of een knop een herkenbare naam heeft voor iemand die hem niet ziet.

Daar komen wij langs. Per pagina in de steekproef lopen we systematisch alle HTML-elementen na terwijl we allerlei beperkingen simuleren. Dat is geen kunst, maar wel veel werk. Een gemiddelde audit zit op zestien tot vierentwintig uur testen.

{{< /section-full >}}

{{< section-full title="Wat automatische tools wel en niet vinden" >}}

- Automatische tools halen tussen de 20 en 30% van alle fouten op.
- Een deel van hun bevindingen is fout-positief.
- Vrijwel alle tools zijn Amerikaans en weten niet hoe wij als Nederlandse auditbureaus WCAG interpreteren.

Wat automatische tools vrij betrouwbaar vinden: ontbrekende alt-attributen, formuliervelden zonder label, onvoldoende kleurcontrast op platte tekst, ontbrekende `lang`-attributen, lege links, dubbele id's. Allemaal regel-gebaseerd.

Wat ze missen: of een alt-tekst de afbeelding correct beschrijft, of de focusvolgorde overeenkomt met de visuele leesvolgorde, of een dialog opent op de juiste plek, of de skiplink op een logische plek landt, of een schermlezer een tabel begrijpelijk voorleest, of een gebruiker een formulierfout kan herstellen, of een proces in stappen werkbaar is voor iemand die niet ziet. Dat is wat wij doen.

{{< /section-full >}}

{{< section-full title="Browsers en versies die we gebruiken" >}}

We testen in meerdere browsers, omdat schermlezers verschillend reageren per browser. We leggen in het rapport altijd vast welke versies actief waren tijdens de audit. Anders kun je een paar maanden later geen reproductie meer doen.

Een typische set:

- Chrome, laatste stabiele versie
- Firefox, laatste stabiele versie, in combinatie met NVDA
- Safari, laatste stabiele versie, in combinatie met VoiceOver
- PAC, alleen als er PDF's in de steekproef zitten

Standaard testen we één browser in het lichte thema en een andere in het donkere thema. Dark mode triggert soms eigen kleurinstellingen of focus-styling die in light mode goed staat maar in dark mode wegvalt; door het meteen mee te nemen ondervang je die verrassing later.

Versie en datum noteren we per browser in het rapport. Daar plukken we later de vruchten van: bij een hercontrole een paar maanden later weten we precies wat de uitgangssituatie was.

{{< /section-full >}}

{{< section-full title="Een greep uit wat we testen" bg="light" >}}

De vier kaartjes hieronder geven een idee van waar we op letten. Het is een kleine selectie uit de ongeveer tweehonderd testjes die per pagina langskomen, maar wel de vier die de meeste klanten herkennen.

{{< /section-full >}}

{{< section-cards columns="2" bg="light" >}}
{{< section-card title="Schermlezers" >}}

NVDA met Firefox is onze hoofd-combinatie voor desktop. VoiceOver met Safari voor macOS en iOS. We luisteren naar wat de schermlezer hardop maakt van een pagina, en kijken of dat overeenkomt met wat een gebruiker nodig heeft om de pagina te begrijpen en te bedienen.

{{< /section-card >}}
{{< section-card title="Toetsenbord-only" >}}

We sluiten de muis af. Werkt elk interactief element met Tab, Enter, Space en de pijltjestoetsen? Is de focus altijd zichtbaar? Sluit een modal goed af met Escape? Komen we niet vast te zitten in een widget?

{{< /section-card >}}
{{< section-card title="Zoom en text spacing" >}}

We zetten de browser op 200% en 400% zoom, en op 320 pixels breedte. Verdwijnt content? Loopt tekst niet meer? Werken knoppen nog? En we testen of de tekst kan ademen: letter-, woord- en regelafstand vergroten zonder dat het uit elkaar valt.

{{< /section-card >}}
{{< section-card title="Contrast en kleur" >}}

We meten contrast op tekst, op interactieve onderdelen en op informatieve iconen. We controleren of informatie ook werkt zonder kleur. Voor iemand die kleurenblind is, mag een fout niet alleen rood gemarkeerd zijn.

{{< /section-card >}}
{{< /section-cards >}}

{{< section-cta >}}

## Klaar voor stap 2?

Het handmatige werk is de kern van wat een audit waardevol maakt. Wil je weten hoeveel uur je daarvoor moet rekenen, of welk type audit het beste past?

[Stuur ons een mail](/contact/) [Bekijk wat een audit kost](/toegankelijkheidsaudit/)

{{< /section-cta >}}

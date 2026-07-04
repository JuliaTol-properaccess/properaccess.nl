---
title: "Toegankelijkheids-lens voor ontwikkelaars"
meta_title: "Toegankelijkheids-lens voor ontwikkelaars | Proper Access"
description: "Gratis bookmarklet die ARIA, toegankelijke namen, tabvolgorde, focus, contrast, tekstafstand en tekstvergroting live op je pagina toont. Voor front-end ontwikkelaars."
layout: "bookmarklet-install"
bookmarklet_key: "ontwikkelaars"
gratis: true
uitgelicht: true
weight: -2
doelgroep: ["Webdeveloper"]
keywords:
  - aria checken
  - tabvolgorde testen
  - toegankelijke naam controleren
  - contrast checken
  - tekst vergroten testen
  - focus zichtbaar maken
  - bookmarklet toegankelijkheid developer
checks:
  - titel: "ARIA-rollen en -attributen"
    uitleg: "De lens toont alle rollen en aria-attributen en markeert gebroken referenties naar id's die niet bestaan. Zo zie je meteen waar aria-labelledby of aria-controls nergens op wijst."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Toon toegankelijke naam"
    uitleg: "Elk interactief element (links, knoppen, formuliervelden) toont zijn toegankelijke naam: de naam die een screenreader voorleest. Elementen zonder naam worden als fout gemarkeerd."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Tabvolgorde"
    uitleg: "Elk focusbaar element krijgt een nummer in de volgorde waarin je er met Tab doorheen gaat. Positieve tabindex-waarden springen vóór de rest en worden als fout gemarkeerd, want die verstoren de logische toetsenbordvolgorde."
    wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/"
  - titel: "Focus zichtbaar maken"
    uitleg: "De lens forceert een duidelijke focusrand op elk element. Tab door de pagina om te zien of de focus altijd zichtbaar is en logisch verspringt."
    wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
  - titel: "Tekstcontrast"
    uitleg: "De lens meet het contrast van alle zichtbare tekst tegen de achtergrond en markeert tekst die onder de WCAG-grens komt (4,5:1 voor normale tekst, 3:1 voor grote tekst)."
    wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
  - titel: "Tekstafstand (1.4.12)"
    uitleg: "De lens past de WCAG-tekstafstanden toe: regelhoogte, letter- en woordafstand en alinea-afstand. Zo zie je meteen of er tekst wegvalt, overlapt of wordt afgekapt."
    wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
  - titel: "Tekst vergroten (200%)"
    uitleg: "De lens zet alle tekst op 200%, zoals een slechtziende bezoeker dat doet. Controleer of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
    wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
  - titel: "Iframes (titel)"
    uitleg: "Iframes zonder title of aria-label springen eruit. Een titel is nodig zodat een screenreadergebruiker weet wat er in het kader zit."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Element-info bij hover"
    uitleg: "Beweeg met de muis over de pagina en zie tag, id, class, rol, toegankelijke naam en afmeting van elk element. Sneller dan de inspector openen voor een snelle check."
---

Deze gratis lens laat de toegankelijkheid van je pagina live zien: ARIA, toegankelijke namen, tabvolgorde, focus, contrast, tekstafstand, tekstvergroting en iframes. Je sleept hem één keer naar je bladwijzerbalk en klikt hem daarna aan tijdens het bouwen of testen.

De lens draait volledig in je eigen browser en werkt op elke website, ook op localhost. Er wordt niets verstuurd of opgeslagen.

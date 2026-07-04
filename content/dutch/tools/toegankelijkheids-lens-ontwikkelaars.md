---
title: "Toegankelijkheids-lens voor ontwikkelaars"
meta_title: "Toegankelijkheids-lens voor ontwikkelaars | Proper Access"
description: "Gratis bookmarklet die ARIA, landmarks, labels, tabvolgorde, focus en tabellen live op je pagina toont. Voor front-end ontwikkelaars."
layout: "bookmarklet-install"
bookmarklet_key: "ontwikkelaars"
gratis: true
uitgelicht: true
weight: -2
doelgroep: ["Webdeveloper"]
keywords:
  - aria checken
  - tabvolgorde testen
  - landmarks controleren
  - focus zichtbaar maken
  - bookmarklet toegankelijkheid developer
checks:
  - titel: "ARIA-rollen en -attributen"
    uitleg: "De lens toont alle rollen en aria-attributen en markeert gebroken referenties naar id's die niet bestaan. Zo zie je meteen waar aria-labelledby of aria-controls nergens op wijst."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Landmarks"
    uitleg: "Alle landmarks worden getekend met hun rol. Je controleert of er precies één main is en of banner, navigation en contentinfo op hun plek staan."
    wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
  - titel: "Labelkoppeling (for/id)"
    uitleg: "Labels zonder for-attribuut en labels met een for die nergens op wijst worden apart gemarkeerd. Handig om koppelingen tussen label en veld te controleren."
    wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
  - titel: "Tabvolgorde (tabindex)"
    uitleg: "Elk element met een tabindex krijgt zijn waarde te zien. Positieve waarden worden als fout gemarkeerd, want die verstoren de logische toetsenbordvolgorde."
    wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/"
  - titel: "Focus zichtbaar maken"
    uitleg: "De lens forceert een duidelijke focusrand op elk element. Tab door de pagina om te zien of de focus altijd zichtbaar is en logisch verspringt."
    wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
  - titel: "Tabellen (th/scope)"
    uitleg: "De lens markeert tabellen zonder header-cellen, zonder scope of met geneste tabellen. Zo controleer je of datatabellen een correcte structuur hebben."
    wcag: "/blog/sc-1-3-1-tabellen/"
  - titel: "Iframes (titel)"
    uitleg: "Iframes zonder title of aria-label springen eruit. Een titel is nodig zodat een screenreadergebruiker weet wat er in het kader zit."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Dubbele id's"
    uitleg: "De lens markeert id's die meer dan één keer voorkomen. Dubbele id's breken label- en ARIA-koppelingen en zorgen voor onvoorspelbaar gedrag."
    wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
  - titel: "Element-info bij hover"
    uitleg: "Beweeg met de muis over de pagina en zie tag, id, class, rol, toegankelijke naam en afmeting van elk element. Sneller dan de inspector openen voor een snelle check."
---

Deze gratis lens laat de toegankelijkheidsstructuur van je pagina live zien: ARIA, landmarks, labelkoppelingen, tabvolgorde, focus, tabellen en iframes. Je sleept hem één keer naar je bladwijzerbalk en klikt hem daarna aan tijdens het bouwen of testen.

De lens draait volledig in je eigen browser en werkt op elke website, ook op localhost. Er wordt niets verstuurd of opgeslagen.

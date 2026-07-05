---
title: "Toegankelijkheids-lens"
meta_title: "Toegankelijkheids-lens (Redactie, Designer, Developer) | Proper Access"
description: "Gratis bookmarklet met drie tabbladen: Redactie, Designer en Developer. Laat op elke pagina live zien of alt-teksten, koppen, contrast, focus, ARIA, tabvolgorde en meer kloppen."
layout: "bookmarklet-install"
bookmarklet_key: "lens"
gratis: true
uitgelicht: true
weight: -3
doelgroep: ["Webredactie", "Webdesigner", "Webdeveloper"]
aliases:
  - /tools/toegankelijkheids-lens-webredactie/
  - /tools/toegankelijkheids-lens-designers/
  - /tools/toegankelijkheids-lens-ontwikkelaars/
  - /tools/alt-tekst-checker/
  - /tools/koppenstructuur-checker/
  - /tools/link-checker/
  - /tools/tabel-checker/
keywords:
  - toegankelijkheid checken
  - alt-tekst controleren
  - koppenstructuur checken
  - linkteksten wcag
  - contrast checken pagina
  - kleurblind simulatie
  - doelgrootte wcag
  - tekstafstand testen
  - aria checken
  - tabvolgorde testen
  - toegankelijke naam controleren
  - tekst vergroten testen
  - focus zichtbaar maken
  - bookmarklet toegankelijkheid
tabs:
  - label: "Redactie"
    checks:
      - titel: "Afbeeldingen en alt-tekst"
        uitleg: "Je ziet welke afbeeldingen een alt-tekst hebben, welke een leeg alt-attribuut hebben (alt=\"\") en welke er geen hebben. De lens toont de alt-tekst, maar oordeelt niet: jij bepaalt of een afbeelding betekenis draagt of niet."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
      - titel: "Koppen en structuur"
        uitleg: "De lens tekent alle koppen met hun niveau en waarschuwt als je een niveau overslaat. Een logische koppenstructuur helpt iedereen die de pagina scant of met een screenreader leest."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
      - titel: "Linkteksten"
        uitleg: "De lens markeert vage links zoals “lees meer” en links zonder tekst. Een goede linktekst vertelt op zichzelf waar je terechtkomt."
        wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/"
      - titel: "Zintuiglijke verwijzingen"
        uitleg: "De lens markeert woorden als “links”, “rechts” en “hieronder”. Wie de pagina niet ziet, weet dan niet waar iets staat. Controleer of je de instructie ook zonder die verwijzing kunt begrijpen."
        wcag: "/blog/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen/"
      - titel: "Taal van de pagina"
        uitleg: "Je ziet of de paginataal is ingesteld en welke onderdelen een andere taal hebben. De juiste taal zorgt dat een screenreader de woorden goed uitspreekt."
        wcag: "/blog/sc-3-1-1-wat-betekent-taal-van-de-pagina/"
      - titel: "Lijststructuur"
        uitleg: "De lens markeert echte lijsten, zodat je ziet of opsommingen ook echt als lijst zijn opgemaakt en niet als losse regels met streepjes."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
      - titel: "Tabellen"
        uitleg: "De lens markeert tabellen zonder kopcellen of bijschrift. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort, zodat een bezoeker een tabel kan volgen."
        wcag: "/blog/sc-1-3-1-tabellen/"
      - titel: "Titels van ingesloten kaders"
        uitleg: "De lens markeert ingesloten kaders (iframes), zoals een video of een kaart, zonder titel. Een titel vertelt een screenreadergebruiker wat er in het kader zit."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
      - titel: "Paginatitel"
        uitleg: "De lens toont de titel van de pagina. Een duidelijke, unieke titel helpt bezoekers om tabbladen en zoekresultaten uit elkaar te houden."
        wcag: "/blog/sc-2-4-2-wat-betekent-paginatitels/"
      - titel: "Opmaak uit (leesvolgorde)"
        uitleg: "Met één klik zet je alle opmaak uit. Je ziet dan de kale volgorde waarin een screenreader de pagina voorleest. Loopt je verhaal nog logisch?"
        wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/"
      - titel: "Tekst contrast"
        uitleg: "De lens markeert automatisch tekst op een effen achtergrond die te weinig contrast heeft. Voor tekst op een foto of gradient meet je zelf twee kleuren met de twee pipetten. Je ziet meteen de contrastverhouding en of die voldoet aan de eis voor normale en grote tekst."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
  - label: "Designer"
    checks:
      - titel: "Tekst contrast"
        uitleg: "De lens markeert automatisch tekst op een effen achtergrond die te weinig contrast heeft. Voor tekst op een foto of gradient meet je zelf twee kleuren met de twee pipetten. Je ziet meteen de contrastverhouding en of die voldoet aan de eis voor normale en grote tekst."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
      - titel: "Grijswaarden (kleurblind-check)"
        uitleg: "Met één klik wordt de pagina grijs. Zo controleer je of informatie zoals links of foutmeldingen ook zonder kleur te herkennen is."
        wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/"
      - titel: "Focus zichtbaar maken"
        uitleg: "De lens forceert een duidelijke focusrand. Tab door je ontwerp om te zien of elke interactieve laag een zichtbare focus heeft."
        wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
      - titel: "Doelgrootte (24px)"
        uitleg: "De lens markeert klikbare elementen die kleiner zijn dan 24 bij 24 pixels. Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen. Gebruik de markering als startpunt om te controleren."
        wcag: "/blog/sc-2-5-8-wat-betekent-doelgrootte-minimum/"
      - titel: "Tekstafstand (1.4.12)"
        uitleg: "De lens past de WCAG-tekstafstanden toe. Kijk of er tekst wegvalt, overlapt of wordt afgekapt als een bezoeker meer ruimte tussen letters en regels instelt."
        wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
      - titel: "Tekst vergroten (200%)"
        uitleg: "De lens zet alle tekst op 200%, zoals een slechtziende bezoeker dat doet. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
      - titel: "Tekst vergroten (400%)"
        uitleg: "De lens zet alle tekst op 400%. Kijk of de tekst nog leesbaar meebeweegt zonder horizontaal scrollen en of niets overlapt of wegvalt."
        wcag: "/blog/sc-1-4-10-wat-betekent-reflow/"
      - titel: "Blokken en tagnamen tonen"
        uitleg: "Alle blokken krijgen een rand en de belangrijkste structuurelementen tonen hun tagnaam. Zo zie je hoe de semantiek onder je ontwerp is opgebouwd."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
      - titel: "Afbeeldingen uit"
        uitleg: "Afbeeldingen worden vervaagd. Kijk of je ontwerp zonder beeld nog te begrijpen is en of de tekst het verhaal alleen kan dragen."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
      - titel: "Liniaal en hulplijnen"
        uitleg: "Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden nauwkeurig kunt nalopen."
  - label: "Developer"
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
      - titel: "Tekst contrast"
        uitleg: "De lens markeert automatisch tekst op een effen achtergrond die onder 4,5:1 (normale tekst) of 3:1 (grote tekst) zakt. Voor tekst op een afbeelding of gradient meet je zelf twee kleuren met de twee pipetten."
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

Deze gratis lens laat de toegankelijkheid van je pagina live zien, direct in je eigen browser. Sleep hem één keer naar je bladwijzerbalk en klik hem daarna aan op elke website, ook achter een login of op localhost. Er wordt niets verstuurd of opgeslagen.

Bovenin het paneel wissel je tussen drie tabbladen, afgestemd op wat jij doet:

- **Redactie**, voor alt-teksten, koppen, linkteksten, tabellen, taal en contrast.
- **Designer**, voor contrast, kleurgebruik, focus, doelgrootte, tekstafstand en tekstvergroting.
- **Developer**, voor ARIA, toegankelijke namen, tabvolgorde, focus, contrast en iframes.

De lens vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen.

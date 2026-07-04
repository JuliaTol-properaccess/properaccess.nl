---
title: "Toegankelijkheids-lens voor webredactie"
meta_title: "Toegankelijkheids-lens voor webredactie | Proper Access"
description: "Gratis bookmarklet die op elke pagina laat zien of je alt-teksten, koppen, linkteksten en labels kloppen. Speciaal voor webredacteuren."
layout: "bookmarklet-install"
bookmarklet_key: "webredactie"
gratis: true
uitgelicht: true
weight: -3
doelgroep: ["Webredactie"]
aliases:
  - /tools/alt-tekst-checker/
  - /tools/koppenstructuur-checker/
  - /tools/link-checker/
  - /tools/tabel-checker/
keywords:
  - toegankelijkheid checken content
  - alt-tekst controleren
  - koppenstructuur checken
  - linkteksten wcag
  - bookmarklet toegankelijkheid
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
    uitleg: "Meet zelf twee kleuren op de pagina met twee pipetten, bijvoorbeeld je tekstkleur en de achtergrond. Je ziet meteen de gemeten contrastverhouding en of die voldoet aan de eis voor normale en grote tekst."
    wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
---

Als webredacteur bepaal je elke dag of je content voor iedereen te gebruiken is. Deze gratis lens laat direct op je eigen pagina zien of je alt-teksten, koppen, linkteksten, tabellen en contrast kloppen. Je sleept hem één keer naar je bladwijzerbalk en klikt hem daarna op elke website aan.

De lens vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen voordat je publiceert.

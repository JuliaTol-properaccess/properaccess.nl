---
title: "WCAG Radar"
meta_title: "WCAG Radar (Redactie, Designer, Developer) | Proper Access"
description: "Gratis bookmarklet met drie tabbladen: Redactie, Designer en Developer. Laat op elke pagina live zien of alt-teksten, koppen, contrast, focus, ARIA, tabvolgorde en meer kloppen."
layout: "bookmarklet-install"
bookmarklet_key: "lens"
gratis: true
uitgelicht: true
weight: -3
doelgroep: ["Webredactie", "Webdesigner", "Webdeveloper"]
aliases:
  - /tools/toegankelijkheids-lens/
  - /tools/toegankelijkheids-lens-webredactie/
  - /tools/toegankelijkheids-lens-designers/
  - /tools/toegankelijkheids-lens-ontwikkelaars/
  - /tools/alt-tekst-checker/
  - /tools/koppenstructuur-checker/
  - /tools/link-checker/
  - /tools/tabel-checker/
  - /tools/kleurcontrast-checker/
  - /tools/tekstafstand-check/
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
hero_sub: "Een gratis knop in je bladwijzerbalk die op elke pagina laat zien hoe het met de toegankelijkheid staat. Koppen, alt-teksten, contrast, focus, ARIA en tabvolgorde, direct zichtbaar op je eigen scherm. De radar draait volledig in je browser: er wordt niets verstuurd en niets opgeslagen."
rollen:
  - eyebrow: "Voor webredactie"
    titel: "De controles die je elke week doet, in één klik"
    svg: "redactie"
    tekst: |
      Als redacteur werk je in het CMS, niet in de code. Toch bepaalt jouw werk een groot deel van de toegankelijkheid: de alt-teksten, de koppenstructuur, de linkteksten, de tabellen. Precies daar gaat het het vaakst mis.

      Onze ambitie met het tabblad Redactie is simpel: de controles die je toch al zou moeten doen, zo makkelijk maken dat je ze ook echt doet. Je hoeft geen broncode te lezen en geen developer te vragen. Je klikt de radar aan en ziet meteen welke afbeelding geen alt-tekst heeft, waar een kopniveau wordt overgeslagen en welke link "lees meer" heet.

      De radar oordeelt niet voor je. Bij een alt-tekst laat hij zien wat er staat, jij bepaalt of dat klopt bij de afbeelding. Dat is precies het stuk werk dat een automatische scanner nooit voor je kan doen.
    link: "/blog/checklist-toegankelijke-content/"
    link_tekst: "Bekijk de checklist voor redacteuren"
  - eyebrow: "Voor designers"
    titel: "Contrast, focus en doelgrootte nakijken zonder plugin"
    svg: "designer"
    tekst: |
      In je ontwerptool ziet alles er goed uit. In de browser komt het aan op de echte kleuren, de echte fonts en het echte gedrag bij zoomen. Daar wil je bij kunnen, ook op een pagina die nog niet af is.

      Onze ambitie met het tabblad Designer is om de checks die je normaal over drie tools verdeelt, op één plek te zetten. Meet het contrast met de pipetten, zet de pagina in grijswaarden, forceer een zichtbare focusrand, markeer klikdoelen kleiner dan 24 pixels en zet de tekst op 200% om te zien of je layout dat aankan.

      Je hoeft niets te installeren en je ontwerp hoeft niet online te staan. De radar werkt net zo goed op een acceptatieomgeving of op localhost.
    link: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
    link_tekst: "Lees hoe contrast werkt"
  - eyebrow: "Voor developers"
    titel: "Sneller dan de inspector openen"
    svg: "developer"
    tekst: |
      Je weet waar je op moet letten. Wat tijd kost, is het uitzoeken: welke knop heeft nu precies geen toegankelijke naam, wijst die aria-controls wel naar een bestaand id, en in welke volgorde loopt de focus eigenlijk?

      Onze ambitie met het tabblad Developer is om die vragen te beantwoorden voordat je de inspector opent. De radar nummert elk focusbaar element in tabvolgorde en markeert positieve tabindex-waarden als fout. Hij toont alle rollen en aria-attributen en laat zien welke referenties nergens op wijzen. Bij hover krijg je tag, id, class, rol, toegankelijke naam en afmeting van elk element.

      Handig tijdens het bouwen, en handig bij het oplossen van een auditbevinding: je ziet direct of je aanpassing het gewenste effect heeft.
    link: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
    link_tekst: "Lees over naam, rol en waarde"
tabs:
  - label: "Redactie"
    checks:
      - titel: "Afbeeldingen en alt-tekst"
        uitleg: "Je ziet welke afbeeldingen een alt-tekst hebben, welke een leeg alt-attribuut hebben (alt=\"\") en welke er geen hebben. De radar toont de alt-tekst, maar oordeelt niet: jij bepaalt of een afbeelding betekenis draagt of niet."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
        onderwerp: "alt-teksten"
      - titel: "Koppen en structuur"
        uitleg: "De radar tekent alle koppen met hun niveau en waarschuwt als je een niveau overslaat. Een logische koppenstructuur helpt iedereen die de pagina scant of met een screenreader leest."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "koppen"
      - titel: "Linkteksten"
        uitleg: "De radar markeert vage links zoals “lees meer” en links zonder tekst. Een goede linktekst vertelt op zichzelf waar je terechtkomt."
        wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/"
        onderwerp: "linkteksten"
      - titel: "Zintuiglijke verwijzingen"
        uitleg: "De radar markeert woorden als “links”, “rechts” en “hieronder”. Wie de pagina niet ziet, weet dan niet waar iets staat. Controleer of je de instructie ook zonder die verwijzing kunt begrijpen."
        wcag: "/blog/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen/"
        onderwerp: "zintuiglijke verwijzingen"
      - titel: "Taal van de pagina"
        uitleg: "Je ziet of de paginataal is ingesteld en welke onderdelen een andere taal hebben. De juiste taal zorgt dat een screenreader de woorden goed uitspreekt."
        wcag: "/blog/sc-3-1-1-wat-betekent-taal-van-de-pagina/"
        onderwerp: "de taal van de pagina"
      - titel: "Lijststructuur"
        uitleg: "De radar markeert echte lijsten, zodat je ziet of opsommingen ook echt als lijst zijn opgemaakt en niet als losse regels met streepjes."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "lijsten"
      - titel: "Tabellen"
        uitleg: "De radar markeert tabellen zonder kopcellen of bijschrift. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort, zodat een bezoeker een tabel kan volgen."
        wcag: "/blog/sc-1-3-1-tabellen/"
        onderwerp: "tabellen"
      - titel: "Toegankelijke naam bij formuliervelden"
        uitleg: "De radar markeert invoervelden zonder toegankelijke naam en velden die alleen een placeholder hebben. Let op: zichtbare tekst naast een veld telt alleen als toegankelijke naam als hij via <label for>, aria-label of aria-labelledby aan het veld is gekoppeld. Een placeholder verdwijnt zodra je typt en telt sowieso niet."
        wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
        onderwerp: "labels bij formuliervelden"
      - titel: "Titels van ingesloten kaders (iframes)"
        uitleg: "De radar markeert ingesloten kaders (iframes), zoals een video of een kaart, zonder titel. Een titel vertelt een screenreadergebruiker wat er in het kader zit."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "titels van iframes"
      - titel: "Paginatitel"
        uitleg: "De radar toont de titel van de pagina. Een duidelijke, unieke titel helpt bezoekers om tabbladen en zoekresultaten uit elkaar te houden."
        wcag: "/blog/sc-2-4-2-wat-betekent-paginatitels/"
        onderwerp: "paginatitels"
      - titel: "Opmaak uit (leesvolgorde)"
        uitleg: "Met één klik zet je alle opmaak uit. Je ziet dan de kale volgorde waarin een screenreader de pagina voorleest. Loopt je verhaal nog logisch?"
        wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/"
        onderwerp: "de leesvolgorde"
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die te weinig contrast heeft. Voor tekst op een foto of gradient meet je zelf twee kleuren met de twee pipetten. Je ziet meteen de contrastverhouding en of die voldoet aan de eis voor normale en grote tekst."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
  - label: "Designer"
    checks:
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die te weinig contrast heeft. Voor tekst op een foto of gradient meet je zelf twee kleuren met de twee pipetten. Je ziet meteen de contrastverhouding en of die voldoet aan de eis voor normale en grote tekst."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
      - titel: "Grijswaarden (kleurblind-check)"
        uitleg: "Met één klik wordt de pagina grijs. Zo controleer je of informatie zoals links of foutmeldingen ook zonder kleur te herkennen is."
        wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/"
        onderwerp: "het gebruik van kleur"
      - titel: "Focus zichtbaar maken"
        uitleg: "De radar forceert een duidelijke focusrand. Tab door je ontwerp om te zien of elke interactieve laag een zichtbare focus heeft."
        wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
        onderwerp: "een zichtbare focus"
      - titel: "Doelgrootte (24px)"
        uitleg: "De radar markeert klikbare elementen die kleiner zijn dan 24 bij 24 pixels. Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen. Gebruik de markering als startpunt om te controleren."
        wcag: "/blog/sc-2-5-8-wat-betekent-doelgrootte-minimum/"
        onderwerp: "doelgrootte"
      - titel: "Tekstafstand (1.4.12)"
        uitleg: "De radar past de WCAG-tekstafstanden toe. Kijk of er tekst wegvalt, overlapt of wordt afgekapt als een bezoeker meer ruimte tussen letters en regels instelt."
        wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
        onderwerp: "tekstafstand"
      - titel: "Tekst vergroten (200%)"
        uitleg: "De radar zet alle tekst op 200%, zoals een slechtziende bezoeker dat doet. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Afbeeldingen uit"
        uitleg: "Afbeeldingen worden vervaagd. Kijk of je ontwerp zonder beeld nog te begrijpen is en of de tekst het verhaal alleen kan dragen."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
        onderwerp: "alt-teksten"
      - titel: "Liniaal en hulplijnen"
        uitleg: "Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden nauwkeurig kunt nalopen."
  - label: "Developer"
    checks:
      - titel: "ARIA-rollen en -attributen"
        uitleg: "De radar toont alle rollen en aria-attributen en markeert gebroken referenties naar id's die niet bestaan. Zo zie je meteen waar aria-labelledby of aria-controls nergens op wijst."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "naam, rol en waarde"
      - titel: "Toon toegankelijke naam"
        uitleg: "Elk interactief element (links, knoppen, formuliervelden) toont zijn toegankelijke naam: de naam die een screenreader voorleest. Elementen zonder naam worden als fout gemarkeerd."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "toegankelijke namen"
      - titel: "Foutmeldingen bij formuliervelden"
        uitleg: "De radar zoekt zichtbare foutmeldingen (via role=alert, aria-live, of een class als error/invalid) en checkt of ze via aria-describedby of aria-errormessage aan een invoerveld gekoppeld zijn. Ongekoppelde meldingen zijn een fout: een screenreader kondigt ze niet aan. Gekoppelde meldingen zonder aria-invalid=\"true\" op het veld krijgen een waarschuwing."
      - titel: "Tabvolgorde"
        uitleg: "Elk focusbaar element krijgt een nummer in de volgorde waarin je er met Tab doorheen gaat. Positieve tabindex-waarden springen vóór de rest en worden als fout gemarkeerd, want die verstoren de logische toetsenbordvolgorde."
        wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/"
        onderwerp: "de focusvolgorde"
      - titel: "Focus zichtbaar maken"
        uitleg: "De radar forceert een duidelijke focusrand op elk element. Tab door de pagina om te zien of de focus altijd zichtbaar is en logisch verspringt."
        wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
        onderwerp: "een zichtbare focus"
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die onder 4,5:1 (normale tekst) of 3:1 (grote tekst) zakt. Voor tekst op een afbeelding of gradient meet je zelf twee kleuren met de twee pipetten."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
      - titel: "Tekstafstand (1.4.12)"
        uitleg: "De radar past de WCAG-tekstafstanden toe: regelhoogte, letter- en woordafstand en alinea-afstand. Zo zie je meteen of er tekst wegvalt, overlapt of wordt afgekapt."
        wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
        onderwerp: "tekstafstand"
      - titel: "Tekst vergroten (200%)"
        uitleg: "De radar zet alle tekst op 200%, zoals een slechtziende bezoeker dat doet. Controleer of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Iframes (titel)"
        uitleg: "Iframes zonder title of aria-label springen eruit. Een titel is nodig zodat een screenreadergebruiker weet wat er in het kader zit."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "titels van iframes"
      - titel: "Element-info bij hover"
        uitleg: "Beweeg met de muis over de pagina en zie tag, id, class, rol, toegankelijke naam en afmeting van elk element. Sneller dan de inspector openen voor een snelle check."
---

Bovenin het paneel wissel je tussen drie tabbladen, afgestemd op wat jij doet. Elk tabblad bevat de controles die bij die rol horen, dus je hoeft niet langs alles te scrollen wat je toch niet gebruikt.

Vindt een check iets, dan verschijnen er knoppen om vooruit en achteruit door de resultaten te springen. Zo loop je elke bevinding op de pagina langs zonder zelf te zoeken.

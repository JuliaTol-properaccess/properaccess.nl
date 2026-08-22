---
title: "WCAG Radar"
meta_title: "WCAG Radar (Redactie, Designer, Developer) | Proper Access"
description: "Bookmarklet en browserextensie voor Chrome en Firefox, met drie tabbladen: Redactie, Designer en Developer. Laat op elke pagina live zien of alt-teksten, koppen, contrast, focus en ARIA kloppen. 28 van de 45 checks zijn gratis, de rest vraagt een licentie."
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
hero_sub: "Een knop in je bladwijzerbalk of een extensie voor Chrome en Firefox, die op elke pagina laat zien hoe het met de toegankelijkheid staat. 28 van de 45 checks zijn gratis en vragen geen account. Koppen, alt-teksten, contrast, focus en ARIA, direct zichtbaar op je eigen scherm. De radar draait volledig in je browser: er wordt niets verstuurd en niets opgeslagen."
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
      - titel: "Paginatitel"
        uitleg: "De radar toont de titel van de pagina. Een duidelijke, unieke titel helpt bezoekers om tabbladen en zoekresultaten uit elkaar te houden."
        wcag: "/blog/sc-2-4-2-wat-betekent-paginatitels/"
        onderwerp: "paginatitels"
      - titel: "Opmaak uit (leesvolgorde)"
        uitleg: "Met één klik zet je alle opmaak uit. Je ziet dan de kale volgorde waarin een screenreader de pagina voorleest. Loopt je verhaal nog logisch?"
        wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/"
        onderwerp: "de leesvolgorde"
      - titel: "Leesvolgorde (overzicht)"
        uitleg: "De pagina als klikbare lijst, precies zoals voorleessoftware hem doorloopt: de koppen, de links, de knoppen en de invoervelden, in de volgorde waarin ze in de pagina staan. Lees die lijst van boven naar beneden. Snap je zo waar de pagina over gaat en wat je er kunt doen? Klik op een regel om naar dat stuk op de pagina te springen."
        wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/"
        onderwerp: "de leesvolgorde"
        pro: true
      - titel: "Verborgen onderdelen tonen"
        uitleg: "Sommige stukken staan wel in de pagina, maar zie je niet. Vaak klopt dat, bijvoorbeeld een menu dat pas opengaat als je erop klikt. Soms is het per ongeluk, en dan leest voorleessoftware iets voor dat er niet meer hoort te staan, of twee keer hetzelfde. De radar maakt die verborgen stukken zichtbaar en zet erbij op welke manier ze verstopt zijn. Kijk of er iets tussen staat dat allang weg had gemoeten."
        wcag: "/blog/aria-hidden-wat-het-doet-en-wanneer-je-het-gebruikt/"
        onderwerp: "verborgen inhoud"
        pro: true
      - titel: "Koppen en structuur"
        uitleg: "De radar tekent alle koppen met hun niveau en waarschuwt als je een niveau overslaat. Een logische koppenstructuur helpt iedereen die de pagina scant of met een screenreader leest."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "koppen"
      - titel: "Kwaliteit van kopteksten"
        uitleg: "De radar markeert lege koppen en koppen met een nietszeggende tekst zoals “Ga naar” of “Lees meer”. Wie op koppen navigeert, moet aan de koptekst kunnen zien waar de sectie over gaat."
        wcag: "/blog/sc-2-4-6-wat-betekent-koppen-en-labels/"
        onderwerp: "koppen en labels"
        pro: true
      - titel: "Verwijzingen naar plek, kleur of vorm"
        uitleg: "De radar markeert woorden als “links”, “rechts” en “hieronder”. Wie de pagina niet ziet, weet dan niet waar iets staat. Controleer of je de instructie ook zonder die verwijzing kunt begrijpen."
        wcag: "/blog/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen/"
        onderwerp: "zintuiglijke verwijzingen"
      - titel: "Regeleinden als opmaak"
        uitleg: "Twee lege regels achter elkaar zien eruit als ruimte tussen twee alinea's. Voor voorleessoftware is het één lange alinea: je kunt er niet per alinea doorheen springen en de korte pauze tussen alinea's valt weg. Regels die met een streepje of een bolletje beginnen zijn een nagemaakte lijst, en tellen dus niet als lijst. De radar markeert allebei. Losse regeleinden, zoals in een adres of een gedicht, laat hij met rust."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "informatie en relaties"
        pro: true
      - titel: "Sterke nadruk (strong)"
        uitleg: "De radar markeert elk stukje tekst met sterke nadruk, het strong-element. Sterke nadruk betekent: dit is belangrijk. Het is niet bedoeld om letters dikker te maken, dat is een kwestie van vormgeving. Staat er een hele zin of een hele alinea in, dan ligt de nadruk op alles en dus op niets; die krijgen een markering. Gebruik nadruk voor het woord of de paar woorden waar het echt om draait."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "informatie en relaties"
        pro: true
      - titel: "Nadruk (em)"
        uitleg: "De radar markeert elk stukje tekst met nadruk, het em-element. Nadruk legt de klemtoon op een woord, zoals je dat in een gesprek met je stem doet. Het is niet bedoeld om letters schuin te zetten, dat is vormgeving. Een hele zin of een hele alinea met nadruk wordt gemarkeerd, want dan hoor je niet meer waar de klemtoon ligt."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "informatie en relaties"
        pro: true
      - titel: "Lijststructuur"
        uitleg: "De radar markeert echte lijsten, zodat je ziet of opsommingen ook echt als lijst zijn opgemaakt en niet als losse regels met streepjes."
        wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/"
        onderwerp: "lijsten"
      - titel: "Afbeeldingen en alt-tekst"
        uitleg: "Je ziet welke afbeeldingen een alt-tekst hebben, welke een leeg alt-attribuut hebben (alt=\\\"\\\") en welke er geen hebben. De radar toont de alt-tekst, maar oordeelt niet: jij bepaalt of een afbeelding betekenis draagt of niet."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
        onderwerp: "alt-teksten"
      - titel: "Klikbare afbeeldingen"
        uitleg: "Soms is een afbeelding zelf een link of een knop, bijvoorbeeld een logo waarmee je naar de homepage gaat. Dan hoort er een naam bij die zegt waar je terechtkomt of wat er gebeurt, niet hoe het plaatje eruitziet. Dus “Naar de homepage” en niet “blauw rond logo”. De radar toont die naam bij elke klikbare afbeelding en markeert het rood als er geen naam is."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "naam, rol en waarde"
      - titel: "Afbeeldingen uit"
        uitleg: "Afbeeldingen worden vervaagd. Kijk of je ontwerp zonder beeld nog te begrijpen is en of de tekst het verhaal alleen kan dragen."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
        onderwerp: "alt-teksten"
      - titel: "Tabellen"
        uitleg: "De radar markeert tabellen zonder kopcellen of bijschrift. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort, zodat een bezoeker een tabel kan volgen."
        wcag: "/blog/sc-1-3-1-tabellen/"
        onderwerp: "tabellen"
        pro: true
      - titel: "Namen van links en knoppen"
        uitleg: "Elke link, knop en elk invoerveld heeft een naam die voorleessoftware hardop noemt. Meestal is dat gewoon de tekst die je ziet, maar niet altijd: bij een knop met alleen een pictogram, bijvoorbeeld een vergrootglas, zit de naam in de code. De radar zet bij elk element die naam in beeld. Zo zie je of iemand die de pagina niet ziet dezelfde informatie krijgt als jij. Links, knoppen en velden zonder naam worden rood gemarkeerd."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "toegankelijke namen"
      - titel: "Linkteksten"
        uitleg: "De radar markeert vage links zoals “lees meer” en links zonder tekst. Een goede linktekst vertelt op zichzelf waar je terechtkomt."
        wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/"
        onderwerp: "linkteksten"
      - titel: "Alle links"
        uitleg: "Alle links op de pagina in één lijst in het paneel, zoals voorleessoftware ze voorleest: alleen de linktekst, zonder context eromheen. Lege en vage teksten springen eruit. Klik op een regel om naar de link op de pagina te springen."
        wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/"
        onderwerp: "linkteksten"
        pro: true
      - titel: "Titels bij ingesloten video's en kaarten"
        uitleg: "De radar markeert ingesloten kaders (iframes), zoals een video of een kaart, zonder titel. Een titel vertelt een screenreadergebruiker wat er in het kader zit."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "titels van iframes"
        pro: true
      - titel: "Pagina in grijstinten"
        uitleg: "Met één klik wordt de pagina grijs. Zo controleer je of informatie zoals links of foutmeldingen ook zonder kleur te herkennen is."
        wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/"
        onderwerp: "het gebruik van kleur"
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die onder 4,5:1 (normale tekst) of 3:1 (grote tekst) zakt. Voor tekst op een afbeelding of gradient meet je zelf twee kleuren met de twee pipetten."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
      - titel: "Contrast van invoervelden en focus"
        uitleg: "Dit gaat niet over tekst, maar over de dingen eromheen: de rand van een invoerveld, en het kadertje dat verschijnt als je met de Tab-toets door de pagina loopt. Ook die moeten genoeg verschillen van de achtergrond, anders zie je niet waar je moet typen of waar je bent. De radar loopt de pagina langs en meldt het als het verschil te klein is, of als er helemaal geen kadertje verschijnt."
        wcag: "/blog/sc-1-4-11-wat-betekent-contrast-UI/"
        onderwerp: "contrast van niet-tekstuele onderdelen"
      - titel: "Taal van de pagina"
        uitleg: "Je ziet of de paginataal is ingesteld en welke onderdelen een andere taal hebben. De juiste taal zorgt dat een screenreader de woorden goed uitspreekt."
        wcag: "/blog/sc-3-1-1-wat-betekent-taal-van-de-pagina/"
        onderwerp: "de taal van de pagina"
      - titel: "Automatisch invullen van gegevens"
        uitleg: "Een browser kan velden zoals naam, adres en e-mailadres vanzelf invullen met gegevens die de bezoeker eerder heeft bewaard. Daarvoor moet in de code staan wat voor gegeven er in het veld hoort. Staat dat er, dan scheelt dat typwerk, en dat helpt vooral mensen die moeilijk typen of die dingen snel vergeten. De radar laat per veld zien of het er staat en waarschuwt als het ontbreekt. Aanpassen doet een developer."
        wcag: "/blog/sc-1-3-5-wat-betekent-invoerdoel-identificeren/"
        onderwerp: "het invoerdoel"
        pro: true
      - titel: "Labels bij invoervelden"
        uitleg: "Bij elk invoerveld hoort een label: het woord ernaast dat vertelt wat je moet invullen, zoals “E-mailadres”. Voorleessoftware noemt dat label zodra iemand in het veld komt. Ontbreekt het, dan hoort die persoon alleen “invoerveld” en weet hij niet wat er moet komen. De radar markeert die velden rood."
        wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
        onderwerp: "labels bij formuliervelden"
      - titel: "Foutmeldingen bij formuliervelden"
        uitleg: "De radar zoekt zichtbare foutmeldingen (via role=alert, aria-live, of een class als error/invalid) en checkt of ze via aria-describedby of aria-errormessage aan een invoerveld gekoppeld zijn. Ongekoppelde meldingen zijn een fout: een screenreader kondigt ze niet aan. Gekoppelde meldingen zonder aria-invalid=\\\"true\\\" op het veld krijgen een waarschuwing."
        wcag: "/blog/sc-3-3-1-wat-betekent-foutidentificatie/"
        onderwerp: "foutmeldingen"
  - label: "Designer"
    checks:
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die onder 4,5:1 (normale tekst) of 3:1 (grote tekst) zakt. Voor tekst op een afbeelding of gradient meet je zelf twee kleuren met de twee pipetten."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
      - titel: "Contrast van randen en focus"
        uitleg: "Meet het contrast van de randen van invoervelden en van de focusstijl (WCAG 1.4.11). De radar zet daarvoor kort focus op elk element en waarschuwt onder 3:1, of als een zichtbare focusstijl helemaal ontbreekt."
        wcag: "/blog/sc-1-4-11-wat-betekent-contrast-UI/"
        onderwerp: "contrast van niet-tekstuele onderdelen"
      - titel: "Links alleen in kleur"
        uitleg: "Vindt links in lopende tekst die alleen door kleur van de tekst te onderscheiden zijn (geen onderstreping) en toont het kleurverschil met de omringende tekst. Onderstrepen is de veiligste oplossing."
        wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/"
        onderwerp: "het gebruik van kleur"
      - titel: "Grijswaarden (kleurblind-check)"
        uitleg: "Met één klik wordt de pagina grijs. Zo controleer je of informatie zoals links of foutmeldingen ook zonder kleur te herkennen is."
        wcag: "/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/"
        onderwerp: "het gebruik van kleur"
      - titel: "Donkere modus"
        uitleg: "Past de donkere modus van de site geforceerd toe (de prefers-color-scheme: dark-stijlen), zodat je contrast en leesbaarheid in dark mode kunt controleren. Heeft de site geen dark-mode-stijlen, dan zegt de Radar dat gewoon."
        pro: true
      - titel: "Focus zichtbaar maken"
        uitleg: "De radar forceert een duidelijke focusrand op elk element. Tab door de pagina om te zien of de focus altijd zichtbaar is en logisch verspringt."
        wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
        onderwerp: "een zichtbare focus"
      - titel: "Doelgrootte (24px)"
        uitleg: "De radar markeert klikbare elementen die kleiner zijn dan 24 bij 24 pixels. Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen. Gebruik de markering als startpunt om te controleren."
        wcag: "/blog/sc-2-5-8-wat-betekent-doelgrootte-minimum/"
        onderwerp: "doelgrootte"
        pro: true
      - titel: "Gebaren en muis-only bediening"
        uitleg: "Markeert elementen die alleen met de muis of aanraking te bedienen zijn: script-klikbare elementen zonder toetsenbordfocus, drag-en-drop zonder duidelijk alternatief en nep-knoppen met alleen een muiscursor."
        wcag: "/blog/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk/"
        onderwerp: "toetsenbordbediening"
        pro: true
      - titel: "Alleen tekst vergroten (200%)"
        uitleg: "De radar zet alle tekst op 200% en laat je viewport staan, zoals de instelling “Alleen tekst zoomen” in Firefox. Controleer of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Pagina-zoom 200%"
        uitleg: "Opent de pagina in een venster van 640 pixels breed. Dat is dezelfde lay-out als 1280 pixels met 200% browserzoom, dus met dezelfde mediaquery’s en dezelfde ingeklapte componenten. Zoom dat venster daarna zelf in om ook de lettergrootte te zien."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Zoom geblokkeerd in de code"
        uitleg: "Leest de viewport-metatag van de pagina. Staat daar user-scalable=no of een maximum-scale onder de 2, dan kan een bezoeker op zijn telefoon niet naar 200 procent inzoomen (WCAG 1.4.4). De check zegt welke waarde het blokkeert; die mag weg, de tag zelf mag blijven."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
        pro: true
      - titel: "Tekstafstand (1.4.12)"
        uitleg: "De radar past de WCAG-tekstafstanden toe: regelhoogte, letter- en woordafstand en alinea-afstand. Zo zie je meteen of er tekst wegvalt, overlapt of wordt afgekapt."
        wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
        onderwerp: "tekstafstand"
      - titel: "Reflow (320 px)"
        uitleg: "Controleert op horizontale scroll op paginaniveau, markeert de elementen die buiten beeld steken en opent de pagina in een venster van 320 pixels breed (WCAG 1.4.10)."
        wcag: "/blog/sc-1-4-10-wat-betekent-reflow/"
        onderwerp: "reflow"
      - titel: "Afbeeldingen uit"
        uitleg: "Afbeeldingen worden vervaagd. Kijk of je ontwerp zonder beeld nog te begrijpen is en of de tekst het verhaal alleen kan dragen."
        wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/"
        onderwerp: "alt-teksten"
      - titel: "Automatische beweging"
        uitleg: "Vindt beweging die vanzelf start en langer dan 5 seconden duurt: CSS-animaties, autoplay-video's en marquees. De radar kijkt ook 5 seconden mee naar scriptgestuurde beweging zoals carrousels en tickers."
        wcag: "/blog/sc-2-2-2-wat-betekent-pauzeren-stoppen-of-verbergen/"
        onderwerp: "automatische beweging"
        pro: true
      - titel: "Liniaal en hulplijnen"
        uitleg: "Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden nauwkeurig kunt nalopen."
  - label: "Developer"
    checks:
      - titel: "Element-info bij hover"
        uitleg: "Beweeg met de muis over de pagina en zie tag, id, class, rol, toegankelijke naam en afmeting van elk element. Sneller dan de inspector openen voor een snelle check."
      - titel: "Toon toegankelijke naam"
        uitleg: "Elk interactief element (links, knoppen, formuliervelden) toont zijn toegankelijke naam: de naam die een screenreader voorleest. Elementen zonder naam worden als fout gemarkeerd."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "toegankelijke namen"
      - titel: "ARIA-rollen en -attributen"
        uitleg: "De radar toont alle rollen en aria-attributen en markeert gebroken referenties naar id's die niet bestaan. Zo zie je meteen waar aria-labelledby of aria-controls nergens op wijst."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "naam, rol en waarde"
      - titel: "Iframes (titel)"
        uitleg: "Iframes zonder title of aria-label springen eruit. Een titel is nodig zodat een screenreadergebruiker weet wat er in het kader zit."
        wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/"
        onderwerp: "titels van iframes"
      - titel: "Autocomplete bij persoonlijke gegevens"
        uitleg: "Velden die om persoonlijke gegevens vragen horen een autocomplete-attribuut met een geldige waarde te hebben (WCAG 1.3.5). De radar toont de waarde per veld en waarschuwt bij ontbrekende of onbekende waarden."
        wcag: "/blog/sc-1-3-5-wat-betekent-invoerdoel-identificeren/"
        onderwerp: "het invoerdoel"
        pro: true
      - titel: "Groepen en zichtbare labels"
        uitleg: "Fieldsets zonder legend en groepen (role=group) zonder naam worden als fout gemarkeerd. Daarnaast zie je welke velden alleen een aria-label hebben en dus geen zichtbaar label. Dat mag soms, bijvoorbeeld een vergrootglas-icoon bij een zoekveld, maar meestal hoort er zichtbare tekst bij."
        wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
        onderwerp: "labels bij formuliervelden"
      - titel: "Toegankelijke naam bij formuliervelden"
        uitleg: "De radar markeert invoervelden zonder toegankelijke naam en velden die alleen een placeholder hebben. Let op: zichtbare tekst naast een veld telt alleen als toegankelijke naam als hij via <label for>, aria-label of aria-labelledby aan het veld is gekoppeld. Een placeholder verdwijnt zodra je typt en telt sowieso niet."
        wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
        onderwerp: "labels bij formuliervelden"
      - titel: "Verplichte velden"
        uitleg: "Toont welke velden als verplicht zijn gemarkeerd voor hulpsoftware (required of aria-required) en waarschuwt bij velden met een sterretje of 'verplicht' in het label die deze markering missen."
        wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/"
        onderwerp: "labels bij formuliervelden"
      - titel: "Foutmeldingen bij formuliervelden"
        uitleg: "De radar zoekt zichtbare foutmeldingen (via role=alert, aria-live, of een class als error/invalid) en checkt of ze via aria-describedby of aria-errormessage aan een invoerveld gekoppeld zijn. Ongekoppelde meldingen zijn een fout: een screenreader kondigt ze niet aan. Gekoppelde meldingen zonder aria-invalid=\\\"true\\\" op het veld krijgen een waarschuwing."
        wcag: "/blog/sc-3-3-1-wat-betekent-foutidentificatie/"
        onderwerp: "foutmeldingen"
      - titel: "Plakken geblokkeerd"
        uitleg: "De radar markeert elementen die plakken, kopiëren of slepen blokkeren via inline code (onpaste, oncopy, oncut, ondrop). Geblokkeerd plakken dwingt overtypen af en is een drempel, bijvoorbeeld bij wachtwoorden en e-mailbevestigingen. Blokkades via scripts kan de Radar niet zien; test het plakken ook zelf."
        wcag: "/blog/sc-3-3-7-wat-betekent-redundante-invoer/"
        onderwerp: "overtollige invoer"
        pro: true
      - titel: "Focus zichtbaar maken"
        uitleg: "De radar forceert een duidelijke focusrand op elk element. Tab door de pagina om te zien of de focus altijd zichtbaar is en logisch verspringt."
        wcag: "/blog/sc-2-4-7-wat-betekent-focus-zichtbaar/"
        onderwerp: "een zichtbare focus"
      - titel: "Tabvolgorde"
        uitleg: "Elk focusbaar element krijgt een nummer in de volgorde waarin je er met Tab doorheen gaat. Positieve tabindex-waarden springen vóór de rest en worden als fout gemarkeerd, want die verstoren de logische toetsenbordvolgorde."
        wcag: "/blog/sc-2-4-3-wat-betekent-focusvolgorde/"
        onderwerp: "de focusvolgorde"
        pro: true
      - titel: "Doelgrootte (24px)"
        uitleg: "De radar markeert klikbare elementen die kleiner zijn dan 24 bij 24 pixels. Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen. Gebruik de markering als startpunt om te controleren."
        wcag: "/blog/sc-2-5-8-wat-betekent-doelgrootte-minimum/"
        onderwerp: "doelgrootte"
        pro: true
      - titel: "Gebaren en muis-only bediening"
        uitleg: "Markeert elementen die alleen met de muis of aanraking te bedienen zijn: script-klikbare elementen zonder toetsenbordfocus, drag-en-drop zonder duidelijk alternatief en nep-knoppen met alleen een muiscursor."
        wcag: "/blog/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk/"
        onderwerp: "toetsenbordbediening"
        pro: true
      - titel: "Alleen tekst vergroten (200%)"
        uitleg: "De radar zet alle tekst op 200% en laat je viewport staan, zoals de instelling “Alleen tekst zoomen” in Firefox. Controleer of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Pagina-zoom 200%"
        uitleg: "Opent de pagina in een venster van 640 pixels breed. Dat is dezelfde lay-out als 1280 pixels met 200% browserzoom, dus met dezelfde mediaquery’s en dezelfde ingeklapte componenten. Zoom dat venster daarna zelf in om ook de lettergrootte te zien."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
      - titel: "Zoom geblokkeerd in de code"
        uitleg: "Leest de viewport-metatag van de pagina. Staat daar user-scalable=no of een maximum-scale onder de 2, dan kan een bezoeker op zijn telefoon niet naar 200 procent inzoomen (WCAG 1.4.4). De check zegt welke waarde het blokkeert; die mag weg, de tag zelf mag blijven."
        wcag: "/blog/sc-1-4-4-wat-betekent-tekst-vergroten/"
        onderwerp: "tekst vergroten"
        pro: true
      - titel: "Tekstafstand (1.4.12)"
        uitleg: "De radar past de WCAG-tekstafstanden toe: regelhoogte, letter- en woordafstand en alinea-afstand. Zo zie je meteen of er tekst wegvalt, overlapt of wordt afgekapt."
        wcag: "/blog/sc-1-4-12-wat-betekent-tekstafstand/"
        onderwerp: "tekstafstand"
      - titel: "Reflow (320 px)"
        uitleg: "Controleert op horizontale scroll op paginaniveau, markeert de elementen die buiten beeld steken en opent de pagina in een venster van 320 pixels breed (WCAG 1.4.10)."
        wcag: "/blog/sc-1-4-10-wat-betekent-reflow/"
        onderwerp: "reflow"
      - titel: "Tekstcontrast"
        uitleg: "De radar markeert automatisch tekst op een effen achtergrond die onder 4,5:1 (normale tekst) of 3:1 (grote tekst) zakt. Voor tekst op een afbeelding of gradient meet je zelf twee kleuren met de twee pipetten."
        wcag: "/blog/sc-1-4-3-wat-betekent-contrast-minimum/"
        onderwerp: "tekstcontrast"
      - titel: "Contrast van randen en focus"
        uitleg: "Meet het contrast van de randen van invoervelden en van de focusstijl (WCAG 1.4.11). De radar zet daarvoor kort focus op elk element en waarschuwt onder 3:1, of als een zichtbare focusstijl helemaal ontbreekt."
        wcag: "/blog/sc-1-4-11-wat-betekent-contrast-UI/"
        onderwerp: "contrast van niet-tekstuele onderdelen"
---

Bovenin het paneel wissel je tussen drie tabbladen, afgestemd op wat jij doet. Elk tabblad bevat de controles die bij die rol horen, dus je hoeft niet langs alles te scrollen wat je toch niet gebruikt.

Vindt een check iets, dan verschijnen er knoppen om vooruit en achteruit door de resultaten te springen. Zo loop je elke bevinding op de pagina langs zonder zelf te zoeken.

De radar telt 45 checks. Daarvan zijn er 28 gratis en die blijven dat, zonder account. De overige 17 zijn gemarkeerd met "Licentie": die staan wel in het paneel, maar draaien pas als je een licentie hebt. Daarbij hoort ook het opslaan van een rapport van je testsessie. Wat een licentie kost, staat op [de prijzenpagina van Testtoegankelijkheid](https://testtoegankelijkheid.nl/prijzen).

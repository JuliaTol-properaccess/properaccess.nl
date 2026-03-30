---
title: "Checklist toegankelijke content"
date: 2024-07-30
slug: "checklist-toegankelijke-content"
categories:
  - "tips-en-tools"
  - "Webredactie"
tags:
  - "webredactie"
description: "Praktische checklist voor toegankelijke webcontent volgens WCAG. Handige tips voor webredacties om content correct en inclusief te publiceren."
keywords:
  - checklist toegankelijke content
  - wcag content checklist
  - toegankelijke webcontent
aliases:
  - "/checklist-toegankelijke-content"
layout: sectie
subtitle: "Een praktische handleiding"
sectie_layout: true
hero_meta:
  - label: "Auteur"
    value: "Julia Tol"
  - label: "Laatst bijgewerkt"
    value: "februari 2026"
---

{{< offerte-section title="Inleiding" >}}

Een praktische handleiding voor het maken van digitaal toegankelijke Word-documenten. Of je nu rapporten, beleidsdocumenten of facturen maakt: met deze stappen zorg je ervoor dat iedereen je content kan lezen — ook mensen die een schermlezer gebruiken.

{{< /offerte-section >}}

{{< offerte-section title="Koppen" subtitle="Structuur met echte kopstijlen" bg="light" >}}

Koppen zijn het belangrijkste structurele onderdeel van een document. Gebruikers van schermlezers navigeren via koppen: ze springen van kop naar kop om snel te vinden wat ze nodig hebben. Daarom is het cruciaal om **echte koppen** te gebruiken — niet alleen grote, vette tekst.

<div class="koppen-vergelijking" role="group" aria-label="Vergelijking: document met alleen vet+groot versus document met echte kopstijlen">
<div class="koppen-vergelijking__fout">
<h3 class="koppen-vergelijking__label koppen-vergelijking__label--fout">Fout: alleen vet + groot</h3>
<div class="koppen-vergelijking__doc">
<p class="koppen-vergelijking__heading mb-0" style="margin-bottom:0">Bezoekadres <span class="koppen-vergelijking__tag">Alinea (P)</span></p>
<p class="koppen-vergelijking__body ">Keizersgracht 123, Amsterdam</p>
<p class="koppen-vergelijking__heading" style="margin-bottom:0;">Postadres <span class="koppen-vergelijking__tag">Alinea (P)</span></p>
<p class="koppen-vergelijking__body">Postbus 456, 1000 AB Amsterdam</p>
<p class="koppen-vergelijking__heading mb-0" style="margin-bottom:0">Contact <span class="koppen-vergelijking__tag">Alinea (P)</span></p>
<p class="koppen-vergelijking__body">info@voorbeeld.nl | 020-123 4567</p>
</div>
<p class="koppen-vergelijking__sr koppen-vergelijking__sr--fout">Schermlezer: "Bezoekadres" = gewone tekst, geen kop</p>
</div>
<div class="koppen-vergelijking__goed">
<h3 class="koppen-vergelijking__label koppen-vergelijking__label--goed">Goed: echte kopstijlen</h3>
<div class="koppen-vergelijking__doc">
<h2 class="koppen-vergelijking__heading">Bezoekadres <span class="koppen-vergelijking__tag">Kop 2 (H2)</span></h2>
<p class="koppen-vergelijking__body">Keizersgracht 123, Amsterdam</p>
<h2 class="koppen-vergelijking__heading">Postadres <span class="koppen-vergelijking__tag">Kop 2 (H2)</span></h2>
<p class="koppen-vergelijking__body">Postbus 456, 1000 AB Amsterdam</p>
<h2 class="koppen-vergelijking__heading">Contact <span class="koppen-vergelijking__tag">Kop 2 (H2)</span></h2>
<p class="koppen-vergelijking__body">info@voorbeeld.nl | 020-123 4567</p>
</div>
<p class="koppen-vergelijking__sr koppen-vergelijking__sr--goed">Schermlezer: "Kop niveau 2: Bezoekadres"</p>
</div>
</div>

### Waar moet een kop aan voldoen?

- **Betekenisvol** — Koppen moeten de inhoud eronder goed beschrijven. "Contact" en "Bezoekadres" zijn duidelijk. "Sectie 1" en "Sectie 2" zeggen niets.
- **Kort** — Schermlezers lezen een lijst van koppen snel op. Houd ze bondig.
- **Overzichtelijk** — Als je alleen de koppen leest, moet je al een goed idee hebben waar het document over gaat.
- **Geen niveaus overslaan** — Begin altijd met kopniveau 1 (H1) en sla geen niveaus over. Ga niet van H1 direct naar H3.

### Koppen maken in Word

1. Ga naar het tabblad **Start** en zoek de sectie **Stijlen**.
2. Kies het gewenste kopniveau: **Kop 1**, **Kop 2**, enzovoort.
3. Je kunt bestaande tekst selecteren en daarna de kopstijl toepassen.
4. Houd **Ctrl** ingedrukt om meerdere tekstdelen tegelijk te selecteren.

### Kopstijl aanpassen

Vind je het uiterlijk van een kop niet mooi? Dat is geen reden om geen echte koppen te gebruiken. Je kunt de weergave aanpassen:

1. Klik met de **rechtermuisknop** op de kopstijl in de sectie Stijlen.
2. Kies **Wijzigen**.
3. Pas lettertype, grootte, kleur en andere opties aan.
4. Klik op **OK** — alle koppen van dat niveau worden automatisch bijgewerkt.

**Belangrijk:** gebruik geen aangepaste stijl om een kop te maken, ook niet als je bij de optie "stijl gebaseerd op kop" kiest. Schermlezers herkennen aangepaste stijlen niet als koppen.

### Inhoudsopgave

Een voordeel van echte koppen is dat je er automatisch een inhoudsopgave mee kunt maken. Ga naar het tabblad **Verwijzingen** en selecteer een stijl. Gebruikers kunnen nu direct naar specifieke secties springen.

{{< /offerte-section >}}

{{< offerte-section title="Afbeeldingen" subtitle="Alt-tekst en beschrijvingen" >}}

Schermlezers kunnen afbeeldingen niet zien. Daarom is een tekstalternatief (alt-tekst) essentieel. Er zijn drie soorten afbeeldingen, elk met een eigen aanpak:

### 1. Eenvoudig informatief

Geef een korte, duidelijke alt-tekst die de bedoeling weergeeft. Maximaal 150 tekens. Context is belangrijk: bij een instructieve afbeelding moet je de actie beschrijven, niet alleen wat je ziet.

### 2. Complex informatief

Grafieken, diagrammen, infographics. Gebruik een korte alt-tekst plus een langere beschrijving als voetnoot, in presentatienotities of direct in de tekst.

### 3. Decoratief

Geen informatieve waarde — dient alleen ter versiering. Markeer als decoratief, zodat schermlezers de afbeelding overslaan.

### Alt-tekst toevoegen in Word

1. Klik met de **rechtermuisknop** op de afbeelding.
2. Kies **Alt-tekst weergeven**.
3. Typ een korte, duidelijke beschrijving (max. 150 tekens).
4. Of vink **Afbeelding markeren als decoratief** aan als de afbeelding puur decoratief is.

**Belangrijk:** Word kan automatisch alt-tekst genereren. Vertrouw hier nooit volledig op — controleer en verbeter de tekst altijd zelf.

### Tekstterugloop

Controleer of afbeeldingen zijn ingesteld als **Inline met tekst**. Klik met de rechtermuisknop, kies **Tekstterugloop** en dan **Inline met tekst**. Zwevende objecten kunnen problemen geven bij schermlezers.

### Lange beschrijvingen

Voor complexe afbeeldingen zoals grafieken: gebruik een korte alt-tekst en een langere beschrijving direct onder de afbeelding in de tekst. Bijvoorbeeld:

- **Alt-tekst:** "Bevolkingsgroei VS 1920-2020, zie uitgebreide beschrijving hieronder."
- **Beschrijving in tekst:** de volledige data in tekstvorm.

{{< /offerte-section >}}

{{< offerte-section title="Kleur als betekenis" subtitle="Nooit alleen kleur" bg="light" >}}

Kleur wordt vaak gebruikt om betekenis te geven — bijvoorbeeld een takenlijst waarbij urgente taken een rood bolletje hebben. Maar een blinde gebruiker of iemand die kleurenblind is, ziet dit verschil niet.

<svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Links een takenlijst met alleen gekleurde bolletjes als indicator (ontoegankelijk), rechts dezelfde lijst met bolletjes en tekstlabels (toegankelijk).">
  <rect x="10" y="10" width="340" height="180" fill="none" rx="12" stroke="#A30D4B" stroke-width="1.5"/>
  <text x="30" y="38" font-family="Nunito, sans-serif" font-size="14" font-weight="700" fill="#A30D4B">Fout</text>
  <circle cx="45" cy="65" r="6" fill="#A30D4B"/>
  <text x="60" y="69" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Offerte versturen naar klant X</text>
  <circle cx="45" cy="95" r="6" fill="#004050"/>
  <text x="60" y="99" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Rapport opleveren project Y</text>
  <circle cx="45" cy="125" r="6" fill="#1F2937"/>
  <text x="60" y="129" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Factuur controleren leverancier Z</text>
  <rect x="370" y="10" width="340" height="180" fill="none" rx="12" stroke="#004050" stroke-width="1.5"/>
  <text x="390" y="38" font-family="Nunito, sans-serif" font-size="14" font-weight="700" fill="#004050">Goed</text>
  <circle cx="405" cy="65" r="6" fill="#A30D4B"/>
  <text x="420" y="62" font-family="Nunito, sans-serif" font-size="11" font-weight="700" fill="#A30D4B">URGENT</text>
  <text x="420" y="76" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Offerte versturen naar klant X</text>
  <circle cx="405" cy="100" r="6" fill="#004050"/>
  <text x="420" y="97" font-family="Nunito, sans-serif" font-size="11" font-weight="700" fill="#004050">AFGEROND</text>
  <text x="420" y="111" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Rapport opleveren project Y</text>
  <circle cx="405" cy="135" r="6" fill="#1F2937"/>
  <text x="420" y="132" font-family="Nunito, sans-serif" font-size="11" font-weight="700" fill="#1F2937">IN AFWACHTING</text>
  <text x="420" y="146" font-family="Nunito, sans-serif" font-size="13" fill="#1F2937">Factuur controleren leverancier Z</text>
</svg>

Links: alleen gekleurde bolletjes — wat betekent rood, groen, oranje? Onduidelijk. Rechts: kleur plus tekstlabel — voor iedereen duidelijk.

**De regel:** informatie die met kleur wordt aangegeven, moet ook in tekst beschikbaar zijn. Bij een gekleurde grafiek kun je de data ook in gewone tekst opnemen. Bij een taartdiagram heeft elk deel een zichtbaar tekstlabel nodig.

{{< /offerte-section >}}

{{< offerte-section title="Kleurcontrast" subtitle="Zorg voor leesbaarheid" >}}

Goed kleurcontrast is essentieel voor leesbaarheid. Lichtgrijze tekst op een lichte achtergrond is voor iedereen moeilijk leesbaar.

**Minimale contrastverhoudingen (WCAG):**

- **Kleine tekst** (kleiner dan 18pt normaal of 14pt vet): minimaal **4,5 : 1** (aanbevolen 7:1)
- **Grote tekst** (18pt normaal of 14pt vet en groter): minimaal **3 : 1** (aanbevolen 4,5:1)
- **Niet-tekst** (grafiekbalken, iconen, randen): minimaal **3 : 1**

<svg viewBox="0 0 720 90" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Vergelijking: lichtgrijze tekst op wit is onleesbaar (contrast 1,5:1), zwarte tekst op wit is goed leesbaar (contrast 21:1).">
  <rect x="10" y="5" width="340" height="80" fill="none" rx="10" stroke="#A30D4B" stroke-width="1"/>
  <text x="30" y="35" font-family="Nunito, sans-serif" font-size="13" font-weight="700" fill="#A30D4B">Slecht contrast</text>
  <text x="30" y="60" font-family="Nunito, sans-serif" font-size="16" fill="#C0C0C0">Lichtgrijs op wit — 1,5:1</text>
  <rect x="370" y="5" width="340" height="80" fill="none" rx="10" stroke="#004050" stroke-width="1"/>
  <text x="390" y="35" font-family="Nunito, sans-serif" font-size="13" font-weight="700" fill="#004050">Goed contrast</text>
  <text x="390" y="60" font-family="Nunito, sans-serif" font-size="16" fill="#1F2937">Zwart op wit — 21:1</text>
</svg>

### Contrast controleren

Ga niet op gevoel af. Gebruik een tool:

- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)** — Online tool, geen installatie nodig.
- **Paciello Color Contrast Checker** — Downloadbare tool met pipet om kleuren van het scherm te kiezen.

{{< /offerte-section >}}

{{< offerte-section title="Lettertype, opmaak en indeling" subtitle="Leesbaarheid eerst" bg="light" >}}

### Lettertype

Gebruik goed leesbare lettertypes zoals **Tahoma**, **Verdana**, **Garamond** of **Cambria**. Vermijd decoratieve lettertypes. Gebruik minimaal **12pt** als lettergrootte.

### Opmaak

Gebruik vet, cursief, onderstrepen of markering **spaarzaam**. Schermlezers lezen deze stijlen meestal niet voor, dus vertrouw er niet alleen op om betekenis over te brengen. Gebruik altijd tekst om belangrijke informatie duidelijk te maken.

**Voorbeeld:** bij een lijst "openstaande facturen" waarbij gemarkeerde facturen vandaag verzonden moeten worden, voeg je de tekst "verstuur vandaag" toe naast de markering.

### Indeling

- Zet tekst **links uitgelijnd**, niet volledig uitgevuld (uitgevulde tekst geeft onregelmatige witruimtes).
- Houd alinea's **kort**.
- Zorg voor voldoende **witruimte**, bijvoorbeeld dubbele regelafstand.

{{< /offerte-section >}}

{{< offerte-section title="Symbolen en emoji's" subtitle="Gebruik met mate" >}}

Symbolen kunnen lastig zijn voor schermlezers: ze worden soms verkeerd of niet voorgelezen. Gebruik alleen veelvoorkomende symbolen zoals **@**, **$** en **#**. Voeg bij andere symbolen een tekstalternatief toe, bijvoorbeeld: (schoppen).

**Emoji's** zijn kleine afbeeldingen met ingebouwde alt-tekst en zijn meestal goed toegankelijk. Maar gebruik ze met mate — elke emoji wordt apart voorgelezen door een schermlezer.

{{< /offerte-section >}}

{{< offerte-section title="Links" subtitle="Betekenisvol en semantisch" bg="light" >}}

Schermlezers kondigen links aan en kunnen een lijst van alle links in een document openen. Daarom is het belangrijk dat links goed zijn opgemaakt.

### Een link maken in Word

1. Plak de URL en druk op **Enter** of **Spatie**. Word maakt er automatisch een semantische link van (blauw + onderstreept).
2. Klik met de rechtermuisknop en kies **Hyperlink bewerken**.
3. Vul in het veld **Tekst om weer te geven** een betekenisvolle naam in.

### Fout vs. goed

- **Fout:** `https://www.rijksmuseum.nl/nl/bezoek/planuw-bezoek-tickets-en-prijzen` — de schermlezer leest de hele URL voor. Lang en verwarrend.
- **Goed:** "Tickets en prijzen Rijksmuseum" — de schermlezer zegt: _"link, Tickets en prijzen Rijksmuseum"_. Betekenisvol, kort en duidelijk.

**Let op:** als je een URL plakt en geen Enter of Spatie gebruikt, blijft het gewone tekst. De schermlezer herkent de URL dan niet als link.

{{< /offerte-section >}}

{{< offerte-section title="Tabellen" subtitle="Alleen voor gegevens" >}}

Gebruik tabellen alleen voor echte gegevens, nooit voor lay-out. Maak ze semantisch met de knop **Tabel invoegen** — voeg ze niet toe als afbeelding.

### Een tabel maken

1. Ga naar **Invoegen** en kies **Tabel**.
2. Gebruik **niet** de optie "Tabel tekenen" (die maakt een afbeelding).
3. In de tabbladen **Tabelontwerp** en **Indeling**: zorg dat **Koprij** en/of **Eerste kolom** zijn aangevinkt.

### Wel doen

- Altijd koprijen en/of kolomkoppen gebruiken
- Houd tabellen eenvoudig: een koprij
- Voeg alt-tekst toe via Tabeleigenschappen
- Geef de tabel een duidelijke titel
- Controleer contrast van tabelkleuren
- Vul lege cellen met "n.v.t."

### Niet doen

- Cellen samenvoegen (geeft problemen)
- Tabellen nesten (tabel in een tabel)
- Cellen leeg laten
- "Tabel tekenen" gebruiken
- Tabel als afbeelding invoegen
- Tabel gebruiken voor lay-out

{{< /offerte-section >}}

{{< offerte-section title="Kop- en voetteksten" subtitle="Pas op met cruciale info" bg="light" >}}

Schermlezers lezen kop- en voetteksten **niet automatisch**. Vermeld daar geen cruciale informatie, of herhaal deze in de hoofdtekst.

Denk aan situaties als:

- Het logo en de contactgegevens van je bedrijf
- Betaalgegevens bij facturen
- Belangrijke disclaimers

Als deze informatie alleen in de kop- of voettekst staat, mist een schermlezergebruiker dit.

{{< /offerte-section >}}

{{< offerte-section title="Opmerkingen en zwevende objecten" subtitle="Wat werkt wel en niet" >}}

**Opmerkingen** in Word zijn toegankelijk. Schermlezers kondigen hun aanwezigheid automatisch aan. Voeg een opmerking toe via rechtermuisknop en kies **Nieuwe opmerking**.

**Zwevende objecten** zoals tekstvakken en vormen zijn problematisch. Vermijd deze waar mogelijk — ze kunnen problemen veroorzaken voor schermlezers.

{{< /offerte-section >}}

{{< offerte-section title="De toegankelijkheids-controle" subtitle="Ingebouwde tool in Word" bg="light" >}}

Word heeft een ingebouwde tool die veel voorkomende problemen opspoort.

### Zo gebruik je de tool

1. Ga naar **Controleren** en kies **Toegankelijkheid controleren**.
2. De resultaten verschijnen rechts in beeld.
3. Klik op een probleem om het te bekijken en direct te corrigeren.

### De tool detecteert:

- Ontbrekende alt-tekst
- Structuurproblemen
- Contrastproblemen

### De tool detecteert NIET:

- Kwaliteit van alt-teksten
- Of de juiste koppen zijn gebruikt
- Alle mogelijke problemen

**Handmatige controle blijft noodzakelijk!**

{{< /offerte-section >}}

{{< offerte-section title="Exporteren naar PDF" subtitle="Behoud de structuur" >}}

Je kunt een Word-bestand exporteren naar PDF met behoud van de meeste toegankelijkheidskenmerken.

### Stappen

1. Zorg dat je Word-document volledig toegankelijk is.
2. Ga naar **Bestand**, kies **Exporteren** en dan **PDF/XPS-document maken**.
3. Klik op **Opties** en vink aan: **Documentstructuurtags voor toegankelijkheid**.
4. Klik op **Publiceren**.

**Belangrijk:** controleer na export altijd de tagboom en de leesvolgorde in de PDF. Bij de automatische conversie kunnen fouten optreden.

{{< /offerte-section >}}

{{< offerte-section title="Toetsenbordtip" bg="light" >}}

In deze handleiding verwijzen we vaak naar rechtermuisklikken. Met alleen het toetsenbord kun je hetzelfde doen: selecteer het element en druk op **Shift + F10** om het contextmenu te openen.

{{< /offerte-section >}}

{{< offerte-section title="Checklist" subtitle="Controleer voor je deelt" >}}

Gebruik deze checklist om je document te controleren voordat je het deelt:

- Koppen: semantisch opgemaakt via Stijlen
- Afbeeldingen: alt-tekst of als decoratief gemarkeerd
- Afbeeldingen: Inline met tekst (niet zwevend)
- Kleur: nooit de enige betekenisdrager
- Contrast: voldoet aan WCAG (4,5:1 / 3:1)
- Lettertype: leesbaar, minimaal 12pt
- Links: semantisch, met betekenisvolle tekst
- Tabellen: koprijen, geen samengevoegde cellen
- Kop-/voettekst: geen cruciale info uitsluitend hier
- Toegankelijkheidscontrole: uitgevoerd + handmatig gecheckt
- Export: structuurtags aangevinkt, resultaat gecontroleerd

{{< /offerte-section >}}

<div class="offerte-cta">
  <div class="container">
    <p><em>Proper Access — Julia Tol</em></p>
    <p><em>Heb je vragen? Neem contact op via <a href="mailto:contact@properaccess.nl">contact@properaccess.nl</a></em></p>
  </div>
</div>

# Search Console-werkplan

Doel: Search Console structureel gebruiken voor SEO-beslissingen rond overheid,
commerciële audits, webshops en apps. De nulmeting is 26 oktober 2026 over 25 juli
tot en met 24 oktober 2026.

## Nulmeting bewaren

Bewaar elke export met datum, periode, property en filters. Gebruik voor elke
vergelijking dezelfde periode en noteer publicaties, redirects, URL-wijzigingen en
grote contentupdates in een changelog.

De belangrijkste segmenten zijn:

- overheid, gemeente, provincie, BDTO en DigiToegankelijk;
- DigiToegankelijk, Logius, Register van Toegankelijkheidsverklaringen;
- toegankelijkheidsonderzoek en WCAG-EM;
- WCAG-audit, audit laten uitvoeren en auditbureau;
- kosten, prijs en offerte;
- webshop, EAA webshop en webshop toegankelijk maken;
- app, iOS, Android, VoiceOver en TalkBack.

Voeg daarnaast een apart monitoringssegment toe voor organisatienamen:

- officiële entiteiten: `DigiToegankelijk`, `Logius`, `Register van
  Toegankelijkheidsverklaringen`;
- concurrenten die expliciet worden genoemd: `Cardan` en later alleen namen die in
  Search Console daadwerkelijk vertoningen krijgen.

Officiële entiteiten mogen op inhoudelijk passende overheid- en verklaringpagina's
voorkomen. Concurrentnamen worden alleen gebruikt voor monitoring en eventuele
vergelijkende content. Zet ze niet als verborgen of los keyword op iedere
dienstpagina.

## De tien analyses

### 1. Query-naar-URL-matrix

Exporteer in Prestaties de dimensies **zoekopdracht** en **pagina**, met query,
pagina, klikken, vertoningen, CTR en positie. Maak per segment een tabel:

`query | primaire URL | concurrerende URL's | vertoningen | klikken | CTR | positie | actie`

Doel: per zoekintentie één primaire URL aanwijzen. Een tweede URL is alleen goed
als die een aantoonbaar andere intentie bedient.

### 2. CTR-kansen

Filter op minimaal 20 vertoningen en sorteer pagina's met veel vertoningen en lage
CTR. Controleer title, meta description, H1, intro, zoekintentie en de actuele
zoekresultaten.

- positie 1–3: eerst title en snippet testen;
- positie 4–10: title, intro en interne links verbeteren;
- positie 11–20: inhoud en autoriteit versterken.

Maak maximaal tien concrete tests per kwartaal.

### 3. Pagina's op positie 4–20

Filter op gemiddelde positie 4–20, sluit merkqueries uit en sorteer op vertoningen.
Koppel elke kans aan een bestaande hub. Voeg twee tot vijf relevante interne links
toe vanaf sterke pagina's. Maak alleen een nieuwe URL als de intentie niet bij een
bestaande pagina past.

### 4. Periodevergelijking

Vergelijk elke drie maanden:

- de laatste 3 maanden met de vorige 3 maanden;
- dezelfde periode met het vorige jaar.

Vergelijk klikken, vertoningen, CTR en positie per segment, primaire URL en
landingspagina. Noteer seizoenseffecten en wijzigingen aan de site.

### 5. Mobiel versus desktop

Vergelijk apparaat **mobiel** en **desktop** per segment en primaire URL. Bij een
verschil controleer je mobiel op leesbaarheid, zoom, CTA-zichtbaarheid, formulieren,
laadtijd en navigatie.

Resultaat: een lijst met concrete mobiele SEO- of UX-aanpassingen.

### 6. URL-inspectie en canonical

Inspecteer elke primaire hub en elke nieuwe of gewijzigde URL. Noteer indexatiestatus,
canonical, laatste crawl, sitemapstatus en uitsluitingsreden.

Controleer dat:

- de URL in de sitemap staat;
- de URL indexeerbaar is;
- Google dezelfde canonical kiest als Proper Access;
- de URL interne inkomende links heeft;
- redirects en aliases niet naar een concurrerende pagina wijzen.

### 7. Sitemap en indexering

Vergelijk de Hugo-sitemap met het rapport **Pagina's**. Groepeer uitgesloten URL's
op reden: duplicate zonder gekozen canonical, crawled maar niet geïndexeerd,
noindex of redirect.

Controleer primaire commerciële en overheidspagina's eerst. Drafts, noindex-pagina's
en technische aliases horen niet als indexeerbare pagina in de sitemap.

### 8. Interne en externe links

Gebruik het rapport **Links** samen met de lokale interne-linkcontrole. Controleer
per hub het aantal interne inkomende links, bronpagina's, ankers, links vanuit blogs,
tools en sectorpagina's, en relevante externe domeinen.

Prioriteit: contextuele links in relevante content boven footerlinks.

### 9. Search Appearance

Controleer Search Appearance voor webresultaten, broodkruimels, FAQ's en andere
beschikbare typen. Vergelijk vertoningen en CTR per resultaatsoort.

Controleer daarna de JSON-LD en HTML. Voeg structured data alleen toe als de
zichtbare pagina-inhoud die ondersteunt; maak geen FAQ-content uitsluitend voor
rich results.

### 10. Niet-gebrande queries op positie 4–20

Exporteer queries op positie 4–20 en sluit merkvarianten uit, zoals Proper Access,
medewerkers en klanten. Cluster de rest op doelgroep en intentie.

Prioriteit:

1. commerciële intentie met een bestaande landingspagina;
2. overheid/gemeente met de bestaande overheidshub;
3. een ondersteunende vraag met voldoende vertoningen;
4. nieuwe content alleen wanneer een bestaande pagina de vraag niet logisch kan beantwoorden.

## Uitvoeringsritme

### Week 1: eenmalige nulmeting

1. Exporteer query's en pagina's over drie maanden.
2. Maak de matrix voor de zes segmenten.
3. Inspecteer alle primaire hubs.
4. Controleer sitemap, canonical en indexering.
5. Maak een backlog van maximaal tien acties.

### Maandelijks

- matrix bijwerken;
- nieuwe en gewijzigde URL's controleren;
- CTR-kansen en posities 4–20 bekijken;
- wijzigingen en acties loggen;
- maximaal drie wijzigingen tegelijk per segment uitvoeren.

### Per kwartaal

- periodevergelijking uitvoeren;
- mobiel versus desktop controleren;
- Search Appearance en Links controleren;
- cannibalisatie en interne-linkgaten oplossen;
- volgende content- en conversieprioriteiten bepalen.

## Automatisering

Begin handmatig. Automatiseer daarna de stabiele rapporten via de Search Console API
met OAuth voor `sc-domain:properaccess.nl`:

- wekelijkse opslag van query, pagina, clicks, impressions, CTR en position;
- dashboard per segment en primaire URL;
- waarschuwing bij grote dalingen, nieuwe concurrerende URL's of verlies van een hub.

OAuth-tokens horen buiten de repository. Leg eerst vast wie toegang beheert en waar
de exports worden opgeslagen.

## Succesmeting

Volg per segment:

- vertoningen van de primaire URL;
- niet-gebrande klikken;
- CTR en gemiddelde positie;
- aantal concurrerende URL's;
- klikken naar contact, offerte of relevante vervolgstap;
- aandeel overheid versus commercieel verkeer.

De eerste doelstelling is dat de primaire hub structureel de meeste relevante
vertoningen krijgt. Daarna sturen we op CTR en conversie.

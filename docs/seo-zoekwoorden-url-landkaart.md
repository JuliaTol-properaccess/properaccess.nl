# Zoekwoorden- en URL-landkaart

Deze landkaart voorkomt dat meerdere pagina's op dezelfde commerciële zoekintentie
concurreren. De URL in de kolom **primaire pagina** is de enige pagina die de
hoofdintentie volledig claimt. Blogs, tools en sectorpagina's beantwoorden een
deelvraag en linken contextueel naar die primaire pagina.

## Primaire landingspagina's

| Zoekintentie | Primaire pagina | Hoofdzoekwoorden | Rol van ondersteunende content |
| --- | --- | --- | --- |
| Een audit laten uitvoeren | [`/toegankelijkheidsaudit/`](/toegankelijkheidsaudit/) | WCAG-audit laten uitvoeren, toegankelijkheidsaudit laten uitvoeren, WCAG-audit website, auditbureau toegankelijkheid | Uitleg over wat een audit is, methode, handmatig versus automatisch testen en voorbeelden van rapporten. |
| Onderzoek kiezen of vergelijken | [`/toegankelijkheidsonderzoek/`](/toegankelijkheidsonderzoek/) | toegankelijkheidsonderzoek website, toegankelijkheidsonderzoek laten uitvoeren, WCAG-EM onderzoek, toegankelijkheidsonderzoek kosten | De verschillende onderzoekstypen, scope, methode, prijs en doorlooptijd. Link bij synoniemen terug naar deze hub; gebruik de auditpagina voor de directe koopintentie. |
| Kosten bepalen | [`/blog/wat-kost-een-toegankelijkheidsaudit/`](/blog/wat-kost-een-toegankelijkheidsaudit/) | kosten WCAG-audit, wat kost een toegankelijkheidsaudit, toegankelijkheidsonderzoek prijs | Informatieve prijsvergelijking. Link voor de aanvraag door naar [`/toegankelijkheidsaudit/`](/toegankelijkheidsaudit/). |
| Website toegankelijk maken | [`/digitale-toegankelijkheid/`](/digitale-toegankelijkheid/) | website toegankelijk maken, toegankelijke website maken, digitale toegankelijkheid website, wat moet ik doen voor WCAG | Uitleg en eerste stappen. Link voor bewijs, onderzoek of offerte naar de relevante commerciële hub; maak van deze pagina geen tweede auditpagina. |
| EAA en webshop | [`/e-commerce-digitale-toegankelijkheid/`](/e-commerce-digitale-toegankelijkheid/) | webshop toegankelijk maken, EAA webshop, webshop WCAG, webshop audit | Sectorgerichte koopintentie. De algemene wetuitleg gaat naar [`/eaa/`](/eaa/); prijzen naar de kostenpagina; een concreet onderzoek naar de auditpagina. |
| Digitale toegankelijkheid overheid | [`/digitale-toegankelijkheid-overheid/`](/digitale-toegankelijkheid-overheid/) | digitale toegankelijkheid gemeente, toegankelijkheidsonderzoek gemeente, WCAG-audit overheid, toegankelijkheidsverklaring overheid | Overheidscontext, Register, BDTO en WCAG-EM. Link voor algemene uitleg naar [`/digitale-toegankelijkheid/`](/digitale-toegankelijkheid/) en voor de auditkeuze naar [`/toegankelijkheidsonderzoek/`](/toegankelijkheidsonderzoek/). |
| Mobiele app testen | [`/app-toegankelijkheid-testen/`](/app-toegankelijkheid-testen/) | toegankelijkheid mobiele app testen, mobiele app audit, WCAG app, iOS toegankelijkheid testen, Android toegankelijkheid testen | App-specifieke testmethode en platformkeuze. Link vanuit app- en VoiceOver/TalkBack-content rechtstreeks hierheen. |

### Entiteiten en concurrentqueries

Monitor naast zoekintentie ook organisatienamen. `DigiToegankelijk`, `Logius` en
`Register van Toegankelijkheidsverklaringen` horen bij de overheid- en
verklaringroute. `Cardan` en andere concurrentnamen worden alleen gebruikt om
zoekgedrag te meten of voor een feitelijke vergelijkingspagina; niet als verborgen
keywords op alle commerciële pagina's.

### Bewuste scheiding tussen audit en onderzoek

`/toegankelijkheidsaudit/` en `/toegankelijkheidsonderzoek/` zijn synoniemen in de
markt, maar krijgen een verschillende zoekrol:

- **audit** = directe commerciële intentie: “laat het uitvoeren”, wat krijg ik en
  hoe vraag ik een audit aan;
- **onderzoek** = keuze- en vergelijkingsintentie: welk type onderzoek past, welke
  methode, scope, prijs en doorlooptijd.

De pagina's mogen elkaar dus uitleggen en naar elkaar linken, maar niet dezelfde
zoekvraag volledig opnieuw beantwoorden. De bestaande pagina
`/offerte-wcag-onderzoek/` blijft een conversiepagina en is geen extra SEO-hub.

De Search Console-data laat zien dat deze scheiding ook een doelgroepverschil is:

- **Overheid en publieke organisaties:** gebruik `toegankelijkheidsonderzoek` als
  hoofdterm. De onderzoekspagina krijgt bij de bredere onderzoeksterm 236
  vertoningen en de overheidspagina 222.
- **Commerciële organisaties:** gebruik `WCAG-audit`, `audit laten uitvoeren` en
  `audit kosten`. De auditpagina is de commerciële landingspagina; de
  onderzoekspagina blijft een keuzehulp.
- **Gemeenten:** de queryfamilie `gemeente` heeft 30 vertoningen, waarvan 18 op
  de overheidspagina, 7 op de auditpagina en 2 op de onderzoekspagina. Dat
  ondersteunt een explicietere gemeentelijke route binnen de overheidspagina,
  zonder een nieuwe gemeentepagina te maken.

## Linkregels per contenttype

### Blogs

- Een blog met een algemene uitleg over audit of onderzoek linkt één keer in de
  hoofdtekst naar de primaire hub, met een beschrijvend anker zoals
  “WCAG-audit laten uitvoeren” of “overzicht van toegankelijkheidsonderzoeken”.
- Een blog over kosten linkt eerst naar de kostenpagina en daarna, bij de CTA, naar
  `/toegankelijkheidsaudit/`.
- EAA-blogs over webshops linken naar `/e-commerce-digitale-toegankelijkheid/`;
  algemene uitleg over de wet blijft naar `/eaa/` gaan.
- Overheidsblogs linken naar `/digitale-toegankelijkheid-overheid/` en niet alleen
  naar de algemene pagina `/digitale-toegankelijkheid/`.
- App-, VoiceOver- en TalkBack-artikelen linken naar
  `/app-toegankelijkheid-testen/`.
- Gebruik geen generieke ankers als “lees meer” of “klik hier” voor deze hub-links.

### Tools

Tools beantwoorden een eerste controle en vervangen geen audit. De verzamelpagina
[`/tools/`](/tools/) linkt daarom naar de audit-hub met de expliciete vervolgstap:
“Wil je weten hoe je website er als geheel voor staat? Laat een
[toegankelijkheidsaudit uitvoeren](/toegankelijkheidsaudit/).”

Een tool voor een toegankelijkheidsverklaring linkt daarnaast naar de overheidshub;
een app-gerelateerde tool of handleiding naar de app-hub. Zo blijft de tool zelf
rankbaar op de taak, terwijl de commerciële intentie bij de dienstpagina blijft.

### Sectorpagina's

Elke sectorpagina linkt minimaal naar:

1. de algemene uitleg (`/digitale-toegankelijkheid/`);
2. de passende sectorhub, zoals overheid of e-commerce;
3. de passende diensthub (`/toegankelijkheidsaudit/`,
   `/toegankelijkheidsonderzoek/` of `/app-toegankelijkheid-testen/`).

De sectorpagina mag “WCAG-audit voor [sector]” gebruiken als variant, maar maakt
geen nieuwe bijna-gelijke URL per sector aan zolang de bestaande pagina de intentie
kan afdekken.

## Search Console-validatie

Op **26 oktober 2026** is de property toegankelijk gemaakt voor het ingelogde
account `juliatol@properaccess.nl`. De eerste controle hieronder gebruikt de
Search Console-periode **25 juli–24 oktober 2026**. Search Console rapporteert
voor een queryfilter het totaal en de pagina's die voor die filter vertoningen
kregen; dit is een signaal voor mogelijke overlap, geen bewijs dat elke pagina
dezelfde zoekintentie heeft.

Exporteer in Search Console voor de laatste 3 maanden en 12 maanden, per query de
velden **query, clicks, impressions, CTR, position en pages**. Filter vervolgens op
deze querygroepen:

| Querygroep | Verwachte primaire URL | Wat controleren |
| --- | --- | --- |
| `toegankelijkheidsaudit`, `wcag audit`, `audit laten uitvoeren` | `/toegankelijkheidsaudit/` | Of blogs of de offertepagina structureel meer impressies krijgen dan de dienstpagina. |
| `toegankelijkheidsonderzoek`, `onderzoek website`, `wcag-em onderzoek` | `/toegankelijkheidsonderzoek/` | Of de auditpagina en de onderzoekspagina dezelfde queries claimen. |
| `kosten`, `prijs`, `wat kost` + `wcag/audit/toegankelijkheid` | `/blog/wat-kost-een-toegankelijkheidsaudit/` | Of de kostenblog de informatieve prijsintentie bezit en de auditpagina de CTA-intentie. |
| `website toegankelijk maken`, `toegankelijke website` | `/digitale-toegankelijkheid/` | Of blogs vooral ondersteunend verkeer leveren en niet de algemene hub verdringen. |
| `eaa`, `webshop`, `webwinkel`, `e-commerce` | `/e-commerce-digitale-toegankelijkheid/` of `/eaa/` | Splits wetuitleg (`/eaa/`) van de webshop-koopintentie. |
| `gemeente`, `overheid`, `bdto`, `digitoegankelijk` | `/digitale-toegankelijkheid-overheid/` | Of de overheidshub zichtbaar is voor sectorintentie, in plaats van een blog. |
| `app`, `ios`, `android`, `voiceover`, `talkback` + `testen/toegankelijkheid` | `/app-toegankelijkheid-testen/` | Of app-content niet op de algemene auditpagina of een blog landt. |

### Eerste Search Console-bevindingen

| Queryfilter | Totaal | Opvallende pagina's | Interpretatie |
| --- | ---: | --- | --- |
| `toegankelijkheidsaudit` | 146 vertoningen, positie 5,2 | `/toegankelijkheidsaudit/` 108; kostenblog 107; `/zo-werken-wij/` 75; `/sectoren/` 65; WCAG-EM-blog 58 | Duidelijke cannibalisatie tussen de commerciële auditpagina, prijscontent en uitleg-/sectorpagina's. De auditpagina moet de koopintentie claimen; de andere pagina's moeten smaller linken naar de hub. |
| `toegankelijkheidsonderzoek` | 1.070 vertoningen, 1 klik, positie 10,5 | onderzoekspagina 236; WCAG-EM-blog 360; overheidspagina 222; cases 183; app-audit 171; auditpagina 61 | De onderzoekshub heeft de juiste rol, maar ondersteunende content draagt nog meer zichtbaarheid. De lage CTR maakt dit de hoogste prioriteit. Positioneer de pagina expliciet als keuzehulp voor overheid én organisaties die een onderzoek willen laten uitvoeren. |
| `webshop` | 207 vertoningen, 1 klik, positie 15,8 | webshop-EAA-blog 82; e-commerce-hub 40; prijsblog 18 | De e-commerce-hub bestaat, maar de blogs vangen de meeste zichtbaarheid. Voeg in beide blogs een prominente contextuele link naar de sectorhub toe en laat de hub duidelijk de aanvraagroute dragen. |
| `overheid` | 410 vertoningen, 0 klikken, positie 24,3 | blog “voor wie is digitale toegankelijkheid verplicht?” 274; blog over overheidswebsites 65; overheidshub 43 | De overheidshub krijgt te weinig zichtbaarheid ten opzichte van blogs. Zet bovenaan beide blogs een duidelijke link naar de overheidshub en maak de CTA over onderzoek/verklaring concreet. |
| `gemeente` | 30 vertoningen, 0 klikken, positie 4,9 | overheidshub 18; auditpagina 7; onderzoekspagina 2 | De overheidshub is al de sterkste URL. Gebruik “gemeente” in title/H1/intro of een gemeentensectie op die bestaande pagina; maak nog geen aparte URL. |

De cijfers zijn geen reden om URL's direct te verwijderen. Eerst de interne links,
ankers, title/H1 en intro's aanscherpen; daarna opnieuw meten. De queryfilters zijn
door Search Console als “bevat” toegepast, dus de aantallen zijn indicatief voor
de totale queryfamilie en niet voor één exacte zoekterm.

Beslisregels na de export:

- Eén query met meerdere relevante URL's is pas een probleem als de URL's dezelfde
  intentie bedienen en structureel tegelijk vertoningen krijgen.
- Blijft een ondersteunende URL zichtbaar met veel vertoningen maar lage CTR, voeg
  dan een contextuele link naar de hub toe en maak de intentie in title, H1 en intro
  van de ondersteunende pagina smaller.
- Heeft een primaire pagina nauwelijks vertoningen terwijl ondersteunende pagina's
  dezelfde query dragen, controleer eerst interne links, canonical en indexatie
  voordat je een URL wijzigt.
- Verplaats of verwijder geen bestaande URL zonder 301-alias en een controle van
  inkomende links.

## Uitvoering in de site

De eerste interne-linklaag staat op de centrale pagina's:

- `/sectoren/` verwijst naar algemene uitleg, EAA/BDTO en de relevante auditroute;
- `/tools/` verwijst naar de audit als volgende stap na zelf testen;
- `/diensten/` blijft het overzicht van onderzoekstypen en verwijst per type naar
  de primaire dienstpagina;
- blogs blijven naar één primaire hub per intentie verwijzen, met uitzonderingen
  alleen wanneer een tweede link een duidelijke vervolgstap is.

De eerstvolgende onderhoudsactie is daarom:

1. de WCAG-EM-blog, kostenblog, `/zo-werken-wij/`, `/sectoren/`, cases en
   app-audit expliciet naar hun eigen smallere rol laten verwijzen;
2. de twee webshopblogs naar `/e-commerce-digitale-toegankelijkheid/` laten
   linken met een beschrijvend anker;
3. in Search Console de pagina's per queryfilter opnieuw controleren na 8–12
   weken;
4. pas daarna beoordelen of een blog moet worden samengevoegd, gecanonicaliseerd
   of via een 301 naar een hub moet doorverwijzen.

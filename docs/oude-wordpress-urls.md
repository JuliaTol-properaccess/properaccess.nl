# Oude WordPress-URL's: waar de 301 vandaan moet komen

Uitgezocht op 4 oktober 2026, op verzoek van Nata. Zij vroeg of een 301 voor de oude
auteur-URL `/author/julia_a11y/` beter via Cloudflare of via `_redirects` gaat, en of er
meer WordPress-resten een 404 geven.

## Het antwoord: via Cloudflare, want `_redirects` doet niets

`_redirects` is een bestand van Cloudflare Pages en Netlify. Deze site staat op GitHub
Pages met Cloudflare als proxy ervoor, en GitHub Pages leest dat bestand niet. Het bestand
staat bovendien in de wortel van de repo en niet in `static/`, dus Hugo publiceert het niet
eens.

Drie metingen van 4 oktober 2026 die dat laten zien:

- `https://www.properaccess.nl/_redirects` geeft 404. Het bestand staat niet op de site.
- De enige regel in het bestand is `/* /en/404.html 404`. Die regel zou elk pad naar de
  Engelse foutpagina sturen. `https://www.properaccess.nl/authors/julia/` geeft gewoon 200,
  dus de regel wordt niet toegepast.
- `https://www.properaccess.nl/en/bestaat-niet-xyz/` geeft de Nederlandse foutpagina met de
  kop "Pagina niet gevonden", niet `/en/404.html`. Ook daar doet de regel niets.

Een 301 in `_redirects` zetten heeft dus geen effect. Dat sluit aan op wat
`layouts/alias.html` en `docs/geo-actieplan.md` al zeggen: GitHub Pages kan geen 301
serveren. Alleen Cloudflare zit in de keten en kan het wel.

Dit kan niet vanuit een sessie: het token hier heeft alleen rechten voor Workers, geen
`Zone.Rules.Edit`. Daarom staat de lijst klaar als een bestand dat Julia importeert.

## Wat Julia doet

Bulk Redirects zitten op het niveau van het account en niet in de zone. Het zijn twee
stappen: een lijst met de URL's, en een regel die die lijst gebruikt. Zonder die tweede
stap doet de lijst niets.

1. Download het bestand `docs/redirects/cloudflare-bulk-redirects.csv` uit de repo.
2. Ga in het Cloudflare-dashboard naar het account en daar naar Bulk Redirects.
3. Maak een lijst aan onder "Bulk Redirect Lists" en upload de CSV.
4. Maak daarna onder "Bulk Redirect Rules" een regel die naar die lijst wijst, en zet hem
   aan.
5. Controleer het resultaat met `python3 scripts/controleer_redirect_lijst.py`. Elke bron
   die nog 404 geeft, is nog niet actief; na het importeren horen ze allemaal 301 te geven.

Julia heeft dit op 4 oktober 2026 gedaan. De kolommen `source`, `target` en `status` worden
geaccepteerd en 190 regels passen binnen het abonnement. Daarna gaf elke bron een 301,
gemeten met het controlescript.

**Komt er een regel bij, dan moet de lijst opnieuw worden geïmporteerd.** De regel in de
repo doet zelf niets. Dat geldt nu voor regel 191, de slug-wijziging van
`/blog/sc-3-3-7-wat-betekent-toegankelijke-authenticatie/`, en voor de regels 192 tot en met
312 uit "Aliaspagina's zonder 301" hieronder.

De alias in de front matter van `content/dutch/authors/julia.md` kan blijven staan. Zolang
de 301 er niet is, is die doorverwijspagina het enige wat de bezoeker nog bij de juiste
pagina brengt. Staat de 301 er wel, dan wordt de aliaspagina nooit meer opgevraagd.

## Wat er gemeten is

De oude site had geen lijst van zijn eigen URL's meer, dus die komt uit het Internet
Archive:

```bash
curl -s "http://web.archive.org/cdx/search/cdx?url=properaccess.nl&matchType=domain\
&output=text&fl=original,timestamp,statuscode&collapse=urlkey&filter=statuscode:200&limit=4000"
```

Dat gaf 1.078 unieke paden op `properaccess.nl` en `www.properaccess.nl`. Daarvan geven er
nu 400 een 200 en 677 een 404. Van die 677 zijn 382 bestanden uit `/wp-content/`,
`/wp-json/` en `/wp-includes/`: afbeeldingen, stylesheets en API-antwoorden. Die horen een
404 te geven en staan niet in de lijst. Blijven over: 295 paden die een pagina waren.

Daarvan staan er 190 in de CSV. Per groep:

| Groep | Regels | Voorbeeld |
| --- | --- | --- |
| Succescriteria | 56 | `/tag/1-4-3/` naar `/blog/sc-1-4-3-wat-betekent-contrast-minimum/` |
| Taxonomie | 32 | `/category/tips-en-tools/` naar `/categories/tips-en-tools/` |
| Oude WCAG-wiki | 29 | `/wcag_wiki/wat-betekent-reflow-in-wcag/` naar `/blog/sc-1-4-10-wat-betekent-reflow/` |
| Diensten | 20 | `/audit-digitale-toegankelijkheid/` naar `/toegankelijkheidsaudit/` |
| Overzichtspagina's | 13 | `/blog-digitale-toegankelijkheid/` naar `/blog/` |
| Sitemaps | 12 | `/sitemap_index.xml` naar `/sitemap.xml` |
| Bedrijfspagina's | 9 | `/partners/` naar `/samenwerken-proper-access/` |
| Losse artikelen | 8 | `/wcag/` naar `/blog/wat-is-wcag/` |
| Sectoren | 6 | `/webwinkels/` naar `/e-commerce-digitale-toegankelijkheid/` |
| Engelse kant | 3 | `/english/` naar `/en/` |
| Auteur | 1 | `/author/julia_a11y/` naar `/authors/julia/` |
| Feed | 1 | `/feed/` naar `/index.xml` |

Regel 191 komt niet uit WordPress: dat is een slug die wij zelf hebben gewijzigd. Zie
"Twee slugs noemen het verkeerde succescriterium" hieronder.

Elke regel is gecontroleerd met `scripts/controleer_redirect_lijst.py`: 190 regels, 278
URL's opgehaald, geen fouten. Dat script kijkt naar twee dingen.

- Het doel geeft 200 en is zelf geen doorverwijzing. Dat ving één fout: `/quickscan/` is
  zelf een aliaspagina naar `/webshop-quickscan/`, en `/tools/tekstafstand-check/` een
  aliaspagina naar `/tools/wcag-radar/`. Een 301 daarheen zou een keten opleveren, dus de
  lijst wijst nu naar de eindpagina.
- De bron geeft 404 en bestaat dus echt niet meer. Bij regel 191 is dat anders: daar is de
  bron een aliaspagina van Hugo, dus een 200 met een meta-refresh. Het script rekent dat
  sinds 4 oktober 2026 ook goed, want zo'n pagina is geen echte pagina en wacht op de 301.

### Twee slugs noemen het verkeerde succescriterium

De 56 tag-regels zijn gelegd op het nummer in de slug van het uitlegartikel. Bij twee
artikelen klopt dat nummer niet met de inhoud:

- `/blog/sc-1-4-5-wat-betekent-contrast-voor-niet-tekstuele-onderdelen/` heeft als titel
  "SC 1.4.11" en als tag `1-4-11`. Contrast voor niet-tekstuele onderdelen is 1.4.11;
  1.4.5 is afbeeldingen van tekst, en daarover gaat
  `/blog/sc-1-4-5-wat-betekent-afbeeldingen-van-tekst/`.
- `/blog/sc-3-3-7-wat-betekent-toegankelijke-authenticatie/` heeft als titel "SC 3.3.8".
  Toegankelijke authenticatie is 3.3.8; 3.3.7 is redundante invoer, en daarover gaat
  `/blog/sc-3-3-7-wat-betekent-redundante-invoer/`.

Mijn eerste versie van de lijst stuurde `/tag/1-4-5/` daardoor naar het artikel over
1.4.11. Dat is gecorrigeerd en die twee URL's zijn nu uitgesloten als doel.

Nata heeft op 4 oktober 2026 per artikel beslist wat er met de slug gebeurt.

- **Toegankelijke authenticatie: hernoemd.** De slug is
  `sc-3-3-8-wat-betekent-toegankelijke-authenticatie`, gezet in de front matter. De
  bestandsnaam blijft staan, want de permalink is `:slugorcontentbasename`. De oude URL
  `/blog/sc-3-3-7-wat-betekent-toegankelijke-authenticatie/` staat er als alias bij en is
  regel 191 van de CSV. De twee interne links wijzen naar de nieuwe URL.
- **Contrast voor niet-tekstuele onderdelen: nog niet hernoemd.** Er staan twee artikelen
  over 1.4.11 live, en het oudere voegt niets toe aan het nieuwere. Nata stelt voor om ze
  samen te voegen en `/blog/sc-1-4-5-wat-betekent-contrast-voor-niet-tekstuele-onderdelen/`
  naar `/blog/sc-1-4-11-wat-betekent-contrast-UI/` te sturen. Een pagina weghalen is een
  beslissing van Julia, dus die vraag ligt bij haar. Houdt ze beide artikelen, dan krijgt
  het oudere een slug die het verschil laat zien en is er alsnog een redirect nodig.

### De koppelingen waar een keuze in zit

De meeste regels zijn een oude naam naar dezelfde pagina onder een nieuwe naam. Deze acht
zijn een beoordeling van mij. Haal ze eruit als je het er niet mee eens bent, want een
doorverwijzing naar een pagina die niet past wordt door Google als een kapotte link gezien
en helpt dan niet.

- `/quickscan-digitale-toegankelijkheid/` en `/quick-scan/` naar `/webshop-quickscan/`. De
  oude quickscan was niet alleen voor webshops. De site zelf stuurt `/quickscan/` al naar
  deze pagina, dus de lijst volgt die keuze.
- `/training-in-digitale-toegankelijkheid/` naar `/diensten/`, omdat er nu twee trainingen
  zijn en de oude pagina niet zegt welke het was.
- `/voor-ontwikkelaar/` naar `/training-devteams/` en `/voor-webredactie/` naar
  `/trainen-van-webredactie/`.
- `/instructie-pdfs-testen-met-pac-2024/` en `/hoe-toegankelijk-zijn-offertes-in-pdf-formaat/`
  naar `/tools/pdf-checker/`. Dat is het onderwerp, maar geen artikel.
- `/coole-mensen-in-digitale-toegankelijkheid/` naar `/categories/tips-en-tools/` en
  `/toegankelijkheid_politieke_partijen/` naar
  `/blog/toegankelijke-websites-van-politieke-partijen/`. Tot 9 oktober 2026 wezen beide
  naar `/bijzondere-initiatieven/`; zie "Bijzondere initiatieven van de site" hieronder.

Bij die laatste hoort een opmerking. In het archief staat de URL ook als
`/toegankelijkheid_politieke_partijen/?ref=felienne.nl`. Dat wijst op een link van buiten,
en dat is precies de linkwaarde waar een 301 voor is. Of Cloudflare de regel ook toepast op
een URL met die parameter erachter, kon ik niet testen. Komt de parameter niet mee, dan is
er een tweede regel nodig of de optie voor subpad-matching.

## De 105 die een 404 blijven

`docs/redirects/404-zonder-301.txt` is de lijst van paden die geen doel kregen. Drie
soorten:

- **Demopagina's van het oude WordPress-thema.** `/portfolios/masonry-minimal-portfolio-3-columns/`,
  `/pricing-2/`, `/video-post/`, `/category/insights/` en zo nog tientallen. Die hebben
  nooit bij Proper Access gehoord en horen niet in de index.
- **WordPress zelf.** `/wp-login.php`, `/xmlrpc.php`, `/comments/feed/`, `/forums/`. Dat
  een inlogpagina van een CMS dat we niet meer gebruiken 404 geeft, is goed.
- **Echte pagina's zonder opvolger.** `/faq/`, `/community/`, `/wcag_makkelijke_taal/`,
  `/wcag_for_business/`, `/to-week-11-2025/`, `/category/technisch-overleg-bij-proper-access/`
  en de trefwoord-tags als `/tag/kleur/` en `/tag/skiplink/`. Hier is een keuze nodig die
  verder gaat dan een redirect: of er komt een pagina, of de 404 blijft staan. Dat is werk
  voor de contentstroom, niet voor deze lijst.

## Wat hier niet in zit

- **Of deze URL's nog in Google staan.** Dat staat in Search Console en daar kom ik niet
  bij. Wat hier staat is welke URL's bestonden en nu een 404 geven. Nata zag
  `/author/julia_a11y/` zelf in de zoekresultaten staan.
- **Groep A uit het geo-actieplan** stond hier eerst buiten, want daar bestaat de pagina nog
  wel. Sinds 5 oktober 2026 staan die zes er wel in, samen met de andere aliaspagina's. Zie
  "Aliaspagina's zonder 301" hieronder.
- **De Engelse foutpagina.** `/en/`-paden die niet bestaan, krijgen nu de Nederlandse
  foutpagina. GitHub Pages kent maar één `404.html` en dat is die in de wortel. Dat is op
  te lossen door de foutpagina zelf naar het pad te laten kijken, maar dat is een
  wijziging die bezoekers zien en die dus eerst langs Gerard moet.

## Aliaspagina's zonder 301

Uitgezocht op 5 oktober 2026, naar aanleiding van een bevinding van Nata: in haar meting
van AI-antwoorden haalt `/en/proper_access_in_english/` in zes dagen 8 ophalingen en 12
citaties, en die URL bestaat alleen nog als `aliases`-regel in `content/english/about-us.md`.

### Wat een alias wel en niet doet

Een `aliases`-regel in de front matter levert in Hugo een eigen HTML-pagina op met een
meta-refresh en een canonical naar de echte pagina. Die pagina geeft status 200. Gemeten op
`https://www.properaccess.nl/en/proper_access_in_english/`: 862 byte, met de titel en de
description van `/en/about-us/`, een `<h1>This page has moved</h1>` en verder niets.

Voor een bezoeker werkt dat. Voor een zoekmachine of een AI-crawler is het een eigen URL met
status 200, die opgehaald en geciteerd kan worden. Dat is precies wat er gebeurt. Hetzelfde
patroon stond al in `docs/geo-actieplan.md` als groep A: zes aliaspagina's die in Search
Console beter ranken dan de pagina waar ze naar wijzen.

### De meting

`scripts/aliassen_zonder_301.py --live` leest alle `aliases`-regels uit `content/`, vergelijkt
ze met de 301-lijst en haalt elke alias live op. Uitvoer van 5 oktober 2026:

- 139 aliassen in `content/`.
- 3 hadden al een 301: `/author/julia_a11y/`, `/team/` en
  `/blog/sc-3-3-7-wat-betekent-toegankelijke-authenticatie/`.
- 136 hadden er geen. Alle 136 gaven status 200 met een meta-refresh, en alle 136 doelen
  gaven 200.

Het doel komt uit de meta-refresh van de aliaspagina zelf en niet uit het bestandspad. Dat is
nodig, want de secties in `config/_default` bepalen welke mapnamen in de URL komen: bij vijf
aliassen week de afleiding uit het pad af van de echte URL, bijvoorbeeld
`content/dutch/diensten/hercontrole.md`, dat op `/hercontrole/` staat en niet op
`/diensten/hercontrole/`.

### Wat er is toegevoegd: 121 regels

De lijst gaat van 191 naar 312 regels.

- **120 aliassen krijgen een 301.** Alle 136 minus de 16 toolstubs hieronder.
- **1 regel voor een pad zonder slash**: `/services-digitale-toegankelijkheid` geeft 404,
  terwijl `/services-digitale-toegankelijkheid/` sinds de import een 301 geeft. Cloudflare
  matcht de bron letterlijk en GitHub Pages stuurt een onbekend pad zonder slash niet door
  naar de versie met slash. Dat pad is deze week twee keer opgevraagd volgens de
  bezoekmeting. De andere 104 paden uit `404-zonder-301.txt` hebben dit ook, maar zijn niet
  opgevraagd; de lijst daarvoor verdubbelen kost meer dan het oplevert.

De `aliases`-regels blijven staan. Zolang de lijst niet opnieuw is geïmporteerd, is de
aliaspagina het enige wat de bezoeker bij de juiste pagina brengt. Staat de 301 er wel, dan
komt Cloudflare eerst en wordt de aliaspagina niet meer opgevraagd.

### De 16 toolstubs krijgen geen 301

Dit is geen vergissing. Julia heeft op 17 september 2026 besloten dat de functienamen geen
losse pagina's krijgen en dat de Radar-pagina zelf op die namen mikt (`docs/geo-actieplan.md`,
groep B). Die stubs stonden in Search Console samen op 2.207 vertoningen en 52 klikken, met
een hogere CTR dan de pagina waar ze naar wijzen. Een 301 haalt ze uit de index en dan
verdwijnen die klikken mogelijk mee.

Het gaat om tien stubs onder `/tools/` die naar `/tools/wcag-radar/` wijzen
(`toegankelijkheids-lens` en de vier varianten, `alt-tekst-checker`,
`koppenstructuur-checker`, `link-checker`, `tabel-checker`, `kleurcontrast-checker`,
`tekstafstand-check`) en zes onder `/en/tools/` (`accessibility-lens`, `alt-text-checker`,
`heading-checker`, `heading-structure-checker`, `link-checker`, `table-checker`).

Komt die beslissing terug, dan zet `scripts/aliassen_zonder_301.py` ze er in het juiste
formaat uit.

### Wat Julia doet

1. Importeer `docs/redirects/cloudflare-bulk-redirects.csv` opnieuw in de Bulk Redirect List.
   De regels in de repo doen zelf niets.
2. Kijk of de lijst binnen het abonnement past. Bij de vorige import pasten 190 regels;
   wat het maximum is, staat in het dashboard en is hier niet te zien.
3. Controleer daarna met `python3 scripts/controleer_redirect_lijst.py`. Gemeten op
   5 oktober 2026: 312 regels, 457 URL's opgehaald, geen fouten, 190 bronnen geven al
   een 301.

## Bijzondere initiatieven van de site

Julia heeft op 9 oktober 2026 besloten dat `/bijzondere-initiatieven/` voorlopig van de
site af gaat. Reden: wij geven Publiqa en Tolkie daar een eigen plek met logo en
aanbeveling, en zij verwijzen niet of nauwelijks naar ons terug. Het definitieve besluit
valt begin november, dus de ingreep is omkeerbaar gehouden: de pagina staat op
`draft: true` en de tekst, `data/bijzondere-initiatieven.yaml` en
`layouts/bijzondere-initiatieven/list.html` staan er nog.

Dat raakt de redirectlijst op drie plekken. De lijst gaat van 312 naar 313 regels.

- Regel 13, `/coole-mensen-in-digitale-toegankelijkheid/`, wijst nu naar
  `/categories/tips-en-tools/`. Dat is de categorie waarin de artikelen staan waarin we
  gereedschap van anderen aanraden, waaronder `/blog/tolkie-leeshulp-aanrader/`.
- Regel 19, `/toegankelijkheid_politieke_partijen/`, wijst nu naar
  `/blog/toegankelijke-websites-van-politieke-partijen/`. Dat is hetzelfde onderwerp als
  de oude pagina en een betere koppeling dan de vorige.
- Regel 313 is nieuw: `/bijzondere-initiatieven/` naar `/categories/tips-en-tools/`.

Zolang die laatste regel niet in Cloudflare staat, houdt een `aliases`-regel in
`content/dutch/categories/tips-en-tools/_index.md` de URL uit de 404. Dat is dezelfde
constructie als bij de 120 aliassen hierboven: status 200 met een meta-refresh en een
canonical, en het controlescript rekent dat goed voor een bron die op zijn 301 wacht.
Staat de 301 er, dan komt Cloudflare eerst en wordt die pagina niet meer opgevraagd.

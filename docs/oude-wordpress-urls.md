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

1. Open in het Cloudflare-dashboard de zone `properaccess.nl` en ga naar Bulk Redirects.
2. Maak een lijst aan en importeer `docs/redirects/cloudflare-bulk-redirects.csv`.
3. Zet er een Bulk Redirect-regel op die de lijst gebruikt.
4. Controleer het resultaat met `python3 scripts/controleer_redirect_lijst.py`. Elke bron
   die nog 404 geeft, is nog niet actief; na het importeren horen ze allemaal 301 te geven.

De CSV heeft de kolommen `source`, `target` en `status`. Of het dashboard die kolomnamen
accepteert, heb ik niet kunnen testen: ik kom niet in het Cloudflare-account. Klopt het
formaat niet, dan is het een kwestie van de koppen aanpassen, niet van de inhoud.

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

Elke regel is gecontroleerd met `scripts/controleer_redirect_lijst.py`: 190 regels, 278
URL's opgehaald, geen fouten. Dat script kijkt naar twee dingen.

- Het doel geeft 200 en is zelf geen doorverwijzing. Dat ving één fout: `/quickscan/` is
  zelf een aliaspagina naar `/webshop-quickscan/`, en `/tools/tekstafstand-check/` een
  aliaspagina naar `/tools/wcag-radar/`. Een 301 daarheen zou een keten opleveren, dus de
  lijst wijst nu naar de eindpagina.
- De bron geeft 404 en bestaat dus echt niet meer.

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
1.4.11. Dat is gecorrigeerd en die twee URL's zijn nu uitgesloten als doel. De slug zelf
verander ik niet: dat is een URL die bestaat, dus dan is er weer een redirect nodig. Het
staat als vraag bij Nata.

### Een spelfout in de slug van 2.1.1

`/blog/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk/` schrijft "toegenkelijk" in plaats
van "toegankelijk". De titel van het artikel is wel goed. De fout komt uit WordPress: de
bestandsnaam en de alias zijn daar bij de migratie van overgenomen. Nata vond hem op
4 oktober 2026.

De slug staat nu als `sc-2-1-1-wat-betekent-toetsenbord-toegankelijk` in de front matter.
Verder gewijzigd:

- De oude URL `/blog/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk/` staat erbij als
  tweede alias en als regel in de CSV.
- Drie regels in de CSV wezen naar de oude URL als doel: `/tag/2-1-1/`,
  `/wcag_wiki/2-1-1-toetsenbord-toegankelijkheid/` en `/wcag_wiki/tag/toetsenbord/`. Die
  wijzen nu naar de nieuwe URL. Zonder dat zou er een keten ontstaan: eerst een 301 naar
  de oude URL, en daar nog een doorverwijzing.
- De twee interne links in `content/dutch/tools/wcag-radar.md` wijzen naar de nieuwe URL.

**De alias met de spelfout blijft staan zoals hij is.** `/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk/`
is de echte oude WordPress-URL, dus dat is de enige regel die een bezoeker van buiten nog
bij het artikel brengt. Alle 51 gemigreerde uitlegartikelen hebben zo'n alias, en die is
daar altijd gelijk aan de bestandsnaam. Verbeter je de spelling daar ook, dan geeft die
URL een 404. Hetzelfde geldt voor de bestandsnaam: die bepaalt de alias niet, maar
hernoemen levert alleen ruis in de historie op.

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
- `/coole-mensen-in-digitale-toegankelijkheid/` en `/toegankelijkheid_politieke_partijen/`
  naar `/bijzondere-initiatieven/`.

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
- **Groep A uit het geo-actieplan.** Dat zijn zes aliaspagina's die beter ranken dan de
  pagina waar ze naar wijzen. Ze stonden op 17 september 2026 klaar als CSV op de computer
  van Julia en geven nog steeds 200, dus die 301's zijn er nooit gekomen. Ze staan niet in
  deze lijst, want het is een ander probleem: daar bestaat de pagina nog wel.
- **De Engelse foutpagina.** `/en/`-paden die niet bestaan, krijgen nu de Nederlandse
  foutpagina. GitHub Pages kent maar één `404.html` en dat is die in de wortel. Dat is op
  te lossen door de foutpagina zelf naar het pad te laten kijken, maar dat is een
  wijziging die bezoekers zien en die dus eerst langs Gerard moet.

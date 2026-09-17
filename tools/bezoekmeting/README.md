# Bezoekmeting

Tijdelijke meting, opgezet in september 2026. Hij beantwoordt één vraag:

> Welk deel van het bezoek op properaccess.nl kunnen we zelf herleiden naar een
> organisatie, en zitten daar bedrijven bij die we zouden willen bellen?

Met dat getal kun je beslissen of een betaalde dienst als Leadinfo iets toevoegt.
Dit is dus een meting en geen leadtool: er is geen dashboard en geen opvolging.

## Hoe het werkt

1. Een klein script op de site meldt de paginaweergave bij de Worker. Het stuurt
   het pad en het domein van de verwijzer mee, en verder niets.
2. De Worker leest het IP-adres uit `CF-Connecting-IP` en het netwerk uit
   `request.cf`, en zoekt daar een organisatie bij:
   - het PTR-record in DNS, via DNS-over-HTTPS bij 1.1.1.1
   - de RDAP-gegevens van RIPE, en anders via rdap.org bij de juiste registrar
   - als beide niets geven: de netwerknaam die Cloudflare zelf meegeeft
3. De uitkomst wordt ingedeeld als `bedrijf`, `provider`, `hosting`, `eigen` of
   `onbekend`, en als losse regel in D1 opgeslagen.

Het IP-adres wordt niet opgeslagen. Het bestaat alleen in het geheugen van de
Worker en wordt daar teruggebracht tot een /24 (IPv4) of /48 (IPv6), puur als
sleutel voor de cache. In de database staan datum, pad, organisatienaam, soort,
ASN en land.

## Wat je ervan mag verwachten

Alleen organisaties met eigen IP-ruimte of een herkenbaar benoemd netwerk komen
eruit. Gemeenten, ministeries, universiteiten, ziekenhuizen en grote bedrijven:
vaak wel. Een mkb-bedrijf op glasvezel van KPN of Ziggo: nee, dan lees je de
provider. Mobiel bezoek en thuiswerkers vallen vrijwel altijd af.

Dat verschil is precies waar een betaalde dienst voor betaald wordt. Die hebben
een eigen database die IP-adressen aan bedrijven koppelt, uit veel meer bronnen
dan een RDAP-lookup.

## Uitrollen

De Worker staat klaar maar is nog niet uitgerold. Vier stappen:

```bash
cd tools/bezoekmeting

# 1. Database aanmaken. Zet de database_id die hij teruggeeft in wrangler.json.
npx wrangler d1 create pa-bezoekmeting

# 2. Tabellen aanmaken
npx wrangler d1 execute pa-bezoekmeting --remote --file=schema.sql

# 3. Wachtwoord voor /rapport instellen
npx wrangler secret put RAPPORT_SLEUTEL

# 4. Uitrollen
npx wrangler deploy
```

Daarna in `config/_default/params.toml` de meting aanzetten:

```toml
[bezoekmeting]
enable = false   # → true
```

Het script laadt alleen in een productiebuild, dus lokaal meet hij niets.

## Rapport lezen

```
https://pa-bezoekmeting.juliatol.workers.dev/rapport?sleutel=<sleutel>&dagen=7
```

Platte tekst in de browser. Bovenaan staat het getal waar het om gaat: hoeveel
paginaweergaven er gemeten zijn en welk deel daarvan bij een organisatie hoort.
Daaronder de organisaties met hun pagina's, en de pagina's waar bedrijfsbezoek
op binnenkomt.

## Onderhoud

De lijsten `HOSTERS` en `PROVIDERS` in `worker.js` zijn een eerste inschatting op
naam. Kijk na een paar dagen naar de organisaties die als `bedrijf` zijn geteld:
staan er providers of hostingpartijen tussen, vul die lijsten dan aan.

Opruimen kan met de hand:

```bash
npx wrangler d1 execute pa-bezoekmeting --remote \
  --command "DELETE FROM bezoek WHERE moment < datetime('now', '-90 days')"
```

## Weghalen

Zet `enable` op `false` in params.toml. Dan stopt de meting meteen en blijft er
niets op de site achter. De Worker en de database verwijderen kan daarna met
`npx wrangler delete` en `npx wrangler d1 delete pa-bezoekmeting`.

## Nog te regelen voordat dit aan mag

- De privacyverklaring moet vertellen dat we het netwerk van bezoekers opzoeken,
  met welke grondslag en hoe lang we het bewaren.
- Nakijken of deze opzet zonder toestemming mag. Er komt geen cookie aan te pas
  en er wordt niets op het apparaat van de bezoeker gezet, maar een IP-adres
  verwerken blijft verwerken. Dat is een vraag voor iemand die de AVG-kant kent,
  niet iets om op gevoel te doen.

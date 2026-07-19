# WCAG Radar loader

Cloudflare Worker op `https://tools.properaccess.nl`, die de geobfusceerde
bundle van de WCAG Radar serveert op `/l/lens.js`. De bookmarklets op
`/tools/wcag-radar/` en `/en/tools/wcag-radar/` halen die URL op.

## De code van de Radar staat hier niet

Die staat in de repo **wcag-scan**, map `wcag-radar/`. Daar zit de bron, de
build, de tests, het versienummer en de changelog.

Deze Worker heeft geen eigen kopie meer. Hij haalt de bundle op bij
`https://testtoegankelijkheid.nl/l/lens.js` en geeft die door, met een cache
ertussen omdat die origin op scale-to-zero draait en een koude start tientallen
seconden duurt.

Tot juli 2026 lag dat anders: er stond een eigen `bundles.js` in deze map,
gebouwd uit `assets/js/bookmarklets/`. Daardoor ontstonden er twee versies van
dezelfde tool. Wie zijn bookmarklet vanaf properaccess.nl had gesleept, bleef
hangen op een oude build terwijl testtoegankelijkheid.nl doorontwikkelde, en kon
dat zelf niet zien. Die bron, de bijbehorende `bundles.js` en
`scripts/build-bookmarklets.js` zijn daarom verwijderd. Wil je iets aan de Radar
veranderen, doe dat in wcag-scan.

## Wat hier nog wél hoort

- `data/bookmarklets.json` bevat de sleepbare bookmarklets voor de pagina's. Dat
  bestand staat in git en wordt niet meer gegenereerd. De URL erin
  (`tools.properaccess.nl/l/lens.js`) moet blijven zoals hij is: die zit
  vastgebakken in elke bookmarklet die ooit gesleept is. Verander je hem, dan
  breken die allemaal.
- De Worker houdt rate limiting, een `KILL_SWITCH` als noodrem, en de oude
  rol-URL's (`designers`, `webredactie`, `ontwikkelaars`) als alias.

## Deployen

```bash
cd tools/lens-loader
npx wrangler deploy
```

Controleren:

```bash
curl -sI https://tools.properaccess.nl/l/lens.js | grep -i x-lens-upstream
```

Of open de bookmarklet op een willekeurige pagina: onderin het paneel staat het
versienummer, en dat moet gelijk zijn aan dat op
testtoegankelijkheid.nl/wcag-radar.

## Noodrem

Zet `KILL_SWITCH = true` in `worker.js` en deploy opnieuw om de Radar tijdelijk
uit te schakelen (bijvoorbeeld bij misbruik).

## Later: betaald maken

In `worker.js` staat een uitgeschakeld blok voor een licentie-check. Zet dat aan
zodra de Radar per abonnement verkocht wordt: dan serveert de Worker de code
alleen met een geldige sleutel (`?k=...`), te controleren tegen een KV-namespace
of een externe API.

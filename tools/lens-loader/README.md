# WCAG Radar loader

Cloudflare Worker die de geobfusceerde bookmarklet-bundles serveert. De
bookmarklet op de site is nog maar een klein laadscriptje dat hier
`/l/<rol>.js` ophaalt. Voordelen:

- De leesbare broncode staat niet meer in de pagina, alleen een onleesbare,
  geobfusceerde bundle achter deze Worker.
- Updates lopen centraal: opnieuw bouwen + deployen en iedereen heeft meteen de
  nieuwe versie, zonder de bookmarklet opnieuw te slepen.
- Rate limiting en een noodrem (`KILL_SWITCH`) tegen misbruik.
- Klaar voor later: een licentie-check (`?k=...`) om de lens betaald te maken.

## Hoe het samenhangt

1. `npm run build` draait `scripts/build-bookmarklets.js`. Dat obfusceert de
   code uit `assets/js/bookmarklets/` en schrijft:
   - `tools/lens-loader/bundles.js` -> de bundles die deze Worker serveert
   - `data/bookmarklets.json` -> de kleine loader-bookmarklets voor de pagina
2. `bundles.js` is auto-gegenereerd. Bewerk het niet met de hand.

## Deployen

```bash
cd tools/lens-loader
npx wrangler deploy
```

Na de eerste deploy draait de Worker op
`https://lens-loader.<jouw-subdomein>.workers.dev`. Test:

```bash
curl -I https://lens-loader.<subdomein>.workers.dev/l/designers.js
```

Verwacht: `200`, `Content-Type: application/javascript`, header `X-Lens-Version`.

## Belangrijk: URL gelijk houden

De loader-bookmarklet wijst naar `LOADER_BASE` in
`scripts/build-bookmarklets.js`. Nu:

```
https://lens-loader.juliatol.workers.dev
```

Koppel je later een eigen route (bijvoorbeeld `https://tools.properaccess.nl`),
pas dan `LOADER_BASE` aan, draai `npm run build` opnieuw en deploy zowel de site
als de Worker.

## Noodrem

Zet `KILL_SWITCH = true` in `worker.js` en deploy opnieuw om alle lenzen
tijdelijk uit te schakelen (bijvoorbeeld bij misbruik).

## Later: betaald maken

In `worker.js` staat een uitgeschakeld blok voor een licentie-check. Zet dat aan
zodra je de lens per abonnement verkoopt: dan serveert de Worker de code alleen
met een geldige sleutel (`?k=...`), te controleren tegen een KV-namespace of een
externe API.

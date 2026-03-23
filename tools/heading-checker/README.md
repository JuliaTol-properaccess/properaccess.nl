# Heading Structure Checker — Deployment

## Hoe het werkt

1. Bezoeker voert een URL in op je website
2. De frontend stuurt een request naar een Cloudflare Worker
3. De Worker haalt de pagina op, extraheert alle koppen, en analyseert de structuur
4. De frontend toont het resultaat als een visuele boom met foutmeldingen

## Wat wordt gecontroleerd

- Geen `<h1>` aanwezig
- Meerdere `<h1>`-koppen
- Eerste kop is geen `<h1>`
- Overgeslagen kopniveaus (bijv. van `<h2>` naar `<h4>`)
- Lege koppen (zonder tekst)
- Verborgen koppen (`aria-hidden`)

## Bestanden

- `worker.js` — Cloudflare Worker (server-side proxy + HTML parsing)
- `page.html` — Frontend (standalone, of te integreren in Hugo)

## Stap 1: Cloudflare Worker deployen

### Optie A: Via het Cloudflare dashboard (makkelijkst)

1. Ga naar https://dash.cloudflare.com/44505aa6a996a3cc1d9c0a724ccf1239/workers/services/edit/heading-checker/production
2. Maak een gratis account aan (als je dat nog niet hebt)
3. Ga naar **Workers & Pages** in het linkermenu
4. Klik **Create** → **Create Worker**
5. Geef het een naam: `heading-checker`
6. Plak de inhoud van `worker.js` in de editor
7. Klik **Deploy**
8. Je krijgt een URL zoals: `https://heading-checker.<jouw-account>.workers.dev`

### Optie B: Via de CLI

```bash
npm install -g wrangler
wrangler login
wrangler deploy worker.js --name heading-checker
```

### Na deployment

Pas in `worker.js` de `ALLOWED_ORIGIN` aan als je een ander domein gebruikt:

```js
const ALLOWED_ORIGIN = "https://www.properaccess.nl";
```

## Stap 2: Frontend integreren

### In Hugo

1. Maak een nieuwe pagina aan, bijv. `content/tools/koppenstructuur-checker.md`:

```markdown
---
title: "Koppenstructuur checker"
description: "Controleer de koppenstructuur van je website. Voer een URL in en zie direct of je koppen logisch zijn opgebouwd."
layout: "heading-checker"
---
```

2. Maak een layout aan in `layouts/page/heading-checker.html` (of `layouts/_default/heading-checker.html`)

3. Kopieer de relevante HTML, CSS en JS uit `page.html` naar dit template. Gebruik je bestaande Hugo base template voor header/footer.

4. **Belangrijk:** Pas `WORKER_URL` aan in het JavaScript:

```js
const WORKER_URL = "https://heading-checker.<jouw-account>.workers.dev/";
```

### Standalone (voor testen)

Open `page.html` in een browser. Het werkt standalone zodra je de `WORKER_URL` hebt aangepast.

## Kosten

Cloudflare Workers gratis tier: 100.000 requests per dag. Ruim voldoende.

## Limieten

- Maximale paginagrootte: 5 MB
- Timeout: 10 seconden
- Alleen publiek toegankelijke HTTP(S) pagina's
- JavaScript-gerenderde content (SPA's) wordt niet meegenomen — de Worker haalt de initiële HTML op

# Report-auth Worker (Basic Auth voor afgeschermde rapporten)

Cloudflare Worker die een gedeeld wachtwoord (HTTP Basic Auth) zet op specifieke
rapportpaden op `www.properaccess.nl`. Beschermt alle bestanden onder het pad:
de HTML, de screenshots (`.webp`), `presentation.html` en `plan-van-aanpak.pdf`.

## Beschermde paden

Zie `routes` in `wrangler.jsonc`:

- `www.properaccess.nl/rapporten/202606_bijenkorf_ios/*`
- `www.properaccess.nl/rapporten/202606_debijenkorf.nl/*`

Een rapport beveiligen = een route toevoegen; beveiliging weghalen = de route verwijderen en opnieuw deployen.

## Eenmalige setup / deploy

Vereist Cloudflare-toegang. Twee opties:

**A. API-token (aanrader voor headless):**

```bash
cd cloudflare/report-auth
export CLOUDFLARE_API_TOKEN=<token>   # scopes: Account > Workers Scripts: Edit, Zone > Workers Routes: Edit (zone properaccess.nl)
npx wrangler deploy
npx wrangler secret put AUTH_PASS     # voer het gedeelde wachtwoord in
```

**B. Interactief inloggen:**

```bash
cd cloudflare/report-auth
npx wrangler login
npx wrangler deploy
npx wrangler secret put AUTH_PASS
```

## Wachtwoord wijzigen

```bash
npx wrangler secret put AUTH_PASS
```

Gebruikersnaam aanpassen: `AUTH_USER` in `wrangler.jsonc` (default `bijenkorf`), daarna opnieuw deployen.

## Let op

- De Worker faalt dicht: zonder ingesteld `AUTH_PASS`-secret geeft hij 503 (nooit per ongeluk open).
- Basic Auth is alleen veilig over HTTPS (properaccess.nl draait op HTTPS).
- De klant logt in met gebruikersnaam `bijenkorf` + het gedeelde wachtwoord; de browser onthoudt het binnen de sessie.

# Beveiligingsheaders via Cloudflare

GitHub Pages kan geen eigen HTTP-headers zetten. De site loopt via de Cloudflare-proxy, dus daar regelen we de beveiligingsheaders. Dit document beschrijft welke headers we willen, hoe je ze instelt, en welke afwegingen er spelen.

Instellen kan op twee plekken in het Cloudflare-dashboard:

- **Rules → Transform Rules → Modify Response Header** (per header een regel, of een regel met meerdere headers).
- Of via een **Response Header** in een bestaande regel.

## 1. Altijd toevoegen (laag risico)

Deze headers zijn veilig voor de hele site (`hostname eq "www.properaccess.nl"`):

| Header | Waarde | Waarom |
| --- | --- | --- |
| `X-Content-Type-Options` | `nosniff` | Voorkomt MIME-sniffing. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Lekt geen volledige URL's naar externe sites. |
| `X-Frame-Options` | `SAMEORIGIN` | Voorkomt clickjacking via iframes. |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Dwingt HTTPS af. Pas op: zet `includeSubDomains` alleen als álle subdomeinen HTTPS doen. |
| `Permissions-Policy` | `geolocation=(), camera=(), microphone=()` | Schakelt ongebruikte browser-API's uit. |

## 2. X-Robots-Tag voor /rapporten/ (afgesproken: rapporten uit zoekmachines)

De auditrapporten mogen niet in zoekmachines verschijnen. `robots.txt` heeft al `Disallow: /rapporten/`, maar dat haalt al-geïndexeerde pagina's niet weg en is alleen een crawl-verzoek. Voeg daarom een header toe:

- **Filter:** `starts_with(http.request.uri.path, "/rapporten/")`
- **Header:** `X-Robots-Tag` = `noindex, nofollow`

Let op de wisselwerking: als een rapport nú al in Google staat, moet Google de pagina kunnen crawlen om de `noindex` te zien. Voor díé gevallen: haal `/rapporten/` tijdelijk uit `robots.txt`, laat de `X-Robots-Tag noindex` zijn werk doen tot de pagina's verdwenen zijn, en zet de `Disallow` daarna terug. Voor orphan-rapporten die nog niet geïndexeerd zijn, volstaat de `Disallow` + header zoals nu.

## 3. Content-Security-Policy (gefaseerd invoeren)

Een CSP is de sterkste bescherming tegen XSS, maar kan analytics en GTM breken als je hem te strak zet. Voer hem daarom **eerst als `Content-Security-Policy-Report-Only`** in, kijk een paar dagen wat er in de console wordt geblokkeerd, en zet hem daarna pas hard (`Content-Security-Policy`).

Startpunt op basis van de origins die de site nu gebruikt (Google Fonts, GTM/Analytics, ahrefs, de eigen Cloudflare Workers):

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://analytics.ahrefs.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://pa-chat.juliatol.workers.dev https://pipedrive-forms.juliatol.workers.dev https://tool-auth.juliatol.workers.dev https://link-checker.juliatol.workers.dev https://alt-tekst-checker.juliatol.workers.dev https://heading-checker.juliatol.workers.dev https://tabel-checker.juliatol.workers.dev https://www.google-analytics.com;
frame-src 'self' https://www.googletagmanager.com;
base-uri 'self';
form-action 'self';
frame-ancestors 'self';
object-src 'none';
```

Kanttekeningen:

- `'unsafe-inline'` bij `script-src` is nodig zolang GTM en inline scripts gebruikt worden. Strikter (met nonces) kan later; vereist aanpassingen in de templates.
- Controleer na invoeren of de chat-widget, de tools (link-/alt-/heading-/tabel-checker), de formulieren en de quiz blijven werken; die praten allemaal met de `*.juliatol.workers.dev`-Workers via `connect-src`.
- Voegt Julia later een nieuwe Worker of externe dienst toe, dan moet die origin hier ook bij.

## Verificatie

Na het instellen controleren met:

```bash
curl -sI https://www.properaccess.nl/ | grep -i -E 'x-content-type|referrer|x-frame|strict-transport|permissions-policy|content-security'
curl -sI https://www.properaccess.nl/rapporten/ | grep -i x-robots-tag
```

Of via een online scanner zoals securityheaders.com.

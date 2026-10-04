#!/usr/bin/env python3
"""Controleert de redirect-lijst voor Cloudflare Bulk Redirects.

Gebruik:

    python3 scripts/controleer_redirect_lijst.py [pad-naar-csv]

Per regel in de CSV:

- Het doel moet 200 geven en zelf geen doorverwijzing zijn. Een doel dat een
  Hugo-aliaspagina is (meta-refresh) levert een keten op: 301 naar een pagina
  die de bezoeker nog een keer doorstuurt. Dat kost linkwaarde en is te
  vermijden door meteen naar de eindpagina te wijzen.
- De bron hoort 404 te geven zolang de lijst nog niet in Cloudflare staat, en
  301 daarna. Beide zijn goed; 200 is een fout, want dan bestaat de pagina nog
  en hoort hij niet in de lijst.

Zonder netwerk draait dit script niet. Afsluitcode 1 als er iets mis is.
"""
import csv
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

CSV = sys.argv[1] if len(sys.argv) > 1 else "docs/redirects/cloudflare-bulk-redirects.csv"
AGENT = "properaccess-redirectcontrole/1.0"


def haal(url):
    """Geeft (status, is_doorverwijspagina) zonder doorverwijzingen te volgen."""
    req = urllib.request.Request(url, headers={"User-Agent": AGENT})

    class Stil(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None

    opener = urllib.request.build_opener(Stil)
    try:
        with opener.open(req, timeout=30) as r:
            body = r.read(4096).decode("utf-8", "replace")
            return r.status, 'http-equiv=refresh' in body.replace('"', "").replace(" ", "")
    except urllib.error.HTTPError as e:
        return e.code, False
    except Exception as e:  # DNS, time-out
        print(f"  ophalen mislukt: {url}: {e}", file=sys.stderr)
        return 0, False


def main():
    with open(CSV, newline="") as f:
        rijen = [r for r in csv.DictReader(f)]
    if not rijen:
        print("lege lijst", file=sys.stderr)
        return 1

    urls = sorted({r["source"] for r in rijen} | {r["target"] for r in rijen})
    with ThreadPoolExecutor(max_workers=5) as pool:
        status = dict(zip(urls, pool.map(haal, urls)))

    fouten = []
    for r in rijen:
        bron, doel = r["source"], r["target"]
        if r["status"] != "301":
            fouten.append(f"{bron}: status {r['status']}, verwacht 301")
        dcode, dalias = status[doel]
        if dcode != 200:
            fouten.append(f"{doel}: doel geeft {dcode}, verwacht 200")
        elif dalias:
            fouten.append(f"{doel}: doel is zelf een doorverwijspagina, wijs naar de eindpagina")
        bcode = status[bron][0]
        if bcode not in (301, 404):
            fouten.append(f"{bron}: bron geeft {bcode}, verwacht 404 (nog niet gezet) of 301 (gezet)")

    gezet = sum(1 for r in rijen if status[r["source"]][0] == 301)
    print(f"{len(rijen)} regels, {len(urls)} URL's opgehaald, {gezet} bronnen geven al een 301")
    for f in fouten:
        print(f"FOUT {f}")
    return 1 if fouten else 0


if __name__ == "__main__":
    sys.exit(main())

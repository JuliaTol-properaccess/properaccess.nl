#!/usr/bin/env python3
"""Vergelijk de Hugo-aliassen uit content/ met de 301-lijst voor Cloudflare.

Een alias levert in Hugo een HTML-pagina met een meta-refresh en een canonical.
Die pagina geeft status 200. Zoekmachines en AI-crawlers kunnen hem dus als
eigen URL ophalen en citeren. Een echte 301 hoort in
docs/redirects/cloudflare-bulk-redirects.csv.

Gebruik:
    python3 scripts/aliassen_zonder_301.py            # alleen vergelijken
    python3 scripts/aliassen_zonder_301.py --live      # ook de status ophalen
"""
import csv
import pathlib
import re
import sys
import urllib.error
import urllib.request

WORTEL = pathlib.Path(__file__).resolve().parent.parent
BASIS = "https://www.properaccess.nl"
CSV_PAD = WORTEL / "docs/redirects/cloudflare-bulk-redirects.csv"


def frontmatter(tekst):
    if not tekst.startswith("---"):
        return None
    eind = tekst.find("\n---", 3)
    return tekst[3:eind] if eind != -1 else None


def aliassen(fm):
    """Lees alleen het aliases-blok, niet de lijsten die erna komen."""
    uit = []
    in_blok = False
    for regel in fm.splitlines():
        m = re.match(r"^aliases:\s*\[(.+)\]\s*$", regel)
        if m:
            uit += [a.strip().strip("\"'") for a in m.group(1).split(",")]
            continue
        if re.match(r"^aliases:\s*$", regel):
            in_blok = True
            continue
        if in_blok:
            item = re.match(r"^\s+-\s*(.+?)\s*$", regel)
            if item:
                uit.append(item.group(1).strip("\"'"))
                continue
            if not regel.strip():
                continue
            in_blok = False
    return uit


def doel_url(bestand, fm):
    """Leid de huidige URL af uit het bestandspad en een eventuele slug.

    Dit is een schatting: de secties in `config/_default` bepalen welke mapnamen
    Hugo in de URL zet. Met --live wordt het doel uit de meta-refresh van de
    aliaspagina gelezen, en dat is de echte waarde.
    """
    rel = bestand.relative_to(WORTEL / "content")
    taal = rel.parts[0]
    delen = list(rel.parts[1:])
    if delen and delen[-1] in ("_index.md", "index.md"):
        delen = delen[:-1]
    elif delen:
        delen[-1] = delen[-1][:-3]
    slug = re.search(r"^slug:\s*\"?([^\"\n]+?)\"?\s*$", fm, re.M)
    if slug and delen:
        delen[-1] = slug.group(1).strip()
    # Mappen die Hugo niet in de URL zet.
    delen = [d for d in delen if d not in ("pages", "succescriteria")]
    voor = "" if taal == "dutch" else "/en"
    pad = voor + "".join("/" + d for d in delen)
    return (pad + "/") if pad else "/"


def lees_aliassen():
    uit = {}
    for bestand in sorted((WORTEL / "content").rglob("*.md")):
        fm = frontmatter(bestand.read_text(encoding="utf-8"))
        if not fm:
            continue
        for alias in aliassen(fm):
            if not alias.startswith("/"):
                continue
            if not alias.endswith("/"):
                alias += "/"
            uit[BASIS + alias] = (BASIS + doel_url(bestand, fm), str(bestand.relative_to(WORTEL)))
    return uit


def lees_csv():
    """Geeft (bronnen zonder slashverschil, aantal regels in het bestand)."""
    uit = {}
    regels = 0
    with CSV_PAD.open(encoding="utf-8") as f:
        for rij in csv.DictReader(f):
            uit[rij["source"].rstrip("/") + "/"] = rij["target"]
            regels += 1
    return uit, regels


class GeenRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *_a, **_k):
        return None


def ophalen(url):
    """Haal een URL op zonder redirects te volgen. Geeft (status, Location, body)."""
    opener = urllib.request.build_opener(GeenRedirect)
    verzoek = urllib.request.Request(url, headers={"User-Agent": "properaccess-redirectcheck"})
    try:
        with opener.open(verzoek, timeout=20) as antwoord:
            return antwoord.status, antwoord.headers.get("Location", ""), antwoord.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as fout:
        return fout.code, fout.headers.get("Location", ""), ""
    except OSError as fout:
        return 0, str(fout), ""


def refresh_doel(body):
    """Lees het doel uit de meta-refresh van een Hugo-aliaspagina."""
    m = re.search(r"http-equiv=[\"']?refresh[\"']?[^>]*url=([^\"'>\s]+)", body, re.I)
    return m.group(1) if m else ""


def main():
    live = "--live" in sys.argv
    gevonden = lees_aliassen()
    in_csv, csv_regels = lees_csv()
    zonder = {a: d for a, d in gevonden.items() if a not in in_csv}

    print(f"aliassen in content/:      {len(gevonden)}")
    print(f"regels in de 301-lijst:    {csv_regels}")
    print(f"aliassen met een 301:      {len(gevonden) - len(zonder)}")
    print(f"aliassen zonder een 301:   {len(zonder)}")
    print()

    afwijkingen = 0
    niet_200 = 0
    for alias, (schatting, bestand) in sorted(zonder.items()):
        if not live:
            print(f"{alias},{schatting},301  # {bestand}, doel geschat")
            continue
        code, locatie, body = ophalen(alias)
        live_doel = refresh_doel(body)
        doel = (live_doel.rstrip("/") + "/") if live_doel else schatting
        opmerking = [f"alias nu {code}"]
        if locatie:
            opmerking.append(f"naar {locatie}")
        if not live_doel:
            opmerking.append("geen meta-refresh gevonden, doel geschat")
        elif doel != schatting:
            opmerking.append(f"doel uit meta-refresh, schatting week af ({schatting})")
            afwijkingen += 1
        doelcode = ophalen(doel)[0]
        opmerking.append(f"doel {doelcode}")
        if doelcode != 200:
            niet_200 += 1
        print(f"{alias},{doel},301  # {bestand}, {', '.join(opmerking)}")

    if live:
        print()
        print(f"schattingen die afweken van de meta-refresh: {afwijkingen}")
        print(f"doelen die geen 200 geven:                   {niet_200}")
    return 1 if zonder else 0


if __name__ == "__main__":
    sys.exit(main())

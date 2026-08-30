#!/usr/bin/env python3
"""Faal als een rapportpagina geen noindex heeft.

Rapporten mogen niet in de zoekmachines staan. Dat regelen we met
<meta name="robots" content="noindex, follow"> in de <head> van elke rapportpagina,
en niet met een Disallow in robots.txt: een geblokkeerde URL kan gewoon in de index
blijven staan, en dat gebeurde ook. Zie de toelichting in static/robots.txt.

De rapporten komen uit pa-audit en worden hier als statisch bestand ingecheckt. Die
generator zet de meta er meestal wel in, maar niet overal: op 30 augustus 2026 misten
22 van de 180 bestanden hem, waaronder alle presentation.html-pagina's. Deze controle
vangt dat af zodra er nieuwe rapporten bij komen.

Fragmenten zonder <head> kunnen geen meta dragen; die staan op Disallow in robots.txt
en worden hier overgeslagen.

Gebruik:
    python3 scripts/check_rapporten_noindex.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

RAP = Path(__file__).resolve().parent.parent / "static" / "rapporten"


def main() -> int:
    if not RAP.is_dir():
        print(f"map niet gevonden: {RAP}")
        return 1

    ontbreekt: list[Path] = []
    fragmenten = 0
    gecontroleerd = 0

    for f in sorted(RAP.rglob("*.html")):
        tekst = f.read_text(encoding="utf-8", errors="ignore")
        if not re.search(r"<head", tekst, re.I):
            fragmenten += 1
            continue
        gecontroleerd += 1
        kop = tekst[: tekst.lower().find("</head>")] if "</head>" in tekst.lower() else tekst
        if not re.search(r'<meta\s+name="robots"[^>]*noindex', kop, re.I):
            ontbreekt.append(f)

    if ontbreekt:
        print(f"{len(ontbreekt)} rapportpagina's zonder noindex in de <head>:")
        for f in ontbreekt:
            print(f"  {f.relative_to(RAP.parent.parent)}")
        print()
        print('Voeg toe: <meta name="robots" content="noindex, follow">')
        return 1

    print(
        f"OK: {gecontroleerd} rapportpagina's hebben een noindex, "
        f"{fragmenten} fragmenten zonder <head> overgeslagen."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())

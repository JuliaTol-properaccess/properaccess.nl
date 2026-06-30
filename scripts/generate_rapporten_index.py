#!/usr/bin/env python3
"""Genereer de kaartlijst in static/rapporten/index.html uit de rapportmappen.

Bron van waarheid zijn de mappen onder static/rapporten/<slug>/. Elk rapport met
een eigen index.html levert een kaart op. Titel en datum worden uit het rapport
zelf gehaald (<title> en het veld "Datum rapport" / "Report date").

Een paar rapporten zijn wachtwoord-beveiligd: hun index.html is een inlogpagina
zonder echte titel of datum. Voor die paar staat de tekst in OVERRIDES.

Niet-rapportmappen (report_template, pnh, en alles met een _ als voorvoegsel)
worden overgeslagen.

De kaarten worden gesorteerd op datum, nieuwste eerst. Alleen het blok tussen de
AUTO-GENERATED-markers wordt herschreven; de rest van de pagina (login, styling,
script) blijft ongemoeid.

Gebruik:
    python3 scripts/generate_rapporten_index.py          # herschrijf het overzicht
    python3 scripts/generate_rapporten_index.py --check   # faal als er iets zou wijzigen
"""
from __future__ import annotations

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAP = ROOT / "static" / "rapporten"
INDEX = RAP / "index.html"

START = "<!-- AUTO-GENERATED REPORT CARDS: START (scripts/generate_rapporten_index.py) -->"
END = "<!-- AUTO-GENERATED REPORT CARDS: END -->"

# Mappen die geen rapport zijn (naast alles met een _ voorvoegsel).
EXCLUDE = {"report_template", "pnh"}

# Wachtwoord-beveiligde rapporten tonen alleen een gate-pagina. Titel + datum
# hier handmatig bijhouden (zelfde tekst als op de kaart hoort te staan).
OVERRIDES: dict[str, tuple[str, str]] = {
    "202604_crisp_android": (
        "Audit digitale toegankelijkheid van de Crisp Android-app",
        "4 mei 2026",
    ),
    "202604_crisp_ios": (
        "Audit digitale toegankelijkheid van de Crisp iOS-app",
        "4 mei 2026",
    ),
    "202606_fly2houston.com": (
        "Accessibility evaluation of the website www.fly2houston.com, limited scope",
        "June 27, 2026",
    ),
}

NL_MONTHS = {
    "januari": 1, "februari": 2, "maart": 3, "april": 4, "mei": 5, "juni": 6,
    "juli": 7, "augustus": 8, "september": 9, "oktober": 10, "november": 11,
    "december": 12,
}
EN_MONTHS = {
    "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6,
    "july": 7, "august": 8, "september": 9, "october": 10, "november": 11,
    "december": 12,
}


def parse_date(s: str) -> tuple[int, int, int] | None:
    """Zet "30 juni 2026" of "June 27, 2026" om naar (jaar, maand, dag) voor sortering."""
    s = s.strip()
    m = re.match(r"(\d{1,2})\s+([A-Za-zé]+)\s+(\d{4})", s)
    if m and m.group(2).lower() in NL_MONTHS:
        return (int(m.group(3)), NL_MONTHS[m.group(2).lower()], int(m.group(1)))
    m = re.match(r"([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})", s)
    if m and m.group(1).lower() in EN_MONTHS:
        return (int(m.group(3)), EN_MONTHS[m.group(1).lower()], int(m.group(2)))
    return None


def extract(idx_path: Path) -> tuple[str, str]:
    """Haal titel en datum uit een rapport-index.html."""
    txt = idx_path.read_text(encoding="utf-8", errors="ignore")
    tm = re.search(r"<title>(.*?)</title>", txt, re.S)
    title = html.unescape(tm.group(1).strip()) if tm else ""
    # Een eventueel " — Proper Access" / " | Proper Access"-achtervoegsel weghalen.
    title = re.sub(r"\s*[|—-]\s*Proper Access\s*$", "", title)
    dm = re.search(r"(?:Datum rapport|Report date)\s*:?\s*</dt>\s*<dd>(.*?)</dd>", txt, re.S)
    date = html.unescape(dm.group(1).strip()) if dm else ""
    return title, date


def build_cards() -> tuple[str, list[str]]:
    cards = []
    skipped = []
    for d in sorted(RAP.iterdir()):
        if not d.is_dir() or d.name.startswith("_") or d.name in EXCLUDE:
            continue
        idx = d / "index.html"
        if not idx.exists():
            continue
        if d.name in OVERRIDES:
            title, date = OVERRIDES[d.name]
        else:
            title, date = extract(idx)
        if not title or not date:
            skipped.append(d.name)
            continue
        cards.append((parse_date(date) or (0, 0, 0), d.name, title, date))

    # Nieuwste eerst; rapporten met een onparseerbare datum zakken naar onderen.
    cards.sort(key=lambda c: c[0], reverse=True)

    rows = []
    for _, slug, title, date in cards:
        rows.append(
            '    <div class="report-card">\n'
            f'      <a href="/rapporten/{slug}/">{html.escape(title)}</a>\n'
            f'      <span class="report-date">{html.escape(date)}</span>\n'
            "    </div>"
        )
    block = "    " + START + "\n" + "\n".join(rows) + "\n    " + END
    return block, skipped


def main() -> int:
    check = "--check" in sys.argv[1:]
    block, skipped = build_cards()
    page = INDEX.read_text(encoding="utf-8")

    if START in page and END in page:
        pattern = re.compile(r"[ \t]*" + re.escape(START) + r".*?" + re.escape(END), re.S)
        new_page = pattern.sub(lambda _m: block, page)
    else:
        # Eerste keer: vervang alles tussen "<h2>Alle rapporten</h2>" en de
        # afsluitende </div> van #report-list.
        pattern = re.compile(
            r"(<h2>Alle rapporten</h2>\n).*?(\n  </div>\n\n  <script>)", re.S
        )
        if not pattern.search(page):
            print("FOUT: kon het kaart-blok niet vinden in index.html", file=sys.stderr)
            return 2
        new_page = pattern.sub(lambda m: m.group(1) + block + m.group(2), page)

    n_cards = new_page.count('<div class="report-card">')
    if check:
        if new_page != page:
            print(f"VEROUDERD: overzicht wijkt af ({n_cards} kaarten). Draai het script.", file=sys.stderr)
            return 1
        print(f"Actueel: {n_cards} kaarten.")
        return 0

    if new_page != page:
        INDEX.write_text(new_page, encoding="utf-8")
    msg = f"{n_cards} kaarten geschreven"
    if skipped:
        msg += f", {len(skipped)} overgeslagen (geen titel/datum): {', '.join(skipped)}"
    print(msg)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

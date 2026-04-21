#!/usr/bin/env python3
"""
Scrape toegankelijkheidsverklaringen voor gemeente Amersfoort en schrijf
data/amersfoort.yaml voor de Hugo-tijdlijnpagina.

Run: python3 tools/amersfoort-timeline/scrape.py
"""

from __future__ import annotations

import re
import sys
import time
from datetime import date, datetime, timedelta
from pathlib import Path
from urllib.parse import urlparse

import requests
import yaml
from bs4 import BeautifulSoup

BASE = "https://www.toegankelijkheidsverklaring.nl"
REGISTER_URL = f"{BASE}/register?w=amersfoort"
UA = "Mozilla/5.0 (contact: julia@properaccess.nl) ProperAccessTimelineBot/1.0"

REPO = Path(__file__).resolve().parents[2]
RAPPORTEN_DIR = REPO / "static" / "rapporten"
OUT_FILE = REPO / "data" / "amersfoort.yaml"

REPORT_PERIOD_YEARS = 3


def fetch(url: str) -> str:
    r = requests.get(url, headers={"User-Agent": UA}, timeout=30)
    r.raise_for_status()
    return r.text


def parse_date_nl(s: str) -> date | None:
    s = s.strip()
    try:
        return datetime.strptime(s, "%d-%m-%Y").date()
    except ValueError:
        return None


def plus_years(d: date, years: int) -> date:
    try:
        return d.replace(year=d.year + years)
    except ValueError:
        return d.replace(year=d.year + years, day=28)


def normalize_host(url: str) -> str:
    host = urlparse(url).hostname or ""
    return host.removeprefix("www.").lower()


def find_our_report(host: str) -> str | None:
    if not RAPPORTEN_DIR.is_dir():
        return None
    host_variants = {host, host.removeprefix("www.")}
    for folder in sorted(RAPPORTEN_DIR.iterdir()):
        if not folder.is_dir():
            continue
        name = folder.name
        m = re.match(r"(\d{6})_(.+)$", name)
        if not m:
            continue
        folder_host = m.group(2).split("_")[0].lower()
        if folder_host in host_variants:
            return f"/rapporten/{name}/"
    return None


def parse_register_rows(html: str):
    soup = BeautifulSoup(html, "html.parser")
    table = soup.find("table")
    if not table:
        return []
    rows = []
    for tr in table.find_all("tr")[1:]:
        cells = tr.find_all(["td", "th"])
        if len(cells) < 5:
            continue
        org = cells[0].get_text(strip=True)
        name_link = cells[1].find("a")
        naam = cells[1].get_text(strip=True)
        website_url = name_link.get("href") if name_link else ""
        status_full = cells[2].get_text(" ", strip=True)
        status_match = re.match(r"([ABD])", status_full)
        status = status_match.group(1) if status_match else "?"
        laatst_gew = parse_date_nl(cells[3].get_text(strip=True))
        decl_link = cells[4].find("a")
        decl_href = decl_link.get("href") if decl_link else ""
        if decl_href.startswith("/"):
            decl_href = BASE + decl_href
        rows.append(
            {
                "organisatie": org,
                "naam": naam,
                "url": website_url,
                "status": status,
                "status_label": status_full,
                "laatst_gewijzigd": laatst_gew,
                "verklaring_url": decl_href,
            }
        )
    return rows


def parse_detail_page(html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text("\n", strip=True)

    rapportdatum = None
    m = re.search(
        r"Kenmerken die in de rapportage zijn vastgelegd\s*:?\s*\n?\s*Datum\s*:?\s*\n?\s*(\d{2}-\d{2}-\d{4})",
        text,
        re.I,
    )
    if m:
        rapportdatum = parse_date_nl(m.group(1))

    auditor = None
    for label in ("Auditor", "Evaluator", "Onderzoeker", "Rapportopsteller"):
        m = re.search(rf"{label}\s*:?\s*\n?\s*([^\n]{{2,80}})", text)
        if m:
            auditor = m.group(1).strip()
            break

    return {"rapportdatum": rapportdatum, "auditor": auditor}


def to_yaml_date(d):
    return d if isinstance(d, date) else None


def main():
    print(f"Fetching register page: {REGISTER_URL}")
    register_html = fetch(REGISTER_URL)
    rows = parse_register_rows(register_html)
    print(f"  Found {len(rows)} verklaringen")

    out = []
    for i, row in enumerate(rows, 1):
        print(f"  [{i}/{len(rows)}] {row['naam']}  ({row['verklaring_url']})")
        try:
            detail_html = fetch(row["verklaring_url"])
            detail = parse_detail_page(detail_html)
        except Exception as e:
            print(f"    ! fout: {e}", file=sys.stderr)
            detail = {"rapportdatum": None, "auditor": None}
        time.sleep(0.6)

        rapportdatum = detail["rapportdatum"] or row["laatst_gewijzigd"]
        datum_bron = (
            "rapportdatum" if detail["rapportdatum"] else "laatst_gewijzigd_fallback"
        )
        verloopt_op = plus_years(rapportdatum, REPORT_PERIOD_YEARS) if rapportdatum else None

        host = normalize_host(row["url"])
        ons_rapport = find_our_report(host)

        out.append(
            {
                "organisatie": row["organisatie"],
                "naam": row["naam"],
                "url": row["url"],
                "host": host,
                "status": row["status"],
                "status_label": row["status_label"],
                "rapportdatum": to_yaml_date(rapportdatum),
                "datum_bron": datum_bron,
                "laatst_gewijzigd": to_yaml_date(row["laatst_gewijzigd"]),
                "verloopt_op": to_yaml_date(verloopt_op),
                "verklaring_url": row["verklaring_url"],
                "ons_rapport": ons_rapport,
                "auditor": detail["auditor"],
            }
        )

    out.sort(key=lambda x: (x["verloopt_op"] or date(9999, 1, 1), x["naam"]))

    payload = {
        "laatst_bijgewerkt": date.today(),
        "bron": REGISTER_URL,
        "geldigheidsduur_jaren": REPORT_PERIOD_YEARS,
        "websites": out,
    }

    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with OUT_FILE.open("w") as f:
        yaml.safe_dump(payload, f, allow_unicode=True, sort_keys=False)
    print(f"\nGeschreven: {OUT_FILE} ({len(out)} websites)")
    matched = sum(1 for x in out if x["ons_rapport"])
    print(f"  Gematcht met eigen rapport: {matched}")


if __name__ == "__main__":
    main()

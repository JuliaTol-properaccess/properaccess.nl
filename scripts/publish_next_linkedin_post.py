#!/usr/bin/env python3
"""Publiceer de eerstvolgende post uit de WCAG LinkedIn-serie.

Selecteert de OUDSTE nog-niet-gepubliceerde serie-post waarvan de geplande
datum vandaag of eerder is, en haalt daar `draft: true` weg. Eén post per run.

Robuust bij gemiste dagen: er wordt altijd hooguit één post tegelijk
vrijgegeven (de oudste), dus een overgeslagen dag loopt vanzelf in, zonder ooit
de hele achterstand in één keer te dumpen.

Output (stdout):
  PUBLISHED <slug>    als er een post is vrijgegeven
  NOTHING             als er vandaag niets te publiceren valt

Bedoeld om te draaien vanuit de repo-root in de daily GitHub Actions-run.
"""
import datetime
import glob
import os
import re
import sys

DRAFTS_DIR = "content/dutch/blog/drafts"
SERIES_MARKER = "linkedin-series"


def field(head: str, key: str) -> str:
    m = re.search(rf'^{key}:\s*"?(.*?)"?\s*$', head, re.M)
    return m.group(1) if m else ""


def main() -> int:
    today = datetime.date.today()
    candidates = []
    for path in glob.glob(f"{DRAFTS_DIR}/*.md"):
        text = open(path, encoding="utf-8").read()
        parts = text.split("---", 2)
        if len(parts) < 3:
            continue
        head = parts[1]
        if not re.search(r"^draft:\s*true", head, re.M):
            continue
        if SERIES_MARKER not in field(head, "image"):
            continue
        datestr = field(head, "date")
        try:
            d = datetime.date.fromisoformat(datestr[:10])
        except ValueError:
            continue
        if d <= today:
            candidates.append((d, path, field(head, "slug")))

    if not candidates:
        print("NOTHING")
        return 0

    candidates.sort(key=lambda c: (c[0], c[1]))
    _, path, slug = candidates[0]

    text = open(path, encoding="utf-8").read()
    # Verwijder de exacte `draft: true`-regel (incl. afsluitende newline).
    new_text, n = re.subn(r"^draft:\s*true[ \t]*\r?\n", "", text, count=1, flags=re.M)
    if n == 0:
        print("NOTHING")
        return 0
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_text)

    print(f"PUBLISHED {slug}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

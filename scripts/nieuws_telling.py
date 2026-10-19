#!/usr/bin/env python3
"""Tel de weekpagina's van de rubriek Nieuws over toegankelijkheid na.

Twee ondergrenzen, uit data/nieuws.yaml:

- minimaal 3 berichten per week;
- minimaal 40 eigen woorden in de tekst van één bericht.

Deze controle hoort op een pull request te draaien en niet in de run die deployt. Wat de
twee grenzen doen, verschilt met opzet:

- **Het aantal berichten maakt deze controle nooit rood.** Haalt een weekpagina de drie
  niet, dan zet de build de pagina op noindex en meldt deze controle het. Of er in een
  stille week een pagina uitgaat, is een redactiekeuze en die ligt bij Julia. Besluit
  van Chief, 11 oktober 2026.
- **Een bericht onder de woordgrens maakt deze controle wel rood.** Dat is tekst die
  voor de merge bij te schrijven is. De pagina krijgt daarnaast een noindex, zodat een
  dunne pagina ook zonder deze controle niet in de zoekmachines komt.

De getallen komen uit de Hugo-build zelf en niet uit een tweede teller in dit script:
layouts/partials/nieuws-telling.html rekent ze uit en layouts/nieuws/single.html zet ze
als regel `NIEUWSTELLING {...}` in het buildlog zodra de build draait met
HUGO_PARAMS_NIEUWSTELLING=true. Zo kan de melding op de pull request niet afwijken van
de noindex op de pagina.

De build draait met --buildFuture en zonder --buildDrafts: een weekpagina met de datum
van de komende zaterdag telt dus mee, en content/dutch/nieuws/voorbeeld-week.md niet.

Gebruik:
    python3 scripts/nieuws_telling.py                     # bouwt en telt
    python3 scripts/nieuws_telling.py --log buildlog.txt  # telt een bestaand log na
    python3 scripts/nieuws_telling.py --samenvatting $GITHUB_STEP_SUMMARY

Exitcodes:
    0  geen bericht onder de woordgrens. Een melding over het aantal berichten of over
       een niet te tellen pagina staat in de uitvoer, maar houdt de code op 0.
    1  minstens één bericht onder de woordgrens, de build viel om, of er is geen enkele
       weekpagina gemeten terwijl er wel een in content/ staat.

Het hugo-binary komt van PATH, of uit de omgevingsvariabele HUGO.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
NIEUWSMAPPEN = (REPO / "content" / "dutch" / "nieuws", REPO / "content" / "english" / "nieuws")
REGEL = re.compile(r"NIEUWSTELLING\s+(\{.*\})\s*$")
DRAFT = re.compile(r"^draft:\s*true\s*$", re.M)


def bouw(hugo: str, uit: Path) -> tuple[int, str]:
    """Bouwt de site met de telling aan, en geeft de exitcode en het log terug."""
    stappen = [
        ["node", str(REPO / "scripts" / "themeGenerator.js")],
        [hugo, "--gc", "--forceSyncStatic", "--buildFuture", "-d", str(uit)],
    ]
    omgeving = dict(os.environ, HUGO_ENV="production", HUGO_PARAMS_NIEUWSTELLING="true")
    log = ""
    for stap in stappen:
        print(f"$ {' '.join(stap)}", flush=True)
        uitvoer = subprocess.run(
            stap, cwd=REPO, env=omgeving, text=True,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        )
        log += uitvoer.stdout
        print(uitvoer.stdout, flush=True)
        if uitvoer.returncode != 0:
            return uitvoer.returncode, log
    return 0, log


def weekpaginas_in_content() -> list[str]:
    """De weekpagina's die in content/ staan en geen draft zijn."""
    gevonden = []
    for map_ in NIEUWSMAPPEN:
        if not map_.is_dir():
            continue
        for bestand in sorted(map_.glob("*.md")):
            if bestand.name == "_index.md":
                continue
            if DRAFT.search(bestand.read_text(encoding="utf-8", errors="ignore")):
                continue
            gevonden.append(str(bestand.relative_to(REPO)))
    return gevonden


def lees_telling(log: str) -> list[dict]:
    """Haalt de NIEUWSTELLING-regels uit een buildlog, een per weekpagina."""
    paginas: dict[str, dict] = {}
    for regel in log.splitlines():
        gevonden = REGEL.search(regel)
        if not gevonden:
            continue
        try:
            telling = json.loads(gevonden.group(1))
        except json.JSONDecodeError as fout:
            print(f"regel niet te lezen ({fout}): {regel}", file=sys.stderr)
            continue
        paginas[telling.get("url") or telling.get("bestand", "")] = telling
    return [paginas[sleutel] for sleutel in sorted(paginas)]


def rapport(paginas: list[dict]) -> tuple[list[str], int, int]:
    """Bouwt het leesbare rapport, en telt de pagina's met een noindex en met een tekort."""
    regels: list[str] = []
    met_noindex = 0
    met_tekort = 0

    for p in paginas:
        min_berichten = p.get("minimum_berichten", 3)
        min_woorden = p.get("minimum_woorden", 40)
        woorden = p.get("woorden") or []
        tekort = p.get("tekort") or []
        regels.append("")
        regels.append(f"{p.get('bestand') or p.get('url')}  ({p.get('url')})")
        regels.append(f"  berichten: {p.get('berichten')} (ondergrens {min_berichten})")
        if woorden:
            per_bericht = ", ".join(f"{i + 1}: {n}" for i, n in enumerate(woorden))
            regels.append(f"  eigen woorden per bericht (ondergrens {min_woorden}): {per_bericht}")
        regels.append(f"  lead {p.get('lead')} woorden, tldr {p.get('tldr')} woorden")

        if p.get("berichten", 0) < min_berichten:
            regels.append(
                f"  MELDING: {p.get('berichten')} berichten, de ondergrens is "
                f"{min_berichten}. De pagina krijgt een noindex en blijft op /nieuws/ "
                f"staan. Of de pagina uitgaat, beslist Julia; deze controle valt er niet op."
            )
        if not p.get("meetbaar", True):
            regels.append(
                "  MELDING: geen enkel bericht heeft tekst in items[].tekst, terwijl de "
                "pagina wel een lead heeft. De woorden zijn hier niet te tellen, dus "
                "nul eigen woorden, en de pagina krijgt een noindex. Staat de duiding "
                "inmiddels in de body van de pagina, pas dan "
                "layouts/partials/nieuws-telling.html aan; deze controle valt er niet op."
            )
        elif tekort:
            met_tekort += 1
            for t in tekort:
                regels.append(
                    f"  FOUT: bericht {t['nummer']} heeft {t['woorden']} eigen woorden, "
                    f"de ondergrens is {min_woorden}. Kop: {t['kop']!r}. Schrijf "
                    f"{min_woorden - t['woorden']} woorden bij in items[].tekst."
                )
        if p.get("noindex"):
            met_noindex += 1

    return regels, met_noindex, met_tekort


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--log", help="een bestaand buildlog natellen in plaats van zelf bouwen")
    parser.add_argument("--uit", default=str(REPO / "public-controle"), help="map voor de build")
    parser.add_argument("--samenvatting", help="bestand waarin het rapport als Markdown komt")
    parser.add_argument("--json", action="store_true", help="de gemeten tellingen als JSON")
    argumenten = parser.parse_args()

    if argumenten.log:
        log = Path(argumenten.log).read_text(encoding="utf-8", errors="ignore")
    else:
        hugo = os.environ.get("HUGO", "hugo")
        code, log = bouw(hugo, Path(argumenten.uit))
        if code != 0:
            print(f"De build viel om (exitcode {code}). De telling zegt hier niets over.")
            return 1

    paginas = lees_telling(log)
    if argumenten.json:
        print(json.dumps(paginas, ensure_ascii=False, indent=2))

    in_content = weekpaginas_in_content()
    if not paginas:
        if in_content:
            print("Geen enkele weekpagina gemeten, terwijl er wel weekpagina's in content/ staan:")
            for bestand in in_content:
                print(f"  {bestand}")
            print()
            print(
                "Draait de build met HUGO_PARAMS_NIEUWSTELLING=true en --buildFuture? "
                "Zonder die twee meet de controle niets en zegt een groene uitkomst niets."
            )
            print()
            print(
                "Staat er een eigen type in de front matter, zoals type: weekoverzicht? "
                "Dan rendert Hugo de pagina niet met layouts/nieuws/single.html maar met "
                "het sjabloon van het thema, en komen de berichten, de periode en deze "
                "telling niet op de pagina. Laat het veld weg: de sectie nieuws kiest het "
                "sjabloon zelf."
            )
            return 1
        print("Geen weekpagina's in de rubriek Nieuws over toegankelijkheid. Niets te tellen.")
        return 0

    regels, met_noindex, met_tekort = rapport(paginas)
    kop = [
        "Telling van de rubriek Nieuws over toegankelijkheid",
        f"{len(paginas)} weekpagina's gemeten, {met_noindex} met een noindex, "
        f"{met_tekort} met een bericht onder de woordgrens.",
    ]
    slot = [""]
    if met_tekort:
        slot.append(
            "Uitkomst: rood. Een bericht onder de woordgrens is tekst die voor de merge "
            "bij te schrijven is."
        )
    else:
        slot.append("Uitkomst: groen. Geen bericht onder de woordgrens.")
    if met_noindex:
        paginas_tekst = "1 pagina krijgt" if met_noindex == 1 else f"{met_noindex} pagina's krijgen"
        slot.append(
            f"{paginas_tekst} een noindex. Een noindex maakt deze controle op zichzelf "
            "niet rood: te weinig berichten is een redactiekeuze en die ligt bij Julia, "
            "en een pagina waarvan de eigen woorden hier niet te tellen zijn is een "
            "melding."
        )

    uitvoer = kop + regels + slot
    print("\n".join(uitvoer))

    if argumenten.samenvatting:
        with open(argumenten.samenvatting, "a", encoding="utf-8") as bestand:
            bestand.write("## Telling van de weekpagina's\n\n```\n")
            bestand.write("\n".join(uitvoer).strip() + "\n")
            bestand.write("```\n")

    return 1 if met_tekort else 0


if __name__ == "__main__":
    sys.exit(main())

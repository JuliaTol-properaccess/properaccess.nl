#!/usr/bin/env python3
"""Maakt het vaste beeld voor de rubriek Nieuws over toegankelijkheid.

Het beeld is opmaak, geen generatie: beeld.html wordt op 1856 bij 2304 pixels
afgedrukt door een headless Chromium. De foto is assets/images/julia.webp,
de letters zijn de woff2-bestanden uit static/fonts/ en de kleuren staan in
beeld.html. Dezelfde invoer geeft hetzelfde beeld.

Draaien vanuit de wortel van de repo:

    python3 tools/rubriekbeeld/maak.py

Schrijft static/images/social/nieuws-over-toegankelijkheid.png. Met --uit kan
een ander pad mee, met --controleer wordt er niets geschreven maar alleen
gemeld of het bestaande bestand nog gelijk is aan een verse opmaak.

Nodig:
  - dwebp (pakket webp), om julia.webp naar PNG te zetten
  - een headless Chromium. Het script zoekt chrome-headless-shell, chromium
    en google-chrome; met --chrome of CHROME_PAD kan een pad mee.
"""

import argparse
import hashlib
import shutil
import struct
import subprocess
import sys
import tempfile
from pathlib import Path

WORTEL = Path(__file__).resolve().parent.parent.parent
BRON = Path(__file__).resolve().parent

FOTO = WORTEL / "assets" / "images" / "julia.webp"
LETTERS = [
    WORTEL / "static" / "fonts" / "plus-jakarta-sans-latin.woff2",
    WORTEL / "static" / "fonts" / "nunito-sans-latin.woff2",
]
UIT = WORTEL / "static" / "images" / "social" / "nieuws-over-toegankelijkheid.png"

BREEDTE = 1856
HOOGTE = 2304


def zoek_chrome(opgegeven):
    """Geeft het pad naar een headless Chromium, of stopt met een uitleg."""
    if opgegeven:
        if not Path(opgegeven).exists():
            sys.exit(f"Chrome niet gevonden op {opgegeven}")
        return opgegeven

    for naam in ("chrome-headless-shell", "chromium", "chromium-browser", "google-chrome"):
        gevonden = shutil.which(naam)
        if gevonden:
            return gevonden

    # Playwright zet zijn browsers buiten PATH neer.
    cache = Path.home() / ".cache" / "ms-playwright"
    if cache.is_dir():
        for pad in sorted(cache.glob("chromium*/chrome-linux*/chrome")) + sorted(
            cache.glob("chromium*/chrome-headless-shell-linux*/chrome-headless-shell")
        ):
            if pad.exists():
                return str(pad)

    sys.exit(
        "Geen headless Chromium gevonden. Geef er een mee met --chrome, "
        "of zet CHROME_PAD in de omgeving."
    )


def png_maat(pad):
    """Leest breedte en hoogte uit de IHDR van een PNG."""
    kop = pad.read_bytes()[:24]
    if kop[:8] != b"\x89PNG\r\n\x1a\n":
        sys.exit(f"{pad} is geen PNG")
    return struct.unpack(">II", kop[16:24])


def maak(chrome, doel):
    """Drukt beeld.html af en geeft het pad naar de verse PNG."""
    for nodig in [FOTO, BRON / "beeld.html", *LETTERS]:
        if not nodig.exists():
            sys.exit(f"Ontbreekt: {nodig}")

    if not shutil.which("dwebp"):
        sys.exit("dwebp niet gevonden. Installeer het pakket webp.")

    werkmap = Path(tempfile.mkdtemp(prefix="rubriekbeeld-"))
    try:
        (werkmap / "fonts").mkdir()
        for letter in LETTERS:
            shutil.copy(letter, werkmap / "fonts" / letter.name)
        shutil.copy(BRON / "beeld.html", werkmap / "beeld.html")

        subprocess.run(
            ["dwebp", str(FOTO), "-o", str(werkmap / "julia.png")],
            check=True,
            capture_output=True,
        )

        vers = werkmap / "beeld.png"
        subprocess.run(
            [
                chrome,
                "--headless",
                "--no-sandbox",
                "--disable-gpu",
                "--hide-scrollbars",
                "--force-device-scale-factor=1",
                f"--window-size={BREEDTE},{HOOGTE}",
                "--virtual-time-budget=20000",
                f"--screenshot={vers}",
                (werkmap / "beeld.html").as_uri(),
            ],
            check=True,
            capture_output=True,
        )

        if not vers.exists():
            sys.exit("Chromium heeft geen schermafdruk geschreven.")

        breedte, hoogte = png_maat(vers)
        if (breedte, hoogte) != (BREEDTE, HOOGTE):
            sys.exit(f"Verkeerde maat: {breedte} bij {hoogte}, verwacht {BREEDTE} bij {HOOGTE}")

        doel.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(vers, doel)
        return doel
    finally:
        shutil.rmtree(werkmap, ignore_errors=True)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--uit", default=str(UIT), help="waar de PNG heen gaat")
    p.add_argument("--chrome", default=None, help="pad naar chrome-headless-shell")
    p.add_argument(
        "--controleer",
        action="store_true",
        help="schrijf niets, maar meld of het bestaande bestand nog klopt",
    )
    a = p.parse_args()

    chrome = zoek_chrome(a.chrome)
    doel = Path(a.uit)

    if a.controleer:
        if not doel.exists():
            print(f"{doel} bestaat niet")
            return 1
        oud = hashlib.sha256(doel.read_bytes()).hexdigest()
        tijdelijk = Path(tempfile.mkdtemp(prefix="rubriekbeeld-controle-")) / "beeld.png"
        try:
            maak(chrome, tijdelijk)
            nieuw = hashlib.sha256(tijdelijk.read_bytes()).hexdigest()
        finally:
            shutil.rmtree(tijdelijk.parent, ignore_errors=True)
        if oud == nieuw:
            print(f"gelijk, sha256 {oud}")
            return 0
        print(f"verschilt\n  bestand {oud}\n  vers    {nieuw}")
        return 1

    geschreven = maak(chrome, doel)
    breedte, hoogte = png_maat(geschreven)
    som = hashlib.sha256(geschreven.read_bytes()).hexdigest()
    print(f"{geschreven}")
    print(f"{breedte} bij {hoogte} pixels, {geschreven.stat().st_size} bytes")
    print(f"sha256 {som}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""
optimize_report_images.py - converteer rapport-afbeeldingen naar geoptimaliseerde WebP.

Doel: de jpg/png-afbeeldingen in static/rapporten/<slug>/images/ omzetten naar
WebP (fors kleiner bij gelijke kwaliteit) en de verwijzingen in de rapport-HTML
meteen bijwerken. Zo blijft de gepubliceerde site ruim onder de GitHub Pages
1 GB-limiet. Reeds bestaande .webp-bestanden worden met rust gelaten.

Gebruik:
    # een net gepubliceerd rapport (slug of pad)
    python3 scripts/optimize_report_images.py 202508_igc
    python3 scripts/optimize_report_images.py static/rapporten/202508_igc

    # alle rapporten in een keer (om bestaande footprint terug te brengen)
    python3 scripts/optimize_report_images.py --all

    # eerst kijken zonder iets te wijzigen
    python3 scripts/optimize_report_images.py --all --dry-run

Opties:
    --quality N      WebP-kwaliteit 0-100 (default 80)
    --max-width N    Schaal breder beeld terug naar N px (default 2000; 0 = nooit schalen)
    --keep-original  Verwijder de bron-jpg/png niet na conversie
    --dry-run        Toon alleen wat er zou gebeuren

Bedoeld om per nieuw rapport te draaien voordat je het commit naar
static/rapporten/. Vereist: cwebp (brew install webp) en Pillow.
"""

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
REPORTS_DIR = REPO_ROOT / "static" / "rapporten"
SOURCE_EXTS = {".jpg", ".jpeg", ".png"}


def human(n: int) -> str:
    for unit in ("B", "KB", "MB", "GB"):
        if abs(n) < 1024 or unit == "GB":
            return f"{n:.0f} {unit}" if unit == "B" else f"{n/1:.1f} {unit}".replace(".0 ", " ")
        n /= 1024
    return f"{n} B"


def mb(n: int) -> str:
    return f"{n/1024/1024:.1f} MB"


def check_tools() -> None:
    if shutil.which("cwebp") is None:
        sys.exit("Fout: cwebp niet gevonden. Installeer met: brew install webp")
    try:
        import PIL  # noqa: F401
    except ImportError:
        sys.exit("Fout: Pillow niet gevonden. Installeer met: pip install Pillow")


def image_width(path: Path) -> int:
    from PIL import Image
    try:
        with Image.open(path) as im:
            return im.width
    except Exception:
        return 0


def is_report_dir(p: Path) -> bool:
    """Een echt rapport: heeft images/ en index.html. Sla gedeelde mappen
    (_assets, _shared-content) en het report_template-sjabloon over, want hun
    beelden worden vanuit andere rapporten gerefereerd via cross-map-paden die
    de per-rapport html-rewrite niet bijwerkt."""
    return (
        p.is_dir()
        and not p.name.startswith("_")
        and p.name != "report_template"
        and (p / "images").is_dir()
        and (p / "index.html").exists()
    )


def resolve_reports(args) -> list[Path]:
    if args.all:
        return sorted(p for p in REPORTS_DIR.iterdir() if is_report_dir(p))
    out = []
    for target in args.targets:
        p = Path(target)
        if not p.is_absolute():
            cand = REPORTS_DIR / target
            p = cand if cand.exists() else (REPO_ROOT / target)
        if not p.exists():
            print(f"  overslaan: {target} bestaat niet")
            continue
        out.append(p)
    return out


def rewrite_html(report_dir: Path, renames: dict[str, str], dry_run: bool) -> int:
    """Vervang images/<oud> door images/<nieuw> in alle html van het rapport."""
    changed = 0
    for html in report_dir.rglob("*.html"):
        text = html.read_text(encoding="utf-8", errors="ignore")
        new = text
        for old_name, new_name in renames.items():
            new = new.replace(f"images/{old_name}", f"images/{new_name}")
        if new != text:
            changed += 1
            if not dry_run:
                html.write_text(new, encoding="utf-8")
    return changed


def optimize_report(report_dir: Path, args) -> tuple[int, int, int]:
    imgdir = report_dir / "images"
    sources = sorted(
        p for p in imgdir.iterdir()
        if p.suffix.lower() in SOURCE_EXTS and p.is_file()
    )
    if not sources:
        return (0, 0, 0)

    renames: dict[str, str] = {}
    saved = 0
    converted = 0
    skipped = 0

    for src in sources:
        target = src.with_suffix(".webp")
        if target.exists():
            # Botsing: er is al een .webp met deze naam. Niet overschrijven.
            print(f"    botsing, overslaan: {src.name} (er is al {target.name})")
            skipped += 1
            continue

        orig_size = src.stat().st_size
        cmd = ["cwebp", "-quiet", "-q", str(args.quality)]
        if args.max_width > 0 and image_width(src) > args.max_width:
            cmd += ["-resize", str(args.max_width), "0"]
        tmp = src.with_suffix(".webp.tmp")
        cmd += [str(src), "-o", str(tmp)]

        if args.dry_run:
            # Schat alleen: laat de conversie achterwege.
            print(f"    zou converteren: {src.name} ({mb(orig_size)})")
            converted += 1
            continue

        try:
            subprocess.run(cmd, check=True, capture_output=True)
        except subprocess.CalledProcessError as e:
            print(f"    cwebp-fout bij {src.name}: {e.stderr.decode()[:120]}")
            tmp.unlink(missing_ok=True)
            skipped += 1
            continue

        new_size = tmp.stat().st_size
        if new_size >= orig_size:
            # Geen winst (zeldzaam bij jpg/png). Houd het origineel.
            tmp.unlink(missing_ok=True)
            skipped += 1
            continue

        tmp.rename(target)
        saved += orig_size - new_size
        renames[src.name] = target.name
        if not args.keep_original:
            src.unlink()
        converted += 1

    if renames:
        n = rewrite_html(report_dir, renames, args.dry_run)
        print(f"    {report_dir.name}: {converted} omgezet, {mb(saved)} bespaard, "
              f"{n} html-bestand(en) bijgewerkt"
              + (f", {skipped} overgeslagen" if skipped else ""))
    elif converted or skipped:
        print(f"    {report_dir.name}: {converted} (dry-run) / {skipped} overgeslagen")

    return (converted, saved, skipped)


def main() -> None:
    ap = argparse.ArgumentParser(description="Optimaliseer rapport-afbeeldingen naar WebP.")
    ap.add_argument("targets", nargs="*", help="slug(s) of pad(en) van rapport(en)")
    ap.add_argument("--all", action="store_true", help="alle rapporten in static/rapporten/")
    ap.add_argument("--quality", type=int, default=80, help="WebP-kwaliteit (default 80)")
    ap.add_argument("--max-width", type=int, default=2000,
                    help="schaal breder beeld terug (default 2000; 0 = nooit)")
    ap.add_argument("--keep-original", action="store_true", help="bron-jpg/png niet verwijderen")
    ap.add_argument("--dry-run", action="store_true", help="toon alleen, wijzig niets")
    args = ap.parse_args()

    if not args.all and not args.targets:
        ap.error("geef een rapport-slug/pad op, of gebruik --all")

    check_tools()
    reports = resolve_reports(args)
    if not reports:
        sys.exit("Geen rapporten gevonden.")

    print(f"{'[DRY-RUN] ' if args.dry_run else ''}{len(reports)} rapport(en), "
          f"kwaliteit {args.quality}, max-breedte {args.max_width or 'geen'}")
    total_conv = total_saved = total_skip = 0
    for report in reports:
        c, s, k = optimize_report(report, args)
        total_conv += c
        total_saved += s
        total_skip += k

    print("-" * 50)
    print(f"Totaal: {total_conv} afbeeldingen omgezet, "
          f"{mb(total_saved)} bespaard"
          + (f", {total_skip} overgeslagen" if total_skip else ""))
    if args.dry_run:
        print("Dry-run: er is niets gewijzigd. Laat --dry-run weg om door te voeren.")


if __name__ == "__main__":
    main()

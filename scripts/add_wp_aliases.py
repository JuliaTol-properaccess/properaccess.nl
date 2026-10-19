"""Add legacy WordPress URL aliases to succescriteria posts.

Old WP URL:  /sc-1-2-5-wat-betekent-audiodescriptie/
New URL:     /blog/sc-1-2-5-wat-betekent-audiodescriptie/

Files with a date prefix (2026-...) are post-migration and skipped.
"""
import argparse
from pathlib import Path
import re
import sys

DIR = Path("content/dutch/blog/succescriteria")


def process_file(path: Path, check: bool = False) -> str:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return "skipped: no front matter"

    end = text.find("\n---\n", 4)
    if end == -1:
        return "skipped: no closing front matter"

    front_matter = text[4:end]
    body = text[end + 5:]

    if re.search(r"^aliases:", front_matter, re.MULTILINE):
        return "skipped: aliases already present"

    alias = f"/{path.stem}/"
    new_front_matter = front_matter.rstrip() + f"\naliases:\n  - {alias}\n"
    if check:
        return f"would add: {alias}"
    path.write_text(f"---\n{new_front_matter}---\n{body}", encoding="utf-8")
    return f"added: {alias}"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Voeg legacy WordPress-aliases toe aan succescriteria-artikelen."
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="rapporteer wat zou veranderen en wijzig geen bestanden",
    )
    args = parser.parse_args()
    check = args.check
    if not DIR.exists():
        print(f"Directory not found: {DIR}")
        return 1

    files = sorted(p for p in DIR.glob("sc-*.md"))
    if not files:
        print("No legacy sc-*.md files found")
        return 1

    would_change = 0
    for path in files:
        result = process_file(path, check=check)
        if result.startswith("would add:"):
            would_change += 1
        print(f"{path.name}: {result}")

    print(f"\n{'Would process' if check else 'Processed'} {len(files)} files")
    if check and would_change:
        print(f"Check: {would_change} files would change.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

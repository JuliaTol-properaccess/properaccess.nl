"""Add legacy WordPress URL aliases to succescriteria posts.

Old WP URL:  /sc-1-2-5-wat-betekent-audiodescriptie/
New URL:     /blog/sc-1-2-5-wat-betekent-audiodescriptie/

Files with a date prefix (2026-...) are post-migration and skipped.
"""
from pathlib import Path
import re
import sys

DIR = Path("content/dutch/blog/succescriteria")


def process_file(path: Path) -> str:
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
    path.write_text(f"---\n{new_front_matter}---\n{body}", encoding="utf-8")
    return f"added: {alias}"


def main() -> int:
    if not DIR.exists():
        print(f"Directory not found: {DIR}", file=sys.stderr)
        return 1

    files = sorted(p for p in DIR.glob("sc-*.md"))
    if not files:
        print("No legacy sc-*.md files found", file=sys.stderr)
        return 1

    for path in files:
        result = process_file(path)
        print(f"{path.name}: {result}")

    print(f"\nProcessed {len(files)} files")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""
Social Media Post Generator Tool — Proper Access

Generates LinkedIn and Instagram caption text from an existing article,
using the Anthropic API (Claude) and Proper Access brand voice.

Usage:
    python tools/create_social_posts.py --article ".tmp/articles/2026-02-17_nl_..."
    python tools/create_social_posts.py --article ".tmp/articles/2026-02-17_nl_..." --angle "hot-take"
    python tools/create_social_posts.py --article ".tmp/articles/2026-02-17_nl_..." --angle "tip" --context "Focus op het code-voorbeeld"

Requirements:
    - ANTHROPIC_API_KEY in .env
    - anthropic package installed (pip install anthropic)
"""

import argparse
import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path

# Add project root to path for imports
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

try:
    import anthropic
except ImportError:
    print("Error: anthropic package not installed. Run: pip install anthropic")
    sys.exit(1)


def load_env():
    """Load environment variables from .env file."""
    env_path = PROJECT_ROOT / ".env"
    if env_path.exists():
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    key = key.strip()
                    value = value.strip().strip('"').strip("'")
                    if value:  # Only set if .env has a non-empty value
                        os.environ[key] = value


def load_brand_voice_guide():
    """Load the brand voice guide as system context."""
    guide_path = PROJECT_ROOT / "workflows" / "brand_voice_guide.md"
    if not guide_path.exists():
        print(f"Warning: Brand voice guide not found at {guide_path}")
        return ""
    with open(guide_path) as f:
        return f.read()


def slugify(text: str) -> str:
    """Create a filename-safe slug from a title."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:80].strip('-')


def detect_language(filepath: str) -> str:
    """Detect language from article filename (YYYY-MM-DD_lang_slug.md)."""
    name = Path(filepath).stem
    parts = name.split("_", 2)
    if len(parts) >= 2 and parts[1] in ("nl", "en"):
        return parts[1]
    return "nl"


def parse_article(filepath: str) -> dict:
    """Parse a markdown article with YAML frontmatter."""
    with open(filepath) as f:
        content = f.read()

    result = {
        "seo_title": "",
        "seo_description": "",
        "seo_keywords": [],
        "title": "",
        "body": content,
        "full_text": content,
    }

    # Extract YAML frontmatter
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if frontmatter_match:
        frontmatter = frontmatter_match.group(1)
        body = content[frontmatter_match.end():]
        result["body"] = body

        # Parse simple YAML fields
        for line in frontmatter.split("\n"):
            if line.startswith("seo_title:"):
                result["seo_title"] = line.split(":", 1)[1].strip().strip('"').strip("'")
            elif line.startswith("seo_description:"):
                result["seo_description"] = line.split(":", 1)[1].strip().strip('"').strip("'")

        # Parse keywords from entire frontmatter (may span multiple lines)
        keywords_match = re.findall(r'"([^"]+)"', frontmatter.split("seo_keywords:", 1)[-1]) if "seo_keywords:" in frontmatter else []
        if keywords_match:
            result["seo_keywords"] = keywords_match

    # Extract first H1 as title
    title_match = re.search(r'^#\s+(.+)$', result["body"], re.MULTILINE)
    if title_match:
        result["title"] = title_match.group(1).strip()

    return result


def build_system_prompt(brand_voice_guide: str) -> str:
    """Build the system prompt for social media ghostwriting."""
    return f"""Je bent een social media ghostwriter voor Julia Tol van Proper Access. Je schrijft LinkedIn- en Instagram-posts op basis van bestaande artikelen, volledig consistent met Julia's merkidentiteit en tone of voice.

Hieronder staat de volledige Brand Voice Guide. Volg deze EXACT op — vooral de tone of voice, CTA-stijl, en schrijfrichtlijnen.

---

{brand_voice_guide}

---

SOCIAL MEDIA SPECIFIEKE RICHTLIJNEN:

LINKEDIN:
- Lengte: 1200-1800 tekens (niet woorden)
- De eerste 2 regels MOETEN trekken — dit is wat mensen zien vóór "...meer"
- Professioneel maar persoonlijk, Julia's stem
- Emojis spaarzaam: max 3-4 als visuele breakers (✅, ⚠️, 💡)
- Hashtags: 3-5, onderaan, relevant en niet generiek
- GEEN externe links in de post zelf (algoritme straft dat af) — zeg "link in de comments"
- Eindig met een vraag of stelling die reacties uitlokt

INSTAGRAM:
- Lengte: 800-1500 tekens (sweet spot)
- Eerste zin = scroll-stopper, moet nieuwsgierig maken
- Iets informeler dan LinkedIn, maar nog steeds expert
- Emojis mogen iets meer dan LinkedIn, als visuele breakers
- Hashtags: 15-20, mix van breed (#accessibility) en niche (#WCAGtips)
- CTA: "link in bio", "bewaar deze post", "deel met iemand die dit moet weten"

BEIDE PLATFORMS:
- Schrijf in Julia's stem: conversationeel, "je"-aanspreking
- Geef concrete waarde — geen vaag advies
- De post moet op zichzelf staan (niet iedereen klikt door naar het artikel)
- Subtiele CTA: Proper Access als logische volgende stap
- Schrijf BEIDE posts in één response, duidelijk gescheiden met markers"""


def build_user_prompt(article_data: dict, angle: str, lang: str, context: str, cta: str) -> str:
    """Build the user prompt for social media post generation."""
    angle_descriptions = {
        "educational": "Educatief: Vat het artikel kort samen met 1 key takeaway. 'Wist je dat...'-stijl. Geef de lezer iets om over na te denken.",
        "hot-take": "Hot take: Neem een prikkelende stelling uit het artikel. Wees licht contrair of verrassend. Daag de lezer uit om te reageren.",
        "tip": "Praktische tip: Pak de meest bruikbare, direct toepasbare tip uit het artikel. Maak het concreet en actionable.",
        "story": "Verhaal: Begin met een herkenbaar scenario of persoonlijke anekdote. Trek de lezer erin en koppel het aan de kern van het artikel.",
        "statistic": "Statistiek: Open met een opvallend cijfer of feit uit het artikel. Geef context en maak het relevant voor de lezer.",
    }

    angle_desc = angle_descriptions.get(angle, angle_descriptions["educational"])
    lang_instruction = "Schrijf in het Nederlands." if lang == "nl" else "Write in English."

    # Truncate article body if too long (keep ~6000 chars for context window efficiency)
    body = article_data["body"]
    if len(body) > 6000:
        body = body[:6000] + "\n\n[... artikel verder afgekort ...]"

    prompt = f"""## Opdracht
Schrijf een LinkedIn-post EN een Instagram-post op basis van onderstaand artikel.

## Artikel
Titel: {article_data.get('seo_title') or article_data.get('title', 'Onbekend')}
Beschrijving: {article_data.get('seo_description', '')}
Keywords: {', '.join(article_data.get('seo_keywords', []))}

{body}

## Invalshoek
{angle_desc}

## Taal
{lang_instruction}

## Output-formaat
Geef je antwoord in EXACT dit formaat (inclusief de markers):

### LINKEDIN
[De volledige LinkedIn post tekst, inclusief eventuele emojis en formatting]

### LINKEDIN_HASHTAGS
[Hashtags gescheiden door spaties, bijv: #digitaletoegankelijkheid #WCAG #a11y]

### LINKEDIN_CANVA
[Eén korte zin die beschrijft wat het Canva-design moet uitstralen, bijv: "Minimalistisch design met de key takeaway als quote op een strakke achtergrond"]

### INSTAGRAM
[De volledige Instagram post tekst, inclusief eventuele emojis en formatting]

### INSTAGRAM_HASHTAGS
[Hashtags gescheiden door spaties]

### INSTAGRAM_CANVA
[Eén korte zin die beschrijft wat het Canva-design moet uitstralen]"""

    if cta:
        prompt += f"\n\n## Custom CTA\nGebruik deze CTA in beide posts: {cta}"

    if context:
        prompt += f"\n\n## Aanvullende context\n{context}"

    return prompt


def parse_response(response_text: str) -> dict:
    """Parse the structured response into LinkedIn and Instagram sections."""
    sections = {}
    current_section = None
    current_lines = []

    for line in response_text.split("\n"):
        if line.strip().startswith("### "):
            if current_section:
                sections[current_section] = "\n".join(current_lines).strip()
            current_section = line.strip().replace("### ", "").strip()
            current_lines = []
        else:
            current_lines.append(line)

    # Don't forget the last section
    if current_section:
        sections[current_section] = "\n".join(current_lines).strip()

    linkedin_caption = sections.get("LINKEDIN", "")
    instagram_caption = sections.get("INSTAGRAM", "")

    return {
        "linkedin": {
            "caption": linkedin_caption,
            "hashtags": sections.get("LINKEDIN_HASHTAGS", "").split(),
            "character_count": len(linkedin_caption),
            "canva_query": sections.get("LINKEDIN_CANVA", ""),
        },
        "instagram": {
            "caption": instagram_caption,
            "hashtags": sections.get("INSTAGRAM_HASHTAGS", "").split(),
            "character_count": len(instagram_caption),
            "canva_query": sections.get("INSTAGRAM_CANVA", ""),
        },
    }


def generate_posts(article_data: dict, angle: str, lang: str, context: str, cta: str, model: str) -> str:
    """Generate social media posts using the Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not found in environment or .env file")
        sys.exit(1)

    brand_voice_guide = load_brand_voice_guide()
    system_prompt = build_system_prompt(brand_voice_guide)
    user_prompt = build_user_prompt(article_data, angle, lang, context, cta)

    client = anthropic.Anthropic(api_key=api_key)

    title = article_data.get("seo_title") or article_data.get("title", "onbekend")
    print(f"Generating social media posts for: {title}")
    print(f"Angle: {angle} | Language: {lang}")
    print(f"Model: {model}")
    print("This may take a moment...")
    print()

    message = client.messages.create(
        model=model,
        max_tokens=4096,
        system=system_prompt,
        messages=[
            {"role": "user", "content": user_prompt}
        ]
    )

    return message.content[0].text


def save_posts(data: dict, article_path: str, lang: str) -> Path:
    """Save the generated posts to .tmp/social_posts/."""
    posts_dir = PROJECT_ROOT / ".tmp" / "social_posts"
    posts_dir.mkdir(parents=True, exist_ok=True)

    # Derive slug from article filename
    article_stem = Path(article_path).stem
    # Remove date and lang prefix (YYYY-MM-DD_lang_) to get slug
    parts = article_stem.split("_", 2)
    slug = parts[2] if len(parts) >= 3 else slugify(article_stem)

    date_str = datetime.now().strftime("%Y-%m-%d")
    filename = f"{date_str}_{lang}_{slug}.json"
    filepath = posts_dir / filename

    with open(filepath, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    return filepath


def main():
    parser = argparse.ArgumentParser(
        description="Generate LinkedIn and Instagram posts from an existing article"
    )
    parser.add_argument(
        "--article", required=True,
        help="Path to the source article markdown file"
    )
    parser.add_argument(
        "--angle", default="educational",
        choices=["educational", "hot-take", "tip", "story", "statistic"],
        help="Content angle/approach (default: educational)"
    )
    parser.add_argument(
        "--lang", default=None,
        choices=["nl", "en"],
        help="Override language (default: auto-detect from filename)"
    )
    parser.add_argument(
        "--context", default="",
        help="Additional instructions or focus areas"
    )
    parser.add_argument(
        "--cta", default="",
        help="Custom CTA override for both posts"
    )
    parser.add_argument(
        "--model", default="claude-sonnet-4-5-20250929",
        help="Anthropic model to use (default: claude-sonnet-4-5-20250929)"
    )
    parser.add_argument(
        "--stdout", action="store_true",
        help="Print posts to stdout instead of saving to file"
    )

    args = parser.parse_args()

    # Validate article exists
    article_path = Path(args.article)
    if not article_path.exists():
        print(f"Error: Article not found: {article_path}")
        print(f"Tip: List available articles with: ls .tmp/articles/")
        sys.exit(1)

    # Detect language
    lang = args.lang or detect_language(str(article_path))
    print(f"Language: {lang} ({'auto-detected' if not args.lang else 'override'})")

    load_env()

    # Parse the source article
    article_data = parse_article(str(article_path))
    if len(article_data["body"]) < 200:
        print(f"Warning: Article is very short ({len(article_data['body'])} chars). Posts may lack depth.")

    # Generate posts
    raw_response = generate_posts(
        article_data=article_data,
        angle=args.angle,
        lang=lang,
        context=args.context,
        cta=args.cta,
        model=args.model,
    )

    # Parse the response
    posts = parse_response(raw_response)

    # Build output data
    output = {
        "source_article": str(article_path),
        "generated_at": datetime.now().isoformat(),
        "language": lang,
        "angle": args.angle,
        "linkedin": posts["linkedin"],
        "instagram": posts["instagram"],
    }

    if args.stdout:
        print(json.dumps(output, indent=2, ensure_ascii=False))
    else:
        filepath = save_posts(output, str(article_path), lang)
        print(f"Posts saved to: {filepath}")
        print()
        print("=" * 60)
        print("LINKEDIN POST")
        print("=" * 60)
        print(posts["linkedin"]["caption"])
        print(f"\nHashtags: {' '.join(posts['linkedin']['hashtags'])}")
        print(f"Characters: {posts['linkedin']['character_count']}")
        print()
        print("=" * 60)
        print("INSTAGRAM POST")
        print("=" * 60)
        print(posts["instagram"]["caption"])
        print(f"\nHashtags: {' '.join(posts['instagram']['hashtags'])}")
        print(f"Characters: {posts['instagram']['character_count']}")
        print()
        print("Next steps:")
        print("1. Review the posts above")
        print("2. Ask the agent to adjust if needed (re-run with --context)")
        print("3. Once approved, the agent creates Canva designs")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Article Writing Tool — Proper Access

Generates draft articles using the Anthropic API (Claude),
consistent with Proper Access' brand voice and tone of voice.

Usage:
    python tools/write_article.py --topic "..." --audience "..." --lang nl
    python tools/write_article.py --topic "..." --audience "..." --lang en --channel linkedin
    python tools/write_article.py --topic "..." --audience "..." --lang nl --context "Extra info..."

Requirements:
    - ANTHROPIC_API_KEY in .env
    - anthropic package installed (pip install anthropic)
"""

import argparse
import os
import sys
import re
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
                    os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def load_brand_voice_guide():
    """Load the brand voice guide as system context."""
    guide_path = PROJECT_ROOT / "workflows" / "brand_voice_guide.md"
    if not guide_path.exists():
        print(f"Warning: Brand voice guide not found at {guide_path}")
        return ""
    with open(guide_path) as f:
        return f.read()


def build_system_prompt(brand_voice_guide: str) -> str:
    """Build the system prompt from the brand voice guide."""
    return f"""Je bent een ghostwriter voor Julia Tol van Proper Access. Je schrijft artikelen over digitale toegankelijkheid die volledig consistent zijn met Julia's merkidentiteit en tone of voice.

Hieronder staat de volledige Brand Voice Guide. Volg deze EXACT op — vooral de tone of voice, CTA-stijl, en schrijfrichtlijnen.

---

{brand_voice_guide}

---

BELANGRIJK:
- Schrijf altijd in Julia's stem: conversationeel, met humor, "je"-aanspreking
- Geef CONCRETE oplossingen met code-snippets waar relevant, niet "zorg dat het toegankelijk wordt"
- De CTA is subtiel: Proper Access als logische volgende stap, niet als reclame
- Gebruik opsommingen en koppen om het scanbaar te maken
- Vermijd jargon of leg het meteen uit
- Eindig altijd met het auteur-blokje"""


def build_user_prompt(topic: str, audience: str, lang: str, channel: str, context: str) -> str:
    """Build the user prompt for article generation."""
    audience_descriptions = {
        "bedrijfsleven": "Ondernemers en product owners van middelgrote en grote bedrijven die moeten voldoen aan de European Accessibility Act. Ze willen weten hoe ze efficiënt en kostenbewust tot een toegankelijk resultaat komen.",
        "overheid": "Medewerkers van overheidsinstanties die verantwoordelijk zijn voor digitale toegankelijkheid. Ze moeten voldoen aan het BDTO (Besluit digitale toegankelijkheid overheid) en willen echt verbeteren, niet alleen een vinkje zetten.",
        "developers": "Webdevelopers en front-end engineers die willen leren hoe ze toegankelijke code schrijven. Ze waarderen technische diepgang en concrete code-voorbeelden.",
        "product owners": "Product owners die verantwoordelijk zijn voor websites of webshops. Ze hoeven niet zelf te coderen maar moeten wel begrijpen wat er nodig is en goede beslissingen nemen.",
        "agencies": "Web agencies die hun klanten willen helpen met digitale toegankelijkheid. Ze zoeken een betrouwbare partner en willen hun eigen kennis opbouwen.",
    }

    audience_desc = audience_descriptions.get(
        audience.lower(),
        f"Doelgroep: {audience}"
    )

    channel_guidelines = {
        "blog": "Schrijf een diepgaand artikel van 1500-2500 woorden. Inclusief code-snippets, concrete voorbeelden, en gedetailleerde uitleg.",
        "linkedin": "Schrijf een LinkedIn-artikel van 800-1200 woorden. Inzichtelijk en prikkelend, met een duidelijke takeaway. Iets minder technisch dan een blog.",
        "linkedin-post": "Schrijf een korte LinkedIn-post van 150-300 woorden. Eén kernpunt, puntig en prikkelend. Eindig met een vraag of stelling.",
        "frankwatching": "Schrijf een Frankwatching-artikel van 1500-2000 woorden. Educatief voor een breed publiek, minder technisch jargon, veel herkenbare voorbeelden.",
        "medium": "Schrijf een Medium-artikel van 1500-2500 woorden in het Engels. Vergelijkbaar met een blog maar voor een internationaal publiek.",
    }

    channel_guide = channel_guidelines.get(
        channel.lower(),
        channel_guidelines["blog"]
    )

    lang_instruction = "Schrijf in het Nederlands." if lang == "nl" else "Write in English."

    prompt = f"""## Opdracht
Schrijf een volledig artikel over: {topic}

## Doelgroep
{audience_desc}

## Taal
{lang_instruction}

## Kanaal en lengte
{channel_guide}

## Structuur
Begin het artikel met een YAML frontmatter blok met SEO-informatie, gevolgd door de inhoud:

```
---
seo_title: "Korte, pakkende titel voor zoekresultaten (max 60 tekens)"
seo_description: "Beschrijvende meta description die uitnodigt om te klikken (max 155 tekens)"
seo_keywords: ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
---
```

SEO-richtlijnen:
- **seo_title**: Mag afwijken van de artikeltitel. Optimaliseer voor zoekresultaten. Max 60 tekens.
- **seo_description**: Vat de kernwaarde van het artikel samen. Eindig met een actie-uitnodiging. Max 155 tekens.
- **seo_keywords**: 5-8 relevante zoektermen, mix van short-tail en long-tail. In de taal van het artikel.

Daarna de artikelinhoud:
1. Pakkende titel
2. Openingshook (herkenbaar scenario, verrassend feit, of prikkelende stelling)
3. Context (waarom is dit relevant? wet, kosten, gebruikers)
4. Kern (praktische tips, concrete voorbeelden, code-snippets waar relevant)
5. Afronding met subtiele CTA naar Proper Access
6. Auteur-blokje"""

    if context:
        prompt += f"\n\n## Aanvullende context\n{context}"

    return prompt


def slugify(text: str) -> str:
    """Create a filename-safe slug from a title."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:80].strip('-')


def generate_article(topic: str, audience: str, lang: str, channel: str, context: str, model: str) -> str:
    """Generate an article using the Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not found in environment or .env file")
        sys.exit(1)

    brand_voice_guide = load_brand_voice_guide()
    system_prompt = build_system_prompt(brand_voice_guide)
    user_prompt = build_user_prompt(topic, audience, lang, channel, context)

    client = anthropic.Anthropic(api_key=api_key)

    print(f"Generating article about: {topic}")
    print(f"Audience: {audience} | Language: {lang} | Channel: {channel}")
    print(f"Model: {model}")
    print("This may take a minute...")
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


def save_article(content: str, topic: str, lang: str) -> Path:
    """Save the generated article to .tmp/articles/."""
    articles_dir = PROJECT_ROOT / ".tmp" / "articles"
    articles_dir.mkdir(parents=True, exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d")
    slug = slugify(topic)
    filename = f"{date_str}_{lang}_{slug}.md"
    filepath = articles_dir / filename

    with open(filepath, "w") as f:
        f.write(content)

    return filepath


def main():
    parser = argparse.ArgumentParser(
        description="Generate draft articles for Proper Access"
    )
    parser.add_argument(
        "--topic", required=True,
        help="Article topic or title"
    )
    parser.add_argument(
        "--audience", required=True,
        choices=["bedrijfsleven", "overheid", "developers", "product owners", "agencies"],
        help="Target audience"
    )
    parser.add_argument(
        "--lang", required=True,
        choices=["nl", "en"],
        help="Article language"
    )
    parser.add_argument(
        "--channel", default="blog",
        choices=["blog", "linkedin", "linkedin-post", "frankwatching", "medium"],
        help="Publication channel (default: blog)"
    )
    parser.add_argument(
        "--context", default="",
        help="Additional context or instructions for the article"
    )
    parser.add_argument(
        "--model", default="claude-sonnet-4-5-20250929",
        help="Anthropic model to use (default: claude-sonnet-4-5-20250929)"
    )
    parser.add_argument(
        "--stdout", action="store_true",
        help="Print article to stdout instead of saving to file"
    )

    args = parser.parse_args()

    load_env()

    article = generate_article(
        topic=args.topic,
        audience=args.audience,
        lang=args.lang,
        channel=args.channel,
        context=args.context,
        model=args.model,
    )

    if args.stdout:
        print(article)
    else:
        filepath = save_article(article, args.topic, args.lang)
        print(f"Article saved to: {filepath}")
        print()
        print("--- PREVIEW (first 500 chars) ---")
        print(article[:500])
        print("...")
        print()
        print("Next steps:")
        print("1. Review the full article in .tmp/articles/")
        print("2. Edit for accuracy, add personal anecdotes")
        print("3. Update Content Calendar status to 'review'")


if __name__ == "__main__":
    main()

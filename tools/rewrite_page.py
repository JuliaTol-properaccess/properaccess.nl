#!/usr/bin/env python3
"""
Money Page Rewrite Tool — Proper Access

Rewrites website pages with a sales funnel approach: customer-first language,
pain points, and continuous CTAs. Output is Markdown ready for implementation.

Usage:
    python tools/rewrite_page.py \
        --url "https://properaccess.nl/" \
        --page-type "homepage" \
        --target "bedrijfsleven"

    python tools/rewrite_page.py \
        --url "https://properaccess.nl/toegankelijkheidsaudit/" \
        --page-type "product" \
        --target "bedrijfsleven" \
        --context "Focus op EAA-deadline en urgentie"

    python tools/rewrite_page.py \
        --content current_page.md \
        --page-type "sector" \
        --target "e-commerce" \
        --stdout

Page types: homepage, product, sector, over-ons, contact
Targets: bedrijfsleven, overheid, developers, agencies, e-commerce, cultuur

Requirements:
    - ANTHROPIC_API_KEY in .env
"""

import argparse
import os
import re
import sys
from datetime import datetime
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

try:
    import anthropic
except ImportError:
    print("Error: anthropic package not installed.")
    print("Run: pip install anthropic")
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
    if guide_path.exists():
        with open(guide_path) as f:
            return f.read()
    return ""


def load_rewrite_workflow():
    """Load the rewrite workflow as context."""
    workflow_path = PROJECT_ROOT / "workflows" / "rewrite_money_pages.md"
    if workflow_path.exists():
        with open(workflow_path) as f:
            return f.read()
    return ""


def fetch_page_content(url: str) -> str:
    """Fetch page content from URL using simple HTTP request."""
    try:
        import urllib.request
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="replace")

        # Basic HTML to text: strip tags, keep structure
        import html as html_module
        text = html_module.unescape(html)
        # Remove script and style blocks
        text = re.sub(r'<script[^>]*>.*?</script>', '', text, flags=re.DOTALL | re.IGNORECASE)
        text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL | re.IGNORECASE)
        # Convert headers to markdown
        for i in range(1, 7):
            text = re.sub(rf'<h{i}[^>]*>(.*?)</h{i}>', rf'\n{"#" * i} \1\n', text, flags=re.DOTALL | re.IGNORECASE)
        # Convert paragraphs and divs to newlines
        text = re.sub(r'<(?:p|div|br|li)[^>]*>', '\n', text, flags=re.IGNORECASE)
        # Remove remaining tags
        text = re.sub(r'<[^>]+>', '', text)
        # Clean up whitespace
        text = re.sub(r'\n{3,}', '\n\n', text)
        text = re.sub(r'[ \t]+', ' ', text)
        return text.strip()
    except Exception as e:
        print(f"Warning: Could not fetch {url}: {e}")
        return ""


def build_system_prompt(brand_voice: str, workflow: str) -> str:
    """Build the system prompt for page rewriting."""
    return f"""Je bent een conversion copywriter voor Julia Tol van Proper Access. Je herschrijft website-pagina's met een sales funnel aanpak.

## Jouw opdracht

Je herschrijft bestaande pagina's zodat ze:
1. Bezoekers de sales funnel in trekken
2. Elke sectie een bezoekervraag anticipeert en beantwoordt
3. Klantgerichte taal gebruiken ("jij" niet "wij")
4. Specifieke pijnpunten benoemen
5. Doorlopende CTA's bevatten (niet alleen onderaan)

## Brand Voice Guide

{brand_voice}

## Herschrijf-workflow en principes

{workflow}

## BELANGRIJK

- Schrijf in Julia's stem: warm, enthousiast, conversationeel, "je"-aanspreking
- NOOIT "wij bieden" of "onze diensten" als openingszin. Begin altijd vanuit de klant.
- Elke sectie begint met de bezoekervraag die het beantwoordt (als commentaar of als kop)
- Gebruik concrete cijfers en feiten waar mogelijk
- Verwijs naar de EAA (European Accessibility Act) waar relevant
- CTA's zijn subtiel maar duidelijk, passend bij de brand voice
- Schrijf in het Nederlands
- Output in Markdown met duidelijke secties
- Begin met YAML frontmatter voor SEO (seo_title, seo_description, seo_keywords)
- Voeg interne links toe naar andere pagina's op properaccess.nl waar relevant"""


PAGE_TYPE_STRUCTURES = {
    "homepage": """## Structuur voor homepage

1. **Hero** — Urgentie + herkenning. Bezoekervraag: "Heb ik een probleem?"
   - Pakkende kop die de bezoeker aanspreekt
   - Ondertitel die het probleem benoemt (EAA, deadline, risico)
   - Primaire CTA (laagdrempelig)

2. **Sectie: Waarom dit belangrijk is** — Bezoekervraag: "Wat riskeer ik?"
   - EAA en wettelijke context (kort, to the point)
   - Impact op klanten/gebruikers
   - Secundaire CTA

3. **Sectie: Hoe we helpen** — Bezoekervraag: "Wat moet ik doen?"
   - Kort overzicht van diensten (audit, quickscan)
   - Focus op wat de klant krijgt, niet wat Proper Access doet
   - Links naar productpagina's

4. **Sectie: Waarom Proper Access** — Bezoekervraag: "Waarom jullie?"
   - Onderscheidende kenmerken (rapport per pagina, concrete oplossingen, partnerschap)
   - Sociale bewijskracht (klanten, projecten)
   - Geen opsomming van features maar focus op klantvoordeel

5. **Sectie: Hoe het werkt** — Bezoekervraag: "Hoe ziet het proces eruit?"
   - 3 simpele stappen: contact → audit → resultaat
   - Timeline (3-5 weken)
   - CTA

6. **Afsluitende CTA** — "Wat is mijn volgende stap?"
   - Laagdrempelig: gratis gesprek, quickscan, of offerte""",

    "product": """## Structuur voor productpagina

1. **Hero** — Bezoekervraag: "Is dit wat ik nodig heb?"
   - Kop die het probleem van de bezoeker benoemt
   - Ondertitel die de oplossing introduceert
   - Primaire CTA

2. **Sectie: Wat je krijgt** — Bezoekervraag: "Wat levert het op?"
   - Concrete deliverables (rapport, plan van aanpak, CSV, oplossingen)
   - Focus op waarde, niet op proces
   - Vergelijking met wat andere bureaus doen (subtiel)

3. **Sectie: Hoe het werkt** — Bezoekervraag: "Wat moet ik doen?"
   - Stappen van het proces
   - Timeline en planning
   - Wat verwacht wordt van de klant (bijna niets)

4. **Sectie: Wat maakt dit anders** — Bezoekervraag: "Waarom niet gewoon een tool gebruiken?"
   - Vergelijking automatische tools vs. handmatige audit
   - Unieke aanpak: per pagina, per element, concrete oplossingen
   - Partnerschap: onbeperkt vragen stellen

5. **Sectie: Prijsindicatie** — Bezoekervraag: "Wat kost het?"
   - Transparant over prijsrange
   - Of: "Vraag een offerte aan — binnen 24 uur ontvang je een voorstel"

6. **FAQ** — 4-6 veelgestelde vragen
   - Praktische vragen: hoe lang duurt het, wat heb je nodig, wat als we niet voldoen

7. **CTA** — Offerte aanvragen of contact opnemen""",

    "sector": """## Structuur voor sectorpagina

1. **Hero** — Bezoekervraag: "Begrijpen jullie mijn sector?"
   - Sectorspecifiek pijnpunt als kop
   - Laat zien dat je de sector kent
   - CTA

2. **Sectie: Waarom dit relevant is voor jouw sector** — Bezoekervraag: "Waarom nu?"
   - Sectorspecifieke wetgeving of risico's
   - Concrete voorbeelden uit de sector
   - Cijfers en feiten

3. **Sectie: Herkenbare problemen** — Bezoekervraag: "Herken ik dit?"
   - 3-4 typische problemen die je in audits van deze sector tegenkomt
   - Herkenbare scenario's
   - Impact op eindgebruikers

4. **Sectie: Hoe we jouw sector helpen** — Bezoekervraag: "Hebben jullie ervaring met mijn sector?"
   - Sectorspecifieke aanpak
   - Referenties of voorbeelden (als beschikbaar)
   - Wat maakt de aanpak anders voor deze sector

5. **CTA** — Sectorspecifieke volgende stap""",

    "over-ons": """## Structuur voor over-ons pagina

1. **Hero** — Bezoekervraag: "Kan ik jullie vertrouwen?"
   - Missie in één zin (klantgericht, niet ego-gericht)
   - Wat de klant eraan heeft

2. **Sectie: Wat ons drijft** — Bezoekervraag: "Waarom doen jullie dit?"
   - Filosofie: niet rapporten schrijven maar organisaties helpen
   - Passie voor het vak, niet voor de regels

3. **Sectie: Hoe we werken** — Bezoekervraag: "Hoe ziet samenwerking eruit?"
   - Partnerschap, niet eenmalig rapport
   - Concrete oplossingen, niet vage adviezen
   - Onbeperkt vragen stellen

4. **Sectie: Het team** — Bezoekervraag: "Wie gaat mij helpen?"
   - Kort en menselijk
   - Focus op expertise en passie, niet op CV's

5. **CTA** — Laagdrempelig kennismaken""",

    "contact": """## Structuur voor contactpagina

1. **Hero** — Warm en uitnodigend
   - "Laten we kennismaken" of vergelijkbaar
   - Geen drempels

2. **Contactgegevens + formulier** — Direct en duidelijk
   - E-mail, telefoon
   - Contactformulier (eenvoudig)

3. **Wat je kunt verwachten** — Bezoekervraag: "Wat gebeurt er als ik contact opneem?"
   - Reactietijd
   - Eerste stap (kennismakingsgesprek)
   - Geen verplichtingen

Houd deze pagina kort — het doel is conversie, niet informatie.""",
}

TARGET_CONTEXT = {
    "bedrijfsleven": "Ondernemers en product owners van middelgrote/grote bedrijven. Moeten voldoen aan EAA. Willen efficiënt en kostenbewust werken. Denken in ROI en risico.",
    "overheid": "Overheidsmedewerkers verantwoordelijk voor digitale toegankelijkheid. Moeten voldoen aan Wdo. Complexe organisatie, veel stakeholders. Willen echt verbeteren.",
    "developers": "Front-end developers en technische teams. Willen technische diepgang. Zoeken een partner die hun taal spreekt.",
    "agencies": "Web agencies die klanten moeten adviseren over WCAG. Zoeken een betrouwbare partner voor audits. Willen hun eigen kennis opbouwen.",
    "e-commerce": "Webshop-eigenaren en e-commerce managers. EAA raakt hen direct. Denken in conversie, omzet en klantbereik. Elke barrière = gemiste verkoop.",
    "cultuur": "Musea, theaters, festivals, sportorganisaties. Willen inclusief zijn. Publiek is divers. Vaak subsidie-afhankelijk, dus moeten aan regels voldoen.",
}


def build_user_prompt(current_content: str, page_type: str, target: str, url: str, context: str) -> str:
    """Build the user prompt for page rewriting."""
    structure = PAGE_TYPE_STRUCTURES.get(page_type, PAGE_TYPE_STRUCTURES["product"])
    target_desc = TARGET_CONTEXT.get(target, f"Doelgroep: {target}")

    prompt = f"""## Opdracht

Herschrijf de onderstaande websitepagina volgens de sales funnel principes.

## Pagina-URL
{url}

## Paginatype
{page_type}

{structure}

## Primaire doelgroep
{target_desc}

## Huidige paginatekst

```
{current_content[:8000]}
```

## Instructies

1. Herschrijf de volledige pagina in Markdown
2. Begin met YAML frontmatter (seo_title, seo_description, seo_keywords)
3. Volg exact de structuur hierboven voor dit paginatype
4. Elke sectie beantwoordt een bezoekervraag — maak dit expliciet in de koppen
5. Gebruik klant-eerst taal: begin vanuit de bezoeker, niet vanuit Proper Access
6. Voeg na elke inhoudelijke sectie een passende CTA toe
7. Gebruik concrete cijfers waar mogelijk (900+ klanten, 200 controlepunten per pagina, binnen 3-5 weken)
8. Verwijs naar de EAA waar relevant
9. Voeg interne links toe naar andere pagina's op properaccess.nl
10. Behoud feitelijke informatie uit de originele pagina maar verbeter de presentatie"""

    if context:
        prompt += f"\n\n## Aanvullende instructies\n{context}"

    return prompt


def slugify(text: str) -> str:
    """Create a filename-safe slug."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60].strip('-')


def rewrite_page(url: str, current_content: str, page_type: str,
                 target: str, context: str, model: str) -> str:
    """Rewrite a page using the Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not found in environment or .env file")
        sys.exit(1)

    brand_voice = load_brand_voice_guide()
    workflow = load_rewrite_workflow()
    system_prompt = build_system_prompt(brand_voice, workflow)
    user_prompt = build_user_prompt(current_content, page_type, target, url, context)

    client = anthropic.Anthropic(api_key=api_key)

    print(f"Rewriting page: {url}")
    print(f"Type: {page_type} | Target: {target}")
    print(f"Model: {model}")
    print("This may take a minute...")
    print()

    message = client.messages.create(
        model=model,
        max_tokens=8192,
        system=system_prompt,
        messages=[
            {"role": "user", "content": user_prompt}
        ]
    )

    return message.content[0].text


def save_page(content: str, url: str, page_type: str) -> Path:
    """Save the rewritten page to .tmp/pages/."""
    pages_dir = PROJECT_ROOT / ".tmp" / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)

    # Extract page name from URL
    path = url.rstrip("/").split("/")[-1] or "homepage"
    slug = slugify(path)
    date_str = datetime.now().strftime("%Y-%m-%d")
    filename = f"{date_str}_{slug}.md"
    filepath = pages_dir / filename

    with open(filepath, "w") as f:
        f.write(content)

    return filepath


def main():
    parser = argparse.ArgumentParser(
        description="Rewrite money pages for Proper Access"
    )
    parser.add_argument(
        "--url", required=True,
        help="URL of the page to rewrite"
    )
    parser.add_argument(
        "--page-type", required=True,
        choices=["homepage", "product", "sector", "over-ons", "contact"],
        help="Type of page"
    )
    parser.add_argument(
        "--target", default="bedrijfsleven",
        choices=["bedrijfsleven", "overheid", "developers", "agencies", "e-commerce", "cultuur"],
        help="Primary target audience (default: bedrijfsleven)"
    )
    parser.add_argument(
        "--content", default="",
        help="Path to file with current page content (if not using --url to fetch)"
    )
    parser.add_argument(
        "--context", default="",
        help="Additional instructions for the rewrite"
    )
    parser.add_argument(
        "--model", default="claude-sonnet-4-5-20250929",
        help="Anthropic model to use"
    )
    parser.add_argument(
        "--stdout", action="store_true",
        help="Print to stdout instead of saving to file"
    )

    args = parser.parse_args()
    load_env()

    # Get current page content
    if args.content:
        content_path = Path(args.content)
        if content_path.exists():
            with open(content_path) as f:
                current_content = f.read()
        else:
            print(f"Error: Content file not found: {args.content}")
            sys.exit(1)
    else:
        print(f"Fetching current page content from {args.url}...")
        current_content = fetch_page_content(args.url)
        if not current_content:
            print("Warning: Could not fetch page content. Generating from scratch.")
            current_content = "(Pagina kon niet worden opgehaald — genereer op basis van URL en paginatype)"

    result = rewrite_page(
        args.url, current_content, args.page_type,
        args.target, args.context, args.model
    )

    if args.stdout:
        print(result)
    else:
        filepath = save_page(result, args.url, args.page_type)
        print(f"Rewritten page saved to: {filepath}")
        print()
        print("--- PREVIEW (first 500 chars) ---")
        print(result[:500])
        print("...")
        print()
        print("Next steps:")
        print("1. Review the rewritten page in .tmp/pages/")
        print("2. Compare with current live version")
        print("3. Share with Julia for feedback")


if __name__ == "__main__":
    main()

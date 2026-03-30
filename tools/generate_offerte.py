#!/usr/bin/env python3
"""
Offerte Generator Tool — Proper Access

Generates a quote/proposal in Markdown based on a client email and Proper Access
product list. Output is ready to paste into Notion.

Usage:
    python tools/generate_offerte.py \
        --client-name "Jan Janssen" \
        --organisation "WebShop BV" \
        --url "https://webshop.nl" \
        --product "gemiddelde-website" \
        --extras "retest,nabespreking" \
        --context "Klant wil voor juni 2025 voldoen aan EAA."

    python tools/generate_offerte.py \
        --client-name "Jan Janssen" \
        --organisation "WebShop BV" \
        --url "https://webshop.nl" \
        --product "gemiddelde-website" \
        --stdout

Products:
    Volledige audit: eenvoudige-website, gemiddelde-website, gemiddeld-complexe-website, complexe-website
    Deel-audit: content-audit, techniekaudit, systeem-audit

Extras (comma-separated):
    retest, nabespreking

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


PRODUCTS = {
    "eenvoudige-website": {
        "naam": "Audit digitale toegankelijkheid van een eenvoudige website",
        "type": "Volledige audit (content en techniek), WCAG 2.2 AA",
        "omschrijving": "Een project van ca 14 uur, sample: 10 - 14 pagina's en/of PDF's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 1795,
    },
    "gemiddelde-website": {
        "naam": "Audit digitale toegankelijkheid van een gemiddelde website",
        "type": "Volledige audit (content en techniek), WCAG 2.2 AA",
        "omschrijving": "Een project van ca 19 uur, sample: 14 - 17 pagina's en/of PDF's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 2395,
    },
    "gemiddeld-complexe-website": {
        "naam": "Audit digitale toegankelijkheid van een gemiddelde, iets complexe website",
        "type": "Volledige audit (content en techniek), WCAG 2.2 AA",
        "omschrijving": "Een project van ca 24 uur, sample: 14 - 17 pagina's en/of PDF's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 2695,
    },
    "complexe-website": {
        "naam": "Audit digitale toegankelijkheid van een complexe website",
        "type": "Volledige audit (content en techniek), WCAG 2.2 AA",
        "omschrijving": "Een project van ca 30 uur, sample: 14 - 17 pagina's en/of PDF's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 2895,
    },
    "content-audit": {
        "naam": "Content-audit digitale toegankelijkheid van een website",
        "type": "Deel-audit (content), WCAG 2.2 AA",
        "omschrijving": "Een project van ca 10 uur, sample: 10 - 14 pagina's en/of PDF's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 1295,
    },
    "techniekaudit": {
        "naam": "Techniekaudit digitale toegankelijkheid van een website",
        "type": "Deel-audit (techniek), WCAG 2.2 AA",
        "omschrijving": "Een project van circa 17 uur, sample: 14 - 17 pagina's, inclusief concrete oplossingen, rapportage bevindingen per pagina",
        "prijs": 2395,
    },
    "systeem-audit": {
        "naam": "Een systeem-audit van alle componenten van een platform/website",
        "type": "Deel-audit (systeem), WCAG 2.2 AA",
        "omschrijving": "Een project van circa 25 uur, waarbij we een representatieve steekproef nemen van alle componenten van het systeem en deze toetsen aan WCAG 2.2",
        "prijs": 2895,
    },
}

EXTRAS = {
    "retest": {"naam": "Retest van bevindingen", "prijs": 500},
    "nabespreking": {"naam": "Nabespreking van het rapport online, 1 uur", "prijs": 125},
}


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


def load_offerte_template():
    """Load the offerte template as context."""
    template_path = PROJECT_ROOT / "workflows" / "offerte_template.md"
    if template_path.exists():
        with open(template_path) as f:
            return f.read()
    return ""


def build_system_prompt(template: str) -> str:
    """Build the system prompt for offerte generation."""
    return f"""Je bent een offerte-schrijver voor Julia Tol van Proper Access. Je genereert professionele offertes voor WCAG-audits.

Je schrijft in Julia's naam. Toon: warm, enthousiast, professioneel maar niet stijf. Gebruik "je"-aanspreking.

Hieronder staat de volledige offerte-template met productlijst en structuur. Volg deze EXACT op.

---

{template}

---

BELANGRIJK:
- Volg de offerte-structuur exact zoals in de template
- Gebruik de correcte prijzen uit de productlijst 2026
- Vermeld altijd dat 21% BTW van toepassing is
- Bied altijd retest en nabespreking aan als optionele extra's
- Pas de inleiding aan op basis van de klant-email (refereer aan hun specifieke situatie)
- De "Doel van de audit" en "Product: hoe we helpen" secties zijn standaard en worden altijd opgenomen
- Genereer een offertenummer in het format JJJJMM-XX (bijv. 202602-01)
- Output in Markdown, klaar om in Notion te plakken"""


def build_user_prompt(client_name: str, organisation: str, url: str,
                      product_key: str, extras: list, context: str) -> str:
    """Build the user prompt for offerte generation."""
    product = PRODUCTS[product_key]

    # Build price table
    price_lines = f"| {product['naam']} | € {product['prijs']:,} |".replace(",", ".")
    total = product["prijs"]

    extra_lines = []
    for extra_key in extras:
        if extra_key in EXTRAS:
            extra = EXTRAS[extra_key]
            extra_lines.append(f"| {extra['naam']} | € {extra['prijs']:,} |".replace(",", "."))
            total += extra["prijs"]

    prompt = f"""Genereer een volledige offerte in Markdown voor de volgende klant:

## Klantgegevens
- **Naam:** {client_name}
- **Organisatie:** {organisation}
- **Website URL:** {url}

## Aanbevolen product
- **Product:** {product['naam']}
- **Type:** {product['type']}
- **Omschrijving:** {product['omschrijving']}
- **Prijs:** € {product['prijs']:,} (excl. BTW)

## Prijstabel
| Product | Prijs (excl. BTW) |
|---------|-------------------|
{price_lines}"""

    if extra_lines:
        prompt += "\n" + "\n".join(extra_lines)

    prompt += f"""

## Totaal: € {total:,} (excl. BTW)

## Datum
{datetime.now().strftime('%d-%m-%Y')}"""

    if context:
        prompt += f"""

## Aanvullende context uit de klant-e-mail
{context}

Gebruik deze context om de inleiding en het aanbod te personaliseren. Refereer aan de specifieke situatie van de klant."""

    prompt += """

## Instructies
- Genereer de volledige offerte in Markdown
- Volg exact de structuur uit de template
- Pas de inleiding persoonlijk aan voor deze klant
- Neem alle standaardsecties op (doel, product, methoden, planning, over ons)
- Eindig met de ondertekening van Julia Tol"""

    return prompt


def slugify(text: str) -> str:
    """Create a filename-safe slug."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60].strip('-')


def generate_offerte(client_name: str, organisation: str, url: str,
                     product_key: str, extras: list, context: str, model: str) -> str:
    """Generate an offerte using the Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not found in environment or .env file")
        sys.exit(1)

    template = load_offerte_template()
    system_prompt = build_system_prompt(template)
    user_prompt = build_user_prompt(client_name, organisation, url, product_key, extras, context)

    client = anthropic.Anthropic(api_key=api_key)

    print(f"Generating offerte for: {organisation} ({url})")
    print(f"Product: {PRODUCTS[product_key]['naam']}")
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


def save_offerte(content: str, organisation: str) -> Path:
    """Save the generated offerte to .tmp/offertes/."""
    offertes_dir = PROJECT_ROOT / ".tmp" / "offertes"
    offertes_dir.mkdir(parents=True, exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d")
    slug = slugify(organisation)
    filename = f"{date_str}_{slug}.md"
    filepath = offertes_dir / filename

    with open(filepath, "w") as f:
        f.write(content)

    return filepath


def main():
    parser = argparse.ArgumentParser(
        description="Generate WCAG audit quotes for Proper Access"
    )
    parser.add_argument(
        "--client-name", required=True,
        help="Client contact name"
    )
    parser.add_argument(
        "--organisation", required=True,
        help="Client organisation name"
    )
    parser.add_argument(
        "--url", required=True,
        help="Website URL to be audited"
    )
    parser.add_argument(
        "--product", required=True,
        choices=list(PRODUCTS.keys()),
        help="Product to quote"
    )
    parser.add_argument(
        "--extras", default="",
        help="Comma-separated extra services: retest,nabespreking"
    )
    parser.add_argument(
        "--context", default="",
        help="Additional context from client email"
    )
    parser.add_argument(
        "--model", default="claude-sonnet-4-5-20250929",
        help="Anthropic model to use"
    )
    parser.add_argument(
        "--stdout", action="store_true",
        help="Print offerte to stdout instead of saving to file"
    )

    args = parser.parse_args()
    load_env()

    extras = [e.strip() for e in args.extras.split(",") if e.strip()]

    content = generate_offerte(
        args.client_name, args.organisation, args.url,
        args.product, extras, args.context, args.model
    )

    if args.stdout:
        print(content)
    else:
        filepath = save_offerte(content, args.organisation)
        print(f"Offerte saved to: {filepath}")
        print()
        print("Next steps:")
        print("1. Review the offerte in .tmp/offertes/")
        print("2. Copy to Notion template")
        print("3. Publish and share with client")


if __name__ == "__main__":
    main()

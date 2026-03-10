#!/usr/bin/env python3
"""
Content Calendar Tool — Proper Access

Manages the content calendar in Google Sheets. Supports adding articles,
updating status, listing items, and adding keyword research results.

Usage:
    python tools/update_content_calendar.py setup
    python tools/update_content_calendar.py add --title-nl "..." --audience "..." --priority "hoog"
    python tools/update_content_calendar.py update --id 3 --status "in productie"
    python tools/update_content_calendar.py list [--status idee] [--priority hoog]
    python tools/update_content_calendar.py add-keyword --question "..." --lang NL --category "EAA"

Requirements:
    - GOOGLE_SHEET_ID in .env
    - credentials.json in project root (Google OAuth)
    - google-auth, google-auth-oauthlib, google-api-python-client packages
"""

import argparse
import os
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

try:
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
    from googleapiclient.discovery import build
except ImportError:
    print("Error: Google API packages not installed.")
    print("Run: pip install google-auth google-auth-oauthlib google-api-python-client")
    sys.exit(1)


SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

CALENDAR_HEADERS = [
    "ID", "Titel (NL)", "Titel (EN)", "Doelgroep", "Categorie",
    "Kanaal", "Taal", "Prioriteit", "WCAG-criteria", "Status",
    "Publicatiedatum", "URL", "Notities"
]

KEYWORD_HEADERS = [
    "Vraag", "Taal", "Bron", "Categorie", "Zoekvolume",
    "Concurrentie", "Artikelidee", "Verwerkt"
]


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


def get_credentials():
    """Get or refresh Google OAuth credentials."""
    creds = None
    token_path = PROJECT_ROOT / "token.json"
    creds_path = PROJECT_ROOT / "credentials.json"

    if token_path.exists():
        creds = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not creds_path.exists():
                print(f"Error: credentials.json not found at {creds_path}")
                print("Download it from Google Cloud Console > APIs & Services > Credentials")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(creds_path), SCOPES)
            creds = flow.run_local_server(port=0)

        with open(token_path, "w") as token:
            token.write(creds.to_json())

    return creds


def get_sheet_service():
    """Get an authenticated Google Sheets service."""
    creds = get_credentials()
    return build("sheets", "v4", credentials=creds)


def get_sheet_id():
    """Get the Google Sheet ID from environment."""
    sheet_id = os.environ.get("GOOGLE_SHEET_ID")
    if not sheet_id:
        print("Error: GOOGLE_SHEET_ID not found in environment or .env file")
        print("Create a Google Sheet and add its ID to .env")
        sys.exit(1)
    return sheet_id


def setup_sheets(service, sheet_id):
    """Create the Content Calendar and Keyword Research sheets with headers."""
    spreadsheet = service.spreadsheets().get(spreadsheetId=sheet_id).execute()
    existing_sheets = [s["properties"]["title"] for s in spreadsheet.get("sheets", [])]

    requests = []

    # Add Content Calendar sheet
    if "Content Calendar" not in existing_sheets:
        requests.append({
            "addSheet": {"properties": {"title": "Content Calendar"}}
        })

    # Add Keyword Research sheet
    if "Keyword Research" not in existing_sheets:
        requests.append({
            "addSheet": {"properties": {"title": "Keyword Research"}}
        })

    if requests:
        service.spreadsheets().batchUpdate(
            spreadsheetId=sheet_id, body={"requests": requests}
        ).execute()

    # Write headers
    service.spreadsheets().values().update(
        spreadsheetId=sheet_id,
        range="Content Calendar!A1",
        valueInputOption="RAW",
        body={"values": [CALENDAR_HEADERS]}
    ).execute()

    service.spreadsheets().values().update(
        spreadsheetId=sheet_id,
        range="Keyword Research!A1",
        valueInputOption="RAW",
        body={"values": [KEYWORD_HEADERS]}
    ).execute()

    # Remove default Sheet1 if our sheets were created
    if requests and "Sheet1" in existing_sheets:
        sheet1_id = None
        spreadsheet = service.spreadsheets().get(spreadsheetId=sheet_id).execute()
        for s in spreadsheet.get("sheets", []):
            if s["properties"]["title"] == "Sheet1":
                sheet1_id = s["properties"]["sheetId"]
                break
        if sheet1_id is not None:
            service.spreadsheets().batchUpdate(
                spreadsheetId=sheet_id,
                body={"requests": [{"deleteSheet": {"sheetId": sheet1_id}}]}
            ).execute()

    print("Sheets setup complete!")
    print(f"  - Content Calendar: headers written")
    print(f"  - Keyword Research: headers written")


def get_next_id(service, sheet_id):
    """Get the next available ID for the Content Calendar."""
    result = service.spreadsheets().values().get(
        spreadsheetId=sheet_id,
        range="Content Calendar!A:A"
    ).execute()
    values = result.get("values", [])
    if len(values) <= 1:  # Only header or empty
        return 1
    # Find max ID
    max_id = 0
    for row in values[1:]:
        if row and row[0].isdigit():
            max_id = max(max_id, int(row[0]))
    return max_id + 1


def add_article(service, sheet_id, args):
    """Add a new article to the Content Calendar."""
    next_id = get_next_id(service, sheet_id)

    row = [
        str(next_id),
        args.title_nl or "",
        args.title_en or "",
        args.audience or "",
        args.category or "",
        args.channel or "blog",
        args.lang or "NL",
        args.priority or "midden",
        args.wcag or "",
        "idee",
        args.date or "",
        "",
        args.notes or "",
    ]

    service.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range="Content Calendar!A:M",
        valueInputOption="RAW",
        body={"values": [row]}
    ).execute()

    print(f"Article added with ID {next_id}: {args.title_nl or args.title_en}")


def update_article(service, sheet_id, args):
    """Update an existing article's status or other fields."""
    result = service.spreadsheets().values().get(
        spreadsheetId=sheet_id,
        range="Content Calendar!A:M"
    ).execute()
    values = result.get("values", [])

    target_row = None
    for i, row in enumerate(values):
        if row and row[0] == str(args.id):
            target_row = i + 1  # 1-indexed
            break

    if target_row is None:
        print(f"Error: Article with ID {args.id} not found")
        sys.exit(1)

    updates = []
    if args.status:
        updates.append(("J", args.status))
    if args.url:
        updates.append(("L", args.url))
    if args.date:
        updates.append(("K", args.date))
    if args.notes:
        updates.append(("M", args.notes))

    for col, value in updates:
        service.spreadsheets().values().update(
            spreadsheetId=sheet_id,
            range=f"Content Calendar!{col}{target_row}",
            valueInputOption="RAW",
            body={"values": [[value]]}
        ).execute()

    print(f"Article {args.id} updated: {', '.join(f'{col}={val}' for col, val in updates)}")


def list_articles(service, sheet_id, args):
    """List articles from the Content Calendar, optionally filtered."""
    result = service.spreadsheets().values().get(
        spreadsheetId=sheet_id,
        range="Content Calendar!A:M"
    ).execute()
    values = result.get("values", [])

    if len(values) <= 1:
        print("No articles in the Content Calendar yet.")
        return

    headers = values[0]
    articles = values[1:]

    # Apply filters
    filtered = articles
    if args.status:
        filtered = [r for r in filtered if len(r) > 9 and r[9].lower() == args.status.lower()]
    if args.priority:
        filtered = [r for r in filtered if len(r) > 7 and r[7].lower() == args.priority.lower()]
    if args.audience:
        filtered = [r for r in filtered if len(r) > 3 and r[3].lower() == args.audience.lower()]

    if not filtered:
        print("No articles match the given filters.")
        return

    print(f"Found {len(filtered)} article(s):\n")
    for row in filtered:
        # Pad row to full length
        row = row + [""] * (len(CALENDAR_HEADERS) - len(row))
        print(f"  [{row[0]}] {row[1] or row[2]}")
        print(f"      Doelgroep: {row[3]} | Prioriteit: {row[7]} | Status: {row[9]}")
        print(f"      Kanaal: {row[5]} | Taal: {row[6]}")
        if row[12]:
            print(f"      Notities: {row[12]}")
        print()


def add_keyword(service, sheet_id, args):
    """Add a keyword research result."""
    row = [
        args.question,
        args.lang or "NL",
        args.source or "",
        args.category or "",
        args.volume or "midden",
        args.competition or "",
        args.article_idea or "",
        "nee",
    ]

    service.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range="Keyword Research!A:H",
        valueInputOption="RAW",
        body={"values": [row]}
    ).execute()

    print(f"Keyword added: {args.question}")


def seed_initial_articles(service, sheet_id):
    """Seed the content calendar with the initial 20 article ideas."""
    articles = [
        ["De European Accessibility Act is nu van kracht — wat moet jij vandaag doen?", "", "bedrijfsleven", "EAA", "blog", "NL", "hoog", "", "idee", "", "", "Actueel, inspelen op urgentie"],
        ["Hoeveel kost een WCAG-audit echt? En waar betaal je eigenlijk voor?", "The real cost of a WCAG audit", "bedrijfsleven", "kosten", "blog", "NL", "hoog", "", "idee", "", "", "Veel gezocht, weinig transparantie in de markt"],
        ["Toegankelijke webshop: 10 fouten die je conversie killen", "", "bedrijfsleven", "e-commerce", "blog", "NL", "hoog", "", "idee", "", "", "Vervolg op Frankwatching webshop-artikel"],
        ["Onevenredige last claimen bij de EAA — wanneer kan dat (en wanneer niet)?", "", "bedrijfsleven", "EAA", "blog", "NL", "midden", "", "idee", "", "", ""],
        ["Je hebt een toegankelijkheidsrapport ontvangen. En nu?", "", "bedrijfsleven", "audit", "blog", "NL", "hoog", "", "idee", "", "", "Direct relevant voor potentiële klanten"],
        ["WCAG voor product owners: wat je moet weten zonder zelf te hoeven coderen", "", "product owners", "WCAG", "blog", "NL", "hoog", "", "idee", "", "", "Unieke invalshoek, weinig concurrentie"],
        ["Waarom een overlay-tool geen toegankelijkheid oplevert", "", "bedrijfsleven", "tools", "blog", "NL", "hoog", "", "idee", "", "", "Controversieel, veel zoekvolume"],
        ["Toegankelijkheidsverklaring schrijven: stap-voor-stap handleiding", "", "overheid", "EAA", "blog", "NL", "midden", "", "idee", "", "", ""],
        ["Hoe kies je een goed toegankelijkheidsbureau? 7 vragen die je moet stellen", "", "bedrijfsleven", "audit", "blog", "NL", "midden", "", "idee", "", "", "Positioneert Proper Access indirect"],
        ["De 5 meest voorkomende toegankelijkheidsproblemen op Nederlandse websites", "", "bedrijfsleven", "technisch", "blog", "NL", "hoog", "", "idee", "", "", "Toont expertise, hoog zoekvolume"],
        ["", "EAA vs. ADA: What European businesses need to know", "bedrijfsleven", "EAA", "medium", "EN", "midden", "", "idee", "", "", "Internationale markt"],
        ["", "WCAG 2.2 AA: A practical checklist for e-commerce", "bedrijfsleven", "WCAG", "medium", "EN", "midden", "", "idee", "", "", ""],
        ["", "Why accessibility overlays don't work (and what does)", "bedrijfsleven", "tools", "medium", "EN", "midden", "", "idee", "", "", ""],
        ["", "How to prioritize WCAG fixes when everything seems broken", "developers", "WCAG", "medium", "EN", "midden", "", "idee", "", "", ""],
        ["", "The real cost of web accessibility — and the cost of ignoring it", "bedrijfsleven", "kosten", "medium", "EN", "midden", "", "idee", "", "", ""],
        ["Accessible forms: de ultieme handleiding", "", "developers", "technisch", "blog", "NL", "midden", "1.3.1, 3.3.1, 3.3.2, 4.1.2", "idee", "", "", "Technische deep-dive"],
        ["ARIA: wanneer wel, wanneer niet, en waarom het zo vaak fout gaat", "", "developers", "technisch", "blog", "NL", "midden", "4.1.2", "idee", "", "", ""],
        ["Keyboard navigatie testen: een praktische handleiding", "", "developers", "technisch", "blog", "NL", "midden", "2.1.1, 2.4.7", "idee", "", "", ""],
        ["Kleurcontrast: meer dan alleen een ratio", "", "developers", "technisch", "blog", "NL", "midden", "1.4.3, 1.4.11", "idee", "", "", ""],
        ["Custom components toegankelijk maken: dropdown, modal, tabs", "", "developers", "technisch", "blog", "NL", "midden", "4.1.2, 2.1.1", "idee", "", "", ""],
    ]

    rows = []
    for i, article in enumerate(articles, start=1):
        rows.append([str(i)] + article)

    service.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range="Content Calendar!A:M",
        valueInputOption="RAW",
        body={"values": rows}
    ).execute()

    print(f"Seeded {len(rows)} article ideas into the Content Calendar.")


def main():
    parser = argparse.ArgumentParser(description="Manage the Proper Access Content Calendar")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # Setup command
    setup_parser = subparsers.add_parser("setup", help="Create sheets and write headers")
    setup_parser.add_argument("--seed", action="store_true", help="Also seed initial 20 article ideas")

    # Add command
    add_parser = subparsers.add_parser("add", help="Add a new article idea")
    add_parser.add_argument("--title-nl", help="Dutch title")
    add_parser.add_argument("--title-en", help="English title")
    add_parser.add_argument("--audience", required=True, help="Target audience")
    add_parser.add_argument("--category", help="Category (EAA/WCAG/technisch/kosten/audit/tools/e-commerce)")
    add_parser.add_argument("--channel", default="blog", help="Publication channel")
    add_parser.add_argument("--lang", default="NL", help="Primary language (NL/EN)")
    add_parser.add_argument("--priority", default="midden", help="Priority (hoog/midden/laag)")
    add_parser.add_argument("--wcag", help="Related WCAG criteria")
    add_parser.add_argument("--date", help="Planned publication date (YYYY-MM-DD)")
    add_parser.add_argument("--notes", help="Additional notes")

    # Update command
    update_parser = subparsers.add_parser("update", help="Update an existing article")
    update_parser.add_argument("--id", required=True, type=int, help="Article ID")
    update_parser.add_argument("--status", help="New status (idee/in productie/review/gepubliceerd)")
    update_parser.add_argument("--url", help="Published article URL")
    update_parser.add_argument("--date", help="Publication date (YYYY-MM-DD)")
    update_parser.add_argument("--notes", help="Additional notes")

    # List command
    list_parser = subparsers.add_parser("list", help="List articles")
    list_parser.add_argument("--status", help="Filter by status")
    list_parser.add_argument("--priority", help="Filter by priority")
    list_parser.add_argument("--audience", help="Filter by audience")

    # Add keyword command
    kw_parser = subparsers.add_parser("add-keyword", help="Add a keyword research result")
    kw_parser.add_argument("--question", required=True, help="The question people ask")
    kw_parser.add_argument("--lang", default="NL", help="Language (NL/EN)")
    kw_parser.add_argument("--source", help="Source (Google PAA/Autocomplete/Reddit/LinkedIn)")
    kw_parser.add_argument("--category", help="Category")
    kw_parser.add_argument("--volume", default="midden", help="Search volume (hoog/midden/laag)")
    kw_parser.add_argument("--competition", help="Competition level (veel/weinig/geen)")
    kw_parser.add_argument("--article-idea", help="Suggested article title")

    # Seed command
    subparsers.add_parser("seed", help="Seed the initial 20 article ideas")

    args = parser.parse_args()
    load_env()

    service = get_sheet_service()
    sheet_id = get_sheet_id()

    if args.command == "setup":
        setup_sheets(service, sheet_id)
        if args.seed:
            seed_initial_articles(service, sheet_id)
    elif args.command == "add":
        if not args.title_nl and not args.title_en:
            print("Error: Provide at least --title-nl or --title-en")
            sys.exit(1)
        add_article(service, sheet_id, args)
    elif args.command == "update":
        update_article(service, sheet_id, args)
    elif args.command == "list":
        list_articles(service, sheet_id, args)
    elif args.command == "add-keyword":
        add_keyword(service, sheet_id, args)
    elif args.command == "seed":
        seed_initial_articles(service, sheet_id)


if __name__ == "__main__":
    main()

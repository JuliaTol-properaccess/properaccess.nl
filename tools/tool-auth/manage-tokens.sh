#!/bin/bash
# Token beheer voor Proper Access tools
# Gebruik: ./manage-tokens.sh [aanmaken|lijst|verwijderen]

API="https://tool-auth.juliatol.workers.dev"
SECRET="W(53f89#B#bg*EQV"

case "$1" in
  aanmaken)
    read -p "Bedrijfsnaam: " company
    read -p "Aantal dagen (standaard 30): " days
    days=${days:-30}

    response=$(curl -s -X POST "$API/tokens" \
      -H "Authorization: Bearer $SECRET" \
      -H "Content-Type: application/json" \
      -d "{\"company\": \"$company\", \"days\": $days}")

    token=$(echo "$response" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
    expires=$(echo "$response" | grep -o '"expires":"[^"]*"' | cut -d'"' -f4)

    echo ""
    echo "Token aangemaakt voor: $company"
    echo "Verloopt op: $expires"
    echo ""
    echo "Stuur deze link naar de klant:"
    echo "https://www.properaccess.nl/tools/alt-tekst-checker/?token=$token"
    echo ""
    ;;

  lijst)
    echo "Actieve tokens:"
    echo ""
    curl -s -H "Authorization: Bearer $SECRET" "$API/tokens" | python3 -m json.tool
    ;;

  verwijderen)
    read -p "Token (pa_...): " token
    curl -s -X DELETE -H "Authorization: Bearer $SECRET" "$API/tokens/$token"
    echo ""
    echo "Token verwijderd."
    ;;

  *)
    echo "Gebruik:"
    echo "  ./manage-tokens.sh aanmaken     - Maak een nieuw token aan"
    echo "  ./manage-tokens.sh lijst        - Toon alle actieve tokens"
    echo "  ./manage-tokens.sh verwijderen  - Verwijder een token"
    ;;
esac

# Platformprofiel: wat leveranciers aanleveren

Elk platform uit het overzicht op /platform-rapporten/ kan een eigen pagina krijgen op /platformen/<naam>/. Leveranciers leveren daarvoor een beschrijving aan. De toegankelijkheidsgegevens (rapport, geldigheid, afgekeurde succescriteria, Logius-checklist) vullen wij zelf in uit ons overzicht. Daar heeft de leverancier geen invloed op.

## Wat we vragen

| Veld | Verplicht | Wat |
|---|---|---|
| Naam van het platform | ja | Zoals die in ons overzicht staat, of de juiste naam als die daar fout staat |
| Samenvatting | ja | Eén of twee zinnen: wat het platform is. Maximaal 300 tekens |
| Functionaliteiten | ja | Een lijst met wat je met het platform kunt doen. Maximaal 10 punten, één zin per punt |
| Voor wie | nee | Soorten organisaties die het gebruiken, bijvoorbeeld gemeenten of waterschappen |
| Logo | nee | SVG, of PNG met transparante achtergrond van minstens 480 pixels breed. Het logo moet leesbaar zijn op wit |
| Website | nee | Link naar de productpagina |
| Toegankelijkheidsverklaring | nee | Link naar de verklaring of naar het Register |

## Hoe we ermee omgaan

- We plaatsen de tekst onder vermelding "De beschrijving komt van <leverancier>". Op de pagina staat dat Proper Access de functionaliteiten niet heeft getest.
- We halen wervende taal en superlatieven weg, en klantnamen die we niet kunnen controleren.
- Betalen voor een plek of voor een betere positie kan niet.
- Een platform zonder aangeleverde beschrijving blijft in het overzicht staan en houdt zijn pagina.

## Verwerken

Zet de aangeleverde tekst in `data/platform_profielen.yaml`. De velden staan bovenaan dat bestand uitgelegd. De naam bij `platform` moet precies gelijk zijn aan de naam in `data/platform_rapporten.yaml`, anders vindt de pagina het rapport niet. Een logo zet je in `static/images/platformen/` en je noemt het pad bij `logo`. De pagina en de link in de tabel ontstaan dan vanzelf.

Elk platform uit het overzicht heeft al een pagina. Voor 42 platforms staat er een korte beschrijving die we op 7 november 2026 hebben samengevat van de platformpagina's op digitoegankelijk.nl; die profielen hebben een `bron_url`. De andere platforms tonen een plek voor tekst en krijgen een noindex tot er een samenvatting is.

Levert een leverancier tekst aan, vervang dan de samenvatting, zet `aangeleverd_op` erbij en haal `bron_url` weg.

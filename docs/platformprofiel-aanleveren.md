# Platformprofiel: wat leveranciers aanleveren

Elk platform uit het overzicht op /platform-rapporten/ kan een eigen pagina krijgen op /platformen/<naam>/. Leveranciers leveren daarvoor een beschrijving aan. De toegankelijkheidsgegevens (rapport, geldigheid, afgekeurde succescriteria, Logius-checklist) vullen wij zelf in uit ons overzicht. Daar heeft de leverancier geen invloed op.

## Wat we vragen

| Veld | Verplicht | Wat |
|---|---|---|
| Naam van het platform | ja | Zoals die in ons overzicht staat, of de juiste naam als die daar fout staat |
| Samenvatting | ja | Eén of twee zinnen: wat het platform is. Maximaal 300 tekens |
| Functionaliteiten | ja | Een lijst met wat je met het platform kunt doen. Maximaal 10 punten, één zin per punt |
| Voor wie | nee | Soorten organisaties die het gebruiken, bijvoorbeeld gemeenten of waterschappen |
| Website | nee | Link naar de productpagina |
| Toegankelijkheidsverklaring | nee | Link naar de verklaring of naar het Register |

## Hoe we ermee omgaan

- We plaatsen de tekst onder vermelding "De beschrijving komt van <leverancier>". Op de pagina staat dat Proper Access de functionaliteiten niet heeft getest.
- We halen wervende taal en superlatieven weg, en klantnamen die we niet kunnen controleren.
- Betalen voor een plek of voor een betere positie kan niet.
- Een platform zonder aangeleverde beschrijving blijft gewoon in het overzicht staan.

## Verwerken

Zet de aangeleverde tekst in `data/platform_profielen.yaml`. De velden staan bovenaan dat bestand uitgelegd. De naam bij `platform` moet precies gelijk zijn aan de naam in `data/platform_rapporten.yaml`, anders vindt de pagina het rapport niet. De pagina en de link in de tabel ontstaan dan vanzelf.

De twee profielen met `voorbeeld: true` (iBabs en Pleio) zijn alleen zichtbaar op de lokale server. Verwijder ze zodra de eerste echte profielen binnen zijn.

-- Vragen uit de chat op properaccess.nl
--
-- Wat er in komt: de vraag die de bezoeker typte, en het tijdstip.
-- Wat er niet in komt: IP-adres, een hash van een IP-adres, een cookie, een
-- gespreksnummer, het antwoord van de assistent en de pagina waar de vraag is
-- gesteld. Besluit van Julia, 10 oktober 2026.
--
-- Het tijdstip is er omdat de bewaartermijn van 90 dagen zonder dat niet af te
-- dwingen is. Twee vragen van dezelfde bezoeker zijn er niet aan te herkennen:
-- er staat geen sleutel in die twee rijen aan elkaar knoopt.

CREATE TABLE IF NOT EXISTS vraag (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  moment  TEXT NOT NULL,   -- ISO 8601, UTC
  vraag   TEXT NOT NULL    -- de laatste vraag van de bezoeker, maximaal 500 tekens
);

-- Het opschonen en het rapport filteren allebei op moment.
CREATE INDEX IF NOT EXISTS vraag_moment ON vraag (moment);

-- Later uit te breiden zonder de bestaande rijen te raken. Besluit Julia over
-- het antwoord staat nog open; komt dat er, dan is dit de hele wijziging. In
-- SQLite zet ALTER TABLE ... ADD COLUMN een kolom met NULL achter de bestaande
-- rijen en herschrijft de tabel niet:
--
--   ALTER TABLE vraag ADD COLUMN antwoord TEXT;
--   ALTER TABLE vraag ADD COLUMN link TEXT;
--   ALTER TABLE vraag ADD COLUMN bronpagina TEXT;
--
-- De Worker leest de kolommen van vraag nooit op positie (geen SELECT *), dus
-- een extra kolom raakt de schrijfregel en het rapport niet.

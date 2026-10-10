-- Logboek van de chat op properaccess.nl
--
-- Wat er in komt: de vraag die de bezoeker typte, het antwoord van de
-- assistent, de links die in dat antwoord stonden, het tijdstip, de taal en de
-- pagina waar de vraag gesteld is. Besluit van Julia, 10 oktober 2026: het
-- antwoord en de link gaan juist wel in het logboek, zodat we achteraf kunnen
-- controleren of het antwoord klopt.
--
-- Wat er niet in komt: IP-adres, een hash van een IP-adres, een cookie en een
-- gespreksnummer. Twee vragen van dezelfde bezoeker zijn niet aan elkaar te
-- knopen: er staat geen sleutel in die twee rijen verbindt. Dat deel van het
-- besluit staat.
--
-- Het tijdstip is er omdat de bewaartermijn van 90 dagen zonder dat niet af te
-- dwingen is. De Worker haalt een e-mailadres en een telefoonnummer uit de
-- vraag en uit het antwoord voordat hij de rij wegschrijft (anonimiseer() in
-- worker.js); een bezoeker die zijn gegevens toch intypt, staat er dus niet in.

CREATE TABLE IF NOT EXISTS vraag (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  moment    TEXT NOT NULL,   -- ISO 8601, UTC
  taal      TEXT,            -- "nl" of "en"
  pagina    TEXT,            -- pad binnen de site, zonder querystring, zonder #
  vraag     TEXT NOT NULL,   -- de laatste vraag van de bezoeker, maximaal 500 tekens
  antwoord  TEXT,            -- het antwoord van de assistent, maximaal 4000 tekens.
                             -- Leeg als de Claude API een fout gaf: de vraag
                             -- bewaren we dan wel, want die hoort op de
                             -- verbeterlijst.
  links     TEXT             -- de URL's uit het antwoord, gescheiden door een
                             -- spatie. Leeg als er geen link in stond.
);

-- Het opschonen en het rapport filteren allebei op moment.
CREATE INDEX IF NOT EXISTS vraag_moment ON vraag (moment);

-- Bestaat de tabel al in de oude vorm (alleen id, moment, vraag), dan is dit de
-- hele migratie. In SQLite zet ALTER TABLE ... ADD COLUMN een kolom met NULL
-- achter de bestaande rijen en herschrijft de tabel niet:
--
--   ALTER TABLE vraag ADD COLUMN taal TEXT;
--   ALTER TABLE vraag ADD COLUMN pagina TEXT;
--   ALTER TABLE vraag ADD COLUMN antwoord TEXT;
--   ALTER TABLE vraag ADD COLUMN links TEXT;
--
-- Daarom staat er op de nieuwe kolommen geen NOT NULL: anders zou dezelfde
-- schema.sql niet op beide situaties passen. De Worker vult taal altijd.
-- De Worker leest de kolommen nooit op positie (geen SELECT *), dus een extra
-- kolom raakt de schrijfregel en het rapport niet.

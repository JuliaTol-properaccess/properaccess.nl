-- Bezoekmeting properaccess.nl
-- Geen IP-adressen. Alleen de organisatie die bij een netwerk hoort.

CREATE TABLE IF NOT EXISTS bezoek (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  moment          TEXT NOT NULL,   -- ISO 8601
  pad             TEXT NOT NULL,
  verwijzer       TEXT,            -- alleen het domein
  organisatie     TEXT,            -- naam uit RDAP of reverse DNS
  soort           TEXT NOT NULL,   -- bedrijf | provider | hosting | eigen | onbekend
  asn             INTEGER,
  as_organisatie  TEXT,
  land            TEXT
);

CREATE INDEX IF NOT EXISTS bezoek_moment ON bezoek (moment);
CREATE INDEX IF NOT EXISTS bezoek_soort ON bezoek (soort, moment);

-- Opzoekresultaten per netwerkblok, zodat we niet bij elke paginaweergave
-- opnieuw bij RIPE en DNS langsgaan. De sleutel is een /24 of /48, dus een
-- netwerk en niet een bezoeker.
CREATE TABLE IF NOT EXISTS netwerk_cache (
  prefix       TEXT PRIMARY KEY,
  organisatie  TEXT,
  soort        TEXT NOT NULL,
  gezien_op    TEXT NOT NULL
);

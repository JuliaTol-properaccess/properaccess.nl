# Wekelijkse SEO-, AEO- en AI-vindbaarheidscontrole

Deze controle combineert technische SEO, antwoordvriendelijke content en handmatige
metingen van AI-citaten. De controle publiceert of herschrijft geen content.

## Lokaal uitvoeren

```bash
npm run seo:audit
```

Daarmee gebeurt het volgende:

1. De volledige productie-build draait met `npm run build`.
2. De gegenereerde HTML, sitemap, robots.txt, `llms.txt` en interne links worden gecontroleerd.
3. De vaste AI-vragen uit `config/seo/ai-queries.json` komen in het rapport.
4. Het rapport wordt geschreven naar `.audit/seo-aeo-ai-audit.md` en `.audit/seo-aeo-ai-audit.json`.

De rapportmap staat in `.gitignore` en wordt niet automatisch gecommit.

## Lighthouse

Lighthouse blijft de technische bron voor performance, SEO en best practices. Lokaal
kan het worden uitgevoerd als het commando beschikbaar is:

```bash
lighthouse https://www.properaccess.nl/ \
  --only-categories=seo,performance,best-practices \
  --output=html --output-path=.audit/lighthouse.html
```

De wekelijkse GitHub Actions-run voert Lighthouse uit op de live site en bewaart het
rapport als workflow-artifact.

## Handmatige AI-controle

De queryset bevat tien vragen in het Nederlands en Engels. Test elke vraag in:

- ChatGPT met zoeken ingeschakeld;
- Perplexity;
- Google Search, inclusief AI Overview als die verschijnt.

Noteer per vraag:

- of Proper Access wordt genoemd;
- welke URL wordt geciteerd;
- welke concurrenten worden genoemd;
- of de gebruikte bron een blog, dienstpagina, onderzoekspagina of externe bron is;
- welke formulering of passage de AI gebruikt.

Een afwezigheid is geen absolute nulmeting: antwoorden verschillen per platform,
locatie, account en moment. Kijk daarom vooral naar trends over meerdere weken.

## Wat de automatische controle bewust niet doet

- Geen automatische publicatie of herschrijving van content.
- Geen login bij Search Console, ChatGPT of Perplexity.
- Geen claim dat `llms.txt`, FAQ-schema of een score op zichzelf AI-citatie veroorzaakt.
- Geen inhoudelijk oordeel over wettelijke claims; daarvoor blijft deskundige controle nodig.

## Prioriteit van bevindingen

1. Indexatieblokkades, ontbrekende sitemap of kapotte interne links.
2. Ontbrekende title, description, canonical of H1 op indexeerbare pagina's.
3. Ontbrekende of foutieve structured data.
4. Onduidelijke antwoordstructuur, ontbrekende bronvermelding of zwakke interne verbanden.
5. Nieuwe kansen uit de handmatige AI-querycontrole.

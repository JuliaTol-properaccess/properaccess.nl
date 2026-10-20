# properaccess.nl

De website van Proper Access: een tweetalige Hugo-site met Tailwind CSS, eigen
tools, kenniscontent, formulieren en statische auditrapporten.

## Snel starten

Vereist:

- Hugo Extended **0.168.0**;
- Node.js;
- Go;
- Git.

```bash
npm install
npm run dev
```

Open daarna <http://localhost:1313/>.

Controleer een productie-build met:

```bash
npm run build
```

## Werken aan de site

Werk op een eigen branch vanaf een actuele `main`. Maak een pull request, stage
alleen bestanden van de eigen taak en voeg bij layoutwijzigingen screenshots van
vóór en na toe. Een PR moet de build, de relevante toegankelijkheidscontrole en
de security/robuustheidscontrole doorstaan.

Na Julia's expliciete `mag live` wordt de PR gemerged en gecontroleerd of GitHub
Actions de site succesvol heeft gepubliceerd.

## Documentatie

De centrale technische projectkennis staat in
[docs/projectkennis.md](docs/projectkennis.md). Daar staan architectuur, lokale
workflow, deployketen, reviewafspraken, toegangseisen en het stabilisatieplan.

De praktische handleiding voor handmatig contentbeheer staat in
[docs/website-beheer.md](docs/website-beheer.md).

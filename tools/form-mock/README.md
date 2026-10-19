# Lokale formulier-mock

Deze Worker is uitsluitend bedoeld voor lokale browser-QA. Er worden geen
CRM-, e-mail-, GitHub- of andere externe services aangeroepen.

## Starten

Terminal 1, vanuit deze map:

```sh
npx wrangler dev --config wrangler.json
```

Terminal 2, vanuit de repository-root:

```sh
npm run dev
```

Open daarna een formulier met de lokale endpoint als queryparameter, bijvoorbeeld:

```text
http://localhost:1313/contact/?pa_form_endpoint=http%3A%2F%2Flocalhost%3A8787%2Fsubmit%3Fscenario%3Dsuccess
```

De override werkt alleen op `localhost` en `127.0.0.1`; productiepagina's negeren
de parameter. Gebruik `scenario=error` voor de foutmelding. De exacte laatste
request en payload zijn opvraagbaar via `http://localhost:8787/__last-request`.

# Proper Access intake-Worker (uit)

Deze Worker verwerkte tot 20 oktober 2026 het intakeformulier van `properaccess.nl/intake`: hij maakte een issue in `JuliaTol-properaccess/audit-planning`, zette die op het auditbord en mailde de klant en Proper Access.

De intake loopt nu via het portaal (`https://portaal.properaccess.nl/intake`). Het CRM maakt bij een geaccepteerde offerte een project in het portaal en de klant krijgt een uitnodiging voor de intake. De pagina `properaccess.nl/intake` verwijst naar het portaal.

De Worker blijft bestaan zodat een oude pagina in een cache een duidelijk antwoord krijgt: elke aanvraag geeft `410` met de link naar het portaal. De oude code staat in de git-historie, onder `cloudflare/intake/src/worker.js`.

Deployen: `npx wrangler deploy` in deze map.

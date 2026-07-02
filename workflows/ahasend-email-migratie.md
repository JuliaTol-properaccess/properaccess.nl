# E-mail verhuizen naar AhaSend (EU)

Instructie voor het afronden van de overstap van Resend en Formspree naar AhaSend.
De code is al aangepast (zie "Wat er in de code is gedaan"). Wat jij nog moet doen staat
onder "Jouw stappen".

## Waarom

Alle website-e-mail liep via Amerikaanse diensten: Resend (quiz-opvolgmails) en Formspree
(meldingsmails naar jou). AhaSend is een Nederlandse BV op EU-infrastructuur, data blijft in
Europa. Na deze overstap loopt alle e-mail via één EU-dienst.

## Nieuwe architectuur

```
formulier op de site
   └─ POST naar Cloudflare Worker (pipedrive-forms)
        ├─ doorsturen naar CRM (crm.properaccess.nl)
        ├─ AhaSend: meldingsmail naar juliatol@properaccess.nl (elke inzending)
        └─ AhaSend: gepersonaliseerde opvolgmail naar quizdeelnemer (alleen bij quiz)
```

Formspree is helemaal weg. De browser praat alleen nog met de Worker, de AhaSend-key staat
veilig server-side.

## Wat er in de code is gedaan

- `tools/pipedrive-forms/worker.js`: Resend-aanroep vervangen door AhaSend. Nieuwe functies
  `sendViaAhaSend()` en `sendNotificationEmail()`. De meldingsmail gaat nu voor elke inzending,
  met de afzender als reply-to zodat je direct kunt antwoorden.
- `static/js/form-submit.js`: het Formspree-blok is verwijderd. Contact, nieuwsbrief, offerte en
  quiz lopen nu volledig via de Worker.
- `layouts/_default/homepage.html`, `layouts/voor_wie/ecommerce.html`, `layouts/quickscan/single.html`:
  de drie mini-auditformulieren posten niet meer naar Formspree, maar via de Worker (`paFormSubmit`).
  Deze leads komen daardoor voortaan ook in je CRM. De redirect naar de bedanktpagina blijft.

Verzendadres: `noreply@properaccess.nl` (hoofddomein, ongewijzigd).
Interne ontvanger: `juliatol@properaccess.nl`.

## Jouw stappen

### 1. Domein verifiëren in AhaSend

1. Log in op het AhaSend-dashboard.
2. Ga naar Domains en open `properaccess.nl` (of voeg het toe als het er nog niet staat).
3. Klik op "Check DNS". SPF en Return-Path staan al goed in Cloudflare, die worden groen.
4. DKIM staat nog niet in de DNS. Neem de DKIM-records over die AhaSend toont (twee CNAME's,
   meestal `managed._domainkey` en `managed2._domainkey`) en zet die in Cloudflare DNS.
   - Belangrijk: zet deze records op "DNS only" (grijze wolk, niet oranje). Proxyt Cloudflare ze,
     dan mislukt de DKIM-validatie.
5. Wacht 5 tot 30 minuten en klik opnieuw op "Check DNS" tot SPF, DKIM en DMARC allemaal geldig zijn.

### 2. API-key en account-id ophalen

1. Dashboard: API Keys, klik "Create API Key", kies scope `messages:send:all`.
2. Kopieer de key (begint met `aha-sk-`). Deze zie je maar één keer, bewaar hem veilig.
3. Noteer je account-id (de UUID, staat in de dashboard-URL of bij je accountinstellingen).

### 3. Secrets zetten in de Worker

```bash
cd tools/pipedrive-forms
echo "aha-sk-...jouw-key..." | npx wrangler secret put AHASEND_API_KEY --name pipedrive-forms
echo "jouw-account-uuid"     | npx wrangler secret put AHASEND_ACCOUNT_ID --name pipedrive-forms
```

`WEBSITE_FORM_SECRET` blijft ongewijzigd staan, die hoef je niet opnieuw te zetten.

### 4. Worker deployen

```bash
cd tools/pipedrive-forms
npx wrangler deploy worker.js --name pipedrive-forms
```

### 5. Testen

Doe elke test op de live site en controleer de inbox van `juliatol@properaccess.nl`:

1. Contactformulier versturen: je krijgt een meldingsmail, met het adres van de afzender als reply-to.
2. Een quiz afmaken met e-mailadres: de deelnemer krijgt de opvolgmail, jij krijgt de melding.
3. Mini-auditformulier op de homepage, op de e-commercepagina en op `/quickscan/`: elk stuurt door
   naar de bedanktpagina en levert een melding op.
4. Check in het AhaSend-dashboard bij Messages of alles als "delivered" staat.

### 6. Opruimen (pas nadat alles werkt)

1. Resend: account/API-key opzeggen.
2. Cloudflare DNS: het oude `resend._domainkey` TXT-record verwijderen.
3. Formspree: account opzeggen (het gebruikte twee endpoints, `xjgeyqej` en `xvzwowrw`).

## Terugdraaien

De wijziging staat op een aparte branch en is nog niet gepusht. Werkt er iets niet zoals verwacht,
dan draai je de branch terug (of `git revert`) voordat je merget. De oude Worker had wel
`RESEND_API_KEY` nodig; die stond als secret nog in Cloudflare.

## Checklist

- [ ] DKIM-records in Cloudflare (DNS only), domein groen in AhaSend
- [ ] `AHASEND_API_KEY` als secret gezet
- [ ] `AHASEND_ACCOUNT_ID` als secret gezet
- [ ] Worker gedeployed
- [ ] Contactformulier getest
- [ ] Quiz getest (deelnemer + melding)
- [ ] Drie mini-auditformulieren getest
- [ ] Resend opgezegd
- [ ] Oud `resend._domainkey` DNS-record verwijderd
- [ ] Formspree opgezegd

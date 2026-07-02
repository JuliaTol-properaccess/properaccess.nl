# Quiz E-mail Opvolging

> Let op: sinds de EU-migratie loopt alle e-mail via AhaSend, niet meer via Resend of Formspree.
> Zie `workflows/ahasend-email-migratie.md` voor de actuele architectuur en de setup-stappen.
> De meldingsmail naar Julia gaat nu via de Worker (AhaSend), niet meer via Formspree.

## Doel
Wanneer een quizdeelnemer een e-mailadres invult na het afronden van een quiz, ontvangt diegene een gepersonaliseerde e-mail met score, tips per categorie en een CTA voor een quickscan.

## Architectuur

```
Browser (quiz JS)
  └── POST → Cloudflare Worker (pipedrive-forms)
            ├── CRM: contact + lead aanmaken
            ├── AhaSend: meldingsmail naar juliatol@properaccess.nl
            └── AhaSend: gepersonaliseerde e-mail naar deelnemer (bij quiz)
```

## Stroom per onderdeel

### 1. Frontend (quiz JS)

**Bestanden:**
- `static/js/museum-quiz.js`
- `static/js/webredactie-quiz.js`
- `static/js/accessibility-quiz.js`

**Wat er gebeurt:**
1. Elke vraag heeft een `cat` property (bijv. `'alt-teksten'`, `'koppenstructuur'`)
2. Na afronding berekent de JS per categorie correct/totaal
3. Hidden fields in het e-mailformulier worden gevuld:
   - `quiz_score` — bijv. "75%"
   - `quiz_correct` — bijv. "15"
   - `quiz_total` — bijv. "20"
   - `quiz_weak_categories` — bijv. "alt-teksten (1/3), links (0/2)"
   - `quiz_type` — bijv. "museum"
4. `paFormSubmit()` verstuurt het formulier

### 2. form-submit.js

**Bestand:** `static/js/form-submit.js`

**Wat er gebeurt:**
1. Stuurt data naar de **Cloudflare Worker** (Pipedrive + Resend e-mail)
2. Stuurt **parallel** naar **Formspree** (e-mailnotificatie naar juliatol@properaccess.nl)
3. Bij quiz-submissions:
   - Formspree subject bevat de score: `Quiz museum — anna@x.nl — score: 75%`
   - Formspree bericht bevat leesbare samenvatting

### 3. Cloudflare Worker (pipedrive-forms)

**Bestand:** `tools/pipedrive-forms/worker.js`
**URL:** `https://pipedrive-forms.juliatol.workers.dev/submit`

**Secrets (Cloudflare Dashboard > Workers > pipedrive-forms > Settings > Variables and Secrets):**
- `PIPEDRIVE_API_TOKEN` — Pipedrive API token
- `RESEND_API_KEY` — Resend API key

**Wat er gebeurt:**
1. Valideert `bron` tegen whitelist (`BRON_IDS`)
2. Zoekt/maakt contact in Pipedrive, voegt bron-label toe
3. Maakt een lead aan in Pipedrive
4. Als `bron` begint met `"quiz"`: stuurt gepersonaliseerde e-mail via Resend

**Bron-waarden en Pipedrive ID's:**
| Bron | Pipedrive ID | Lead titel |
|------|-------------|------------|
| nieuwsbrief | 57 | Nieuwsbrief aanmelding |
| tool-proefperiode | 58 | Tool proefperiode aanvraag |
| quiz | 59 | Quiz deelnemer |
| contactformulier | 60 | Contactformulier bericht |
| quiz museum | 67 | Quiz museum deelnemer |
| quiz webredactie | 68 | Quiz webredactie deelnemer |

**Nieuwe bron toevoegen:**
1. Voeg optie toe in Pipedrive: Instellingen > Gegevensvelden > Persoon > Bron
2. Haal het ID op via API (of vraag het op via `tools/pipedrive-forms/worker.js`)
3. Voeg toe aan `BRON_IDS` en `LEAD_TITLES` in worker.js
4. Deploy: `cd tools/pipedrive-forms && npx wrangler deploy worker.js --name pipedrive-forms`
5. Herplaats secrets: `echo "KEY" | npx wrangler secret put RESEND_API_KEY --name pipedrive-forms`

### 4. Resend e-mail naar deelnemer

**Afzender:** `Proper Access <noreply@properaccess.nl>`
**Vereist:** DNS-verificatie van properaccess.nl in Resend (SPF + DKIM records)

**E-mail bevat:**
1. **Score** — visuele ring met percentage en correct/totaal
2. **Tips per zwakke categorie** — alleen categorieën waar niet alles goed was
3. **Artikellinks** — per categorie een link naar een relevant artikel op properaccess.nl
4. **CTA** — "Vraag een quickscan aan" knop naar /contact/

**Categorieën en tips** staan in `CATEGORY_TIPS` in worker.js:
- alt-teksten, koppenstructuur, links, paginatitel, leesvolgorde
- kleur-en-contrast, formulieren, documenten, multimedia, tabellen, semantiek

### 5. Formspree (notificatie naar Julia)

**Endpoint:** `https://formspree.io/f/xjgeyqej`
**Ontvangt op:** juliatol@properaccess.nl

**E-mail bevat:**
- Subject: `Quiz museum — anna@x.nl — score: 75%`
- Bericht: score, correct/totaal, e-mailadres

## Nieuwe quiz toevoegen — checklist

1. **Quiz JS maken** (`static/js/nieuwe-quiz.js`)
   - Voeg `cat` property toe aan elke vraag
   - Voeg hidden fields toe aan het e-mailformulier:
     `quiz_score`, `quiz_correct`, `quiz_total`, `quiz_weak_categories`, `quiz_type`
   - Vul de hidden fields in bij het tonen van resultaten
   - Gebruik `paFormSubmit(this, { bron: 'quiz nieuwe-naam', ... })`

2. **Pipedrive bron toevoegen**
   - Voeg optie toe in Pipedrive (Instellingen > Gegevensvelden > Persoon > Bron)
   - Noteer het ID dat Pipedrive toekent

3. **Worker updaten** (`tools/pipedrive-forms/worker.js`)
   - Voeg toe aan `BRON_IDS`: `"quiz nieuwe-naam": <ID>`
   - Voeg toe aan `LEAD_TITLES`: `"quiz nieuwe-naam": "Quiz nieuwe-naam deelnemer"`
   - Voeg toe aan `QUIZ_LABELS`: `"quiz nieuwe-naam": "Quiz: Titel van de quiz"`
   - Voeg eventueel nieuwe categorieën toe aan `CATEGORY_TIPS`

4. **Deploy Worker**
   ```bash
   cd tools/pipedrive-forms
   npx wrangler deploy worker.js --name pipedrive-forms
   echo "re_xxx" | npx wrangler secret put RESEND_API_KEY --name pipedrive-forms
   ```

5. **Commit en push website**
   ```bash
   git add static/js/nieuwe-quiz.js
   git commit -m "add nieuwe quiz"
   git push origin main
   ```

## Belangrijk: Wrangler overschrijft secrets

Bij elke `wrangler deploy` worden secrets die via het Dashboard zijn ingesteld overschreven als ze ook als `vars` in de lokale config staan. Na deploy altijd secrets opnieuw instellen:

```bash
echo "KEY" | npx wrangler secret put RESEND_API_KEY --name pipedrive-forms
echo "KEY" | npx wrangler secret put PIPEDRIVE_API_TOKEN --name pipedrive-forms
```

## Troubleshooting

| Probleem | Oorzaak | Oplossing |
|----------|---------|-----------|
| Geen e-mail bij Formspree | Formspree blokkeert server-to-server | Browser stuurt direct naar Formspree, niet via Worker |
| Geen Resend e-mail | DNS niet geverifieerd | Check Resend dashboard > Domains |
| Geen Resend e-mail na deploy | Secret overschreven | Herplaats met `wrangler secret put` |
| Bron leeg in Pipedrive | ID klopt niet | Haal juiste ID op via Pipedrive API |
| MailChannels werkt niet | Service gestopt in 2024 | Gebruik Resend in plaats daarvan |

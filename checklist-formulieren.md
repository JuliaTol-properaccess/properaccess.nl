# WCAG Checklist — Formulieren

door Proper Access

## Labels & instructies (SC 3.3.2, 1.3.1, 2.4.6)

- [ ] Elk invoerveld heeft een zichtbaar label
- [ ] Label is gekoppeld aan het invoerveld (via `for`/`id`)
- [ ] Placeholder wordt niet als enige label gebruikt
- [ ] Verplichte velden zijn duidelijk gemarkeerd (niet alleen met `*` zonder uitleg)
- [ ] Instructies voor invoerformaat zijn zichtbaar (bijv. datumformaat, postcode)
- [ ] Labels zijn uniek en beschrijvend binnen de pagina
- [ ] Radio buttons en checkboxes hebben een label
- [ ] Select-velden hebben een label (niet alleen een eerste `<option>` als label)
- [ ] Textarea heeft een label
- [ ] Iconen die als label dienen hebben een tekstalternatief
- [ ] Bij lange formulieren: voortgangsindicator aanwezig

## Groepering (SC 1.3.1, 4.1.2)

- [ ] Gerelateerde invoervelden zijn gegroepeerd met `<fieldset>` en `<legend>`
- [ ] `<legend>` is het eerste child-element van `<fieldset>`
- [ ] `<legend>` is niet leeg
- [ ] Groepslabel (bijv. bij radio buttons) is zichtbaar en gekoppeld
- [ ] Relatie tussen radio buttons/checkboxes in een groep is in de HTML vastgelegd

## Accessible name & role (SC 4.1.2, 2.5.3)

- [ ] Elk formulieronderdeel heeft een accessible name
- [ ] Elk formulieronderdeel heeft de juiste role
- [ ] Zichtbare tekst van het label is onderdeel van de accessible name (SC 2.5.3)
- [ ] Dezelfde functie heeft dezelfde naam op verschillende pagina's (SC 3.2.4)

## Autocomplete (SC 1.3.5)

- [ ] Persoonlijke gegevens-velden hebben een correct `autocomplete`-attribuut
- [ ] Autocomplete-waarde is niet leeg of incorrect

## Contrast & visueel (SC 1.4.3, 1.4.11, 1.4.1)

- [ ] Placeholder-tekst heeft voldoende contrast (4.5:1)
- [ ] Invoervelden hebben een zichtbare rand met voldoende contrast (3:1)
- [ ] Foutmeldingen worden niet alleen met kleur aangegeven
- [ ] Tekst in foutmeldingen heeft voldoende contrast (4.5:1)

## Toetsenbord & focus (SC 2.1.1, 2.4.3, 2.4.7)

- [ ] Alle formulierelementen zijn bereikbaar en bedienbaar met het toetsenbord
- [ ] Tabvolgorde is logisch
- [ ] Focus-indicator is zichtbaar op alle invoervelden en knoppen
- [ ] Geen focus trap (behalve in modals waar dat bewust is)

## Gedrag bij invoer (SC 3.2.2)

- [ ] Geen onverwachte paginawijziging bij het invullen van een veld
- [ ] Select-element veroorzaakt geen automatische page reload
- [ ] Checkbox veroorzaakt geen onverwachte context change
- [ ] Focus verplaatst niet automatisch na invoer (tenzij logisch)

## Foutmeldingen (SC 3.3.1, 3.3.3, 4.1.3)

- [ ] Fouten worden duidelijk in tekst beschreven (niet alleen "dit veld is verplicht")
- [ ] Foutmelding geeft suggestie hoe de fout op te lossen
- [ ] Foutmelding is gekoppeld aan het invoerveld (via `aria-describedby`)
- [ ] Foutmelding wordt als status message aangekondigd aan hulpsoftware (`role="alert"` of `aria-live`)
- [ ] Foutmelding verdwijnt niet automatisch (geen tijdslimiet)
- [ ] Foutmelding is in dezelfde taal als de pagina
- [ ] Bij foutmelding blijft eerder correct ingevoerde data behouden
- [ ] Verplichte velden worden aangegeven voordat het formulier wordt verzonden

## Redundante invoer (SC 3.3.7)

- [ ] Gebruiker hoeft dezelfde informatie niet twee keer in te voeren (bijv. geen "herhaal e-mailadres")
- [ ] Eerder ingevoerde gegevens worden niet gewist na een foutmelding

## Authenticatie (SC 3.3.8)

- [ ] Inloggen vereist geen cognitieve test (bijv. puzzel-captcha)
- [ ] Wachtwoord kan geplakt worden (geen paste-blokkade)
- [ ] Wachtwoord tonen/verbergen-knop is duidelijk gelabeld

## Tijdslimieten (SC 2.2.1)

- [ ] Sessie verloopt niet zonder waarschuwing
- [ ] Gebruiker krijgt voldoende tijd om de sessie te verlengen
- [ ] Formulier ververst niet automatisch
- [ ] Statusmeldingen verdwijnen niet te snel

## Verzendknop

- [ ] Verzendknop is een `<button>` of `<input type="submit">` (niet een `<a>`)
- [ ] Verzendknop heeft een beschrijvende naam
- [ ] Verzendknop is altijd zichtbaar en bereikbaar (niet inactief zonder uitleg)

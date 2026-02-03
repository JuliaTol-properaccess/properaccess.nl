---
title: "Hoe verwijder ik de melding ‘Google vragen over dit bericht’ – en waarom zou je dat willen?"
slug: "toetsenbord_toegankelijk"
date: 2025-11-09
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
aliases:
  - "toetsenbord_toegankelijk"
---

Als je regelmatig digitale toegankelijkheid test, dan weet je hoe onmisbaar de **Tab-toets** is. Het is dé manier om snel te controleren of een website met alleen het toetsenbord te bedienen is. Tijdens onze audits zeg ik het altijd: **wat niet met de Tab-toets bereikbaar is, is ook niet bereikbaar voor veel hulpsoftware.**

Maar sinds kort gooit **Google Chrome** roet in het eten. Wanneer je met de Tab-toets vanuit de adresbalk verder wilt navigeren, krijg je ineens een irritante melding in beeld:

**‘Google vragen over deze pagina’.**

![Screenshot melding Chrome](https://properaccess.nl/wp-content/uploads/2025/11/Scherm­afbeelding-2025-11-05-om-17.09.33-1024x320.png)

En dan zit je vast. Geen doorkomen aan. Het onderbreekt je flow en maakt toetsenbordnavigatie frustrerend – precies wat we willen voorkomen bij toegankelijk testen.

### **Wat is die melding precies?**

Die melding is onderdeel van een nieuwe functie in Chrome: **contextuele suggesties** in de adresbalk (ook wel ‘Omnibox contextual suggestions’ genoemd). Google wil hiermee extra info tonen over pagina’s, maar voor testers en power users is het vooral een hindernis.

### **Gelukkig kun je het uitzetten. Zo doe je dat:**

1. Open een nieuw tabblad in Chrome

3. Plak dit in de adresbalk: chrome://flags/

5. Zoek naar: **Omnibox contextual suggestions**

7. Zet de optie op **Disabled**

9. Start Chrome opnieuw op

![screenshot Chrome browser](https://properaccess.nl/wp-content/uploads/2025/11/Scherm­afbeelding-2025-11-09-om-15.06.09-1024x512.png)

Daarna kun je weer soepel navigeren met de Tab-toets, zoals het hoort.

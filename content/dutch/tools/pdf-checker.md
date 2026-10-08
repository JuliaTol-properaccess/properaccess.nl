---
title: "PDF toegankelijk maken: controleren en repareren"
description: "Controleer je PDF op toegankelijkheidsfouten, gratis en zonder account. De codelaag laten repareren zit in dezelfde tool en draait nu in besloten test."
layout: "pdf-tool-aankondiging"
weight: 10
doelgroep:
  - "Webredactie"
  - "Webdeveloper"
---

Een controle zegt wat er mis is in je PDF. Oplossen moet daarna nog gebeuren, en daar is deze tool
voor: de tagstructuur komt erin, de titel en de taal komen erbij, en je ziet per element wat er dan
nog over is. De controle is openbaar, gratis en zonder account, op
[pdf-toegankelijk.nl/controleren](https://pdf-toegankelijk.nl/controleren). Repareren draait in
besloten test. Je document komt op onze eigen server in Duitsland en gaat daar weer af zodra de
controle klaar is.

## Wat de controle je laat zien

Hoeveel fouten er in je document zitten, hoeveel punten er zijn waar een mens naar moet kijken, en
hoeveel adviezen erbij horen. Daaronder per onderwerp een aantal: tags, titel, taal, koppen,
afbeeldingen, tabellen. En de drie die het zwaarste wegen, met het succescriterium erbij en een link
naar de uitleg in onze kennisbank.

Is je document een scan zonder tekstlaag, dan zegt de controle dat. Zo'n document is voor iemand met
een schermlezer leeg, hoe goed de rest ook geregeld is, en dat zie je aan het bestand zelf niet.

Tot 10 MB en 20 pagina's, en vijf documenten per dag. Die 20 pagina's is een grens van de controle
zelf: daarboven leest hij de tekstlaag niet meer volledig, en dan zou de uitslag minder zeggen dan
hij lijkt te zeggen.

## Wat we van je bewaren

Van de controle zelf bewaren we niets. Er komt geen regel over jou of over je document in onze
database, we bewaren de naam van je bestand niet, en het bestand zelf verwijderen we zodra de
controle klaar is. De uitslag staat een half uur op een adres dat alleen jij hebt en verdwijnt
daarna.

Twee dingen zijn er wel, en die staan allebei in de privacyverklaring. We tellen hoeveel controles
er vanaf jouw internetadres komen, want daar hangt die grens van vijf per dag aan. Je adres slaan we
daarvoor niet op: we rekenen er een onomkeerbare afdruk van uit met een geheim getal dat elke dag
wisselt, en die teller vervalt na 24 uur. Daarnaast houdt onze webserver een logboek bij waar je
internetadres en het tijdstip in staan, zoals elke webserver dat doet. Dat logboek bewaren we
14 dagen. Wat er precies gebeurt staat in de
[privacyverklaring van pdf-toegankelijk.nl](https://pdf-toegankelijk.nl/privacy).

Van jou gaat er bij de tool niets naar een Amerikaanse server. De pagina's van de tool halen geen
script, geen stijlbestand en geen lettertype bij een ander bedrijf op. Je browser legt dus geen
verbinding met Google of met een andere partij om ze te laten zien, en je internetadres komt daar
niet langs. De server van de tool laat het ook niet toe: die geeft je browser de instructie om
alleen bestanden van onze eigen server te laden. Twee tests in de code van de tool controleren vier
pagina's en falen zodra er toch een script of een stijlbestand van een ander bedrijf in staat.

## De stap na de controle

Het repareren zit in dezelfde tool en draait nu in besloten test, waarbij de toegang per organisatie
loopt.

Je uploadt een PDF en je krijgt **je eigen document terug**, met een tagstructuur waar die ontbrak
en met de titel, de taal en de bijbehorende instellingen erin. Dezelfde pagina's, dezelfde opmaak.
Wij bouwen geen tweede document dat er anders uitziet.

Bij elk document vergelijken we de pagina's van voor en na de reparatie als afbeelding. Verandert er
iets, dan zeggen we welke pagina en hoe groot het verschil is.

Daar hoort de volledige lijst bij: per element wat er mis is, op welke pagina het staat, en de tekst
die je in een auditrapport kunt overnemen. Dat is dezelfde indeling als in onze auditrapporten, dus
alles wat er aan één element mankeert staat op één plek bij elkaar. Die lijst is te downloaden als
CSV en als JSON. In de gratis controle staat de optelling en niet die lijst.

Wil je meedoen aan de test, laat dan je adres achter. Je krijgt één bericht.

## Wat de tool niet doet

Een gerepareerde codelaag is geen toegankelijk document. Of de leesorde klopt, of een tabelkop op de
goede plek staat, of een beschrijving bij een afbeelding de afbeelding dekt: dat kan geen tool
vaststellen. Wij leveren dus geen verklaring dat je document aan de norm voldoet. Werk je bij de
overheid, dan is dat de standaard EN 301 549 uit het Besluit digitale toegankelijkheid overheid, en
je PDF valt daar als downloadbaar document onder. Val je onder de EAA, dan hangt het af van de
dienst waar je document bij hoort. Wat we wel leveren is een lijst met de fouten die er nog zijn, en
daar kan een mens mee verder.

Bij een document met tags zetten we de PDF/UA-aanduiding in de metadata. Dat is de regel waarmee je
bestand zegt dat het volgens PDF/UA-1 is gemaakt. Wij zetten hem omdat controleprogramma's als PAC
en veraPDF het ontbreken van die regel als fout melden. Over de inhoud van je document zegt hij
niets: of dat echt aan PDF/UA voldoet, blijkt uit de controle en niet uit deze regel.

## Waar je document blijft

Alle stappen draaien op onze eigen server in de EU, bij Hetzner in Falkenstein, Duitsland. Je
document gaat niet naar Adobe, niet naar Google, niet naar een taalmodel en niet naar een andere
leverancier. We hebben dat getest door de reparatie te draaien met de netwerkverbinding dicht.
Hetzner maakt elke nacht een kopie van de hele server, en die kopie blijft in Duitsland.

Bij een controle is je bestand weg zodra de controle klaar is. Laat je een document repareren, dan
verwijderen we het gerepareerde bestand 7 dagen na je laatste handeling erin. Ben je eerder klaar,
dan druk je op "ik ben klaar" onderaan je werklijst en gaat het meteen weg. Daarna kan het nog in
een nachtelijke kopie staan, en zo'n kopie wordt zelf na 7 dagen gewist.

Eén ding blijft wel staan, en alleen bij het repareren. Van elke reparatie houden we een verslag
bij: je e-mailadres, het tijdstip, het aantal pagina's, welke bevindingen er voor en na op je
document stonden, en hoeveel koppen, tabellen en afbeeldingen erin staan. Je document zelf staat er
niet in. Dat verslag bewaren we 12 maanden.

---
title: "Waarom correcte HTML-lijsten hét verschil maken in toegankelijkheid"
date: 2025-08-23
slug: "waarom-correcte-html-lijsten-het-verschil-maken-in-toegankelijkheid"
categories: 
  - "tips-en-tools"
  - "Webredactie"
tags: 
  - "webredactie"
---

Wie wel eens een toegankelijkheidsaudit heeft gezien, weet: de grootste problemen zitten vaak in de kleinste details. Een klassiek voorbeeld? Lijsten in HTML. Wat voor de ogen slechts een rijtje bullets lijkt, kan voor iemand met een schermlezer uitlopen op een mijnenveld van verwarring.

## Wat is een correcte lijst?

HTML kent eigenlijk maar twee smaken:

- `<ul>` – de ongenummerde lijst (bullets)

- `<ol>` – de genummerde lijst  
    

En die lijsten hebben één gouden regel: ze mogen uitsluitend directe kinderen bevatten die zijn gemarkeerd als `<li>`. (Er zijn nog een paar technische elementen die ook mogen worden gebruikt. Dit artikel is bedoeld voor webredactie, daarom laat ik deze elementen buiten beeld).

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<div></div>
Alles wat geen <li> is, hoort er simpelweg niet in thuis.
```

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

Alles wat geen <li> is, hoort er simpelweg niet in thuis.
```

## Wat gaat er vaak mis?

Toch zien we in de praktijk nog vaak constructies zoals:

```
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <p>Een losse paragraaf</p>
  <li>List item 3</li>
  <a href="#">Een link</a>
</ul>

```

```
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <p>Een losse paragraaf</p>
  <li>List item 3</li>
  <a href="#">Een link</a>
</ul>
```

Visueel ziet dit eruit als één nette lijst. Maar een schermlezer zoals NVDA zegt: _“Lijst met 3 items.”_

De losse `<p>` en `<a>` worden genegeerd. Voor iemand die navigeert met de sneltoetsen (L voor volgende lijst, I voor volgende list item) verdwijnen die elementen volledig uit beeld. Belangrijke informatie kan zo simpelweg onzichtbaar worden.

## Het probleem met lege items

Ook een lege `<li>` zorgt voor verwarring (zie 2de item):

```
<ul>
  <li>Item 1</li>
  <li></li>
  <li>Item 3</li>
</ul>

```

```
<ul>
  <li>Item 1</li>
  <li></li>
  <li>Item 3</li>
</ul>
```

De schermlezer kondigt drie items aan, maar leest twee items voor. Voor de gebruiker klinkt dat alsof er informatie ontbreekt.

## Hoe voorkom je dit?

Een paar praktische tips:

- Kopieer niet blind uit Word of PDF. Wat visueel bullets lijken, kan in HTML een rommeltje zijn.

- Gebruik de lijst-knoppen van je CMS of editor. Daarmee krijg je meestal direct correcte code.

- Check de HTML-structuur. Inspecteer de lijst en kijk of je alleen `<li>` als kinderen ziet.  
    

Verwijder lege **`<li>`**’s. Ze voegen niets toe en maken de ervaring slechter.

## Waarom het ertoe doet

Lijsten zijn geen cosmetisch trucje. Ze geven structuur en betekenis. Voor iemand met een visuele beperking kan het verschil tussen een correcte en een incorrecte lijst het verschil zijn tussen _begrijpen_ en _verdwalen_.

Dus, de volgende keer dat je bullets plaatst: kijk niet alleen naar hoe het eruitziet, maar naar hoe het klinkt.

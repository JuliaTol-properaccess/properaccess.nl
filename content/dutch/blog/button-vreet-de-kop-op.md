---
title: "Button vreet de kop op"
date: 2025-05-17
slug: "button-vreet-de-kop-op"
categories: 
  - "tips-en-tools"
  - "1-3-1"
tags: 
  - "developer"
description: "Veelgemaakte WCAG-fout bij accordeons: wanneer een button de kop ‘opeet’. Uitleg en oplossing voor toegankelijke headings."
keywords:
  - wcag accordeon button
  - heading button toegankelijkheid
  - wcag succescriterium 1.3.1
aliases:
  - /button-vreet-de-kop-op/
---

We zijn fan van de accordeon. Nee, niet het blaasbalginstrument dat klinkt als een complete Duitse jodelband. Ik heb het over de elegante digitale variant (die gelukkig geen muziek maakt): in- en uitklapbare secties waarmee je een bak informatie overzichtelijk kunt presenteren, door alles wat niet direct nodig is in ingeklapte accordeons te verbergen.

Ben jij ook fan? En ontwikkelaar? Lees dan even verder.

Want met accordeons gebeuren soms rare dingen. En dan met name met de tekst waarmee je de sectie in- en uitklapt.

Deze tekst heeft namelijk twee functies. Het is ten eerste de kop van de informatie die eronder staat (in het uitklapbare deel dus). Als ontwikkelaar weet jij wat je doet met een kop. Zeg het maar? Precies, in een heading-element zetten, zoals een `h2`.

Maar deze tekst heeft meer in zijn mars. Het is óók een knop. Let op: **kNop**. Want met deze tekst voer je een actie uit: je opent of sluit de inhoud eronder. En dat vraagt dan weer om een button-element.

Veel ontwikkelaars komen tot dezelfde conclusie, en plaatsen dus een button-element om de kop heen. Maar helaas, dan begint de tragedie. Het button-element vreet de kop op. The horror! De rol van kop verdwijnt. Gewoon weg. En je mooie accordeon wordt afgekeurd op succescriterium 1.3.1.


Hoe los je dit nou op? Eigenlijk heel simpel: door het button-element binnen het heading-element te plaatsen. Dat ziet er dan zo uit: 

```
<h2><button>Kop van de sectie</button></h2>
```

Je maakt het af door het aria-expanded-attribuut aan het button-element toe te voegen. Dan weten websitebezoekers met een schermlezer ook dat hier iets kan worden in- of uitgeklapt.

Leuk weetje: het a-element (een link) is een stuk minder agressief dan de button. Dit vriendelijke element kun je wél gewoon om een kop plaatsen, zonder dat de rol van kop verdwijnt.

---
draft: true
title: "Actieve link in het menu met onzichtbare indicator"
date: 2026-04-23
slug: "sc-1-4-11-actieve-link-in-het-menu-met-onzichtbare-indicator"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Actieve link in het menu met onzichtbare indicator — WCAG 1.4.11 Contrast van niet-tekstuele content (post 3/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - actieve link in het menu met onzichtbare indicator
image: "/images/blog/linkedin-series/sc-1-4-11-actieve-link-in-het-menu-met-onzichtbare-indicator.png"
---

Je bent op de pagina "Over ons". In het menu is die link anders dan de rest. Een subtiele onderstreping. Lichtblauw. #8AB4F8.

Op een witte achtergrond is het contrast van die onderstreping: 2,5:1.

De onderstreping is de enige visuele aanwijzing dat dit de actieve pagina is. En die aanwijzing is bijna onzichtbaar.

**Wanneer telt dit?**

Als de onderstreping, achtergrondkleur of rand de enige manier is om de actieve pagina aan te geven, valt het onder 1.4.11. Het is een grafisch element dat informatie geeft.

Combineer je de indicator met iets anders — bijvoorbeeld vetgedrukte tekst of een pijltje — dan is de onderstreping niet de enige indicator en hoeft die niet apart te voldoen.

```css
/* Niet doen — contrast 2,5:1, enige indicator */
.nav-link--actief {
  border-bottom: 3px solid #8AB4F8;
}

/* Wel doen — contrast 4,6:1 */
.nav-link--actief {
  border-bottom: 3px solid #2056A5;
}

/* Of: meerdere visuele aanwijzingen */
.nav-link--actief {
  border-bottom: 3px solid #2056A5;
  font-weight: bold;
}
```

**De combi-aanpak is het veiligst:** een donkere onderstreping EN vetgedrukte tekst. Twee signalen. Werkt voor iedereen, inclusief mensen met kleurenblindheid.

Check je menu: hoe geef je de actieve pagina aan? En contrasteert die indicator voldoende?

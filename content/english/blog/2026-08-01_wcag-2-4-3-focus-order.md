---
title: 'SC 2.4.3 - What does "Focus Order" mean?'
date: 2026-08-01
slug: "wcag-2-4-3-focus-order"
translationKey: "sc-2-4-3"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-4-3"
  - "focus"
  - "keyboard"
description: "WCAG 2.4.3 asks that keyboard focus moves in an order that preserves meaning. Why CSS reordering breaks it, what modals need, and how to see the order in one click."
keywords:
  - WCAG 2.4.3
  - focus order
  - tab order
  - tabindex positive
  - modal focus management
  - CSS order accessibility
---

You tab through a form. Name, then email, then suddenly the footer, then back up to the phone number. Nothing is broken exactly. Every field is reachable. But you have lost track of where you are and what you have already filled in.

WCAG says: **if the order in which you reach things affects meaning or operation, that order has to make sense**.

## What the criterion says

[Success criterion 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) (level A) requires that if a page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

The wording is careful. It does not demand a particular order, and it does not say focus order must match visual order exactly. It says the order has to preserve meaning. Usually that means following the visual layout, because that is what preserves meaning for a sighted keyboard user, but the test is comprehension rather than geometry.

This criterion sits between two others. [SC 2.1.1 Keyboard](/en/blog/wcag-2-1-1-keyboard/) asks whether you can reach things at all. This one asks whether the order made sense. [SC 2.4.7 Focus Visible](/en/blog/wcag-2-4-7-focus-visible/) asks whether you could see where you were.

## Why this matters

- **Keyboard users** build a mental model of the page from the order they move through it. A jump breaks the model, and on a long form it means starting the mental map again.
- **Screen reader users** who tab through interactive elements hear them stripped of surrounding context, so the sequence is most of what they have.
- **Magnification users** see a small window. When focus jumps to a distant element the viewport follows, and they have no idea where they have landed.
- **People with cognitive disabilities** rely on predictability. An unexpected jump costs far more than the two seconds it takes to scroll back.

## The main causes

**CSS reordering the visual layout.** This is the big one and the least obvious. Flexbox `order`, `row-reverse`, `column-reverse` and CSS Grid placement all change what you see without changing the DOM. Tab follows the DOM. So a layout that reads left to right on screen can tab right to left, and nothing in the code looks wrong.

```css
/* Visually swaps them. Tab order does not swap. */
.actions { display: flex; }
.actions .cancel { order: 2; }
.actions .submit { order: 1; }
```

The rule of thumb: use CSS ordering for presentation, never to fix a source order that is wrong. If the visual order is the correct one, change the HTML.

**Positive `tabindex`.** Any value above zero jumps ahead of every element in the natural order. One `tabindex="1"` somewhere in a template scrambles the sequence for the entire page, and it is almost always added to solve a problem that had a simpler answer. Only `0` and `-1` belong in production.

**Modals that do not manage focus.** A dialog opens and focus stays on the page behind it. Tab walks through content the user cannot see, underneath the overlay. A modal needs focus moved into it on open, kept inside while it is open, and returned to the trigger on close.

**Content inserted above where you are.** A validation summary or a banner injected at the top of the page after you have already tabbed halfway down. The DOM order changes underneath you and the next Tab goes somewhere unexpected.

**Off-screen content still in the tab order.** A mobile menu hidden with `transform: translateX(-100%)` or `opacity: 0` is still focusable. Tab and focus disappears off screen, apparently into nothing. Hide it with `display: none`, the `hidden` attribute, or `visibility: hidden`.

**Skip links that do not move focus.** A skip link that changes the scroll position without moving focus leaves the next Tab back at the top of the navigation, which defeats the point.

## How to test it

Turn on **tab order** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. Every focusable element gets a number in the order you reach it, and positive `tabindex` values are flagged as errors. This is the fastest way to see the CSS reordering problem: the numbers are drawn on the page, so a sequence that zigzags is immediately visible rather than something you have to feel your way through.

**Reading order (overview)** gives you the page as a clickable list in document order, which is useful when the numbers tell you something is wrong and you want to see why.

Turn on **make focus visible** and then do it by hand, because the numbers cannot tell you whether the order made sense:

1. Start in the browser address bar so you catch anything before the header.
2. Tab through the whole page and watch where focus goes.
3. Open every modal, menu and dropdown, and check that focus goes in, stays in, and comes back to where you were.
4. Submit a form with errors and see where focus lands.

### Who does what

- **Developers** own this. Get the DOM order right first and use CSS for presentation only. Manage focus on open and close. Never ship positive `tabindex`.
- **Designers** flag when a layout puts something visually before something that comes later in the content, because that is the case that needs a decision rather than a CSS trick.
- **Editors** can find it: tab your own page and report anywhere the highlight jumps somewhere surprising.

## Frequently asked questions

### Does focus order have to match visual order exactly?

No. It has to preserve meaning. In practice, following the visual layout is what preserves meaning for most people, so treat a mismatch as something you have to justify rather than something you assume is fine.

### Is a positive `tabindex` always a failure?

Not automatically of this criterion, but it almost always produces one, and it is reported as an error in the Radar for that reason. Any element with `tabindex="1"` comes before every element with `tabindex="0"`, no matter where they sit on the page.

### Should focus move when a modal opens?

Yes. Move it to the dialog, usually to its heading or its first control, keep it inside while the dialog is open, and return it to the element that opened it on close. Without that, a keyboard user is tabbing through a page they cannot see.

### What about a single page application changing route?

Moving focus to the new page heading, or to a live region announcing the change, is what makes navigation comprehensible. Doing nothing leaves focus on a link that no longer exists, and focus falls back to the top of the document.

### Is it a failure if my skip link only scrolls?

Effectively yes, because the sequence no longer preserves operability: the visitor is visually at the main content and their next Tab goes into the navigation they just skipped. Point the skip link at an element that can take focus.

## Summary

- Focus has to move in an order that keeps the page comprehensible, which normally means following the visual layout.
- CSS reordering with flexbox and grid is the most common cause and the hardest to spot in code.
- Positive `tabindex` scrambles the whole page. Use only `0` and `-1`.
- Modals need focus moved in, trapped, and returned.
- Content hidden off screen must be removed from the tab order, not just moved.
- Check with the tab order check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then walk it yourself.

The numbers tell you the sequence. Whether that sequence still tells a coherent story is a human judgement, and it is one of the passes we run per template. [Ask us for a quote](/en/contact/) if you want that done on your site.

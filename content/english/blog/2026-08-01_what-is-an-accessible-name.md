---
title: "What is an accessible name?"
date: 2026-08-01
slug: "what-is-an-accessible-name"
translationKey: "toegankelijke-naam"
categories:
  - "wcag-explained"
tags:
  - "accessible-name"
  - "aria"
  - "editors"
  - "developers"
description: "The accessible name is what assistive software announces for a button, link or field. What it should say, how an element gets one, and how to see it on your own page."
keywords:
  - accessible name
  - accessible name calculation
  - button with no name
  - aria-label explained
  - name role value
  - check accessible name
---

Turn on a screen reader and move to a button. You hear two or three things: "Add to basket, button". The word "button" is the role. "Add to basket" is the accessible name.

Take the name away and all you hear is "button". You know something is there. You have no idea what it does.

That is the finding we report most often, and it lands in the worst possible place: on the buttons and links people need in order to get anywhere. This article is about that name. What it is, what it should say, and how an element ends up with one. There is a section for editors and a section for developers, because both of you control it, just in different places.

## What an accessible name actually is

The accessible name is the label assistive software attaches to an element. Screen readers announce it, voice control listens for it, braille displays render it.

Every interactive component needs three things, and the name is one of them:

- **Role**: what kind of thing is it? A button, a link, a checkbox.
- **Name**: what is it called? "Search", "Annual report 2026", "I agree".
- **Value or state**: what state is it in? Checked, expanded, halfway.

Those three together are [SC 4.1.2 Name, Role, Value](/en/blog/wcag-4-1-2-name-role-value/). The name is the part where editorial and design decisions have the most influence.

One thing to be clear about from the start: the accessible name is not the same as the visible text. Usually it comes from the visible text, but you can override it. That is where a lot of the trouble starts, and it usually starts with somebody trying to be helpful.

## Which things need a name

- Every button, link and form field
- Informative images, through their alt text
- Embedded frames such as a video or a map, through the `title` attribute
- Groups of radio buttons or checkboxes, through a legend
- Tables, through a caption
- Landmarks such as navigation blocks, once you have more than one

Decorative images specifically do **not** need one. They get an empty alt attribute so assistive software skips them entirely.

## How an element gets its name

The browser works the name out in a fixed order. Simplified:

1. `aria-labelledby`, pointing at text elsewhere on the page
2. `aria-label`, literal text on the element itself
3. The element's own content or its native association: the text inside a button, an associated `<label>`, an image's `alt`, a group's `<legend>`
4. `title`
5. `placeholder`, on form fields only

**The first one that produces something wins.** Everything below it is ignored.

That single rule explains most of the surprises. An `aria-label` on a button that already has visible text means the visible text no longer counts for anything.

Two consequences that get misremembered in both directions:

**A field with only a placeholder does have a name.** The placeholder is the last step in the calculation and the attribute stays in the DOM while you type, so a screen reader announces something. The damage is elsewhere: the visible hint disappears the moment somebody starts typing. That is a failure of [SC 3.3.2 Labels or Instructions](/en/blog/wcag-3-3-2-labels-or-instructions/), not of 4.1.2.

**An icon-only button is rarely completely silent.** If the icon is an emoji, screen readers announce its Unicode name, so a magnifying glass emoji becomes "magnifying glass tilted left, button". If it is an icon font glyph, Chrome reads the character and Firefox drops it. The name usually exists. It just describes the artwork instead of the action. That is exactly why this failure survives so long: something comes out of the speaker, so it sounds handled.

## What the name should say

Four rules, most important first.

**Describe the function or the destination, not the appearance.** A magnifying glass in a search button is not called "magnifying glass", it is called "Search". A linked image is not "photo of the festival grounds", it is "Summer festival programme".

**Keep the visible text inside it.** If a visitor sees "Send" and the button is technically named "Submit form", voice control breaks: saying "click Send" does nothing. The name may be longer than the visible text, but the visible words have to appear in it. That is [SC 2.5.3 Label in Name](/en/blog/wcag-2-5-3-label-in-name/).

**Put the meaningful word first.** A screen reader user pulling up a list of links hears only the names, one after another, stripped of the sentences around them. "Annual report 2026, download" scans better than "Download the annual report for 2026 here".

**Make it distinct enough.** Ten links all called "Read more" are indistinguishable in that list. That is [SC 2.4.4 Link Purpose](/en/blog/wcag-2-4-4-link-purpose-in-context/).

And one rule about what to leave out: no "image of", no "link to", no "button to". Assistive software already announces the role. Write "link to contact" and the visitor hears "link, link to contact".

## For editors

You write more accessible names than you realise. Anything you type into a CMS field that ends up on a button or a link is a name.

What is yours:

- **Link text.** Whatever sits inside the link markup is that link's name. "Read more" is literally what the link is called.
- **Alt text.** On an image that links somewhere, the alt text becomes the link's name. An empty alt there means a link with no name at all.
- **Labels in form builders.** What you type in the "label" field becomes the input's name.
- **Button text in blocks and cards.** Most themes have a button with editable text. That text is the name.
- **Titles on embedded videos and maps.** Some systems let you set a title on an embed. Do it.

To check it yourself, open the **Editors** tab in [WCAG Radar](https://wcagtoolkit.com/wcag-radar) and turn on **show accessible name**. Every link, button and field displays the name a screen reader will announce, and anything without one is marked as an error.

Then read the **all links** list in the same panel. It shows every link the way a screen reader announces it, name only, no surrounding sentence. If you cannot tell from a row where it goes, neither can anybody else.

Two things the Radar cannot decide for you: whether an image is decorative, and whether a name is any good. "Banner" is a name that exists and a wasted opportunity.

## For developers

The most important rule is also the cheapest: **use the right element and put text in it.** Then the name is free, and it stays correct through translation.

```html
<button type="button">Save draft</button>
<a href="/annual-report-2026.pdf">Annual report 2026 (PDF, 2 MB)</a>
```

Only reach for ARIA when there is no visible text:

```html
<!-- Icon button: name on the button, icon hidden -->
<button type="button" aria-label="Search">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
</button>

<!-- Better still, because it survives a CSS failure -->
<button type="button">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
  <span class="sr-only">Search</span>
</button>
```

Five traps worth knowing:

**`aria-label` does nothing on an element with no role.** A bare `div` or `span` will not take a name. Put it on an element that has a role, or give the element a role first.

```html
<!-- Does nothing -->
<span aria-label="Close" onclick="close()">×</span>

<!-- Works -->
<button type="button" aria-label="Close">×</button>
```

**`aria-label` replaces the visible text, it does not add to it.** If you only want to extend it, start the name with the visible words: `aria-label="Read more about the annual report 2026"` on a link that visibly reads "Read more".

**`aria-labelledby` points at an id that has to exist.** If it points at nothing, the element has no name at all. You can combine several ids separated by spaces.

**`title` is not a name.** It is in the calculation, but it does not appear on touch devices, it is announced inconsistently, and keyboard users cannot reach it. Never let it be the only name. The exception is `title` on an `<iframe>`, where it is the intended mechanism.

**Hide decorative icons inside a labelled button.** Without `aria-hidden="true"` the glyph can end up in the name, and the user hears a mangled character before the label.

Check on the **Developer** tab in [WCAG Radar](https://wcagtoolkit.com/wcag-radar) with **show accessible name**. Run **ARIA roles and attributes** alongside it, which flags broken references to ids that do not exist. That is the silent version of this bug: a perfectly tidy `aria-labelledby` pointing at nothing.

## Mistakes we keep finding

- **Icon buttons with no name.** Close, search, menu, share. The classics.
- **An `aria-label` that replaces the visible text instead of extending it.** Well meant, and it breaks voice control.
- **Linked images with an empty alt.** The link is left with no name whatsoever.
- **"Read more" as the name of ten different links.**
- **A name describing appearance.** "Blue arrow" instead of "Next page".
- **A broken `aria-labelledby`,** pointing at an id that a refactor removed.
- **"Image of" or "link to" inside the name.** The role is already announced.
- **An English `aria-label` on a translated page**, inherited from a component library.

## Frequently asked questions

### Is the accessible name the same as alt text?

No. Alt text is one of the ways an image gets a name. A button gets its name from the text inside it, a field from its associated label.

### Can the name be longer than the visible text?

Yes, and that is often the right answer. It just has to contain the visible words rather than replace them.

### Does every element need a name?

No. Decorative images specifically need an empty alt, and ordinary blocks of text need no name at all. It applies to things the visitor operates, plus images and frames that carry meaning.

### Why do I still hear something on a button with no name?

Because assistive software falls back on whatever it can find: the element's contents, an emoji name, sometimes an image file name. Something gets announced. It just does not help.

### What is the difference with a visible label?

A visible label is what you see, an accessible name is what you hear. Usually they are the same, and that is the goal. The moment they diverge, voice control starts failing.

## Summary

- The accessible name is the label assistive software announces. With the role and the state, it is what makes a component usable.
- The browser calculates it in a fixed order and the first hit wins, so `aria-label` pushes the visible text aside.
- Describe the function, not the appearance. Keep the visible words in the name. Put the meaningful word first.
- Editors: link text, alt text and form labels are names you write.
- Developers: use the right element with text in it, and reach for ARIA only when there is no visible text.
- Check it with **show accessible name** in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), on either the Editors or the Developer tab.

A name that exists but says nothing is the hardest category: no scan reports it and every visitor who relies on it gets stuck. That is the level we report at, per element. [Ask us for a quote](/en/contact/) if you want to know how your site sounds.

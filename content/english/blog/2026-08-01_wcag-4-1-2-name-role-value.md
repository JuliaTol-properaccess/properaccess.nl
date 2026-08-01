---
title: 'SC 4.1.2 - What does "Name, Role, Value" mean?'
date: 2026-08-01
slug: "wcag-4-1-2-name-role-value"
translationKey: "sc-4-1-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "4-1-2"
  - "aria"
  - "development"
description: "WCAG 4.1.2 says every interactive element must expose a name, a role and its state. What that means in practice, and why a div with a click handler always fails it."
keywords:
  - WCAG 4.1.2
  - name role value
  - accessible name
  - ARIA
  - div as button
  - custom components
---

A screen reader user reaches a control on your page. Three things have to be true for them to use it. They have to know **what it is** (a button, a checkbox, a tab), **what it is called** ("Add to basket"), and **what state it is in** (pressed, expanded, checked). Success criterion 4.1.2 is the rule that guarantees all three: **every interactive element exposes a name, a role and, where relevant, a value or state**.

This is the criterion that separates "it works with a mouse" from "it works". It is also the one where custom components go wrong most often.

## What the criterion says

[Success criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) (level A) requires that for all user interface components, the name and role can be programmatically determined, that states, properties and values can be programmatically set and determined, and that changes to those are announced to assistive technology.

Three words worth unpacking:

- **Name.** The label a screen reader announces. It can come from the visible text, a `<label>`, an `aria-label`, an `aria-labelledby`, or an `alt` attribute, and as a last resort from `title` or `placeholder`.
- **Role.** What kind of control it is. `<button>` has the role button for free. A `<div>` has no role at all.
- **Value or state.** Whether a checkbox is checked, whether an accordion is expanded, how far a slider has moved.

## Why this matters

Without a role, assistive software does not announce the element as anything, and a keyboard user cannot reach it. Without a name, the user hears "button" and has to guess. Without state, a user toggles an accordion and gets no confirmation that anything happened, so they toggle it again and close it.

The everyday version: a mouse user sees a blue rounded rectangle that says "Send" and understands it in a fraction of a second. Everything they used to understand it, the shape, the colour, the position, is visual. Take that away and only the name, role and state are left. If they are missing, the control does not exist.

## The single biggest cause: the div that pretends to be a button

```html
<div class="btn" onclick="submit()">Send</div>
```

This looks right, works with a mouse, and fails three criteria at once. Under **4.1.2** it has no role, so it is announced as plain text. Under [**2.1.1 Keyboard**](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) it is not in the tab order and does not respond to Enter or Space, so a keyboard user can never reach it or operate it. And under [**2.4.7 Focus Visible**](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) there is no focus state to show.

The fix is almost always to use the real element:

```html
<button type="button" onclick="submit()">Send</button>
```

If you genuinely cannot, you have to rebuild everything a `<button>` gave you for free: `role="button"`, `tabindex="0"`, key handlers for Enter and Space, and a visible focus style. That is four things to maintain instead of zero. We [asked AI tools to spot this pattern](/en/blog/can-ai-detect-div-as-button/) and the results were mixed, which is a good argument for not creating the problem in the first place.

## Mistakes we keep finding

**Icon-only buttons with no name.** A button containing only an icon font glyph or an emoji has no word attached. Assistive software drops the name entirely and announces just "button". Give it an `aria-label` and set the icon to `aria-hidden="true"`.

**`aria-label` that contradicts the visible text.** A button that visibly reads "Send" but carries `aria-label="Submit form"` breaks voice control: the user says "click Send" and nothing happens. Under [SC 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html) the visible text must be contained in the accessible name.

**State that never updates.** An accordion with `aria-expanded="false"` hardcoded in the template. It opens, the attribute stays false, and the screen reader keeps saying "collapsed".

**Custom selects and comboboxes.** A styled dropdown built from divs and a list. Getting the full pattern right (roles, `aria-activedescendant`, keyboard handling, announcements) is genuinely hard. Native `<select>` is unglamorous and correct.

**Iframes without a title.** An embedded video, map or form is a document inside your document. Without `title` on the `<iframe>`, a screen reader announces "frame" and the user has no idea whether to enter it.

**ARIA on the wrong element.** `role="button"` on an `<a href>` removes the link semantics without adding keyboard behaviour. ARIA changes what is announced, never what the element does.

## How to test it

Three checks in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**, all on the Developer tab.

**Show accessible name** puts the accessible name next to every interactive element: links, buttons, form fields. Anything without a name is marked as an error. This is the fastest way to find icon buttons and unnamed fields, and it is worth running on every template you own.

**ARIA roles and attributes** flags roles used on the wrong element, states that contradict the markup, and references to ids that do not exist.

**Iframes (title)** marks embedded frames without a title.

Then do the test that finds the div-as-button problem, which no attribute scan will catch: **put your mouse away and press Tab**. Walk the whole page with the keyboard. Every control you can click with a mouse should be reachable, focusable and operable with Enter or Space. Anything you skip past is either not interactive or not accessible, and you will know which within a second.

Turn on **make focus visible** in the same panel first, so you can see where you are while you do it.

### Who does what

- **Developers** own this criterion almost entirely. Native elements first, ARIA only when nothing else fits.
- **Designers** flag custom components early. A custom dropdown is a design decision with a development cost attached.
- **Editors** rarely touch this, except when the CMS lets them paste raw HTML.

## Frequently asked questions

### Is ARIA required to pass 4.1.2?

No. Native HTML elements come with name, role and state already. ARIA exists to describe patterns HTML has no element for. The first rule of ARIA is not to use ARIA.

### Does `title` provide an accessible name?

Technically it can, as a last resort in the accessible name calculation. In practice do not rely on it: it does not show on touch devices, it is announced inconsistently, and it is invisible to keyboard users.

### Is a field with only a placeholder a failure of 4.1.2?

Usually not, and this one gets misquoted a lot. `placeholder` is the final fallback in the accessible name calculation, below `title`, so the field does get a name. The attribute stays in the DOM while somebody types, so that name does not disappear either.

The damage sits under other criteria. The visible hint vanishes as soon as the field has content, so anyone checking their answers halfway through the form has nothing left to read, which is what [SC 3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) is about. Placeholder text is also usually too light for [SC 1.4.3](/en/blog/wcag-1-4-3-contrast-minimum/), and there is no `<label>` to click, so the focus target is smaller than it should be. Use a real label and keep the placeholder for an example of the format, if at all.

### Do decorative icons inside a labelled button need hiding?

Yes, use `aria-hidden="true"`. Otherwise the glyph can end up in the accessible name and the user hears a mangled character before the label.

### What about a `<div>` that is only ever clicked for analytics?

If it does something the user cares about, it needs a role. If it genuinely does nothing user-facing, it is not a user interface component and this criterion does not apply.

### Our component library is third party. Whose problem is it?

Yours, as far as the law is concerned. Practically, most mature libraries have accessibility issues logged and fixable through configuration. We can usually tell you within an audit which failures are yours and which belong upstream, which matters for how you plan the fix.

## Summary

- Every interactive element needs a name, a role, and its current state.
- Use native HTML. `<button>`, `<a href>`, `<input>` and `<select>` give you all three for free.
- Icon-only controls need an `aria-label`, with the icon hidden.
- Run the accessible name, ARIA and iframe checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then tab through the page with your mouse out of reach.

4.1.2 is the criterion where automated tools help least and a real keyboard pass helps most. That is the kind of testing we do by hand in every audit: [request a quote](/en/contact/) if you want to know what your site looks like from the keyboard.

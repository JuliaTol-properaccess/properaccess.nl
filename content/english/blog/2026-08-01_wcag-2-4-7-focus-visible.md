---
title: 'SC 2.4.7 - What does "Focus Visible" mean?'
date: 2026-08-01
slug: "wcag-2-4-7-focus-visible"
translationKey: "sc-2-4-7"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-4-7"
  - "focus"
  - "keyboard"
description: "WCAG 2.4.7 asks for a visible focus indicator on every interactive element. Why outline:none is the most damaging line in CSS, and how to replace it properly."
keywords:
  - WCAG 2.4.7
  - focus visible
  - outline none accessibility
  - focus indicator
  - focus-visible css
  - keyboard navigation
---

Imagine filling in a form with your mouse, except the cursor is invisible. You click somewhere and hope you hit the right field. Nobody would ship that.

That is exactly the experience a keyboard user gets on a site with no focus indicator. The focus ring is the keyboard's cursor. Take it away and the page still works perfectly, as long as you can see where you are, which is the whole point. WCAG says: **when an element has keyboard focus, you have to be able to see it**.

## What the criterion says

[Success criterion 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) (level AA) requires that any keyboard operable interface has a mode of operation where the keyboard focus indicator is visible.

It is deliberately a low bar. The criterion asks whether an indicator exists, not whether it is a good one. A one pixel light grey line technically passes. That is why the newer criteria exist, and why we report weak indicators even when they scrape through.

## Why this matters

Keyboard users are a broader group than people usually picture:

- People with a motor impairment who cannot operate a mouse accurately.
- People with reduced vision who can see the screen but cannot track a small cursor.
- People with RSI who avoid the mouse to spare their hands.
- Voice control users, who need to see which element their command landed on.
- Anyone who simply navigates faster by keyboard, which is a lot of people in a form-heavy back office.

Without a visible indicator none of them can tell where they are. They tab, something happens somewhere, and they have to guess.

## Why sites remove it

Almost always the same line:

```css
*:focus {
  outline: none;
}
```

The default ring is considered ugly, and removing it is one line. It is the most damaging line in CSS for accessibility, because nothing visibly breaks. The page looks better to the person who wrote it and becomes unusable for a group they never see.

The fix is not to put the default back. It is to replace it with something better:

```css
:focus-visible {
  outline: 3px solid #004050;
  outline-offset: 2px;
}
```

`:focus-visible` is the part that resolves the original complaint. It applies the style when the browser judges that the user is navigating by keyboard, and stays out of the way on a mouse click. You get a strong, deliberate indicator for the people who need it, without a ring appearing every time somebody clicks a button.

A visible offset matters more than thickness. Two pixels of space between the control and the ring keeps the indicator readable against the control's own fill.

## Mistakes we keep finding

**`outline: none` with nothing in its place.** The classic, and still the most common.

**An indicator too subtle to count.** A one pixel `#ddd` line on white is present and invisible. It is also a [SC 1.4.11](/en/blog/wcag-1-4-11-non-text-contrast/) failure, which is usually the criterion we report it under.

**Focus styled on some elements only.** Buttons get a ring, links and form fields do not, because the button was the one somebody tested.

**An indicator that only works on one background.** A dark ring tuned for the white page body, invisible on the dark footer and the dark hero. Browsers solved this for their own ring by drawing two contrasting layers. Custom rings usually do not.

**Hover styled, focus forgotten.** The button changes colour on `:hover` and nothing happens on `:focus`. A frequent giveaway that the interaction was only ever tested with a mouse.

**Custom components with no focus at all.** Dropdowns, tab panels, modals and date pickers built from divs. Often there is no focus style because there is no focus: the element was never focusable in the first place, which is a [SC 2.1.1](/en/blog/wcag-2-1-1-keyboard/) problem before it is this one.

**Focus hidden behind a sticky header.** The element has focus and a perfectly good ring, and a fixed bar is sitting on top of it. That is SC 2.4.11, below.

## The neighbouring criteria

Three criteria sit around this one and they are easy to mix up:

- **2.4.11 Focus Not Obscured (Minimum)**, level AA in WCAG 2.2. The focused element must not be entirely hidden by other content, such as a sticky header or a cookie bar.
- **2.4.12 Focus Not Obscured (Enhanced)**, level AAA. Not even partly hidden.
- **2.4.13 Focus Appearance**, level AAA. This is the one that sets minimum size and contrast requirements for the indicator itself.

So 2.4.7 asks whether you can see it, 2.4.11 asks whether something is covering it, and 2.4.13 asks whether it is good enough. Only the first two are level AA.

## How to test it

Turn on **make focus visible** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It forces a clear outline on every element, which is the fast way to find out what should be focusable. Then turn it off and do the real test with your own styles, because the point is whether your indicator works, not whether one can be forced.

The **contrast of borders and focus** check measures the focus style of each element and warns below 3:1 or when there is no visible focus style at all.

**Tab order** numbers every focusable element in the order you reach it, which pairs naturally with this: as you walk the page you want to confirm both that you can see where you are and that where you are makes sense.

Then put the mouse out of reach and press Tab through the whole page. Watch for the places automated checks cannot reach: inside modals, inside custom dropdowns, on the dark sections, and after the page has changed because you opened something.

### Who does what

- **Developers** own the implementation. Never remove an outline without replacing it, and prefer `:focus-visible` over `:focus`.
- **Designers** specify the focus style as part of the design system, on light and dark backgrounds, and treat it as a component state alongside hover and active.
- **Editors** can still catch this: tab through your own pages and report anywhere you lose track of where you are.

## Frequently asked questions

### Can I remove the outline if I change the background colour on focus instead?

Yes, as long as the change is clearly visible. The criterion does not prescribe an outline, only that focus is visible. A background change plus a border is a common and perfectly good pattern.

### Is the browser default good enough?

For 2.4.7, yes, and current Chrome and Safari rings are genuinely well designed for both light and dark backgrounds. Replacing the default is where the risk starts.

### Does `:focus-visible` have enough browser support?

Yes, it is supported across all current browsers. If you need to support something very old, style `:focus` first and then remove it again inside a `:focus:not(:focus-visible)` rule, so old browsers get a ring rather than nothing.

### Does this apply to elements that are only clickable with a mouse?

No, and that is not a let-off. If a control cannot receive focus, this criterion does not apply to it, because it fails [SC 2.1.1 Keyboard](/en/blog/wcag-2-1-1-keyboard/) first. Fix the focusability and this criterion becomes relevant.

### What about the skip link that appears on focus?

That pattern is fine and is exactly what this criterion wants. Just make sure the link is genuinely visible when focused, not moved off screen by one pixel too many.

## Summary

- Every element that can take keyboard focus needs a visible indicator.
- `outline: none` without a replacement is the most common cause, and nothing visibly breaks when you do it.
- Use `:focus-visible` with a clear colour and an `outline-offset`, and check it on your dark backgrounds too.
- 2.4.7 is whether you can see it, 2.4.11 is whether something covers it, 2.4.13 is whether it is strong enough.
- Test with the make focus visible and contrast of borders and focus checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then tab the page yourself.

Whether an indicator is genuinely visible on every background is a judgement, and it is one of the checks we run by hand on every template in an audit. [Ask us for a quote](/en/contact/) if you want to know how your site holds up from the keyboard.

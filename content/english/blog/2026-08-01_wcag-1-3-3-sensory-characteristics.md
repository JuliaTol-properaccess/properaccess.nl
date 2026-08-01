---
title: 'SC 1.3.3 - What does "Sensory Characteristics" mean?'
date: 2026-08-01
slug: "wcag-1-3-3-sensory-characteristics"
translationKey: "sc-1-3-3"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-3-3"
  - "content"
  - "instructions"
description: "WCAG 1.3.3 says instructions may not rely only on shape, colour, size, position or sound. What we found in 3,400 public audit reports, and how to check your own."
keywords:
  - WCAG 1.3.3
  - sensory characteristics
  - instructions position colour
  - click the green button
  - the button on the right
  - accessible instructions
---

"Click the green button on the right." "Fill in the red fields." "Press the three dots at the top."

Every one of those is useless to somebody who cannot see the page, and unreliable for everybody else, because at 200% zoom the button on the right is the button at the bottom. WCAG says: **instructions may not depend only on shape, colour, size, visual location, orientation or sound**.

## What the criterion says

[Success criterion 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html) (level A) requires that instructions for understanding and operating content do not rely solely on sensory characteristics of components such as shape, colour, size, visual location, orientation or sound.

The word doing the work is *solely*. You may mention the colour or the position. You just have to add something that works without it, which is almost always the name of the thing.

"Click the green Send button at the bottom right" is fine. The colour and the position are extra help for people who can use them, and the word "Send" carries it for everyone else.

## What we found in 3,400 audit reports

We searched more than 3,400 published Dutch accessibility audit reports to see how often this criterion actually fails and what causes it. In the large majority of reports 1.3.3 simply passes. Where it fails, it comes down to the same three things every time.

### Referring to a position on the page

By far the most common, in roughly 80 of the failing cases. The instruction points at a location instead of a name:

- "the menu button at the top left"
- "the navigation bar on the left side of the page"
- "do you see a chat button at the bottom right of the page?"
- "click the top right of the tile"

Someone using a screen reader does not get the page as a picture, so "top left" means nothing. And someone who zooms, or is on a small screen, may well find that button somewhere else entirely.

### Referring to a shape or an icon

Roughly 45 reports. The element is described by how it looks rather than what it is called:

- "three dots" or "three lines"
- "click the paperclip or the i"
- "click the little blue pencil on the left"
- "3 lines at the top right"

An icon with no text label does not exist for a screen reader. And even for sighted visitors, "the paperclip" is a guess if the icon does not mean what they expect.

### Referring to a colour

Roughly 30 reports:

- "click the blue information balloons in the top row"
- "the red fields are required"
- "green areas and red areas on the map"
- "blue for men, green for women"

For someone who is colour blind or using a screen reader, "the red fields" is not an instruction. This overlaps with [SC 1.4.1 Use of Colour](/en/blog/wcag-1-4-1-use-of-colour/), which is about colour carrying meaning anywhere, not only in instructions.

### The awkward variant: the reference is wrong anyway

A category worth its own mention. Sometimes the sensory reference is not even accurate:

- "click the button below" when there is no button
- a reference to a "Save" button that is actually labelled "Resume later"
- "click the next arrow" when there is no arrow

For a sighted visitor that is confusing. For someone who cannot see the page it is impossible to follow, because they cannot fall back on looking around. The same applies to "the table below" when reflow or the reading order has moved that table somewhere else.

## How to fix it

Name the thing. That is the whole fix, and it is almost always shorter than what was there:

| Instead of | Write |
|---|---|
| Click the green button | Click **Send** |
| Fill in the red fields | Fill in the fields marked **Required** |
| The menu at the top left | The **Main menu** |
| Click the three dots | Click **More options** |
| See the box on the right | See **Opening hours** |
| Press the round icon | Press **Play** |

If the control has no visible name, that is the real finding. An icon-only button that instructions have to describe by shape needs an accessible name under [SC 4.1.2](/en/blog/wcag-4-1-2-name-role-value/), and probably a visible label too.

## How to test it

Turn on **sensory references** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It marks references to position, colour or shape, such as "on the left", "top right" or "the red button", and it looks inside alt text as well, which is where these hide most often.

The check gives you candidates, not verdicts. Walk each mark and ask one question: **if I could not see the page, could I still follow this?** If the name of the element is in the sentence, yes. If it is not, rewrite it.

Then do the pass no tool can do. Read your instructions with the design switched off, using **styles off (reading order)** in the same panel. Anything that stops making sense was leaning on something visual.

Pay particular attention to:

- Form help text and hints
- Error messages
- Cookie and consent banners
- Onboarding and tutorial content
- Help pages and FAQs, which are full of "click the icon at the top right"
- Video and screencast narration, where "click here" is the default

### Who does what

- **Editors** own this criterion almost entirely. It is words, and the fix is to use the name of the thing.
- **Designers** make sure controls have names worth referring to. If instructions can only describe a control by its shape, the control needs a label.
- **Developers** give icon-only controls accessible names, so there is something to point at.

## Frequently asked questions

### Can I never mention a colour or a position?

You can, as long as the instruction also works without it. "Click the green Send button" is fine. "Click the green button" is not.

### What about "see below" or "the following table"?

"Below" is a position reference and it is usually fine, because the sequence is the same for screen reader users. It becomes a problem when reflow or a reading-order issue means the thing is not actually below. If in doubt, name it: "see the rates table".

### Does this apply to instructions in a video?

Yes. Narration saying "click the button in the corner" has the same problem, and it is harder to fix later. Script it with names.

### Is "swipe left to delete" a failure?

That is orientation and gesture rather than a visual characteristic, and it is fine as an instruction as long as there is another way to delete. The alternative is required by [SC 2.5.1](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html).

### Our help pages are full of these. Where do I start?

Forms and error messages first, because that is where people are stuck and where the cost of a bad instruction is highest. Help pages second.

## Summary

- Instructions may not depend only on shape, colour, size, position, orientation or sound.
- You may mention them. You just have to add the name as well.
- Position references are the most common failure, then shape and icons, then colour.
- If an instruction can only describe a control by its shape, the control needs a proper name.
- Check with the sensory references check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then read your instructions with the styling off.

This is one of the most editorial criteria in WCAG and one of the cheapest to fix, because the accessible version is usually the clearer one for everybody. [Ask us for a quote](/en/contact/) if you want your instructions and help content read properly.

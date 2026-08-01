---
title: 'SC 3.3.2 - What does "Labels or Instructions" mean?'
date: 2026-08-01
slug: "wcag-3-3-2-labels-or-instructions"
translationKey: "sc-3-3-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "3-3-2"
  - "forms"
  - "labels"
description: "WCAG 3.3.2 asks for a clear label or instruction on every input. Why a placeholder is not a label, how to handle required fields, and how to check a form in a minute."
keywords:
  - WCAG 3.3.2
  - labels or instructions
  - placeholder is not a label
  - accessible forms
  - required field marking
  - form field label
---

You open a form with five fields. No labels, just grey example text that vanishes the moment you start typing. Halfway down you no longer remember what the first field wanted. A couple of fields have an asterisk and nothing on the page says what it means.

WCAG says: **every input needs a label or instruction that makes clear what is expected**.

The important word is *before*. This criterion is about knowing what to type before you type it, not about being told afterwards that you got it wrong.

## What the criterion says

[Success criterion 3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) (level A) requires that labels or instructions are provided when content requires user input.

It is deliberately about presence rather than mechanics. Is there something telling the user what goes in this field? Whether that label is wired to the input in code is [SC 1.3.1](/en/blog/wcag-1-3-1-info-and-relationships/). Whether the label is any good is [SC 2.4.6](/en/blog/wcag-2-4-6-headings-and-labels/). All three apply to the same visible words, which is why teams often fix one and think they are done.

## What the criterion expects

**A visible label on every field** that stays visible while and after typing.

**An instruction where a format is required.** If the field wants a particular shape, say so, ideally with an example. "Date, for example 11-03-2026."

**Clarity about which fields are required.** If some fields are optional, mark one group or the other and explain the marking. If you use an asterisk, say at the top of the form what it means.

**A group label on sets of radio buttons and checkboxes.** "How would you like to pay?" above the options. Without the question, the individual choices mean nothing.

## Why a placeholder is not a label

This deserves its own section, because it is the most common failure of this criterion and it is usually a deliberate design decision rather than an oversight.

A placeholder disappears the moment somebody types. Anyone checking their answers halfway through a form has nothing left to read. Placeholder text is also usually too light to meet [SC 1.4.3](/en/blog/wcag-1-4-3-contrast-minimum/), and there is no `<label>` to click, so the target area is smaller than it should be.

Be precise about which criterion this fails, because it gets misquoted in both directions. Giving a field its *name* through a placeholder is acceptable under [SC 4.1.2](/en/blog/wcag-4-1-2-name-role-value/): `placeholder` is the last fallback in the accessible name calculation, below `title`, and the attribute stays in the DOM while you type, so a screen reader user is not left with an unnamed field. Using a placeholder as the *visible label* is a failure of this criterion, 3.3.2, and it is one of the most common failures we report.

The two statements are not in tension. The name is there for assistive software and the label is gone for everyone looking at the form, including the screen reader user who has some sight, the person with dyslexia checking their answers, and anyone who got interrupted halfway down.

Use a placeholder as an extra example next to a visible label, or not at all.

## Mistakes we keep finding

**Placeholder as the only label.** Covered above. A failure of this criterion, whatever the accessible name calculation says.

**A label too far from its field.** If it is not visually obvious which label belongs to which input, people guess, especially in multi-column layouts.

**No instruction where the format matters.** A date field with no hint: 11-03-2026, 03/11/2026, or 11 March 2026? An account number: with or without spaces?

**Instructions that only appear after a mistake.** "Invalid phone number." Which format would have been valid? Say it up front.

**A group of options with no question above it.** Loose radio buttons reading "Yes" and "No" with the question styled as a plain paragraph somewhere nearby.

**An asterisk with no key.** Very common, and a thirty-second fix.

**Instructions that rely on placement.** "Enter your details in the box on the right." That is [SC 1.3.3 Sensory Characteristics](/en/blog/wcag-1-3-3-sensory-characteristics/) as well.

## How to test it

**Accessible names of form fields** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** marks inputs with no accessible name and, importantly here, marks fields that have only a placeholder. That second category is your placeholder-as-label list.

**Groups and visible labels** catches fieldsets without a legend and groups without a name, and shows which fields have only an `aria-label` and no visible text. Sometimes that is correct, such as a magnifying glass on a search field. Usually there should be visible words.

**Required fields** shows which fields are marked as required for assistive software, and warns about fields with an asterisk or the word "required" in the label that lack the actual marking.

Then do the test that decides it. Fill in your own form and imagine every placeholder gone. Can you still tell what each field wants? That is the question the criterion is really asking.

### Who does what

- **Editors** write the labels, the instructions, the explanation at the top and the question above each group. In most CMS form builders this is entirely yours, and it is the majority of this criterion.
- **Designers** leave room for a visible label on every field and design the required-field marking, rather than leaving it to be added later.
- **Developers** connect labels to fields, mark required fields with `required` or `aria-required`, and give groups a `<fieldset>` and `<legend>`.

## Frequently asked questions

### Can I use a floating label that moves above the field when you type?

Yes. The label stays visible, which is the requirement. Watch the contrast in the small state and make sure it does not collide with the value at larger text spacing.

### Should I mark required or optional fields?

Either, as long as it is consistent and explained. If most fields are optional, mark the required ones. If nearly everything is required, marking the few optional ones is calmer. Always explain an asterisk.

### Our forms come from a module in the CMS. What can I do myself?

The words are yours: labels, instructions, the introduction and the question above a group. Whether the label is technically wired to the field is the module's job. Check it with the Radar if you are not sure.

### Do instructions have to sit next to the field?

They have to be available before the user needs them. Directly at the field is best. A format rule buried in a paragraph three sections up is not.

### Is a search field without a visible label a failure?

Usually not. A search input with a magnifying glass button and an `aria-label` is a well understood pattern and the purpose is clear from context. It is one of the few places where an invisible label is the reasonable choice.

## Summary

- Every input needs a label or instruction, visible before typing starts.
- A placeholder is not a label. It disappears exactly when it is needed.
- State the format where it matters, with an example.
- Mark required fields and explain the marking.
- Give every group of radio buttons or checkboxes a question above it.
- Check with the form field name, groups and required fields checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar).

Most of this criterion is writing, which means most of it is fixable this afternoon without touching code. [Ask us for a quote](/en/contact/) if you want the whole form set read properly, or want the technical wiring checked at the same time.

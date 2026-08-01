---
title: 'SC 1.3.5 - What does "Identify Input Purpose" mean?'
date: 2026-08-01
slug: "wcag-1-3-5-identify-input-purpose"
translationKey: "sc-1-3-5"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-3-5"
  - "forms"
  - "autocomplete"
description: "WCAG 1.3.5 asks that fields collecting personal data declare what they are for, using autocomplete. Which values apply, which fields are exempt, and how to check a form."
keywords:
  - WCAG 1.3.5
  - identify input purpose
  - autocomplete attribute
  - autofill accessibility
  - form autocomplete values
  - personal data fields
---

You are filling in yet another contact form. Name, email, phone, address. Your browser has known all of this for years and the form will not let it help. So you type it all again.

Annoying when you are in a hurry. A genuine barrier when you have a motor impairment and every keystroke costs effort, or a cognitive disability and every field is a fresh decision.

WCAG says: **fields that collect personal data have to declare what they are for, in a way software can read**.

## What the criterion says

[Success criterion 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html) (level AA, new in WCAG 2.1) requires that the purpose of each input field collecting information about the user can be programmatically determined, when the field serves a purpose identified in the [Input Purposes list](https://www.w3.org/TR/WCAG22/#input-purposes) and the technology supports it.

In HTML that means the `autocomplete` attribute. The criterion is deliberately worded to allow other mechanisms in other technologies, but for the web this is what it comes down to.

Note the scope: **information about the user**. A field asking for your own email address is in. A field asking for a colleague's email address, a search box, a message field or a product filter is not.

## The values you will use most

| Value | Meaning |
|---|---|
| `name` | Full name |
| `given-name` | First name |
| `family-name` | Last name |
| `email` | Email address |
| `tel` | Phone number |
| `street-address` | Street and house number |
| `postal-code` | Postcode |
| `country-name` | Country |
| `bday` | Date of birth |
| `organization` | Company name |
| `current-password` | Existing password |
| `new-password` | Password being set |

The full list is in the [HTML specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).

Two that are worth getting right: `current-password` and `new-password` are what stop a password manager from offering the wrong thing on a change-password form, which is a real usability bug rather than a theoretical one.

## Why this matters

- **People with motor impairments.** Autofill can turn a five-minute form into a few seconds. Fewer keystrokes means less pain and less fatigue.
- **People with cognitive disabilities.** Some assistive tools use the autocomplete value to add a familiar icon to the field, an envelope for email, a handset for phone. That makes the form recognisable rather than something to be decoded each time.
- **People with dyslexia or a memory impairment.** Not having to recall and retype an address removes an error-prone step.
- **Everyone.** Autofill is simply faster, and it prevents typos in exactly the fields where a typo means the order never arrives.

## Mistakes we keep finding

**No `autocomplete` at all.** By far the most common. It takes seconds to add and it is left out by default.

**`autocomplete="on"`.** Not enough. The criterion needs the specific purpose, so `email`, `tel`, `given-name`. `on` tells software that autofill is permitted, not what the field holds.

**`autocomplete="off"` on fields that should have it.** Usually added for a reason that made sense once, such as stopping a browser from filling in a form on a shared machine. Browsers increasingly ignore it for exactly this reason, but it still fails the criterion.

**The wrong value.** `autocomplete="name"` on a field asking for a company name. `autocomplete="tel"` on a field for a reference number. A wrong value is worse than none, because the browser fills in something confidently wrong.

**Custom values.** `autocomplete="phonenumber"` does nothing. The values are a fixed list.

**Address fields split in a way the tokens do not match.** Dutch address forms often split into street, house number and suffix, which does not map cleanly onto `street-address` or `address-line1`. Pick the closest tokens rather than inventing your own, and accept that autofill will be imperfect. The criterion asks that the purpose is identifiable, not that autofill is flawless.

## How to test it

Turn on **autocomplete on personal data** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It shows the value on each field that asks for personal data and warns when the value is missing or is not one the specification recognises. That covers the missing case and the invented-value case in one pass.

What it cannot judge is whether the value is the *right* one, because that depends on what the field is actually for. So walk the form once and ask, per field: does this ask for something about the person filling it in, and does the value describe that thing?

Then test it for real. Fill in the form with your browser's autofill and see what lands where. A phone number in the postcode field is instant proof.

### Who does what

- **Developers** own this one. It is an attribute per field, and on most forms it is a ten-minute job.
- **Designers** flag that a form asks for personal data, so it is not discovered late.
- **Editors** can spot the symptom without reading code: if your browser does not offer to fill your own contact form, something is missing.

## Frequently asked questions

### Does a search field need `autocomplete`?

No. It does not collect information about the user. The same goes for message fields, filters and quantity inputs.

### What about a form where I enter somebody else's details?

The criterion is about information about the user filling in the form. A field for a colleague's address is outside it. In practice many teams add the values anyway for consistency, which is harmless as long as the form does not then autofill the wrong person's data by default.

### Can I disable autofill on a payment form?

You can, and you would fail this criterion for the fields that are in scope. The stronger move is to use the correct values, including the credit card tokens, and let the user's password manager do its job. It is safer than making them read numbers off a card.

### Does this apply to level A?

No, 1.3.5 is level AA and was added in WCAG 2.1. If you are only claiming A, it does not apply. Almost every legal framework in Europe requires AA.

### Is there an AAA version?

Yes, [SC 1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html), which extends the idea to icons, regions and controls. Support for it is thin and few organisations target it.

## Summary

- Fields collecting the user's own personal data need an `autocomplete` value from the fixed list.
- `on` is not enough and a wrong value is worse than none.
- Search boxes, message fields and filters are out of scope.
- Get `current-password` and `new-password` right, they solve a real password manager problem.
- Check with the autocomplete on personal data check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then autofill your own form and see where things land.

This is one of the more mechanical criteria and one of the quickest wins in any audit: a short list of attributes that measurably shortens every form on the site. [Ask us for a quote](/en/contact/) if you want your forms checked properly.

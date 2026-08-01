---
title: 'SC 3.3.1 - What does "Error Identification" mean?'
date: 2026-08-01
slug: "wcag-3-3-1-error-identification"
translationKey: "sc-3-3-1"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "3-3-1"
  - "forms"
  - "errors"
description: "WCAG 3.3.1 asks that form errors are identified and described in text. Why a red border is not enough, and why the message has to be tied to the field in code."
keywords:
  - WCAG 3.3.1
  - error identification
  - form error messages
  - aria-describedby error
  - accessible form validation
  - red border error
---

You fill in a form, press send, and the page comes back with something highlighted in red. Somewhere. You scroll, you squint, you compare fields. Eventually you find it, or you give up and phone.

Now take away the ability to see the red. WCAG says: **when an input error is detected, say which field it is and say what is wrong, in text**.

## What the criterion says

[Success criterion 3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) (level A) requires that if an input error is automatically detected, the item in error is identified and the error is described to the user in text.

Two obligations, and teams usually meet one of them. **Identify the item**: say which field. **Describe the error in text**: say what is wrong with it, in words, not in colour.

Note what it does not ask. You do not have to correct the error automatically, and you do not have to explain how to fix it. Suggesting a correction is [SC 3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html), a separate criterion at level AA.

## Why this matters

- **Screen reader users** get no colour and no visual proximity. If the message is not attached to the field in code, they will not hear it when they arrive at the field, and often will not hear it at all.
- **People with colour vision deficiency** cannot rely on a red border. Around one in twelve men has some form of it. That is also [SC 1.4.1 Use of Colour](/en/blog/wcag-1-4-1-use-of-colour/).
- **People with low vision** using magnification see a small part of the screen. A summary at the top of the form is off screen by the time they reach the field.
- **People with cognitive disabilities** need to know what is wrong, not that something is.
- **Everyone**, on a form they filled in ten minutes ago and would rather not fill in again.

A form is usually the most valuable thing on the page. An error nobody can resolve is an abandoned application.

## Mistakes we keep finding

**A red border and nothing else.** The most common failure by a wide margin. Colour carries the entire message, so it carries no message at all for a large group.

**A generic summary at the top.** "Something went wrong. Please check your entries." True, unhelpful, and it identifies nothing.

**The message exists but is not linked to the field.** This is the one that passes a visual review and fails in practice. The text is on the page, sitting next to the input, and there is no `aria-describedby` or `aria-errormessage` pointing at it. A screen reader user tabs into the field, hears the label, and hears nothing about the error.

```html
<!-- Looks right, announces nothing -->
<label for="email">Email address</label>
<input type="email" id="email">
<span class="error">Enter an email address with an @ sign</span>

<!-- Tied to the field -->
<label for="email">Email address</label>
<input type="email" id="email" aria-describedby="email-error" aria-invalid="true">
<span class="error" id="email-error">Enter an email address with an @ sign</span>
```

**Instructions dressed up as errors.** "This field is required" is what the field always needed, not what went wrong. "You have not filled in your email address" states the actual problem. A good error message contains a negative.

**Errors that appear and are never announced.** Client-side validation injects the message into the DOM after the user has already moved on. Without a live region or focus management nothing reaches assistive software. That is [SC 4.1.3 Status Messages](/en/blog/wcag-4-1-3-status-messages/).

**Validation that fires while you type.** Telling somebody their email address is invalid after three characters is technically an identified error and practically an interruption. Validate on blur or on submit.

**A message that disappears too fast.** A toast that vanishes after four seconds. Someone using magnification may not have reached it yet.

## How to test it

Turn on **error messages on form fields** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It looks for visible error messages, whether through `role="alert"`, `aria-live`, or a class such as `error` or `invalid`, and checks whether they are tied to an input through `aria-describedby` or `aria-errormessage`. An unlinked message is reported as an error, because a screen reader will not announce it. A linked message on a field without `aria-invalid="true"` gets a warning.

That check is the fast way to find the third mistake above, which is the one visual review never catches.

Then break the form yourself. Submit it empty. Submit it with a malformed email address, a date in the wrong format, a phone number with letters in it. For each error, ask three questions:

- Does the message say which field?
- Does it say what is wrong, in words?
- If I tab to that field with my eyes closed, do I hear it?

### Who does what

- **Editors** write the message text. Say what went wrong, in plain language, from the reader's side. This is the part that most often needs rewriting and the part you can fix without a developer.
- **Designers** make sure an error state is more than a colour, and leave room in the layout for a message under every field rather than squeezing it in later.
- **Developers** tie the message to the field with `aria-describedby` or `aria-errormessage`, set `aria-invalid`, move focus sensibly on submit, and make sure messages injected by script are announced.

## Frequently asked questions

### Is a red border ever enough?

No, not on its own. Colour may carry the error as well as the text, and often should, but never instead of it.

### Do I have to say how to fix it?

Not for this criterion. Saying what is wrong is 3.3.1. Suggesting a correction, where you know one, is SC 3.3.3 at level AA, so most organisations need both in practice.

### Should the error summary at the top go away?

No. A summary at the top with links to each field is a good pattern, especially on long forms. It just has to be in addition to a message at the field, not instead of it.

### Where should focus go after a failed submit?

Either to the summary, so the user hears how many errors there are and can jump to each, or to the first field in error. Both are defensible. Leaving focus on the submit button is not.

### What about a required checkbox, like accepting terms?

The criterion allows a brief message for a simple error. "You have not accepted the terms" is enough. What is not enough is only turning the checkbox red.

## Summary

- Say which field is in error and say what is wrong, in text.
- A red border alone fails, always.
- The message has to be tied to the input in code, or screen reader users will never hear it.
- "This field is required" is an instruction. "You have not filled in your email address" is an error message.
- Check with the error messages on form fields check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then break your own form on purpose.

A tool can tell you a message is not linked to its field. Whether the wording actually helps the person who is stuck is a judgement, and it is the part that decides whether the form gets finished. [Ask us for a quote](/en/contact/) if you want your forms read that way.

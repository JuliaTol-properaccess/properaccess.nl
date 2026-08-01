---
title: 'SC 3.3.8 - What does "Accessible Authentication (Minimum)" mean?'
date: 2026-08-01
slug: "wcag-3-3-8-accessible-authentication"
translationKey: "sc-3-3-8"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "3-3-8"
  - "forms"
  - "authentication"
description: "WCAG 3.3.8 asks that logging in does not require a cognitive function test without an alternative. Why blocking paste fails, what counts as an exception, and how to check."
keywords:
  - WCAG 3.3.8
  - accessible authentication
  - CAPTCHA accessibility
  - password paste blocked
  - passkeys accessibility
  - cognitive function test
---

You want to log in. First a sixteen-character password you are supposed to have memorised. Then a CAPTCHA with distorted text. Then every traffic light in a grid of photos. Make one mistake and you start again.

Irritating for most people. For someone with dyslexia, a memory impairment or a cognitive disability it is where they stop and phone you instead, if there is a number.

WCAG says: **logging in may not require a cognitive function test unless you offer a way around it**.

## What the criterion says

[Success criterion 3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) (level AA, new in WCAG 2.2) requires that a cognitive function test is not required for any step in an authentication process, unless that step provides at least one of:

- **Alternative.** Another authentication method that does not rely on a cognitive function test.
- **Mechanism.** Something that helps the user complete the test. Allowing a password manager to fill and paste the password is the everyday example.
- **Object recognition.** The test is to recognise objects, such as pictures of buses.
- **Personal content.** The test is to identify non-text content the user provided to the site.

A cognitive function test is anything asking you to remember, recognise, puzzle out or calculate: memorising a password, solving a CAPTCHA, a sliding puzzle, or a security question about your first pet.

### The numbers, because they get mixed up

Three neighbouring criteria are easy to confuse, and we have seen the wrong pairing in print more than once:

| Criterion | Level | What it is |
|---|---|---|
| 3.3.7 Redundant Entry | A | Not asking for the same information twice in one process |
| 3.3.8 Accessible Authentication (Minimum) | AA | This criterion, with the object recognition and personal content exceptions |
| 3.3.9 Accessible Authentication (Enhanced) | AAA | The same, but **without** those two exceptions |

So 3.3.7 is not a lower-level version of this criterion, it is about something else entirely. And object-recognition CAPTCHAs are permitted at AA and not at AAA. For most organisations, aiming at AA, 3.3.8 is the one that applies and "click all the buses" is still allowed, though it is a poor choice for other reasons.

## Why this matters

Memory and puzzle-solving are exactly the functions that a cognitive disability affects, and authentication is the gate in front of everything else on your site. Someone who cannot get past your login does not have an accessibility problem with your account pages, they have no account pages.

The groups affected most:

- People with dyslexia, for whom distorted-text CAPTCHAs are close to impossible.
- People with memory impairments, including a lot of older users.
- People with low vision, for whom visual puzzles are the wrong modality.
- People with motor impairments, who are slowed down by every extra step and by time limits on codes.

## Mistakes we keep finding

**Blocking paste in password fields.** The most common failure of this criterion, and the most avoidable. Blocking paste stops password managers working, which removes the "mechanism" exception and leaves the user memorising a password. It is usually justified as a security measure and it is the opposite: it pushes people toward passwords they can remember, which are worse.

**CAPTCHA as the only verification.** Distorted text has no exception at any level. Object recognition passes AA but excludes people with low vision, so it is a compliance pass and a usability failure.

**Security questions as the only recovery route.** "What is your mother's maiden name?" is a memory test with no alternative.

**Time limits on verification codes that are too short.** A code valid for thirty seconds is a problem for anyone who types slowly or has to switch devices. That also touches [SC 2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html).

**Two-factor by SMS only.** Reading a code from one device and typing it into another is a transcription task. Offer an authenticator app, a passkey, or an email link as well.

**Missing `autocomplete` on password fields.** Without `current-password` and `new-password`, password managers guess, and on a change-password form they guess wrong. That is also [SC 1.3.5](/en/blog/wcag-1-3-5-identify-input-purpose/).

## What works instead

| Method | Cognitive load | Notes |
|---|---|---|
| Passkeys (WebAuthn) | None | Supported in all major browsers, and more secure than passwords |
| Biometrics | None | Fingerprint or face, on the user's own device |
| Email magic link | Low | No memorising, no transcription |
| Password plus password manager | Low | Requires paste to be allowed and `autocomplete` to be correct |
| Single sign-on | Low | Shifts the problem to the provider, who usually handles it well |
| Invisible risk-scoring CAPTCHA | None | No puzzle presented to the user at all |

Accessible authentication does not cost you security. Passkeys are more secure than passwords, not less, which makes this one of the rare criteria where the accessible answer is also the answer the security team wants.

## How to test it

Turn on **paste blocked** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It marks elements that block pasting, copying or dragging through inline handlers such as `onpaste` and `oncopy`. That finds the most common failure directly.

The check has a limit worth knowing: blocks added through scripts rather than inline attributes are invisible to it. So always also test by hand. Open your password manager, or just copy a string, and try to paste it into every password field on the site, including the change-password and reset forms, which are the ones nobody tests.

Then walk the whole authentication flow and ask, at each step:

- Does this step ask me to remember, recognise or solve something?
- If so, is there another route that does not?
- Can I complete it with a password manager?
- Can I do it all with a keyboard, and does a screen reader announce each step?

Include registration, login, password reset, two-factor and any re-authentication before a sensitive action. The failure is usually not on the login page.

### Who does what

- **Developers** allow paste, set `autocomplete` correctly, and add passkey support where they can.
- **Designers** design the alternative route so it is visible rather than buried, and give verification codes enough time.
- **Editors** and managers can test the whole thing in five minutes with a password manager and report what fails.

## Frequently asked questions

### Is a CAPTCHA banned?

Not at AA. Object recognition is an explicit exception in 3.3.8, so "click all the buses" passes. Distorted text does not, because it is not object recognition. At AAA neither is allowed. Invisible score-based verification avoids the whole question.

### Can I block paste for security?

You can, and you fail this criterion. It is also counterproductive: it forces memorable, weaker passwords and locks out password managers. The security guidance from NCSC and NIST has advised against it for years.

### Are passkeys required?

No. They are one good way to meet the criterion, and currently the strongest, but any route that removes the cognitive test qualifies.

### Does this apply to a password strength meter?

No. That is feedback, not a test you have to pass from memory.

### What about "remember me"?

It genuinely helps, because it reduces how often anyone faces the gate at all. It is not by itself an alternative, because the first login still has to be possible.

## Summary

- Authentication may not require remembering, recognising or puzzle-solving without an alternative.
- Blocking paste in password fields is the most common failure and the easiest to fix.
- 3.3.7 is Redundant Entry, a different criterion. 3.3.8 is AA and allows object-recognition CAPTCHAs. 3.3.9 is AAA and does not.
- Passkeys, biometrics, magic links and password managers all satisfy it.
- Check with the paste blocked check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then try pasting into every password field yourself.

Test the whole flow, not the login page. Reset and two-factor are where we find most of these, because they get built once and never revisited. [Ask us for a quote](/en/contact/) if you want the full journey checked.

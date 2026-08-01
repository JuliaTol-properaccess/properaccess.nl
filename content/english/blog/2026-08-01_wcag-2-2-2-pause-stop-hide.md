---
title: 'SC 2.2.2 - What does "Pause, Stop, Hide" mean?'
date: 2026-08-01
slug: "wcag-2-2-2-pause-stop-hide"
translationKey: "sc-2-2-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-2-2"
  - "motion"
  - "carousels"
description: "WCAG 2.2.2 asks that moving, blinking or auto-updating content can be paused, stopped or hidden. The five-second rule, the exceptions, and where carousels go wrong."
keywords:
  - WCAG 2.2.2
  - pause stop hide
  - carousel accessibility
  - auto-playing animation
  - prefers-reduced-motion
  - news ticker accessibility
---

A carousel cycling through slides on its own. A news ticker sliding along the bottom. A background animation that never settles. To you it is a dynamic design element. To someone with ADHD, a concentration disorder or a vestibular condition it can make the rest of the page unreadable.

WCAG says: **if it moves, blinks or scrolls by itself, the visitor has to be able to pause, stop or hide it**.

## What the criterion says

[Success criterion 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) (level A) sets two rules.

**Moving, blinking or scrolling content** that starts automatically, lasts more than **five seconds**, and is presented alongside other content: the user needs a way to pause, stop or hide it.

**Auto-updating content** that starts automatically and is presented alongside other content: the user needs a way to pause, stop or hide it, or to control how often it updates.

The five seconds only applies to the first rule. Something that animates once for three seconds and settles is fine. Something that loops indefinitely is not.

## The exceptions

- **Essential movement.** If pausing would break the point of the thing. A live video stream is live, and you cannot stop time. A loading spinner communicates that something is happening, so freezing it would be counterproductive.
- **Content that is on its own.** The criterion says "presented in parallel with other content". A full-screen animation with nothing else on the page is not competing for attention with anything.

"Essential" is narrower than teams want it to be. A carousel is not live content. An animated hero is not essential to a hero.

## Why this matters

Movement takes attention automatically. That is exactly why it gets used, and exactly why it is a problem for people who cannot redirect their attention at will:

- **People with ADHD** cannot stop looking at the moving thing, so the static text next to it does not get read.
- **People with vestibular disorders** can get dizzy or nauseous from certain motion, particularly parallax and large sliding transitions.
- **People with cognitive disabilities** lose their place when content changes while they are still processing it.
- **Screen reader users** get interrupted when the DOM changes underneath them mid-navigation.
- **People who read slowly**, for any reason, cannot finish a carousel slide before it moves on.

## Where it goes wrong

**Carousels.** The most common offender by a distance. Nearly every site has one and nearly none has a pause button. The irony is well documented: visitors rarely look past the first slide, so you are creating an accessibility problem for content almost nobody sees.

If you keep it, add a visible pause and play control, make it reachable by keyboard, and pause on hover and on focus as well.

```html
<div class="carousel" role="region" aria-label="Offers" aria-roledescription="carousel">
  <button type="button" class="carousel-pause" aria-label="Pause carousel">Pause</button>
  <!-- slides -->
</div>
```

**Auto-playing background video.** A muted hero video escapes [SC 1.4.2](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html), which is about sound, but it lands squarely here if it moves for more than five seconds.

**Animated backgrounds.** CSS or Lottie animations that loop forever. Honour the reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-background {
    animation: none;
  }
}
```

Worth being precise: `prefers-reduced-motion` is good practice and is not by itself compliance. The criterion asks for a mechanism the user can operate on your page. A user who has never found the OS setting still needs a control.

**Scrolling text.** News tickers and marquee announcements. Almost always a problem, because they are hard to read for anyone with a reading difficulty and usually cannot be stopped.

**Auto-refreshing regions.** Live scores, stock tickers, a chat that appends messages. These need a pause too, and they usually also need [SC 4.1.3 Status Messages](/en/blog/wcag-4-1-3-status-messages/) handled properly so the updates are announced sensibly rather than constantly.

## Mistakes we keep finding

- Carousels with no pause or stop control at all.
- A pause button that exists but cannot be reached with the keyboard.
- A pause button with no accessible name, usually an icon with nothing else.
- Animations that ignore `prefers-reduced-motion`.
- Movement that restarts when you scroll back to it, undoing the pause.
- A pause control that only appears on hover, so keyboard and touch users never see it.

## How to test it

Turn on **automatic motion** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It finds motion that starts by itself and lasts longer than five seconds: CSS animations, autoplay video and marquees. It also watches script-driven motion such as carousels and tickers for five seconds, which is what catches the JavaScript carousels that do not show up as CSS animation at all.

The check tells you what moves. You then decide two things it cannot:

- Is there a control to pause, stop or hide it?
- Does that control work with a keyboard, and does it have a name?

For the second, **tab order** and **show accessible name** in the same panel answer it quickly.

Then set your operating system to reduce motion and reload. Anything still moving is not honouring the preference, which is not a failure of this criterion but is usually the same fix.

### Who does what

- **Designers** decide whether the movement earns its place at all, and design the pause control as part of the component rather than as an afterthought.
- **Developers** build the control, wire it to the keyboard, pause on hover and focus, and honour `prefers-reduced-motion`.
- **Editors** can ask the most useful question: does this carousel need to rotate? Setting it to advance only on click removes the problem entirely and costs nothing.

## Frequently asked questions

### Is a loading spinner a failure?

No. It is essential: it communicates that something is happening. If it spins for two minutes you have a different problem.

### Does an animated GIF count?

Yes, if it loops for more than five seconds alongside other content. A GIF that plays once and stops is fine.

### Is `prefers-reduced-motion` enough on its own?

No. It is genuinely good practice and you should do it, but the criterion asks for a mechanism on the page. Plenty of people who need less motion have never changed an OS setting.

### What about a carousel that only advances when you click?

That is not automatic movement, so this criterion does not apply. It is also the easiest way to comply.

### Does the pause have to stay paused?

Yes, in practice. A pause that resets when the user scrolls away and back is not a working mechanism.

## Summary

- Automatic movement lasting more than five seconds needs a pause, stop or hide control.
- Auto-updating regions need one too.
- Essential motion, such as a live stream or a loading spinner, is exempt. Carousels are not essential.
- The control has to be keyboard reachable and have a name.
- `prefers-reduced-motion` is good practice, not a substitute for the control.
- Check with the automatic motion check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar).

A tool can tell you what moves. Whether the pause control is genuinely operable, and whether the movement was worth having, is a conversation rather than a scan. [Ask us for a quote](/en/contact/) if you want that conversation grounded in what is actually on your site.

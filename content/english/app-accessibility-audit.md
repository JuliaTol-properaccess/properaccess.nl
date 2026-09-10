---
title: "App accessibility audit"
meta_title: "Accessibility audit of iOS and Android apps: VoiceOver and TalkBack, on real devices | Proper Access"
date: 2026-09-10
slug: "app-accessibility-audit"
layout: "service-en"
description: "We test mobile apps by hand on real iPhones, iPads and Android devices, with VoiceOver and TalkBack, against WCAG 2.2 and EN 301 549. €2,150 per platform excl. VAT, a separate report per platform, no source code needed."
keywords:
  - app accessibility audit
  - mobile app WCAG audit
  - iOS accessibility audit
  - Android accessibility audit
  - VoiceOver TalkBack testing
  - EAA mobile app
  - EN 301 549 app
  - app accessibility Netherlands

banner:
  badge: "€2,150 per platform · real devices"
  title: "An app that works with VoiceOver and TalkBack, and meets the European Accessibility Act"
  content: "An app fails in different places than a website: screens instead of pages, gestures instead of a mouse, system settings instead of browser settings. We test on real devices, with the screen reader built into the operating system, and give you a report per component your developers can act on."
  bullets:
    - "**On real iPhones, iPads and Android devices**, never in an emulator"
    - "**Against WCAG 2.2 and EN 301 549**, the standard the EAA uses for apps"
    - "**A separate report per platform**, because iOS and Android fail differently"
  button:
    enable: true
    label: "Request a quote"
    link: "/en/contact/"

trust:
  label: "Apps we audited"
  names:
    - "Rijksmuseum"
    - "Museumkaart"
    - "Eteck"

sections_header: "What we test in an app"
sections:
  - eyebrow: "Screen reader"
    title: "Labels, names and reading order"
    body: "Buttons announced as \"button\" without saying what they do, icons without an accessible name, decorative images the screen reader picks up anyway. We also check the reading order: in code it often follows the structure of the view, not what the user sees on screen."
    card_eyebrow: "Tested with"
    card_icon: "smartphone"
    card_title: "Real devices and system tools"
    card_list:
      - "VoiceOver on recent iPhones and iPads"
      - "TalkBack on recent Android devices"
      - "System text size up to the largest setting"
      - "Both orientations"
      - "Reduced motion and other system settings"
  - eyebrow: "Gestures and touch"
    title: "Actions that only work with a swipe, and targets too small to hit"
    body: "Actions that only work with a swipe or a long press and have no alternative, and touch targets too small to hit reliably. For someone with a motor impairment or a tremor that is the difference between ordering and not ordering. We test the flows that matter: logging in, creating an account, buying a ticket, completing a payment, with the screen reader only, and check whether error messages are announced and whether you can get back to the field that was wrong."
    card_eyebrow: "Text size"
    card_icon: "format_size"
    card_title: "The most common finding"
    card_list:
      - "Fixed screen heights that cut off content at large text"
      - "Labels truncated behind a button"
      - "Screens designed in Figma that were never checked at 200% text size"
  - eyebrow: "The standard"
    title: "EN 301 549 asks more of an app than WCAG does"
    body: "The benchmark is EN 301 549, the European standard under the EAA. It adopts the WCAG success criteria and adds requirements that do not exist on the web: your app has to follow the text size the user set in the phone settings, and your screens have to work in both orientations. Those two points produce findings in most apps we test. We test against WCAG 2.2, one version ahead of the standard, at no extra cost."
    card_eyebrow: "No source code needed"
    card_icon: "lock_open"
    card_title: "How we get the app"
    card_list:
      - "iOS: TestFlight or the App Store"
      - "Android: an APK or the Play Store"
      - "Native, React Native, Flutter or a webview wrapper: we test the result on the device"
      - "A code review can be added on request"

steps_header: "From quote to a report per platform"
steps:
  - title: "Quote"
    body: "€2,150 per platform excl. 21% VAT. iOS and Android count separately, because they are written in different languages, VoiceOver and TalkBack behave differently, and even a hybrid app renders its own components on each platform. What passes on one can be a finding on the other."
  - title: "Audit on real devices"
    body: "Three to five weeks, planned around your release cycle. A senior auditor tests, a second auditor reviews, and every report is checked by three people before delivery."
  - title: "Report and retest"
    body: "A report per component with a user story per finding, the device and assistive technology used, a screenshot and a fix. Plus a CSV for your backlog. After your fixes we retest per finding."

faqs:
  - question: "Are mobile apps covered by the European Accessibility Act?"
    answer: "Yes. The EAA has applied since 28 June 2025 and covers the apps of companies that offer covered services to consumers: banking, travel booking, ticketing, e-commerce and communication services. Which Dutch regulator supervises you depends on the service: the [ACM](/en/eaa-acm-e-commerce/) for e-commerce and telecom, the [AFM](/en/eaa-afm-financial-services/) for financial services, the [ILT](/en/eaa-ilt-passenger-transport/) for passenger transport."
  - question: "Can you audit one platform only?"
    answer: "Yes. Many clients start with the platform most of their customers use and add the other later. Each platform gets its own report and its own sample of screens."
  - question: "How is this different from a website audit?"
    answer: "We test on real devices with the native screen readers instead of in a browser. We test touch interaction, gestures, rotation and platform patterns that do not exist on the web, such as swipe navigation and system accessibility settings. If you also have a website, that is a separate audit with its own report."
  - question: "Do we have to share the source code?"
    answer: "No. We use the app the way a user does, through TestFlight or the App Store on iOS and through an APK or the Play Store on Android. A code review can be added if you want it."
  - question: "What does it cost?"
    answer: "€2,150 per platform, excl. 21% VAT. Two platforms is two audits and two reports. For the Rijksmuseum we audited two apps this way, each with its own report."
---

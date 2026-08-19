---
title: "PDF accessibility checker"
description: "The free PDF checker is offline. We are building a successor that repairs your PDF as well as checking it, without changing how the document looks."
layout: "pdf-tool-aankondiging"
weight: 10
binnenkort: true
doelgroep:
  - "Web editors"
  - "Web developers"
---

The free checker that used to be here is offline. A successor is on the way, and it does more than
check: it repairs the document.

## What the new tool does

You upload a PDF and you get **your own document back**, with a tag structure where there was none and
with the title, the language and the matching viewer settings written in. Same pages, same layout. We
do not build a second document that looks different.

For every document we compare the pages before and after the repair as images. If anything changed, we
tell you which page and how large the difference is.

You also get a report: what was fixed, what is still open, and which checks we did not run because a
person has to look at them. That last list belongs in there. A check that does not run does not
produce a clean document.

## What we measured

On 19 August 2026 we ran 33 PDFs from Dutch organisations through this repair, all of them documents
an auditor at Proper Access had already written the answer for. Before the repair they carried 78
findings between them, afterwards 30. Of the 33 documents, 32 came out pixel-identical to the
original.

## What the tool does not do

A repaired code layer does not make your document accessible. Whether the reading order is right,
whether a table header sits in the right place, whether a description of an image actually describes
the image: no tool can settle that. So we do not issue any statement that your document meets WCAG or
the European Accessibility Act.

## Where your document stays

Every step runs on our own server in the EU. Your document does not go to Adobe, to Google, to a
language model or to any other supplier. We tested that by running the repair with the network
connection closed.

We delete the file you upload as soon as the repair finishes. We delete the result 24 hours later.

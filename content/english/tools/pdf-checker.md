---
title: "PDF accessibility checker"
description: "The free PDF checker is offline. Its successor is at pdf-toegankelijk.nl and is in closed testing: it repairs the code layer of your PDF without changing how the document looks."
layout: "pdf-tool-aankondiging"
weight: 10
binnenkort: true
doelgroep:
  - "Web editors"
  - "Web developers"
---

The free checker that used to be here is offline. Its successor is at
[pdf-toegankelijk.nl](https://pdf-toegankelijk.nl), and it does more than check: it repairs the document. The tool is in
closed testing and access runs per organisation. The site is in Dutch for now.

## What the new tool does

You upload a PDF and you get **your own document back**, with a tag structure where there was none and
with the title, the language and the matching viewer settings written in. Same pages, same layout. We
do not build a second document that looks different.

For every document we compare the pages before and after the repair as images. If anything changed, we
tell you which page and how large the difference is.

You also get a report: what was fixed, what is still open, and which checks we did not run because a
person has to look at them. That last list belongs in there. A check that does not run does not
produce a clean document.

We are testing the repair on documents from our own audit practice, and we will keep developing it
over the coming months. Once we have figures we can stand behind, we will put them here. To see how
it works today, go to [pdf-toegankelijk.nl](https://pdf-toegankelijk.nl) <span lang="nl">(in Dutch)</span>.

## How it works

Upload your PDF, let the tool repair it, and download the result to your own computer. Your document
then stays with us for another 8 hours.

Not finished within those 8 hours? Upload the repaired file again the next day and carry on where you
stopped. Your work sits in the file you downloaded, so you never start over.

## What the tool does not do

A repaired code layer is not an accessible document. Whether the reading order is right, whether a
table header sits in the right place, whether a description of an image actually describes the image:
no tool can settle that. So we do not issue any statement that your document meets WCAG or the
European Accessibility Act. What we do deliver is a document with the remaining faults written out,
and that is the list a person can work from.

## Where your document stays

Every step runs on our own server in the EU. Your document does not go to Adobe, to Google, to a
language model or to any other supplier. We tested that by running the repair with the network
connection closed.

We delete the file you upload as soon as the repair finishes. The repaired file stays for 8 hours.
While you are working in the editor, those 8 hours restart with every action.

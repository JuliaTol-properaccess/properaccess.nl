---
title: "PDF accessibility checker"
description: "Check for free which accessibility problems are in your PDF. No account, and your file is deleted as soon as the check is done."
layout: "pdf-tool-aankondiging"
weight: 10
doelgroep:
  - "Web editors"
  - "Web developers"
---

Upload a PDF and see which accessibility problems it contains. It costs nothing, there is no account
to create, and your document leaves our server as soon as the check is done. The checker is at
[pdf-toegankelijk.nl/controleren](https://pdf-toegankelijk.nl/controleren). The result page is in
Dutch for now.

## What you get

How many errors are in your document, how many points need a human to look at them, and how many
suggestions come with it. Below that a count per topic: tags, title, language, headings, images,
tables. And the three that weigh heaviest, with the success criterion and a link to the explanation
in our knowledge base.

If your document is a scan without a text layer, the checker says so. A document like that is empty
for anyone using a screen reader, however well the rest is arranged, and the file itself does not
show you that.

Up to 10 MB and 20 pages, five documents a day. The 20 pages is a limit of the check itself: above
that it no longer reads the whole text layer, and the result would say less than it appears to say.

## What we keep

Nothing. No row about you or your document goes into our database, we do not keep the name of your
file, and we delete the file itself as soon as the check is done. The result stays for half an hour
at an address only you have, and then it goes.

We do count how many checks come from your internet address, because the limit of five a day hangs
on that. We do not store the address to do it: we compute an irreversible fingerprint of it, using a
secret number that changes every day. What happens exactly is in the
[privacy statement of pdf-toegankelijk.nl](https://pdf-toegankelijk.nl/privacy), which is in Dutch.

## Repairing is in closed testing

The check tells you what is wrong. Repairing sits in the same tool and is in closed testing at the
moment, with access arranged per organisation.

You upload a PDF and you get **your own document back**, with a tag structure where there was none
and with the title, the language and the matching viewer settings written in. Same pages, same
layout. We do not build a second document that looks different.

For every document we compare the pages before and after the repair as images. If anything changed,
we tell you which page and how large the difference is.

The full list comes with it: per element what is wrong, which page it is on, and the wording you can
lift into an audit report. That list downloads as CSV and as JSON. The free check gives you the
totals and not that list.

Want to take part in the test? Leave your address and you get one message.

## What the tool does not do

A repaired code layer is not an accessible document. Whether the reading order is right, whether a
table header sits in the right place, whether a description covers the image it belongs to: no tool
can establish that. So we do not issue a statement that your document meets WCAG or the EAA. What we
do deliver is a list of the problems that are still there, and a person can work from that.

## Where your document stays

Every step runs on our own server in the EU. Your document does not go to Adobe, to Google, to a
language model or to any other supplier. We tested that by running the repair with the network
connection closed.

After a check your file is gone as soon as the check is done. If you have a document repaired, we
delete the repaired file 8 hours after your last action in it.

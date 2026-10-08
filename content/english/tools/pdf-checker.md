---
title: "Making a PDF accessible: checking and repairing"
description: "Check your PDF for accessibility problems, free and without an account. Repairing the code layer sits in the same tool and is in closed testing."
layout: "pdf-tool-aankondiging"
weight: 10
doelgroep:
  - "Web editors"
  - "Web developers"
---

A check tells you what is wrong in your PDF. Fixing it still has to happen, and that is what this
tool is for. The tag structure goes in, the title and the language come with it, and you see per
element what is left after that. The check is public, free and without an account, at
[pdf-toegankelijk.nl/controleren](https://pdf-toegankelijk.nl/controleren). Repairing is in closed
testing. Your document goes to our own server in Germany and leaves it as soon as the check is done.
The result page is in Dutch for now.

## What the check shows you

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

From the check itself we keep nothing. No row about you or your document goes into our database, we
do not keep the name of your file, and we delete the file itself as soon as the check is done. The
result stays for half an hour at an address only you have, and then it goes.

Two things do exist, and both are in the privacy statement. We count how many checks come from your
internet address, because the limit of five a day hangs on that. We do not store the address to do
it: we compute an irreversible fingerprint of it, using a secret number that changes every day, and
that counter expires after 24 hours. Our web server also keeps a log holding your internet address
and the time, as every web server does. We keep that log for 14 days. What happens exactly is in the
[privacy statement of pdf-toegankelijk.nl](https://pdf-toegankelijk.nl/privacy), which is in Dutch.

Nothing about you goes to a US server when you use the tool. The pages of the tool load no script,
no stylesheet and no font from another company. So your browser opens no connection to Google or to
anyone else to display them, and your internet address does not reach them either. The server of the
tool does not allow it either: it tells your browser to load files from our own server only. Two
tests in the code of the tool check four pages and fail as soon as a script or a stylesheet from
another company appears in one of them.

## The step after the check

Repairing sits in the same tool and is in closed testing at the moment, with access arranged per
organisation.

You upload a PDF and you get **your own document back**, with a tag structure where there was none
and with the title, the language and the matching viewer settings written in. Same pages, same
layout. We do not build a second document that looks different.

For every document we compare the pages before and after the repair as images. If anything changed,
we tell you which page and how large the difference is.

The full list comes with it: per element what is wrong, which page it is on, and the wording you can
lift into an audit report. That is the same arrangement we use in our audit reports, so everything
wrong with one element sits together in one place. That list downloads as CSV and as JSON. The free
check gives you the totals and not that list.

Want to take part in the test? Leave your address and you get one message.

## What the tool does not do

A repaired code layer is not an accessible document. Whether the reading order is right, whether a
table header sits in the right place, whether a description covers the image it belongs to: no tool
can establish that. So we do not issue a statement that your document meets the standard. If you
work for a Dutch public body, that standard is EN 301 549. The decree that names it is the Besluit
digitale toegankelijkheid overheid (BDTO), the Dutch implementation of the European Web
Accessibility Directive. Your PDF counts as a downloadable document under it. If you fall under the
European Accessibility Act, it depends on the service your document belongs to. What we do deliver
is a list of the problems that are still there, and a person can work from that.

In a document that has tags we write the PDF/UA identifier into the metadata. That is the line in
which your file states it was made according to PDF/UA-1. We write it because checkers such as PAC
and veraPDF report a missing one as an error. It says nothing about the content of your document:
whether that really meets PDF/UA follows from the check and not from this line.

## Where your document stays

Every step runs on our own server in the EU, at Hetzner in Falkenstein, Germany. Your document does
not go to Adobe, to Google, to a language model or to any other supplier. We tested that by running
the repair with the network connection closed. Hetzner makes a copy of the whole server every night,
and that copy stays in Germany.

After a check your file is gone as soon as the check is done. If you have a document repaired, we
delete the repaired file 7 days after your last action in it. If you are done sooner, the "ik ben
klaar" button at the bottom of your work list throws it away straight away. After that it can still
be in a nightly copy, and that copy is itself wiped after 7 days.

One thing does stay, and only when you repair. Of every repair we keep a record: your email address,
the time, the number of pages, and which findings were on your document before and after. It also
holds the number of headings, tables and images. Your document itself is not in there. We keep that
record for 12 months.

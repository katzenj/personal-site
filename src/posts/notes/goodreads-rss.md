---
title: Goodreads has an RSS feed?
type: note
description: Finally an easy export for Goodreads data.
date: 2025-01-23
updated_at: 2025-01-23
layout: layouts/note.njk
---

I recently discovered Goodreads' RSS feeds - particularly their book review list feed (https://www.goodreads.com/review/list_rss/:user_id). While I'm not an RSS expert, the feed provides valuable data for anyone looking to export their Goodreads data. Each entry contains book IDs, publish dates, ratings, ISBNs, and author info, filterable by shelf.

Despite Goodreads' clunky UI and walled garden approach, it remains my go-to for book tracking due to its comprehensive database. Last year, I attempted to build an alternative using OpenLibrary's data (lacks depth and quality) and Google Books API (strict usage limits and storage restrictions). Unfortunately, Google rejected my rate limit increase request because I stored basic book metadata, so I scrapped my little Goodreads alternative (Better Reads).

Now I use val.town to parse my Goodreads feed and store it in a JSON file in Cloudflare R2 (free is me).  That powers my site's /reading page and serves as a data backup.  I plan on reviving my data viz app (either via Streamlit or val), so hopefully that will be coming soon.

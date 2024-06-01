---
title: Text-to-blog
type: note
description: Using val.town and my phone to update my "microblog"
tags:
  - seedling
date: 2024-05-31
updated_at: 2024-05-31
layout: layouts/note.njk
---

One of my brilliant, trillion-dollar ideas was text-to-blog. You send a text to a phone number and it appears on your website. Brilliant, I know. Novel, definitely. I wanted a simple solution for myself and had seen val.town recently, so I figured I could that and Twilio to create text-to-blog functionality for myself.

My first plan was to use Twilio, consume Twilio's webhooks for each received SMS, and then use Github’s APIs to update a JSON file that is my data source for my texts/blog entries. This is nice because my long-form posts and notes live in GitHub and are created/updated/deleted via git commits. I would also get deploys for free because my Vercel project redeploys after every commit. I need deploys because my site is a static site generated using 11ty.

Naturally, I ran into a few issues. After signing up for Twilio, I got fraud blocked and received an email asking for more information. Only after I respond and they review will they (maybe) unblock me. Instead, I switched to [Nexmo](https://www.vonage.com/communications-apis/), who also gave me $2 in credit to test out. Their setup process was also quick and painless. 

My second issue, if you can call it that, was that using GitHub's APIs seemed more complicated than I wanted, so I pivoted to just storing a JSON file in S3 (via Supabase cause I’m lazy and don’t want to deal with AWS). 

To update the file in S3, I host an HTTP endpoint (my webhook consumer) on val.town. It consumes webhooks from Nexmo, updates the file in S3, and then uses Vercel’s deploy hook to trigger a redeploy (my site is a static site and thus needs to be rebuilt and fetch the new data from S3).

In about 30 seconds, I can send a text and have it appear on my personal site. It required maybe a couple hours of work and $0 (each text received via Nexmo costs $0.0062 or so, but I have $2 in credit). An evening well spent, if you ask me. Check out my useless "microblog" at [/microblog](https://www.jordankatzen.com/microblog).


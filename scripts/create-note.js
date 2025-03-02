const template = `---
title: Title
type: note
description: Description
date: {date}
updated_at: {date}
layout: layouts/note.njk
---
`
const date = new Date().toISOString().split('T')[0];
const slug = process.argv[2] || 'new-post';

const newPost = template
  .replaceAll('{date}', date)

await Bun.write(`src/posts/notes/${slug}.md`, newPost);

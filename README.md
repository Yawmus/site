# yawmus.github.io

Personal website - under construction!

## Sat Dec 11

Design decisions when making a new website. Right now I'm looking to have github host my personal project yet again. What are the implications of this?

What are my goals?

- Host game content. If I make a game I want to be able to have landing pages to showcase it. Unity support (HTML5 does this already)
- Want to use react and have lazy loading (other cool features)
- Want to have a dynamic blog available.
- Want to have it secure
- Want to have it look sleek and be efficient (NextJS?)
- I want this to be an active learning experience

How do people create content for their websites? I suppose they would create a file and push it. Subsequently, it would automagically get compiled and displayed appropriately. NextJS can do this out of the box. Otherwise there's Gatsby and Jekyll.

I'll use NextJS.

Learnings:

- `import express from 'express'` doesn't work because the express package is actually a namespace, which requires `import * as express from 'express'`. Why do packages export as a namespace rather than a default function or something?

---
title: Open Media from Browser with One Click
description: Use Obsidian URI and bookmarklets to instantly open YouTube videos and other media from your browser in Media Extended
---

When you're browsing media content online and want to open it quickly in Media Extended, you don't need to copy URLs manually. This guide shows you how to open media directly from your browser using Obsidian URI.

## When You Need This

This is most useful for:
- Opening YouTube videos with current timestamp preserved
- Quickly loading media from any supported hosting service while browsing
- Streamlining your workflow when researching or collecting media content
- Opening media URLs without switching between browser and Obsidian

## Solution

Media Extended supports opening remote media via [Obsidian URI](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI) in two formats:

### Manual URI Format

1. **Query parameter format**: `obsidian://mx-open?url=encoded-link-to-media`
2. **Path format**: `obsidian://mx-open/https://link/to/media` - simply add `obsidian://mx-open/` prefix to any media URL

### One-Click Bookmarklet

For the most convenient experience, create a bookmarklet that opens the current browser tab's media with preserved timestamp:

1. Create a new bookmark in your browser
2. Set the URL to the following code:

```js
javascript:(()=>{const t=document.querySelector("video, audio")?.currentTime,u=new URL(window.location.href);t&&(u.hash?u.hash+=`&t=${t}`:u.hash=`#t=${t}`),window.open(`obsidian://mx-open?url=${encodeURIComponent(u.toString())}`)})();
```

3. Follow the [standard bookmarklet installation instructions](https://en.wikipedia.org/wiki/Bookmarklet#installation) for your browser

## Result

- **Manual URIs**: You can quickly modify any media URL by adding the Obsidian URI prefix
- **Bookmarklet**: One click opens the current page's media in Media Extended, preserving the current playback timestamp for videos and audio
- **Seamless workflow**: No need to copy-paste URLs or switch between applications when collecting media content
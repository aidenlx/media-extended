---
title: beta.10
description: A list of changes and improvements since `v4.0.0-beta.0`.
---

This should be the last beta before the first stable release. :)

## Features

- Add back support for YouTube video screenshot, see [screenshot](/docs/v4/screenshot) for more details.
- Add support for password protected files, this should allow you to open protected files from Nextcloud, WebDAV, or static file servers, see [load media](/docs/v4/load-media#hosted-media-files) for more details.
- Support audio gain to further boost volume of audio files.
- Improved hash props and embed support, see [hash props](/docs/v4/reference/hash-props) and [media embed size support](/docs/v4/media-links#embed-video-size-support) for more details.
- Media Library: support assigning media default properties per media, see [frontmatter props](/docs/v4/reference/frontmatter-props) for all available properties.
- Active transcript cue is now stablely located near the top of the pane. 
- Support dark theme and obsidian custom theme color. 
- YouTube native timestamp / time range support
- Improved commands and menu organization, see [commands](/docs/v4/reference/commands) for more details.


## Bug fixes

- Media and subtitle files outside vault are now fully supported.
- Fixed player current time / total time display sometimes not updating.
- Improved plugin style and UX.
- Fixed user interface quirks.
- And many more...
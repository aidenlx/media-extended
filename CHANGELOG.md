# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [4.2.6] - 2026-06-07

### Fixed

- Restored compatibility with Obsidian v1.13.
- Embedded videos from browser-only hosts (e.g. Bilibili) now show a placeholder with an "Open in web viewer" or "Configure" button instead of an empty player with no media loaded.
- Broken-image icon no longer appears next to media embeds written with markdown image syntax (`![](url)`) in Live Preview on newer Obsidian versions, including inside popout windows.
- Embedded Bilibili videos now enter Bilibili's web fullscreen mode once the player opens, instead of leaving the video confined to its small default frame.
- After plugin updates, the main daemon setup popup now clearly identifies Media Extended and explains that the daemon module is being upgraded instead of presenting it as a fresh install.

See [changelog](https://mx.aidenlx.site/changelog/v4.2.6).

## [4.2.5] - 2026-05-19

### Fixed

- Restored compatibility with other plugins that patch `openLinkText` asynchronously (e.g. Recipe Grabber) — their async work was being dropped when Media Extended's link handler fell through to the default handler.

See [changelog](https://mx.aidenlx.site/changelog/v4.2.5).

## [4.2.4] - 2026-05-13

### Added

- Copy timestamp commands — copy the current playback time to your clipboard as plain text, URL, Obsidian URL, library URL, rich text link, or markdown link, each in multiple URL flavors. Available from the player menu ("Copy timestamp as" submenu) and as standalone command palette entries. Works with web sources, vault files, and local files outside the vault (desktop only for `file://` paths).
- "Open media note" item in the player embed context menu to jump to or create the media's note directly from the player.
- Extended `obsidian://open` with `?t=` and `?hash=` parameters — external links to media files in your vault now open at a specific timestamp. Falls through to Obsidian's default handler for non-media files.
- Extended `obsidian://mx-open` with `?id=`, `?vault=`, `?paneType=`, `?t=`, and `?hash=` parameters — resolve media by library ID, target a specific vault, open in a new pane, and seek to a timestamp.
- Media notes are now named after their media title (from YouTube metadata, ID3 tags, or filename) instead of random IDs. Falls back to `url-{id}` when no title is available; appends a unique suffix on name collision.
- Frame-by-frame video navigation to step backward or forward one frame at a time at best effort. Available on both native videos and supported web players (YouTube, Bilibili, Vimeo, Coursera, Baidu, Google Drive). Support both one-shot commands and hold hotkey to keep stepping commands.

### Fixed

- Bilibili multi-part videos now show the correct page-specific title instead of the raw video title.

See [changelog](https://mx.aidenlx.site/changelog/v4.2.4).

## [4.2.3] - 2026-05-09

See [changelog](https://mx.aidenlx.site/changelog/v4.2.3).

## [4.2.2] - 2026-05-07

See [changelog](https://mx.aidenlx.site/changelog/v4.2.2).

## [4.2.1] - 2026-05-06

See [changelog](https://mx.aidenlx.site/changelog/v4.2.1).

## [4.2.0] - 2026-04-25

See [changelog](https://mx.aidenlx.site/changelog/v4.2.0).

## [4.1.5] - 2025-12-02

See [changelog](https://mx.aidenlx.site/changelog/v4.1.5).

## [4.1.4] - 2025-11-15

See [changelog](https://mx.aidenlx.site/changelog/v4.1.4).

## [4.1.2] - 2025-10-10

See [changelog](https://mx.aidenlx.site/changelog/v4.1.2).

## [4.1.1] - 2025-10-08

See [changelog](https://mx.aidenlx.site/changelog/v4.1.1).

## [4.1.0] - 2025-10-03

See [changelog](https://mx.aidenlx.site/changelog/v4.1.0).

## [4.0.1] - 2025-09-23

See [changelog](https://mx.aidenlx.site/changelog/v4.0.1).

## [4.0.0] - 2025-09-17

See [changelog](https://mx.aidenlx.site/changelog/v4.0.0).

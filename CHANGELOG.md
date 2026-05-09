# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Copy timestamp commands — copy the current playback time to your clipboard as plain text, URL, Obsidian URL, library URL, rich text link, or markdown link, each in multiple URL flavors. Available from the player menu ("Copy timestamp as" submenu) and as standalone command palette entries. Works with web sources, vault files, and local files outside the vault (desktop only for `file://` paths).
- "Open media note" item in the player embed context menu to jump to or create the media's note directly from the player.
- Extended `obsidian://open` with `?t=` and `?hash=` parameters — external links to media files in your vault now open at a specific timestamp. Falls through to Obsidian's default handler for non-media files.
- Extended `obsidian://mx-open` with `?id=`, `?vault=`, `?paneType=`, `?t=`, and `?hash=` parameters — resolve media by library ID, target a specific vault, open in a new pane, and seek to a timestamp.
- Media notes are now named after their media title (from YouTube metadata, ID3 tags, or filename) instead of random IDs. Falls back to `url-{id}` when no title is available; appends a unique suffix on name collision.

### Fixed

- Bilibili multi-part videos now show the correct page-specific title instead of the raw video title.

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

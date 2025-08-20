---
title: Frontmatter Properties
description: Complete reference for all supported frontmatter properties to control media behavior in note metadata
---

You can control media behavior by adding properties to the YAML frontmatter of your media notes. These properties affect how media files are displayed and played when viewing or embedded in the note.

For example:
```yaml
---
title: My Video Note
loop: true
muted: true
volume: 80
---
```

## Basic Properties [#basic-properties]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `title` | Custom title for the media | Text string | `title: "My Custom Title"` |

<Callout type="info">
  If not specified, the h1 heading (e.g. `# My Video Title`) will be used as the media title if present.
</Callout>

## Playback Control Properties [#playback-control]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `loop` | Loop the media | `true` or `false` | `loop: true` |
| `muted` | Start in muted state | `true` or `false` | `muted: true` |
| `auto_play` | Start playing automatically | `true` or `false` | `auto_play: true` |
| `autoplay` | Alias for `auto_play` | `true` or `false` | `autoplay: true` |

## Audio/Video Properties [#audio-video]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `volume` | Set default volume level | 0-100 | `volume: 80` |
| `audio_gain` | Audio gain adjustment | Number | `audio_gain: 2.0` |
| `playback_rate` | Set default playback rate | Positive number | `playback_rate: 1.5` |
| `speed` | Alias for `playback_rate` | Positive number | `speed: 1.5` |

## Display Properties [#display]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `aspect_ratio` | Aspect ratio | Ratio format | `aspect_ratio: "16 / 9"` |
| `cross_origin` | Cross-origin policy | CORS values | `cross_origin: "anonymous"` |
| `flip` | Flip transformation | Flip options | `flip: "horizontal"` |

## Time Control Properties [#time-control]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `time_range` | Time segment to play | Time range format | `time_range: "10,20"` |

### Time Range Format [#time-range-format]

The `time_range` property supports the same time formats as hash properties:

- **Seconds**: `10` or `10.5`
- **MM:SS**: `"02:30"`
- **HH:MM:SS**: `"1:02:30"`
- **Ranges**: `"10,20"` (from 10s to 20s)
- **Open ranges**: `",30"` (beginning to 30s) or `"10,"` (10s to end)
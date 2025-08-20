---
title: Hash Properties
description: Complete reference for all supported hash properties to control media playback behavior in links and embeds
---

You can control media playback behavior by adding properties to the hash fragment of media links. These work like URL query parameters and can be chained together using `&`.

For example: `[[My Video.mp4#t=10,20&loop&mute&noctrl]]`

## Temporal Fragment (`t=`) [#temporal-fragment]

Control when and how long media plays using the `t=` property.

| Format | Description | Example |
| --- | --- | --- |
| `t=10` | Jump to timestamp (10 seconds) | `#t=10` |
| `t=1:30` | Jump to 1 minute 30 seconds | `#t=1:30` |
| `t=1:02:30` | Jump to 1 hour 2 minutes 30 seconds | `#t=1:02:30` |
| `t=10,20` | Play segment from 10s to 20s | `#t=10,20` |
| `t=,30` | Play from beginning to 30 seconds | `#t=,30` |
| `t=10,e` | Play from 10 seconds to end | `#t=10,e` |

### Time Format Specification [#time-format]

- **Seconds**: Any positive number with optional decimal places (`10.5`)
- **MM:SS**: Minutes:seconds format (`02:30`)
- **HH:MM:SS**: Hours:minutes:seconds format (`1:02:30`)
- **Ranges**: Use comma to separate start and end times (`start,end`)
- **Open ranges**: Omit start (`,end`) or end (`start,`) or use `e` for end (`start,e`)

## Playback Control Properties [#playback-control]

| Property | Description | Example |
| --- | --- | --- |
| `autoplay` | Start playing automatically | `#autoplay` |
| `no_autoplay` | Prevent autoplay (override default) | `#no_autoplay` |
| `loop` | Loop the media or segment | `#loop` |
| `no_loop` | Disable looping (override default) | `#no_loop` |
| `mute` | Start in muted state | `#mute` |
| `no_mute` | Start unmuted (override default) | `#no_mute` |

## Interface Control Properties [#interface-control]

| Property | Description | Example |
| --- | --- | --- |
| `controls` | Force show player controls | `#controls` |
| `no_controls` | Force hide player controls | `#no_controls` |
| `noctrl` | Alias for `no_controls` | `#noctrl` |

## Audio/Video Properties [#audio-video]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `vol=` | Set volume level | 0-100 | `#vol=80` |
| `speed=` | Set playback rate | Positive number | `#speed=1.5` |
| `gain=` | Audio gain adjustment | Number | `#gain=2.0` |
| `as=` | Force media type | `audio` or `video` | `#as=audio` |

## Display Properties [#display]

| Property | Description | Values | Example |
| --- | --- | --- | --- |
| `ratio=` | Aspect ratio | Format varies | `#ratio=16:9` |
| `flip=` | Flip transformation | Flip options | `#flip=horizontal` |
| `title=` | Custom title | Text string | `#title=My%20Video` |
| `crossorigin=` | Cross-origin policy | CORS values | `#crossorigin=anonymous` |

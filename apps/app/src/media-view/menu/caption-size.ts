import type { MenuItem } from "obsidian";
import type { PlayerContext } from ".";

export const captionFontSizeOptions = [12, 14, 16, 18, 20, 24, 28, 36];

/**
 * Caption size submenu. Only affects captions rendered by the native player
 * (`--media-cue-font-size`); webview media (e.g. YouTube) controls its own
 * captions, so this is not added for those sources (see index.ts).
 */
export function captionSizeMenu(item: MenuItem, { plugin }: PlayerContext) {
  const settings = plugin.settings.getState();
  const current = settings.captionFontSize;

  const sub = item
    .setTitle(captionSizeLabel(current))
    .setIcon("captions")
    .setSection("view")
    .setSubmenu();

  sub.addItem((item) =>
    item
      .setTitle("Auto")
      .setChecked(current === undefined)
      .onClick(() => settings.setCaptionFontSize(null)),
  );
  captionFontSizeOptions.forEach((size) =>
    sub.addItem((item) =>
      item
        .setTitle(`${size}px`)
        .setChecked(size === current)
        .onClick(() => settings.setCaptionFontSize(size)),
    ),
  );
}

function captionSizeLabel(size: number | undefined) {
  const label = new DocumentFragment();
  label.appendText("Caption size ");
  label.createEl("code", { text: size ? `(${size}px)` : "(auto)" });
  return label;
}

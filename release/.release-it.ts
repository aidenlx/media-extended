import type { Config } from "release-it";
import { join } from "node:path";

export default {
  hooks: {
    "after:bump": [
      "git add ../manifest*.json ../versions.json",
      "pnpm build:obsidian",
    ],
    "after:release":
      "echo Successfully released obsidian plugin ${name} v${version} to ${repo.repository}.",
  },
  plugins: {
    "./scripts/ob-version.js": {
      indent: 2,
      copyTo: "../",
      directory: "../../apps/obsidian",
    },
    "@release-it/bumper": {
      out: "../../apps/obsidian/package.json",
    },
  },
  git: {
    commitMessage: "chore: release obsidian plugin v${version}",
    tagName: "${version}",
    changelog: 'echo "See [changelog](https://mx.pkmer.net/changelog#v${latestTag})"',
    tagAnnotation: "Release Obsidian Plugin v${version}",
    addUntrackedFiles: true,
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
    assets: [
      "main.js",
      "manifest.json",
      "styles.css",
      "media-extended.zip",
    ].map((file) => join("../../apps/obsidian/dist", file)),
    proxy: process.env.HTTPS_PROXY || process.env.HTTP_PROXY,
    releaseName: "${version}",
  },
} satisfies Config;

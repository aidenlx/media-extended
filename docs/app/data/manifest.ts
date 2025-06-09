import * as v from "valibot";
import * as semver from "semver";

const communityPluginListSchema = v.array(
  v.object({
    id: v.string(),
    repo: v.pipe(v.string(), v.includes("/")),
    description: v.string(),
  }),
);
const pluginManifestSchema = v.object({
  id: v.string(),
  name: v.string(),
  version: v.string(),
  minAppVersion: v.string(),
  isDesktopOnly: v.optional(v.boolean()),
});

export async function getPluginManifest(
  repo: string,
  { channel = "latest" }: { channel?: "beta" | "latest" } = {},
): Promise<PluginManifest | null> {
  const file = channel === "beta" ? "manifest-beta.json" : "manifest.json";
  const res = await fetch(
    `https://raw.githubusercontent.com/${repo}/main/${file}`,
    {
      next: {
        // Next.js will invalidate the cache when a
        // request comes in, at most once every 5 minutes.
        revalidate: 300,
        tags: [`plugin-manifest:${file}`],
      },
    },
  );
  if (!res.ok) {
    if (res.status === 404) {
      console.log(`${repo}: Not found`);
      return null;
    }
    throw new Error(`Failed to fetch plugin manifest: ${res.status}`);
  }
  const payload = v.parse(pluginManifestSchema, await res.json());
  return payload;
}

async function getCommunityPluginsList(): Promise<CommunityPluginList> {
  const res = await fetch(
    "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugins.json",
    {
      next: {
        // Next.js will invalidate the cache when a
        // request comes in, at most once every 24 hours.
        revalidate: 86400,
        tags: ["community-plugins-list"],
      },
    },
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch community plugins list: ${res.status}`);
  }
  const payload = v.parse(communityPluginListSchema, await res.json());
  return payload;
}

type PluginManifest = v.InferOutput<typeof pluginManifestSchema>;
type CommunityPluginList = v.InferOutput<typeof communityPluginListSchema>;

export async function isPluginReviewed({
  id,
  closedSource,
}: { id: string; closedSource: boolean }) {
  const list = await getCommunityPluginsList();
  return list.some(
    (plugin) =>
      plugin.id === id &&
      (!closedSource || plugin.description.match(/closed? source/i)),
  );
}

export function isV4PubliclyAvailable(manifest: PluginManifest) {
  return (
    semver.valid(manifest.version) &&
    semver.gte(semver.coerce(manifest.version) ?? "0.0.0", "4.0.0")
  );
}

export type InstallMethod = "brat" | "obsidian" | "manual";
export async function getDefaultInstallMethod({
  id,
  repo,
  version,
}: {
  id: string;
  repo: string;
  version: "v3" | "v4";
}): Promise<InstallMethod> {
  const isReviewed = await isPluginReviewed({
    id,
    closedSource: version === "v4",
  });
  if (isReviewed) {
    const latestManifest = await getPluginManifest(repo);
    if (
      latestManifest &&
      // If the plugin v4 is not publicly available, we don't want to recommend obsidian
      !(version === "v4" && !isV4PubliclyAvailable(latestManifest))
    ) {
      return "obsidian";
    }
  }
  const betaManifest = await getPluginManifest(repo, { channel: "beta" });
  if (betaManifest) return "brat";
  return "manual";
}

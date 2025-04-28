import {
  type InstallMethod,
  getDefaultInstallMethod,
  getPluginManifest,
  isPluginReviewed,
} from "@/app/data/manifest";
import { Callout } from "fumadocs-ui/components/callout";
import { Badge } from "@/components/ui/badge";

async function Manifest({ channel }: { channel?: "beta" }) {
  const manifest = await getPluginManifest("aidenlx/media-extended", {
    channel: channel,
  });
  if (!manifest) return null;
  return (
    <dl className="not-prose grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
      <dt className="font-medium">Version</dt>
      <dd>
        <Badge variant="outline">{manifest.version}</Badge>
      </dd>
      {manifest.isDesktopOnly && (
        <>
          <dt className="sr-only">Desktop Only</dt>
          <dd className="col-span-full">
            <Badge variant="secondary">Desktop Only</Badge>
          </dd>
        </>
      )}

      <dt className="font-medium">Minimum Obsidian Version</dt>
      <dd>
        <Badge variant="outline">{manifest.minAppVersion}</Badge>
      </dd>
    </dl>
  );
}

export async function ObsidianInstallInfoCard({
  version,
}: { version: "v3" | "v4" }) {
  const isReviewed = await isPluginReviewed({
    id: "media-extended",
    closedSource: version !== "v3",
  });
  if (!isReviewed) {
    return (
      <Callout type="error">
        Media Extended {version} is not yet released. For beta testing, please
        use BRAT to install the plugin.
      </Callout>
    );
  }
  return (
    <Callout type="info">
      <Manifest />
    </Callout>
  );
}

export async function BRATInstallInfoCard() {
  return (
    <Callout type="info" title="Current Beta Release">
      <Manifest channel="beta" />
    </Callout>
  );
}

export async function ManualInstallInfoCard({ channel }: { channel?: "beta" }) {
  return (
    <Callout
      type="info"
      title={channel === "beta" ? "Current Beta Release" : "Current Release"}
    >
      <Manifest channel={channel} />
    </Callout>
  );
}

export async function getDefaultMethodIndex(
  { id, repo, version }: { id: string; repo: string; version: "v3" | "v4" },
  items: { label: string; value: InstallMethod }[],
) {
  const method = await getDefaultInstallMethod({
    id,
    repo,
    closedSource: version !== "v3",
  });
  return items.findIndex((item) => item.value === method);
}

import {
  type InstallMethod,
  getDefaultInstallMethod,
  getPluginManifest,
  isPluginReviewed,
} from "@/app/data/manifest";
import { Callout } from "fumadocs-ui/components/callout";
import { Badge } from "@/components/ui/badge";

async function Manifest({ testing }: { testing?: "beta" }) {
  const manifest = await getPluginManifest("aidenlx/media-extended", {
    testing,
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

export async function ObsidianInstallInfoCard() {
  const isReviewed = await isPluginReviewed({ id: "media-extended" });
  if (!isReviewed) {
    return (
      <Callout type="error">
        Media Extended v4 is not yet released. For beta testing, please use BRAT
        to install the plugin.
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
      <Manifest testing="beta" />
    </Callout>
  );
}

export async function ManualInstallInfoCard() {
  return (
    <Callout type="info" title="Current Beta Release">
      {/* TBD: change to official release when v4 is released */}
      <Manifest testing="beta" />
    </Callout>
  );
}

export async function getDefaultMethodIndex(
  { id, repo }: { id: string; repo: string },
  items: { label: string; value: InstallMethod }[],
) {
  const method = await getDefaultInstallMethod({ id, repo });
  return items.findIndex((item) => item.value === method);
}

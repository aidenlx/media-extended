import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Media Extended</h1>
      <p className="text-fd-muted-foreground mb-6">
        Integrate, manage, and play media files directly in Obsidian.
      </p>
      <div className="flex justify-center gap-2">
        <Button asChild className="has-[>svg]:pr-2.5">
          <Link href="/docs/v3">
            Get Started with v3
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" className="has-[>svg]:pr-2.5">
          <Link href="/docs/v4">
            v4 Beta Testing
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}

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
      <div className="flex justify-center">
        <Button
          asChild
          className="group flex items-center gap-1 has-[>svg]:pr-2.5"
        >
          <Link href="/docs">
            Get Started
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { SquareLibrary } from "lucide-react";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <SquareLibrary className="ml-1 size-4" />
        Mx
      </>
    ),
  },
  links: [
    // {
    //   text: "Documentation",
    //   url: "/docs",
    //   active: "nested-url",
    // },
  ],
};

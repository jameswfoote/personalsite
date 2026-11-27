import type { Metadata } from "next";
import { SHOW_PUBLICATIONS } from "../siteConfig";
import { pageMetadata } from "../seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/publications/",
    description: "Papers, essays, and other miscellaneous thoughts by James Foote.",
  }),
  ...(!SHOW_PUBLICATIONS && {
    robots: {
      index: false,
      follow: false,
    },
  }),
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

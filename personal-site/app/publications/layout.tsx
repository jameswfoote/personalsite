import type { Metadata } from "next";
import { SHOW_PUBLICATIONS } from "../siteConfig";

export const metadata: Metadata = {
  title: "James Foote",
  description: "James Foote's publications and research",
  robots: SHOW_PUBLICATIONS ? undefined : {
    index: false,
    follow: false,
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

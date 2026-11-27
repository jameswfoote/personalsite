import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  path: "/bookshelf/",
  description: "James Foote's book collection and reviews",
});

export default function BookshelfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

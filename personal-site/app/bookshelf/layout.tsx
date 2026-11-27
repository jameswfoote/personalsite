import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  path: "/bookshelf/",
  title: "My Bookshelf",
  description: "James Foote's bookshelf: books he has read, with a short review of each.",
});

export default function BookshelfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

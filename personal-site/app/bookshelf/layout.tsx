import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "James Foote",
  description: "James Foote's book collection and reviews",
};

export default function BookshelfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

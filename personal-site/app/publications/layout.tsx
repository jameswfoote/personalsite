import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications - James Foote",
  description: "James Foote's publications and research",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

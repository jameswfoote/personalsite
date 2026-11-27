import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HOME_DESCRIPTION, SITE_NAME, SITE_URL } from "./seo";

const raleway = localFont({
  src: "./fonts/raleway-latin.woff2",
  variable: "--font-raleway",
  weight: "300 700",
  display: "swap",
});

// Site-wide defaults. Each page sets its own title, description, and canonical URL
// with pageMetadata() from ./seo, so no page inherits the homepage's canonical.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: HOME_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    creator: "@jamesfoote",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              if (window.location.hostname !== "jameswfoote.github.io") return;
              var path = window.location.pathname.replace(/^\\/personalsite(?=\\/|$)/, "");
              var targetPath = path || "/";
              var target = "https://jamesfoote.org" + targetPath + window.location.search + window.location.hash;
              window.location.replace(target);
            })();`,
          }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
        style={{ fontFamily: 'var(--font-raleway), Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

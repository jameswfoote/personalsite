import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import PasswordGate from "./components/PasswordGate";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "James Foote",
  description: "James Foote's personal site",
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
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}

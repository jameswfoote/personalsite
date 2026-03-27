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
      <body
        className={`${raleway.variable} antialiased`}
        style={{ fontFamily: 'var(--font-raleway), Arial, sans-serif' }}
      >
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}

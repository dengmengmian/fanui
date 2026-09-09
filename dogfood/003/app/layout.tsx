import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowbit — FanUI Dogfood #3",
  description: "FanUI V0.3.1 cross-surface dogfood for Flowbit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

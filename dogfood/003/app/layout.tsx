import type { Metadata } from "next";
import "./globals.css";
import "./v032.css";

export const metadata: Metadata = {
  title: "Flowbit — FanUI Dogfood #3",
  description: "FanUI V0.3.2 product-fidelity dogfood for Flowbit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

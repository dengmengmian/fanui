import type { Metadata } from "next";
import "./globals.css";
import "./v032.css";
import "./v033.css";
import "./v034.css";

export const metadata: Metadata = {
  title: "Flowbit — FanUI Dogfood #3",
  description: "FanUI responsive product-fidelity dogfood for Flowbit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "麻凡 — FanUI Editorial Dogfood",
  description: "FanUI Dogfood #004: Mafan Lab editorial and personal product site refactor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

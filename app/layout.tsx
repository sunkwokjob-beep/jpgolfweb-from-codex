import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jpgolfclub | 日本高爾夫用品專門店",
  description: "日系高爾夫球桿電商首頁 prototype"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

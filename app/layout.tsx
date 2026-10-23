import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Meitantei Studios | Web Developer",
  description:
    "Modern, responsive websites for Australian small businesses.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>

      <Analytics />
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
    </html>
  );
}

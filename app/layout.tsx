import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meitantei-studios.vercel.app"),
  title: {
    default: "Small Business Website Design | Meintantei Studios",
    template: "%s | Meintantei Studios",
  },
  description:
    "Fast, modern websites for Australian small businesses. Get a professional website with mobile-friendly design, SEO foundations, and ongoing support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Small Business Website Design | Meintantei Studios",
    description:
      "Professional websites for Australian small businesses.",
    url: "https://meitantei-studios.vercel.app",
    siteName: "Meintantei Studios",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import Navbar from "@/components/custom/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/lib/providers";
import { cn } from "@/lib/utils";
import profile from "@/public/profile.jpg";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Danish Nasarudin",
  description: "A Portfolio by Danish Nasarudin. Full-Stack Web Developer.",
  keywords: [
    "custom website",
    "full-stack web developer",
    "web developer",
    "remote website developer",
    "customize website",
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: new URL("/favicon-16x16.png", baseUrl).toString(),
        sizes: "16x16",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: new URL("/favicon-16x16-dark.png", baseUrl).toString(),
        sizes: "16x16",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: new URL("/favicon-32x32.png", baseUrl).toString(),
        sizes: "32x32",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: new URL("/favicon-32x32-dark.png", baseUrl).toString(),
        sizes: "32x32",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: new URL("/favicon.ico", baseUrl).toString(),
        type: "image/x-icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: new URL("/favicon-dark.ico", baseUrl).toString(),
        type: "image/x-icon",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: new URL("/icon.svg", baseUrl).toString(),
        type: "image/svg+xml",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: new URL("/icon-dark.svg", baseUrl).toString(),
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: new URL("/apple-touch-icon.png", baseUrl).toString(),
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: new URL("/apple-touch-icon-dark.png", baseUrl).toString(),
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Danish Nasarudin",
    description: "A Portfolio by Danish Nasarudin. Full-Stack Web Developer.",
    images: [
      {
        url: profile.src,
        width: 1000,
        height: 1000,
        alt: "Danish Nasarudin Profile",
      },
    ],
  },
  verification: { google: "-k--s9yl33BJYJASKBV_UuZIVP6qpf4VcyqCsE4mAIo" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative")}>
        <Providers>
          <div className="overflow-x-hidden h-screen">
            <Navbar />
            {children}
            <footer className="text-foreground/40 text-xs text-center py-8">
              DN. 2025
            </footer>
          </div>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

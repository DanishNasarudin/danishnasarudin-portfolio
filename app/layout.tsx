import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/lib/providers";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Navbar from "./(components)/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        url: "/images/icon.svg",
        href: "/images/icon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon-dark.svg",
        href: "/images/icon-dark.svg",
      },
    ],
  },
  openGraph: {
    title: "Danish Nasarudin",
    description: "A Portfolio by Danish Nasarudin. Full-Stack Web Developer.",
  },
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
        <div className="overflow-x-hidden h-screen">
          <Navbar />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>{children}</Providers>
          </ThemeProvider>
          <footer className="text-zinc-400 text-xs text-center py-8">
            DN. 2024
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../design-system/styles/typography.css";
import { Header } from "../components/navigation/Header";
import { Footer } from "../components/navigation/Footer";
import { WebsiteJsonLd } from "../components/seo/WebsiteJsonLd";
import { siteDescription, siteName, siteUrl } from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | Cloud Engineering & Managed Technology Services`,
  description: siteDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased body no-mobile-overflow`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <WebsiteJsonLd />
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content visually-hidden focus:not-visually-hidden">
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

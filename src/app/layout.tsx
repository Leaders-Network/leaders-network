import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/Hoc/Provider";
import ScrollToTop from "@/components/ui/ScrollToTop";
// import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
});

const title = "Leaders Network - Technology Solutions That Deliver Results";
const description =
  "Since 2005, Leaders Network has been empowering organizations with enterprise-grade software, strategic consulting, and digital transformation solutions across Nigeria and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // change this
  title,
  description,
  keywords:
    "software development, digital transformation, enterprise solutions, Nigeria, technology consulting, web development, data analysis",
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Fallback CDN for Inter font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Alternative CDN fallback */}
        <link
          href="https://cdn.jsdelivr.net/npm/inter-ui@3.19.3/inter.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased transition-colors duration-300 bg-white dark:bg-dark-950 text-gray-900 dark:text-white">
        <Provider>
          {children}
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
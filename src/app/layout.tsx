import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/Hoc/Provider";
import ScrollToTop from "@/components/ui/ScrollToTop";
// import ChatWidget from "@/components/ui/ChatWidget";
// import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Preconnect for better font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased transition-colors duration-300 bg-white dark:bg-dark-950 text-gray-900 dark:text-white`}>
        <Provider>
          {children}
          <ScrollToTop />
          {/* <ChatWidget /> */}
        </Provider>
      </body>
    </html>
  );
}
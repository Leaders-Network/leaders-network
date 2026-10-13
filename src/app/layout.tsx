import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://leadersnetwork.africa/"),
  title: {
    default: "Leaders Network | Enterprise Technology Solutions Nigeria",
    template: "%s | Leaders Network"
  },
  description: "Since 2005, Leaders Network has been empowering organizations with enterprise-grade software, strategic consulting, and digital transformation solutions across Nigeria and beyond.",
  keywords: "leaders network, enterprise software Nigeria, technology consulting Lagos, digital transformation Africa, software development Nigeria, IT consulting, recruitment services Nigeria, data analysis",
  authors: [{ name: "Leaders Network", url: "https://www.eleadersnetwork.net/" }],
  creator: "Leaders Network",
  publisher: "Leaders Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://leadersnetwork.africa/",
    siteName: "Leaders Network",
    title: "Leaders Network | Enterprise Technology Solutions Nigeria",
    description: "Since 2005, Leaders Network has been empowering organizations with enterprise-grade software, strategic consulting, and digital transformation solutions across Nigeria and beyond.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Leaders Network - Enterprise Technology Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaders Network | Enterprise Technology Solutions Nigeria",
    description: "Since 2005, Leaders Network has been empowering organizations with enterprise-grade software, strategic consulting, and digital transformation solutions across Nigeria and beyond.",
    creator: "@leadersnetwork",
    images: ["/images/logo.png"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://leadersnetwork.africa/"
  }
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Provider>
          {children}
          <ScrollToTop />
          {/* <ChatWidget /> */}
        </Provider>
        
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Leaders Network",
              "url": "https://leadersnetwork.africa/",
              "logo": "https://res.cloudinary.com/yaovkmpi/image/upload/v1791924405/logo_dqu9kp.png",
              "description": "Enterprise technology solutions company delivering software development, digital transformation, IT consulting, and recruitment services across Nigeria and Africa since 2005.",
              "foundingDate": "2005",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 213 Block A 2-4 Sura Shopping Complex",
                "addressLocality": "Lagos Island",
                "addressRegion": "Lagos",
                "addressCountry": "NG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+2347087013213",
                "contactType": "customer service",
                "email": "eleadersnetworkng1@gmail.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/eleaders-networkk",
                "https://twitter.com/leadersnetwork"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
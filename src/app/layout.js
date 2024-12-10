import "./globals.css";
import { Outfit, Syne } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata = {
  title: "Leaders Network Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${outfit.variable} ${syne.variable} bg-white`}>{children}</body>
    </html>
  );
}
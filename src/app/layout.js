import Provider from "@/components/Hoc/Provider";
import "./globals.css";
import { Outfit, Syne, Poppins } from "next/font/google";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Leaders Network Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${outfit.variable} ${syne.variable} ${poppins.variable} 
        bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500`} // ✅ Added dark classes
      >
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
  );
}
import { Geist, Geist_Mono, Bebas_Neue, Lily_Script_One } from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-titles",
  subsets: ["latin"],
});

const lilyScript = Lily_Script_One({
  weight: "400",
  variable: "--font-deco",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best burgers",
  description: "Ejemplo simple de ecommerce con Next.js y MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${lilyScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

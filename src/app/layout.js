import { Geist, Geist_Mono, Lily_Script_One } from "next/font/google";

import { AppProvider } from "@/app/context/AppContext";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CartSidebar from "@/components/cart/CartSideBar";
import BottomNavbar from "@/components/sections/BottomNavbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lilyScript = Lily_Script_One({
  weight: "400",
  variable: "--font-deco",
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
      className={`${geistSans.variable} ${lilyScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <BottomNavbar />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

import { Anton, Inter } from "next/font/google";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-d",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-b",
  display: "swap",
});

export const metadata = {
  title: "DREUX — Streetwear de autor",
  description:
    "DREUX — streetwear de autor. Algodón pesado y denim crudo, series cortas. Autenticidad ante la estética, función sobre la forma.",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <Effects />
          <Nav />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
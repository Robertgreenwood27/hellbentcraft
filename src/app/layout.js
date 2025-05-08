// src/app/layout.js
import { CartProvider } from "@/lib/cartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { geistSans, geistMono, creepster } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Hellbent Craft | Gothic Art & Curiosities",
  description: "Handcrafted gothic art and curiosities for the darkly inclined",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
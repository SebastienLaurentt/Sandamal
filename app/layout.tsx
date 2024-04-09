import Navbar from "@/components/NavBar/NavBar";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";

const inter = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandamal",
  description: "Welcome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './Components/Header'
import Footer from './Components/Footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HTML5 Banners",
  description: "Showcases HTML5 Banners designed by Alannah Holder at Oliver Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-[#030630]">
            <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-5 gap-16 sm:p-20">
              {children}
            </div>
          </main>
        <Footer />
      </body>
    </html>
  );
}

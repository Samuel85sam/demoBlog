import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import Header from "@/components/header";
import ThemeProvider from "@/providers/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col justify-between min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

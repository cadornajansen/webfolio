import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen-dev flex justify-center py-10`}
      >
        <div className="flex flex-col w-10/12 lg:w-full lg:max-w-screen-lg mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

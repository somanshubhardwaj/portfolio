import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "@/components/magicui/Particle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somanshu Bhardwaj",
  description: "Somanshu Bhardwaj's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Particles
          className="fixed -z-10 inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
        />
      </body>
    </html>
  );
}

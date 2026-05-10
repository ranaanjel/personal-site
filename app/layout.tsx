import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
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
  title: "Anjel - Builder",
  description:
    "Portfolio of Anjel Rana, a builder and developer, showcasing projects, skills, and experience in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <body
        className={`${GeistPixelSquare.className} w-screen h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

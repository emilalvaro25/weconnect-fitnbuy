import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import "react-image-crop/dist/ReactCrop.css";

const roboto = Roboto({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-roboto' 
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: "Weconnect Fit And Buy",
  description: "Your personal virtual fitting room. Upload your photo, try on clothes from our collection or your own, and see how they fit instantly. Powered by Gemini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable}`}>{children}</body>
    </html>
  );
}
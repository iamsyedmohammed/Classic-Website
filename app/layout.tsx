import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import PromoPopup from "@/components/PromoPopup";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Classic Biryani Kabab & Curry | Best Indian Restaurant in Manchester NH",
  description: "Experience authentic Hyderabadi biryanis, kababs, curries and catering services at Classic Biryani Kabab & Curry in Manchester, NH. Dine-in, takeout and delivery available.",
  metadataBase: new URL("https://classicbiryaninh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Classic Biryani Kabab & Curry | Best Indian Restaurant in Manchester NH",
    description: "Experience authentic Hyderabadi biryanis, kababs, curries and catering services at Classic Biryani Kabab & Curry in Manchester, NH.",
    url: "https://classicbiryaninh.com",
    siteName: "Classic Biryani Kabab & Curry",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Classic Biryani Kabab & Curry - The Royal Taste of Hyderabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Biryani Kabab & Curry | Best Indian Restaurant in Manchester NH",
    description: "Experience authentic Hyderabadi biryanis, kababs, curries and catering services at Classic Biryani Kabab & Curry in Manchester, NH.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-black text-ivory">
        <JsonLd />
        {children}
        <WhatsAppFloating />
        <PromoPopup />
      </body>
    </html>
  );
}

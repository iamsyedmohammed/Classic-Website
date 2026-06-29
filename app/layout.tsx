import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F0F0F",
};

export const metadata: Metadata = {
  title: {
    default: "The Classic Biryani | Authentic Hyderabadi Restaurant in Manchester, NH",
    template: "%s | The Classic Biryani"
  },
  description:
    "Experience authentic Hyderabadi Dum Biryani, Hand Zabiha Halal kababs, curries, and catering at The Classic Biryani in Manchester, NH. Dine-in, takeout, delivery, and catering available 7 days a week.",
  metadataBase: new URL("https://theclassicbiryani.com"),
  alternates: { canonical: "/" },
  keywords: [
    "Classic Biryani Manchester NH",
    "The Classic Biryani",
    "Indian Restaurant Manchester NH",
    "Halal Restaurant Manchester NH",
    "Hyderabadi Dum Biryani Manchester",
    "Best Biryani New Hampshire",
    "Indian Food Manchester NH",
    "Hand Zabiha Halal Restaurant NH",
    "Indian Catering Manchester NH",
    "Lunch Buffet Manchester NH",
    "Takeout Delivery Manchester NH"
  ],
  openGraph: {
    title: "The Classic Biryani | Authentic Hyderabadi Restaurant in Manchester, NH",
    description:
      "Experience authentic Hyderabadi Dum Biryani, Hand Zabiha Halal kababs, curries, and premium catering at The Classic Biryani in Manchester, NH.",
    url: "https://theclassicbiryani.com",
    siteName: "The Classic Biryani",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "The Classic Biryani - Authentic Hyderabadi Restaurant Manchester NH",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Classic Biryani | Authentic Hyderabadi Restaurant in Manchester, NH",
    description:
      "Experience authentic Hyderabadi Dum Biryani, Hand Zabiha Halal kababs, curries, and premium catering at The Classic Biryani in Manchester, NH.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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

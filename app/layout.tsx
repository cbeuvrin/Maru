import type { Metadata } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";

import { Providers } from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marucordero.com"),
  title: {
    default: "Maru Cordero - Businesswoman | Healthy & Beauty Mom",
    template: "%s | Maru Cordero",
  },
  description: "Redefiniendo la belleza sin edad. Businesswoman, Healthy & Beauty Mom. Descubre tips de belleza, negocios y estilo de vida.",
  keywords: ["Maru Cordero", "Belleza", "Negocios", "Healthy Mom", "Beauty Mom", "Network Marketing", "Skincare", "Riman"],
  authors: [{ name: "Maru Cordero" }],
  creator: "Maru Cordero",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://marucordero.com",
    title: "Maru Cordero - Businesswoman | Healthy & Beauty Mom",
    description: "Redefiniendo la belleza sin edad. Businesswoman, Healthy & Beauty Mom.",
    siteName: "Maru Cordero",
    images: [
      {
        url: "/opengraph-image.png", // We will need to make sure this image exists or use a default
        width: 1200,
        height: 630,
        alt: "Maru Cordero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maru Cordero - Businesswoman | Healthy & Beauty Mom",
    description: "Redefiniendo la belleza sin edad. Businesswoman, Healthy & Beauty Mom.",
    images: ["/twitter-image.png"], // Sames as above
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dancingScript.variable} ${quicksand.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}

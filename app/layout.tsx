import type { Metadata } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";

import { Providers } from "@/components/Providers";
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
  title: "Maru Cordero - Businesswoman | Healthy & Beauty Mom",
  description: "Redefiniendo la belleza sin edad. Businesswoman, Healthy & Beauty Mom.",
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
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Space_Grotesk,
  Syne,
  DM_Sans,
  Instrument_Serif,
  Noto_Sans_Arabic,
} from "next/font/google";
import { VariantSwitcher } from "@/components/shared/VariantSwitcher";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-face-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-face-cormorant",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-face-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-face-syne",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-face-dm",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-face-instrument",
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-face-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sand Arabia — Homepage Design Variants",
  description:
    "Three homepage design directions for Sand Arabia Communications & Information Technology Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} ${grotesk.variable} ${syne.variable} ${dm.variable} ${instrument.variable} ${arabic.variable}`}
    >
      <body className="font-jakarta antialiased">
        {children}
        <VariantSwitcher />
      </body>
    </html>
  );
}

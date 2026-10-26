import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans_Arabic } from "next/font/google";
import { company, siteConfig } from "@/content/site";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-face-grotesk",
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-face-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description: siteConfig.description,
  applicationName: company.name,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/logo-mark.png" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-futuristic-clean.jpg",
        width: 1200,
        height: 630,
        alt: "Sand Arabia Communications & Information Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero-futuristic-clean.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${arabic.variable}`}>
      <body className="bg-[#04080d] font-grotesk text-white antialiased">{children}</body>
    </html>
  );
}

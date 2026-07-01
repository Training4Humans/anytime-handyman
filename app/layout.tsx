import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { businessInfo } from "@/config/businessinfo";

export const metadata: Metadata = {
  title: {
    default: businessInfo.seo.defaultTitle,
    template: `%s | The Anytime Handyman`,
  },
  description: businessInfo.seo.defaultDescription,
  keywords: businessInfo.seo.keywords,
  metadataBase: new URL(`https://${businessInfo.domain}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${businessInfo.domain}`,
    siteName: businessInfo.name,
    title: businessInfo.seo.defaultTitle,
    description: businessInfo.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.seo.defaultTitle,
    description: businessInfo.seo.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

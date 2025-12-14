import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "@/styles/globals.scss";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo";
import { LayoutPage } from "@/components/layout/LayoutPage";
import Head from "./Head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17804414685"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17804414685');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}

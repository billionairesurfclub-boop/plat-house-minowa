import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス三ノ輪 | 三ノ輪駅徒歩6分 80㎡3DK戸建て 最大8名 民泊",
  description:
    "三ノ輪駅（東京メトロ日比谷線）徒歩6分。80㎡の3DK戸建て一棟貸切・最大8名。Netflix・Nintendo Switch・キッチン完備。浅草・上野エリアのグループ旅行に最適。",
  keywords:
    "ぷらっとハウス三ノ輪, 三ノ輪 民泊, 台東区 民泊, 三ノ輪駅 宿泊, 浅草近く 民泊, Minowa accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス三ノ輪 | 三ノ輪駅6分 80㎡3DK 最大8名",
    description:
      "三ノ輪駅6分。80㎡3DK戸建て一棟貸切・最大8名。Netflix・Nintendo Switch・キッチン完備。",
    url: "https://minowa.plat-house.jp",
    siteName: "Plat House Minowa",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://minowa.plat-house.jp",
    languages: {
      "ja": "https://minowa.plat-house.jp",
      "en": "https://minowa.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6KVD2DBCH4" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6KVD2DBCH4');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス三ノ輪",
          "url": "https://minowa.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "竜泉３－３－９",
            "addressLocality": "台東区",
            "addressRegion": "東京都",
            "postalCode": "110-0012",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥22,000〜¥33,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "@/styles/main.scss";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Carbide precision part manufacturing, Tool components for molding",
  description:
    "Custom-made design of Tungsten Carbide, Forming and Cutting inserts as well as dies and bushings made out of HSS or PM Steel according to your drawing",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    // canonical: "https://hm-profi.com/",
    canonical: "https://hm-profi.vercel.app/",
    languages: {
      "de": "https://hm-profi.de",
      "en": "https://hm-profi.com",
    },
  },
  openGraph: {
    title: "Carbide precision part manufacturing, Tool components for molding",
    description:
      "Custom-made design of Tungsten Carbide, Forming and Cutting inserts as well as dies and bushings made out of HSS or PM Steel according to your drawing",
    url: "https://hm-profi.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}

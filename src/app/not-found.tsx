import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | HM-PROFI",
  description:
    "The requested page could not be found. Please check the URL or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Page Not Found | HM-PROFI",
    description: "The requested page could not be found.",
    url: "https://hm-profi.com/404",
    siteName: "HM-PROFI",
    images: [
      {
        url: "/images/openG/og.webp",
        width: 1200,
        height: 630,
        alt: "HM-PROFI - Page Not Found",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  alternates: {
    canonical: "https://hm-profi.com/404",
  },
};

export default function NotFound() {
  return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          Please check the URL or go back to the {" "}
          <a href="/">homepage</a>.
        </p>
      </div>
  );
}

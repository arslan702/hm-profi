import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const SEOContent = () => {
  const [isGerman, setIsGerman] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsGerman(window.location.hostname.endsWith("hm-profi.com") ? false : true);
    }
  }, []);

  const metaContent = isGerman === true
    ? {
        title: "Feinmechanische Bauteile als Einzelteilfertigung für die Stanztechnik",
        description:
          "Herstellung nach Zeichnung: Formeinsätze und Sonderkomponenten aus Hartmetall, CNC-Bearbeitung, Senkerodieren & Drahterodieren für den Werkzeugbau und Maschinenbau.",
        lang: "de",
        alternateLang: "en",
        alternateURL: "https://hm-profi.com",
        canonicalURL: "https://hm-profi.de"
      }
    : {
        title:
          "High-Precision Carbide Parts & Tool Components for Molding & Stamping",
        description:
          "Custom-engineered tungsten carbide precision parts, forming and cutting inserts, dies, and bushings made from HSS or PM steel. Manufactured to your specifications for tooling, molding, and stamping applications.",
        lang: "en",
        alternateLang: "de",
        alternateURL: "https://hm-profi.de",
        canonicalURL: "https://hm-profi.com"
      };

  return (
    <Helmet>
      {isGerman !== null && (
        <>
          <html lang={metaContent.lang} />
          <title>{metaContent.title}</title>
          <meta name="description" content={metaContent.description} />

          {/* Hreflang für alternative Sprachversion */}
          <link rel="alternate" hrefLang={metaContent.alternateLang} href={metaContent.alternateURL} />
          <link rel="alternate" hrefLang="x-default" href="https://hm-profi.com" />
          <link rel="canonical" href={metaContent.canonicalURL} />

          {/* Open Graph Meta-Tags */}
          <meta property="og:title" content={metaContent.title} />
          <meta property="og:description" content={metaContent.description} />
          <meta property="og:type" content="website" />
          {typeof window !== "undefined" && <meta property="og:url" content={window.location.href} />}

          {/* Twitter Card Meta-Tags */}
          <meta name="twitter:title" content={metaContent.title} />
          <meta name="twitter:description" content={metaContent.description} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
    </Helmet>
  );
};

export default SEOContent;

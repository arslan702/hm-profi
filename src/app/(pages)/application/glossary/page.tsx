import type { Metadata } from "next";
import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: "Precision Manufacturing Glossary | EDM, CNC, Carbide",
  description:
    "Key terms in precision manufacturing: wire EDM, CNC profile grinding, HSC milling, microtechnology, PECM, and materials like carbide, PM steel.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/application/glossary",
    languages: {
      "de": "https://hm-profi.de/application/glossary",
      "en": "https://hm-profi.com/application/glossary",
    },
  },
  openGraph: {
    title: "Precision Manufacturing Glossary | EDM, CNC, Carbide",
    description:
      "Key terms in precision manufacturing: wire EDM, CNC profile grinding, HSC milling, microtechnology, PECM, and materials like carbide, PM steel.",
    url: "https://hm-profi.com/application/glossary",
    type: "website",
  },
};

const Glossary = () => {

  const data = [
    {
      number: "01",
      heading: "Wire and Die-Sinking EDM",
      content: {
        top: "Wire and die-sinking EDM are precise manufacturing processes using electrical discharge.",
        bulletPoint: [
          {
            highlight: "Wire EDM:",
            text: "A thin wire (electrode) cuts materials like carbide or steel with exceptional precision.",
          },
          {
            highlight: "Die-Sinking EDM:",
            text: "A pre-shaped electrode directly forms complex geometries in the workpiece.",
          },
        ],
        bottom:
          "These technologies are ideal for producing tools and components with tight tolerances and intricate shapes.",
      },
    },
    {
      number: "02",
      heading: "CNC Turning and Milling",
      content: {
        top: "CNC turning and milling are computer-controlled processes for machining workpieces.",
        bulletPoint: [
          {
            highlight: "Turning:",
            text: "Rotating workpieces are machined with stationary tools.",
          },
          {
            highlight: "Milling:",
            text: "Rotating tools machine fixed workpieces. Both methods deliver exceptional precision and efficiency, especially for prototypes and custom parts.",
          },
        ],
      },
    },
    {
      number: "03",
      heading: "CNC Profile Grinding",
      content: {
        top: "CNC profile grinding is a high-precision grinding process controlled by CNC (Computer Numerical Control). It enables the machining of complex profiles and contours, such as those required for tool components, with outstanding accuracy and surface quality.",
      },
    },
    {
      number: "04",
      heading: "HSC Milling",
      content: {
        top: "HSC (High-Speed Cutting) milling is a high-speed machining process designed for hard materials like carbide and PM steel. Its high cutting speeds result in excellent surface finishes and reduced machining times.",
      },
    },
    {
      number: "05",
      heading: "Micro Machining",
      content: {
        top: "Micro machining encompasses ultra-precise manufacturing techniques for components with very small dimensions. It is often used in medical technology, microelectronics, and precision mechanics, such as starting holes as small as 0.04 mm in wire EDM.",
      },
    },
    {
      number: "06",
      heading: "PECM Technology",
      content: {
        top: "PECM (Precision Electrochemical Machining) is a contactless machining process that operates without mechanical tool wear. It enables the production of components with superior surface quality and intricate geometries.",
      },
    },
    {
      number: "07",
      heading: "Tungsten Carbide",
      content: {
        top: "Tungsten carbide is an extremely hard and wear-resistant material composed of tungsten carbide particles and a metal binder. It is used in tools, cutting punches, and forming inserts due to its durability under high loads.",
      },
    },
    {
      number: "08",
      heading: "PM Steel",
      content: {
        top: "PM steel (Powder Metallurgy Steel) is made by compacting and sintering steel powder. It features a fine-grained structure that provides high toughness, wear resistance, and heat resistance, making it ideal for forming tools and stamping components.",
      },
    },
    {
      number: "09",
      heading: "HSS Steel",
      content: {
        top: "HSS (High-Speed Steel) is a high-performance tool steel known for its heat resistance and toughness. It is commonly used in tools such as drills, cutters, and punches.",
      },
    },
    {
      number: "10",
      heading: "Technical Ceramics",
      content: {
        top: "Technical ceramics are high-tech materials known for their exceptional hardness, temperature resistance, and wear resistance. They are used in applications where other materials reach their limits, such as cutting inserts or insulators.",
      },
    },
  ];

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/G2.webp"
        heading={{ normalWord: "Glossary" }}
        linkPages={[
          { name: "HOME", link: "/" },
          {
            name: "APPLICATIONS",
          },
        ]}
        currentPageName={"GLOSSARY"}
      />

      {/* Important Terms */}

      <section className={`${Style.importantTerms}`}>
        <div className={Style.center_content}>
          <Heading
            text={"INDEX OF TERMS"}
            bpl={"Reference Guide in Precision"}
            bpr={"Manufacturing"}
          />
          <div className={Style.topPart}>
            {data.map((ele, index) => {
              const { content, heading, number } = ele;
              return (
                <div
                  className={`${Style.box}`}
                  key={index}
                >
                  <div className={Style.number}>
                    <h1>{number}</h1>
                  </div>

                  <h1>{heading}</h1>

                  <div className={Style.content}>
                    <p>{content.top}</p>

                    {content?.bulletPoint?.map((e, i) => {
                      return (
                        <div className={Style.point} key={i}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.99991 12.4445C10.4545 12.4445 12.4444 10.4546 12.4444 8.00001C12.4444 5.54541 10.4545 3.55557 7.99991 3.55557C5.54531 3.55557 3.55547 5.54541 3.55547 8.00001C3.55547 10.4546 5.54531 12.4445 7.99991 12.4445Z"
                              fill="#F95231"
                            />
                          </svg>

                          <p>
                            <span>{e.highlight}</span> {e.text}
                          </p>
                        </div>
                      );
                    })}

                    {content.bottom && <p>{content.bottom}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Glossary;

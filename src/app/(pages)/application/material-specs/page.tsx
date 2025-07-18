import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Material Specifications - Carbide, PM Steel, HSS, Ceramics",
  description:
    "Overview of specs for carbide (2200 HV), HSS steel (67 HRC), and technical ceramics. Explore applications in stamping and forming technology now!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/application/material-specs",
    languages: {
      "de": "https://hm-profi.de/application/material-specs",
      "en": "https://hm-profi.com/application/material-specs",
    },
  },
  openGraph: {
    title: "Material Specifications - Carbide, PM Steel, HSS, Ceramics ",
    description:
      "Overview of specs for carbide (2200 HV), HSS steel (67 HRC), and technical ceramics. Explore applications in stamping and forming technology now!",
    url: "https://hm-profi.com/application/material-specs",
    type: "website",
  },
};

const MaterialSpecs = () => {

  const data = [
    {
      number: "01",
      heading: "Carbide",
      content: {
        bulletPoint: [
          {
            highlight: "Composition:",
            text: "Primarily consist of tungsten carbide (WC) and a binder (e.g.. cobalt)",
          },
          {
            highlight: "Hardness:",
            text: "Very high hardness (1,500-2,200 HV), abrasion-resistant",
          },
          {
            highlight: "Toughness:",
            text: "Varies depending on binder content, generally brittle",
          },
          {
            highlight: "Application:",
            text: "Ideal for punches, dies, and guide bushings in stamping and forming technology  Due to its high  hardness and wear resistance, carbide can withstand extreme pressures and high loads, making it particularly suitable for processing hard materials.",
          },
          {
            highlight: "Temperature:",
            text: "Resistance: Up to 1,000 °C",
          },
          {
            highlight: "Advantages:",
            text: "High wear resistance, high compressive strength, long service life",
          },
        ],
      },
    },
    {
      number: "02",
      heading: "PM Steel (Powder Metallurgy Steel)",
      content: {
        bulletPoint: [
          {
            highlight: "Manufacturing:",
            text: "Produced through powder metallurgy, resulting in an especially fine-grained and homogeneous structure.",
          },
          {
            highlight: "Hardness:",
            text: "Can be very hard, depending on the alloy (up to 65 HRC)",
          },
          {
            highlight: "Toughness:",
            text: "High toughness, less brittle than carbide",
          },
          {
            highlight: "Application:",
            text: "Ideal for demanding stamping and bending tools such as bending punches, dies, and precision guides. The fine-grained structure and high toughness make PM steel particularly suitable for tools that must withstand repeated loads at high forces.",
          },
          {
            highlight: "Temperature Resistance: ",
            text: "Up to 600 °C, depending on the alloy.",
          },
          {
            highlight: "Advantages:",
            text: "Good toughness and wear resistance, high precision due to fine grain structure",
          },
        ],
      },
    },
    {
      number: "03",
      heading: "HSS Steel (High-Speed Steel)",
      content: {
        bulletPoint: [
          {
            highlight: "Composition:",
            text: "Alloyed with elements such as tungsten, molybdenum, vanadium, cobalt.",
          },
          {
            highlight: "Hardness:",
            text: "High hardness (approx. 60-67 HRC) with good toughness.",
          },
          {
            highlight: "Toughness:",
            text: "Higher than carbide, less brittle.",
          },
          {
            highlight: "Application:",
            text: "Suitable for bending and stamping tools that require high forming and cutting speeds, such as precision  punches or blades for cutting thin sheets. HSS tools are easier to resharpen and offer good toughness at high cutting speeds.",
          },
          {
            highlight: "Temperature Resistance: ",
            text: "Up to 600-650 °C",
          },
          {
            highlight: "Advantages:",
            text: "Good toughness and wear resistance, versatile in application.",
          },
        ],
      },
    },
    {
      number: "04",
      heading: "Technical Ceramics",
      content: {
        bulletPoint: [
          {
            highlight: "Types:",
            text: "Common types include aluminum oxide, silicon nitride, and zirconium oxide.",
          },
          {
            highlight: "Hardness:",
            text: "Very high hardness (1,200-2,000 HV depending on type).",
          },
          {
            highlight: "Toughness:",
            text: "Low, very brittle and prone to fracture.",
          },
          {
            highlight: "Application:",
            text: "In stamping, bending, and forming technology, technical ceramics are used in specialized parts such as guides and slide elements requiring low wear and low friction. Particularly suitable for precision guides and inserts needing high abrasion resistance and chemical  inertness.",
          },
          {
            highlight: "Temperature Resistance: ",
            text: "Very high temperature resistance (over 1,200 °C, depending on material).",
          },
          {
            highlight: "Advantages:",
            text: "Extremely wear-resistant, chemically inert, corrosion-resistant, high strength at high temperatures.",
          },
        ],
      },
    },
  ];

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/6.webp"
        heading={{
          normalWord: "Material",
          highlightedWord: " Specifications",
        }}
        linkPages={[
          { name: "HOME", link: "/" },
          {
            name: "APPLICATIONS",
          },
        ]}
        currentPageName={"MATERIAL SPECS"}
      />

      {/* Important Terms */}
      <section className={`${Style.importantTerms}`}>
        <div className={Style.center_content}>
          <Heading
            text="MATERIAL"
            bpl={"Material performance insights"}
            orangeText={"SPECIFICATIONS"}
          />
          <div className={Style.topPart}>
            {data.map((ele, index) => {
              const { content, heading, number } = ele;
              return (
                <div
                  className={`${Style.box} ${Style.additionalStyle}`}
                  key={index}
                >
                  <div className={Style.number}>
                    <h1>{number}</h1>
                  </div>

                  <h1>{heading}</h1>

                  <div className={Style.content}>
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

export default MaterialSpecs;

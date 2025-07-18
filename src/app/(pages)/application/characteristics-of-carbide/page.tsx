import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbide Properties: Hardness and Wear Resistance",
  description:
    "Carbide features: high hardness (up to 2200 HV), wear resistance, compressive strength (7000 N/mm²). Learn about toughness, density, and corrosion resistance!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/application/characteristics-of-carbide",
    languages: {
      "de": "https://hm-profi.de/application/characteristics-of-carbide",
      "en": "https://hm-profi.com/application/characteristics-of-carbide",
    },
  },
  openGraph: {
    title: "Carbide Properties: Hardness and Wear Resistance",
    description:
      "Carbide features: high hardness (up to 2200 HV), wear resistance, compressive strength (7000 N/mm²). Learn about toughness, density, and corrosion resistance!",
    url: "https://hm-profi.com/application/characteristics-of-carbide",
    type: "website",
  },
};

const CharacteristicsOfCarbide = () => {

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/5.webp"
        heading={{
          normalWord: "Characteristics of ",
          highlightedWord: "Carbide",
        }}
        linkPages={[
          { name: "HOME", link: "/" },
          {
            name: "APPLICATIONS",
          },
        ]}
        currentPageName={"CHARACTERISTICS OF CARBIDE"}
      />

      {/* Key Features of Carbide */}
      <section className={`${Style.keyFeaturesOfCarbide}`}>
        <div className={Style.center_content}>
          <Heading
            text={"KEY FEATURES OF CARBIDE"}
            bpl={"Explore its characteristics"}
            bpr={"and advantages"}
          />
          <div className={Style.topPart}>
            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/toughness.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>01.</span> Toughness
                </h1>
                <p>
                  Toughness refers to a material's ability to resist fractures.
                  Compared to other metals, carbide has lower toughness and
                  doesn't undergo plastic deformation before breaking.
                </p>
              </div>
            </div>

            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/hardness.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>02.</span> Hardness
                </h1>
                <p>
                  Carbide hardness, measured by the Vickers method, varies
                  between 700 HV 30 and 2200 HV 30 based on binder content and
                  grain size.
                </p>
              </div>
            </div>

            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/strength.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>03.</span> Compressive Strength
                </h1>
                <p>
                  With fine grains and reduced binder, carbide achieves
                  compressive strengths up to 7000 N/mm².
                </p>
              </div>
            </div>

            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/density.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>04.</span> Density
                </h1>
                <p>
                  With a high density of
                  <span> 15.7 g/cm³, </span> carbide is significantly heavier
                  than steel, essential for weight-sensitive designs.
                </p>
              </div>
            </div>

            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/resistance.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>05.</span> Corrosion Resistance
                </h1>
                <p>
                  Replacing cobalt with nickel in the binder significantly
                  improves corrosion resistance and extends durability.
                </p>
              </div>
            </div>

            <div
              className={`${Style.card}`}
              // ref={(el) => {
              //   elementsRef.current.push(el);
              // }}
            >
              <div className={Style.icon}>
                <img src="/images/icons/wave.webp" alt="" />
              </div>
              <div className={Style.content}>
                <h1>
                  <span>06.</span> Wear Resistance
                </h1>
                <p>
                  Tungsten carbide offers outstanding wear resistance, even
                  under high stress or abrasive conditions, making it ideal for
                  demanding processes and extending tool life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.Characteristic_page_label}>
        <div className={Style.center_content}>
          <div
            className={`${Style.leftSide}`}
            // ref={(el) => {
            //   elementsRef.current.push(el);
            // }}
          >
            <h1>
              Curious About
              <span> Our Services? </span>
            </h1>
            <p>
              Our specialized manufacturing technologies ensure maximum
              dimensional accuracy, finest surface quality, and minimal
              roughness.
            </p>
          </div>

          <Link
            href="/#ourServices"
            // className="animateElement"
            // ref={(el) => {
            //   elementsRef.current.push(el);
            // }}
          >
            Explore Now{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default CharacteristicsOfCarbide;

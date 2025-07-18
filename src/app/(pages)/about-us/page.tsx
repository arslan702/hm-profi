import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import AboutUsPage from "@/components/pagesComponents/AboutUsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Manufacturing for High-Tech Components",
  description:
    "Specialists in custom precision parts using high-tech materials for automotive, aerospace, and medical industries. Innovating since 2009",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/about-us",
    languages: {
      "de": "https://hm-profi.de/about-us",
      "en": "https://hm-profi.com/about-us",
    },
  },
  openGraph: {
    title: "Precision Manufacturing for High-Tech Components",
    description:
      "Specialists in custom precision parts using high-tech materials for automotive, aerospace, and medical industries. Innovating since 2009",
    url: "https://hm-profi.com/about-us",
    type: "website",
  },
};

const AboutUs = () => {

  const data = [
    {
      heading: "Commitment to Quality",
      description:
        "We are dedicated to excellence in every detail, from material selection to precision manufacturing. Quality lies at the core of our work, ensuring reliable and high-performance products.",
      number: "01",
      icon: "/images/icons/quality.webp",
    },
    {
      heading: "Customer-Centric Focus",
      description:
        "Your success is our priority. We collaborate closely to understand your needs and deliver tailored solutions that exceed expectations.",
      number: "02",
      icon: "/images/icons/focus.webp",
    },
    {
      heading: "Innovation & Technology",
      description:
        "We embrace cutting-edge technologies and innovative processes to push boundaries. We deliver advanced solutions that consistently stay ahead of market demands.",
      number: "03",
      icon: "/images/icons/innovation.webp",
    },
    {
      heading: "Integrity & Transparency",
      description:
        "We believe in honest and transparent communication, upholding ethical businesspractices. Building trust is essential for fostering strong and lasting relationships with our clients and partners.",
      number: "04",
      icon: "/images/icons/transparency.webp",
    },
    {
      heading: "Teamwork & Collaboration",
      description:
        "Our success is built on collaboration. By uniting our team's expertise and partnering closely with clients, we create value that drives mutual success.",
      number: "05",
      icon: "/images/icons/teamwork.webp",
    },
    {
      heading: "Sustainable Responsibility",
      description:
        "We take responsibility for our impact, adopting sustainable practices and contributing positively to the manufacturing industry and beyond.",
      number: "06",
      icon: "/images/icons/carbon_sustainability.webp",
    },
    {
      heading: " Continuous Improvement",
      description:
        "We are committed to growth and progress, constantly refining our processes, skills, and products to maintain our position as an industry leader.",
      number: "07",
      icon: "/images/icons/vector.webp",
    },
    {
      heading: " Flexibility and Adaptability",
      description:
        "We respond quickly and effectively to new challenges and customer requirements. Our flexible approach allows us to meet individual demands and implement even complex projects efficiently and reliably.",
      number: "08",
      icon: "/images/icons/SpringInMotion.webp",
    },
  ];

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/BAU1.webp"
        heading={{
          normalWord: "About ",
          highlightedWord: "Us",
        }}
        currentPageName={"ABOUT US"}
        linkPages={[{ name: "HOME", link: "/" }]}
      />

      {/* About Us */}
      <section
        className={`${Style.aboutUsSection} ${Style.aboutUsSectionAlignment}`}
      >
        <div className={Style.center_content}>
          <Heading
            text={"Your Partner for Technical Excellence"}
            bpl={"HM-PROFI - Precision that"}
            bpr={"connects"}            
          />
          <div className={Style.topPart}>
            <div className={Style.top_LeftSide}>
              <p
                // className="animateElement"
              >
                <span className={`blackColor ${Style.boldText}`}>
                  {" "}
                  HM-PROFI
                </span>{" "}
                <span className={`orangeColor ${Style.boldText}`}>
                  GmbH & Co. KG
                </span>
                , is your partner for technical excellence. Our goal: bringing your 
                visions to life with precise solutions – across Europe and industries.
              </p>

              <p
                // className="animateElement"
              >
                Our specialists combine technical skill with passion. Together, we create 
                innovative components that shine in demanding sectors like tooling technology.
              </p>

              <p
                // className="animateElement"
              >
                Your needs come first. Whether mechanical engineering or plant construction – 
                we enhance your processes with tailored components and reliable service.
              </p>

              <p
                // className="animateElement"
              >
                Looking to tomorrow, we rely on advanced technology and smart materials. 
                This creates precision parts that shape today’s market and tomorrow’s ideas.
              </p>

              <p
                className={`${Style.semiBoldText}`}
              >
                {" "}
                Benefit from our expertise and dependability. 
                We deliver not just components, but real value – for your projects and competitive edge.
              </p>
            </div>
            <div
              className={`${Style.top_RightSide}`}
            >
              <img src="/images/aboutus/AU2.webp" alt="" />
            </div>
          </div>{" "}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={Style.visionAndMission}>
        <div className={Style.center_content}>
          <Heading
            text="VISION & MISSION"
            bpl={"Your Partner in "}
            bpr={"Precision Engineering"}
          />

          <div className={Style.cards}>
            <div
              className={`${Style.card01}`}
            >
              <div className={Style.leftSide}>
                <div className={Style.top}>
                  <h1>Vision</h1>

                  <div className={Style.icon}>
                    <img src="/images/icons/vision.webp" alt="" loading="lazy" />
                  </div>
                </div>

                <div className={Style.para}>
                  <p>
                    Our vision is to set the highest standards as a leader in
                    high-precision parts made from tungsten carbide, PM steel,
                    HSS steel, and technical ceramics.
                  </p>
                  <p>
                    We strive to support the industry with precise, reliable
                    manufacturing solutions that drive efficiency and durability
                    across diverse applications.
                  </p>
                </div>
              </div>
              <div className={Style.rightSide}>
                <img src="/images/vision-and-mission/img1.webp" alt="" loading="lazy" />
              </div>
            </div>
            <div
              className={`${Style.card01}`}
            >
              <div className={Style.leftSide}>
                <div className={Style.top}>
                  <h1>Mission</h1>

                  <div className={Style.icon}>
                    <img src="/images/icons/mission.webp" alt="" />
                  </div>
                </div>

                <div className={Style.para}>
                  <p>
                    Our mission is to produce precision-engineered components
                    tailored to clients' unique requirements, leveraging
                    state-of-the-art manufacturing technology and expertise.
                  </p>
                  <p>
                    {" "}
                    With flexibility and a strong customer focus, we deliver
                    innovative solutions that exceed even the most demanding
                    quality expectations.
                  </p>
                </div>
              </div>
              <div className={Style.rightSide}>
                <img src="/images/vision-and-mission/img2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className={Style.ourCoreValues}>
        <div className={Style.center_content}>
          <Heading
            text={"OUR CORE VALUES"}
            bpl={"Precision, Partnership,"}
            bpr={"Progress"}
          />

          <div className={Style.container}>
            <p
              // className="animateElement"
            >
              Our core values are the foundation of everything we do at
              HM-PROFI. They guide our work in delivering high-quality,
              <br /> custom-engineered precision components and solutions for
              diverse industries. By living these values, we ensure
              <br /> exceptional service, foster lasting partnerships, and
              continuously drive innovation in manufacturing.
            </p>

            <div className={Style.cards}>
              {data &&
                data.map((e, i) => {
                  return (
                    <div
                      className={`${Style.card01}`}
                      key={i}
                    >
                      <div className={Style.icon}>
                        <img src={e.icon} alt="" />
                      </div>

                      <h1>{e.heading}</h1>

                      <p>{e.description}</p>

                      <div className={Style.number}>
                        <h1>{e.number}</h1>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* quote word */}
      <section
        className={`${Style.quoteWord} ${Style.quoteWordOne}`}
        id="quality"
      >
        <div className={Style.wrapper}>
          <div className={Style.quote}>
            <svg
              width="60"
              height="46"
              viewBox="0 0 60 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={Style.blackQuote}
            >
              <path
                d="M26.16 0.959995L17.16 32.16L13.92 19.2C17.92 19.2 21.2 20.36 23.76 22.68C26.32 25 27.6 28.2 27.6 32.28C27.6 36.36 26.28 39.64 23.64 42.12C21.08 44.52 17.84 45.72 13.92 45.72C10 45.72 6.72 44.52 4.08 42.12C1.52 39.64 0.24 36.36 0.24 32.28C0.24 31.16 0.32 30.04 0.48 28.92C0.72 27.8 1.12 26.44 1.68 24.84C2.24 23.24 3.08 21.16 4.2 18.6L11.88 0.959995H26.16ZM57.6 0.959995L48.6 32.16L45.36 19.2C49.36 19.2 52.64 20.36 55.2 22.68C57.76 25 59.04 28.2 59.04 32.28C59.04 36.36 57.72 39.64 55.08 42.12C52.52 44.52 49.28 45.72 45.36 45.72C41.44 45.72 38.16 44.52 35.52 42.12C32.96 39.64 31.68 36.36 31.68 32.28C31.68 31.16 31.76 30.04 31.92 28.92C32.16 27.8 32.56 26.44 33.12 24.84C33.68 23.24 34.52 21.16 35.64 18.6L43.32 0.959995H57.6Z"
                fill="black"
              />
            </svg>
            <svg
              width="60"
              height="46"
              viewBox="0 0 60 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.16 0.959995L17.16 32.16L13.92 19.2C17.92 19.2 21.2 20.36 23.76 22.68C26.32 25 27.6 28.2 27.6 32.28C27.6 36.36 26.28 39.64 23.64 42.12C21.08 44.52 17.84 45.72 13.92 45.72C10 45.72 6.72 44.52 4.08 42.12C1.52 39.64 0.24 36.36 0.24 32.28C0.24 31.16 0.32 30.04 0.48 28.92C0.72 27.8 1.12 26.44 1.68 24.84C2.24 23.24 3.08 21.16 4.2 18.6L11.88 0.959995H26.16ZM57.6 0.959995L48.6 32.16L45.36 19.2C49.36 19.2 52.64 20.36 55.2 22.68C57.76 25 59.04 28.2 59.04 32.28C59.04 36.36 57.72 39.64 55.08 42.12C52.52 44.52 49.28 45.72 45.36 45.72C41.44 45.72 38.16 44.52 35.52 42.12C32.96 39.64 31.68 36.36 31.68 32.28C31.68 31.16 31.76 30.04 31.92 28.92C32.16 27.8 32.56 26.44 33.12 24.84C33.68 23.24 34.52 21.16 35.64 18.6L43.32 0.959995H57.6Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className={Style.center_content}>
            <div className={Style.content}>
              <div
                className={`${Style.topHeading}`}
              >
                <svg
                  width="50"
                  height="38"
                  viewBox="0 0 50 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="31.8849"
                    width="17.9003"
                    height="36.0688"
                    rx="2.64855"
                    transform="rotate(4.57592 31.8849 0)"
                    fill="#FF7256"
                  />
                  <rect
                    x="14.0555"
                    y="0.903198"
                    width="11.4628"
                    height="35.6781"
                    rx="2.64855"
                    transform="rotate(4.57592 14.0555 0.903198)"
                    fill="#FF8E77"
                  />
                  <rect
                    x="3.32535"
                    y="1.01953"
                    width="4.98612"
                    height="35.694"
                    rx="2.49306"
                    transform="rotate(4.57592 3.32535 1.01953)"
                    fill="#FFBBAE"
                  />
                </svg>

                <h1>Commitment To Quality</h1>

                <svg
                  width="51"
                  height="38"
                  viewBox="0 0 51 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.92743"
                    width="17.9003"
                    height="36.0688"
                    rx="2.64855"
                    transform="rotate(4.57592 2.92743 0)"
                    fill="#FF7256"
                  />
                  <rect
                    x="27.2703"
                    width="11.4628"
                    height="35.6781"
                    rx="2.64855"
                    transform="rotate(4.57592 27.2703 0)"
                    fill="#FF8E77"
                  />
                  <rect
                    x="45.552"
                    width="4.98612"
                    height="35.694"
                    rx="2.49306"
                    transform="rotate(4.57592 45.552 0)"
                    fill="#FFBBAE"
                  />
                </svg>
              </div>

              <div
                className={`${Style.text} ${Style.widthAdjust}`}
              >
                <p>
                  <span>Quality </span> is always a top priority for us! In
                  order to supply you with
                  <span> 100% </span> error-free products, we pursue the
                  strategy of error prevention instead of error detection.
                  Statistical tools are used in all manufacturing processes to
                  monitor the products, ensuring effective quality control at
                  every step.
                </p>
              </div>
              <AboutUsPage/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

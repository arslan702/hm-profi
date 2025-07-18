import "/node_modules/swiper/swiper-bundle.min.css"; 
import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Card from "@/components/card/Card";
import Slider from "@/components/Slider";
import Link from "next/link";
import type { Metadata } from "next";
import HomePage from "@/components/pagesComponents/HomePage";

export const metadata: Metadata = {
  title: "Carbide precision part manufacturing, Tool components for molding",
  description:
    "Custom-made design of Tungsten Carbide, Forming and Cutting inserts as well as dies and bushings made out of HSS or PM Steel according to your drawing",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/",
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

const Home = () => {

  return (
    <>
      {/* Slider */}
      <Slider />

      {/* Home */}
      <section className={Style.aboutUsSection}>
        <div className={Style.center_content}>
          <Heading
            text={"WHO WE ARE"}
            bpl={"HM-PROFI - Precision for Your"}
            bpr={"Success"}
          />

          <div className={Style.topPart}>
            <div className={Style.top_LeftSide}>
              <p
                // className="animateElement"
              >
                <span className={`blackColor ${Style.boldText}`}>HM-PROFI</span>{" "}
                <span className={`orangeColor ${Style.boldText}`}>
                  GmbH & Co. KG
                </span>
                , based in Düsseldorf, was founded in 2009 and specializes in developing 
                and manufacturing custom quality components for the technical sector.
              </p>

              <p
                // className="animateElement"
              >
                Our focus lies in designing and producing technically demanding precision parts 
                and components using proven standard materials as well as cutting-edge high-tech materials.
              </p>

              <p
                // className="animateElement"
              >
                We proudly supply valued customers across Europe from diverse industries, including 
                mechanical engineering, plant construction, and advanced tooling technology.
              </p>

              <p
                // className="animateElement"
              >
                Our products stand out for their proven reliability and are used 
                in highly challenging projects within the manufacturing industry.
              </p>

              <p
                className={`${Style.semiBoldText}`}
              >
                Optimal customer support remains our top priority. 
                Your complete satisfaction is our success!
              </p>
            </div>
            <div
              className={`${Style.top_RightSide}`}
            >
              <img src="/images/aboutus/HAU1.webp" alt="" />
            </div>
          </div>

          <div className={Style.bottomPart}>
            <Card image="/images/card/HW1.webp" text={"Experienced Staff"} />
            <Card image="/images/card/HW2.webp" text={"Quality Products"} />
            <Card image="/images/card/HW3.webp" text={"Modern Equipments"} />
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className={Style.ourServicesSection} id="ourServices">
        <div className={Style.center_content}>
          <div className={Style.content}>
            <Heading
              text={"OUR SERVICES"}
              bpl={"High-Class Technology, First-Class"}
              bpr="Service"
            />

            <p
              className={`${Style.topText}`}
            >
              We deliver custom-made precision parts and tool components as
              bespoke solutions. Manufactured with the utmost precision from
              tungsten carbide, PM steel, HSS steel, and technical ceramics, we
              create high-tech solutions and durable components. Based on your
              CAD data or technical drawings, we provide quality and innovation
              tailored to the manufacturing industry.
            </p>

            <div className={Style.cards}>
              <div
                className={`${Style.card01}`}
              >
                <h2>Single-Part Manufacturing</h2>
                <p>
                  We produce precise, active elements as bespoke solutions, used
                  in the following manufacturing techniques:
                </p>

                <ul>
                  <li>
                    <h3>Stamping Technology:</h3>
                    <p>
                      Punches and dies designed for stamping processes that
                      demand the highest precision and reliability.
                    </p>
                  </li>
                  <li>
                    <h3>Bending and Forming Technology:</h3>
                    <p>
                      Specialized materials for demanding forming processes,
                      ensuring maximum durability and performance.
                    </p>
                  </li>
                  <li>
                    <h3>Plastic Injection Molding Technology:</h3>
                    <p>
                      High-quality inserts and cores for precise shaping and
                      maximum longevity.
                    </p>
                  </li>
                </ul>

                <div className={Style.numbering}>
                  <div className={Style.brLeftTop}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                  <div className={Style.innerCircle}>
                    <h1>01</h1>
                  </div>
                  <div className={Style.brRightBottom}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={`${Style.card01}`}
                // role="listitem"
              >
                <h2>Precision Tools and Design</h2>
                <p>
                  Our expertise in toolmaking combines design and production of
                  high-quality tools for both large and small series production.
                </p>

                <ul>
                  <li>
                    <h3>Stamping, Bending, and Forming Tools:</h3>
                    <p>
                      Precisely manufactured tools to maximize efficiency in
                      series production.
                    </p>
                  </li>
                  <li>
                    <h3>Forming and Cutting Inserts:</h3>
                    <p>
                      Durable and precise inserts for demanding cutting and
                      forming processes.
                    </p>
                  </li>
                  <li>
                    <h3>Plastic Injection Molding Tools:</h3>
                    <p>
                      High-quality tools for series production, offering exact
                      shaping and exceptional durability.
                    </p>
                  </li>
                </ul>

                <div className={Style.numbering}>
                  <div className={Style.brLeftTop}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                  <div className={Style.innerCircle}>
                    <h1>02</h1>
                  </div>
                  <div className={Style.brRightBottom}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={`${Style.card01}`}
              >
                <h2>Precision Punches and Bushings</h2>
                <p>
                  We provide high-quality tool components for ensuring maximum
                  dimensional stability and excellent surface quality.
                </p>

                <ul>
                  <li>
                    <h3>Cutting, Punching, and Drawing Punches:</h3>
                    <p>
                      Individually manufactured contours for precise
                      manufacturing processes.
                    </p>
                  </li>
                  <li>
                    <h3>Drawing Dies and Bushings:</h3>
                    <p>
                      Durable dies and robust bushings, optimized for complex
                      forming techniques.
                    </p>
                  </li>
                  <li>
                    <h3>Cutting Bushings and Plates:</h3>
                    <p>
                      Efficient solutions for scrap-stop, ensuring long life in
                      cutting and punching processes.
                    </p>
                  </li>
                </ul>

                <div className={Style.numbering}>
                  <div className={Style.brLeftTop}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                  <div className={Style.innerCircle}>
                    <h1>03</h1>
                  </div>
                  <div className={Style.brRightBottom}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={`${Style.card01}`}
              >
                <h2>Precision Components</h2>
                <p>
                  Advanced technologies produce precise geometric shapes and
                  microtechnological components to meet the highest demands.
                </p>

                <ul>
                  <li>
                    <h3>Complex Geometric Forms:</h3>
                    <p>
                      Minimal tolerances ensure exact precision and perfect fit,
                      even for demanding designs.
                    </p>
                  </li>
                  <li>
                    <h3>Max. Dimensional Accuracy:</h3>
                    <p>
                      For applications with highest precision requirements,
                      where even the smallest deviations are unacceptable.
                    </p>
                  </li>
                  <li>
                    <h3>Microtechnology with Maximum Precision:</h3>
                    <p>
                      Our technologies enable the production of hole diameters
                      as small as Ø 0.04 mm, perfect for tiniest nozzles.
                    </p>
                  </li>
                </ul>

                <div className={Style.numbering}>
                  <div className={Style.brLeftTop}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                  <div className={Style.innerCircle}>
                    <h1>04</h1>
                  </div>
                  <div className={Style.brRightBottom}>
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#f1f2f4"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.processingMethods}>
              <div
                className={`${Style.heading}`}
              >
                <h1>Processing Methods Incudes</h1>
              </div>

              <div className={Style.points}>
                <div
                  className={`${Style.col01}`}
                >
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p> Wire and sinker EDM</p>
                  </div>
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p>Micro machining</p>
                  </div>
                </div>
                <div
                  className={`${Style.col01}`}
                >
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p>CNC profile grinding</p>
                  </div>
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p>CNC turning and milling</p>
                  </div>
                </div>
                <div
                  className={`${Style.col01}`}
                >
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p> HSC milling </p>
                  </div>
                  <div className={Style.row01}>
                    <img src="/images/icons/1ok.webp" alt="" />
                    <p>PECM technology</p>
                  </div>
                </div>
              </div>
            </div>

            <HomePage/>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className={Style.ourExpertiseSection} id="ourExpertise">
        <div className={Style.center_content}>
          <div className={Style.container}>
            <Heading
              text={"OUR EXPERTISE"}
              bpl={"Your Partner in"}
              bpr={"Precision Engineering"}
            />

            <p
            //   className="animateElement"
            >
              With over 25 years of experience in toolmaking, mold-making, and
              mechanical engineering, we are your reliable partner for the
              production of high-precision custom parts, drawing-based
              components, and form-shaping special components. Our extensive
              expertise, combined with innovative technologies, enables us to
              execute complex projects and develop tailored solutions for a wide
              range of requirements.
            </p>

            <div className={Style.cards}>
              <div
                className={`${Style.card01}`}
              >
                <div className={Style.card_left}>
                  <img src="/images/expertise/HE1.webp" alt="" loading="lazy" />
                </div>

                <div className={Style.card_right}>
                  <div className={Style.content}>
                    <h1>
                      Consultation and Support
                      <span>.</span>
                    </h1>
                    <p>
                      We assist you in optimizing your tool designs and support
                      complex projects to enhance the efficiency and quality of
                      your processes.
                    </p>
                    <p>
                      Additionally, we offer a specialized global consulting
                      service for projects in collaboration with international
                      suppliers.
                    </p>
                    <Link href={"/our-scope/consulting-services"}>
                      Learn More
                      <span className="srOnly">Learn more about consulting services</span> 
                    </Link>
                  </div>
                  <h1>01</h1>
                </div>
              </div>

              <div
                className={`${Style.card01}`}
              >
                <div className={Style.card_right}>
                  <div className={Style.content}>
                    <h1>
                      Technology Utilization
                      <span>.</span>
                    </h1>
                    <p>
                      By employing state-of-the-art technologies, we ensure the
                      highest precision and quality in production. Our technical
                      expertise enables us to meet the challenges of a dynamic
                      and innovative market successfully.
                    </p>
                  </div>
                  <h1>02</h1>
                </div>

                <div className={Style.card_left}>
                  <img src="/images/expertise/HE2.webp" alt="" loading="lazy" />
                </div>
              </div>
            </div>

            <div className={Style.bottomPart}>
              <div
                className={`${Style.blackContainer}`}
              >
                <svg
                  width="49"
                  height="37"
                  viewBox="0 0 49 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.571 0.0259958L14.296 25.246L11.677 14.77C14.9103 14.77 17.5617 15.7077 19.631 17.583C21.7003 19.4583 22.735 22.045 22.735 25.343C22.735 28.641 21.668 31.2923 19.534 33.297C17.4647 35.237 14.8457 36.207 11.677 36.207C8.50833 36.207 5.857 35.237 3.723 33.297C1.65367 31.2923 0.619 28.641 0.619 25.343C0.619 24.4377 0.683667 23.5323 0.813 22.627C1.007 21.7217 1.33033 20.6223 1.783 19.329C2.23567 18.0357 2.91467 16.3543 3.82 14.285L10.028 0.0259958H21.571ZM46.985 0.0259958L39.71 25.246L37.091 14.77C40.3243 14.77 42.9757 15.7077 45.045 17.583C47.1143 19.4583 48.149 22.045 48.149 25.343C48.149 28.641 47.082 31.2923 44.948 33.297C42.8787 35.237 40.2597 36.207 37.091 36.207C33.9223 36.207 31.271 35.237 29.137 33.297C27.0677 31.2923 26.033 28.641 26.033 25.343C26.033 24.4377 26.0977 23.5323 26.227 22.627C26.421 21.7217 26.7443 20.6223 27.197 19.329C27.6497 18.0357 28.3287 16.3543 29.234 14.285L35.442 0.0259958H46.985Z"
                    fill="#F95231"
                  />
                </svg>
                <svg
                  width="49"
                  height="37"
                  viewBox="0 0 49 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={Style.bgSvg}
                >
                  <path
                    d="M21.571 0.0259958L14.296 25.246L11.677 14.77C14.9103 14.77 17.5617 15.7077 19.631 17.583C21.7003 19.4583 22.735 22.045 22.735 25.343C22.735 28.641 21.668 31.2923 19.534 33.297C17.4647 35.237 14.8457 36.207 11.677 36.207C8.50833 36.207 5.857 35.237 3.723 33.297C1.65367 31.2923 0.619 28.641 0.619 25.343C0.619 24.4377 0.683667 23.5323 0.813 22.627C1.007 21.7217 1.33033 20.6223 1.783 19.329C2.23567 18.0357 2.91467 16.3543 3.82 14.285L10.028 0.0259958H21.571ZM46.985 0.0259958L39.71 25.246L37.091 14.77C40.3243 14.77 42.9757 15.7077 45.045 17.583C47.1143 19.4583 48.149 22.045 48.149 25.343C48.149 28.641 47.082 31.2923 44.948 33.297C42.8787 35.237 40.2597 36.207 37.091 36.207C33.9223 36.207 31.271 35.237 29.137 33.297C27.0677 31.2923 26.033 28.641 26.033 25.343C26.033 24.4377 26.0977 23.5323 26.227 22.627C26.421 21.7217 26.7443 20.6223 27.197 19.329C27.6497 18.0357 28.3287 16.3543 29.234 14.285L35.442 0.0259958H46.985Z"
                    fill="#F1F2F4"
                  />
                </svg>

                <p>
                  Thanks to cutting-edge technologies and technical know-how, we
                  deliver precise and
                  <br /> customized solutions for the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Engineering with Next-Gen Tech */}
      <section className={Style.nextGenTech} id="technology">
        <div className={Style.center_content}>
          <Heading
            text={"PRECISION ENGINEERING WITH"}
            orangeText={"NEXT-GEN TECH"}
            bpl={"High-Precision Components Built with"}
            bpr={"Innovative Tech"}
          />

          <div className={Style.content}>
            <p
            //   className="animateElement"
            >
              With precision manufacturing of specialized materials, we achieve
              the highest standards in tool component quality. Our
              <br />
              expertise, combined with cutting-edge manufacturing methods,
              ensures reliability in high-tech applications. As a dynamic
              <br />
              company with extensive flexibility and capacity, we proudly serve
              diverse clients across all areas of industry and engineering.
            </p>

            <div className={Style.Images}>
              <div
                className={`${Style.col01}`}
              >
                <img src="/images/NextGenTech/H1.webp" alt="" loading="lazy" />
              </div>

              <div
                className={`${Style.col02}`}
              >
                <div className={Style.card01}>
                  <img src="/images/NextGenTech/H2.webp" alt="" loading="lazy" />
                </div>
                <div className={Style.card01}>
                  <img src="/images/NextGenTech/H3.webp" alt="" loading="lazy" />
                </div>
              </div>

              <div
                className={`${Style.col01}`}
              >
                <img src="/images/NextGenTech/H4.webp" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CARBIDE */}
      <section className={Style.carbide} id="whyCarbide">
        <div className={Style.center_content}>
          <Heading
            text={"WHY CARBIDE"}
            bpl={"Carbide: The Benchmark in"}
            bpr={"Performance"}
          />

          <div className={Style.content}>
            <div className={Style.left}>
              <div
                className={`${Style.paragraph}`}
              >
                <p>
                  The continuously increasing quality demands in tool technology
                  have
                  <br /> opened up a wide range of new applicatio possibilities
                  for carbide.
                </p>

                <p>
                  Tools and technical components with carbide inserts are now
                  used in
                  <br /> almost all areas of the manufacturing industry,
                  particularly when the
                  <br /> following requirements need to be met:
                </p>
              </div>

              <ul
                // className="animateElement"
              >
                <li>
                  <p><span>01</span>
                  High Production Volumes and Long Service Life</p>
                </li>

                <li>
                  <p><span>02</span>
                  Consistent Product Quality</p>
                </li>

                <li>
                  <p><span>03</span>
                  Maximum Dimensional Accuracy</p>
                </li>

                <li>
                  <p><span>04</span>
                  Forming At The Limits Of Material Properties</p>
                </li>

                <li>
                  <p><span>05</span>
                  Highest Process Reliability</p>
                </li>
              </ul>

              <p
                className={`${Style.paragraphBottom}`}
              >
                Carbide is primarily used in large-scale production, where
                <br /> exceptional resistance to abrasive and adhesive wear is
                required
                <br /> alongside high mechanical durability.
              </p>
            </div>
            <div
              className={`${Style.right}`}
            >
              <img src="/images/carbide/C1.webp" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


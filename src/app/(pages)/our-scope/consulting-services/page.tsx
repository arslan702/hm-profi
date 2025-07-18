import Style from "@/styles/components/home.module.scss";
import Heading from "@/components/heading/Heading";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import type { Metadata } from "next";
import ConsultingService from "@/components/pagesComponents/ConsultingServices";

export const metadata: Metadata = {
  title: "Consulting & Project Support for Stamping Tools, Worldwide!",
  description:
    "Global Consulting for Stamping Tool Projects: Development, Optimization & Quality Management. Specialized in international projects & China collaborations.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hm-profi.com/our-scope/consulting-services",
    languages: {
      "de": "https://hm-profi.de/our-scope/consulting-services",
      "en": "https://hm-profi.com/our-scope/consulting-services",
    },
  },
  openGraph: {
    title: "Consulting & Project Support for Stamping Tools, Worldwide!",
    description:
      "Global Consulting for Stamping Tool Projects: Development, Optimization & Quality Management. Specialized in international projects & China collaborations.",
    url: "https://hm-profi.com/our-scope/consulting-services",
    type: "website",
  },
};

const ScopePage = () => {

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb
        image="/images/breadcrumb/4.webp"
        heading={{
          normalWord: "Consulting ",
          highlightedWord: "Services",
        }}
        currentPageName={"CONSULTING SERVICES"}
        linkPages={[
          { name: "HOME", link: "/" },
          {
            name: "OUR SCOPE",
          },
        ]}
      />

      {/* How We Support You */}
      <section className={Style.howWeSupportYou}>
        <div className={Style.center_content}>
          <Heading
            text={"HOW WE SUPPORT YOU"}
            bpl={"Tailoring Expertise To"}
            bpr={"Your Vision"}
          />

          <div className={Style.content}>
            <div className={Style.leftSide}>
              <h1
                // className="animateElement"
              >
                Consulting Services for Project Management and Technical
                <br /> Support of Stamping Tools - <span>Worldwide</span>
              </h1>

              <p
                // className="animateElement"
              >
                <span>Our consulting services</span> provide customized support
                in the development and
                <br /> management of complex stamping tools, particularly in
                international projects
                <br /> with a focus on China and worldwide. We guide your
                project through every <br /> stage, from technical conception
                and production to scheduling and quality <br />
                control, offering reliable expertise on a fee basis.
                <br />
              </p>
            </div>

            <img
              src="/images/consulting-services/CSH1.webp"
              alt=""
              // className="animateElement"
            />
          </div>
        </div>
      </section>

      {/* OUR CONSULTING SERVICES INCLUDE */}
      <section className={Style.consultingServices}>
        <div className={Style.center_content}>
          <div className={Style.content}>
            <Heading
              text={"OUR CONSULTING SERVICES INCLUDE"}
              bpl={"Partnering for Your Success"}
              bpr={"Every Step of the Way"}
            />
            <div className={Style.cards}>
              <div
                className={`${Style.card}`}
              >
                <div className={Style.image}>
                  <img src="/images/consulting-services/card/CS1.webp" alt="" loading="lazy" /> 
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20C40 31.046 31.046 40 20 40C8.95399 40 -5.17176e-06 31.046 -4.68893e-06 20C-4.20609e-06 8.954 8.954 -1.35706e-06 20 -8.74228e-07C31.046 -3.91392e-07 40 8.954 40 20ZM24.728 19.04L16.988 11.248C16.7329 10.9913 16.3862 10.8464 16.0242 10.8453C15.6623 10.8442 15.3147 10.9869 15.058 11.242C14.8013 11.4971 14.6564 11.8438 14.6553 12.2058C14.6542 12.5677 14.7969 12.9153 15.052 13.172L21.848 20.01L15.044 26.99C14.8039 27.2512 14.6749 27.5956 14.6846 27.9503C14.6942 28.305 14.8417 28.6419 15.0957 28.8896C15.3496 29.1374 15.6901 29.2764 16.0449 29.2772C16.3997 29.278 16.7409 29.1406 16.996 28.894L24.736 20.952C24.9871 20.6963 25.1272 20.3518 25.1257 19.9934C25.1242 19.6349 24.9813 19.2916 24.728 19.038"
                      fill="#F95231"
                    />
                  </svg>
                </div>
                <div className={Style.text}>
                  <h1>Project Management and Coordination:</h1>
                  <p>
                    We take on complete project coordination, ensuring that your
                    requirements for stamping tools are consistently met at
                    every stage. Our experience in international collaboration
                    enab- les smooth communication & cooperation, especially n
                    projects involving China.
                  </p>
                </div>
              </div>

              <div
                className={`${Style.card}`}
              >
                <div className={Style.image}>
                  <img src="/images/consulting-services/card/CS2.webp" alt="" loading="lazy" />
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20C40 31.046 31.046 40 20 40C8.95399 40 -5.17176e-06 31.046 -4.68893e-06 20C-4.20609e-06 8.954 8.954 -1.35706e-06 20 -8.74228e-07C31.046 -3.91392e-07 40 8.954 40 20ZM24.728 19.04L16.988 11.248C16.7329 10.9913 16.3862 10.8464 16.0242 10.8453C15.6623 10.8442 15.3147 10.9869 15.058 11.242C14.8013 11.4971 14.6564 11.8438 14.6553 12.2058C14.6542 12.5677 14.7969 12.9153 15.052 13.172L21.848 20.01L15.044 26.99C14.8039 27.2512 14.6749 27.5956 14.6846 27.9503C14.6942 28.305 14.8417 28.6419 15.0957 28.8896C15.3496 29.1374 15.6901 29.2764 16.0449 29.2772C16.3997 29.278 16.7409 29.1406 16.996 28.894L24.736 20.952C24.9871 20.6963 25.1272 20.3518 25.1257 19.9934C25.1242 19.6349 24.9813 19.2916 24.728 19.038"
                      fill="#F95231"
                    />
                  </svg>
                </div>
                <div className={Style.text}>
                  <h1> Technical Support for Complex Stamping Tools:</h1>
                  <p>
                    We leverage our technical expertise to assist in developing
                    and optimizing your tools. Whether adapting existing designs
                    or creating new ones, we offer professional advice and
                    solutions to ensure precision and efficiency.
                  </p>
                </div>
              </div>

              <div
                className={`${Style.card}`}
              >
                <div className={Style.image}>
                  <img src="/images/consulting-services/card/CS3.webp" alt="" loading="lazy" />
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20C40 31.046 31.046 40 20 40C8.95399 40 -5.17176e-06 31.046 -4.68893e-06 20C-4.20609e-06 8.954 8.954 -1.35706e-06 20 -8.74228e-07C31.046 -3.91392e-07 40 8.954 40 20ZM24.728 19.04L16.988 11.248C16.7329 10.9913 16.3862 10.8464 16.0242 10.8453C15.6623 10.8442 15.3147 10.9869 15.058 11.242C14.8013 11.4971 14.6564 11.8438 14.6553 12.2058C14.6542 12.5677 14.7969 12.9153 15.052 13.172L21.848 20.01L15.044 26.99C14.8039 27.2512 14.6749 27.5956 14.6846 27.9503C14.6942 28.305 14.8417 28.6419 15.0957 28.8896C15.3496 29.1374 15.6901 29.2764 16.0449 29.2772C16.3997 29.278 16.7409 29.1406 16.996 28.894L24.736 20.952C24.9871 20.6963 25.1272 20.3518 25.1257 19.9934C25.1242 19.6349 24.9813 19.2916 24.728 19.038"
                      fill="#F95231"
                    />
                  </svg>
                </div>
                <div className={Style.text}>
                  <h1>Scheduling and Quality Management:</h1>
                  <p>
                    To ensure a smooth process, we handle strict scheduling and
                    comprehensive quality management. We manage every phase in
                    detail, ensuring that all milestones are met on time for the
                    efficient and timely completion of your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* quote word */}
      <section className={Style.quoteWord}>
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
              className={`${Style.text}`}
            >
              <p>
                With our consulting service, you benefit from a collaborative
                and solution-
                <br /> oriented partnership that supports your project in every
                aspect. Rely on our
                <br /> expertise to make your stamping tool projects a global
                success.
                <br />
              </p>
              <p>
                Contact us to learn more about our tailored
                <br />
                consulting services on a fee basis.
              </p>
            </div>
            <ConsultingService/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScopePage;

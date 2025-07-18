"use client";
import { useState, useEffect, useRef } from "react";
import Style from "./slider.module.scss";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import Link from "next/link";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const slideCount = 3;
  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 9000);
  };

  const endInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    endInterval();
    startInterval();
  };

  useEffect(() => {
    startInterval(); 
    return () => endInterval(); // Cleanup on component unmount
  }, []);

  const slides = [
    {
      imgSrc: "/images/heroSection/1.webp",
      alt: "Hero Image 1",
      heading: {
        normalText: " HIGH ",
        highlight: " PRECISION ",
      },
      subHeading: "INDIVIDUAL AND CUSTOMIZED PRODUCTION",
      paragraph:
        "Your project - our precision: <br /> Tailored solutions for the highest demands.",
    },
    {
      imgSrc: "/images/heroSection/2.webp",
      alt: "Hero Image 2",
      heading: {
        normalText: "UNCOMPROMISING  ",
        highlight: " QUALITY ",
      },
      subHeading: "IN HIGH-TECH PRODUCTION",
      paragraph: "Because excellence is the only standard that matters.",
    },
    {
      imgSrc: "/images/heroSection/3.webp",
      alt: "Hero Image 3",
      heading: {
        normalText: "PRECISION ",
        highlight: " SOLUTIONS ",
      },
      subHeading: "FOR THE INDUSTRY OF TOMORROW",
      paragraph:
        "Innovative technologies for sustainable success in the future.",
    },
  ];

  return (
    <>
      <section className={Style.heroSection} id="heroSection">
        <div className={Style.sliders}>
          <div
            className={`${Style.slide01} ${
              currentSlide === 0 ? Style.active : Style.hide
            }`}
          >
            <div className={Style.slide01_image}>
              <img src={"/images/heroSection/1.webp"} alt={""} />
            </div>
            <div className={Style.slideContent}>
              <div className={Style.slideContent_topPart}>
                <h1>
                  HIGH
                  <span> PRECISION</span>
                </h1>
                <div className={Style.horizontalLine}></div>
                <p> Individual and Customized Production </p>
              </div>
              <h2>
                Your project - our precision:
                <br /> Tailored solutions for the highest demands.
              </h2>
              <div className={`${Style.btns} ${Style.stopSlider}`}>
                <Link href="/#ourServices">Our Services</Link>
                <Link href="/#ourExpertise">Our Expertise</Link>
              </div>
            </div>
          </div>

          <div
            className={`${Style.slide01} ${
              currentSlide === 1 ? Style.active : Style.hide
            }`}
          >
            <div className={Style.slide01_image}>
              <img src={"/images/heroSection/2.webp"} alt={""} />
            </div>
            <div className={Style.slideContent}>
              <div className={Style.slideContent_topPart}>
                <h1>
                  UNCOMPROMISING
                  <span> QUALITY</span>
                </h1>
                <div className={Style.horizontalLine}></div>
                <p>In High-Tech Production</p>
              </div>
              <h2>
                Because excellence is the
                <br /> only standard that matters.
              </h2>
              <div className={`${Style.btns} ${Style.stopSlider}`}>
                <Link href="/#ourServices">Our Services</Link>
                <Link href="/#ourExpertise">Our Expertise</Link>
              </div>
            </div>
          </div>

          <div
            className={`${Style.slide01} ${
              currentSlide === 2 ? Style.active : Style.hide
            }`}
          >
            <div className={Style.slide01_image}>
              <img src={"/images/heroSection/3.webp"} alt={""} />
            </div>
            <div className={Style.slideContent}>
              <div className={Style.slideContent_topPart}>
                <h1>
                  PRECISION <span> SOLUTIONS</span>
                </h1>
                <div className={Style.horizontalLine}></div>
                <p>For the Industry of Tomorrow</p>
              </div>
              <h2>
                Innovative technologies for
                <br /> sustainable success in the future.
              </h2>
              <div className={`${Style.btns} ${Style.stopSlider}`}>
                <Link href="/#ourServices">Our Services</Link>
                <Link href="/#ourExpertise">Our Expertise</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={Style.indicator}
          onMouseEnter={endInterval}
          onMouseLeave={startInterval}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className={index === currentSlide ? Style.active : ""}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </section>

      {/* Contact US */}
      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
    </>
  );
};

export default Slider;

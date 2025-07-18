"use client";

import React, { useState } from "react";
import "@/styles/components/home.module.scss";
import Style from "@/styles/components/home.module.scss";
import Heading from "../heading/Heading";

import ContactUsModal from "@/components/ContactUsModal/ContactUsModal";
import Accordion from "../accordion/Accordion";
import Label from "../label/Label";
import { useHydrated } from "@/hooks/useHydrated";
import NoJsAccordion from "../accordion/NoJsAccordion";

const QuestionAnswer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const isHydrated = useHydrated();

  const data = [
    {
      heading: "What makes HM-PROFI GmbH & Co. KG unique?",
      peragraph:
        "With over 25 years of experience, cutting-edge manufacturing technologies, and a strong focus on quality and precision, we are a reliable partner for customized solutions in industrial manufacturing technology.",
    },
    {
      heading: "What materials are used in production?",
      peragraph:
        "We use high-quality materials such as carbide, PM steel, high-speed steel (HSS), alloyed tool steels, and technical ceramics. These materials are known for their strength, wear resistance, and high performance in demanding applications.",
    },
    {
      heading: "Do you offer consulting for custom projects?",
      peragraph:
        "Yes, we provide tailored consulting – from optimizing tool designs to implementing complex projects, both domestically and internationally.",
    },
    {
      heading: "What manufacturing technologies are used?",
      peragraph:
        "We utilize state-of-the-art technologies, including wire and sinker EDM, CNC profile grinding, HSC milling, micro-machining, CNC turning and milling, as well as PECM technology.",
    },
    {
      heading: "How is product quality ensured?",
      peragraph:
        "We guarantee top product quality through rigorous quality controls, adherence to the highest industry standards, and the use of premium materials. Additionally, we continuously optimize our processes to achieve the finest surface finishes and minimal roughness values.",
    },
    {
      heading: "Do you manufacture small series or individual parts?",
      peragraph:
        "Yes, we specialize in single parts and small series. With custom solutions tailored to your exact requirements, we manufacture almost any geometric shape with the tightest tolerances.",
    },
    {
      heading: "How quickly can orders be fulfilled?",
      peragraph:
        "Thanks to efficient manufacturing processes, we complete customer projects quickly – the exact lead time depends on the complexity and scope of the order.",
    },
    {
      heading: "What is required for a request?",
      peragraph:
        "For an inquiry, we need a technical component drawing. For more complex parts, additional 2D or 3D data is ideal to precisely implement your requirements.",
    },
    {
      heading: "Can 3D data for components be created?",
      peragraph:
        "Only have a sketch or drawing? No problem – we create precise 3D models of your components using the latest CAD software, ensuring they meet your exact specifications and requirements.",
    },
    {
      heading: "Why choose HM-PROFI?",
      peragraph:
        "We stand out with our expertise in high-precision technical components, customized solutions, cutting-edge technologies, and commitment to top quality and excellent customer service. We understand your requirements and develop solutions that exceed your expectations.",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className={`${Style.faq}`}>
        <div className={Style.center_content}>
          <Heading
            text={"FAQs"}
            bpl={"Here are some of the"}
            bpr={"frequently asked questions"}
          />
          <div className={Style.topPart}>
            {data.map((ele, index) => {
              return isHydrated ? (
                <Accordion
                  key={index}
                  heading={ele.heading}
                  paragraph={ele.peragraph}
                  isExpanded={activeIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ) : (
                <NoJsAccordion
                  key={index}
                  heading={ele.heading}
                  paragraph={ele.peragraph}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Label
        heading={{
          normalWord: "Still Have a",
          highlightedWord: "Question?",
        }}
        paragraph={
          "Can’t find the answer you’re looking for? Please contact us via Email."
        }
        btnText={"Contact Us Now"}
        btnLink="/"
        OnClick={() => {
          setIsContactUsModalOpen(true);
        }}
      />

      {/* Contact US */}
      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
    </>
  );
};

export default QuestionAnswer;

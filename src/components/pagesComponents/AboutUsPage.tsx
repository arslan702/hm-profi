"use client";
// src/pages/AboutUs.tsx
import { useState } from "react";
import Style from "../../styles/components/home.module.scss";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import Link from "next/link";

// 2. Passe die AboutUs Komponente an, um die Props zu empfangen
const AboutUsPage = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  return (
    <>
      <div className={Style.wrapper}>
        <div className={`${Style.btns}`}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsContactUsModalOpen(true);
            }}
          >
            Contact Us Now
          </a>
          <Link href={"/#ourServices"}>Our Services</Link>
        </div>
      </div>
      {/* Contact US */}
      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
    </>
  );
};

export default AboutUsPage;

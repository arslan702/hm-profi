"use client";
import React, { useState } from "react";
import Style from "../../styles/components/home.module.scss";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import Link from "next/link";

const ConsultingService = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  return (
    <>
      <div className={`${Style.btns}`}>
        <Link href="/#ourExpertise">Our Expertise</Link>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setIsContactUsModalOpen(true);
          }}
        >
          Contact Us Now
        </a>
      </div>

      {/* Contact US */}
      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
    </>
  );
};

export default ConsultingService;

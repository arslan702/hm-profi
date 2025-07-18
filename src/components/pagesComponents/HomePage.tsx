"use client";

import React, { useState } from "react";
import Style from "@/styles/components/home.module.scss";
import ContactUsModal from "@/components/ContactUsModal/ContactUsModal";

const HomePage: React.FC = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  return (
    <>
      <div className={Style.bottomPart}>
        <div className={Style.blackContainer}>
          <div className={Style.center_content}>
            <p
            //   className="animateElement"
            >
              Benefit from our expertise in manufacturing precisionparts,
              assemblies, and
              <br /> drawing-based parts. We deliver solutions that fit!
            </p>

            <a
              href=""
            //   className="animateElement"
              onClick={(e) => {
                e.preventDefault();
                setIsContactUsModalOpen(true);
              }}
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
    </>
  );
};

export default HomePage;

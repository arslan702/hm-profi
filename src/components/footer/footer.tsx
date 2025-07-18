'use client';
import Style from "./footer.module.scss";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import DownloadModal from "../DownloadModal/DownloadModal";
import { useState } from "react";
import PrivacyAndPolicyModal from "../PrivacyAndPolicy";
import ImprintModal from "../Imprint";
import Link from "next/link";

const Footer = () => {

  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isPrivacyAndPolicyModalOpen, setIsPrivacyAndPolicyModalOpen] =
    useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isImprintModalOpen, setIsImprintModalOpen] = useState(false);

  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.center_content}>
          <div className={Style.topPart}>
            <div className={Style.leftSide}>
              <h1
                // className="animateElement"
              >
                Company
                <span>.</span>
              </h1>

              <p
                // className="animateElement"
              >
                HM-PROFI GmbH & Co. KG, founded in
                <br /> 2009 in Düsseldorf, delivers premium
                <br /> precision components for automotive,
                <br /> aerospace, and medical industries.
                <br />
                Innovation, reliability, and customer
                <br /> success drive us.
              </p>
            </div>
            <div className={Style.rightSide}>
              <div className={Style.topPart}>
                <h1
                  // className="animateElement"
                >
                  Connect with Us
                </h1>

								<div className={`${Style.content}`}>
								  <a href="tel:+49 2297 81900-08">
									<img src="/images/icons/Phone.webp" alt="" />
									<span>+49 2297 81900-08</span>
								  </a>

								  {(() => {
									const encodedEmail = 'aW5mb0BobS1wcm9maS5jb20='; // Base64 für "info@hm-profi.com"
									const email = atob(encodedEmail);
									const mailtoLink = `mailto:${email}`;

									return (
									  <>
										<a href={mailtoLink}>
										  <img src="/images/icons/email-icon.webp" alt="" />
										  <span>{email}</span>
										</a>
										<noscript>
										  <a href="mailto:info@hm-profi.com">
											<img src="/images/icons/email-icon.webp" alt="" />
											<span>info@hm-profi.com</span>
										  </a>
										</noscript>
									  </>
									);
								  })()}
								</div>
              </div>
              <div className={Style.bottomPart}>
                <div className={Style.col01}>
                  <h2
                    // className="animateElement"
                  >
                    {" "}
                    QUICK LINKS
                  </h2>

                  <div className={Style.items}>
                    <div
                      // className="animateElement"
                    >
                      <Link href="/"> Home</Link>
                      <Link href="about-us/">About Us</Link>
                      <Link href="our-scope/consulting-services/">
                        Consulting Services
                      </Link>
                    </div>

                    <div
                      // className="animateElement"
                    >
                      <Link href="application/question-and-answer/">
                        FAQs
                      </Link>
                      <p
                        className={Style.additonalLink}
                        onClick={() => setIsDownloadModalOpen(true)}
                      >
                        Downloads
                      </p>
                      <p
                        className={Style.additonalLink}
                        onClick={() => setIsContactUsModalOpen(true)}
                      >
                        {" "}
                        Contact Us
                      </p>
                    </div>
                  </div>
                </div>

                <div className={Style.col01}>
                  <h2
                    // className="animateElement"
                  >
                    {" "}
                    IMPORTANT
                  </h2>

                  <div
                    // className="animateElement"
                  >
                    <Link
                      href={""}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPrivacyAndPolicyModalOpen(true);
                      }}
                    >
                      {" "}
                      Privacy Policy
                    </Link>
                    <Link
                      href={""}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsImprintModalOpen(true);
                      }}
                    >
                      Imprint
                    </Link>
                  </div>
                </div>

                <div className={Style.col01}>
                  <h2
                    // className="animateElement"
                  >
                    {" "}
                    OUR OFFICE
                  </h2>

                  <p
                    // className="animateElement"
                  >
                    HM-PROFI GmbH & Co.KG <br />
                    An der Burg 12 <br />
                    D-51580 Reichshof
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={Style.bottomPart}>
            <p
              // className="animateElement"
            >
              <img src="/images/icons/copyright.webp" alt="" />
              Copyright 2025 HM-PROFI GmbH & Co.KG | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
      <DownloadModal
        setIsDownloadModalOpen={setIsDownloadModalOpen}
        isDownloadModalOpen={isDownloadModalOpen}
      />

      <PrivacyAndPolicyModal
        setIsPrivacyAndPolicyModalOpen={setIsPrivacyAndPolicyModalOpen}
        isPrivacyAndPolicyModalOpen={isPrivacyAndPolicyModalOpen}
      />

      <ImprintModal
        setIsImprintModalOpen={setIsImprintModalOpen}
        isImprintModalOpen={isImprintModalOpen}
      />
    </>
  );
};

export default Footer;

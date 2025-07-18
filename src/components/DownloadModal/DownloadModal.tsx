import React from "react";
import Style from "./DownloadModal.module.scss";

interface DownloadModalProps {
  setIsDownloadModalOpen: (isOpen: boolean) => void;
  isDownloadModalOpen: boolean;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  setIsDownloadModalOpen,
  isDownloadModalOpen,
}) => {
  return (
    <div
      className={`${Style.contactUsModal} ${
        isDownloadModalOpen ? Style.active : ""
      }`}
      onClick={() => setIsDownloadModalOpen(false)}
    >
      <div
        className={Style.center_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={Style.crossIcon}
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70743 1.50906C9.79028 1.42911 9.85638 1.33347 9.90187 1.2277C9.94736 1.12194 9.97134 1.00817 9.97239 0.893043C9.97344 0.777915 9.95156 0.663729 9.90801 0.557149C9.86447 0.450569 9.80013 0.353729 9.71876 0.272279C9.63739 0.190829 9.54061 0.126401 9.43407 0.0827537C9.32753 0.0391063 9.21336 0.0171143 9.09823 0.01806C8.98311 0.0190058 8.86932 0.0428707 8.76351 0.0882625C8.6577 0.133654 8.56199 0.199664 8.48197 0.282439L5.00675 3.75651L1.53268 0.282439C1.4533 0.19725 1.35758 0.128923 1.25122 0.0815321C1.14486 0.0341415 1.03004 0.0086588 0.913618 0.00660467C0.797195 0.00455053 0.681553 0.0259671 0.573587 0.0695761C0.465621 0.113185 0.367545 0.178094 0.28521 0.260429C0.202874 0.342765 0.137966 0.44084 0.0943564 0.548806C0.0507473 0.656772 0.0293308 0.772416 0.0313849 0.888838C0.0334391 1.00526 0.0589217 1.12007 0.106312 1.22643C0.153703 1.3328 0.222031 1.42852 0.30722 1.5079L3.77897 4.98312L0.304908 8.45719C0.151748 8.62156 0.0683666 8.83896 0.0723299 9.06359C0.0762933 9.28822 0.167292 9.50254 0.326155 9.6614C0.485017 9.82027 0.69934 9.91126 0.92397 9.91523C1.1486 9.91919 1.366 9.83581 1.53037 9.68265L5.00675 6.20858L8.48081 9.68381C8.64518 9.83697 8.86258 9.92035 9.08721 9.91638C9.31184 9.91242 9.52617 9.82142 9.68503 9.66256C9.84389 9.5037 9.93489 9.28937 9.93885 9.06474C9.94281 8.84011 9.85944 8.62271 9.70628 8.45834L6.23452 4.98312L9.70743 1.50906Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>

        <span className={Style.modalTitle} role="heading" aria-level={2}>
          Downloads
        </span>

        <div className={Style.info}>
          <div className={Style.box}>
            <a
              href="/documents/document-en.pdf"
              download={true}
              className={Style.heading}
            >
              Company Brochure
            <img
						  src="/images/icons/Pdf-File.webp"
						  srcSet="/images/icons/Pdf-File.webp 1x, /images/icons/Pdf-File@2x.webp 2x"
						  width={38}
						  height={42}
						  alt="PDF Symbol"
						  decoding="async"
						/>
            </a>
            <p>Performance Profile</p>
          </div>

          <div className={Style.box}>
            <span className={Style.heading} role="heading" aria-level={3}>
              RoHS_REACH
            </span>
            <p>Compliance Declaration RoHS & REACH</p>
          </div>

          <div className={Style.box}>
            <span className={Style.heading} role="heading" aria-level={3}>
              Conflict Minerals
            </span>
            <p>
              Conflict Minerals Statement Dodd-Frank Act, Section 1502
            </p>
          </div>

					<div className={Style.box}>
					  <p>Declarations of conformity.</p>
					  <p style={{ display: "unset" }}>
						Reach out via{" "}
						{(() => {
						  const encodedEmail = 'aW5mb0BobS1wcm9maS5jb20='; // Base64 für "info@hm-profi.com"
						  const email = atob(encodedEmail);
						  const mailtoLink = `mailto:${email}`;

						  return (
							<>
							  <a href={mailtoLink} style={{ display: "unset" }}>E-Mail</a>
							  <noscript>
								<a href="mailto:info@hm-profi.com" style={{ display: "unset" }}>
								  E-Mail
								</a>
							  </noscript>
							</>
						  );
						})()}
						{" "} for requests.
					  </p>
					</div>
        </div>

        <div className={Style.shapes01}></div>
        <div className={Style.shapes02}></div>
      </div>
    </div>
  );
};

export default DownloadModal;

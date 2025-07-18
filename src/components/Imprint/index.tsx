import React from "react";
import Style from "./Imprint.module.scss";

interface ImprintProps {
  setIsImprintModalOpen: (isOpen: boolean) => void;
  isImprintModalOpen: boolean;
}

const ImprintModal: React.FC<ImprintProps> = ({
  setIsImprintModalOpen,
  isImprintModalOpen,
}) => {
  return (
    <div
      className={`${Style.contactUsModal} ${
        isImprintModalOpen ? Style.active : ""
      }`}
      onClick={() => setIsImprintModalOpen(false)}
    >
      <div
        className={Style.center_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={Style.crossIcon}
          onClick={() => setIsImprintModalOpen(false)}
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
          Imprint
        </span>

        <div className={Style.info}>
          <div className={Style.mainHeading}>
            <svg
              width="51"
              height="38"
              viewBox="0 0 51 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="32.385"
                y="-6.10352e-05"
                width="17.9003"
                height="36.0688"
                rx="2.64855"
                transform="rotate(4.57592 32.385 -6.10352e-05)"
                fill="#F95231"
              />
              <rect
                x="14.5555"
                y="0.903137"
                width="11.4628"
                height="35.6781"
                rx="2.64855"
                transform="rotate(4.57592 14.5555 0.903137)"
                fill="#FF8E77"
              />
              <rect
                x="3.82544"
                y="1.01956"
                width="4.98612"
                height="35.694"
                rx="2.49306"
                transform="rotate(4.57592 3.82544 1.01956)"
                fill="#FFBBAE"
              />
            </svg>
            <h2 className={Style.heading}>Impressum</h2>
            <svg
              width="52"
              height="38"
              viewBox="0 0 52 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.42749"
                y="-3.05176e-05"
                width="17.9003"
                height="36.0688"
                rx="2.64855"
                transform="rotate(4.57592 3.42749 -3.05176e-05)"
                fill="#F95231"
              />
              <rect
                x="27.7705"
                y="-6.10352e-05"
                width="11.4628"
                height="35.6781"
                rx="2.64855"
                transform="rotate(4.57592 27.7705 -6.10352e-05)"
                fill="#FF8E77"
              />
              <rect
                x="46.0522"
                y="-6.10352e-05"
                width="4.98612"
                height="35.694"
                rx="2.49306"
                transform="rotate(4.57592 46.0522 -6.10352e-05)"
                fill="#FFBBAE"
              />
            </svg>
          </div>

          <ul>
            <li>
              <p className={Style.highlight}>HM-PROFI GmbH & Co.KG</p>
              <p>
                An der Burg 12 <br />
                D-51580 Reichshof
              </p>
            </li>

						<li>
						  <a href="tel:+49 2297 81900-08" className="">Fon: +49 2297 81900-08</a>
						  {(() => {
							const encodedEmail = 'aW5mb0BobS1wcm9maS5jb20='; // Base64 für "info@hm-profi.com"
							const email = atob(encodedEmail);
							const mailtoLink = `mailto:${email}`;

							return (
							  <>
								<a href={mailtoLink}>{email}</a>
								<noscript>
								  <a href="mailto:info@hm-profi.com">info@hm-profi.com</a>
								</noscript>
							  </>
							);
						  })()}
						</li>

            <li>
              <p>HRA 7045, Amtsgericht Siegburg</p>
              <p>USt-ID: DE301557175</p>
            </li>

            <li>
              <p>Komplementärin:</p>
              <p>
                HM-PROFI Verwaltungs GmbH <br /> HRB 73826, Amtsgericht
                Düsseldorf <br />
                Geschäftsführer: Volker Nagel
              </p>
            </li>
          </ul>
        </div>

        <div className={Style.shapes01}></div>
        <div className={Style.shapes02}></div>
      </div>
    </div>
  );
};

export default ImprintModal;

import Style from "./heading.module.scss";

const Heading = ({
  text,
  orangeText,
  bpl,
  bpr,
}: {
  text: string;
  orangeText?: string;
  bpl: string;
  bpr?: string;
}) => {

  return (
    <div className={Style.heading}>
      <div
        className={`${Style.topPart}`}
      >
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

        <h1>
          {text} {orangeText && <span>{orangeText}</span>}
        </h1>

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
      <h3>
        {bpl} {bpr && <span>{bpr}</span>}
      </h3>
    </div>
  );
};

export default Heading;

import Link from "next/link";
import Style from "./MyNavLink.module.scss";

const NoJsDropdown = ({
  text,
  isActive,
  nestedItem,
}: {
  text: string;
  isActive?: boolean;
  nestedItem?: { text: string; link: string; isNotActive?: boolean }[];
}) => {
  const uniqueId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <input type="checkbox" id={uniqueId} className={Style.dropdownCheckbox} />
      <label htmlFor={uniqueId} className={`${Style.anchorLink} myActiveNavLink ${isActive ? Style.active : ""} ${Style.dropdownLabel}`}>
        <span>{text}</span>
        <svg
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={Style.navArrowIcon}
        >
        <line
          x1="6.13735"
          y1="6.78441"
          x2="0.656672"
          y2="1.2768"
          className={Style.navArrowLine}
        />
        <line
          y1="-0.39244"
          x2="7.76992"
          y2="-0.39244"
          transform="matrix(-0.708838 0.705372 0.705372 0.708838 11.9231 1.02692)"
          className={Style.navArrowLine}
        />
        </svg>
      </label>

      {nestedItem && (
        <ul className={`${Style.nestedItem} nestedItem`}>
          {nestedItem.map((e, i) => {
            const { text, link } = e || {};

            return (
              <li key={i}>
                <Link
                  href={link}
                  className={`${e.isNotActive ? "notActive" : ""}`}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NoJsDropdown; 
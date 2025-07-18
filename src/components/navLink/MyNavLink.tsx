import Style from "./MyNavLink.module.scss";
import Link from "next/link";

const MyNavLink = ({
  text,
  link,
  isIconShow,
  nestedItem,
  isActive,
  isDropdownOpen,
  onClick,
}: {
  text: string;
  link: string;
  isIconShow?: boolean;
  isActive?: boolean;
  isDropdownOpen?: boolean;
  onClick?: () => void;
  nestedItem?: { text: string; link: string; isNotActive?: boolean }[];
}) => {
  
  return (
    <>
      {isIconShow && onClick ? (
        <Link
          href={link}
          className={`${Style.anchorLink} myActiveNavLink ${isActive ? Style.active : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onClick(); // Notify parent component
          }}
        >
          <span>{text}</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // style={{
            //   transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
            // }}
            className={`${Style.navArrowIcon} ${isDropdownOpen ? Style.navArrowIconActive : ""}`}
          >
            <line
              x1="6.13735"
              y1="6.78441"
              x2="0.656672"
              y2="1.2768"
              stroke="black"
              strokeWidth="0.78488"
              className={Style.navArrowLine}
            />
            <line
              y1="-0.39244"
              x2="7.76992"
              y2="-0.39244"
              transform="matrix(-0.708838 0.705372 0.705372 0.708838 11.9231 1.02692)"
              stroke="black"
              strokeWidth="0.78488"
              className={Style.navArrowLine}
            />
          </svg>
        </Link>
      ) : (
        <Link href={link} className={`${Style.anchorLink} myActiveNavLink ${isActive ? Style.active : ""}`}>
          <span>{text}</span>
        </Link>
      )}

      {nestedItem && (
        <ul
          className={`${Style.nestedItem} ${
            isDropdownOpen && Style.active
          } nestedItem`}
        >
          {nestedItem.map((e, i) => {
            const { text, link } = e || {};

            return (
              <li key={i}>
                <Link
                  href={link}
                  onClick={onClick}
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

export default MyNavLink;

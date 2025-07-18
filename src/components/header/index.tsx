"use client";
import Style from "./header.module.scss";

// Extend the Window interface to include the 'webdriver' property
declare global {
  interface Window {
    webdriver?: boolean;
  }
}
import MyNavLink from "../navLink/MyNavLink";
import { useEffect, useRef, useState, useCallback } from "react";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import DownloadModal from "../DownloadModal/DownloadModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHydrated } from "@/hooks/useHydrated";
import NoJsDropdown from "../navLink/NoJsDropdown";

const Header = () => {
  const pathname = usePathname();
  const isWebdriver = typeof navigator !== "undefined" && navigator.webdriver;
  const isHydrated = useHydrated();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const [isNestedItemShow, setIsNestedItemShow] = useState(false);
  const [isApplicationNestedItemShow, setIsApplicationNestedItemShow] =
    useState(false);

  // mobile screen nav item display state
  const [isNavbarShow, setIsNavbarShow] = useState(false);

  // Use Ref
  const navRef01 = useRef<HTMLLIElement | null>(null);
  const navRef02 = useRef<HTMLLIElement | null>(null);
  const header = useRef<HTMLElement | null>(null);

  // Function to check if a nav item should be active
  const isNavItemActive = (link: string) => {
    if (!pathname) return false;
    if (link === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link);
  };

  // Function to check if Leistungsumfang should be active
  const isScopeActive = () => {
    if (!pathname) return false;
    return (
      pathname.startsWith("/our-scope/") ||
      pathname === "/#ourServices" ||
      pathname === "/#ourExpertise" ||
      pathname === "/#technology" ||
      pathname === "/#whyCarbide" ||
      pathname === "/about-us/#quality"
    );
  };

  // Function to check if Anwendungen should be active
  const isApplicationActive = () => {
    if (!pathname) return false;
    return pathname.startsWith("/application/");
  };

  // Function first – to avoid "used before declaration"
  const controlNavbar = useCallback(() => {
    if (isNavbarShow) {
      setShowNavbar(true);
      return;
    }

    if (!header.current) return;

    if (
      window.scrollY > lastScrollY &&
      window.scrollY > header.current.offsetHeight
    ) {
      // Scrolling down
      setShowNavbar(false);
      setActiveIndex(null);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  }, [isNavbarShow, lastScrollY]);

  // Use Effects
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  const handleNavLinkClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
    // Enable navigate another section flag
  };

  const handleClickOutside = (event: Event) => {
    if (
      navRef01.current &&
      !navRef01.current.contains(event.target as Node) &&
      navRef02.current &&
      !navRef02.current.contains(event.target as Node)
    ) {
      setActiveIndex(null); // Close all nested items
    }
  };

  return (
    <>
      <header
        className={`${Style.header} ${showNavbar || isWebdriver ? Style.show : Style.hide}`}
        ref={header}
      >
        <div className={Style.center_content}>
          <div className={Style.leftSide}>
            <Link href="/">
              <img src="/images/logo/logo.webp" alt="company logo" />
            </Link>
          </div>
          <ul className={Style.rightSide}>
            <li>
              <MyNavLink text="Home" link="/" isActive={isNavItemActive("/")}/>
            </li>
            <li>
              <MyNavLink text={"About Us"} link="/about-us" isActive={isNavItemActive("/about-us")}/>
            </li>
            <li ref={navRef01}>
              {isHydrated ? (
              <MyNavLink
                text={"Our Scope"}
                link="/our-scope/consulting-services"
                isIconShow={true}
                nestedItem={[
                  {
                    text: "Our Services",
                    link: "/#ourServices",
                    isNotActive: true,
                  },
                  {
                    text: "Our Expertise",
                    link: "/#ourExpertise",
                    isNotActive: true,
                  },
                  {
                    text: "Technology",
                    link: "/#technology",
                    isNotActive: true,
                  },
                  {
                    text: "Why Carbide",
                    link: "/#whyCarbide",
                    isNotActive: true,
                  },
                  {
                    text: "Quality",
                    link: "/about-us/#quality",
                    isNotActive: true,
                  },
                  {
                    text: "Consulting Services",
                    link: "/our-scope/consulting-services",
                  },
                ]}
                isActive={isScopeActive()}
                isDropdownOpen={activeIndex === 1}
                onClick={() => {
                  handleNavLinkClick(1);
                }}
              />
            ) : (
              <NoJsDropdown
                text={"Our Scope"}
                isActive={isScopeActive()}
                nestedItem={[
                  {
                    text: "Our Services",
                    link: "/#ourServices",
                    isNotActive: true,
                  },
                  {
                    text: "Our Expertise",
                    link: "/#ourExpertise",
                    isNotActive: true,
                  },
                  {
                    text: "Technology",
                    link: "/#technology",
                    isNotActive: true,
                  },
                  {
                    text: "Why Carbide",
                    link: "/#whyCarbide",
                    isNotActive: true,
                  },
                  {
                    text: "Quality",
                    link: "/about-us/#quality",
                    isNotActive: true,
                  },
                  {
                    text: "Consulting Services",
                    link: "/our-scope/consulting-services/",
                  },
                ]}
              />
            )}
            </li>
            <li ref={navRef02}>
              {isHydrated ? (
              <MyNavLink
                text={"Applications"}
                link="/application/characteristics-of-carbide"
                isIconShow={true}
                nestedItem={[
                  {
                    text: "Characteristics of Carbide",
                    link: "/application/characteristics-of-carbide",
                  },
                  {
                    text: "Material specs",
                    link: "/application/material-specs",
                  },
                  {
                    text: "Glossary",
                    link: "/application/glossary",
                  },
                  {
                    text: "FAQs",
                    link: "/application/question-and-answer",
                  },
                ]}
                isDropdownOpen={activeIndex === 2}
                isActive={isApplicationActive()}
                onClick={() => handleNavLinkClick(2)}
              />
              ) : (
                <NoJsDropdown
                  text={"Applications"}
                  isActive={isApplicationActive()}
                  nestedItem={[
                    {
                      text: "Characteristics of Carbide",
                      link: "/application/characteristics-of-carbide/",
                    },
                    {
                      text: "Material specs",
                      link: "/application/material-specs/",
                    },
                    {
                      text: "Glossary",
                      link: "/application/glossary/",
                    },
                    {
                      text: "FAQs",
                      link: "/application/question-and-answer/",
                    },
                  ]}
                />
              )}
            </li>
            <li
              onClick={() => {
                setIsDownloadModalOpen(true);
              }}
            >
              <p className={Style.contactUsLink}>
                <span>Downloads</span>
              </p>
            </li>
            <li
              onClick={() => {
                setIsContactUsModalOpen(true);
              }}
            >
              <p className={Style.contactUsLink}>
                <span>Contact Us</span>
              </p>
            </li>
            <li className={Style.languageConvert}>
              <p className={Style.active}>EN</p>

              <p className={Style.seprator}>/</p>
              <a href="https://hm-profi.de" className={Style.languageLink}>
                DE
              </a>
            </li>

            <li
              className={Style.hamburgerIcon}
              onClick={() => setIsNavbarShow(true)}
            >
              <div style={{ width: "18px", height: "20px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={`${Style.mobileNav} ${isNavbarShow ? Style.active : ""}`}
        >
          <div
            className={Style.closeIcon}
            onClick={() => {
              setIsNavbarShow(false);
              setIsNestedItemShow(false);
              setIsApplicationNestedItemShow(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>

          <div className={Style.logo}>
            <Link
              href="/"
              onClick={() => {
                setIsNavbarShow(false);
                setIsNestedItemShow(false);
                setIsApplicationNestedItemShow(false);
              }}
            >
              <img src="/images/logo/logo.webp" alt="company logo" />
            </Link>
          </div>

          <ul>
            <li>
              <Link
                href="/"
                onClick={() => {
                  setIsNavbarShow(false);
                  setIsNestedItemShow(false);
                  setIsApplicationNestedItemShow(false);
                }}
              >
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us/"
                onClick={() => {
                  setIsNavbarShow(false);

                  setIsNestedItemShow(false);
                  setIsApplicationNestedItemShow(false);
                }}
              >
                <div>About Us</div>
              </Link>
            </li>
            <li>
              <div className={Style.nestedLink}>
                <div
                  onClick={() => {
                    setIsApplicationNestedItemShow(false);
                    setIsNestedItemShow(!isNestedItemShow);
                  }}
                >
                  Our Scope
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="6.13735"
                      y1="6.78441"
                      x2="0.656672"
                      y2="1.2768"
                      stroke="black"
                      strokeWidth="0.78488"
                    />
                    <line
                      y1="-0.39244"
                      x2="7.76992"
                      y2="-0.39244"
                      transform="matrix(-0.708838 0.705372 0.705372 0.708838 11.9231 1.02692)"
                      stroke="black"
                      strokeWidth="0.78488"
                    />
                  </svg>
                </div>
                <ul
                  className={`${Style.nestedItem} ${
                    isNestedItemShow ? Style.active : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/#ourServices"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#ourExpertise"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Our Expertise
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/#technology"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#whyCarbide"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Why Carbide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/#quality"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Quality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-scope/consulting-services/"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Consulting Services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={Style.nestedLink}>
                <div
                  onClick={() => {
                    setIsNestedItemShow(false);
                    setIsApplicationNestedItemShow(
                      !isApplicationNestedItemShow
                    );
                  }}
                >
                  Applications
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="6.13735"
                      y1="6.78441"
                      x2="0.656672"
                      y2="1.2768"
                      stroke="black"
                      strokeWidth="0.78488"
                    />
                    <line
                      y1="-0.39244"
                      x2="7.76992"
                      y2="-0.39244"
                      transform="matrix(-0.708838 0.705372 0.705372 0.708838 11.9231 1.02692)"
                      stroke="black"
                      strokeWidth="0.78488"
                    />
                  </svg>
                </div>
                <ul
                  className={`${Style.nestedItem} ${
                    isApplicationNestedItemShow ? Style.active : ""
                  }`}
                >
                  <li>
                    <Link
                      href="/application/characteristics-of-carbide/"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Characteristics of carbide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/application/material-specs/"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Material specs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/application/glossary/"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/application/question-and-answer/"
                      onClick={() => {
                        setIsNavbarShow(false);
                        setIsNestedItemShow(false);
                        setIsApplicationNestedItemShow(false);
                      }}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() => {
                setIsNavbarShow(false);
                setIsNestedItemShow(false);
                setIsApplicationNestedItemShow(false);
                setIsDownloadModalOpen(true);
              }}
            >
              <p className={Style.contactUsLink}>
                <span>Downloads</span>
              </p>
            </li>
            <li
              onClick={() => {
                setIsNavbarShow(false);
                setIsNestedItemShow(false);
                setIsApplicationNestedItemShow(false);
                setIsContactUsModalOpen(true);
              }}
            >
              <p className={Style.contactUsLink}>
                <span>Contact Us</span>
              </p>
            </li>
          </ul>
        </div>
      </header>

      <ContactUsModal
        setIsContactUsModalOpen={setIsContactUsModalOpen}
        isContactUsModalOpen={isContactUsModalOpen}
      />
      <DownloadModal
        setIsDownloadModalOpen={setIsDownloadModalOpen}
        isDownloadModalOpen={isDownloadModalOpen}
      />
    </>
  );
};

export default Header;

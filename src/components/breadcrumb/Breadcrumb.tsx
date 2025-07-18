import React from "react"; // <-- wichtig, damit React.Fragment erkannt wird
import Style from "./breadcrumb.module.scss";
import Link from "next/link";

const Breadcrumb = ({
  image,
  heading,
  currentPageName,
  linkPages,
}: {
  image: string;
  heading: {
    normalWord: string;
    highlightedWord?: string;
  };
  currentPageName: string;
  linkPages: { name: string; link?: string }[];
}) => {
  
  return (
    <section className={Style.breadcrumb}>
      <img src={image} alt="" />
      <div className={`${Style.center_content} `}>
        <h1
          // className="animateElement"
        >
          <span className={Style.shadowWord}>
            {heading.normalWord.slice(0, 1)}
          </span>

          {heading.normalWord.slice(1)}

          {heading.highlightedWord && (
            <span className={Style.highlightedColor}>
              {heading.highlightedWord}
            </span>
          )}
        </h1>

        <div
          className={`${Style.content} animateElement`}
          // ref={(el) => elementsRef.current.push(el)}
        >
          {linkPages.map((e, i) => ( 
            <React.Fragment key={i}>
              {e.link ? (
                <Link href={e.link}>{e.name}</Link>
              ) : (
                <p>{e.name}</p>
              )}
              <div className={Style.circle}></div>
            </React.Fragment>
          ))}

          <p>{currentPageName}</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;

import Style from "./Label.module.scss";

const Label = ({
  heading,
  paragraph,
  btnText,
  btnLink,
  OnClick,
}: {
  heading: {
    normalWord: string;
    highlightedWord: string;
  };
  paragraph: string;
  btnText: string;
  btnLink: string;
  OnClick: () => void;
}) => {
  
  return (
    <section className={Style.label}>
      <div className={Style.center_content}>
        <div
          className={`${Style.leftSide}`}
        >
          <h1>
            {heading.normalWord}{" "}
            {heading.highlightedWord && <span>{heading.highlightedWord}</span>}
          </h1>
          <p>{paragraph}</p>
        </div>

        <a
          href={btnLink}
          // className="animateElement"
          onClick={(e) => {
            e.preventDefault();
            OnClick();
          }}
        >
          {btnText}
        </a>
      </div>
    </section>
  );
};

export default Label;

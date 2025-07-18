import Style from "./Card.module.scss";

const Card = ({ image, text }: { image: string; text: string }) => {
  
  return (
    <div
      className={`${Style.card}`}
    >
      <img src={image} alt="" />
      <div className={Style.tag}>
        <div className={Style.brLeftTop}>
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <h1>{text}</h1>
        <div className={Style.brRightBottom}>
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;

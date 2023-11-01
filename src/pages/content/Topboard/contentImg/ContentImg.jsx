import style from "./ContentImg.module.scss";
import disc from "../../../../assets/Group 1032.png";
import chicken from "../../../../assets/chicken.svg";

const ContentImg = () => {
  return (
    <div className={`col-xl-4 ${style.wrapperDiv}`}>
      <span className={`${style.wrapperSapn}`}>
        <img
          className={`d-xl-inline d-none ${style.span}`}
          src={disc}
          alt="disc"
        />
      </span>
      <div className={`d-flex align-items-center justify-content-evenly d-xl-none ${style.responDiv}`}>
        <span>< img className="rounded-circle" src={chicken} alt="chicken" /></span>
      </div>
    </div>
  );
};

export default ContentImg;

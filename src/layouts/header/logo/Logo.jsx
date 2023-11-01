import style from "./Logo.module.scss";
import heart from "../../../assets/heart.png";

const Logo = () => {
  return (
    <span className={`col-lg-1 m-lg-2`}>
      <img className={`d-none d-lg-inline-block ${style.heart}`} src={heart} alt="heart" />
      <div className="d-block d-lg-none">
      <img className={`${style.heart}`} src={heart} alt="heart" />
      <h3 className="d-inline">سلامتی من</h3>
      </div>
    </span>
  );
};

export default Logo;

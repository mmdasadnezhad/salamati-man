import style from "./TopBoard.module.scss";
import ContentImg from "./contentImg/ContentImg";
import Salad from "./salad/Salad";
import Scores from "./scores/Scores";

const TopBoard = () => {
  return (
    <div className={`mb-5 row ${style.topstyle}`}>
      <ContentImg />
      <h3 className="d-block d-xl-none text-center mt-5 pt-5 mb-5">
        کالری و ارزش غذایی سالاد سزار
      </h3>
      <div className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center col-xl-8">
        <Salad />
        <Scores />
      </div>
    </div>
  );
};

export default TopBoard;
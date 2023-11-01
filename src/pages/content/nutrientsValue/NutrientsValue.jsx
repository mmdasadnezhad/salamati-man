import style from "./NutrientsValue.module.scss";
import Template from "./Template";

const NutrientsValue = () => {
  return (
    <div className={`p-3 d-xl-block d-flex flex-column align-items-center ${style.wrapper}`}>
      <h5 className="text-secondary">جدول ارزش غذایی سالاد سزار در 100 گرم</h5>
      <div className={`d-xl-flex flex-row justify-content-around ${style.parent}`}>
        <div className={`row col-12 ${style.child}`}>
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
        </div>
        <div className={`row col-12 ${style.child}`}>
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
          <Template />
        </div>
      </div>
    </div>
  );
};

export default NutrientsValue;

import style from "./Template.module.scss";

const Template = () => {
  return (
    <div className={`${style.parent}`}>
        <div className={`${style.above}`}>
            <p className={`${style.childs} ${style.ch1}`}><b>کلسترول</b></p>
            <p className={`text-black-50 ${style.childs} ${style.ch2}`}>10 گرم</p>
            <p className={`text-black-50 ${style.childs} ${style.ch3}`}>10%</p>
        </div>
      <div className={`${style.outer}`}>
        <span className={`${style.inner}`}></span>
      </div>
    </div>
  );
};

export default Template;

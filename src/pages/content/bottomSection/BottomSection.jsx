import Slider from "./Slider";
import style from "./BottomSection.module.scss";
import kahoo from "../../../assets/kahoo.svg";
import kalam from "../../../assets/kalam.svg";
import olvye from "../../../assets/olvye.svg";
import veget from "../../../assets/veget.svg";

const BottomSection = () => {
  return (
    <div className="pb-5 mb-5">
      <div className="d-none d-xl-flex justify-content-around">
        <div className={`${style.parent}`}>
          <div className={`p-3 ${style.lvl1}`}>
            <img src={kahoo} alt="kahoo" />
            <h5 className="text-center mt-3 text-secondary">سالاد کاهو</h5>
          </div>
        </div>

        <div className={`${style.parent}`}>
          <div className={`p-3 ${style.lvl1}`}>
            <img src={kalam} alt="kalam" />
            <h5 className="text-center mt-3 text-secondary">سالاد کلم</h5>
          </div>
        </div>

        <div className={`${style.parent}`}>
          <div className={`p-3 ${style.lvl1}`}>
            <img src={olvye} alt="olvye" />
            <h5 className="text-center mt-3 text-secondary">سالاد الویه</h5>
          </div>
        </div>

        <div className={`${style.parent}`}>
          <div className={`p-3 ${style.lvl1}`}>
            <img src={veget} alt="veget" />
            <h5 className="text-center mt-3 text-secondary">سالاد سبزیجات</h5>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default BottomSection;

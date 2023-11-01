import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import kahoo from "../../../assets/kahoo.svg";
import kalam from "../../../assets/kalam.svg";
import olvye from "../../../assets/olvye.svg";
import veget from "../../../assets/veget.svg";

const Slider = () => {
  const images = [
    <img src={kahoo} alt="kahoo" />,
    <img src={kalam} alt="kalam" />,
    <img src={olvye} alt="olvye" />,
    <img src={veget} alt="veget" />,
  ];

  return (
    <div className="d-block d-xl-none">
      <Slide>
        <div className="each-slide-effect">
          <img className="w-100" src={kahoo} alt="kahoo" />
          <h3 className="text-center mt-3">سالاد کاهو</h3>
        </div>
        <div className="each-slide-effect">
          <img className="w-100" src={kalam} alt="ka;am" />
          <h3 className="text-center mt-3">سالاد کلم</h3>
        </div>
        <div className="each-slide-effect">
          <img className="w-100" src={olvye} alt="olvye" />
          <h3 className="text-center mt-3">سالاد الویه</h3>
        </div>
        <div className="each-slide-effect">
          <img className="w-100" src={veget} alt="veget" />
          <h3 className="text-center mt-3">سالاد سبزیجات</h3>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;

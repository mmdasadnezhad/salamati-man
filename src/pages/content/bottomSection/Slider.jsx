import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper , SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
      <Swiper
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={0}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-100" src={kahoo} alt="kahoo" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src={kalam} alt="kalam" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src={olvye} alt="olvye" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src={veget} alt="veget" /></SwiperSlide>
      <span className="d-block p-4"></span>
    </Swiper>
    </div>
  );
};

export default Slider;

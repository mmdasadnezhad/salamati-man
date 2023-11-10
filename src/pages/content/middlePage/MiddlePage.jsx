import style from "./MiddlePage.module.scss";
import Cards from "./cards/Cards";
import Bike from "../../../assets/biking-mountain.png"
import Runer from "../../../assets/runer-silhouette-running-fast.png"
import walk from "../../../assets/walk.png"
import swim from "../../../assets/swimming.png"
const MiddlePage = () => {
  return (
    <div className="mb-4">
      <p className="fs-4 mt-3 text-center text-secondary">
        با چند دقیقه ورزش می توانم کالری موجود در ۱۰۰ گرم سالاد سزار را بسوزانم؟
      </p>
      <div className="d-flex align-items-center">
        <p className="m-5 m-xl-none d-xl-inline-block d-none w-25 text-secondary fs-6">
          ** محاسبه شده برای یک خانم ۲۵ ساله <br />بـا قد ۱۷۰ سانتی متر و وزن ۶۵
          کیلوگرم
        </p>
        <div className="d-inline-flex flex-row flex-xl-nowrap flex-wrap justify-content-around">
        <Cards type = {'دوچرخه سواری'} time = {75} icon = {Bike}/>
        <Cards type = {'دویدن'} time = {33} icon = {Runer}/>
        <Cards type = {'دوچرخه سواری'} time = {129} icon = {walk}/>
        <Cards type = {'دوچرخه سواری'} time = {37} icon = {swim}/>
        </div>
      </div>
      <p className="d-xl-none d-block text-secondary text-center fs-5">
          ** محاسبه شده برای یک خانم ۲۵ ساله بـا قد ۱۷۰ سانتی متر و وزن ۶۵
          کیلوگرم
        </p>
    </div>
  );
};

export default MiddlePage;

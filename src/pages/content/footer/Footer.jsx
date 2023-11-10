import style from "./Footer.module.scss";
import logo from "../../../assets/heart.png";
import enamad from "../../../assets/enamad.png";
import sabt from "../../../assets/samandehi.png";
import arm from "../../../assets/Arm.png";
import telegram from "../../../assets/telegram.svg";
import insta from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
import aparat from "../../../assets/aparat.svg";
import Transition, { transitionPropTypes } from "rsuite/esm/Animation/Transition";

const Footer = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`row align-items-center ${style.logoDiv}`}>
        <span className={`col-6 text-start ${style.logoSpan}`}>
          <img className={`${style.logo}`} src={logo} alt="logo" />
        </span>
        <h2 className="col-6">سلامتی من</h2>
      </div>
      <p className={`lh-lg fs-5 ${style.paragraph}`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <div>
        <div>
          <h3 className="text-success text-xl-center m-3 m-xl-5">دسترسی سریع</h3>
          <ul className="d-xl-flex justify-content-evenly fs-5 text-warning">
            <li><span className={`text-black ${style.transform}`}>صفحه اصلی</span></li>
            <li><span className={`text-black ${style.transform}`}>مجله سلامتی من</span></li>
            <li><span className={`text-black ${style.transform}`}>مجله آشپزی من</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-success text-xl-center m-3 m-xl-5">پیوندها</h3>
          <ul className="d-xl-flex justify-content-evenly fs-5 text-warning">
            <li><span className={`text-black ${style.transform}`}>رژیم لاغری سلامتی من</span></li>
            <li><span className={`text-black ${style.transform}`}>اپلیکیشن سلامتی من</span></li>
            <li><span className={`text-black ${style.transform}`}>خرید رژیم</span></li>
          </ul>
        </div>
      </div>
      <div className={`m-5 text-center d-flex flex-row flex-wrap justify-content-evenly ${style.trust}`}>
        <span className={`text-center m-2 ${style.spans}`}>
          <img className={`${style.trustImg}`} src={enamad} alt="enamad" />
        </span>
        <span className={`text-center m-2 ${style.spans}`}>
          <img className={`${style.trustImg}`} src={sabt} alt="sabt" />
        </span>
        <span className={`text-center m-2 ${style.spans}`}>
          <img className={`${style.trustImg}`} src={arm} alt="arm" />
        </span>
      </div>
      <div className={`d-flex justify-content-evenly p-3 ${style.social}`}>
        <span title="کانال تلگرام" className={`${style.svgspan}`}><img className={`${style.svgs}`} src={telegram} alt="telegram" /></span>
        <span title="صفحه اینستاگرام" className={`${style.svgspan}`}><img className={`${style.svgs}`} src={insta} alt="insta" /></span>
        <span title="کانال یوتیوب" className={`${style.svgspan}`}><img className={`${style.svgs}`} src={youtube} alt="youtube" /></span>
        <span title="صفحه ما در آپارات" className={`${style.svgspan}`}><img className={`${style.svgs}`} src={aparat} alt="aparat" /></span>
      </div>
    </div>
  );
};

export default Footer;

import style from "./Footer.module.scss";
import logo from "../../../assets/heart.png";
import enamad from "../../../assets/enamad.png";
import sabt from "../../../assets/samandehi.png";
import arm from "../../../assets/Arm.png";
import telegram from "../../../assets/telegram.svg";
import insta from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
import aparat from "../../../assets/aparat.svg";

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
          <ul className="d-xl-flex justify-content-evenly fs-5">
            <li>صفحه اصلی</li>
            <li>مجله سلامتی من</li>
            <li>مجله آشپزی من</li>
          </ul>
        </div>
        <div>
          <h3 className="text-success text-xl-center m-3 m-xl-5">پیوندها</h3>
          <ul className="d-xl-flex justify-content-evenly fs-5">
            <li>رژیم لاغری سلامتی من</li>
            <li>اپلیکیشن سلامتی من</li>
            <li>خرید رژیم</li>
          </ul>
        </div>
      </div>
      <div className={`row m-5 ${style.trust}`}>
        <span className={`col-4 text-center ${style.spans}`}>
          <img className={`${style.trustImg}`} src={enamad} alt="enamad" />
        </span>
        <span className={`col-4 text-center ${style.spans}`}>
          <img className={`${style.trustImg}`} src={sabt} alt="sabt" />
        </span>
        <span className={`col-4 text-center ${style.spans}`}>
          <img className={`${style.trustImg}`} src={arm} alt="arm" />
        </span>
      </div>
      <div className={`d-flex justify-content-evenly m-4 ${style.social}`}>
        <span className={`${style.svgspan}`}><img className={`${style.svgs}`} src={telegram} alt="telegram" /></span>
        <span className={`${style.svgspan}`}><img className={`${style.svgs}`} src={insta} alt="insta" /></span>
        <span className={`${style.svgspan}`}><img className={`${style.svgs}`} src={youtube} alt="youtube" /></span>
        <span className={`${style.svgspan}`}><img className={`${style.svgs}`} src={aparat} alt="aparat" /></span>
      </div>
    </div>
  );
};

export default Footer;

import style from "./FourCel.module.scss"
import chart from "../../../../assets/chart.svg"

const FourCel = (props)=>{
    return(
        <div className={`d-inline-flex flex-row flex-wrap flex-xl-nowrap w-xl-100 justify-content-evenly ${style.parent4}`}>
            <div className={`d-flex flex-column align-items-center justify-content-evenly text-white m-1 m-xl-2 ${style.child4} ${style.cel1}`}>
                <h4>امتیاز</h4>
                <h1>A</h1>
            </div>
            <div className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}>
                <h6>چربی</h6>
                <span><img className={`${style.chart}`} src={chart} alt="chart" /></span>
            </div>
            <div className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}>
            <h6>کربوهیدرات</h6>
                <span><img className={`${style.chart}`} src={chart} alt="chart" /></span>
            </div>
            <div className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}>
            <h6>پروتئین</h6>
                <span><img className={`${style.chart}`} src={chart} alt="chart" /></span>
            </div>
        </div>
    )
}

export default FourCel
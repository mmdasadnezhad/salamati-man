import style from "./Coleries.module.scss"
import chart from "../../../../assets/chart.svg"

const Coleries = () =>{
    return(
        <div className={`d-inline-flex flex-column align-items-center ${style.colBox}`}>
            <h2 className="mb-3">کالری</h2>
            <sapn className="p-0 p-sm-2 p-xl-0"><img src={chart} alt="chart" /></sapn>
        </div>
    )
}

export default Coleries
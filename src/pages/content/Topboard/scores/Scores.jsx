import style from "./Scores.module.scss";
import FourCel from "../fourCel/FourCel";
import Fild from "../fild/Fild";

const Scores = ()=>{
    return(
        <div className={`mt-xl-5 pt-xl-5`}>
            <FourCel />
            <Fild />
        </div>
    )
}

export default Scores
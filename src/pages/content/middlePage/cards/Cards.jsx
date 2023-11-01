import style from "./Cards.module.scss"


const Cards = ({type, time, icon}) => {
    return(
        <div className={`p-3 ${style.wrapper}`}>
            <div className={`text-center p-3 ${style.parent}`}>
                <img className={`${style.img}`} src={icon} />
                <hr className="hr" />
                <p className="text-black-50 lh-lg">معادل {time} دقیقه <br />
                <b className="text-secondary">{type}</b>
                </p>
            </div>
        </div>
    )
}

export default Cards;
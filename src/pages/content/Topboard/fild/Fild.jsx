import style from "./Fild.module.scss"

const Fild = ()=>{
    return(
        <div className={`p-2 d-none d-xl-block ${style.parentdiv}`}>
            <div className={`p-3 clearfix ${style.includediv}`}>
                <input className={`border-0 float-end fs-5 ${style.inputes} ${style.in1}`} placeholder="مقدار" />
                <input className={`border-0 float-start fs-5 ${style.inputes} ${style.in2}`} placeholder="|      واحد"  />
            </div>
        </div>
    )
}

export default Fild
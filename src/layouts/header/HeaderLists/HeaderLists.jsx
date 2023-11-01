import style from './HeaderLists.module.scss'

const HeaderLists = () =>{
    return (
        <ul className={`d-lg-inline-flex justify-content-lg-evenly d-none col-8 col-lg-6 ${style.ul}`}>
            <li className={`${style.li}`}>صفحه اصلی</li>
            <li className={`${style.li}`}>غذاها</li>
            <li className={`${style.li}`}>مجله<sapn>
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
<path id="Rectangle 301" d="M1.84937 1.84912L7.77392 7.77368L13.6985 1.84912" stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </sapn></li>
            <li className={`${style.li}`}>تالار گفت و گو</li>
            <li className={`${style.li}`}>درباره ما</li>
        </ul>
    )
}

export default HeaderLists
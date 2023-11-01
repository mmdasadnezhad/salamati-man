import style from './SearchBox.module.scss'

const SearchBox = () =>{
    return(
        <form className={`row me-1 me-m-0 p-1 ${style.box}`}>
            <input className='col-lg-11 col-10 border-0 bg-transparent'></input>
            <button className={`col-lg-1 col-2 border-0 ${style.search}`} type='submit'>جستجو...</button>
        </form>
    )
}

export default SearchBox
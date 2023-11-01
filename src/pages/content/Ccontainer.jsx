import MiddlePage from './middlePage/MiddlePage';
import SearchBox from "./search/SearchBox";
import TopBoard from "./Topboard/TopBoard";
import NutrientsValue from './nutrientsValue/NutrientsValue';
import BottomSection from './bottomSection/BottomSection';
import MiddleMenu from './middleMenu/MiddleMenu';
import Footer from './footer/Footer';

const Ccontainer = () =>{
    return <div className="container">
        <SearchBox />
        <TopBoard />
        <MiddleMenu />
        <MiddlePage />
        <NutrientsValue />
        <h3 className='xl-text-center text-end p-5 text-secondary'>غذاهای مشابه</h3>
        <BottomSection />
        <Footer />
    </div>
}

export default Ccontainer
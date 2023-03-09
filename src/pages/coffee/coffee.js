import SearchPanel from "../../components/search-panel/search-panel";
import FilterPanel from "../../components/filter-panel/filter-panel";
import CardList from "../../components/card-list/card-list";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import About from "../../components/about/about";

import '../../components/title/_title.scss';
import './coffee.scss';

function Coffee({data, onUpdateSearch, filter, onFilterSelect, imgData, contentData}) {
    const {backgroundImgs} = imgData[0];
    console.log(contentData)
    return (
        <>
            <Main currentBackgroundImg={backgroundImgs[0].src}/>
            <About contentData={contentData[0]}/>
            <section className="coffee__card-workaround">
                <div className="container">
                    <div className="coffee__card-workaround__functionality">
                        <SearchPanel onUpdateSearch={onUpdateSearch}/>
                        <FilterPanel filter={filter} onFilterSelect={onFilterSelect}/>
                    </div>
                    <CardList data={data}/>
            </div>
            </section>

            <Footer/>
        </>
    );
}

export default Coffee;
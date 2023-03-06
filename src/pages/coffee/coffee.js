import Nav from "../../components/nav/nav";
import CoffeeBeans from "../../components/coffe-beans/coffee-beans";
import SearchPanel from "../../components/search-panel/search-panel";

import '../../components/title/_title.scss';
import './coffee.scss';
import Girl from '../../resources/img/coffee-page/girl.svg';
import FilterPanel from "../../components/filter-panel/filter-panel";
import CardList from "../../components/card-list/card-list";

function Coffee({data, onUpdateSearch}) {
    return (
        <>
            <section className="coffee__main">
                <div className="container">
                    <header className="coffee__main-header">
                        <Nav color="white"></Nav>
                    </header>
                    <h1 className="title main-title">Our Coffee</h1>
                </div>
            </section>

            <section className="coffee__about">
                <div className="container">
                    <div className="coffee__about-wrapper">
                        <div className="coffee__about-photo">
                            <img src={Girl} alt="girl"/>
                        </div>
                        <div className="coffee__about-descr">
                            <h2 className="about-title">About our beans</h2>
                            <CoffeeBeans color="black"/>
                            <div className="coffee__about-text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/> <br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                <br/> so questions. <br/>
                                As greatly removed calling pleased improve an. <br/>Last ask him cold feel <br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            </section>

            <section className="coffee__card--workaround">
                <div className="container">
                    <div className="coffee__card--workaround__functionality">
                        <SearchPanel onUpdateSearch={onUpdateSearch}/>
                        <FilterPanel/>
                    </div>
                    <CardList data={data}/>
            </div>
            </section>
        </>
    );
}

export default Coffee;
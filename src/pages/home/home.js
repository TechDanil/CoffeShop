import Nav from '../../components/nav/nav';
import CoffeeBeans from "../../components/coffe-beans/coffee-beans";
import CardList from "../../components/card-list/card-list";
import Footer from '../../components/footer/footer';

import '../../components/title/_title.scss';
import './home.scss';

function Home({data}) {
    return (
        <>
            <section className="home__main">
                <div className="container">
                    <header className="home__main-header">
                        <Nav color='white'/>
                    </header>

                    <h1 className="title home__main-title">Everything You Love About Coffee</h1>
                    <CoffeeBeans color="white"/>
                    <h2 className="home__main-subtitle__fist__part">We makes every day full of energy and taste </h2>
                    <h2 className="home__main-subtitle__second__part">Want to try our beans?</h2>
                    <button className="home__main-btn">More</button>
                </div>
            </section>

            <section className="home__about">
                <div className="container">
                    <h3 className="home__about-title">About Us</h3>
                    <CoffeeBeans color="black"/>

                    <div className="home__about-descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br/> <br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </div>
                </div>
            </section>


            <section className="home__recommend">
                <div className="container">
                    <h3 className="home__recommend-title">Our best</h3>
                    <CardList data={data}/>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Home;
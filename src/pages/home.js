import Nav from '../components/nav/nav';
import CoffeeBeans from "../components/coffe-beans/coffee-beans";
import CardList from "../components/card-list/card-list";
import Footer from  '../components/footer/footer';
import './home.scss';

function Home({data}) {
    return (
        <>
            <section className="main">
                <div className="container">
                    <header className="main__header">
                        <Nav color='white'/>
                    </header>

                    <h1 className="title main__title">Everything You Love About Coffee</h1>
                    <CoffeeBeans color="white"/>
                    <h2 className="main__subtitle__fist__part">We makes every day full of energy and taste </h2>
                    <h2 className="main__subtitle__second__part">Want to try our beans?</h2>
                    <button className="main__btn">More</button>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <h3 className="about__title">About Us</h3>
                    <CoffeeBeans color="black"/>

                    <div className="about__descr">
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


            <section className="recommend">
                <div className="container">
                    <h3 className="recommend__title">Our best</h3>
                    <CardList data={data}/>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Home;
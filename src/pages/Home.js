import './home.scss'
import Nav from '../components/Nav/Nav';
import CoffeeBeans from "../components/CoffeBeans/CoffeeBeans";

function Home() {
    return (
        <>
            <section className="main">
                <div className="container">
                    <header className="main__header">
                        <Nav color='white'/>
                    </header>

                    <h1 className="title main__title">Everything You Love About Coffee</h1>
                    <CoffeeBeans color="white"/>
                    <h2 className="main__subtitle">We makes every day full of energy and taste</h2>
                    <h2 className="main__subtitle">Want to try our beans?</h2>
                    <button className="main__btn">More</button>
                </div>
            </section>
        </>
    );
}

export default Home;
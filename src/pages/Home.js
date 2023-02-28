import './home.scss'
import Nav from '../components/Nav/Nav';
import CoffeeBeans from "../components/CoffeBeans/CoffeeBeans";

function Home() {
    return (
        <>
            <section className="main">
                <div className="container">
                    <header className="main-header">
                        <Nav color='white' alt='white logo'/>
                    </header>

                    <h1 className="title main__title">Everything You Love About Coffee</h1>
                    <CoffeeBeans color="white"/>
                </div>
            </section>
        </>
    );
}

export default Home;
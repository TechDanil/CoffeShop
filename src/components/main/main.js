import Nav from "../nav/nav";

import '../../components/title/_title.scss';

import './main.scss';

function Main({currentBackgroundImg}) {
    return (
        <section className="main" style={{backgroundImage: `url(${currentBackgroundImg})`}}>
            <div className="container">
                <header className="main-header">
                    <Nav color="white"></Nav>
                </header>
                <h1 className="title main-title">Our Coffee</h1>
            </div>
        </section>
    );
}
export default Main;
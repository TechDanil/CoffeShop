import Nav from '../nav/nav';
import CoffeeBeans from "../coffe-beans/coffee-beans";

import './footer.scss';

function Footer() {
    return (
        <footer className="coffee__footer">
            <div className="container">
                <Nav color="black"/>
                <CoffeeBeans color="black"/>
            </div>
        </footer>
    );
}

export default Footer;
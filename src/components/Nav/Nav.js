import './nav.scss';
import CoffeeBeansHeaderLogo from "../../resources/img/logo/coffee-beans-header-logo.svg";
import CoffeeBeansFooterLogo from "../../resources/img/logo/coffee-beans-footer-logo.svg";

function Nav({color, alt}) {
    const currentLogo = color === 'white' ? CoffeeBeansHeaderLogo : CoffeeBeansFooterLogo;

    return (
        <nav className="nav">
            <a href="#" className="nav__logo">
                <img src={currentLogo} alt={alt}/>
            </a>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <a href="#" className="nav-list__item-link">Coffee house</a>
                </li>

                <li className="nav-list__item">
                    <a href="#" className="nav-list__item-link">Our coffee</a>
                </li>

                <li className="nav-list__item">
                    <a href="#" className="nav-list__item-link">For your pleasure</a>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;
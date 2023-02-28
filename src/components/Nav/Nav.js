import './nav.scss';

function Nav() {
    return (
        <nav className="nav">
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
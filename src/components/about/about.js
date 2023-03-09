import CoffeeBeans from "../coffee-beans/coffee-beans";

import './about.scss';

function About({contentData}) {
    const {src, alt, title, description} = contentData;
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-photo">
                        <img src={src} alt={alt}/>
                    </div>
                    <div className="about-descr">
                        <h2 className="about-title">{title}</h2>
                        <CoffeeBeans color="black"/>
                        <div className="about-text">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </section>
    );
}

export default About;
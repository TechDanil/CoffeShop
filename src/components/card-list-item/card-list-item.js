import './card-list-item.scss';

function CardLisItem(data) {
    const {src, alt, name, country ,price} = data;
    return (
        <li className="home-card__item">
            <div className="home-card">
                <div className="home-card__img">
                    <img src={src} alt={alt}/>
                </div>

                <div className="home-card__body">
                    <h5 className="home-card__title">{name}</h5>
                    <span className="home-card__country">{country}</span>
                    <span className="home-card__price">{`${price}$`}</span>
                </div>
            </div>
        </li>

    );
}

export default CardLisItem;


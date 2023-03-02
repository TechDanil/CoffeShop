import './card-list-item.scss';

function CardLisItem(data) {
    const {src, alt, name, price} = data;
    return (
        <li className="coffee-card__item">
            <div className="coffee-card">
                <div className="coffee-card__img">
                    <img src={src} alt={alt}/>
                </div>

                <div className="coffee-card__body">
                    <h5 className="coffee-card__title">{name}</h5>
                    <span className="coffee-card__price">{`${price}$`}</span>
                </div>
            </div>
        </li>

    );
}

export default CardLisItem;


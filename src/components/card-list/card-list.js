import CardLisItem from "../card-list-item/card-list-item";

import './card-list.scss';

function CardList({data}) {
    const cards = data.map(card => {
       const {id, ...cardRestData} = card;
       return (
           <CardLisItem key={id} id = {id} {...cardRestData}/>
       );
    });

    return (
        <ul className="home-card__list">
            {cards}
        </ul>
    );
}

export default CardList;
import React from 'react';
import classes from './cardSelect.module.sass';
import { data } from '../../data';
import Card from '../Card';

const CardsSelect = () => {
    const [selectedCards, setSelectedCards] = React.useState([]);
    const [hoverCard, setHoverCard] = React.useState(null);

    const handleCardClick = (id) => {
        if (selectedCards.includes(id)) {
            setSelectedCards((prevSelectedCards) =>
                prevSelectedCards.filter((blockId) => blockId !== id)
            );
        } else {
            setSelectedCards((prevSelectedCards) => [...prevSelectedCards, id]);
        }
    };

    const handleCardMouseEnter = () => {
        setHoverCard(null);
    };

    const handleCardMouseLeave = (id) => {
        setHoverCard(id);
    };

    return (
        <div className={classes.container}>
            {data.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                    handleCardClick={handleCardClick}
                    handleCardMouseEnter={handleCardMouseEnter}
                    handleCardMouseLeave={handleCardMouseLeave}
                    selected={selectedCards.includes(product.id)}
                    hoverCard={hoverCard}
                />
            ))}
        </div>
    );
};

export default CardsSelect;

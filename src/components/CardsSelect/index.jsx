import React from 'react';
import classes from './cardSelect.module.sass';
import Card from '../Card';

const CardsSelect = () => {
    const productsList = [
        {
            id: 'goodsCat_1',
            title: 'с фуа-гра',
            composition: {
                quantity: 10,
                present: {
                    quantity: 1,
                    message: '',
                },
            },
            weight: 0.5,
            measureUnit: 'кг',
            description: 'Печень утки разварная с артишоками.',
        },
        {
            id: 'goodsCat_2',
            title: 'с рыбой',
            composition: {
                quantity: 40,
                present: {
                    quantity: 2,
                    message: '',
                },
            },
            weight: 2,
            measureUnit: 'кг',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        },
        {
            id: 'goodsCat_3',
            title: 'с курой',
            composition: {
                quantity: 100,
                present: {
                    quantity: 5,
                    message: 'заказчик доволен',
                },
            },
            weight: 5,
            measureUnit: 'кг',
            description: 'Филе из цыплят с трюфелями в бульоне.',
        },
    ];
    const [selectedBlocks, setSelectedBlocks] = React.useState([]);
    const [hoverBlock, setHoverBlock] = React.useState(null);

    const handleCardClick = (id) => {
        if (selectedBlocks.includes(id)) {
            setSelectedBlocks((prevSelectedBlocks) =>
                prevSelectedBlocks.filter((blockId) => blockId !== id)
            );
        } else {
            setSelectedBlocks((prevSelectedBlocks) => [
                ...prevSelectedBlocks,
                id,
            ]);
        }
    };

    const handleCardMouseEnter = () => {
        setHoverBlock(null);
    };

    const handleCardMouseLeave = (id) => {
        setHoverBlock(id);
    };

    return (
        <div className={classes.container}>
            {productsList.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                    handleCardClick={handleCardClick}
                    handleCardMouseEnter={handleCardMouseEnter}
                    handleCardMouseLeave={handleCardMouseLeave}
                    selected={selectedBlocks.includes(product.id)}
                    hoverBlock={hoverBlock}
                />
            ))}
        </div>
    );
};

export default CardsSelect;

import React from 'react';
import classes from './card.module.sass';
import { getStr } from '../../utils/getStr';
import cat from '../../image/photo-cat.png';

const Card = ({
    id,
    title,
    composition,
    weight,
    measureUnit,
    description,
    inStock,
    selected,
    handleCardClick,
    handleCardMouseEnter,
    handleCardMouseLeave,
    hoverCard,
}) => {
    const classNameDefault =
        selected || hoverCard === id ? classes.cardSelected : classes.card;
    const classNameDisable = classes.cardDisable;

    return (
        <div className={classes.container}>
            <div
                className={inStock ? classNameDefault : classNameDisable}
                onClick={() => handleCardClick(id)}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={() => handleCardMouseLeave(id)}
            >
                <div className={classes.mainInfo}>
                    <h3 className={classes.upTitle}>
                        {hoverCard === id && !selected ? (
                            <span>Котэ не одобряет?</span>
                        ) : (
                            'Сказачное заморское яство'
                        )}
                    </h3>
                    <h1 className={classes.title}>Нямушка</h1>
                    <h2 className={classes.subTitle}>{title}</h2>
                    <p className={classes.composition}>
                        <div>
                            {composition.quantity} <span>порций</span>
                        </div>
                        <div>
                            {composition.present.quantity > 1
                                ? composition.present.quantity
                                : ''}
                            <span>
                                {' '}
                                {getStr(composition.present.quantity)} в подарок
                            </span>
                        </div>
                        {composition.present.message ?? (
                            <div>{composition.present.message} </div>
                        )}
                    </p>
                </div>
                <div className={classes.oval}>
                    <div className={classes.infoWeight}>{weight}</div>
                    <div className={classes.infoMU}>{measureUnit}</div>
                </div>
                <img className={classes.imgBg} src={cat} alt='cat-image' />
            </div>
            <p className={classes.description}>
                {inStock ? (
                    selected ? (
                        description
                    ) : (
                        <>
                            <div>Чего сидишь? Порадуй котэ, </div>
                            <span onClick={() => handleCardClick(id)}>
                                купи
                            </span>
                            .
                        </>
                    )
                ) : (
                    <div style={{ color: '#FFFF66' }}>
                        Печалька, {title} закончился.
                    </div>
                )}
            </p>
        </div>
    );
};

export default Card;

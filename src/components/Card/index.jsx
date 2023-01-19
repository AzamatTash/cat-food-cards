import React from 'react';
import classes from './card.module.sass';
import cat from '../../image/photo-cat.png';

const Card = ({ title, composition, weight, measureUnit, description }) => {
    const getStr = (quantity) => {
        if (quantity === 1) {
            return 'мышь';
        }
        if (quantity < 5) {
            return 'мыши';
        }
        if (quantity > 4) {
            return 'мышей';
        }
    };
    const [select, setSelect] = React.useState(false);

    const onSelectProduct = () => {
        // const product = {
        //     id,
        //     title,
        // };
        setSelect(!select);
    };

    return (
        <div className={classes.container}>
            <div
                className={select ? classes.cardSelected : classes.card}
                onClick={onSelectProduct}
            >
                <div className={classes.mainInfo}>
                    <h3 className={classes.upTitle}>
                        Сказачное заморское яство
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
                {select ? (
                    description
                ) : (
                    <>
                        <div>Чего сидишь? Порадуй котэ, </div>
                        <span onClick={() => setSelect(!select)}>купи</span>.
                    </>
                )}
            </p>
        </div>
    );
};

export default Card;
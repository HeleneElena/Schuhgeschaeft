import React from 'react';
import './style.css';

function Card({title, img, price}) {
    const [isAdd, setIsAdd] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const onClickPlus = () => {
        setIsAdd(!isAdd)
        onPlus({title, img, price})
    }
    const onFavorite = () => {
        setFavorite(!favorite)
    }

    return (
            <div className="card">
            <div className="card_shuhe">
                <img src={favorite ? './image/favorite.svg' : "./image/shop_like.svg"} alt="like" className="shop_like" onClick={onFavorite}/>
                    <img src={img} alt="shuhe" className="shuhe"/>
                        <p className="card_text">Männer Sneakers</p>
                        <p className="cart_marke">{title} </p>
                    </div>
                    <div className="card_price">
                        <div className="shuhe_price">
                            <p className="shuhe_price_text">Price</p>
                            <p className="shuhe_price_zahl">{price} €</p>
                        </div>
                        <button className="card_plus" onClick={onClickPlus} >
                            <img src={isAdd ? "./image/shop_gekauft.svg" : "./image/plus.svg"} alt="plus" className="card_plus_img"/>
                        </button>
                    </div>
            </div>
            );
}

export default Card;
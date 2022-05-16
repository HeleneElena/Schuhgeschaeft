import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className="cards_row"> 
            <div className="card">
            <div className="card_shuhe">
                <img src="./image/shop_like.svg" alt="like" className="shop_like"/>
                    <img src={props.img} alt="shuhe" className="shuhe"/>
                        <p className="card_text">Männer Sneakers</p>
                        <p className="cart_marke">{props.title} </p>
                    </div>
                    <div className="card_price">
                        <div className="shuhe_price">
                            <p className="shuhe_price_text">Price</p>
                            <p className="shuhe_price_zahl">{props.price} €</p>
                        </div>
                        <div className="card_plus">
                            <img src="./image/shop_plus.svg" alt="plus" className="card_plus_img"/>
                        </div>
                    </div>
            </div>
        </div>
            );
}

export default Card;
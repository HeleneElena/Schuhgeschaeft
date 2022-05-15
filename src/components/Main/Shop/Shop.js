import React from 'react';
import cartItem from './cartItem/cartItem';
import './style.css';

function Shop(props) {
    return (
        <section className="shop">
            <div className="container">
                <cartItem />
                <div className="cards_row">
                 
                    <div className="card">
                        <div className="card_shuhe">
                            <img src="./image/shop_like.svg" alt="like" className="shop_like"/>
                            <img src="./image/shuhe1.jpg"  alt="shuhe" className="shuhe"/>
                            <p className="card_text">Männer Sneakers</p>
                            <p className="cart_marke">Nike Blazer Mid Suede </p>
                        </div>
                        <div className="card_price">
                            <div className="shuhe_price">
                                <p className="shuhe_price_text">Price</p>
                                <p className="shuhe_price_zahl">156 €</p>
                            </div>
                            <div className="card_plus">
                                <img src="./image/shop_plus.svg" alt="plus" className="card_plus_img"/>
                            </div>
                        </div>
                
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

export default Shop;
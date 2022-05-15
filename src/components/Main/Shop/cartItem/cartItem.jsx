import React from 'react';

function cartItem(props) {
    return (
        <div>
            <h2>Warenkorb</h2>
            <img src='./image/shuhe1.jpg' alt='Sneakers' />
            <div>
            <p className="card_text">Männer Sneakers</p>
            <p className="shuhe_price_zahl">156 €</p>
            </div>
        </div>
    );
}

export default cartItem;
import React from 'react';
import './style.css';

function Card(props) {
    const [isAdd, setIsAdd] = React.useState(false);

    const onClickPlus = () => {
        setIsAdd(!isAdd)
    }

    return (
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
                        <button className="card_plus" onClick={onClickPlus} >
                            <img src={isAdd ? "./image/shop_gekauft.svg" : "./image/plus.svg"} alt="plus" className="card_plus_img"/>
                        </button>
                    </div>
            </div>
      
            );
}

export default Card;
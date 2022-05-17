import React from 'react';
import './style.css';

function Korb(props) {
    return (<>
        <div style={ {display: 'none'} } className='overlay'>
            <div className='korb'>
                <h2 className="korb_titel">Warenkorb</h2>
                <div className='items'>
                    <div className='korb_img' style={ {backgroundImage: 'url(/image/shuhe1.jpg)' } } ></div>
                    <div className='korb_text'>
                    <p className="card_text">Männer Sneakers</p>
                    <p className="cart_marke">Nike Air Max 270 </p>
                    <b>129 €</b>
                    </div>
                </div>
            </div>
            <div className='insgesamt'>
                <div className='gesamSumme'>210 €</div>
                <button className='btn_bestellung'>Eine Bestellung aufgeben</button>
            </div>
        </div>

    </>
    );
}

export default Korb;
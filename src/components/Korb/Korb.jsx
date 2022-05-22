import React from 'react';
import './style.css';

function Korb({ onClose, waren = [] }) {

    return (
        <section className='corb_korb'>
            <div className="korb_seite">
                <img src="./image/furKorb.jpg" alt="shuhe" className="korb_fon" />
            </div>

            <div className="korb_waren">
                <div className='korb_header'>
                    <h2 className="korb_title">Warenkorb</h2>
                    <img onClick={onClose} src="./image/deletesvg.svg" alt="delete" className="deletesvg" />
                </div>
                <div className="warenkorb">
                {
                        waren.map((obj) => {
                            return ( 
                                <div className="cart_waren">
                                <img src={obj.img} alt="schuhe" className='img_corb_waren' />
                                <div className="corb_title_waren">
                                    <p className="corb_text">Männer Sneakers</p>
                                    <p className="corb_marke">{obj.marke}</p>
                                    <b className="corb_price_shuhe"> {obj.price} €</b>
                                </div>
                                <div className="img_corb_svg">
                                    <img src="./image/deletesvg.svg" alt="delete" className="deletesvg"/>
                                </div>
                            </div>
                            )
                        })
                 }    
                </div>

                <div className="insgesamt">
                    <p className="gesamt">Insgesamt: <b>239</b> €</p>
                </div>
                <div className="btn">
                    <button className="korb_btn" >Bestellung aufgeben</button>
                </div>
            </div>
        </section>
    );
}

export default Korb;
import React from 'react';
import './style.css';

function Korb(props) {
    return (
        <section className='corb_korb'>
            <div className="korb_seite">
                <img src="./image/furKorb.jpg" alt="shuhe" className="korb_fon"/>
            </div>

            <div className="korb_waren">
                <h2 className="korb_title">Warenkorb</h2>
                <div className="cart_waren">
                    <div className="img">
                        <img src="./image/shuhe6.jpg" alt="shuhe" className="img_corb_waren"/>
                    </div>
                    <div className="corb_title_waren">
                        <p className="corb_text">Männer Sneakers</p>
                        <p className="corb_marke">Nike Blazer Mid Suede</p>
                        <b className="corb_price_shuhe">89 €</b>
                    </div>
                    <div className="img_corb_svg">
                        <img src="./image/deletesvg.svg" alt="delete" className="deletesvg"/>
                    </div>
                </div>

                <div className="cart_waren">
                    <div className="img">
                        <img src="./image/shuhe8.jpg" alt="shuhe" className="img_corb_waren"/>
                    </div>
                    <div className="corb_title_waren">
                        <p className="corb_text">Männer Sneakers</p>
                        <p className="corb_marke">Nike Blazer Mid Suede</p>
                        <b className="corb_price_shuhe">89 €</b>
                    </div>
                    <div className="img_corb_svg">
                        <img src="./image/deletesvg.svg" alt="delete" className="deletesvg"/>
                    </div>
                </div>

                <div className="insgesamt">
                    <p className="gesamt">Insgesamt: <b>239</b> €</p>
                </div>
                <div className="btn">
                    <button className="korb_btn">Bestellung aufgeben</button>
                </div>
            </div>
        </section>
    );
}

export default Korb;
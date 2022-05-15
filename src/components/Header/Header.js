import React from 'react';
import './style.css';

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <img className="logo_img" src="./image/logo.svg" alt="logo" />
                        <h3>SNEAKERS</h3>
                    </div>
                    <div className="data_user">
                        <div class="korb">
                            <img src="./image/logoKorb.svg" alt="korb" class="korb_logo"/>
                            <p className="logo_price">120 €</p>
                            <img src="./image/like.svg" alt="like" className="like"/>
                            <img src="./image/avatar.svg" alt="avatar" className="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;
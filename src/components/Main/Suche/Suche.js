import React from 'react';
import './style.css';

function Suche(props) {
    return (
        <section>
            <div className="container">
                <div className="search">
                    <h1>Alle Sneakers</h1>
                    <div className="input_search">
                        <img src="./image/search.svg" alt="search" className="search_img"/>
                        <p className="search_text">Suchen</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Suche;
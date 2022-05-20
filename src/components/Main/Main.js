import React from 'react';

import Banner from './Banner/Banner';
import Card from './Card/Card';
import Suche from './Suche/Suche';

import '../../App.css';

function Main(props) {
    
const onAddToKorb = () => {

}
 
 
 return (
        <main>
            <Banner />
            <Suche />

            <section className="shop">
                <div className="container">
                    <div className="cards_row">
                        {
                            props.items.map((el) =>
                            (<Card
                                title={el.marke}
                                price={el.price}
                                img={el.img}
                                onPlus={onAddToKorb}
                                onFavor={() => {}}
                            />))
                        }
                    </div>
                </div>
            </section>


        </main>
    );
}

export default Main;

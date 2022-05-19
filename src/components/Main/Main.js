import React from 'react';

import Banner from './Banner/Banner';
import Card from './Card/Card';
import Suche from './Suche/Suche';

import '../../App.css';

function Main(props) {
    const items = [
        {
            "img": "/image/shuhe1.jpg",
            "price": 152,
            "marke": "Nike Blazer Mid Suede",
        },
        {
            "img": "/image/shuhe2.jpg",
            "price": 91,
            "marke": "Nike Air Max 270",
        },
        {
            "img": "/image/shuhe3.jpg",
            "price": 160,
            "marke": "Under Armour Curry 8",
        },
        {
            "img": "/image/shuhe4.jpg",
            "price": 80,
            "marke": "Nike Kyrie 7",
        },
        {
            "img": "/image/shuhe5.jpg",
            "price": 70,
            "marke": "Nike Lebron XVIII Low",
        },
        {
            "img": "/image/shuhe7.jpg",
            "price": 63,
            "marke": "Nike Blazer Mid Suede",
        },
        {
            "img": "/image/shuhe8.jpg",
            "price": 72,
            "marke": "Nike Kyrie Flytrap IV",
        }
    ]

    return (
        <main>
            <Banner />
            <Suche />

            <section className="shop">
                <div className="container">
                    <div className="cards_row">
                        {
                            items.map((el) =>
                            (<Card
                                title={el.marke}
                                price={el.price}
                                img={el.img}
                            />))
                        }
                    </div>
                </div>
            </section>


        </main>
    );
}

export default Main;

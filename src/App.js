import React, {useEffect} from 'react';

import Header from './components/Header/Header';
import Card from './components/Main/Card/Card';
import Korb from './components/Korb/Korb';
import Banner from './components/Main/Banner/Banner';

import './App.css';

function App() {
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
    },
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
    }
    ]
    const [corbItems, setCorbItems] = React.useState([]); // Array zum Aufbewahren von Waren im Warenkorb
    const [korbOpened, setKorbOpened] = React.useState(false); // Warenkorb wird geöffnet
    const [searchValue, setSearchValue] = React.useState(''); // für input, für Suche

    const onAddToKorb = (obj) => {   
        setCorbItems(prev => [...prev, obj]); // Ware hinzufügen in den Warenkorb
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

  
   {/* für meine Kontrol 
     useEffect(() => {
       console.log(corbItems);
      }, [corbItems])
    */ }

  return (
    <div className="App">
      
      <Header onClickKorb={() => setKorbOpened(true)} />
      {korbOpened ?  <Korb onClose={() => setKorbOpened(false)} waren={corbItems} /> : null}
      {!korbOpened ?  
        <main>
            <Banner />
            <section>
            <div className="container">
                <div className="search">
                    <h1>
                        {
                            searchValue ? `Suche auf Anfrage: "${searchValue}" ` : 'Alle Sneakers'
                        }
                    </h1>
                    <div className="input_search">
                        <img src="./image/search.svg" alt="search" className="search_img"/>
                        <input onChange={onChangeSearchInput} value={searchValue} className="search_text" placeholder='Suche' />
                    </div>
                </div>
            </div>
            </section>

            <section className="shop">
                <div className="container">
                    <div className="cards_row">
                        {
                            items.filter(item => item.marke.toLowerCase().includes(searchValue.toLowerCase()) )
                                 .map((el, index) =>
                            (<Card
                                key={index}
                                title={el.marke}
                                price={el.price}
                                img={el.img}
                                onPlus={(obj) => onAddToKorb(obj) }
                                onFavor={() => {}}
                            />))
                        }
                    </div>
                </div>
            </section>
        </main>
      : null}
      
    </div>
  );
}

export default App;

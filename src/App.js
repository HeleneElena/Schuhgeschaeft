import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css';
import Korb from './components/Korb/Korb';

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
  const [korbOpened, setKorbOpened] = React.useState(false);
  const [corbItems, setCorbItems] = React.useState([ ]);

  return (
    <div className="App">
      
      <Header onClickKorb={() => setKorbOpened(true)} />
      {korbOpened ?  <Korb onClose={() => setKorbOpened(false)} items={corbItems} /> : null}
      {!korbOpened ?  <Main items={items} /> : null}
      
    </div>
  );
}

export default App;

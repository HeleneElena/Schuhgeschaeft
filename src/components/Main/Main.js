import Banner from './Banner/Banner';
import Card from './Card/Card';
import Suche from './Suche/Suche';
import '../../App.css';

function Main(props) {

    const data = [
        {
            id: 1,
            img: '/image/shuhe1.jpg',
            marke: 'Nike Blazer Mid Suede',
            price: '129',
            count: 1,
        },
        {
            id: 2,
            img: '/image/shuhe2.jpg',
            marke: 'Nike Air Max 270',
            price: '109',
            count: 1,
        },
        {
            id: 3,
            img: '/image/shuhe3.jpg',
            marke: 'Under Armour Curry 8',
            price: '139',
            count: 1,
        },
        
    ]

    return (
        <main>
            <Banner />
            <Suche />
            <section className="shop">
            <div className="container">
                <div className="cards_row"> 
                     {
                     data.map((el, key) =>  
                     (<Card
                        key={el.id}
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

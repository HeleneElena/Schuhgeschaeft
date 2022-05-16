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
        {
            id: 4,
            img: '/image/shuhe5.jpg',
            marke: 'Nike Kyrie 7',
            price: '149',
            count: 1,
        },
        {
            id: 5,
            img: '/image/shuhe4.jpg',
            marke: 'Jordan Air Jordan 11',
            price: '99',
            count: 1,
        },
        {
            id: 6,
            img: '/image/shuhe7.jpg',
            marke: 'Under Armour Curry',
            price: '199',
            count: 1,
        },
        {
            id: 7,
            img: '/image/shuhe6.jpg',
            marke: 'Nike Kyrie Flytrap IV',
            price: '139',
            count: 1,
        },
        {
            id: 8,
            img: '/image/shuhe10.jpg',
            marke: 'Jordan Air Jordan 11',
            price: '199',
            count: 1,
        },
        {
            id: 9,
            img: '/image/shuhe8.jpg',
            marke: 'Nike Lebron XVIII Low',
            price: '149',
            count: 1,
        },
        {
            id: 10,
            img: '/image/shuhe9.jpg',
            marke: 'Nike LeBron XVIII',
            price: '129',
            count: 1,
        },
    ]

    return (
        <main>
            <Banner />
            <Suche />
            <section className="shop">
            <div className="container">
                
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
        </section>
            
            
        </main>
    );
}

export default Main;

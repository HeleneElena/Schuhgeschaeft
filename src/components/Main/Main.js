import Banner from './Banner/Banner';
import Shop from './Shop/Shop';
import Suche from './Suche/Suche';
import data from './../../data';

function Main(props) {

    return (
        <main>
            <Banner />
            <Suche />
            <Shop data={data} />
        </main>
    );
}

export default Main;

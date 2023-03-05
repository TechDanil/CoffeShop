import {BrowserRouter, Routes, Route} from "react-router-dom";

import SolimoCoffee from '../../resources/img/goods/solimo-coffee-beans-2-kg.svg';
import PrestoCoffee from '../../resources/img/goods/presto-coffee-beans-1-kg.svg';
import AromisticoCoffee from '../../resources/img/goods/aromistico-coffee-1-kg.svg';

import Home from '../../pages/home';

function App() {

    const data = [
        {
            id: 0,
            src: SolimoCoffee,
            name: 'Solimo Coffee Beans 2 kg',
            alt: 'Solimo Coffee Beans 2 kg',
            price: '10.73',
            country: 'Brazil',
            isRecommended: true,
        },

        {
            id: 1,
            src: PrestoCoffee,
            name: 'Presto Coffee Beans 1 kg',
            alt: 'Presto Coffee Beans 1 kg',
            price: '15.99',
            country: 'Columbia',
            isRecommended: true,
        },

        {
            id: 2,
            src: AromisticoCoffee,
            name: 'AROMISTICO Coffee 1 kg',
            alt: 'AROMISTICO Coffee 1 kg',
            price: '6.99',
            country: 'Kenya',
            isRecommended: true,
        },
    ];


    return (
        <BrowserRouter>
            <Home data={data}/>
        </BrowserRouter>
    );
}

export default App;
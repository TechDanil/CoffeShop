import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../../pages/home/home';
import Coffee from "../../pages/coffee/coffee";

import SolimoCoffee from '../../resources/img/goods/solimo-coffee-beans-2-kg.svg';
import PrestoCoffee from '../../resources/img/goods/presto-coffee-beans-1-kg.svg';
import AromisticoCoffee from '../../resources/img/goods/aromistico-coffee-1-kg.svg';

class App extends Component{

    constructor(props) {
        super(props);

        const data = [
            {
                id: 0,
                src: SolimoCoffee,
                name: 'Solimo Coffee Beans 2 kg',
                alt: 'Solimo Coffee Beans 2 kg',
                price: '10.73',
                isRecommended: true,
            },

            {
                id: 1,
                src: PrestoCoffee,
                name: 'Presto Coffee Beans 1 kg',
                alt: 'Presto Coffee Beans 1 kg',
                price: '15.99',
                isRecommended: true,
            },

            {
                id: 2,
                src: AromisticoCoffee,
                name: 'AROMISTICO Coffee 1 kg',
                alt: 'AROMISTICO Coffee 1 kg',
                price: '6.99',
                isRecommended: true,
            },
        ];

        this.state = {
            articles: [
                {
                    id: 0,
                    src: AromisticoCoffee,
                    name: 'Solimo Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 1,
                    src: AromisticoCoffee,
                    name: 'Asolimo Coffee 2 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Kenya',
                    price: '6.99',
                },

                {
                    id: 2,
                    src: AromisticoCoffee,
                    name: 'Asolimo Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Columbia',
                    price: '6.99',
                },

                {
                    id: 3,
                    src: AromisticoCoffee,
                    name: 'Presto Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 4,
                    src: AromisticoCoffee,
                    name: 'AROMISTICO Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 5,
                    src: AromisticoCoffee,
                    name: 'AROMISTICO Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },
            ],
            term: '',
        };
    }

    searchItem = (items, term) => {
        if (!items.length)
            return items;

        return items.filter(item => item.name.startsWith(term.toUpperCase()));
    }

    onUpdateSearch = (term) => {
        this.setState({
           term,
        });
    }

    render() {
       const {articles, term} = this.state;
       const visibleData = this.searchItem(articles, term);
       return (
           <BrowserRouter>
               {/*<Home data={data}/>*/}
               <Coffee data={visibleData} onUpdateSearch={this.onUpdateSearch}/>
           </BrowserRouter>
       );
    }
}

export default App;
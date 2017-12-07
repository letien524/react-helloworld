import React, {Component} from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Header from './conponents/Header';
import Footer from './conponents/Footer';

import Banner from './layouts/Banner';
import Portfolio from './layouts/Portfolio';
import About from './layouts/About';
import Contact from './layouts/Contact';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Portfolio/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}



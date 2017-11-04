import React, { Component } from 'react';
import Navigation from './Navigation';

import './App.css';



class Container extends Component {

    render() {

        return (
            <div className="container">
                <Navigation/>
            </div>
        );
    }
}

export default Container;

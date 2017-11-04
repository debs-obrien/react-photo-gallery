import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <h2>page not found</h2>
            </div>
        );
    }
}

export default NotFound;
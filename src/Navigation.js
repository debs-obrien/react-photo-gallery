import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li><a href='/search'>Search</a></li>
                        <li><a href='/Clouds'>Clouds</a></li>
                        <li><a href='/Sunset'>Sunset</a></li>
                        <li><a href='/Flowers'>Flowers</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
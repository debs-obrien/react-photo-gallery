import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to='/search'>Search</NavLink></li>
                        <li><NavLink to='/Clouds'>Clouds</NavLink></li>
                        <li><NavLink to='/Sunset'>Sunset</NavLink></li>
                        <li><NavLink to='/Flowers'>Flowers</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
import React from 'react';
import Container from './Container';
import './App.css';

const Clouds = (props) => (
    <div>
        <Container />
        <div className="photo-container">

            <h2>Results for {props.title}</h2>
            <ul>
                <li>
                    <img src="" alt="" />
                </li>
                <li>
                    <img src="" alt="" />
                </li>
                <li>
                    <img src="" alt="" />
                </li>
                <li>
                    <img src="" alt="" />
                </li>

                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    </div>


);


export default Clouds;
import React, { Component } from 'react';
import './App.css';

const Photo = props => (
    <li>
        <img src={props.url} alt={props.alt} />
    </li>

);


export default Photo;



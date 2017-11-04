import React from 'react';
import './App.css';
import Container from './Container';
import PhotoContainer from './PhotoContainer';


const Sunset = (props) => (

    <div className="container">
        <Container />
        <h2>Results for {props.title}</h2>
        <PhotoContainer {...props} />
    </div>

);


export default Sunset;
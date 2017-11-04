import React from 'react';
import './App.css';
import Container from './Container';
import PhotoContainer from './PhotoContainer';


const Flowers = (props) => (
    <div className="container">
        <Container />
        <h2>Results for {props.title}</h2>
        <PhotoContainer {...props} />
    </div>
);

export default Flowers;
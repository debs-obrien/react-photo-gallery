import React from 'react';
import Container from './Container';
import './App.css';
import PhotoContainer from "./PhotoContainer";

const Clouds = (props) => {


    return(
        <div className="container">
            <Container />
            <h2>Results for {props.title}</h2>
            <PhotoContainer {...props} />
        </div>
    );
};


export default Clouds;
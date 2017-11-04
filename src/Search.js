import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Container from './Container';
import PhotoContainer from "./PhotoContainer";
import Form from './Form';

const Search = (props) => {

        return (
            <div className="container">
                <Form />
                <div className="container">
                    <Container />
                    <h2>Results for {props.title}</h2>
                    <PhotoContainer {...props} />
                </div>
            </div>
        );
};

export default Search;

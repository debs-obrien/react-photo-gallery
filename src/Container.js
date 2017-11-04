import React, { Component } from 'react';
import Navigation from './Navigation';
import apiKey from './config';
import './App.css';



class Container extends Component {
    constructor(){
        super();
        this.state = {
            photos: []
        };
    }
    componentDidMount(){
        const flickerKey = apiKey;
        console.log(flickerKey);
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=530bf8156cfb70d0a7f891e9e74ee790&tags=sunset&per_page=8&page=1&format=json&nojsoncallback=1')
            .then(response => response.json())
            .then(responseData => {
                this.setState({photos: responseData});
            })
            .catch(error =>{
                console.log('error fetching data', error);
            });
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <Navigation/>
            </div>
        );
    }
}

export default Container;

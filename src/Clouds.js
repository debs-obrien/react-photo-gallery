import React from 'react';
import Container from './Container';
import Photo from'./Photo';
import './App.css';

const Clouds = (props) => {
    const results = props.data;
    let photos = results.map(photo =>

        <Photo
            alt={photo.title}
            url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        />
    );
    return(

        <div className="container">
            <Container />
            <h2>Results for {props.title}</h2>
            <div className="photo-container">
                <ul>
                    {photos}
                </ul>
            </div>
        </div>
    );


};


export default Clouds;
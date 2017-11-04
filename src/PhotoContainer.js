import React from 'react';
import Photo from'./Photo';
import NoPhotos from './NoPhotos'
import './App.css';

const PhotoContainer = (props) => {
    const results = props.data;
    let photos;
    if(results.length > 0){
        photos = results.map(photo =>
            <Photo
                alt={photo.title}
                url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
            />
        );
    }else{
        photos = <NoPhotos/>
    }



    return(
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div>
    );
};


export default PhotoContainer;
import React from 'react';
import dhokla from '../assets/images/dhokla.jpg';
import dhoklii from '../assets/images/dhoklii.jpeg';
import poha from '../assets/images/Poha.jpg';

function Gallery() {
    return (
        <div className="gallery">
            <h2>Popular Dishes</h2>
            <img src={dhokla} alt="Dish 1" />
            <img src={dhoklii} alt="Dish 2" />
            <img src={poha} alt="Dish 3" /><br />
        </div>
        );
}
export default Gallery;

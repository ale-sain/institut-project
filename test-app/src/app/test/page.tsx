'use client'
import React, { useState } from 'react';
import './test.css'; // Assurez-vous que le CSS est correctement importé

export default function Carrousel ({ initialePosition = 5 }) {
    const [position, setPosition] = useState(initialePosition);
    const nbr = 32; // Nombre total d'images
    const width = 500; // Largeur de chaque image

    const moveLeft = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
        console.log(position);
    };

    const moveRight = () => {
        if (position < nbr - 1) {
            setPosition(position + 1);
        }
        console.log(position);
    };

    const imageUrls = [
      '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ongle.jpeg'
    ];

    return ( 
      <>
        <div id="carrousel">
            <div id="container-carr" 
            style={{
              width: `${500 * nbr}px`,
              transform: `translate(-${position * width}px)`,
              transition: 'all 0.5s ease'
            }}>
                {imageUrls.map((url, index) => (
                  <div key={index} className="photo" style={{ backgroundImage: `url(${url})` }} />
                  ))}
            </div>
        </div>
            <div className="left arrow" onClick={moveLeft} style={{ visibility: position === 0 ? 'hidden' : 'visible' }}>❮</div>
            <div className="right arrow" onClick={moveRight} style={{ visibility: position === nbr - 1 ? 'hidden' : 'visible' }}>❯</div>
        </>
    );
};
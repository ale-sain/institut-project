import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import '../styles/gallery.css'
import Carrousel from './carrousel';

export default function NailGallery() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const listImg = [
      '/img/o1.jpeg',
      '/img/o2.jpeg',
      '/img/o3.jpeg',
      '/img/o4.jpeg',
      '/img/o5.jpeg',
      '/img/o6.jpeg',
      '/img/o32.jpeg',
      '/img/o7.jpeg',
      '/img/o8.jpeg',
      '/img/o9.jpeg',
      '/img/o10.jpeg',
      '/img/o11.jpeg',
      '/img/o12.jpeg',
      '/img/o13.jpeg',
      '/img/o14.jpeg',
      '/img/o15.jpeg',
      '/img/o16.jpeg',
      '/img/o17.jpeg',
      '/img/o18.jpeg',
      '/img/o19.jpeg',
      '/img/o20.jpeg',
      '/img/o21.jpeg',
      '/img/o22.jpeg',
      '/img/o23.jpeg',
      '/img/o24.jpeg',
      '/img/o25.jpeg',
      '/img/o26.jpeg',
      '/img/o27.jpeg',
      '/img/o28.jpeg',
      '/img/o29.jpeg',
      '/img/o30.jpeg',
      '/img/o31.jpeg'
  ];

    const handleClickImg = (index: number) => {
        setIsVisible(true); // Rend l'overlay visible
        setSelectedImage(index); // Sélectionne l'image
    };

    const handleClose = () => {
        setIsVisible(false); // Cache l'overlay
        setSelectedImage(0);
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleTouchStart = (index) => {
      setHoveredIndex(index); // Démarre l'effet de survol
  };
  
  const handleTouchEnd = () => {
      setHoveredIndex(null); // Termine l'effet de survol
  };


    return (
        <>
          <div className='container gallery w-container'>
            <h4 className="h4-gallerie">galerie</h4>
            <div className="w-dyn-list">
              <div className="procedure-gallery-wrapper w-dyn-items">
              {listImg.map((src, index) => (
                <a key={index} 
                  className={`gallery-light-box w-inline-block w-lightbox ${hoveredIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleTouchStart(index)} // Gère le début du toucher
                  onTouchEnd={handleTouchEnd} // Gère la fin du toucher
                  onClick={() => handleClickImg(index)}>
                    <Image className="gallery-image" src={src} width="205" height="205" alt="Nail Art"/>
                </a>
            ))}
              </div>
            </div>
            {isVisible &&
              <div className="modal-background" onClick={handleClose}>
                <div className="modal-wrapper">
                  <button className="close-button" onClick={handleClose}>&times;</button>
                  <Carrousel initialePosition={selectedImage} />
                </div>
              </div>
            }
          </div>
        </>
      )
    }
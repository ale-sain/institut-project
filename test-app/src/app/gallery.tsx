import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Carrousel from './carrousel';
import '../styles/gallery.css'

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
      '/img/o31.jpeg',
      '/img/o40.jpeg',
      '/img/o41.jpeg',
      '/img/o42.jpeg',
      '/img/o43.jpeg',
      '/img/o44.jpeg',
      '/img/o45.jpeg',
      '/img/o46.jpeg',
      '/img/o47.jpeg',
      '/img/o48.jpeg',
      '/img/o49.jpeg',
      '/img/o50.jpeg',
      '/img/o51.jpeg',
      '/img/o52.jpeg',
      '/img/o53.jpeg',
      '/img/o54.jpeg',
      '/img/o55.jpeg',
      '/img/o56.jpeg',
      '/img/o57.jpeg',
      '/img/o58.jpeg',
      '/img/o59.jpeg',
      '/img/o60.jpeg',
      '/img/o61.jpeg',
      '/img/o62.jpeg',
      '/img/o63.jpeg',
      '/img/o64.jpeg',
      '/img/o65.jpeg',
      '/img/o66.jpeg',
      '/img/o67.jpeg',
      '/img/o68.jpeg',
      '/img/o69.jpeg',
      '/img/o70.jpeg',
      '/img/o71.jpeg',
      '/img/o72.jpeg',
      '/img/o73.jpeg',
      '/img/o74.jpeg',
      '/img/o75.jpeg',
      '/img/o76.jpeg',
      '/img/o77.jpeg',
      '/img/o79.jpeg',
      '/img/o80.jpeg',
      '/img/o81.jpeg',
      '/img/o82.jpeg',
      '/img/o83.jpeg',
      '/img/o84.jpeg',
      '/img/o85.jpeg',
      '/img/o86.jpeg',
      '/img/o87.jpeg',
      '/img/o88.jpeg'
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

    // const handleTouch = (index) => {
    //   if (hoveredIndex !== index) {
    //     setHoveredIndex(index);
    //   } else {
    //     setHoveredIndex(null);
    //   }
    // };


    return (
        <>
          <div className='container gallery w-container'>
            <h4 className="h4-gallerie">Galerie</h4>
            <div className="w-dyn-list">
              <div className="procedure-gallery-wrapper w-dyn-items">
              {listImg.map((src, index) => (
                <a key={index} 
                  className={`gallery-light-box w-inline-block w-lightbox ${hoveredIndex === index ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  // onTouchStart={() => handleTouch(index)}
                  // onTouchEnd={() => setHoveredIndex(null)}
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
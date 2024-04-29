import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import '../styles/gallery.css'
import Carrousel from './carrousel';

export default function NailGallery() {
    const [selectedImage, setSelectedImage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const listImg = [
        '/img/ongles/ongle.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ongle.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ongle.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ongle.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg',
        '/img/ongles/ong.jpeg'
    ];

    const handleClickImg = (src: string) => {
        setIsVisible(true); // Rend l'overlay visible
        setSelectedImage(src); // Sélectionne l'image
    };

    const handleClose = () => {
        setIsVisible(false); // Cache l'overlay
        setSelectedImage('');
    };

    return (
        <>
          <div className='container gallery w-container'>
            <h4 className="h4-gallerie">galerie</h4>
            <div className="w-dyn-list">
              <div className="procedure-gallery-wrapper w-dyn-items">
                {listImg.map((src, index) => (
                  <a key={index} className="gallery-light-box w-inline-block w-lightbox" onClick={() => handleClickImg(src)}>
                    <Image className="gallery-image" src={src} width="205" height="205" alt="Nail Art"/>
                  </a>
                ))}
              </div>
            </div>
            {isVisible && selectedImage &&
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
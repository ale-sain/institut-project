import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import '../styles/gallery.css'

const LEFT = 0;
const RIGHT = 1;

export default function NailGallery() {
    const [selectedImage, setSelectedImage] = useState(0); // État pour l'image sélectionnée
    const [isVisible, setIsVisible] = useState(false); // État pour la visibilité de l'overlay

    const listImg = [
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

    const handleClickImg = (index : number) => {
        setIsVisible(true); // Rend l'overlay visible
        setSelectedImage(index); // Sélectionne l'image
    };

    const handleClose = () => {
        setIsVisible(false); // Cache l'overlay
        setSelectedImage(0);
    };

    const handleClickArrow = (direction : number, {selectedImage} : {selectedImage: number}) => {
        if (direction === LEFT) {
            if (selectedImage === 0) {
                setSelectedImage(listImg.length - 1);
            } else {
                setSelectedImage(selectedImage - 1);
            }
        } else {
            if (selectedImage === listImg.length - 1) {
                setSelectedImage(0);
            } else {
                setSelectedImage(selectedImage + 1);
            }
        }
    };

    return (
        <div className="section">
            <div className='container gallery w-container'>
                <h4 className="h4-gallerie">galerie</h4>
                <div className="w-dyn-list">
                    <div className="procedure-gallery-wrapper w-dyn-items">
                        {listImg.map((src, index) => (
                            <a key={index} className="gallery-light-box w-inline-block w-lightbox" onClick={() => handleClickImg(index)}>
                                <Image className="gallery-image" src={src} width="205" height="205" alt="Nail Art"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {isVisible && (
                <div className="modal-background">
                 {/* <div className="modal-wrapper"> */}
                        <button className="close-button" onClick={handleClose}>&times;</button>
                        <div className="left-arrow"  onClick={() => handleClickArrow(LEFT, {selectedImage})}>❮</div>
                        <div className="carrousel">
                            <div className="container-carr">
                                {listImg.map((src, index) => (
                                    <div key={index} className="photo"  style={{ backgroundImage: `url(${src})` }}></div>
                                    ))}
                            </div>
                        </div>
                        <div className="right-arrow" onClick={() => handleClickArrow(RIGHT, {selectedImage})}>❯</div>
                 {/* </div>  */}
             </div>
            )}
        </div>
    )
}

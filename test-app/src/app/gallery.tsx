import React, { useState } from 'react';
import Image from 'next/image'
import Nail1 from '../img/ongles/ong.jpeg'
import '../styles/gallery.css'

export default function NailGallery() {
    const [selectedImage, setSelectedImage] = useState(null); // État pour l'image sélectionnée
    const [isVisible, setIsVisible] = useState(false); // État pour la visibilité de l'overlay

    const list = [
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'},
        {src: '/img/ongles/ong.jpeg'}
    ];
    const handleClick = (image) => {
        setSelectedImage(image);
        setIsVisible(true); // Rend l'overlay visible
    };

    const handleClose = () => {
        setIsVisible(false); // Cache l'overlay
    };

    return (
        <div className="section">
            <div className='container gallery w-container'>
                <h4 className="h4-gallerie">galerie</h4>
                <div className="w-dyn-list">
                    <div className="procedure-gallery-wrapper w-dyn-items">
                        {list.map((section, index) => (
                            <a className="gallery-light-box w-inline-block w-lightbox" onClick={() => handleClick(section.src)}>
                                <Image className="gallery-image" src={section.src} width="205" height="205" alt="Nail Art"/>
                            </a>
                        ))}
                    </div>
                </div>
                {isVisible && (
                    <div className="img-shadow" onClick={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <Image src={selectedImage} width="500" height="500" alt="Selected Nail Art" />
                    </div>
                )}
            </div>
        </div>
    )
}

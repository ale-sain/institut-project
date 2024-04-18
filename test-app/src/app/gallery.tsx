import React from 'react'
import Image from 'next/image'
import Nail1 from '../img/ongles/ong.jpeg'
import '../styles/onglerie.css'

export default function NailGallery() {
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
        {src: '/img/ongles/ong.jpeg'}
        // Ajoutez plus d'images selon le besoin
    ];

    return (
        <div className="section">
            <div className='container gallery w-container'>
                <h4 className="h4-gallerie">Gallerie</h4>
                <div className="w-dyn-list">
                    <div className="procedure-gallery-wrapper w-dyn-items">
                        {list.map((section, index) => (
                            <div className="gallery-item w-dyn-item w-dyn-repeater-item" key={index}>
                                <a className="gallery-light-box w-inline-block w-lightbox" href="#">
                                    <Image className="gallery-image" src={section.src} width="200" height="200" alt="Nail 1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

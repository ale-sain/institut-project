import React from 'react'
import Image from 'next/image'
import Nail1 from '../img/ongles/ong.jpeg'
import '../styles/gallery.css'

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

    return (
        <div className="section">
            <div className='container gallery w-container'>
                <h4 className="h4-gallerie">galerie</h4>
                <div className="w-dyn-list">
                    <div className="procedure-gallery-wrapper w-dyn-items">
                        {list.map((section, index) => (
                            <a className="gallery-light-box w-inline-block w-lightbox" href="#">
                                <Image className="gallery-image" src={section.src} width="205" height="205" alt="Nail Art"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

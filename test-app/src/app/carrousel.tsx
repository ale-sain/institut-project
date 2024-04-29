'use client'
import React, { useState, useEffect } from 'react';
import '../styles/carrousel.css'; // Assurez-vous que le CSS est correctement importé

interface PageProps {
    initialePosition: string; // Type changé à string obligatoire
  }

export default function Carrousel ({ initialePosition }: PageProps) {
    const imageUrls = [
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg'
    ];
    const initialIndex = imageUrls.indexOf(initialePosition);
    const [position, setPosition] = useState(initialIndex >= 0 ? initialIndex : 0);
    const nbr = imageUrls.length; // Utiliser la longueur dynamique de imageUrls
    const [width, setWidth] = useState(window.innerWidth > 1024 ? 600 : 300);
    
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 1024 ? 600 : 300);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const moveLeft = (e: any) => {
        if (position > 0) {
            setPosition(position - 1);
        }
        e.stopPropagation();
        console.log(position);
    };
    
    const moveRight = (e : any) => {
        if (position < nbr - 1) {
            setPosition(position + 1);
        }
        e.stopPropagation();
        console.log(position);
    };
    
    return ( 
        <>
        <div id="carrousel">
            <div id="container-carr" 
            style={{
              width: `${600 * nbr}px`,
              transform: `translate(-${position * width}px)`,
              transition: 'all 0.5s ease'
            }}>
                {imageUrls.map((url, index) => (
                  <div key={index} onClick={moveRight} className="photo" style={{ backgroundImage: `url(${url})` }} />
                  ))}
            </div>
        </div>
        <div className="left arrow" onClick={moveLeft} style={{ visibility: position === 0 ? 'hidden' : 'visible' }}>❮</div>
        <div className="right arrow" onClick={moveRight} style={{ visibility: position === nbr - 1 ? 'hidden' : 'visible' }}>❯</div>
        </>
    );
};

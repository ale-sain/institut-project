import React, { useState, useEffect } from 'react';
import '../styles/carrousel.css';

// Définir l'interface pour les props
interface CarrouselProps {
  initialePosition?: number;
}

// Composant avec l'application du type aux props
const Carrousel: React.FC<CarrouselProps> = ({ initialePosition = 0 }) => {
    const [position, setPosition] = useState<number>(initialePosition);
    const nbr = 32; // Nombre total d'images
    const [width, setWidth] = useState<number>(window.innerWidth > 1024 ? 600 : 300);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 1024 ? 600 : 300);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (position > 0) {
            setPosition(position - 1);
        }
        console.log(position);
    };

    const moveRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (position < nbr - 1) {
            setPosition(position + 1);
        }
        console.log(position);
    };
    
    const imageUrls = [
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

    return ( 
      <>
        <div id="carrousel">
            <div id="container-carr" 
            style={{
              width: `${600 * nbr}px`,
              transform: `translateX(-${position * width}px)`,
              transition: 'transform 0.5s ease'
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

export default Carrousel;


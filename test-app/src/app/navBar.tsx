'use client'
import React from 'react'
import '../styles/navbar.css'
import '../styles/nav-icon.css'
import smoothScrollTo from './scroll';

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleItemMouseEnter = (e : any) => {
        if (isOpen) return; 
        e.stopPropagation();
        document.querySelectorAll('.item').forEach(item => {
            if (item !== e.target) {
                item.classList.add('dim');
            } else {
                item.classList.remove('dim');
            }
        });
    };

    const handleMouseLeave = () => {
        if (isOpen) return; 
        document.querySelectorAll('.item').forEach(item => {
            item.classList.remove('dim');
        });
    };

    const handleCloseMenu = () => setIsOpen(false);

    const handleItemClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false); // Fermer la barre de navigation avant de commencer à défiler
        smoothScrollTo(targetId, handleCloseMenu);
    };

    return (
        <nav className="nav">
            <div className="outNav">
                <div className="bg"></div>
                <h1 className="title">Institut secrets de beauté</h1>
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'accueil')}>Accueil</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'epilation')}>Epilations</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'soin-visage')}>Soins du visage</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'soin-regard')}>Changez votre regard</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'reflexologie-plantaire')}>Réflexologie</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'onglerie')}>Onglerie</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'thalion')}>Thal&apos;ion</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleItemClick(e, 'contact')}>Contact</a>
                </div>
            </div>
        </nav>
        )
}

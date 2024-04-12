'use client'
import React from 'react'
import Link from 'next/link'
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

    // const smoothScrollTo = (targetId) => {
    //     const target = document.getElementById(targetId);
    //     if (!target) return;

    //     const startPosition = window.scrollY;
    //     const targetPosition = target.getBoundingClientRect().top;
    //     const distance = targetPosition;
    //     let startTime = null;

    //     const easeInOutQuint = (time, start, distance, duration) => {
    //         time /= duration / 2;
    //         if (time < 1) return (distance / 2) * time * time * time * time * time + start;
    //         time -= 2;
    //         return (distance / 2) * (time * time * time * time * time + 2) + start;
    //     };

    //     const animation = (currentTime) => {
    //         if (startTime === null) startTime = currentTime;
    //         const timeElapsed = currentTime - startTime;
    //         const duration = 1500; // Durée de l'animation en millisecondes
    //         const run = easeInOutQuint(timeElapsed, startPosition, distance, duration);

    //         window.scrollTo(0, run);
    //         if (timeElapsed < duration) requestAnimationFrame(animation);
    //     };

    //     requestAnimationFrame(animation);
    // };


    return (
        <nav className="nav">
            <div className="outNav">
                <div className="bg"></div>
                <h1 className="title">Institut secrets de beaute</h1>
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onMouseLeave={handleMouseLeave} onClick={(e) => { e.preventDefault(); smoothScrollTo('accueil'); }}>Accueil</a>
                    {/* <a className="item" href="#thalion" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => { e.preventDefault(); smoothScrollTo('thalion'); }}>Thal&apos;ion</a> */}
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => { e.preventDefault(); smoothScrollTo('epilation'); }}>Epilation</a>
                    <a className="item" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => { e.preventDefault(); smoothScrollTo('soin-visage'); }}>Soins du visage</a>
                    <Link className="item" href="/soinregard" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Soins du regard</Link>
                    <Link className="item" href="/reflexologie" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Reflexologie</Link>
                    <Link className="item" href="/onglerie" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Onglerie</Link>
                </div>
            </div>
        </nav>
        )

            {/* <ul>
                <li><a href="#prestations">Thal'ion</a></li>
                <li><a href="#epilation">Epilation</a></li>
                <li><a href="#soin">Soin du visage</a></li>
                <li><a href="#reflexologie">Reflexologie</a></li>
                <li><a href="#onglerie">Onglerie</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>  */}
}

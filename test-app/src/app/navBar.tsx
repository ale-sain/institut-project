'use client'
import React from 'react'
import Link from 'next/link'
import '../styles/navbar.css'
import '../styles/nav-icon.css'

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

    return (
        <nav className="navBar">
            <div className="outNav">
                <h1 className="title">Institut secret de beaute</h1>
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                    <div className={`menu ${isOpen ? 'open' : ''}`}>
                        <Link className="item" href="/" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Accueil</Link>
                        <Link className="item" href="/thalion" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Thal&apos;ion</Link>
                        <Link className="item" href="/epilation" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Epilation</Link>
                        <Link className="item" href="/soin" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Soins du visage</Link>
                        <Link className="item" href="/soinregard" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Soins du regard</Link>
                        <Link className="item" href="/reflexologie" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Reflexologie</Link>
                        <Link className="item" href="/onglerie" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleMouseLeave}>Onglerie</Link>
                    </div>
            </div>
        </nav>
        )

            {/* <ul>
                <li><a href="#thalion">Thal'ion</a></li>
                <li><a href="#epilation">Epilation</a></li>
                <li><a href="#soin">Soin du visage</a></li>
                <li><a href="#reflexologie">Reflexologie</a></li>
                <li><a href="#onglerie">Onglerie</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>  */}
}

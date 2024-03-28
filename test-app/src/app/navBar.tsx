'use client'
import React from 'react'
import Link from 'next/link'
import '../styles/navbar.css'

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navBar">
            <div className="outNav">
                <h1 className="title">Institut secret de beaute</h1>
                <div className="menuButton" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'X' : '☰'}
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <Link className="item" href="/">Accueil</Link>
                    <Link className="item" href="/thalion">Thal'ion</Link>
                    <Link className="item" href="/epilation">Epilation</Link>
                    <Link className="item" href="/soin">Soins du visage</Link>
                    <Link className="item" href="/soinregard">Soins du regard</Link>
                    <Link className="item" href="/reflexologie">Reflexologie</Link>
                    <Link className="item" href="/onglerie">Onglerie</Link>
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

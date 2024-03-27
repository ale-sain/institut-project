'use client'
import React from 'react'
import Link from 'next/link'
import style from './navBar.module.css'

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navBar">
            <h1 className="title">Institut secret de beaute</h1>
            {/* trasnform the following code in ul and li to div with Link*/}

            <div className="items">
                <Link className="item" href="/">Accueil</Link>
                <Link className={style.item} href="/thalion">Thal'ion</Link>
                <Link className={style.item} href="/epilation">Epilation</Link>
                <Link className={style.item} href="/soin">Soins du visage</Link>
                <Link className={style.item} href="/soinregard">Soins du regard</Link>
                <Link className={style.item} href="/reflexologie">Reflexologie</Link>
                <Link className={style.item} href="/onglerie">Onglerie</Link>
            </div>
            {/* <ul>
                <li><a href="#thalion">Thal'ion</a></li>
                <li><a href="#epilation">Epilation</a></li>
                <li><a href="#soin">Soin du visage</a></li>
                <li><a href="#reflexologie">Reflexologie</a></li>
                <li><a href="#onglerie">Onglerie</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>  */}
        </nav>
    )
}

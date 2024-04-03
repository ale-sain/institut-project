import React from 'react'
import Image from 'next/image'
import accueilPic from '../img/home.jpeg'
import '../styles/accueil.css'
import AccueilButton from './button-accueil'

export default function Accueil() {
  return (
    <>
        <div className="wrapper-accueil">
          <div className="nav">
            <a href="#" className="link">stabondar</a>
            <a href="#" className="link">fancy mode</a>
            <a href="#" className="link">menu</a>
          </div>
          <div className="about-container">
            <div className="about">
              <h1>Bienvenue dans le monde du bien etre</h1>
              <p>Situe en Bretagne sur la commune de Landevant dans le Morbihan, a 2 pas du centre bourg a l&apos;abri des regards</p>
            </div>
            <div className="wrapper-img">
                <Image src={accueilPic} alt="Home" />
                <AccueilButton />
            </div>
          </div>
        </div>
    </>
  )
}

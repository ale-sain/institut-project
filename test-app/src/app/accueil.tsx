import React from 'react'
import Image from 'next/image'
import accueilPic from '../img/home.jpeg'
import '../styles/accueil.css'
import AccueilButton from './button-accueil'
import NavBar from './navBar'
import '../styles/globals.css'

export default function Accueil() {
  return (
    <>
        <NavBar />
        <div className="section" id="accueil">
          <div className="container home w-container">
              <div className="grid">
                <div className="grid-item _60">
                  <div className="about">
                    <h1>Bienvenue dans le monde du bien etre</h1>
                    <p>Situe en Bretagne sur la commune de Landevant dans le Morbihan, a 2 pas du centre bourg a l&apos;abri des regards</p>
                  </div>
                </div>
                <div className="grid-item _40">
                  <div className="img-container">
                    <div className="img-wrapper">
                      <div className="box"></div>
                      <Image className="hero-img" src={accueilPic} alt="Home" />
                      <AccueilButton />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import accueilPic from '../img/home.jpeg'
import '../styles/accueil.css'
import AccueilButton from './button-accueil'
import RevealAnimation from './revealAnimation'

export default function Accueil() {
  return (
    <>
        <div className="wrapper-accueil">
          <div className="nav">
            <a href="#" className="link">stabondar</a>
            <a href="#" className="link">fancy mode</a>
            <a href="#" className="link">menu</a>
          </div>
          <div className="section">
            <div className="container home">
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
                        <Image className="hero-img" src={accueilPic} alt="Home" />
                        <AccueilButton />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

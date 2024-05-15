'use client'
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
                    <h1>Bienvenue dans le monde du bien être</h1>
                    <p>Situé en Bretagne sur la commune de <strong>Landévant</strong> dans le Morbihan, à 2 pas du centre bourg à l&apos;abri des regards.</p>
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

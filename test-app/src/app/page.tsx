'use client'
import React from 'react'
import Accueil from './accueil'
import RevealAnimation from './revealAnimation'
import '../styles/revealAnimation.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import PostAccueilText from './post-accueil-text'
import Prestations from './prestations'
// import ListEpilation from './list-epil'
import Epilations from './epilation'
import '../styles/list-epil.css'
import SoinVisage from './soin-visage'
import Thalion from './thalion'
import ReflexologiePlantaire from './reflexo-1'
import ReflexopSpeech from './reflexo-2'
import ReflexoCranienne from './reflexo-cr'
import Onglerie from './onglerie'
// import NailGallery from './gallery'
// import Carrousel from './test/page'
import Footer from './footer'
import SoinRegard from './soin-regard'

export default function Home() {
  useEffect(() => {
    requestAnimationFrame(() => {
    gsap.to(".block", {
      duration: 0.6,
      width: 'calc(6% - 1px)',
      ease: "power1.in",
      delay: 1.6,
      stagger: 0.03
    });

    gsap.to(".loader", {
      duration: 1,
      x: 2,
      opacity: 0,
      ease: "expo.inOut",
      delay: 1.2,
    });

      gsap.to(".box", {
        duration: 0.1,
        opacity: 1,
        ease: "expo.inOut",
        delay: 2.6,
      });

      gsap.to("img", {
        duration: 0.1,
        opacity: 1,
        ease: "expo.inOut",
        delay: 2.8,
      });

      gsap.to(".box", {
        duration: 1.8,
        y: "-100%",
        ease: "expo.inOut",
        delay: 2.8,
      });

      gsap.fromTo(".nav, .about p, .about h1, .button", 
      { opacity: 0, y: 30 },
      { duration: 2, opacity: 10, y: 0, ease: "expo.inOut", delay: 1.8, stagger: 0.06 } // État d'arrivée
      );

      gsap.fromTo(".button-container.right", 
      { opacity: 0 }, 
      { duration: 1, opacity: 1, ease: "expo.inOut", delay: 0.5 }
      );
    });
}, []);

  return (
    <div className="wrapper">
      <div className="wrapper-accueil">
        <Accueil />
        <RevealAnimation />
        <PostAccueilText />
        <Prestations />
        <Epilations />
        <SoinVisage />
        <SoinRegard />
        <ReflexologiePlantaire />
        <ReflexopSpeech />
        <ReflexoCranienne />
        <Onglerie />
        <Thalion />
        <Footer />
      </div>
    </div>
   )
}

'use client'
import React from 'react'
import Accueil from './accueil'
import RevealAnimation from './revealAnimation'
import '../styles/revealAnimation.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import PostAccueilText from './post-accueil-text'
import Prestations from './prestations'
import ListEpilation from './list-epil'
import Epilations from './epilation'
import '../styles/list-epil.css'
import SoinVisage from './soin-visage'
import Thalion from './thalion'
import ReflexologiePlantaire from './reflexo-1'

export default function Home() {
  useEffect(() => {
//     gsap.to(".block", {
//       duration: 0.6,
//       width: "5%",
//       ease: "power1.in",
//       delay: 1.6,
//       stagger: 0.03
//     });

//     gsap.to(".loader", {
//       duration: 1,
//       x: 2,
//       opacity: 0,
//       ease: "expo.inOut",
//       delay: 1.2,
//     });

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

//       gsap.fromTo(".nav, .about p, .about h1, .button", 
//       { opacity: 0, y: 30 },
//       { duration: 2, opacity: 1, y: 0, ease: "expo.inOut", delay: 1.8, stagger: 0.06 } // État d'arrivée
//     );
}, []);

  return (
    <div className="wrapper">
      <div className="wrapper-accueil">
        <Accueil />
        {/* <RevealAnimation /> */}
        <PostAccueilText />
        <Prestations />
        <Epilations />
        <SoinVisage />
        <ReflexologiePlantaire />
        <Thalion />
      </div>
    </div>
   )
}

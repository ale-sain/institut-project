'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/revealAnimation.css';

export default function RevealAnimation() {
    useEffect(() => {
        gsap.to(".block", {
          duration: 0.8,
          width: "5%",
          ease: "power1.in",
          delay: 2,
          stagger: 0.04
        });
    
        gsap.to(".loader", {
          duration: 1,
          x: 2,
          opacity: 0,
          ease: "expo.inOut",
          delay: 1.6,
        });
    }, []);

  return (
    <div className="container">
        <div className="loader">loading</div>
            <div className="overlay">
            <div className="block block-1"></div>
            <div className="block block-2"></div>
            <div className="block block-3"></div>
            <div className="block block-4"></div>
            <div className="block block-5"></div>
            <div className="block block-6"></div>
            <div className="block block-7"></div>
            <div className="block block-8"></div>
            <div className="block block-9"></div>
            <div className="block block-10"></div>
            <div className="block block-11"></div>
            <div className="block block-12"></div>
            <div className="block block-13"></div>
            <div className="block block-14"></div>
            <div className="block block-15"></div>
            <div className="block block-16"></div>
            <div className="block block-17"></div>
            <div className="block block-18"></div>
            <div className="block block-19"></div>
            <div className="block block-20"></div>
    </div>
  </div>
  )
}

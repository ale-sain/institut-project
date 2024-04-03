'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './test.css'; 

function BlockRevealAnimation() {
  // useEffect(() => {
  //   // Utilisation de la syntaxe GSAP 3 pour les animations en série (stagger)
  //   gsap.from(".block", {
  //     duration: 0.8,
  //     width: "0%",
  //     ease: "power1.in",
  //     delay: 2,
  //     stagger: 0.04 // Ici, on applique un décalage en série
  //   });

  //   gsap.to(".loader", {
  //     duration: 1,
  //     x: 2,
  //     opacity: 0,
  //     ease: "expo.inOut",
  //     delay: 1.6,
  //   });

  //   gsap.from(".nav > a, .about p, .sub-header > a", {
  //     duration: 2,
  //     opacity: 0,
  //     y: 30,
  //     ease: "expo.inOut",
  //     delay: 3,
  //     stagger: 0.06 // Décalage en série ici aussi
  //   });

  //   gsap.to(".box", {
  //     duration: 0.2,
  //     opacity: 1,
  //     ease: "expo.inOut",
  //     delay: 3.8,
  //   });

  //   gsap.to("img", {
  //     duration: 0.2,
  //     opacity: 1,
  //     ease: "expo.inOut",
  //     delay: 4,
  //   });

  //   gsap.to(".box", {
  //     duration: 2.4,
  //     y: "-100%",
  //     ease: "expo.inOut",
  //     delay: 4,
  //   });
  // }, []);

  return (
    <>
    <div className="wrapper">
        <div className="nav">
          <a href="#" className="link">stabondar</a>
          <a href="#" className="link">fancy mode</a>
          <a href="#" className="link">menu</a>
        </div>
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia repellendus facilis provident nostrum nam totam dolor nemo, officiis molestiae amet debitis ut modi error quam eos earum alias ad.
          </p>
        </div>
        <div className="wrapper-img">
          <div className="box"></div>
          <div>
            <img
              className="image"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80"
              alt="Unsplash"
            />
          </div>
        </div>
        <div className="sub-header">
          <a href="#" className="contact-link">&#8618; want to work with me</a>
          <a href="#" className="work-link">my portfolio</a>
          <a href="#" className="work-link">awards</a>
          <a href="#" className="aboutme">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque amet aut sit. Beatae, nesciunt eum tenetur totam unde hic?
          </a>
        </div>
      </div>
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
    </>
  );
}

export default BlockRevealAnimation;

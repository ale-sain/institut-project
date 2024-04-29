'use client'
import React from 'react'
import '../styles/thalion.css'
import Image from 'next/image'
import AlguesImg from '../img/l.png'

export default function BigThalion() {
  return (
        // <div className="section-t">
        <>
            <div className="grid-t">
                <div className="grid-item-t left">
                    <div className="wrapper-wrapper-t">
                        <span className="img-wrapper-t">
                            {/* <Image 
                                className="image-thalion" 
                                src={AlguesImg} 
                                alt="thalion algues" 
                                width="600" 
                                height="800"
                                placeholder="blur"
                            /> */}
                        </span>              
                    </div>
                </div>
                <div className="grid-item-t right">
                    <div className="container-title">
                        <div className="wrapper-t">
                            <h2 className="h2-thalion">Thal&apos;ion : la réponse beauté, née au coeur des algues</h2>
                        </div>
                    </div>
                    <div className="container-text">	
                        <div className="wrapper-t paragraph grey">
                            <p className="p-thalion">
                                Equilibrée par nature, la mer est un jardin extraordinaire où nous retrouvons notre mémoire et notre histoire.
                                Puissant milieu de vie, la mer est une merveille thérapeutique : réhydratation, régularisation ionique, recalcification, augmentation des échanges métaboliques, stimulation des défenses de l&apos;organisme.
                                <br></br>Implantée au coeur de la Mer d&apos;Iroise, THAL&apos;ION bénéficie des meilleures algues et des meilleurs lieux de récolte afin d&apos;en extraire les actifs les plus performants.
                                <br></br>Les algues marines puisent dans l&apos;eau de mer leurs éléments nourriciers et développent des substances spécifiques aux propriétés extraordinaires.
                                <br></br>Il existe une affinité particulière entre nos cellules et le milieu marin originel.
                                <br></br>Spécialiste de la Cosmétique Marine THAL&apos;ION est distribuée dans plus de 45 pays et compte parmi ses clients les centres de thalassothérapie les plus prestigieux.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-line">
                <div className="container-line">
                    <div className="wrapper-line">
                        <div className="line"></div>
                    </div>
                </div>
            </div> 
            </>
        // </div>
  )
}
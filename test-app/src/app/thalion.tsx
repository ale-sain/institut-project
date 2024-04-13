import React from 'react'
import AlguesImg from '../img/algues.jpg'
import ExcellenceImg from '../img/excellencethalion.jpeg'
import Image from 'next/image'
import '../styles/thalion.css'

export default function Thalion() {
  return (
    <div id="thalion" className="section triplets">
        <div className="two-images-wrapper">
            <div className="big-img">
                <Image src={AlguesImg} alt="water" className="parallx-img" />
            </div>
            <div className="small-img opposite">
                <Image src={ExcellenceImg} alt="excellence" className="parallx-img" />
            </div>
            <div className="center-block thalion">
                <div className="center-content-wrapper thalion">
                    <h3 className="h3-thalion">Thal&apos;ion : la reponse beauté, née au coeur des algues</h3>
                    <p className="p-thalion">
                        Equilibrée par nature, la mer est un jardin extraordinaire où nous retrouvons notre mémoire et notre histoire. <br></br>
                        Elle est à la base de la Thalassothérapie définie comme une exploitation à des fins thérapeutiques des vertus curatives de l&apos;eau de mer, des algues, de l&apos;air et du climat marin. <br></br>
                        <br></br>Implantée au coeur de la Mer d&apos;Iroise, THAL&apos;ION bénéficie des meilleures algues et des meilleurs lieux de récolte afin d&apos;en extraire les actifs les plus performants.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

'use client'
import React from "react"
import ListPrestation from "./list-presta"
import '../styles/prestations.css'
import Image from 'next/image'
import TeteImg from '../img/sourire.jpeg'

export default function Prestations() {
  return (
    <>
      <div className="section" id="prestations">
        <div className="container w-container">
          <div className="grid">
            <div className="grid-item _50">
              <div className="presta-left-wrapper">
                <div className="decorative">Soins</div>
                <h2>Les prestations</h2>
                <p className="paragraph grey">
                  Echappez-vous du quotidien, venez prendre soin de vous...
                </p>
                <ListPrestation />
              </div>
            </div>
            <div className="grid-item _50">
              <div className="presta-img-wrapper">
                <Image className="img-presta" src={TeteImg} alt="Head woman"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

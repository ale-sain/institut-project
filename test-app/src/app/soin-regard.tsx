'use client'
import React from 'react'
import ListEpilation from './list-epil'
import Image from 'next/image'
import eyesImg from '../img/eyess.gif'
import '../styles/regard.css'

export default function SoinRegard() {
    const soinsRegard = [
        { titre: 'TEINTURE DES CILS OU SOURCILS', prix: '15€' },
        { titre: 'REHAUSSEMENT DES CILS', prix: '40€' },
    ];

  return (
    <>
    <div className="section">
      <div className="container w-container" id="soin-regard">
        <div className="grid">
          <div className="grid-item _50">
            <div className="presta-right-wrapper regard">
              <div className="decorative">Jusqu'au bout des cils</div>
              <h2>Changez votre regard</h2>
              <ListEpilation list={soinsRegard} />
            </div>
          </div>
          <div className="grid-item _50 regard">
            <div className="presta-img-wrapper soin regard">
              <Image className="img-soin regard" src={eyesImg} alt="Eyes woman" unoptimized={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

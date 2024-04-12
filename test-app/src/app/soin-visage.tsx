import React from 'react'
import ListSoin from './list-soin'
import TowelImg from '../img/towels.jpeg'
import Image from 'next/image'

export default function SoinVisage() {
    const soins = [
        { titre: 'LE PURIFIANT JUNIOR', duree: '20 min', prix: '38€' },
        { titre: 'LE SPECIFIQUE PERSONNALISE', duree: '20 min', prix: '55€' },
        { titre: 'LE COCOONING', duree: '20 min', prix: '60€' },
        { titre: 'LE NUTRITION JEUNESSE', duree: '20 min', prix: '60€' },
        { titre: 'LE MAGNIFIQUE', duree: '20 min', prix: '60€' },
        { titre: 'L\'HYDRA MINERAL', duree: '20 min', prix: '60€' },
        { titre: 'L\'ALGO CALM', duree: '20 min', prix: '60€' },
        { titre: 'L\'ALGO ENERGIE', duree: '20 min', prix: '60€' },
        { titre: 'RENOUVEAU CELLULAIRE', duree: '20 min', prix: '65€' },
        { titre: 'LE MAGIQUE LIFT FERMETE', duree: '20 min', prix: '65€' },
    ];

  return (
    <>
    <div className="section">
      <div className="container w-container">
        <div className="grid">
          <div className="grid-item _50">
            <div className="presta-img-wrapper soin">
              <Image className="img-soin" src={TowelImg} alt="Head woman"/>
            </div>
          </div>
          <div id="soin-visage" className="grid-item _50">
            <div className="presta-right-wrapper">
              <div className="decorative">Bien plus qu'un soin, une evasion</div>
              <h2>Soins du visage</h2>
              <p className="paragraph grey">
                Ici c'est different, c'est unique...
              </p>
              <ListSoin list={soins} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

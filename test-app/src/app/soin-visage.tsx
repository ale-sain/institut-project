'use client'
import React from 'react'
import ListSoin from './list-soin'
import TowelImg from '../img/towels.jpeg'
import Image from 'next/image'

export default function SoinVisage() {
    const soins = [
        { titre: 'LE PURIFIANT JUNIOR', duree: '20 min', prix: '38€', description : 'Parce qu\'on a - de 20 ans et que c\'est pénible les boutons !' },
        { titre: 'LE SPECIFIQUE PERSONNALISE', duree: '20 min', prix: '55€', description : 'Parce qu\'on a pas tous la même peau…' },
        { titre: 'LE COCOONING', duree: '20 min', prix: '60€', description : 'Nuageux, voluptueux…' },
        { titre: 'LE NUTRITION JEUNESSE', duree: '20 min', prix: '60€', description : 'Soin du visage pour réparer et nourrir les peaux sèches. Son thermomasque comble la peau d\'actifs ultra concentrés et procure une relaxation grâce à son effet chauffant. La peau est protégée, repulpée et confortable.' },
        { titre: 'LE MAGNIFIQUE', duree: '20 min', prix: '60€', description : 'Une peau incroyablement belle…' },
        { titre: 'L\'HYDRA MINERAL', duree: '20 min', prix: '60€', description : 'Désaltère et repulpe l\'épiderme. Il redonne vie aux peaux les plus déshydratées et dévitalisées.' },
        { titre: 'L\'ALGO CALM', duree: '20 min', prix: '60€', description : 'Calme, apaise et réconforte les peaux fragiles et sensibles.' },
        { titre: 'L\'ALGO ENERGIE', duree: '20 min', prix: '60€', description : 'Réveille l\'éclat du teint, apporte un shot d\'énergie, détoxifie la peau, renforce la fonction barrière.' },
        { titre: 'RENOUVEAU CELLULAIRE', duree: '20 min', prix: '65€', description : 'Offrez de la lumière à votre visage…' },
        { titre: 'LE MAGIQUE LIFT FERMETE', duree: '20 min', prix: '65€', description : 'Soin raffermissant, au Collagène 72, actif breveté issue de l\'algue Calliblepharis jubata, véritable booster de synthèse de collagène. Ce soin inédit à effet chaud-froid dont le masque change de couleur naturellement redessine les contours du visage, il retend les traits et lutte contre le relâchement cutanée. Votre peau retrouve sa souplesse et sa tonicité.' },
    ];

  return (
    <>
    <div className="section" id="soin-visage">
      <div className="container w-container">
        <div className="grid reverse">
          <div className="grid-item _50">
            <div className="presta-img-wrapper soin">
              <Image className="img-soin" src={TowelImg} alt="Head woman"/>
            </div>
          </div>
          <div className="grid-item _50">
            <div className="presta-right-wrapper">
              <div className="decorative">Bien plus qu&apos;un soin, une evasion</div>
              <h2>Soins du visage</h2>
              <p className="paragraph grey">
                Ici c&apos;est different, c&apos;est unique...
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

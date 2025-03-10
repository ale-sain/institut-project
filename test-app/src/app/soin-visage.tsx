'use client'
import React from 'react'
import ListSoin from './list-soin'
import TowelImg from '../img/towels.jpeg'
import Image from 'next/image'

export default function SoinVisage() {
    const soins = [
      { titre: 'LE PURIFIANT JUNIOR', duree: '40 min', prix: '40€', description : 'Parce qu\'on a - de 20 ans et que c\'est pénible les boutons !' },
      { titre: 'LE RELAX MINUTE', duree: '30 min', prix: '35€', description : 'Une parenthèse express pour libérer les tensions et sublimer la peau' },
      { titre: 'LE SPECIFIQUE PERSONNALISE', duree: '1 heure', prix: '58€', description : 'Parce qu\'on a pas tous la même peau… \nBesoin d\'hydratation, de nutrition, de douceur ou de pureté ? Après un diagnostic professionnel de votre peau, les produits seront adaptés aux problèmes de votre peau. Gommage, masque et massage se succèdent pour sublimer votre peau. Elle est radieuse de fraîcheur et de beauté.' },
      { titre: 'LE COCOONING', duree: '1 heure', prix: '65€', description : 'Nuageux, voluptueux…\nUn véritable bain de nutrition pour un maximum d\'éclat. Laissez-vous envoûter par l\'immortelle des mers' },
      { titre: 'L\'HYDRA MINERAL', duree: '1 heure', prix: '65€', description : 'Désaltère et repulpe l\'épiderme. Il redonne vie aux peaux les plus déshydratées et dévitalisées.\nUn confort exceptionnel' },
      { titre: 'L\'ALGO CALM', duree: '1 heure', prix: '65€', description : 'Calme, apaise et réconforte les peaux fragiles et sensibles.\nLa peau retrouve son équilibre et révèle sa beauté.' },
      { titre: 'L\'ALGO ENERGIE', duree: '1 heure', prix: '65€', description : 'Réveille l\'éclat du teint, apporte un shot d\'énergie, détoxifie la peau, renforce la fonction barrière.\nIdéal pour les peaux fatiguées\nLa peau est plus lumineuse, plus fraîche et revitalisée' },
      { titre: 'LE RENOUVEAU CELLULAIRE', duree: '1 heure', prix: '65€', description : 'Offrez de la lumière à votre visage…\nSoin ressurfaçant, spécialement conçu pour les peaux ternes et atones, riche en AHA marins et enzymes. Il stimule intensément le renouvellement cellulaire pour un effet « peau neuve ». Hydratée, nourrie, éclatante, rides et ridules estompées. L\'effet lumière est étonnant.' },
      { titre: 'LE MAGIQUE LIFT FERMETE', duree: '1 heure', prix: '65€', description : 'Soin raffermissant, au Collagène 72, actif breveté issue de l\'algue Calliblepharis jubata, véritable booster de synthèse de collagène. Ce soin inédit à effet chaud-froid dont le masque change de couleur naturellement redessine les contours du visage, il retend les traits et lutte contre le relâchement cutanée. Votre peau retrouve sa souplesse et sa tonicité.' },
  ];

  return (
    <>
    <div className="section" id="soin-visage">
      <div className="container w-container">
        <div className="grid reverse">
          <div className="grid-item _50 soin visage">
            <div className="presta-img-wrapper soin visage">
              <Image className="img-soin" src={TowelImg} alt="Head woman"/>
            </div>
          </div>
          <div className="grid-item _50">
            <div className="presta-right-wrapper">
              <div className="decorative">Bien plus qu&apos;un soin, une évasion</div>
              <h2>Soins du visage</h2>
              <p className="paragraph grey">
                Ici c&apos;est différent, c&apos;est unique...
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

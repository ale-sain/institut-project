import React from 'react'
import ListEpilation from './list-epil'
import ShavedLegs from '../img/shavedlegs.jpg'
import Image from 'next/image'

export default function Epilations() {
    const epilations = [
        { titre: 'Sourcils', prix: '10€' },
        { titre: 'Lèvre ou menton', prix: '9€' },
        { titre: 'Lèvre et menton', prix: '13€' },
        { titre: 'Lèvre et sourcils', prix: '14€' },
        { titre: 'Visage', prix: '17€' },
        { titre: 'Visage + joues', prix: '22€' },
        { titre: 'Aisselles', prix: '14€' },
        { titre: 'Maillot Classique ou Brésilien', prix: '17€' },
        { titre: 'Maillot Intégral', prix: '23€' },
        { titre: '1/2 Jambes', prix: '18€' },
        { titre: 'Jambes complètes', prix: '26€' },
        { titre: '3/4 Jambes', prix: '23€' },
        { titre: 'Cuisses', prix: '18€' },
        { titre: 'Arrière Cuisses', prix: '8€' },
        { titre: 'Dos ou Torse', prix: '22€' },
        { titre: 'Cou', prix: '9€' },
        { titre: 'Bras', prix: '18€' },
        { titre: 'Bande Supp.', prix: '5€' },
    ];

    const forfaits = [
        { titre: 'Jamb compl. + Maillot classique ou échancré + Aisselles', prix: '45€' },
        { titre: 'Jamb compl. + Maillot classique ou échancré OU Aisselles', prix: '37€' },
        { titre: '1/2 jambes + Maillot classique ou échancré + Aisselles', prix: '36€' },
        { titre: '1/2 Jambes + Maillot classique ou échancré OU Aisselles', prix: '29€' },
        { titre: 'Maillot Int. +8€', prix: '8€' },
        { titre: 'Maillot Classique ou Brésilien + Aisselles', prix: '25€' },
        { titre: 'Maillot Int. + Aisselles', prix: '31€' },
        { titre: 'Torse + Dos', prix: '40€' },
    ];

  return (
    <>
      <div className="section epil">
        <div className="ban-epil"></div>
        <div id="epilation" className="container w-container">
        <div className="decorative">Prenez soin de vous</div>
            <h2>Epilations</h2>
            <p className="paragraph grey">
                Des sourcils au maillot integral, en passant par le dos ou les jambes, toutes les epilations sont effectuees avec des cires adaptees a la zone
            </p>
            <div className="grid">
                <div className="grid-item _50">
                    <div className="presta-left-wrapper">
                        <h4>Tarifs</h4>
                        <ListEpilation list={epilations}/>
                    </div>
                </div>
                <div className="grid-item _50">
                    <h4>Forfaits</h4>
                    <ListEpilation list={forfaits}/> {/* see if need presta-right-wrapper */}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

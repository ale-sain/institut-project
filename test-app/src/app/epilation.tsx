'use client'
import React, { useState, useEffect } from 'react'
import ListEpilation from './list-epil'
import { useWindowSize } from 'react-use'

export default function Epilations() {
    const [isClient, setIsClient] = useState(false);
    const { width } = useWindowSize();
  
    useEffect(() => {
      setIsClient(true); // Une fois le composant monté, setIsClient sera vrai.
    }, []);
  
    if (!isClient) {
      return <div>Loading...</div>; // Ou un autre placeholder approprié pendant le chargement.
    }
  
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
        {width > 1024 && <div className="ban-epil"></div>}
        <div id="epilation" className="container w-container">
        <div className="decorative">Prenez soin de vous</div>
            <h2>Epilations</h2>
            <p className="paragraph grey">
                Des sourcils au maillot intégral, en passant par le dos ou les jambes, toutes les épilations sont effectuées avec des cires adaptées à la zone
            </p>
            <div className="grid">
                <div className="grid-item _50">
                    <div className="presta-left-wrapper epil">
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
        {width <= 1024 && <div className="ban-epil"></div>}
      </div>
    </>
  )
}

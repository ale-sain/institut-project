import React from 'react'
import Image from 'next/image'
import OngleImg from '../img/ongles/ongle.jpeg'
import '../styles/onglerie.css'
import ListEpilation from './list-epil'
import NailGallery from './gallery'

export default function Onglerie() {
    const tarifsMains = [
      { titre: 'Couleur', prix: '42€' },
      { titre: 'French', prix: '48€' },
      { titre: 'Babyboomer', prix: '48€' },
      { titre: 'Strass x 1', prix: '+1€' },
      { titre: 'Forfait déco.', prix: '+5€' },
      { titre: 'Forfait paillettes', prix: '+3€' },
      { titre: 'Réparation ongle cassé', prix: '+4€' },
      { titre: 'Dépose complète avec soin', prix: '25€' },
      { titre: 'Dépose ext.', prix: '+10€' },
      { titre: 'Manucure classique + pose de vernis classique', prix: '30€' },
      { titre: 'Manucure classique + pose de vernis longue durée', prix: '32€' },
  ];

  const tarifsPieds = [
      { titre: 'Pédicure + French ou Couleur', prix: '40€' },
      { titre: 'Pédicure classique + vernis', prix: '30€' },
      { titre: 'Soin Anti-Calosités + French ou Couleur', prix: '55€' },
      { titre: 'Soin Anti-Calosités avec ou sans vernis', prix: '46€' },
  ];

  return (
    <>
    <div className="section" id="onglerie">
      <div className="container w-container">
        <div className="grid">
          <div className="grid-item _50 onglerie">
            <div className="presta-right-wrapper onglerie">
                <div className="decorative">Jusqu&apos;au bout des doigts</div>
                <h2>Onglerie</h2>
                <div className="wrapper-question onglerie">
                    <p className="paragraph grey rfc">
                        J&apos;utilise CALGEL, un gel organique qui n&apos;affecte pas le métabolisme de l&apos;ongle :
                    </p>
                    <ul className="p-block">
                        <li className="list-item rfc">Il donne un aspect fin et naturel à vos ongles</li>
                        <li className="list-item rfc">Il est flexible, résistant et solide</li>
                    </ul>
                    <p className="paragraph grey rfc">
                        <br></br>Ici pas de ponceuse, pas d&apos;acide, pas d&apos;acrylique !
                    </p>
                </div>
                <div className="wrapper-question onglerie">
                    <p className="paragraph grey rfc">
                    Sublimez vos mains en renforçant vos ongles.
                    </p>
                    <ul className="p-block">
                        <li className="list-item rfc">Ils sont fragiles, dédoublés, mous, cassants…</li>
                        <li className="list-item rfc">Vous souhaitez être belle jusqu&apos;aux bouts des ongles et durablement…</li>
                        <li className="list-item rfc">Vous souhaitez vous faire plaisir pour une occasion particulière…</li>
                    </ul>
                </div>
                <p className="paragraph grey onglerie">
                   Avec CALGEL, le gel incontournable des prothésistes ongulaires, découvrez la qualité professionnelle par excellence.
                  <br></br>Essayez le et vous ne pourrez plus vous en passer !
                </p>
            </div>
          </div>
          <div className="grid-item _50 onglerie">
            <div className="presta-img-wrapper soin onglerie">
              <Image className="img-onglerie" src={OngleImg} alt="Nails hand image"/>
            </div>
          </div>
        </div>
        <div className="grid onglerie2">
            <div className="grid-item _50">
                <div className="presta-left-wrapper epil">
                    <h4 className="h4-onglerie">Tarifs mains</h4>
                    <ListEpilation list={tarifsMains}/>
                </div>
            </div>
            <div className="grid-item _50">
                <h4 className="h4-onglerie">Tarifs pieds</h4>
                <ListEpilation list={tarifsPieds}/> {/* see if need presta-right-wrapper */}
            </div>
        </div>
      </div>
      <NailGallery />
    </div>
  </>
  );
}


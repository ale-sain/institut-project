import React from 'react'
import Image from 'next/image'
import OngleImg from '../img/ongles/ongle.jpeg'
import '../styles/onglerie.css'
import ListEpilation from './list-epil'
import NailGallery from './gallery'

export default function Onglerie() {
    const tarifsMains = [
        { titre: 'Renforcement (transparent)', prix: '37€' },
        { titre: 'Gel Couleur', prix: '39€' },
        { titre: 'Gel French', prix: '44€' },
        { titre: 'Gel Babyboomer', prix: '44€' },
        { titre: 'Ongle décoré', prix: '1€' },
        { titre: 'Forfait déco.', prix: '5€' },
        { titre: 'Réparation ongle cassé', prix: '4€' },
        { titre: 'Dépose complète avec soin', prix: '20€' },
        { titre: 'Manucure classique + pose de vernis', prix: '25€' },
    ];

    const tarifsPieds = [
        { titre: 'Gel French ou Gel Couleur', prix: '38€' },
        { titre: 'Soin Yumi Feet (anti-Calosités) + pédicure + gel french ou couleur', prix: '50€' },
        { titre: 'Soin Yumi Feet (anti-calosités) + pédicure avec ou sans vernis', prix: '40€' },
    ];

  return (
    <>
    <div className="section" id="onglerie">
      <div className="container w-container">
        <div className="grid">
          <div className="grid-item _50 onglerie">
            <div className="presta-right-wrapper onglerie">
                <div className="decorative">Jusqu'au bout des doigts</div>
                <h2>Onglerie</h2>
                <div className="wrapper-question onglerie">
                    <p className="paragraph grey rfc">
                        J'utilise un gel organique qui n'affecte pas le metabolisme de l'ongle :
                    </p>
                    <ul className="p-block">
                        <li className="list-item rfc">Il donne un aspect fin et naturel à vos ongles</li>
                        <li className="list-item rfc">Il est flexible, résistant et solide</li>
                    </ul>
                    <p className="paragraph grey rfc">
                        Ici pas de ponceuse !
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
                    ESSAYEZ LA <strong>POSE D'ONGLES EN GEL !</strong>
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


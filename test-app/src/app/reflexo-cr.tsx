import React from 'react'
import Image from 'next/image'
import TeteImg from '../img/mcranien4.png'
import '../styles/reflexoc.css'

export default function ReflexoCranienne() {
    return (<>
    <div className="section">
      <div className="container w-container">
        <div className="grid">
          <div className="grid-item _50">
            <div className="presta-img-wrapper soin rfc">
              <Image className="img-reflexoc" src={TeteImg} alt="Head cranial reflexology woman"/>
            </div>
          </div>
          <div className="grid-item _50">
            <div className="presta-right-wrapper rfc">
              <div className="decorative rfc">Lacher le mental</div>
              <h2 className="h2-rfc">Reflexologie cranienne</h2>
              <div className="specialist-link-wrapper reflexop rfc">1 HEURE, 55$</div>
              <div className="wrapper-question">
                <p className="paragraph grey rfc">
                    Dans quel cas utiliser la méthode Access Bars ?
                </p>
                <ul className="p-block">
                    <li className="list-item rfc">lorsque des idées fixes nous empêchent d&apos;avancer dans la vie</li>
                    <li className="list-item rfc">lorsqu&apos;on se sent trop étriqué par des pensées limitées et que l&apos;on a besoin d&apos;espace</li>
                    <li className="list-item rfc">lorsqu&apos;on a besoin de se détendre</li>
                    <li className="list-item rfc">lorsqu&apos;on veut enfin nettoyer ses anciens schémas : son disque dur</li>
                </ul>
              </div>
              <div className="wrapper-question">
                <p className="paragraph grey rfc">Comment ça marche ?</p>
                <p className="paragraph grey rfc p-block">32 points sur la tête sont touchés en douceur mettant en relation les Bars (activation de points symétriques). Une RELAXATION INTENSE libère la charge électromagnétique qui maintient en place les pensées, considérations, conclusions, attitudes, émotions et sentiments que vous avez accumulés et qui vous limitent dans différents domaines.</p>
              </div>
              <div className="wrapper-question">
                <p className="paragraph grey rfc">
                    Les résultats ?
                </p>
                <ul className="p-block">
                    <li className="list-item rfc">lâcher prise immédiat incomparable</li>
                    <li className="list-item rfc">détente</li>
                    <li className="list-item rfc">libération des points de vue limitatifs avec une aisance totale</li>
                    <li className="list-item rfc">réduit stress, inquiétude, excès de pensées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

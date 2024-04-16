import React from 'react'
import Image from 'next/image'
import FootImg from '../img/footdraw.jpg'
import '../styles/reflexop-2.css'

export default function ReflexopSpeech() {
  return (
    <>
    <div className="section speech">
      <div className="container w-container speech">
        <div className="grid reverse speech">
          <div className="grid-item _50 speech left">
            <div className="presta-left-wrapper speech">
              <div className="miniwraper">
                <div className="decorative">Softness</div>
                <h2 className="h2-speech">A propos de la réflexologie...</h2>
              </div>
              <p className="paragraph speech">
                Je suis réflexologue depuis 13 ans (déja !) et j'ai été formée a l'école de réflexologie de Bretagne en 2010. 
                <br></br><br></br>C'est un art qui se fait avec passion et un don de soi.
                <br></br>C'est une thérapie qui m'émeut a chaque séance car il n'y a rien de plus beau qu'une personne qui vous dit "merci pour ce moment" a la fin de la séance...
              </p>
            </div>
          </div>
          <div className="grid-item _50 speech right">
            <div className="presta-img-wrapper speech">
              <Image className="img-presta" src={FootImg} alt="Foot drawing"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

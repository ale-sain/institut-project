'use client'
import React from 'react'
import PiedImg from '../img/pied2.jpg'
import ReflexoImg from '../img/pied30.jpeg'
import Image from 'next/image'
import '../styles/reflexop-1.css'

export default function ReflexologiePlantaire() {
  return (
    <>
    <div className="container w-container reflexop" id="reflexologie-plantaire">
        <div className="grid">
            <div className="grid-item _50 reflexop">
                <div className="presta-right-wrapper reflexop">
                    <div className="decorative">À essayer au moins une fois...</div>
                    <h2>Réflexologie plantaire</h2>
                    <div className="specialist-link-wrapper reflexop">
                        1 HEURE, 60€
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section triplets">
    <div className="two-images-wrapper">
        <div className="big-img">
            <Image src={PiedImg} alt="water" className="parallx-img" />
        </div>
        <div className="small-img opposite">
            <Image src={ReflexoImg} alt="excellence" className="parallx-img" />
        </div>
        <div className="center-block reflexop">
            <div className="center-content-wrapper reflexop">
                    <h3 className="h3-reflexop">Le bonheur est dans les pieds</h3>
                    <p className="p-reflexop">
                        C&apos;est un moyen naturel qui stimule et équilibre l&apos;organisme. <br></br>
                        C&apos;est une thérapie qui consiste à traiter différents troubles par des pressions sur les pieds.<br></br>
                        <br></br>Résultats : <br></br>
                        &emsp;&emsp;- &nbsp;Soulage les tensions<br></br>
                        &emsp;&emsp;- &nbsp;Elimine les toxines<br></br>
                        &emsp;&emsp;- &nbsp;Libère le stress<br></br>
                        &emsp;&emsp;- &nbsp;Améliore la circulation sanguine<br></br>
                        &emsp;&emsp;- &nbsp;Rétablit l&apos;équilibre<br></br>
                        &emsp;&emsp;- &nbsp;Procure une relaxation profonde<br></br>
                        <br></br>Bien plus qu&apos;un massage... UNE EVASION INCROYABLE. <br></br>
                        La manipulation sert à tester les zones réflexes ainsi qu&apos;à les traiter. Ces zones  ainsi décongestionnées vont permettre aux organes de rétablir leur irrigation et leur bon fonctionnement.
                    </p>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import institut from '../img/institut.jpeg'

export default function Footer() {
  return (
    <div> 
        <Image src={institut} alt="institut" />
        <div>A propos de l'institut...</div>
        <h1>Institut secret de beaute</h1>
        <div>
            <div>
                <p>Institut climatise</p>
                <p>Adresse: 10 rue du Distro, 56690 LANDEVANT</p>
            </div>
            <div>
                <p>Tel : 06 12 35 08 77</p>
                <p>Rendez-vous par SMS</p>
            </div>
            <div>
                <p>Horaires d'ouverture :</p>
                <p>Ouvert sur rendez-vous</p>
                <p>du Lundi au Vendredi : de 9h00 a 19h00</p>
                <p>le Samedi : de 9h00 a 13h00</p>
            </div>
        </div>
    </div>
  )
}

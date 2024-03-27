import React from 'react'
import Image from 'next/image'
import accueilPic from '../img/home.jpeg'

export default function accueil() {
  return (
    <div>
        <div>Bienvenue dans le monde du bien etre</div>
        <div>Situe en Bretagne sur la commune de Landevant dans le Morbihan, a 2 pas du centre bourg a l'abri des regards</div>
        <Image src={accueilPic} alt="Home" width={500} height={300} />
    </div>
  )
}

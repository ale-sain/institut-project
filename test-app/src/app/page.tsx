import Accueil from './accueil'
import Prestations from './prestations'
import Link from 'next/link'
import NavBar from './navBar'
import AccueilAnimated from './accueilAnimated'

export default function Home() {
  return (
     <div>
        <AccueilAnimated />
        {/*<div> 
          <p>Bien etre, detente, relaxation...</p>
          <p>De la lumiere tamisee, une ambiance feutree, de la musique douce, laissez-vous emporter...</p>
        </div>
        <Prestations /> */}
        {/* <Link href="/test" >TESTTTT</Link> */}
     </div>
   )
}

import Accueil from './accueil'
import Prestations from './prestations'
import Link from 'next/link'

export default function Home() {
  return (
     <div>
        {/* <Accueil />
        <div> 
          <p>Bien etre, detente, relaxation...</p>
          <p>De la lumiere tamisee, une ambiance feutree, de la musique douce, laissez-vous emporter...</p>
        </div>
        <Prestations /> */}
        <Link href="/test" >TESTTTT</Link>
     </div>
   )
}

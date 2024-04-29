'use client'
import React, {useState, useEffect} from 'react'
import '../styles/thalion.css'
import BigThalion from './big-thalion'
import SmallThalion from './small-thalion';
import { useWindowSize } from 'react-use';

export default function Thalion() {
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsClient(true); // Une fois le composant monté, setIsClient sera vrai.
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Ou un autre placeholder approprié pendant le chargement.
  }

  return (
    <div id="thalion" className="section">
         {width && width > 1100 ? (
            <BigThalion />
        ) : (
            <SmallThalion />
        )}
    </div>
  )
}

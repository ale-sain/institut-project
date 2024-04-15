import React from 'react'
import '../styles/thalion.css'
import BigThalion from './big-thalion'
import SmallThalion from './small-thalion';
import { useWindowSize } from 'react-use';

export default function Thalion() {
    const { width } = useWindowSize();
    console.log(width);
  return (
    <div id="thalion" className="section">
         {width > 1100 ? (
            <BigThalion />
        ) : (
            <SmallThalion />
        )}
    </div>
  )
}

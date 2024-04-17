'use client'
import React, {useState, useEffect} from 'react'
import '../styles/thalion.css'
import BigThalion from './big-thalion'
import SmallThalion from './small-thalion';
import { useWindowSize } from 'react-use';

export default function Thalion() {
  const { width } = useWindowSize();
  const [effectiveWidth, setEffectiveWidth] = useState(undefined);

  useEffect(() => {
      // Initially use a default width for server rendering
      setEffectiveWidth(width || 1100);  // Assuming 1100 as a common desktop width
  }, [width]);

  // Optional: Consider rendering a loader until the window size is available
  if (effectiveWidth === undefined) {
      return <div>Loading...</div>; // Or any other appropriate placeholder
  }
  return (
    <div id="thalion" className="section">
         {effectiveWidth && effectiveWidth > 1100 ? (
            <BigThalion />
        ) : (
            <SmallThalion />
        )}
    </div>
  )
}

'use client'
import React, {useState, useEffect} from 'react'
import '../styles/thalion.css'
import BigThalion from './big-thalion'
import SmallThalion from './small-thalion';
import { useWindowSize } from 'react-use';

export default function Thalion() {
  const { width } = useWindowSize();
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

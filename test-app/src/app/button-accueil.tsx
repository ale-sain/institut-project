'use client'
import React from 'react'
import '../styles/button-accueil.css'
import smoothScrollTo from './scroll';

export default function AccueilButton() {
  return (
    <>
        <div className="button-container right">
            <a className="button round" href="#prestations"  onClick={(e) => { e.preventDefault(); smoothScrollTo('prestations'); }}>
                <span>VOIR LES PRESTATIONS</span>
            </a>
        </div>
    </>
  )
}

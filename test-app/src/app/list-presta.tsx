'use client'
import React from 'react'
import '../styles/list-presta.css'
import smoothScrollTo from './scroll';

export default function ListPrestation() {
  return (
    <div className="specialist-wrapper">
        <div className="w-dyn-items" role="list">
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('epilation'); }}>
                    <div className="specialist-link-wrapper">
                        Epilations →
                    </div>
                    <p className="paragraph small wo">Un instant pour soi</p>
                </a>
            </div>
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('soin-visage'); }}>
                    <div className="specialist-link-wrapper">
                        Soins du visage →
                    </div>
                    <p className="paragraph small wo">Oublier le quotidien</p>
                </a>
            </div>
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('soin-regard'); }}>
                    <div className="specialist-link-wrapper">
                        Changez votre regard →
                    </div>
                    <p className="paragraph small wo">Pour des yeux de biche</p>
                </a>
            </div>
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('reflexologie-plantaire'); }}>
                    <div className="specialist-link-wrapper">
                        Réflexologie plantaire →
                    </div>
                    <p className="paragraph small wo">S&apos;évader ailleurs</p>
                </a>
            </div>
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('reflexologie-cranienne'); }}>
                    <div className="specialist-link-wrapper">
                        Réflexologie cranienne →
                    </div>
                    <p className="paragraph small wo">Se vider la tête</p>
                </a>
            </div>
            <div className="w-dyn-item" role="listitem">
                <a className="specialist-item w-inline-block" onClick={(e) => { e.preventDefault(); smoothScrollTo('onglerie'); }}>
                    <div className="specialist-link-wrapper">
                        Onglerie →
                    </div>
                    <p className="paragraph small wo">La différence c&apos;est l&apos;élégance</p>
                </a>
            </div>
        </div>
    </div>
  )
}

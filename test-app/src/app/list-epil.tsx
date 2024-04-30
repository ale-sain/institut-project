'use client'
import React from 'react'

export default function ListEpilation({ list }: any) {
  return (
    <div className="specialist-wrapper epil">
      <div className="w-dyn-items" role="list">
        {list && list.map((section:any, index:number) => (
          <div className="w-dyn-item" role="listitem" key={index}>
            <div className="specialist-item epil not w-inline-block">
              <div className="specialist-link-wrapper epil">{section.titre}</div>
              <p className="paragraph small wo epil">{section.prix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

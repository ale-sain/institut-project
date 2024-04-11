import React from 'react'
import '../styles/list-soin.css'

export default function ListSoin({ list }) {
  return (
    <div className="specialist-wrapper soin">
      <div className="w-dyn-items" role="list">
        {list && list.map((section) => (
          <div className="w-dyn-item" role="listitem" key={section.id}>
            <div className="specialist-item soin w-inline-block">
              <div className="specialist-link-wrapper soin">
                <div className="special-link">{section.titre}</div>
                <div className="time-text">{`/ ${section.duree}   ↓`}</div>
              </div>
              <p className="paragraph small wo soin">{section.prix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import React from 'react'

export default function ListEpilation({ list }) {
  return (
    <div className="specialist-wrapper epil">
      <div className="w-dyn-items" role="list">
        {list && list.map((section) => (
          <div className="w-dyn-item" role="listitem" key={section.id}>
            <div className="specialist-item epil w-inline-block">
              <div className="specialist-link-wrapper epil">{section.titre}</div>
              <p className="paragraph small wo epil">{section.prix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

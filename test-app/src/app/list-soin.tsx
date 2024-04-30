import React, { useState } from 'react';
import '../styles/list-soin.css';

interface ListSoinProps {
  list: {
      titre: string;
      duree: string;
      prix: string;
      description: string;
  }[];
}

interface ArrowState {
  [key: number]: boolean;
}

export default function ListSoin({ list }: ListSoinProps) {
  const [arrowStates, setArrowStates] = useState<ArrowState>({});  // Utiliser le type pour l'état

  // Fonction pour basculer l'état d'une flèche spécifique
  const toggleArrow = (index: number) => {
    setArrowStates((prevStates: ArrowState) => ({
      ...prevStates,
      [index]: !prevStates[index]  // Basculer l'état actuel pour l'index donné
    }));
  };

  return (
    <div className="specialist-wrapper soin">
      <div className="w-dyn-items" role="list">
        {list && list.map((section, index) => (
          <div key={index}>
            <label htmlFor={`check-${index}`} className="w-dyn-item" role="listitem" onClick={() => toggleArrow(index)}>
              <div className="specialist-item soin w-inline-block">
                <div className="specialist-link-wrapper soin">
                  <div className="special-link">{section.titre}</div>
                  <div className="time-text">
                    {`/ ${section.duree} `}
                    <div
                      className={`arrow-icon ${arrowStates[index] ? 'up' : ''}`}
                      style={{ display: 'inline-block', transform: arrowStates[index] ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease', marginLeft: '5px' }}>
                      ↓
                    </div>
                  </div>
                </div>
                <p className="paragraph small wo soin">{section.prix}</p>
              </div>
            </label>
            <input id={`check-${index}`} type="checkbox" />
            <div className="description">
            {section.description.split('\n').map((line, idx) => (
              <p className="p-visage" key={idx}>{line}</p>
            ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

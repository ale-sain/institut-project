// ArrowIcon.js
import React, { useState } from 'react';
import '../styles/list-soin.css'

const ArrowIcon = () => {
  const [isUp, setIsUp] = useState(false);

  const toggleArrow = () => {
    setIsUp(!isUp);
  };

  return (
    <svg
      onClick={toggleArrow}
      className={`arrow-icon ${isUp ? 'up' : ''}`}
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6v12M18 12l-6 6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowIcon;
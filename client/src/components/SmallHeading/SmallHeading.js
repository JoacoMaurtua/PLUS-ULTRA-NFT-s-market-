import React from 'react';
import './SmallHeading.scss';

function SmallHeading({title,identifier}) {
  return (
    <div className="smallHeading-container">
      <h3 className={identifier}>{title}</h3>
    </div>
  )
}

export default SmallHeading;
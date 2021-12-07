import React from 'react';
import './MainSection.scss';
import business from '../../images/marketing.mp4';

export default function MainSection() {
  return (
    <div className="MainSection-content">
      <video src={business} muted playsInline autoPlay loop></video>
    </div>
  )
}





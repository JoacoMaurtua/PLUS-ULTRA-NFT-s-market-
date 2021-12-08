import React from 'react';
import './MainSection.scss';
import business from '../../images/marketing.mp4';
import circles from '../../images/circles.svg';
import {InnerLayout} from '../../Layouts';
import MainContent from '../MainContent/MainContent';

export default function MainSection() {
  return (
    <div className="MainSection-content">
      <video src={business} muted playsInline autoPlay loop></video>
      <img src={circles} alt="" className="overlay"/>
      <InnerLayout>
        <MainContent/>
      </InnerLayout>
    </div>
  )
}





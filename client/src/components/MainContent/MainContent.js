import React from 'react';
import Navigation from '../Navigation/Navigation';
import SmallHeading from '../SmallHeading/SmallHeading';
import './MainContent.scss'

export default function MainContent() {
  return (
    <div className="MainContent-container">
      <Navigation/>
      <div className="content">
        <div className="left">
          <SmallHeading title={'Are you ready to know the true impact of NFTs in the world?'} identifier={'Before'}/>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  )
}

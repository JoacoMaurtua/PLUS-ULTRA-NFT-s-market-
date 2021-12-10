import React from 'react';
import Navigation from '../Navigation/Navigation';
import SmallHeading from '../SmallHeading/SmallHeading';
import './MainContent.scss';
import blockchain from '../../images/blockchain.png';


export default function MainContent() {
  return (
    <div className="MainContent-container">
      <Navigation/>
      <div className="content">
        <div className="left">
          <SmallHeading title={'The real revolution in NFTs'} identifier={'Before'}/>

          <h1>
                All NFTs You need in One Marketplace
                The Best Place to Collect , Buy and Sell <span className='GradientText'>Awesome NFTs</span> 
          </h1>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
                Cumque obcaecati sint officiis quis laboriosam vitae.
          </p>
        </div>
        <div className="right">
          <img src={blockchain} alt=""/>
        </div>
      </div>
    </div>
  )
}

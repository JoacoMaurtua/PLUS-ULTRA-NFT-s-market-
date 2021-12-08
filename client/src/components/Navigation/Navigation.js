import React from 'react';
import './Navigation.scss';
import logo from '../../images/logo.png'

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#stats">Stats</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <div className="primary-btn">CONNECT WALLET</div>
      </ul>
    </nav>
  )
}

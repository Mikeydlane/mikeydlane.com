import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo-container'>
          <h1 className='logo'><Link to="/Contact">MICHAEL LANE</Link></h1>
          <h3 className='logo-sub'>WEB DEVELOPER</h3>
          <h3 className="logo-sub-sub">UX/UI DESIGNER</h3>
        </div>

        <ul className='menu'>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/work'>WORK</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>

      </div>
    );
  }
}

{/* <ul>
  <li className="top-link">MY WORK</li>
    <ul className="min-link">
      <li><Link to="/brewmetrics">BREWMETRICS</Link></li>
      <li><Link to="/ourtable">OURTABLE</Link></li>
      <li><Link to="/Neuport">NEUPORT</Link></li>
    </ul>
  <li className="bottom-link">CONTACT</li>
    <ul className="min-link">
      <li><Link to="/resume">RESUME</Link></li>
      <li><Link to="/email">EMAIL</Link></li>
    </ul>
</ul> */}

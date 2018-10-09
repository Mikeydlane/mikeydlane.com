import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';

class SideBar extends Component {
  render() {
    return (
      <div className='header'>
        <h1><Link to="/Contact">MICHAEL LANE</Link></h1>
        <h3>FULL STACK WEB DEVELOPER</h3>
        <h3 className="UX">USER EXPERIENCE DESIGNER</h3>
        <ul>
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
        </ul>
      </div>
    );
  }
}

export default SideBar;

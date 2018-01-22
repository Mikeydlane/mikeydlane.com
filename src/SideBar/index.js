import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';

class SideBar extends Component {
  render() {
    return (
      <div className='header'>
        <h1>MICHAEL LANE</h1>
        <h3>FULL STACK WEB DEVELOPER</h3>
        <ul>
          <li className="top-link"><Link to="/">MY WORK</Link></li>
            <ul className="min-link">
              <li><Link to="/">BrewMetrics</Link></li>
              <li><Link to="/ourtable">ourtable</Link></li>
              <li><Link to="/Neuport">Neuport</Link></li>
            </ul>
          <li className="bottom-link"><Link to="/contact">CONTACT</Link></li>
            <ul className="min-link">
              <li><Link to="/contact">Resume</Link></li>
              <li><Link to="/Contact">Email</Link></li>
            </ul>
        </ul>
      </div>
    );
  }
}

export default SideBar;

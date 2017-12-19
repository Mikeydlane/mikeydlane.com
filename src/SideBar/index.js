import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';

class SideBar extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Michael Lane</h1>
        <ul>
          <li><Link to="/">My Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default SideBar;

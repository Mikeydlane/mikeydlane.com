import React, { Component } from 'react';
import './styles.css';

class SideBar extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Michael Lane</h1>
        <p className="App-intro">
          My Work
        </p>
        <p className="App-intro">
          Contact
        </p>
      </div>
    );
  }
}

export default SideBar;

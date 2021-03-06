import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './BrewMetrics.css';

class FeatureOne extends Component {
  render() {
    return (
      <div className="feature">
        <img className="screen" src='./screenone1.gif' />
        <div className="side-text">
          <h1>BrewMetrics for iOS</h1>
          <p>BrewMetrics measures the logistics of your beer drinking habits and the habits of your friends.</p>
          <p>Update you beverages in real time and keep track of money spent, drinks had, and your current drunken status.</p>
          <h3>Built in React Native | <a target="_gitHub" href="https://github.com/BrewMetrics">GitHub</a></h3>
        <br></br>
        <br></br>
          <img className="scroll" src='./scroll.svg' />
          <p>please scroll</p>

        </div>
      </div>
    );
  }
}

export default FeatureOne;

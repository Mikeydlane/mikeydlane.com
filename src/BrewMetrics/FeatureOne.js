import React, { Component } from 'react';
import './BrewMetrics.css';

class FeatureOne extends Component {
  render() {
    return (
      <div className="feature">
        <img className="screen" src='./screenone1.gif' />
        <div className="side-text">
          <h1>BrewMetrics for iOS</h1>
          <p>BrewMetrics mesures the logistics of your beer drinking habbits and the habbits of your friends.</p>
          <p>Update you beverages in real time and keep track of money spent, drinks had, and your current drunken status.</p>
          <h3>Built in React Native | GitHub</h3>
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

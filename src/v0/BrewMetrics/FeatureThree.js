import React, { Component } from 'react';
import './BrewMetrics.css';

class FeatureThree extends Component {
  render() {
    return (
      <div className="feature">
      <img className="screen" src='./screenThree.gif' />
        <div className="side-text">
          <h1>Keep Track of Your Personal Stats</h1>
          <p>See what you've drunk and when.</p>
          <p>Keep track of personal habits, how much you spend, and how much beer you drink.</p>

        </div>
      </div>
    );
  }
}

export default FeatureThree;

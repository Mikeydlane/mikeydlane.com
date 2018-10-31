import React, { Component } from 'react';
import './BrewMetrics.css';

class FeatureTwo extends Component {
  render() {
    return (
      <div className="feature">
        <div className="side-text">
          <h1>Interact with Drinking Buddies</h1>
          <p>Add friends and drinking buddies from around the world. See what they are drinking, where they are drinking, and when they are drinking.</p>
          <p>Find out their drink status and leave comments on individual drinks.</p>
        </div>
        <img className="screen" src='./screenTwo.gif' />
      </div>
    );
  }
}

export default FeatureTwo;

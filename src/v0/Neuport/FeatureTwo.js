import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Neuport.css';
class FeatureTwo extends Component {
  render() {
    return (
      <div className="feature">
        <img className="screen" src='./mobileres.gif' />
        <div className="side-text">
          <h1>Mobile Responsive Design<div className="thin"> HTML/CSS/JavaScript/Soundcloud API | <a target="_neuport" href="https://neuportpleasure.com">Site</a></div></h1>
        </div>
      </div>
    );
  }
}

export default FeatureTwo;

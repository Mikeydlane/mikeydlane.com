import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Neuport.css';
class FeatureOne extends Component {
  render() {
    return (
      <div className="feature1">
        <div className="side-text1">
          <div className="inner-text-div">
            <div cleassName="inner-text">
              <h1>Neuport<div className="thin"> HTML/CSS/JavaScript/Soundcloud API | <a target="_neuport" href="https://neuportpleasure.com">Site</a></div></h1>
            </div>
          </div>
          <p></p>
          <img className="screen" src='./RecorditNeu1.gif' />
        </div>
      </div>
    );
  }
}

export default FeatureOne;

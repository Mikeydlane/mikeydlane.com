import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './OurTable.css';
class FeatureTwo extends Component {
  render() {
    return (
      <div className="feature1">
        <div className="side-text1">
          <div className="inner-text-div">
            <div cleassName="inner-text">
              <h1>OurTable<div className="thin"> Built with Ruby on Rails | <a target="_gitHub" href="https://github.com/Mikeydlane/farm_to_table">GitHub</a></div></h1>
            </div>
          </div>
          <p>Farm to table application connecting local farms with local restaurants. Easy accessibility to increase sales and consumption of locally produced goods in a way that makes economic and financial sense for both the buyer and the seller.</p>
          <img className="screen" src='./f2tProfile.png' />
        </div>
      </div>
    );
  }
}

export default FeatureTwo;

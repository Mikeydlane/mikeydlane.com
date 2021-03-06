import React, { Component } from 'react';

import './styles.scss';


export default class BrewMetrics extends Component {
  render() {
    return (
      <div className='brewmetrics'>
        <div className='container'>
          <div className='slide-info'>
            <div className='logo'>

              <img src='/Brew-logo.png' className='brew-logo' />

            </div>

            <p>Keep track of the beer you’ve had, what your buddies are drinking, and how much you’ve all drank in real time.</p>
            <p className="role">UX/UI DESIGNER / MOBILE DEVELOPER</p>
          </div>

          <div className='slide-img'>
            <img src='/Brewmetrics_iPhoneX1.png' className='bm-img' />
          </div>
        </div>

      </div>
    );
  }
}

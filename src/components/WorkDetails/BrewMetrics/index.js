import React, { Component } from 'react';

import './styles.scss';


export default class BrewMetrics extends Component {
  render() {
    return (
      <div className='brewmetrics'>
        <div className='container'>
          <div className='slide-info'>
            <div className='logo'>
              <img src='/BrewLogoBlack.png' className='brew-logo' />
              <h2 className='title'>Brewmetrics</h2>
            </div>

            <p>Blah blaihsldkgjfldskd.</p>
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

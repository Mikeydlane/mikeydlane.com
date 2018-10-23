import React, { Component } from 'react';

import './styles.scss';


export default class BrewMetrics extends Component {
  render() {
    return (
      <div className='big-wrap'>
        <div className='brewmetrics-w'>
          <div className='containerReverse'>
            <div className='slide-info'>
              <div className='logo'>
                <h2 className='title'>Brewmetrics Mobile App</h2>
              </div>

                <p>BrewMetrics measures the logistics of your beer drinking habits and the habits of your friends.</p>

                <p>Update you beverages in real time and keep track of money spent, drinks had, and your current drunken status.</p>

              </div>

            <div className='slide-img'>
              <img src='/Brewmetrics_iPhoneX1.png' className='bm-img' />
            </div>
          </div>
        </div>
        <div className='brewmetrics-w'>
          <div className='container'>
            <div className='slide-info'>
              <div className='logo'>
                <h2 className='title'>Interact with Drinking Buddies</h2>
              </div>

                <p>Add friends and drinking buddies from around the world. See what they are drinking, where they are drinking, and when they are drinking.</p>

                <p>Find out their drink status and leave comments on individual drinks.</p>

              </div>

            <div className='slide-img'>
              <img src='/Brewmetrics_iPhoneX1.png' className='bm-img' />
            </div>
          </div>
        </div>
        <div className='brewmetrics-w'>
          <div className='containerReverse'>
            <div className='slide-info'>
              <div className='logo'>
                <h2 className='title'>Keep Track of Your Personal Stats</h2>
              </div>

                <p>See what you&rsquo;ve drunk and when.</p>

                <p>Keep track of personal habits, how much you spend, and how much beer you drink.</p>

              </div>

            <div className='slide-img'>
              <img src='/Brewmetrics_iPhoneX1.png' className='bm-img' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';

import './styles.scss';


export default class BrewMetrics extends Component {
  render() {
    return (
      <div className='big-wrap'>
        <div className='client-b'>
          <p>Client | Brewmetrics (Co-Founder)</p>
          <p>Project Duration | 1 Year/Ongoing</p>
          <p>Download | <a target="_blank" href='https://play.google.com/apps/testing/com.brewmetrics'>Google Play Store</a></p>
        </div>
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
              <img src='/brew-com.png' className='bm-img' />
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
              <img src='/drinking-buds.png' className='bm-img' />
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
              <img src='/metrics.png' className='bm-img' />
            </div>
          </div>
        </div>
        <div className='brewmetrics-w'>
          <div className='container'>
            <div className='slide-info'>
              <div className='logo'>
                <h2 className='title'>Map Your Favorite Locations</h2>
              </div>

                <p>See where and what you've had at your favorite locatons.</p>

                <p>Keep track of where your friends are drinking.</p>

              </div>

            <div className='slide-img'>
              <img src='/brew-maps.png' className='bm-img' />
            </div>
          </div>
        </div>
        <div className='bm-footer'>
          <h3>Beta test on Andriod, iOS coming soon | Built in React Native</h3>
          <a href='https://play.google.com/apps/testing/com.brewmetrics'>
            <img src='/PlayStore.png' className='playstore' />
          </a>
        </div>

      </div>
    );
  }
}

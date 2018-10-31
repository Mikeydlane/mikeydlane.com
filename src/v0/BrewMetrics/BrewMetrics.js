import React, { Component } from 'react';
import OverScroll from 'react-over-scroll';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import FeatureThree from './FeatureThree';
import './BrewMetrics.css';

class BrewMetrics extends Component {
  render() {
    const pages = [
      <FeatureOne />,
      <FeatureTwo />,
      <FeatureThree />
    ]

    return (
      <div className="BrewMetrics">
        <div className='feature-container'>
          <OverScroll slides={pages.length} factor={2}>
            {(page, progress) => (pages[page])}
          </OverScroll>
        </div>
      </div>
    );
  }
}

export default BrewMetrics;

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
        <OverScroll slides={pages.length} factor={2}>
          {(page, progress) => (
            <div>
              <section>
                {pages[page]}
              </section>
            </div>
          )}
        </OverScroll>
      </div>
    );
  }
}

export default BrewMetrics;

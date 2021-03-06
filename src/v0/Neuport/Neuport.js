import React, { Component } from 'react';
import OverScroll from 'react-over-scroll';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import './Neuport.css';

class Neuport extends Component {
  render() {
    const pages = [
      <FeatureOne />,
      <FeatureTwo />
    ]

    return (
      <div className="Neuport">
        <div className='feature-container'>
          <OverScroll slides={pages.length} factor={2}>
            {(page, progress) => (pages[page])}
          </OverScroll>
        </div>
      </div>
    );
  }
}

export default Neuport;

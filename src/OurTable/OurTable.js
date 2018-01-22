import React, { Component } from 'react';
import OverScroll from 'react-over-scroll';
import FeatureOne from './FeatureOne';
import './OurTable.css';

class OurTable extends Component {
  render() {
    const pages = [
      <FeatureOne />
    ]

    return (
      <div className="OurTable">
        <div className='feature-container'>
          <OverScroll slides={pages.length} factor={2}>
            {(page, progress) => (pages[page])}
          </OverScroll>
        </div>
      </div>
    );
  }
}

export default OurTable;

import React, { Component } from 'react';

import './styles.scss';


export default class Ponder extends Component {
  render() {
    return (
      <div className='ponder'>
        <div className='container'>
          <div className='slide-info'>
            <div className='logo'>
              <h2 className='title'>PONDER</h2>
            </div>

            <p>Designed to give full time students a break from the pressures of school.</p>
            <p className="role">UX/UI DESIGNER / RESEARCH / TEAM PROJECT</p>
          </div>

          <div className='slide-img'>
            <img src='/Ponder81.png' className='bm-img' />
          </div>
        </div>

      </div>
    );
  }
}

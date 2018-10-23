import React, { Component } from 'react';

import './styles.scss';


export default class Ponder extends Component {
  render() {
    return (
      <div className='ponder-w'>
        <div className='container'>
          <h1>Project Goals</h1>
          <div className='icons-container'>
            <div className='icon-container'>
              <img src='icon-1-p.png' className='icon-p-1' />
              <p>Inspire NYCDA students</p>
            </div>
            <div className='icon-container'>
              <img src='icon2-p.png' className='icon-p' />
              <p>Relax overwhelmed students</p>
            </div>
            <div className='icon-container'>
              <img src='icon-3-p.png' className='icon-p' />
              <p>Encourage taking breaks to increase focus</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

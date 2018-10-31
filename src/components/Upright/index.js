import React, { Component } from 'react';

import './styles.scss';


export default class Upright extends Component {
  render() {
    return (
      <div className='upright'>
        <div className='container'>
          <div className='slide-info'>
            <div className='logo'>
              <img src='/download.png' className='upright-logo' />

            </div>
            <p className='toptext'>Connecting new start ups with small job freelancers.</p>
            <p className="role">UX/UI DESIGNER / RESEARCH</p>


          </div>


        </div>

      </div>
    );
  }
}

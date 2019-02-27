import React, { Component } from 'react';

import './styles.scss';
import Resume from '../Resume/Resume';
import Footer from '../Footer';


export default class About extends Component {
  render() {
    return (
      <div className='about-wrap'>
        <div className='about'>
          <div className='text'>
            <h2 className='title'>DESIGN & ENGINEERING</h2>
            <p className='about-p'>I pride myself on my ability to consistently expand my design skills and stay on top of current trends.</p>

            <p>My varied background in music, fashion, and web design has equipped me with the skills necessary to work in any environment. I am highly responsive to client needs and am committed to helping people realize their vision.</p>

          </div>
          <div className="pic">
            <img className="pic" src='./profilepic1.jpeg' />
          </div>
        </div>
        <div className='about2'>
          <Resume />
          <div className='about-footer'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

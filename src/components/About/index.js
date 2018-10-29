import React, { Component } from 'react';

import './styles.scss';
import Resume from '../Resume/Resume';



export default class About extends Component {
  render() {
    return (
      <div className='about-wrap'>
        <div className='about'>
          <div className='text'>
            <h2 className='title'>DESIGN & ENGINEERING</h2>
            <p className='about-p'>I am a Full Stack Web Developer with an eye for design. I pride myself on my ability to consistently expand my coding skills and stay on top of current design trends. Great code needs great design.</p>
            <p className='about-p'>My varied background in music, fashion, and design has equipped me with the skills necessary to work in any environment. I am highly responsive to client needs and am committed to helping people realize their vision.</p>
          </div>
          <div className="pic">
            <img className="pic" src='./profilepic1.jpeg' />
          </div>
        </div>
        <div className='about2'>
        <Resume />

        </div>
      </div>
    );
  }
}

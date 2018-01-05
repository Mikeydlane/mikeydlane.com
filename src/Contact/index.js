import React, { Component } from 'react';

import './styles.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className='feature-container2'>
        <div className="text">
          <h3>I am a Full Stack Web Developer with an eye for design. I pride myself on my ability to consistently expand my coding skills and stay on top of current design trends. Great code needs great design.</h3>
          <h3>My varied background in music, fashion, and design has equipped me with the skills necessary to work in any environment. I am highly responsive to client needs and am committed to helping people realize their vision.</h3>
          <br></br>
          <h2>New York City | mikeyd.lane@gmail.com</h2>
        </div>
          <div className="icons">
            <img className="icon" src='./github-logo.svg' />
            <img className="icon" src='./linkedin-button.svg' />
            <img className="icon" src='./mail-black-envelope-symbol.svg' />
            <img className="icon" src='./phone.svg' />
          </div>
        </div>
        <div className="pic">
        <img className="pic" src='./profilepic1.jpeg' />
        </div>
      </div>
    );
  }
}

export default Contact;

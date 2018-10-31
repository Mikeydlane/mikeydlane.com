import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h2 className='mikey'> © Michael Lane | Built in React.js</h2>
        <div className="icons">
          <a target="_gitHub" href="https://github.com/Mikeydlane"><img className="footer-icon" src='./github-logo.svg' /></a>
          <a target="_linkedIn" href="https://www.linkedin.com/in/mikeydlane/"><img className="footer-icon" src='./linkedin-button.svg' /></a>
          <a target="_email" href="mailto:mikeyd.lane@gmail.com"><img className="footer-icon" src='./mail-black-envelope-symbol.svg' /></a>
          <a target="_phone" href="tel:7185931737"><img className="footer-icon" src='./phone.svg' /></a>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './styles.css';

class Resume extends Component {
  render() {
    return (
      <div className="ContactFeature">
        <div className="resumeft">
          <img className="resume" src='./MichaelLaneResume18.png' />
          <a target="_resume" href="./MichaelLaneResume18.pdf"><p>download .pdf</p></a>
        </div>
      </div>
    );
  }
}

export default Resume;

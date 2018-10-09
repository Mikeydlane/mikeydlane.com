import React, { Component } from 'react';
import './styles.css';

class Resume extends Component {
  render() {
    return (
      <div className="ContactFeature">
        <div className="resumeft1">
          <img className="resume1" src='./MichaelLaneResume2018a.png' />
          <a target="_resume" href="./MichaelLaneResume2018a.pdf"><p>download .pdf</p></a>
        </div>
      </div>
    );
  }
}

export default Resume;

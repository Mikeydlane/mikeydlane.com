import React, { Component } from 'react';
import './styles.css';

class Resume extends Component {
  render() {
    return (
      <div className="resumeft1">
        <img className="resume1" src='./Michael_Lane_Resume_2019.png' />
        <a target="_resume" href="./Michael_Lane_Resume_19-compressed.pdf"><p>download .pdf</p></a>
      </div>
    );
  }
}

export default Resume;

import React, { Component } from 'react';

import './styles.scss';


export default class Treble extends Component {
  render() {
    return (
      <div className='treb-wrap'>
      <div className='client-t'>
        <p>Client |  <a target="_blank" href='https://treble.fm'>Treble.fm</a></p>
        <p>Project Duration | 3 Weeks/Ongoing</p>
        <p>Clickable Prototype | <a target="_blank" href='https://invis.io/SDOC8ZKUTRX'>InVision</a></p>
      </div>
        <div className='treble-w'>
          <div className='container'>
            <div className='content1'>
              <div className='row1'>
                <h1>MY ROLE</h1>
                <ul className= 'treble-list'>
                  <li>Make a browser/web platform for Treble.fm</li>
                  <li>Take existing styles and concepts from their mobile app and apply them to this project</li>
                  <li>Come up with my own new concepts, designs, and styling</li>
                  <li>Test Treble’s current user base and potential users</li>
                </ul>
              </div>
              <div className='row2'>
                <h1>PROJECT GOALS</h1>
                <ul className= 'treble-list'>
                  <li>Create a platform that makes it easy for users to:</li>
                  <li>Find collaborators</li>
                  <li>Build a network</li>
                  <li>Release and discover brand new music, videos, and art</li>
                  <li>Showcase user content</li>
                </ul>

              </div>
            </div>
          </div>
          <div className='c-b'>
            <div className='title2'>

            </div>
            <div className='creative'>
              <img src='/Page 1 Brief.png' className='brief' />
            </div>
            <div className='creative'>
              <img src='/Page 2 Project Paln.png' className='plan' />
            </div>
          </div>
          <div className='treble-w'>
          <div className='container'>
            <div className='treb-row-1'>
              <h1 className='persona-treb'>PERSONA 1</h1>
              <h1 className='sub-head-treb'>YB KID</h1>
              <li>Young, passionate, and motivated</li>
              <li>Wants a platform to grow and meet other artist to create a network</li>
            </div>
            <div className='treb-row-2'>
              <div className='persona1'>
                <img src='/Persona1YB.png' className='prof1' />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='treb-row-1'>
              <h1 className='persona-treb'>PERSONA 2</h1>
              <h1 className='sub-head-treb'>ZASHA</h1>
              <li>Has some success in music over the years</li>
              <li>Wants to connect with new talent in all areas including video and production</li>
            </div>
            <div className='treb-row-2'>
              <div className='persona1'>
                <img src='/Persona2Zasha.png' className='prof1' />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='treb-row-1'>
              <h1 className='persona-treb'>PROTOTYPE</h1>
              <h1 className='sub-head-treb'>PROFILE</h1>
              <li>Link your video, Instagram, and Music treaming service all in one place</li>
              <li>Keep all your content in one place</li>
            </div>
            <div className='treb-row-2'>
              <div className='PROTOTYPE'>
                <img src='/Profile-Videos.png' className='prof1' />
              </div>

              <div className='PROTOTYPE'>
                <img src='/Profile-Videos-Video.png' className='prof1' />
              </div>
              <div className='PROTOTYPE'>
                <img src='/Profile - music1.png' className='prof1' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='t-footer'>
        <h2 className='mikey'> © Michael Lane | Built in React.js</h2>
        <div className="icons">
          <a target="_gitHub" href="https://github.com/Mikeydlane"><img className="footer-icon" src='./git-w.png' /></a>
          <a target="_linkedIn" href="https://www.linkedin.com/in/mikeydlane/"><img className="footer-icon" src='./Shape-w.png' /></a>
          <a target="_email" href="mailto:mikeyd.lane@gmail.com"><img className="footer-icon" src='./closed-w.svg' /></a>
          <a target="_phone" href="tel:7185931737"><img className="footer-icon" src='./phone-w.png' /></a>
        </div>
      </div>
    </div>
    );
  }
}

import React, { Component } from 'react';

import './styles.scss';


export default class Treble extends Component {
  render() {
    return (
      <div className='treble-w'>
        <div className='container'>
          <div className='content1'>
            <div className='row1'>
              <h1>My Goals</h1>
              <ul className= 'treble-list'>
                <li>Make a browser/web platform for Treble.fm</li>
                <li>Take existing styles and concepts from their mobile app and apply them to this project</li>
                <li>Come up with my own new concepts, designs, and styling</li>
                <li>Test Treble’s current user base and potential users</li>
              </ul>
            </div>
            <div className='row2'>
              <h1>Project Goals</h1>
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
        <div className='treble-w'>
        <div className='container'>
          <div className='treb-row-1'>
            <h1 className='persona-treb'>Pesona 1</h1>
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
            <h1 className='persona-treb'>Pesona 2</h1>
            <li>Has some success in music over the years</li>
            <li>Wants to connect with new talent in all areas including video and production</li>
          </div>
          <div className='treb-row-2'>
            <div className='persona1'>
              <img src='/Persona2zasha.png' className='prof1' />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import './styles.scss';


export default class Upright extends Component {
  render() {
    return (
      <div className="upright-div">
      <div className='upright-w'>
        <div className='container'>
          <div className='slide-info'>
            <div className='content1'>
              <div className='row1'>
                <h1>Project Goals</h1>
                <ul className= 'upright-list'>
                  <li>Design a platform that connects clients with freelancers for small jobs.</li>
                  <li>Match potential freelancers to projects for Upright.</li>
                  <li>Make Upright’s search for freelancers more efficient.</li>
                </ul>
              </div>
              <div className='row2'>
                <h1>Research Goals</h1>
                <ul className= 'upright-list'>
                  <li>Get an idea of what freelancers want in a platform.</li>
                  <li>Discover what Upright wants when looking for freelancers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='upright-w'>
        <div className='container'>
          <div className='slide-info'>
            <div className='content1'>
              <div className='row1-1'>
                <h1 className='persona-head'>Research Findings and Persona</h1>
                <li>After interviewing 5 freelancers with all different backgrounds I noticed some patterens and created a persona based on those findings.</li>
                <li>Meet Beth, a 28 year old Freelance Designer living in NYC.</li>
              </div>
              <div className='row2-1'>
                <div className='persona1'>
                  <img src='/Persona1.png' className='persona' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='upright-w'>
        <div className='container'>
          <div className='slide-info'>
            <div className='content1'>
              <div className='row1-2'>
                <h1 className='moodboard'>Moodboard</h1>
                <li>The moodboard was based on Upright’s current site and style guide.</li>
                <li>It includes Prose’s onboarding process as an example of being fun and easy.</li>
              </div>
              <div className='row2-2'>
                <div className='persona1'>
                  <img src='/mood-board-1.png' className='moodpic1' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='upright-w'>
        <div className='container'>
          <div className='slide-info'>
            <div className='content1'>
              <div className='row1-2'>
                <h1 className='moodboard'>Style Guide</h1>

                <li>I wanted it to look very clean and minimal.</li>
                <li>Stayed consistent to the sites colors and fonts.</li>
              </div>
              <div className='row2-2'>
                <div className='persona1'>
                  <img src='/UprightStyleGuide.png' className='moodpic1' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='upright-w'>
          <div className='slide-info'>
            <div className='content3'>
                <img src='/Profile-fullx2.png' className='profpic1' />
            </div>
         </div>
      </div>
    </div>
    );
  }
}

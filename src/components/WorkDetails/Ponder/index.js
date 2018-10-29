import React, { Component } from 'react';

import './styles.scss';


export default class Ponder extends Component {
  render() {
    return (
      <div className='big-wrap'>
        <div className='client-p'>
          <p>Client | NYCDA Group Project</p>
          <p>Project Duration | 3 Weeks</p>
          <p>Clickable Prototype | InVision</p>
        </div>
      <div className='ponder-w'>
        <div className='container'>
          <h1>Project Goals</h1>
          <div className='icons-container'>
            <div className='icon-container'>
              <img src='icon-1-p.png' className='icon-p-1' />
              <p>Inspire NYCDA students</p>
            </div>
            <div className='icon-container'>
              <img src='icon2-p.png' className='icon-p' />
              <p>Relax overwhelmed students</p>
            </div>
            <div className='icon-container'>
              <img src='icon-3-p.png' className='icon-p' />
              <p>Encourage taking breaks to increase focus</p>
            </div>
          </div>
        </div>
        </div>
          <div className='ponder-w'>
            <div className='container-p'>
              <h1>Research Findings</h1>
              <p>After we conducted 8 field interviews with current and former coding and design students we created an affinity map of our findings.</p>
              <div className='aff-img'>
                <img src='research1-p.png' className='aff-map' />
              </div>
            </div>
          </div>
          <div className='ponder-w'>
            <div className='container-p'>
              <h1>Research Trends - Inspiration</h1>
              <p>From our research findings, we noticed that people drew inspiration from everywhere. Many emphasized the importance of everyday experiences and being in the moment. Some were inspired by their surroundings and travels.</p>
              <div className='aff-img'>
                <img src='trends.png' className='affintiy' />
              </div>
            </div>
          </div>
          <div className='ponder-w'>
            <div className='container-p'>
              <h1>Research Trends - Energy</h1>
              <p>Besides using caffeine to recover when they felt low energy, some would also take walks to clear their head. Several pushed past stress by breaking overwhelming tasks into smaller pieces</p>
              <div className='aff-img'>
                <img src='research.png' className='affintiy' />
              </div>
            </div>
          </div>
          <div className='ponder-w'>
            <div className='container-p'>
              <h1>Research Trends - Relax</h1>
              <p>Going for a walk was a popular method for escaping and clearing their heads. Most people needed me time to recharge and/or concentrate. Many were mindful that they need to give themselves breaks.</p>
              <div className='aff-img'>
                <img src='trends3.png' className='affintiy' />
              </div>
            </div>
          </div>

          <div className='ponder-w'>
            <div className='container-p'>
              <div className='process'>
                <h1>Map Feature - Design Process</h1>
                <img src='./map-prog2.png' className='prog' />
              </div>
            </div>
          </div>
          <div className='ponder-w'>
            <div className='container-p'>
              <div className='process'>
                <h1>Draw Feature - Design Process</h1>
                <img src='./draw-prog1.png' className='prog' />
              </div>
            </div>
          </div>
        <div className='p-footer'>

        </div>
      </div>
    );
  }
}

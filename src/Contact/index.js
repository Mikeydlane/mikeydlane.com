import React, { Component } from 'react';
import OverScroll from 'react-over-scroll';
import Contact from './Contact';
import Resume from './Resume';
import './styles.css';

class ContactPage extends Component {
  render() {
    const pages = [
      <Contact />,
      <Resume />
    ]
    return (
      <div className="BrewMetrics">
        <div className='feature-container'>
          <OverScroll slides={pages.length} factor={2}>
            {(page, progress) => (pages[page])}
          </OverScroll>
        </div>
      </div>
    );
  }
}
export default ContactPage;

import React, { Component } from 'react';
import './styles.css';
import Footer from '../Footer';


class Email extends Component {
  render() {
    return (
      <div className='form-container'>
        <form className="email-form" method="POST" action="http://formspree.io/mikeyd.lane@gmail.com">
          <h2>LET'S TALK</h2>
          <input className="email" type="email" name="email" placeholder="YOUR EMAIL" />
          <textarea className="textbox" name="message" placeholder="YOUR MESSAGE"></textarea>
          <button className="sub-btn" type="submit">SEND</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Email;

import React, { Component } from 'react';
import './styles.css';

class Email extends Component {
  render() {
    return (
      <div className='form-container'>
        <form className="email-form" method="POST" action="http://formspree.io/mikeyd.lane@gmail.com">
          <h2>SEND ME AN EMAIL</h2>
          <input className="email" type="email" name="email" placeholder="YOUR EMAIL" />
          <textarea className="textbox" name="message" placeholder="YOUR MESSAGE"></textarea>
          <button className="sub-btn" type="submit">SEND</button>
        </form>
      </div>
    );
  }
}

export default Email;
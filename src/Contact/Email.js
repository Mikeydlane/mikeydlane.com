import React, { Component } from 'react';
import './styles.css';

class Resume extends Component {
  render() {
    return (

<form method="POST" action="http://formspree.io/YOUREMAILHERE">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>

    );
  }
}

export default Resume;

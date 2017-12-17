import React, { Component } from 'react';
import BrewMetrics from './BrewMetrics/BrewMetrics';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>Michael Lane</h1>
          <p className="App-intro">
            My Work
          </p>
          <p className="App-intro">
            Contact
          </p>
        </div>
        <BrewMetrics />
      </div>
    );
  }
}

export default App;

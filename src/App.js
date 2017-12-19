import React, { Component } from 'react';
import BrewMetrics from './BrewMetrics/BrewMetrics';
import SideBar from './SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <BrewMetrics />
      </div>
    );
  }
}

export default App;

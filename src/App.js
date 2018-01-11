import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import BrewMetrics from './BrewMetrics/BrewMetrics';
import ContactPage from './Contact';
import SideBar from './SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Route exact path="/" component={BrewMetrics} />
          <Route exact path="/contact" component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;

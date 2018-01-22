import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import BrewMetrics from './BrewMetrics/BrewMetrics';
import ContactPage from './Contact';
import SideBar from './SideBar';
import OurTable from './OurTable/OurTable';
import Neuport from './Neuport/Neuport';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Route exact path="/" component={BrewMetrics} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/ourtable" component={OurTable} />
          <Route exact path="/neuport" component={Neuport} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import BrewMetrics from './BrewMetrics/BrewMetrics';
import ContactPage from './Contact';
import Resume from './Resume/Resume';
import Email from './Email';
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
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/email" component={Email} />
        </div>
      </Router>
    );
  }
}

export default App;

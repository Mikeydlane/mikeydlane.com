import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ContactPage from '../Contact';
import Resume from '../Resume/Resume';
import Email from '../Email';
import Header from '../Header';
import Footer from '../Footer';
import About from '../About';
import Work from '../Work';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className='content'>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

{/* <Route exact path="/" component={ContactPage} />
<Route exact path="/brewmetrics" component={BrewMetrics} />
<Route exact path="/contact" component={ContactPage} />
<Route exact path="/ourtable" component={OurTable} />
<Route exact path="/neuport" component={Neuport} />
<Route exact path="/resume" component={Resume} />
<Route exact path="/email" component={Email} /> */}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './views/About/About';
import Differentiator from './views/Differentiator/Differentiator'
import CityToCoords from './components/CityToCoords'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router basename="/daylight-difference">
        <Switch>
          <Route path="/" exact component={Differentiator} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

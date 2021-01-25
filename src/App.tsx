import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './views/About/About';
import Differentiator from './views/Differentiator/Differentiator'
import './App.css';

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/differentiator" exact component={Differentiator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

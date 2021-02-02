import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './views/About/About';
import Differentiator from './views/Differentiator/Differentiator'
import AppHeader from './components/AppHeader';
import Menu from './components/Menu'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/daylight-difference">
        <AppHeader />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Differentiator} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
        <Menu />
      </Router>
    </div>
  );
}

export default App;

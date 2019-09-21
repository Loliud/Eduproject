import React, { Component } from 'react';
import Home from './components/home/home.js';
import GoTraining from './components/goTraining/GoTraining';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/gotraining/" component={GoTraining} />
      </Router>
    )
  }
}

export default App;

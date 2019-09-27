import React, { Component } from 'react';
import Home from './components/home/home.js';
import GoTraining from './components/goTraining/GoTraining';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Chapter from './components/goTraining/chapter/Chapter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/gotraining" component={GoTraining} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/excersise/:id" component={Chapter} />
      </Router>
    )
  }
}

export default App;

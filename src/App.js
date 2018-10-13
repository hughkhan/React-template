import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import About from './components/containers/About';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Header />

                  <Route path="/about" component={About} />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;

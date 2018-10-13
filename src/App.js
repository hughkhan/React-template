import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import About from './components/containers/About';
import PostForm from './components/containers/PostForm';
import AllPosts from './components/containers/AllPosts';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './Reducers/PostReducer';
const store = createStore(postReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
              <div>
                  <Header />

                  <Route path="/about" component={About} />
                  <Route path="/postform" component={PostForm} />
                  <Route path="/allposts" component={AllPosts} />
              </div>
          </Router>
        </Provider>
      </div>
    );
}
}

export default App;

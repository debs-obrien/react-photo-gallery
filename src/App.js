import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Container from './Container';
import Navigation from './Navigation';
import Clouds from './Clouds';
import Sunset from './Sunset';
import Flowers from './Flowers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <header >
            </header>
                <h1>Results</h1>
              <Container />
              <Navigation />
              <h3>No Results Found</h3>
              <p>
                  Your search did not return any results. Please try again.
              </p>
              <Route path="/"  />
              <Route path="/Clouds" component={Clouds} />
              <Route path="/Sunset" component={Sunset} />
              <Route path="/Flowers" component={Flowers} />

          </div>
      </BrowserRouter>
    );
  }
}

export default App;

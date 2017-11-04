import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
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
      </div>
    );
  }
}

export default App;

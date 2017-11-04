import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Container from './Container';
import Clouds from './Clouds';
import Sunset from './Sunset';
import Flowers from './Flowers';
import Search from './Search';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">

              <Route path="/search" component={Search} />
              <Container />
              <Route path="/clouds" render ={ () => <Clouds title="Clouds" />} />
              <Route path="/sunset" render ={ () => <Sunset title="Sunset" />} />
              <Route path="/flowers" render ={ () => <Flowers title="flowers" />} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

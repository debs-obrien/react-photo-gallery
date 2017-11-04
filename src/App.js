import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Clouds from './Clouds';
import Sunset from './Sunset';
import Flowers from './Flowers';
import Search from './Search';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={Search} />
                  <Route path="/search" component={Search} />
                  <Route path="/clouds" render ={ () => <Clouds title="Clouds" />} />
                  <Route path="/sunset" render ={ () => <Sunset title="Sunset" />} />
                  <Route path="/flowers" render ={ () => <Flowers title="flowers" />} />
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Clouds from './Clouds';
import Sunset from './Sunset';
import Flowers from './Flowers';
import Search from './Search';
import NotFound from './NotFound';
import axios from 'axios';
import apiKey from './config';


class App extends Component {
    constructor(){
        super();
        this.state = {
            photos: [],
            search: this.search
        };
    }
    componentDidMount(){
        const flickerKey = apiKey;
        const search = this.state.search;
        let perPage = 16;
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickerKey}&tags=${search}&per_page=${perPage}&page=1&format=json&nojsoncallback=1`;
        axios.get(url)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo
                });
            })
            .catch(error =>{
                console.log('error fetching data', error);
            });
    }




  render() {
      console.log(this.state.photos);
    return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" render ={ () => <Clouds title="Clouds" search={this.state.search} data={this.state.photos} />}  />
                  <Route path="/search" render ={ () => <Search title="Search" search={this.state.search} data={this.state.photos} />}  />
                  <Route path="/clouds" render ={ () => <Clouds title="Clouds" search={this.state.search} data={this.state.photos} />} />
                  <Route path="/sunset" render ={ () => <Sunset title="Sunset" data={this.state.photos} />} />
                  <Route path="/flowers" render ={ () => <Flowers title="flowers" data={this.state.photos} />} />
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

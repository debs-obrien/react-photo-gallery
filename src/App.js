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
            loading: true,
            query: 'people'
        };
    }
    componentDidMount(){
        this.performSearch();
    }

    performSearch = (query = this.state.query) => {
        const flickerKey = apiKey;
        let perPage = 16;
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickerKey}&tags=${query}&per_page=${perPage}&page=1&format=json&nojsoncallback=1`;
        axios.get(url)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    loading:false
                });
            })
            .catch(error =>{
                console.log('error fetching data', error);
            });
    };


  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" render ={ () => <Search title="Home" onSearch={this.performSearch} data={this.state.photos} />}  />
                  <Route path="/search" render ={ () => <Search title="Search" onSearch={this.performSearch} data={this.state.photos} />}  />
                  <Route path="/clouds" render ={ () => <Clouds title="Clouds" onSearch={this.performSearch} data={this.state.photos}/>} />
                  <Route path="/sunset" render ={ () => <Sunset title="Sunset" onSearch={this.performSearch} data={this.state.photos} />} />
                  <Route path="/flowers" render ={ () => <Flowers title="flowers" onSearch={this.performSearch} data={this.state.photos} />} />
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

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
            photos: []
        };
    }
    componentDidMount(){
        const flickerKey = apiKey;
        const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=530bf8156cfb70d0a7f891e9e74ee790&tags=sunset&per_page=8&page=1&format=json&nojsoncallback=1';
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
                  <Route exact path="/" component={Search} />
                  <Route path="/search" component={Search} />
                  <Route path="/clouds" render ={ () => <Clouds title="Clouds" data={this.state.photos} />} />
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

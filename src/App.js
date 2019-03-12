import React, { Component } from 'react';
import axios from 'axios';
import {apiKey, apiUrlTitle, apiUrlSearch} from './data'
import './index.css'
import MovieList from './MovieList'

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   getMovieList: false,
    //   getMovie: false,
    //   movieList: [],
    //   movie: [],
    //   search: ''
    // }
  }

  render() {

    return (
        <div>
          <MovieList/>
        </div>
    );
  }
}

export default App;

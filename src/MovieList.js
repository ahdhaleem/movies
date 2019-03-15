import React, { Component } from 'react'
import axios from 'axios'
import {apiKey, apiUrlSearch} from './data'
import './index.css'
import {Movie} from "./Movie";

export default class MovieList extends Component {
  constructor(props) {
    super(props)

      this.state = {
        searchError: false,
        getMovieList: false,
        getMovie: false,
        movieList: [],
        movie: [],
        search: ''
      }
      this.start = null;
  }

  updateSearch = (event) => {
    clearTimeout(this.start);
    this.start = setTimeout(() => {
      if(this.state.search.trim('') !== ''){
        this.showMovieList()
      }
    }, 0)

    this.setState({
      search: event.target.value
    })
  }

  showMovieList = () => {
    axios.get(`${apiUrlSearch}${this.state.search.trim('')}&apikey=${apiKey}`)
        .then(res => {
          this.setState({movieList: res.data.Search, getMovieList: true, searchError: false})
        })
        .catch(error => {
          // handle error
          this.setState({ searchError: true, getMovieList: false})
        })
  }

  movieNotFound = () => {
    if(this.state.search !== '') {
      return <h3 className="movie-not-found">Movie Not Found!</h3>
    }
    else {
      return ''
    }
  }

  renderMovies = (results) => {
      return (
          <div>
            <ul className="movie-results">{results}</ul>
          </div>
      )
  }


  render() {
    const {movieList, search, getMovieList} = this.state


     const results = Array.isArray(movieList) ? movieList.map((movie, index) =>
          <Movie index={index}
                 image={movie.Poster}
                 title={movie.Title}
                 year={movie.Year}/>)
                  : <h3>{this.movieNotFound()}</h3>;
      return (

          <div className="app">
            <h1>Movies</h1>
            <input type="text"
                   placeholder="Movie Title..."
                   value={this.state.search}
                   onChange={this.updateSearch}
            />
            {/*<span><button onClick={this.showMovieList}>Search</button></span>*/}
            <div>
              <ul className="movie-results">
                {getMovieList ? this.renderMovies(results) : ''}
              </ul>
            </div>
          </div>
      )
  }
}

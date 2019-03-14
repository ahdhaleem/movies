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
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  showMovieList = () => {
    axios.get(`${apiUrlSearch}${this.state.search}&apikey=${apiKey}`)
        .then(res => {
          this.setState({movieList: res.data.Search, getMovieList: true, searchError: false})
        })
        .catch(error => {
          // handle error
          this.setState({ searchError: true, getMovieList: false})
        })
  }

  renderMovies = (results) => {
      return (
          <div>
            <ul className="movie-results">{results}</ul>
          </div>
      )
  }


  render() {
    const {movieList, searchError, getMovieList} = this.state

     const results = movieList.map((movie, index) =>
          <Movie index={index}
                 image={movie.Poster}
                 title={movie.Title}
                 year={movie.Year}/>)

      return (

          <div className="app">
            <h1>Movies</h1>
            <input type="text"
                   placeholder="Movie Title..."
                   value={this.state.search}
                   onChange={this.updateSearch}
            />
            <span><button onClick={this.showMovieList}>Search</button></span>
            <div>
              <ul className="movie-results">
                {getMovieList ? this.renderMovies(results) : ''}
              </ul>
            </div>
          </div>
      )
  }
}

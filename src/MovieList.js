import React, { Component } from 'react'
import axios from 'axios'
import {apiKey, apiUrlTitle, apiUrlSearch} from './data'
import './index.css'
import {Movie} from "./Movie";

export default class MovieList extends Component {
  constructor(props) {
    super(props)

      this.state = {
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
          console.log(res.data.Search)
          this.setState({movieList: res.data.Search, getMovieList: true})
        })
  }

  render() {

    // console.log('state movie list',this.state.movieList)

    // const movieList = this.state.movieList.filter(
    //     (movie) => movie.title.indexOf(this.state.search) !== -1)
    const {movieList} = this.state

    const results = movieList.map((movie, index) =>
                <Movie
                    index={index}
                    image={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    />)

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
              {this.state.getMovieList ?
                  <ul className="movie-results">{results}</ul> : null}
            </div>
          </div>)
  }
}

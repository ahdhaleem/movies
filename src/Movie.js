import React, { Component } from 'react'
import axios from 'axios'
import {apiKey, apiUrlTitle, apiUrlSearch} from './data'
import Popup from 'reactjs-popup'
import MoviePopup from "./MoviePopup";

export class Movie extends Component {
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

  movieClick = (title) => {
      console.log('Movie title clicked', title)
        axios.get(`${apiUrlTitle}${title}&apikey=${apiKey}`)
            .then(res => {
              console.log(res.data)
              this.setState({movie: res.data, getMovie: true, showPopup: true})
            })
    }

  render() {
    console.log('Movie Title render:', this.props.title)

    const { movie } = this.state

    return (
          <div className="movie-card"
               key={this.props.index}
               onClick={() => this.movieClick(this.props.title)}
          >
            <div className="movie-container">
              <img src={this.props.image} alt="Movie"/>
              <div className="movie-info">
                <h4>{this.props.title}</h4>
                <p>{this.props.year}</p>
              </div>
            </div>

            {this.state.getMovie ?
                <MoviePopup
                    title={movie.Title}
                    actors={movie.Actors}
                    production={movie.Production}
                    genre={movie.Genre}
                    year={movie.Year}
                /> : null}
          </div>
    )
  }
}
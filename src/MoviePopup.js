import React, { Component } from 'react'
import axios from 'axios'
import {apiKey, apiUrlTitle, apiUrlSearch} from './data'
import Popup from "reactjs-popup";

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class MoviePopup extends Component {
  constructor(props) {
    super(props)

      this.state = {
        open: false
      }
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const {title, actors, production, genre, year} = this.props

    return (
        <Popup
               defaultOpen
               // open={this.openModal}
               modal
               lockScroll={true}
               contentStyle={contentStyle}
               onClose={this.closeModal}
        >
          <div className="modal">
            <div className="header">{title}</div>
            <div className="content">
              <h3>Actors</h3>
              {actors}
              <h3>Production</h3>
              {production}
              <h3>Genre</h3>
              {genre}
              <h3>Year</h3>
              {year}
            </div>
          </div>
        </Popup>
    )
  }
}

export default MoviePopup